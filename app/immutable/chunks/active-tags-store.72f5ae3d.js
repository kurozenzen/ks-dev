import{f as p,r as N,a as S}from"./tags.afa77e19.js";import{g}from"./tag-type-data.934b5280.js";import{d as I,a as A,S as T}from"./store-keys.e70c3dff.js";import{w as E}from"./index.ec6ffced.js";let u=new Map;const $=20;let d=null;const K=async(t,e)=>{const a=C(t,e);console.log(a);const s=await p(a,d);l(s);try{const r=(await s.json()).map(m);return r.forEach(o=>{u.set(o.id,o)}),r}catch{return[]}},L=async t=>{const e=await p(O(t),d);l(e);const a=await e.text(),n=new DOMParser().parseFromString(a,"text/xml"),r=Number(n.getElementsByTagName("posts")[0].getAttribute("count"));return q(r),r},V=async t=>{if(!u.has(t)){const a=new URL("https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1");a.searchParams.append("id",String(t));const s=await fetch(a);l(s);const n=await s.json(),r=m(n[0]);u.set(r.id,r)}const e=u.get(t);if(e===void 0)throw new Error("Post cannot be undefined");return e},l=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},m=t=>{const e=t.height,a=t.score,s=t.preview_url,n=t.file_url,r=t.parent_id,o=t.sample_url,i=t.sample_width,c=t.sample_height,h=t.rating,f=t.tag_info,b=t.id,w=t.width,x=t.change,y=t.comment_count,_=t.status,P=t.source;return{preview_url:s,sample_url:o,file_url:n,comment_count:Number(y),height:Number(e),id:Number(b),change:Number(x)*1e3,parent_id:r?Number(r):void 0,rating:h,sample_height:Number(c),sample_width:Number(i),score:Number(a),source:P,status:_,tags:v(f),width:Number(w),type:B(n)}},v=t=>t.map(U).sort(j),U=({tag:t,count:e,type:a})=>({name:N(t),count:e,type:a}),j=(t,e)=>g(t.type)-g(e.type),C=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${$}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},O=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},q=t=>{if(typeof t!="number")throw new Error("Unexpected response received in getPage")},B=t=>t.endsWith(".webm")||t.endsWith(".mp4")?"video":t.includes(".gif")?"gif":"image",D=(t,e,a=I,s=A)=>{let n;n=localStorage.getItem("kurosearch:localstorage-enabled")==="true"?localStorage:sessionStorage;const r=n?n.getItem(t):null,o=W(e,r,s),i=E(o);return i.subscribe(c=>{sessionStorage.setItem(t,a(c)),localStorage.setItem(t,a(c))}),i},W=(t,e,a)=>{if(e===null)return t;try{const s=a(e);return s===void 0?t:!Array.isArray(s)&&typeof s=="object"&&typeof t=="object"?{...t,...s}:s}catch{return t}},M=()=>{const{subscribe:t,update:e,set:a}=D(T.ActiveTags,[]);return{subscribe:t,set:a,addOrReplace:s=>e(n=>{const r=n.findIndex(o=>o.name===s.name);return r===-1?n.push(s):n[r]=s,n}),addByName:async s=>{let n={modifier:"+",name:s,count:0,type:"general"};try{const r=await S(s);n.count=r.count,n.type=r.type}catch{}e(r=>(r.push(n),r))},removeByName:s=>e(n=>{const r=n.findIndex(o=>o.name===s);return n.splice(r,1),n}),reset:()=>a([])}},Z=M();export{Z as a,K as b,L as c,C as d,V as g,D as s};
