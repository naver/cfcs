import React, { useEffect, useRef, useState } from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import { useReactive } from "@cfcs/react";
import { reactive } from "@cfcs/core";

const REACTIVE_ADAPTER = ({ onInit, onDestroy, getProps }) => {
  const obj = reactive({
    scrollPos: 0,
    isReachStart: false,
    isReachEnd: false,
  });
  const ref = getProps().ref;

  const onScroll = () => {
    const element = ref.value || ref.current;
    const scrollLeft = element.scrollLeft;
    obj.scrollPos = scrollLeft;
    obj.isReachStart = scrollLeft === 0;
    obj.isReachEnd = scrollLeft === element.scrollWidth - element.clientWidth;
  };
  onInit(() => {
    const element = ref.value || ref.current;

    element?.addEventListener("scroll", onScroll);
    onScroll();
  });

  onDestroy(() => {
    const element = ref.value || ref.current;

    element?.removeEventListener("scroll", onScroll);
  });
  return obj;
};

function useScroll() {
  const ref = useRef<HTMLDivElement>(null);

  return Object.assign(useReactive(REACTIVE_ADAPTER, () => ({ ref })), {
    ref,
  });
}


export function ScrollApp() {
  const {
    scrollPos,
    isReachStart,
    isReachEnd,
    ref,
  } = useScroll();
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
    * pos: {scrollPos} <br />
    * start: {isReachStart ? "reached": "not reached"} <br />
    * end: {isReachEnd ? "reached" : "not reached"}
    <div className="scroll-container" ref={ref} style={{
      width: "100%",
      height: "100px",
      overflowX: "scroll",
    }}>
      <div style={{
        width: "300%",
        height: "100px",
        background: "linear-gradient(90deg, #fff, #f55)",
      }}></div>
    </div>
  </div>;
}
