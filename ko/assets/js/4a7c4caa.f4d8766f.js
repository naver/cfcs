"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3324],{4498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=a(8427),c=(a(2784),a(876));const n={custom_edit_url:null},r="ReactiveSetup",o={unversionedId:"api/Core/Reactive/Interface/ReactiveSetup",id:"api/Core/Reactive/Interface/ReactiveSetup",title:"ReactiveSetup",description:"source",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Core/Reactive/Interface/ReactiveSetup.mdx",sourceDirName:"api/Core/Reactive/Interface",slug:"/api/Core/Reactive/Interface/ReactiveSetup",permalink:"/cfcs/ko/docs/api/Core/Reactive/Interface/ReactiveSetup",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ReactiveAdapter",permalink:"/cfcs/ko/docs/api/Core/Reactive/Interface/ReactiveAdapter"},next:{title:"ParitalReactiveObject",permalink:"/cfcs/ko/docs/api/Core/Reactive/Type/ParitalReactiveObject"}},d={},l=[{value:"Methods",id:"methods",level:2},{value:"emit",id:"emit",level:3},{value:"getProps",id:"getProps",level:3},{value:"on",id:"on",level:3},{value:"onDestroy",id:"onDestroy",level:3},{value:"onInit",id:"onInit",level:3},{value:"onMounted",id:"onMounted",level:3},{value:"setEvents",id:"setEvents",level:3},{value:"setInitialState",id:"setInitialState",level:3},{value:"setMethods",id:"setMethods",level:3}],i={toc:l},m="wrapper";function p(e){let{components:t,...a}=e;return(0,c.kt)(m,(0,s.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"reactivesetup"},"ReactiveSetup"),(0,c.kt)("div",{className:"doc-side"},(0,c.kt)("div",{className:"doc-main-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L14"},"source")))),(0,c.kt)("div",{className:"doc-subtitle"},(0,c.kt)("p",null,"Function type Reactive Adapter's first argument setup")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"interface ReactiveSetup<Instance extends [ReactiveSubscribe](../../Reactive-Decorator/Function/ReactiveSubscribe)<Record>, State extends Record<string, any> = [ReactiveState](../Type/ReactiveState)<Instance>, Methods extends keyof Partial<Instance> = never, Props = any, Events extends Record<string, any> = {}>\n")),(0,c.kt)("div",{className:"doc-summary doc-methods"},(0,c.kt)("h3",{className:"doc-summary-title"},"Methods"),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#emit"},"emit")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Trigger events directly externally."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#getProps"},"getProps")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Get external props."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#on"},"on")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Register events defined between Mounted and Init Lifecycle."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#onDestroy"},"onDestroy")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Register hooks to occur in Destroy Lifecycle."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#onInit"},"onInit")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Register hooks to occur in Init Lifecycle."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#onMounted"},"onMounted")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Register hooks that will occur in Mounted Lifecycle."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#setEvents"},"setEvents")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Set the events to be exposed."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#setInitialState"},"setInitialState")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Set the first Initial state.",(0,c.kt)("br",{parentName:"p"}),"\n","Do not set the return value if it exists."))),(0,c.kt)("div",{className:"doc-summary-item"},(0,c.kt)("div",{className:"doc-summary-name"},(0,c.kt)("a",{href:"#setMethods"},"setMethods")),(0,c.kt)("div",{className:"doc-summary-desc"},(0,c.kt)("p",null,"Sets the functions to be exposed in the instance.")))),(0,c.kt)("h2",{id:"methods"},"Methods"),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"emit"},"emit")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"emit"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"emit<EventName>(eventName: EventName, ...params: EventTriggerParams<Events, EventName>): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Trigger events directly externally.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"eventName"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"EventName")))),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"params"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"EventTriggerParams","<","Events,","\xa0","EventName",">"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L57"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"getProps"},"getProps")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"getProps"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"Props"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"getProps(): Props\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Get external props."))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L24"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"on"},"on")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"on"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"on(callback: (<EventName>(instance: Instance, eventName: EventName, listener: ReactiveEventCallback<Events, EventName>) => void | (() => void))): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Register events defined between Mounted and Init Lifecycle.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"callback"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"(","<","EventName",">","(instance:","\xa0","Instance,","\xa0","eventName:","\xa0","EventName,","\xa0","listener:","\xa0",(0,c.kt)("a",{parentName:"p",href:"../Type/ReactiveEventCallback"},"ReactiveEventCallback"),"<","Events,","\xa0","EventName",">",")","\xa0","=",">","\xa0","void","\xa0","|","\xa0","(()","\xa0","=",">","\xa0","void))"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L53"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"onDestroy"},"onDestroy")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"onDestroy"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"onDestroy(callback: ((instance: Instance, props: Props) => void)): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Register hooks to occur in Destroy Lifecycle.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"callback"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"((instance:","\xa0","Instance,","\xa0","props:","\xa0","Props)","\xa0","=",">","\xa0","void)"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L49"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"onInit"},"onInit")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"onInit"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"onInit(callback: ((instance: Instance, props: Props) => void)): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Register hooks to occur in Init Lifecycle.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"callback"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"((instance:","\xa0","Instance,","\xa0","props:","\xa0","Props)","\xa0","=",">","\xa0","void)"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L45"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"onMounted"},"onMounted")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"onMounted"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"onMounted(callback: ((props: Props, instance: null | Instance) => void | Instance)): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Register hooks that will occur in Mounted Lifecycle.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"callback"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"((props:","\xa0","Props,","\xa0","instance:","\xa0","null","\xa0","|","\xa0","Instance)","\xa0","=",">","\xa0","void","\xa0","|","\xa0","Instance)"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L41"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"setEvents"},"setEvents")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"setEvents"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"setEvents(events: readonly (keyof Events)[]): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Set the events to be exposed.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"events"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"readonly","\xa0","(keyof","\xa0","Events)[]"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L37"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"setInitialState"},"setInitialState")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"setInitialState"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"setInitialState(state: State): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Set the first Initial state.",(0,c.kt)("br",{parentName:"p"}),"\n","Do not set the return value if it exists.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"state"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"State"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L29"},"source")))),(0,c.kt)("div",{className:"doc-header-hidden"},(0,c.kt)("h3",{id:"setMethods"},"setMethods")),(0,c.kt)("div",{className:"doc-entry"},(0,c.kt)("details",{open:!0,className:"doc-method"},(0,c.kt)("summary",{className:"doc-member"},(0,c.kt)("span",{className:"doc-name"},"setMethods"),(0,c.kt)("span",{className:"doc-type"},(0,c.kt)("p",null,"void"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"setMethods(methods: readonly Methods[]): void\n")),(0,c.kt)("div",{className:"doc-desc"},(0,c.kt)("p",null,"Sets the functions to be exposed in the instance.")),(0,c.kt)("h4",null,"Parameters"),(0,c.kt)("div",{className:"doc-param"},(0,c.kt)("div",{className:"doc-param-header"},(0,c.kt)("span",{className:"doc-name"},"methods"),(0,c.kt)("div",{className:"doc-type"},(0,c.kt)("p",null,"readonly","\xa0","Methods[]"))))),(0,c.kt)("div",{className:"doc-source"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/naver/cfcs/blob/a6da0ec/packages/core/src/reactive/ReactiveAdapter.ts#L33"},"source")))))}p.isMDXComponent=!0},876:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>v});var s=a(2784);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,c=function(e,t){if(null==e)return{};var a,s,c={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=s.createContext({}),l=function(e){var t=s.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=l(e.components);return s.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=l(a),k=c,v=m["".concat(d,".").concat(k)]||m[k]||p[k]||n;return a?s.createElement(v,r(r({ref:t},i),{},{components:a})):s.createElement(v,r({ref:t},i))}));function v(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,r=new Array(n);r[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:c,r[1]=o;for(var l=2;l<n;l++)r[l]=a[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);