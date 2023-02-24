"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8215],{6660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(8427),a=(r(2784),r(876));const c={custom_edit_url:null},i="ReactiveEvents",o={unversionedId:"api/Svelte/Reactive/Type/ReactiveEvents",id:"api/Svelte/Reactive/Type/ReactiveEvents",title:"ReactiveEvents",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Svelte/Reactive/Type/ReactiveEvents.mdx",sourceDirName:"api/Svelte/Reactive/Type",slug:"/api/Svelte/Reactive/Type/ReactiveEvents",permalink:"/cfcs/ko/docs/api/Svelte/Reactive/Type/ReactiveEvents",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ReactiveAdapterResult",permalink:"/cfcs/ko/docs/api/Svelte/Reactive/Type/ReactiveAdapterResult"},next:{title:"ReactiveResult",permalink:"/cfcs/ko/docs/api/Svelte/Reactive/Type/ReactiveResult"}},s={},l=[],p={toc:l},u="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reactiveevents"},"ReactiveEvents"),(0,a.kt)("div",{className:"doc-side"},(0,a.kt)("div",{className:"doc-main-source"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a68c3dd/packages/svelte/src/reactive/types.ts#L13"},"source")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type ReactiveEvents<Events extends Record<string, any>>= { [ K in keyof Events as `on"${Capitalize<string & K>}` ] :  ((callback: ((...args: ReactiveEventParameters<Events, K & string>) => void)) => void) }\n')))}v.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||v[d]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);