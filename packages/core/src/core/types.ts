/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */

/**
 * Reference object type
 * @category Common
 */
export interface Ref<T> {
  current?: T | undefined | null;
  value?: T | undefined | null;
}

/**
 * @hidden
 */
export type ExtractNever<T> = Pick<T, { [P in keyof T]: T[P] extends never ? never : P }[keyof T]>;
