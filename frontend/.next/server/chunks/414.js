exports.id=414,exports.ids=[414],exports.modules={2448:e=>{e.exports={footer:"Footer_footer__OQpsI",logos:"Footer_logos__GF8U5"}},1220:e=>{e.exports={wrapper:"Layout_wrapper__WYzwK",container:"Layout_container__TVB4_",contentWrapper:"Layout_contentWrapper__8YBp_"}},2338:e=>{e.exports={navContainer:"NavBar_navContainer__jMKPl",buttonContainer:"NavBar_buttonContainer__d_xWn",popover:"NavBar_popover__PNt_l",exitButton:"NavBar_exitButton__g9twV",menuWrapper:"NavBar_menuWrapper__ZDVs0",menu:"NavBar_menu__NaP6g",submenu:"NavBar_submenu__2uCJ5",menuItem:"NavBar_menuItem___NYd_",linkContainer:"NavBar_linkContainer__IQ80b",menuVisible:"NavBar_menuVisible__FP018",mobileLinks:"NavBar_mobileLinks__bc_EV",link:"NavBar_link__iAd26",listBoxWrapper:"NavBar_listBoxWrapper__ThAT3",isOpen:"NavBar_isOpen__xHPLX",listBox:"NavBar_listBox__E4msi",listBoxItem:"NavBar_listBoxItem__joA4U"}},5490:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(997),r=a(1664),s=a.n(r),i=a(2448),l=a.n(i);let o=function({global:e}){let{joolaLogoURL:t,ttcKlingenmuensterLogoURL:a}=e;return(0,n.jsxs)("div",{className:l().footer,children:[(0,n.jsxs)("div",{className:l().logos,children:[n.jsx("img",{src:a,width:500,height:130}),n.jsx("img",{src:t,width:500,height:130})]}),n.jsx(s(),{href:"/login",children:"\xa9 2023 TTC Klingenm\xfcnster "})]})}},52:(e,t,a)=>{"use strict";a.a(e,async(e,n)=>{try{a.d(t,{Z:()=>u});var r=a(997),s=a(6483),i=a.n(s),l=a(1604),o=a(5490),c=a(1220),d=a.n(c),m=e([l]);function u({children:e,global:t}){return(0,r.jsxs)("div",{className:`${i().className} ${d().wrapper}`,children:[r.jsx(l.Z,{}),r.jsx("main",{className:d().container,children:r.jsx("div",{className:d().contentWrapper,children:e})}),r.jsx(o.Z,{global:t})]})}l=(m.then?(await m)():m)[0],n()}catch(e){n(e)}})},1604:(e,t,a)=>{"use strict";a.a(e,async(e,n)=>{try{a.d(t,{Z:()=>g});var r=a(997),s=a(1664),i=a.n(s),l=a(2338),o=a.n(l),c=a(5014),d=a(5049),m=a(6689),u=a(9332),h=a(7197),p=a(4563),x=e([c,d,p]);[c,d,p]=x.then?(await x)():x;let g=()=>{let{push:e}=(0,u.useRouter)(),t=[{id:"start",name:"Start",href:"/"},{id:"verein",name:"Verein",children:[{id:"events",name:"Events & Termine",href:"/verein/events"},{id:"spiele",name:"Spiele",href:"/verein/spiele"},{id:"organisation",name:"Organisation",href:"/verein/organisation"},{id:"sponsoren",name:"Sponsoren",href:"/verein/sponsoren"},{id:"halle",name:"Unsere Halle",href:"/verein/halle"}]},{id:"erwachsene",name:"Erwachsene",children:[{id:"training",name:"Training",href:"/erwachsene/training"},{id:"mannschaften",name:"Mannschaften",href:"/erwachsene/mannschaften"}]},{id:"jugend",name:"Jugend",children:[{id:"training",name:"Training",href:"/jugend/training"},{id:"trainer",name:"Trainer",href:"/jugend/trainer"},{id:"mannschaften",name:"Mannschaften",href:"/jugend/mannschaften"}]},{id:"galerie",name:"Galerie",href:"/galerie"},{id:"aktuelles",name:"Aktuelles",href:"/aktuelles"},{id:"anderes",name:"Anderes",children:[{id:"links",name:"Links",href:"/anderes/links"},{id:"downloads",name:"Downloads",href:"/anderes/downloads"},{id:"impressum",name:"Impressum",href:"/anderes/impressum"},{id:"datenschutz",name:"Datenschutz",href:"/anderes/datenschutz"},{id:"kontakt",name:"Kontakt",href:"/anderes/kontakt"}]}],[a,n]=(0,m.useState)(!1);return(0,r.jsxs)("div",{className:o().navContainer,children:[(0,r.jsxs)(c.MenuTrigger,{isOpen:a,onOpenChange:()=>{setTimeout(()=>{n(e=>!e)},10)},children:[r.jsx("div",{className:o().buttonContainer,children:r.jsx(c.Button,{"aria-label":"Men\xfc",children:r.jsx(h.FontAwesomeIcon,{icon:p.faBars})})}),(0,r.jsxs)(c.Popover,{className:o().popover,children:[r.jsx(c.Button,{className:o().exitButton,"aria-label":"Men\xfc schlie\xdfen",onPress:()=>{n(!1)},children:r.jsx(h.FontAwesomeIcon,{icon:p.faXmark})}),r.jsx("div",{className:o().menuWrapper,children:r.jsx(c.Menu,{items:t,className:o().menu,children:function e(t){return t.children?(0,r.jsxs)(c.SubmenuTrigger,{children:[(0,r.jsxs)(c.MenuItem,{className:o().menuItem,children:[t.name,r.jsx(h.FontAwesomeIcon,{icon:p.faChevronRight})]},t.name),r.jsx(c.Popover,{children:r.jsx(c.Menu,{items:t.children,className:`${o().menu} ${o().submenu}`,children:t=>e(t)})})]}):r.jsx(c.MenuItem,{href:t.href,className:o().menuItem,children:t.name},t.name)}})})]})]}),r.jsx("div",{className:o().menuWrapper,children:r.jsx("div",{className:`${o().linkContainer}`,children:t.map(e=>e.children?r.jsx(f,{options:e.children,label:e.name},e.id):r.jsx(r.Fragment,{children:r.jsx(i(),{href:e.href,className:o().link,children:e.name})}))})})]})},f=({options:e,label:t})=>{let[a,n]=(0,m.useState)(!1),{hoverProps:s}=(0,d.useHover)({onHoverChange:n}),{focusWithinProps:i}=(0,d.useFocusWithin)({onFocusWithinChange:e=>{n(e)}}),l=(0,m.useRef)(null);return r.jsx(r.Fragment,{children:r.jsx("span",{...s,style:{position:"relative"},...i,children:(0,r.jsxs)(c.Select,{"aria-label":"Verein",isOpen:a,onOpenChange:n,children:[r.jsx(c.Button,{onFocus:()=>{a||l.current.focus()},className:o().link,children:t}),r.jsx("div",{className:`${a?o().isOpen:""} ${o().listBoxWrapper}`,children:r.jsx(c.ListBox,{className:o().listBox,"aria-label":"Links",ref:l,children:e.map(e=>r.jsx(c.ListBoxItem,{className:o().listBoxItem,href:e.href,children:e.name},e.name))})})]})})})};n()}catch(e){n(e)}})},6951:(e,t,a)=>{"use strict";a.a(e,async(e,n)=>{try{a.d(t,{Z:()=>d});var r=a(997),s=a(6968),i=a(968),l=a.n(i),o=a(9332),c=e([s]);s=(c.then?(await c)():c)[0];let d=({seo:e,title:t})=>{let{metaTitle:a,metaDescription:n,metaImage:i,keywords:c}=e||{},d=(0,o.usePathname)(),m=3===d.split("/").length&&"aktuelles"===d.split("/")[1];return(0,r.jsxs)(l(),{children:[a&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("title",{children:a}),r.jsx("meta",{property:"og:title",content:a})]}),!a&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("title",{children:m?"Aktuelles | TTC Klingenm\xfcnster":"TTC Klingenm\xfcnster"}),r.jsx("meta",{property:"og:title",content:m?"Aktuelles | TTC Klingenm\xfcnster":"TTC Klingenm\xfcnster"})]}),n&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("meta",{name:"description",content:n}),r.jsx("meta",{property:"og:description",content:n})]}),i&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("meta",{name:"image",content:(0,s.mx)(i)}),r.jsx("meta",{property:"og:image",content:(0,s.mx)(i)})]}),c&&r.jsx("meta",{name:"keywords",content:c})]})};n()}catch(e){n(e)}})},3414:(e,t,a)=>{"use strict";a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>u});var r=a(997);a(6513);var s=a(7544),i=a.n(s),l=a(9648),o=a(6968),c=a(52),d=a(6951),m=e([l,o,c,d]);function u({Component:e,pageProps:t,globalFooterData:a}){let n=t?.strapiData?.data?.attributes?.seo;return(0,r.jsxs)(r.Fragment,{children:[r.jsx(d.Z,{seo:n}),r.jsx(c.Z,{global:a,children:r.jsx(e,{...t})})]})}[l,o,c,d]=m.then?(await m)():m,u.getInitialProps=async e=>{let t=await i().getInitialProps(e);try{let e=process.env.STRAPI_URL_LOCAL,{joolaLogo:a,ttcKlingenmuensterLogo:n}=(await l.default.get(`${e}/api/global?populate=*`)).data.data.attributes;return{...t,globalFooterData:{joolaLogoURL:(0,o.mx)(a),ttcKlingenmuensterLogoURL:(0,o.mx)(n)}}}catch(e){return console.error("Fehler beim Abrufen der Bild-Links:",e),{...t,globalFooterData:[]}}},n()}catch(e){n(e)}})},6968:(e,t,a)=>{"use strict";a.a(e,async(e,n)=>{try{a.d(t,{A_:()=>l,Gd:()=>x,Hw:()=>h,I8:()=>o,OD:()=>d,PF:()=>f,SU:()=>g,Tq:()=>_,fV:()=>j,jX:()=>u,mx:()=>p,tu:()=>c});var r=a(9926),s=a(9648),i=e([r,s]);[r,s]=i.then?(await i)():i;let h="http://127.0.0.1:1337";async function l(e){try{let t=process.env.STRAPI_URL_LOCAL;return await s.default.get(`${t}/api/${e}`).then(e=>e.data)}catch(e){throw console.error("Error fetching data:",e),e}}let p=e=>{let t;return e?.data?t=h+e?.data?.attributes?.url:e?.attributes&&(t=h+e?.attributes?.url),t},x="(max-width: 500px) 245px, (max-width: 750px) 500px, (max-width: 1000px) 750px, 1000w",g="(max-width: 436px) 407px, (max-width: 768px) 688px, (max-width: 992px) 430px, 378px",f="(max-width: 768px) 686px, (max-width: 992px) 981px, 690px",_="(max-width: 768px) 700px, 300px",j="(max-width: 768px) 700px, 400px";async function o(e){let t=await fetch(h+"/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:"test",password:e})}),a=await t.json();if(!a?.error){let e=a.jwt;return localStorage.setItem("jwt",e),e}return!1}async function c(e,t,a,n){if("undefined"!=typeof localStorage){let r=localStorage.getItem("jwt"),i=v.safeParse(e);if(!i.success)return{error:i.error.issues};let l=w(e.titel);if(!l)return res.status(400).json({message:`Fehler beim erstellen der Route: ${l}`});let{day:o,month:c,year:d}=e.datum,u=new Date(d,c-1,o+1),p={titel:e.titel,kurzBeschreibung:e.kurzBeschreibung,datum:u,text:e.text,slug:l};try{let e=(await s.default.post(h+"/api/articles",{data:p},{headers:{Authorization:`Bearer ${r}`}})).data.data.id,i=t.map(t=>m(t,e,"bilder",r).then(()=>{n(e=>e+1)}).catch(e=>e));return i.push(m(a,e,"vorschauBild",r).then(()=>{n(e=>e+1)}).catch(e=>e)),await Promise.all(i),{message:"success"}}catch(e){if(e?.response?.data?.error?.details?.errors&&e?.response?.data?.error?.details?.errors[0].path[0]==="slug")return{error:"slug must be unique"};console.error("Error making POST request:",e.response)}}}async function d(e,t){if("undefined"!=typeof localStorage){let a=localStorage.getItem("jwt"),{day:n,month:r,year:i}=e.datum,l=new Date(i,r-1,n),o={titel:e.titel,kurzBeschreibung:e.kurzBeschreibung,datum:l,text:e.text};return await s.default.put(h+`/api/articles/${t}`,{data:o},{headers:{Authorization:`Bearer ${a}`}})}}let v=r.z.object({titel:r.z.string(),kurzBeschreibung:r.z.string(),datum:r.z.object({day:r.z.number(),month:r.z.number(),year:r.z.number()}),text:r.z.string()}),w=e=>{let t=e.replace(/[^a-z\s]/g," ");return t=(t=t.replace(/\s+/g," ")).replace(/\s/g,"-"),"-"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};async function m(e,t,a,n){let r=new FormData;return r.append("ref","api::article.article"),r.append("refId",t),r.append("field",a),r.append("files",e),await s.default.post(h+"/api/upload",r,{headers:{Authorization:`Bearer ${n}`}})}async function u(e){if("undefined"!=typeof localStorage){let t=localStorage.getItem("jwt");await s.default.delete(`${h}/api/articles/${e}`,{headers:{Authorization:`Bearer ${t}`}});return}}n()}catch(e){n(e)}})},6513:()=>{}};