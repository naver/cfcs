"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6886],{569:(e,t,n)=>{n.d(t,{V:()=>s});var r=n(2784),a=n(4855),i=n(4392);const o={react:{icon:r.createElement(i.err,{width:"18",height:"18"}),title:"React"},angular:{icon:r.createElement(i.j3E,{width:"18",height:"18"}),title:"Angular"},vue2:{icon:r.createElement(i.IAF,{width:"18",height:"18"}),title:"Vue@2"},vue3:{icon:r.createElement(i.IAF,{width:"18",height:"18"}),title:"Vue@3"},svelte:{icon:r.createElement(i.qn2,{width:"18",height:"18"}),title:"Svelte"}};function s(e){const{tabs:t=["react","vue2","vue3","svelte"]}=e;return r.createElement(a.Z,{groupId:"options",defaultValue:"react",lazy:!0,values:t.map((e=>{const t=o[e];return{label:r.createElement("div",{className:"framework-wrapper"},t.icon,"  ",t.title),value:e,attributes:{"data-framework":e}}})),children:e.children})}},7821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(8427),a=(n(2784),n(876)),i=(n(4855),n(4762)),o=(n(5449),n(569));const s={title:"3. Use Events",slug:"/best-practice/use-events",sidebar_position:4},c=void 0,l={unversionedId:"tutorials/best-practice/use-events",id:"tutorials/best-practice/use-events",title:"3. Use Events",description:"You can check the state value change through re-rendering in react, watchEffect in vue, and $ in svelte.",source:"@site/docs/tutorials/best-practice/use-events.mdx",sourceDirName:"tutorials/best-practice",slug:"/best-practice/use-events",permalink:"/cfcs/ko/docs/best-practice/use-events",draft:!1,editUrl:"https://github.com/naver/cfcs/edit/main/demo/docs/tutorials/best-practice/use-events.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"3. Use Events",slug:"/best-practice/use-events",sidebar_position:4},sidebar:"docs",previous:{title:"2. Use Lifecycle",permalink:"/cfcs/ko/docs/best-practice/use-lifecycle"},next:{title:"4. Use Methods",permalink:"/cfcs/ko/docs/best-practice/use-methods"}},p={},u=[{value:"Frameworks",id:"frameworks",level:3}],d={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can check the state value change through re-rendering in react, watchEffect in vue, and $ in svelte."),(0,a.kt)("p",null,"If you don't use state, re-rendering won't happen.",(0,a.kt)("br",{parentName:"p"}),"\n","In addition, events are provided with a lot of information including status."),(0,a.kt)("p",null,"Set the events to be exposed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"setEvents")," function.",(0,a.kt)("br",{parentName:"p"}),"\n","You just need to tell how to register the event through ",(0,a.kt)("inlineCode",{parentName:"p"},"on"),".",(0,a.kt)("br",{parentName:"p"}),"\n","If you want to trigger an event manually without using ",(0,a.kt)("inlineCode",{parentName:"p"},"on"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"emit")," function."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Core/Reactive/Interface/ReactiveSetup"},"See Function Adapter's setup")),(0,a.kt)("p",null,"The following code changes the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," values when the window size is changed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { reactive } from "@cfcs/core";\n\nconst REACTIVE_ADAPTER = ({ setEvents, on, emit, onInit, onDestroy }) => {\n  setEvents(["resize"]);\n\n  const obj = reactive({\n    width: 0,\n    height: 0,\n  });\n  const onResize = e => {\n    obj.width = window.innerWidth;\n    obj.height = window.innerHeight;\n    // If you don\'t use the `on` function, manually trigger the event via `emit`.\n    // emit("resize", e);\n  };\n\n  on((eventName, callback) => {\n    // register\n    window.addEventListener(eventName, callback);\n    return () => {\n      // unregister\n      window.removeEventListener(eventName, callback);\n    };\n  });\n\n  onInit(() => {\n    window.addEventListener("resize", onResize);\n  });\n\n  onDestroy(() => {\n    window.removeEventListener("resize", onResize);\n  });\n\n\n  return obj;\n};\n')),(0,a.kt)("h3",{id:"frameworks"},"Frameworks"),(0,a.kt)("p",null,"Events in the framework can be used as calls with an ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," prefix and a name in camelcase format.",(0,a.kt)("br",{parentName:"p"}),"\n","ex) ",(0,a.kt)("inlineCode",{parentName:"p"},"resize")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"onResize")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"onResize(() => {});\n")),(0,a.kt)(o.V,{mdxType:"FrameworkTabs"},(0,a.kt)(i.Z,{value:"react",mdxType:"TabItem"},"The second parameter of an event in React is a dependency array, a usage similar to `useEffect`.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useReactive } from "@cfcs/react";\n\nexport function App() {\n  const {\n    width,\n    height,\n    onResize,\n  } = useReactive(REACTIVE_ADAPTER);\n\n  onResize(e => {\n    // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent\n    console.log(e);\n  }, []);\n  return <div>{width}x{height}</div>;\n}\n'))),(0,a.kt)(i.Z,{value:"vue2",mdxType:"TabItem"},(0,a.kt)("p",null,"State in vue is ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#ref"},(0,a.kt)("inlineCode",{parentName:"a"},"ref")),", and in ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", you need to access it as ",(0,a.kt)("inlineCode",{parentName:"p"},".value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>{width}x{height}</div>\n</template>\n<script>\nimport { useReactive } from "@cfcs/vue2";\n\nexport default {\n  setup() {\n    const {\n      width,\n      height,\n      onResize,\n    } = useReactive(REACTIVE_ADAPTER);\n\n    onResize(e => {\n      // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent\n      console.log(e);\n    });\n    return {\n      width,\n      height,\n    };\n  }\n}\n<\/script>\n'))),(0,a.kt)(i.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("p",null,"State in vue is ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#ref"},(0,a.kt)("inlineCode",{parentName:"a"},"ref")),", and in ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", you need to access it as ",(0,a.kt)("inlineCode",{parentName:"p"},".value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>{width}x{height}</div>\n</template>\n<script>\nimport { useReactive } from "@cfcs/vue3";\n\nexport default {\n  setup() {\n    const {\n      width,\n      height,\n      onResize,\n    } = useReactive(REACTIVE_ADAPTER);\n\n    onResize(e => {\n      // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent\n      console.log(e);\n    });\n    return {\n      width,\n      height,\n    };\n  }\n}\n<\/script>\n'))),(0,a.kt)(i.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"The state in svelte uses ",(0,a.kt)("a",{parentName:"p",href:"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values"},"store")," and accesses it with $ to get the value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script>\nimport { useReactive } from "@cfcs/svelte";\n\nconst {\n  width,\n  height,\n  onResize,\n} = useReactive(REACTIVE_ADAPTER);\n\nonResize(e => {\n  // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent\n  console.log(e);\n});\n\n<\/script>\n<div>{$width}x{$height}</div>\n')))))}h.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);