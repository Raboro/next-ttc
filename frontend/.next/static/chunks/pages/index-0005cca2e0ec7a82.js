(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6209)}])},4703:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var n=i(5893),r=i(1680),a=i.n(r);i(7294);var s=i(4709),l=i(4693),o=i(2670),d=i(9603),c=i(9417),u=i(7997),m=i(5572),h=i.n(m),x=e=>{let{title:t,text:i,onConfirm:r}=e;return(0,n.jsx)(u.ZA,{className:h().modalOverlay,isDismissable:!0,children:(0,n.jsx)(u.u_,{className:h().modal,children:(0,n.jsx)(l.Vq,{className:h().dialog,children:e=>{let{close:a}=e;return(0,n.jsxs)("form",{children:[(0,n.jsx)("h3",{children:t}),(0,n.jsx)("p",{children:i}),(0,n.jsxs)("div",{className:h().buttonGroup,children:[(0,n.jsx)(o.z,{className:h().abortButton,onPress:()=>{a()},children:"Abbrechen"}),(0,n.jsx)(o.z,{className:h().submitButton,onPress:()=>{a(),r()},children:"Fortfahren"})]})]})}})})})},g=i(6880),p=i(1163),v=i(5675),_=i.n(v),f=i(7740),j=e=>{let{imageUrl:t,title:i,description:r,date:u,isEditable:m,slug:h,id:v,image:j}=e,{push:b}=(0,p.useRouter)();return(0,n.jsxs)("div",{className:a().cardWrapper,children:[m&&(0,n.jsxs)("div",{className:a().adminButtons,children:[(0,n.jsx)(s.r,{href:"/bearbeiten/".concat(h),children:(0,n.jsx)(d.G,{icon:c.IwR,color:"white"})}),(0,n.jsxs)(l.hg,{children:[(0,n.jsx)(o.z,{children:(0,n.jsx)(d.G,{icon:c.$aW,color:"white"})}),(0,n.jsx)(x,{title:"L\xf6schen best\xe4tigen",text:'M\xf6chtest du wirklich den Artikel "'.concat(i,'" l\xf6schen? Dieser Schritt kann nicht r\xfcckg\xe4ngig gemacht werden!'),onConfirm:()=>{(0,g.jX)(v).then(()=>{b("/aktuelles")})}})]})]}),(0,n.jsx)(s.r,{...h?{href:"aktuelles/".concat(h)}:"",children:(0,n.jsxs)("div",{className:a().card,children:[t&&(0,n.jsx)(_(),{src:t,width:300,height:200,alt:"Bildvorschau f\xfcr ".concat(i),className:a().image}),(null==j?void 0:j.attributes)&&(0,n.jsx)(f.p,{img:j,alt:"Hinzugef\xfcgte Bilder",sizes:g.SU}),(0,n.jsxs)("div",{className:a().textContent,children:[(0,n.jsx)("h3",{children:i}),(0,n.jsx)("p",{children:r}),u&&(0,n.jsx)("p",{children:u.split("-").reverse().join(".")})]})]})})]})}},2580:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(5893),r=i(1472),a=i.n(r);let s=e=>({"KKP H":"Herren Kreisklassenpokal",HKKA:"Herren Kreisklasse A",HKKB:"Herren Kreisklasse B",HBK:"Herren Bezirksklasse",wJU15BL:"M\xe4dchen U15 Bezirksliga",mJU12BL:"Jungen U12 Bezirksliga",mJU19BL:"Jungen U19 Bezirksliga",mJU15BK:"Jungen U15 Bezirksklasse","1. PL D":"Damen 1. Pfalzliga",BOL:"Herren Bezirksoberliga",HKL:"Herren Kreisliga","PL mJU18":"Jungen U19 Pfalzliga","PL mJU15":"Jungen U15 Pfalzliga","BP H":"Herren Bezirkspokal"})[e]||e;var l=e=>{let{allyTeam:t,date:i,enemyTeam:r,isHomeMatch:l,league:o,time:d,isShowDate:c=!1}=e;return(0,n.jsxs)("div",{className:a().game,children:[(0,n.jsx)("div",{className:a().league,children:s(o)}),i&&d&&(0,n.jsx)("div",{className:a().date,children:"".concat(c?i+" ":"").concat(d," Uhr")}),(0,n.jsxs)("div",{className:a().teams,children:[l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:t}),(0,n.jsx)("div",{children:r})]}),!l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:r}),(0,n.jsx)("div",{children:t})]})]})]})}},9598:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var n=i(5893),r=i(1164),a=i.n(r),s=i(9603),l=i(9417);let o=e=>{let t;switch(e){case"info":t=l.YHc;break;case"link":t=l.nNP}return t?(0,n.jsx)(s.G,{icon:t,height:20}):null};var d=i(1664),c=i.n(d),u=i(7740),m=i(6880),h=e=>{let{children:t,image:i,imagePosition:r="left",tags:s,className:l}=e;return(0,n.jsxs)("div",{className:"".concat(a().wrapper," ").concat("left"===r?"":a().right," ").concat(l||""),children:[(null==i?void 0:i.data)&&(0,n.jsx)(u.p,{img:null==i?void 0:i.data,sizes:m.PF}),(0,n.jsxs)("div",{className:a().contentContainer,children:[t,(0,n.jsx)("div",{className:a().tags,children:s&&s.map(e=>{let t=(0,n.jsxs)(n.Fragment,{children:[o(e.icon),e.text]});return e.url?(0,n.jsx)(c(),{className:"".concat(a().tag," ").concat(a().link),href:e.url,target:"_blank",children:t},e.id):(0,n.jsx)("span",{className:a().tag,children:t},e.id)})})]})]})}},7740:function(e,t,i){"use strict";i.d(t,{p:function(){return o}});var n=i(5893),r=i(5675),a=i.n(r),s=i(6880),l=i(7294);let o=e=>{let{img:t,alt:i="bild",sizes:r=s.Gd,...o}=e,[d,c]=(0,l.useState)(!0);if(!(null==t?void 0:t.attributes))throw Error("Image does not have attributes. Maybe you forgot to pass the image.data as prop");let{width:u,height:m}=(null==t?void 0:t.attributes)||{};return(0,n.jsx)("span",{style:{backgroundColor:d?"rgb(215, 215, 215)":"transparent",borderRadius:"0.325rem",height:"auto",display:"block"},children:(0,n.jsx)(a(),{src:(0,s.mx)(t),alt:i,width:u,height:m,sizes:r,onLoadingComplete:()=>{c(!1)},style:{opacity:d?0:1,transition:"opacity 250ms"},...o})})}},6209:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return g}});var n=i(5893),r=i(7294),a=i(6880),s=i(1583),l=i.n(s),o=i(4703),d=i(1664),c=i.n(d),u=i(9598),m=i(5466),h=i(2580),x=i(7740),g=!0;t.default=e=>{var t,i,s,d,g,p,v;let{strapiData:_,articles:f,nextGames:j}=e,{titel:b,image:w,inhalt:k}=(null==_?void 0:null===(t=_.attributes)||void 0===t?void 0:t.events)||{},C=b&&w&&k;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:l().welcomeContainer,children:[(0,n.jsxs)("div",{className:l().welcomeText,children:[(0,n.jsx)("h1",{children:null==_?void 0:null===(i=_.attributes)||void 0===i?void 0:i.willkommenTitel}),(0,n.jsx)("p",{children:null==_?void 0:null===(s=_.attributes)||void 0===s?void 0:s.willkommenText})]}),(0,n.jsx)(x.p,{img:null==_?void 0:null===(d=_.attributes)||void 0===d?void 0:d.titelbild.data,sizes:a.PF})]}),C&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:l().eventContainer,children:[(0,n.jsx)("h2",{className:l().heading,children:"Kommende Veranstaltungen"}),(0,n.jsx)(u.Z,{image:w,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:l().heading,children:b}),(0,m.Q)(k)]})})]})}),(0,n.jsx)("h2",{style:{marginBottom:"16px"},children:null==_?void 0:null===(g=_.attributes)||void 0===g?void 0:g.mehrTitel}),(0,n.jsx)("div",{className:l().cardCollection,children:null==_?void 0:_.attributes.mehrErfahrenLinks.map((e,t)=>(0,n.jsx)(c(),{href:e.route,children:(0,n.jsx)(o.Z,{title:e.titel,description:e.beschreibung,image:e.vorschauBild.data})},t))}),(0,n.jsx)("h2",{style:{marginBottom:"16px",marginTop:"48px"},children:null==_?void 0:null===(p=_.attributes)||void 0===p?void 0:p.aktuellesTitel}),(0,n.jsx)("div",{className:l().cardCollection,children:f.data.map((e,t)=>(0,n.jsx)(c(),{href:"aktuelles/".concat(e.attributes.slug),children:(0,n.jsx)(o.Z,{title:e.attributes.titel,description:e.attributes.kurzBeschreibung,image:e.attributes.vorschauBild.data})},t))}),(0,n.jsx)(c(),{href:"aktuelles",className:"react-aria-Button ".concat(l().moreArticlesButton),children:"Mehr Artikel anzeigen"}),(0,n.jsx)("h2",{style:{marginBottom:"16px",marginTop:"48px"},children:null==_?void 0:null===(v=_.attributes)||void 0===v?void 0:v.newGamesTitle}),(0,n.jsx)("div",{className:l().games,children:j.map((e,t)=>(0,r.createElement)(h.Z,{...e,key:t,isShowDate:!0}))})]})}},5466:function(e,t,i){"use strict";i.d(t,{Q:function(){return function e(t,i,a){return t.map((t,s)=>{let l=a?a+1:1;if("heading"===t.type){let i=e(t.children,"heading",l);return r.createElement("h".concat(t.level),{key:"".concat(l,"_").concat(s)},i)}if("list"===t.type){let i=e(t.children,"list",l),n="unordered"===t.format?"ul":"ol";return r.createElement(n,{key:"".concat(l,"_").concat(s)},i)}if("image"===t.type)return(0,n.jsx)("img",{src:t.image.url,alt:"Bild"},"".concat(l,"_").concat(s));if("paragraph"===t.type||"quote"===t.type||"code"===t.type){let i=e(t.children,"paragraph",l);return(0,n.jsx)("p",{children:i},"".concat(l,"_").concat(s))}if("text"===t.type){let e=(0,n.jsxs)(n.Fragment,{children:[t.bold&&(0,n.jsx)("b",{children:t.text}),t.italic&&(0,n.jsx)("i",{children:t.text}),!t.bold&&!t.italic&&t.text]});return""===t.text?(0,n.jsx)("br",{}):i?(0,n.jsx)(n.Fragment,{children:e}):(0,n.jsx)("p",{children:e},"".concat(l,"_").concat(s))}if("link"===t.type){let i=e(t.children,"link",l);return(0,n.jsx)("a",{href:t.url,children:i},"".concat(l,"_").concat(s))}if("list-item"===t.type){let i=e(t.children,"list-item",l);return(0,n.jsx)("li",{children:i},"".concat(l,"_").concat(s))}return null})}}});var n=i(5893),r=i(7294)},5572:function(e){e.exports={modalOverlay:"AriaModal_modalOverlay__59Lpl","modal-fade":"AriaModal_modal-fade__budk6",modal:"AriaModal_modal__HgPML",dialog:"AriaModal_dialog__cvnp5","modal-zoom":"AriaModal_modal-zoom__DPjvX",buttonGroup:"AriaModal_buttonGroup__tZeAz",abortButton:"AriaModal_abortButton__DF2_R",submitButton:"AriaModal_submitButton__pc0AW"}},1680:function(e){e.exports={cardWrapper:"Card_cardWrapper__4p6mR",card:"Card_card__Jh6sd",textContent:"Card_textContent__GelZl",adminButtons:"Card_adminButtons__o8ciL"}},1472:function(e){e.exports={game:"GameCard_game__zfKZM",league:"GameCard_league__m_FYq",teams:"GameCard_teams__PrDwt",date:"GameCard_date__vscx_"}},1164:function(e){e.exports={wrapper:"ImageTextModule_wrapper__m2voc",right:"ImageTextModule_right__AQ0E_",contentContainer:"ImageTextModule_contentContainer__Jwwpu",tags:"ImageTextModule_tags__jL_Sy",tag:"ImageTextModule_tag__pjjNO",link:"ImageTextModule_link__ZXNvL"}},1583:function(e){e.exports={welcomeContainer:"index_welcomeContainer__RGrCV",welcomeText:"index_welcomeText__svdNw",cardCollection:"index_cardCollection__JT7Go",moreArticlesButton:"index_moreArticlesButton__4U8PH",heading:"index_heading__V6FvK",eventContainer:"index_eventContainer__8K4Hw",games:"index_games__PwTTw"}},1163:function(e,t,i){e.exports=i(9090)},4709:function(e,t,i){"use strict";i.d(t,{r:function(){return h}});var n=i(3024),r=i(3136),a=i(1177),s=i(2433),l=i(8587),o=i(8019),d=i(8419),c=i(2459),u=i(7294);let m=(0,u.createContext)(null),h=(0,u.forwardRef)(function(e,t){[e,t]=(0,n.pE)(e,t,m);let i=e.href?"a":"span",{linkProps:h,isPressed:x}=function(e,t){let{elementType:i="a",onPress:n,onPressStart:d,onPressEnd:c,onClick:u,isDisabled:m,...h}=e,x={};"a"!==i&&(x={role:"link",tabIndex:m?void 0:0});let{focusableProps:g}=(0,l.k)(e,t),{pressProps:p,isPressed:v}=(0,o.r)({onPress:n,onPressStart:d,onPressEnd:c,isDisabled:m,ref:t}),_=(0,r.z)(h,{labelable:!0}),f=(0,a.d)(g,p),j=(0,s.tv)(),b=(0,s.eY)(e);return{isPressed:v,linkProps:(0,a.d)(_,b,{...f,...x,"aria-disabled":m||void 0,"aria-current":e["aria-current"],onClick:t=>{var i;null===(i=p.onClick)||void 0===i||i.call(p,t),u&&(u(t),console.warn("onClick is deprecated, please use onPress")),!j.isNative&&t.currentTarget instanceof HTMLAnchorElement&&t.currentTarget.href&&!t.isDefaultPrevented()&&(0,s.b0)(t.currentTarget,t)&&e.href&&(t.preventDefault(),j.open(t.currentTarget,t,e.href,e.routerOptions))}})}}({...e,elementType:i},t),{hoverProps:g,isHovered:p}=(0,d.X)(e),{focusProps:v,isFocused:_,isFocusVisible:f}=(0,c.F)(),j=(0,n.aX)({...e,defaultClassName:"react-aria-Link",values:{isCurrent:!!e["aria-current"],isDisabled:e.isDisabled||!1,isPressed:x,isHovered:p,isFocused:_,isFocusVisible:f}});return u.createElement(i,{ref:t,slot:e.slot||void 0,...(0,a.d)(j,h,g,v),"data-focused":_||void 0,"data-hovered":p||void 0,"data-pressed":x||void 0,"data-focus-visible":f||void 0,"data-current":!!e["aria-current"]||void 0,"data-disabled":e.isDisabled||void 0},j.children)})},7997:function(e,t,i){"use strict";i.d(t,{u_:function(){return b},ZA:function(){return w}});var n=i(3024),r=i(4693),a=i(7385),s=i(6270),l=i(9716),o=i(4319),d=i(7553),c=i(1177),u=i(7294),m=i(5081),h=i(7189);let x="undefined"!=typeof document&&window.visualViewport;function g(){return{width:x&&(null==x?void 0:x.width)||window.innerWidth,height:x&&(null==x?void 0:x.height)||window.innerHeight}}var p=i(3136),v=i(6303),_=i(6551);let f=(0,u.createContext)(null),j=(0,u.createContext)(null),b=(0,u.forwardRef)(function(e,t){if((0,u.useContext)(j))return u.createElement(C,{...e,modalRef:t},e.children);let{isDismissable:i,isKeyboardDismissDisabled:n,isOpen:r,defaultOpen:a,onOpenChange:s,children:l,isEntering:o,isExiting:d,UNSTABLE_portalContainer:c,shouldCloseOnInteractOutside:m,...h}=e;return u.createElement(w,{isDismissable:i,isKeyboardDismissDisabled:n,isOpen:r,defaultOpen:a,onOpenChange:s,isEntering:o,isExiting:d,UNSTABLE_portalContainer:c,shouldCloseOnInteractOutside:m},u.createElement(C,{...h,modalRef:t},l))}),w=(0,u.forwardRef)(function(e,t){[e,t]=(0,n.pE)(e,t,f);let i=(0,u.useContext)(r.$H),s=(0,_.d)(e),l=null==e.isOpen&&null==e.defaultOpen&&i?i:s,o=(0,h.B)(t),d=(0,u.useRef)(null),c=(0,n.xB)(o,l.isOpen),m=(0,n.xB)(d,l.isOpen),x=c||m||e.isExiting||!1,g=(0,a.Av)();return(l.isOpen||x)&&!g?u.createElement(k,{...e,state:l,isExiting:x,overlayRef:o,modalRef:d}):null});function k({UNSTABLE_portalContainer:e,...t}){let i=t.modalRef,{state:m}=t,{modalProps:h,underlayProps:v}=function(e,t,i){let{overlayProps:n,underlayProps:r}=(0,l.I)({...e,isOpen:t.isOpen,onClose:t.close},i);return(0,d.t)({isDisabled:!t.isOpen}),(0,o.Bq)(),(0,u.useEffect)(()=>{if(t.isOpen)return(0,s.R)([i.current])},[t.isOpen,i]),{modalProps:(0,c.d)(n),underlayProps:r}}(t,m,i),_=(0,n.iW)(t.overlayRef)||t.isEntering||!1,f=(0,n.aX)({...t,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:_,isExiting:t.isExiting,state:m}}),b=function(){let e=(0,a.Av)(),[t,i]=(0,u.useState)(()=>e?{width:0,height:0}:g());return(0,u.useEffect)(()=>{let e=()=>{i(e=>{let t=g();return t.width===e.width&&t.height===e.height?e:t})};return x?x.addEventListener("resize",e):window.addEventListener("resize",e),()=>{x?x.removeEventListener("resize",e):window.removeEventListener("resize",e)}},[]),t}(),w={...f.style,"--visual-viewport-height":b.height+"px"};return u.createElement(o.aV,{isExiting:t.isExiting,portalContainer:e},u.createElement("div",{...(0,c.d)((0,p.z)(t),v),...f,style:w,ref:t.overlayRef,"data-entering":_||void 0,"data-exiting":t.isExiting||void 0},u.createElement(n.zt,{values:[[j,{modalProps:h,modalRef:i,isExiting:t.isExiting,isDismissable:t.isDismissable}],[r.$H,m]]},f.children)))}function C(e){let{modalProps:t,modalRef:i,isExiting:a,isDismissable:s}=(0,u.useContext)(j),l=(0,u.useContext)(r.$H),o=(0,u.useMemo)(()=>(0,v.l)(e.modalRef,i),[e.modalRef,i]),d=(0,h.B)(o),x=(0,n.iW)(d),g=(0,n.aX)({...e,defaultClassName:"react-aria-Modal",values:{isEntering:x,isExiting:a,state:l}});return u.createElement("div",{...(0,c.d)((0,p.z)(e),t),...g,ref:d,"data-entering":x||void 0,"data-exiting":a||void 0},s&&u.createElement(m.U,{onDismiss:l.close}),g.children)}}},function(e){e.O(0,[675,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);