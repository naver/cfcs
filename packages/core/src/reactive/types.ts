/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { ComponentEvent } from "@egjs/component";
import { Observer } from "./Observer";
import { ReactiveSubscribe } from "./decorators/ReactiveSubscribe";
import { ReactiveObject } from "./inline";

type AnyFunction = (...args: any[]) => any;
type NoArguments = undefined | null | void | never;
type EventKey<T extends Record<string, any>> = string & keyof T;
type UnknwonToAnyArray<Arr> = unknown[] extends Arr ? any[] : Arr;

/**
 * @category Reactive
 */
export type ReactiveEventCallback<
  T extends Record<string, any>,
  K extends EventKey<T>>
  = T[K] extends NoArguments
  ? () => any : T[K] extends AnyFunction
  ? T[K]
  : T[K] extends ComponentEvent<infer PROPS>
  ? (event: ComponentEvent<PROPS, K>) => any
  : (event: T[K]) => any;

/**
 * @category Reactive
 */
export type ReactiveEventParameters<
  Events extends Record<string, any>,
  EventName extends EventKey<Events>> = UnknwonToAnyArray<Parameters<ReactiveEventCallback<Events, EventName>>>;

/**
 * @category Reactive
 */
export type ReactiveMethods<Instance, Names extends keyof Instance> = {
  [key in Names]: Instance[key];
};

/**
 * @category Reactive
 */
export type ReactiveState<Instance extends ReactiveSubscribe<object>> = Instance extends ReactiveObject<infer State> | ReactiveSubscribe<infer State> ? Omit<State, "subscribe" | "unsubscribe"> : never;
