/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { detectDependencies, endDetectDependencies } from "./detectDependencies";
import { Observer } from "./Observer";

/**
 * @category Reactive
 * @hidden
 */
export class ComputedObserver<T> extends Observer<T> {
  private _registered: Array<Observer<any>> = [];
  /**
   * @description Creates a new computed observer from the values of other observers.
   * It is read-only and if you change the value of the observer used inside the callback, its value will be automatically updated.
   * @param _computedCallback A function for observers to be computed.
   */
  constructor(private _computedCallback: () => T) {
    super();

    this._current = this.current;
  }

  get current() {
    detectDependencies(this);
    const value = this._computedCallback();
    const results = endDetectDependencies()!;

    this._registered.forEach(observer => {
      observer.unsubscribe(this._onCheckUpdate);
    });
    results.observers.forEach(observer => {
      observer.subscribe(this._onCheckUpdate);
    });
    this._registered = results.observers;

    return value;
  }

  private _onCheckUpdate = () => {
    this._setCurrent(this.current);
  }
}
