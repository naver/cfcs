/*! For license information please see e937a0bc.94319fe1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3829],{7808:(e,t,n)=>{function r(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function o(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}n.d(t,{tG:()=>R,_A:()=>l,XP:()=>s,qj:()=>x});var a=function(e){return void 0===e},u=function(){function e(e,t){var n,i;if(this._canceled=!1,t)try{for(var o=r(Object.keys(t)),a=o.next();!a.done;a=o.next()){var u=a.value;this[u]=t[u]}}catch(c){n={error:c}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}this.eventType=e}var t=e.prototype;return t.stop=function(){this._canceled=!0},t.isCanceled=function(){return this._canceled},e}();const c=function(){function e(){this._eventHandler={}}var t=e.prototype;return t.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=e instanceof u?e.eventType:e,i=o(this._eventHandler[r]||[]);return i.length<=0||(e instanceof u?(e.currentTarget=this,i.forEach((function(t){t(e)}))):i.forEach((function(e){e.apply(void 0,o(t))}))),this},t.once=function(e,t){var n=this;if("object"==typeof e&&a(t)){var r=e;for(var i in r)this.once(i,r[i]);return this}if("string"==typeof e&&"function"==typeof t){var u=function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];t.apply(void 0,o(r)),n.off(e,u)};this.on(e,u)}return this},t.hasOn=function(e){return!!this._eventHandler[e]},t.on=function(e,t){if("object"==typeof e&&a(t)){var n=e;for(var r in n)this.on(r,n[r]);return this}if("string"==typeof e&&"function"==typeof t){var i=this._eventHandler[e];a(i)&&(this._eventHandler[e]=[],i=this._eventHandler[e]),i.push(t)}return this},t.off=function(e,t){var n,i;if(a(e))return this._eventHandler={},this;if(a(t)){if("string"==typeof e)return delete this._eventHandler[e],this;var o=e;for(var u in o)this.off(u,o[u]);return this}var c=this._eventHandler[e];if(c){var s=0;try{for(var l=r(c),f=l.next();!f.done;f=l.next()){if(f.value===t){c.splice(s,1),c.length<=0&&delete this._eventHandler[e];break}s++}}catch(p){n={error:p}}finally{try{f&&!f.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}}return this},e.VERSION="3.0.4",e}();function s(e){return Object.keys(e)}function l(e){return e.replace(/[\s-_]([a-z])/g,(function(e,t){return t.toUpperCase()}))}function f(e){return"function"==typeof e}var p="__observers__",d="__computed__",h=1,v="__CFCS_DETECTED_DEPENDENCIES__";function m(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function g(){Object[v]=Object[v]||{};var e=Object[v];return e[h]=e[h]||[],e[h]}var y=function(){function e(e){this._emitter=new c,this._current=e}var t=e.prototype;return Object.defineProperty(t,"current",{get:function(){var e,t=(e=g())[e.length-1];return null==t||t.push(this),this._current},set:function(e){this._setCurrent(e)},enumerable:!1,configurable:!0}),t.subscribe=function(e){return this.current,this._emitter.on("update",e),this},t.unsubscribe=function(e){return this._emitter.off("update",e),this},t._setCurrent=function(e){var t=this._current,n=e!==t;this._current=e,n&&this._emitter.trigger("update",e,t)},t.toString=function(){return"".concat(this.current)},t.valueOf=function(){return this.current},e}();function b(e,t,n){void 0===n&&(n=t);var r={configurable:!0,get:function(){return O(this,n).current},set:function(e){O(this,n,e).current=e}};Object.defineProperty(e,t,r),n!==t&&Object.defineProperty(e,n,{configurable:!0,get:function(){return O(this,n).current}})}function w(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length>1?b(e[0],e[1]):function(t,n){return b(t,n,e[0])}}function k(e){e.subscribe=function(e,t){this[e],O(this,e).subscribe(t)},e.unsubscribe=function(e,t){var n=this;e?e in this&&O(this,e).unsubscribe(t):s(j(this)).forEach((function(e){n.unsubscribe(e)}))}}function E(e,t){var n=f(e)?e():e,r={};return N(r),s(n).forEach((function(e){var t=n[e];C(t)?T(r,e,t):T(r,e,_(t)),w(e)(r,e)})),k(r),r}function x(e){return E(e)}function _(e){return new y(e)}function N(e){var t={};return Object.defineProperty(e,p,{get:function(){return t}}),t}function j(e,t){var n,r;e[p]||N(e);var i=e[p];if(!t){var o=null===(r=null===(n=null==e?void 0:e.constructor)||void 0===n?void 0:n.prototype)||void 0===r?void 0:r[d];o&&o.forEach((function(t){!(t in i)&&t in e&&e[t]}))}return i}function O(e,t,n){var r=j(e);return r[t]||(r[t]=_(n)),r[t]}function T(e,t,n){j(e)[t]=n}function C(e){return e&&function(e){return"object"==typeof e}(e)&&"current"in e&&"subscribe"in e&&"unsubscribe"in e}function R(e,t){var n=f(e)?{setup:e}:e;function r(){var e,r,i,o,a;return null!==(a=null!==(i=null!==(e=null==t?void 0:t())&&void 0!==e?e:null===(r=n.props)||void 0===r?void 0:r.call(n))&&void 0!==i?i:null===(o=n.data)||void 0===o?void 0:o.call(n))&&void 0!==a?a:{}}var i=new c,o=[],a=[],u=[],l=[],p={current:null},d=[],h=null,v=[],g=[],y=function(e){o.push(e)},b=function(e){h=e},w=function(e){v=e},k=function(e){g=e};return n.setup&&(p.current=n.setup({getProps:r,setInitialState:b,setEvents:w,setMethods:k,onMounted:y,onDestroy:function(e){u.push(e)},onInit:function(e){a.push(e)},emit:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.trigger.apply(i,m([e],t,!1))},on:function(e){l.push(e)}})||null),n.created&&(p.current=n.created(r())||null),n.events&&w(n.events),n.state&&b(n.state),n.methods&&k(n.methods),n.mounted&&y(n.mounted),n.destroy&&u.push(n.destroy),n.init&&a.push(n.init),n.on&&l.push((function(e,t,r){var i=n.on(e,t,r);return function(){var o;i&&i(),null===(o=n.off)||void 0===o||o.call(n,e,t,r)}})),{events:function(){return v},state:function(){var e=p.current;if(h)return h;if(e){var t=j(e);b(s(t).reduce((function(e,n){return e[n]=t[n].current,e}),{}))}return h||{}},instance:function(){return p.current},mounted:function(){var e=r();o.forEach((function(t){p.current=t(e,p.current)||p.current}))},init:function(){var e=p.current,t=r();d=v.map((function(e){var t=function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];(t=i).trigger.apply(t,m([e],n,!1))},n=p.current;return l.map((function(r){return r(n,e,t)})).filter(Boolean)})),a.forEach((function(n){n(e,t)}))},destroy:function(){d.forEach((function(e){e.forEach((function(e){e()}))})),i.off();var e=p.current,t=r();u.forEach((function(n){n(e,t)}))},methods:function(){return e=p,n={},(t=g)?(t.forEach((function(t){n[t]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.current||e.value;return i[t].apply(i,n)}})),n):n;var e,t,n},on:function(e,t){i.on(e,t)},off:function(e,t){i.off(e,t)}}}},569:(e,t,n)=>{n.d(t,{V:()=>u});var r=n(2784),i=n(4855),o=n(4392);const a={react:{icon:r.createElement(o.err,{width:"18",height:"18"}),title:"React"},angular:{icon:r.createElement(o.j3E,{width:"18",height:"18"}),title:"Angular"},vue2:{icon:r.createElement(o.IAF,{width:"18",height:"18"}),title:"Vue@2"},vue3:{icon:r.createElement(o.IAF,{width:"18",height:"18"}),title:"Vue@3"},svelte:{icon:r.createElement(o.qn2,{width:"18",height:"18"}),title:"Svelte"}};function u(e){const{tabs:t=["react","vue2","vue3","svelte"]}=e;return r.createElement(i.Z,{groupId:"options",defaultValue:"react",lazy:!0,values:t.map((e=>{const t=a[e];return{label:r.createElement("div",{className:"framework-wrapper"},t.icon,"  ",t.title),value:e,attributes:{"data-framework":e}}})),children:e.children})}},2169:(e,t,n)=>{n.d(t,{q:()=>o});var r=n(7808),i=n(2784);function o(e,t){var n=(0,i.useRef)(!0),o=(0,i.useMemo)((function(){return(0,r.tG)(e,t)}),[]),a=o.state(),u=(0,r.XP)(a),c=(0,i.useState)({})[0],s=function(e){var t=(0,i.useState)((function(){return a[e]}));c[e]={getter:!1,set:t[1],value:t[0]}};for(var l in a)s(l);n.current=!0;var f=(0,i.useMemo)((function(){return o.methods()}),[]);(0,i.useEffect)((function(){n.current=!1})),(0,i.useEffect)((function(){o.mounted();var e=o.instance();return u.forEach((function(t){e.subscribe(t,(function(e){c[t].value=e,c[t].getter&&c[t].set(e)}))})),o.init(),function(){o.destroy()}}),[]);var p=u.reduce((function(e,t){return f[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return n.current&&(c[t].getter=!0),c[t].value}}),e}),{});return o.events().forEach((function(e){p[(0,r._A)("on ".concat(e))]=function(t,n){var r=(0,i.useMemo)((function(){return o.on(e,t),t}),n);(0,i.useEffect)((function(){return o.off(e,r),o.on(e,r),function(){o.off(e,r)}}),[r])}})),(0,r.XP)(f).forEach((function(e){p[e]=f[e]})),p}},24:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>m});var r=n(8427),i=n(2784),o=n(876),a=(n(4855),n(4762)),u=(n(5449),n(569)),c=n(2169),s=n(7808);const l=e=>{let{onInit:t,onDestroy:n}=e;const r=(0,s.qj)({width:0,height:0}),i=()=>{r.width=window.innerWidth,r.height=window.innerHeight};return t((()=>{window.addEventListener("resize",i),i()})),n((()=>{window.removeEventListener("resize",i)})),r};function f(){const{width:e,height:t}=(0,c.q)(l);return i.createElement("div",{style:{textAlign:"center",padding:"20px"}}," ",e," x ",t," ")}const p={title:"useWindowSize",slug:"/examples",sidebar_position:1},d=void 0,h={unversionedId:"examples/useWindowSize",id:"examples/useWindowSize",title:"useWindowSize",description:"An example of a Reactive component that gets the browser's window size.",source:"@site/docs/examples/useWindowSize.mdx",sourceDirName:"examples",slug:"/examples",permalink:"/cfcs/docs/examples",draft:!1,editUrl:"https://github.com/naver/cfcs/edit/main/demo/docs/examples/useWindowSize.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"useWindowSize",slug:"/examples",sidebar_position:1},sidebar:"examples",next:{title:"useGesture",permalink:"/cfcs/docs/examples/use-gesture"}},v={},m=[{value:"Reactive Adapter",id:"reactive-adapter",level:3},{value:"Frameworks",id:"frameworks",level:3}],g={toc:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An example of a Reactive component that gets the browser's window size."),(0,o.kt)("p",null,"If the size of the browser changes, the ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," state values change."),(0,o.kt)("div",{className:"app-container"},(0,o.kt)(f,{mdxType:"WindowSizeApp"})),(0,o.kt)("h3",{id:"reactive-adapter"},"Reactive Adapter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { reactive } from "@cfcs/core";\n\nconst REACTIVE_ADAPTER = ({ onInit, onDestroy }) => {\n  const obj = reactive({ width: 0, height: 0 });\n  const callback = () => {\n    obj.width = window.innerWidth;\n    obj.height = window.innerHeight;\n  };\n  onInit(() => {\n    window.addEventListener("resize", callback);\n    callback();\n  });\n\n  onDestroy(() => {\n    window.removeEventListener("resize", callback);\n  });\n\n  return obj;\n};\n')),(0,o.kt)("h3",{id:"frameworks"},"Frameworks"),(0,o.kt)(u.V,{mdxType:"FrameworkTabs"},(0,o.kt)(a.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("p",null,"You can create a Reactive Component by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"@cfcs/react")," module and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive } from "@cfcs/react";\n\nfunction useWindowSize() {\n  return useReactive(REACTIVE_ADAPTER);\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export function App() {\n  const {\n    width,\n    height,\n    onResize,\n  } = useWindowSize();\n\n  return <div>{width}x{height}</div>;\n}\n"))),(0,o.kt)(a.Z,{value:"vue2",mdxType:"TabItem"},(0,o.kt)("p",null,"You can create a Reactive Component by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"@cfcs/vue2")," module and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,o.kt)("p",null),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vuejs/composition-api"},(0,o.kt)("inlineCode",{parentName:"a"},"@vue/composition-api"))," if you are going to use it in Vue 2."),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# < 2.7\n$ npm install @cfcs/vue2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive } from "@cfcs/vue2";\n\nfunction useWindowSize() {\n  return useReactive(REACTIVE_ADAPTER);\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n    <div>{width}x{height}</div>\n</template>\n<script>\nexport default {\n  setup() {\n    const {\n      width,\n      height,\n    } = useWindowSize();\n\n    return {\n      width,\n      height,\n    };\n  }\n}\n<\/script>\n"))),(0,o.kt)(a.Z,{value:"vue3",mdxType:"TabItem"},(0,o.kt)("p",null,"  You can create a Reactive Component by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"@cfcs/vue3")," module and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# >= 2.7\n$ npm install @cfcs/vue3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive } from "@cfcs/vue3";\n\nfunction useWindowSize() {\n  return useReactive(REACTIVE_ADAPTER);\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n    <div>{width}x{height}</div>\n</template>\n<script>\nexport default {\n  setup() {\n    const {\n      width,\n      height,\n    } = useWindowSize();\n\n    return {\n      width,\n      height,\n    };\n  }\n}\n<\/script>\n"))),(0,o.kt)(a.Z,{value:"svelte",mdxType:"TabItem"},(0,o.kt)("p",null,"You can create a Reactive Component by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"@cfcs/svelte")," module and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReactive")," function."),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install @cfcs/svelte\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive } from "@cfcs/svelte";\n\nfunction useWindowSize() {\n  return useReactive(REACTIVE_ADAPTER);\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nconst {\n  width,\n  height,\n} = useWindowSize();\n\n<\/script>\n<div>{$width}x{$height}</div>\n")))))}b.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);