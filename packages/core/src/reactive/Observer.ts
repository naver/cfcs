/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import Component from "@egjs/component";
import { getCurrentDetected } from "./detectDependencies";

interface EmitterEvents<Value> {
  update: (value: Value, prevValue: Value) => void;
}

/**
 * Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
 * @category Reactive
 * @see observe
 */
export class Observer<Value = any> {
  protected _current: Value;
  protected _emitter = new Component<EmitterEvents<Value>>();
  /**
   *
   */
  constructor(value?: Value) {
    this._current = value as any;
  }
  /**
   * return the current value.
   */
  public get current(): Value {
    const currentDetected = getCurrentDetected();

    currentDetected?.push(this);
    return this._current as Value;
  }
  public set current(value: Value) {
    this._setCurrent(value);
  }
  /**
   * When the current value changes, the callback function is called.
   */
  public subscribe(callback: (value: Value, prevValue: Value) => void) {
    this.current;
    this._emitter.on("update", callback);
    return this;
  }
  /**
   * Cancel the registered subscription through callback.
   */
  public unsubscribe(callback?: (value: Value, prevValue: Value) => void) {
    this._emitter.off("update", callback);
    return this;
  }
  protected _setCurrent(value: Value) {
    const prevValue = this._current;
    const isUpdate = value !== prevValue;

    this._current = value;

    if (isUpdate) {
      this._emitter.trigger("update", value, prevValue);
    }
  }
  /**
   * @hidden
   */
  public toString() {
    return `${this.current}`;
  }
  /**
   * @hidden
   */
  public valueOf() {
    return this.current;
  }
}
