"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4906],{4762:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(2784),a=r(6277);const l={tabItem:"tabItem_OMyP"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},4855:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(8427),a=r(2784),l=r(6277),o=r(6152),c=r(7267),s=r(6250),u=r(7054),i=r(1495);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=h(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=p({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var v=r(6930);const f={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function g(e){let{className:t,block:r,selectedValue:c,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{const t=e.currentTarget,r=i.indexOf(t),n=u[r].value;n!==c&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:h},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":c===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},4392:(e,t,r)=>{r.d(t,{IAF:()=>m,err:()=>u,j3E:()=>c,qn2:()=>d});var n=r(2784);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=["size","color","stroke"];function c(e){var t=e.size,r=void 0===t?24:t,c=e.color,s=void 0===c?"currentColor":c,u=e.stroke,i=void 0===u?2:u,d=l(e,o);return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-angular",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:i,stroke:s,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z"}),n.createElement("path",{d:"M9 15l3 -8l3 8"}),n.createElement("path",{d:"M10 13h4"}))}var s=["size","color","stroke"];function u(e){var t=e.size,r=void 0===t?24:t,o=e.color,c=void 0===o?"currentColor":o,u=e.stroke,i=void 0===u?2:u,d=l(e,s);return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-react",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:i,stroke:c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"}),n.createElement("path",{d:"M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"}),n.createElement("path",{d:"M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -1.998"}),n.createElement("path",{d:"M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 1.999"}),n.createElement("path",{d:"M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"}),n.createElement("path",{d:"M11.998 18.574c1.926 1.893 3.821 2.768 5.002 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"}),n.createElement("path",{d:"M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"}))}var i=["size","color","stroke"];function d(e){var t=e.size,r=void 0===t?24:t,o=e.color,c=void 0===o?"currentColor":o,s=e.stroke,u=void 0===s?2:s,d=l(e,i);return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-svelte",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:u,stroke:c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16"}),n.createElement("path",{d:"M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16"}))}var h=["size","color","stroke"];function m(e){var t=e.size,r=void 0===t?24:t,o=e.color,c=void 0===o?"currentColor":o,s=e.stroke,u=void 0===s?2:s,i=l(e,h);return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-vue",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:u,stroke:c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),n.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M16.5 4l-4.5 8l-4.5 -8"}),n.createElement("path",{d:"M3 4l9 16l9 -16"}))}}}]);