(this["webpackJsonptodo-list-using-redux-error-git"]=this["webpackJsonptodo-list-using-redux-error-git"]||[]).push([[0],{21:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(5),s=i.n(n),a=i(4),d=i(3),r=i(1),l=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.TodoReducer.list})),i=Object(c.useState)(""),n=Object(a.a)(i,2),s=n[0],l=n[1],j=Object(c.useState)(!1),O=Object(a.a)(j,2),o=O[0],b=O[1],u=Object(c.useState)("hidden"),h=Object(a.a)(u,2),m=h[0],x=h[1],v=Object(c.useState)("hidden"),f=Object(a.a)(v,2),E=f[0],p=f[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"main-div",children:Object(r.jsxs)("div",{className:"child-div",children:[Object(r.jsx)("figure",{children:Object(r.jsx)("figcaption",{children:"Add Your List Here \u270c\ufe0f"})}),Object(r.jsxs)("div",{className:"addItems",children:[Object(r.jsx)("input",{type:"text",placeholder:" \u270d\ufe0f Add Items.. ",value:s,onChange:function(e){l(e.target.value),""==e.target.value?(b(!0),x("hidden")):(x("visible"),b(!1))}}),o?Object(r.jsx)("h5",{children:"Please Enter A ToDo"}):Object(r.jsx)("i",{className:"fa fa-plus add-btn",style:{visibility:m},onClick:function(){return e((t=s,{type:"ADD_TODO",payload:{id:(new Date).getTime().toString(),data:t}}),l(""),p("visible"));var t}})]}),Object(r.jsx)("div",{className:"showItems",children:t.map((function(t){return Object(r.jsxs)("div",{className:"eachItem",children:[Object(r.jsx)("h1",{children:t.data}),Object(r.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Item",onClick:function(){return e({type:"DELETE_TODO",id:t.id})}})]},t.id)}))}),Object(r.jsx)("div",{className:"showItems",children:Object(r.jsx)("button",{className:"btn effect04","data-sm-link-text":"remove All",onClick:function(){return e({type:"REMOVE_TODO"},p("hidden"),x("hidden"))},style:{visibility:E},children:Object(r.jsx)("span",{children:"Check List"})})})]})})})},j=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(l,{})})},O=i(7),o=i(11),b={list:[]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var i=t.payload,c=i.id,n=i.data;return{list:[].concat(Object(o.a)(e.list),[{id:c,data:n}])};case"DELETE_TODO":var s=e.list.filter((function(e){return e.id!==t.id}));return console.log(typeof s),{list:s};case"REMOVE_TODO":return{list:[]};default:return e}},h=Object(O.a)({TodoReducer:u}),m=Object(O.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i(21);s.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{store:m,children:Object(r.jsx)(j,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9f820d91.chunk.js.map