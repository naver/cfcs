import { isFunction, keys } from "../core";
import { Ref } from "../core/types";
import { ReactiveAdapter, ReactiveAdapterParam } from "./ReactiveAdapter";
import { ReactiveSubscribe } from "./decorators/ReactiveSubscribe";
import { ReactiveEventCallback, ReactiveState } from "./types";
import { getObservers, withReactiveMethods } from "./utils";
import Component from "@egjs/component";
import { EventKey, EventTriggerParams } from "@egjs/component/declaration/types";

/**
 * @category Reactive
 * @hidden
 */
export function adaptReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = never,
  Props = any,
  Events extends Record<string, any> = {},
>(adapter: ReactiveAdapterParam<Instance, State, Methods, Props, Events>, props?: () => Props) {
  const objectAdapter: ReactiveAdapter<Instance, State, Methods, Props, Events> = isFunction(adapter) ? {
    setup: adapter,
  } : adapter;

  function getProps(): Props {
    return props?.() ?? objectAdapter.props?.() ?? objectAdapter.data?.() ?? {} as Props;
  }

  const eventEmitter = new Component<Events>();
  const mountedHooks: Array<(props: Props, instance?: Instance | null) => Instance | void> = [];
  const initHooks: Array<(instance: Instance, props: Props) => void> = [];
  const destroyHooks: Array<(instance: Instance, props: Props) => void> = [];
  const onHooks: Array<<EventName extends EventKey<Events>>(instance: Instance, eventName: EventName, listener: ReactiveEventCallback<Events, EventName>) => void | (() => void)> = [];
  const instanceRef: Ref<Instance> = { current: null };
  let offHooksList: Array<Array<() => void>> = [];
  let initialState: State | null = null;
  let eventNames: readonly (keyof Events)[] = [];
  let methodNames: readonly Methods[] = [];


  const onMounted = (callback: (props: Props, instance?: Instance | null) => Instance | void) => {
    mountedHooks.push(callback);
  };
  const onInit = (callback: (instance: Instance, props: Props) => void) => {
    initHooks.push(callback);
  };
  const onDestroy = (callback: (instance: Instance, props: Props) => void): void => {
    destroyHooks.push(callback)
  };
  const on = (callback: <EventName extends EventKey<Events>>(instance: Instance, eventName: EventName, listener: ReactiveEventCallback<Events, EventName>) => void | (() => void)) => {
    onHooks.push(callback);
  };
  const emit = <EventName extends EventKey<Events>>(eventName: EventName, ...params: EventTriggerParams<Events, EventName>) => {
    eventEmitter.trigger(eventName, ...params);
  };

  const setInitialState = (state: State) => {
    initialState = state;
  };
  const setEvents = (events: readonly (keyof Events)[]) => {
    eventNames = events;
  }
  const setMethods = (methods: readonly Methods[]) => {
    methodNames = methods;
  }

  if (objectAdapter.setup) {
    instanceRef.current = objectAdapter.setup({
      getProps,
      setInitialState,
      setEvents,
      setMethods,
      onMounted,
      onDestroy,
      onInit,
      emit,
      on,
    }) || null;
  }

  if (objectAdapter.created) {
    instanceRef.current = objectAdapter.created(getProps()) || null;
  }

  if (objectAdapter.events) {
    setEvents(objectAdapter.events);
  }
  if (objectAdapter.state) {
    setInitialState(objectAdapter.state);
  }
  if (objectAdapter.methods) {
    setMethods(objectAdapter.methods);
  }
  if (objectAdapter.mounted) {
    onMounted(objectAdapter.mounted);
  }
  if (objectAdapter.destroy) {
    destroyHooks.push(objectAdapter.destroy);
  }
  if (objectAdapter.init) {
    initHooks.push(objectAdapter.init);
  }
  if (objectAdapter.on) {
    onHooks.push((instance, eventName, listener) => {
      const off = objectAdapter.on!(instance, eventName, listener);

      return () => {
        off && off();
        objectAdapter.off?.(instance, eventName, listener);
      };
    });
  }

  return {
    events: () => eventNames,
    state(): State {
      const inst = instanceRef.current;

      if (initialState) {
        return initialState;
      }
      if (inst) {
        const observers = getObservers(inst);

        setInitialState(keys(observers).reduce((prev, cur) => {
          prev[cur] = observers[cur].current;
          return prev;
        }, {} as any));
      }
      return initialState || {} as State;
    },
    instance() {
      return instanceRef.current;
    },
    mounted(): void {
      const props = getProps();

      mountedHooks.forEach(hook => {
        instanceRef.current = hook(props, instanceRef.current) || instanceRef.current;
      });

    },
    init(): void {
      // on events
      const instance = instanceRef.current!;
      const props = getProps();

      offHooksList = (eventNames as string[]).map(eventName => {
        const listener = (...params: any[]) => {
          (eventEmitter as any).trigger(eventName, ...params);
        };

        const instance = instanceRef.current!;

        return onHooks.map(hook => hook(instance, eventName, listener as any)).filter(Boolean) as Array<() => void>;
      });

      // init
      initHooks.forEach(hook => {
        hook(instance, props);
      });
    },
    destroy(): void {
      // off events
      offHooksList.forEach(offHooks => {
        offHooks.forEach(hook => {
          hook();
        });
      });

      // destroy
      eventEmitter.off();
      const instance = instanceRef.current!;
      const props = getProps();

      destroyHooks.forEach(hook => {
        hook(instance, props);
      });
    },
    methods() {
      return withReactiveMethods<any, any, any>(instanceRef, methodNames);
    },
    on(eventName: string, listener: ReactiveEventCallback<any, any>) {
      eventEmitter.on(eventName, listener);
    },
    off(eventName: string, listener: ReactiveEventCallback<any, any>) {
      eventEmitter.off(eventName, listener);
    },
  };
}
