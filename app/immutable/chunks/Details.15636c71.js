import{v as N,s as Z,f as E,g as S,h as P,d,j as c,L as O,i as T,u as k,F as V,K as me,o as Ve,O as Pe,M as Me,p as ie,r as qe,N as De,R as ke,S as we,D as ge,k as Ce,a as j,l as W,c as U,m as K,T as tt,H as Fe,Q as nt,n as ee,I as Ee,J as lt,e as fe,y as Se,C as st,P as Ze}from"./scheduler.88299003.js";import{S as Y,i as $,a as C,g as he,t as q,c as _e,f as Ie,b as te,d as ne,m as le,e as se}from"./index.15b414ac.js";import{b as pe}from"./paths.c1300dd8.js";import{h as Ge,u as at}from"./await_block.7017edd9.js";import{e as Ae}from"./each.e59479a4.js";import{L as it}from"./LoadingAnimation.bc4b1a41.js";import{f as Le}from"./format-tag.d6c065e3.js";import{i as rt}from"./tags.58927cde.js";import{a as Te}from"./posts.e71a7ea5.js";import{S as ot}from"./SimpleTag.99b8d49d.js";const ct=typeof window<"u";let ut=ct?n=>requestAnimationFrame(n):N;const ft="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",je=async(n=void 0)=>{if(typeof n!="number"&&n!==void 0)throw new TypeError("Invalid postId");const e=new URL(ft);n!==void 0&&e.searchParams.append("post_id",String(n));const t=await fetch(e);if(!t.ok)throw new Error("Failed to get tag suggestions");const l=await t.text(),r=new DOMParser().parseFromString(l,"text/xml"),a=[];for(const o of r.getElementsByTagName("comment"))a.push(ht(o.attributes));return a},ht=n=>{const e=n.getNamedItem("creator"),t=n.getNamedItem("created_at"),l=n.getNamedItem("body");if(e==null||t==null||l==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${t}, ${l}`);return{author:e.value,createdAt:t.value,content:l.value}},Ye=n=>(n==null?void 0:n.key)===" ",$e=n=>(n==null?void 0:n.key)==="Enter",xe=n=>{var e,t;$e(n)&&((t=(e=n.target)==null?void 0:e.click)==null||t.call(e))},_t="1250px",z=new IntersectionObserver(n=>{for(const e of n){const t=e.isIntersecting?e.target.getAttribute("data-src")??"":"";e.target.setAttribute("src",t)}},{rootMargin:_t});function dt(n){let e,t,l,s,r,a,o,i,_;return{c(){e=E("div"),t=E("img"),this.h()},l(u){e=S(u,"DIV",{class:!0});var h=P(e);t=S(h,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,style:!0,width:!0,height:!0,tabindex:!0}),h.forEach(d),this.h()},h(){c(t,"class","post-media svelte-dgcl67"),c(t,"loading","lazy"),c(t,"data-src",l=n[0].sample_url),c(t,"alt",s=n[0].id.toString()),c(t,"style",r=`aspect-ratio: ${n[0].width} / ${n[0].height}`),c(t,"width",a=n[0].width),c(t,"height",o=n[0].height),c(t,"tabindex","0"),c(e,"class","svelte-dgcl67"),O(e,"expandable",n[3]),O(e,"open",n[1])},m(u,h){T(u,e,h),k(e,t),n[6](t),i||(_=[V(t,"click",n[5]),V(t,"keydown",xe),V(t,"error",n[7])],i=!0)},p(u,[h]){h&1&&l!==(l=u[0].sample_url)&&c(t,"data-src",l),h&1&&s!==(s=u[0].id.toString())&&c(t,"alt",s),h&1&&r!==(r=`aspect-ratio: ${u[0].width} / ${u[0].height}`)&&c(t,"style",r),h&1&&a!==(a=u[0].width)&&c(t,"width",a),h&1&&o!==(o=u[0].height)&&c(t,"height",o),h&8&&O(e,"expandable",u[3]),h&2&&O(e,"open",u[1])},i:N,o:N,d(u){u&&d(e),n[6](null),i=!1,me(_)}}}function gt(n,e,t){let l,s,{post:r}=e,{open:a}=e,o;Ve(()=>{z==null||z.observe(o)}),Pe(()=>{z==null||z.unobserve(o)});function i(h){Me.call(this,n,h)}function _(h){ie[h?"unshift":"push"](()=>{o=h,t(2,o)})}const u=h=>h.target.src=`${pe}/assets/failed-to-load.svg`;return n.$$set=h=>{"post"in h&&t(0,r=h.post),"open"in h&&t(1,a=h.open)},n.$$.update=()=>{n.$$.dirty&1&&t(4,l=r.width/r.height),n.$$.dirty&16&&t(3,s=l<.33)},[r,a,o,s,l,i,_,u]}class fn extends Y{constructor(e){super(),$(this,e,gt,dt,Z,{post:0,open:1})}}const Ue=n=>{if(typeof n!="number")throw new TypeError(`Attempted to call formatVideoTime with invalid value: ${n}`);const e=Math.floor(n),t=e%60,l=Math.floor(e/60);return`${Be(l)}:${Be(t)}`},Be=n=>{const e=String(n),t=Math.max(0,2-e.length);return`${"0".repeat(t)}${e}`};function mt(n){let e,t;return{c(){e=E("img"),this.h()},l(l){e=S(l,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),this.h()},h(){ge(e.src,t=pe+"/assets/play.svg")||c(e,"src",t),c(e,"alt","Start GIF"),c(e,"width","16"),c(e,"height","32"),Ce(e,"margin-left","4px")},m(l,s){T(l,e,s)},p:N,d(l){l&&d(e)}}}function pt(n){let e,t;return{c(){e=E("img"),this.h()},l(l){e=S(l,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){ge(e.src,t=pe+"/assets/pause.svg")||c(e,"src",t),c(e,"alt","Stop GIF"),c(e,"width","16"),c(e,"height","32")},m(l,s){T(l,e,s)},p:N,d(l){l&&d(e)}}}function bt(n){let e,t;return{c(){e=E("img"),this.h()},l(l){e=S(l,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){ge(e.src,t=pe+"/assets/load.svg")||c(e,"src",t),c(e,"alt","Loading GIF"),c(e,"width","16"),c(e,"height","32")},m(l,s){T(l,e,s)},p:N,d(l){l&&d(e)}}}function vt(n){let e,t,l,s,r;function a(_,u){return _[1]?bt:_[0]?pt:mt}let o=a(n),i=o(n);return{c(){e=E("button"),t=E("div"),i.c(),this.h()},l(_){e=S(_,"BUTTON",{class:!0});var u=P(e);t=S(u,"DIV",{class:!0});var h=P(t);i.l(h),h.forEach(d),u.forEach(d),this.h()},h(){c(t,"class","circle svelte-16x84bp"),c(e,"class",l=qe(n[3].class)+" svelte-16x84bp"),O(e,"play",n[0]&&!n[1])},m(_,u){T(_,e,u),k(e,t),i.m(t,null),s||(r=V(e,"click",De(n[2])),s=!0)},p(_,[u]){o===(o=a(_))&&i?i.p(_,u):(i.d(1),i=o(_),i&&(i.c(),i.m(t,null))),u&8&&l!==(l=qe(_[3].class)+" svelte-16x84bp")&&c(e,"class",l),u&11&&O(e,"play",_[0]&&!_[1])},i:N,o:N,d(_){_&&d(e),i.d(),s=!1,r()}}}function yt(n,e,t){let{playing:l}=e,{loading:s}=e;const r=()=>{t(1,s=!0),t(0,l=!l)};return n.$$set=a=>{t(3,e=ke(ke({},e),we(a))),"playing"in a&&t(0,l=a.playing),"loading"in a&&t(1,s=a.loading)},e=we(e),[l,s,r,e]}class et extends Y{constructor(e){super(),$(this,e,yt,vt,Z,{playing:0,loading:1})}}function Re(n){let e,t,l,s=!0,r=!1,a,o,i,_=Ue(n[15])+"",u,h,v,w,y,A,m,p,b,L,H;function ae(){cancelAnimationFrame(a),e.paused||(a=ut(ae),r=!0),n[25].call(e)}function F(g){n[30](g)}function x(g){n[31](g)}let J={class:"center"};return n[5]!==void 0&&(J.playing=n[5]),n[6]!==void 0&&(J.loading=n[6]),A=new et({props:J}),ie.push(()=>Ie(A,"playing",F)),ie.push(()=>Ie(A,"loading",x)),{c(){e=E("video"),o=j(),i=E("span"),u=W(_),h=j(),v=E("input"),y=j(),te(A.$$.fragment),this.h()},l(g){e=S(g,"VIDEO",{poster:!0,src:!0,preload:!0,style:!0,class:!0}),P(e).forEach(d),o=U(g),i=S(g,"SPAN",{class:!0});var I=P(i);u=K(I,_),I.forEach(d),h=U(g),v=S(g,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0,class:!0}),y=U(g),ne(A.$$.fragment,g),this.h()},h(){c(e,"poster",n[1]),e.loop=n[4],ge(e.src,t=n[0])||c(e,"src",t),c(e,"preload","metadata"),c(e,"style",l=`aspect-ratio: ${n[2]} / ${n[3]}`),c(e,"class","svelte-5yiaie"),n[8]===void 0&&tt(()=>n[26].call(e)),c(i,"class","svelte-5yiaie"),O(i,"hide",n[12]),c(v,"type","range"),c(v,"min",0),c(v,"max",n[8]),c(v,"step",.0166666),c(v,"style",w=`background-image: linear-gradient(90deg, var(--accent) ${n[13]}%, var(--background-2) ${n[13]}%);}`),c(v,"class","svelte-5yiaie"),O(v,"hide",n[12])},m(g,I){T(g,e,I),n[23](e),T(g,o,I),T(g,i,I),k(i,u),T(g,h,I),T(g,v,I),Fe(v,n[7]),T(g,y,I),le(A,g,I),b=!0,L||(H=[V(e,"play",n[24]),V(e,"pause",n[24]),V(e,"timeupdate",ae),V(e,"durationchange",n[26]),V(e,"waiting",n[19]),V(e,"playing",n[20]),V(e,"pause",n[20]),V(e,"ended",n[27]),V(e,"dblclick",De(nt(n[28]))),V(v,"change",n[29]),V(v,"input",n[29]),V(v,"click",De(wt))],L=!0)},p(g,I){(!b||I[0]&2)&&c(e,"poster",g[1]),(!b||I[0]&16)&&(e.loop=g[4]),(!b||I[0]&1&&!ge(e.src,t=g[0]))&&c(e,"src",t),(!b||I[0]&12&&l!==(l=`aspect-ratio: ${g[2]} / ${g[3]}`))&&c(e,"style",l),I[0]&16384&&s!==(s=g[14])&&e[s?"pause":"play"](),!r&&I[0]&128&&!isNaN(g[7])&&(e.currentTime=g[7]),r=!1,(!b||I[0]&32768)&&_!==(_=Ue(g[15])+"")&&ee(u,_),(!b||I[0]&4096)&&O(i,"hide",g[12]),(!b||I[0]&256)&&c(v,"max",g[8]),(!b||I[0]&8192&&w!==(w=`background-image: linear-gradient(90deg, var(--accent) ${g[13]}%, var(--background-2) ${g[13]}%);}`))&&c(v,"style",w),I[0]&128&&Fe(v,g[7]),(!b||I[0]&4096)&&O(v,"hide",g[12]);const G={};!m&&I[0]&32&&(m=!0,G.playing=g[5],Ee(()=>m=!1)),!p&&I[0]&64&&(p=!0,G.loading=g[6],Ee(()=>p=!1)),A.$set(G)},i(g){b||(C(A.$$.fragment,g),b=!0)},o(g){q(A.$$.fragment,g),b=!1},d(g){g&&(d(e),d(o),d(i),d(h),d(v),d(y)),n[23](null),se(A,g),L=!1,me(H)}}}function kt(n){let e,t,l,s,r,a=n[9]&&Re(n);return{c(){e=E("div"),a&&a.c(),this.h()},l(o){e=S(o,"DIV",{tabindex:!0,class:!0,style:!0});var i=P(e);a&&a.l(i),i.forEach(d),this.h()},h(){c(e,"tabindex","0"),c(e,"class",t="post-media player "+n[21].class+" svelte-5yiaie"),Ce(e,"aspect-ratio",n[2]+"/"+n[3])},m(o,i){T(o,e,i),a&&a.m(e,null),n[32](e),l=!0,s||(r=[V(e,"click",n[22]),V(e,"keydown",n[18])],s=!0)},p(o,i){o[9]?a?(a.p(o,i),i[0]&512&&C(a,1)):(a=Re(o),a.c(),C(a,1),a.m(e,null)):a&&(he(),q(a,1,1,()=>{a=null}),_e()),(!l||i[0]&2097152&&t!==(t="post-media player "+o[21].class+" svelte-5yiaie"))&&c(e,"class",t),(!l||i[0]&12)&&Ce(e,"aspect-ratio",o[2]+"/"+o[3])},i(o){l||(C(a),l=!0)},o(o){q(a),l=!1},d(o){o&&d(e),a&&a.d(),n[32](null),s=!1,me(r)}}}const Oe=5,wt=()=>{};function Et(n,e,t){let l,s,r,a,{src:o}=e,{poster:i}=e,{width:_}=e,{height:u}=e,{loop:h}=e,v,w,y=!1,A=!1,m=0,p=0,b=!1;const L=()=>{t(7,m=Math.max(0,m-Oe))},H=()=>{t(7,m=Math.min(p,m+Oe))},ae=f=>{var D;$e(f)?(D=f.target)==null||D.click():Ye(f)||f.key==="k"?(f.preventDefault(),t(5,y=!y)):f.key==="ArrowLeft"||f.key==="j"?L():(f.key==="ArrowRight"||f.key==="l")&&H()},F=new IntersectionObserver(f=>{for(const D of f)D.isIntersecting?t(9,b=!0):w&&(t(5,y=!1),t(6,A=!1),w.addEventListener("error",()=>{t(9,b=!1)},{once:!0}),t(11,w.src="",w))},{rootMargin:"0px"}),x=()=>t(6,A=!0),J=()=>t(6,A=!1);Ve(()=>F==null?void 0:F.observe(v)),Pe(()=>F==null?void 0:F.unobserve(v));function g(f){Me.call(this,n,f)}function I(f){ie[f?"unshift":"push"](()=>{w=f,t(11,w)})}function G(){s=this.paused,t(14,s),t(5,y),t(9,b)}function R(){m=this.currentTime,t(7,m)}function Q(){p=this.duration,t(8,p)}const de=()=>{h||(t(6,A=!1),t(5,y=!1))},be=f=>{f.offsetX<f.target.clientWidth/2?L():H()};function M(){m=lt(this.value),t(7,m)}function ve(f){y=f,t(5,y),t(9,b)}function X(f){A=f,t(6,A)}function ye(f){ie[f?"unshift":"push"](()=>{v=f,t(10,v)})}return n.$$set=f=>{t(21,e=ke(ke({},e),we(f))),"src"in f&&t(0,o=f.src),"poster"in f&&t(1,i=f.poster),"width"in f&&t(2,_=f.width),"height"in f&&t(3,u=f.height),"loop"in f&&t(4,h=f.loop)},n.$$.update=()=>{n.$$.dirty[0]&384&&t(15,l=p-m),n.$$.dirty[0]&544&&t(5,y=b&&y),n.$$.dirty[0]&32&&t(14,s=!y),n.$$.dirty[0]&384&&t(13,r=m/p*98+1),n.$$.dirty[0]&96&&t(12,a=y&&!A)},e=we(e),[o,i,_,u,h,y,A,m,p,b,v,w,a,r,s,l,L,H,ae,x,J,e,g,I,G,R,Q,de,be,M,ve,X,ye]}class hn extends Y{constructor(e){super(),$(this,e,Et,kt,Z,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}const St=n=>n.endsWith(".gif"),It=(n,e,t)=>St(e)?{static:t,animated:e}:{static:e,animated:n},At=n=>n.endsWith(".mp4")||n.endsWith(".webm"),_n=(n,e,t)=>At(e)?{static:t,animated:e}:{static:e,animated:n};function Nt(n){let e,t,l,s,r,a,o,i,_,u,h,v,w;function y(p){n[11](p)}function A(p){n[12](p)}let m={class:"center"};return n[2]!==void 0&&(m.playing=n[2]),n[3]!==void 0&&(m.loading=n[3]),o=new et({props:m}),ie.push(()=>Ie(o,"playing",y)),ie.push(()=>Ie(o,"loading",A)),{c(){e=E("div"),t=E("img"),a=j(),te(o.$$.fragment),this.h()},l(p){e=S(p,"DIV",{class:!0,style:!0});var b=P(e);t=S(b,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,width:!0,height:!0,tabindex:!0}),a=U(b),ne(o.$$.fragment,b),b.forEach(d),this.h()},h(){c(t,"class","post-media media-img svelte-1cndgba"),c(t,"loading","lazy"),c(t,"data-src",n[4]),c(t,"alt",l=n[0].id.toString()),c(t,"width",s=n[0].width),c(t,"height",r=n[0].height),c(t,"tabindex","0"),c(e,"class","container svelte-1cndgba"),c(e,"style",u=`aspect-ratio: ${n[0].width} / ${n[0].height}`)},m(p,b){T(p,e,b),k(e,t),n[7](t),k(e,a),le(o,e,null),h=!0,v||(w=[V(t,"click",n[6]),V(t,"keydown",n[8]),V(t,"load",n[9]),V(t,"error",n[10])],v=!0)},p(p,[b]){(!h||b&16)&&c(t,"data-src",p[4]),(!h||b&1&&l!==(l=p[0].id.toString()))&&c(t,"alt",l),(!h||b&1&&s!==(s=p[0].width))&&c(t,"width",s),(!h||b&1&&r!==(r=p[0].height))&&c(t,"height",r);const L={};!i&&b&4&&(i=!0,L.playing=p[2],Ee(()=>i=!1)),!_&&b&8&&(_=!0,L.loading=p[3],Ee(()=>_=!1)),o.$set(L),(!h||b&1&&u!==(u=`aspect-ratio: ${p[0].width} / ${p[0].height}`))&&c(e,"style",u)},i(p){h||(C(o.$$.fragment,p),h=!0)},o(p){q(o.$$.fragment,p),h=!1},d(p){p&&d(e),n[7](null),se(o),v=!1,me(w)}}}function Tt(n,e,t){let l,s,{post:r}=e,a,o=!1,i=!1;Ve(()=>z==null?void 0:z.observe(a)),Pe(()=>z==null?void 0:z.unobserve(a));function _(m){Me.call(this,n,m)}function u(m){ie[m?"unshift":"push"](()=>{a=m,t(1,a),t(2,o),t(5,l),t(0,r)})}const h=m=>{xe(m),Ye(m)&&(m.preventDefault(),t(3,i=!0),t(2,o=!o))},v=()=>t(3,i=!1),w=m=>{t(3,i=!1),m.target.src=`${pe}/assets/failed-to-load.svg`};function y(m){o=m,t(2,o)}function A(m){i=m,t(3,i)}return n.$$set=m=>{"post"in m&&t(0,r=m.post)},n.$$.update=()=>{n.$$.dirty&1&&t(5,l=It(r.file_url,r.sample_url,r.preview_url)),n.$$.dirty&36&&t(4,s=o?l.animated:l.static),n.$$.dirty&38&&a&&t(1,a.src=o?l.animated:l.static,a)},[r,a,o,i,s,l,_,u,h,v,w,y,A]}class dn extends Y{constructor(e){super(),$(this,e,Tt,Nt,Z,{post:0})}}const ze=6e4,Ne=n=>{if(!Dt(n))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(n).getTime()/ze,l=new Date().getTime()/ze-e;if(l<1)return"just now";if(l<60)return ue(l,"minute");const s=l/60;if(s<24)return ue(s,"hour");const r=s/24;if(r<7)return ue(r,"day");if(r<30.5)return ue(r/7,"week");if(r<365.25)return ue(r/30.5,"month");const a=r/365.25;return ue(a,"year")},Dt=n=>(typeof n=="number"||typeof n=="string")&&new Date(n).toString()!=="Invalid Date",ue=(n,e)=>{const t=n.toFixed();return`${t} ${e}${t==="1"?"":"s"} ago`};function Ct(n){let e,t,l=n[0].author+"",s,r,a,o=Ne(n[0].createdAt)+"",i,_,u,h=n[0].content+"",v;return{c(){e=E("div"),t=E("span"),s=W(l),r=j(),a=E("span"),i=W(o),_=j(),u=E("span"),v=W(h),this.h()},l(w){e=S(w,"DIV",{class:!0});var y=P(e);t=S(y,"SPAN",{class:!0});var A=P(t);s=K(A,l),A.forEach(d),r=U(y),a=S(y,"SPAN",{class:!0});var m=P(a);i=K(m,o),m.forEach(d),_=U(y),u=S(y,"SPAN",{class:!0});var p=P(u);v=K(p,h),p.forEach(d),y.forEach(d),this.h()},h(){c(t,"class","author svelte-gbprdj"),c(a,"class","created-at svelte-gbprdj"),c(u,"class","content svelte-gbprdj"),c(e,"class","svelte-gbprdj")},m(w,y){T(w,e,y),k(e,t),k(t,s),k(e,r),k(e,a),k(a,i),k(e,_),k(e,u),k(u,v)},p(w,[y]){y&1&&l!==(l=w[0].author+"")&&ee(s,l),y&1&&o!==(o=Ne(w[0].createdAt)+"")&&ee(i,o),y&1&&h!==(h=w[0].content+"")&&ee(v,h)},i:N,o:N,d(w){w&&d(e)}}}function Vt(n,e,t){let{comment:l}=e;return n.$$set=s=>{"comment"in s&&t(0,l=s.comment)},[l]}class Pt extends Y{constructor(e){super(),$(this,e,Vt,Ct,Z,{comment:0})}}function Mt(n){let e,t=Ne(n[0])+"",l;return{c(){e=E("span"),l=W(t),this.h()},l(s){e=S(s,"SPAN",{class:!0});var r=P(e);l=K(r,t),r.forEach(d),this.h()},h(){c(e,"class","svelte-1vqihm9")},m(s,r){T(s,e,r),k(e,l)},p(s,[r]){r&1&&t!==(t=Ne(s[0])+"")&&ee(l,t)},i:N,o:N,d(s){s&&d(e)}}}function qt(n,e,t){let{value:l}=e;return n.$$set=s=>{"value"in s&&t(0,l=s.value)},[l]}class Ft extends Y{constructor(e){super(),$(this,e,qt,Mt,Z,{value:0})}}function Gt(n){let e,t=Le(n[0])+"",l;return{c(){e=E("span"),l=W(t),this.h()},l(s){e=S(s,"SPAN",{"data-testid":!0,class:!0});var r=P(e);l=K(r,t),r.forEach(d),this.h()},h(){c(e,"data-testid","score"),c(e,"class","codicon codicon-heart svelte-ws217e")},m(s,r){T(s,e,r),k(e,l)},p(s,[r]){r&1&&t!==(t=Le(s[0])+"")&&ee(l,t)},i:N,o:N,d(s){s&&d(e)}}}function Lt(n,e,t){let{value:l}=e;return n.$$set=s=>{"value"in s&&t(0,l=s.value)},[l]}class jt extends Y{constructor(e){super(),$(this,e,Lt,Gt,Z,{value:0})}}function We(n){let e,t,l,s,r;return{c(){e=E("a"),t=E("i"),l=j(),s=W(n[1]),this.h()},l(a){e=S(a,"A",{href:!0,target:!0,class:!0});var o=P(e);t=S(o,"I",{class:!0}),P(t).forEach(d),l=U(o),s=K(o,n[1]),o.forEach(d),this.h()},h(){c(t,"class","codicon codicon-link"),c(e,"href",r=n[0].toString()),c(e,"target","_newtab"),c(e,"class","svelte-oadf5t")},m(a,o){T(a,e,o),k(e,t),k(e,l),k(e,s)},p(a,o){o&2&&ee(s,a[1]),o&1&&r!==(r=a[0].toString())&&c(e,"href",r)},d(a){a&&d(e)}}}function Ut(n){let e,t=n[0]&&We(n);return{c(){t&&t.c(),e=fe()},l(l){t&&t.l(l),e=fe()},m(l,s){t&&t.m(l,s),T(l,e,s)},p(l,[s]){l[0]?t?t.p(l,s):(t=We(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:N,o:N,d(l){l&&d(e),t&&t.d(l)}}}function Bt(n,e,t){let l,s,{source:r}=e;return n.$$set=a=>{"source"in a&&t(2,r=a.source)},n.$$.update=()=>{var a;n.$$.dirty&4&&t(0,l=rt(r)?new URL(r):null),n.$$.dirty&1&&t(1,s=(a=l==null?void 0:l.hostname)==null?void 0:a.replace(/^www./,""))},[l,s,r]}class Rt extends Y{constructor(e){super(),$(this,e,Bt,Ut,Z,{source:2})}}function Ot(n){let e,t,l;return{c(){e=E("a"),t=E("i"),l=W(" File"),this.h()},l(s){e=S(s,"A",{href:!0,target:!0,class:!0});var r=P(e);t=S(r,"I",{class:!0}),P(t).forEach(d),l=K(r," File"),r.forEach(d),this.h()},h(){c(t,"class","codicon codicon-link-external"),c(e,"href",n[0]),c(e,"target","_newtab"),c(e,"class","svelte-oadf5t")},m(s,r){T(s,e,r),k(e,t),k(e,l)},p(s,[r]){r&1&&c(e,"href",s[0])},i:N,o:N,d(s){s&&d(e)}}}function zt(n,e,t){let{url:l}=e;return n.$$set=s=>{"url"in s&&t(0,l=s.url)},[l]}class Wt extends Y{constructor(e){super(),$(this,e,zt,Ot,Z,{url:0})}}function Ke(n,e,t){const l=n.slice();return l[12]=e[t],l}function He(n,e,t){const l=n.slice();l[7]=e[t];const s=l[2].find(function(...a){return n[6](l[7],...a)})!==void 0;return l[8]=s,l}function Je(n){let e,t="•",l,s,r;return s=new Rt({props:{source:n[0].source}}),{c(){e=E("span"),e.textContent=t,l=j(),te(s.$$.fragment),this.h()},l(a){e=S(a,"SPAN",{class:!0,"data-svelte-h":!0}),Se(e)!=="svelte-7hh8jk"&&(e.textContent=t),l=U(a),ne(s.$$.fragment,a),this.h()},h(){c(e,"class","svelte-4c1qy8")},m(a,o){T(a,e,o),T(a,l,o),le(s,a,o),r=!0},p(a,o){const i={};o&1&&(i.source=a[0].source),s.$set(i)},i(a){r||(C(s.$$.fragment,a),r=!0)},o(a){q(s.$$.fragment,a),r=!1},d(a){a&&(d(e),d(l)),se(s,a)}}}function Kt(n){let e,t,l,s={ctx:n,current:null,token:null,hasCatch:!1,pending:Yt,then:Qt,catch:Jt,value:11,blocks:[,,,]};return Ge(t=je(n[0].id),s),{c(){e=fe(),s.block.c()},l(r){e=fe(),s.block.l(r)},m(r,a){T(r,e,a),s.block.m(r,s.anchor=a),s.mount=()=>e.parentNode,s.anchor=e,l=!0},p(r,a){n=r,s.ctx=n,a&1&&t!==(t=je(n[0].id))&&Ge(t,s)||at(s,n,a)},i(r){l||(C(s.block),l=!0)},o(r){for(let a=0;a<3;a+=1){const o=s.blocks[a];q(o)}l=!1},d(r){r&&d(e),s.block.d(r),s.token=null,s=null}}}function Ht(n){let e,t,l=Ae(n[0].tags),s=[];for(let a=0;a<l.length;a+=1)s[a]=Xe(He(n,l,a));const r=a=>q(s[a],1,1,()=>{s[a]=null});return{c(){e=E("ul");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=S(a,"UL",{class:!0});var o=P(e);for(let i=0;i<s.length;i+=1)s[i].l(o);o.forEach(d),this.h()},h(){c(e,"class","tags svelte-4c1qy8")},m(a,o){T(a,e,o);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null);t=!0},p(a,o){if(o&5){l=Ae(a[0].tags);let i;for(i=0;i<l.length;i+=1){const _=He(a,l,i);s[i]?(s[i].p(_,o),C(s[i],1)):(s[i]=Xe(_),s[i].c(),C(s[i],1),s[i].m(e,null))}for(he(),i=l.length;i<s.length;i+=1)r(i);_e()}},i(a){if(!t){for(let o=0;o<l.length;o+=1)C(s[o]);t=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)q(s[o]);t=!1},d(a){a&&d(e),Ze(s,a)}}}function Jt(n){return{c:N,l:N,m:N,p:N,i:N,o:N,d:N}}function Qt(n){let e,t,l,s;const r=[Zt,Xt],a=[];function o(i,_){return i[11].length>0?0:1}return e=o(n),t=a[e]=r[e](n),{c(){t.c(),l=fe()},l(i){t.l(i),l=fe()},m(i,_){a[e].m(i,_),T(i,l,_),s=!0},p(i,_){let u=e;e=o(i),e===u?a[e].p(i,_):(he(),q(a[u],1,1,()=>{a[u]=null}),_e(),t=a[e],t?t.p(i,_):(t=a[e]=r[e](i),t.c()),C(t,1),t.m(l.parentNode,l))},i(i){s||(C(t),s=!0)},o(i){q(t),s=!1},d(i){i&&d(l),a[e].d(i)}}}function Xt(n){let e,t="Comments for this post are not available";return{c(){e=E("span"),e.textContent=t,this.h()},l(l){e=S(l,"SPAN",{class:!0,"data-svelte-h":!0}),Se(e)!=="svelte-4t2lxe"&&(e.textContent=t),this.h()},h(){c(e,"class","no-comments svelte-4c1qy8")},m(l,s){T(l,e,s)},p:N,i:N,o:N,d(l){l&&d(e)}}}function Zt(n){let e,t,l=Ae(n[11]),s=[];for(let a=0;a<l.length;a+=1)s[a]=Qe(Ke(n,l,a));const r=a=>q(s[a],1,1,()=>{s[a]=null});return{c(){e=E("ul");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=S(a,"UL",{class:!0});var o=P(e);for(let i=0;i<s.length;i+=1)s[i].l(o);o.forEach(d),this.h()},h(){c(e,"class","comments svelte-4c1qy8")},m(a,o){T(a,e,o);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null);t=!0},p(a,o){if(o&1){l=Ae(a[11]);let i;for(i=0;i<l.length;i+=1){const _=Ke(a,l,i);s[i]?(s[i].p(_,o),C(s[i],1)):(s[i]=Qe(_),s[i].c(),C(s[i],1),s[i].m(e,null))}for(he(),i=l.length;i<s.length;i+=1)r(i);_e()}},i(a){if(!t){for(let o=0;o<l.length;o+=1)C(s[o]);t=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)q(s[o]);t=!1},d(a){a&&d(e),Ze(s,a)}}}function Qe(n){let e,t;return e=new Pt({props:{comment:n[12]}}),{c(){te(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,s){le(e,l,s),t=!0},p(l,s){const r={};s&1&&(r.comment=l[12]),e.$set(r)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){se(e,l)}}}function Yt(n){let e,t;return e=new it({}),{c(){te(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,s){le(e,l,s),t=!0},p:N,i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){se(e,l)}}}function Xe(n){let e,t;function l(){return n[5](n[8],n[7])}return e=new ot({props:{tag:n[7],active:n[8]}}),e.$on("click",l),{c(){te(e.$$.fragment)},l(s){ne(e.$$.fragment,s)},m(s,r){le(e,s,r),t=!0},p(s,r){n=s;const a={};r&1&&(a.tag=n[7]),r&5&&(a.active=n[8]),e.$set(a)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){se(e,s)}}}function $t(n){let e,t,l,s,r,a="•",o,i,_,u,h="•",v,w,y,A,m,p,b=n[0].tags.length+"",L,H,ae,F,x=(n[0].comment_count||"No")+"",J,g,I,G,R,Q,de,be;l=new jt({props:{value:n[0].score}}),i=new Ft({props:{value:n[0].change}}),w=new Wt({props:{url:n[0].file_url}});let M=n[0].source&&Je(n);const ve=[Ht,Kt],X=[];function ye(f,D){return f[1]==="tags"?0:1}return G=ye(n),R=X[G]=ve[G](n),{c(){e=E("div"),t=E("div"),te(l.$$.fragment),s=j(),r=E("span"),r.textContent=a,o=j(),te(i.$$.fragment),_=j(),u=E("span"),u.textContent=h,v=j(),te(w.$$.fragment),y=j(),M&&M.c(),A=j(),m=E("div"),p=E("button"),L=W(b),H=W(" tags"),ae=j(),F=E("button"),J=W(x),g=W(" comments"),I=j(),R.c(),this.h()},l(f){e=S(f,"DIV",{class:!0});var D=P(e);t=S(D,"DIV",{class:!0});var B=P(t);ne(l.$$.fragment,B),s=U(B),r=S(B,"SPAN",{class:!0,"data-svelte-h":!0}),Se(r)!=="svelte-7hh8jk"&&(r.textContent=a),o=U(B),ne(i.$$.fragment,B),_=U(B),u=S(B,"SPAN",{class:!0,"data-svelte-h":!0}),Se(u)!=="svelte-7hh8jk"&&(u.textContent=h),v=U(B),ne(w.$$.fragment,B),y=U(B),M&&M.l(B),B.forEach(d),A=U(D),m=S(D,"DIV",{class:!0});var re=P(m);p=S(re,"BUTTON",{class:!0});var ce=P(p);L=K(ce,b),H=K(ce," tags"),ce.forEach(d),ae=U(re),F=S(re,"BUTTON",{class:!0});var oe=P(F);J=K(oe,x),g=K(oe," comments"),oe.forEach(d),re.forEach(d),I=U(D),R.l(D),D.forEach(d),this.h()},h(){c(r,"class","svelte-4c1qy8"),c(u,"class","svelte-4c1qy8"),c(t,"class","summary svelte-4c1qy8"),c(p,"class","codicon codicon-tag svelte-4c1qy8"),O(p,"active",n[1]==="tags"),c(F,"class","codicon codicon-comment-discussion svelte-4c1qy8"),O(F,"active",n[1]==="comments"),c(m,"class","tabs svelte-4c1qy8"),c(e,"class","details svelte-4c1qy8")},m(f,D){T(f,e,D),k(e,t),le(l,t,null),k(t,s),k(t,r),k(t,o),le(i,t,null),k(t,_),k(t,u),k(t,v),le(w,t,null),k(t,y),M&&M.m(t,null),k(e,A),k(e,m),k(m,p),k(p,L),k(p,H),k(m,ae),k(m,F),k(F,J),k(F,g),k(e,I),X[G].m(e,null),Q=!0,de||(be=[V(p,"click",n[3]),V(F,"click",n[4])],de=!0)},p(f,[D]){const B={};D&1&&(B.value=f[0].score),l.$set(B);const re={};D&1&&(re.value=f[0].change),i.$set(re);const ce={};D&1&&(ce.url=f[0].file_url),w.$set(ce),f[0].source?M?(M.p(f,D),D&1&&C(M,1)):(M=Je(f),M.c(),C(M,1),M.m(t,null)):M&&(he(),q(M,1,1,()=>{M=null}),_e()),(!Q||D&1)&&b!==(b=f[0].tags.length+"")&&ee(L,b),(!Q||D&2)&&O(p,"active",f[1]==="tags"),(!Q||D&1)&&x!==(x=(f[0].comment_count||"No")+"")&&ee(J,x),(!Q||D&2)&&O(F,"active",f[1]==="comments");let oe=G;G=ye(f),G===oe?X[G].p(f,D):(he(),q(X[oe],1,1,()=>{X[oe]=null}),_e(),R=X[G],R?R.p(f,D):(R=X[G]=ve[G](f),R.c()),C(R,1),R.m(e,null))},i(f){Q||(C(l.$$.fragment,f),C(i.$$.fragment,f),C(w.$$.fragment,f),C(M),C(R),Q=!0)},o(f){q(l.$$.fragment,f),q(i.$$.fragment,f),q(w.$$.fragment,f),q(M),q(R),Q=!1},d(f){f&&d(e),se(l),se(i),se(w),M&&M.d(),X[G].d(),de=!1,me(be)}}}function xt(n,e,t){let l;st(n,Te,u=>t(2,l=u));let{post:s}=e,r="tags";const a=()=>{t(1,r="tags")},o=()=>{t(1,r="comments")},i=(u,h)=>u?Te.removeByName(h.name):Te.addOrReplace({...h,modifier:"+"}),_=(u,h)=>h.name===u.name;return n.$$set=u=>{"post"in u&&t(0,s=u.post)},[s,r,l,a,o,i,_]}class gn extends Y{constructor(e){super(),$(this,e,xt,$t,Z,{post:0})}}export{gn as D,dn as G,fn as I,hn as V,_n as g,$e as i};
