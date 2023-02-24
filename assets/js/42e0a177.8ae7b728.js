/*! For license information please see 42e0a177.8ae7b728.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34],{7808:(e,n,t)=>{function r(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}function i(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(o(arguments[n]));return e}t.d(n,{tG:()=>T,_A:()=>l,XP:()=>s,qj:()=>j});var u=function(e){return void 0===e},a=function(){function e(e,n){var t,o;if(this._canceled=!1,n)try{for(var i=r(Object.keys(n)),u=i.next();!u.done;u=i.next()){var a=u.value;this[a]=n[a]}}catch(c){t={error:c}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}this.eventType=e}var n=e.prototype;return n.stop=function(){this._canceled=!0},n.isCanceled=function(){return this._canceled},e}();const c=function(){function e(){this._eventHandler={}}var n=e.prototype;return n.trigger=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var r=e instanceof a?e.eventType:e,o=i(this._eventHandler[r]||[]);return o.length<=0||(e instanceof a?(e.currentTarget=this,o.forEach((function(n){n(e)}))):o.forEach((function(e){e.apply(void 0,i(n))}))),this},n.once=function(e,n){var t=this;if("object"==typeof e&&u(n)){var r=e;for(var o in r)this.once(o,r[o]);return this}if("string"==typeof e&&"function"==typeof n){var a=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n.apply(void 0,i(r)),t.off(e,a)};this.on(e,a)}return this},n.hasOn=function(e){return!!this._eventHandler[e]},n.on=function(e,n){if("object"==typeof e&&u(n)){var t=e;for(var r in t)this.on(r,t[r]);return this}if("string"==typeof e&&"function"==typeof n){var o=this._eventHandler[e];u(o)&&(this._eventHandler[e]=[],o=this._eventHandler[e]),o.push(n)}return this},n.off=function(e,n){var t,o;if(u(e))return this._eventHandler={},this;if(u(n)){if("string"==typeof e)return delete this._eventHandler[e],this;var i=e;for(var a in i)this.off(a,i[a]);return this}var c=this._eventHandler[e];if(c){var s=0;try{for(var l=r(c),f=l.next();!f.done;f=l.next()){if(f.value===n){c.splice(s,1),c.length<=0&&delete this._eventHandler[e];break}s++}}catch(p){t={error:p}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(t)throw t.error}}}return this},e.VERSION="3.0.4",e}();function s(e){return Object.keys(e)}function l(e){return e.replace(/[\s-_]([a-z])/g,(function(e,n){return n.toUpperCase()}))}function f(e){return"function"==typeof e}var p="__observers__",d="__computed__",v=1,y="__CFCS_DETECTED_DEPENDENCIES__";function m(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function h(){Object[y]=Object[y]||{};var e=Object[y];return e[v]=e[v]||[],e[v]}var k=function(){function e(e){this._emitter=new c,this._current=e}var n=e.prototype;return Object.defineProperty(n,"current",{get:function(){var e,n=(e=h())[e.length-1];return null==n||n.push(this),this._current},set:function(e){this._setCurrent(e)},enumerable:!1,configurable:!0}),n.subscribe=function(e){return this.current,this._emitter.on("update",e),this},n.unsubscribe=function(e){return this._emitter.off("update",e),this},n._setCurrent=function(e){var n=this._current,t=e!==n;this._current=e,t&&this._emitter.trigger("update",e,n)},n.toString=function(){return"".concat(this.current)},n.valueOf=function(){return this.current},e}();function g(e,n,t){void 0===t&&(t=n);var r={configurable:!0,get:function(){return _(this,t).current},set:function(e){_(this,t,e).current=e}};Object.defineProperty(e,n,r),t!==n&&Object.defineProperty(e,t,{configurable:!0,get:function(){return _(this,t).current}})}function b(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length>1?g(e[0],e[1]):function(n,t){return g(n,t,e[0])}}function w(e){e.subscribe=function(e,n){this[e],_(this,e).subscribe(n)},e.unsubscribe=function(e,n){var t=this;e?e in this&&_(this,e).unsubscribe(n):s(N(this)).forEach((function(e){t.unsubscribe(e)}))}}function E(e,n){var t=f(e)?e():e,r={};return O(r),s(t).forEach((function(e){var n=t[e];K(n)?R(r,e,n):R(r,e,x(n)),b(e)(r,e)})),w(r),r}function j(e){return E(e)}function x(e){return new k(e)}function O(e){var n={};return Object.defineProperty(e,p,{get:function(){return n}}),n}function N(e,n){var t,r;e[p]||O(e);var o=e[p];if(!n){var i=null===(r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r[d];i&&i.forEach((function(n){!(n in o)&&n in e&&e[n]}))}return o}function _(e,n,t){var r=N(e);return r[n]||(r[n]=x(t)),r[n]}function R(e,n,t){N(e)[n]=t}function K(e){return e&&function(e){return"object"==typeof e}(e)&&"current"in e&&"subscribe"in e&&"unsubscribe"in e}function T(e,n){var t=f(e)?{setup:e}:e;function r(){var e,r,o,i,u;return null!==(u=null!==(o=null!==(e=null==n?void 0:n())&&void 0!==e?e:null===(r=t.props)||void 0===r?void 0:r.call(t))&&void 0!==o?o:null===(i=t.data)||void 0===i?void 0:i.call(t))&&void 0!==u?u:{}}var o=new c,i=[],u=[],a=[],l=[],p={current:null},d=[],v=null,y=[],h=[],k=function(e){i.push(e)},g=function(e){v=e},b=function(e){y=e},w=function(e){h=e};return t.setup&&(p.current=t.setup({getProps:r,setInitialState:g,setEvents:b,setMethods:w,onMounted:k,onDestroy:function(e){a.push(e)},onInit:function(e){u.push(e)},emit:function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];o.trigger.apply(o,m([e],n,!1))},on:function(e){l.push(e)}})||null),t.created&&(p.current=t.created(r())||null),t.events&&b(t.events),t.state&&g(t.state),t.methods&&w(t.methods),t.mounted&&k(t.mounted),t.destroy&&a.push(t.destroy),t.init&&u.push(t.init),t.on&&l.push((function(e,n,r){var o=t.on(e,n,r);return function(){var i;o&&o(),null===(i=t.off)||void 0===i||i.call(t,e,n,r)}})),{events:function(){return y},state:function(){var e=p.current;if(v)return v;if(e){var n=N(e);g(s(n).reduce((function(e,t){return e[t]=n[t].current,e}),{}))}return v||{}},instance:function(){return p.current},mounted:function(){var e=r();i.forEach((function(n){p.current=n(e,p.current)||p.current}))},init:function(){var e=p.current,n=r();d=y.map((function(e){var n=function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(n=o).trigger.apply(n,m([e],t,!1))},t=p.current;return l.map((function(r){return r(t,e,n)})).filter(Boolean)})),u.forEach((function(t){t(e,n)}))},destroy:function(){d.forEach((function(e){e.forEach((function(e){e()}))})),o.off();var e=p.current,n=r();a.forEach((function(t){t(e,n)}))},methods:function(){return e=p,t={},(n=h)?(n.forEach((function(n){t[n]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.current||e.value;return o[n].apply(o,t)}})),t):t;var e,n,t},on:function(e,n){o.on(e,n)},off:function(e,n){o.off(e,n)}}}},569:(e,n,t)=>{t.d(n,{V:()=>a});var r=t(2784),o=t(4855),i=t(4392);const u={react:{icon:r.createElement(i.err,{width:"18",height:"18"}),title:"React"},angular:{icon:r.createElement(i.j3E,{width:"18",height:"18"}),title:"Angular"},vue2:{icon:r.createElement(i.IAF,{width:"18",height:"18"}),title:"Vue@2"},vue3:{icon:r.createElement(i.IAF,{width:"18",height:"18"}),title:"Vue@3"},svelte:{icon:r.createElement(i.qn2,{width:"18",height:"18"}),title:"Svelte"}};function a(e){const{tabs:n=["react","vue2","vue3","svelte"]}=e;return r.createElement(o.Z,{groupId:"options",defaultValue:"react",lazy:!0,values:n.map((e=>{const n=u[e];return{label:r.createElement("div",{className:"framework-wrapper"},n.icon,"  ",n.title),value:e,attributes:{"data-framework":e}}})),children:e.children})}},2169:(e,n,t)=>{t.d(n,{q:()=>i});var r=t(7808),o=t(2784);function i(e,n){var t=(0,o.useRef)(!0),i=(0,o.useMemo)((function(){return(0,r.tG)(e,n)}),[]),u=i.state(),a=(0,r.XP)(u),c=(0,o.useState)({})[0],s=function(e){var n=(0,o.useState)((function(){return u[e]}));c[e]={getter:!1,set:n[1],value:n[0]}};for(var l in u)s(l);t.current=!0;var f=(0,o.useMemo)((function(){return i.methods()}),[]);(0,o.useEffect)((function(){t.current=!1})),(0,o.useEffect)((function(){i.mounted();var e=i.instance();return a.forEach((function(n){e.subscribe(n,(function(e){c[n].value=e,c[n].getter&&c[n].set(e)}))})),i.init(),function(){i.destroy()}}),[]);var p=a.reduce((function(e,n){return f[n]||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t.current&&(c[n].getter=!0),c[n].value}}),e}),{});return i.events().forEach((function(e){p[(0,r._A)("on ".concat(e))]=function(n,t){var r=(0,o.useMemo)((function(){return i.on(e,n),n}),t);(0,o.useEffect)((function(){return i.off(e,r),i.on(e,r),function(){i.off(e,r)}}),[r])}})),(0,r.XP)(f).forEach((function(e){p[e]=f[e]})),p}},6977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>v,toc:()=>m});var r=t(8427),o=t(2784),i=t(876),u=(t(4855),t(4762)),a=(t(5449),t(569)),c=t(2169),s=t(7808);const l=e=>{let{onInit:n,onDestroy:t,getProps:r}=e;const o=(0,s.qj)({keys:[],isKeydown:!1}),i=r().ref,u=e=>{const n=o.keys,t=e.key;n.includes(t)||(o.keys=[...n,e.key].sort(((e,n)=>e<n?-1:1)),o.isKeydown=!0)},a=e=>{const n=o.keys,t=e.key,r=n.indexOf(t);-1!==r&&(n.splice(r,1),o.keys=[...n],o.isKeydown=!!n.length)},c=()=>{o.keys.length&&(o.keys=[],o.isKeydown=!1)};return n((()=>{const e=i.value||i.current;e?.addEventListener("keydown",u),e?.addEventListener("keyup",a),e?.addEventListener("keyup",c)})),t((()=>{const e=i.value||i.current;e?.removeEventListener("keydown",u),e?.removeEventListener("keyup",a),e?.removeEventListener("keyup",c)})),o};function f(){const{isKeydown:e,keys:n,ref:t}=function(){const e=(0,o.useRef)(null);return Object.assign((0,c.q)(l,(()=>({ref:e}))),{ref:e})}();return o.createElement("div",null,"* isKeydown: ",e?"true":"false"," ",o.createElement("br",null),"* selected keys: ",n.join(" + ")," ",o.createElement("br",null),o.createElement("input",{ref:t}))}const p={title:"useKey",slug:"/examples/use-key",sidebar_position:3},d=void 0,v={unversionedId:"examples/useKey",id:"examples/useKey",title:"useKey",description:"This is an example to check which key was pressed.",source:"@site/docs/examples/useKey.mdx",sourceDirName:"examples",slug:"/examples/use-key",permalink:"/cfcs/docs/examples/use-key",draft:!1,editUrl:"https://github.com/naver/cfcs/edit/main/demo/docs/examples/useKey.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"useKey",slug:"/examples/use-key",sidebar_position:3},sidebar:"examples",previous:{title:"useImageOnLoad",permalink:"/cfcs/docs/examples/use-image-on-load"},next:{title:"useScroll",permalink:"/cfcs/docs/examples/use-scroll"}},y={},m=[{value:"Reactive Adapter",id:"reactive-adapter",level:3},{value:"Frameworks",id:"frameworks",level:3}],h={toc:m},k="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is an example to check which key was pressed."),(0,i.kt)("p",null,"The state of ",(0,i.kt)("inlineCode",{parentName:"p"},"isKeydown")," changes to true when a key is pressed in the input, and false when keyup is performed."),(0,i.kt)("p",null,"When multiple keys are pressed, the state of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," changes."),(0,i.kt)("div",{className:"app-container"},(0,i.kt)(f,{mdxType:"KeyApp"})),(0,i.kt)("h3",{id:"reactive-adapter"},"Reactive Adapter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const REACTIVE_ADAPTER = ({ onInit, onDestroy, getProps }) => {\n  const obj = reactive({\n    keys: [],\n    isKeydown: false,\n  });\n  const ref = getProps().ref;\n\n  const onKeydown = e => {\n    const keys = obj.keys;\n    const key = e.key;\n\n    if (keys.includes(key)) {\n      return;\n    }\n    obj.keys = [...keys, e.key].sort((a, b) => a < b ? -1 : 1);\n    obj.isKeydown = true;\n  };\n  const onKeyup = e => {\n    const keys = obj.keys;\n    const key = e.key;\n    const index = keys.indexOf(key);\n\n    if (index === -1) {\n      return;\n    }\n    keys.splice(index, 1);\n    obj.keys = [...keys];\n    obj.isKeydown = !!keys.length;\n  };\n  const onBlur = () => {\n    if (!obj.keys.length) {\n      return;\n    }\n    obj.keys = [];\n    obj.isKeydown = false;\n  }\n  onInit(() => {\n    const element = ref.value || ref.current;\n\n\n    element?.addEventListener("keydown", onKeydown);\n    element?.addEventListener("keyup", onKeyup);\n    element?.addEventListener("keyup", onBlur);\n  });\n\n  onDestroy(() => {\n    const element = ref.value || ref.current;\n\n    element?.removeEventListener("keydown", onKeydown);\n    element?.removeEventListener("keyup", onKeyup);\n    element?.removeEventListener("keyup", onBlur);\n  });\n  return obj;\n};\n')),(0,i.kt)("h3",{id:"frameworks"},"Frameworks"),(0,i.kt)(a.V,{mdxType:"FrameworkTabs"},(0,i.kt)(u.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("p",null,"You can create a Reactive Component by importing the ",(0,i.kt)("inlineCode",{parentName:"p"},"@cfcs/react")," module and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useReactive } from "@cfcs/react";\n\nfunction useScroll() {\n  const ref = React.useRef(null);\n\n  return Object.assign(useReactive(ADAPTER, () => ({ ref })), {\n    ref,\n  });\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'export function App() {\n  const { isKeydown, keys, ref } = useScroll();\n\n  return <div>\n    * isKeydown: {isKeydown ? "true" : "false"} <br />\n    * selected keys: {keys.join(" + ")} <br />\n    <input ref={ref} />\n  </div>;\n}\n'))),(0,i.kt)(u.Z,{value:"vue2",mdxType:"TabItem"},(0,i.kt)("p",null,"You can create a Reactive Component by importing the ",(0,i.kt)("inlineCode",{parentName:"p"},"@cfcs/vue2")," module and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,i.kt)("p",null),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vuejs/composition-api"},(0,i.kt)("inlineCode",{parentName:"a"},"@vue/composition-api"))," if you are going to use it in Vue 2."),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# < 2.7\n$ npm install @cfcs/vue2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ref } from "@vue/composition-api";\nimport { useReactive } from "@cfcs/vue2";\n\nfunction useScroll() {\n  const imgRef = ref(null);\n\n  return {\n    ...useReactive(ADAPTER, () => ({ ref: imgRef })),\n    ref: imgRef,\n  };\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>\n    * isKeydown: {{isKeydown ? "true" : "false"}} <br />\n    * selected keys: {{keys.join(" + ")}} <br />\n    <input ref="ref">...</input>\n  </div>\n</template>\n<script>\nexport default {\n  setup() {\n    const {\n      isKeydown,\n      keys,\n      ref,\n    } = useScroll();\n\n    return {\n      isKeydown,\n      keys,\n      ref,\n    };\n  }\n}\n<\/script>\n'))),(0,i.kt)(u.Z,{value:"vue3",mdxType:"TabItem"},(0,i.kt)("p",null,"  You can create a Reactive Component by importing the ",(0,i.kt)("inlineCode",{parentName:"p"},"@cfcs/vue3")," module and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# >= 2.7\n$ npm install @cfcs/vue3\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ref } from "vue";\nimport { useReactive } from "@cfcs/vue3";\n\nfunction useScroll() {\n  const imgRef = ref(null);\n\n  return {\n    ...useReactive(ADAPTER, () => ({ ref: imgRef })),\n    ref: imgRef,\n  };\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>\n    * isKeydown: {{isKeydown ? "true" : "false"}} <br />\n    * selected keys: {{keys.join(" + ")}} <br />\n    <input ref="ref">...</input>\n  </div>\n</template>\n<script>\nexport default {\n  setup() {\n    const {\n      isKeydown,\n      keys,\n      ref,\n    } = useScroll();\n\n    return {\n      isKeydown,\n      keys,\n      ref,\n    };\n  }\n}\n<\/script>\n'))),(0,i.kt)(u.Z,{value:"svelte",mdxType:"TabItem"},(0,i.kt)("p",null,"You can create a Reactive Component by importing the ",(0,i.kt)("inlineCode",{parentName:"p"},"@cfcs/svelte")," module and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install @cfcs/svelte\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive, useRef } from "@cfcs/vue3";\n\nfunction useScroll() {\n  const ref = useRef(null);\n\n  return {\n    ...useReactive(ADAPTER, () => ({ ref })),\n    ref,\n  };\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script>\nconst {\n  ref: inputRef,\n  isKeydown,\n  keys,\n} = useScroll();\n<\/script>\n<div>\n  * isKeydown: {$isKeydown ? "true" : "false"} <br />\n  * selected keys: {$keys.join(" + ")} <br />\n  <input use:inputRef>...</input>\n</div>\n')))))}g.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>v});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,v=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(v,u(u({ref:n},l),{},{components:t})):r.createElement(v,u({ref:n},l))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[f]="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);