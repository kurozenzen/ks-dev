import{s as h,f as g,l as v,g as p,h as b,m as T,d as m,j as r,r as _,M as u,i as S,u as y,F as k,n as x,v as f,N as C}from"./scheduler.0a29c992.js";import{S as N,i as E}from"./index.6d8df040.js";import{a as d}from"./format-tag.7e313273.js";import{T as I}from"./tag-type-data.934b5280.js";function O(a){let t,s=d(a[0].name)+"",l,i,o,c;return{c(){t=g("button"),l=v(s),this.h()},l(e){t=p(e,"BUTTON",{tabindex:!0,title:!0,class:!0});var n=b(t);l=T(n,s),n.forEach(m),this.h()},h(){r(t,"tabindex","0"),r(t,"title","Click to add tag"),r(t,"class",i=_(a[2])+" svelte-1afdxs"),u(t,"active",a[1])},m(e,n){S(e,t,n),y(t,l),o||(c=k(t,"click",a[3]),o=!0)},p(e,[n]){n&1&&s!==(s=d(e[0].name)+"")&&x(l,s),n&4&&i!==(i=_(e[2])+" svelte-1afdxs")&&r(t,"class",i),n&6&&u(t,"active",e[1])},i:f,o:f,d(e){e&&m(t),o=!1,c()}}}function j(a,t,s){let l,{tag:i}=t,{active:o=!1}=t;function c(e){C.call(this,a,e)}return a.$$set=e=>{"tag"in e&&s(0,i=e.tag),"active"in e&&s(1,o=e.active)},a.$$.update=()=>{a.$$.dirty&1&&s(2,l=I[i.type]??"no-icon")},[i,o,l,c]}class G extends N{constructor(t){super(),E(this,t,j,O,h,{tag:0,active:1})}}export{G as S};