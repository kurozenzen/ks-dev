import{K as V,N as z,S as P,i as j,s as O,O as A,e as h,y as $,k as w,g as k,a as S,b as _,z as v,h as d,j as T,P as B,Q as E,R as J,m as g,v as m,d as p,A as b,T as K,U as C,l as N,c as D,w as Q,V as R,J as U,B as F,C as G,D as I}from"./index.ab88e340.js";import{P as W,a as X}from"./ParagraphHeading.e6049e71.js";const{subscribe:Y,set:Z}=z("dark"),H={subscribe:Y,set(l){Z(l),y(l),V.setTheme(l)}},y=l=>{document.documentElement.classList.replace(x(l),l)},x=l=>l==="dark"?"light":"dark";function ee(l){let e;return{c(){e=k(l[0])},m(s,a){_(s,e,a)},p(s,a){a&1&&T(e,s[0])},d(s){s&&p(e)}}}function te(l){let e,s,a,o,t,n,i;s=new W({props:{$$slots:{default:[ee]},$$scope:{ctx:l}}});const r=l[2].default,u=A(r,l,l[3],null);return{c(){e=h("div"),$(s.$$.fragment),a=w(),o=h("p"),t=k(l[1]),n=w(),u&&u.c(),S(o,"class","svelte-6x698v")},m(c,f){_(c,e,f),v(s,e,null),d(e,a),d(e,o),d(o,t),d(e,n),u&&u.m(e,null),i=!0},p(c,[f]){const q={};f&9&&(q.$$scope={dirty:f,ctx:c}),s.$set(q),(!i||f&2)&&T(t,c[1]),u&&u.p&&(!i||f&8)&&B(u,r,c,c[3],i?J(r,c[3],f,null):E(c[3]),null)},i(c){i||(g(s.$$.fragment,c),g(u,c),i=!0)},o(c){m(s.$$.fragment,c),m(u,c),i=!1},d(c){c&&p(e),b(s),u&&u.d(c)}}}function ne(l,e,s){let{$$slots:a={},$$scope:o}=e,{title:t}=e,{description:n}=e;return l.$$set=i=>{"title"in i&&s(0,t=i.title),"description"in i&&s(1,n=i.description),"$$scope"in i&&s(3,o=i.$$scope)},[t,n,a,o]}class se extends P{constructor(e){super(),j(this,e,ne,te,O,{title:0,description:1})}}function L(l,e,s){const a=l.slice();return a[0]=e[s][0],a[3]=e[s][1],a}function M(l){let e,s=l[3]+"",a,o;return{c(){e=h("option"),a=k(s),e.__value=o=l[0],e.value=e.__value,S(e,"class","svelte-q7wjrm")},m(t,n){_(t,e,n),d(e,a)},p(t,n){n&2&&s!==(s=t[3]+"")&&T(a,s),n&2&&o!==(o=t[0])&&(e.__value=o,e.value=e.__value)},d(t){t&&p(e)}}}function le(l){let e,s,a,o=Object.entries(l[1]),t=[];for(let n=0;n<o.length;n+=1)t[n]=M(L(l,o,n));return{c(){e=h("select");for(let n=0;n<t.length;n+=1)t[n].c();S(e,"class","svelte-q7wjrm"),l[0]===void 0&&K(()=>l[2].call(e))},m(n,i){_(n,e,i);for(let r=0;r<t.length;r+=1)t[r].m(e,null);C(e,l[0]),s||(a=N(e,"change",l[2]),s=!0)},p(n,[i]){if(i&2){o=Object.entries(n[1]);let r;for(r=0;r<o.length;r+=1){const u=L(n,o,r);t[r]?t[r].p(u,i):(t[r]=M(u),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=o.length}i&3&&C(e,n[0])},i:D,o:D,d(n){n&&p(e),Q(t,n),s=!1,a()}}}function ae(l,e,s){let{options:a}=e,{value:o}=e;function t(){o=R(this),s(0,o),s(1,a)}return l.$$set=n=>{"options"in n&&s(1,a=n.options),"value"in n&&s(0,o=n.value)},[o,a,t]}class oe extends P{constructor(e){super(),j(this,e,ae,le,O,{options:1,value:0})}}function ie(l){let e;return{c(){e=k("Preferences")},m(s,a){_(s,e,a)},d(s){s&&p(e)}}}function re(l){let e,s,a;function o(n){l[1](n)}let t={options:{dark:"Dark Mode",light:"Light Mode"}};return l[0]!==void 0&&(t.value=l[0]),e=new oe({props:t}),F.push(()=>G(e,"value",o)),{c(){$(e.$$.fragment)},m(n,i){v(e,n,i),a=!0},p(n,i){const r={};!s&&i&1&&(s=!0,r.value=n[0],I(()=>s=!1)),e.$set(r)},i(n){a||(g(e.$$.fragment,n),a=!0)},o(n){m(e.$$.fragment,n),a=!1},d(n){b(e,n)}}}function ce(l){let e,s,a,o;return e=new X({props:{$$slots:{default:[ie]},$$scope:{ctx:l}}}),a=new se({props:{title:"Theme",description:"Change the look of the app.",$$slots:{default:[re]},$$scope:{ctx:l}}}),{c(){$(e.$$.fragment),s=w(),$(a.$$.fragment)},m(t,n){v(e,t,n),_(t,s,n),v(a,t,n),o=!0},p(t,[n]){const i={};n&4&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const r={};n&5&&(r.$$scope={dirty:n,ctx:t}),a.$set(r)},i(t){o||(g(e.$$.fragment,t),g(a.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),m(a.$$.fragment,t),o=!1},d(t){b(e,t),t&&p(s),b(a,t)}}}function ue(l,e,s){let a;U(l,H,t=>s(0,a=t));function o(t){a=t,H.set(a)}return[a,o]}class pe extends P{constructor(e){super(),j(this,e,ue,ce,O,{})}}export{pe as default};
