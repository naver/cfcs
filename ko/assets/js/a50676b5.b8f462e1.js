"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3711],{8590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(8427),o=(n(2784),n(876));const a={custom_edit_url:null},c="Ref",i={unversionedId:"api/Svelte/Common/Type/Ref",id:"api/Svelte/Common/Type/Ref",title:"Ref",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Svelte/Common/Type/Ref.mdx",sourceDirName:"api/Svelte/Common/Type",slug:"/api/Svelte/Common/Type/Ref",permalink:"/cfcs/ko/docs/api/Svelte/Common/Type/Ref",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"useRef",permalink:"/cfcs/ko/docs/api/Svelte/Common/Function/useRef"},next:{title:"useReactive",permalink:"/cfcs/ko/docs/api/Svelte/Reactive/Function/useReactive"}},p={},l=[],s={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ref"},"Ref"),(0,o.kt)("div",{className:"doc-side"},(0,o.kt)("div",{className:"doc-main-source"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/900327a/packages/svelte/src/reactive/types.ts#L25"},"source")))),(0,o.kt)("div",{className:"doc-subtitle"},(0,o.kt)("p",null,"Ref Function + Object type that can use ",(0,o.kt)("inlineCode",{parentName:"p"},"use:")," directive in svelte")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Ref<T>= ((value: T) => {\n  destroy(): void\n}) & {\n  current?: T\n}\n")),(0,o.kt)("admonition",{title:"See",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../Function/useRef"},"useRef"))))}f.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);