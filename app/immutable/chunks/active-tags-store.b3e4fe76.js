import{f as g,r as d,a as I}from"./tags.49324235.js";import{g as m}from"./tag-type-data.934b5280.js";import{d as T,e as A,S as v}from"./store-keys.b00e21d8.js";import{w as E}from"./index.97ca5757.js";const $=(t,s,a=T,e=A)=>{let n;n=localStorage.getItem("kurosearch:localstorage-enabled")==="true"?localStorage:sessionStorage;const r=n?n.getItem(t):null,o=U(s,r,e),c=E(o);return c.subscribe(i=>{sessionStorage.setItem(t,a(i)),localStorage.setItem(t,a(i))}),c},U=(t,s,a)=>{if(s===null)return t;try{const e=a(s);return e===void 0?t:!Array.isArray(e)&&typeof e=="object"&&typeof t=="object"?{...t,...e}:e}catch{return t}};let u=new Map;const j=20;let h=null;const Z=async(t,s)=>{const a=W(t,s),e=await g(a,h);l(e);try{const r=(await e.json()).map(f);return r.forEach(o=>{u.set(o.id,o)}),r}catch(n){return console.warn("Failed to get posts",n),[]}},k=async t=>{const s=await g(F(t),h);l(s);const a=await s.text(),n=new DOMParser().parseFromString(a,"text/xml"),r=Number(n.getElementsByTagName("posts")[0].getAttribute("count"));return M(r),r},J=async t=>{if(!u.has(t)){const a=new URL("https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1");a.searchParams.append("id",String(t));const e=await fetch(a);l(e);const n=await e.json(),r=f(n[0]);u.set(r.id,r)}const s=u.get(t);if(s===void 0)throw new Error("Post cannot be undefined");return s},l=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},f=t=>{const s=t.height,a=t.score,e=t.preview_url,n=t.file_url,r=t.parent_id,o=t.sample_url,c=t.sample_width,i=t.sample_height,b=t.rating,p=t.tag_info,w=t.tags,y=t.id,x=t.width,_=t.change,P=t.comment_count,S=t.status,N=t.source;return{preview_url:e,sample_url:o,file_url:n,comment_count:Number(P),height:Number(s),id:Number(y),change:Number(_)*1e3,parent_id:r?Number(r):void 0,rating:b,sample_height:Number(i),sample_width:Number(c),score:Number(a),source:N,status:S,tags:p?C(p):O(w),width:Number(x),type:R(n)}},C=t=>t.map(q).sort(D),O=t=>t.split(" ").map(B),q=({tag:t,count:s,type:a})=>({name:d(t),count:s,type:a}),B=t=>({name:d(t),count:0,type:"ambiguous"}),D=(t,s)=>m(t.type)-m(s.type),W=(t,s)=>{const e=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${j}&pid=${t}`;return s===""?e:`${e}&tags=${s}`},F=t=>{const s="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?s:`${s}&tags=${t}`},M=t=>{if(typeof t!="number")throw new Error("Unexpected response received in getPage")},R=t=>t.endsWith(".webm")||t.endsWith(".mp4")?"video":t.includes(".gif")?"gif":"image",G=()=>{const{subscribe:t,update:s,set:a}=$(v.ActiveTags,[]);return{subscribe:t,set:a,addOrReplace:e=>s(n=>{const r=n.findIndex(o=>o.name===e.name);return r===-1?n.push(e):n[r]=e,n}),addByName:async(e,n="+")=>{let r={modifier:n,name:e,count:0,type:"general"};try{const o=await I(e);r.count=(o==null?void 0:o.count)??0,r.type=(o==null?void 0:o.type)??"tag"}catch{}s(o=>(o.some(c=>c.name===e)||o.push(r),o))},removeByName:e=>s(n=>{const r=n.findIndex(o=>o.name===e);return n.splice(r,1),n}),reset:()=>a([])}},Q=G();export{Q as a,Z as b,k as c,W as d,J as g,$ as s};
