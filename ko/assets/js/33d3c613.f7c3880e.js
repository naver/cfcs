"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1261],{610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(8427),a=(r(2784),r(876));const c={custom_edit_url:null},o="ReactiveSetupAdapter",i={unversionedId:"api/Core/Reactive/Type/ReactiveSetupAdapter",id:"api/Core/Reactive/Type/ReactiveSetupAdapter",title:"ReactiveSetupAdapter",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Core/Reactive/Type/ReactiveSetupAdapter.mdx",sourceDirName:"api/Core/Reactive/Type",slug:"/api/Core/Reactive/Type/ReactiveSetupAdapter",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ReactiveSetupAdapter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ReactiveObject",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ReactiveObject"},next:{title:"ReactiveState",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ReactiveState"}},p={},s=[],u={toc:s},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reactivesetupadapter"},"ReactiveSetupAdapter"),(0,a.kt)("div",{className:"doc-side"},(0,a.kt)("div",{className:"doc-main-source"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L91"},"source")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ReactiveSetupAdapter<Instance extends [ReactiveSubscribe](../../Reactive-Decorator/Function/ReactiveSubscribe)<Record>, State extends Record<string, any> = [ReactiveState](ReactiveState)<Instance>, Methods extends keyof Partial<Instance> = never, Props = any, Events extends Record<string, any> = {}>= ((setup: ReactiveSetup<Instance, State, Methods, Props, Events>) => Instance | undefined | void)\n")))}d.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),v=a,f=l["".concat(p,".").concat(v)]||l[v]||d[v]||c;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"}}]);