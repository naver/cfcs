"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5455],{6693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=r(8427),n=(r(2784),r(876));const c={custom_edit_url:null},o="useReactive",s={unversionedId:"api/Svelte/Reactive/Function/useReactive",id:"api/Svelte/Reactive/Function/useReactive",title:"useReactive",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Svelte/Reactive/Function/useReactive.mdx",sourceDirName:"api/Svelte/Reactive/Function",slug:"/api/Svelte/Reactive/Function/useReactive",permalink:"/cfcs/ko/docs/api/Svelte/Reactive/Function/useReactive",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Ref",permalink:"/cfcs/ko/docs/api/Svelte/Common/Type/Ref"},next:{title:"ReactiveAdapterResult",permalink:"/cfcs/ko/docs/api/Svelte/Reactive/Type/ReactiveAdapterResult"}},i={},p=[],l={toc:p},u="wrapper";function v(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usereactive"},"useReactive"),(0,n.kt)("div",{className:"doc-side"},(0,n.kt)("div",{className:"doc-main-source"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/svelte/src/reactive/useReactive.ts#L57"},"source")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"useReactive<Instance,State,Methods,Props,Events>(reactiveAdapter: ReactiveAdapterParam<Instance, State, Methods, Props, Events>, props: (() => Props)): ReactiveResult<Instance, State, Methods, Events>\n")),(0,n.kt)("h4",null,"Parameters"),(0,n.kt)("div",{className:"doc-param"},(0,n.kt)("div",{className:"doc-param-header"},(0,n.kt)("span",{className:"doc-name"},"reactiveAdapter"),(0,n.kt)("div",{className:"doc-type"},(0,n.kt)("p",null,"ReactiveAdapterParam","<","Instance,","\xa0","State,","\xa0","Methods,","\xa0","Props,","\xa0","Events",">")))),(0,n.kt)("div",{className:"doc-param"},(0,n.kt)("div",{className:"doc-param-header"},(0,n.kt)("span",{className:"doc-name"},"props"),(0,n.kt)("div",{className:"doc-type"},(0,n.kt)("p",null,"(()","\xa0","=",">","\xa0","Props)")))),(0,n.kt)("h4",{className:"doc-comment-title"},"Description"),(0,n.kt)("p",null,"In Svelte, you can create reactive components through adapters."),(0,n.kt)("admonition",{title:"Example",type:"info"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useReactive } from "@cfcs/svelte";\n\nexport function useReactiveComponent() {\n  return useReactive(REACTIVE_ADAPTER);\n}\n'))))}v.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||v[d]||c;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<c;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);