(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{3797:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verein/halle",function(){return n(3556)}])},9598:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var a=n(5893),i=n(1164),r=n.n(i),s=n(9603),l=n(9417);let o=t=>{let e;switch(t){case"info":e=l.YHc;break;case"link":e=l.nNP}return e?(0,a.jsx)(s.G,{icon:e,height:20}):null};var c=n(1664),u=n.n(c),d=n(7740),h=n(6880),_=t=>{let{children:e,image:n,imagePosition:i="left",tags:s,className:l}=t;return(0,a.jsxs)("div",{className:"".concat(r().wrapper," ").concat("left"===i?"":r().right," ").concat(l||""),children:[(null==n?void 0:n.data)&&(0,a.jsx)(d.p,{img:null==n?void 0:n.data,sizes:h.PF}),(0,a.jsxs)("div",{className:r().contentContainer,children:[e,(0,a.jsx)("div",{className:r().tags,children:s&&s.map(t=>{let e=(0,a.jsxs)(a.Fragment,{children:[o(t.icon),t.text]});return t.url?(0,a.jsx)(u(),{className:"".concat(r().tag," ").concat(r().link),href:t.url,target:"_blank",children:e},t.id):(0,a.jsx)("span",{className:r().tag,children:e},t.id)})})]})]})}},7740:function(t,e,n){"use strict";n.d(e,{p:function(){return o}});var a=n(5893),i=n(5675),r=n.n(i),s=n(6880),l=n(7294);let o=t=>{let{img:e,alt:n="bild",sizes:i=s.Gd,...o}=t,[c,u]=(0,l.useState)(!0);if(!(null==e?void 0:e.attributes))throw Error("Image does not have attributes. Maybe you forgot to pass the image.data as prop");let{width:d,height:h}=(null==e?void 0:e.attributes)||{};return(0,a.jsx)("span",{style:{backgroundColor:c?"rgb(215, 215, 215)":"transparent",borderRadius:"0.325rem",height:"auto",display:"block"},children:(0,a.jsx)(r(),{src:(0,s.mx)(e),alt:n,width:d,height:h,sizes:i,onLoadingComplete:()=>{u(!1)},style:{opacity:c?0:1,transition:"opacity 250ms"},...o})})}},3556:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return r}});var a=n(5893),i=n(9598),r=!0;e.default=t=>{let{strapiData:e}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:e.attributes.titel}),e.attributes.hallen.map((t,e)=>(0,a.jsxs)(i.Z,{image:t.bild,imagePosition:e%2==0?"left":"right",tags:t.tags,children:[(0,a.jsx)("h2",{children:t.titel}),(0,a.jsx)("p",{children:t.text})]},t.id))]})}},1164:function(t){t.exports={wrapper:"ImageTextModule_wrapper__m2voc",right:"ImageTextModule_right__AQ0E_",contentContainer:"ImageTextModule_contentContainer__Jwwpu",tags:"ImageTextModule_tags__jL_Sy",tag:"ImageTextModule_tag__pjjNO",link:"ImageTextModule_link__ZXNvL"}}},function(t){t.O(0,[675,888,774,179],function(){return t(t.s=3797)}),_N_E=t.O()}]);