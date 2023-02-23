import { EventEmitter } from "@angular/core";
import { ReactiveSubscribe, ReactiveAdapterParam, camelize, adaptReactive, ReactiveState } from "@cfcs/core";

export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Props = any,
  Events extends Record<string, any> = {},
>(self: State, reactiveAdapter: ReactiveAdapterParam<Instance, State, Methods, Props, Events>, props?: () => Props) {
  const adaptResult = adaptReactive(reactiveAdapter, props);
  const reactiveState = adaptResult.state();
  const names = Object.keys(reactiveState);
  const events = adaptResult.events();
  const methods = adaptResult.methods();

  for (const name in reactiveState) {
    (self as any)[name] = reactiveState[name];
  }
  for (const name in methods) {
    (self as any)[name] = methods[name];
  }

  events.forEach(name => {
    (self as any)[camelize(`ngx ${name as string}`)] = new EventEmitter();
  });
  let callbacks: Array<(...args: any[]) => void> = [];

  function mounted() {
    adaptResult.mounted();
    const inst = adaptResult.instance();

    names.forEach((name) => {
      inst.subscribe(name as any, (value: any) => {
        setTimeout(() => {
          (self as any)[name] = value;
        });
      });
    });

    callbacks = events.map(name => {
      const callback = (...args: any[]) => {
        ((self as any)[camelize(`ngx ${name as string}`)] as EventEmitter<any>).emit(...args);
      };
      events.forEach((name, i) => {
        adaptResult.on(name as any, callback);
      });

      return callback;
    });
    adaptResult.init();
  }
  function destroy() {
    events.forEach((name, i) => {
      adaptResult.off(name as any, callbacks[i]);
    });

    adaptResult.destroy();
  }

  return {
    mounted,
    destroy,
  };
}
