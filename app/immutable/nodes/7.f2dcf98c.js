import{s as L,a as w,f as P,x as C,d as p,c as y,g as D,h as I,j as V,i as k,C as E,e as b,v as c}from"../chunks/scheduler.85675055.js";import{h as G,u as N}from"../chunks/await_block.0dccef1e.js";import{S,i as j,a as f,t as u,b as _,d,m as $,e as h}from"../chunks/index.ea0af91c.js";import{D as q,G as A,V as R,f as v,I as U}from"../chunks/Gif.a190356a.js";import{L as z}from"../chunks/LoadingAnimation.35c83be1.js";import{g as B}from"../chunks/active-tags-store.34c52565.js";import{a as F}from"../chunks/always-loop-store.4abde366.js";function H(a){let t,n,e={ctx:a,current:null,token:null,hasCatch:!1,pending:T,then:K,catch:J,value:3,blocks:[,,,]};return G(B(a[1]),e),{c(){t=b(),e.block.c()},l(r){t=b(),e.block.l(r)},m(r,o){k(r,t,o),e.block.m(r,e.anchor=o),e.mount=()=>t.parentNode,e.anchor=t,n=!0},p(r,o){a=r,N(e,a,o)},i(r){n||(f(e.block),n=!0)},o(r){for(let o=0;o<3;o+=1){const s=e.blocks[o];u(s)}n=!1},d(r){r&&p(t),e.block.d(r),e.token=null,e=null}}}function J(a){return{c,l:c,m:c,p:c,i:c,o:c,d:c}}function K(a){let t,n,e,r,o;const s=[Q,O,M],i=[];function g(l,m){return l[3].type==="image"?0:l[3].type==="video"?1:2}return t=g(a),n=i[t]=s[t](a),r=new q({props:{post:a[3]}}),{c(){n.c(),e=w(),_(r.$$.fragment)},l(l){n.l(l),e=y(l),d(r.$$.fragment,l)},m(l,m){i[t].m(l,m),k(l,e,m),$(r,l,m),o=!0},p(l,m){n.p(l,m)},i(l){o||(f(n),f(r.$$.fragment,l),o=!0)},o(l){u(n),u(r.$$.fragment,l),o=!1},d(l){l&&p(e),i[t].d(l),h(r,l)}}}function M(a){let t,n;return t=new A({props:{post:a[3]}}),{c(){_(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){$(t,e,r),n=!0},p:c,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function O(a){let t,n;return t=new R({props:{src:a[3].file_url,poster:a[3].sample_url,width:a[3].width,height:a[3].height,loop:a[0]||v(a[3].tags)}}),{c(){_(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){$(t,e,r),n=!0},p(e,r){const o={};r&1&&(o.loop=e[0]||v(e[3].tags)),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Q(a){let t,n;return t=new U({props:{post:a[3],open:!0}}),{c(){_(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){$(t,e,r),n=!0},p:c,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function T(a){let t,n;return t=new z({}),{c(){_(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){$(t,e,r),n=!0},p:c,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function W(a){let t,n,e,r;document.title=t="kurosearch - Post "+a[1];let o=a[1]&&H(a);return{c(){n=w(),e=P("div"),o&&o.c(),this.h()},l(s){C("svelte-47uot9",document.head).forEach(p),n=y(s),e=D(s,"DIV",{class:!0});var g=I(e);o&&o.l(g),g.forEach(p),this.h()},h(){V(e,"class","svelte-1exuhkk")},m(s,i){k(s,n,i),k(s,e,i),o&&o.m(e,null),r=!0},p(s,[i]){(!r||i&2)&&t!==(t="kurosearch - Post "+s[1])&&(document.title=t),s[1]&&o.p(s,i)},i(s){r||(f(o),r=!0)},o(s){u(o),r=!1},d(s){s&&(p(n),p(e)),o&&o.d()}}}function X(a,t,n){let e;E(a,F,s=>n(0,e=s));const r=new URL(location.href),o=r&&r.searchParams.has("id")?Number(r.searchParams.get("id")):void 0;return[e,o]}class oe extends S{constructor(t){super(),j(this,t,X,W,L,{})}}export{oe as component};
