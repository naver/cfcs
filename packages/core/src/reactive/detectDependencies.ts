import {
  CFCS_DETECTED_DEPENDENCIES,
  CFCS_DETECTED_DEPENDENCIES_VERSION,
} from "./const";
import { Observer } from "./Observer";

export interface Detected {
  host: Observer<any>;
  observers: Array<Observer<any>>;
  push(observer: Observer<any>): void;
}

export function getDetectedStack(): Array<Detected> {
  // Version issues do not occur when you access the native object in the global.
  (Object as any)[CFCS_DETECTED_DEPENDENCIES] = (Object as any)[CFCS_DETECTED_DEPENDENCIES] || {};
  const versionList = (Object as any)[CFCS_DETECTED_DEPENDENCIES];

  versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] = versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] || [];

  return versionList[CFCS_DETECTED_DEPENDENCIES_VERSION];
}

export function getCurrentDetected(): Detected | undefined {
  const stack = getDetectedStack();

  return stack[stack.length - 1];
}

export function detectDependencies(host: Observer<any>) {
  const stack = getDetectedStack();
  const observers: Array<Observer> = [];
  const detected: Detected = {
    host,
    observers,
    push(observer: Observer<any>) {
      if (host !== observer && observers.indexOf(observer) === -1) {
        observers.push(observer);
      }
    },
  };

  stack.push(detected);
  return detected;
}

export function endDetectDependencies() {
  const stack = getDetectedStack();

  return stack.pop();
}
