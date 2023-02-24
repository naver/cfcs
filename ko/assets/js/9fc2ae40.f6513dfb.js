"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4528],{8070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=a(8427),n=(a(2784),a(876));const c={custom_edit_url:null},i="ReactiveAdapterResult",o={unversionedId:"api/React/Reactive/Type/ReactiveAdapterResult",id:"api/React/Reactive/Type/ReactiveAdapterResult",title:"ReactiveAdapterResult",description:"source",source:"@site/docs/api/React/Reactive/Type/ReactiveAdapterResult.mdx",sourceDirName:"api/React/Reactive/Type",slug:"/api/React/Reactive/Type/ReactiveAdapterResult",permalink:"/cfcs/ko/docs/api/React/Reactive/Type/ReactiveAdapterResult",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"useReactive",permalink:"/cfcs/ko/docs/api/React/Reactive/Function/useReactive"},next:{title:"ReactiveEvents",permalink:"/cfcs/ko/docs/api/React/Reactive/Type/ReactiveEvents"}},p={},s=[],l={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reactiveadapterresult"},"ReactiveAdapterResult"),(0,n.kt)("div",{className:"doc-side"},(0,n.kt)("div",{className:"doc-main-source"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/react/src/reactive/types.ts#L38"},"source")))),(0,n.kt)("div",{className:"doc-subtitle"},(0,n.kt)("p",null,"Get the result type of reactive component through adapter.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type ReactiveAdapterResult<Adapter extends ReactiveAdapterParam<any, any, any, any, any>>= Adapter extends ReactiveAdapterParam<Instance, State, Methods, any, Events> ? ReactiveResult<Instance, State, Methods, Events> : {}\n")),(0,n.kt)("admonition",{title:"See",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"../Function/useReactive"},"useReactive"))),(0,n.kt)("admonition",{title:"Example",type:"info"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { ReactiveAdapterResult } from "@cfcs/react";\n\ntype ReactiveComponentResult = ReactiveAdapterResult<typeof REACTIVE_ADAPTER>;\n'))))}d.isMDXComponent=!0},876:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(a),v=n,m=u["".concat(p,".").concat(v)]||u[v]||d[v]||c;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"}}]);