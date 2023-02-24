/*! For license information please see 12f43f77.3b3b6b69.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[564],{7808:(e,n,t)=>{function r(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,c=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=c.next()).done;)a.push(r.value)}catch(i){o={error:i}}finally{try{r&&!r.done&&(t=c.return)&&t.call(c)}finally{if(o)throw o.error}}return a}function c(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(o(arguments[n]));return e}t.d(n,{tG:()=>_,_A:()=>s,XP:()=>u,qj:()=>S});var a=function(e){return void 0===e},i=function(){function e(e,n){var t,o;if(this._canceled=!1,n)try{for(var c=r(Object.keys(n)),a=c.next();!a.done;a=c.next()){var i=a.value;this[i]=n[i]}}catch(l){t={error:l}}finally{try{a&&!a.done&&(o=c.return)&&o.call(c)}finally{if(t)throw t.error}}this.eventType=e}var n=e.prototype;return n.stop=function(){this._canceled=!0},n.isCanceled=function(){return this._canceled},e}();const l=function(){function e(){this._eventHandler={}}var n=e.prototype;return n.trigger=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var r=e instanceof i?e.eventType:e,o=c(this._eventHandler[r]||[]);return o.length<=0||(e instanceof i?(e.currentTarget=this,o.forEach((function(n){n(e)}))):o.forEach((function(e){e.apply(void 0,c(n))}))),this},n.once=function(e,n){var t=this;if("object"==typeof e&&a(n)){var r=e;for(var o in r)this.once(o,r[o]);return this}if("string"==typeof e&&"function"==typeof n){var i=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n.apply(void 0,c(r)),t.off(e,i)};this.on(e,i)}return this},n.hasOn=function(e){return!!this._eventHandler[e]},n.on=function(e,n){if("object"==typeof e&&a(n)){var t=e;for(var r in t)this.on(r,t[r]);return this}if("string"==typeof e&&"function"==typeof n){var o=this._eventHandler[e];a(o)&&(this._eventHandler[e]=[],o=this._eventHandler[e]),o.push(n)}return this},n.off=function(e,n){var t,o;if(a(e))return this._eventHandler={},this;if(a(n)){if("string"==typeof e)return delete this._eventHandler[e],this;var c=e;for(var i in c)this.off(i,c[i]);return this}var l=this._eventHandler[e];if(l){var u=0;try{for(var s=r(l),f=s.next();!f.done;f=s.next()){if(f.value===n){l.splice(u,1),l.length<=0&&delete this._eventHandler[e];break}u++}}catch(p){t={error:p}}finally{try{f&&!f.done&&(o=s.return)&&o.call(s)}finally{if(t)throw t.error}}}return this},e.VERSION="3.0.4",e}();function u(e){return Object.keys(e)}function s(e){return e.replace(/[\s-_]([a-z])/g,(function(e,n){return n.toUpperCase()}))}function f(e){return"function"==typeof e}var p="__observers__",d="__computed__",h=1,v="__CFCS_DETECTED_DEPENDENCIES__";function m(e,n,t){if(t||2===arguments.length)for(var r,o=0,c=n.length;o<c;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function g(){Object[v]=Object[v]||{};var e=Object[v];return e[h]=e[h]||[],e[h]}var y=function(){function e(e){this._emitter=new l,this._current=e}var n=e.prototype;return Object.defineProperty(n,"current",{get:function(){var e,n=(e=g())[e.length-1];return null==n||n.push(this),this._current},set:function(e){this._setCurrent(e)},enumerable:!1,configurable:!0}),n.subscribe=function(e){return this.current,this._emitter.on("update",e),this},n.unsubscribe=function(e){return this._emitter.off("update",e),this},n._setCurrent=function(e){var n=this._current,t=e!==n;this._current=e,t&&this._emitter.trigger("update",e,n)},n.toString=function(){return"".concat(this.current)},n.valueOf=function(){return this.current},e}();function b(e,n,t){void 0===t&&(t=n);var r={configurable:!0,get:function(){return w(this,t).current},set:function(e){w(this,t,e).current=e}};Object.defineProperty(e,n,r),t!==n&&Object.defineProperty(e,t,{configurable:!0,get:function(){return w(this,t).current}})}function k(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length>1?b(e[0],e[1]):function(n,t){return b(n,t,e[0])}}function E(e){e.subscribe=function(e,n){this[e],w(this,e).subscribe(n)},e.unsubscribe=function(e,n){var t=this;e?e in this&&w(this,e).unsubscribe(n):u(j(this)).forEach((function(e){t.unsubscribe(e)}))}}function R(e,n){var t=f(e)?e():e,r={};return x(r),u(t).forEach((function(e){var n=t[e];O(n)?P(r,e,n):P(r,e,N(n)),k(e)(r,e)})),E(r),r}function S(e){return R(e)}function N(e){return new y(e)}function x(e){var n={};return Object.defineProperty(e,p,{get:function(){return n}}),n}function j(e,n){var t,r;e[p]||x(e);var o=e[p];if(!n){var c=null===(r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r[d];c&&c.forEach((function(n){!(n in o)&&n in e&&e[n]}))}return o}function w(e,n,t){var r=j(e);return r[n]||(r[n]=N(t)),r[n]}function P(e,n,t){j(e)[n]=t}function O(e){return e&&function(e){return"object"==typeof e}(e)&&"current"in e&&"subscribe"in e&&"unsubscribe"in e}function _(e,n){var t=f(e)?{setup:e}:e;function r(){var e,r,o,c,a;return null!==(a=null!==(o=null!==(e=null==n?void 0:n())&&void 0!==e?e:null===(r=t.props)||void 0===r?void 0:r.call(t))&&void 0!==o?o:null===(c=t.data)||void 0===c?void 0:c.call(t))&&void 0!==a?a:{}}var o=new l,c=[],a=[],i=[],s=[],p={current:null},d=[],h=null,v=[],g=[],y=function(e){c.push(e)},b=function(e){h=e},k=function(e){v=e},E=function(e){g=e};return t.setup&&(p.current=t.setup({getProps:r,setInitialState:b,setEvents:k,setMethods:E,onMounted:y,onDestroy:function(e){i.push(e)},onInit:function(e){a.push(e)},emit:function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];o.trigger.apply(o,m([e],n,!1))},on:function(e){s.push(e)}})||null),t.created&&(p.current=t.created(r())||null),t.events&&k(t.events),t.state&&b(t.state),t.methods&&E(t.methods),t.mounted&&y(t.mounted),t.destroy&&i.push(t.destroy),t.init&&a.push(t.init),t.on&&s.push((function(e,n,r){var o=t.on(e,n,r);return function(){var c;o&&o(),null===(c=t.off)||void 0===c||c.call(t,e,n,r)}})),{events:function(){return v},state:function(){var e=p.current;if(h)return h;if(e){var n=j(e);b(u(n).reduce((function(e,t){return e[t]=n[t].current,e}),{}))}return h||{}},instance:function(){return p.current},mounted:function(){var e=r();c.forEach((function(n){p.current=n(e,p.current)||p.current}))},init:function(){var e=p.current,n=r();d=v.map((function(e){var n=function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(n=o).trigger.apply(n,m([e],t,!1))},t=p.current;return s.map((function(r){return r(t,e,n)})).filter(Boolean)})),a.forEach((function(t){t(e,n)}))},destroy:function(){d.forEach((function(e){e.forEach((function(e){e()}))})),o.off();var e=p.current,n=r();i.forEach((function(t){t(e,n)}))},methods:function(){return e=p,t={},(n=g)?(n.forEach((function(n){t[n]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.current||e.value;return o[n].apply(o,t)}})),t):t;var e,n,t},on:function(e,n){o.on(e,n)},off:function(e,n){o.off(e,n)}}}},569:(e,n,t)=>{t.d(n,{V:()=>i});var r=t(2784),o=t(4855),c=t(4392);const a={react:{icon:r.createElement(c.err,{width:"18",height:"18"}),title:"React"},angular:{icon:r.createElement(c.j3E,{width:"18",height:"18"}),title:"Angular"},vue2:{icon:r.createElement(c.IAF,{width:"18",height:"18"}),title:"Vue@2"},vue3:{icon:r.createElement(c.IAF,{width:"18",height:"18"}),title:"Vue@3"},svelte:{icon:r.createElement(c.qn2,{width:"18",height:"18"}),title:"Svelte"}};function i(e){const{tabs:n=["react","vue2","vue3","svelte"]}=e;return r.createElement(o.Z,{groupId:"options",defaultValue:"react",lazy:!0,values:n.map((e=>{const n=a[e];return{label:r.createElement("div",{className:"framework-wrapper"},n.icon,"  ",n.title),value:e,attributes:{"data-framework":e}}})),children:e.children})}},2169:(e,n,t)=>{t.d(n,{q:()=>c});var r=t(7808),o=t(2784);function c(e,n){var t=(0,o.useRef)(!0),c=(0,o.useMemo)((function(){return(0,r.tG)(e,n)}),[]),a=c.state(),i=(0,r.XP)(a),l=(0,o.useState)({})[0],u=function(e){var n=(0,o.useState)((function(){return a[e]}));l[e]={getter:!1,set:n[1],value:n[0]}};for(var s in a)u(s);t.current=!0;var f=(0,o.useMemo)((function(){return c.methods()}),[]);(0,o.useEffect)((function(){t.current=!1})),(0,o.useEffect)((function(){c.mounted();var e=c.instance();return i.forEach((function(n){e.subscribe(n,(function(e){l[n].value=e,l[n].getter&&l[n].set(e)}))})),c.init(),function(){c.destroy()}}),[]);var p=i.reduce((function(e,n){return f[n]||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t.current&&(l[n].getter=!0),l[n].value}}),e}),{});return c.events().forEach((function(e){p[(0,r._A)("on ".concat(e))]=function(n,t){var r=(0,o.useMemo)((function(){return c.on(e,n),n}),t);(0,o.useEffect)((function(){return c.off(e,r),c.on(e,r),function(){c.off(e,r)}}),[r])}})),(0,r.XP)(f).forEach((function(e){p[e]=f[e]})),p}},1880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>v,toc:()=>g});var r=t(8427),o=t(2784),c=t(876),a=(t(4855),t(4762)),i=(t(5449),t(569)),l=t(4198),u=t(2169),s=t(7808);const f=e=>{let{onInit:n,onDestroy:t,getProps:r}=e;const o=(0,s.qj)({scrollPos:0,isReachStart:!1,isReachEnd:!1}),c=r().ref,a=()=>{const e=c.value||c.current,n=e.scrollLeft;o.scrollPos=n,o.isReachStart=0===n,o.isReachEnd=n===e.scrollWidth-e.clientWidth};return n((()=>{const e=c.value||c.current;e?.addEventListener("scroll",a),a()})),t((()=>{const e=c.value||c.current;e?.removeEventListener("scroll",a)})),o};function p(){const{scrollPos:e,isReachStart:n,isReachEnd:t,ref:r}=function(){const e=(0,o.useRef)(null);return Object.assign((0,u.q)(f,(()=>({ref:e}))),{ref:e})}(),[c,a]=(0,o.useState)(""),{withBaseUrl:i}=(0,l.C)();return(0,o.useEffect)((()=>{const e=setTimeout((()=>{a(i("./tutorials/logo.png"))}),1e3);return()=>{clearTimeout(e)}}),[]),o.createElement("div",null,"* pos: ",e," ",o.createElement("br",null),"* start: ",n?"reached":"not reached"," ",o.createElement("br",null),"* end: ",t?"reached":"not reached",o.createElement("div",{className:"scroll-container",ref:r,style:{width:"100%",height:"100px",overflowX:"scroll"}},o.createElement("div",{style:{width:"300%",height:"100px",background:"linear-gradient(90deg, #fff, #f55)"}})))}const d={title:"useScroll",slug:"/examples/use-scroll",sidebar_position:3},h=void 0,v={unversionedId:"examples/useScroll",id:"examples/useScroll",title:"useScroll",description:"This is an example of a Reactive Component that can get the scroll position of the element and whether or not the starting point (or ending point) has been reached.",source:"@site/docs/examples/useScroll.mdx",sourceDirName:"examples",slug:"/examples/use-scroll",permalink:"/cfcs/docs/examples/use-scroll",draft:!1,editUrl:"https://github.com/naver/cfcs/edit/main/demo/docs/examples/useScroll.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"useScroll",slug:"/examples/use-scroll",sidebar_position:3},sidebar:"examples",previous:{title:"useKey",permalink:"/cfcs/docs/examples/use-key"}},m={},g=[{value:"Reactive Adapter",id:"reactive-adapter",level:3},{value:"Frameworks",id:"frameworks",level:3}],y={toc:g},b="wrapper";function k(e){let{components:n,...t}=e;return(0,c.kt)(b,(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This is an example of a Reactive Component that can get the scroll position of the element and whether or not the starting point (or ending point) has been reached."),(0,c.kt)("p",null,"Try scrolling horizontally on the next screen."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"scrollPos")," when the scroll changes, ",(0,c.kt)("inlineCode",{parentName:"p"},"isReachStart")," when the scroll reaches the start point, and ",(0,c.kt)("inlineCode",{parentName:"p"},"isReachEnd")," when the scroll reaches the end point."),(0,c.kt)("div",{className:"app-container"},(0,c.kt)(p,{mdxType:"ScrollApp"})),(0,c.kt)("h3",{id:"reactive-adapter"},"Reactive Adapter"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'const REACTIVE_ADAPTER = ({ onInit, onDestroy, getProps }) => {\n  const obj = reactive({\n    isReachStart: false,\n    isReachEnd: false,\n  });\n  const ref = getProps().ref;\n\n  const onScroll = () => {\n    const element = ref.value || ref.current;\n    const scrollLeft = element.scrollLeft;\n    obj.isReachStart = scrollLeft === 0;\n    obj.isReachEnd = scrollLeft === element.scrollWidth - element.clientWidth;\n  };\n  onInit(() => {\n    const element = ref.value || ref.current;\n\n    element?.addEventListener("scroll", onScroll);\n    onScroll();\n  });\n\n  onDestroy(() => {\n    const element = ref.value || ref.current;\n\n    element?.removeEventListener("scroll", onScroll);\n  });\n  return obj;\n};\n')),(0,c.kt)("h3",{id:"frameworks"},"Frameworks"),(0,c.kt)(i.V,{mdxType:"FrameworkTabs"},(0,c.kt)(a.Z,{value:"react",mdxType:"TabItem"},(0,c.kt)("p",null,"You can create a Reactive Component by importing the ",(0,c.kt)("inlineCode",{parentName:"p"},"@cfcs/react")," module and using the ",(0,c.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,c.kt)("p",null),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useReactive } from "@cfcs/react";\n\nfunction useScroll() {\n  const ref = React.useRef(null);\n\n  return Object.assign(useReactive(ADAPTER, () => ({ ref })), {\n    ref,\n  });\n}\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'export function App() {\n  const { scrollPos, isReachStart, isReachEnd, ref } = useScroll();\n\n  return <div>\n    * pos: {scrollPos} <br />\n    * start: {isReachStart ? "reached": "not reached"} <br />\n    * end: {isReachEnd ? "reached" : "not reached"}\n    <div className="scroll-container" ref={ref}>...</div>\n  </div>;\n}\n'))),(0,c.kt)(a.Z,{value:"vue2",mdxType:"TabItem"},(0,c.kt)("p",null,"You can create a Reactive Component by importing the ",(0,c.kt)("inlineCode",{parentName:"p"},"@cfcs/vue2")," module and using the ",(0,c.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,c.kt)("p",null),(0,c.kt)("p",null,"Use ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/vuejs/composition-api"},(0,c.kt)("inlineCode",{parentName:"a"},"@vue/composition-api"))," if you are going to use it in Vue 2."),(0,c.kt)("p",null),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"# < 2.7\n$ npm install @cfcs/vue2\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ref } from "@vue/composition-api";\nimport { useReactive } from "@cfcs/vue2";\n\nfunction useScroll() {\n  const imgRef = ref(null);\n\n  return {\n    ...useReactive(ADAPTER, () => ({ ref: imgRef })),\n    ref: imgRef,\n  };\n}\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>\n    * pos: {{scrollPos}} <br />\n    * start: {{isReachStart ? "reached": "not reached"}} <br />\n    * end: {{isReachEnd ? "reached" : "not reached"}}\n    <div class="scroll-container" ref="ref">...</div>\n  </div>\n</template>\n<script>\nexport default {\n  setup() {\n    const {\n      scrollPos,\n      isReachStart,\n      isReachEnd,\n      ref,\n    } = useScroll();\n\n    return {\n      scrollPos,\n      isReachStart,\n      isReachEnd,\n      ref,\n    };\n  }\n}\n<\/script>\n'))),(0,c.kt)(a.Z,{value:"vue3",mdxType:"TabItem"},(0,c.kt)("p",null,"  You can create a Reactive Component by importing the ",(0,c.kt)("inlineCode",{parentName:"p"},"@cfcs/vue3")," module and using the ",(0,c.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,c.kt)("p",null),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"# >= 2.7\n$ npm install @cfcs/vue3\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ref } from "vue";\nimport { useReactive } from "@cfcs/vue3";\n\nfunction useScroll() {\n  const imgRef = ref(null);\n\n  return {\n    ...useReactive(ADAPTER, () => ({ ref: imgRef })),\n    ref: imgRef,\n  };\n}\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>\n    * pos: {{scrollPos}} <br />\n    * start: {{isReachStart ? "reached": "not reached"}} <br />\n    * end: {{isReachEnd ? "reached" : "not reached"}}\n    <div class="scroll-container" ref="ref">...</div>\n  </div>\n</template>\n<script>\nexport default {\n  setup() {\n    const {\n      scrollPos,\n      isReachStart,\n      isReachEnd,\n      ref,\n    } = useScroll();\n\n    return {\n      scrollPos,\n      isReachStart,\n      isReachEnd,\n      ref,\n    };\n  }\n}\n<\/script>\n'))),(0,c.kt)(a.Z,{value:"svelte",mdxType:"TabItem"},(0,c.kt)("p",null,"You can create a Reactive Component by importing the ",(0,c.kt)("inlineCode",{parentName:"p"},"@cfcs/svelte")," module and using the ",(0,c.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,c.kt)("p",null),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install @cfcs/svelte\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive, useRef } from "@cfcs/vue3";\n\nfunction useScroll() {\n  const ref = useRef(null);\n\n  return {\n    ...useReactive(ADAPTER, () => ({ ref })),\n    ref,\n  };\n}\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<script>\nconst {\n  ref: scrollRef,\n  scrollPos,\n  isReachStart,\n  isReachEnd,\n} = useScroll();\n<\/script>\n<div>\n  * pos: {$scrollPos} <br />\n  * start: {$isReachStart ? "reached": "not reached"} <br />\n  * end: {$isReachEnd ? "reached" : "not reached"}\n  <div class="scroll-container" use:scrollRef>...</div>\n</div>\n')))))}k.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||c;return t?r.createElement(h,a(a({ref:n},s),{},{components:t})):r.createElement(h,a({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);