"use strict";(self["webpackChunkvue_upswot_todolist_test"]=self["webpackChunkvue_upswot_todolist_test"]||[]).push([[300],{8551:function(t,o,e){e.r(o),e.d(o,{default:function(){return C}});var d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todoList"},[e("div",{staticClass:"container flex f-center f-column"},[e("div",{staticClass:"text-c pt-30 mb-20"},[e("svg",{attrs:{width:"186",height:"119",viewBox:"0 0 186 119",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M56.7171 95.9381L56.3663 96.2594C54.0921 98.7788 51.3273 100.815 48.2387 102.246C45.1501 103.677 41.8015 104.473 38.3946 104.586C25.0372 104.586 15.3228 94.6262 15.3228 80.891C15.3228 67.1559 25.0372 57.2226 38.3946 57.2226C41.8015 57.3355 45.1501 58.1314 48.2387 59.5624C51.3273 60.9935 54.0921 63.03 56.3663 65.5494L56.7171 65.8975L65.2982 55.5627L65.0823 55.2949C61.9629 51.3523 57.9681 48.1775 53.4093 46.018C48.8504 43.8586 43.8506 42.7727 38.7994 42.8449C28.7981 42.6459 19.0842 46.1706 11.5719 52.7246C4.15337 60.2578 0 70.3721 0 80.9044C0 91.4368 4.15337 101.551 11.5719 109.084C19.0678 115.669 28.7905 119.206 38.7994 118.991C43.8535 119.064 48.8561 117.976 53.4158 115.811C57.9754 113.647 61.9684 110.465 65.0823 106.514L65.2982 106.273L56.7171 95.9381Z",fill:"white"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M73.9878 117.572H89.1801V44.0233H73.9878V117.572Z",fill:"white"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M148.681 101.588C145.344 103.802 141.465 105.079 137.455 105.283C132.544 105.283 130.331 102.605 130.331 96.9827V57.9459H145.793V44.2375H130.331V21.2117L115.436 29.2439V44.2375H102.618V58.0798H115.436V99.6065C115.436 110.905 122.209 118.643 132.274 118.83C137.01 119.064 141.708 117.89 145.766 115.457H145.901L149.571 101.267L148.681 101.802V101.588Z",fill:"white"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M161.229 117.572H176.448V44.0233H161.229V117.572Z",fill:"white"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M185.298 31.1182C178.497 21.5064 169.464 13.6605 158.962 8.24413C148.459 2.82773 136.797 0 124.961 0C113.125 0 101.462 2.82773 90.96 8.24413C80.4577 13.6605 71.4243 21.5064 64.6234 31.1182L63.8948 32.1357H81.3808L81.5697 31.9214C87.1382 26.0482 93.8594 21.3679 101.319 18.1687C108.779 14.9695 116.82 13.3191 124.947 13.3191C133.074 13.3191 141.115 14.9695 148.575 18.1687C156.035 21.3679 162.756 26.0482 168.325 31.9214L168.541 32.1357H186L185.298 31.1182Z",fill:"#E40520"}})])]),e("div",{staticClass:"todosBox"},[e("div",{staticClass:"size60 bold text-c"},[t._v("Thank you "+t._s(t.getUser.username))]),t.isAddTodoForm?t._e():e("div",{staticClass:"flex f-text-end mb-20"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(o){return t.addTodoFormOpen()}}},[t._v(" Create Todo ")])]),t.isAddTodoForm?e("add-todo-form",{attrs:{todoEditId:t.todoEditId},on:{"close-add-form":function(o){return t.closeAddForm()}}}):[t.getTodos.length?t._l(t.getTodos,(function(o){return e("div",{key:o.id,staticClass:"todo mb-20"},[e("div",{staticClass:"todo__top bold-500 flex f-center f-space"},[t._v(" "+t._s(o.name)+" "),e("div",{staticClass:"flex f-center"},[e("svg",{staticClass:"pointer ml-10 svgTodo",staticStyle:{fill:"#000000"},attrs:{title:"Edit todo",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30"},on:{click:function(e){return t.editTodo(o.id)}}},[e("path",{attrs:{d:"M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"}})]),e("svg",{staticClass:"pointer ml-10 svgTodo",staticStyle:{fill:"#000000"},attrs:{title:"Delete todo",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30"},on:{click:function(e){return t.deleteTodo(o.id)}}},[e("path",{attrs:{d:"M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"}})])])]),e("div",{staticClass:"todo__body"},[t._v(t._s(o.body))])])})):e("div",{staticClass:"text-c"},[t._v("Here is no todo yet")])]],2)])])},s=[],i=e(3019),n=e(4665),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"mb-20"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(o){return t.turnBack()}}},[t._v("Back")])]),e("div",{staticClass:"flex f-column mb-40 p-rel"},[e("label",{staticClass:"mb-5",attrs:{for:"todoName"}},[t._v("Todo Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.name,expression:"newTodo.name"}],attrs:{type:"text",name:"todoName"},domProps:{value:t.newTodo.name},on:{input:function(o){o.target.composing||t.$set(t.newTodo,"name",o.target.value)}}})]),e("div",{staticClass:"flex f-column mb-40 p-rel"},[e("label",{staticClass:"mb-5",attrs:{for:"todoBody"}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.body,expression:"newTodo.body"}],attrs:{type:"text",name:"todoBody"},domProps:{value:t.newTodo.body},on:{input:function(o){o.target.composing||t.$set(t.newTodo,"body",o.target.value)}}})]),e("div",{staticClass:"text-c"},[e("button",{staticClass:"button boxed",attrs:{type:"button",disabled:t.isDisabledButton},on:{click:function(o){return t.saveTodo()}}},[t._v(" Save Todo ")])])])},l=[],r=(e(9653),e(8309),e(7327),e(1539),{name:"AddTodoForm",props:{todoEditId:{type:Number,default:0}},data:function(){return{newTodo:{id:Date.now(),name:"",body:""}}},computed:(0,i.Z)((0,i.Z)({},(0,n.Se)(["getTodos"])),{},{isDisabledButton:function(){return!this.newTodo.name||!this.newTodo.body}}),methods:{getTodo:function(t){var o=this.getTodos.filter((function(o){return o.id===t}));this.newTodo.id=o[0].id,this.newTodo.name=o[0].name,this.newTodo.body=o[0].body},turnBack:function(){this.$emit("close-add-form")},saveTodo:function(){this.newTodo.name&&this.newTodo.body&&(this.todoEditId&&this.$store.dispatch("editTodo",this.newTodo),this.todoEditId||this.$store.dispatch("addTodo",this.newTodo),this.$emit("close-add-form"))}},mounted:function(){this.todoEditId&&this.getTodo(this.todoEditId)}}),c=r,u=e(1001),m=(0,u.Z)(c,a,l,!1,null,null,null),v=m.exports,f={name:"TodoListPage",components:{AddTodoForm:v},data:function(){return{isAddTodoForm:!1,todoEditId:0}},computed:(0,i.Z)({},(0,n.Se)(["getTodos","getUser"])),methods:{deleteTodo:function(t){this.$store.dispatch("removeTodo",t)},editTodo:function(t){this.todoEditId=t,this.isAddTodoForm=!0},addTodoFormOpen:function(){this.isAddTodoForm=!0},closeAddForm:function(){this.todoEditId=0,this.isAddTodoForm=!1}}},h=f,p=(0,u.Z)(h,d,s,!1,null,null,null),C=p.exports}}]);
//# sourceMappingURL=todo-legacy.f0be1cb8.js.map