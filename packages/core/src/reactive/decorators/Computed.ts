/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { COMPUTED_PATH } from "../const";
import { computed } from "../inline";
import { getObserver, getObservers } from "../utils";


/**
 * @description `Computed` is a property decorator.
 * Changes in computed state values are also recognized according to changes in observers used within the getter function.
 * You can detect its status through `.subscribe`.
 * @hidden
 * @category Reactive-Decorator
 * @see ReactiveSubscribe
 * @example
 * ```ts
const ob1 = observe(0);
const ob2 = observe(1);

// When
@ReactiveSubscribe
class TestComputed {
  @Computed
  get ob3() {
    return ob1.current + ob2.current;
  }
}
const inst = new TestComputed();

inst.subscribe("ob3", ob3 => {
  console.log(ob3);
});

ob1.current = 1;
```
 */
export function Computed(prototype: any, memberName: string, attributes: PropertyDescriptor): PropertyDescriptor {
  const get = attributes.get!;

  function getComputed() {
    const observers = getObservers(this, true);

    if (!(memberName in observers)) {
      observers[memberName] = computed(get.bind(this));
    }
    return getObserver(this, memberName).current;
  }
  const nextAttributes: PropertyDescriptor = {
    configurable: true,
    get: getComputed,
  }

  prototype[COMPUTED_PATH] ||= [];
  const computedList = prototype[COMPUTED_PATH];

  if (computedList.indexOf(memberName) === -1) {
    computedList.push(memberName);
  }
  Object.defineProperty(prototype, memberName, nextAttributes);

  return nextAttributes;
}
