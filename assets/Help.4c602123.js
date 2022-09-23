import{S as $s,i as qs,s as ys,e as l,p as i,t as L,a as s,n as Oe,b as a,c as t,d as ds,g as Et,h as o,L as C,N as _,O as gs,P as xs,j as u,Q as Ot,m as p,k as m,l as w,o as v}from"./index.366b1331.js";function Cs(H){let r,$,f,h,E,c,b,k,le,I,P,T;return{c(){r=l("a"),$=l("div"),f=l("i"),E=i(),c=l("div"),b=l("h3"),k=L(H[2]),le=i(),I=l("span"),P=L(H[3]),s(f,"class",h=Oe(`codicon codicon-${H[1]}`)+" svelte-1u41kjl"),s($,"class","icon svelte-1u41kjl"),s(b,"class","svelte-1u41kjl"),s(c,"class","text"),s(r,"class","card svelte-1u41kjl"),s(r,"href",T=`#${H[0]}`)},m(y,g){a(y,r,g),t(r,$),t($,f),t(r,E),t(r,c),t(c,b),t(b,k),t(c,le),t(c,I),t(I,P)},p(y,[g]){g&2&&h!==(h=Oe(`codicon codicon-${y[1]}`)+" svelte-1u41kjl")&&s(f,"class",h),g&4&&ds(k,y[2]),g&8&&ds(P,y[3]),g&1&&T!==(T=`#${y[0]}`)&&s(r,"href",T)},i:Et,o:Et,d(y){y&&o(r)}}}function _s(H,r,$){let{id:f}=r,{icon:h}=r,{title:E}=r,{description:c}=r;return H.$$set=b=>{"id"in b&&$(0,f=b.id),"icon"in b&&$(1,h=b.icon),"title"in b&&$(2,E=b.title),"description"in b&&$(3,c=b.description)},[f,h,E,c]}class et extends $s{constructor(r){super(),qs(this,r,_s,Cs,ys,{id:0,icon:1,title:2,description:3})}}function Ts(H){let r,$,f,h,E,c,b,k,le,I,P,T,y,g,tt,ie,st,ne,lt,ae,it,oe,nt,re,at,fe,ot,ue,rt,pe,ft,me,ut,we,pt,ve,mt,G,wt,ce,vt,F,R,At,W,ct,be,bt,he,ht,de,dt,$e,$t,qe,qt,ye,yt,q,A,Ee,Nt,Ae,jt,Y,Dt,N,Ne,Ut,je,Pt,B,Ft,j,De,Gt,Ue,Rt,z,Wt,D,Pe,Yt,Fe,Bt,Q,zt,U,Ge,Qt,Re,Jt,J,gt,ge,xt,xe,Ct,Ce,_t,_e,Tt,Te,kt,ke,It,O,M,We,Kt,Ye,Vt,Ie,Xt,Mt,Zt,Me,es,K,ts,x,Be,ss,ze,ls,Qe,is,Se,ns,St,as,Le,os,V,rs,d,Je,fs,Ke,us,Ve,ps,S,X,ms,Z,ws,ee,vs,te,cs,Xe,bs,He,hs,Lt,Ht,se,Ze;return h=new et({props:{id:"search",icon:"search",title:"Searching",description:"Explains how the searching in the app works on a high level."}}),c=new et({props:{id:"tags",icon:"tag",title:"Tags",description:"Get information on tags, the different types and how to use them in a search."}}),k=new et({props:{id:"account",icon:"account",title:"Account & Data",description:"Understand what data is collected from you, where it is stored and how you can control it."}}),I=new et({props:{id:"development",icon:"code",title:"Development",description:"Read up on how kurosearch works under the hood. See the technologies used and how they fit together."}}),R=new C({props:{tag:new _("+","some_tag_you_search_for",124232,"copyright")}}),W=new gs({props:{name:"some_tag_you_search_for"}}),Y=new C({props:{tag:new _("+","aroma_sensei",3e3,"artist")}}),B=new C({props:{tag:new _("+","samus_aran",16e3,"character")}}),z=new C({props:{tag:new _("+","harry_potter",5800,"copyright")}}),Q=new C({props:{tag:new _("+","animated",294e3,"metadata")}}),J=new C({props:{tag:new _("+","my_tag_collection",5,"supertag")}}),K=new C({props:{tag:new _("+","good",5,"general")}}),V=new C({props:{tag:new _("-","bad",5,"general")}}),X=new C({props:{tag:new _("~","princess_peach",16e3,"character")}}),Z=new C({props:{tag:new _("~","princess_zelda",13e3,"character")}}),ee=new C({props:{tag:new _("~","princess_rosalina",7400,"character")}}),te=new C({props:{tag:new _("~","princess_daisy",6900,"character")}}),se=new xs({}),{c(){r=l("h1"),r.textContent="Documentation",$=i(),f=l("div"),u(h.$$.fragment),E=i(),u(c.$$.fragment),b=i(),u(k.$$.fragment),le=i(),u(I.$$.fragment),P=i(),T=l("h2"),T.textContent="Searching",y=i(),g=l("p"),g.innerHTML=`All searching in kurosearch is based on so-called <em class="svelte-7wr0qb">tags</em>. In that sense it is not like Google. With Google you
  can search for whole sentences or questions. In kurosearch you have to search for one of the predefined tags. Luckily,
  there are quite a lot of them.`,tt=i(),ie=l("p"),ie.innerHTML=`The results you get when you click search are called <em class="svelte-7wr0qb">posts</em>. If you start a search without any tags, you will
  get all posts.`,st=i(),ne=l("h3"),ne.textContent="Number Of Results",lt=i(),ae=l("p"),ae.textContent=`In addition to the posts themselves you can also see how many posts matched your search. The count is located to the
  left immediately above the first post.`,it=i(),oe=l("p"),oe.textContent=`If your search did not match any posts that means you search for some tags that do not have any posts in common. You
  will also get a cute error message saying so.`,nt=i(),re=l("h3"),re.textContent="Sorting results",at=i(),fe=l("p"),fe.textContent=`Once you have searched, you can sort your results by using the selector above the first post. At the moment there are
  only two options available.`,ot=i(),ue=l("ul"),ue.innerHTML=`<li class="svelte-7wr0qb"><em class="svelte-7wr0qb">Date</em> 
    <p class="svelte-7wr0qb">This is the default sorting. It will order the results in a way that newer results appear at the top of the search
      and older results at the bottom. This is useful if you want to see new posts.</p></li> 
  <li class="svelte-7wr0qb"><em class="svelte-7wr0qb">Score</em> 
    <p class="svelte-7wr0qb">This option will order posts according to the number of likes they received. Posts with more likes will be shown
      first. This is useful if you are interested in the most popular posts.</p></li>`,rt=i(),pe=l("h3"),pe.textContent="Filtering results",ft=i(),me=l("p"),me.textContent=`In addition to sorting kurosearch also support a simple form of filtering. Currently, only filtering by posts is
  supported.`,ut=i(),we=l("p"),we.textContent="The filter selection is located at the top right of the first post",pt=i(),ve=l("p"),ve.innerHTML=`<em class="svelte-7wr0qb">NOTE:</em> Because I could not figure out a good User Experience for a number input, I have decided to provide a
  few predefined options for now. Let me know on Discord if you would like to have the number input from
  <em class="svelte-7wr0qb">r34-react</em> back :)`,mt=i(),G=l("h2"),G.textContent="Tags",wt=i(),ce=l("p"),ce.innerHTML=`When you input something into the searchbar you will get some suggestions. These things are called <em class="svelte-7wr0qb">tags</em>. They
  will usually be presented like this.`,vt=i(),F=l("div"),u(R.$$.fragment),At=i(),u(W.$$.fragment),ct=i(),be=l("p"),be.textContent="A tag is characterised by four things.",bt=i(),he=l("ul"),he.innerHTML=`<li class="svelte-7wr0qb">Name</li> 
  <li class="svelte-7wr0qb">Type</li> 
  <li class="svelte-7wr0qb">Count</li> 
  <li class="svelte-7wr0qb">Modifier</li>`,ht=i(),de=l("h3"),de.textContent="Name",dt=i(),$e=l("p"),$e.textContent=`The name of the tag is what you actually search for. It is usually pretty descriptive and well defined. Oftentimes,
  there are multiple tags for the same thing though so it might take a bit of trial and error to find the best one for
  you.`,$t=i(),qe=l("h3"),qe.textContent="Type",qt=i(),ye=l("p"),ye.textContent=`The type indicates what kind of tag it is. It is displayed in form of an icon right before the name of the tag. the
  possible types are the following.`,yt=i(),q=l("ul"),A=l("li"),Ee=l("em"),Ee.textContent="Artist",Nt=i(),Ae=l("p"),Ae.textContent="Target artists or content creators.",jt=i(),u(Y.$$.fragment),Dt=i(),N=l("li"),Ne=l("em"),Ne.textContent="Character",Ut=i(),je=l("p"),je.textContent="Indicates that the tag is targeting a character of some sort.",Pt=i(),u(B.$$.fragment),Ft=i(),j=l("li"),De=l("em"),De.textContent="Copyright",Gt=i(),Ue=l("p"),Ue.textContent="Targets a certain franchise or similar.",Rt=i(),u(z.$$.fragment),Wt=i(),D=l("li"),Pe=l("em"),Pe.textContent="Metadata",Yt=i(),Fe=l("p"),Fe.textContent="Tags of this type are information about the post itself and not the content.",Bt=i(),u(Q.$$.fragment),zt=i(),U=l("li"),Ge=l("em"),Ge.textContent="Supertag",Qt=i(),Re=l("p"),Re.textContent="Indicates that the tag is not a simple tag, but rather a collection of tags called a supertag.",Jt=i(),u(J.$$.fragment),gt=i(),ge=l("h3"),ge.textContent="Count",xt=i(),xe=l("p"),xe.textContent="The count of a tag displays how many post are tagged with it.",Ct=i(),Ce=l("p"),Ce.textContent="For supertags the count shows how many tags are in it.",_t=i(),_e=l("h3"),_e.textContent="Modifier",Tt=i(),Te=l("p"),Te.innerHTML=`In kurosearch tags can have modifiers that change how they influence your search. You can change the modifier directly
  in the searchbar. Intuitively, you would think like this: Picking a tag means posts in the results will have it,
  right? In kurosearch this is done with the <em class="svelte-7wr0qb">include</em> modifier.`,kt=i(),ke=l("p"),ke.textContent="The available modifiers are:",It=i(),O=l("ul"),M=l("li"),We=l("em"),We.textContent="Include",Kt=L(` (+)
    `),Ye=l("p"),Ye.textContent=`This is the default modifier. Using it with tags will make the search include them. This means that all posts in
      the results will have every include tag on them. Use this modifier for all things that you definitely want to see.`,Vt=i(),Ie=l("div"),Xt=L("Icon:"),Mt=l("i"),Zt=i(),Me=l("div"),es=L("Example:"),u(K.$$.fragment),ts=i(),x=l("li"),Be=l("em"),Be.textContent="Exclude",ss=L(` (-)
    `),ze=l("p"),ze.textContent=`The exclude modifier is subtractive. If you exclude a tag, the results will NOT have that tag. Even if a post
      would be included in your search otherwise, if it has one of your exclude tags on it, it will not be shown. Use
      this for all things that you dislike and don't want to see at all.`,ls=i(),Qe=l("p"),Qe.innerHTML=`<em class="svelte-7wr0qb">TIP:</em> You can create a supertag with all your exclude tags so they are saved between site visits. That makes
      excluding your turnoffs really easy.`,is=i(),Se=l("div"),ns=L("Icon:"),St=l("i"),as=i(),Le=l("div"),os=L("Example:"),u(V.$$.fragment),rs=i(),d=l("li"),Je=l("em"),Je.textContent="Optional",fs=L(` (~)
    `),Ke=l("p"),Ke.textContent=`The optional tags are the most complicated ones. When adding multiple optional tags, all results will include at
      least one of the optional tags. That means that optional tags only become effective once you have two of them.
      Optional tags are useful when there are multiple tags for the same thing or you are not searching for one specific
      thing but multiple instead.`,us=i(),Ve=l("p"),Ve.textContent="To understand it better here is an example. If you search for the following tags...",ps=i(),S=l("div"),u(X.$$.fragment),ms=i(),u(Z.$$.fragment),ws=i(),u(ee.$$.fragment),vs=i(),u(te.$$.fragment),cs=i(),Xe=l("p"),Xe.textContent="...then all results will have at least one of the princesses in them, but not neccessarily all of them.",bs=i(),He=l("div"),hs=L("Icon:"),Lt=l("i"),Ht=i(),u(se.$$.fragment),s(r,"class","svelte-7wr0qb"),s(f,"class","cards svelte-7wr0qb"),s(T,"id","search"),s(T,"class","svelte-7wr0qb"),s(g,"class","svelte-7wr0qb"),s(ie,"class","svelte-7wr0qb"),s(ne,"class","svelte-7wr0qb"),s(ae,"class","svelte-7wr0qb"),s(oe,"class","svelte-7wr0qb"),s(re,"class","svelte-7wr0qb"),s(fe,"class","svelte-7wr0qb"),s(ue,"class","svelte-7wr0qb"),s(pe,"class","svelte-7wr0qb"),s(me,"class","svelte-7wr0qb"),s(we,"class","svelte-7wr0qb"),s(ve,"class","svelte-7wr0qb"),s(G,"id","tags"),s(G,"class","svelte-7wr0qb"),s(ce,"class","svelte-7wr0qb"),s(F,"class","flex-row svelte-7wr0qb"),s(be,"class","svelte-7wr0qb"),s(he,"class","svelte-7wr0qb"),s(de,"class","svelte-7wr0qb"),s($e,"class","svelte-7wr0qb"),s(qe,"class","svelte-7wr0qb"),s(ye,"class","svelte-7wr0qb"),s(Ee,"class","svelte-7wr0qb"),s(Ae,"class","svelte-7wr0qb"),s(A,"class","svelte-7wr0qb"),s(Ne,"class","svelte-7wr0qb"),s(je,"class","svelte-7wr0qb"),s(N,"class","svelte-7wr0qb"),s(De,"class","svelte-7wr0qb"),s(Ue,"class","svelte-7wr0qb"),s(j,"class","svelte-7wr0qb"),s(Pe,"class","svelte-7wr0qb"),s(Fe,"class","svelte-7wr0qb"),s(D,"class","svelte-7wr0qb"),s(Ge,"class","svelte-7wr0qb"),s(Re,"class","svelte-7wr0qb"),s(U,"class","svelte-7wr0qb"),s(q,"class","svelte-7wr0qb"),s(ge,"class","svelte-7wr0qb"),s(xe,"class","svelte-7wr0qb"),s(Ce,"class","svelte-7wr0qb"),s(_e,"class","svelte-7wr0qb"),s(Te,"class","svelte-7wr0qb"),s(ke,"class","svelte-7wr0qb"),s(We,"class","svelte-7wr0qb"),s(Ye,"class","svelte-7wr0qb"),s(Mt,"class",Oe(`codicon codicon-${Ot["+"]}`)+" svelte-7wr0qb"),s(Ie,"class","flex-row svelte-7wr0qb"),s(Me,"class","flex-row svelte-7wr0qb"),s(M,"class","svelte-7wr0qb"),s(Be,"class","svelte-7wr0qb"),s(ze,"class","svelte-7wr0qb"),s(Qe,"class","svelte-7wr0qb"),s(St,"class",Oe(`codicon codicon-${Ot["-"]}`)+" svelte-7wr0qb"),s(Se,"class","flex-row svelte-7wr0qb"),s(Le,"class","flex-row svelte-7wr0qb"),s(x,"class","svelte-7wr0qb"),s(Je,"class","svelte-7wr0qb"),s(Ke,"class","svelte-7wr0qb"),s(Ve,"class","svelte-7wr0qb"),s(S,"class","flex-row svelte-7wr0qb"),s(Xe,"class","svelte-7wr0qb"),s(Lt,"class",Oe(`codicon codicon-${Ot["~"]}`)+" svelte-7wr0qb"),s(He,"class","flex-row svelte-7wr0qb"),s(d,"class","svelte-7wr0qb"),s(O,"class","svelte-7wr0qb")},m(e,n){a(e,r,n),a(e,$,n),a(e,f,n),p(h,f,null),t(f,E),p(c,f,null),t(f,b),p(k,f,null),t(f,le),p(I,f,null),a(e,P,n),a(e,T,n),a(e,y,n),a(e,g,n),a(e,tt,n),a(e,ie,n),a(e,st,n),a(e,ne,n),a(e,lt,n),a(e,ae,n),a(e,it,n),a(e,oe,n),a(e,nt,n),a(e,re,n),a(e,at,n),a(e,fe,n),a(e,ot,n),a(e,ue,n),a(e,rt,n),a(e,pe,n),a(e,ft,n),a(e,me,n),a(e,ut,n),a(e,we,n),a(e,pt,n),a(e,ve,n),a(e,mt,n),a(e,G,n),a(e,wt,n),a(e,ce,n),a(e,vt,n),a(e,F,n),p(R,F,null),t(F,At),p(W,F,null),a(e,ct,n),a(e,be,n),a(e,bt,n),a(e,he,n),a(e,ht,n),a(e,de,n),a(e,dt,n),a(e,$e,n),a(e,$t,n),a(e,qe,n),a(e,qt,n),a(e,ye,n),a(e,yt,n),a(e,q,n),t(q,A),t(A,Ee),t(A,Nt),t(A,Ae),t(A,jt),p(Y,A,null),t(q,Dt),t(q,N),t(N,Ne),t(N,Ut),t(N,je),t(N,Pt),p(B,N,null),t(q,Ft),t(q,j),t(j,De),t(j,Gt),t(j,Ue),t(j,Rt),p(z,j,null),t(q,Wt),t(q,D),t(D,Pe),t(D,Yt),t(D,Fe),t(D,Bt),p(Q,D,null),t(q,zt),t(q,U),t(U,Ge),t(U,Qt),t(U,Re),t(U,Jt),p(J,U,null),a(e,gt,n),a(e,ge,n),a(e,xt,n),a(e,xe,n),a(e,Ct,n),a(e,Ce,n),a(e,_t,n),a(e,_e,n),a(e,Tt,n),a(e,Te,n),a(e,kt,n),a(e,ke,n),a(e,It,n),a(e,O,n),t(O,M),t(M,We),t(M,Kt),t(M,Ye),t(M,Vt),t(M,Ie),t(Ie,Xt),t(Ie,Mt),t(M,Zt),t(M,Me),t(Me,es),p(K,Me,null),t(O,ts),t(O,x),t(x,Be),t(x,ss),t(x,ze),t(x,ls),t(x,Qe),t(x,is),t(x,Se),t(Se,ns),t(Se,St),t(x,as),t(x,Le),t(Le,os),p(V,Le,null),t(O,rs),t(O,d),t(d,Je),t(d,fs),t(d,Ke),t(d,us),t(d,Ve),t(d,ps),t(d,S),p(X,S,null),t(S,ms),p(Z,S,null),t(S,ws),p(ee,S,null),t(S,vs),p(te,S,null),t(d,cs),t(d,Xe),t(d,bs),t(d,He),t(He,hs),t(He,Lt),a(e,Ht,n),p(se,e,n),Ze=!0},p:Et,i(e){Ze||(m(h.$$.fragment,e),m(c.$$.fragment,e),m(k.$$.fragment,e),m(I.$$.fragment,e),m(R.$$.fragment,e),m(W.$$.fragment,e),m(Y.$$.fragment,e),m(B.$$.fragment,e),m(z.$$.fragment,e),m(Q.$$.fragment,e),m(J.$$.fragment,e),m(K.$$.fragment,e),m(V.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(ee.$$.fragment,e),m(te.$$.fragment,e),m(se.$$.fragment,e),Ze=!0)},o(e){w(h.$$.fragment,e),w(c.$$.fragment,e),w(k.$$.fragment,e),w(I.$$.fragment,e),w(R.$$.fragment,e),w(W.$$.fragment,e),w(Y.$$.fragment,e),w(B.$$.fragment,e),w(z.$$.fragment,e),w(Q.$$.fragment,e),w(J.$$.fragment,e),w(K.$$.fragment,e),w(V.$$.fragment,e),w(X.$$.fragment,e),w(Z.$$.fragment,e),w(ee.$$.fragment,e),w(te.$$.fragment,e),w(se.$$.fragment,e),Ze=!1},d(e){e&&o(r),e&&o($),e&&o(f),v(h),v(c),v(k),v(I),e&&o(P),e&&o(T),e&&o(y),e&&o(g),e&&o(tt),e&&o(ie),e&&o(st),e&&o(ne),e&&o(lt),e&&o(ae),e&&o(it),e&&o(oe),e&&o(nt),e&&o(re),e&&o(at),e&&o(fe),e&&o(ot),e&&o(ue),e&&o(rt),e&&o(pe),e&&o(ft),e&&o(me),e&&o(ut),e&&o(we),e&&o(pt),e&&o(ve),e&&o(mt),e&&o(G),e&&o(wt),e&&o(ce),e&&o(vt),e&&o(F),v(R),v(W),e&&o(ct),e&&o(be),e&&o(bt),e&&o(he),e&&o(ht),e&&o(de),e&&o(dt),e&&o($e),e&&o($t),e&&o(qe),e&&o(qt),e&&o(ye),e&&o(yt),e&&o(q),v(Y),v(B),v(z),v(Q),v(J),e&&o(gt),e&&o(ge),e&&o(xt),e&&o(xe),e&&o(Ct),e&&o(Ce),e&&o(_t),e&&o(_e),e&&o(Tt),e&&o(Te),e&&o(kt),e&&o(ke),e&&o(It),e&&o(O),v(K),v(V),v(X),v(Z),v(ee),v(te),e&&o(Ht),v(se,e)}}}class Is extends $s{constructor(r){super(),qs(this,r,null,Ts,ys,{})}}export{Is as default};
