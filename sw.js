if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const a=e=>n(e,c),d={module:{uri:c},exports:o,require:a};i[c]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.9869a73d.css",revision:null},{url:"assets/index.df1d5da7.js",revision:null},{url:"index.html",revision:"19d6fb5750dae296387b7f59a889bae6"},{url:"favicon.svg",revision:"498a1b7a20d0cdaa04cac7559b826aae"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"icon/ks-192.png",revision:"d452288f387acf112128f851044effe5"},{url:"icon/ks-512.png",revision:"70db4e9987da17c5a645dbb61801e144"},{url:"icon/ks-192-maskable.png",revision:"aafb9bcea68e2a734da3ec09178cd7b0"},{url:"icon/ks-512-maskable.png",revision:"2339aa75a79fdaad8d801a8538ed2724"},{url:"manifest.webmanifest",revision:"fdbd30096ccde29e07755cdc4b8139cf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
