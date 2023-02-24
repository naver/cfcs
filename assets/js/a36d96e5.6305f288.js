"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4113],{2737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(8427),a=(n(2784),n(876));const o={custom_edit_url:null},c="useRef",i={unversionedId:"api/Svelte/Common/Function/useRef",id:"api/Svelte/Common/Function/useRef",title:"useRef",description:"source",source:"@site/docs/api/Svelte/Common/Function/useRef.mdx",sourceDirName:"api/Svelte/Common/Function",slug:"/api/Svelte/Common/Function/useRef",permalink:"/cfcs/docs/api/Svelte/Common/Function/useRef",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ReactiveResult",permalink:"/cfcs/docs/api/React/Reactive/Type/ReactiveResult"},next:{title:"Ref",permalink:"/cfcs/docs/api/Svelte/Common/Type/Ref"}},l={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useref"},"useRef"),(0,a.kt)("div",{className:"doc-side"},(0,a.kt)("div",{className:"doc-main-source"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/svelte/src/reactive/useReactive.ts#L30"},"source")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useRef<T>(defaultValue: T): Ref<T>\n")),(0,a.kt)("h4",null,"Parameters"),(0,a.kt)("div",{className:"doc-param"},(0,a.kt)("div",{className:"doc-param-header"},(0,a.kt)("span",{className:"doc-name"},"defaultValue"),(0,a.kt)("div",{className:"doc-type"},(0,a.kt)("p",null,"T")))),(0,a.kt)("h4",{className:"doc-comment-title"},"Description"),(0,a.kt)("p",null,"Instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"bind:this"),", you can bind this via the ",(0,a.kt)("inlineCode",{parentName:"p"},"use:")," directive."),(0,a.kt)("admonition",{title:"See",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"../Type/Ref"},"Ref"))),(0,a.kt)("admonition",{title:"Example",type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script>\nimport { onMount } from "svelte";\nimport { useRef } from "@cfcs/svelte";\n\nconst elementRef = useRef();\n\nonMount(() => {\n  console.log(elementRef.current);\n});\n<\/script>\n<div use:elementRef>Element</div>\n'))))}m.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);