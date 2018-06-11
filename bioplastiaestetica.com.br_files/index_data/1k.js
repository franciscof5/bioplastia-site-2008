//1k DHTML API
d=document;l=d.layers;op=navigator.userAgent.indexOf('Opera')!=-1;
function gE(e,f){if(l){f=(f)?f:self;var V=f.document.layers;if(V[e])return V[e];for(var W=0;W<V.length;)t=gE(e,V[W++]);return t;}if(d.all)return d.all[e];return d.getElementById(e);}
function sE(e){l?e.visibility='show':e.style.visibility='visible';}
function hE(e){l?e.visibility='hide':e.style.visibility='hidden';}
function sZ(e,z){l?e.zIndex=z:e.style.zIndex=z;}
function sX(e,x){l?e.left=x:op?e.style.pixelLeft=x:e.style.left=x;}
function sY(e,y){l?e.top=y:op?e.style.pixelTop=y:e.style.top=y;}
function sW(e,w){l?e.clip.width=w:op?e.style.pixelWidth=w:e.style.width=w;}
function sH(e,h){l?e.clip.height=h:op?e.style.pixelHeight=h:e.style.height=h;}
function sC(e,t,r,b,x){l?(X=e.clip,X.top=t,X.right=r,X.bottom=b,X.left=x):e.style.clip='rect('+t+' '+r+' '+b+' '+x+')';}
function wH(e,h){if(l){Y=e.document;Y.open();Y.write(h);Y.close();}else if(e.innerHTML)e.innerHTML=h;}