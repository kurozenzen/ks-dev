import{s as ne,f as E,a as P,g as S,c as N,y as ce,D as _e,j as m,i as I,d as _,E as ve,l as X,m as x,e as ue,h as O,u as v,F as ie,n as Oe,C as pe,G as vt,p as ke,H as we,I as je,J as it,K as Le,L as ye,k as Fe,v as U,M as Me,w as bt,N as kt,z as wt,A as yt,B as Et,o as qe,O as ze,P as Ge,r as ct}from"../chunks/scheduler.88299003.js";import{S as le,i as re,b as B,d as L,m as A,a as k,t as w,e as V,g as ee,c as te,f as Be}from"../chunks/index.15b414ac.js";import{s as fe,r as Ne,K as St,A as Ct,a as Ae,S as It}from"../chunks/search-builder.1bb73e3b.js";import{S as Dt,n as Pt,s as Ye}from"../chunks/supertags-store.5b26dd7f.js";import{T as Te}from"../chunks/TextButton.2f318c50.js";import{g as Nt,a as Ot}from"../chunks/tags.58927cde.js";import{a as Pe}from"../chunks/active-tags-store.ee1f6602.js";import{b as ut}from"../chunks/paths.3f4db0b0.js";import{e as Ee}from"../chunks/each.e59479a4.js";import{D as ft,r as Tt}from"../chunks/Dialog.f8853b6f.js";import{i as pt,D as _t,G as mt,V as Rt,I as jt}from"../chunks/Details.ab388049.js";import{f as Re}from"../chunks/format-tag.d6c065e3.js";import{R as Bt,I as Ve}from"../chunks/ModifierSelect.623aacd6.js";import{S as Ze}from"../chunks/Select.22805bc7.js";import{R as Lt}from"../chunks/RotatingTextSelect.7e32facf.js";import{b as At}from"../chunks/blocked-content-store.805c4a3d.js";import{D as Vt}from"../chunks/DetailedTag.28ff9b0d.js";import{S as Ft}from"../chunks/ScrollUpButton.cfa21b3f.js";import{l as Mt}from"../chunks/analytics.12ea4383.js";function qt(n){let e;return{c(){e=X("Reset Filter")},l(s){e=x(s,"Reset Filter")},m(s,t){I(s,e,t)},d(s){s&&_(e)}}}function zt(n){let e,s,t,l,r="We couldn't find any posts matching your tags. Sorry...",o,u,c;return u=new Te({props:{title:"In case your filter caused all posts to vanish. Reset it.",$$slots:{default:[qt]},$$scope:{ctx:n}}}),u.$on("click",n[1]),{c(){e=E("img"),t=P(),l=E("p"),l.textContent=r,o=P(),B(u.$$.fragment),this.h()},l(i){e=S(i,"IMG",{src:!0,alt:!0,class:!0}),t=N(i),l=S(i,"P",{"data-svelte-h":!0}),ce(l)!=="svelte-1utxj3w"&&(l.textContent=r),o=N(i),L(u.$$.fragment,i),this.h()},h(){_e(e.src,s=ut+"/assets/shironeko-confused.png")||m(e,"src",s),m(e,"alt","Nothing here..."),m(e,"class","svelte-1bb5e7g")},m(i,a){I(i,e,a),I(i,t,a),I(i,l,a),I(i,o,a),A(u,i,a),c=!0},p(i,[a]){const f={};a&4&&(f.$$scope={dirty:a,ctx:i}),u.$set(f)},i(i){c||(k(u.$$.fragment,i),c=!0)},o(i){w(u.$$.fragment,i),c=!1},d(i){i&&(_(e),_(t),_(l),_(o)),V(u,i)}}}function Gt(n){const e=ve();return[e,()=>{fe.reset(),e("sortfilterupdate")}]}class Ut extends le{constructor(e){super(),re(this,e,Gt,zt,ne,{})}}function Je(n){let e,s;return e=new ft({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}}),e.$on("close",n[6]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&32771&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Kt(n){let e;return{c(){e=X("Done")},l(s){e=x(s,"Done")},m(s,t){I(s,e,t)},d(s){s&&_(e)}}}function Ht(n){let e;return{c(){e=X("Reset")},l(s){e=x(s,"Reset")},m(s,t){I(s,e,t)},d(s){s&&_(e)}}}function Wt(n){let e,s,t="Sorting and Filtering",l,r,o,u="Sorting",c,i,a,f,p,d,g,F,b,y,h="Filtering by Score",C,D,Y,oe,Z,K,ae,$,z,J="Filtering by Rating",W,Q,M,Se,R,T,H,q,se,be,Ce;function Ie(j){n[8](j)}let Ue={options:Jt};n[1].sortDirection!==void 0&&(Ue.value=n[1].sortDirection),a=new Bt({props:Ue}),ke.push(()=>Be(a,"value",Ie));function dt(j){n[9](j)}let Ke={options:Zt};n[1].sortProperty!==void 0&&(Ke.value=n[1].sortProperty),d=new Ze({props:Ke}),ke.push(()=>Be(d,"value",dt));function ht(j){n[10](j)}let He={options:Qt};n[1].scoreComparator!==void 0&&(He.value=n[1].scoreComparator),Y=new Lt({props:He}),ke.push(()=>Be(Y,"value",ht));function $t(j){n[13](j)}let We={options:gt};return n[1].rating!==void 0&&(We.value=n[1].rating),M=new Ze({props:We}),ke.push(()=>Be(M,"value",$t)),T=new Te({props:{title:"Return to searching.",$$slots:{default:[Kt]},$$scope:{ctx:n}}}),T.$on("click",n[6]),q=new Te({props:{title:"Reset sort and filter.",type:"secondary",$$slots:{default:[Ht]},$$scope:{ctx:n}}}),q.$on("click",n[7]),{c(){e=E("div"),s=E("h3"),s.textContent=t,l=P(),r=E("label"),o=E("b"),o.textContent=u,c=P(),i=E("div"),B(a.$$.fragment),p=P(),B(d.$$.fragment),F=P(),b=E("label"),y=E("b"),y.textContent=h,C=P(),D=E("div"),B(Y.$$.fragment),Z=P(),K=E("input"),ae=P(),$=E("label"),z=E("b"),z.textContent=J,W=P(),Q=E("div"),B(M.$$.fragment),R=P(),B(T.$$.fragment),H=P(),B(q.$$.fragment),this.h()},l(j){e=S(j,"DIV",{class:!0});var G=O(e);s=S(G,"H3",{"data-svelte-h":!0}),ce(s)!=="svelte-15zouq3"&&(s.textContent=t),l=N(G),r=S(G,"LABEL",{class:!0});var me=O(r);o=S(me,"B",{"data-svelte-h":!0}),ce(o)!=="svelte-ekzpgg"&&(o.textContent=u),c=N(me),i=S(me,"DIV",{class:!0});var ge=O(i);L(a.$$.fragment,ge),p=N(ge),L(d.$$.fragment,ge),ge.forEach(_),me.forEach(_),F=N(G),b=S(G,"LABEL",{class:!0});var de=O(b);y=S(de,"B",{"data-svelte-h":!0}),ce(y)!=="svelte-1flca3"&&(y.textContent=h),C=N(de),D=S(de,"DIV",{class:!0});var he=O(D);L(Y.$$.fragment,he),Z=N(he),K=S(he,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),he.forEach(_),de.forEach(_),ae=N(G),$=S(G,"LABEL",{class:!0});var $e=O($);z=S($e,"B",{"data-svelte-h":!0}),ce(z)!=="svelte-1evbw58"&&(z.textContent=J),W=N($e),Q=S($e,"DIV",{class:!0});var De=O(Q);L(M.$$.fragment,De),De.forEach(_),$e.forEach(_),R=N(G),L(T.$$.fragment,G),H=N(G),L(q.$$.fragment,G),G.forEach(_),this.h()},h(){m(i,"class","row svelte-1omoy36"),m(r,"class","svelte-1omoy36"),m(K,"type","number"),m(K,"min",0),m(K,"max",1e5),m(K,"step",1),m(K,"class","svelte-1omoy36"),m(D,"class","row svelte-1omoy36"),m(b,"class","svelte-1omoy36"),m(Q,"class","row svelte-1omoy36"),m($,"class","svelte-1omoy36"),m(e,"class","container svelte-1omoy36")},m(j,G){I(j,e,G),v(e,s),v(e,l),v(e,r),v(r,o),v(r,c),v(r,i),A(a,i,null),v(i,p),A(d,i,null),v(e,F),v(e,b),v(b,y),v(b,C),v(b,D),A(Y,D,null),v(D,Z),v(D,K),we(K,n[0]),v(e,ae),v(e,$),v($,z),v($,W),v($,Q),A(M,Q,null),v(e,R),A(T,e,null),v(e,H),A(q,e,null),se=!0,be||(Ce=[ie(K,"input",n[11]),ie(K,"keyup",n[12])],be=!0)},p(j,G){const me={};!f&&G&2&&(f=!0,me.value=j[1].sortDirection,je(()=>f=!1)),a.$set(me);const ge={};!g&&G&2&&(g=!0,ge.value=j[1].sortProperty,je(()=>g=!1)),d.$set(ge);const de={};!oe&&G&2&&(oe=!0,de.value=j[1].scoreComparator,je(()=>oe=!1)),Y.$set(de),G&1&&it(K.value)!==j[0]&&we(K,j[0]);const he={};!Se&&G&2&&(Se=!0,he.value=j[1].rating,je(()=>Se=!1)),M.$set(he);const $e={};G&32768&&($e.$$scope={dirty:G,ctx:j}),T.$set($e);const De={};G&32768&&(De.$$scope={dirty:G,ctx:j}),q.$set(De)},i(j){se||(k(a.$$.fragment,j),k(d.$$.fragment,j),k(Y.$$.fragment,j),k(M.$$.fragment,j),k(T.$$.fragment,j),k(q.$$.fragment,j),se=!0)},o(j){w(a.$$.fragment,j),w(d.$$.fragment,j),w(Y.$$.fragment,j),w(M.$$.fragment,j),w(T.$$.fragment,j),w(q.$$.fragment,j),se=!1},d(j){j&&_(e),V(a),V(d),V(Y),V(M),V(T),V(q),be=!1,Le(Ce)}}}function Yt(n){let e,s,t,l,r,o,u,c,i,a,f,p,d,g,F,b=n[2]&&Je(n);return{c(){e=E("button"),s=E("i"),t=P(),l=E("span"),r=X(n[4]),o=P(),u=E("i"),c=P(),i=E("span"),a=X(n[3]),f=P(),b&&b.c(),p=ue(),this.h()},l(y){e=S(y,"BUTTON",{class:!0});var h=O(e);s=S(h,"I",{class:!0}),O(s).forEach(_),t=N(h),l=S(h,"SPAN",{});var C=O(l);r=x(C,n[4]),C.forEach(_),o=N(h),u=S(h,"I",{class:!0}),O(u).forEach(_),c=N(h),i=S(h,"SPAN",{});var D=O(i);a=x(D,n[3]),D.forEach(_),h.forEach(_),f=N(y),b&&b.l(y),p=ue(),this.h()},h(){m(s,"class","codicon codicon-filter svelte-1omoy36"),m(u,"class","codicon codicon-arrow-swap svelte-1omoy36"),m(e,"class","svelte-1omoy36")},m(y,h){I(y,e,h),v(e,s),v(e,t),v(e,l),v(l,r),v(e,o),v(e,u),v(e,c),v(e,i),v(i,a),I(y,f,h),b&&b.m(y,h),I(y,p,h),d=!0,g||(F=ie(e,"click",n[5]),g=!0)},p(y,[h]){(!d||h&16)&&Oe(r,y[4]),(!d||h&8)&&Oe(a,y[3]),y[2]?b?(b.p(y,h),h&4&&k(b,1)):(b=Je(y),b.c(),k(b,1),b.m(p.parentNode,p)):b&&(ee(),w(b,1,1,()=>{b=null}),te())},i(y){d||(k(b),d=!0)},o(y){w(b),d=!1},d(y){y&&(_(e),_(f),_(p)),b&&b.d(y),g=!1,F()}}}const Zt=Object.freeze({id:"Uploaded",score:"Score",updated:"Updated"}),Jt=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),Qt=Object.freeze({">=":"≥","<=":"≤"}),gt=Object.freeze({all:"All",safe:"Safe",questionable:"Questionable",explicit:"Explicit"}),Xt=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),xt=(n,e,s)=>{let t=n==="all"?void 0:gt[n],l=e===0&&s===">="?void 0:`Score${s}${Re(e)}`;return[t,l].filter(r=>r!==void 0).join(",")||"All"};function es(n,e,s){let t,l,r;pe(n,fe,h=>s(1,r=h));const o=ve();let u=!1;const c=()=>s(2,u=!0),i=()=>{s(2,u=!1),o("sortfilterupdate")},a=()=>{fe.reset(),s(0,f=r.scoreValue)};let f;function p(h){n.$$.not_equal(r.sortDirection,h)&&(r.sortDirection=h,fe.set(r))}function d(h){n.$$.not_equal(r.sortProperty,h)&&(r.sortProperty=h,fe.set(r))}function g(h){n.$$.not_equal(r.scoreComparator,h)&&(r.scoreComparator=h,fe.set(r))}function F(){f=it(this.value),s(0,f),s(1,r)}const b=h=>pt(h)&&h.target.blur();function y(h){n.$$.not_equal(r.rating,h)&&(r.rating=h,fe.set(r))}return n.$$.update=()=>{if(n.$$.dirty&3){f===void 0&&s(0,f=r.scoreValue);let h=Number(f);isNaN(h)||vt(fe,r.scoreValue=h,r)}n.$$.dirty&2&&s(4,t=xt(r.rating,r.scoreValue,r.scoreComparator)),n.$$.dirty&2&&s(3,l=Xt[r.sortProperty][r.sortDirection])},[f,r,u,l,t,c,i,a,p,d,g,F,b,y]}class ts extends le{constructor(e){super(),re(this,e,es,Yt,ne,{})}}function ss(n){let e,s;return e=new mt({props:{post:n[1]}}),e.$on("click",n[2]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.post=t[1]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function ns(n){let e,s;return e=new Rt({props:{src:n[1].file_url,poster:n[1].sample_url,width:n[1].width,height:n[1].height,loop:n[1].tags.some(Xe)}}),e.$on("click",n[2]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.src=t[1].file_url),l&2&&(r.poster=t[1].sample_url),l&2&&(r.width=t[1].width),l&2&&(r.height=t[1].height),l&2&&(r.loop=t[1].tags.some(Xe)),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function ls(n){let e,s;return e=new jt({props:{post:n[1],open:n[0]}}),e.$on("click",n[2]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.post=t[1]),l&1&&(r.open=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Qe(n){let e,s;return e=new _t({props:{post:n[1]}}),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.post=t[1]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function rs(n){let e,s,t,l,r,o;const u=[ls,ns,ss],c=[];function i(f,p){return f[1].type==="image"?0:f[1].type==="video"?1:2}s=i(n),t=c[s]=u[s](n);let a=n[0]&&Qe(n);return{c(){e=E("div"),t.c(),l=P(),a&&a.c(),this.h()},l(f){e=S(f,"DIV",{id:!0,class:!0});var p=O(e);t.l(p),l=N(p),a&&a.l(p),p.forEach(_),this.h()},h(){m(e,"id",r="post_"+n[1].id),m(e,"class","post svelte-uali72"),ye(e,"open",n[0])},m(f,p){I(f,e,p),c[s].m(e,null),v(e,l),a&&a.m(e,null),o=!0},p(f,[p]){let d=s;s=i(f),s===d?c[s].p(f,p):(ee(),w(c[d],1,1,()=>{c[d]=null}),te(),t=c[s],t?t.p(f,p):(t=c[s]=u[s](f),t.c()),k(t,1),t.m(e,l)),f[0]?a?(a.p(f,p),p&1&&k(a,1)):(a=Qe(f),a.c(),k(a,1),a.m(e,null)):a&&(ee(),w(a,1,1,()=>{a=null}),te()),(!o||p&2&&r!==(r="post_"+f[1].id))&&m(e,"id",r),(!o||p&1)&&ye(e,"open",f[0])},i(f){o||(k(t),k(a),o=!0)},o(f){w(t),w(a),o=!1},d(f){f&&_(e),c[s].d(),a&&a.d()}}}const Xe=n=>n.name=="loop";function os(n,e,s){let{post:t}=e,{open:l=!1}=e;const r=()=>{s(0,l=!l)};return n.$$set=o=>{"post"in o&&s(1,t=o.post),"open"in o&&s(0,l=o.open)},[l,t,r]}class as extends le{constructor(e){super(),re(this,e,os,rs,ne,{post:1,open:0})}}function xe(n){let e,s=n[0].type==="video"?"▶":"GIF",t;return{c(){e=E("span"),t=X(s),this.h()},l(l){e=S(l,"SPAN",{class:!0});var r=O(e);t=x(r,s),r.forEach(_),this.h()},h(){m(e,"class","type svelte-14imjnt")},m(l,r){I(l,e,r),v(e,t)},p(l,r){r&1&&s!==(s=l[0].type==="video"?"▶":"GIF")&&Oe(t,s)},d(l){l&&_(e)}}}function is(n){let e,s,t,l,r,o,u=Re(n[0].score)+"",c,i,a,f,p=n[0].type!=="image"&&xe(n);return{c(){e=E("div"),s=E("img"),r=P(),o=E("span"),c=X(u),i=P(),p&&p.c(),this.h()},l(d){e=S(d,"DIV",{class:!0,style:!0});var g=O(e);s=S(g,"IMG",{src:!0,alt:!0,class:!0,tabindex:!0,loading:!0,id:!0}),r=N(g),o=S(g,"SPAN",{class:!0});var F=O(o);c=x(F,u),F.forEach(_),i=N(g),p&&p.l(g),g.forEach(_),this.h()},h(){_e(s.src,t=n[1])||m(s,"src",t),m(s,"alt","post"),m(s,"class","post-media svelte-14imjnt"),m(s,"tabindex","-1"),m(s,"loading","lazy"),m(s,"id",l="post_"+n[0].id),m(o,"class","score svelte-14imjnt"),m(e,"class","post svelte-14imjnt"),Fe(e,"grid-row","span "+n[2]),ye(e,"open",open)},m(d,g){I(d,e,g),v(e,s),v(e,r),v(e,o),v(o,c),v(e,i),p&&p.m(e,null),a||(f=[ie(e,"click",n[3]),ie(e,"keydown",n[4])],a=!0)},p(d,[g]){g&2&&!_e(s.src,t=d[1])&&m(s,"src",t),g&1&&l!==(l="post_"+d[0].id)&&m(s,"id",l),g&1&&u!==(u=Re(d[0].score)+"")&&Oe(c,u),d[0].type!=="image"?p?p.p(d,g):(p=xe(d),p.c(),p.m(e,null)):p&&(p.d(1),p=null),g&0&&ye(e,"open",open)},i:U,o:U,d(d){d&&_(e),p&&p.d(),a=!1,Le(f)}}}function cs(n,e,s){let t,{post:l}=e,r=Math.min(Math.round(l.height/l.width*5),15);const o=i=>i.endsWith(".jpg")||i.endsWith(".jpeg")||i.endsWith(".png")||i.endsWith(".webp");function u(i){Me.call(this,n,i)}const c=i=>{pt(i)&&i.target.click()};return n.$$set=i=>{"post"in i&&s(0,l=i.post)},n.$$.update=()=>{n.$$.dirty&1&&s(1,t=o(l.sample_url)?l.sample_url:l.preview_url)},[l,t,r,u,c]}class us extends le{constructor(e){super(),re(this,e,cs,is,ne,{post:0})}}function fs(n){let e,s,t,l;const r=n[3].default,o=bt(r,n,n[2],null);return{c(){e=E("div"),o&&o.c(),this.h()},l(u){e=S(u,"DIV",{role:!0,tabindex:!0,class:!0});var c=O(e);o&&o.l(c),c.forEach(_),this.h()},h(){m(e,"role","none"),m(e,"tabindex","-1"),m(e,"class","dialog svelte-1kq1os1")},m(u,c){I(u,e,c),o&&o.m(e,null),n[5](e),s=!0,t||(l=[ie(e,"keydown",n[4]),ie(e,"click",kt(ps))],t=!0)},p(u,[c]){o&&o.p&&(!s||c&4)&&wt(o,r,u,u[2],s?Et(r,u[2],c,null):yt(u[2]),null)},i(u){s||(k(o,u),s=!0)},o(u){w(o,u),s=!1},d(u){u&&_(e),o&&o.d(u),n[5](null),t=!1,Le(l)}}}const ps=()=>{};function _s(n,e,s){let{$$slots:t={},$$scope:l}=e;const r=ve(),o=()=>r("close"),u=f=>{f.key==="Escape"&&o()};let c;qe(async()=>{c.focus(),document.addEventListener("keydown",u)}),ze(()=>document.removeEventListener("keydown",u));const i=f=>{f.code==="Escape"&&o()};function a(f){ke[f?"unshift":"push"](()=>{c=f,s(0,c)})}return n.$$set=f=>{"$$scope"in f&&s(2,l=f.$$scope)},[c,o,l,t,i,a]}class ms extends le{constructor(e){super(),re(this,e,_s,fs,ne,{})}}function gs(n){let e,s;return e=new mt({props:{post:n[0]}}),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.post=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function ds(n){let e,s;return{c(){e=E("video"),this.h()},l(t){e=S(t,"VIDEO",{src:!0,class:!0}),O(e).forEach(_),this.h()},h(){_e(e.src,s=n[0].file_url)||m(e,"src",s),e.controls=!0,m(e,"class","svelte-hmjydu")},m(t,l){I(t,e,l)},p(t,l){l&1&&!_e(e.src,s=t[0].file_url)&&m(e,"src",s)},i:U,o:U,d(t){t&&_(e)}}}function hs(n){let e,s,t,l,r;return{c(){e=E("img"),this.h()},l(o){e=S(o,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){_e(e.src,s=n[0].file_url)||m(e,"src",s),m(e,"alt",t="Image of Post "+n[0].id),m(e,"class","svelte-hmjydu"),ye(e,"zoomed",n[1])},m(o,u){I(o,e,u),l||(r=ie(e,"click",n[3]),l=!0)},p(o,u){u&1&&!_e(e.src,s=o[0].file_url)&&m(e,"src",s),u&1&&t!==(t="Image of Post "+o[0].id)&&m(e,"alt",t),u&2&&ye(e,"zoomed",o[1])},i:U,o:U,d(o){o&&_(e),l=!1,r()}}}function $s(n){let e,s,t,l,r,o,u,c;const i=[hs,ds,gs],a=[];function f(p,d){return p[0].type==="image"?0:p[0].type==="video"?1:2}return s=f(n),t=a[s]=i[s](n),u=new _t({props:{post:n[0]}}),{c(){e=E("div"),t.c(),l=P(),r=E("i"),o=P(),B(u.$$.fragment),this.h()},l(p){e=S(p,"DIV",{class:!0});var d=O(e);t.l(d),l=N(d),r=S(d,"I",{class:!0}),O(r).forEach(_),d.forEach(_),o=N(p),L(u.$$.fragment,p),this.h()},h(){m(r,"class","codicon codicon-chevron-down svelte-hmjydu"),m(e,"class","svelte-hmjydu")},m(p,d){I(p,e,d),a[s].m(e,null),v(e,l),v(e,r),I(p,o,d),A(u,p,d),c=!0},p(p,d){let g=s;s=f(p),s===g?a[s].p(p,d):(ee(),w(a[g],1,1,()=>{a[g]=null}),te(),t=a[s],t?t.p(p,d):(t=a[s]=i[s](p),t.c()),k(t,1),t.m(e,l));const F={};d&1&&(F.post=p[0]),u.$set(F)},i(p){c||(k(t),k(u.$$.fragment,p),c=!0)},o(p){w(t),w(u.$$.fragment,p),c=!1},d(p){p&&(_(e),_(o)),a[s].d(),V(u,p)}}}function vs(n){let e;return{c(){e=E("i"),this.h()},l(s){e=S(s,"I",{class:!0}),O(e).forEach(_),this.h()},h(){m(e,"class","codicon codicon-close")},m(s,t){I(s,e,t)},p:U,d(s){s&&_(e)}}}function bs(n){let e;return{c(){e=E("i"),this.h()},l(s){e=S(s,"I",{class:!0}),O(e).forEach(_),this.h()},h(){m(e,"class","codicon codicon-chevron-left")},m(s,t){I(s,e,t)},p:U,d(s){s&&_(e)}}}function ks(n){let e;return{c(){e=E("i"),this.h()},l(s){e=S(s,"I",{class:!0}),O(e).forEach(_),this.h()},h(){m(e,"class","codicon codicon-chevron-right")},m(s,t){I(s,e,t)},p:U,d(s){s&&_(e)}}}function ws(n){let e,s,t,l,r,o,u,c;return e=new ms({props:{$$slots:{default:[$s]},$$scope:{ctx:n}}}),e.$on("close",n[4]),t=new Ve({props:{class:"button-close",$$slots:{default:[vs]},$$scope:{ctx:n}}}),t.$on("click",n[5]),r=new Ve({props:{class:"button-previous",$$slots:{default:[bs]},$$scope:{ctx:n}}}),r.$on("click",n[6]),u=new Ve({props:{class:"button-next",$$slots:{default:[ks]},$$scope:{ctx:n}}}),u.$on("click",n[7]),{c(){B(e.$$.fragment),s=P(),B(t.$$.fragment),l=P(),B(r.$$.fragment),o=P(),B(u.$$.fragment)},l(i){L(e.$$.fragment,i),s=N(i),L(t.$$.fragment,i),l=N(i),L(r.$$.fragment,i),o=N(i),L(u.$$.fragment,i)},m(i,a){A(e,i,a),I(i,s,a),A(t,i,a),I(i,l,a),A(r,i,a),I(i,o,a),A(u,i,a),c=!0},p(i,[a]){const f={};a&259&&(f.$$scope={dirty:a,ctx:i}),e.$set(f);const p={};a&256&&(p.$$scope={dirty:a,ctx:i}),t.$set(p);const d={};a&256&&(d.$$scope={dirty:a,ctx:i}),r.$set(d);const g={};a&256&&(g.$$scope={dirty:a,ctx:i}),u.$set(g)},i(i){c||(k(e.$$.fragment,i),k(t.$$.fragment,i),k(r.$$.fragment,i),k(u.$$.fragment,i),c=!0)},o(i){w(e.$$.fragment,i),w(t.$$.fragment,i),w(r.$$.fragment,i),w(u.$$.fragment,i),c=!1},d(i){i&&(_(s),_(l),_(o)),V(e,i),V(t,i),V(r,i),V(u,i)}}}function ys(n,e,s){const t=ve();let{post:l}=e,r=l.width/l.height<.33;const o=()=>s(1,r=!r);function u(f){Me.call(this,n,f)}const c=()=>t("close"),i=()=>t("previous"),a=()=>t("next");return n.$$set=f=>{"post"in f&&s(0,l=f.post)},[l,r,t,o,u,c,i,a]}class Es extends le{constructor(e){super(),re(this,e,ys,ws,ne,{post:0})}}function et(n,e,s){const t=n.slice();return t[11]=e[s],t[15]=s,t}function tt(n,e,s){const t=n.slice();return t[11]=e[s],t}function Ss(n){let e,s,t,l,r=Ee(n[2].posts),o=[];for(let i=0;i<r.length;i+=1)o[i]=st(et(n,r,i));const u=i=>w(o[i],1,1,()=>{o[i]=null});let c=n[1]&&n[0]!==void 0&&nt(n);return{c(){e=E("section");for(let i=0;i<o.length;i+=1)o[i].c();s=P(),c&&c.c(),t=ue(),this.h()},l(i){e=S(i,"SECTION",{class:!0,style:!0});var a=O(e);for(let f=0;f<o.length;f+=1)o[f].l(a);a.forEach(_),s=N(i),c&&c.l(i),t=ue(),this.h()},h(){m(e,"class","multi svelte-q6spg0"),Fe(e,"grid-template-columns","repeat("+n[3]+", 1fr)")},m(i,a){I(i,e,a);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,null);I(i,s,a),c&&c.m(i,a),I(i,t,a),l=!0},p(i,a){if(a&5){r=Ee(i[2].posts);let f;for(f=0;f<r.length;f+=1){const p=et(i,r,f);o[f]?(o[f].p(p,a),k(o[f],1)):(o[f]=st(p),o[f].c(),k(o[f],1),o[f].m(e,null))}for(ee(),f=r.length;f<o.length;f+=1)u(f);te()}(!l||a&8)&&Fe(e,"grid-template-columns","repeat("+i[3]+", 1fr)"),i[1]&&i[0]!==void 0?c?(c.p(i,a),a&3&&k(c,1)):(c=nt(i),c.c(),k(c,1),c.m(t.parentNode,t)):c&&(ee(),w(c,1,1,()=>{c=null}),te())},i(i){if(!l){for(let a=0;a<r.length;a+=1)k(o[a]);k(c),l=!0}},o(i){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)w(o[a]);w(c),l=!1},d(i){i&&(_(e),_(s),_(t)),Ge(o,i),c&&c.d(i)}}}function Cs(n){let e,s,t=Ee(n[2].posts),l=[];for(let o=0;o<t.length;o+=1)l[o]=lt(tt(n,t,o));const r=o=>w(l[o],1,1,()=>{l[o]=null});return{c(){e=E("section");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=S(o,"SECTION",{class:!0});var u=O(e);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(_),this.h()},h(){m(e,"class","single svelte-q6spg0")},m(o,u){I(o,e,u);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null);s=!0},p(o,u){if(u&4){t=Ee(o[2].posts);let c;for(c=0;c<t.length;c+=1){const i=tt(o,t,c);l[c]?(l[c].p(i,u),k(l[c],1)):(l[c]=lt(i),l[c].c(),k(l[c],1),l[c].m(e,null))}for(ee(),c=t.length;c<l.length;c+=1)r(c);te()}},i(o){if(!s){for(let u=0;u<t.length;u+=1)k(l[u]);s=!0}},o(o){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)w(l[u]);s=!1},d(o){o&&_(e),Ge(l,o)}}}function st(n){let e,s;function t(){return n[6](n[11],n[15])}return e=new us({props:{post:n[11]}}),e.$on("click",t),{c(){B(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,r){A(e,l,r),s=!0},p(l,r){n=l;const o={};r&4&&(o.post=n[11]),e.$set(o)},i(l){s||(k(e.$$.fragment,l),s=!0)},o(l){w(e.$$.fragment,l),s=!1},d(l){V(e,l)}}}function nt(n){let e,s;return e=new Es({props:{post:n[0].post}}),e.$on("close",n[7]),e.$on("previous",n[8]),e.$on("next",n[9]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.post=t[0].post),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function lt(n){let e,s;return e=new as({props:{post:n[11]}}),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&4&&(r.post=t[11]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Is(n){let e,s,t=Re(n[2].postCount)+"",l,r,o,u,c,i,a,f,p;u=new ts({}),u.$on("sortfilterupdate",n[5]);const d=[Cs,Ss],g=[];function F(b,y){return b[3]==="1"?0:1}return i=F(n),a=g[i]=d[i](n),{c(){e=E("div"),s=E("span"),l=X(t),r=X(" posts"),o=P(),B(u.$$.fragment),c=P(),a.c(),f=ue(),this.h()},l(b){e=S(b,"DIV",{class:!0});var y=O(e);s=S(y,"SPAN",{});var h=O(s);l=x(h,t),r=x(h," posts"),h.forEach(_),o=N(y),L(u.$$.fragment,y),y.forEach(_),c=N(b),a.l(b),f=ue(),this.h()},h(){m(e,"class","svelte-q6spg0")},m(b,y){I(b,e,y),v(e,s),v(s,l),v(s,r),v(e,o),A(u,e,null),I(b,c,y),g[i].m(b,y),I(b,f,y),p=!0},p(b,[y]){(!p||y&4)&&t!==(t=Re(b[2].postCount)+"")&&Oe(l,t);let h=i;i=F(b),i===h?g[i].p(b,y):(ee(),w(g[h],1,1,()=>{g[h]=null}),te(),a=g[i],a?a.p(b,y):(a=g[i]=d[i](b),a.c()),k(a,1),a.m(f.parentNode,f))},i(b){p||(k(u.$$.fragment,b),k(a),p=!0)},o(b){w(u.$$.fragment,b),w(a),p=!1},d(b){b&&(_(e),_(c),_(f)),V(u),g[i].d(b)}}}function Ds(n,e,s){let t,l;pe(n,Ne,g=>s(2,t=g)),pe(n,Tt,g=>s(3,l=g));const r=ve(),o=()=>{s(1,c=location.hash.length>2)};let u,c=location.hash.length>2;qe(()=>{window.addEventListener("hashchange",o)}),ze(()=>{window.removeEventListener("hashchange",o)});function i(g){Me.call(this,n,g)}return[u,c,t,l,r,i,(g,F)=>{s(0,u={post:g,index:F}),location.hash="fullscreen"},()=>{var g,F;(g=u==null?void 0:u.post)!=null&&g.id&&((F=document.getElementById(`post_${u.post.id}`))==null||F.focus()),s(0,u=void 0),history.back()},()=>{let g=Math.max(u.index-1,0);s(0,u={index:g,post:t.posts[g]})},()=>{let g=Math.min(u.index+1,t.posts.length);s(0,u={index:g,post:t.posts[g]}),g>t.posts.length-3&&t.posts.length!==t.postCount&&r("endreached")}]}class Ps extends le{constructor(e){super(),re(this,e,Ds,Is,ne,{})}}function Ns(n){let e;return{c(){e=E("div")},l(s){e=S(s,"DIV",{}),O(e).forEach(_)},m(s,t){I(s,e,t),n[2](e)},p:U,i:U,o:U,d(s){s&&_(e),n[2](null)}}}function Os(n,e,s){let{rootMargin:t}=e;const l=ve(),r=new IntersectionObserver(c=>{c[0].isIntersecting&&l("intersection")},{rootMargin:t});let o;function u(c){ke[c?"unshift":"push"](()=>{o=c,s(0,o)})}return n.$$set=c=>{"rootMargin"in c&&s(1,t=c.rootMargin)},n.$$.update=()=>{n.$$.dirty&1&&(r.disconnect(),o&&r.observe(o))},[o,t,u]}class Ts extends le{constructor(e){super(),re(this,e,Os,Ns,ne,{rootMargin:1})}}function Rs(n){let e,s,t,l,r="You have seen everything there is to see...";return{c(){e=E("img"),t=P(),l=E("p"),l.textContent=r,this.h()},l(o){e=S(o,"IMG",{src:!0,alt:!0,class:!0}),t=N(o),l=S(o,"P",{"data-svelte-h":!0}),ce(l)!=="svelte-1i75mtf"&&(l.textContent=r),this.h()},h(){_e(e.src,s=ut+"/assets/shironeko-x.png")||m(e,"src",s),m(e,"alt","No more results to load"),m(e,"class","svelte-1pkma0d")},m(o,u){I(o,e,u),I(o,t,u),I(o,l,u)},p:U,i:U,o:U,d(o){o&&(_(e),_(t),_(l))}}}class js extends le{constructor(e){super(),re(this,e,null,Rs,ne,{})}}function rt(n,e,s){const t=n.slice();return t[9]=e[s],t}function ot(n){let e,s;return e=new Vt({props:{tag:n[9]}}),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&4&&(r.tag=t[9]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Bs(n){let e;return{c(){e=X("Create supertag")},l(s){e=x(s,"Create supertag")},m(s,t){I(s,e,t)},d(s){s&&_(e)}}}function Ls(n){let e,s,t="Create Supertag",l,r,o,u,c,i="Name",a,f,p,d,g,F="Description",b,y,h,C,D,Y="Tags",oe,Z,K,ae,$,z,J,W,Q=Ee(n[2]),M=[];for(let R=0;R<Q.length;R+=1)M[R]=ot(rt(n,Q,R));const Se=R=>w(M[R],1,1,()=>{M[R]=null});return $=new Te({props:{title:n[3]?"Click to create supertag":"Enter a valid name to continue",disabled:!n[3],$$slots:{default:[Bs]},$$scope:{ctx:n}}}),$.$on("click",n[8]),{c(){e=E("section"),s=E("h3"),s.textContent=t,l=P(),r=E("button"),o=P(),u=E("div"),c=E("label"),c.textContent=i,a=P(),f=E("input"),p=P(),d=E("div"),g=E("label"),g.textContent=F,b=P(),y=E("input"),h=P(),C=E("div"),D=E("span"),D.textContent=Y,oe=P(),Z=E("ol");for(let R=0;R<M.length;R+=1)M[R].c();K=P(),ae=E("div"),B($.$$.fragment),this.h()},l(R){e=S(R,"SECTION",{class:!0});var T=O(e);s=S(T,"H3",{"data-svelte-h":!0}),ce(s)!=="svelte-ho1cwx"&&(s.textContent=t),l=N(T),r=S(T,"BUTTON",{class:!0}),O(r).forEach(_),o=N(T),u=S(T,"DIV",{class:!0});var H=O(u);c=S(H,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ce(c)!=="svelte-10k8a68"&&(c.textContent=i),a=N(H),f=S(H,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),H.forEach(_),p=N(T),d=S(T,"DIV",{class:!0});var q=O(d);g=S(q,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ce(g)!=="svelte-14n9kp6"&&(g.textContent=F),b=N(q),y=S(q,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),q.forEach(_),h=N(T),C=S(T,"DIV",{class:!0});var se=O(C);D=S(se,"SPAN",{class:!0,"data-svelte-h":!0}),ce(D)!=="svelte-7hjyox"&&(D.textContent=Y),oe=N(se),Z=S(se,"OL",{class:!0});var be=O(Z);for(let Ie=0;Ie<M.length;Ie+=1)M[Ie].l(be);be.forEach(_),se.forEach(_),K=N(T),ae=S(T,"DIV",{class:!0});var Ce=O(ae);L($.$$.fragment,Ce),Ce.forEach(_),T.forEach(_),this.h()},h(){m(r,"class",ct("codicon codicon-close")+" svelte-xkjm86"),m(c,"for","supertag-name"),m(c,"class","svelte-xkjm86"),m(f,"type","text"),m(f,"placeholder","Descriptive name"),m(f,"id","supertag-name"),m(f,"class","svelte-xkjm86"),m(u,"class","svelte-xkjm86"),m(g,"for","supertag-description"),m(g,"class","svelte-xkjm86"),m(y,"type","text"),m(y,"placeholder","Short description"),m(y,"id","supertag-description"),m(y,"class","svelte-xkjm86"),m(d,"class","svelte-xkjm86"),m(D,"class","svelte-xkjm86"),m(Z,"class","svelte-xkjm86"),m(C,"class","svelte-xkjm86"),m(ae,"class","last svelte-xkjm86"),m(e,"class","svelte-xkjm86")},m(R,T){I(R,e,T),v(e,s),v(e,l),v(e,r),v(e,o),v(e,u),v(u,c),v(u,a),v(u,f),we(f,n[0]),v(e,p),v(e,d),v(d,g),v(d,b),v(d,y),we(y,n[1]),v(e,h),v(e,C),v(C,D),v(C,oe),v(C,Z);for(let H=0;H<M.length;H+=1)M[H]&&M[H].m(Z,null);v(e,K),v(e,ae),A($,ae,null),z=!0,J||(W=[ie(r,"click",n[5]),ie(f,"input",n[6]),ie(y,"input",n[7])],J=!0)},p(R,T){if(T&1&&f.value!==R[0]&&we(f,R[0]),T&2&&y.value!==R[1]&&we(y,R[1]),T&4){Q=Ee(R[2]);let q;for(q=0;q<Q.length;q+=1){const se=rt(R,Q,q);M[q]?(M[q].p(se,T),k(M[q],1)):(M[q]=ot(se),M[q].c(),k(M[q],1),M[q].m(Z,null))}for(ee(),q=Q.length;q<M.length;q+=1)Se(q);te()}const H={};T&8&&(H.title=R[3]?"Click to create supertag":"Enter a valid name to continue"),T&8&&(H.disabled=!R[3]),T&4096&&(H.$$scope={dirty:T,ctx:R}),$.$set(H)},i(R){if(!z){for(let T=0;T<Q.length;T+=1)k(M[T]);k($.$$.fragment,R),z=!0}},o(R){M=M.filter(Boolean);for(let T=0;T<M.length;T+=1)w(M[T]);w($.$$.fragment,R),z=!1},d(R){R&&_(e),Ge(M,R),V($),J=!1,Le(W)}}}function As(n){let e,s;return e=new ft({props:{$$slots:{default:[Ls]},$$scope:{ctx:n}}}),e.$on("close",n[5]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,[l]){const r={};l&4111&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Vs(n,e,s){let t,{name:l=""}=e,{description:r=""}=e,{tags:o}=e;const u=ve(),c=()=>u("close");function i(){l=this.value,s(0,l)}function a(){r=this.value,s(1,r)}const f=()=>{u("submit",{name:l,description:r,tags:o.map(({modifier:p,name:d})=>({modifier:p,name:d}))}),c()};return n.$$set=p=>{"name"in p&&s(0,l=p.name),"description"in p&&s(1,r=p.description),"tags"in p&&s(2,o=p.tags)},n.$$.update=()=>{n.$$.dirty&5&&s(3,t=typeof l=="string"&&l!==""&&o.length>1)},[l,r,o,t,u,c,i,a,f]}class Fs extends le{constructor(e){super(),re(this,e,Vs,As,ne,{name:0,description:1,tags:2})}}function Ms(n){let e,s,t,l,r,o,u,c,i,a;return{c(){e=E("div"),s=E("div"),t=E("i"),l=P(),r=E("div"),o=E("h3"),u=X(n[0]),c=P(),i=E("span"),a=X(n[2]),this.h()},l(f){e=S(f,"DIV",{class:!0});var p=O(e);s=S(p,"DIV",{class:!0});var d=O(s);t=S(d,"I",{class:!0}),O(t).forEach(_),d.forEach(_),l=N(p),r=S(p,"DIV",{});var g=O(r);o=S(g,"H3",{class:!0});var F=O(o);u=x(F,n[0]),F.forEach(_),c=N(g),i=S(g,"SPAN",{});var b=O(i);a=x(b,n[2]),b.forEach(_),g.forEach(_),p.forEach(_),this.h()},h(){m(t,"class",ct(n[1])+" svelte-1tvgln1"),m(s,"class","icon svelte-1tvgln1"),m(o,"class","svelte-1tvgln1"),m(e,"class","error svelte-1tvgln1")},m(f,p){I(f,e,p),v(e,s),v(s,t),v(e,l),v(e,r),v(r,o),v(o,u),v(r,c),v(r,i),v(i,a)},p:U,i:U,o:U,d(f){f&&_(e)}}}function qs(n,e,s){let{error:t}=e,l=t.message==="Failed to fetch"?"Connection Error":"Application Error",r=t.message==="Failed to fetch"?"codicon codicon-debug-disconnect":"codicon codicon-error",o=t.message==="Failed to fetch"?"Failed to connect to the server. Make sure you have a stable internet connection.":t.message;return n.$$set=u=>{"error"in u&&s(3,t=u.error)},[l,r,o,t]}class zs extends le{constructor(e){super(),re(this,e,qs,Ms,ne,{error:3})}}function Gs(n){let e;return{c(){e=X("Search")},l(s){e=x(s,"Search")},m(s,t){I(s,e,t)},d(s){s&&_(e)}}}function Us(n){let e,s,t,l,r,o;const u=[Ws,Hs],c=[];function i(a,f){return a[2].postCount===0?0:1}return s=i(n),t=c[s]=u[s](n),r=new Ft({}),{c(){e=E("section"),t.c(),l=P(),B(r.$$.fragment),this.h()},l(a){e=S(a,"SECTION",{class:!0});var f=O(e);t.l(f),f.forEach(_),l=N(a),L(r.$$.fragment,a),this.h()},h(){m(e,"class","svelte-rk0y4a")},m(a,f){I(a,e,f),c[s].m(e,null),I(a,l,f),A(r,a,f),o=!0},p(a,f){let p=s;s=i(a),s===p?c[s].p(a,f):(ee(),w(c[p],1,1,()=>{c[p]=null}),te(),t=c[s],t?t.p(a,f):(t=c[s]=u[s](a),t.c()),k(t,1),t.m(e,null))},i(a){o||(k(t),k(r.$$.fragment,a),o=!0)},o(a){w(t),w(r.$$.fragment,a),o=!1},d(a){a&&(_(e),_(l)),c[s].d(),V(r,a)}}}function Ks(n){let e,s;return e=new zs({props:{error:n[0]}}),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.error=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Hs(n){let e,s,t,l,r,o;e=new Ps({}),e.$on("sortfilterupdate",n[7]),e.$on("endreached",n[8]);const u=[Zs,Ys],c=[];function i(a,f){return a[2].posts.length===a[2].postCount?0:1}return t=i(n),l=c[t]=u[t](n),{c(){B(e.$$.fragment),s=P(),l.c(),r=ue()},l(a){L(e.$$.fragment,a),s=N(a),l.l(a),r=ue()},m(a,f){A(e,a,f),I(a,s,f),c[t].m(a,f),I(a,r,f),o=!0},p(a,f){let p=t;t=i(a),t===p?c[t].p(a,f):(ee(),w(c[p],1,1,()=>{c[p]=null}),te(),l=c[t],l?l.p(a,f):(l=c[t]=u[t](a),l.c()),k(l,1),l.m(r.parentNode,r))},i(a){o||(k(e.$$.fragment,a),k(l),o=!0)},o(a){w(e.$$.fragment,a),w(l),o=!1},d(a){a&&(_(s),_(r)),V(e,a),c[t].d(a)}}}function Ws(n){let e,s;return e=new Ut({}),e.$on("sortfilterupdate",n[7]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p:U,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ys(n){let e,s;return e=new Ts({props:{rootMargin:"1000px"}}),e.$on("intersection",n[8]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p:U,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Zs(n){let e,s;return e=new js({}),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p:U,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function at(n){let e,s;return e=new Fs({props:{tags:n[4]}}),e.$on("close",n[13]),e.$on("submit",n[14]),{c(){B(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){const r={};l&16&&(r.tags=t[4]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Js(n){let e,s,t,l,r,o,u,c,i,a,f,p,d,g;s=new St({}),l=new Dt({props:{placeholder:"Search for tags",fetchSuggestions:n[6]}}),l.$on("pick",n[9]),o=new Te({props:{title:"Search with the tags above",$$slots:{default:[Gs]},$$scope:{ctx:n}}}),o.$on("click",n[7]),c=new Ct({props:{tags:[...n[4],...n[3]]}}),c.$on("click",n[10]),c.$on("contextmenu",n[11]),c.$on("createSupertag",n[12]);const F=[Ks,Us],b=[];function y(C,D){return C[0]?0:C[2].requested?1:-1}~(a=y(n))&&(f=b[a]=F[a](n));let h=n[1]&&at(n);return{c(){e=E("section"),B(s.$$.fragment),t=P(),B(l.$$.fragment),r=P(),B(o.$$.fragment),u=P(),B(c.$$.fragment),i=P(),f&&f.c(),p=P(),h&&h.c(),d=ue(),this.h()},l(C){e=S(C,"SECTION",{id:!0,class:!0});var D=O(e);L(s.$$.fragment,D),t=N(D),L(l.$$.fragment,D),r=N(D),L(o.$$.fragment,D),u=N(D),L(c.$$.fragment,D),D.forEach(_),i=N(C),f&&f.l(C),p=N(C),h&&h.l(C),d=ue(),this.h()},h(){m(e,"id","search"),m(e,"class","svelte-rk0y4a")},m(C,D){I(C,e,D),A(s,e,null),v(e,t),A(l,e,null),v(e,r),A(o,e,null),v(e,u),A(c,e,null),I(C,i,D),~a&&b[a].m(C,D),I(C,p,D),h&&h.m(C,D),I(C,d,D),g=!0},p(C,[D]){const Y={};D&8388608&&(Y.$$scope={dirty:D,ctx:C}),o.$set(Y);const oe={};D&24&&(oe.tags=[...C[4],...C[3]]),c.$set(oe);let Z=a;a=y(C),a===Z?~a&&b[a].p(C,D):(f&&(ee(),w(b[Z],1,1,()=>{b[Z]=null}),te()),~a?(f=b[a],f?f.p(C,D):(f=b[a]=F[a](C),f.c()),k(f,1),f.m(p.parentNode,p)):f=null),C[1]?h?(h.p(C,D),D&2&&k(h,1)):(h=at(C),h.c(),k(h,1),h.m(d.parentNode,d)):h&&(ee(),w(h,1,1,()=>{h=null}),te())},i(C){g||(k(s.$$.fragment,C),k(l.$$.fragment,C),k(o.$$.fragment,C),k(c.$$.fragment,C),k(f),k(h),g=!0)},o(C){w(s.$$.fragment,C),w(l.$$.fragment,C),w(o.$$.fragment,C),w(c.$$.fragment,C),w(f),w(h),g=!1},d(C){C&&(_(e),_(i),_(p),_(d)),V(s),V(l),V(o),V(c),~a&&b[a].d(C),h&&h.d(C)}}}const Qs=()=>{const n=new URL(location.href);if(!n.searchParams.has("tags"))return;const s=(n.searchParams.get("tags")??"").split(";");if(!(!Array.isArray(s)||s.length===0))return s};function Xs(n,e,s){let t,l,r,o,u,c;pe(n,Ne,$=>s(2,t=$)),pe(n,Ae,$=>s(3,l=$)),pe(n,fe,$=>s(17,r=$)),pe(n,At,$=>s(18,o=$)),pe(n,Pe,$=>s(4,u=$)),pe(n,Ye,$=>s(5,c=$));let i=!1,a,f=!1,p=0;const d=async $=>{const z=await Nt($);return[...c.items.filter(({name:W})=>W.toLowerCase().includes($.toLowerCase())).map(W=>({label:W.name,count:W.tags.length,type:"supertag"})),...z]},g=Qs();g&&g.forEach($=>{u.some(z=>z.name===$)||Pe.addByName($)});const F=()=>new It().withPid(t.pageCount).withTags(u).withBlockedContent(o).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withScoreValue(r.scoreValue).withScoreComparator(r.scoreComparator).withRating(r.rating).withSupertags(l),b=async $=>{if(!i){s(0,a=void 0),i=!0;try{const z=t.pageCount;await $(),Mt(z).catch(()=>{})}catch(z){s(0,a=z),console.warn(z)}finally{i=!1}}},y=async()=>{Ne.reset(),p=0,b(async()=>{const[$,z]=await F().getPageAndCount();console.log($,z),Ne.addPage($,z)})},h=async()=>{b(async()=>{const $=await F().getPage();Ne.addPage($)})},C=$=>{var z,J;if(($.key==="/"||$.key==="s")&&(!document.activeElement||document.activeElement===document.body)&&((z=document.getElementById("searchbar"))==null||z.focus(),$.preventDefault(),$.stopPropagation()),$.ctrlKey&&$.key==="Enter"&&($.preventDefault(),$.stopPropagation(),y()),$.ctrlKey&&$.key==="m"&&((J=document.getElementById("select-modifier"))==null||J.click()),$.ctrlKey&&$.key==="ArrowDown"){const W=document.getElementsByClassName("post-media");W[p].focus(),p=Math.min(p+1,Math.max(0,W.length-1))}$.ctrlKey&&$.key==="ArrowUp"&&(document.getElementsByClassName("post-media")[p].focus(),p=Math.max(p-1,0))};return qe(()=>{document.addEventListener("keydown",C)}),ze(()=>{document.removeEventListener("keydown",C)}),[a,f,t,l,u,c,d,y,h,async $=>{const z=$.detail;if(z.type==="supertag"){const J=c.items.find(W=>W.name===z.label);if(!J){console.log("Supertag not present.");return}Ae.addOrReplace(J)}else{const J=await Ot($.detail.label);Pe.addOrReplace({name:$.detail.label,modifier:$.detail.modifier,count:$.detail.count,type:J.type})}},$=>"description"in $.detail?Ae.removeByName($.detail.name):Pe.removeByName($.detail.name),$=>{"description"in $.detail||($.detail.modifier=Pt($.detail.modifier),Pe.addOrReplace($.detail))},()=>s(1,f=!0),()=>s(1,f=!1),$=>Ye.add($.detail)]}class vn extends le{constructor(e){super(),re(this,e,Xs,Js,ne,{})}}export{vn as component};
