import{S as dn,i as un,s as sn,k as t,q as l,a as m,l as o,m as a,r as i,h as e,c as g,n as T,b as X,G as n,H as Z}from"../chunks/index.8feb9419.js";function pn(ln){let u,I,A,w,s,V,S,U,r,B,z,N,f,D,G,b,H,h,M,O,d,k,q,Y,x,L,C,R,j,y,F,v,J;return{c(){u=t("head"),I=t("style"),A=l(`body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }

    main {
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 1.5em;
      margin-bottom: 1em;
      text-align: center;
      color: #333;
    }

    button {
      display: block;
      width: 100%;
      padding: 0.5em 1em;
      font-size: 1em;
      background-color: #4287f5;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #1a5bc9;
    }

    p {
      font-size: 1em;
      text-align: center;
      color: #666;
      margin-top: 1em;
    }

    span {
      font-weight: bold;
      color: #333;
    }
    
    .upgrade {
      margin-top: 1em;
    }

    .upgrade button {
      background-color: #4caf50;
    }

    .upgrade button:hover {
      background-color: #45a049;
    }`),w=m(),s=t("body"),V=t("script"),S=l(`let count = 0;
    let clickValue = 1;
    let upgradeCost = 10;

    function handleClick() {
      count += clickValue;
      document.getElementById('count-display').innerText = count;
    }

    function purchaseUpgrade() {
      if (count >= upgradeCost) {
        count -= upgradeCost;
        clickValue++;
        upgradeCost *= 2;
        document.getElementById('count-display').innerText = count;
        document.getElementById('click-value').innerText = clickValue;
        document.getElementById('upgrade-cost').innerText = upgradeCost;
      }
    }`),U=m(),r=t("main"),B=t("h1"),z=l("Clicker Game"),N=m(),f=t("button"),D=l("Click Me"),G=m(),b=t("p"),H=l("Click count: "),h=t("span"),M=l("0"),O=m(),d=t("div"),k=t("button"),q=l("Increase Click Value"),Y=m(),x=t("p"),L=l("Current Click Value: "),C=t("span"),R=l("1"),j=m(),y=t("p"),F=l("Upgrade Cost: "),v=t("span"),J=l("10"),this.h()},l(c){u=o(c,"HEAD",{});var E=a(u);I=o(E,"STYLE",{});var $=a(I);A=i($,`body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }

    main {
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 1.5em;
      margin-bottom: 1em;
      text-align: center;
      color: #333;
    }

    button {
      display: block;
      width: 100%;
      padding: 0.5em 1em;
      font-size: 1em;
      background-color: #4287f5;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #1a5bc9;
    }

    p {
      font-size: 1em;
      text-align: center;
      color: #666;
      margin-top: 1em;
    }

    span {
      font-weight: bold;
      color: #333;
    }
    
    .upgrade {
      margin-top: 1em;
    }

    .upgrade button {
      background-color: #4caf50;
    }

    .upgrade button:hover {
      background-color: #45a049;
    }`),$.forEach(e),E.forEach(e),w=g(c),s=o(c,"BODY",{});var P=a(s);V=o(P,"SCRIPT",{});var nn=a(V);S=i(nn,`let count = 0;
    let clickValue = 1;
    let upgradeCost = 10;

    function handleClick() {
      count += clickValue;
      document.getElementById('count-display').innerText = count;
    }

    function purchaseUpgrade() {
      if (count >= upgradeCost) {
        count -= upgradeCost;
        clickValue++;
        upgradeCost *= 2;
        document.getElementById('count-display').innerText = count;
        document.getElementById('click-value').innerText = clickValue;
        document.getElementById('upgrade-cost').innerText = upgradeCost;
      }
    }`),nn.forEach(e),U=g(P),r=o(P,"MAIN",{});var p=a(r);B=o(p,"H1",{});var en=a(B);z=i(en,"Clicker Game"),en.forEach(e),N=g(p),f=o(p,"BUTTON",{onclick:!0});var tn=a(f);D=i(tn,"Click Me"),tn.forEach(e),G=g(p),b=o(p,"P",{});var K=a(b);H=i(K,"Click count: "),h=o(K,"SPAN",{id:!0});var on=a(h);M=i(on,"0"),on.forEach(e),K.forEach(e),O=g(p),d=o(p,"DIV",{class:!0});var _=a(d);k=o(_,"BUTTON",{onclick:!0});var an=a(k);q=i(an,"Increase Click Value"),an.forEach(e),Y=g(_),x=o(_,"P",{});var Q=a(x);L=i(Q,"Current Click Value: "),C=o(Q,"SPAN",{id:!0});var rn=a(C);R=i(rn,"1"),rn.forEach(e),Q.forEach(e),j=g(_),y=o(_,"P",{});var W=a(y);F=i(W,"Upgrade Cost: "),v=o(W,"SPAN",{id:!0});var cn=a(v);J=i(cn,"10"),cn.forEach(e),W.forEach(e),_.forEach(e),p.forEach(e),P.forEach(e),this.h()},h(){T(f,"onclick","handleClick()"),T(h,"id","count-display"),T(k,"onclick","purchaseUpgrade()"),T(C,"id","click-value"),T(v,"id","upgrade-cost"),T(d,"class","upgrade")},m(c,E){X(c,u,E),n(u,I),n(I,A),X(c,w,E),X(c,s,E),n(s,V),n(V,S),n(s,U),n(s,r),n(r,B),n(B,z),n(r,N),n(r,f),n(f,D),n(r,G),n(r,b),n(b,H),n(b,h),n(h,M),n(r,O),n(r,d),n(d,k),n(k,q),n(d,Y),n(d,x),n(x,L),n(x,C),n(C,R),n(d,j),n(d,y),n(y,F),n(y,v),n(v,J)},p:Z,i:Z,o:Z,d(c){c&&e(u),c&&e(w),c&&e(s)}}}class gn extends dn{constructor(u){super(),un(this,u,null,pn,sn,{})}}export{gn as component};
