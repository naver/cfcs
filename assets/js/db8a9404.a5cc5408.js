"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6403],{831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var a=r(8427),n=(r(2784),r(876));const c={custom_edit_url:null},i="ReactiveAdapterResult",o={unversionedId:"api/Vue3/Reactive/Type/ReactiveAdapterResult",id:"api/Vue3/Reactive/Type/ReactiveAdapterResult",title:"ReactiveAdapterResult",description:"source",source:"@site/docs/api/Vue3/Reactive/Type/ReactiveAdapterResult.mdx",sourceDirName:"api/Vue3/Reactive/Type",slug:"/api/Vue3/Reactive/Type/ReactiveAdapterResult",permalink:"/cfcs/docs/api/Vue3/Reactive/Type/ReactiveAdapterResult",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"useReactive",permalink:"/cfcs/docs/api/Vue3/Reactive/Function/useReactive"},next:{title:"ReactiveEvents",permalink:"/cfcs/docs/api/Vue3/Reactive/Type/ReactiveEvents"}},p={},s=[],u={toc:s},l="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reactiveadapterresult"},"ReactiveAdapterResult"),(0,n.kt)("div",{className:"doc-side"},(0,n.kt)("div",{className:"doc-main-source"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/900327a/packages/vue3/src/reactive/types.ts#L70"},"source")))),(0,n.kt)("div",{className:"doc-subtitle"},(0,n.kt)("p",null,"Get the result type of reactive component through adapter.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type ReactiveAdapterResult<Adapter extends ReactiveAdapterParam<any, any, any, any, any>>= Adapter extends ReactiveAdapterParam<Instance, State, Methods, any, Events> ? VueReactiveResult<Instance, State, Methods, Events> : {}\n")),(0,n.kt)("admonition",{title:"See",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"../Function/useReactive"},"useReactive"))),(0,n.kt)("admonition",{title:"Example",type:"info"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { ReactiveAdapterResult } from "@cfcs/react";\n\ntype ReactiveComponentResult = ReactiveAdapterResult<typeof REACTIVE_ADAPTER>;\n'))))}d.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=s(r),v=n,m=l["".concat(p,".").concat(v)]||l[v]||d[v]||c;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"}}]);