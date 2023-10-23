import{s as fe,w as he,f as y,a as P,l as A,g as J,h as Q,c as T,m as D,d as b,j as ie,i as S,u as L,n as K,z as de,A as be,B as ke,e as G,x as ve,C as H,p as U,K as j,G as we,v as ue}from"../chunks/scheduler.0a29c992.js";import{S as $e,i as pe,b as k,d as v,m as w,a as m,t as h,e as C,c as _e,f as q,g as me}from"../chunks/index.6d8df040.js";import{e as oe}from"../chunks/each.e59479a4.js";import{C as X}from"../chunks/Checkbox.c1c47051.js";import{a as Ce,H as Se}from"../chunks/Heading3.600667b0.js";import{S as ge}from"../chunks/Select.0781c4e2.js";import{T as Oe}from"../chunks/TextButton.f6017ea8.js";import{A as le,b as M}from"../chunks/blocked-content-store.2a43e35e.js";import{C as Pe,l as V}from"../chunks/localstorage-enabled-store.43dfcdee.js";import{a as F}from"../chunks/always-loop-store.ec22e8f2.js";import{t as W}from"../chunks/theme-store.8f7692a8.js";import{r as Y}from"../chunks/result-columns-store.7454cbad.js";function Te(o){let e;return{c(){e=A(o[0])},l(t){e=D(t,o[0])},m(t,s){S(t,e,s)},p(t,s){s&1&&K(e,t[0])},d(t){t&&b(e)}}}function Ee(o){let e,t,s,l,c,n,r;t=new Ce({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}});const a=o[2].default,i=he(a,o,o[3],null);return{c(){e=y("div"),k(t.$$.fragment),s=P(),l=y("p"),c=A(o[1]),n=P(),i&&i.c(),this.h()},l($){e=J($,"DIV",{});var p=Q(e);v(t.$$.fragment,p),s=T(p),l=J(p,"P",{class:!0});var O=Q(l);c=D(O,o[1]),O.forEach(b),n=T(p),i&&i.l(p),p.forEach(b),this.h()},h(){ie(l,"class","svelte-1npc88t")},m($,p){S($,e,p),w(t,e,null),L(e,s),L(e,l),L(l,c),L(e,n),i&&i.m(e,null),r=!0},p($,[p]){const O={};p&9&&(O.$$scope={dirty:p,ctx:$}),t.$set(O),(!r||p&2)&&K(c,$[1]),i&&i.p&&(!r||p&8)&&de(i,a,$,$[3],r?ke(a,$[3],p,null):be($[3]),null)},i($){r||(m(t.$$.fragment,$),m(i,$),r=!0)},o($){h(t.$$.fragment,$),h(i,$),r=!1},d($){$&&b(e),C(t),i&&i.d($)}}}function Le(o,e,t){let{$$slots:s={},$$scope:l}=e,{title:c}=e,{description:n}=e;return o.$$set=r=>{"title"in r&&t(0,c=r.title),"description"in r&&t(1,n=r.description),"$$scope"in r&&t(3,l=r.$$scope)},[c,n,s,l]}class N extends $e{constructor(e){super(),pe(this,e,Le,Ee,fe,{title:0,description:1})}}function re(o,e,t){const s=o.slice();return s[14]=e[t],s[15]=e,s[16]=t,s}function Be(o){let e;return{c(){e=A("Preferences")},l(t){e=D(t,"Preferences")},m(t,s){S(t,e,s)},d(t){t&&b(e)}}}function Re(o){let e,t,s;function l(n){o[7](n)}let c={options:Ke};return o[1]!==void 0&&(c.value=o[1]),e=new ge({props:c}),U.push(()=>q(e,"value",l)),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){w(e,n,r),s=!0},p(n,r){const a={};!t&&r&2&&(t=!0,a.value=n[1],j(()=>t=!1)),e.$set(a)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){C(e,n)}}}function Ae(o){let e=o[2]?"Save":"Don't save",t;return{c(){t=A(e)},l(s){t=D(s,e)},m(s,l){S(s,t,l)},p(s,l){l&4&&e!==(e=s[2]?"Save":"Don't save")&&K(t,e)},d(s){s&&b(t)}}}function De(o){let e,t,s;function l(n){o[8](n)}let c={id:"checkbox-localstorage-enabled",$$slots:{default:[Ae]},$$scope:{ctx:o}};return o[2]!==void 0&&(c.checked=o[2]),e=new X({props:c}),U.push(()=>q(e,"checked",l)),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){w(e,n,r),s=!0},p(n,r){const a={};r&131076&&(a.$$scope={dirty:r,ctx:n}),!t&&r&4&&(t=!0,a.checked=n[2],j(()=>t=!1)),e.$set(a)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){C(e,n)}}}function Ne(o){let e=o[14]+"",t,s;return{c(){t=A(e),s=P()},l(l){t=D(l,e),s=T(l)},m(l,c){S(l,t,c),S(l,s,c)},p:ue,d(l){l&&(b(t),b(s))}}}function ae(o){let e,t,s;function l(n){o[9](n,o[14])}let c={id:`checkbox-${o[14]}`,$$slots:{default:[Ne]},$$scope:{ctx:o}};return o[3][o[14]]!==void 0&&(c.checked=o[3][o[14]]),e=new X({props:c}),U.push(()=>q(e,"checked",l)),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){w(e,n,r),s=!0},p(n,r){o=n;const a={};r&131072&&(a.$$scope={dirty:r,ctx:o}),!t&&r&8&&(t=!0,a.checked=o[3][o[14]],j(()=>t=!1)),e.$set(a)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){C(e,n)}}}function Ie(o){let e,t,s=oe(le),l=[];for(let n=0;n<s.length;n+=1)l[n]=ae(re(o,s,n));const c=n=>h(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=G()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=G()},m(n,r){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(n,r);S(n,e,r),t=!0},p(n,r){if(r&8){s=oe(le);let a;for(a=0;a<s.length;a+=1){const i=re(n,s,a);l[a]?(l[a].p(i,r),m(l[a],1)):(l[a]=ae(i),l[a].c(),m(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=s.length;a<l.length;a+=1)c(a);_e()}},i(n){if(!t){for(let r=0;r<s.length;r+=1)m(l[r]);t=!0}},o(n){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)h(l[r]);t=!1},d(n){n&&b(e),we(l,n)}}}function ze(o){let e=o[4]?"Always":"Only with 'loop' tag",t;return{c(){t=A(e)},l(s){t=D(s,e)},m(s,l){S(s,t,l)},p(s,l){l&16&&e!==(e=s[4]?"Always":"Only with 'loop' tag")&&K(t,e)},d(s){s&&b(t)}}}function He(o){let e,t,s;function l(n){o[10](n)}let c={id:"checkbox-always-loop",$$slots:{default:[ze]},$$scope:{ctx:o}};return o[4]!==void 0&&(c.checked=o[4]),e=new X({props:c}),U.push(()=>q(e,"checked",l)),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){w(e,n,r),s=!0},p(n,r){const a={};r&131088&&(a.$$scope={dirty:r,ctx:n}),!t&&r&16&&(t=!0,a.checked=n[4],j(()=>t=!1)),e.$set(a)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){C(e,n)}}}function Ue(o){let e,t,s;function l(n){o[11](n)}let c={options:Me};return o[5]!==void 0&&(c.value=o[5]),e=new ge({props:c}),U.push(()=>q(e,"value",l)),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){w(e,n,r),s=!0},p(n,r){const a={};!t&&r&32&&(t=!0,a.value=n[5],j(()=>t=!1)),e.$set(a)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){C(e,n)}}}function je(o){let e;return{c(){e=A("Reset")},l(t){e=D(t,"Reset")},m(t,s){S(t,e,s)},d(t){t&&b(e)}}}function qe(o){let e,t;return e=new Oe({props:{title:"Reset preferences",$$slots:{default:[je]},$$scope:{ctx:o}}}),e.$on("click",o[12]),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,l){w(e,s,l),t=!0},p(s,l){const c={};l&131072&&(c.$$scope={dirty:l,ctx:s}),e.$set(c)},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){C(e,s)}}}function ce(o){let e,t;return e=new Pe({props:{title:"Reset Preferences",warning:"This will reset all your settings to default values. Are you sure you want to do that?",labelConfirm:"Yes, reset",labelCancel:"Cancel"}}),e.$on("confirm",o[6]),e.$on("close",o[13]),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,l){w(e,s,l),t=!0},p:ue,i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){C(e,s)}}}function Ge(o){let e,t,s,l,c,n,r,a,i,$,p,O,E,I,B,z,u,R;s=new Se({props:{$$slots:{default:[Be]},$$scope:{ctx:o}}}),c=new N({props:{title:"Theme",description:"Change the look of the app.",$$slots:{default:[Re]},$$scope:{ctx:o}}}),r=new N({props:{title:"Save Tags & Posts",description:"Save active tags and posts between sessions.",$$slots:{default:[De]},$$scope:{ctx:o}}}),i=new N({props:{title:"Blocked Content",description:"Completely prevent certain types of posts without cluttering your search.",$$slots:{default:[Ie]},$$scope:{ctx:o}}}),p=new N({props:{title:"Loop Videos",description:"By default only videos with the 'loop' tag are looped. When this setting is enabled, all videos are looped.",$$slots:{default:[He]},$$scope:{ctx:o}}}),E=new N({props:{title:"Result layout",description:"Save active tags and posts between sessions.",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),B=new N({props:{title:"Reset preferences",description:"Undo all customizations and return to default settings.",$$slots:{default:[qe]},$$scope:{ctx:o}}});let g=o[0]&&ce(o);return{c(){e=P(),t=y("section"),k(s.$$.fragment),l=P(),k(c.$$.fragment),n=P(),k(r.$$.fragment),a=P(),k(i.$$.fragment),$=P(),k(p.$$.fragment),O=P(),k(E.$$.fragment),I=P(),k(B.$$.fragment),z=P(),g&&g.c(),u=G(),this.h()},l(f){ve("svelte-1mqmwe6",document.head).forEach(b),e=T(f),t=J(f,"SECTION",{class:!0});var d=Q(t);v(s.$$.fragment,d),l=T(d),v(c.$$.fragment,d),n=T(d),v(r.$$.fragment,d),a=T(d),v(i.$$.fragment,d),$=T(d),v(p.$$.fragment,d),O=T(d),v(E.$$.fragment,d),I=T(d),v(B.$$.fragment,d),d.forEach(b),z=T(f),g&&g.l(f),u=G(),this.h()},h(){document.title="kurosearch - Preferences",ie(t,"class","svelte-er01er")},m(f,_){S(f,e,_),S(f,t,_),w(s,t,null),L(t,l),w(c,t,null),L(t,n),w(r,t,null),L(t,a),w(i,t,null),L(t,$),w(p,t,null),L(t,O),w(E,t,null),L(t,I),w(B,t,null),S(f,z,_),g&&g.m(f,_),S(f,u,_),R=!0},p(f,[_]){const d={};_&131072&&(d.$$scope={dirty:_,ctx:f}),s.$set(d);const Z={};_&131074&&(Z.$$scope={dirty:_,ctx:f}),c.$set(Z);const x={};_&131076&&(x.$$scope={dirty:_,ctx:f}),r.$set(x);const ee={};_&131080&&(ee.$$scope={dirty:_,ctx:f}),i.$set(ee);const te={};_&131088&&(te.$$scope={dirty:_,ctx:f}),p.$set(te);const ne={};_&131104&&(ne.$$scope={dirty:_,ctx:f}),E.$set(ne);const se={};_&131073&&(se.$$scope={dirty:_,ctx:f}),B.$set(se),f[0]?g?(g.p(f,_),_&1&&m(g,1)):(g=ce(f),g.c(),m(g,1),g.m(u.parentNode,u)):g&&(me(),h(g,1,1,()=>{g=null}),_e())},i(f){R||(m(s.$$.fragment,f),m(c.$$.fragment,f),m(r.$$.fragment,f),m(i.$$.fragment,f),m(p.$$.fragment,f),m(E.$$.fragment,f),m(B.$$.fragment,f),m(g),R=!0)},o(f){h(s.$$.fragment,f),h(c.$$.fragment,f),h(r.$$.fragment,f),h(i.$$.fragment,f),h(p.$$.fragment,f),h(E.$$.fragment,f),h(B.$$.fragment,f),h(g),R=!1},d(f){f&&(b(e),b(t),b(z),b(u)),C(s),C(c),C(r),C(i),C(p),C(E),C(B),g&&g.d(f)}}}const Ke=Object.freeze({"crimson dark":"Dark","crimson light":"Light","hotpink light":"Bubblegum","hotpink dark":"Dark Bubblegum","crimson coffee":"Coffee"}),Me=Object.freeze({1:"Single Column",2:"Two Columns",3:"Three Columns",4:"Four Columns"});function Ve(o,e,t){let s,l,c,n,r;H(o,W,u=>t(1,s=u)),H(o,V,u=>t(2,l=u)),H(o,M,u=>t(3,c=u)),H(o,F,u=>t(4,n=u)),H(o,Y,u=>t(5,r=u));let a=!1;const i=()=>{V.reset(),W.reset(),M.reset(),Y.reset(),F.reset()};function $(u){s=u,W.set(s)}function p(u){l=u,V.set(l)}function O(u,R){o.$$.not_equal(c[R],u)&&(c[R]=u,M.set(c))}function E(u){n=u,F.set(n)}function I(u){r=u,Y.set(r)}return[a,s,l,c,n,r,i,$,p,O,E,I,()=>t(0,a=!0),()=>t(0,a=!1)]}class st extends $e{constructor(e){super(),pe(this,e,Ve,Ge,fe,{})}}export{st as component};