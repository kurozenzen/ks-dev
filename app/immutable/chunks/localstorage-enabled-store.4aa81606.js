import{s as z,p as A,E as B,F,N as H,f as T,a as k,l as S,g as j,h as q,c as L,m as D,d as _,j as I,i as E,u as d,n as v}from"./scheduler.876e21ab.js";import{S as K,i as V,f as W,b,d as p,m as $,a as h,t as C,e as w}from"./index.bf870a3d.js";import{D as G}from"./result-columns-store.d28c04bd.js";import{a as J}from"./Heading3.54b50ad8.js";import{T as y}from"./TextButton.e107ec77.js";import{p as M,S as O,b as Q,a as R}from"./store-keys.b8cbd8ca.js";function U(a){let e;return{c(){e=S(a[1])},l(t){e=D(t,a[1])},m(t,n){E(t,e,n)},p(t,n){n&2&&v(e,t[1])},d(t){t&&_(e)}}}function X(a){let e;return{c(){e=S(a[3])},l(t){e=D(t,a[3])},m(t,n){E(t,e,n)},p(t,n){n&8&&v(e,t[3])},d(t){t&&_(e)}}}function Y(a){let e;return{c(){e=S(a[4])},l(t){e=D(t,a[4])},m(t,n){E(t,e,n)},p(t,n){n&16&&v(e,t[4])},d(t){t&&_(e)}}}function Z(a){let e,t,n,c,g,l,r,m,f,u;return t=new J({props:{$$slots:{default:[U]},$$scope:{ctx:a}}}),r=new y({props:{title:"Delete supertag",$$slots:{default:[X]},$$scope:{ctx:a}}}),r.$on("click",a[5]),f=new y({props:{type:"secondary",title:"Cancel",$$slots:{default:[Y]},$$scope:{ctx:a}}}),f.$on("click",a[6]),{c(){e=T("div"),b(t.$$.fragment),n=k(),c=T("span"),g=S(a[2]),l=k(),b(r.$$.fragment),m=k(),b(f.$$.fragment),this.h()},l(s){e=j(s,"DIV",{class:!0});var i=q(e);p(t.$$.fragment,i),n=L(i),c=j(i,"SPAN",{});var o=q(c);g=D(o,a[2]),o.forEach(_),l=L(i),p(r.$$.fragment,i),m=L(i),p(f.$$.fragment,i),i.forEach(_),this.h()},h(){I(e,"class","svelte-16w96ry")},m(s,i){E(s,e,i),$(t,e,null),d(e,n),d(e,c),d(c,g),d(e,l),$(r,e,null),d(e,m),$(f,e,null),u=!0},p(s,i){const o={};i&1026&&(o.$$scope={dirty:i,ctx:s}),t.$set(o),(!u||i&4)&&v(g,s[2]);const N={};i&1032&&(N.$$scope={dirty:i,ctx:s}),r.$set(N);const P={};i&1040&&(P.$$scope={dirty:i,ctx:s}),f.$set(P)},i(s){u||(h(t.$$.fragment,s),h(r.$$.fragment,s),h(f.$$.fragment,s),u=!0)},o(s){C(t.$$.fragment,s),C(r.$$.fragment,s),C(f.$$.fragment,s),u=!1},d(s){s&&_(e),w(t),w(r),w(f)}}}function x(a){let e,t,n;function c(l){a[7](l)}let g={$$slots:{default:[Z]},$$scope:{ctx:a}};return a[0]!==void 0&&(g.dialog=a[0]),e=new G({props:g}),A.push(()=>W(e,"dialog",c)),e.$on("close",a[8]),{c(){b(e.$$.fragment)},l(l){p(e.$$.fragment,l)},m(l,r){$(e,l,r),n=!0},p(l,[r]){const m={};r&1055&&(m.$$scope={dirty:r,ctx:l}),!t&&r&1&&(t=!0,m.dialog=l[0],B(()=>t=!1)),e.$set(m)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){C(e.$$.fragment,l),n=!1},d(l){w(e,l)}}}function ee(a,e,t){let{dialog:n}=e,{title:c}=e,{warning:g}=e,{labelConfirm:l}=e,{labelCancel:r}=e;const m=F(),f=()=>{m("confirm"),n.close()},u=()=>n.close();function s(o){n=o,t(0,n)}function i(o){H.call(this,a,o)}return a.$$set=o=>{"dialog"in o&&t(0,n=o.dialog),"title"in o&&t(1,c=o.title),"warning"in o&&t(2,g=o.warning),"labelConfirm"in o&&t(3,l=o.labelConfirm),"labelCancel"in o&&t(4,r=o.labelCancel)},[n,c,g,l,r,f,u,s,i]}class re extends K{constructor(e){super(),V(this,e,ee,x,z,{dialog:0,title:1,warning:2,labelConfirm:3,labelCancel:4})}}const te=()=>{const{subscribe:e,set:t}=M(O.LocalstorageEnabled,!1,R,Q);return{subscribe:e,set:t,reset:()=>t(!1)}},fe=te();export{re as C,fe as l};
