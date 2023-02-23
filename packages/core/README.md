
<p align="center"></p>

<h2 align="center" style="max-width: 100%;">
  <img src="https://raw.githubusercontent.com/naver/cfcs/main/images/logo.png" /><br/>
  <a href="#">Cross Framework Components</a>
</h2>

<p align="center">CFCs(Cross Framework Components) are modules that convert components into framework usage.</p>


<p align="middle">
<a href="https://www.npmjs.com/package/@cfcs/core" target="_blank"><img src="https://img.shields.io/npm/v/@cfcs/core.svg?style=flat-square&color=00d8ff&label=version&logo=NPM"></a>&nbsp;
<img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square" />&nbsp;
<a href="https://github.com/naver/cfcs/blob/main/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/naver/cfcs.svg?style=flat-square&label=%F0%9F%93%9C%20license&color=08CE5D" /></a>&nbsp;
</p>

<p align="center" style="line-height: 2;">
  <a href="https://github.com/naver/cfcs/tree/main/packages/react"><img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&logo=React&logoColor=white&color=61dafb" /></a>
  <a href="https://github.com/naver/cfcs/tree/main/packages/vue2"><img alt="Vue 2" src="https://img.shields.io/static/v1.svg?label=&message=Vue 2&style=flat-square&logo=Vue.js&logoColor=white&color=42b883" /></a>
  <a href="https://github.com/naver/cfcs/tree/main/packages/vue3"><img alt="Vue3" src="https://img.shields.io/static/v1.svg?label=&message=Vue3&style=flat-square&logo=Vue.js&logoColor=white&color=42b883" /></a>
  <a href="https://github.com/naver/cfcs/tree/main/packages/svelte"><img alt="Svelte" src="https://img.shields.io/static/v1.svg?label=&message=Svelte&style=flat-square&logo=svelte&logoColor=white&color=FF3E00" /></a>
</p>

## ⚙️ Installation
```sh
$ npm install @cfcs/core
```

## 🏃 How to use

### CFCs Reactive
CFCs Reactive can support multiple frameworks as a Reactive Component, a utility component that is state-based and does not create a UI.


![](https://raw.githubusercontent.com/naver/cfcs/main/images/cfcs-reactive.png)


The Hooks component can provide us with a value for the state by changing the state designated as a Hook by certain conditions.

The state used in Hooks is called **Reactive State**.


* [**See Reactive Documents**](https://github.com/naver/cfcs/blob/main/reactive.md)

### CFCs DOM

CFCs DOM supports various frameworks by delegating the DOM render function to the framework. (Soon)

![](https://raw.githubusercontent.com/naver/cfcs/main/images/cfcs-dom.png)



## 📦 Packages
|Package|Version|Description|
|:-----:|:-----:|:-----:|
|[**@cfcs/react**](https://github.com/naver/cfcs/blob/main/packages/react/README.md)|<a href="https://www.npmjs.com/package/@cfcs/react" target="_blank"><img src="https://img.shields.io/npm/v/@cfcs/react?style=flat-square&color=00d8ff&label=%F0%9F%94%96" alt="version" /></a>|CFCs for [React](https://reactjs.org/)|
|[**@cfcs/vue2**](https://github.com/naver/cfcs/blob/main/packages/vue/README.md)|<a href="https://www.npmjs.com/package/@cfcs/vue2" target="_blank"><img src="https://img.shields.io/npm/v/@cfcs/vue2?style=flat-square&color=42b883&label=%F0%9F%94%96" alt="version" /></a>|CFCs for [Vue.js@2](https://vuejs.org/v2/guide/index.html)|
|[**@cfcs/vue3**](https://github.com/naver/cfcs/blob/main/packages/vue3/README.md)|<a href="https://www.npmjs.com/package/@cfcs/vue3" target="_blank"><img src="https://img.shields.io/npm/v/@cfcs/vue3?style=flat-square&color=42b883&label=%F0%9F%94%96" alt="version" /></a>|CFCs for [Vue.js@3](https://v3.vuejs.org/)|
|[**@cfcs/svelte**](https://github.com/naver/cfcs/blob/main/packages/svelte/README.md)|<a href="https://www.npmjs.com/package/@cfcs/svelte" target="_blank"><img src="https://img.shields.io/npm/v/@cfcs/svelte?style=flat-square&color=FF3E00&label=%F0%9F%94%96" alt="version" /></a>|CFCs for [Svelte](https://svelte.dev/)|


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
