import React, { useEffect, useRef, useState } from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import { useReactive } from "@cfcs/react";
import { reactive } from "@cfcs/core";

const REACTIVE_ADAPTER = ({ onInit, onDestroy, getProps }) => {
  const obj = reactive({
    keys: [] as string[],
    isKeydown: false,
  });
  const ref = getProps().ref;

  const onKeydown = (e: KeyboardEvent) => {
    const keys = obj.keys;
    const key = e.key;

    if (keys.includes(key)) {
      return;
    }
    obj.keys = [...keys, e.key].sort((a, b) => a < b ? -1 : 1);
    obj.isKeydown = true;
  };
  const onKeyup = (e: KeyboardEvent) => {
    const keys = obj.keys;
    const key = e.key;
    const index = keys.indexOf(key);

    if (index === -1) {
      return;
    }
    keys.splice(index, 1);
    obj.keys = [...keys];
    obj.isKeydown = !!keys.length;
  };
  const onBlur = () => {
    if (!obj.keys.length) {
      return;
    }
    obj.keys = [];
    obj.isKeydown = false;
  }
  onInit(() => {
    const element = ref.value || ref.current;


    element?.addEventListener("keydown", onKeydown);
    element?.addEventListener("keyup", onKeyup);
    element?.addEventListener("keyup", onBlur);
  });

  onDestroy(() => {
    const element = ref.value || ref.current;

    element?.removeEventListener("keydown", onKeydown);
    element?.removeEventListener("keyup", onKeyup);
    element?.removeEventListener("keyup", onBlur);
  });
  return obj;
};

function useKey() {
  const ref = useRef<HTMLInputElement>(null);

  return Object.assign(useReactive(REACTIVE_ADAPTER, () => ({ ref })), {
    ref,
  });
}


export function KeyApp() {
  const {
    isKeydown,
    keys,
    ref,
  } = useKey();

  return <div>
    * isKeydown: {isKeydown ? "true" : "false"} <br />
    * selected keys: {keys.join(" + ")} <br />
    <input ref={ref} />
  </div>;
}
