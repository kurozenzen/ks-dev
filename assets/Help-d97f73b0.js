import{S as Ns,i as qs,s as Fs,e as n,j as a,t as d,a as l,n as Ge,b as i,c as t,d as Us,g as Ds,h as r,_ as I,$ as k,a0 as qe,a1 as Fe,a2 as Gs,w as g,a3 as Ft,x as m,k as u,q as $,y as c}from"./index-39859c2f.js";import{a as Rs,P as K}from"./ParagraphHeading-9f9b2ea1.js";function Ws(v){let f,o,p,w,j,h,x,S,xe,H,N,M;return{c(){f=n("a"),o=n("div"),p=n("i"),j=a(),h=n("div"),x=n("h3"),S=d(v[2]),xe=a(),H=n("span"),N=d(v[3]),l(p,"class",w=Ge(`codicon codicon-${v[1]}`)+" svelte-1d41zj4"),l(o,"class","icon svelte-1d41zj4"),l(x,"class","svelte-1d41zj4"),l(h,"class","text"),l(f,"class","card svelte-1d41zj4"),l(f,"href",M=`#${v[0]}`)},m(C,T){i(C,f,T),t(f,o),t(o,p),t(f,j),t(f,h),t(h,x),t(x,S),t(h,xe),t(h,H),t(H,N)},p(C,[T]){T&2&&w!==(w=Ge(`codicon codicon-${C[1]}`)+" svelte-1d41zj4")&&l(p,"class",w),T&4&&Us(S,C[2]),T&8&&Us(N,C[3]),T&1&&M!==(M=`#${C[0]}`)&&l(f,"href",M)},i:Ds,o:Ds,d(C){C&&r(f)}}}function Ys(v,f,o){let{id:p}=f,{icon:w}=f,{title:j}=f,{description:h}=f;return v.$$set=x=>{"id"in x&&o(0,p=x.id),"icon"in x&&o(1,w=x.icon),"title"in x&&o(2,j=x.title),"description"in x&&o(3,h=x.description)},[p,w,j,h]}class pt extends Ns{constructor(f){super(),qs(this,f,Ys,Ws,Fs,{id:0,icon:1,title:2,description:3})}}function Bs(v){let f;return{c(){f=d("Documentation")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function Js(v){let f;return{c(){f=d("Number Of Results")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function Ks(v){let f;return{c(){f=d("Sorting results")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function Qs(v){let f;return{c(){f=d("Filtering results")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function Vs(v){let f;return{c(){f=d("Name")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function Xs(v){let f;return{c(){f=d("Type")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function Zs(v){let f;return{c(){f=d("Count")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function el(v){let f;return{c(){f=d("Modifier")},m(o,p){i(o,f,p)},d(o){o&&r(f)}}}function tl(v){let f,o,p,w,j,h,x,S,xe,H,N,M,C,T,gt,we,mt,q,ut,_e,$t,ye,ct,F,vt,Ce,dt,Te,ht,G,xt,be,wt,Ie,_t,Q,yt,ke,Ct,R,V,Gt,X,Tt,Me,bt,Se,It,W,kt,He,Mt,Y,St,Oe,Ht,y,z,Re,Rt,We,Wt,Z,ee,Yt,te,Bt,E,Ye,Jt,Be,Kt,se,le,Qt,ae,Vt,P,Je,Xt,Ke,Zt,ne,ie,es,re,ts,U,Qe,ss,Ve,ls,fe,oe,as,pe,ns,D,Xe,is,Ze,rs,ge,Ot,B,Lt,Le,At,Ae,jt,J,zt,je,Et,ze,Pt,A,O,et,fs,tt,os,Ee,ps,Ut,gs,Pe,ms,me,us,b,st,$s,lt,cs,at,vs,Ue,ds,Dt,hs,De,xs,ue,ws,_,nt,_s,it,ys,rt,Cs,L,$e,Ts,ce,bs,ve,Is,de,ks,ft,Ms,Ne,Ss,Nt,qt,he,ot;return f=new Rs({props:{$$slots:{default:[Bs]},$$scope:{ctx:v}}}),w=new pt({props:{id:"search",icon:"search",title:"Searching",description:"Explains how the searching in the app works on a high level."}}),h=new pt({props:{id:"tags",icon:"tag",title:"Tags",description:"Get information on tags, the different types and how to use them in a search."}}),S=new pt({props:{id:"account",icon:"account",title:"Account & Data",description:"Understand what data is collected from you, where it is stored and how you can control it."}}),H=new pt({props:{id:"development",icon:"code",title:"Development",description:"Read up on how kurosearch works under the hood. See the technologies used and how they fit together."}}),q=new K({props:{$$slots:{default:[Js]},$$scope:{ctx:v}}}),F=new K({props:{$$slots:{default:[Ks]},$$scope:{ctx:v}}}),G=new K({props:{$$slots:{default:[Qs]},$$scope:{ctx:v}}}),V=new I({props:{tag:new k("+","some_tag_you_search_for",124232,"copyright")}}),X=new qe({props:{tag:new Fe("some_tag",1,"ambiguous")}}),W=new K({props:{$$slots:{default:[Vs]},$$scope:{ctx:v}}}),Y=new K({props:{$$slots:{default:[Xs]},$$scope:{ctx:v}}}),ee=new I({props:{tag:new k("+","aroma_sensei",3e3,"artist")}}),te=new qe({props:{tag:new Fe("aroma_sensei",3e3,"artist")}}),le=new I({props:{tag:new k("+","samus_aran",16e3,"character")}}),ae=new qe({props:{tag:new Fe("samus_aran",16e3,"character")}}),ie=new I({props:{tag:new k("+","harry_potter",5800,"copyright")}}),re=new qe({props:{tag:new Fe("harry_potter",5800,"copyright")}}),oe=new I({props:{tag:new k("+","animated",294e3,"metadata")}}),pe=new qe({props:{tag:new Fe("animated",294e3,"metadata")}}),ge=new I({props:{tag:new k("+","my_tag_collection",5,"supertag")}}),B=new K({props:{$$slots:{default:[Zs]},$$scope:{ctx:v}}}),J=new K({props:{$$slots:{default:[el]},$$scope:{ctx:v}}}),me=new I({props:{tag:new k("+","good",5,"general")}}),ue=new I({props:{tag:new k("-","bad",5,"general")}}),$e=new I({props:{tag:new k("~","princess_peach",16e3,"character")}}),ce=new I({props:{tag:new k("~","princess_zelda",13e3,"character")}}),ve=new I({props:{tag:new k("~","princess_rosalina",7400,"character")}}),de=new I({props:{tag:new k("~","princess_daisy",6900,"character")}}),he=new Gs({}),{c(){g(f.$$.fragment),o=a(),p=n("div"),g(w.$$.fragment),j=a(),g(h.$$.fragment),x=a(),g(S.$$.fragment),xe=a(),g(H.$$.fragment),N=a(),M=n("h2"),M.textContent="Searching",C=a(),T=n("p"),T.innerHTML=`All searching in kurosearch is based on so-called <em class="svelte-1gr5fx8">tags</em>. In that sense it is not like Google. With Google you
  can search for whole sentences or questions. In kurosearch you have to search for one of the predefined tags. Luckily,
  there are quite a lot of them.`,gt=a(),we=n("p"),we.innerHTML=`The results you get when you click search are called <em class="svelte-1gr5fx8">posts</em>. If you start a search without any tags, you will
  get all posts.`,mt=a(),g(q.$$.fragment),ut=a(),_e=n("p"),_e.textContent=`In addition to the posts themselves you can also see how many posts matched your search. The count is located to the
  left immediately above the first post.`,$t=a(),ye=n("p"),ye.textContent=`If your search did not match any posts that means you search for some tags that do not have any posts in common. You
  will also get a cute error message saying so.`,ct=a(),g(F.$$.fragment),vt=a(),Ce=n("p"),Ce.textContent=`Once you have searched, you can sort your results by using the selector above the first post. At the moment there are
  only two options available.`,dt=a(),Te=n("ul"),Te.innerHTML=`<li class="svelte-1gr5fx8"><em class="svelte-1gr5fx8">Date</em> 
    <p class="svelte-1gr5fx8">This is the default sorting. It will order the results in a way that newer results appear at the top of the search
      and older results at the bottom. This is useful if you want to see new posts.</p></li> 
  <li class="svelte-1gr5fx8"><em class="svelte-1gr5fx8">Score</em> 
    <p class="svelte-1gr5fx8">This option will order posts according to the number of likes they received. Posts with more likes will be shown
      first. This is useful if you are interested in the most popular posts.</p></li> 
  <li class="svelte-1gr5fx8"><em class="svelte-1gr5fx8">Updated</em> 
    <p class="svelte-1gr5fx8">Orders posts by when they were last update. More recent means higher up in the search</p></li>`,ht=a(),g(G.$$.fragment),xt=a(),be=n("p"),be.textContent=`In addition to sorting kurosearch also support a simple form of filtering. Currently, only filtering by score is
  supported.`,wt=a(),Ie=n("p"),Ie.textContent="The filter selection is located at the top right of the first post",_t=a(),Q=n("h2"),Q.textContent="Tags",yt=a(),ke=n("p"),ke.innerHTML=`When you input something into the searchbar you will get some suggestions. These things are called <em class="svelte-1gr5fx8">tags</em>. They
  will usually be presented like this.`,Ct=a(),R=n("div"),g(V.$$.fragment),Gt=a(),g(X.$$.fragment),Tt=a(),Me=n("p"),Me.textContent="A tag is characterised by four things.",bt=a(),Se=n("ul"),Se.innerHTML=`<li class="svelte-1gr5fx8">Name</li> 
  <li class="svelte-1gr5fx8">Type</li> 
  <li class="svelte-1gr5fx8">Count</li> 
  <li class="svelte-1gr5fx8">Modifier</li>`,It=a(),g(W.$$.fragment),kt=a(),He=n("p"),He.textContent=`The name of the tag is what you actually search for. It is usually pretty descriptive and well defined. Oftentimes,
  there are multiple tags for the same thing though so it might take a bit of trial and error to find the best one for
  you.`,Mt=a(),g(Y.$$.fragment),St=a(),Oe=n("p"),Oe.textContent=`The type indicates what kind of tag it is. It is displayed in form of an icon right before the name of the tag. the
  possible types are the following.`,Ht=a(),y=n("ul"),z=n("li"),Re=n("em"),Re.textContent="Artist",Rt=a(),We=n("p"),We.textContent="Target artists or content creators.",Wt=a(),Z=n("div"),g(ee.$$.fragment),Yt=a(),g(te.$$.fragment),Bt=a(),E=n("li"),Ye=n("em"),Ye.textContent="Character",Jt=a(),Be=n("p"),Be.textContent="Indicates that the tag is targeting a character of some sort.",Kt=a(),se=n("div"),g(le.$$.fragment),Qt=a(),g(ae.$$.fragment),Vt=a(),P=n("li"),Je=n("em"),Je.textContent="Copyright",Xt=a(),Ke=n("p"),Ke.textContent="Targets a certain franchise or similar.",Zt=a(),ne=n("div"),g(ie.$$.fragment),es=a(),g(re.$$.fragment),ts=a(),U=n("li"),Qe=n("em"),Qe.textContent="Metadata",ss=a(),Ve=n("p"),Ve.textContent="Tags of this type are information about the post itself and not the content.",ls=a(),fe=n("div"),g(oe.$$.fragment),as=a(),g(pe.$$.fragment),ns=a(),D=n("li"),Xe=n("em"),Xe.textContent="Supertag",is=a(),Ze=n("p"),Ze.textContent="Indicates that the tag is not a simple tag, but rather a collection of tags called a supertag.",rs=a(),g(ge.$$.fragment),Ot=a(),g(B.$$.fragment),Lt=a(),Le=n("p"),Le.textContent="The count of a tag displays how many post are tagged with it.",At=a(),Ae=n("p"),Ae.textContent="For supertags the count shows how many tags are in it.",jt=a(),g(J.$$.fragment),zt=a(),je=n("p"),je.innerHTML=`In kurosearch tags can have modifiers that change how they influence your search. You can change the modifier directly
  in the searchbar. Intuitively, you would think like this: Picking a tag means posts in the results will have it,
  right? In kurosearch this is done with the <em class="svelte-1gr5fx8">include</em> modifier.`,Et=a(),ze=n("p"),ze.textContent="The available modifiers are:",Pt=a(),A=n("ul"),O=n("li"),et=n("em"),et.textContent="Include",fs=d(` (+)
    `),tt=n("p"),tt.textContent=`This is the default modifier. Using it with tags will make the search include them. This means that all posts in
      the results will have every include tag on them. Use this modifier for all things that you definitely want to see.`,os=a(),Ee=n("div"),ps=d("Icon:"),Ut=n("i"),gs=a(),Pe=n("div"),ms=d(`Example:
      `),g(me.$$.fragment),us=a(),b=n("li"),st=n("em"),st.textContent="Exclude",$s=d(` (-)
    `),lt=n("p"),lt.textContent=`The exclude modifier is subtractive. If you exclude a tag, the results will NOT have that tag. Even if a post
      would be included in your search otherwise, if it has one of your exclude tags on it, it will not be shown. Use
      this for all things that you dislike and don't want to see at all.`,cs=a(),at=n("p"),at.innerHTML=`<em class="svelte-1gr5fx8">TIP:</em> You can create a supertag with all your exclude tags so they are saved between site visits. That makes
      excluding your turnoffs really easy.`,vs=a(),Ue=n("div"),ds=d("Icon:"),Dt=n("i"),hs=a(),De=n("div"),xs=d(`Example:
      `),g(ue.$$.fragment),ws=a(),_=n("li"),nt=n("em"),nt.textContent="Optional",_s=d(` (~)
    `),it=n("p"),it.textContent=`The optional tags are the most complicated ones. When adding multiple optional tags, all results will include at
      least one of the optional tags. That means that optional tags only become effective once you have two of them.
      Optional tags are useful when there are multiple tags for the same thing or you are not searching for one specific
      thing but multiple instead.`,ys=a(),rt=n("p"),rt.textContent="To understand it better here is an example. If you search for the following tags...",Cs=a(),L=n("div"),g($e.$$.fragment),Ts=a(),g(ce.$$.fragment),bs=a(),g(ve.$$.fragment),Is=a(),g(de.$$.fragment),ks=a(),ft=n("p"),ft.textContent="...then all results will have at least one of the princesses in them, but not neccessarily all of them.",Ms=a(),Ne=n("div"),Ss=d("Icon:"),Nt=n("i"),qt=a(),g(he.$$.fragment),l(p,"class","cards svelte-1gr5fx8"),l(M,"id","search"),l(M,"class","svelte-1gr5fx8"),l(T,"class","svelte-1gr5fx8"),l(we,"class","svelte-1gr5fx8"),l(_e,"class","svelte-1gr5fx8"),l(ye,"class","svelte-1gr5fx8"),l(Ce,"class","svelte-1gr5fx8"),l(Te,"class","svelte-1gr5fx8"),l(be,"class","svelte-1gr5fx8"),l(Ie,"class","svelte-1gr5fx8"),l(Q,"id","tags"),l(Q,"class","svelte-1gr5fx8"),l(ke,"class","svelte-1gr5fx8"),l(R,"class","flex-row svelte-1gr5fx8"),l(Me,"class","svelte-1gr5fx8"),l(Se,"class","svelte-1gr5fx8"),l(He,"class","svelte-1gr5fx8"),l(Oe,"class","svelte-1gr5fx8"),l(Re,"class","svelte-1gr5fx8"),l(We,"class","svelte-1gr5fx8"),l(Z,"class","flex-row svelte-1gr5fx8"),l(z,"class","svelte-1gr5fx8"),l(Ye,"class","svelte-1gr5fx8"),l(Be,"class","svelte-1gr5fx8"),l(se,"class","flex-row svelte-1gr5fx8"),l(E,"class","svelte-1gr5fx8"),l(Je,"class","svelte-1gr5fx8"),l(Ke,"class","svelte-1gr5fx8"),l(ne,"class","flex-row svelte-1gr5fx8"),l(P,"class","svelte-1gr5fx8"),l(Qe,"class","svelte-1gr5fx8"),l(Ve,"class","svelte-1gr5fx8"),l(fe,"class","flex-row svelte-1gr5fx8"),l(U,"class","svelte-1gr5fx8"),l(Xe,"class","svelte-1gr5fx8"),l(Ze,"class","svelte-1gr5fx8"),l(D,"class","svelte-1gr5fx8"),l(y,"class","svelte-1gr5fx8"),l(Le,"class","svelte-1gr5fx8"),l(Ae,"class","svelte-1gr5fx8"),l(je,"class","svelte-1gr5fx8"),l(ze,"class","svelte-1gr5fx8"),l(et,"class","svelte-1gr5fx8"),l(tt,"class","svelte-1gr5fx8"),l(Ut,"class",Ge(`codicon codicon-${Ft["+"]}`)+" svelte-1gr5fx8"),l(Ee,"class","flex-row svelte-1gr5fx8"),l(Pe,"class","flex-row svelte-1gr5fx8"),l(O,"class","svelte-1gr5fx8"),l(st,"class","svelte-1gr5fx8"),l(lt,"class","svelte-1gr5fx8"),l(at,"class","svelte-1gr5fx8"),l(Dt,"class",Ge(`codicon codicon-${Ft["-"]}`)+" svelte-1gr5fx8"),l(Ue,"class","flex-row svelte-1gr5fx8"),l(De,"class","flex-row svelte-1gr5fx8"),l(b,"class","svelte-1gr5fx8"),l(nt,"class","svelte-1gr5fx8"),l(it,"class","svelte-1gr5fx8"),l(rt,"class","svelte-1gr5fx8"),l(L,"class","flex-row svelte-1gr5fx8"),l(ft,"class","svelte-1gr5fx8"),l(Nt,"class",Ge(`codicon codicon-${Ft["~"]}`)+" svelte-1gr5fx8"),l(Ne,"class","flex-row svelte-1gr5fx8"),l(_,"class","svelte-1gr5fx8"),l(A,"class","svelte-1gr5fx8")},m(e,s){m(f,e,s),i(e,o,s),i(e,p,s),m(w,p,null),t(p,j),m(h,p,null),t(p,x),m(S,p,null),t(p,xe),m(H,p,null),i(e,N,s),i(e,M,s),i(e,C,s),i(e,T,s),i(e,gt,s),i(e,we,s),i(e,mt,s),m(q,e,s),i(e,ut,s),i(e,_e,s),i(e,$t,s),i(e,ye,s),i(e,ct,s),m(F,e,s),i(e,vt,s),i(e,Ce,s),i(e,dt,s),i(e,Te,s),i(e,ht,s),m(G,e,s),i(e,xt,s),i(e,be,s),i(e,wt,s),i(e,Ie,s),i(e,_t,s),i(e,Q,s),i(e,yt,s),i(e,ke,s),i(e,Ct,s),i(e,R,s),m(V,R,null),t(R,Gt),m(X,R,null),i(e,Tt,s),i(e,Me,s),i(e,bt,s),i(e,Se,s),i(e,It,s),m(W,e,s),i(e,kt,s),i(e,He,s),i(e,Mt,s),m(Y,e,s),i(e,St,s),i(e,Oe,s),i(e,Ht,s),i(e,y,s),t(y,z),t(z,Re),t(z,Rt),t(z,We),t(z,Wt),t(z,Z),m(ee,Z,null),t(Z,Yt),m(te,Z,null),t(y,Bt),t(y,E),t(E,Ye),t(E,Jt),t(E,Be),t(E,Kt),t(E,se),m(le,se,null),t(se,Qt),m(ae,se,null),t(y,Vt),t(y,P),t(P,Je),t(P,Xt),t(P,Ke),t(P,Zt),t(P,ne),m(ie,ne,null),t(ne,es),m(re,ne,null),t(y,ts),t(y,U),t(U,Qe),t(U,ss),t(U,Ve),t(U,ls),t(U,fe),m(oe,fe,null),t(fe,as),m(pe,fe,null),t(y,ns),t(y,D),t(D,Xe),t(D,is),t(D,Ze),t(D,rs),m(ge,D,null),i(e,Ot,s),m(B,e,s),i(e,Lt,s),i(e,Le,s),i(e,At,s),i(e,Ae,s),i(e,jt,s),m(J,e,s),i(e,zt,s),i(e,je,s),i(e,Et,s),i(e,ze,s),i(e,Pt,s),i(e,A,s),t(A,O),t(O,et),t(O,fs),t(O,tt),t(O,os),t(O,Ee),t(Ee,ps),t(Ee,Ut),t(O,gs),t(O,Pe),t(Pe,ms),m(me,Pe,null),t(A,us),t(A,b),t(b,st),t(b,$s),t(b,lt),t(b,cs),t(b,at),t(b,vs),t(b,Ue),t(Ue,ds),t(Ue,Dt),t(b,hs),t(b,De),t(De,xs),m(ue,De,null),t(A,ws),t(A,_),t(_,nt),t(_,_s),t(_,it),t(_,ys),t(_,rt),t(_,Cs),t(_,L),m($e,L,null),t(L,Ts),m(ce,L,null),t(L,bs),m(ve,L,null),t(L,Is),m(de,L,null),t(_,ks),t(_,ft),t(_,Ms),t(_,Ne),t(Ne,Ss),t(Ne,Nt),i(e,qt,s),m(he,e,s),ot=!0},p(e,[s]){const Hs={};s&1&&(Hs.$$scope={dirty:s,ctx:e}),f.$set(Hs);const Os={};s&1&&(Os.$$scope={dirty:s,ctx:e}),q.$set(Os);const Ls={};s&1&&(Ls.$$scope={dirty:s,ctx:e}),F.$set(Ls);const As={};s&1&&(As.$$scope={dirty:s,ctx:e}),G.$set(As);const js={};s&1&&(js.$$scope={dirty:s,ctx:e}),W.$set(js);const zs={};s&1&&(zs.$$scope={dirty:s,ctx:e}),Y.$set(zs);const Es={};s&1&&(Es.$$scope={dirty:s,ctx:e}),B.$set(Es);const Ps={};s&1&&(Ps.$$scope={dirty:s,ctx:e}),J.$set(Ps)},i(e){ot||(u(f.$$.fragment,e),u(w.$$.fragment,e),u(h.$$.fragment,e),u(S.$$.fragment,e),u(H.$$.fragment,e),u(q.$$.fragment,e),u(F.$$.fragment,e),u(G.$$.fragment,e),u(V.$$.fragment,e),u(X.$$.fragment,e),u(W.$$.fragment,e),u(Y.$$.fragment,e),u(ee.$$.fragment,e),u(te.$$.fragment,e),u(le.$$.fragment,e),u(ae.$$.fragment,e),u(ie.$$.fragment,e),u(re.$$.fragment,e),u(oe.$$.fragment,e),u(pe.$$.fragment,e),u(ge.$$.fragment,e),u(B.$$.fragment,e),u(J.$$.fragment,e),u(me.$$.fragment,e),u(ue.$$.fragment,e),u($e.$$.fragment,e),u(ce.$$.fragment,e),u(ve.$$.fragment,e),u(de.$$.fragment,e),u(he.$$.fragment,e),ot=!0)},o(e){$(f.$$.fragment,e),$(w.$$.fragment,e),$(h.$$.fragment,e),$(S.$$.fragment,e),$(H.$$.fragment,e),$(q.$$.fragment,e),$(F.$$.fragment,e),$(G.$$.fragment,e),$(V.$$.fragment,e),$(X.$$.fragment,e),$(W.$$.fragment,e),$(Y.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(le.$$.fragment,e),$(ae.$$.fragment,e),$(ie.$$.fragment,e),$(re.$$.fragment,e),$(oe.$$.fragment,e),$(pe.$$.fragment,e),$(ge.$$.fragment,e),$(B.$$.fragment,e),$(J.$$.fragment,e),$(me.$$.fragment,e),$(ue.$$.fragment,e),$($e.$$.fragment,e),$(ce.$$.fragment,e),$(ve.$$.fragment,e),$(de.$$.fragment,e),$(he.$$.fragment,e),ot=!1},d(e){c(f,e),e&&r(o),e&&r(p),c(w),c(h),c(S),c(H),e&&r(N),e&&r(M),e&&r(C),e&&r(T),e&&r(gt),e&&r(we),e&&r(mt),c(q,e),e&&r(ut),e&&r(_e),e&&r($t),e&&r(ye),e&&r(ct),c(F,e),e&&r(vt),e&&r(Ce),e&&r(dt),e&&r(Te),e&&r(ht),c(G,e),e&&r(xt),e&&r(be),e&&r(wt),e&&r(Ie),e&&r(_t),e&&r(Q),e&&r(yt),e&&r(ke),e&&r(Ct),e&&r(R),c(V),c(X),e&&r(Tt),e&&r(Me),e&&r(bt),e&&r(Se),e&&r(It),c(W,e),e&&r(kt),e&&r(He),e&&r(Mt),c(Y,e),e&&r(St),e&&r(Oe),e&&r(Ht),e&&r(y),c(ee),c(te),c(le),c(ae),c(ie),c(re),c(oe),c(pe),c(ge),e&&r(Ot),c(B,e),e&&r(Lt),e&&r(Le),e&&r(At),e&&r(Ae),e&&r(jt),c(J,e),e&&r(zt),e&&r(je),e&&r(Et),e&&r(ze),e&&r(Pt),e&&r(A),c(me),c(ue),c($e),c(ce),c(ve),c(de),e&&r(qt),c(he,e)}}}class al extends Ns{constructor(f){super(),qs(this,f,null,tl,Fs,{})}}export{al as default};