/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { EventKey, EventTriggerParams } from "@egjs/component/declaration/types";
import { ReactiveEventCallback, ReactiveState } from "./types";
import { ReactiveSubscribe } from "./decorators/ReactiveSubscribe";

/**
 * Function type Reactive Adapter's first argument setup
 * @category Reactive
 */
export interface ReactiveSetup<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = never,
  Props = any,
  Events extends Record<string, any> = {},
> {
  /**
   * Get external props.
   */
  getProps(): Props;
  /**
   * Set the first Initial state.
   * Do not set the return value if it exists.
   */
  setInitialState(state: State): void;
  /**
   * Sets the functions to be exposed in the instance.
   */
  setMethods(methods: readonly Methods[]): void;
  /**
   * Set the events to be exposed.
   */
  setEvents(events: readonly (keyof Events)[]): void;
  /**
   * Register hooks that will occur in Mounted Lifecycle.
   */
  onMounted(callback: (props: Props, instance?: Instance | null) => Instance | void): void;
  /**
   * Register hooks to occur in Init Lifecycle.
   */
  onInit(callback: (instance: Instance, props: Props) => void): void;
  /**
   * Register hooks to occur in Destroy Lifecycle.
   */
  onDestroy(callback: (instance: Instance, props: Props) => void): void;
  /**
   * Register events defined between Mounted and Init Lifecycle.
   */
  on(callback: <EventName extends EventKey<Events>>(instance: Instance, eventName: EventName, listener: ReactiveEventCallback<Events, EventName>) => void | (() => void)): void;
  /**
   * Trigger events directly externally.
   */
  emit<EventName extends EventKey<Events>>(eventName: EventName, ...params: EventTriggerParams<Events, EventName>): void;
}

/**
 * Reactive Adapter types
 * @category Reactive
 */
export type ReactiveAdapterParam<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = never,
  Props = any,
  Events extends Record<string, any> = {},
> = ReactiveAdapter<Instance, State, Methods, Props, Events>
  | ReactiveSetupAdapter<Instance, State, Methods, Props, Events>;

/**
 * Function type Reactive Adapter
 * @category Reactive
 * @example
 * ```js
 * import { reactive } from "@cfcs/core";
 *
 * const REACTIVE_ADAPTER = () => {
 *   // define reactive state
 *   const obj = reactive({
 *    value1: 1,
 *    value2: 2,
 *   });
 *
 *   return obj;
 * };
 * ```
 */
export type ReactiveSetupAdapter<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = never,
  Props = any,
  Events extends Record<string, any> = {},
> = (setup: ReactiveSetup<Instance, State, Methods, Props, Events>) => Instance | undefined | void;

/**
 * Object type Reactive Adapter
 * @category Reactive
 */
export interface ReactiveAdapter<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = never,
  Props = any,
  Events extends Record<string, any> = {},
> {
  /**
   * Specify if you want to use the framework's state. If an instance is created through created, it can be omitted.
   */
  state?: State;
  /**
   * If you want to use an instance's method, write the method names.
   * @default []
   */
  methods?: readonly Methods[];
  /**
   * If you want to use events, write the events property and a way to register/unregister events.
   */
  events?: readonly (keyof Events)[];
  /**
   * @descriptionYou can decide which props to pass when creating/destroying instances in the framework.
   * @deprecated
   */
  data?(): Props;
  /**
   * You can decide which data to pass when creating/destroying instances in the framework.
   */
  props?(): Props;
  /**
   * You can use lifecycle hooks functions for setup.
   * You can omit created, mounted, and init.
   */
  setup?(setup: ReactiveSetup<Instance, State, Methods, Props, Events>): Instance | undefined | void;
  /**
   * Occurs when a component is created.
   * If an instance is created and returned, the state specification can be omitted.
   */
  created?(props: Props): Instance | undefined | void;
  /**
   * Occurs when a component is mounted.
   */
  mounted?(props: Props, instance?: Instance | null): Instance | undefined | void;
  /**
   * Occurs after mount, state declaration, and observation in the component.
   */
  init?(instance: Instance, props: Props): void;
  /**
   * Occurs before the component is destroyed.
   */
  destroy?(instance: Instance, props: Props): void;
  /**
   * If you want to use events, write the events property and a way to register/unregister events.
   */
  on?<EventName extends EventKey<Events>>(instance: Instance, eventName: EventName, listener: ReactiveEventCallback<Events, EventName>): void | (() => void);
  /**
   * If you want to use events, write the events property and a way to register/unregister events.
   * @deprecated
   */
  off?<EventName extends EventKey<Events>>(instance: Instance, eventName: EventName, listener: ReactiveEventCallback<Events, EventName>): void;
}
