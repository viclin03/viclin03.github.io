import{S as E,i as j,s as q,k as x,q as v,a as C,l as f,m as p,r as k,h as u,c as H,n as b,b as y,G as _,u as $,H as m,K as N,J as T}from"../chunks/index.8feb9419.js";function S(a,n,l){const c=a.slice();return c[4]=n[l],c[6]=l,c}function g(a){let n,l=a[4].text+"",c,i,r;function h(){return a[2](a[6])}return{c(){n=x("button"),c=v(l),this.h()},l(e){n=f(e,"BUTTON",{class:!0});var t=p(n);c=k(t,l),t.forEach(u),this.h()},h(){b(n,"class","svelte-adk5jd")},m(e,t){y(e,n,t),_(n,c),i||(r=T(n,"click",h),i=!0)},p(e,t){a=e,t&1&&l!==(l=a[4].text+"")&&$(c,l)},d(e){e&&u(n),i=!1,r()}}}function A(a){let n,l,c=a[0].text+"",i,r,h=a[0].choices,e=[];for(let t=0;t<h.length;t+=1)e[t]=g(S(a,h,t));return{c(){n=x("main"),l=x("h1"),i=v(c),r=C();for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){n=f(t,"MAIN",{class:!0});var o=p(n);l=f(o,"H1",{});var s=p(l);i=k(s,c),s.forEach(u),r=H(o);for(let d=0;d<e.length;d+=1)e[d].l(o);o.forEach(u),this.h()},h(){b(n,"class","svelte-adk5jd")},m(t,o){y(t,n,o),_(n,l),_(l,i),_(n,r);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,null)},p(t,[o]){if(o&1&&c!==(c=t[0].text+"")&&$(i,c),o&3){h=t[0].choices;let s;for(s=0;s<h.length;s+=1){const d=S(t,h,s);e[s]?e[s].p(d,o):(e[s]=g(d),e[s].c(),e[s].m(n,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=h.length}},i:m,o:m,d(t){t&&u(n),N(e,t)}}}function B(a,n,l){let c={currentScene:0,scenes:[{id:0,text:"prompt1?",choices:[{text:"1",nextScene:1},{text:"2",nextScene:2}]},{id:1,text:"prompt2",choices:[{text:"1",nextScene:3},{text:"2",nextScene:4}]},{id:2,text:"end1",choices:[]},{id:3,text:"prompt3",choices:[{text:"1",nextScene:5},{text:"2",nextScene:6}]},{id:4,text:"prompt4",choices:[{text:"1",nextScene:7},{text:"2",nextScene:8}]},{id:5,text:"end2",choices:[]},{id:6,text:"end3",choices:[]},{id:7,text:"end4",choices:[]},{id:8,text:"end5",choices:[]}]},i=c.scenes[c.currentScene];function r(e){c.currentScene=i.choices[e].nextScene,l(0,i=c.scenes[c.currentScene])}return[i,r,e=>r(e)]}class I extends E{constructor(n){super(),j(this,n,B,A,q,{})}}export{I as component};