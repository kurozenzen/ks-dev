import{s as d,f as p,g as v,y as m,j as r,z as c,i as _,H as f,v as u,d as h,o as b,M as g}from"./scheduler.876e21ab.js";import{S as w,i as y}from"./index.bf870a3d.js";function k(o){let e,n='<i class="codicon codicon-arrow-up"></i>',s,l;return{c(){e=p("button"),e.innerHTML=n,this.h()},l(t){e=v(t,"BUTTON",{"aria-label":!0,title:!0,class:!0,"data-svelte-h":!0}),m(e)!=="svelte-13h9sra"&&(e.innerHTML=n),this.h()},h(){r(e,"aria-label","back to top"),r(e,"title","Go back up"),r(e,"class","svelte-1g9au4l"),c(e,"visible",o[0])},m(t,i){_(t,e,i),s||(l=f(e,"click",o[1]),s=!0)},p(t,[i]){i&1&&c(e,"visible",t[0])},i:u,o:u,d(t){t&&h(e),s=!1,l()}}}function H(o,e,n){let s=0,l=!1;const t=()=>{const a=window.scrollY;n(0,l=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return b(()=>{document.addEventListener("scroll",t,{passive:!0})}),g(()=>{document.removeEventListener("scroll",t)}),[l,()=>window.scrollTo(0,0)]}class L extends w{constructor(e){super(),y(this,e,H,k,d,{})}}export{L as S};
