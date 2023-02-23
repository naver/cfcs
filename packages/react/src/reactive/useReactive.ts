import { ReactiveSubscribe, ReactiveAdapterParam, keys, camelize, adaptReactive, ReactiveState } from "@cfcs/core";
import { useEffect, useState, useMemo, useRef } from "react";
import { ReactiveResult } from "./types";

/**
 * @description In React, you can create reactive components through adapters.
 * @category Reactive
 * @example
 * ```ts
 * import { useReactive } from "@cfcs/react";
 *
 * export function useReactiveComponent() {
 *   return useReactive(REACTIVE_ADAPTER);
 * }
 * ```
 */
export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Props = any,
  Events extends Record<string, any> = {},
>(
  reactiveAdapter: ReactiveAdapterParam<Instance, State, Methods, Props, Events>,
  props?: () => Props,
): ReactiveResult<Instance, State, Methods, Events> {
  const readRef = useRef(true);
  const adaptResult = useMemo(() => adaptReactive(reactiveAdapter, props), []);
  const reactiveState = adaptResult.state();
  const names = keys<Record<string, any>>(reactiveState);
  const [states] = useState<Record<string, {
    getter: boolean;
    value: any;
    set: (value: any) => void;
  }>>({});
  for (const name in reactiveState) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useState(() => reactiveState[name]);
    states[name] = {
      getter: false,
      set: state[1],
      value: state[0],
    };
  }


  readRef.current = true;

  const methods = useMemo(() => adaptResult.methods(), []);

  useEffect(() => {
    readRef.current = false;
  });
  useEffect(() => {
    adaptResult.mounted();

    const inst = adaptResult.instance();

    names.forEach((name) => {
      (inst as any).subscribe(name, (value: any) => {
        states[name].value = value;

        if (states[name].getter) {
          states[name].set(value);
        }
      });
    });

    adaptResult.init();
    return () => {
      adaptResult.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const result = names.reduce<any>((result, name) => {
    if (!methods[name]) {
      Object.defineProperty(result, name, {
        enumerable: true,
        get() {
          if (readRef.current) {
            states[name].getter = true;
          }
          return states[name].value;
        },
      });
    }
    return result;
  }, {});

  const reactiveEvents = adaptResult.events();

  reactiveEvents.forEach(name => {
    result[camelize(`on ${name as any}`)] = (callback: (e: any) => void, dependencies?: readonly any[]) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const listener = useMemo(() => {
        adaptResult.on(name as any, callback as any);
        return callback;
      }, dependencies);

      useEffect(() => {
        adaptResult.off(name as any, listener as any);
        adaptResult.on(name as any, listener as any);

        return () => {
          adaptResult.off(name as any, listener as any);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [listener]);
    };
  });

  keys(methods).forEach(name => {
    result[name] = methods[name];
  });
  return result;
}
