(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{4739:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aktuelles",function(){return i(7786)}])},4703:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var n=i(5893),r=i(1680),a=i.n(r);i(7294);var s=i(4709),l=i(4693),o=i(2670),d=i(9603),u=i(9417),c=i(7997),p=i(5572),h=i.n(p),m=e=>{let{title:t,text:i,onConfirm:r}=e;return(0,n.jsx)(c.ZA,{className:h().modalOverlay,isDismissable:!0,children:(0,n.jsx)(c.u_,{className:h().modal,children:(0,n.jsx)(l.Vq,{className:h().dialog,children:e=>{let{close:a}=e;return(0,n.jsxs)("form",{children:[(0,n.jsx)("h3",{children:t}),(0,n.jsx)("p",{children:i}),(0,n.jsxs)("div",{className:h().buttonGroup,children:[(0,n.jsx)(o.z,{className:h().abortButton,onPress:()=>{a()},children:"Abbrechen"}),(0,n.jsx)(o.z,{className:h().submitButton,onPress:()=>{a(),r()},children:"Fortfahren"})]})]})}})})})},f=i(6880),g=i(1163),v=i(5675),x=i.n(v),_=i(7740),b=e=>{let{imageUrl:t,title:i,description:r,date:c,isEditable:p,slug:h,id:v,image:b}=e,{push:E}=(0,g.useRouter)();return(0,n.jsxs)("div",{className:a().cardWrapper,children:[p&&(0,n.jsxs)("div",{className:a().adminButtons,children:[(0,n.jsx)(s.r,{href:"/bearbeiten/".concat(h),children:(0,n.jsx)(d.G,{icon:u.IwR,color:"white"})}),(0,n.jsxs)(l.hg,{children:[(0,n.jsx)(o.z,{children:(0,n.jsx)(d.G,{icon:u.$aW,color:"white"})}),(0,n.jsx)(m,{title:"L\xf6schen best\xe4tigen",text:'M\xf6chtest du wirklich den Artikel "'.concat(i,'" l\xf6schen? Dieser Schritt kann nicht r\xfcckg\xe4ngig gemacht werden!'),onConfirm:()=>{(0,f.jX)(v).then(()=>{E("/aktuelles")})}})]})]}),(0,n.jsx)(s.r,{...h?{href:"aktuelles/".concat(h)}:"",children:(0,n.jsxs)("div",{className:a().card,children:[t&&(0,n.jsx)(x(),{src:t,width:300,height:200,alt:"Bildvorschau f\xfcr ".concat(i),className:a().image}),(null==b?void 0:b.attributes)&&(0,n.jsx)(_.p,{img:b,alt:"Hinzugef\xfcgte Bilder",sizes:f.SU}),(0,n.jsxs)("div",{className:a().textContent,children:[(0,n.jsx)("h3",{children:i}),(0,n.jsx)("p",{children:r}),c&&(0,n.jsx)("p",{children:c.split("-").reverse().join(".")})]})]})})]})}},7740:function(e,t,i){"use strict";i.d(t,{p:function(){return o}});var n=i(5893),r=i(5675),a=i.n(r),s=i(6880),l=i(7294);let o=e=>{let{img:t,alt:i="bild",sizes:r=s.Gd,...o}=e,[d,u]=(0,l.useState)(!0);if(!(null==t?void 0:t.attributes))throw Error("Image does not have attributes. Maybe you forgot to pass the image.data as prop");let{width:c,height:p}=(null==t?void 0:t.attributes)||{};return(0,n.jsx)("span",{style:{backgroundColor:d?"rgb(215, 215, 215)":"transparent",borderRadius:"0.325rem",height:"auto",display:"block"},children:(0,n.jsx)(a(),{src:(0,s.mx)(t),alt:i,width:c,height:p,sizes:r,onLoadingComplete:()=>{u(!1)},style:{opacity:d?0:1,transition:"opacity 250ms"},...o})})}},7786:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return j},default:function(){return w}});var n=i(5893),r=i(4709),a=i(6880),s=i(4703),l=i(7294),o=i(4262),d=i.n(o),u=i(9603),c=i(9417),p=i(2126),h=i.n(p),m=i(2670),f=e=>{let{currentPage:t,maxPages:i,handleChangePage:r}=e;return(0,n.jsx)(n.Fragment,{children:t>0&&i>1&&(0,n.jsxs)("div",{className:h().paginationWrapper,children:[(0,n.jsx)(m.z,{isDisabled:1===t,"aria-label":"prev",onPress:()=>{t>1&&r(t-1)},children:(0,n.jsx)(u.G,{icon:c.A35})}),(0,n.jsx)("span",{className:h().page,children:"Seite ".concat(t," / ").concat(i)}),(0,n.jsx)(m.z,{isDisabled:t===i,"aria-label":"next",onPress:()=>{t<i&&r(t+1)},children:(0,n.jsx)(u.G,{icon:c._tD})})]})})},g=i(1163),v=i(7066),x=i(7112),_=i.n(x);let b=e=>{let{count:t}=e;return(0,n.jsx)("div",{className:_().card})};var E=e=>{let{count:t=12}=e;return(0,n.jsx)(n.Fragment,{children:Array.from({length:t},(e,t)=>(0,n.jsx)(b,{},t))})},j=!0,w=e=>{var t,i,o;let{initialArticles:u,strapiData:c}=e,[p,h]=(0,l.useState)(!1),{isReady:m,push:x,query:_}=(0,g.useRouter)(),[b,j]=(0,l.useState)(u),[w,C]=(0,l.useState)(!0),P=parseInt("string"!=typeof _.seite?"1":_.seite)||-1,k=u.meta.pagination.pageCount;async function N(){return(await v.Z.get("".concat(a.Hw,"/api/articles?pagination[page]=").concat(P,"&pagination[pageSize]=").concat(12,"&populate=deep&sort[0]=datum:desc"))).data}(0,l.useEffect)(()=>{"undefined"!=typeof localStorage&&h(localStorage.getItem("jwt")),m&&(P>k&&y(k),P<1&&y(1),1===P?(j(u),setTimeout(()=>{C(!1)},300)):N().then(e=>{j(e),setTimeout(()=>{C(!1)},200)}))},[m,P]);let y=e=>{C(!0),x("/aktuelles?seite=".concat(e))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{style:{marginBottom:"12px"},children:null==c?void 0:null===(t=c.attributes)||void 0===t?void 0:t.aktuellesTitel}),(0,n.jsx)("p",{children:null==c?void 0:null===(i=c.attributes)||void 0===i?void 0:i.aktuellesText}),p&&(0,n.jsx)(r.r,{className:d().newArticle,href:"/aktuelles/neuer-artikel",children:"Neuen Artikel schreiben"}),(0,n.jsxs)("div",{className:d().cardCollection,children:[w&&(0,n.jsx)(E,{count:12}),!w&&(null==b?void 0:null===(o=b.data)||void 0===o?void 0:o.map((e,t)=>(0,n.jsx)(s.Z,{title:e.attributes.titel,description:e.attributes.kurzBeschreibung,date:e.attributes.datum,isEditable:!!p,slug:e.attributes.slug,id:e.id,image:e.attributes.vorschauBild.data},t)))]}),(0,n.jsx)(f,{currentPage:P,maxPages:k,handleChangePage:y})]})}},5572:function(e){e.exports={modalOverlay:"AriaModal_modalOverlay__59Lpl","modal-fade":"AriaModal_modal-fade__budk6",modal:"AriaModal_modal__HgPML",dialog:"AriaModal_dialog__cvnp5","modal-zoom":"AriaModal_modal-zoom__DPjvX",buttonGroup:"AriaModal_buttonGroup__tZeAz",abortButton:"AriaModal_abortButton__DF2_R",submitButton:"AriaModal_submitButton__pc0AW"}},1680:function(e){e.exports={cardWrapper:"Card_cardWrapper__4p6mR",card:"Card_card__Jh6sd",textContent:"Card_textContent__GelZl",adminButtons:"Card_adminButtons__o8ciL"}},7112:function(e){e.exports={card:"CardSkeleton_card__Dw063",loading:"CardSkeleton_loading__zttWH"}},2126:function(e){e.exports={paginationWrapper:"Pagination_paginationWrapper__uvTmP"}},4262:function(e){e.exports={cardCollection:"aktuelles_cardCollection__DRaNL",cardLink:"aktuelles_cardLink__UGLwd",newArticle:"aktuelles_newArticle__Mgpm4"}},1163:function(e,t,i){e.exports=i(9090)},4709:function(e,t,i){"use strict";i.d(t,{r:function(){return h}});var n=i(3024),r=i(3136),a=i(1177),s=i(2433),l=i(8587),o=i(8019),d=i(8419),u=i(2459),c=i(7294);let p=(0,c.createContext)(null),h=(0,c.forwardRef)(function(e,t){[e,t]=(0,n.pE)(e,t,p);let i=e.href?"a":"span",{linkProps:h,isPressed:m}=function(e,t){let{elementType:i="a",onPress:n,onPressStart:d,onPressEnd:u,onClick:c,isDisabled:p,...h}=e,m={};"a"!==i&&(m={role:"link",tabIndex:p?void 0:0});let{focusableProps:f}=(0,l.k)(e,t),{pressProps:g,isPressed:v}=(0,o.r)({onPress:n,onPressStart:d,onPressEnd:u,isDisabled:p,ref:t}),x=(0,r.z)(h,{labelable:!0}),_=(0,a.d)(f,g),b=(0,s.tv)(),E=(0,s.eY)(e);return{isPressed:v,linkProps:(0,a.d)(x,E,{..._,...m,"aria-disabled":p||void 0,"aria-current":e["aria-current"],onClick:t=>{var i;null===(i=g.onClick)||void 0===i||i.call(g,t),c&&(c(t),console.warn("onClick is deprecated, please use onPress")),!b.isNative&&t.currentTarget instanceof HTMLAnchorElement&&t.currentTarget.href&&!t.isDefaultPrevented()&&(0,s.b0)(t.currentTarget,t)&&e.href&&(t.preventDefault(),b.open(t.currentTarget,t,e.href,e.routerOptions))}})}}({...e,elementType:i},t),{hoverProps:f,isHovered:g}=(0,d.X)(e),{focusProps:v,isFocused:x,isFocusVisible:_}=(0,u.F)(),b=(0,n.aX)({...e,defaultClassName:"react-aria-Link",values:{isCurrent:!!e["aria-current"],isDisabled:e.isDisabled||!1,isPressed:m,isHovered:g,isFocused:x,isFocusVisible:_}});return c.createElement(i,{ref:t,slot:e.slot||void 0,...(0,a.d)(b,h,f,v),"data-focused":x||void 0,"data-hovered":g||void 0,"data-pressed":m||void 0,"data-focus-visible":_||void 0,"data-current":!!e["aria-current"]||void 0,"data-disabled":e.isDisabled||void 0},b.children)})},7997:function(e,t,i){"use strict";i.d(t,{u_:function(){return E},ZA:function(){return j}});var n=i(3024),r=i(4693),a=i(7385),s=i(6270),l=i(9716),o=i(4319),d=i(7553),u=i(1177),c=i(7294),p=i(5081),h=i(7189);let m="undefined"!=typeof document&&window.visualViewport;function f(){return{width:m&&(null==m?void 0:m.width)||window.innerWidth,height:m&&(null==m?void 0:m.height)||window.innerHeight}}var g=i(3136),v=i(6303),x=i(6551);let _=(0,c.createContext)(null),b=(0,c.createContext)(null),E=(0,c.forwardRef)(function(e,t){if((0,c.useContext)(b))return c.createElement(C,{...e,modalRef:t},e.children);let{isDismissable:i,isKeyboardDismissDisabled:n,isOpen:r,defaultOpen:a,onOpenChange:s,children:l,isEntering:o,isExiting:d,UNSTABLE_portalContainer:u,shouldCloseOnInteractOutside:p,...h}=e;return c.createElement(j,{isDismissable:i,isKeyboardDismissDisabled:n,isOpen:r,defaultOpen:a,onOpenChange:s,isEntering:o,isExiting:d,UNSTABLE_portalContainer:u,shouldCloseOnInteractOutside:p},c.createElement(C,{...h,modalRef:t},l))}),j=(0,c.forwardRef)(function(e,t){[e,t]=(0,n.pE)(e,t,_);let i=(0,c.useContext)(r.$H),s=(0,x.d)(e),l=null==e.isOpen&&null==e.defaultOpen&&i?i:s,o=(0,h.B)(t),d=(0,c.useRef)(null),u=(0,n.xB)(o,l.isOpen),p=(0,n.xB)(d,l.isOpen),m=u||p||e.isExiting||!1,f=(0,a.Av)();return(l.isOpen||m)&&!f?c.createElement(w,{...e,state:l,isExiting:m,overlayRef:o,modalRef:d}):null});function w({UNSTABLE_portalContainer:e,...t}){let i=t.modalRef,{state:p}=t,{modalProps:h,underlayProps:v}=function(e,t,i){let{overlayProps:n,underlayProps:r}=(0,l.I)({...e,isOpen:t.isOpen,onClose:t.close},i);return(0,d.t)({isDisabled:!t.isOpen}),(0,o.Bq)(),(0,c.useEffect)(()=>{if(t.isOpen)return(0,s.R)([i.current])},[t.isOpen,i]),{modalProps:(0,u.d)(n),underlayProps:r}}(t,p,i),x=(0,n.iW)(t.overlayRef)||t.isEntering||!1,_=(0,n.aX)({...t,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:x,isExiting:t.isExiting,state:p}}),E=function(){let e=(0,a.Av)(),[t,i]=(0,c.useState)(()=>e?{width:0,height:0}:f());return(0,c.useEffect)(()=>{let e=()=>{i(e=>{let t=f();return t.width===e.width&&t.height===e.height?e:t})};return m?m.addEventListener("resize",e):window.addEventListener("resize",e),()=>{m?m.removeEventListener("resize",e):window.removeEventListener("resize",e)}},[]),t}(),j={..._.style,"--visual-viewport-height":E.height+"px"};return c.createElement(o.aV,{isExiting:t.isExiting,portalContainer:e},c.createElement("div",{...(0,u.d)((0,g.z)(t),v),..._,style:j,ref:t.overlayRef,"data-entering":x||void 0,"data-exiting":t.isExiting||void 0},c.createElement(n.zt,{values:[[b,{modalProps:h,modalRef:i,isExiting:t.isExiting,isDismissable:t.isDismissable}],[r.$H,p]]},_.children)))}function C(e){let{modalProps:t,modalRef:i,isExiting:a,isDismissable:s}=(0,c.useContext)(b),l=(0,c.useContext)(r.$H),o=(0,c.useMemo)(()=>(0,v.l)(e.modalRef,i),[e.modalRef,i]),d=(0,h.B)(o),m=(0,n.iW)(d),f=(0,n.aX)({...e,defaultClassName:"react-aria-Modal",values:{isEntering:m,isExiting:a,state:l}});return c.createElement("div",{...(0,u.d)((0,g.z)(e),t),...f,ref:d,"data-entering":m||void 0,"data-exiting":a||void 0},s&&c.createElement(p.U,{onDismiss:l.close}),f.children)}}},function(e){e.O(0,[675,888,774,179],function(){return e(e.s=4739)}),_N_E=e.O()}]);