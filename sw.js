if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const c=e=>n(e,l),o={module:{uri:l},exports:a,require:c};s[l]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Account-19d80974.js",revision:null},{url:"assets/Account-72046986.css",revision:null},{url:"assets/Help-5af3a68d.js",revision:null},{url:"assets/Help-9081c352.css",revision:null},{url:"assets/index-23f2bdaa.css",revision:null},{url:"assets/index-49eba028.js",revision:null},{url:"assets/ParagraphHeading-5a89239e.css",revision:null},{url:"assets/ParagraphHeading-a3c15bff.js",revision:null},{url:"assets/Preferences-2a2b934e.css",revision:null},{url:"assets/Preferences-e32fc89b.js",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"index.html",revision:"1340e367f6c13709c8bfaae716b204f7"},{url:"favicon.svg",revision:"eab03dfe5ccb1524ef082450b747cce3"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"icon/ks-maskable-512.png",revision:"14c6032cb6956cdc3bda57cc456ba809"},{url:"icon/ks-maskable-384.png",revision:"a0906d55ea98b265d75d49f76344d02d"},{url:"icon/ks-maskable-192.png",revision:"f34bdd712e5ea412aea89f4435525abc"},{url:"icon/ks-maskable-128.png",revision:"a3b3875ad903817bff022199d3608202"},{url:"icon/ks-maskable-96.png",revision:"0ce162d432fcb2cad7b08f7d8f6ebc94"},{url:"icon/ks-maskable-72.png",revision:"788182b69089e5688984684eb1168b6f"},{url:"icon/ks-maskable-48.png",revision:"2d3cf18e219fbc88cf8a8f1987424be4"},{url:"icon/ks-192.png",revision:"d452288f387acf112128f851044effe5"},{url:"icon/ks-512.png",revision:"70db4e9987da17c5a645dbb61801e144"},{url:"manifest.webmanifest",revision:"99845bc74d8990136fc5032309faebfa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
