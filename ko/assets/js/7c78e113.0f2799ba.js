"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5668],{464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=r(8427),n=(r(2784),r(876));const c={custom_edit_url:null},o="ReactiveAdapterParam",i={unversionedId:"api/Core/Reactive/Type/ReactiveAdapterParam",id:"api/Core/Reactive/Type/ReactiveAdapterParam",title:"ReactiveAdapterParam",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Core/Reactive/Type/ReactiveAdapterParam.mdx",sourceDirName:"api/Core/Reactive/Type",slug:"/api/Core/Reactive/Type/ReactiveAdapterParam",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ReactiveAdapterParam",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ParitalReactiveObject",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ParitalReactiveObject"},next:{title:"ReactiveEventCallback",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ReactiveEventCallback"}},p={},s=[],l={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reactiveadapterparam"},"ReactiveAdapterParam"),(0,n.kt)("div",{className:"doc-side"},(0,n.kt)("div",{className:"doc-main-source"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/900327a/packages/core/src/reactive/ReactiveAdapter.ts#L64"},"source")))),(0,n.kt)("div",{className:"doc-subtitle"},(0,n.kt)("p",null,"Reactive Adapter types")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type ReactiveAdapterParam<Instance extends [ReactiveSubscribe](../../Reactive-Decorator/Function/ReactiveSubscribe)<Record>, State extends Record<string, any> = [ReactiveState](ReactiveState)<Instance>, Methods extends keyof Partial<Instance> = never, Props = any, Events extends Record<string, any> = {}>= ReactiveAdapter<Instance, State, Methods, Props, Events> | ReactiveSetupAdapter<Instance, State, Methods, Props, Events>\n")))}d.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),v=n,m=u["".concat(p,".").concat(v)]||u[v]||d[v]||c;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"}}]);