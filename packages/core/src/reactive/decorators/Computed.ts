import { COMPUTED_PATH } from "../const";
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

  if (COMPUTED_PATH in prototype) {
    prototype[COMPUTED_PATH] ||= [];
    const computedList = prototype[COMPUTED_PATH];

    if (computedList.indexOf(memberName) === -1) {
      computedList.push(memberName);
    }
  }
  Object.defineProperty(prototype, memberName, nextAttributes);

  return nextAttributes;
}
