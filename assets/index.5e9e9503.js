(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function C(){}function jf(t,e){for(const n in e)t[n]=e[n];return t}function qf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Ql(t){return t()}function Ba(){return Object.create(null)}function qe(t){t.forEach(Ql)}function zf(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ws;function Zn(t,e){return Ws||(Ws=document.createElement("a")),Ws.href=e,t===Ws.href}function Hf(t){return Object.keys(t).length===0}function Gf(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qe(t,e,n){t.$$.on_destroy.push(Gf(e,n))}function Kf(t,e,n,s){if(t){const r=Yl(t,e,n,s);return t[0](r)}}function Yl(t,e,n,s){return t[1]&&s?jf(n.ctx.slice(),t[1](s(e))):n.ctx}function Wf(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Qf(t,e,n,s,r,i){if(r){const o=Yl(e,n,s,i);t.p(o,r)}}function Yf(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function St(t){return t==null?"":t}function Xf(t,e,n){return t.set(n),e}function g(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function tn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function cn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function de(t){return document.createTextNode(t)}function $(){return de(" ")}function it(){return de("")}function W(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ko(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xl(t){return t===""?null:+t}function Jf(t){return Array.from(t.childNodes)}function ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Tt(t,e){t.value=e==null?"":e}function Qs(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function ja(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ue(t,e,n){t.classList[n?"add":"remove"](e)}function Zf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let es;function at(t){es=t}function qr(){if(!es)throw new Error("Function called outside component initialization");return es}function Jl(t){qr().$$.on_mount.push(t)}function ep(t){qr().$$.on_destroy.push(t)}function We(){const t=qr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Zf(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function tp(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Un=[],_n=[],ir=[],Ki=[],np=Promise.resolve();let Wi=!1;function sp(){Wi||(Wi=!0,np.then(So))}function ts(t){ir.push(t)}function I1(t){Ki.push(t)}const Si=new Set;let Ys=0;function So(){const t=es;do{for(;Ys<Un.length;){const e=Un[Ys];Ys++,at(e),rp(e.$$)}for(at(null),Un.length=0,Ys=0;_n.length;)_n.pop()();for(let e=0;e<ir.length;e+=1){const n=ir[e];Si.has(n)||(Si.add(n),n())}ir.length=0}while(Un.length);for(;Ki.length;)Ki.pop()();Wi=!1,Si.clear(),at(t)}function rp(t){if(t.fragment!==null){t.update(),qe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ts)}}const or=new Set;let Mt;function fe(){Mt={r:0,c:[],p:Mt}}function pe(){Mt.r||qe(Mt.c),Mt=Mt.p}function _(t,e){t&&t.i&&(or.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(or.has(t))return;or.add(t),Mt.c.push(()=>{or.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function vr(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(fe(),T(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),pe())}):e.block.d(1),l.c(),_(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&So()}if(qf(t)){const r=qr();if(t.then(i=>{at(r),s(e.then,1,e.value,i),at(null)},i=>{if(at(r),s(e.catch,2,e.error,i),at(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Zl(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function b1(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function V(t){t&&t.c()}function U(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||ts(()=>{const c=i.map(Ql).filter(zf);o?o.push(...c):qe(c),t.$$.on_mount=[]}),a.forEach(ts)}function F(t,e){const n=t.$$;n.fragment!==null&&(qe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ip(t,e){t.$$.dirty[0]===-1&&(Un.push(t),sp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,s,r,i,o,a=[-1]){const c=es;at(t);const l=t.$$={fragment:null,ctx:null,props:i,update:C,not_equal:r,bound:Ba(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ba(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&ip(t,h)),d}):[],l.update(),u=!0,qe(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Jf(e.target);l.fragment&&l.fragment.l(h),h.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&_(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),So()}at(c)}class J{$destroy(){F(this,1),this.$destroy=C}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Hf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ln=[];function Is(t,e=C){let n;const s=new Set;function r(a){if(Q(t,a)&&(t=a,n)){const c=!ln.length;for(const l of s)l[1](),ln.push(l,t);if(c){for(let l=0;l<ln.length;l+=2)ln[l][0](ln[l+1]);ln.length=0}}}function i(a){r(a(t))}function o(a,c=C){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||C),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const op=Object.freeze(["search","account","settings","help"]),ap=t=>op.includes(t),cp=()=>{const{subscribe:t,set:e}=Is("search");return{subscribe:t,navigateTo(n){if(!ap(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},xt=cp();function lp(t){let e,n,s,r,i,o;return{c(){e=cn("svg"),n=cn("g"),s=cn("path"),r=cn("defs"),i=cn("clipPath"),o=cn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){N(a,e,c),g(e,n),g(n,s),g(e,r),g(r,i),g(i,o)},p:C,i:C,o:C,d(a){a&&A(e)}}}class up extends J{constructor(e){super(),X(this,e,null,lp,Q,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},hp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dp=function(t){const e=eu(t);return tu.encodeByteArray(e,!0)},nu=function(t){return dp(t).replace(/\./g,"")},fp=function(t){try{return tu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function su(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yp(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ru(){return typeof indexedDB=="object"}function iu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function vp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="FirebaseError";class Xe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_p,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xe(r,a,s)}}function wp(t,e){return t.replace(Ip,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ip=/\{\$([^}]+)}/g;function bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ns(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(qa(i)&&qa(o)){if(!ns(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Vn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Tp(t,e){const n=new Ep(t,e);return n.subscribe.bind(n)}class Ep{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");kp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ai),r.error===void 0&&(r.error=Ai),r.complete===void 0&&(r.complete=Ai);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ai(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=1e3,Ap=2,Cp=4*60*60*1e3,Np=.5;function za(t,e=Sp,n=Ap){const s=e*Math.pow(n,t),r=Math.round(Np*s*(Math.random()-.5)*2);return Math.min(Cp,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class Ye{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pp;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Op(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(t){return t===Pt?void 0:t}function Op(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Pp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Lp=re.INFO,Mp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},xp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Mp[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=Lp,this._logHandler=xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Up=(t,e)=>e.some(n=>t instanceof n);let Ha,Ga;function Fp(){return Ha||(Ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vp(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ou=new WeakMap,Qi=new WeakMap,au=new WeakMap,Ci=new WeakMap,Ao=new WeakMap;function Bp(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ou.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function jp(t){if(Qi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qi.set(t,e)}let Yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||au.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qp(t){Yi=t(Yi)}function zp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ni(this),e,...n);return au.set(s,e.sort?e.sort():[e]),Et(s)}:Vp().includes(t)?function(...e){return t.apply(Ni(this),e),Et(ou.get(this))}:function(...e){return Et(t.apply(Ni(this),e))}}function Hp(t){return typeof t=="function"?zp(t):(t instanceof IDBTransaction&&jp(t),Up(t,Fp())?new Proxy(t,Yi):t)}function Et(t){if(t instanceof IDBRequest)return Bp(t);if(Ci.has(t))return Ci.get(t);const e=Hp(t);return e!==t&&(Ci.set(t,e),Ao.set(e,t)),e}const Ni=t=>Ao.get(t);function cu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Et(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Gp=["get","getKey","getAll","getAllKeys","count"],Kp=["put","add","delete","clear"],Di=new Map;function Ka(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Kp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Gp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Di.set(e,i),i}qp(t=>({...t,get:(e,n,s)=>Ka(e,n)||t.get(e,n,s),has:(e,n)=>!!Ka(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Qp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xi="@firebase/app",Wa="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new zr("@firebase/app"),Yp="@firebase/app-compat",Xp="@firebase/analytics-compat",Jp="@firebase/analytics",Zp="@firebase/app-check-compat",eg="@firebase/app-check",tg="@firebase/auth",ng="@firebase/auth-compat",sg="@firebase/database",rg="@firebase/database-compat",ig="@firebase/functions",og="@firebase/functions-compat",ag="@firebase/installations",cg="@firebase/installations-compat",lg="@firebase/messaging",ug="@firebase/messaging-compat",hg="@firebase/performance",dg="@firebase/performance-compat",fg="@firebase/remote-config",pg="@firebase/remote-config-compat",gg="@firebase/storage",mg="@firebase/storage-compat",yg="@firebase/firestore",vg="@firebase/firestore-compat",_g="firebase",wg="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="[DEFAULT]",Ig={[Xi]:"fire-core",[Yp]:"fire-core-compat",[Jp]:"fire-analytics",[Xp]:"fire-analytics-compat",[eg]:"fire-app-check",[Zp]:"fire-app-check-compat",[tg]:"fire-auth",[ng]:"fire-auth-compat",[sg]:"fire-rtdb",[rg]:"fire-rtdb-compat",[ig]:"fire-fn",[og]:"fire-fn-compat",[ag]:"fire-iid",[cg]:"fire-iid-compat",[lg]:"fire-fcm",[ug]:"fire-fcm-compat",[hg]:"fire-perf",[dg]:"fire-perf-compat",[fg]:"fire-rc",[pg]:"fire-rc-compat",[gg]:"fire-gcs",[mg]:"fire-gcs-compat",[yg]:"fire-fst",[vg]:"fire-fst-compat","fire-js":"fire-js",[_g]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,Ji=new Map;function bg(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function st(t){const e=t.name;if(Ji.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Ji.set(e,t);for(const n of _r.values())bg(n,t);return!0}function sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new nn("app","Firebase",Tg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=wg;function kg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:lu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});const r=_r.get(s);if(r){if(ns(t,r.options)&&ns(n,r.config))return r;throw Wt.create("duplicate-app",{appName:s})}const i=new $p(s);for(const a of Ji.values())i.addComponent(a);const o=new Eg(t,n,i);return _r.set(s,o),o}function Co(t=lu){const e=_r.get(t);if(!e)throw Wt.create("no-app",{appName:t});return e}function He(t,e,n){var s;let r=(s=Ig[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}st(new Ye(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firebase-heartbeat-database",Ag=1,ss="firebase-heartbeat-store";let Ri=null;function uu(){return Ri||(Ri=cu(Sg,Ag,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}}).catch(t=>{throw Wt.create("idb-open",{originalErrorMessage:t.message})})),Ri}async function Cg(t){var e;try{return(await uu()).transaction(ss).objectStore(ss).get(hu(t))}catch(n){if(n instanceof Xe)Kt.warn(n.message);else{const s=Wt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Kt.warn(s.message)}}}async function Qa(t,e){var n;try{const r=(await uu()).transaction(ss,"readwrite");return await r.objectStore(ss).put(e,hu(t)),r.done}catch(s){if(s instanceof Xe)Kt.warn(s.message);else{const r=Wt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Kt.warn(r.message)}}}function hu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=1024,Dg=30*24*60*60*1e3;class Rg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $g(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ya();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Dg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ya(),{heartbeatsToSend:n,unsentEntries:s}=Og(this._heartbeatsCache.heartbeats),r=nu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ya(){return new Date().toISOString().substring(0,10)}function Og(t,e=Ng){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Xa(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ru()?iu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xa(t){return nu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){st(new Ye("platform-logger",e=>new Wp(e),"PRIVATE")),st(new Ye("heartbeat",e=>new Rg(e),"PRIVATE")),He(Xi,Wa,t),He(Xi,Wa,"esm2017"),He("fire-js","")}Pg("");function No(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function du(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lg=du,fu=new nn("auth","Firebase",du());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new zr("@firebase/auth");function ar(t,...e){Ja.logLevel<=re.ERROR&&Ja.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,...e){throw Do(t,...e)}function Ze(t,...e){return Do(t,...e)}function pu(t,e,n){const s=Object.assign(Object.assign({},Lg()),{[e]:n});return new nn("auth","Firebase",s).create(e,{appName:t.name})}function Mg(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ke(t,"argument-error"),pu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Do(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return fu.create(t,...e)}function B(t,e,...n){if(!t)throw Do(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ar(e),new Error(e)}function ft(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Map;function lt(t){ft(t instanceof Function,"Expected a class definition");let e=Za.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Za.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t,e){const n=sn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ns(i,e!=null?e:{}))return r;Ke(r,"already-initialized")}return n.initialize({options:e})}function Ug(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fg(){return ec()==="http:"||ec()==="https:"}function ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fg()||su()||"connection"in navigator)?navigator.onLine:!0}function Bg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=gp()||mp()}get(){return Vg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Es(3e4,6e4);function ks(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ss(t,e,n,s,r={}){return mu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=bs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gu.fetch()(yu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function mu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},jg),e);try{const r=new zg(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pu(t,u,l);Ke(t,u)}}catch(r){if(r instanceof Xe)throw r;Ke(t,"network-request-failed")}}async function As(t,e,n,s,r={}){const i=await Ss(t,e,n,s,r);return"mfaPendingCredential"in i&&Ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ro(t.config,r):`${t.config.apiScheme}://${r}`}class zg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),qg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ze(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(t,e){return Ss(t,"POST","/v1/accounts:delete",e)}async function Gg(t,e){return Ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kg(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=Oo(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Gn(Oi(r.auth_time)),issuedAtTime:Gn(Oi(r.iat)),expirationTime:Gn(Oi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oi(t){return Number(t)*1e3}function Oo(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const i=fp(s);return i?JSON.parse(i):(ar("Failed to decode base64 JWT payload"),null)}catch(i){return ar("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Wg(t){const e=Oo(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xe&&Qg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Qg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await rs(t,Gg(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zg(i.providerUserInfo):[],a=Jg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Xg(t){const e=$e(t);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Zg(t){return t.map(e=>{var{providerId:n}=e,s=No(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e){const n=await mu(t,{},async()=>{const s=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=yu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await em(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new is;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=No(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kg(this,e)}reload(){return Xg(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rs(this,Hg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:Z,isAnonymous:S,providerData:k,stsTokenManager:M}=n;B(R&&M,e,"internal-error");const oe=is.fromJSON(this.name,M);B(typeof R=="string",e,"internal-error"),_t(h,e.name),_t(d,e.name),B(typeof Z=="boolean",e,"internal-error"),B(typeof S=="boolean",e,"internal-error"),_t(p,e.name),_t(m,e.name),_t(I,e.name),_t(w,e.name),_t(v,e.name),_t(P,e.name);const ce=new qt({uid:R,auth:e,email:d,emailVerified:Z,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:p,tenantId:I,stsTokenManager:oe,createdAt:v,lastLoginAt:P});return k&&Array.isArray(k)&&(ce.providerData=k.map(ee=>Object.assign({},ee))),w&&(ce._redirectEventId=w),ce}static async _fromIdTokenResponse(e,n,s=!1){const r=new is;r.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await wr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_u.type="NONE";const tc=_u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e,n){return`firebase:${t}:${e}:${n}`}class pn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=cr(this.userKey,r.apiKey,i),this.fullPersistenceKey=cr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pn(lt(tc),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||lt(tc);const o=cr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=qt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eu(e))return"Blackberry";if(ku(e))return"Webos";if($o(e))return"Safari";if((e.includes("chrome/")||Iu(e))&&!e.includes("edge/"))return"Chrome";if(Tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function wu(t=Oe()){return/firefox\//i.test(t)}function $o(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Iu(t=Oe()){return/crios\//i.test(t)}function bu(t=Oe()){return/iemobile/i.test(t)}function Tu(t=Oe()){return/android/i.test(t)}function Eu(t=Oe()){return/blackberry/i.test(t)}function ku(t=Oe()){return/webos/i.test(t)}function Hr(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tm(t=Oe()){var e;return Hr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nm(){return yp()&&document.documentMode===10}function Su(t=Oe()){return Hr(t)||Tu(t)||ku(t)||Eu(t)||/windows phone/i.test(t)||bu(t)}function sm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e=[]){let n;switch(t){case"Browser":n=nc(Oe());break;case"Worker":n=`${nc(Oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sc(this),this.idTokenSubscription=new sc(this),this.beforeStateQueue=new rm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await wr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Au(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Cs(t){return $e(t)}class sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tp(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function om(t,e){return Ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e){return As(t,"POST","/v1/accounts:signInWithPassword",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(t,e){return As(t,"POST","/v1/accounts:signInWithEmailLink",ks(t,e))}async function lm(t,e){return As(t,"POST","/v1/accounts:signInWithEmailLink",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Po{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new os(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new os(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return am(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cm(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return om(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e){return As(t,"POST","/v1/accounts:signInWithIdp",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="http://localhost";class Qt extends Po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=No(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gn(e,n)}buildRequest(){const e={requestUri:um,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dm(t){const e=Fn(Vn(t)).link,n=e?Fn(Vn(e)).deep_link_id:null,s=Fn(Vn(t)).deep_link_id;return(s?Fn(Vn(s)).link:null)||s||n||e||t}class Lo{constructor(e){var n,s,r,i,o,a;const c=Fn(Vn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=hm((r=c.mode)!==null&&r!==void 0?r:null);B(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dm(e);try{return new Lo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.providerId=Cn.PROVIDER_ID}static credential(e,n){return os._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Lo.parseLink(n);return B(s,"argument-error"),os._fromEmailAndCode(e,s.code,s.tenantId)}}Cn.PROVIDER_ID="password";Cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Mo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Ns{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ot.credential(n,s)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Ns{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Ns{constructor(){super("twitter.com")}static credential(e,n){return Qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return bt.credential(n,s)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(t,e){return As(t,"POST","/v1/accounts:signUp",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qt._fromIdTokenResponse(e,s,r),o=rc(s);return new Yt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=rc(s);return new Yt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function rc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Xe{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ir(e,n,s,r)}}function Cu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(t,i,e,s):i})}async function pm(t,e,n=!1){const s=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await rs(t,Cu(r,i,e,t),n);B(o.idToken,r,"internal-error");const a=Oo(o.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(t.uid===c,r,"user-mismatch"),Yt._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nu(t,e,n=!1){const s="signIn",r=await Cu(t,s,e),i=await Yt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function mm(t,e){return Nu(Cs(t),e)}async function ym(t,e,n){const s=Cs(t),r=await fm(s,{returnSecureToken:!0,email:e,password:n}),i=await Yt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function vm(t,e,n){return mm($e(t),Cn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t,e){return $e(t).setPersistence(e)}function Du(t,e,n,s){return $e(t).onAuthStateChanged(e,n,s)}function wm(t){return $e(t).signOut()}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){const t=Oe();return $o(t)||Hr(t)}const bm=1e3,Tm=10;class Ou extends Ru{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Im()&&sm(),this.fallbackToPolling=Su(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);nm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Tm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ou.type="LOCAL";const $u=Ou;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Ru{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pu.type="SESSION";const Lu=Pu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Gr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Em(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=xo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function Sm(t){et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function Am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nm(){return Mu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="firebaseLocalStorageDb",Dm=1,Tr="firebaseLocalStorage",Uu="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kr(t,e){return t.transaction([Tr],e?"readwrite":"readonly").objectStore(Tr)}function Rm(){const t=indexedDB.deleteDatabase(xu);return new Ds(t).toPromise()}function eo(){const t=indexedDB.open(xu,Dm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Tr,{keyPath:Uu})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Tr)?e(s):(s.close(),await Rm(),e(await eo()))})})}async function ic(t,e,n){const s=Kr(t,!0).put({[Uu]:e,value:n});return new Ds(s).toPromise()}async function Om(t,e){const n=Kr(t,!1).get(e),s=await new Ds(n).toPromise();return s===void 0?null:s.value}function oc(t,e){const n=Kr(t,!0).delete(e);return new Ds(n).toPromise()}const $m=800,Pm=3;class Fu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Pm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gr._getInstance(Nm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Am(),!this.activeServiceWorker)return;this.sender=new km(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eo();return await ic(e,br,"1"),await oc(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ic(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Om(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Kr(r,!1).getAll();return new Ds(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fu.type="LOCAL";const Lm=Fu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ze("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Mm().appendChild(s)})}function Um(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t,e){return e?lt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends Po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fm(t){return Nu(t.auth,new Uo(t),t.bypassAuthState)}function Vm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),gm(n,new Uo(t),t.bypassAuthState)}async function Bm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),pm(n,new Uo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fm;case"linkViaPopup":case"linkViaRedirect":return Bm;case"reauthViaPopup":case"reauthViaRedirect":return Vm;default:Ke(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Es(2e3,1e4);async function qm(t,e,n){const s=Cs(t);Mg(t,e,Mo);const r=Vu(s,n);return new Ut(s,"signInViaPopup",e,r).executeNotNull()}class Ut extends Bu{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jm.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="pendingRedirect",lr=new Map;class Hm extends Bu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lr.get(this.auth._key());if(!e){try{const s=await Gm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gm(t,e){const n=Qm(e),s=Wm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Km(t,e){lr.set(t._key(),e)}function Wm(t){return lt(t._redirectPersistence)}function Qm(t){return cr(zm,t.config.apiKey,t.name)}async function Ym(t,e,n=!1){const s=Cs(t),r=Vu(s,e),o=await new Hm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=10*60*1e3;class Jm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ju(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ac(e))}saveEventToCache(e){this.cachedEventUids.add(ac(e)),this.lastProcessedEventTime=Date.now()}}function ac(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ju({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ju(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(t,e={}){return Ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ny=/^https?/;async function sy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ey(t);for(const n of e)try{if(ry(n))return}catch{}Ke(t,"unauthorized-domain")}function ry(t){const e=Zi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ny.test(n))return!1;if(ty.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Es(3e4,6e4);function cc(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oy(t){return new Promise((e,n)=>{var s,r,i;function o(){cc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cc(),n(Ze(t,"network-request-failed"))},timeout:iy.get()})}if(!((r=(s=et().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const a=Um("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},xm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ur=null,e})}let ur=null;function ay(t){return ur=ur||oy(t),ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Es(5e3,15e3),ly="__/auth/iframe",uy="emulator/auth/iframe",hy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fy(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ro(e,uy):`https://${t.config.authDomain}/${ly}`,s={apiKey:e.apiKey,appName:t.name,v:Ts},r=dy.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${bs(s).slice(1)}`}async function py(t){const e=await ay(t),n=et().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:fy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hy,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=et().setTimeout(()=>{i(o)},cy.get());function c(){et().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},my=500,yy=600,vy="_blank",_y="http://localhost";class lc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wy(t,e,n,s=my,r=yy){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gy),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=Iu(l)?vy:n),wu(l)&&(e=e||_y,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(tm(l)&&a!=="_self")return Iy(e||"",a),new lc(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new lc(h)}function Iy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="__/auth/handler",Ty="emulator/auth/handler";function uc(t,e,n,s,r,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ts,eventId:r};if(e instanceof Mo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ns){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ey(t)}?${bs(a).slice(1)}`}function Ey({config:t}){return t.emulator?Ro(t,Ty):`https://${t.authDomain}/${by}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="webStorageSupport";class ky{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=Ym,this._overrideRedirectResult=Km}async _openPopup(e,n,s,r){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=uc(e,n,s,Zi(),r);return wy(e,o,xo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Sm(uc(e,n,s,Zi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ft(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await py(e),s=new Jm(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($i,{type:$i},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[$i];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Su()||$o()||Hr()}}const Sy=ky;var hc="@firebase/auth",dc="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ny(t){st(new Ye("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Au(t)},u=new im(a,c,l);return Ug(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),st(new Ye("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(s=>new Ay(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(hc,dc,Cy(t)),He(hc,dc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t=Co()){const e=sn(t,"auth");return e.isInitialized()?e.getImmediate():xg(t,{popupRedirectResolver:Sy,persistence:[Lm,$u,Lu]})}Ny("Browser");const qu="@firebase/installations",Fo="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=1e4,Hu=`w:${Fo}`,Gu="FIS_v2",Ry="https://firebaseinstallations.googleapis.com/v1",Oy=60*60*1e3,$y="installations",Py="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Xt=new nn($y,Py,Ly);function Ku(t){return t instanceof Xe&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu({projectId:t}){return`${Ry}/projects/${t}/installations`}function Qu(t){return{token:t.token,requestStatus:2,expiresIn:xy(t.expiresIn),creationTime:Date.now()}}async function Yu(t,e){const s=(await e.json()).error;return Xt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Xu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function My(t,{refreshToken:e}){const n=Xu(t);return n.append("Authorization",Uy(e)),n}async function Ju(t){const e=await t();return e.status>=500&&e.status<600?t():e}function xy(t){return Number(t.replace("s","000"))}function Uy(t){return`${Gu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Wu(t),r=Xu(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Gu,appId:t.appId,sdkVersion:Hu},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ju(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Qu(l.authToken)}}else throw await Yu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=/^[cdef][\w-]{21}$/,to="";function jy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qy(t);return By.test(n)?n:to}catch{return to}}function qy(t){return Vy(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Map;function th(t,e){const n=Wr(t);nh(n,e),zy(n,e)}function nh(t,e){const n=eh.get(t);if(!!n)for(const s of n)s(e)}function zy(t,e){const n=Hy();n&&n.postMessage({key:t,fid:e}),Gy()}let Ft=null;function Hy(){return!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=t=>{nh(t.data.key,t.data.fid)}),Ft}function Gy(){eh.size===0&&Ft&&(Ft.close(),Ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebase-installations-database",Wy=1,Jt="firebase-installations-store";let Pi=null;function Vo(){return Pi||(Pi=cu(Ky,Wy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jt)}}})),Pi}async function Er(t,e){const n=Wr(t),r=(await Vo()).transaction(Jt,"readwrite"),i=r.objectStore(Jt),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&th(t,e.fid),e}async function sh(t){const e=Wr(t),s=(await Vo()).transaction(Jt,"readwrite");await s.objectStore(Jt).delete(e),await s.done}async function Qr(t,e){const n=Wr(t),r=(await Vo()).transaction(Jt,"readwrite"),i=r.objectStore(Jt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&th(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){let e;const n=await Qr(t.appConfig,s=>{const r=Qy(s),i=Yy(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===to?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Qy(t){const e=t||{fid:jy(),registrationStatus:0};return rh(e)}function Yy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Xt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Xy(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Jy(t)}:{installationEntry:e}}async function Xy(t,e){try{const n=await Fy(t,e);return Er(t.appConfig,n)}catch(n){throw Ku(n)&&n.customData.serverCode===409?await sh(t.appConfig):await Er(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Jy(t){let e=await fc(t.appConfig);for(;e.registrationStatus===1;)await Zu(100),e=await fc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Bo(t);return s||n}return e}function fc(t){return Qr(t,e=>{if(!e)throw Xt.create("installation-not-found");return rh(e)})}function rh(t){return Zy(t)?{fid:t.fid,registrationStatus:0}:t}function Zy(t){return t.registrationStatus===1&&t.registrationTime+zu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev({appConfig:t,heartbeatServiceProvider:e},n){const s=tv(t,n),r=My(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Hu,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ju(()=>fetch(s,a));if(c.ok){const l=await c.json();return Qu(l)}else throw await Yu("Generate Auth Token",c)}function tv(t,{fid:e}){return`${Wu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e=!1){let n;const s=await Qr(t.appConfig,i=>{if(!ih(i))throw Xt.create("not-registered");const o=i.authToken;if(!e&&rv(o))return i;if(o.requestStatus===1)return n=nv(t,e),i;{if(!navigator.onLine)throw Xt.create("app-offline");const a=ov(i);return n=sv(t,a),a}});return n?await n:s.authToken}async function nv(t,e){let n=await pc(t.appConfig);for(;n.authToken.requestStatus===1;)await Zu(100),n=await pc(t.appConfig);const s=n.authToken;return s.requestStatus===0?jo(t,e):s}function pc(t){return Qr(t,e=>{if(!ih(e))throw Xt.create("not-registered");const n=e.authToken;return av(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sv(t,e){try{const n=await ev(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Er(t.appConfig,s),n}catch(n){if(Ku(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Er(t.appConfig,s)}throw n}}function ih(t){return t!==void 0&&t.registrationStatus===2}function rv(t){return t.requestStatus===2&&!iv(t)}function iv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Oy}function ov(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function av(t){return t.requestStatus===1&&t.requestTime+zu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t){const e=t,{installationEntry:n,registrationPromise:s}=await Bo(e);return s?s.catch(console.error):jo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t,e=!1){const n=t;return await uv(n),(await jo(n,e)).token}async function uv(t){const{registrationPromise:e}=await Bo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){if(!t||!t.options)throw Li("App Configuration");if(!t.name)throw Li("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Li(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Li(t){return Xt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="installations",dv="installations-internal",fv=t=>{const e=t.getProvider("app").getImmediate(),n=hv(e),s=sn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},pv=t=>{const e=t.getProvider("app").getImmediate(),n=sn(e,oh).getImmediate();return{getId:()=>cv(n),getToken:r=>lv(n,r)}};function gv(){st(new Ye(oh,fv,"PUBLIC")),st(new Ye(dv,pv,"PRIVATE"))}gv();He(qu,Fo);He(qu,Fo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="analytics",mv="firebase_id",yv="origin",vv=60*1e3,_v="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ah="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new zr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function wv(t,e){const n=document.createElement("script");n.src=`${ah}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Iv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function bv(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await ch(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ve.error(a)}t("config",r,i)}async function Tv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await ch(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ve.error(i)}}function Ev(t,e,n,s){async function r(i,o,a){try{i==="event"?await Tv(t,e,n,o,a):i==="config"?await bv(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ve.error(c)}}return r}function kv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Ev(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Sv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(ah))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ge=new nn("analytics","Analytics",Av);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=30,Nv=1e3;class Dv{constructor(e={},n=Nv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lh=new Dv;function Rv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ov(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Rv(s)},i=_v.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ge.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function $v(t,e=lh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ge.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ge.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Mv;return setTimeout(async()=>{a.abort()},n!==void 0?n:vv),uh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function uh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=lh){var i,o;const{appId:a,measurementId:c}=t;try{await Pv(s,e)}catch(l){if(c)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Ov(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!Lv(u)){if(r.deleteThrottleMetadata(a),c)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?za(n,r.intervalMillis,Cv):za(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),Ve.debug(`Calling attemptFetch again in ${h} millis`),uh(t,d,s,r)}}function Pv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Lv(t){if(!(t instanceof Xe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(){var t;if(ru())try{await iu()}catch(e){return Ve.warn(Ge.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ve.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fv(t,e,n,s,r,i,o){var a;const c=$v(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ve.error(p)),e.push(c);const l=Uv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);Sv()||wv(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[yv]="firebase",d.update=!0,h!=null&&(d[mv]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.app=e}_delete(){return delete Kn[this.app.options.appId],Promise.resolve()}}let Kn={},gc=[];const mc={};let Mi="dataLayer",Bv="gtag",yc,hh,vc=!1;function jv(){const t=[];if(su()&&t.push("This is a browser extension environment."),vp()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ge.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function qv(t,e,n){jv();const s=t.options.appId;if(!s)throw Ge.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if(Kn[s]!=null)throw Ge.create("already-exists",{id:s});if(!vc){Iv(Mi);const{wrappedGtag:i,gtagCore:o}=kv(Kn,gc,mc,Mi,Bv);hh=i,yc=o,vc=!0}return Kn[s]=Fv(t,gc,mc,e,yc,Mi,n),new Vv(t)}function zv(t=Co()){t=$e(t);const e=sn(t,kr);return e.isInitialized()?e.getImmediate():Hv(t)}function Hv(t,e={}){const n=sn(t,kr);if(n.isInitialized()){const r=n.getImmediate();if(ns(e,n.getOptions()))return r;throw Ge.create("already-initialized")}return n.initialize({options:e})}function Gv(t,e,n,s){t=$e(t),xv(hh,Kn[t.app.options.appId],e,n,s).catch(r=>Ve.error(r))}const _c="@firebase/analytics",wc="0.8.0";function Kv(){st(new Ye(kr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return qv(s,r,n)},"PUBLIC")),st(new Ye("analytics-internal",t,"PRIVATE")),He(_c,wc),He(_c,wc,"esm2017");function t(e){try{const n=e.getProvider(kr).getImmediate();return{logEvent:(s,r,i)=>Gv(n,s,r,i)}}catch(n){throw Ge.create("interop-component-reg-failed",{reason:n})}}}Kv();var Wv="firebase",Qv="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(Wv,Qv,"app");var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,qo=qo||{},j=Yv||self;function Sr(){}function Yr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xv(t){return Object.prototype.hasOwnProperty.call(t,xi)&&t[xi]||(t[xi]=++Jv)}var xi="closure_uid_"+(1e9*Math.random()>>>0),Jv=0;function Zv(t,e,n){return t.call.apply(t.bind,arguments)}function e_(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function De(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=Zv:De=e_,De.apply(null,arguments)}function Js(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Rt(){this.s=this.s,this.o=this.o}var t_=0;Rt.prototype.s=!1;Rt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),t_!=0)&&Xv(this)};Rt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ic(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Yr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var n_=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Sr,e),j.removeEventListener("test",Sr,e)}catch{}return t}();function Ar(t){return/^[\s\xa0]*$/.test(t)}var bc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ui(t,e){return t<e?-1:t>e?1:0}function Xr(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Je(t){return Xr().indexOf(t)!=-1}function Ho(t){return Ho[" "](t),t}Ho[" "]=Sr;function s_(t){var e=o_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var r_=Je("Opera"),wn=Je("Trident")||Je("MSIE"),fh=Je("Edge"),no=fh||wn,ph=Je("Gecko")&&!(Xr().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge"))&&!(Je("Trident")||Je("MSIE"))&&!Je("Edge"),i_=Xr().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge");function gh(){var t=j.document;return t?t.documentMode:void 0}var Cr;e:{var Fi="",Vi=function(){var t=Xr();if(ph)return/rv:([^\);]+)(\)|;)/.exec(t);if(fh)return/Edge\/([\d\.]+)/.exec(t);if(wn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(i_)return/WebKit\/(\S+)/.exec(t);if(r_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vi&&(Fi=Vi?Vi[1]:""),wn){var Bi=gh();if(Bi!=null&&Bi>parseFloat(Fi)){Cr=String(Bi);break e}}Cr=Fi}var o_={};function a_(){return s_(function(){let t=0;const e=bc(String(Cr)).split("."),n=bc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ui(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ui(r[2].length==0,i[2].length==0)||Ui(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var so;if(j.document&&wn){var Tc=gh();so=Tc||parseInt(Cr,10)||void 0}else so=void 0;var c_=so;function as(t,e){if(Re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ph){e:{try{Ho(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:l_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&as.X.h.call(this)}}Ce(as,Re);var l_={2:"touch",3:"pen",4:"mouse"};as.prototype.h=function(){as.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),u_=0;function h_(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++u_,this.ba=this.ea=!1}function Jr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Go(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function mh(t){const e={};for(const n in t)e[n]=t[n];return e}const Ec="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ec.length;i++)n=Ec[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Zr(t){this.src=t,this.g={},this.h=0}Zr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=io(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new h_(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function ro(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=dh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Jr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function io(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Ko="closure_lm_"+(1e6*Math.random()|0),ji={};function vh(t,e,n,s,r){if(s&&s.once)return wh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vh(t,e[i],n,s,r);return null}return n=Yo(n),t&&t[Os]?t.N(e,n,Rs(s)?!!s.capture:!!s,r):_h(t,e,n,!1,s,r)}function _h(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Rs(r)?!!r.capture:!!r,a=Qo(t);if(a||(t[Ko]=a=new Zr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=d_(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)n_||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(bh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function d_(){function t(n){return e.call(t.src,t.listener,n)}const e=f_;return t}function wh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wh(t,e[i],n,s,r);return null}return n=Yo(n),t&&t[Os]?t.O(e,n,Rs(s)?!!s.capture:!!s,r):_h(t,e,n,!0,s,r)}function Ih(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ih(t,e[i],n,s,r);else s=Rs(s)?!!s.capture:!!s,n=Yo(n),t&&t[Os]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=io(i,n,s,r),-1<n&&(Jr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=io(e,n,s,r)),(n=-1<t?e[t]:null)&&Wo(n))}function Wo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Os])ro(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(bh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Qo(e))?(ro(n,t),n.h==0&&(n.src=null,e[Ko]=null)):Jr(t)}}}function bh(t){return t in ji?ji[t]:ji[t]="on"+t}function f_(t,e){if(t.ba)t=!0;else{e=new as(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Wo(t),t=n.call(s,e)}return t}function Qo(t){return t=t[Ko],t instanceof Zr?t:null}var qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(t){return typeof t=="function"?t:(t[qi]||(t[qi]=function(e){return t.handleEvent(e)}),t[qi])}function be(){Rt.call(this),this.i=new Zr(this),this.P=this,this.I=null}Ce(be,Rt);be.prototype[Os]=!0;be.prototype.removeEventListener=function(t,e,n,s){Ih(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Re(e,t);else if(e instanceof Re)e.target=e.target||t;else{var r=e;e=new Re(s,t),yh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Zs(o,s,!0,e)&&r}if(o=e.g=t,r=Zs(o,s,!0,e)&&r,r=Zs(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Zs(o,s,!1,e)&&r}be.prototype.M=function(){if(be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Jr(n[s]);delete t.g[e],t.h--}}this.I=null};be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ro(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Xo=j.JSON.stringify;function p_(){var t=kh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class g_{constructor(){this.h=this.g=null}add(e,n){const s=Th.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Th=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new m_,t=>t.reset());class m_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function y_(t){j.setTimeout(()=>{throw t},0)}function Eh(t,e){oo||v_(),ao||(oo(),ao=!0),kh.add(t,e)}var oo;function v_(){var t=j.Promise.resolve(void 0);oo=function(){t.then(__)}}var ao=!1,kh=new g_;function __(){for(var t;t=p_();){try{t.h.call(t.g)}catch(n){y_(n)}var e=Th;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ao=!1}function ei(t,e){be.call(this),this.h=t||1,this.g=e||j,this.j=De(this.kb,this),this.l=Date.now()}Ce(ei,be);D=ei.prototype;D.ca=!1;D.R=null;D.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Jo(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){ei.X.M.call(this),Jo(this),delete this.g};function Zo(t,e,n){if(typeof t=="function")n&&(t=De(t,n));else if(t&&typeof t.handleEvent=="function")t=De(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function Sh(t){t.g=Zo(()=>{t.g=null,t.i&&(t.i=!1,Sh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class w_ extends Rt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sh(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(t){Rt.call(this),this.h=t,this.g={}}Ce(cs,Rt);var kc=[];function Ah(t,e,n,s){Array.isArray(n)||(n&&(kc[0]=n.toString()),n=kc);for(var r=0;r<n.length;r++){var i=vh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ch(t){Go(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wo(e)},t),t.g={}}cs.prototype.M=function(){cs.X.M.call(this),Ch(this)};cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ti(){this.g=!0}ti.prototype.Aa=function(){this.g=!1};function I_(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function b_(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function dn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+E_(t,n)+(s?" "+s:"")})}function T_(t,e){t.info(function(){return"TIMEOUT: "+e})}ti.prototype.info=function(){};function E_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Xo(n)}catch{return e}}var rn={},Sc=null;function ni(){return Sc=Sc||new be}rn.Oa="serverreachability";function Nh(t){Re.call(this,rn.Oa,t)}Ce(Nh,Re);function ls(t){const e=ni();Se(e,new Nh(e))}rn.STAT_EVENT="statevent";function Dh(t,e){Re.call(this,rn.STAT_EVENT,t),this.stat=e}Ce(Dh,Re);function Me(t){const e=ni();Se(e,new Dh(e,t))}rn.Pa="timingevent";function Rh(t,e){Re.call(this,rn.Pa,t),this.size=e}Ce(Rh,Re);function $s(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var si={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Oh={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ea(){}ea.prototype.h=null;function Ac(t){return t.h||(t.h=t.i())}function $h(){}var Ps={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ta(){Re.call(this,"d")}Ce(ta,Re);function na(){Re.call(this,"c")}Ce(na,Re);var co;function ri(){}Ce(ri,ea);ri.prototype.g=function(){return new XMLHttpRequest};ri.prototype.i=function(){return{}};co=new ri;function Ls(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new cs(this),this.O=k_,t=no?125:void 0,this.T=new ei(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ph}function Ph(){this.i=null,this.g="",this.h=!1}var k_=45e3,lo={},Nr={};D=Ls.prototype;D.setTimeout=function(t){this.O=t};function uo(t,e,n){t.K=1,t.v=oi(pt(e)),t.s=n,t.P=!0,Lh(t,null)}function Lh(t,e){t.F=Date.now(),Ms(t),t.A=pt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),qh(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ph,t.g=ud(t.l,n?e:null,!t.s),0<t.N&&(t.L=new w_(De(t.Ka,t,t.g),t.N)),Ah(t.S,t.g,"readystatechange",t.hb),e=t.H?mh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ls(),I_(t.j,t.u,t.A,t.m,t.U,t.s)}D.hb=function(t){t=t.target;const e=this.L;e&&ut(t)==3?e.l():this.Ka(t)};D.Ka=function(t){try{if(t==this.g)e:{const u=ut(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||no||this.g&&(this.h.h||this.g.fa()||Rc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ls(3):ls(2)),ii(this);var n=this.g.aa();this.Y=n;t:if(Mh(this)){var s=Rc(this.g);t="";var r=s.length,i=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),Wn(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,b_(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ar(a)){var l=a;break t}}l=null}if(n=l)dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ho(this,n);else{this.i=!1,this.o=3,Me(12),Vt(this),Wn(this);break e}}this.P?(xh(this,u,o),no&&this.i&&u==3&&(Ah(this.S,this.T,"tick",this.gb),this.T.start())):(dn(this.j,this.m,o,null),ho(this,o)),u==4&&Vt(this),this.i&&!this.I&&(u==4?od(this.l,this):(this.i=!1,Ms(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),Vt(this),Wn(this)}}}catch{}finally{}};function Mh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function xh(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=S_(t,n),r==Nr){e==4&&(t.o=4,Me(14),s=!1),dn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==lo){t.o=4,Me(15),dn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else dn(t.j,t.m,r,null),ho(t,r);Mh(t)&&r!=Nr&&r!=lo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),la(e),e.K=!0,Me(11))):(dn(t.j,t.m,n,"[Invalid Chunked Response]"),Vt(t),Wn(t))}D.gb=function(){if(this.g){var t=ut(this.g),e=this.g.fa();this.C<e.length&&(ii(this),xh(this,t,e),this.i&&t!=4&&Ms(this))}};function S_(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Nr:(n=Number(e.substring(n,s)),isNaN(n)?lo:(s+=1,s+n>e.length?Nr:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Vt(this)};function Ms(t){t.V=Date.now()+t.O,Uh(t,t.O)}function Uh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$s(De(t.fb,t),e)}function ii(t){t.B&&(j.clearTimeout(t.B),t.B=null)}D.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(T_(this.j,this.A),this.K!=2&&(ls(),Me(17)),Vt(this),this.o=2,Wn(this)):Uh(this,this.V-t)};function Wn(t){t.l.G==0||t.I||od(t.l,t)}function Vt(t){ii(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jo(t.T),Ch(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ho(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fo(n.h,t))){if(!t.J&&fo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Or(n),li(n);else break e;ca(n),Me(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=$s(De(n.bb,n),6e3));if(1>=Gh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bt(n,11)}else if((t.J||n.g==t)&&Or(n),!Ar(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(sa(i,i.h),i.h=null))}if(s.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.za=I,ue(s.F,s.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ld(s,s.H?s.ka:null,s.V),o.J){Kh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ii(a),Ms(a)),s.g=o}else rd(s);0<n.i.length&&ui(n)}else l[0]!="stop"&&l[0]!="close"||Bt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bt(n,7):aa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ls(4)}catch{}}function A_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function C_(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Fh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=C_(t),s=A_(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function N_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function zt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zt){this.h=e!==void 0?e:t.h,Dr(this,t.j),this.s=t.s,this.g=t.g,Rr(this,t.m),this.l=t.l,e=t.i;var n=new us;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cc(this,n),this.o=t.o}else t&&(n=String(t).match(Vh))?(this.h=!!e,Dr(this,n[1]||"",!0),this.s=Bn(n[2]||""),this.g=Bn(n[3]||"",!0),Rr(this,n[4]),this.l=Bn(n[5]||"",!0),Cc(this,n[6]||"",!0),this.o=Bn(n[7]||"")):(this.h=!!e,this.i=new us(null,this.h))}zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(jn(e,Nc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(jn(e,Nc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(jn(n,n.charAt(0)=="/"?O_:R_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",jn(n,P_)),t.join("")};function pt(t){return new zt(t)}function Dr(t,e,n){t.j=n?Bn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cc(t,e,n){e instanceof us?(t.i=e,L_(t.i,t.h)):(n||(e=jn(e,$_)),t.i=new us(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function oi(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,D_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function D_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nc=/[#\/\?@]/g,R_=/[#\?:]/g,O_=/[#\?]/g,$_=/[#\?@]/g,P_=/#/g;function us(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ot(t){t.g||(t.g=new Map,t.h=0,t.i&&N_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=us.prototype;D.add=function(t,e){Ot(this),this.i=null,t=Nn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Bh(t,e){Ot(t),e=Nn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jh(t,e){return Ot(t),e=Nn(t,e),t.g.has(e)}D.forEach=function(t,e){Ot(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};D.oa=function(){Ot(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};D.W=function(t){Ot(this);let e=[];if(typeof t=="string")jh(this,t)&&(e=e.concat(this.g.get(Nn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Ot(this),this.i=null,t=Nn(this,t),jh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function qh(t,e,n){Bh(t,e),0<n.length&&(t.i=null,t.g.set(Nn(t,e),zo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Nn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function L_(t,e){e&&!t.j&&(Ot(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Bh(this,s),qh(this,r,n))},t)),t.j=e}var M_=class{constructor(t,e){this.h=t,this.g=e}};function zh(t){this.l=t||x_,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ga&&j.g.Ga()&&j.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var x_=10;function Hh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gh(t){return t.h?1:t.g?t.g.size:0}function fo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sa(t,e){t.g?t.g.add(e):t.h=e}function Kh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zh.prototype.cancel=function(){if(this.i=Wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zo(t.i)}function ra(){}ra.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};ra.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function U_(){this.g=new ra}function F_(t,e,n){const s=n||"";try{Fh(t,function(r,i){let o=r;Rs(r)&&(o=Xo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function V_(t,e){const n=new ti;if(j.Image){const s=new Image;s.onload=Js(er,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Js(er,n,s,"TestLoadImage: error",!1,e),s.onabort=Js(er,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Js(er,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function er(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function xs(t){this.l=t.$b||null,this.j=t.ib||!1}Ce(xs,ea);xs.prototype.g=function(){return new ai(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function ai(t,e){be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ia,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(ai,be);var ia=0;D=ai.prototype;D.open=function(t,e){if(this.readyState!=ia)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=ia};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qh(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Qh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Us(this):hs(this),this.readyState==3&&Qh(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Us(this))};D.Ta=function(t){this.g&&(this.response=t,Us(this))};D.ga=function(){this.g&&Us(this)};function Us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var B_=j.JSON.parse;function ye(t){be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yh,this.K=this.L=!1}Ce(ye,be);var Yh="",j_=/^https?$/i,q_=["POST","PUT"];D=ye.prototype;D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():co.g(),this.C=this.u?Ac(this.u):Ac(co),this.g.onreadystatechange=De(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Dc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=j.FormData&&t instanceof j.FormData,!(0<=dh(q_,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zh(this),0<this.B&&((this.K=z_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.qa,this)):this.A=Zo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Dc(this,i)}};function z_(t){return wn&&a_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof qo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function Dc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xh(t),ci(t)}function Xh(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),ci(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),ye.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Jh(this):this.eb())};D.eb=function(){Jh(this)};function Jh(t){if(t.h&&typeof qo<"u"&&(!t.C[1]||ut(t)!=4||t.aa()!=2)){if(t.v&&ut(t)==4)Zo(t.Ha,0,t);else if(Se(t,"readystatechange"),ut(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Vh)[1]||null;if(!r&&j.self&&j.self.location){var i=j.self.location.protocol;r=i.substr(0,i.length-1)}s=!j_.test(r?r.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<ut(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Xh(t)}}finally{ci(t)}}}}function ci(t,e){if(t.g){Zh(t);const n=t.g,s=t.C[0]?Sr:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Zh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function ut(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),B_(e)}};function Rc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function ed(t){let e="";return Go(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function oa(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ed(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Mn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function td(t){this.Ca=0,this.i=[],this.j=new ti,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Mn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Mn("baseRetryDelayMs",5e3,t),this.ab=Mn("retryDelaySeedMs",1e4,t),this.Za=Mn("forwardChannelMaxRetries",2,t),this.ta=Mn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zh(t&&t.concurrentRequestLimit),this.Fa=new U_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=td.prototype;D.ma=8;D.G=1;function aa(t){if(nd(t),t.G==3){var e=t.U++,n=pt(t.F);ue(n,"SID",t.I),ue(n,"RID",e),ue(n,"TYPE","terminate"),Fs(t,n),e=new Ls(t,t.j,e,void 0),e.K=2,e.v=oi(pt(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=ud(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ms(e)}cd(t)}function li(t){t.g&&(la(t),t.g.cancel(),t.g=null)}function nd(t){li(t),t.u&&(j.clearTimeout(t.u),t.u=null),Or(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function ui(t){Hh(t.h)||t.m||(t.m=!0,Eh(t.Ja,t),t.C=0)}function H_(t,e){return Gh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=$s(De(t.Ja,t,e),ad(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ls(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=mh(i),yh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sd(this,r,e),n=pt(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Fs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ed(i)))+"&"+e:this.o&&oa(n,this.o,i)),sa(this.h,r),this.Xa&&ue(n,"TYPE","init"),this.O?(ue(n,"$req",e),ue(n,"SID","null"),r.Z=!0,uo(r,n,null)):uo(r,n,e),this.G=2}}else this.G==3&&(t?Oc(this,t):this.i.length==0||Hh(this.h)||Oc(this))};function Oc(t,e){var n;e?n=e.m:n=t.U++;const s=pt(t.F);ue(s,"SID",t.I),ue(s,"RID",n),ue(s,"AID",t.T),Fs(t,s),t.o&&t.s&&oa(s,t.o,t.s),n=new Ls(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=sd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),sa(t.h,n),uo(n,s,e)}function Fs(t,e){t.ia&&Go(t.ia,function(n,s){ue(e,s,n)}),t.l&&Fh({},function(n,s){ue(e,s,n)})}function sd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?De(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{F_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function rd(t){t.g||t.u||(t.Z=1,Eh(t.Ia,t),t.A=0)}function ca(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=$s(De(t.Ia,t),ad(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,id(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=$s(De(this.cb,this),t)}};D.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),li(this),id(this))};function la(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function id(t){t.g=new Ls(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=pt(t.sa);ue(e,"RID","rpc"),ue(e,"SID",t.I),ue(e,"CI",t.L?"0":"1"),ue(e,"AID",t.T),ue(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&oa(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=oi(pt(e)),n.s=null,n.P=!0,Lh(n,t)}D.bb=function(){this.v!=null&&(this.v=null,li(this),ca(this),Me(19))};function Or(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function od(t,e){var n=null;if(t.g==e){Or(t),la(t),t.g=null;var s=2}else if(fo(t.h,e))n=e.D,Kh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ni(),Se(s,new Rh(s,n)),ui(t)}else rd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&H_(t,e)||s==2&&ca(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Bt(t,5);break;case 4:Bt(t,10);break;case 3:Bt(t,6);break;default:Bt(t,2)}}}function ad(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Bt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=De(t.jb,t);n||(n=new zt("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Dr(n,"https"),oi(n)),V_(n.toString(),s)}else Me(2);t.G=0,t.l&&t.l.va(e),cd(t),nd(t)}D.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function cd(t){if(t.G=0,t.la=[],t.l){const e=Wh(t.h);(e.length!=0||t.i.length!=0)&&(Ic(t.la,e),Ic(t.la,t.i),t.h.i.length=0,zo(t.i),t.i.length=0),t.l.ua()}}function ld(t,e,n){var s=n instanceof zt?pt(n):new zt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Rr(s,s.m);else{var r=j.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new zt(null,void 0);s&&Dr(i,s),e&&(i.g=e),r&&Rr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ue(s,n,e),ue(s,"VER",t.ma),Fs(t,s),s}function ud(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ye(new xs({ib:!0})):new ye(t.ra),e.L=t.H,e}function hd(){}D=hd.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Qa=function(){};function $r(){if(wn&&!(10<=Number(c_)))throw Error("Environmental error: no available transport.")}$r.prototype.g=function(t,e){return new je(t,e)};function je(t,e){be.call(this),this.g=new td(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!Ar(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ar(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dn(this)}Ce(je,be);je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Me(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ld(t,null,t.V),ui(t)};je.prototype.close=function(){aa(this.g)};je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xo(t),t=n);e.i.push(new M_(e.$a++,t)),e.G==3&&ui(e)};je.prototype.M=function(){this.g.l=null,delete this.j,aa(this.g),delete this.g,je.X.M.call(this)};function dd(t){ta.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(dd,ta);function fd(){na.call(this),this.status=1}Ce(fd,na);function Dn(t){this.g=t}Ce(Dn,hd);Dn.prototype.xa=function(){Se(this.g,"a")};Dn.prototype.wa=function(t){Se(this.g,new dd(t))};Dn.prototype.va=function(t){Se(this.g,new fd)};Dn.prototype.ua=function(){Se(this.g,"b")};$r.prototype.createWebChannel=$r.prototype.g;je.prototype.send=je.prototype.u;je.prototype.open=je.prototype.m;je.prototype.close=je.prototype.close;si.NO_ERROR=0;si.TIMEOUT=8;si.HTTP_ERROR=6;Oh.COMPLETE="complete";$h.EventType=Ps;Ps.OPEN="a";Ps.CLOSE="b";Ps.ERROR="c";Ps.MESSAGE="d";be.prototype.listen=be.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Na;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Ra;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;var G_=function(){return new $r},K_=function(){return ni()},zi=si,W_=Oh,Q_=rn,$c={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Y_=xs,tr=$h,X_=ye;const Pc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new zr("@firebase/firestore");function Lc(){return Zt.logLevel}function O(t,...e){if(Zt.logLevel<=re.DEBUG){const n=e.map(ua);Zt.debug(`Firestore (${Rn}): ${t}`,...n)}}function gt(t,...e){if(Zt.logLevel<=re.ERROR){const n=e.map(ua);Zt.error(`Firestore (${Rn}): ${t}`,...n)}}function Mc(t,...e){if(Zt.logLevel<=re.WARN){const n=e.map(ua);Zt.warn(`Firestore (${Rn}): ${t}`,...n)}}function ua(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: `+t;throw gt(e),new Error(e)}function ae(t,e){t||z()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Xe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class ew{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ht,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ht)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ae(typeof s.accessToken=="string"),new J_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new xe(e)}}class tw{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nw{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new tw(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rw{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.A=n.token,new sw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=iw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function In(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new ve(0,0))}static max(){return new G(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ds.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ds?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends ds{construct(e,n,s){return new he(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new he(n)}static emptyPath(){return new he([])}}const ow=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ds{construct(e,n,s){return new Ne(e,n,s)}static isValidIdentifier(e){return ow.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(he.fromString(e))}static fromName(e){return new L(he.fromString(e).popFirst(5))}static empty(){return new L(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new he(e.slice()))}}function aw(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new ve(n+1,0):new ve(n,s));return new At(r,L.empty(),e)}function cw(t){return new At(t.readTime,t.key,-1)}class At{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new At(G.min(),L.empty(),-1)}static max(){return new At(G.max(),L.empty(),-1)}}function lw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==uw)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function On(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ha.at=-1;class we{constructor(e,n){this.comparator=e,this.root=n||Te.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nr(this.root,e,this.comparator,!1)}getReverseIterator(){return new nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nr(this.root,e,this.comparator,!0)}}class nr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Te.RED,this.left=r!=null?r:Te.EMPTY,this.right=i!=null?i:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Te(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Te.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uc(this.data.getIterator())}getIteratorFrom(e){return new Uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new tt([])}unionWith(e){let n=new _e(Ne.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ae(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ae(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const dw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(t){if(ae(!!t),typeof t=="string"){let e=0;const n=dw.exec(t);if(ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bn(t){return typeof t=="string"?Ae.fromBase64String(t):Ae.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yd(t){const e=t.mapValue.fields.__previous_value__;return md(e)?yd(e):e}function fs(t){const e=Ct(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ps{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ps("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ps&&e.projectId===this.projectId&&e.database===this.database}}function hi(t){return t==null}function Pr(t){return t===0&&1/t==-1/0}function pw(t){return typeof t=="number"&&Number.isInteger(t)&&!Pr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?md(t)?4:gw(t)?9007199254740991:10:z()}function rt(t,e){if(t===e)return!0;const n=en(t);if(n!==en(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fs(t).isEqual(fs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ct(s.timestampValue),o=Ct(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return bn(s.bytesValue).isEqual(bn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=me(s.doubleValue),o=me(r.doubleValue);return i===o?Pr(i)===Pr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return In(t.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(xc(i)!==xc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rt(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function gs(t,e){return(t.values||[]).find(n=>rt(n,e))!==void 0}function Tn(t,e){if(t===e)return 0;const n=en(t),s=en(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=me(r.integerValue||r.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fc(t.timestampValue,e.timestampValue);case 4:return Fc(fs(t),fs(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=bn(r),a=bn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ie(o[c],a[c]);if(l!==0)return l}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(me(r.latitude),me(i.latitude));return o!==0?o:ie(me(r.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Tn(o[c],a[c]);if(l)return l}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===sr.mapValue&&i===sr.mapValue)return 0;if(r===sr.mapValue)return 1;if(i===sr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ie(a[u],l[u]);if(h!==0)return h;const d=Tn(o[a[u]],c[l[u]]);if(d!==0)return d}return ie(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function Fc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Ct(t),s=Ct(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function mn(t){return po(t)}function po(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ct(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=po(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${po(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function go(t){return!!t&&"integerValue"in t}function da(t){return!!t&&"arrayValue"in t}function Vc(t){return!!t&&"nullValue"in t}function Bc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hr(t){return!!t&&"mapValue"in t}function Qn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return On(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!hr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qn(n)}setAll(e){let n=Ne.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Qn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());hr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];hr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){On(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ze(Qn(this.value))}}function vd(t){const e=[];return On(t.fields,(n,s)=>{const r=new Ne([n]);if(hr(s)){const i=vd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ee(e,0,G.min(),G.min(),ze.empty(),0)}static newFoundDocument(e,n,s){return new Ee(e,1,n,G.min(),s,0)}static newNoDocument(e,n){return new Ee(e,2,n,G.min(),ze.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,G.min(),ze.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function jc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new mw(t,e,n,s,r,i,o)}function fa(t){const e=H(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+mn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),hi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>mn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>mn(s)).join(",")),e.ht=n}return e.ht}function yw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${mn(s.value)}`;var s}).join(", ")}]`),hi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>mn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>mn(n)).join(",")),`Target(${e})`}function pa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!kw(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!rt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zc(t.startAt,e.startAt)&&zc(t.endAt,e.endAt)}function mo(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Fe extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new vw(e,n,s):n==="array-contains"?new Iw(e,s):n==="in"?new bw(e,s):n==="not-in"?new Tw(e,s):n==="array-contains-any"?new Ew(e,s):new Fe(e,n,s)}static lt(e,n,s){return n==="in"?new _w(e,s):new ww(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Tn(n,this.value)):n!==null&&en(this.value)===en(n)&&this.ft(Tn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class vw extends Fe{constructor(e,n,s){super(e,n,s),this.key=L.fromName(s.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.ft(n)}}class _w extends Fe{constructor(e,n){super(e,"in",n),this.keys=_d("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ww extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=_d("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _d(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>L.fromName(s.referenceValue))}class Iw extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return da(n)&&gs(n.arrayValue,this.value)}}class bw extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gs(this.value.arrayValue,n)}}class Tw extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gs(this.value.arrayValue,n)}}class Ew extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!da(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>gs(this.value.arrayValue,s))}}class Lr{constructor(e,n){this.position=e,this.inclusive=n}}class Yn{constructor(e,n="asc"){this.field=e,this.dir=n}}function kw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=L.comparator(L.fromName(o.referenceValue),n.key):s=Tn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function zc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Sw(t,e,n,s,r,i,o,a){return new di(t,e,n,s,r,i,o,a)}function ga(t){return new di(t)}function Hc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Aw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cw(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Nw(t){return t.collectionGroup!==null}function ms(t){const e=H(t);if(e._t===null){e._t=[];const n=Cw(e),s=Aw(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Yn(n)),e._t.push(new Yn(Ne.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yn(Ne.keyField(),i))}}}return e._t}function mt(t){const e=H(t);if(!e.wt)if(e.limitType==="F")e.wt=jc(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ms(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Yn(i.field,o))}const s=e.endAt?new Lr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Lr(e.startAt.position,e.startAt.inclusive):null;e.wt=jc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function yo(t,e,n){return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fi(t,e){return pa(mt(t),mt(e))&&t.limitType===e.limitType}function wd(t){return`${fa(mt(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${yw(mt(t))}; limitType=${t.limitType})`}function ma(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):L.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=qc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ms(n),s)||n.endAt&&!function(r,i,o){const a=qc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ms(n),s))}(t,e)}function Dw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Id(t){return(e,n)=>{let s=!1;for(const r of ms(t)){const i=Rw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Rw(t,e,n){const s=t.field.isKeyField()?L.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Tn(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pr(e)?"-0":e}}function Td(t){return{integerValue:""+t}}function Ow(t,e){return pw(e)?Td(e):bd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this._=void 0}}function $w(t,e,n){return t instanceof Mr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ys?kd(t,e):t instanceof vs?Sd(t,e):function(s,r){const i=Ed(s,r),o=Gc(i)+Gc(s.yt);return go(i)&&go(s.yt)?Td(o):bd(s.It,o)}(t,e)}function Pw(t,e,n){return t instanceof ys?kd(t,e):t instanceof vs?Sd(t,e):n}function Ed(t,e){return t instanceof xr?go(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Mr extends pi{}class ys extends pi{constructor(e){super(),this.elements=e}}function kd(t,e){const n=Ad(e);for(const s of t.elements)n.some(r=>rt(r,s))||n.push(s);return{arrayValue:{values:n}}}class vs extends pi{constructor(e){super(),this.elements=e}}function Sd(t,e){let n=Ad(e);for(const s of t.elements)n=n.filter(r=>!rt(r,s));return{arrayValue:{values:n}}}class xr extends pi{constructor(e,n){super(),this.It=e,this.yt=n}}function Gc(t){return me(t.integerValue||t.doubleValue)}function Ad(t){return da(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Lw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ys&&s instanceof ys||n instanceof vs&&s instanceof vs?In(n.elements,s.elements,rt):n instanceof xr&&s instanceof xr?rt(n.yt,s.yt):n instanceof Mr&&s instanceof Mr}(t.transform,e.transform)}class Mw{constructor(e,n){this.version=e,this.transformResults=n}}class nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gi{}function Cd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ya(t.key,nt.none()):new js(t.key,t.data,nt.none());{const n=t.data,s=ze.empty();let r=new _e(Ne.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new on(t.key,s,new tt(r.toArray()),nt.none())}}function xw(t,e,n){t instanceof js?function(s,r,i){const o=s.value.clone(),a=Wc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof on?function(s,r,i){if(!dr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Wc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Nd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Xn(t,e,n,s){return t instanceof js?function(r,i,o,a){if(!dr(r.precondition,i))return o;const c=r.value.clone(),l=Qc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof on?function(r,i,o,a){if(!dr(r.precondition,i))return o;const c=Qc(r.fieldTransforms,a,i),l=i.data;return l.setAll(Nd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return dr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Uw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ed(s.transform,r||null);i!=null&&(n===null&&(n=ze.empty()),n.set(s.field,i))}return n||null}function Kc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&In(n,s,(r,i)=>Lw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class js extends gi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class on extends gi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wc(t,e,n){const s=new Map;ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Pw(o,a,n[r]))}return s}function Qc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,$w(i,o,e))}return s}class ya extends gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fw extends gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,te;function Bw(t){switch(t){default:return z();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Dd(t){if(t===void 0)return gt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ge.OK:return E.OK;case ge.CANCELLED:return E.CANCELLED;case ge.UNKNOWN:return E.UNKNOWN;case ge.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ge.INTERNAL:return E.INTERNAL;case ge.UNAVAILABLE:return E.UNAVAILABLE;case ge.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ge.NOT_FOUND:return E.NOT_FOUND;case ge.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ge.ABORTED:return E.ABORTED;case ge.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ge.DATA_LOSS:return E.DATA_LOSS;default:return z()}}(te=ge||(ge={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return gd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=new we(L.comparator);function yt(){return jw}const Rd=new we(L.comparator);function qn(...t){let e=Rd;for(const n of t)e=e.insert(n.key,n);return e}function Od(t){let e=Rd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function jt(){return Jn()}function $d(){return Jn()}function Jn(){return new $n(t=>t.toString(),(t,e)=>t.isEqual(e))}const qw=new we(L.comparator),zw=new _e(L.comparator);function Y(...t){let e=zw;for(const n of t)e=e.add(n);return e}const Hw=new _e(ie);function Pd(){return Hw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,qs.createSynthesizedTargetChangeForCurrentChange(e,n)),new mi(G.min(),s,Pd(),yt(),Y())}}class qs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new qs(Ae.EMPTY_BYTE_STRING,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Ld{constructor(e,n){this.targetId=e,this.At=n}}class Md{constructor(e,n,s=Ae.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Yc{constructor(){this.Rt=0,this.bt=Jc(),this.Pt=Ae.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Y(),n=Y(),s=Y();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new qs(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Jc()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Gw{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=yt(),this.qt=Xc(),this.Kt=new _e(ie)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(mo(i))if(s===0){const o=new L(i.path);this.jt(n,o,Ee.newNoDocument(o,G.min()))}else ae(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&mo(a.target)){const c=new L(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ee.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=Y();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new mi(e,n,this.Kt,this.Ut,s);return this.Ut=yt(),this.qt=Xc(),this.Kt=new _e(ie),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Yc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new _e(ie),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Yc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Xc(){return new we(L.comparator)}function Jc(){return new we(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ww=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Qw{constructor(e,n){this.databaseId=e,this.gt=n}}function Ur(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xd(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Yw(t,e){return Ur(t,e.toTimestamp())}function ht(t){return ae(!!t),G.fromTimestamp(function(e){const n=Ct(e);return new ve(n.seconds,n.nanos)}(t))}function va(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ud(t){const e=he.fromString(t);return ae(Bd(e)),e}function _o(t,e){return va(t.databaseId,e.path)}function Hi(t,e){const n=Ud(e);if(n.get(1)!==t.databaseId.projectId)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(Fd(n))}function wo(t,e){return va(t.databaseId,e)}function Xw(t){const e=Ud(t);return e.length===4?he.emptyPath():Fd(e)}function Io(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fd(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zc(t,e,n){return{name:_o(t,e),fields:n.value.mapValue.fields}}function Jw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(ae(l===void 0||typeof l=="string"),Ae.fromBase64String(l||"")):(ae(l===void 0||l instanceof Uint8Array),Ae.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Dd(c.code);return new x(l,c.message||"")}(o);n=new Md(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Hi(t,s.document.name),i=ht(s.document.updateTime),o=new ze({mapValue:{fields:s.document.fields}}),a=Ee.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new fr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Hi(t,s.document),i=s.readTime?ht(s.readTime):G.min(),o=Ee.newNoDocument(r,i),a=s.removedTargetIds||[];n=new fr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Hi(t,s.document),i=s.removedTargetIds||[];n=new fr([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Vw(r),o=s.targetId;n=new Ld(o,i)}}return n}function Zw(t,e){let n;if(e instanceof js)n={update:Zc(t,e.key,e.value)};else if(e instanceof ya)n={delete:_o(t,e.key)};else if(e instanceof on)n={update:Zc(t,e.key,e.data),updateMask:l0(e.fieldMask)};else{if(!(e instanceof Fw))return z();n={verify:_o(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ys)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Yw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function e0(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?ht(s.updateTime):ht(r);return i.isEqual(G.min())&&(i=ht(r)),new Mw(i,s.transformResults||[])}(n,e))):[]}function t0(t,e){return{documents:[wo(t,e.path)]}}function n0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=wo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Bc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NAN"}};if(Vc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Bc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NOT_NAN"}};if(Vc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(h.field),op:o0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:un(u.field),direction:i0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||hi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function s0(t){let e=Xw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Vd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Yn(fn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,hi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Lr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Lr(d,h)}(n.endAt)),Sw(e,r,o,i,a,"F",c,l)}function r0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vd(t){return t?t.unaryFilter!==void 0?[c0(t)]:t.fieldFilter!==void 0?[a0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Vd(e)).reduce((e,n)=>e.concat(n)):z():[]}function i0(t){return Kw[t]}function o0(t){return Ww[t]}function un(t){return{fieldPath:t.canonicalString()}}function fn(t){return Ne.fromServerFormat(t.fieldPath)}function a0(t){return Fe.create(fn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function c0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fn(t.unaryFilter.field);return Fe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fn(t.unaryFilter.field);return Fe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fn(t.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fn(t.unaryFilter.field);return Fe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function l0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&xw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=$d();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Cd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,(n,s)=>Kc(n,s))&&In(this.baseMutations,e.baseMutations,(n,s)=>Kc(n,s))}}class _a{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ae(e.mutations.length===s.length);let r=qw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new _a(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s,r,i=G.min(),o=G.min(),a=Ae.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.re=e}}function f0(t){const e=s0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.Ye=new g0}addToCollectionParentIndex(e,n){return this.Ye.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(At.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(At.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class g0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _e(he.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new En(0)}static vn(){return new En(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.changes=new $n(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Xn(s.mutation,r,tt.empty(),ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const r=jt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=qn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=jt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=yt();const o=Jn(),a=Jn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof on)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Xn(u.mutation,l,u.mutation.getFieldMask(),ve.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new y0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Jn();let r=new we((o,a)=>o-a),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||tt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Y()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=$d();u.forEach(d=>{if(!i.has(d)){const p=Cd(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Nw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(jt());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Y())).next(u=>({batchId:a,changes:Od(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(s=>{let r=qn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=qn();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new di(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ee.newInvalidDocument(l)))});let o=qn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Xn(l.mutation,c,tt.empty(),ve.now()),ma(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):b.resolve(Ee.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:f0(s.bundledQuery),readTime:ht(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.overlays=new we(L.comparator),this.es=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=jt();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=jt(),i=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=jt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new h0(n,s));let i=this.es.get(n);i===void 0&&(i=Y(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.ns=new _e(Ie.ss),this.rs=new _e(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new L(new he([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new he([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=Y();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||ie(e._s,n._s)}static os(e,n){return ie(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new _e(Ie.ss)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new u0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(ie);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),b.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;L.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new L(i),0);let a=new _e(ie);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),b.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ae(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return b.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ie(n,0),r=this.gs.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.Es=e,this.docs=new we(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let s=yt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ee.newInvalidDocument(r))}),b.resolve(s)}getAllFromCollection(e,n,s){let r=yt();const i=new L(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||lw(cw(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,r){z()}As(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new T0(this)}getSize(e){return b.resolve(this.size)}}class T0 extends m0{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.persistence=e,this.Rs=new $n(n=>fa(n),pa),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.bs=0,this.Ps=new wa,this.targetCount=0,this.vs=En.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),b.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new En(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Dn(n),b.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ha(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new E0(this),this.indexManager=new p0,this.remoteDocumentCache=function(s){return new b0(s)}(s=>this.referenceDelegate.xs(s)),this.It=new d0(n),this.Ns=new _0(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new w0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new I0(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const r=new S0(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return b.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class S0 extends hw{constructor(e){super(),this.currentSequenceNumber=e}}class Ia{constructor(e){this.persistence=e,this.Fs=new wa,this.$s=null}static Bs(e){return new Ia(e)}get Ls(){if(this.$s)return this.$s;throw z()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),b.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ls,s=>{const r=L.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return b.or([()=>b.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=Y(),r=Y();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ba(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(Hc(n))return b.resolve(null);let s=mt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=yo(n,null,"F"),s=mt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Y(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,yo(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return Hc(n)||r.isEqual(G.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Lc()<=re.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vo(n)),this.Bi(e,o,n,aw(r,-1)))})}Fi(e,n){let s=new _e(Id(e));return n.forEach((r,i)=>{ma(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Lc()<=re.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",vo(n)),this.Ni.getDocumentsMatchingQuery(e,n,At.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new we(ie),this.qi=new $n(i=>fa(i),pa),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v0(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function N0(t,e,n,s){return new C0(t,e,n,s)}async function jd(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Y();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function D0(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const I=c.docVersions.get(p);ae(I!==null),m.version.compareTo(I)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function qd(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function R0(t,e){const n=H(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ae.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,I,w){return m.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=yt(),l=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(O0(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(G.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function O0(t,e,n){let s=Y(),r=Y();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=yt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function $0(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function P0(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Gt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function bo(t,e,n){const s=H(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Bs(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function el(t,e,n){const s=H(t);let r=G.min(),i=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=H(a),h=u.qi.get(l);return h!==void 0?b.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,mt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:Y())).next(a=>(L0(s,Dw(e),a),{documents:a,Hi:i})))}function L0(t,e,n){let s=G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class tl{constructor(){this.activeTargetIds=Pd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M0{constructor(){this.Lr=new tl,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new tl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);O("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw Mc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=U0[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new X_;a.listenOnce(W_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case zi.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),i(l);break;case zi.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new x(E.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(h.status);o(new x(d,h.message))}else o(new x(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(E.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=G_(),o=K_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Y_({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");O("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new F0({Hr:m=>{h?O("Connection","Not sending because WebChannel is closed:",m):(u||(O("Connection","Opening WebChannel transport."),l.open(),u=!0),O("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,I,w)=>{m.listen(I,v=>{try{w(v)}catch(P){setTimeout(()=>{throw P},0)}})};return p(l,tr.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),p(l,tr.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),p(l,tr.EventType.ERROR,m=>{h||(h=!0,Mc("Connection","WebChannel transport errored:",m),d.io(new x(E.UNAVAILABLE,"The operation could not be completed")))}),p(l,tr.EventType.MESSAGE,m=>{var I;if(!h){const w=m.data[0];ae(!!w);const v=w,P=v.error||((I=v[0])===null||I===void 0?void 0:I.error);if(P){O("Connection","WebChannel received error:",P);const R=P.status;let Z=function(k){const M=ge[k];if(M!==void 0)return Dd(M)}(R),S=P.message;Z===void 0&&(Z=E.INTERNAL,S="Unknown error status: "+R+" with message "+P.message),h=!0,d.io(new x(Z,S)),l.close()}else O("Connection","WebChannel received:",w),d.ro(w)}}),p(o,Q_.STAT_EVENT,m=>{m.stat===$c.PROXY?O("Connection","Detected buffering proxy"):m.stat===$c.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Gi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){return new Qw(t,!0)}class zd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new zd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new x(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B0 extends Hd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Jw(this.It,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?ht(i.readTime):G.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Io(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=mo(a)?{documents:t0(r,a)}:{query:n0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=xd(r,i.resumeToken):i.snapshotVersion.compareTo(G.min())>0&&(o.readTime=Ur(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=r0(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Io(this.It),n.removeTarget=e,this.Bo(n)}}class j0 extends Hd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=e0(e.writeResults,e.commitTime),s=ht(e.commitTime);return this.listener.Zo(s,n)}return ae(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Io(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Zw(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(E.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(E.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class z0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(gt(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{an(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=H(a);c._u.add(4),await zs(c),c.gu.set("Unknown"),c._u.delete(4),await vi(c)}(this))})}),this.gu=new z0(s,r)}}async function vi(t){if(an(t))for(const e of t.wu)await e(!0)}async function zs(t){for(const e of t.wu)await e(!1)}function Gd(t,e){const n=H(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ka(n)?Ea(n):Pn(n).ko()&&Ta(n,e))}function Kd(t,e){const n=H(t),s=Pn(n);n.du.delete(e),s.ko()&&Wd(n,e),n.du.size===0&&(s.ko()?s.Fo():an(n)&&n.gu.set("Unknown"))}function Ta(t,e){t.yu.Ot(e.targetId),Pn(t).zo(e)}function Wd(t,e){t.yu.Ot(e),Pn(t).Ho(e)}function Ea(t){t.yu=new Gw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Pn(t).start(),t.gu.uu()}function ka(t){return an(t)&&!Pn(t).No()&&t.du.size>0}function an(t){return H(t)._u.size===0}function Qd(t){t.yu=void 0}async function G0(t){t.du.forEach((e,n)=>{Ta(t,e)})}async function K0(t,e){Qd(t),ka(t)?(t.gu.hu(e),Ea(t)):t.gu.set("Unknown")}async function W0(t,e,n){if(t.gu.set("Online"),e instanceof Md&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fr(t,s)}else if(e instanceof fr?t.yu.Gt(e):e instanceof Ld?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(G.min()))try{const s=await qd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ae.EMPTY_BYTE_STRING,c.snapshotVersion)),Wd(r,a);const l=new Gt(c.target,a,1,c.sequenceNumber);Ta(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Fr(t,s)}}async function Fr(t,e,n){if(!Bs(e))throw e;t._u.add(1),await zs(t),t.gu.set("Offline"),n||(n=()=>qd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await vi(t)})}function Yd(t,e){return e().catch(n=>Fr(t,n,e))}async function _i(t){const e=H(t),n=Nt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Q0(e);)try{const r=await $0(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,Y0(e,r)}catch(r){await Fr(e,r)}Xd(e)&&Jd(e)}function Q0(t){return an(t)&&t.fu.length<10}function Y0(t,e){t.fu.push(e);const n=Nt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Xd(t){return an(t)&&!Nt(t).No()&&t.fu.length>0}function Jd(t){Nt(t).start()}async function X0(t){Nt(t).eu()}async function J0(t){const e=Nt(t);for(const n of t.fu)e.Xo(n.mutations)}async function Z0(t,e,n){const s=t.fu.shift(),r=_a.from(s,e,n);await Yd(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await _i(t)}async function eI(t,e){e&&Nt(t).Yo&&await async function(n,s){if(r=s.code,Bw(r)&&r!==E.ABORTED){const i=n.fu.shift();Nt(n).Oo(),await Yd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _i(n)}var r}(t,e),Xd(t)&&Jd(t)}async function sl(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=an(n);n._u.add(3),await zs(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await vi(n)}async function tI(t,e){const n=H(t);e?(n._u.delete(2),await vi(n)):e||(n._u.add(2),await zs(n),n.gu.set("Unknown"))}function Pn(t){return t.pu||(t.pu=function(e,n,s){const r=H(e);return r.su(),new B0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:G0.bind(null,t),Zr:K0.bind(null,t),Wo:W0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),ka(t)?Ea(t):t.gu.set("Unknown")):(await t.pu.stop(),Qd(t))})),t.pu}function Nt(t){return t.Iu||(t.Iu=function(e,n,s){const r=H(e);return r.su(),new j0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:X0.bind(null,t),Zr:eI.bind(null,t),tu:J0.bind(null,t),Zo:Z0.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await _i(t)):(await t.Iu.stop(),t.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Sa(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Aa(t,e){if(gt("AsyncQueue",`${e}: ${t}`),Bs(t))return new x(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||L.comparator(n.key,s.key):(n,s)=>L.comparator(n.key,s.key),this.keyedMap=qn(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.Tu=new we(L.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):z():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class kn{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new kn(e,n,yn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.Au=void 0,this.listeners=[]}}class sI{constructor(){this.queries=new $n(e=>wd(e),fi),this.onlineState="Unknown",this.Ru=new Set}}async function rI(t,e){const n=H(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new nI),r)try{i.Au=await n.onListen(s)}catch(o){const a=Aa(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ca(n)}async function iI(t,e){const n=H(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function oI(t,e){const n=H(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ca(n)}function aI(t,e,n){const s=H(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ca(t){t.Ru.forEach(e=>{e.next()})}class cI{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new kn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.key=e}}class ef{constructor(e){this.key=e}}class lI{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Y(),this.mutatedKeys=Y(),this.Ku=Id(e),this.Gu=new yn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new rl,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=ma(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==I&&(s.track({type:3,doc:p}),w=!0):this.zu(d,p)||(s.track({type:2,doc:p}),w=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return p(h)-p(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new kn(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new rl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Y(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new ef(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new Zd(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=Y();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return kn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class uI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class hI{constructor(e){this.key=e,this.ec=!1}}class dI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new $n(a=>wd(a),fi),this.ic=new Map,this.rc=new Set,this.oc=new we(L.comparator),this.uc=new Map,this.cc=new wa,this.ac={},this.hc=new Map,this.lc=En.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function fI(t,e){const n=TI(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await P0(n.localStore,mt(e));n.isPrimaryClient&&Gd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await pI(n,e,s,a==="current")}return r}async function pI(t,e,n,s){t.dc=(u,h,d)=>async function(p,m,I,w){let v=m.view.ju(I);v.$i&&(v=await el(p.localStore,m.query,!1).then(({documents:Z})=>m.view.ju(Z,v)));const P=w&&w.targetChanges.get(m.targetId),R=m.view.applyChanges(v,p.isPrimaryClient,P);return ol(p,m.targetId,R.Yu),R.snapshot}(t,u,h,d);const r=await el(t.localStore,e,!0),i=new lI(e,r.Hi),o=i.ju(r.documents),a=qs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);ol(t,n,c.Yu);const l=new uI(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function gI(t,e){const n=H(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!fi(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await bo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Kd(n.remoteStore,s.targetId),To(n,s.targetId)}).catch(Vs)):(To(n,s.targetId),await bo(n.localStore,s.targetId,!0))}async function mI(t,e,n){const s=EI(t);try{const r=await function(i,o){const a=H(i),c=ve.now(),l=o.reduce((d,p)=>d.add(p.key),Y());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=yt(),m=Y();return a.Gi.getEntries(d,l).next(I=>{p=I,p.forEach((w,v)=>{v.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(I=>{u=I;const w=[];for(const v of o){const P=Uw(v,u.get(v.key).overlayedDocument);P!=null&&w.push(new on(v.key,P,vd(P.value.mapValue),nt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(I=>{h=I;const w=I.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,I.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Od(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new we(ie)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Hs(s,r.changes),await _i(s.remoteStore)}catch(r){const i=Aa(r,"Failed to persist write");n.reject(i)}}async function tf(t,e){const n=H(t);try{const s=await R0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?ae(o.ec):r.removedDocuments.size>0&&(ae(o.ec),o.ec=!1))}),await Hs(n,s,e)}catch(s){await Vs(s)}}function il(t,e,n){const s=H(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=H(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Ca(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yI(t,e,n){const s=H(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new we(L.comparator);o=o.insert(i,Ee.newNoDocument(i,G.min()));const a=Y().add(i),c=new mi(G.min(),new Map,new _e(ie),o,a);await tf(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Na(s)}else await bo(s.localStore,e,!1).then(()=>To(s,e,n)).catch(Vs)}async function vI(t,e){const n=H(t),s=e.batch.batchId;try{const r=await D0(n.localStore,e);sf(n,s,null),nf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hs(n,r)}catch(r){await Vs(r)}}async function _I(t,e,n){const s=H(t);try{const r=await function(i,o){const a=H(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);sf(s,e,n),nf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hs(s,r)}catch(r){await Vs(r)}}function nf(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function sf(t,e,n){const s=H(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function To(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||rf(t,s)})}function rf(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Kd(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Na(t))}function ol(t,e,n){for(const s of n)s instanceof Zd?(t.cc.addReference(s.key,e),wI(t,s)):s instanceof ef?(O("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||rf(t,s.key)):z()}function wI(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.rc.add(s),Na(t))}function Na(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new L(he.fromString(e)),s=t.lc.next();t.uc.set(s,new hI(n)),t.oc=t.oc.insert(n,s),Gd(t.remoteStore,new Gt(mt(ga(n.path)),s,2,ha.at))}}async function Hs(t,e,n){const s=H(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=ba.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=H(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Bs(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,m)}}}(s.localStore,i))}async function II(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await jd(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new x(E.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hs(n,s.ji)}}function bI(t,e){const n=H(t),s=n.uc.get(e);if(s&&s.ec)return Y().add(s.key);{let r=Y();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function TI(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yI.bind(null,e),e.nc.Wo=oI.bind(null,e.eventManager),e.nc._c=aI.bind(null,e.eventManager),e}function EI(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_I.bind(null,e),e}class kI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=yi(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return N0(this.persistence,new A0,e.initialUser,this.It)}gc(e){return new k0(Ia.Bs,this.It)}mc(e){return new M0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>il(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=II.bind(null,this.syncEngine),await tI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sI}createDatastore(e){const n=yi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new V0(r));var r;return function(i,o,a,c){return new q0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>il(this.syncEngine,a,0),o=nl.C()?new nl:new x0,new H0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new dI(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await zs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=xe.UNAUTHENTICATED,this.clientId=pd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Aa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function NI(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await jd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RI(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>sl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sl(e.remoteStore,i)),t.onlineComponents=e}async function RI(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await NI(t,new kI)),t.offlineComponents}async function of(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await DI(t,new SI)),t.onlineComponents}function OI(t){return of(t).then(e=>e.syncEngine)}async function al(t){const e=await of(t),n=e.eventManager;return n.onListen=fI.bind(null,e.syncEngine),n.onUnlisten=gI.bind(null,e.syncEngine),n}const cl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e,n){if(!n)throw new x(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $I(t,e,n,s){if(e===!0&&s===!0)throw new x(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ll(t){if(!L.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ul(t){if(L.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Da(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Da(t);throw new x(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$I("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Z_;switch(n.type){case"gapi":const s=n.client;return new nw(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cl.get(e);n&&(O("ComponentProvider","Removing Datastore"),cl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class wi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wi(this.firestore,e,this._query)}}class kt extends wi{constructor(e,n,s){super(e,n,ga(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new L(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function PI(t,e,...n){if(t=$e(t),af("collection","path",e),t instanceof Ra){const s=he.fromString(e,...n);return ul(s),new kt(t,null,s)}{if(!(t instanceof Be||t instanceof kt))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return ul(s),new kt(t.firestore,null,s)}}function rr(t,e,...n){if(t=$e(t),arguments.length===1&&(e=pd.R()),af("doc","path",e),t instanceof Ra){const s=he.fromString(e,...n);return ll(s),new Be(t,null,new L(s))}{if(!(t instanceof Be||t instanceof kt))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return ll(s),new Be(t.firestore,t instanceof kt?t.converter:null,new L(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new zd(this,"async_queue_retry"),this.jc=()=>{const n=Gi();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Gi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Gi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Ht;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Bs(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=Sa.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&z()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function dl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class _s extends Ra{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new LI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lf(this),this._firestoreClient.terminate()}}function MI(t,e){const n=typeof t=="object"?t:Co(),s=typeof t=="string"?t:e||"(default)";return sn(n,"firestore").getImmediate({identifier:s})}function cf(t){return t._firestoreClient||lf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new fw(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new CI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Ae.fromBase64String(e))}catch(n){throw new x(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=/^__.*__$/;class UI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new on(e,this.data,this.fieldMask,n,this.fieldTransforms):new js(e,this.data,n,this.fieldTransforms)}}function hf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Pa{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Pa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Vr(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(hf(this.na)&&xI.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class FI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||yi(e)}fa(e,n,s,r=!1){return new Pa({na:e,methodName:n,la:s,path:Ne.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function VI(t){const e=t._freezeSettings(),n=yi(t._databaseId);return new FI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BI(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);gf("Data must be an object, but it was:",o,s);const a=ff(s,o);let c,l;if(i.merge)c=new tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=jI(e,h,n);if(!o.contains(d))throw new x(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zI(u,d)||u.push(d)}c=new tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new UI(new ze(a),c,l)}function df(t,e){if(pf(t=$e(t)))return gf("Unsupported field value:",e,t),ff(t,e);if(t instanceof uf)return function(n,s){if(!hf(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=df(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ow(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ve.fromDate(n);return{timestampValue:Ur(s.It,r)}}if(n instanceof ve){const r=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ur(s.It,r)}}if(n instanceof $a)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sn)return{bytesValue:xd(s.It,n._byteString)};if(n instanceof Be){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:va(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Da(n)}`)}(t,e)}function ff(t,e){const n={};return gd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(t,(s,r)=>{const i=df(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function pf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof $a||t instanceof Sn||t instanceof Be||t instanceof uf)}function gf(t,e,n){if(!pf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Da(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function jI(t,e,n){if((e=$e(e))instanceof Oa)return e._internalPath;if(typeof e=="string")return mf(t,e);throw Vr("Field path arguments must be of type string or ",t,!1,void 0,n)}const qI=new RegExp("[~\\*/\\[\\]]");function mf(t,e,n){if(e.search(qI)>=0)throw Vr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oa(...e.split("."))._internalPath}catch{throw Vr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(E.INVALID_ARGUMENT,a+t+c)}function zI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HI extends yf{data(){return super.data()}}function vf(t,e){return typeof e=="string"?mf(t,e):e instanceof Oa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _f extends yf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class pr extends _f{data(e={}){return super.data(e)}}class GI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new zn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new pr(this._firestore,this._userDataWriter,s.key,s,new zn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new pr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new pr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:KI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function QI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{convertValue(e,n="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return On(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new $a(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=yd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const n=Ct(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=he.fromString(e);ae(Bd(s));const r=new ps(s.get(1),s.get(3)),i=new L(s.popFirst(5));return r.isEqual(n)||gt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class wf extends YI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function fl(t,e,n){t=vn(t,Be);const s=vn(t.firestore,_s),r=XI(t.converter,e,n);return If(s,[BI(VI(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,nt.none())])}function JI(t){return If(vn(t.firestore,_s),[new ya(t._key,nt.none())])}function pl(t,...e){var n,s,r;t=$e(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||dl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(dl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Be)l=vn(t.firestore,_s),u=ga(t._key.path),c={next:h=>{e[o]&&e[o](ZI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,wi);l=vn(h.firestore,_s),u=h._query;const d=new wf(l);c={next:p=>{e[o]&&e[o](new GI(l,d,h,p))},error:e[o+1],complete:e[o+2]},WI(t._query)}return function(h,d,p,m){const I=new AI(m),w=new cI(d,I,p);return h.asyncQueue.enqueueAndForget(async()=>rI(await al(h),w)),()=>{I.Rc(),h.asyncQueue.enqueueAndForget(async()=>iI(await al(h),w))}}(cf(l),u,a,c)}function If(t,e){return function(n,s){const r=new Ht;return n.asyncQueue.enqueueAndForget(async()=>mI(await OI(n),s,r)),r.promise}(cf(t),e)}function ZI(t,e,n){const s=n.docs.get(e._key),r=new wf(t);return new _f(t,r,e._key,s,new zn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rn=n})(Ts),st(new Ye("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new _s(new ew(n.getProvider("auth-internal")),new rw(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),He(Pc,"3.5.0",t),He(Pc,"3.5.0","esm2017")})();const eb={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},bf=kg(eb),Lt=Dy(bf);_m(Lt,$u);const xn=MI(bf);zv();const tb=new ot,nb=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Is(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return Du(Lt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return ym(Lt,r,i)},async signInWithEmail(r,i){return vm(Lt,r,i)},async signInWithGoogle(){return qm(Lt,tb)},async signOut(){return wm(Lt)}}},sb=nb(),gl="/assets/default-user.a40c52dd.png";function rb(t){let e;return{c(){e=y("i"),f(e,"class","codicon codicon-account")},m(n,s){N(n,e,s)},p:C,d(n){n&&A(e)}}}function ib(t){let e,n;return{c(){var s;e=y("img"),f(e,"class","profile-picture svelte-1m717b8"),Zn(e.src,n=(s=t[0].user.photoURL)!=null?s:gl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){N(s,e,r)},p(s,r){var i;r&1&&!Zn(e.src,n=(i=s[0].user.photoURL)!=null?i:gl)&&f(e,"src",n)},d(s){s&&A(e)}}}function ob(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,w,v,P;o=new up({});function R(k,M){return k[0].loggedIn?ib:rb}let Z=R(t),S=Z(t);return{c(){e=y("header"),n=y("div"),s=y("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=$(),i=y("a"),V(o.$$.fragment),a=$(),c=y("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=$(),u=y("nav"),h=y("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=$(),p=y("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',m=$(),I=y("button"),S.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(I,"title","Account"),f(I,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(k,M){N(k,e,M),g(e,n),g(n,s),g(n,r),g(n,i),U(o,i,null),g(n,a),g(n,c),g(e,l),g(e,u),g(u,h),g(u,d),g(u,p),g(u,m),g(u,I),S.m(I,null),w=!0,v||(P=[W(c,"click",t[1]),W(h,"click",t[2]),W(p,"click",t[3]),W(I,"click",t[4])],v=!0)},p(k,[M]){Z===(Z=R(k))&&S?S.p(k,M):(S.d(1),S=Z(k),S&&(S.c(),S.m(I,null)))},i(k){w||(_(o.$$.fragment,k),w=!0)},o(k){T(o.$$.fragment,k),w=!1},d(k){k&&A(e),F(o),S.d(),v=!1,qe(P)}}}function ab(t,e,n){let s;return Qe(t,sb,c=>n(0,s=c)),[s,()=>xt.navigateTo("help"),()=>xt.navigateTo("search"),()=>xt.navigateTo("settings"),()=>xt.navigateTo("account")]}class cb extends J{constructor(e){super(),X(this,e,ab,ob,Q,{})}}const lb="modulepreload",ub=function(t){return"/"+t},ml={},Ii=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=ub(r),r in ml)return;ml[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":lb,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Gs=t=>typeof t=="string"&&t!=="",bi=t=>typeof t=="number"&&t>=0;class Tf{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,w,v,P,R,Z,S,k,M,oe,ce,ee){this.preview_url=e,this.sample_url=n,this.file_url=s,this.created_at=r,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=p,this.preview_width=m,this.preview_height=I,this.rating=w,this.sample_height=v,this.sample_width=P,this.score=R,this.source=Z,this.status=S,this.tags=k,this.width=M,this.comments_url=oe,this.owner_url=ce,this.type=ee,Object.freeze(this)}}const hb=t=>Array.isArray(t)&&t.every(e=>e instanceof Tf);class db{constructor(e,n){if(!bi(e))throw new TypeError("Invalid count passed to Page constructor");if(!hb(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const fb=Object.freeze(["id","score","updated"]),pb=t=>fb.includes(t),gr=Object.freeze(["+","-","~"]),Ti=t=>gr.includes(t),Ef=t=>{if(!Ti(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(gr.indexOf(t)+1)%gr.length;return gr[n]},gb=Object.freeze({"+":"","-":"-","~":""}),mb=t=>{if(!Ti(t))throw TypeError("Invalid modifier passed to serializeModifier");return gb[t]};class Ei{constructor(e,n){if(!Ti(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Gs(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${mb(this.modifier)}${encodeURIComponent(this.name)}`}}const kf=(t,e)=>{if(!Sf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!yb(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Sf=t=>{try{return new URL(t),!0}catch{return!1}},yb=t=>t===null||t instanceof AbortController,Af=20;let vb=null;const _b=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},wb=async(t,e,n,s)=>{bb(t,e,n,s);const r=Ab(e,n,s),i=await kf(Cb(t,r),vb);_b(i);const o=await i.text(),c=new DOMParser().parseFromString(o,"text/xml"),l=Number(c.getElementsByTagName("posts")[0].getAttribute("count")),u=[];for(const h of c.getElementsByTagName("post"))u.push(Ib(h.attributes));return new db(l,u)},Ib=t=>{const e=t.getNamedItem("height").value,n=t.getNamedItem("score").value,s=t.getNamedItem("file_url").value,r=t.getNamedItem("parent_id").value,i=t.getNamedItem("sample_url").value,o=t.getNamedItem("sample_width").value,a=t.getNamedItem("sample_height").value,c=t.getNamedItem("preview_url").value,l=t.getNamedItem("rating").value,u=t.getNamedItem("tags").value,h=t.getNamedItem("id").value,d=t.getNamedItem("width").value,p=t.getNamedItem("change").value,m=t.getNamedItem("md5").value,I=t.getNamedItem("creator_id").value,w=t.getNamedItem("has_children").value,v=t.getNamedItem("created_at").value,P=t.getNamedItem("status").value,R=t.getNamedItem("source").value,Z=t.getNamedItem("has_notes").value,S=t.getNamedItem("has_comments").value,k=t.getNamedItem("preview_width").value,M=t.getNamedItem("preview_height").value;return new Tf(c,i,s,v,w==="true",m,Number(e),Number(h),Number(p),Number(I),Z==="true",S==="true",r?Number(r):null,Number(k),Number(M),l,Number(a),Number(o),Number(n),R,P,u.split(" ").filter((oe,ce,ee)=>oe!==""&&ee.indexOf(oe)==ce),Number(d),"","",s.endsWith(".webm")||s.endsWith(".mp4")?"video":s.includes(".gif")?"gif":"image")},bb=(t,e,n,s)=>{if(!Tb(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!Eb(e))throw new TypeError("Invalid array of tags passed to getPage");if(!pb(n))throw new TypeError("Invalid sort property passed to getPage");if(!kb(s))throw new TypeError("Invalid minimum score passed to getPage")},Tb=t=>typeof t=="number"&&t>=0,Eb=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Ei)),kb=t=>typeof t=="number"&&t>=0,Sb=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Ab=(t,e,n)=>{const s=Sb(t),r=[...yl([...s["+"],...s["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return s["~"].length===0?r:`${r}+( ${yl(s["~"]).join(" ~ ")} )`},yl=t=>t.map(e=>e.serialize()),Cb=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=${Af}&pid=${t}`;return e===""?s:`${s}&tags=${e}`};class Nb{constructor(e,n,s){this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}}const vl="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",_l=async(t=void 0)=>{Rb(t);const e=t===void 0?vl:`${vl}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(Db(a.attributes));return o},Db=t=>new Nb(t.getNamedItem("creator").value,t.getNamedItem("created_at").value,t.getNamedItem("body").value),Rb=t=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId")},Ob=Object.freeze(["ambiguous","artist","character","copyright","general","metadata","rating","source","supertag"]),Cf=t=>Ob.includes(t);class ws{constructor(e,n,s,r){if(!Ti(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Gs(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!bi(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Cf(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}}const Nf=t=>new Ei(t.modifier,t.name);class Df{constructor(e,n,s){if(!Gs(e))throw TypeError("Invalid name passed to Tag constructor");if(!bi(n))throw TypeError("Invalid count passed to Tag constructor");if(!Cf(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const $b=(t,e)=>new ws(e,t.name,t.count,t.type);let Pb=null;const Rf=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await kf(`${e}${n}`,Pb);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new Df(Lb(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Lb=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'");class Of{constructor(e,n,s){if(!Gs(e))throw new TypeError("Invalid name passed to Supertag");if(!Mb(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const Mb=t=>Array.isArray(t)&&t.every(e=>e instanceof Ei),xb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Is(t);let s,r=null,i=null;return Du(Lt,async o=>{s=o,o?r=pl(rr(xn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=QI(PI(xn,`users/${o.uid}/supertags`));i==null||i(),i=pl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new Of(d.id,p.description,Object.entries(p.tags).map(m=>new Ei(m[1],m[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return fl(rr(xn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return JI(rr(xn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(!!s)return fl(rr(xn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},Br=xb();function Ub(t){let e,n,s,r;return{c(){e=y("button"),n=de(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){N(i,e,o),g(e,n),s||(r=W(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&ke(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:C,o:C,d(i){i&&A(e),s=!1,r()}}}function Fb(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=We(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class $f extends J{constructor(e){super(),X(this,e,Fb,Ub,Q,{text:0,title:1,disabled:2})}}function ki(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t(e))}}const Vb=Intl.NumberFormat("en",{notation:"compact"}),Dt=t=>{if(!bi(t))throw new TypeError("Invalid value passed to formatCount");return Vb.format(t)};function An(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const wl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function Bb(t){let e,n;return{c(){e=y("i"),f(e,"class",n=`codicon codicon-${wl[t[0]]}`)},m(s,r){N(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${wl[s[0]]}`)&&f(e,"class",n)},i:C,o:C,d(s){s&&A(e)}}}function jb(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class Pf extends J{constructor(e){super(),X(this,e,jb,Bb,Q,{type:0})}}const Il=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),bl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Tl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function El(t){let e,n=Dt(t[0].count)+"",s,r;return{c(){e=de("("),s=de(n),r=de(")")},m(i,o){N(i,e,o),N(i,s,o),N(i,r,o)},p(i,o){o&1&&n!==(n=Dt(i[0].count)+"")&&ke(s,n)},d(i){i&&A(e),i&&A(s),i&&A(r)}}}function qb(t){let e,n,s,r=An(t[0].name)+"",i,o,a,c,l,u;n=new Pf({props:{type:t[0].type}});let h=t[0].count&&El(t);return{c(){e=y("li"),V(n.$$.fragment),s=$(),i=de(r),o=$(),h&&h.c(),f(e,"class",a=St(Tl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Ue(e,"no-icon",t[0].type==="general")},m(d,p){N(d,e,p),U(n,e,null),g(e,s),g(e,i),g(e,o),h&&h.m(e,null),c=!0,l||(u=[W(e,"click",t[2]),W(e,"contextmenu",ko(t[3]))],l=!0)},p(d,[p]){const m={};p&1&&(m.type=d[0].type),n.$set(m),(!c||p&1)&&r!==(r=An(d[0].name)+"")&&ke(i,r),d[0].count?h?h.p(d,p):(h=El(d),h.c(),h.m(e,null)):h&&(h.d(1),h=null),(!c||p&1&&a!==(a=St(Tl[d[0].modifier])+" svelte-13vl0re"))&&f(e,"class",a),(!c||p&1)&&Ue(e,"no-icon",d[0].type==="general")},i(d){c||(_(n.$$.fragment,d),c=!0)},o(d){T(n.$$.fragment,d),c=!1},d(d){d&&A(e),F(n),h&&h.d(),l=!1,qe(u)}}}function zb(t,e,n){let{tag:s}=e;const r=We(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Lf extends J{constructor(e){super(),X(this,e,zb,qb,Q,{tag:0})}}function kl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Sl(t){let e,n;return e=new Lf({props:{tag:t[9]}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Hb(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,w,v,P,R,Z,S,k,M,oe,ce=t[2],ee=[];for(let ne=0;ne<ce.length;ne+=1)ee[ne]=Sl(kl(t,ce,ne));const Ln=ne=>T(ee[ne],1,1,()=>{ee[ne]=null});return S=new $f({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),S.$on("click",t[8]),{c(){e=y("dialog"),n=y("h3"),n.textContent="Create Supertag",s=$(),r=y("i"),i=$(),o=y("div"),a=y("label"),a.textContent="Name",c=$(),l=y("input"),u=$(),h=y("div"),d=y("label"),d.textContent="Description",p=$(),m=y("textarea"),I=$(),w=y("div"),v=y("span"),v.textContent="Tags",P=$(),R=y("ol");for(let ne=0;ne<ee.length;ne+=1)ee[ne].c();Z=$(),V(S.$$.fragment),f(r,"tabindex","0"),f(r,"class",St("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(m,"type","text"),f(m,"placeholder","Short description"),f(m,"id","supertag-description"),f(m,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(v,"class","svelte-ax50wm"),f(R,"class","svelte-ax50wm"),f(w,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(ne,se){N(ne,e,se),g(e,n),g(e,s),g(e,r),g(e,i),g(e,o),g(o,a),g(o,c),g(o,l),Tt(l,t[0]),g(e,u),g(e,h),g(h,d),g(h,p),g(h,m),Tt(m,t[1]),g(e,I),g(e,w),g(w,v),g(w,P),g(w,R);for(let Pe=0;Pe<ee.length;Pe+=1)ee[Pe].m(R,null);g(e,Z),U(S,e,null),k=!0,M||(oe=[W(r,"click",t[5]),W(r,"keyup",ki(t[5])),W(l,"input",t[6]),W(m,"input",t[7])],M=!0)},p(ne,[se]){if(se&1&&l.value!==ne[0]&&Tt(l,ne[0]),se&2&&Tt(m,ne[1]),se&4){ce=ne[2];let K;for(K=0;K<ce.length;K+=1){const Ks=kl(ne,ce,K);ee[K]?(ee[K].p(Ks,se),_(ee[K],1)):(ee[K]=Sl(Ks),ee[K].c(),_(ee[K],1),ee[K].m(R,null))}for(fe(),K=ce.length;K<ee.length;K+=1)Ln(K);pe()}const Pe={};se&8&&(Pe.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),se&8&&(Pe.disabled=!ne[3]),S.$set(Pe)},i(ne){if(!k){for(let se=0;se<ce.length;se+=1)_(ee[se]);_(S.$$.fragment,ne),k=!0}},o(ne){ee=ee.filter(Boolean);for(let se=0;se<ee.length;se+=1)T(ee[se]);T(S.$$.fragment,ne),k=!1},d(ne){ne&&A(e),tn(ee,ne),F(S),M=!1,qe(oe)}}}function Gb(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=We(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Of(r,i,o.map(Nf))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Gs(r))},[r,i,o,s,a,c,l,u,h]}class Kb extends J{constructor(e){super(),X(this,e,Gb,Hb,Q,{name:0,description:1,tags:2})}}function Wb(t){let e,n,s,r,i;return{c(){e=y("i"),f(e,"tabindex","0"),f(e,"class",n=St(`codicon codicon-${Il[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=bl[t[0]])},m(o,a){N(o,e,a),r||(i=[W(e,"click",t[1]),W(e,"keyup",ki(t[1])),W(e,"touchend",ko(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=St(`codicon codicon-${Il[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=bl[o[0]])&&f(e,"title",s)},i:C,o:C,d(o){o&&A(e),r=!1,qe(i)}}}function Qb(t,e,n){let s="+";const r=We();return[s,()=>{n(0,s=Ef(s)),r("change",s)}]}class Yb extends J{constructor(e){super(),X(this,e,Qb,Wb,Q,{})}}function Xb(t){let e;return{c(){e=y("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){N(n,e,s)},p:C,i:C,o:C,d(n){n&&A(e)}}}class La extends J{constructor(e){super(),X(this,e,null,Xb,Q,{})}}function Jb(t){let e,n,s,r,i=An(t[0].name)+"",o,a,c,l=Dt(t[0].count)+"",u,h,d,p,m;return n=new Pf({props:{type:t[0].type}}),{c(){e=y("li"),V(n.$$.fragment),s=$(),r=y("span"),o=de(i),a=$(),c=y("span"),u=de(l),f(r,"class","tag-name svelte-14cwkxh"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-14cwkxh")},m(I,w){N(I,e,w),U(n,e,null),g(e,s),g(e,r),g(r,o),g(e,a),g(e,c),g(c,u),d=!0,p||(m=W(e,"click",t[2]),p=!0)},p(I,[w]){const v={};w&1&&(v.type=I[0].type),n.$set(v),(!d||w&1)&&i!==(i=An(I[0].name)+"")&&ke(o,i),(!d||w&1)&&l!==(l=Dt(I[0].count)+"")&&ke(u,l),(!d||w&1&&h!==(h=I[0].name))&&f(e,"title",h)},i(I){d||(_(n.$$.fragment,I),d=!0)},o(I){T(n.$$.fragment,I),d=!1},d(I){I&&A(e),F(n),p=!1,m()}}}function Zb(t,e,n){let{tag:s}=e;const r=We(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class eT extends J{constructor(e){super(),X(this,e,Zb,Jb,Q,{tag:0})}}function Al(t,e,n){const s=t.slice();return s[16]=e[n],s}function tT(t){let e,n,s,r,i=t[19].message+"",o;return{c(){e=y("div"),n=y("i"),s=$(),r=y("span"),o=de(i),f(n,"class",St("codicon codicon-error")+" svelte-2fyyfo"),f(e,"class","suggestion-footer svelte-2fyyfo")},m(a,c){N(a,e,c),g(e,n),g(e,s),g(e,r),g(r,o)},p(a,c){c&2&&i!==(i=a[19].message+"")&&ke(o,i)},i:C,o:C,d(a){a&&A(e)}}}function nT(t){let e,n,s,r=t[4],i=[];for(let a=0;a<r.length;a+=1)i[a]=Cl(Al(t,r,a));const o=a=>T(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=$(),n=y("div"),f(n,"class","suggestion-footer svelte-2fyyfo")},m(a,c){for(let l=0;l<i.length;l+=1)i[l].m(a,c);N(a,e,c),N(a,n,c),s=!0},p(a,c){if(c&116){r=a[4];let l;for(l=0;l<r.length;l+=1){const u=Al(a,r,l);i[l]?(i[l].p(u,c),_(i[l],1)):(i[l]=Cl(u),i[l].c(),_(i[l],1),i[l].m(e.parentNode,e))}for(fe(),l=r.length;l<i.length;l+=1)o(l);pe()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)_(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)T(i[c]);s=!1},d(a){tn(i,a),a&&A(e),a&&A(n)}}}function Cl(t){let e,n;function s(){return t[12](t[16])}return e=new eT({props:{tag:t[16]}}),e.$on("click",s),{c(){V(e.$$.fragment)},m(r,i){U(e,r,i),n=!0},p(r,i){t=r;const o={};i&16&&(o.tag=t[16]),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){F(e,r)}}}function sT(t){let e,n,s;return n=new La({}),{c(){e=y("div"),V(n.$$.fragment),f(e,"class","suggestion-footer svelte-2fyyfo")},m(r,i){N(r,e,i),U(n,e,null),s=!0},p:C,i(r){s||(_(n.$$.fragment,r),s=!0)},o(r){T(n.$$.fragment,r),s=!1},d(r){r&&A(e),F(n)}}}function rT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m;o=new Yb({}),o.$on("change",t[9]);let I={ctx:t,current:null,token:null,hasCatch:!0,pending:sT,then:nT,catch:tT,error:19,blocks:[,,,]};return vr(h=t[1],I),{c(){e=y("div"),n=y("i"),s=$(),r=y("input"),i=$(),V(o.$$.fragment),a=$(),c=y("i"),l=$(),u=y("ol"),I.block.c(),f(n,"class","codicon codicon-search spaced svelte-2fyyfo"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-2fyyfo"),f(c,"tabindex","0"),f(c,"class","codicon codicon-question spaced svelte-2fyyfo"),f(u,"class","svelte-2fyyfo"),Ue(u,"open",t[3]),f(e,"class","searchbar svelte-2fyyfo"),Ue(e,"open",t[3])},m(w,v){N(w,e,v),g(e,n),g(e,s),g(e,r),Tt(r,t[0]),g(e,i),U(o,e,null),g(e,a),g(e,c),g(e,l),g(e,u),I.block.m(u,I.anchor=null),I.mount=()=>u,I.anchor=null,d=!0,p||(m=[W(r,"input",t[7]),W(r,"blur",t[8]),W(c,"click",t[10]),W(c,"keyup",ki(t[11])),W(e,"blur",t[13])],p=!0)},p(w,[v]){t=w,v&1&&r.value!==t[0]&&Tt(r,t[0]),I.ctx=t,v&2&&h!==(h=t[1])&&vr(h,I)||Zl(I,t,v),(!d||v&8)&&Ue(u,"open",t[3]),(!d||v&8)&&Ue(e,"open",t[3])},i(w){d||(_(o.$$.fragment,w),_(I.block),d=!0)},o(w){T(o.$$.fragment,w);for(let v=0;v<3;v+=1){const P=I.blocks[v];T(P)}d=!1},d(w){w&&A(e),F(o),I.block.d(),I.token=null,I=null,p=!1,qe(m)}}}function iT(t,e,n){let s;Qe(t,Br,R=>n(14,s=R));const r=We();let i,o="",a="+",c=!1,l=[];async function u(R){n(3,c=!0),n(4,l=[...s.supertags.filter(Z=>Z.name.toLowerCase().includes(R.toLowerCase())).map(Z=>new Df(Z.name,Object.keys(Z.tags).length,"supertag")),...await Rf(R)])}const h=()=>{n(0,o=""),n(4,l=[]),n(3,c=!1)};function d(){o=this.value,n(0,o)}const p=R=>{(!R.relatedTarget||!R.target.parentNode.contains(R.relatedTarget))&&n(3,c=!1)},m=R=>{n(2,a=R.detail)},I=()=>xt.navigateTo("help"),w=()=>xt.navigateTo("help"),v=R=>{r("pick",$b(R,a)),h()},P=()=>{n(3,c=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(4,l=[]),o!==""&&n(1,i=u(o)))},[o,i,a,c,l,r,h,d,p,m,I,w,v,P]}class oT extends J{constructor(e){super(),X(this,e,iT,rT,Q,{})}}const Mf=JSON.parse,xf=JSON.stringify,Uf=(t,e,n=xf,s=Mf)=>{const r=Vf(t,s),i=Is(r!=null?r:e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},Ff=(t,e,n=xf,s=Mf)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Vf(t,s):null,o=Is(i!=null?i:e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Vf=(t,e)=>{try{return e(localStorage.getItem(t))}catch{return null}};function aT(){const t=[],{subscribe:e,update:n,set:s}=Ff("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new ws("+",r,0,"general")),i));try{const i=await Rf(r,!0,1);if(Array.isArray(i)&&i.length===1){const o=i.at(0);n(a=>{const c=a.findIndex(l=>l.name===o.name);return a[c]=new ws("+",o.name,o.count,o.type),a})}}catch{console.warn("Failed to load type and count for tag.",r)}},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const dt=aT(),cT={id:0,width:0,height:0},lT=[{id:996911,width:300,height:112},{id:996914,width:728,height:102}],uT=lT.filter(t=>t.width<window.innerWidth);let Hn=cT;for(const t of uT)t.width>(Hn==null?void 0:Hn.width)&&(Hn=t);const hT=()=>Hn;function dT(t){let e,n,s,r,i,o;return{c(){e=y("script"),s=y("script"),s.textContent=";(adsbyjuicy = window.adsbyjuicy || []).push({ adzone: window.adZone.id })",r=$(),i=y("div"),o=y("ins"),f(e,"type","text/javascript"),f(e,"data-cfasync","false"),e.async=!0,Zn(e.src,n="https://poweredby.jads.co/js/jads.js")||f(e,"src",n),f(s,"type","text/javascript"),f(s,"data-cfasync","false"),s.async=!0,f(o,"id",window.adZone.id.toString()),f(o,"data-width",window.adZone.width),f(o,"data-height",window.adZone.height),f(i,"style",`height: ${window.adZone.height}px`),f(i,"class","svelte-hntawn")},m(a,c){g(document.head,e),g(document.head,s),N(a,r,c),N(a,i,c),g(i,o)},p:C,i:C,o:C,d(a){A(e),A(s),a&&A(r),a&&A(i)}}}window.adZone=hT();class fT extends J{constructor(e){super(),X(this,e,null,dT,Q,{})}}function pT(t){let e,n=An(t[0])+"",s,r,i;return{c(){e=y("li"),s=de(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-e4wl79"),Ue(e,"active",t[2])},m(o,a){N(o,e,a),g(e,s),r||(i=W(e,"click",t[4]),r=!0)},p(o,[a]){a&1&&n!==(n=An(o[0])+"")&&ke(s,n),a&4&&Ue(e,"active",o[2])},i:C,o:C,d(o){o&&A(e),r=!1,i()}}}function gT(t,e,n){let s,r,i;Qe(t,dt,c=>n(3,i=c));let{name:o}=e;const a=()=>r?dt.removeByIndex(s):dt.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,s=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,r=s>=0)},[o,s,r,i,a]}class mT extends J{constructor(e){super(),X(this,e,gT,pT,Q,{name:0})}}function yT(t){let e,n;return{c(){e=y("span"),n=de(t[0])},m(s,r){N(s,e,r),g(e,n)},p(s,r){r&1&&ke(n,s[0])},d(s){s&&A(e)}}}function vT(t){let e,n=t[1].hostname+"",s,r;return{c(){e=y("a"),s=de(n),f(e,"href",r=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-wfhmk4")},m(i,o){N(i,e,o),g(e,s)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&ke(s,n),o&2&&r!==(r=i[1].toString())&&f(e,"href",r)},d(i){i&&A(e)}}}function _T(t){let e,n,s;function r(a,c){return a[1]?vT:yT}let i=r(t),o=i(t);return{c(){e=y("i"),n=$(),o.c(),s=it(),f(e,"class","codicon codicon-link")},m(a,c){N(a,e,c),N(a,n,c),o.m(a,c),N(a,s,c)},p(a,[c]){i===(i=r(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(s.parentNode,s)))},i:C,o:C,d(a){a&&A(e),a&&A(n),o.d(a),a&&A(s)}}}function wT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=Sf(r)?new URL(r):null)},[r,s]}class IT extends J{constructor(e){super(),X(this,e,wT,_T,Q,{source:0})}}function bT(t){let e,n;const s=t[1].default,r=Kf(s,t,t[0],null);return{c(){e=y("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){N(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Qf(r,s,i,i[0],n?Wf(s,i[0],o,null):Yf(i[0]),null)},i(i){n||(_(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&A(e),r&&r.d(i)}}}function TT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class Eo extends J{constructor(e){super(),X(this,e,TT,bT,Q,{})}}const Nl=6e4,jr=t=>{if(!ET(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/Nl,s=new Date().getTime()/Nl-e;if(s<1)return"just now";if(s<60)return hn(s,"minute");const r=s/60;if(r<24)return hn(r,"hour");const i=r/24;if(i<7)return hn(i,"day");if(i<30.5)return hn(i/7,"week");if(i<365.25)return hn(i/30.5,"month");const o=i/365.25;return hn(o,"year")},ET=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",hn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function kT(t){let e,n,s,r=jr(t[0])+"",i;return{c(){e=y("i"),n=$(),s=y("span"),i=de(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){N(o,e,a),N(o,n,a),N(o,s,a),g(s,i)},p(o,[a]){a&1&&r!==(r=jr(o[0])+"")&&ke(i,r)},i:C,o:C,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function ST(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class AT extends J{constructor(e){super(),X(this,e,ST,kT,Q,{value:0})}}function CT(t){let e,n,s,r=Dt(t[0])+"",i;return{c(){e=y("i"),n=$(),s=y("span"),i=de(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){N(o,e,a),N(o,n,a),N(o,s,a),g(s,i)},p(o,[a]){a&1&&r!==(r=Dt(o[0])+"")&&ke(i,r)},i:C,o:C,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function NT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class DT extends J{constructor(e){super(),X(this,e,NT,CT,Q,{value:0})}}function RT(t){let e,n,s=t[0].author+"",r,i,o,a=jr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=y("div"),n=y("span"),r=de(s),i=$(),o=y("span"),c=de(a),l=$(),u=y("span"),d=de(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,m){N(p,e,m),g(e,n),g(n,r),g(e,i),g(e,o),g(o,c),g(e,l),g(e,u),g(u,d)},p(p,[m]){m&1&&s!==(s=p[0].author+"")&&ke(r,s),m&1&&a!==(a=jr(p[0].createdAt)+"")&&ke(c,a),m&1&&h!==(h=p[0].content+"")&&ke(d,h)},i:C,o:C,d(p){p&&A(e)}}}function OT(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class $T extends J{constructor(e){super(),X(this,e,OT,RT,Q,{comment:0})}}function Dl(t,e,n){const s=t.slice();return s[8]=e[n],s}function Rl(t,e,n){const s=t.slice();return s[4]=e[n],s}function Ol(t){let e,n,s;return{c(){e=y("i"),f(e,"class","codicon codicon-comment-discussion svelte-1mq2skj"),Ue(e,"active",t[1]==="comments")},m(r,i){N(r,e,i),n||(s=W(e,"click",t[3]),n=!0)},p(r,i){i&2&&Ue(e,"active",r[1]==="comments")},d(r){r&&A(e),n=!1,s()}}}function PT(t){let e,n;return e=new AT({props:{value:t[0].created_at}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].created_at),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function LT(t){let e,n;return e=new DT({props:{value:t[0].score}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function $l(t){let e,n;return e=new Eo({props:{$$slots:{default:[MT]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&2049&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function MT(t){let e,n;return e=new IT({props:{source:t[0].source}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function xT(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:qT,then:VT,catch:FT,value:7,blocks:[,,,]};return vr(n=_l(t[0].id),r),{c(){e=it(),r.block.c()},m(i,o){N(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=_l(t[0].id))&&vr(n,r)||Zl(r,t,o)},i(i){s||(_(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];T(a)}s=!1},d(i){i&&A(e),r.block.d(i),r.token=null,r=null}}}function UT(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=Ll(Rl(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=y("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-1mq2skj")},m(o,a){N(o,e,a);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=Rl(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=Ll(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(fe(),c=s.length;c<r.length;c+=1)i(c);pe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),tn(r,o)}}}function FT(t){return{c:C,m:C,p:C,i:C,o:C,d:C}}function VT(t){let e,n,s,r;const i=[jT,BT],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=it()},m(c,l){o[e].m(c,l),N(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(fe(),T(o[u],1,1,()=>{o[u]=null}),pe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function BT(t){let e;return{c(){e=y("span"),e.textContent="Comments for this post are no longer available",f(e,"class","no-comments svelte-1mq2skj")},m(n,s){N(n,e,s)},p:C,i:C,o:C,d(n){n&&A(e)}}}function jT(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=Pl(Dl(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=y("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-1mq2skj")},m(o,a){N(o,e,a);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=Dl(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=Pl(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(fe(),c=s.length;c<r.length;c+=1)i(c);pe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),tn(r,o)}}}function Pl(t){let e,n;return e=new $T({props:{comment:t[8]}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function qT(t){let e,n;return e=new La({}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Ll(t){let e,n;return e=new mT({props:{name:t[4]}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[4]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function zT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,w=t[0].has_comments&&Ol(t);o=new Eo({props:{$$slots:{default:[PT]},$$scope:{ctx:t}}}),c=new Eo({props:{$$slots:{default:[LT]},$$scope:{ctx:t}}});let v=t[0].source&&$l(t);const P=[UT,xT],R=[];function Z(S,k){return S[1]==="tags"?0:1}return h=Z(t),d=R[h]=P[h](t),{c(){e=y("div"),n=y("div"),s=y("i"),r=$(),w&&w.c(),i=$(),V(o.$$.fragment),a=$(),V(c.$$.fragment),l=$(),v&&v.c(),u=$(),d.c(),f(s,"class","codicon codicon-tag svelte-1mq2skj"),Ue(s,"active",t[1]==="tags"),f(n,"class","summary svelte-1mq2skj"),f(e,"class","details svelte-1mq2skj")},m(S,k){N(S,e,k),g(e,n),g(n,s),g(n,r),w&&w.m(n,null),g(n,i),U(o,n,null),g(n,a),U(c,n,null),g(n,l),v&&v.m(n,null),g(e,u),R[h].m(e,null),p=!0,m||(I=W(s,"click",t[2]),m=!0)},p(S,[k]){(!p||k&2)&&Ue(s,"active",S[1]==="tags"),S[0].has_comments?w?w.p(S,k):(w=Ol(S),w.c(),w.m(n,i)):w&&(w.d(1),w=null);const M={};k&2049&&(M.$$scope={dirty:k,ctx:S}),o.$set(M);const oe={};k&2049&&(oe.$$scope={dirty:k,ctx:S}),c.$set(oe),S[0].source?v?(v.p(S,k),k&1&&_(v,1)):(v=$l(S),v.c(),_(v,1),v.m(n,null)):v&&(fe(),T(v,1,1,()=>{v=null}),pe());let ce=h;h=Z(S),h===ce?R[h].p(S,k):(fe(),T(R[ce],1,1,()=>{R[ce]=null}),pe(),d=R[h],d?d.p(S,k):(d=R[h]=P[h](S),d.c()),_(d,1),d.m(e,null))},i(S){p||(_(o.$$.fragment,S),_(c.$$.fragment,S),_(v),_(d),p=!0)},o(S){T(o.$$.fragment,S),T(c.$$.fragment,S),T(v),T(d),p=!1},d(S){S&&A(e),w&&w.d(),F(o),F(c),v&&v.d(),R[h].d(),m=!1,I()}}}function HT(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class GT extends J{constructor(e){super(),X(this,e,HT,zT,Q,{post:0})}}const Ma=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function KT(t){let e,n,s,r,i,o,a,c;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){N(l,e,u),t[3](e),a||(c=W(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:C,o:C,d(l){l&&A(e),t[3](null),a=!1,c()}}}function WT(t,e,n){let{post:s}=e;const r=We();let i;function o(c){_n[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Ma.observe(i)},[s,i,r,o,a]}class QT extends J{constructor(e){super(),X(this,e,WT,KT,Q,{post:0})}}function YT(t){let e,n,s,r,i,o,a,c,l;return{c(){e=y("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,e.loop=a=t[0].tags.includes("loop"),f(e,"class","svelte-1gwvoya")},m(u,h){N(u,e,h),t[5](e),c||(l=[W(e,"click",ko(t[4])),W(e,"touchstart",t[2],{passive:!0}),W(e,"touchend",t[3],{passive:!0})],c=!0)},p(u,[h]){h&1&&n!==(n=u[0].sample_url)&&f(e,"data-src",n),h&1&&s!==(s=u[0].id.toString())&&f(e,"alt",s),h&1&&r!==(r=`aspect-ratio: ${u[0].width} / ${u[0].height}`)&&f(e,"style",r),h&1&&i!==(i=u[0].width)&&f(e,"width",i),h&1&&o!==(o=u[0].height)&&f(e,"height",o),h&1&&a!==(a=u[0].tags.includes("loop"))&&(e.loop=a)},i:C,o:C,d(u){u&&A(e),t[5](null),c=!1,qe(l)}}}function XT(t,e,n){let{post:s}=e;const r=We();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};function l(h){tp.call(this,t,h)}function u(h){_n[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Ma.observe(i)},[s,i,a,c,l,u]}class JT extends J{constructor(e){super(),X(this,e,XT,YT,Q,{post:0})}}function ZT(t){let e,n,s,r,i,o,a,c;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){N(l,e,u),t[3](e),a||(c=W(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:C,o:C,d(l){l&&A(e),t[3](null),a=!1,c()}}}function eE(t,e,n){let{post:s}=e;const r=We();let i;function o(c){_n[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Ma.observe(i)},[s,i,r,o,a]}class tE extends J{constructor(e){super(),X(this,e,eE,ZT,Q,{post:0})}}function nE(t){let e,n;return e=new tE({props:{post:t[0]}}),e.$on("click",t[2]),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function sE(t){let e,n;return e=new JT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function rE(t){let e,n;return e=new QT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Ml(t){let e,n;return e=new GT({props:{post:t[0]}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function iE(t){let e,n,s,r,i;const o=[rE,sE,nE],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&Ml(t);return{c(){e=y("div"),s.c(),r=$(),l&&l.c(),f(e,"class","post svelte-1b8286y"),f(e,"tabindex","0")},m(u,h){N(u,e,h),a[n].m(e,null),g(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(fe(),T(a[d],1,1,()=>{a[d]=null}),pe(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),_(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&_(l,1)):(l=Ml(u),l.c(),_(l,1),l.m(e,null)):l&&(fe(),T(l,1,1,()=>{l=null}),pe())},i(u){i||(_(s),_(l),i=!0)},o(u){T(s),T(l),i=!1},d(u){u&&A(e),a[n].d(),l&&l.d()}}}function oE(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class aE extends J{constructor(e){super(),X(this,e,oE,iE,Q,{post:0})}}function xl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Ul(t){let e,n;return e=new aE({props:{post:t[1]}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function cE(t){let e,n,s,r,i=t[0],o=[];for(let c=0;c<i.length;c+=1)o[c]=Ul(xl(t,i,c));const a=c=>T(o[c],1,1,()=>{o[c]=null});return s=new fT({}),{c(){e=y("ol");for(let c=0;c<o.length;c+=1)o[c].c();n=$(),V(s.$$.fragment),f(e,"class","page svelte-vcm6im")},m(c,l){N(c,e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);N(c,n,l),U(s,c,l),r=!0},p(c,[l]){if(l&1){i=c[0];let u;for(u=0;u<i.length;u+=1){const h=xl(c,i,u);o[u]?(o[u].p(h,l),_(o[u],1)):(o[u]=Ul(h),o[u].c(),_(o[u],1),o[u].m(e,null))}for(fe(),u=i.length;u<o.length;u+=1)a(u);pe()}},i(c){if(!r){for(let l=0;l<i.length;l+=1)_(o[l]);_(s.$$.fragment,c),r=!0}},o(c){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)T(o[l]);T(s.$$.fragment,c),r=!1},d(c){c&&A(e),tn(o,c),c&&A(n),F(s,c)}}}function lE(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class uE extends J{constructor(e){super(),X(this,e,lE,cE,Q,{posts:0})}}function hE(t){let e;return{c(){e=y("div")},m(n,s){N(n,e,s),t[1](e)},p:C,i:C,o:C,d(n){n&&A(e),t[1](null)}}}function dE(t,e,n){const s=We(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){_n[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class fE extends J{constructor(e){super(),X(this,e,dE,hE,Q,{})}}const pE="/assets/shironeko-x.c28cad00.png";function gE(t){let e,n,s,r,i;return{c(){e=y("div"),n=y("img"),r=$(),i=y("span"),i.textContent="You have reached the end",Zn(n.src,s=pE)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){N(o,e,a),g(e,n),g(e,r),g(e,i)},p:C,i:C,o:C,d(o){o&&A(e)}}}class mE extends J{constructor(e){super(),X(this,e,null,gE,Q,{})}}const yE="/assets/shironeko-confused.4071d5b2.png";function vE(t){let e,n,s,r,i;return{c(){e=y("div"),n=y("img"),r=$(),i=y("span"),i.textContent="No results found",Zn(n.src,s=yE)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){N(o,e,a),g(e,n),g(e,r),g(e,i)},p:C,i:C,o:C,d(o){o&&A(e)}}}class _E extends J{constructor(e){super(),X(this,e,null,vE,Q,{})}}const Fl=()=>({count:null,pages:[],nextPage:0,ids:new Set}),wE=t=>{const e={count:t.count,pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},IE=t=>{const e=JSON.parse(t);return{count:e.count,pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},bE=()=>{const{subscribe:t,update:e,set:n}=Ff("results",Fl(),wE,IE);return{subscribe:t,addPage(s){e(r=>{const i=s.posts.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{count:s.count,pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(Fl())}}},mr=bE(),TE={sortProperty:"id",minScore:0},EE=()=>{const{subscribe:t,set:e}=Uf("sort",TE);return{subscribe:t,set:e}},yr=EE();function Vl(t,e,n){const s=t.slice();return s[15]=e[n],s}function kE(t){let e,n;return e=new _E({}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function SE(t){let e,n,s=Dt(t[2].count)+"",r,i,o,a,c,l,u,h,d,p,m,I,w,v,P,R,Z,S,k,M,oe,ce,ee,Ln,ne,se=t[0]==="custom"&&Bl(t),Pe=t[2].pages,K=[];for(let q=0;q<Pe.length;q+=1)K[q]=jl(Vl(t,Pe,q));const Ks=q=>T(K[q],1,1,()=>{K[q]=null}),Ua=[CE,AE],vt=[];function Fa(q,le){return q[4]?0:1}return M=Fa(t),oe=vt[M]=Ua[M](t),{c(){e=y("div"),n=y("span"),r=de(s),i=de(" results"),a=$(),c=y("select"),l=y("option"),l.textContent="Date",u=y("option"),u.textContent="Score",h=y("option"),h.textContent="Updated",d=$(),p=y("select"),m=y("option"),m.textContent="Any Score",I=y("option"),I.textContent="Score > 10",w=y("option"),w.textContent="Score > 100",v=y("option"),v.textContent="Score > 1K",P=y("option"),P.textContent="Custom",R=$(),se&&se.c(),Z=$(),S=y("ol");for(let q=0;q<K.length;q+=1)K[q].c();k=$(),oe.c(),ce=it(),f(n,"title",o=`${t[2].count} results`),f(n,"class","svelte-1yfgwr6"),l.__value="id",l.value=l.__value,f(l,"class","svelte-1yfgwr6"),u.__value="score",u.value=u.__value,f(u,"class","svelte-1yfgwr6"),h.__value="updated",h.value=h.__value,f(h,"class","svelte-1yfgwr6"),f(c,"title","Sort results by"),f(c,"class","svelte-1yfgwr6"),t[5].sortProperty===void 0&&ts(()=>t[8].call(c)),m.__value=0,m.value=m.__value,f(m,"class","svelte-1yfgwr6"),I.__value=10,I.value=I.__value,f(I,"class","svelte-1yfgwr6"),w.__value=100,w.value=w.__value,f(w,"class","svelte-1yfgwr6"),v.__value=1e3,v.value=v.__value,f(v,"class","svelte-1yfgwr6"),P.__value="custom",P.value=P.__value,f(P,"class","svelte-1yfgwr6"),f(p,"title","Filter by score"),f(p,"class","svelte-1yfgwr6"),t[0]===void 0&&ts(()=>t[10].call(p)),f(e,"class","header svelte-1yfgwr6"),f(S,"class","svelte-1yfgwr6")},m(q,le){N(q,e,le),g(e,n),g(n,r),g(n,i),g(e,a),g(e,c),g(c,l),g(c,u),g(c,h),Qs(c,t[5].sortProperty),g(e,d),g(e,p),g(p,m),g(p,I),g(p,w),g(p,v),g(p,P),Qs(p,t[0]),g(e,R),se&&se.m(e,null),N(q,Z,le),N(q,S,le);for(let $t=0;$t<K.length;$t+=1)K[$t].m(S,null);N(q,k,le),vt[M].m(q,le),N(q,ce,le),ee=!0,Ln||(ne=[W(c,"change",t[8]),W(c,"change",t[9]),W(p,"change",t[10]),W(p,"change",t[11])],Ln=!0)},p(q,le){if((!ee||le&4)&&s!==(s=Dt(q[2].count)+"")&&ke(r,s),(!ee||le&4&&o!==(o=`${q[2].count} results`))&&f(n,"title",o),le&32&&Qs(c,q[5].sortProperty),le&1&&Qs(p,q[0]),q[0]==="custom"?se?se.p(q,le):(se=Bl(q),se.c(),se.m(e,null)):se&&(se.d(1),se=null),le&4){Pe=q[2].pages;let Le;for(Le=0;Le<Pe.length;Le+=1){const Va=Vl(q,Pe,Le);K[Le]?(K[Le].p(Va,le),_(K[Le],1)):(K[Le]=jl(Va),K[Le].c(),_(K[Le],1),K[Le].m(S,null))}for(fe(),Le=Pe.length;Le<K.length;Le+=1)Ks(Le);pe()}let $t=M;M=Fa(q),M===$t?vt[M].p(q,le):(fe(),T(vt[$t],1,1,()=>{vt[$t]=null}),pe(),oe=vt[M],oe?oe.p(q,le):(oe=vt[M]=Ua[M](q),oe.c()),_(oe,1),oe.m(ce.parentNode,ce))},i(q){if(!ee){for(let le=0;le<Pe.length;le+=1)_(K[le]);_(oe),ee=!0}},o(q){K=K.filter(Boolean);for(let le=0;le<K.length;le+=1)T(K[le]);T(oe),ee=!1},d(q){q&&A(e),se&&se.d(),q&&A(Z),q&&A(S),tn(K,q),q&&A(k),vt[M].d(q),q&&A(ce),Ln=!1,qe(ne)}}}function Bl(t){let e,n,s;return{c(){e=y("input"),f(e,"type","number"),f(e,"min","0"),f(e,"max","100000"),f(e,"step","1"),f(e,"class","svelte-1yfgwr6")},m(r,i){N(r,e,i),Tt(e,t[1]),n||(s=[W(e,"input",t[12]),W(e,"keyup",ki(DE)),W(e,"blur",t[13])],n=!0)},p(r,i){i&2&&Xl(e.value)!==r[1]&&Tt(e,r[1])},d(r){r&&A(e),n=!1,qe(s)}}}function jl(t){let e,n;return e=new uE({props:{posts:t[15]}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.posts=s[15]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function AE(t){let e,n;return e=new mE({}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function CE(t){let e,n;return e=new fE({}),e.$on("visible",t[14]),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function NE(t){let e,n,s,r;const i=[SE,kE],o=[];function a(c,l){return c[2].count?0:c[3]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=it()},m(c,l){~e&&o[e].m(c,l),N(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(fe(),T(o[u],1,1,()=>{o[u]=null}),pe()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(_(n),r=!0)},o(c){T(n),r=!1},d(c){~e&&o[e].d(c),c&&A(s)}}}const DE=t=>t.target.blur();function RE(t,e,n){let s,r,i,o,a;Qe(t,mr,P=>n(2,o=P)),Qe(t,yr,P=>n(5,a=P));const c=We();let l=0,u=0;function h(){a.sortProperty=ja(this),yr.set(a)}const d=()=>c("configchange");function p(){l=ja(this),n(0,l)}const m=()=>{l!=="custom"&&c("configchange")};function I(){u=Xl(this.value),n(1,u)}const w=()=>c("configchange"),v=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&3&&Xf(yr,a.minScore=l!=="custom"?l:u,a),t.$$.dirty&4&&n(7,s=o.count/Af),t.$$.dirty&132&&n(4,r=o.pages.length<s),t.$$.dirty&4&&n(3,i=o.count===0)},[l,u,o,i,r,a,c,s,h,d,p,m,I,w,v]}class OE extends J{constructor(e){super(),X(this,e,RE,NE,Q,{})}}function $E(t){let e,n,s;return{c(){e=y("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-ysmhyu"),Ue(e,"visible",t[0])},m(r,i){N(r,e,i),n||(s=W(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&Ue(e,"visible",r[0])},i:C,o:C,d(r){r&&A(e),n=!1,s()}}}function PE(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Jl(()=>{document.addEventListener("scroll",i,{passive:!0})}),ep(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class LE extends J{constructor(e){super(),X(this,e,PE,$E,Q,{})}}function ME(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=y("div"),n=y("div"),s=y("i"),i=$(),o=y("div"),a=y("h3"),c=de(t[2]),l=$(),u=y("span"),h=de(t[1]),f(s,"class",r=St(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){N(d,e,p),g(e,n),g(n,s),g(e,i),g(e,o),g(o,a),g(a,c),g(o,l),g(o,u),g(u,h)},p(d,[p]){p&1&&r!==(r=St(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&ke(c,d[2]),p&2&&ke(h,d[1])},i:C,o:C,d(d){d&&A(e)}}}function xE(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class Bf extends J{constructor(e){super(),X(this,e,xE,ME,Q,{icon:0,message:1,title:2})}}function UE(t){let e;return{c(){e=y("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){N(n,e,s)},p:C,i:C,o:C,d(n){n&&A(e)}}}class FE extends J{constructor(e){super(),X(this,e,null,UE,Q,{})}}function ql(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function zl(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=Hl(ql(t,r,c));const o=c=>T(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&Gl(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=$(),a&&a.c(),n=it()},m(c,l){for(let u=0;u<i.length;u+=1)i[u].m(c,l);N(c,e,l),a&&a.m(c,l),N(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=ql(c,r,u);i[u]?(i[u].p(h,l),_(i[u],1)):(i[u]=Hl(h),i[u].c(),_(i[u],1),i[u].m(e.parentNode,e))}for(fe(),u=r.length;u<i.length;u+=1)o(u);pe()}c[0].length>1?a?a.p(c,l):(a=Gl(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)_(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)T(i[l]);s=!1},d(c){tn(i,c),c&&A(e),a&&a.d(c),c&&A(n)}}}function Hl(t){let e,n;function s(){return t[2](t[7])}function r(){return t[3](t[5])}return e=new Lf({props:{tag:t[5]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){V(e.$$.fragment)},m(i,o){U(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[5]),e.$set(a)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){F(e,i)}}}function Gl(t){let e,n,s;return{c(){e=y("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1uhy4lk"></i>',f(e,"class","add-supertag svelte-1uhy4lk"),f(e,"title","Click to create a new supertag")},m(r,i){N(r,e,i),n||(s=W(e,"click",t[4]),n=!0)},p:C,d(r){r&&A(e),n=!1,s()}}}function VE(t){let e,n,s=t[0].length&&zl(t);return{c(){e=y("ul"),s&&s.c(),f(e,"class","svelte-1uhy4lk")},m(r,i){N(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&_(s,1)):(s=zl(r),s.c(),_(s,1),s.m(e,null)):s&&(fe(),T(s,1,1,()=>{s=null}),pe())},i(r){n||(_(s),n=!0)},o(r){T(s),n=!1},d(r){r&&A(e),s&&s.d()}}}function BE(t,e,n){let s;Qe(t,dt,c=>n(0,s=c));const r=We();return[s,r,c=>dt.removeByIndex(c),c=>dt.addOrReplace(new ws(Ef(c.modifier),c.name,c.count,c.type)),()=>r("supertag")]}class jE extends J{constructor(e){super(),X(this,e,BE,VE,Q,{})}}function qE(t){let e,n;return e=new OE({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function zE(t){let e,n,s,r;const i=[GE,HE],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=it()},m(c,l){o[e].m(c,l),N(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(fe(),T(o[u],1,1,()=>{o[u]=null}),pe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function HE(t){let e,n;return e=new Bf({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function GE(t){let e,n;return e=new Bf({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Kl(t){let e,n;return e=new Kb({props:{tags:t[2]}}),e.$on("submit",t[8]),e.$on("close",t[9]),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function KE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,w,v;n=new FE({}),r=new oT({}),r.$on("pick",t[5]),o=new jE({}),o.$on("supertag",t[6]),l=new $f({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[7]);const P=[zE,qE],R=[];function Z(k,M){return k[1]!==void 0?0:1}h=Z(t),d=R[h]=P[h](t),m=new LE({});let S=t[0]&&Kl(t);return{c(){e=y("div"),V(n.$$.fragment),s=$(),V(r.$$.fragment),i=$(),V(o.$$.fragment),a=$(),c=y("div"),V(l.$$.fragment),u=$(),d.c(),p=$(),V(m.$$.fragment),I=$(),S&&S.c(),w=it(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(k,M){N(k,e,M),U(n,e,null),g(e,s),U(r,e,null),g(e,i),U(o,e,null),g(e,a),g(e,c),U(l,c,null),N(k,u,M),R[h].m(k,M),N(k,p,M),U(m,k,M),N(k,I,M),S&&S.m(k,M),N(k,w,M),v=!0},p(k,[M]){let oe=h;h=Z(k),h===oe?R[h].p(k,M):(fe(),T(R[oe],1,1,()=>{R[oe]=null}),pe(),d=R[h],d?d.p(k,M):(d=R[h]=P[h](k),d.c()),_(d,1),d.m(p.parentNode,p)),k[0]?S?(S.p(k,M),M&1&&_(S,1)):(S=Kl(k),S.c(),_(S,1),S.m(w.parentNode,w)):S&&(fe(),T(S,1,1,()=>{S=null}),pe())},i(k){v||(_(n.$$.fragment,k),_(r.$$.fragment,k),_(o.$$.fragment,k),_(l.$$.fragment,k),_(d),_(m.$$.fragment,k),_(S),v=!0)},o(k){T(n.$$.fragment,k),T(r.$$.fragment,k),T(o.$$.fragment,k),T(l.$$.fragment,k),T(d),T(m.$$.fragment,k),T(S),v=!1},d(k){k&&A(e),F(n),F(r),F(o),F(l),k&&A(u),R[h].d(k),k&&A(p),F(m,k),k&&A(I),S&&S.d(k),k&&A(w)}}}function WE(t,e,n){let s,r,i,o;Qe(t,Br,v=>n(10,s=v)),Qe(t,dt,v=>n(2,r=v)),Qe(t,yr,v=>n(11,i=v)),Qe(t,mr,v=>n(12,o=v));let a=!1,c;const l=async()=>(mr.reset(),u()),u=async()=>{n(1,c=void 0);try{const v=h(),P=await wb(o.nextPage,v,i.sortProperty,i.minScore);mr.addPage(P)}catch(v){n(1,c=v),console.warn(v)}},h=()=>r.flatMap(v=>v.type==="supertag"?s.supertags.find(P=>P.name===v.name).tags:Nf(v));return[a,c,r,l,u,v=>dt.addOrReplace(v.detail),()=>{n(0,a=!0)},()=>l(),v=>{Br.addSupertag(v.detail),dt.set([new ws("+",v.detail.name,v.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class QE extends J{constructor(e){super(),X(this,e,WE,KE,Q,{})}}function YE(t){let e,n;return e=new La({}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function XE(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=new r(i())),{c(){e&&V(e.$$.fragment),n=it()},m(o,a){e&&U(e,o,a),N(o,n,a),s=!0},p(o,a){if(r!==(r=o[0])){if(e){fe();const c=e;T(c.$$.fragment,1,0,()=>{F(c,1)}),pe()}r?(e=new r(i()),V(e.$$.fragment),_(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}},i(o){s||(e&&_(e.$$.fragment,o),s=!0)},o(o){e&&T(e.$$.fragment,o),s=!1},d(o){o&&A(n),e&&F(e,o)}}}function JE(t){let e,n,s,r;const i=[XE,YE],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=it()},m(c,l){o[e].m(c,l),N(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(fe(),T(o[u],1,1,()=>{o[u]=null}),pe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function ZE(t,e,n){let{loadComponent:s}=e,r;return Jl(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class xa extends J{constructor(e){super(),X(this,e,ZE,JE,Q,{loadComponent:1})}}function e1(t){let e;return{c(){e=y("p"),e.textContent="You got lost..."},m(n,s){N(n,e,s)},i:C,o:C,d(n){n&&A(e)}}}function t1(t){let e,n;return e=new xa({props:{loadComponent:c1}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function n1(t){let e,n;return e=new xa({props:{loadComponent:a1}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function s1(t){let e,n;return e=new xa({props:{loadComponent:o1}}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function r1(t){let e,n;return e=new QE({}),{c(){V(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function i1(t){let e,n,s,r;const i=[r1,s1,n1,t1,e1],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=y("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){N(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(fe(),T(o[u],1,1,()=>{o[u]=null}),pe(),s=o[n],s||(s=o[n]=i[n](c),s.c()),_(s,1),s.m(e,null))},i(c){r||(_(s),r=!0)},o(c){T(s),r=!1},d(c){c&&A(e),o[n].d()}}}const o1=()=>Ii(()=>import("./Account.fb9f0d5f.js"),["assets/Account.fb9f0d5f.js","assets/Account.72046986.css"]),a1=()=>Ii(()=>import("./Preferences.b4992fe5.js"),["assets/Preferences.b4992fe5.js","assets/Preferences.e28acf3d.css","assets/ParagraphHeading.8ff4e0c1.js","assets/ParagraphHeading.5a89239e.css"]),c1=()=>Ii(()=>import("./Help.b5f3d161.js"),["assets/Help.b5f3d161.js","assets/Help.9081c352.css","assets/ParagraphHeading.8ff4e0c1.js","assets/ParagraphHeading.5a89239e.css"]);function l1(t,e,n){let s;return Qe(t,xt,r=>n(0,s=r)),[s]}class u1 extends J{constructor(e){super(),X(this,e,l1,i1,Q,{})}}function h1(t){let e;return{c(){e=y("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">\xA9 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){N(n,e,s)},p:C,i:C,o:C,d(n){n&&A(e)}}}class d1 extends J{constructor(e){super(),X(this,e,null,h1,Q,{})}}const{subscribe:f1,set:p1}=Uf("theme","dark"),Wl={subscribe:f1,set(t){p1(t),g1(t),Br.setTheme(t)}},g1=t=>{document.documentElement.classList.replace(m1(t),t)},m1=t=>t==="dark"?"light":"dark";function y1(t){let e,n,s,r,i,o;return e=new cb({}),s=new u1({}),i=new d1({}),{c(){V(e.$$.fragment),n=$(),V(s.$$.fragment),r=$(),V(i.$$.fragment)},m(a,c){U(e,a,c),N(a,n,c),U(s,a,c),N(a,r,c),U(i,a,c),o=!0},p:C,i(a){o||(_(e.$$.fragment,a),_(s.$$.fragment,a),_(i.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),T(s.$$.fragment,a),T(i.$$.fragment,a),o=!1},d(a){F(e,a),a&&A(n),F(s,a),a&&A(r),F(i,a)}}}function v1(t){return Wl.subscribe(e=>Wl.set(e))(),[]}class _1 extends J{constructor(e){super(),X(this,e,v1,y1,Q,{})}}function w1(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h,messageSW:d}=await Ii(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",p=>{p.isUpdate?window.location.reload():s==null||s()}),a.register({immediate:e}).then(p=>{i?i("/sw.js",p):r==null||r(p)}).catch(p=>{o==null||o(p)})}}return c=u(),l}new _1({target:document.getElementById("app")});w1();export{LE as $,F as A,_n as B,b1 as C,I1 as D,$f as E,Tt as F,Zn as G,sb as H,it as I,Qe as J,Br as K,gl as L,Tl as M,Uf as N,Kf as O,Qf as P,Yf as Q,Wf as R,J as S,ts as T,Qs as U,ja as V,Wl as W,Xf as X,Lf as Y,ws as Z,mT as _,f as a,Il as a0,N as b,C as c,A as d,y as e,An as f,de as g,g as h,X as i,ke as j,$ as k,W as l,_ as m,St as n,ki as o,ko as p,fe as q,qe as r,Q as s,Ue as t,pe as u,T as v,tn as w,We as x,V as y,U as z};