import{s as V,f as S,l as U,a as B,g as E,h as P,m as F,d as h,c as q,j as c,i as I,u as M,n as O,v as k,e as J,I as Te,D as Qe,y as Ye,z,H as D,S as Ne,J as ce,r as ue,T as te,U as se,N as De,K as X,k as oe,o as xe,M as $e,V as et,G as fe,L as tt,R as st,p as Z,P as nt,E as he}from"./scheduler.876e21ab.js";import{S as R,i as G,a as C,g as re,c as ae,t as L,b as Q,d as Y,m as x,e as $,r as lt,f as _e}from"./index.bf870a3d.js";import{f as de}from"./format-tag.7e313273.js";import{i as rt}from"./tags.49324235.js";import{e as ne}from"./each.e59479a4.js";import{a as ie}from"./active-tags-store.9b7ddb3d.js";import{S as at}from"./SimpleTag.683d0997.js";import{h as ge,u as it}from"./await_block.ac7187f4.js";import{L as ot}from"./LoadingAnimation.a4beb55c.js";import{b as ee}from"./paths.a35fe86d.js";import{h as ct}from"./always-loop-store.309dbd9e.js";const ut="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",me=async(s=void 0)=>{if(typeof s!="number"&&s!==void 0)throw new TypeError("Invalid postId");const e=new URL(ut);s!==void 0&&e.searchParams.append("post_id",String(s));const t=await fetch(e);if(!t.ok)throw new Error("Failed to get tag suggestions");const l=await t.text(),o=new DOMParser().parseFromString(l,"text/xml"),r=[];for(const i of o.getElementsByTagName("comment"))r.push(ft(i.attributes));return r},ft=s=>{const e=s.getNamedItem("creator"),t=s.getNamedItem("created_at"),l=s.getNamedItem("body");if(e==null||t==null||l==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${t}, ${l}`);return{author:e.value,createdAt:t.value,content:l.value}},pe=6e4,le=s=>{if(!ht(s))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(s).getTime()/pe,l=new Date().getTime()/pe-e;if(l<1)return"just now";if(l<60)return H(l,"minute");const n=l/60;if(n<24)return H(n,"hour");const o=n/24;if(o<7)return H(o,"day");if(o<30.5)return H(o/7,"week");if(o<365.25)return H(o/30.5,"month");const r=o/365.25;return H(r,"year")},ht=s=>(typeof s=="number"||typeof s=="string")&&new Date(s).toString()!=="Invalid Date",H=(s,e)=>{const t=s.toFixed();return`${t} ${e}${t==="1"?"":"s"} ago`};function _t(s){let e,t,l=s[0].author+"",n,o,r,i=le(s[0].createdAt)+"",a,u,f,A=s[0].content+"",g;return{c(){e=S("div"),t=S("span"),n=U(l),o=B(),r=S("span"),a=U(i),u=B(),f=S("span"),g=U(A),this.h()},l(w){e=E(w,"DIV",{class:!0});var m=P(e);t=E(m,"SPAN",{class:!0});var T=P(t);n=F(T,l),T.forEach(h),o=q(m),r=E(m,"SPAN",{class:!0});var p=P(r);a=F(p,i),p.forEach(h),u=q(m),f=E(m,"SPAN",{class:!0});var d=P(f);g=F(d,A),d.forEach(h),m.forEach(h),this.h()},h(){c(t,"class","author svelte-bys59y"),c(r,"class","created-at svelte-bys59y"),c(f,"class","content svelte-bys59y"),c(e,"class","svelte-bys59y")},m(w,m){I(w,e,m),M(e,t),M(t,n),M(e,o),M(e,r),M(r,a),M(e,u),M(e,f),M(f,g)},p(w,[m]){m&1&&l!==(l=w[0].author+"")&&O(n,l),m&1&&i!==(i=le(w[0].createdAt)+"")&&O(a,i),m&1&&A!==(A=w[0].content+"")&&O(g,A)},i:k,o:k,d(w){w&&h(e)}}}function dt(s,e,t){let{comment:l}=e;return s.$$set=n=>{"comment"in n&&t(0,l=n.comment)},[l]}class gt extends R{constructor(e){super(),G(this,e,dt,_t,V,{comment:0})}}function mt(s){let e,t=s[0].charAt(0).toUpperCase()+"",l,n;return{c(){e=S("span"),l=U(t),this.h()},l(o){e=E(o,"SPAN",{title:!0,class:!0});var r=P(e);l=F(r,t),r.forEach(h),this.h()},h(){c(e,"title",n="Rated "+s[0]+"."),c(e,"class","svelte-1nbj6kf")},m(o,r){I(o,e,r),M(e,l)},p(o,[r]){r&1&&t!==(t=o[0].charAt(0).toUpperCase()+"")&&O(l,t),r&1&&n!==(n="Rated "+o[0]+".")&&c(e,"title",n)},i:k,o:k,d(o){o&&h(e)}}}function pt(s,e,t){let{value:l}=e;return s.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class os extends R{constructor(e){super(),G(this,e,pt,mt,V,{value:0})}}function bt(s){let e,t=le(s[0])+"",l;return{c(){e=S("span"),l=U(t),this.h()},l(n){e=E(n,"SPAN",{class:!0});var o=P(e);l=F(o,t),o.forEach(h),this.h()},h(){c(e,"class","svelte-1vqihm9")},m(n,o){I(n,e,o),M(e,l)},p(n,[o]){o&1&&t!==(t=le(n[0])+"")&&O(l,t)},i:k,o:k,d(n){n&&h(e)}}}function yt(s,e,t){let{value:l}=e;return s.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class cs extends R{constructor(e){super(),G(this,e,yt,bt,V,{value:0})}}function vt(s){let e,t=de(s[0])+"",l;return{c(){e=S("span"),l=U(t),this.h()},l(n){e=E(n,"SPAN",{"data-testid":!0,class:!0});var o=P(e);l=F(o,t),o.forEach(h),this.h()},h(){c(e,"data-testid","score"),c(e,"class","codicon codicon-heart svelte-te86f3")},m(n,o){I(n,e,o),M(e,l)},p(n,[o]){o&1&&t!==(t=de(n[0])+"")&&O(l,t)},i:k,o:k,d(n){n&&h(e)}}}function kt(s,e,t){let{value:l}=e;return s.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class us extends R{constructor(e){super(),G(this,e,kt,vt,V,{value:0})}}function be(s){let e,t,l,n,o;return{c(){e=S("a"),t=S("i"),l=B(),n=U(s[1]),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0});var i=P(e);t=E(i,"I",{class:!0}),P(t).forEach(h),l=q(i),n=F(i,s[1]),i.forEach(h),this.h()},h(){c(t,"class","codicon codicon-link"),c(e,"href",o=s[0].toString()),c(e,"target","_newtab"),c(e,"class","svelte-1orztco")},m(r,i){I(r,e,i),M(e,t),M(e,l),M(e,n)},p(r,i){i&2&&O(n,r[1]),i&1&&o!==(o=r[0].toString())&&c(e,"href",o)},d(r){r&&h(e)}}}function wt(s){let e,t=s[0]&&be(s);return{c(){t&&t.c(),e=J()},l(l){t&&t.l(l),e=J()},m(l,n){t&&t.m(l,n),I(l,e,n)},p(l,[n]){l[0]?t?t.p(l,n):(t=be(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(l){l&&h(e),t&&t.d(l)}}}function St(s,e,t){let l,n,{source:o}=e;return s.$$set=r=>{"source"in r&&t(2,o=r.source)},s.$$.update=()=>{var r;s.$$.dirty&4&&t(0,l=rt(o)?new URL(o):null),s.$$.dirty&1&&t(1,n=(r=l==null?void 0:l.hostname)==null?void 0:r.replace(/^www./,""))},[l,n,o]}class fs extends R{constructor(e){super(),G(this,e,St,wt,V,{source:2})}}function Et(s){let e,t;return{c(){e=S("a"),t=U("Open"),this.h()},l(l){e=E(l,"A",{href:!0,target:!0,class:!0});var n=P(e);t=F(n,"Open"),n.forEach(h),this.h()},h(){c(e,"href",s[0]),c(e,"target","_newtab"),c(e,"class","codicon codicon-link-external svelte-10flxu9")},m(l,n){I(l,e,n),M(e,t)},p(l,[n]){n&1&&c(e,"href",l[0])},i:k,o:k,d(l){l&&h(e)}}}function At(s,e,t){let{url:l}=e;return s.$$set=n=>{"url"in n&&t(0,l=n.url)},[l]}class hs extends R{constructor(e){super(),G(this,e,At,Et,V,{url:0})}}function It(s){let e,t,l;return{c(){e=S("a"),t=S("i"),l=U(" File"),this.h()},l(n){e=E(n,"A",{href:!0,target:!0,class:!0});var o=P(e);t=E(o,"I",{class:!0}),P(t).forEach(h),l=F(o," File"),o.forEach(h),this.h()},h(){c(t,"class","codicon codicon-file"),c(e,"href",s[0]),c(e,"target","_newtab"),c(e,"class","svelte-1orztco")},m(n,o){I(n,e,o),M(e,t),M(e,l)},p(n,[o]){o&1&&c(e,"href",n[0])},i:k,o:k,d(n){n&&h(e)}}}function Tt(s,e,t){let{url:l}=e;return s.$$set=n=>{"url"in n&&t(0,l=n.url)},[l]}class _s extends R{constructor(e){super(),G(this,e,Tt,It,V,{url:0})}}function ye(s,e,t){const l=s.slice();l[4]=e[t];const n=l[1].find(function(...r){return s[3](l[4],...r)})!==void 0;return l[5]=n,l}function ve(s){let e,t;function l(){return s[2](s[5],s[4])}return e=new at({props:{tag:s[4],active:s[5]}}),e.$on("click",l),{c(){Q(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,o){x(e,n,o),t=!0},p(n,o){s=n;const r={};o&1&&(r.tag=s[4]),o&3&&(r.active=s[5]),e.$set(r)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){L(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Nt(s){let e,t,l=ne(s[0]),n=[];for(let r=0;r<l.length;r+=1)n[r]=ve(ye(s,l,r));const o=r=>L(n[r],1,1,()=>{n[r]=null});return{c(){e=S("ul");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=E(r,"UL",{class:!0});var i=P(e);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach(h),this.h()},h(){c(e,"class","tags svelte-b5q4us")},m(r,i){I(r,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);t=!0},p(r,[i]){if(i&3){l=ne(r[0]);let a;for(a=0;a<l.length;a+=1){const u=ye(r,l,a);n[a]?(n[a].p(u,i),C(n[a],1)):(n[a]=ve(u),n[a].c(),C(n[a],1),n[a].m(e,null))}for(re(),a=l.length;a<n.length;a+=1)o(a);ae()}},i(r){if(!t){for(let i=0;i<l.length;i+=1)C(n[i]);t=!0}},o(r){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)L(n[i]);t=!1},d(r){r&&h(e),Te(n,r)}}}function Dt(s,e,t){let l;Qe(s,ie,i=>t(1,l=i));let{tags:n}=e;const o=(i,a)=>i?ie.removeByName(a.name):ie.addOrReplace({...a,modifier:"+"}),r=(i,a)=>a.name===i.name;return s.$$set=i=>{"tags"in i&&t(0,n=i.tags)},[n,l,o,r]}class ds extends R{constructor(e){super(),G(this,e,Dt,Nt,V,{tags:0})}}const Me=s=>s.endsWith(".gif"),Mt=(s,e,t)=>Me(e)?{static:t,animated:e}:{static:e,animated:s},Pe=s=>s.endsWith(".mp4")||s.endsWith(".webm"),gs=(s,e,t)=>Pe(e)?{static:t,animated:e}:{static:e,animated:s},ms=s=>s.some(e=>e.name==="loop"),ps=s=>Me(s)||Pe(s),Ce=s=>(s==null?void 0:s.key)===" ",Pt=s=>(s==null?void 0:s.key)==="Enter",Le=s=>{var e,t;Pt(s)&&((t=(e=s.target)==null?void 0:e.click)==null||t.call(e))};function ke(s,e,t){const l=s.slice();return l[2]=e[t],l}function Ct(s){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function Lt(s){let e,t,l,n;const o=[Rt,Vt],r=[];function i(a,u){return a[1].length>0?0:1}return e=i(s),t=r[e]=o[e](s),{c(){t.c(),l=J()},l(a){t.l(a),l=J()},m(a,u){r[e].m(a,u),I(a,l,u),n=!0},p(a,u){let f=e;e=i(a),e===f?r[e].p(a,u):(re(),L(r[f],1,1,()=>{r[f]=null}),ae(),t=r[e],t?t.p(a,u):(t=r[e]=o[e](a),t.c()),C(t,1),t.m(l.parentNode,l))},i(a){n||(C(t),n=!0)},o(a){L(t),n=!1},d(a){a&&h(l),r[e].d(a)}}}function Vt(s){let e,t="Comments for this post are not available. <br/>This can happen if comments have been deleted.";return{c(){e=S("p"),e.innerHTML=t,this.h()},l(l){e=E(l,"P",{class:!0,"data-svelte-h":!0}),Ye(e)!=="svelte-1f9q9vq"&&(e.innerHTML=t),this.h()},h(){c(e,"class","no-comments svelte-x6zn2h")},m(l,n){I(l,e,n)},p:k,i:k,o:k,d(l){l&&h(e)}}}function Rt(s){let e,t,l=ne(s[1]),n=[];for(let r=0;r<l.length;r+=1)n[r]=we(ke(s,l,r));const o=r=>L(n[r],1,1,()=>{n[r]=null});return{c(){e=S("ul");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=E(r,"UL",{class:!0});var i=P(e);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach(h),this.h()},h(){c(e,"class","comments svelte-x6zn2h")},m(r,i){I(r,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);t=!0},p(r,i){if(i&1){l=ne(r[1]);let a;for(a=0;a<l.length;a+=1){const u=ke(r,l,a);n[a]?(n[a].p(u,i),C(n[a],1)):(n[a]=we(u),n[a].c(),C(n[a],1),n[a].m(e,null))}for(re(),a=l.length;a<n.length;a+=1)o(a);ae()}},i(r){if(!t){for(let i=0;i<l.length;i+=1)C(n[i]);t=!0}},o(r){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)L(n[i]);t=!1},d(r){r&&h(e),Te(n,r)}}}function we(s){let e,t;return e=new gt({props:{comment:s[2]}}),{c(){Q(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,n){x(e,l,n),t=!0},p(l,n){const o={};n&1&&(o.comment=l[2]),e.$set(o)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){$(e,l)}}}function Gt(s){let e,t;return e=new ot({}),{c(){Q(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,n){x(e,l,n),t=!0},p:k,i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){$(e,l)}}}function Ut(s){let e,t,l,n={ctx:s,current:null,token:null,hasCatch:!1,pending:Gt,then:Lt,catch:Ct,value:1,blocks:[,,,]};return ge(t=me(s[0].id),n),{c(){e=J(),n.block.c()},l(o){e=J(),n.block.l(o)},m(o,r){I(o,e,r),n.block.m(o,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(o,[r]){s=o,n.ctx=s,r&1&&t!==(t=me(s[0].id))&&ge(t,n)||it(n,s,r)},i(o){l||(C(n.block),l=!0)},o(o){for(let r=0;r<3;r+=1){const i=n.blocks[r];L(i)}l=!1},d(o){o&&h(e),n.block.d(o),n.token=null,n=null}}}function Ft(s,e,t){let{post:l}=e;return s.$$set=n=>{"post"in n&&t(0,l=n.post)},[l]}class bs extends R{constructor(e){super(),G(this,e,Ft,Ut,V,{post:0})}}const Ot="1250px",W=new IntersectionObserver(s=>{var e;for(const t of s){const l=t.isIntersecting?t.target.getAttribute("data-src")??"":"";(e=t==null?void 0:t.target)==null||e.setAttribute("src",l)}},{rootMargin:Ot}),Ve=s=>(W==null||W.observe(s),{destroy(){W==null||W.unobserve(s)}});function zt(s){let e,t,l,n,o,r,i,a;return{c(){e=S("div"),t=S("img"),this.h()},l(u){e=E(u,"DIV",{class:!0});var f=P(e);t=E(f,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,style:!0,width:!0,height:!0,tabindex:!0}),f.forEach(h),this.h()},h(){c(t,"class","post-media svelte-mhr4k8"),c(t,"loading","lazy"),c(t,"data-src",s[2]),c(t,"alt",l=s[0].id.toString()),c(t,"style",n=`aspect-ratio: ${s[0].width} / ${s[0].height}`),c(t,"width",o=s[0].width),c(t,"height",r=s[0].height),c(t,"tabindex","0"),c(e,"class","svelte-mhr4k8"),z(e,"expandable",s[3]),z(e,"open",s[1])},m(u,f){I(u,e,f),M(e,t),i||(a=[D(t,"click",s[4]),D(t,"keydown",Le),D(t,"error",s[5],{once:!0}),Ne(Ve.call(null,t))],i=!0)},p(u,[f]){f&4&&c(t,"data-src",u[2]),f&1&&l!==(l=u[0].id.toString())&&c(t,"alt",l),f&1&&n!==(n=`aspect-ratio: ${u[0].width} / ${u[0].height}`)&&c(t,"style",n),f&1&&o!==(o=u[0].width)&&c(t,"width",o),f&1&&r!==(r=u[0].height)&&c(t,"height",r),f&2&&z(e,"open",u[1])},i:k,o:k,d(u){u&&h(e),i=!1,ce(a)}}}function Bt(s,e,t){let l,{post:n}=e;const r=n.width/n.height<.33;let i;const a=()=>t(1,i=!i),u=f=>f.target.src=`${ee}/assets/failed-to-load.svg`;return s.$$set=f=>{"post"in f&&t(0,n=f.post)},s.$$.update=()=>{s.$$.dirty&1&&t(2,l=ct?n.file_url:n.sample_url)},[n,i,l,r,a,u]}class ys extends R{constructor(e){super(),G(this,e,Bt,zt,V,{post:0})}}const Se=s=>{if(typeof s!="number")throw new TypeError(`Attempted to call formatVideoTime with invalid value: ${s}`);const e=Math.floor(s),t=e%60,l=Math.floor(e/60);return`${Ee(l)}:${Ee(t)}`},Ee=s=>{const e=String(s),t=Math.max(0,2-e.length);return`${"0".repeat(t)}${e}`};function qt(s){let e,t;return{c(){e=S("img"),this.h()},l(l){e=E(l,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),this.h()},h(){X(e.src,t=ee+"/assets/play.svg")||c(e,"src",t),c(e,"alt","Start GIF"),c(e,"width","16"),c(e,"height","32"),oe(e,"margin-left","4px")},m(l,n){I(l,e,n)},d(l){l&&h(e)}}}function Kt(s){let e,t;return{c(){e=S("img"),this.h()},l(l){e=E(l,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){X(e.src,t=ee+"/assets/pause.svg")||c(e,"src",t),c(e,"alt","Stop GIF"),c(e,"width","16"),c(e,"height","32")},m(l,n){I(l,e,n)},d(l){l&&h(e)}}}function jt(s){let e,t;return{c(){e=S("img"),this.h()},l(l){e=E(l,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){X(e.src,t=ee+"/assets/load.svg")||c(e,"src",t),c(e,"alt","Loading GIF"),c(e,"width","16"),c(e,"height","32")},m(l,n){I(l,e,n)},d(l){l&&h(e)}}}function Ht(s){let e,t,l,n;function o(a,u){return a[1]?jt:a[0]?Kt:qt}let r=o(s),i=r(s);return{c(){e=S("button"),i.c(),this.h()},l(a){e=E(a,"BUTTON",{type:!0,class:!0});var u=P(e);i.l(u),u.forEach(h),this.h()},h(){c(e,"type","button"),c(e,"class",t=ue(s[2].class)+" svelte-1hltap9")},m(a,u){I(a,e,u),i.m(e,null),l||(n=D(e,"click",s[3]),l=!0)},p(a,[u]){r!==(r=o(a))&&(i.d(1),i=r(a),i&&(i.c(),i.m(e,null))),u&4&&t!==(t=ue(a[2].class)+" svelte-1hltap9")&&c(e,"class",t)},i:k,o:k,d(a){a&&h(e),i.d(),l=!1,n()}}}function Wt(s,e,t){let{playing:l}=e,{loading:n}=e;function o(r){De.call(this,s,r)}return s.$$set=r=>{t(2,e=te(te({},e),se(r))),"playing"in r&&t(0,l=r.playing),"loading"in r&&t(1,n=r.loading)},e=se(e),[l,n,e,o]}class Re extends R{constructor(e){super(),G(this,e,Wt,Ht,V,{playing:0,loading:1})}}function Ae(s){let e,t,l,n=!0,o=!1,r,i,a,u=Se(s[16])+"",f,A,g,w,m,T,p,d,N;function b(){cancelAnimationFrame(r),e.paused||(r=lt(b),o=!0),s[24].call(e)}return T=new Re({props:{playing:s[5],loading:s[6],class:`center hidable ${s[13]?"hide":""}`}}),T.$on("click",s[19]),{c(){e=S("video"),i=B(),a=S("span"),f=U(u),A=B(),g=S("input"),m=B(),Q(T.$$.fragment),this.h()},l(_){e=E(_,"VIDEO",{tabindex:!0,poster:!0,src:!0,preload:!0,style:!0,class:!0}),P(e).forEach(h),i=q(_),a=E(_,"SPAN",{class:!0});var v=P(a);f=F(v,u),v.forEach(h),A=q(_),g=E(_,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0,style:!0}),m=q(_),Y(T.$$.fragment,_),this.h()},h(){c(e,"tabindex","0"),c(e,"poster",s[1]),e.loop=s[4],X(e.src,t=s[0])||c(e,"src",t),c(e,"preload","metadata"),c(e,"style",l=`aspect-ratio: ${s[2]} / ${s[3]}`),c(e,"class","svelte-1gflgx6"),s[8]===void 0&&et(()=>s[25].call(e)),c(a,"class","hidable svelte-1gflgx6"),z(a,"hide",s[10]),c(g,"type","range"),c(g,"min",0),c(g,"max",s[8]),c(g,"step",.0166666),c(g,"class","hidable svelte-1gflgx6"),c(g,"style",w=`background-image: linear-gradient(90deg, var(--accent) ${s[14]}%, var(--background-2) ${s[14]}%);}`),z(g,"hide",s[13])},m(_,v){I(_,e,v),s[22](e),I(_,i,v),I(_,a,v),M(a,f),I(_,A,v),I(_,g,v),fe(g,s[7]),I(_,m,v),x(T,_,v),p=!0,d||(N=[D(e,"play",s[23]),D(e,"pause",s[23]),D(e,"timeupdate",b),D(e,"durationchange",s[25]),D(e,"waiting",s[26]),D(e,"playing",s[27]),D(e,"pause",s[28]),D(e,"ended",s[29]),D(e,"click",s[20]),D(e,"dblclick",tt(st(s[17]))),D(g,"change",s[30]),D(g,"input",s[30])],d=!0)},p(_,v){(!p||v[0]&2)&&c(e,"poster",_[1]),(!p||v[0]&16)&&(e.loop=_[4]),(!p||v[0]&1&&!X(e.src,t=_[0]))&&c(e,"src",t),(!p||v[0]&12&&l!==(l=`aspect-ratio: ${_[2]} / ${_[3]}`))&&c(e,"style",l),v[0]&32768&&n!==(n=_[15])&&e[n?"pause":"play"](),!o&&v[0]&128&&!isNaN(_[7])&&(e.currentTime=_[7]),o=!1,(!p||v[0]&65536)&&u!==(u=Se(_[16])+"")&&O(f,u),(!p||v[0]&1024)&&z(a,"hide",_[10]),(!p||v[0]&256)&&c(g,"max",_[8]),(!p||v[0]&16384&&w!==(w=`background-image: linear-gradient(90deg, var(--accent) ${_[14]}%, var(--background-2) ${_[14]}%);}`))&&c(g,"style",w),v[0]&128&&fe(g,_[7]),(!p||v[0]&8192)&&z(g,"hide",_[13]);const K={};v[0]&32&&(K.playing=_[5]),v[0]&64&&(K.loading=_[6]),v[0]&8192&&(K.class=`center hidable ${_[13]?"hide":""}`),T.$set(K)},i(_){p||(C(T.$$.fragment,_),p=!0)},o(_){L(T.$$.fragment,_),p=!1},d(_){_&&(h(e),h(i),h(a),h(A),h(g),h(m)),s[22](null),$(T,_),d=!1,ce(N)}}}function Jt(s){let e,t,l,n,o,r=s[9]&&Ae(s);return{c(){e=S("div"),r&&r.c(),this.h()},l(i){e=E(i,"DIV",{class:!0,style:!0});var a=P(e);r&&r.l(a),a.forEach(h),this.h()},h(){c(e,"class",t="post-media player "+s[21].class+" svelte-1gflgx6"),oe(e,"aspect-ratio",s[2]+"/"+s[3])},m(i,a){I(i,e,a),r&&r.m(e,null),s[31](e),l=!0,n||(o=D(e,"keydown",s[18]),n=!0)},p(i,a){i[9]?r?(r.p(i,a),a[0]&512&&C(r,1)):(r=Ae(i),r.c(),C(r,1),r.m(e,null)):r&&(re(),L(r,1,1,()=>{r=null}),ae()),(!l||a[0]&2097152&&t!==(t="post-media player "+i[21].class+" svelte-1gflgx6"))&&c(e,"class",t),(!l||a[0]&12)&&oe(e,"aspect-ratio",i[2]+"/"+i[3])},i(i){l||(C(r),l=!0)},o(i){L(r),l=!1},d(i){i&&h(e),r&&r.d(),s[31](null),n=!1,o()}}}const Ie=5;function Xt(s,e,t){let l,n,o,r,{src:i}=e,{poster:a}=e,{width:u}=e,{height:f}=e,{loop:A}=e,g,w,m=!1,T=!1,p=0,d=0,N=!1,b=!1;const _=()=>{t(7,p=Math.max(0,p-Ie))},v=()=>{t(7,p=Math.min(d,p+Ie))},K=y=>{y.offsetX<y.target.clientWidth/2?_():v()},Ge=y=>{Ce(y)||y.key==="k"?(y.preventDefault(),t(5,m=!m)):y.key==="ArrowLeft"||y.key==="j"?_():(y.key==="ArrowRight"||y.key==="l")&&v()},j=new IntersectionObserver(y=>{for(const Ze of y)Ze.isIntersecting?t(9,N=!0):w&&(t(5,m=!1),t(6,T=!1),w.addEventListener("error",()=>{t(9,N=!1)},{once:!0}),t(12,w.src="",w))},{rootMargin:"0px"}),Ue=()=>{t(5,m=!m),t(6,T=!0),t(10,b=m)},Fe=()=>{t(10,b=!b)};xe(()=>j==null?void 0:j.observe(g)),$e(()=>j==null?void 0:j.unobserve(g));function Oe(y){Z[y?"unshift":"push"](()=>{w=y,t(12,w)})}function ze(){n=this.paused,t(15,n),t(5,m),t(9,N)}function Be(){p=this.currentTime,t(7,p)}function qe(){d=this.duration,t(8,d)}const Ke=()=>t(6,T=!0),je=()=>t(6,T=!1),He=()=>t(6,T=!1),We=()=>{A||(t(6,T=!1),t(5,m=!1))};function Je(){p=nt(this.value),t(7,p)}function Xe(y){Z[y?"unshift":"push"](()=>{g=y,t(11,g)})}return s.$$set=y=>{t(21,e=te(te({},e),se(y))),"src"in y&&t(0,i=y.src),"poster"in y&&t(1,a=y.poster),"width"in y&&t(2,u=y.width),"height"in y&&t(3,f=y.height),"loop"in y&&t(4,A=y.loop)},s.$$.update=()=>{s.$$.dirty[0]&384&&t(16,l=d-p),s.$$.dirty[0]&544&&t(5,m=N&&m),s.$$.dirty[0]&32&&t(15,n=!m),s.$$.dirty[0]&384&&t(14,o=p/d*98+1),s.$$.dirty[0]&1120&&t(13,r=m&&!T&&b)},e=se(e),[i,a,u,f,A,m,T,p,d,N,b,g,w,r,o,n,l,K,Ge,Ue,Fe,e,Oe,ze,Be,qe,Ke,je,He,We,Je,Xe]}class vs extends R{constructor(e){super(),G(this,e,Xt,Jt,V,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function Zt(s){let e,t,l,n,o,r,i,a,u,f,A,g,w;function m(d){s[13](d)}function T(d){s[14](d)}let p={class:"center"};return s[2]!==void 0&&(p.playing=s[2]),s[3]!==void 0&&(p.loading=s[3]),i=new Re({props:p}),Z.push(()=>_e(i,"playing",m)),Z.push(()=>_e(i,"loading",T)),i.$on("click",s[15]),{c(){e=S("div"),t=S("img"),r=B(),Q(i.$$.fragment),this.h()},l(d){e=E(d,"DIV",{class:!0,style:!0});var N=P(e);t=E(N,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,width:!0,height:!0,tabindex:!0}),r=q(N),Y(i.$$.fragment,N),N.forEach(h),this.h()},h(){c(t,"class","post-media media-img svelte-158nmsy"),c(t,"loading","lazy"),c(t,"data-src",s[4]),c(t,"alt",l=s[0].id.toString()),c(t,"width",n=s[0].width),c(t,"height",o=s[0].height),c(t,"tabindex","0"),c(e,"class","container svelte-158nmsy"),c(e,"style",f=`aspect-ratio: ${s[0].width} / ${s[0].height}`)},m(d,N){I(d,e,N),M(e,t),s[9](t),M(e,r),x(i,e,null),A=!0,g||(w=[D(t,"click",s[8]),D(t,"keydown",s[10]),D(t,"load",s[11]),D(t,"error",s[12],{once:!0}),Ne(Ve.call(null,t))],g=!0)},p(d,[N]){(!A||N&16)&&c(t,"data-src",d[4]),(!A||N&1&&l!==(l=d[0].id.toString()))&&c(t,"alt",l),(!A||N&1&&n!==(n=d[0].width))&&c(t,"width",n),(!A||N&1&&o!==(o=d[0].height))&&c(t,"height",o);const b={};!a&&N&4&&(a=!0,b.playing=d[2],he(()=>a=!1)),!u&&N&8&&(u=!0,b.loading=d[3],he(()=>u=!1)),i.$set(b),(!A||N&1&&f!==(f=`aspect-ratio: ${d[0].width} / ${d[0].height}`))&&c(e,"style",f)},i(d){A||(C(i.$$.fragment,d),A=!0)},o(d){L(i.$$.fragment,d),A=!1},d(d){d&&h(e),s[9](null),$(i),g=!1,ce(w)}}}function Qt(s,e,t){let l,n,o,r,{post:i}=e,a,u=!1,f=!1;function A(b){De.call(this,s,b)}function g(b){Z[b?"unshift":"push"](()=>{a=b,t(1,a),t(2,u),t(6,n),t(5,o),t(7,l),t(0,i)})}const w=b=>{Le(b),Ce(b)&&(b.preventDefault(),t(3,f=!0),t(2,u=!u))},m=()=>t(3,f=!1),T=b=>{t(3,f=!1),b.target.src=`${ee}/assets/failed-to-load.svg`};function p(b){u=b,t(2,u)}function d(b){f=b,t(3,f)}const N=()=>{t(3,f=!0),t(2,u=!u)};return s.$$set=b=>{"post"in b&&t(0,i=b.post)},s.$$.update=()=>{s.$$.dirty&1&&t(7,l=Mt(i.file_url,i.sample_url,i.preview_url)),s.$$.dirty&128&&t(6,n=l.animated),s.$$.dirty&128&&t(5,o=l.static),s.$$.dirty&100&&t(4,r=u?n:o),s.$$.dirty&102&&a&&t(1,a.src=u?n:o,a)},[i,a,u,f,r,o,n,l,A,g,w,m,T,p,d,N]}class ks extends R{constructor(e){super(),G(this,e,Qt,Zt,V,{post:0})}}export{gt as C,fs as E,ks as G,ys as I,hs as K,ds as P,os as R,us as S,vs as V,cs as a,_s as b,Mt as c,gs as d,Pt as e,ms as f,me as g,bs as h,ps as i};
