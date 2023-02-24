/*
Copyright (c) 2022-present NAVER Corp.
name: @cfcs/core
license: MIT
author: NAVER Crop.
repository: https://github.com/naver/cfcs/tree/main/packages/core
version: 0.1.0
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.cfcs = factory());
})(this, (function () { 'use strict';

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  /**
   * @hidden
   */
  function keys(obj) {
    return Object.keys(obj);
  }
  /**
   * @hidden
   */

  function camelize(str) {
    return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  /**
   * @hidden
   */

  function isString(val) {
    return typeof val === "string";
  }
  /**
   * @hidden
   */

  function isObject(val) {
    return typeof val === "object";
  }
  /**
   * @hidden
   */

  function isFunction(val) {
    return typeof val === "function";
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  /**
   * @hidden
   */

  function findTarget(target) {
    var el;

    if (!target) {
      return null;
    }

    if (isString(target)) {
      el = document.querySelector(target);
    } else if (target instanceof Element) {
      el = target;
    } else if ("value" in target || "current" in target) {
      el = target.value || target.current;
    }

    return el;
  }
  /**
   * @description Sets the name of the class method to be exposed to the outside.
   * @category DOM
   * @return Property Decorator
   * @example
   * ```ts
   * import { withClassMethods } from "@cfcs/core";
   *
   * class YourFrameworkComponent {
   *   @withClassMethod(METHOD_NAMES)
   *   inst = new YourComponent();
   * }
   * ```
   */

  function withClassMethods(methods) {
    return function (prototype, memberName) {
      methods.forEach(function (name) {
        if (name in prototype) {
          return;
        }

        prototype[name] = function () {
          var _a;

          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var result = (_a = this[memberName])[name].apply(_a, args); // fix `this` type to return your own `class` instance to the instance using the decorator.


          if (result === this[memberName]) {
            return this;
          } else {
            return result;
          }
        };
      });
    };
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  var OBSERVERS_PATH = "__observers__";
  var COMPUTED_PATH = "__computed__";
  var CFCS_DETECTED_DEPENDENCIES_VERSION = 1;
  var CFCS_DETECTED_DEPENDENCIES = "__CFCS_DETECTED_DEPENDENCIES__";

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  function getDetectedStack() {
    // Version issues do not occur when you access the native object in the global.
    Object[CFCS_DETECTED_DEPENDENCIES] = Object[CFCS_DETECTED_DEPENDENCIES] || {};
    var versionList = Object[CFCS_DETECTED_DEPENDENCIES];
    versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] = versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] || [];
    return versionList[CFCS_DETECTED_DEPENDENCIES_VERSION];
  }
  function getCurrentDetected() {
    var stack = getDetectedStack();
    return stack[stack.length - 1];
  }
  function detectDependencies(host) {
    var stack = getDetectedStack();
    var observers = [];
    var detected = {
      host: host,
      observers: observers,
      push: function (observer) {
        if (host !== observer && observers.indexOf(observer) === -1) {
          observers.push(observer);
        }
      }
    };
    stack.push(detected);
    return detected;
  }
  function endDetectDependencies() {
    var stack = getDetectedStack();
    return stack.pop();
  }

  /*
  Copyright (c) NAVER Corp.
  name: @egjs/component
  license: MIT
  author: NAVER Corp.
  repository: https://github.com/naver/egjs-component
  version: 3.0.4
  */
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  }

  /*
   * Copyright (c) 2015 NAVER Corp.
   * egjs projects are licensed under the MIT license
   */
  var isUndefined = function (value) {
    return typeof value === "undefined";
  };

  // This class name is not matched to file name intentionally
  /**
   * Event class to provide additional properties
   * @ko Component에서 추가적인 프로퍼티를 제공하는 이벤트 클래스
   */
  var ComponentEvent = /*#__PURE__*/function () {
    /**
     * Create a new instance of ComponentEvent.
     * @ko ComponentEvent의 새로운 인스턴스를 생성한다.
     * @param eventType The name of the event.<ko>이벤트 이름.</ko>
     * @param props An object that contains additional event properties.<ko>추가적인 이벤트 프로퍼티 오브젝트.</ko>
     */
    function ComponentEvent(eventType, props) {
      var e_1, _a;
      this._canceled = false;
      if (props) {
        try {
          for (var _b = __values(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            this[key] = props[key];
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      this.eventType = eventType;
    }
    /**
     * Stop the event. {@link ComponentEvent#isCanceled} will return `true` after.
     * @ko 이벤트를 중단한다. 이후 {@link ComponentEvent#isCanceled}가 `true`를 반환한다.
     */
    var __proto = ComponentEvent.prototype;
    __proto.stop = function () {
      this._canceled = true;
    };
    /**
     * Returns a boolean value that indicates whether {@link ComponentEvent#stop} is called before.
     * @ko {@link ComponentEvent#stop}이 호출되었는지 여부를 반환한다.
     * @return {boolean} A boolean value that indicates whether {@link ComponentEvent#stop} is called before.<ko>이전에 {@link ComponentEvent#stop}이 불려졌는지 여부를 반환한다.</ko>
     */
    __proto.isCanceled = function () {
      return this._canceled;
    };
    return ComponentEvent;
  }();

  /**
   * A class used to manage events in a component
   * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
   */
  var Component = /*#__PURE__*/function () {
    /**
     * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
     */
    function Component() {
      this._eventHandler = {};
    }
    /**
     * Trigger a custom event.
     * @ko 커스텀 이벤트를 발생시킨다
     * @param {string | ComponentEvent} event The name of the custom event to be triggered or an instance of the ComponentEvent<ko>발생할 커스텀 이벤트의 이름 또는 ComponentEvent의 인스턴스</ko>
     * @param {any[]} params Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
     * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   beforeHi: ComponentEvent<{ foo: number; bar: string }>;
     *   hi: { foo: { a: number; b: boolean } };
     *   someEvent: (foo: number, bar: string) => void;
     *   someOtherEvent: void; // When there's no event argument
     * }> {
     *   some(){
     *     if(this.trigger("beforeHi")){ // When event call to stop return false.
     *       this.trigger("hi");// fire hi event.
     *     }
     *   }
     * }
     *
     * const some = new Some();
     * some.on("beforeHi", e => {
     *   if(condition){
     *     e.stop(); // When event call to stop, `hi` event not call.
     *   }
     *   // `currentTarget` is component instance.
     *   console.log(some === e.currentTarget); // true
     *
     *   typeof e.foo; // number
     *   typeof e.bar; // string
     * });
     * some.on("hi", e => {
     *   typeof e.foo.b; // boolean
     * });
     * // If you want to more know event design. You can see article.
     * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
     * ```
     */
    var __proto = Component.prototype;
    __proto.trigger = function (event) {
      var params = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
      }
      var eventName = event instanceof ComponentEvent ? event.eventType : event;
      var handlers = __spread(this._eventHandler[eventName] || []);
      if (handlers.length <= 0) {
        return this;
      }
      if (event instanceof ComponentEvent) {
        event.currentTarget = this;
        handlers.forEach(function (handler) {
          handler(event);
        });
      } else {
        handlers.forEach(function (handler) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          handler.apply(void 0, __spread(params));
        });
      }
      return this;
    };
    /**
     * Executed event just one time.
     * @ko 이벤트가 한번만 실행된다.
     * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
     * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
     * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: ComponentEvent;
     * }> {
     *   hi() {
     *     alert("hi");
     *   }
     *   thing() {
     *     this.once("hi", this.hi);
     *   }
     * }
     *
     * var some = new Some();
     * some.thing();
     * some.trigger(new ComponentEvent("hi"));
     * // fire alert("hi");
     * some.trigger(new ComponentEvent("hi"));
     * // Nothing happens
     * ```
     */
    __proto.once = function (eventName, handlerToAttach) {
      var _this = this;
      if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
        var eventHash = eventName;
        for (var key in eventHash) {
          this.once(key, eventHash[key]);
        }
        return this;
      } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
        var listener_1 = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          handlerToAttach.apply(void 0, __spread(args));
          _this.off(eventName, listener_1);
        };
        this.on(eventName, listener_1);
      }
      return this;
    };
    /**
     * Checks whether an event has been attached to a component.
     * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
     * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
     * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
     * @example
     * ```ts
     * import Component from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: void;
     * }> {
     *   some() {
     *     this.hasOn("hi");// check hi event.
     *   }
     * }
     * ```
     */
    __proto.hasOn = function (eventName) {
      return !!this._eventHandler[eventName];
    };
    /**
     * Attaches an event to a component.
     * @ko 컴포넌트에 이벤트를 등록한다.
     * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
     * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
     * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: void;
     * }> {
     *   hi() {
     *     console.log("hi");
     *   }
     *   some() {
     *     this.on("hi",this.hi); //attach event
     *   }
     * }
     * ```
     */
    __proto.on = function (eventName, handlerToAttach) {
      if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
        var eventHash = eventName;
        for (var name in eventHash) {
          this.on(name, eventHash[name]);
        }
        return this;
      } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
        var handlerList = this._eventHandler[eventName];
        if (isUndefined(handlerList)) {
          this._eventHandler[eventName] = [];
          handlerList = this._eventHandler[eventName];
        }
        handlerList.push(handlerToAttach);
      }
      return this;
    };
    /**
     * Detaches an event from the component.<br/>If the `eventName` is not given this will detach all event handlers attached.<br/>If the `handlerToDetach` is not given, this will detach all event handlers for `eventName`.
     * @ko 컴포넌트에 등록된 이벤트를 해제한다.<br/>`eventName`이 주어지지 않았을 경우 모든 이벤트 핸들러를 제거한다.<br/>`handlerToAttach`가 주어지지 않았을 경우 `eventName`에 해당하는 모든 이벤트 핸들러를 제거한다.
     * @param {string?} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
     * @param {function?} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
     * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: void;
     * }> {
     *   hi() {
     *     console.log("hi");
     *   }
     *   some() {
     *     this.off("hi",this.hi); //detach event
     *   }
     * }
     * ```
     */
    __proto.off = function (eventName, handlerToDetach) {
      var e_1, _a;
      // Detach all event handlers.
      if (isUndefined(eventName)) {
        this._eventHandler = {};
        return this;
      }
      // Detach all handlers for eventname or detach event handlers by object.
      if (isUndefined(handlerToDetach)) {
        if (typeof eventName === "string") {
          delete this._eventHandler[eventName];
          return this;
        } else {
          var eventHash = eventName;
          for (var name in eventHash) {
            this.off(name, eventHash[name]);
          }
          return this;
        }
      }
      // Detach single event handler
      var handlerList = this._eventHandler[eventName];
      if (handlerList) {
        var idx = 0;
        try {
          for (var handlerList_1 = __values(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
            var handlerFunction = handlerList_1_1.value;
            if (handlerFunction === handlerToDetach) {
              handlerList.splice(idx, 1);
              if (handlerList.length <= 0) {
                delete this._eventHandler[eventName];
              }
              break;
            }
            idx++;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      return this;
    };
    /**
     * Version info string
     * @ko 버전정보 문자열
     * @name VERSION
     * @static
     * @example
     * Component.VERSION;  // ex) 3.0.0
     * @memberof Component
     */
    Component.VERSION = "3.0.4";
    return Component;
  }();

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  /**
   * Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
   * @category Reactive
   * @see observe
   */

  var Observer =
  /*#__PURE__*/
  function () {
    /**
     *
     */
    function Observer(value) {
      this._emitter = new Component();
      this._current = value;
    }

    var __proto = Observer.prototype;
    Object.defineProperty(__proto, "current", {
      /**
       * return the current value.
       */
      get: function () {
        var currentDetected = getCurrentDetected();
        currentDetected === null || currentDetected === void 0 ? void 0 : currentDetected.push(this);
        return this._current;
      },
      set: function (value) {
        this._setCurrent(value);
      },
      enumerable: false,
      configurable: true
    });
    /**
     * When the current value changes, the callback function is called.
     */

    __proto.subscribe = function (callback) {
      this.current;

      this._emitter.on("update", callback);

      return this;
    };
    /**
     * Cancel the registered subscription through callback.
     */


    __proto.unsubscribe = function (callback) {
      this._emitter.off("update", callback);

      return this;
    };

    __proto._setCurrent = function (value) {
      var prevValue = this._current;
      var isUpdate = value !== prevValue;
      this._current = value;

      if (isUpdate) {
        this._emitter.trigger("update", value, prevValue);
      }
    };
    /**
     * @hidden
     */


    __proto.toString = function () {
      return "".concat(this.current);
    };
    /**
     * @hidden
     */


    __proto.valueOf = function () {
      return this.current;
    };

    return Observer;
  }();

  /**
   * @category Reactive
   * @hidden
   */

  var ComputedObserver =
  /*#__PURE__*/
  function (_super) {
    __extends(ComputedObserver, _super);
    /**
     * @description Creates a new computed observer from the values of other observers.
     * It is read-only and if you change the value of the observer used inside the callback, its value will be automatically updated.
     * @param _computedCallback A function for observers to be computed.
     */


    function ComputedObserver(_computedCallback) {
      var _this = _super.call(this) || this;

      _this._computedCallback = _computedCallback;
      _this._registered = [];

      _this._onCheckUpdate = function () {
        _this._setCurrent(_this.current);
      };

      _this._current = _this.current;
      return _this;
    }

    var __proto = ComputedObserver.prototype;
    Object.defineProperty(__proto, "current", {
      get: function () {
        var _this = this;

        detectDependencies(this);

        var value = this._computedCallback();

        var results = endDetectDependencies();

        this._registered.forEach(function (observer) {
          observer.unsubscribe(_this._onCheckUpdate);
        });

        results.observers.forEach(function (observer) {
          observer.subscribe(_this._onCheckUpdate);
        });
        this._registered = results.observers;
        return value;
      },
      enumerable: false,
      configurable: true
    });
    return ComputedObserver;
  }(Observer);

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  function injectObserve(prototype, memberName, publicName) {
    if (publicName === void 0) {
      publicName = memberName;
    }

    var nextAttributes = {
      configurable: true,
      get: function () {
        return getObserver(this, publicName).current;
      },
      set: function (value) {
        getObserver(this, publicName, value).current = value;
      }
    };
    Object.defineProperty(prototype, memberName, nextAttributes);

    if (publicName !== memberName) {
      Object.defineProperty(prototype, publicName, {
        configurable: true,
        get: function () {
          return getObserver(this, publicName).current;
        }
      });
    }
  }
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


  function Observe() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (args.length > 1) {
      return injectObserve(args[0], args[1]);
    }

    return function (prototype, memberName) {
      return injectObserve(prototype, memberName, args[0]);
    };
  }
  /**
   * @hidden
   */

  function Reactive() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return Observe.apply(void 0, args);
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  /**
   * @hidden
   */

  function injectReactiveSubscribe(object) {
    object["subscribe"] = function (name, callback) {
      this[name];
      getObserver(this, name).subscribe(callback);
    };

    object["unsubscribe"] = function (name, callback) {
      var _this = this;

      if (!name) {
        keys(getObservers(this)).forEach(function (observerName) {
          _this.unsubscribe(observerName);
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

  function ReactiveSubscribe(Constructor) {
    var prototype = Constructor.prototype;
    injectReactiveSubscribe(prototype);
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  function makeReactiveObject(setup, all) {
    var result = isFunction(setup) ? setup() : setup;
    var reactiveObject = {};
    defineObservers(reactiveObject);
    keys(result).forEach(function (name) {
      var value = result[name];

      if (isObserver(value)) {
        setObserver(reactiveObject, name, value);
      } else {
        setObserver(reactiveObject, name, observe(value));
      }

      Observe(name)(reactiveObject, name);
    });
    injectReactiveSubscribe(reactiveObject);
    return reactiveObject;
  }
  /**
   * @description Make the return value of the corresponding object or function a reactive object.
   * @category Reactive
   * @param setup - The target object or function to which reactive is applied
   * @returns Makes all values into reactive objects.
   * @example
   * ```ts
   * import { reactive } from "@cfcs/core";
   *
   * const obj = reactive({
   *  value1: 1,
   *  value2: 2,
   * });
   *
   * obj.subscribe("value1", value1 => {
   *   console.log(value1);
   * });
   * obj.value1 = 2;
   * ```
   */


  function reactive(setup) {
    return makeReactiveObject(setup);
  }
  /**
   * @description Make the return value of the corresponding object or function a reactive object.
   * @category Reactive
   * @param setup - The target object or function to which reactive is applied
   * @returns Only the values to which observer is applied are objects to which reactive is applied.
   * @example
   * ```ts
   * import { partialReactive, observe } from "@cfcs/core";
   *
   * const value1 = observe(1);
   * const value2 = observe(2);
   * const obj = partialReactive({
   *  value1,
   *  value2,
   * });
   *
   * obj.subscribe("value1", value1 => {
   *   console.log(value1);
   * });
   * value1.current = 2;
   * ```
   */

  function partialReactive(setup) {
    return makeReactiveObject(setup);
  }
  /**
   * @description Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
   * @category Reactive
   * @example
   * ```ts
   * import { observe } from "@cfcs/core";
   *
   * const ob1 = observe(1);
   *
   * ob1.subscribe(nextValue => {
   *   console.log(nextValue);
   * });
   *
   * ob1.current = 2;
   * ```
   */

  function observe(defaultValue) {
    return new Observer(defaultValue);
  }
  /**
   * @hidden
   */

  function computed(computedCallback) {
    return new ComputedObserver(computedCallback);
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  /**
   * @hidden
   */

  function withReactiveMethods(ref, methods) {
    var obj = {};

    if (!methods) {
      return obj;
    }

    methods.forEach(function (name) {
      obj[name] = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var current = ref.current || ref.value;
        return current[name].apply(current, args);
      };
    });
    return obj;
  }
  /**
   * @hidden
   */

  function defineObservers(instance) {
    var observers = {};
    Object.defineProperty(instance, OBSERVERS_PATH, {
      get: function () {
        return observers;
      }
    });
    return observers;
  }
  /**
   * @hidden
   */

  function getObservers(instance, isComputed) {
    var _a, _b;

    if (!instance[OBSERVERS_PATH]) {
      defineObservers(instance);
    }

    var observers = instance[OBSERVERS_PATH];

    if (!isComputed) {
      var computedList = (_b = (_a = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b[COMPUTED_PATH];

      if (computedList) {
        computedList.forEach(function (name) {
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

  function getObserver(instance, name, defaultValue) {
    var observers = getObservers(instance);

    if (!observers[name]) {
      observers[name] = observe(defaultValue);
    }

    return observers[name];
  }
  /**
   * @hidden
   */

  function setObserver(instance, name, observer) {
    var observers = getObservers(instance);
    observers[name] = observer;
  }
  /**
   * @description Whether that object is an observer instance
   * @category Reactive
   */

  function isObserver(val) {
    return val && isObject(val) && "current" in val && "subscribe" in val && "unsubscribe" in val;
  }
  /**
   * @description Whether the object is reactive
   * @category Reactive
   */

  function isReactive(val) {
    return val && !isObserver(val) && "subscribe" in val && "unsubscribe" in val;
  }

  /**
   * @category Reactive
   * @hidden
   */

  function adaptReactive(adapter, props) {
    var objectAdapter = isFunction(adapter) ? {
      setup: adapter
    } : adapter;

    function getProps() {
      var _a, _b, _c, _d, _e;

      return (_e = (_c = (_a = props === null || props === void 0 ? void 0 : props()) !== null && _a !== void 0 ? _a : (_b = objectAdapter.props) === null || _b === void 0 ? void 0 : _b.call(objectAdapter)) !== null && _c !== void 0 ? _c : (_d = objectAdapter.data) === null || _d === void 0 ? void 0 : _d.call(objectAdapter)) !== null && _e !== void 0 ? _e : {};
    }

    var eventEmitter = new Component();
    var mountedHooks = [];
    var initHooks = [];
    var destroyHooks = [];
    var onHooks = [];
    var instanceRef = {
      current: null
    };
    var offHooksList = [];
    var initialState = null;
    var eventNames = [];
    var methodNames = [];

    var onMounted = function (callback) {
      mountedHooks.push(callback);
    };

    var onInit = function (callback) {
      initHooks.push(callback);
    };

    var onDestroy = function (callback) {
      destroyHooks.push(callback);
    };

    var on = function (callback) {
      onHooks.push(callback);
    };

    var emit = function (eventName) {
      var params = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
      }

      eventEmitter.trigger.apply(eventEmitter, __spreadArray([eventName], params, false));
    };

    var setInitialState = function (state) {
      initialState = state;
    };

    var setEvents = function (events) {
      eventNames = events;
    };

    var setMethods = function (methods) {
      methodNames = methods;
    };

    if (objectAdapter.setup) {
      instanceRef.current = objectAdapter.setup({
        getProps: getProps,
        setInitialState: setInitialState,
        setEvents: setEvents,
        setMethods: setMethods,
        onMounted: onMounted,
        onDestroy: onDestroy,
        onInit: onInit,
        emit: emit,
        on: on
      }) || null;
    }

    if (objectAdapter.created) {
      instanceRef.current = objectAdapter.created(getProps()) || null;
    }

    if (objectAdapter.events) {
      setEvents(objectAdapter.events);
    }

    if (objectAdapter.state) {
      setInitialState(objectAdapter.state);
    }

    if (objectAdapter.methods) {
      setMethods(objectAdapter.methods);
    }

    if (objectAdapter.mounted) {
      onMounted(objectAdapter.mounted);
    }

    if (objectAdapter.destroy) {
      destroyHooks.push(objectAdapter.destroy);
    }

    if (objectAdapter.init) {
      initHooks.push(objectAdapter.init);
    }

    if (objectAdapter.on) {
      onHooks.push(function (instance, eventName, listener) {
        var off = objectAdapter.on(instance, eventName, listener);
        return function () {
          var _a;

          off && off();
          (_a = objectAdapter.off) === null || _a === void 0 ? void 0 : _a.call(objectAdapter, instance, eventName, listener);
        };
      });
    }

    return {
      events: function () {
        return eventNames;
      },
      state: function () {
        var inst = instanceRef.current;

        if (initialState) {
          return initialState;
        }

        if (inst) {
          var observers_1 = getObservers(inst);
          setInitialState(keys(observers_1).reduce(function (prev, cur) {
            prev[cur] = observers_1[cur].current;
            return prev;
          }, {}));
        }

        return initialState || {};
      },
      instance: function () {
        return instanceRef.current;
      },
      mounted: function () {
        var props = getProps();
        mountedHooks.forEach(function (hook) {
          instanceRef.current = hook(props, instanceRef.current) || instanceRef.current;
        });
      },
      init: function () {
        // on events
        var instance = instanceRef.current;
        var props = getProps();
        offHooksList = eventNames.map(function (eventName) {
          var listener = function () {
            var _a;

            var params = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              params[_i] = arguments[_i];
            }

            (_a = eventEmitter).trigger.apply(_a, __spreadArray([eventName], params, false));
          };

          var instance = instanceRef.current;
          return onHooks.map(function (hook) {
            return hook(instance, eventName, listener);
          }).filter(Boolean);
        }); // init

        initHooks.forEach(function (hook) {
          hook(instance, props);
        });
      },
      destroy: function () {
        // off events
        offHooksList.forEach(function (offHooks) {
          offHooks.forEach(function (hook) {
            hook();
          });
        }); // destroy

        eventEmitter.off();
        var instance = instanceRef.current;
        var props = getProps();
        destroyHooks.forEach(function (hook) {
          hook(instance, props);
        });
      },
      methods: function () {
        return withReactiveMethods(instanceRef, methodNames);
      },
      on: function (eventName, listener) {
        eventEmitter.on(eventName, listener);
      },
      off: function (eventName, listener) {
        eventEmitter.off(eventName, listener);
      }
    };
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
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

  function Computed(prototype, memberName, attributes) {
    var get = attributes.get;

    function getComputed() {
      var observers = getObservers(this, true);

      if (!(memberName in observers)) {
        observers[memberName] = computed(get.bind(this));
      }

      return getObserver(this, memberName).current;
    }

    var nextAttributes = {
      configurable: true,
      get: getComputed
    };
    prototype[COMPUTED_PATH] || (prototype[COMPUTED_PATH] = []);
    var computedList = prototype[COMPUTED_PATH];

    if (computedList.indexOf(memberName) === -1) {
      computedList.push(memberName);
    }

    Object.defineProperty(prototype, memberName, nextAttributes);
    return nextAttributes;
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  var modules = {
    __proto__: null,
    keys: keys,
    camelize: camelize,
    isString: isString,
    isObject: isObject,
    isFunction: isFunction,
    findTarget: findTarget,
    withClassMethods: withClassMethods,
    withReactiveMethods: withReactiveMethods,
    defineObservers: defineObservers,
    getObservers: getObservers,
    getObserver: getObserver,
    setObserver: setObserver,
    isObserver: isObserver,
    isReactive: isReactive,
    Observer: Observer,
    ComputedObserver: ComputedObserver,
    reactive: reactive,
    partialReactive: partialReactive,
    observe: observe,
    computed: computed,
    adaptReactive: adaptReactive,
    Observe: Observe,
    Reactive: Reactive,
    Computed: Computed,
    injectReactiveSubscribe: injectReactiveSubscribe,
    ReactiveSubscribe: ReactiveSubscribe
  };

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  return modules;

}));
//# sourceMappingURL=cfcs.js.map
