(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),i=(n(13),n(7)),l=n(3),s=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r.trim()),i("")},className:"form"},o.a.createElement("input",{value:r,onChange:function(e){var t=e.target;return i(t.value)},autoFocus:!0,placeholder:"Co jest do zrobienia?",className:"form__input"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),m=(n(15),function(e){var t=e.tasks,n=e.isHidingEnabled,a=e.deleteTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"list"},t.map((function(e){var t=e.id,r=e.name,i=e.done;return o.a.createElement("li",{key:t,className:"list__item".concat(i&&n?" list__item--hidden":"")},o.a.createElement("button",{onClick:function(){return c(t)},className:"list__button"},i?"\u2714":""),o.a.createElement("span",{className:"list__taskName ".concat(i?"list__taskName--done":"")},r),o.a.createElement("button",{onClick:function(){return a(t)},className:"list__button list__button--delete"},"\ud83d\uddd1"))})))}),d=(n(16),function(e){var t=e.tasks,n=e.isHidingEnabled,a=e.toggleHideDone,c=e.doAllTasks;return o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"buttons__button",onClick:a},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{className:"buttons__button",disabled:t.every((function(e){return e.done})),onClick:c},"Uko\u0144cz wszystkie")))}),f=(n(17),function(e){var t=e.title,n=e.extraHeaderContent,a=e.body;return o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"section__container"},o.a.createElement("h2",{className:"section__title"},t),n),o.a.createElement("div",{className:"section__body"},a))}),b=function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("h1",null,t))},E=(n(18),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)});var k=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,name:"Zje\u015b\u0107 kolacje",done:!0},{id:2,name:"I\u015b\u0107 spa\u0107",done:!1}]),k=Object(s.a)(r,2),_=k[0],g=k[1];return o.a.createElement(E,null,o.a.createElement(b,{title:"Lista zada\u0144"}),o.a.createElement(f,{title:"Dodaj nowe zadanie",body:o.a.createElement(u,{addNewTask:function(e){e&&g((function(t){return[].concat(Object(i.a)(t),[{name:e,done:!1,id:t.length?t[t.length-1].id+1:1}])}))}})}),o.a.createElement(f,{title:"Lista zada\u0144",extraHeaderContent:o.a.createElement(d,{tasks:_,isHidingEnabled:n,toggleHideDone:function(){c((function(e){return!e}))},doAllTasks:function(){g((function(e){return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{done:!0})}))}))}}),body:o.a.createElement(m,{tasks:_,isHidingEnabled:n,deleteTask:function(e){g((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){g((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{done:!t.done}):t}))}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.bb6712fc.chunk.js.map