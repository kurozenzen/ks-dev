import{s as m,l,m as d,i as _,n as g,d as p}from"./scheduler.6c5d9662.js";import{S as b,i as h,b as x,d as y,m as O,a as S,t as j,e as k}from"./index.8c724fb2.js";import{I}from"./ModifierSelect.2537b61e.js";function R(o){let e;return{c(){e=l(o[1])},l(n){e=d(n,o[1])},m(n,t){_(n,e,t)},p(n,t){t&2&&g(e,n[1])},d(n){n&&p(e)}}}function q(o){let e,n;return e=new I({props:{id:o[0],$$slots:{default:[R]},$$scope:{ctx:o}}}),e.$on("click",o[2]),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,i){O(e,t,i),n=!0},p(t,[i]){const s={};i&1&&(s.id=t[0]),i&130&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function w(o,e,n){let t,i,s,{options:r}=e,{value:c}=e,{id:u=void 0}=e;const f=()=>{n(5,t=(t+1)%i.length),n(3,c=i[t][0])};return o.$$set=a=>{"options"in a&&n(4,r=a.options),"value"in a&&n(3,c=a.value),"id"in a&&n(0,u=a.id)},o.$$.update=()=>{o.$$.dirty&24&&n(5,t=Object.keys(r).indexOf(c)),o.$$.dirty&16&&n(6,i=Object.entries(r)),o.$$.dirty&96&&n(1,s=i[t][1])},[u,s,f,c,r,t,i]}class z extends b{constructor(e){super(),h(this,e,w,q,m,{options:4,value:3,id:0})}}export{z as R};
