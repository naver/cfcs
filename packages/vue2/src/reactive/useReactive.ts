import {
  ReactiveAdapterParam,
  ReactiveSubscribe,
  camelize,
  adaptReactive,
  ReactiveState,
} from "@cfcs/core";
import { onMounted, onUnmounted, Ref, ref } from "@vue/composition-api";
import { reactive } from "vue";
import { ReactiveLegacyResult, ReactiveResult } from "./types";

/**
 * @description In Vue 2, you can create reactive components through adapters.
 * @category Reactive
 * @example
 * ```ts
 * import { useReactive } from "@cfcs/vue2";
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
  const names = Object.keys(reactiveState);
  const refs: Record<string, Ref<any>> = {};
  for (const name in reactiveState) {
    refs[name] = ref(reactiveState[name]);
  }
  const methods = adaptResult.methods();

  onMounted(() => {
    adaptResult.mounted();

    const inst = adaptResult.instance();

    names.forEach(name => {
      inst.subscribe(name as any, (value: any) => {
        refs[name].value = value;
      });
    });

    adaptResult.init();
  });

  onUnmounted(() => {
    adaptResult.destroy();
  });

  const reactiveEvents = adaptResult.events();
  const events = reactiveEvents.reduce((eventResult, name) => {
    eventResult[camelize(`on ${name as any}`)] = (callback: (...args: any[]) => void) => {
      adaptResult.on(name as any, callback as any);

      onUnmounted(() => {
        adaptResult.off(name as any, callback as any);
      });
    };

    return eventResult;
  }, {} as Record<string, any>);

  return {
    ...refs,
    ...methods,
    ...events,
  } as any;
}

/**
 * @hidden
 */
export function useLegacyReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Props = any,
  Events extends Record<string, any> = {},
>(
  reactiveAdapter: ReactiveAdapterParam<Instance, State, Methods, Props, Events>,
  props?: () => Props,
): ReactiveLegacyResult<Instance, State, Methods, Events> {
  const adaptResult = adaptReactive(reactiveAdapter, props);
  const reactiveState = adaptResult.state();
  const names = Object.keys(reactiveState);
  let result!: Record<string, any>;

  const methods = adaptResult.methods();

  onMounted(() => {
    adaptResult.mounted();

    const inst = adaptResult.instance();

    names.forEach(name => {
      inst.subscribe(name as any, (value: any) => {
        result[name] = value;
      });
    });

    adaptResult.init();
  });

  onUnmounted(() => {
    adaptResult.destroy();
  });

  const reactiveEvents = adaptResult.events();
  const events = reactiveEvents.reduce((eventResult, name) => {
    eventResult[camelize(`on ${name as any}`)] = (callback: (...args: any[]) => void) => {
      adaptResult.on(name as any, callback as any);

      onUnmounted(() => {
        adaptResult.off(name as any, callback as any);
      });
    };

    return eventResult;
  }, {} as Record<string, any>);

  result = reactive({
    ...reactiveState,
    ...methods,
    ...events,
  });


  return result as any;
}
