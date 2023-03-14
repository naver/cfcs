/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { EventEmitter, NgZone, inject } from '@angular/core';
import {
  ReactiveSubscribe,
  ReactiveAdapterParam,
  camelize,
  adaptReactive,
  ReactiveState,
} from '@cfcs/core';

export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Props = any,
  Events extends Record<string, any> = {}
>(
  self: State,
  reactiveAdapter: ReactiveAdapterParam<
    Instance,
    State,
    Methods,
    Props,
    Events
  >,
  props?: () => Props,
  // The `NgZone` is an optional parameter so the implementation doesn't bring any breaking changes.
  // Required to be provided so events are dispatched within the correct execution context.
  ngZone?: NgZone
) {
  ngZone ||= tryToInjectNgZone();

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

  events.forEach((name) => {
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

    callbacks = events.map((name) => {
      const callback = (...args: any[]) => {
        const property = camelize(`ngx ${name as string}`);
        const emitter = (self as any)[property] as EventEmitter<any>;

        if (ngZone && (emitter.observed || emitter.observers.length > 0)) {
          // The `mounted()` should naturally be called outside of the Angular
          // zone, meaning all of the setups of third-party packages are done
          // w/o telling Angular that there's any asynchronous work happening or
          // going to be scheduled in the future. This means all events will be
          // triggered outside of the Angular zone too. We'd want to re-enter the
          // Angular zone only if there're any `EventEmitter` observers. Given the
          // `EventEmitter` is `ngxMyEvent = new EventEmitter()`. The `ngxMyEvent`
          // has no observers until developers set up event listeners in templates,
          // for instance, `<div myDirective (ngxMyEvent)="onMyEvent()"></div>`.
          ngZone.run(() => emitter.emit(...args));
        } else {
          emitter.emit(...args);
        }
      };

      adaptResult.on(name as any, callback);
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

function tryToInjectNgZone(): NgZone | undefined {
  try {
    // The `inject` may throw an error since its implementation differs between Angular versions
    // and the injection context where the `inject` function is being called.
    // The `useReactive` is usually called in directive or component constructors. Component constructors
    // are injection contexts by themselves.
    return inject(NgZone);
  } catch {
    return undefined;
  }
}
