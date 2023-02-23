import { ComputedObserver } from "./ComputedObserver";
import { Observer } from "./Observer";
import { ExtractNever, isFunction, keys } from "../core";
import { Observe } from "./decorators/Observe";
import { injectReactiveSubscribe, ReactiveSubscribe } from "./decorators/ReactiveSubscribe";
import { defineObservers, isObserver, setObserver } from "./utils";


type ConvertValue<Object extends Record<string, any>> = {
  [Key in keyof Object]: Object[Key] extends Observer<infer Type> ? Type : Object[Key];
}

type PickObverser<Object extends Record<string, any>> = ExtractNever<{
  [Key in keyof Object]: Object[Key] extends Observer<infer Type> ? Type : never;
}>;

/**
 * @typedef
 * @category Reactive
 */
export type ParitalReactiveObject<Object extends Record<string, any>>
  = ConvertValue<Object> & ReactiveSubscribe<PickObverser<Object>>;


/**
 * Result type of `reactive` function call
 * @category Reactive
 * @see reactive
 * @example
 *  ```js
 * import { reactive } from "@cfcs/core";
 *
 * // define reactive state
 * const obj = reactive({
 *   value1: 1,
 *   value2: 2,
 * });
 * ```
 */
export type ReactiveObject<Object extends Record<string, any>>
= Object & ReactiveSubscribe<Object>;

function makeReactiveObject<Object extends Record<string, any>>(
  setup: Readonly<Object> | (() => Readonly<Object>),
  all?: boolean,
): ParitalReactiveObject<Object> {
  const result = isFunction(setup) ? setup() : setup;
  const reactiveObject: Record<string, any> = {};

  defineObservers(reactiveObject);
  keys(result).forEach((name: any) => {
    const value = result[name];

    if (isObserver(value)) {
      setObserver(reactiveObject, name, value);
    } else {
      setObserver(reactiveObject, name, observe(value));
    }
    Observe(name)(reactiveObject, name);
  });

  injectReactiveSubscribe(reactiveObject);
  return reactiveObject as ParitalReactiveObject<Object>;
}

/**
 * @description Make the return value of the corresponding object or function a reactive object.
 * @category Reactive
 * @param setup - The target object or function to which reactive is applied
 * @returns Makes all values into reactive objects.
 * @example
 * ```ts
 * import { reactive } from "@cfcs/core";
 *
 * const obj = reactive({
 *  value1: 1,
 *  value2: 2,
 * });
 *
 * obj.subscribe("value1", value1 => {
 *   console.log(value1);
 * });
 * obj.value1 = 2;
 * ```
 */
export function reactive<Object extends Record<string, any>>(
  setup: Readonly<Object> | (() => Readonly<Object>),
): ReactiveObject<Object> {
  return makeReactiveObject(setup, true) as ReactiveObject<Object>;
}

/**
 * @description Make the return value of the corresponding object or function a reactive object.
 * @category Reactive
 * @param setup - The target object or function to which reactive is applied
 * @returns Only the values to which observer is applied are objects to which reactive is applied.
 * @example
 * ```ts
 * import { partialReactive, observe } from "@cfcs/core";
 *
 * const value1 = observe(1);
 * const value2 = observe(2);
 * const obj = partialReactive({
 *  value1,
 *  value2,
 * });
 *
 * obj.subscribe("value1", value1 => {
 *   console.log(value1);
 * });
 * value1.current = 2;
 * ```
 */
export function partialReactive<Object extends Record<string, any>>(
  setup: Readonly<Object> | (() => Readonly<Object>),
): ParitalReactiveObject<Object> {
  return makeReactiveObject(setup);
}

/**
 * @description Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
 * @category Reactive
 * @example
 * ```ts
 * import { observe } from "@cfcs/core";
 *
 * const ob1 = observe(1);
 *
 * ob1.subscribe(nextValue => {
 *   console.log(nextValue);
 * });
 *
 * ob1.current = 2;
 * ```
 */
export function observe<Type>(defaultValue?: Type): Observer<Type> {
  return new Observer<Type>(defaultValue);
}

/**
 * @hidden
 */
export function computed<Type>(computedCallback: () => Type) {
  return new ComputedObserver(computedCallback);
}
