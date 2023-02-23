import { getObserver } from "../utils";


function injectObserve(prototype: any, memberName: string, publicName = memberName) {
  const nextAttributes: PropertyDescriptor = {
    configurable: true,
    get: function () {
      return getObserver(this, publicName).current;
    },
    set: function (value: any) {
      getObserver(this, publicName, value).current = value;
    },
  };
  Object.defineProperty(prototype, memberName, nextAttributes);
  if (publicName !== memberName) {
    Object.defineProperty(prototype, publicName, {
      configurable: true,
      get: function () {
        return getObserver(this, publicName).current;
      },
    });
  }
}

export function Observe(protoype: any, memberName: string): void;
export function Observe(name?: string): (protoype: any, memberName: string) => void;
/**
 * @description `Observe` is a property decorator and converts the property into a `reactive state`. You can detect its status through `.subscribe`.
 * @category Reactive-Decorator
 * @see ReactiveSubscribe
 * @example
* ```ts
import { ReactiveSubscribe, Observe } from "@cfcs/core";

@ReactiveSubscribe
class Component {
  // The public name and state name are the same.
  @Observe value1 = 1;
  // If you want to set public name and private properties separately
  @Observe("value2") _value2 = 1;

  constructor() {
    requestAnimationFrame(() => {
      this.value1 = 2;
    });
  }
}
interface C
```
 */
export function Observe(...args: any[]) {
  if (args.length > 1) {
    return injectObserve(args[0], args[1]);
  }

  return (prototype: any, memberName: string) => injectObserve(prototype, memberName, args[0]);
}


export function Reactive(protoype: any, memberName: string): void;
export function Reactive(name?: string): (protoype: any, memberName: string) => void;
/**
 * @hidden
 */
export function Reactive(...args: any[]) {
  return Observe(...args);
}

