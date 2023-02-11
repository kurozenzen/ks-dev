import{N as R,S as j,i as y,s as L,O as U,e as P,y as d,k as w,g as k,a as S,b as h,z as m,h as _,j as T,P as V,Q as W,R as X,m as p,v as g,d as v,A as $,T as E,U as q,l as F,c as C,w as G,V as I,J as D,W as O,X as K,B,C as J,D as N}from"./index.5e9e9503.js";import{P as Y,a as Z}from"./ParagraphHeading.8ff4e0c1.js";const H=R("isPersistedLocally",!1);function x(l){let e;return{c(){e=k(l[0])},m(s,o){h(s,e,o)},p(s,o){o&1&&T(e,s[0])},d(s){s&&v(e)}}}function ee(l){let e,s,o,r,a,t,i;s=new Y({props:{$$slots:{default:[x]},$$scope:{ctx:l}}});const n=l[2].default,c=U(n,l,l[3],null);return{c(){e=P("div"),d(s.$$.fragment),o=w(),r=P("p"),a=k(l[1]),t=w(),c&&c.c(),S(r,"class","svelte-6x698v")},m(u,f){h(u,e,f),m(s,e,null),_(e,o),_(e,r),_(r,a),_(e,t),c&&c.m(e,null),i=!0},p(u,[f]){const b={};f&9&&(b.$$scope={dirty:f,ctx:u}),s.$set(b),(!i||f&2)&&T(a,u[1]),c&&c.p&&(!i||f&8)&&V(c,n,u,u[3],i?X(n,u[3],f,null):W(u[3]),null)},i(u){i||(p(s.$$.fragment,u),p(c,u),i=!0)},o(u){g(s.$$.fragment,u),g(c,u),i=!1},d(u){u&&v(e),$(s),c&&c.d(u)}}}function te(l,e,s){let{$$slots:o={},$$scope:r}=e,{title:a}=e,{description:t}=e;return l.$$set=i=>{"title"in i&&s(0,a=i.title),"description"in i&&s(1,t=i.description),"$$scope"in i&&s(3,r=i.$$scope)},[a,t,o,r]}class M extends j{constructor(e){super(),y(this,e,te,ee,L,{title:0,description:1})}}function z(l,e,s){const o=l.slice();return o[0]=e[s][0],o[3]=e[s][1],o}function A(l){let e,s=l[3]+"",o,r;return{c(){e=P("option"),o=k(s),e.__value=r=l[0],e.value=e.__value,S(e,"class","svelte-q7wjrm")},m(a,t){h(a,e,t),_(e,o)},p(a,t){t&2&&s!==(s=a[3]+"")&&T(o,s),t&2&&r!==(r=a[0])&&(e.__value=r,e.value=e.__value)},d(a){a&&v(e)}}}function se(l){let e,s,o,r=Object.entries(l[1]),a=[];for(let t=0;t<r.length;t+=1)a[t]=A(z(l,r,t));return{c(){e=P("select");for(let t=0;t<a.length;t+=1)a[t].c();S(e,"class","svelte-q7wjrm"),l[0]===void 0&&E(()=>l[2].call(e))},m(t,i){h(t,e,i);for(let n=0;n<a.length;n+=1)a[n].m(e,null);q(e,l[0]),s||(o=F(e,"change",l[2]),s=!0)},p(t,[i]){if(i&2){r=Object.entries(t[1]);let n;for(n=0;n<r.length;n+=1){const c=z(t,r,n);a[n]?a[n].p(c,i):(a[n]=A(c),a[n].c(),a[n].m(e,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}i&3&&q(e,t[0])},i:C,o:C,d(t){t&&v(e),G(a,t),s=!1,o()}}}function ne(l,e,s){let{options:o}=e,{value:r}=e;function a(){r=I(this),s(0,r),s(1,o)}return l.$$set=t=>{"options"in t&&s(1,o=t.options),"value"in t&&s(0,r=t.value)},[r,o,a]}class Q extends j{constructor(e){super(),y(this,e,ne,se,L,{options:1,value:0})}}function le(l){let e;return{c(){e=k("Preferences")},m(s,o){h(s,e,o)},d(s){s&&v(e)}}}function ae(l){let e,s,o;function r(t){l[2](t)}let a={options:{dark:"Dark Mode",light:"Light Mode"}};return l[1]!==void 0&&(a.value=l[1]),e=new Q({props:a}),B.push(()=>J(e,"value",r)),{c(){d(e.$$.fragment)},m(t,i){m(e,t,i),o=!0},p(t,i){const n={};!s&&i&2&&(s=!0,n.value=t[1],N(()=>s=!1)),e.$set(n)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function oe(l){let e,s,o;function r(t){l[3](t)}let a={options:{true:"Save",false:"Don't Save"}};return l[0]!==void 0&&(a.value=l[0]),e=new Q({props:a}),B.push(()=>J(e,"value",r)),{c(){d(e.$$.fragment)},m(t,i){m(e,t,i),o=!0},p(t,i){const n={};!s&&i&1&&(s=!0,n.value=t[0],N(()=>s=!1)),e.$set(n)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function re(l){let e,s,o,r,a,t,i;return s=new Z({props:{$$slots:{default:[le]},$$scope:{ctx:l}}}),r=new M({props:{title:"Theme",description:"Change the look of the app.",$$slots:{default:[ae]},$$scope:{ctx:l}}}),t=new M({props:{title:"Save Tags & Posts",description:"Tags and posts will be saved when you close the app.",$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){e=P("section"),d(s.$$.fragment),o=w(),d(r.$$.fragment),a=w(),d(t.$$.fragment),S(e,"class","svelte-1aujty7")},m(n,c){h(n,e,c),m(s,e,null),_(e,o),m(r,e,null),_(e,a),m(t,e,null),i=!0},p(n,[c]){const u={};c&32&&(u.$$scope={dirty:c,ctx:n}),s.$set(u);const f={};c&34&&(f.$$scope={dirty:c,ctx:n}),r.$set(f);const b={};c&33&&(b.$$scope={dirty:c,ctx:n}),t.$set(b)},i(n){i||(p(s.$$.fragment,n),p(r.$$.fragment,n),p(t.$$.fragment,n),i=!0)},o(n){g(s.$$.fragment,n),g(r.$$.fragment,n),g(t.$$.fragment,n),i=!1},d(n){n&&v(e),$(s),$(r),$(t)}}}function ie(l,e,s){let o,r;D(l,H,n=>s(4,o=n)),D(l,O,n=>s(1,r=n));let a=o?"true":"false";function t(n){r=n,O.set(r)}function i(n){a=n,s(0,a)}return l.$$.update=()=>{l.$$.dirty&1&&K(H,o=a==="true",o)},[a,r,t,i]}class fe extends j{constructor(e){super(),y(this,e,ie,re,L,{})}}export{fe as default};