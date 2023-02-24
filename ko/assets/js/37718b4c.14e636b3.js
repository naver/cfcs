"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4340],{7093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(8427),a=(n(2784),n(876));const c={custom_edit_url:null},o="ReactiveSubscribe",i={unversionedId:"api/Core/Reactive-Decorator/Function/ReactiveSubscribe",id:"api/Core/Reactive-Decorator/Function/ReactiveSubscribe",title:"ReactiveSubscribe",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Core/Reactive-Decorator/Function/ReactiveSubscribe.mdx",sourceDirName:"api/Core/Reactive-Decorator/Function",slug:"/api/Core/Reactive-Decorator/Function/ReactiveSubscribe",permalink:"/cfcs/ko/docs/api/Core/Reactive-Decorator/Function/ReactiveSubscribe",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Observe",permalink:"/cfcs/ko/docs/api/Core/Reactive-Decorator/Function/Observe"},next:{title:"useReactive",permalink:"/cfcs/ko/docs/api/React/Reactive/Function/useReactive"}},s={},u=[],l={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reactivesubscribe"},"ReactiveSubscribe"),(0,a.kt)("div",{className:"doc-side"},(0,a.kt)("div",{className:"doc-main-source"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a68c3dd/packages/core/src/reactive/decorators/ReactiveSubscribe.ts#L67"},"source")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"ReactiveSubscribe(Constructor: any): void\n")),(0,a.kt)("h4",null,"Parameters"),(0,a.kt)("div",{className:"doc-param"},(0,a.kt)("div",{className:"doc-param-header"},(0,a.kt)("span",{className:"doc-name"},"Constructor"),(0,a.kt)("div",{className:"doc-type"},(0,a.kt)("p",null,"any")))),(0,a.kt)("h4",{className:"doc-comment-title"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReactiveSubscribe")," is a class decorator and adds ",(0,a.kt)("inlineCode",{parentName:"p"},".subscribe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".unsubscribe")," methods."),(0,a.kt)("admonition",{title:"See",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"Observe"},"Observe"))),(0,a.kt)("admonition",{title:"Example",type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { ReactiveSubscribe, Observe } from "@cfcs/core";\n\n@ReactiveSubscribe\nclass Component {\n @Observe value1 = 1;\n\n constructor() {\n   requestAnimationFrame(() => {\n     this.value1 = 2;\n   });\n }\n}\n\ninterface Component extends ReactiveSubscribe<{\n value1: number;\n value2: number;\n}> {}\n\nconst component = new Component();\n\n// 1\nconsole.log(component.value1);\n\ncomponent.subscribe("value1", nextValue => {\n // When the change event occurs => (2, 2)\n console.log(nextValue, component.value2);\n});\n'))))}m.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||c;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);