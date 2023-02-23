import React, { useEffect, useRef, useState } from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import { useReactive } from "@cfcs/react";
import { reactive } from "@cfcs/core";

const REACTIVE_ADAPTER = ({ onInit, onDestroy, getProps }) => {
  const obj = reactive({ isLoaded: false });
  const ref = getProps().ref;

  const onLoaded = () => {
    const element = ref.value || ref.current;

    obj.isLoaded = !!(element.naturalWidth && element.complete);
  };
  onInit(() => {
    const element = ref.value || ref.current;

    element?.addEventListener("load", onLoaded);
    onLoaded();
  });

  onDestroy(() => {
    const element = ref.value || ref.current;

    element?.removeEventListener("load", onLoaded);
  });
  return obj;
};

function useImageOnLoad() {
  const ref = useRef<HTMLImageElement>(null);

  return Object.assign(useReactive(REACTIVE_ADAPTER, () => ({ ref })), {
    ref,
  });
}


export function ImageOnLoadApp() {
  const { isLoaded, ref } = useImageOnLoad();
  const [src, setSrc] = useState("");
  const { withBaseUrl } = useBaseUrlUtils();

  useEffect(() => {
    const id = setTimeout(() => {
      setSrc(withBaseUrl("./tutorials/logo.png"));
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);
  return <div>
    Loaded: {isLoaded ? "loaded" : "loading..."} <br />
    <img src={src} ref={ref} />
  </div>;
}
