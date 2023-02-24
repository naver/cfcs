/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { COMPUTED_PATH, OBSERVERS_PATH } from "./const";
import { Observer } from "./Observer";
import { ReactiveMethods } from "./types";
import { isObject, Ref } from "../core";
import { observe } from "./inline";
import { ReactiveSubscribe } from "./decorators/ReactiveSubscribe";

/**
 * @hidden
 */
export function withReactiveMethods<
  Instance,
  Names extends keyof Partial<Instance>,
  Return extends ReactiveMethods<Instance, Names>
>(ref: Ref<Instance>, methods?: readonly Names[]): Return {
  const obj: Record<any, any> = {};

  if (!methods) {
    return obj;
  }

  methods.forEach(name => {
    obj[name] = function (...args: any[]) {
      const current: any = ref.current || ref.value;

      return current[name](...args);
    };
  });
  return obj as Return;
}

/**
 * @hidden
 */
export function defineObservers(instance: any) {
  const observers: Record<string, Observer<any>> = {};

  Object.defineProperty(instance, OBSERVERS_PATH, {
    get() {
      return observers;
    },
  });

  return observers;
}

/**
 * @hidden
 */
export function getObservers(instance: any, isComputed?: boolean): Record<string, Observer<any>> {
  if (!instance[OBSERVERS_PATH]) {
    defineObservers(instance);
  }
  const observers = instance[OBSERVERS_PATH];

  if (!isComputed) {
    const computedList = instance?.constructor?.prototype?.[COMPUTED_PATH];

    if (computedList) {
      computedList.forEach(name => {
        if (!(name in observers) && name in instance) {
          instance[name];
        }
      });
    }
  }
  return observers;
}

/**
 * @hidden
 */
export function getObserver(instance: any, name: string, defaultValue?: any): Observer<any> {
  const observers = getObservers(instance);

  if (!observers[name]) {
    observers[name] = observe(defaultValue);
  }
  return observers[name];
}

/**
 * @hidden
 */
export function setObserver(instance: any, name: string, observer: Observer<any>) {
  const observers = getObservers(instance);

  observers[name] = observer;
}

/**
 * @description Whether that object is an observer instance
 * @category Reactive
 */
export function isObserver(val: any): val is Observer {
  return val && isObject(val) && "current" in val && "subscribe" in val && "unsubscribe" in val;
}

/**
 * @description Whether the object is reactive
 * @category Reactive
 */
export function isReactive(val: any): val is ReactiveSubscribe<any> {
  return val && !isObserver(val) && "subscribe" in val && "unsubscribe" in val;
}
