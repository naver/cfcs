import React, { useRef } from "react";
import { useReactive } from "@cfcs/react";
import { reactive } from "@cfcs/core";

const REACTIVE_ADAPTER = ({ setEvents, emit, onInit, onDestroy, getProps }) => {
  setEvents(["dragStart", "drag", "dragEnd"]);
  const obj = reactive({
    x: 0,
    y: 0,
    holding: false,
  });
  const ref = getProps().ref;

  let startClientX = 0;
  let startClientY = 0;
  let startX = 0;
  let startY = 0;

  const onDragStart = (e) => {
    obj.holding = true;
    startClientX = e.clientX;
    startClientY = e.clientY;
    startX = obj.x;
    startY = obj.y;
    emit("dragStart", e);
  };
  const onDrag = e => {
    if (!obj.holding) {
      return;
    }
    obj.x = startX + e.clientX - startClientX;
    obj.y = startY + e.clientY - startClientY;
    emit("drag", e);
  };
  const onDragEnd = e => {
    if (!obj.holding) {
      return;
    }
    emit("dragEnd", e);
    obj.holding = false;
  };
  onInit(() => {
    const element = ref.value || ref.current;
    element?.addEventListener("mousedown", onDragStart);
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", onDragEnd);
  });

  onDestroy(() => {
    const element = ref.value || ref.current;
    element?.removeEventListener("mousedown", onDragStart);
    window.removeEventListener("mousemove", onDrag);
    window.removeEventListener("mouseup", onDragEnd);
  });
  return obj;
};

function useGesture() {
  const ref = useRef<HTMLDivElement>(null);

  return Object.assign(
    useReactive(REACTIVE_ADAPTER, () => ({ ref })),
    {
      ref,
    }
  );
}

export function GestureApp() {
  const {
    ref,
    x, y, holding,
    onDragStart,
    onDrag,
    onDragEnd,
  } = useGesture();

  onDragStart(() => {
    console.log("drag start");
  }, []);
  onDrag(() => {
    console.log("drag");
  }, []);
  onDragEnd(() => {
    console.log("drag end");
  }, []);

  return (
    <div style={{ height: "400px" }}>
      <div
        ref={ref}
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          left: "calc(50% - 50px)",
          top: "calc(50% - 50px)",
          background: holding ? "#8C532E" : "#F5C721",
          transform: `translate(${x}px, ${y}px`,
        }}
      ></div>
    </div>
  );
}
