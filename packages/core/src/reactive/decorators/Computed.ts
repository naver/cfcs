import { computed } from "../inline";
import { getObserver, getObservers } from "../utils";


/**
 * @hidden
 */
export function Computed(prototype: any, memberName: string, attributes: PropertyDescriptor): PropertyDescriptor {
  const get = attributes.get!;
  function getComputed() {
    const observers = getObservers(this);

    if (!(memberName in observers)) {
      observers[memberName] = computed(get.bind(this));
    }
    return getObserver(this, memberName).current;
  }
  const nextAttributes: PropertyDescriptor = {
    configurable: true,
    get: getComputed,
  }

  Object.defineProperty(prototype, memberName, nextAttributes);

  return nextAttributes;
}
