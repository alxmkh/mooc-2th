(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),o=t.n(c),a=t(17),i=t.n(a),u=t(8),s=t(3),l=t(7),j=t.n(l),d=function(e){return Object(r.jsxs)("div",{children:["filter shown with ",Object(r.jsx)("input",{onChange:e.onchange})]})},b=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:e.addPersonOrReplaceNumber,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{onChange:e.onChangeName,value:e.newName||""})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{onChange:e.onChangeNumber,value:e.newPhoneNumber||""})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})},f=function(e){return Object(r.jsx)(r.Fragment,{children:0===e.filterPersonArray.length?e.personList:e.filterPersonArray})},h=t(4),m=t.n(h),O="/api/persons/",g=function(){return m.a.get(O).then((function(e){return e.data}))},p=function(e){return m.a.post(O,e).then((function(e){return e.data}))},v=function(e){return m.a.delete(O+e).then((function(e){return e.data}))},x=function(e,n){return m.a.put(O+n,e).then((function(e){return e.data}))},w=(t(49),function(e){var n=e.message,t=e.isError;return null===n?null:Object(r.jsx)(r.Fragment,{children:t?Object(r.jsx)("div",{className:"removePersonMessage",children:n}):Object(r.jsx)("div",{className:"addMessage",children:n})})}),N=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),l=i[0],h=i[1],m=Object(c.useState)(""),O=Object(s.a)(m,2),N=O[0],P=O[1],C=Object(c.useState)([]),S=Object(s.a)(C,2),k=S[0],y=S[1],E=Object(c.useState)(null),A=Object(s.a)(E,2),D=A[0],L=A[1],F=Object(c.useState)(null),I=Object(s.a)(F,2),M=I[0],R=I[1];Object(c.useEffect)((function(){g().then((function(e){o(e)})).catch((function(e){console.error(e)}))}),[]);var T,U=t.map((function(e){return Object(r.jsxs)("div",{children:[" ",e.name," ",e.number," ",Object(r.jsx)("button",{onClick:function(n){return function(e,n,r){r.preventDefault(),window.confirm("Delete ".concat(e,"?"))&&v(n).then((function(){var e=t.filter((function(e){return e.id!==n}));o(e)})).catch((function(e){console.log(e)}))}(e.name,e.id,n)},children:"delete"})]},j.a.generate())}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(w,{message:M,isError:!0}),Object(r.jsx)(w,{message:D,isError:!1}),Object(r.jsx)(d,{onchange:function(e){if(e.target.value.length>0){var n=t.filter((function(n){return n.name.toLowerCase().startsWith(e.target.value.toLowerCase())})).map((function(e){return Object(r.jsxs)("div",{children:[" ",e.name," ",e.number," "]},j.a.generate())}));y(n)}else y([])}}),Object(r.jsx)("h2",{children:"add a new"}),Object(r.jsx)(b,{onChangeNumber:function(e){P(e.target.value)},onChangeName:function(e){h(e.target.value)},newName:l,newPhoneNumber:N,addPersonOrReplaceNumber:(T=l,t.find((function(e){return e.name===T}))?function(e){if(e.preventDefault(),!window.confirm("".concat(l," is already added to phonebook, replace the old number with a new one?")))return!1;var n=t.find((function(e){return e.name===l}));console.log("UpdatePerson: ",t);var r=n.id;n=Object(u.a)(Object(u.a)({},n),{},{number:N}),x(n,r).then((function(e){console.log("Response from PUT (UI): ",e),o(t.map((function(n){return n.id!==r?n:e}))),h(""),P("")})).catch((function(e){console.error(e),R("Information of ".concat(l," has already been removed from server.")),setTimeout((function(){R(null),o(t.filter((function(e){return e.id!==r})))}),3e3)}))}:function(e){e.preventDefault(),p({name:l,number:N}).then((function(e){o(t.concat(e)),L("Added '".concat(l,"'.")),setTimeout((function(){L(null)}),2e3),h(""),P("")})).catch((function(e){console.error(e),alert("Smth went wrong: ".concat(e))}))})}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(f,{filterPersonArray:k,personList:U})]})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.927edc3c.chunk.js.map