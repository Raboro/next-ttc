(()=>{var e={};e.id=906,e.ids=[906,888,660],e.modules={7094:e=>{e.exports={eventWrapper:"Events_eventWrapper__rhzfM",noImage:"Events_noImage__IpkeR",content:"Events_content__s_GXc",infoChips:"Events_infoChips__JDVX2",chip:"Events_chip__NrQbz",heading:"Events_heading__RSPOZ",textContent:"Events_textContent__IviK9",tags:"Events_tags___eaJ5"}},6638:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>g,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>h,getStaticProps:()=>x,reportWebVitals:()=>v,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>_});var a=s(7093),i=s(5244),n=s(1323),o=s(2899),c=s.n(o),l=s(3414),p=s(7308),d=e([l,p]);[l,p]=d.then?(await d)():d;let u=(0,n.l)(p,"default"),x=(0,n.l)(p,"getStaticProps"),h=(0,n.l)(p,"getStaticPaths"),m=(0,n.l)(p,"getServerSideProps"),g=(0,n.l)(p,"config"),v=(0,n.l)(p,"reportWebVitals"),_=(0,n.l)(p,"unstable_getStaticProps"),b=(0,n.l)(p,"unstable_getStaticPaths"),f=(0,n.l)(p,"unstable_getStaticParams"),j=(0,n.l)(p,"unstable_getServerProps"),S=(0,n.l)(p,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/verein/events",pathname:"/verein/events",bundlePath:"",filename:""},components:{App:l.default,Document:c()},userland:p});r()}catch(e){r(e)}})},5697:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>u});var a=s(997),i=s(7094),n=s.n(i),o=s(7197),c=s(4563),l=s(7740),p=s(6968),d=e([c,l,p]);[c,l,p]=d.then?(await d)():d;let u=({inhalt:e,date:t,location:s,tags:r,titel:i,image:d,...u})=>{let x="string"==typeof r?r.split("\n"):[],h=!!d?.data;return(0,a.jsxs)("div",{...u,className:`${n().eventWrapper} ${h?"":n().noImage}`,children:[h&&a.jsx(l.p,{img:d.data,sizes:p.fV}),(0,a.jsxs)("div",{className:n().content,children:[a.jsx("h2",{className:n().heading,children:i}),(0,a.jsxs)("div",{className:n().infoChips,children:[s&&(0,a.jsxs)("div",{className:n().chip,children:[a.jsx(o.FontAwesomeIcon,{icon:c.faLocationPin}),s]}),t&&(0,a.jsxs)("div",{className:n().chip,children:[a.jsx(o.FontAwesomeIcon,{icon:c.faCalendarAlt}),t]})]}),a.jsx("div",{className:n().textContent,children:e}),a.jsx("div",{className:n().tags,children:x.map((e,t)=>a.jsx("div",{className:n().chip,children:e},t))})]})]})};r()}catch(e){r(e)}})},7740:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{p:()=>p});var a=s(997),i=s(5675),n=s.n(i),o=s(6968),c=s(6689),l=e([o]);o=(l.then?(await l)():l)[0];let p=({img:e,alt:t="bild",sizes:s=o.Gd,...r})=>{let[i,l]=(0,c.useState)(!0);if(!e?.attributes)throw Error("Image does not have attributes. Maybe you forgot to pass the image.data as prop");let{width:p,height:d}=e?.attributes||{};return a.jsx("span",{style:{backgroundColor:i?"rgb(215, 215, 215)":"transparent",borderRadius:"0.325rem",height:"auto",display:"block"},children:a.jsx(n(),{src:(0,o.mx)(e),alt:t,width:p,height:d,sizes:s,onLoadingComplete:()=>{l(!1)},style:{opacity:i?0:1,transition:"opacity 250ms"},...r})})};r()}catch(e){r(e)}})},7308:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>l,getStaticProps:()=>c});var a=s(997),i=s(5697),n=s(6968),o=e([i,n]);[i,n]=o.then?(await o)():o;let l=({strapiData:e,events:t})=>{let{title:s,description:r}=e;return(0,a.jsxs)("div",{children:[a.jsx("h1",{children:s}),a.jsx("p",{children:r}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"4rem",marginTop:"4rem"},children:t.map(e=>{let{id:t,content:s,location:r,tags:n,title:o,image:c,date:l}=e.attributes;return a.jsx(i.Z,{inhalt:s,location:r,tags:n,titel:o,image:c,date:l},t)})})]})};async function c(){let e=await (0,n.A_)("events-page?populate=deep"),t=await (0,n.A_)("events?populate=*");return{props:{strapiData:e.data.attributes,events:t.data},revalidate:600}}r()}catch(e){r(e)}})},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},9648:e=>{"use strict";e.exports=import("axios")},5049:e=>{"use strict";e.exports=import("react-aria")},5014:e=>{"use strict";e.exports=import("react-aria-components")},9926:e=>{"use strict";e.exports=import("zod")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[117,297,899,584,414],()=>s(6638));module.exports=r})();