"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4889],{6251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(8427),a=(r(2784),r(876));const c={custom_edit_url:null},o="ReactiveState",i={unversionedId:"api/Core/Reactive/Type/ReactiveState",id:"api/Core/Reactive/Type/ReactiveState",title:"ReactiveState",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Core/Reactive/Type/ReactiveState.mdx",sourceDirName:"api/Core/Reactive/Type",slug:"/api/Core/Reactive/Type/ReactiveState",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ReactiveState",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ReactiveSetupAdapter",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ReactiveSetupAdapter"},next:{title:"Observe",permalink:"/cfcs/ko/docs/api/Core/Reactive-Decorator/Function/Observe"}},p={},s=[],u={toc:s},l="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reactivestate"},"ReactiveState"),(0,a.kt)("div",{className:"doc-side"},(0,a.kt)("div",{className:"doc-main-source"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/798b4fb/packages/core/src/reactive/types.ts#L46"},"source")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type ReactiveState<Instance extends [ReactiveSubscribe](../../Reactive-Decorator/Function/ReactiveSubscribe)<object>>= Instance extends ReactiveObject<State> | ReactiveSubscribe<State> ? Omit<State, "subscribe" | "unsubscribe"> : never\n')))}v.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),f=a,d=l["".concat(p,".").concat(f)]||l[f]||v[f]||c;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);