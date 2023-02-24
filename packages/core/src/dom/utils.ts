/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { isString, Ref } from "../core";

/**
 * @hidden
 */
export function findTarget<Target extends Element = Element>(target: string | Target | Ref<Target> | null): Target | null {
  let el!: Target;

  if (!target) {
    return null;
  } if (isString(target)) {
    el = document.querySelector<Target>(target)!;
  } else if (target instanceof Element) {
    el = target;
  } else if ("value" in target || "current" in target) {
    el = target.value! || target.current!;
  }

  return el;
}

/**
 * @description Sets the name of the class method to be exposed to the outside.
 * @category DOM
 * @return Property Decorator
 * @example
 * ```ts
 * import { withClassMethods } from "@cfcs/core";
 *
 * class YourFrameworkComponent {
 *   @withClassMethod(METHOD_NAMES)
 *   inst = new YourComponent();
 * }
 * ```
 */
export function withClassMethods(methods: readonly string[]) {
  return function (prototype: any, memberName: string) {
    methods.forEach((name: string) => {
      if (name in prototype) {
        return;
      }
      prototype[name] = function (...args) {
        const result = this[memberName][name](...args);

        // fix `this` type to return your own `class` instance to the instance using the decorator.
        if (result === this[memberName]) {
          return this;
        } else {
          return result;
        }
      };
    });
  };
}
