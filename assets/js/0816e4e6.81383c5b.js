"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[398],{4762:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(2784),n=a(6277);const o={tabItem:"tabItem_OMyP"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},4855:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(8427),n=a(2784),o=a(6277),s=a(6152),l=a(7267),i=a(6250),c=a(7054),u=a(1495);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=a(6930);const g={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(p(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},6625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(8427),n=(a(2784),a(876));a(4855),a(4762),a(5449);const o={title:"What is CFCs",id:"what-is-cfcs",slug:"/",sidebar_position:1},s=void 0,l={unversionedId:"tutorials/what-is-cfcs",id:"tutorials/what-is-cfcs",title:"What is CFCs",description:"CFCs(Cross Framework Components) are modules that convert components into framework usage.",source:"@site/docs/tutorials/what-is-cfcs.mdx",sourceDirName:"tutorials",slug:"/",permalink:"/cfcs/docs/",draft:!1,editUrl:"https://github.com/naver/cfcs/edit/main/demo/docs/tutorials/what-is-cfcs.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is CFCs",id:"what-is-cfcs",slug:"/",sidebar_position:1},sidebar:"docs",next:{title:"CFCs Reactive",permalink:"/cfcs/docs/cfcs-reactive"}},i={},c=[{value:"Who is it good for?",id:"who-is-it-good-for",level:2},{value:"Concepts",id:"concepts",level:2},{value:"CFCs Reactive",id:"cfcs-reactive",level:3},{value:"CFCs Reactive-style components",id:"cfcs-reactive-style-components",level:4},{value:"CFCs DOM",id:"cfcs-dom",level:3},{value:"CFCs DOM-style components",id:"cfcs-dom-style-components",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CFCs(Cross Framework Components) are modules that convert components into framework usage."),(0,n.kt)("p",null,"To be able to use it in a framework means to use the framework like a framework."),(0,n.kt)("p",null,"React has a specific usage for React, and Vue has a Vue specific usage."),(0,n.kt)("p",null,"With CFCs, one code can support multiple frameworks according to the framework's usage."),(0,n.kt)("h2",{id:"who-is-it-good-for"},"Who is it good for?"),(0,n.kt)("p",null,"Many users use frameworks."),(0,n.kt)("p",null,"If it's a popular framework, it has a lot of components, but the newer the framework, the less components it has."),(0,n.kt)("p",null,"There are many well-made vanilla modules out there, and many that are not supported by the framework.",(0,n.kt)("br",{parentName:"p"}),"\n","You will mostly choose to use vanilla components through the ",(0,n.kt)("inlineCode",{parentName:"p"},"mounted")," lifecycle. However, this method will not be able to use all functions properly, and there will be components that are not suitable."),(0,n.kt)("p",null,"We thought about frameworks. Trends change and there is a possibility that we can support other frameworks someday."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"If I am a component provider, can I also create all framework components?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Is there a way to support existing components in the framework?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Can a feature be supported by multiple frameworks simultaneously?"))),(0,n.kt)("p",null,"Then, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Cross Framework Components"))," is recommended."),(0,n.kt)("h2",{id:"concepts"},"Concepts"),(0,n.kt)("p",null,"Supporting multiple frameworks means that there is code for each framework, and the size can be doubled."),(0,n.kt)("p",null,"CFCs would like to introduce to you how to support multiple frameworks with one code through Compatible."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8901).Z,width:"1326",height:"954"})),(0,n.kt)("h3",{id:"cfcs-reactive"},"CFCs Reactive"),(0,n.kt)("p",null,"CFCs Reactive can support multiple frameworks as a Reactive Component, a utility component that is state-based and does not create a UI."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4239).Z,width:"1218",height:"806"})),(0,n.kt)("p",null,"The Hooks component can provide us with a value for the state by changing the state designated as a Hook by certain conditions."),(0,n.kt)("p",null,"The state used in Hooks is called ",(0,n.kt)("strong",{parentName:"p"},"Reactive State"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/cfcs/blob/main/reactive.md"},(0,n.kt)("strong",{parentName:"a"},"See Reactive Documents")))),(0,n.kt)("h4",{id:"cfcs-reactive-style-components"},"CFCs Reactive-style components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-imready"},"ImReady"),": I'm Ready to check if the images or videos are loaded."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-axes"},"Axes"),": You can easily create a UI that responds to user actions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-conveyer"},"Conveyer"),": Drag gestures to your Native Scroll.")),(0,n.kt)("h3",{id:"cfcs-dom"},"CFCs DOM"),(0,n.kt)("p",null,"CFCs DOM supports various frameworks by delegating the DOM render function to the framework. (Soon)"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(547).Z,width:"1182",height:"836"})),(0,n.kt)("h4",{id:"cfcs-dom-style-components"},"CFCs DOM-style components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-flicking"},"Flicking"),": It's reliable, flexible and extendable carousel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-infinitegrid"},"InfiniteGrid"),": Arrange elements including content infinitely according to grid type."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-grid"},"Grid"),": Arrange items according to the type of grids."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-view360"},"View 360"),": 360\xb0 panorama image / video viewer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-view3d"},"View 3D"),": Fast & Customizable glTF 3D model viewer.")))}m.isMDXComponent=!0},876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8901:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cfcs-compatible-166e120305efec598b42b3e1db4190ba.png"},547:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cfcs-dom-7ad9e75ace75f37b885a3032461691ff.png"},4239:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cfcs-reactive-b1b4219fbe020eb91550caa5b84d4eaf.png"}}]);