import { ReactiveAdapter, ReactiveEventParameters, ReactiveState, ReactiveSubscribe } from "@cfcs/core";

/**
 * @category Reactive
 */
export type ReactiveEvents<
  Events extends Record<string, any>
> = {
    [key in keyof Events as `on${Capitalize<string & key>}`]: (effect: ((...args: ReactiveEventParameters<Events, key & string>) => void), deps?: readonly any[]) => void;
  };

/**
 * @category Reactive
 */
export type ReactiveResult<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
> = State & { [key in Methods]: Instance[key] } & ReactiveEvents<Events>;

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
  Adapter extends ReactiveAdapter<any, any, any, any, any>,
>
  = Adapter extends ReactiveAdapter<infer Instance, infer State, infer Methods, any, infer Events>
  ? ReactiveResult<Instance, State, Methods, Events> : {};



// Names using framework prefix
/**
 * @category Reactive
 * @hidden
 */
export type ReactReactiveEvents<Events extends Record<string, any>> = ReactiveEvents<Events>;
/**
 * @category Reactive
 * @hidden
 */
export type ReactReactiveResult<
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
 * @category Reactive
 * @hidden
 */
export type ReactReactiveAdapterResult<
  Adapter extends ReactiveAdapter<any, any, any, any, any>
> = ReactiveAdapterResult<Adapter>;
