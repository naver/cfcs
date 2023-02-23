import { Writable } from "svelte/store";
import { ReactiveAdapterParam, ReactiveEventParameters, ReactiveState, ReactiveSubscribe } from "@cfcs/core";

/**
 * @typedef
 * @category Reactive
 */
export type ReactiveEvents<
  Events extends Record<string, any>
> = {
    [K in keyof Events as `on${Capitalize<string & K>}`]: (callback: ((...args: ReactiveEventParameters<Events, K & string>) => void)) => void;
  };


/**
 * Ref Function + Object type that can use `use:` directive in svelte
 * @category Common
 * @see useRef
 */
export type Ref<T> = ((value: T) => { destroy(): void }) & { current?: T };

/**
 * @typedef
 * @category Reactive
 */
export type ReactiveResult<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
> = {
  [key in keyof State]: Writable<State[key]>
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
  ? SvelteReactiveResult<Instance, State, Methods, Events> : {};


// Names using framework prefix
/**
 * @hidden
 */
export type SvelteReactiveEvents<Events extends Record<string, any>> = ReactiveEvents<Events>;
/**
 * @hidden
 */
export type SvelteReactiveResult<
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
export type SvelteReactiveAdapterResult<
  Adapter extends ReactiveAdapterParam<any, any, any, any, any>
> = ReactiveAdapterResult<Adapter>;
