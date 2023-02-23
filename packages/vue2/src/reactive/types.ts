import { ReactiveAdapterParam, ReactiveEventParameters, ReactiveState, ReactiveSubscribe } from "@cfcs/core";
import { Ref } from "@vue/composition-api";

/**
 * @category Reactive
 */
export type ReactiveEvents<
  Events extends Record<string, any>
> = {
    [K in keyof Events as `on${Capitalize<string & K>}`]: (callback: ((...args: ReactiveEventParameters<Events, K & string>) => void)) => void;
  };

/**
 * @category Reactive
 */
export type ReactiveResult<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
> = {
  [key in keyof State]: Ref<State[key]>
} & {
    [key in Methods]: Instance[key]
  } & ReactiveEvents<Events>;

/**
 * Get the result type of reactive component through adapter.
 * @category Reactive
 * @see useReactive
 * @example
 * ```ts
 * import { ReactiveAdapterResult } from "@cfcs/react";
 *
 * type ReactiveComponentResult = ReactiveAdapterResult<typeof REACTIVE_ADAPTER>;
 * ```
 */
export type ReactiveAdapterResult<
  Adapter extends ReactiveAdapterParam<any, any, any, any, any>,
>
  = Adapter extends ReactiveAdapterParam<infer Instance, infer State, infer Methods, any, infer Events>
  ? ReactiveResult<Instance, State, Methods, Events> : {};



/**
 * @category Reactive
 * @hidden
 */
export type ReactiveLegacyAdapterResult<
  Adapter extends ReactiveAdapterParam<any, any, any, any, any>,
>
  = Adapter extends ReactiveAdapterParam<infer Instance, infer State, infer Methods, any, infer Events>
  ? ReactiveLegacyResult<Instance, State, Methods, Events> : {};

/**
 * @category Reactive
 * @hidden
 */
export type ReactiveLegacyResult<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
> = State & {
  [key in Methods]: Instance[key]
} & ReactiveEvents<Events>;

// Names using framework prefix

/**
 * @category Reactive
 * @hidden
 */
export type VueReactiveEvents<Events extends Record<string, any>> = ReactiveEvents<Events>;

/**
 * @category Reactive
 * @hidden
 */
export type VueReactiveResult<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
> = ReactiveResult<
  Instance,
  State,
  Methods,
  Events
>;

/**
 * @hidden
 */
export type VueReactiveAdapterResult<
  Adapter extends ReactiveAdapterParam<any, any, any, any, any>
> = ReactiveAdapterResult<Adapter>;

