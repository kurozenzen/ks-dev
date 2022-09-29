import{S as Hs,i as Ms,s as Ss,e as a,j as n,t as d,a as l,n as Ae,b as i,c as t,d as ks,g as Is,h as r,X as k,Y as I,Z as Ls,_ as Os,w as u,$ as At,x as m,k as g,q as $,y as c}from"./index.b1870f0e.js";import{a as Es,P as Z}from"./ParagraphHeading.77095930.js";function As(v){let o,f,p,w,A,h,x,M,ue,S,U,H;return{c(){o=a("a"),f=a("div"),p=a("i"),A=n(),h=a("div"),x=a("h3"),M=d(v[2]),ue=n(),S=a("span"),U=d(v[3]),l(p,"class",w=Ae(`codicon codicon-${v[1]}`)+" svelte-1d41zj4"),l(f,"class","icon svelte-1d41zj4"),l(x,"class","svelte-1d41zj4"),l(h,"class","text"),l(o,"class","card svelte-1d41zj4"),l(o,"href",H=`#${v[0]}`)},m(T,C){i(T,o,C),t(o,f),t(f,p),t(o,A),t(o,h),t(h,x),t(x,M),t(h,ue),t(h,S),t(S,U)},p(T,[C]){C&2&&w!==(w=Ae(`codicon codicon-${T[1]}`)+" svelte-1d41zj4")&&l(p,"class",w),C&4&&ks(M,T[2]),C&8&&ks(U,T[3]),C&1&&H!==(H=`#${T[0]}`)&&l(o,"href",H)},i:Is,o:Is,d(T){T&&r(o)}}}function js(v,o,f){let{id:p}=o,{icon:w}=o,{title:A}=o,{description:h}=o;return v.$$set=x=>{"id"in x&&f(0,p=x.id),"icon"in x&&f(1,w=x.icon),"title"in x&&f(2,A=x.title),"description"in x&&f(3,h=x.description)},[p,w,A,h]}class tt extends Hs{constructor(o){super(),Ms(this,o,js,As,Ss,{id:0,icon:1,title:2,description:3})}}function zs(v){let o;return{c(){o=d("Documentation")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function Ds(v){let o;return{c(){o=d("Number Of Results")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function Ns(v){let o;return{c(){o=d("Sorting results")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function Ps(v){let o;return{c(){o=d("Filtering results")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function Us(v){let o;return{c(){o=d("Name")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function qs(v){let o;return{c(){o=d("Type")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function Ys(v){let o;return{c(){o=d("Count")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function Fs(v){let o;return{c(){o=d("Modifier")},m(f,p){i(f,o,p)},d(f){f&&r(o)}}}function Gs(v){let o,f,p,w,A,h,x,M,ue,S,U,H,T,C,st,me,lt,q,nt,ge,at,$e,it,Y,rt,ce,ot,ve,ft,F,pt,de,ut,he,mt,xe,gt,J,$t,we,ct,G,K,jt,Q,vt,_e,dt,ye,ht,R,xt,Te,wt,W,_t,Ce,yt,y,j,je,zt,ze,Dt,V,Nt,z,De,Pt,Ne,Ut,ee,qt,D,Pe,Yt,Ue,Ft,te,Gt,N,qe,Rt,Ye,Wt,se,Bt,P,Fe,Xt,Ge,Zt,le,Tt,B,Ct,be,bt,ke,kt,X,It,Ie,Ht,He,Mt,E,L,Re,Jt,We,Kt,Me,Qt,St,Vt,Se,es,ne,ts,b,Be,ss,Xe,ls,Ze,ns,Le,as,Lt,is,Oe,rs,ae,os,_,Je,fs,Ke,ps,Qe,us,O,ie,ms,re,gs,oe,$s,fe,cs,Ve,vs,Ee,ds,Ot,Et,pe,et;return o=new Es({props:{$$slots:{default:[zs]},$$scope:{ctx:v}}}),w=new tt({props:{id:"search",icon:"search",title:"Searching",description:"Explains how the searching in the app works on a high level."}}),h=new tt({props:{id:"tags",icon:"tag",title:"Tags",description:"Get information on tags, the different types and how to use them in a search."}}),M=new tt({props:{id:"account",icon:"account",title:"Account & Data",description:"Understand what data is collected from you, where it is stored and how you can control it."}}),S=new tt({props:{id:"development",icon:"code",title:"Development",description:"Read up on how kurosearch works under the hood. See the technologies used and how they fit together."}}),q=new Z({props:{$$slots:{default:[Ds]},$$scope:{ctx:v}}}),Y=new Z({props:{$$slots:{default:[Ns]},$$scope:{ctx:v}}}),F=new Z({props:{$$slots:{default:[Ps]},$$scope:{ctx:v}}}),K=new k({props:{tag:new I("+","some_tag_you_search_for",124232,"copyright")}}),Q=new Ls({props:{name:"some_tag_you_search_for"}}),R=new Z({props:{$$slots:{default:[Us]},$$scope:{ctx:v}}}),W=new Z({props:{$$slots:{default:[qs]},$$scope:{ctx:v}}}),V=new k({props:{tag:new I("+","aroma_sensei",3e3,"artist")}}),ee=new k({props:{tag:new I("+","samus_aran",16e3,"character")}}),te=new k({props:{tag:new I("+","harry_potter",5800,"copyright")}}),se=new k({props:{tag:new I("+","animated",294e3,"metadata")}}),le=new k({props:{tag:new I("+","my_tag_collection",5,"supertag")}}),B=new Z({props:{$$slots:{default:[Ys]},$$scope:{ctx:v}}}),X=new Z({props:{$$slots:{default:[Fs]},$$scope:{ctx:v}}}),ne=new k({props:{tag:new I("+","good",5,"general")}}),ae=new k({props:{tag:new I("-","bad",5,"general")}}),ie=new k({props:{tag:new I("~","princess_peach",16e3,"character")}}),re=new k({props:{tag:new I("~","princess_zelda",13e3,"character")}}),oe=new k({props:{tag:new I("~","princess_rosalina",7400,"character")}}),fe=new k({props:{tag:new I("~","princess_daisy",6900,"character")}}),pe=new Os({}),{c(){u(o.$$.fragment),f=n(),p=a("div"),u(w.$$.fragment),A=n(),u(h.$$.fragment),x=n(),u(M.$$.fragment),ue=n(),u(S.$$.fragment),U=n(),H=a("h2"),H.textContent="Searching",T=n(),C=a("p"),C.innerHTML=`All searching in kurosearch is based on so-called <em class="svelte-1gr5fx8">tags</em>. In that sense it is not like Google. With Google you
  can search for whole sentences or questions. In kurosearch you have to search for one of the predefined tags. Luckily,
  there are quite a lot of them.`,st=n(),me=a("p"),me.innerHTML=`The results you get when you click search are called <em class="svelte-1gr5fx8">posts</em>. If you start a search without any tags, you will
  get all posts.`,lt=n(),u(q.$$.fragment),nt=n(),ge=a("p"),ge.textContent=`In addition to the posts themselves you can also see how many posts matched your search. The count is located to the
  left immediately above the first post.`,at=n(),$e=a("p"),$e.textContent=`If your search did not match any posts that means you search for some tags that do not have any posts in common. You
  will also get a cute error message saying so.`,it=n(),u(Y.$$.fragment),rt=n(),ce=a("p"),ce.textContent=`Once you have searched, you can sort your results by using the selector above the first post. At the moment there are
  only two options available.`,ot=n(),ve=a("ul"),ve.innerHTML=`<li class="svelte-1gr5fx8"><em class="svelte-1gr5fx8">Date</em> 
    <p class="svelte-1gr5fx8">This is the default sorting. It will order the results in a way that newer results appear at the top of the search
      and older results at the bottom. This is useful if you want to see new posts.</p></li> 
  <li class="svelte-1gr5fx8"><em class="svelte-1gr5fx8">Score</em> 
    <p class="svelte-1gr5fx8">This option will order posts according to the number of likes they received. Posts with more likes will be shown
      first. This is useful if you are interested in the most popular posts.</p></li>`,ft=n(),u(F.$$.fragment),pt=n(),de=a("p"),de.textContent=`In addition to sorting kurosearch also support a simple form of filtering. Currently, only filtering by posts is
  supported.`,ut=n(),he=a("p"),he.textContent="The filter selection is located at the top right of the first post",mt=n(),xe=a("p"),xe.innerHTML=`<em class="svelte-1gr5fx8">NOTE:</em> Because I could not figure out a good User Experience for a number input, I have decided to provide a
  few predefined options for now. Let me know on Discord if you would like to have the number input from
  <em class="svelte-1gr5fx8">r34-react</em> back :)`,gt=n(),J=a("h2"),J.textContent="Tags",$t=n(),we=a("p"),we.innerHTML=`When you input something into the searchbar you will get some suggestions. These things are called <em class="svelte-1gr5fx8">tags</em>. They
  will usually be presented like this.`,ct=n(),G=a("div"),u(K.$$.fragment),jt=n(),u(Q.$$.fragment),vt=n(),_e=a("p"),_e.textContent="A tag is characterised by four things.",dt=n(),ye=a("ul"),ye.innerHTML=`<li class="svelte-1gr5fx8">Name</li> 
  <li class="svelte-1gr5fx8">Type</li> 
  <li class="svelte-1gr5fx8">Count</li> 
  <li class="svelte-1gr5fx8">Modifier</li>`,ht=n(),u(R.$$.fragment),xt=n(),Te=a("p"),Te.textContent=`The name of the tag is what you actually search for. It is usually pretty descriptive and well defined. Oftentimes,
  there are multiple tags for the same thing though so it might take a bit of trial and error to find the best one for
  you.`,wt=n(),u(W.$$.fragment),_t=n(),Ce=a("p"),Ce.textContent=`The type indicates what kind of tag it is. It is displayed in form of an icon right before the name of the tag. the
  possible types are the following.`,yt=n(),y=a("ul"),j=a("li"),je=a("em"),je.textContent="Artist",zt=n(),ze=a("p"),ze.textContent="Target artists or content creators.",Dt=n(),u(V.$$.fragment),Nt=n(),z=a("li"),De=a("em"),De.textContent="Character",Pt=n(),Ne=a("p"),Ne.textContent="Indicates that the tag is targeting a character of some sort.",Ut=n(),u(ee.$$.fragment),qt=n(),D=a("li"),Pe=a("em"),Pe.textContent="Copyright",Yt=n(),Ue=a("p"),Ue.textContent="Targets a certain franchise or similar.",Ft=n(),u(te.$$.fragment),Gt=n(),N=a("li"),qe=a("em"),qe.textContent="Metadata",Rt=n(),Ye=a("p"),Ye.textContent="Tags of this type are information about the post itself and not the content.",Wt=n(),u(se.$$.fragment),Bt=n(),P=a("li"),Fe=a("em"),Fe.textContent="Supertag",Xt=n(),Ge=a("p"),Ge.textContent="Indicates that the tag is not a simple tag, but rather a collection of tags called a supertag.",Zt=n(),u(le.$$.fragment),Tt=n(),u(B.$$.fragment),Ct=n(),be=a("p"),be.textContent="The count of a tag displays how many post are tagged with it.",bt=n(),ke=a("p"),ke.textContent="For supertags the count shows how many tags are in it.",kt=n(),u(X.$$.fragment),It=n(),Ie=a("p"),Ie.innerHTML=`In kurosearch tags can have modifiers that change how they influence your search. You can change the modifier directly
  in the searchbar. Intuitively, you would think like this: Picking a tag means posts in the results will have it,
  right? In kurosearch this is done with the <em class="svelte-1gr5fx8">include</em> modifier.`,Ht=n(),He=a("p"),He.textContent="The available modifiers are:",Mt=n(),E=a("ul"),L=a("li"),Re=a("em"),Re.textContent="Include",Jt=d(` (+)
    `),We=a("p"),We.textContent=`This is the default modifier. Using it with tags will make the search include them. This means that all posts in
      the results will have every include tag on them. Use this modifier for all things that you definitely want to see.`,Kt=n(),Me=a("div"),Qt=d("Icon:"),St=a("i"),Vt=n(),Se=a("div"),es=d(`Example:
      `),u(ne.$$.fragment),ts=n(),b=a("li"),Be=a("em"),Be.textContent="Exclude",ss=d(` (-)
    `),Xe=a("p"),Xe.textContent=`The exclude modifier is subtractive. If you exclude a tag, the results will NOT have that tag. Even if a post
      would be included in your search otherwise, if it has one of your exclude tags on it, it will not be shown. Use
      this for all things that you dislike and don't want to see at all.`,ls=n(),Ze=a("p"),Ze.innerHTML=`<em class="svelte-1gr5fx8">TIP:</em> You can create a supertag with all your exclude tags so they are saved between site visits. That makes
      excluding your turnoffs really easy.`,ns=n(),Le=a("div"),as=d("Icon:"),Lt=a("i"),is=n(),Oe=a("div"),rs=d(`Example:
      `),u(ae.$$.fragment),os=n(),_=a("li"),Je=a("em"),Je.textContent="Optional",fs=d(` (~)
    `),Ke=a("p"),Ke.textContent=`The optional tags are the most complicated ones. When adding multiple optional tags, all results will include at
      least one of the optional tags. That means that optional tags only become effective once you have two of them.
      Optional tags are useful when there are multiple tags for the same thing or you are not searching for one specific
      thing but multiple instead.`,ps=n(),Qe=a("p"),Qe.textContent="To understand it better here is an example. If you search for the following tags...",us=n(),O=a("div"),u(ie.$$.fragment),ms=n(),u(re.$$.fragment),gs=n(),u(oe.$$.fragment),$s=n(),u(fe.$$.fragment),cs=n(),Ve=a("p"),Ve.textContent="...then all results will have at least one of the princesses in them, but not neccessarily all of them.",vs=n(),Ee=a("div"),ds=d("Icon:"),Ot=a("i"),Et=n(),u(pe.$$.fragment),l(p,"class","cards svelte-1gr5fx8"),l(H,"id","search"),l(H,"class","svelte-1gr5fx8"),l(C,"class","svelte-1gr5fx8"),l(me,"class","svelte-1gr5fx8"),l(ge,"class","svelte-1gr5fx8"),l($e,"class","svelte-1gr5fx8"),l(ce,"class","svelte-1gr5fx8"),l(ve,"class","svelte-1gr5fx8"),l(de,"class","svelte-1gr5fx8"),l(he,"class","svelte-1gr5fx8"),l(xe,"class","svelte-1gr5fx8"),l(J,"id","tags"),l(J,"class","svelte-1gr5fx8"),l(we,"class","svelte-1gr5fx8"),l(G,"class","flex-row svelte-1gr5fx8"),l(_e,"class","svelte-1gr5fx8"),l(ye,"class","svelte-1gr5fx8"),l(Te,"class","svelte-1gr5fx8"),l(Ce,"class","svelte-1gr5fx8"),l(je,"class","svelte-1gr5fx8"),l(ze,"class","svelte-1gr5fx8"),l(j,"class","svelte-1gr5fx8"),l(De,"class","svelte-1gr5fx8"),l(Ne,"class","svelte-1gr5fx8"),l(z,"class","svelte-1gr5fx8"),l(Pe,"class","svelte-1gr5fx8"),l(Ue,"class","svelte-1gr5fx8"),l(D,"class","svelte-1gr5fx8"),l(qe,"class","svelte-1gr5fx8"),l(Ye,"class","svelte-1gr5fx8"),l(N,"class","svelte-1gr5fx8"),l(Fe,"class","svelte-1gr5fx8"),l(Ge,"class","svelte-1gr5fx8"),l(P,"class","svelte-1gr5fx8"),l(y,"class","svelte-1gr5fx8"),l(be,"class","svelte-1gr5fx8"),l(ke,"class","svelte-1gr5fx8"),l(Ie,"class","svelte-1gr5fx8"),l(He,"class","svelte-1gr5fx8"),l(Re,"class","svelte-1gr5fx8"),l(We,"class","svelte-1gr5fx8"),l(St,"class",Ae(`codicon codicon-${At["+"]}`)+" svelte-1gr5fx8"),l(Me,"class","flex-row svelte-1gr5fx8"),l(Se,"class","flex-row svelte-1gr5fx8"),l(L,"class","svelte-1gr5fx8"),l(Be,"class","svelte-1gr5fx8"),l(Xe,"class","svelte-1gr5fx8"),l(Ze,"class","svelte-1gr5fx8"),l(Lt,"class",Ae(`codicon codicon-${At["-"]}`)+" svelte-1gr5fx8"),l(Le,"class","flex-row svelte-1gr5fx8"),l(Oe,"class","flex-row svelte-1gr5fx8"),l(b,"class","svelte-1gr5fx8"),l(Je,"class","svelte-1gr5fx8"),l(Ke,"class","svelte-1gr5fx8"),l(Qe,"class","svelte-1gr5fx8"),l(O,"class","flex-row svelte-1gr5fx8"),l(Ve,"class","svelte-1gr5fx8"),l(Ot,"class",Ae(`codicon codicon-${At["~"]}`)+" svelte-1gr5fx8"),l(Ee,"class","flex-row svelte-1gr5fx8"),l(_,"class","svelte-1gr5fx8"),l(E,"class","svelte-1gr5fx8")},m(e,s){m(o,e,s),i(e,f,s),i(e,p,s),m(w,p,null),t(p,A),m(h,p,null),t(p,x),m(M,p,null),t(p,ue),m(S,p,null),i(e,U,s),i(e,H,s),i(e,T,s),i(e,C,s),i(e,st,s),i(e,me,s),i(e,lt,s),m(q,e,s),i(e,nt,s),i(e,ge,s),i(e,at,s),i(e,$e,s),i(e,it,s),m(Y,e,s),i(e,rt,s),i(e,ce,s),i(e,ot,s),i(e,ve,s),i(e,ft,s),m(F,e,s),i(e,pt,s),i(e,de,s),i(e,ut,s),i(e,he,s),i(e,mt,s),i(e,xe,s),i(e,gt,s),i(e,J,s),i(e,$t,s),i(e,we,s),i(e,ct,s),i(e,G,s),m(K,G,null),t(G,jt),m(Q,G,null),i(e,vt,s),i(e,_e,s),i(e,dt,s),i(e,ye,s),i(e,ht,s),m(R,e,s),i(e,xt,s),i(e,Te,s),i(e,wt,s),m(W,e,s),i(e,_t,s),i(e,Ce,s),i(e,yt,s),i(e,y,s),t(y,j),t(j,je),t(j,zt),t(j,ze),t(j,Dt),m(V,j,null),t(y,Nt),t(y,z),t(z,De),t(z,Pt),t(z,Ne),t(z,Ut),m(ee,z,null),t(y,qt),t(y,D),t(D,Pe),t(D,Yt),t(D,Ue),t(D,Ft),m(te,D,null),t(y,Gt),t(y,N),t(N,qe),t(N,Rt),t(N,Ye),t(N,Wt),m(se,N,null),t(y,Bt),t(y,P),t(P,Fe),t(P,Xt),t(P,Ge),t(P,Zt),m(le,P,null),i(e,Tt,s),m(B,e,s),i(e,Ct,s),i(e,be,s),i(e,bt,s),i(e,ke,s),i(e,kt,s),m(X,e,s),i(e,It,s),i(e,Ie,s),i(e,Ht,s),i(e,He,s),i(e,Mt,s),i(e,E,s),t(E,L),t(L,Re),t(L,Jt),t(L,We),t(L,Kt),t(L,Me),t(Me,Qt),t(Me,St),t(L,Vt),t(L,Se),t(Se,es),m(ne,Se,null),t(E,ts),t(E,b),t(b,Be),t(b,ss),t(b,Xe),t(b,ls),t(b,Ze),t(b,ns),t(b,Le),t(Le,as),t(Le,Lt),t(b,is),t(b,Oe),t(Oe,rs),m(ae,Oe,null),t(E,os),t(E,_),t(_,Je),t(_,fs),t(_,Ke),t(_,ps),t(_,Qe),t(_,us),t(_,O),m(ie,O,null),t(O,ms),m(re,O,null),t(O,gs),m(oe,O,null),t(O,$s),m(fe,O,null),t(_,cs),t(_,Ve),t(_,vs),t(_,Ee),t(Ee,ds),t(Ee,Ot),i(e,Et,s),m(pe,e,s),et=!0},p(e,[s]){const hs={};s&1&&(hs.$$scope={dirty:s,ctx:e}),o.$set(hs);const xs={};s&1&&(xs.$$scope={dirty:s,ctx:e}),q.$set(xs);const ws={};s&1&&(ws.$$scope={dirty:s,ctx:e}),Y.$set(ws);const _s={};s&1&&(_s.$$scope={dirty:s,ctx:e}),F.$set(_s);const ys={};s&1&&(ys.$$scope={dirty:s,ctx:e}),R.$set(ys);const Ts={};s&1&&(Ts.$$scope={dirty:s,ctx:e}),W.$set(Ts);const Cs={};s&1&&(Cs.$$scope={dirty:s,ctx:e}),B.$set(Cs);const bs={};s&1&&(bs.$$scope={dirty:s,ctx:e}),X.$set(bs)},i(e){et||(g(o.$$.fragment,e),g(w.$$.fragment,e),g(h.$$.fragment,e),g(M.$$.fragment,e),g(S.$$.fragment,e),g(q.$$.fragment,e),g(Y.$$.fragment,e),g(F.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(R.$$.fragment,e),g(W.$$.fragment,e),g(V.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(se.$$.fragment,e),g(le.$$.fragment,e),g(B.$$.fragment,e),g(X.$$.fragment,e),g(ne.$$.fragment,e),g(ae.$$.fragment,e),g(ie.$$.fragment,e),g(re.$$.fragment,e),g(oe.$$.fragment,e),g(fe.$$.fragment,e),g(pe.$$.fragment,e),et=!0)},o(e){$(o.$$.fragment,e),$(w.$$.fragment,e),$(h.$$.fragment,e),$(M.$$.fragment,e),$(S.$$.fragment,e),$(q.$$.fragment,e),$(Y.$$.fragment,e),$(F.$$.fragment,e),$(K.$$.fragment,e),$(Q.$$.fragment,e),$(R.$$.fragment,e),$(W.$$.fragment,e),$(V.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(se.$$.fragment,e),$(le.$$.fragment,e),$(B.$$.fragment,e),$(X.$$.fragment,e),$(ne.$$.fragment,e),$(ae.$$.fragment,e),$(ie.$$.fragment,e),$(re.$$.fragment,e),$(oe.$$.fragment,e),$(fe.$$.fragment,e),$(pe.$$.fragment,e),et=!1},d(e){c(o,e),e&&r(f),e&&r(p),c(w),c(h),c(M),c(S),e&&r(U),e&&r(H),e&&r(T),e&&r(C),e&&r(st),e&&r(me),e&&r(lt),c(q,e),e&&r(nt),e&&r(ge),e&&r(at),e&&r($e),e&&r(it),c(Y,e),e&&r(rt),e&&r(ce),e&&r(ot),e&&r(ve),e&&r(ft),c(F,e),e&&r(pt),e&&r(de),e&&r(ut),e&&r(he),e&&r(mt),e&&r(xe),e&&r(gt),e&&r(J),e&&r($t),e&&r(we),e&&r(ct),e&&r(G),c(K),c(Q),e&&r(vt),e&&r(_e),e&&r(dt),e&&r(ye),e&&r(ht),c(R,e),e&&r(xt),e&&r(Te),e&&r(wt),c(W,e),e&&r(_t),e&&r(Ce),e&&r(yt),e&&r(y),c(V),c(ee),c(te),c(se),c(le),e&&r(Tt),c(B,e),e&&r(Ct),e&&r(be),e&&r(bt),e&&r(ke),e&&r(kt),c(X,e),e&&r(It),e&&r(Ie),e&&r(Ht),e&&r(He),e&&r(Mt),e&&r(E),c(ne),c(ae),c(ie),c(re),c(oe),c(fe),e&&r(Et),c(pe,e)}}}class Bs extends Hs{constructor(o){super(),Ms(this,o,null,Gs,Ss,{})}}export{Bs as default};