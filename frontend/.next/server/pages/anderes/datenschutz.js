(()=>{var e={};e.id=523,e.ids=[523,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9153:e=>{e.exports={content:"impressum_content__QFgMH"}},1971:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>g,getStaticProps:()=>x,reportWebVitals:()=>P,routeModule:()=>j,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>f});var i=r(7093),n=r(5244),a=r(1323),c=r(2899),l=r.n(c),o=r(3414),u=r(1840),p=e([o,u]);[o,u]=p.then?(await p)():p;let d=(0,a.l)(u,"default"),x=(0,a.l)(u,"getStaticProps"),g=(0,a.l)(u,"getStaticPaths"),h=(0,a.l)(u,"getServerSideProps"),m=(0,a.l)(u,"config"),P=(0,a.l)(u,"reportWebVitals"),f=(0,a.l)(u,"unstable_getStaticProps"),_=(0,a.l)(u,"unstable_getStaticPaths"),S=(0,a.l)(u,"unstable_getStaticParams"),b=(0,a.l)(u,"unstable_getServerProps"),y=(0,a.l)(u,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/anderes/datenschutz",pathname:"/anderes/datenschutz",bundlePath:"",filename:""},components:{App:o.default,Document:l()},userland:u});s()}catch(e){s(e)}})},1840:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>u,getStaticProps:()=>p});var i=r(997),n=r(6968),a=r(5466),c=r(9153),l=r.n(c),o=e([n]);n=(o.then?(await o)():o)[0];let u=({strapiData:e})=>{let{titel:t,datenschutz:r}=e.data.attributes;return(0,i.jsxs)(i.Fragment,{children:[i.jsx("h1",{children:t}),i.jsx("div",{className:l().content,children:(0,a.Q)(r)})]})},p=async()=>({props:{strapiData:await (0,n.A_)("datenschutz-page?populate=deep")}});s()}catch(e){s(e)}})},5466:(e,t,r)=>{"use strict";r.d(t,{Q:()=>function e(t,r,i){return t.map((t,a)=>{let c=i?i+1:1;if("heading"===t.type){let r=e(t.children,"heading",c);return n().createElement(`h${t.level}`,{key:`${c}_${a}`},r)}if("list"===t.type){let r=e(t.children,"list",c),s="unordered"===t.format?"ul":"ol";return n().createElement(s,{key:`${c}_${a}`},r)}if("image"===t.type)return s.jsx("img",{src:t.image.url,alt:"Bild"},`${c}_${a}`);if("paragraph"===t.type||"quote"===t.type||"code"===t.type){let r=e(t.children,"paragraph",c);return s.jsx("p",{children:r},`${c}_${a}`)}if("text"===t.type){let e=(0,s.jsxs)(s.Fragment,{children:[t.bold&&s.jsx("b",{children:t.text}),t.italic&&s.jsx("i",{children:t.text}),!t.bold&&!t.italic&&t.text]});return""===t.text?s.jsx("br",{}):r?s.jsx(s.Fragment,{children:e}):s.jsx("p",{children:e},`${c}_${a}`)}if("link"===t.type){let r=e(t.children,"link",c);return s.jsx("a",{href:t.url,children:r},`${c}_${a}`)}if("list-item"===t.type){let r=e(t.children,"list-item",c);return s.jsx("li",{children:r},`${c}_${a}`)}return null})}});var s=r(997),i=r(6689),n=r.n(i)},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},9648:e=>{"use strict";e.exports=import("axios")},5049:e=>{"use strict";e.exports=import("react-aria")},5014:e=>{"use strict";e.exports=import("react-aria-components")},9926:e=>{"use strict";e.exports=import("zod")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[117,297,899,414],()=>r(1971));module.exports=s})();