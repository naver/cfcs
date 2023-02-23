import { keys } from "../../core";
import { getObserver, getObservers } from "../utils";

/**
 * @hidden
 */
export function injectReactiveSubscribe(object: Record<string, any>,) {
  object["subscribe"] = function (name: string, callback: (value: any) => void) {
    this[name];
    getObserver(this, name).subscribe(callback);
  };
  object["unsubscribe"] = function (name?: string, callback?: (value: any) => void) {
    if (!name) {
      keys(getObservers(this)).forEach((observerName) => {
        this.unsubscribe(observerName);
      });
      return;
    }
    if (!(name in this)) {
      return;
    }
    getObserver(this, name).unsubscribe(callback);
  };
}


/**
 * @description `ReactiveSubscribe` is a class decorator and adds `.subscribe` and `.unsubscribe` methods.
 * @category Reactive-Decorator
 * @see Observe
 * @example
 * ```ts
import { ReactiveSubscribe, Observe } from "@cfcs/core";

@ReactiveSubscribe
class Component {
  @Observe value1 = 1;

  constructor() {
    requestAnimationFrame(() => {
      this.value1 = 2;
    });
  }
}

interface Component extends ReactiveSubscribe<{
  value1: number;
  value2: number;
}> {}

const component = new Component();

// 1
console.log(component.value1);

component.subscribe("value1", nextValue => {
  // When the change event occurs => (2, 2)
  console.log(nextValue, component.value2);
});
```
 */
export function ReactiveSubscribe(Constructor: any) {
  const prototype = Constructor.prototype;

  injectReactiveSubscribe(prototype);
}

/**
 * `ReactiveSubscribe` is a class decorator and adds `.subscribe` and `.unsubscribe` methods.
 * @category Reactive
 */
export interface ReactiveSubscribe<State extends Record<string, any>> {
  /**
   * When the value of the property changes, the callback function is called.
   */
  subscribe<Name extends keyof State = keyof State>(
    name: Name, callback: (value: State[Name]) => void): void;
  /**
   * Unregister the callback function corresponding to the property.
   */
  unsubscribe<Name extends keyof State = keyof State>(
    name?: Name, callback?: (value: State[Name]) => void): void;
}
