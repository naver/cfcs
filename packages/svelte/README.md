
<p align="center"></p>

<h2 align="center" style="max-width: 100%;">
  <img src="https://raw.githubusercontent.com/naver/cfcs/main/images/logo.png" /><br/>
  <a href="#">Cross Framework Components for Svelte</a>
</h2>

<p align="middle">
<a href="https://www.npmjs.com/package/@cfcs/svelte" target="_blank"><img src="https://img.shields.io/npm/v/@cfcs/svelte.svg?style=flat-square&color=00d8ff&label=version&logo=NPM"></a>&nbsp;
<img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square" />&nbsp;
<a href="https://github.com/naver/cfcs/blob/main/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/naver/cfcs.svg?style=flat-square&label=%F0%9F%93%9C%20license&color=08CE5D" /></a>&nbsp;
</p>
<p align="center">Write once, create framework components that supports React, Vue, Svelte, and more.</p>


## ⚙️ Installation
```sh
$ npm install @cfcs/svelte
```

## 🏃 How to use

Svelte Component can be written by using `useReactive` through `REACTIVE_ADAPTER`([made with @cfcs/core](https://github.com/naver/cfcs/blob/main/reactive.md)) constant.

### Adapter
```js
import { reactive } from "@cfcs/core";

const REACTIVE_ADAPTER = ({
  emit,
  onInit,
  setEvents,
  setMethods,
}) => {
  setEvents(["event1"]);
  setEvents(["method1"]);

  const obj = reactive({
    value1: 1,
    method1() {
      console.log("method1");
    },
  });

  const inst = new YourModule();

  onInit(() => {
    requestAnimationFrame(() => {
      value1.current = 2;

      // emit `event1` event externally
      emit("event1", e);
    });
  });

  // Returns a reactive value.
  return obj;
};
```
### Component
```ts
import { REACTIVE_ADAPTER } from "your-module";
import { useReactive, ReactiveAdapterResult } from "@cfcs/svelte";

// The result value of useReactive can be exposed as a type.
export type ReactiveComponentResult = ReactiveAdapterResult<typeof REACTIVE_ADAPTER>;

// Reactive Component can be created through useReactive.
export function useReactiveComponent(props) {
  return useReactive(REACTIVE_ADAPTER, () => props);
}
```

### App
```html
<script>
const {
  // state
  value1,
  // events
  onEvent1,
  // methods
  method1,
} = useReactiveComponent({});

// use state
console.log($value1);

// use event
onEvent1(e => {
  console.log(e);
};

// use method
method1();
</script>
```



## 📝 Feedback
Please file an [Issue](https://github.com/naver/cfcs/issues).

## 📜 License
`cfcs` is released under the [MIT license](https://github.com/naver/cfcs/blob/main/LICENSE).

```
CFCs
Copyright (c) 2023-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
