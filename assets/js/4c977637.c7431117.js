"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7085],{9836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(8427),a=(r(2784),r(876));const c={custom_edit_url:null},i="ReactiveResult",o={unversionedId:"api/Vue2/Reactive/Type/ReactiveResult",id:"api/Vue2/Reactive/Type/ReactiveResult",title:"ReactiveResult",description:"source",source:"@site/docs/api/Vue2/Reactive/Type/ReactiveResult.mdx",sourceDirName:"api/Vue2/Reactive/Type",slug:"/api/Vue2/Reactive/Type/ReactiveResult",permalink:"/cfcs/docs/api/Vue2/Reactive/Type/ReactiveResult",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ReactiveEvents",permalink:"/cfcs/docs/api/Vue2/Reactive/Type/ReactiveEvents"},next:{title:"useReactive",permalink:"/cfcs/docs/api/Vue3/Reactive/Function/useReactive"}},s={},u=[],l={toc:u},p="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reactiveresult"},"ReactiveResult"),(0,a.kt)("div",{className:"doc-side"},(0,a.kt)("div",{className:"doc-main-source"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/vue2/src/reactive/types.ts#L21"},"source")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ReactiveResult<Instance extends ReactiveSubscribe<Record>, State extends Record<string, any> = ReactiveState<Instance>, Methods extends keyof Partial<Instance> = any, Events extends Record<string, any> = {}>= { [ key in keyof State ] :  Ref<State[key]> } & { [ key in Methods ] :  Instance[key] } & ReactiveEvents<Events>\n")))}v.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||v[f]||c;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);