import{s as ne,f as E,a as D,g as C,c as P,y as ie,D as Be,j as b,i as T,d as m,E as we,l as X,m as x,e as ue,h as O,u as $,F as ce,n as Pe,C as pe,G as kt,p as ve,H as be,I as Te,J as at,K as je,L as Ae,k as Ve,v as J,M as Fe,w as wt,N as yt,z as St,A as Et,B as Ct,o as Me,O as it,P as qe,r as ct}from"../chunks/scheduler.88299003.js";import{S as le,i as re,b as A,d as j,m as L,a as k,t as y,e as V,g as ee,c as te,f as Re}from"../chunks/index.15b414ac.js";import{s as fe,r as De,K as It,A as Dt,a as Le,S as Pt}from"../chunks/search-builder.f2d596fc.js";import{S as Nt,n as Ot,s as He}from"../chunks/supertags-store.3b1db9bc.js";import{T as Ne}from"../chunks/TextButton.2f318c50.js";import{g as Tt,a as Rt}from"../chunks/tags.7dcf1347.js";import{a as Ie}from"../chunks/active-tags-store.b1bdd41b.js";import{b as ut}from"../chunks/paths.0dda22d4.js";import{e as ke}from"../chunks/each.e59479a4.js";import{D as ft,r as Bt}from"../chunks/Dialog.f8853b6f.js";import{i as pt,D as _t,G as mt,V as gt,I as dt}from"../chunks/Details.a44fc676.js";import{f as Oe}from"../chunks/format-tag.d6c065e3.js";import{R as At,I as jt}from"../chunks/ModifierSelect.623aacd6.js";import{S as We}from"../chunks/Select.22805bc7.js";import{R as Lt}from"../chunks/RotatingTextSelect.7e32facf.js";import{b as Vt}from"../chunks/blocked-content-store.805c4a3d.js";import{D as Ft}from"../chunks/DetailedTag.28ff9b0d.js";import{S as Mt}from"../chunks/ScrollUpButton.cfa21b3f.js";import{l as qt}from"../chunks/analytics.cc91fa96.js";function Ut(n){let e;return{c(){e=X("Reset Filter")},l(s){e=x(s,"Reset Filter")},m(s,t){T(s,e,t)},d(s){s&&m(e)}}}function zt(n){let e,s,t,l,r="We couldn't find any posts matching your tags. Sorry...",o,f,i;return f=new Ne({props:{title:"In case your filter caused all posts to vanish. Reset it.",$$slots:{default:[Ut]},$$scope:{ctx:n}}}),f.$on("click",n[1]),{c(){e=E("img"),t=D(),l=E("p"),l.textContent=r,o=D(),A(f.$$.fragment),this.h()},l(u){e=C(u,"IMG",{src:!0,alt:!0,class:!0}),t=P(u),l=C(u,"P",{"data-svelte-h":!0}),ie(l)!=="svelte-1utxj3w"&&(l.textContent=r),o=P(u),j(f.$$.fragment,u),this.h()},h(){Be(e.src,s=ut+"/assets/shironeko-confused.png")||b(e,"src",s),b(e,"alt","Nothing here..."),b(e,"class","svelte-1bb5e7g")},m(u,a){T(u,e,a),T(u,t,a),T(u,l,a),T(u,o,a),L(f,u,a),i=!0},p(u,[a]){const c={};a&4&&(c.$$scope={dirty:a,ctx:u}),f.$set(c)},i(u){i||(k(f.$$.fragment,u),i=!0)},o(u){y(f.$$.fragment,u),i=!1},d(u){u&&(m(e),m(t),m(l),m(o)),V(f,u)}}}function Gt(n){const e=we();return[e,()=>{fe.reset(),e("sortfilterupdate")}]}class Kt extends le{constructor(e){super(),re(this,e,Gt,zt,ne,{})}}function Ye(n){let e,s;return e=new ft({props:{$$slots:{default:[Yt]},$$scope:{ctx:n}}}),e.$on("close",n[6]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&32771&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ht(n){let e;return{c(){e=X("Done")},l(s){e=x(s,"Done")},m(s,t){T(s,e,t)},d(s){s&&m(e)}}}function Wt(n){let e;return{c(){e=X("Reset")},l(s){e=x(s,"Reset")},m(s,t){T(s,e,t)},d(s){s&&m(e)}}}function Yt(n){let e,s,t="Sorting and Filtering",l,r,o,f="Sorting",i,u,a,c,p,_,v,M,g,w,d="Filtering by Score",S,I,W,oe,Y,G,ae,h,U,Z="Filtering by Rating",H,Q,F,ye,R,N,K,q,se,$e,Se;function Ee(B){n[8](B)}let Ue={options:Qt};n[1].sortDirection!==void 0&&(Ue.value=n[1].sortDirection),a=new At({props:Ue}),ve.push(()=>Re(a,"value",Ee));function $t(B){n[9](B)}let ze={options:Jt};n[1].sortProperty!==void 0&&(ze.value=n[1].sortProperty),_=new We({props:ze}),ve.push(()=>Re(_,"value",$t));function vt(B){n[10](B)}let Ge={options:Xt};n[1].scoreComparator!==void 0&&(Ge.value=n[1].scoreComparator),W=new Lt({props:Ge}),ve.push(()=>Re(W,"value",vt));function bt(B){n[13](B)}let Ke={options:ht};return n[1].rating!==void 0&&(Ke.value=n[1].rating),F=new We({props:Ke}),ve.push(()=>Re(F,"value",bt)),N=new Ne({props:{title:"Return to searching.",$$slots:{default:[Ht]},$$scope:{ctx:n}}}),N.$on("click",n[6]),q=new Ne({props:{title:"Reset sort and filter.",type:"secondary",$$slots:{default:[Wt]},$$scope:{ctx:n}}}),q.$on("click",n[7]),{c(){e=E("div"),s=E("h3"),s.textContent=t,l=D(),r=E("label"),o=E("b"),o.textContent=f,i=D(),u=E("div"),A(a.$$.fragment),p=D(),A(_.$$.fragment),M=D(),g=E("label"),w=E("b"),w.textContent=d,S=D(),I=E("div"),A(W.$$.fragment),Y=D(),G=E("input"),ae=D(),h=E("label"),U=E("b"),U.textContent=Z,H=D(),Q=E("div"),A(F.$$.fragment),R=D(),A(N.$$.fragment),K=D(),A(q.$$.fragment),this.h()},l(B){e=C(B,"DIV",{class:!0});var z=O(e);s=C(z,"H3",{"data-svelte-h":!0}),ie(s)!=="svelte-15zouq3"&&(s.textContent=t),l=P(z),r=C(z,"LABEL",{class:!0});var _e=O(r);o=C(_e,"B",{"data-svelte-h":!0}),ie(o)!=="svelte-ekzpgg"&&(o.textContent=f),i=P(_e),u=C(_e,"DIV",{class:!0});var me=O(u);j(a.$$.fragment,me),p=P(me),j(_.$$.fragment,me),me.forEach(m),_e.forEach(m),M=P(z),g=C(z,"LABEL",{class:!0});var ge=O(g);w=C(ge,"B",{"data-svelte-h":!0}),ie(w)!=="svelte-1flca3"&&(w.textContent=d),S=P(ge),I=C(ge,"DIV",{class:!0});var de=O(I);j(W.$$.fragment,de),Y=P(de),G=C(de,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),de.forEach(m),ge.forEach(m),ae=P(z),h=C(z,"LABEL",{class:!0});var he=O(h);U=C(he,"B",{"data-svelte-h":!0}),ie(U)!=="svelte-1evbw58"&&(U.textContent=Z),H=P(he),Q=C(he,"DIV",{class:!0});var Ce=O(Q);j(F.$$.fragment,Ce),Ce.forEach(m),he.forEach(m),R=P(z),j(N.$$.fragment,z),K=P(z),j(q.$$.fragment,z),z.forEach(m),this.h()},h(){b(u,"class","row svelte-1omoy36"),b(r,"class","svelte-1omoy36"),b(G,"type","number"),b(G,"min",0),b(G,"max",1e5),b(G,"step",1),b(G,"class","svelte-1omoy36"),b(I,"class","row svelte-1omoy36"),b(g,"class","svelte-1omoy36"),b(Q,"class","row svelte-1omoy36"),b(h,"class","svelte-1omoy36"),b(e,"class","container svelte-1omoy36")},m(B,z){T(B,e,z),$(e,s),$(e,l),$(e,r),$(r,o),$(r,i),$(r,u),L(a,u,null),$(u,p),L(_,u,null),$(e,M),$(e,g),$(g,w),$(g,S),$(g,I),L(W,I,null),$(I,Y),$(I,G),be(G,n[0]),$(e,ae),$(e,h),$(h,U),$(h,H),$(h,Q),L(F,Q,null),$(e,R),L(N,e,null),$(e,K),L(q,e,null),se=!0,$e||(Se=[ce(G,"input",n[11]),ce(G,"keyup",n[12])],$e=!0)},p(B,z){const _e={};!c&&z&2&&(c=!0,_e.value=B[1].sortDirection,Te(()=>c=!1)),a.$set(_e);const me={};!v&&z&2&&(v=!0,me.value=B[1].sortProperty,Te(()=>v=!1)),_.$set(me);const ge={};!oe&&z&2&&(oe=!0,ge.value=B[1].scoreComparator,Te(()=>oe=!1)),W.$set(ge),z&1&&at(G.value)!==B[0]&&be(G,B[0]);const de={};!ye&&z&2&&(ye=!0,de.value=B[1].rating,Te(()=>ye=!1)),F.$set(de);const he={};z&32768&&(he.$$scope={dirty:z,ctx:B}),N.$set(he);const Ce={};z&32768&&(Ce.$$scope={dirty:z,ctx:B}),q.$set(Ce)},i(B){se||(k(a.$$.fragment,B),k(_.$$.fragment,B),k(W.$$.fragment,B),k(F.$$.fragment,B),k(N.$$.fragment,B),k(q.$$.fragment,B),se=!0)},o(B){y(a.$$.fragment,B),y(_.$$.fragment,B),y(W.$$.fragment,B),y(F.$$.fragment,B),y(N.$$.fragment,B),y(q.$$.fragment,B),se=!1},d(B){B&&m(e),V(a),V(_),V(W),V(F),V(N),V(q),$e=!1,je(Se)}}}function Zt(n){let e,s,t,l,r,o,f,i,u,a,c,p,_,v,M,g=n[2]&&Ye(n);return{c(){e=E("button"),s=E("i"),t=D(),l=E("span"),r=X(n[4]),o=D(),f=E("i"),i=D(),u=E("span"),a=X(n[3]),c=D(),g&&g.c(),p=ue(),this.h()},l(w){e=C(w,"BUTTON",{class:!0});var d=O(e);s=C(d,"I",{class:!0}),O(s).forEach(m),t=P(d),l=C(d,"SPAN",{});var S=O(l);r=x(S,n[4]),S.forEach(m),o=P(d),f=C(d,"I",{class:!0}),O(f).forEach(m),i=P(d),u=C(d,"SPAN",{});var I=O(u);a=x(I,n[3]),I.forEach(m),d.forEach(m),c=P(w),g&&g.l(w),p=ue(),this.h()},h(){b(s,"class","codicon codicon-filter svelte-1omoy36"),b(f,"class","codicon codicon-arrow-swap svelte-1omoy36"),b(e,"class","svelte-1omoy36")},m(w,d){T(w,e,d),$(e,s),$(e,t),$(e,l),$(l,r),$(e,o),$(e,f),$(e,i),$(e,u),$(u,a),T(w,c,d),g&&g.m(w,d),T(w,p,d),_=!0,v||(M=ce(e,"click",n[5]),v=!0)},p(w,[d]){(!_||d&16)&&Pe(r,w[4]),(!_||d&8)&&Pe(a,w[3]),w[2]?g?(g.p(w,d),d&4&&k(g,1)):(g=Ye(w),g.c(),k(g,1),g.m(p.parentNode,p)):g&&(ee(),y(g,1,1,()=>{g=null}),te())},i(w){_||(k(g),_=!0)},o(w){y(g),_=!1},d(w){w&&(m(e),m(c),m(p)),g&&g.d(w),v=!1,M()}}}const Jt=Object.freeze({id:"Uploaded",score:"Score",updated:"Updated"}),Qt=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),Xt=Object.freeze({">=":"≥","<=":"≤"}),ht=Object.freeze({all:"All",safe:"Safe",questionable:"Questionable",explicit:"Explicit"}),xt=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),es=(n,e,s)=>{let t=n==="all"?void 0:ht[n],l=e===0&&s===">="?void 0:`Score${s}${Oe(e)}`;return[t,l].filter(r=>r!==void 0).join(",")||"All"};function ts(n,e,s){let t,l,r;pe(n,fe,d=>s(1,r=d));const o=we();let f=!1;const i=()=>s(2,f=!0),u=()=>{s(2,f=!1),o("sortfilterupdate")},a=()=>{fe.reset(),s(0,c=r.scoreValue)};let c;function p(d){n.$$.not_equal(r.sortDirection,d)&&(r.sortDirection=d,fe.set(r))}function _(d){n.$$.not_equal(r.sortProperty,d)&&(r.sortProperty=d,fe.set(r))}function v(d){n.$$.not_equal(r.scoreComparator,d)&&(r.scoreComparator=d,fe.set(r))}function M(){c=at(this.value),s(0,c),s(1,r)}const g=d=>pt(d)&&d.target.blur();function w(d){n.$$.not_equal(r.rating,d)&&(r.rating=d,fe.set(r))}return n.$$.update=()=>{if(n.$$.dirty&3){c===void 0&&s(0,c=r.scoreValue);let d=Number(c);isNaN(d)||kt(fe,r.scoreValue=d,r)}n.$$.dirty&2&&s(4,t=es(r.rating,r.scoreValue,r.scoreComparator)),n.$$.dirty&2&&s(3,l=xt[r.sortProperty][r.sortDirection])},[c,r,f,l,t,i,u,a,p,_,v,M,g,w]}class ss extends le{constructor(e){super(),re(this,e,ts,Zt,ne,{})}}function ns(n){let e,s;return e=new mt({props:{post:n[1]}}),e.$on("click",n[2]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.post=t[1]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function ls(n){let e,s;return e=new gt({props:{src:n[1].file_url,poster:n[1].sample_url,width:n[1].width,height:n[1].height,loop:n[1].tags.some(Je)}}),e.$on("click",n[2]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.src=t[1].file_url),l&2&&(r.poster=t[1].sample_url),l&2&&(r.width=t[1].width),l&2&&(r.height=t[1].height),l&2&&(r.loop=t[1].tags.some(Je)),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function rs(n){let e,s;return e=new dt({props:{post:n[1],open:n[0]}}),e.$on("click",n[2]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.post=t[1]),l&1&&(r.open=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ze(n){let e,s;return e=new _t({props:{post:n[1]}}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.post=t[1]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function os(n){let e,s,t,l,r,o;const f=[rs,ls,ns],i=[];function u(c,p){return c[1].type==="image"?0:c[1].type==="video"?1:2}s=u(n),t=i[s]=f[s](n);let a=n[0]&&Ze(n);return{c(){e=E("div"),t.c(),l=D(),a&&a.c(),this.h()},l(c){e=C(c,"DIV",{id:!0,class:!0});var p=O(e);t.l(p),l=P(p),a&&a.l(p),p.forEach(m),this.h()},h(){b(e,"id",r="post_"+n[1].id),b(e,"class","post svelte-uali72"),Ae(e,"open",n[0])},m(c,p){T(c,e,p),i[s].m(e,null),$(e,l),a&&a.m(e,null),o=!0},p(c,[p]){let _=s;s=u(c),s===_?i[s].p(c,p):(ee(),y(i[_],1,1,()=>{i[_]=null}),te(),t=i[s],t?t.p(c,p):(t=i[s]=f[s](c),t.c()),k(t,1),t.m(e,l)),c[0]?a?(a.p(c,p),p&1&&k(a,1)):(a=Ze(c),a.c(),k(a,1),a.m(e,null)):a&&(ee(),y(a,1,1,()=>{a=null}),te()),(!o||p&2&&r!==(r="post_"+c[1].id))&&b(e,"id",r),(!o||p&1)&&Ae(e,"open",c[0])},i(c){o||(k(t),k(a),o=!0)},o(c){y(t),y(a),o=!1},d(c){c&&m(e),i[s].d(),a&&a.d()}}}const Je=n=>n.name=="loop";function as(n,e,s){let{post:t}=e,{open:l=!1}=e;const r=()=>{s(0,l=!l)};return n.$$set=o=>{"post"in o&&s(1,t=o.post),"open"in o&&s(0,l=o.open)},[l,t,r]}class is extends le{constructor(e){super(),re(this,e,as,os,ne,{post:1,open:0})}}function Qe(n){let e,s=n[0].type==="video"?"▶":"GIF",t;return{c(){e=E("span"),t=X(s),this.h()},l(l){e=C(l,"SPAN",{class:!0});var r=O(e);t=x(r,s),r.forEach(m),this.h()},h(){b(e,"class","type svelte-14imjnt")},m(l,r){T(l,e,r),$(e,t)},p(l,r){r&1&&s!==(s=l[0].type==="video"?"▶":"GIF")&&Pe(t,s)},d(l){l&&m(e)}}}function cs(n){let e,s,t,l,r,o=Oe(n[0].score)+"",f,i,u,a,c,p=n[0].type!=="image"&&Qe(n);return{c(){e=E("div"),s=E("img"),l=D(),r=E("span"),f=X(o),i=D(),p&&p.c(),this.h()},l(_){e=C(_,"DIV",{id:!0,class:!0,style:!0});var v=O(e);s=C(v,"IMG",{src:!0,alt:!0,class:!0,tabindex:!0}),l=P(v),r=C(v,"SPAN",{class:!0});var M=O(r);f=x(M,o),M.forEach(m),i=P(v),p&&p.l(v),v.forEach(m),this.h()},h(){Be(s.src,t=n[1])||b(s,"src",t),b(s,"alt","post"),b(s,"class","post-media svelte-14imjnt"),b(s,"tabindex","-1"),b(r,"class","score svelte-14imjnt"),b(e,"id",u="post_"+n[0].id),b(e,"class","post svelte-14imjnt"),Ve(e,"grid-row","span "+n[2]),Ae(e,"open",open)},m(_,v){T(_,e,v),$(e,s),$(e,l),$(e,r),$(r,f),$(e,i),p&&p.m(e,null),a||(c=[ce(e,"click",n[3]),ce(e,"keydown",n[4])],a=!0)},p(_,[v]){v&2&&!Be(s.src,t=_[1])&&b(s,"src",t),v&1&&o!==(o=Oe(_[0].score)+"")&&Pe(f,o),_[0].type!=="image"?p?p.p(_,v):(p=Qe(_),p.c(),p.m(e,null)):p&&(p.d(1),p=null),v&1&&u!==(u="post_"+_[0].id)&&b(e,"id",u),v&0&&Ae(e,"open",open)},i:J,o:J,d(_){_&&m(e),p&&p.d(),a=!1,je(c)}}}function us(n,e,s){let t,{post:l}=e,r=Math.min(Math.round(l.height/l.width*5),15);const o=u=>u.endsWith(".jpg")||u.endsWith(".jpeg")||u.endsWith(".png")||u.endsWith(".webp");function f(u){Fe.call(this,n,u)}const i=u=>{pt(u)&&u.target.click()};return n.$$set=u=>{"post"in u&&s(0,l=u.post)},n.$$.update=()=>{n.$$.dirty&1&&s(1,t=o(l.sample_url)?l.sample_url:l.preview_url)},[l,t,r,f,i]}class fs extends le{constructor(e){super(),re(this,e,us,cs,ne,{post:0})}}function ps(n){let e,s,t,l;const r=n[3].default,o=wt(r,n,n[2],null);return{c(){e=E("div"),o&&o.c(),this.h()},l(f){e=C(f,"DIV",{role:!0,tabindex:!0,class:!0});var i=O(e);o&&o.l(i),i.forEach(m),this.h()},h(){b(e,"role","none"),b(e,"tabindex","-1"),b(e,"class","dialog svelte-1kq1os1")},m(f,i){T(f,e,i),o&&o.m(e,null),n[5](e),s=!0,t||(l=[ce(e,"keydown",n[4]),ce(e,"click",yt(_s))],t=!0)},p(f,[i]){o&&o.p&&(!s||i&4)&&St(o,r,f,f[2],s?Ct(r,f[2],i,null):Et(f[2]),null)},i(f){s||(k(o,f),s=!0)},o(f){y(o,f),s=!1},d(f){f&&m(e),o&&o.d(f),n[5](null),t=!1,je(l)}}}const _s=()=>{};function ms(n,e,s){let{$$slots:t={},$$scope:l}=e;const r=we(),o=()=>r("close");let f;Me(async()=>{f.focus()});const i=a=>{a.code==="Escape"&&o()};function u(a){ve[a?"unshift":"push"](()=>{f=a,s(0,f)})}return n.$$set=a=>{"$$scope"in a&&s(2,l=a.$$scope)},[f,o,l,t,i,u]}class gs extends le{constructor(e){super(),re(this,e,ms,ps,ne,{})}}function ds(n){let e;return{c(){e=E("i"),this.h()},l(s){e=C(s,"I",{class:!0}),O(e).forEach(m),this.h()},h(){b(e,"class","codicon codicon-close")},m(s,t){T(s,e,t)},p:J,d(s){s&&m(e)}}}function hs(n){let e,s;return e=new mt({props:{post:n[0]}}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.post=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function $s(n){let e,s;return e=new gt({props:{src:n[0].file_url,poster:n[0].sample_url,width:n[0].width,height:n[0].height,loop:n[0].tags.some(Xe)}}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.src=t[0].file_url),l&1&&(r.poster=t[0].sample_url),l&1&&(r.width=t[0].width),l&1&&(r.height=t[0].height),l&1&&(r.loop=t[0].tags.some(Xe)),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function vs(n){let e,s;return e=new dt({props:{post:n[0],open:!0}}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.post=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function bs(n){let e,s,t,l,r,o,f,i,u;t=new jt({props:{$$slots:{default:[ds]},$$scope:{ctx:n}}}),t.$on("click",n[2]);const a=[vs,$s,hs],c=[];function p(_,v){return _[0].type==="image"?0:_[0].type==="video"?1:2}return r=p(n),o=c[r]=a[r](n),i=new _t({props:{post:n[0]}}),{c(){e=E("div"),s=E("div"),A(t.$$.fragment),l=D(),o.c(),f=D(),A(i.$$.fragment),this.h()},l(_){e=C(_,"DIV",{class:!0});var v=O(e);s=C(v,"DIV",{class:!0});var M=O(s);j(t.$$.fragment,M),M.forEach(m),l=P(v),o.l(v),f=P(v),j(i.$$.fragment,v),v.forEach(m),this.h()},h(){b(s,"class","header svelte-17yx6d5"),b(e,"class","container svelte-17yx6d5")},m(_,v){T(_,e,v),$(e,s),L(t,s,null),$(e,l),c[r].m(e,null),$(e,f),L(i,e,null),u=!0},p(_,v){const M={};v&16&&(M.$$scope={dirty:v,ctx:_}),t.$set(M);let g=r;r=p(_),r===g?c[r].p(_,v):(ee(),y(c[g],1,1,()=>{c[g]=null}),te(),o=c[r],o?o.p(_,v):(o=c[r]=a[r](_),o.c()),k(o,1),o.m(e,f));const w={};v&1&&(w.post=_[0]),i.$set(w)},i(_){u||(k(t.$$.fragment,_),k(o),k(i.$$.fragment,_),u=!0)},o(_){y(t.$$.fragment,_),y(o),y(i.$$.fragment,_),u=!1},d(_){_&&m(e),V(t),c[r].d(),V(i)}}}function ks(n){let e,s;return e=new gs({props:{$$slots:{default:[bs]},$$scope:{ctx:n}}}),e.$on("close",n[3]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,[l]){const r={};l&17&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}const Xe=n=>n.name=="loop";function ws(n,e,s){const t=we();let{post:l}=e;const r=()=>t("close");function o(f){Fe.call(this,n,f)}return n.$$set=f=>{"post"in f&&s(0,l=f.post)},[l,t,r,o]}class ys extends le{constructor(e){super(),re(this,e,ws,ks,ne,{post:0})}}function xe(n,e,s){const t=n.slice();return t[8]=e[s],t}function et(n,e,s){const t=n.slice();return t[8]=e[s],t}function Ss(n){let e,s,t,l,r=ke(n[2].posts),o=[];for(let u=0;u<r.length;u+=1)o[u]=tt(xe(n,r,u));const f=u=>y(o[u],1,1,()=>{o[u]=null});let i=n[1]&&n[0]!==void 0&&st(n);return{c(){e=E("section");for(let u=0;u<o.length;u+=1)o[u].c();s=D(),i&&i.c(),t=ue(),this.h()},l(u){e=C(u,"SECTION",{class:!0,style:!0});var a=O(e);for(let c=0;c<o.length;c+=1)o[c].l(a);a.forEach(m),s=P(u),i&&i.l(u),t=ue(),this.h()},h(){b(e,"class","multi svelte-q6spg0"),Ve(e,"grid-template-columns","repeat("+n[3]+", 1fr)")},m(u,a){T(u,e,a);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);T(u,s,a),i&&i.m(u,a),T(u,t,a),l=!0},p(u,a){if(a&5){r=ke(u[2].posts);let c;for(c=0;c<r.length;c+=1){const p=xe(u,r,c);o[c]?(o[c].p(p,a),k(o[c],1)):(o[c]=tt(p),o[c].c(),k(o[c],1),o[c].m(e,null))}for(ee(),c=r.length;c<o.length;c+=1)f(c);te()}(!l||a&8)&&Ve(e,"grid-template-columns","repeat("+u[3]+", 1fr)"),u[1]&&u[0]!==void 0?i?(i.p(u,a),a&3&&k(i,1)):(i=st(u),i.c(),k(i,1),i.m(t.parentNode,t)):i&&(ee(),y(i,1,1,()=>{i=null}),te())},i(u){if(!l){for(let a=0;a<r.length;a+=1)k(o[a]);k(i),l=!0}},o(u){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)y(o[a]);y(i),l=!1},d(u){u&&(m(e),m(s),m(t)),qe(o,u),i&&i.d(u)}}}function Es(n){let e,s,t=ke(n[2].posts),l=[];for(let o=0;o<t.length;o+=1)l[o]=nt(et(n,t,o));const r=o=>y(l[o],1,1,()=>{l[o]=null});return{c(){e=E("section");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=C(o,"SECTION",{class:!0});var f=O(e);for(let i=0;i<l.length;i+=1)l[i].l(f);f.forEach(m),this.h()},h(){b(e,"class","single svelte-q6spg0")},m(o,f){T(o,e,f);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);s=!0},p(o,f){if(f&4){t=ke(o[2].posts);let i;for(i=0;i<t.length;i+=1){const u=et(o,t,i);l[i]?(l[i].p(u,f),k(l[i],1)):(l[i]=nt(u),l[i].c(),k(l[i],1),l[i].m(e,null))}for(ee(),i=t.length;i<l.length;i+=1)r(i);te()}},i(o){if(!s){for(let f=0;f<t.length;f+=1)k(l[f]);s=!0}},o(o){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)y(l[f]);s=!1},d(o){o&&m(e),qe(l,o)}}}function tt(n){let e,s;function t(){return n[5](n[8])}return e=new fs({props:{post:n[8]}}),e.$on("click",t),{c(){A(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,r){L(e,l,r),s=!0},p(l,r){n=l;const o={};r&4&&(o.post=n[8]),e.$set(o)},i(l){s||(k(e.$$.fragment,l),s=!0)},o(l){y(e.$$.fragment,l),s=!1},d(l){V(e,l)}}}function st(n){let e,s;return e=new ys({props:{post:n[0]}}),e.$on("close",n[6]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.post=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function nt(n){let e,s;return e=new is({props:{post:n[8]}}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&4&&(r.post=t[8]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Cs(n){let e,s,t=Oe(n[2].postCount)+"",l,r,o,f,i,u,a,c,p;f=new ss({}),f.$on("sortfilterupdate",n[4]);const _=[Es,Ss],v=[];function M(g,w){return g[3]==="1"?0:1}return u=M(n),a=v[u]=_[u](n),{c(){e=E("div"),s=E("span"),l=X(t),r=X(" posts"),o=D(),A(f.$$.fragment),i=D(),a.c(),c=ue(),this.h()},l(g){e=C(g,"DIV",{class:!0});var w=O(e);s=C(w,"SPAN",{});var d=O(s);l=x(d,t),r=x(d," posts"),d.forEach(m),o=P(w),j(f.$$.fragment,w),w.forEach(m),i=P(g),a.l(g),c=ue(),this.h()},h(){b(e,"class","svelte-q6spg0")},m(g,w){T(g,e,w),$(e,s),$(s,l),$(s,r),$(e,o),L(f,e,null),T(g,i,w),v[u].m(g,w),T(g,c,w),p=!0},p(g,[w]){(!p||w&4)&&t!==(t=Oe(g[2].postCount)+"")&&Pe(l,t);let d=u;u=M(g),u===d?v[u].p(g,w):(ee(),y(v[d],1,1,()=>{v[d]=null}),te(),a=v[u],a?a.p(g,w):(a=v[u]=_[u](g),a.c()),k(a,1),a.m(c.parentNode,c))},i(g){p||(k(f.$$.fragment,g),k(a),p=!0)},o(g){y(f.$$.fragment,g),y(a),p=!1},d(g){g&&(m(e),m(i),m(c)),V(f),v[u].d(g)}}}function Is(n,e,s){let t,l;pe(n,De,c=>s(2,t=c)),pe(n,Bt,c=>s(3,l=c));let r,o=location.hash.length>2;const f=()=>{s(1,o=location.hash.length>2)};Me(()=>{window.addEventListener("hashchange",f)}),it(()=>{window.removeEventListener("hashchange",f)});function i(c){Fe.call(this,n,c)}return[r,o,t,l,i,c=>{s(0,r=c),location.hash=`fullscreen_${c.id}`},()=>{s(0,r=void 0),history.back()}]}class Ds extends le{constructor(e){super(),re(this,e,Is,Cs,ne,{})}}function Ps(n){let e;return{c(){e=E("div")},l(s){e=C(s,"DIV",{}),O(e).forEach(m)},m(s,t){T(s,e,t),n[2](e)},p:J,i:J,o:J,d(s){s&&m(e),n[2](null)}}}function Ns(n,e,s){let{rootMargin:t}=e;const l=we(),r=new IntersectionObserver(i=>{i[0].isIntersecting&&l("intersection")},{rootMargin:t});let o;function f(i){ve[i?"unshift":"push"](()=>{o=i,s(0,o)})}return n.$$set=i=>{"rootMargin"in i&&s(1,t=i.rootMargin)},n.$$.update=()=>{n.$$.dirty&1&&(r.disconnect(),o&&r.observe(o))},[o,t,f]}class Os extends le{constructor(e){super(),re(this,e,Ns,Ps,ne,{rootMargin:1})}}function Ts(n){let e,s,t,l,r="You have seen everything there is to see...";return{c(){e=E("img"),t=D(),l=E("p"),l.textContent=r,this.h()},l(o){e=C(o,"IMG",{src:!0,alt:!0,class:!0}),t=P(o),l=C(o,"P",{"data-svelte-h":!0}),ie(l)!=="svelte-1i75mtf"&&(l.textContent=r),this.h()},h(){Be(e.src,s=ut+"/assets/shironeko-x.png")||b(e,"src",s),b(e,"alt","No more results to load"),b(e,"class","svelte-1pkma0d")},m(o,f){T(o,e,f),T(o,t,f),T(o,l,f)},p:J,i:J,o:J,d(o){o&&(m(e),m(t),m(l))}}}class Rs extends le{constructor(e){super(),re(this,e,null,Ts,ne,{})}}function lt(n,e,s){const t=n.slice();return t[9]=e[s],t}function rt(n){let e,s;return e=new Ft({props:{tag:n[9]}}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&4&&(r.tag=t[9]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Bs(n){let e;return{c(){e=X("Create supertag")},l(s){e=x(s,"Create supertag")},m(s,t){T(s,e,t)},d(s){s&&m(e)}}}function As(n){let e,s,t="Create Supertag",l,r,o,f,i,u="Name",a,c,p,_,v,M="Description",g,w,d,S,I,W="Tags",oe,Y,G,ae,h,U,Z,H,Q=ke(n[2]),F=[];for(let R=0;R<Q.length;R+=1)F[R]=rt(lt(n,Q,R));const ye=R=>y(F[R],1,1,()=>{F[R]=null});return h=new Ne({props:{title:n[3]?"Click to create supertag":"Enter a valid name to continue",disabled:!n[3],$$slots:{default:[Bs]},$$scope:{ctx:n}}}),h.$on("click",n[8]),{c(){e=E("section"),s=E("h3"),s.textContent=t,l=D(),r=E("button"),o=D(),f=E("div"),i=E("label"),i.textContent=u,a=D(),c=E("input"),p=D(),_=E("div"),v=E("label"),v.textContent=M,g=D(),w=E("input"),d=D(),S=E("div"),I=E("span"),I.textContent=W,oe=D(),Y=E("ol");for(let R=0;R<F.length;R+=1)F[R].c();G=D(),ae=E("div"),A(h.$$.fragment),this.h()},l(R){e=C(R,"SECTION",{class:!0});var N=O(e);s=C(N,"H3",{"data-svelte-h":!0}),ie(s)!=="svelte-ho1cwx"&&(s.textContent=t),l=P(N),r=C(N,"BUTTON",{class:!0}),O(r).forEach(m),o=P(N),f=C(N,"DIV",{class:!0});var K=O(f);i=C(K,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(i)!=="svelte-10k8a68"&&(i.textContent=u),a=P(K),c=C(K,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),K.forEach(m),p=P(N),_=C(N,"DIV",{class:!0});var q=O(_);v=C(q,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(v)!=="svelte-14n9kp6"&&(v.textContent=M),g=P(q),w=C(q,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),q.forEach(m),d=P(N),S=C(N,"DIV",{class:!0});var se=O(S);I=C(se,"SPAN",{class:!0,"data-svelte-h":!0}),ie(I)!=="svelte-7hjyox"&&(I.textContent=W),oe=P(se),Y=C(se,"OL",{class:!0});var $e=O(Y);for(let Ee=0;Ee<F.length;Ee+=1)F[Ee].l($e);$e.forEach(m),se.forEach(m),G=P(N),ae=C(N,"DIV",{class:!0});var Se=O(ae);j(h.$$.fragment,Se),Se.forEach(m),N.forEach(m),this.h()},h(){b(r,"class",ct("codicon codicon-close")+" svelte-xkjm86"),b(i,"for","supertag-name"),b(i,"class","svelte-xkjm86"),b(c,"type","text"),b(c,"placeholder","Descriptive name"),b(c,"id","supertag-name"),b(c,"class","svelte-xkjm86"),b(f,"class","svelte-xkjm86"),b(v,"for","supertag-description"),b(v,"class","svelte-xkjm86"),b(w,"type","text"),b(w,"placeholder","Short description"),b(w,"id","supertag-description"),b(w,"class","svelte-xkjm86"),b(_,"class","svelte-xkjm86"),b(I,"class","svelte-xkjm86"),b(Y,"class","svelte-xkjm86"),b(S,"class","svelte-xkjm86"),b(ae,"class","last svelte-xkjm86"),b(e,"class","svelte-xkjm86")},m(R,N){T(R,e,N),$(e,s),$(e,l),$(e,r),$(e,o),$(e,f),$(f,i),$(f,a),$(f,c),be(c,n[0]),$(e,p),$(e,_),$(_,v),$(_,g),$(_,w),be(w,n[1]),$(e,d),$(e,S),$(S,I),$(S,oe),$(S,Y);for(let K=0;K<F.length;K+=1)F[K]&&F[K].m(Y,null);$(e,G),$(e,ae),L(h,ae,null),U=!0,Z||(H=[ce(r,"click",n[5]),ce(c,"input",n[6]),ce(w,"input",n[7])],Z=!0)},p(R,N){if(N&1&&c.value!==R[0]&&be(c,R[0]),N&2&&w.value!==R[1]&&be(w,R[1]),N&4){Q=ke(R[2]);let q;for(q=0;q<Q.length;q+=1){const se=lt(R,Q,q);F[q]?(F[q].p(se,N),k(F[q],1)):(F[q]=rt(se),F[q].c(),k(F[q],1),F[q].m(Y,null))}for(ee(),q=Q.length;q<F.length;q+=1)ye(q);te()}const K={};N&8&&(K.title=R[3]?"Click to create supertag":"Enter a valid name to continue"),N&8&&(K.disabled=!R[3]),N&4096&&(K.$$scope={dirty:N,ctx:R}),h.$set(K)},i(R){if(!U){for(let N=0;N<Q.length;N+=1)k(F[N]);k(h.$$.fragment,R),U=!0}},o(R){F=F.filter(Boolean);for(let N=0;N<F.length;N+=1)y(F[N]);y(h.$$.fragment,R),U=!1},d(R){R&&m(e),qe(F,R),V(h),Z=!1,je(H)}}}function js(n){let e,s;return e=new ft({props:{$$slots:{default:[As]},$$scope:{ctx:n}}}),e.$on("close",n[5]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,[l]){const r={};l&4111&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ls(n,e,s){let t,{name:l=""}=e,{description:r=""}=e,{tags:o}=e;const f=we(),i=()=>f("close");function u(){l=this.value,s(0,l)}function a(){r=this.value,s(1,r)}const c=()=>{f("submit",{name:l,description:r,tags:o.map(({modifier:p,name:_})=>({modifier:p,name:_}))}),i()};return n.$$set=p=>{"name"in p&&s(0,l=p.name),"description"in p&&s(1,r=p.description),"tags"in p&&s(2,o=p.tags)},n.$$.update=()=>{n.$$.dirty&5&&s(3,t=typeof l=="string"&&l!==""&&o.length>1)},[l,r,o,t,f,i,u,a,c]}class Vs extends le{constructor(e){super(),re(this,e,Ls,js,ne,{name:0,description:1,tags:2})}}function Fs(n){let e,s,t,l,r,o,f,i,u,a;return{c(){e=E("div"),s=E("div"),t=E("i"),l=D(),r=E("div"),o=E("h3"),f=X(n[0]),i=D(),u=E("span"),a=X(n[2]),this.h()},l(c){e=C(c,"DIV",{class:!0});var p=O(e);s=C(p,"DIV",{class:!0});var _=O(s);t=C(_,"I",{class:!0}),O(t).forEach(m),_.forEach(m),l=P(p),r=C(p,"DIV",{});var v=O(r);o=C(v,"H3",{class:!0});var M=O(o);f=x(M,n[0]),M.forEach(m),i=P(v),u=C(v,"SPAN",{});var g=O(u);a=x(g,n[2]),g.forEach(m),v.forEach(m),p.forEach(m),this.h()},h(){b(t,"class",ct(n[1])+" svelte-1tvgln1"),b(s,"class","icon svelte-1tvgln1"),b(o,"class","svelte-1tvgln1"),b(e,"class","error svelte-1tvgln1")},m(c,p){T(c,e,p),$(e,s),$(s,t),$(e,l),$(e,r),$(r,o),$(o,f),$(r,i),$(r,u),$(u,a)},p:J,i:J,o:J,d(c){c&&m(e)}}}function Ms(n,e,s){let{error:t}=e,l=t.message==="Failed to fetch"?"Connection Error":"Application Error",r=t.message==="Failed to fetch"?"codicon codicon-debug-disconnect":"codicon codicon-error",o=t.message==="Failed to fetch"?"Failed to connect to the server. Make sure you have a stable internet connection.":t.message;return n.$$set=f=>{"error"in f&&s(3,t=f.error)},[l,r,o,t]}class qs extends le{constructor(e){super(),re(this,e,Ms,Fs,ne,{error:3})}}function Us(n){let e;return{c(){e=X("Search")},l(s){e=x(s,"Search")},m(s,t){T(s,e,t)},d(s){s&&m(e)}}}function zs(n){let e,s,t,l,r,o;const f=[Hs,Ks],i=[];function u(a,c){return a[2].postCount===0?0:1}return s=u(n),t=i[s]=f[s](n),r=new Mt({}),{c(){e=E("section"),t.c(),l=D(),A(r.$$.fragment),this.h()},l(a){e=C(a,"SECTION",{class:!0});var c=O(e);t.l(c),c.forEach(m),l=P(a),j(r.$$.fragment,a),this.h()},h(){b(e,"class","svelte-rk0y4a")},m(a,c){T(a,e,c),i[s].m(e,null),T(a,l,c),L(r,a,c),o=!0},p(a,c){let p=s;s=u(a),s===p?i[s].p(a,c):(ee(),y(i[p],1,1,()=>{i[p]=null}),te(),t=i[s],t?t.p(a,c):(t=i[s]=f[s](a),t.c()),k(t,1),t.m(e,null))},i(a){o||(k(t),k(r.$$.fragment,a),o=!0)},o(a){y(t),y(r.$$.fragment,a),o=!1},d(a){a&&(m(e),m(l)),i[s].d(),V(r,a)}}}function Gs(n){let e,s;return e=new qs({props:{error:n[0]}}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.error=t[0]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ks(n){let e,s,t,l,r,o;e=new Ds({}),e.$on("sortfilterupdate",n[7]);const f=[Ys,Ws],i=[];function u(a,c){return a[2].posts.length===a[2].postCount?0:1}return t=u(n),l=i[t]=f[t](n),{c(){A(e.$$.fragment),s=D(),l.c(),r=ue()},l(a){j(e.$$.fragment,a),s=P(a),l.l(a),r=ue()},m(a,c){L(e,a,c),T(a,s,c),i[t].m(a,c),T(a,r,c),o=!0},p(a,c){let p=t;t=u(a),t===p?i[t].p(a,c):(ee(),y(i[p],1,1,()=>{i[p]=null}),te(),l=i[t],l?l.p(a,c):(l=i[t]=f[t](a),l.c()),k(l,1),l.m(r.parentNode,r))},i(a){o||(k(e.$$.fragment,a),k(l),o=!0)},o(a){y(e.$$.fragment,a),y(l),o=!1},d(a){a&&(m(s),m(r)),V(e,a),i[t].d(a)}}}function Hs(n){let e,s;return e=new Kt({}),e.$on("sortfilterupdate",n[7]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p:J,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ws(n){let e,s;return e=new Os({props:{rootMargin:"1000px"}}),e.$on("intersection",n[8]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p:J,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ys(n){let e,s;return e=new Rs({}),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p:J,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function ot(n){let e,s;return e=new Vs({props:{tags:n[4]}}),e.$on("close",n[13]),e.$on("submit",n[14]),{c(){A(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const r={};l&16&&(r.tags=t[4]),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Zs(n){let e,s,t,l,r,o,f,i,u,a,c,p,_,v;s=new It({}),l=new Nt({props:{placeholder:"Search for tags",fetchSuggestions:n[6]}}),l.$on("pick",n[9]),o=new Ne({props:{title:"Search with the tags above",$$slots:{default:[Us]},$$scope:{ctx:n}}}),o.$on("click",n[7]),i=new Dt({props:{tags:[...n[4],...n[3]]}}),i.$on("click",n[10]),i.$on("contextmenu",n[11]),i.$on("createSupertag",n[12]);const M=[Gs,zs],g=[];function w(S,I){return S[0]?0:S[2].requested?1:-1}~(a=w(n))&&(c=g[a]=M[a](n));let d=n[1]&&ot(n);return{c(){e=E("section"),A(s.$$.fragment),t=D(),A(l.$$.fragment),r=D(),A(o.$$.fragment),f=D(),A(i.$$.fragment),u=D(),c&&c.c(),p=D(),d&&d.c(),_=ue(),this.h()},l(S){e=C(S,"SECTION",{id:!0,class:!0});var I=O(e);j(s.$$.fragment,I),t=P(I),j(l.$$.fragment,I),r=P(I),j(o.$$.fragment,I),f=P(I),j(i.$$.fragment,I),I.forEach(m),u=P(S),c&&c.l(S),p=P(S),d&&d.l(S),_=ue(),this.h()},h(){b(e,"id","search"),b(e,"class","svelte-rk0y4a")},m(S,I){T(S,e,I),L(s,e,null),$(e,t),L(l,e,null),$(e,r),L(o,e,null),$(e,f),L(i,e,null),T(S,u,I),~a&&g[a].m(S,I),T(S,p,I),d&&d.m(S,I),T(S,_,I),v=!0},p(S,[I]){const W={};I&8388608&&(W.$$scope={dirty:I,ctx:S}),o.$set(W);const oe={};I&24&&(oe.tags=[...S[4],...S[3]]),i.$set(oe);let Y=a;a=w(S),a===Y?~a&&g[a].p(S,I):(c&&(ee(),y(g[Y],1,1,()=>{g[Y]=null}),te()),~a?(c=g[a],c?c.p(S,I):(c=g[a]=M[a](S),c.c()),k(c,1),c.m(p.parentNode,p)):c=null),S[1]?d?(d.p(S,I),I&2&&k(d,1)):(d=ot(S),d.c(),k(d,1),d.m(_.parentNode,_)):d&&(ee(),y(d,1,1,()=>{d=null}),te())},i(S){v||(k(s.$$.fragment,S),k(l.$$.fragment,S),k(o.$$.fragment,S),k(i.$$.fragment,S),k(c),k(d),v=!0)},o(S){y(s.$$.fragment,S),y(l.$$.fragment,S),y(o.$$.fragment,S),y(i.$$.fragment,S),y(c),y(d),v=!1},d(S){S&&(m(e),m(u),m(p),m(_)),V(s),V(l),V(o),V(i),~a&&g[a].d(S),d&&d.d(S)}}}const Js=()=>{const n=new URL(location.href);if(!n.searchParams.has("tags"))return;const s=(n.searchParams.get("tags")??"").split(";");if(!(!Array.isArray(s)||s.length===0))return s};function Qs(n,e,s){let t,l,r,o,f,i;pe(n,De,h=>s(2,t=h)),pe(n,Le,h=>s(3,l=h)),pe(n,fe,h=>s(17,r=h)),pe(n,Vt,h=>s(18,o=h)),pe(n,Ie,h=>s(4,f=h)),pe(n,He,h=>s(5,i=h));let u=!1,a,c=!1,p=0;const _=async h=>{const U=await Tt(h);return[...i.items.filter(({name:H})=>H.toLowerCase().includes(h.toLowerCase())).map(H=>({label:H.name,count:H.tags.length,type:"supertag"})),...U]},v=Js();v&&v.forEach(h=>{f.some(U=>U.name===h)||Ie.addByName(h)});const M=()=>new Pt().withPid(t.pageCount).withTags(f).withBlockedContent(o).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withScoreValue(r.scoreValue).withScoreComparator(r.scoreComparator).withRating(r.rating).withSupertags(l),g=async h=>{if(!u){s(0,a=void 0),u=!0;try{const U=t.pageCount;await h(),qt(U).catch(()=>{})}catch(U){s(0,a=U),console.warn(U)}finally{u=!1}}},w=async()=>{De.reset(),p=0,g(async()=>{const[h,U]=await M().getPageAndCount();console.log(h,U),De.addPage(h,U)})},d=async()=>{g(async()=>{const h=await M().getPage();De.addPage(h)})},S=h=>{var U,Z;if(console.log(h),(h.key==="/"||h.key==="s")&&(!document.activeElement||document.activeElement===document.body)&&((U=document.getElementById("searchbar"))==null||U.focus(),h.preventDefault(),h.stopPropagation()),h.ctrlKey&&h.key==="Enter"&&(h.preventDefault(),h.stopPropagation(),w()),h.ctrlKey&&h.key==="m"&&((Z=document.getElementById("select-modifier"))==null||Z.click()),h.ctrlKey&&h.key==="ArrowDown"){const H=document.getElementsByClassName("post-media");H[p].focus(),p=Math.min(p+1,Math.max(0,H.length-1))}h.ctrlKey&&h.key==="ArrowUp"&&(document.getElementsByClassName("post-media")[p].focus(),p=Math.max(p-1,0))};return Me(()=>{document.addEventListener("keydown",S)}),it(()=>{document.removeEventListener("keydown",S)}),[a,c,t,l,f,i,_,w,d,async h=>{const U=h.detail;if(U.type==="supertag"){const Z=i.items.find(H=>H.name===U.label);if(!Z){console.log("Supertag not present.");return}Le.addOrReplace(Z)}else{const Z=await Rt(h.detail.label);Ie.addOrReplace({name:h.detail.label,modifier:h.detail.modifier,count:h.detail.count,type:Z.type})}},h=>"description"in h.detail?Le.removeByName(h.detail.name):Ie.removeByName(h.detail.name),h=>{"description"in h.detail||(h.detail.modifier=Ot(h.detail.modifier),Ie.addOrReplace(h.detail))},()=>s(1,c=!0),()=>s(1,c=!1),h=>He.add(h.detail)]}class $n extends le{constructor(e){super(),re(this,e,Qs,Zs,ne,{})}}export{$n as component};
