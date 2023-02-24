import React from "react";
import { useReactive } from "@cfcs/react";
import { reactive } from "@cfcs/core";

const REACTIVE_ADAPTER = ({ onInit, onDestroy }) => {
  const obj = reactive({ width: 0, height: 0 });
  const callback = () => {
    obj.width = window.innerWidth;
    obj.height = window.innerHeight;
  };
  onInit(() => {
    window.addEventListener("resize", callback);
    callback();
  });

  onDestroy(() => {
    window.removeEventListener("resize", callback);
  });

  return obj;
};

function useWindowSize() {
  return useReactive(REACTIVE_ADAPTER);
}


export function WindowSizeApp() {
  const { width, height } = useWindowSize();

  return <div style={{
    textAlign: "center",
    padding: "20px",
  }}> {width} x {height} </div>
}
