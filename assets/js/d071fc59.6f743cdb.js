"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2543],{569:(e,t,n)=>{n.d(t,{V:()=>s});var a=n(2784),r=n(4855),i=n(4392);const c={react:{icon:a.createElement(i.err,{width:"18",height:"18"}),title:"React"},angular:{icon:a.createElement(i.j3E,{width:"18",height:"18"}),title:"Angular"},vue2:{icon:a.createElement(i.IAF,{width:"18",height:"18"}),title:"Vue@2"},vue3:{icon:a.createElement(i.IAF,{width:"18",height:"18"}),title:"Vue@3"},svelte:{icon:a.createElement(i.qn2,{width:"18",height:"18"}),title:"Svelte"}};function s(e){const{tabs:t=["react","vue2","vue3","svelte"]}=e;return a.createElement(r.Z,{groupId:"options",defaultValue:"react",lazy:!0,values:t.map((e=>{const t=c[e];return{label:a.createElement("div",{className:"framework-wrapper"},t.icon,"  ",t.title),value:e,attributes:{"data-framework":e}}})),children:e.children})}},2978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(8427),r=(n(2784),n(876)),i=(n(4855),n(4762)),c=(n(5449),n(569));const s={title:"1. Use State And Adapter",slug:"/best-practice/use-state",sidebar_position:2},o=void 0,l={unversionedId:"tutorials/best-practice/use-state",id:"tutorials/best-practice/use-state",title:"1. Use State And Adapter",description:"Use State",source:"@site/docs/tutorials/best-practice/use-state.mdx",sourceDirName:"tutorials/best-practice",slug:"/best-practice/use-state",permalink:"/cfcs/docs/best-practice/use-state",draft:!1,editUrl:"https://github.com/naver/cfcs/edit/main/demo/docs/tutorials/best-practice/use-state.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"1. Use State And Adapter",slug:"/best-practice/use-state",sidebar_position:2},sidebar:"docs",previous:{title:"Best Practice",permalink:"/cfcs/docs/best-practice"},next:{title:"2. Use Lifecycle",permalink:"/cfcs/docs/best-practice/use-lifecycle"}},p={},u=[{value:"Use State",id:"use-state",level:2},{value:"Inline Object State",id:"inline-object-state",level:3},{value:"Class State",id:"class-state",level:3},{value:"Use Adapter With State",id:"use-adapter-with-state",level:2},{value:"Frameworks",id:"frameworks",level:3}],d={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"use-state"},"Use State"),(0,r.kt)("p",null,"You can simply define the state via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Core/Reactive/Function/reactive"},(0,r.kt)("inlineCode",{parentName:"a"},"reactive"))," function."),(0,r.kt)("h3",{id:"inline-object-state"},"Inline Object State"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { reactive } from "@cfcs/core";\n\nconst obj = reactive({\n  width: 0,\n  height: 0,\n});\n')),(0,r.kt)("h3",{id:"class-state"},"Class State"),(0,r.kt)("p",null,"If you have a class component that you manage, it is also a good choice to support Reactive in the class component."),(0,r.kt)("p",null,"Make the class reactive through the class decorator called ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Core/Reactive-Decorator/Function/ReactiveSubscribe"},(0,r.kt)("inlineCode",{parentName:"a"},"ReactiveSubscribe")),"."),(0,r.kt)("p",null,"The state is set through a property decorator called ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Core/Reactive-Decorator/Function/Observe"},(0,r.kt)("inlineCode",{parentName:"a"},"Observe")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { ReactiveSubscribe, Observe } from "@cfcs/core";\n\n@ReactiveSubscribe\nclass ClassComponent {\n  @Observe width = 0;\n  @Observe height = 0;\n}\n\nconst obj = new ClassComponent();\n')),(0,r.kt)("h2",{id:"use-adapter-with-state"},"Use Adapter With State"),(0,r.kt)("p",null,"Reactive Adapter is an intermediate stage code to support the framework."),(0,r.kt)("p",null,"If you can create an adapter, you can create a reactive component in the framework supported by CFCS."),(0,r.kt)("p",null,"It provides a reactive adapter in the form of a function, and you can complete the adapter by writing the code for the function."),(0,r.kt)("p",null,"The return value of Adapter returns ",(0,r.kt)("a",{parentName:"p",href:"#inline-object-state"},"inline object")," or ",(0,r.kt)("a",{parentName:"p",href:"#class-state"},"class instance")," or void as an instance.",(0,r.kt)("br",{parentName:"p"}),"\n","If void is returned, an instance can be set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mounted")," lifecycle. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/best-practice/use-lifecycle"},(0,r.kt)("inlineCode",{parentName:"a"},"Use Lifecycle")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const REACTIVE_ADAPTER = () => {\n};\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Core/Reactive/Interface/ReacitveSetup"},"See Function Adapter's setup")),(0,r.kt)("p",null,"The following code is an example of defining ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," state."),(0,r.kt)("p",null,"And when the state changes, re-rendering occurs in the parent component (or app) that used the component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { reactive } from "@cfcs/core";\n\nconst REACTIVE_ADAPTER = () => {\n  const obj = reactive({\n    width: 0,\n    height: 0,\n  });\n\n  // Changing the state in the created Lifecycle will not cause a re-render.\n  // obj.width = 100;\n  // obj.height = 100;\n\n  return obj;\n};\n')),(0,r.kt)("h3",{id:"frameworks"},"Frameworks"),(0,r.kt)(c.V,{mdxType:"FrameworkTabs"},(0,r.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("p",null,"If you don't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," value in the render lifecycle, re-rendering won't happen even if the ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," state changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive } from "@cfcs/react";\n\nexport function App() {\n  const {\n    width,\n    // height,\n  } = useReactive(REACTIVE_ADAPTER);\n\n  return <div>{width}</div>;\n}\n'))),(0,r.kt)(i.Z,{value:"vue2",mdxType:"TabItem"},(0,r.kt)("p",null,"State in vue is ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#ref"},(0,r.kt)("inlineCode",{parentName:"a"},"ref")),", and in ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", you need to access it as ",(0,r.kt)("inlineCode",{parentName:"p"},".value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>{width}x{height}</div>\n</template>\n<script>\nimport { useReactive } from "@cfcs/vue2";\n\nexport default {\n  setup() {\n    const {\n      width,\n      height,\n    } = useReactive(REACTIVE_ADAPTER);\n\n    return {\n      width,\n      height,\n    };\n  }\n}\n<\/script>\n'))),(0,r.kt)(i.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("p",null,"State in vue is ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#ref"},(0,r.kt)("inlineCode",{parentName:"a"},"ref")),", and in ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", you need to access it as ",(0,r.kt)("inlineCode",{parentName:"p"},".value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>{width}x{height}</div>\n</template>\n<script>\nimport { useReactive } from "@cfcs/vue3";\n\nexport default {\n  setup() {\n    const {\n      width,\n      height,\n    } = useReactive(REACTIVE_ADAPTER);\n\n    return {\n      width,\n      height,\n    };\n  }\n}\n<\/script>\n'))),(0,r.kt)(i.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("p",null,"The state in svelte uses ",(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values"},"store")," and accesses it with $ to get the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script>\nimport { useReactive } from "@cfcs/svelte";\n\nconst {\n  width,\n  height,\n} = useReactive(REACTIVE_ADAPTER);\n\n<\/script>\n<div>{$width}x{$height}</div>\n')))))}h.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);