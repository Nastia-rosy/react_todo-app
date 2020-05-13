(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,l){e.exports=l(17)},15:function(e,t,l){},16:function(e,t,l){},17:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),o=l(5),c=l.n(o),r=(l(15),l(16),l(1)),i=l(3),d=l(6),s=l(7),m=l(9),u=l(8),p=l(2),f=l.n(p),h=function(e){var t=e.todos,l=e.handleCompleted,a=e.deleteTodo;return n.a.createElement("ul",{className:"todo-list"},t.map((function(e){return n.a.createElement("li",{key:e.id,className:f()({completed:e.completed})},n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(e.id),name:e.id,checked:e.completed,onChange:l}),n.a.createElement("label",{htmlFor:"todo-".concat(e.id)},e.title),n.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return a(e.id)}})),n.a.createElement("input",{type:"text",className:"edit"}))})))},b=function(e){var t=e.filter,l=e.clearCompleted,a=e.itemsLeft,o=e.clearVisibleButton,c=e.setFilter;return n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},"".concat(a," items left")),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{href:"#/",name:"All",className:f()({selected:"All"===t}),onClick:function(e){return c(e.target.name)}},"All")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/active",name:"Active",className:f()({selected:"Active"===t}),onClick:function(e){return c(e.target.name)}},"Active")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/completed",name:"Completed",className:f()({selected:"Completed"===t}),onClick:function(e){return c(e.target.name)}},"Completed"))),o&&n.a.createElement("button",{type:"button",className:"clear-completed",onClick:l},"Clear completed"))},C="All",g="Completed",E="Active",v=function(e){Object(m.a)(l,e);var t=Object(u.a)(l);function l(){var e;Object(d.a)(this,l);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={todos:[],todosCopied:[],todoTitle:"",isVisible:!1,selectedFilter:C},e.handleChangeTitle=function(t){e.setState({todoTitle:t.target.value})},e.handleCreateNewTodo=function(t){t.preventDefault(),e.setState((function(e){if(""===e.todoTitle)return!1;var t={id:e.todos.length+1,title:e.todoTitle,completed:!1};return{todos:[].concat(Object(i.a)(e.todos),[t]),isVisible:!0,todoTitle:""}}))},e.handleCompleted=function(t){var l=t.target,a=l.checked,n=l.name;e.setState((function(e){var t=e.todos.find((function(e){return e.id===+n}));return{todos:Object(i.a)(e.todos.map((function(e){return e.id===+n?Object(r.a)(Object(r.a)({},t),{},{completed:a}):e})))}}))},e.getFilteredTodos=function(){var t=e.state,l=t.selectedFilter,a=t.todos;return l===E?a.filter((function(e){return!e.completed})):l===g?a.filter((function(e){return e.completed})):a},e.setFilter=function(t){e.setState({selectedFilter:t})},e.handleDeleteTodo=function(t){var l=!0;e.state.todos.length<=1&&(l=!1),e.setState((function(e){return{todos:Object(i.a)(e.todos.filter((function(e){return e.id!==t}))),isVisible:l}}))},e.handleClearCompleted=function(){var t=!0;e.state.todosCopied.length<=1&&(t=!1),e.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed})),isVisible:t}}))},e.handleCompletedAll=function(){e.setState((function(e){var t=Object(i.a)(e.todos);return e.todos.length!==e.todos.filter((function(e){return e.completed})).length&&(t=Object(i.a)(e.todos).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})}))),{todos:t.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed})}))}}))},e}return Object(s.a)(l,[{key:"render",value:function(){var e=this.state,t=e.todoTitle,l=e.isVisible,a=e.selectedFilter,o=e.todos,c=this.getFilteredTodos();return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("form",{onSubmit:this.handleCreateNewTodo},n.a.createElement("input",{type:"text",value:t,className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChangeTitle}))),n.a.createElement("section",{className:"main"},n.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.handleCompletedAll}),l&&n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement(h,{todos:c,deleteTodo:this.handleDeleteTodo,handleCompleted:this.handleCompleted})),l&&n.a.createElement(b,{clearCompleted:this.handleClearCompleted,filter:a,todos:o,setFilter:this.setFilter,itemsLeft:o.filter((function(e){return!e.completed})).length,clearVisibleButton:o.filter((function(e){return e.completed})).length>=1}))}}]),l}(n.a.Component);c.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d85a57d6.chunk.js.map