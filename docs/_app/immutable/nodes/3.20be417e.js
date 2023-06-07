import{S as Y,i as $,s as G,k as i,q as C,a as _,l as s,m,r as A,h as r,c as L,n as h,b as H,G as t,H as j,o as I}from"../chunks/index.8feb9419.js";function M(q){let n,u,b,x,e,l,d,a,c,y,w,D,p,g,T,v;return{c(){n=i("head"),u=i("title"),b=C("ToDoList"),x=_(),e=i("style"),l=C(`body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      padding: 20px 0;
      margin: 0;
      color: #333;
    }

    .task-form {
      padding: 0 20px;
    }

    .task-input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    #task-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid #ccc;
      color: #333;
    }

    .task-name {
      flex-grow: 1;
      margin-left: 10px;
    }

    .delete-btn {
      color: #ff0000;
      cursor: pointer;
    }

    .task.completed .task-name {
      text-decoration: line-through;
      color: #888;
    }`),d=_(),a=i("body"),c=i("div"),y=i("h1"),w=C("ToDoList"),D=_(),p=i("div"),g=i("input"),T=_(),v=i("ul"),this.h()},l(o){n=s(o,"HEAD",{});var f=m(n);u=s(f,"TITLE",{});var z=m(u);b=A(z,"ToDoList"),z.forEach(r),x=L(f),e=s(f,"STYLE",{});var P=m(e);l=A(P,`body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      padding: 20px 0;
      margin: 0;
      color: #333;
    }

    .task-form {
      padding: 0 20px;
    }

    .task-input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    #task-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid #ccc;
      color: #333;
    }

    .task-name {
      flex-grow: 1;
      margin-left: 10px;
    }

    .delete-btn {
      color: #ff0000;
      cursor: pointer;
    }

    .task.completed .task-name {
      text-decoration: line-through;
      color: #888;
    }`),P.forEach(r),f.forEach(r),d=L(o),a=s(o,"BODY",{});var U=m(a);c=s(U,"DIV",{class:!0});var k=m(c);y=s(k,"H1",{});var V=m(y);w=A(V,"ToDoList"),V.forEach(r),D=L(k),p=s(k,"DIV",{class:!0});var E=m(p);g=s(E,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),T=L(E),v=s(E,"UL",{id:!0}),m(v).forEach(r),E.forEach(r),k.forEach(r),U.forEach(r),this.h()},h(){h(g,"type","text"),h(g,"id","task-input"),h(g,"class","task-input"),h(g,"placeholder","Enter task name"),h(v,"id","task-list"),h(p,"class","task-form"),h(c,"class","container")},m(o,f){H(o,n,f),t(n,u),t(u,b),t(n,x),t(n,e),t(e,l),H(o,d,f),H(o,a,f),t(a,c),t(c,y),t(y,w),t(c,D),t(c,p),t(p,g),t(p,T),t(p,v)},p:j,i:j,o:j,d(o){o&&r(n),o&&r(d),o&&r(a)}}}function O(q){return I(()=>{console.log("fuck shit");var n=document.getElementById("task-input"),u=document.getElementById("task-list");n.addEventListener("keypress",function(b){if(b.key==="Enter"){var x=n.value.trim();if(console.log("yup"),console.log(n),console.log(x),x!==""){var e=document.createElement("li");e.className="task";var l=document.createElement("input");l.type="checkbox",l.addEventListener("change",function(){e.classList.toggle("completed",l.checked)});var d=document.createElement("span");d.className="task-name",d.textContent=x;var a=document.createElement("span");a.className="delete-btn",a.textContent="Delete",a.addEventListener("click",function(){e.remove()}),e.appendChild(l),e.appendChild(d),e.appendChild(a),u.appendChild(e),n.value=""}}})}),[]}class B extends Y{constructor(n){super(),$(this,n,O,M,G,{})}}export{B as component};
