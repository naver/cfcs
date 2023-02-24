"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6297],{9930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=a(8427),n=(a(2784),a(876));const c={custom_edit_url:null},o="useReactive",i={unversionedId:"api/Vue2/Reactive/Function/useReactive",id:"api/Vue2/Reactive/Function/useReactive",title:"useReactive",description:"source",source:"@site/docs/api/Vue2/Reactive/Function/useReactive.mdx",sourceDirName:"api/Vue2/Reactive/Function",slug:"/api/Vue2/Reactive/Function/useReactive",permalink:"/cfcs/docs/api/Vue2/Reactive/Function/useReactive",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ReactiveResult",permalink:"/cfcs/docs/api/Svelte/Reactive/Type/ReactiveResult"},next:{title:"ReactiveAdapterResult",permalink:"/cfcs/docs/api/Vue2/Reactive/Type/ReactiveAdapterResult"}},s={},p=[],u={toc:p},l="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usereactive"},"useReactive"),(0,n.kt)("div",{className:"doc-side"},(0,n.kt)("div",{className:"doc-main-source"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/900327a/packages/vue2/src/reactive/useReactive.ts#L29"},"source")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"useReactive<Instance,State,Methods,Props,Events>(reactiveAdapter: ReactiveAdapterParam<Instance, State, Methods, Props, Events>, props: (() => Props)): ReactiveResult<Instance, State, Methods, Events>\n")),(0,n.kt)("h4",null,"Parameters"),(0,n.kt)("div",{className:"doc-param"},(0,n.kt)("div",{className:"doc-param-header"},(0,n.kt)("span",{className:"doc-name"},"reactiveAdapter"),(0,n.kt)("div",{className:"doc-type"},(0,n.kt)("p",null,"ReactiveAdapterParam","<","Instance,","\xa0","State,","\xa0","Methods,","\xa0","Props,","\xa0","Events",">")))),(0,n.kt)("div",{className:"doc-param"},(0,n.kt)("div",{className:"doc-param-header"},(0,n.kt)("span",{className:"doc-name"},"props"),(0,n.kt)("div",{className:"doc-type"},(0,n.kt)("p",null,"(()","\xa0","=",">","\xa0","Props)")))),(0,n.kt)("h4",{className:"doc-comment-title"},"Description"),(0,n.kt)("p",null,"In Vue 2, you can create reactive components through adapters."),(0,n.kt)("admonition",{title:"Example",type:"info"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useReactive } from "@cfcs/vue2";\n\nexport function useReactiveComponent() {\n  return useReactive(REACTIVE_ADAPTER);\n}\n'))))}d.isMDXComponent=!0},876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,v=l["".concat(s,".").concat(m)]||l[m]||d[m]||c;return a?r.createElement(v,o(o({ref:t},u),{},{components:a})):r.createElement(v,o({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);