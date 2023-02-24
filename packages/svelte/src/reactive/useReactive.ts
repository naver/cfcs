/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { ReactiveSubscribe, ReactiveAdapterParam, camelize, adaptReactive, ReactiveState } from "@cfcs/core";
import { onDestroy, onMount } from "svelte/internal";
import { writable, Writable } from "svelte/store";
import { ReactiveResult, Ref } from "./types";

/**
 * @description Instead of `bind:this`, you can bind this via the `use:` directive.
 * @category Common
 * @see Ref
 * @example
 * ```html
 * <script>
 * import { onMount } from "svelte";
 * import { useRef } from "@cfcs/svelte";
 *
 * const elementRef = useRef();
 *
 * onMount(() => {
 *   console.log(elementRef.current);
 * });
 * </script>
 * <div use:elementRef>Element</div>
 * ```
 */
export function useRef<T>(defaultValue?: T): Ref<T> {
  const refFunction = (value: T) => {
    refFunction.current = value;

    return {
      destroy() {
        return;
      },
    };
  };
  refFunction.current = defaultValue;

  return refFunction;
}

/**
 * @description In Svelte, you can create reactive components through adapters.
 * @category Reactive
 * @example
 * ```ts
 * import { useReactive } from "@cfcs/svelte";
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
  const adaptResult = adaptReactive(reactiveAdapter, props);
  const reactiveState = adaptResult.state();
  const writables: Record<string, Writable<any>> = {};
  const names = Object.keys(reactiveState);
  const methods = adaptResult.methods();

  for (const name in reactiveState) {
    writables[name] = writable(reactiveState[name]);
  }

  onMount(() => {
    adaptResult.mounted();
    const inst = adaptResult.instance();

    names.forEach(name => {
      inst.subscribe(name as any, (value: any) => {
        writables[name].set(value);
      });
    });

    adaptResult.init();
  });

  onDestroy(() => {
    adaptResult.destroy();
  });
  const reactiveEvents = adaptResult.events();
  const events = reactiveEvents.reduce((result, name) => {
    result[camelize(`on ${name as any}`)] = (callback: (...args: any[]) => void) => {
      adaptResult.on(name as any, callback as any);

      onDestroy(() => {
        adaptResult.off(name as any, callback as any);
      });
    };

    return result;
  }, {} as Record<string, any>);

  return {
    ...writables,
    ...methods,
    ...events,
  } as any;
}

