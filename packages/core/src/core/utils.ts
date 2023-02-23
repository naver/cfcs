/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */


/**
 * @hidden
 */
export function keys<T extends Record<string, any>>(obj: T): Array<keyof T> {
  return Object.keys(obj);
}

/**
 * @hidden
 */
export function camelize(str: string) {
  return str.replace(/[\s-_]([a-z])/g, (all, letter) => letter.toUpperCase());
}

/**
 * @hidden
 */
export function isString(val: any): val is string {
  return typeof val === "string";
}

/**
 * @hidden
 */
export function isObject(val: any): val is object {
  return typeof val === "object";
}

/**
 * @hidden
 */
export function isFunction(val: any): val is Function {
  return typeof val === "function";
}
