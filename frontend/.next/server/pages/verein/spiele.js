(()=>{var e={};e.id=517,e.ids=[517,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},1267:e=>{e.exports={game:"GameCard_game__zfKZM",league:"GameCard_league__m_FYq",teams:"GameCard_teams__PrDwt",date:"GameCard_date__vscx_"}},7127:e=>{e.exports={games:"spiele_games__39P4S",gameDay:"spiele_gameDay__sBwFo"}},9114:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>P,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>g,getStaticProps:()=>m,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>_});var a=r(7093),n=r(5244),i=r(1323),l=r(2899),c=r.n(l),u=r(3414),o=r(963),d=e([u,o]);[u,o]=d.then?(await d)():d;let p=(0,i.l)(o,"default"),m=(0,i.l)(o,"getStaticProps"),g=(0,i.l)(o,"getStaticPaths"),x=(0,i.l)(o,"getServerSideProps"),P=(0,i.l)(o,"config"),h=(0,i.l)(o,"reportWebVitals"),_=(0,i.l)(o,"unstable_getStaticProps"),S=(0,i.l)(o,"unstable_getStaticPaths"),f=(0,i.l)(o,"unstable_getStaticParams"),v=(0,i.l)(o,"unstable_getServerProps"),y=(0,i.l)(o,"unstable_getServerSideProps"),j=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/verein/spiele",pathname:"/verein/spiele",bundlePath:"",filename:""},components:{App:u.default,Document:c()},userland:o});s()}catch(e){s(e)}})},2580:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(997),a=r(1267),n=r.n(a);let i=e=>({"KKP H":"Herren Kreisklassenpokal",HKKA:"Herren Kreisklasse A",HKKB:"Herren Kreisklasse B",HBK:"Herren Bezirksklasse",wJU15BL:"M\xe4dchen U15 Bezirksliga",mJU12BL:"Jungen U12 Bezirksliga",mJU19BL:"Jungen U19 Bezirksliga",mJU15BK:"Jungen U15 Bezirksklasse","1. PL D":"Damen 1. Pfalzliga",BOL:"Herren Bezirksoberliga",HKL:"Herren Kreisliga","PL mJU18":"Jungen U19 Pfalzliga","PL mJU15":"Jungen U15 Pfalzliga","BP H":"Herren Bezirkspokal"})[e]||e,l=({allyTeam:e,date:t,enemyTeam:r,isHomeMatch:a,league:l,time:c,isShowDate:u=!1})=>(0,s.jsxs)("div",{className:n().game,children:[s.jsx("div",{className:n().league,children:i(l)}),t&&c&&s.jsx("div",{className:n().date,children:`${u?t+" ":""}${c} Uhr`}),(0,s.jsxs)("div",{className:n().teams,children:[a&&(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{children:e}),s.jsx("div",{children:r})]}),!a&&(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{children:r}),s.jsx("div",{children:e})]})]})]})},963:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>p,getStaticProps:()=>d});var a=r(997),n=r(6689),i=r(2580),l=r(8235),c=r(7127),u=r.n(c),o=e([l]);l=(o.then?(await o)():o)[0];let p=({nextGames:e})=>{let t=[],r="";return e.forEach(e=>{e?.date&&r===e.date?t[t.length-1].push(e):e?.allyTeam&&e?.enemyTeam&&t.push([e]),r=e.date}),a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{children:[t.map(e=>(0,a.jsxs)("div",{className:u().gameDay,children:[a.jsx("h2",{children:e[0].date}),a.jsx("div",{className:u().games,children:e.map((e,t)=>(0,n.createElement)(i.Z,{...e,key:t}))})]})),!t?.length&&a.jsx("div",{children:"Keine Spiele"})]})})};async function d(){return{props:{nextGames:await (0,l.p)()},revalidate:600}}s()}catch(e){s(e)}})},8235:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{p:()=>c});var a=r(3955),n=r(9648),i=r(3854),l=e([n]);async function c(){let e=await n.default.get(process.env.MY_TISCHTENNIS_ALL_GAMES),t=(0,a.parse)(e.data).getElementById("playingPlanDesktop").querySelectorAll("tr"),r="",s=t.map(e=>{let t=e.querySelectorAll("td");if(!t||!Array.isArray(t))return null;let s=(0,i.J)(t[0]?.querySelector("span")?.innerHTML)||r;s&&(r=s);let a=(0,i.J)(t[1]?.innerHTML)||null;a=(a=a?.split("<a"))?a[0]:"";let n=(0,i.J)(t[3]?.innerHTML)||null,l=(0,i.J)(t[4]?.querySelector("a")?.innerHTML)||"",c=(0,i.J)(t[5]?.querySelector("a")?.innerHTML)||"",u=null,o=null,d=!1;return l.includes("Klingenm\xfcnster")?(u=(0,i.J)(l),o=(0,i.J)(c),d=!0):(u=(0,i.J)(c),o=(0,i.J)(l)),{date:s,time:a,league:n,isHomeMatch:d,allyTeam:u,enemyTeam:o}}).filter(e=>!!e?.date),l=new Date;return l.setHours(0,0,0,0),s.filter(e=>{let[t,r,s]=e.date.split(" ")[1].split(".").map(Number);return new Date(s+2e3,r-1,t)>l})}n=(l.then?(await l)():l)[0],s()}catch(e){s(e)}})},3854:(e,t,r)=>{"use strict";r.d(t,{J:()=>s});let s=e=>"string"!=typeof e?"":e.replace(a,""),a=/\n/g},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},3955:e=>{"use strict";e.exports=require("node-html-parser")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},9648:e=>{"use strict";e.exports=import("axios")},5049:e=>{"use strict";e.exports=import("react-aria")},5014:e=>{"use strict";e.exports=import("react-aria-components")},9926:e=>{"use strict";e.exports=import("zod")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[117,297,899,414],()=>r(9114));module.exports=s})();