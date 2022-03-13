(function(){"use strict";var t={7995:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-layout"),n("router-view"),n("footer-layout")],1)},o=[],s=n(3019),a=n(4665),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("nav",{staticClass:"header__nav"},[n("div",{staticClass:"container flex f-space f-center"},[n("router-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"103",height:"66",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"m31.408 53.21-.194.178a13.98 13.98 0 0 1-4.501 3.32 14.059 14.059 0 0 1-5.451 1.298c-7.397 0-12.777-5.524-12.777-13.142 0-7.618 5.38-13.127 12.777-13.127 1.886.063 3.74.504 5.45 1.298a13.98 13.98 0 0 1 4.502 3.32l.194.193 4.752-5.732-.12-.148a18.15 18.15 0 0 0-6.464-5.145 18.267 18.267 0 0 0-8.09-1.76 22.244 22.244 0 0 0-15.078 5.48A22.29 22.29 0 0 0 0 44.87a22.29 22.29 0 0 0 6.408 15.63 22.108 22.108 0 0 0 15.078 5.494c2.799.04 5.569-.563 8.094-1.764a18.12 18.12 0 0 0 6.46-5.156l.12-.134-4.752-5.732ZM40.972 65.208h8.413V24.416h-8.413v40.792ZM82.334 56.343a12.366 12.366 0 0 1-6.216 2.05c-2.72 0-3.945-1.486-3.945-4.604V32.138h8.562v-7.603h-8.562v-12.77l-8.249 4.454v8.316h-7.098v7.677h7.098v23.032c0 6.267 3.75 10.558 9.325 10.662 2.622.13 5.224-.522 7.471-1.871h.075l2.032-7.87-.493.297v-.12ZM89.282 65.208h8.428V24.416h-8.428v40.792Z",fill:"#fff"}}),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M102.612 17.259A40.753 40.753 0 0 0 88.027 4.572 41.032 41.032 0 0 0 69.2 0 41.032 41.032 0 0 0 50.37 4.572 40.746 40.746 0 0 0 35.786 17.26l-.403.564h9.683l.104-.119a32.98 32.98 0 0 1 10.937-7.627 33.156 33.156 0 0 1 26.169 0 32.98 32.98 0 0 1 10.936 7.627l.12.12H103l-.388-.565Z",fill:"#E40520"}})])]),t.isAuthorizedUser?n("a",{staticClass:"logOut bold size24 pointer",attrs:{html:"/"},on:{click:function(e){return t.logOut()}}},[t._v(" LogOut ")]):t._e()],1)]),t.isLoginPage?n("div",{staticClass:"header__bg flex f-end"},[t._m(0)]):t._e()])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container header__message"},[n("div",[t._v("Welcome to")]),n("div",[t._v("Business Analytics Online")])])}],c=(n(8309),{name:"MainHeader",computed:(0,s.Z)((0,s.Z)({},(0,a.Se)(["isAuthorizedUser"])),{},{isLoginPage:function(){return"login"===this.$route.name}}),methods:{logOut:function(){this.$store.dispatch("logOutStatus"),this.$router.push({name:"login"})}}}),d=c,f=n(1001),m=(0,f.Z)(d,l,u,!1,null,null,null),p=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer__top p-30 flex f-space f-center"},[n("svg",{staticClass:"footerLogo",attrs:{width:"56",height:"35",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"m17.072 28.217-.106.095a7.59 7.59 0 0 1-2.446 1.76 7.8 7.8 0 0 1-2.963.689c-4.02 0-6.945-2.93-6.945-6.97 0-4.04 2.924-6.96 6.945-6.96a7.797 7.797 0 0 1 2.963.687 7.59 7.59 0 0 1 2.446 1.761l.106.103 2.583-3.04-.065-.079a9.828 9.828 0 0 0-3.514-2.728 10.138 10.138 0 0 0-4.398-.934 12.273 12.273 0 0 0-8.195 2.906C1.25 17.723 0 20.697 0 23.795s1.25 6.073 3.483 8.289a12.198 12.198 0 0 0 8.195 2.913 10.121 10.121 0 0 0 4.4-.935 9.811 9.811 0 0 0 3.512-2.734l.065-.071-2.583-3.04ZM22.27 34.58h4.573V12.948H22.27V34.58ZM44.752 29.879a6.837 6.837 0 0 1-3.378 1.086c-1.479 0-2.145-.787-2.145-2.44V17.042h4.654V13.01H39.23V6.239L34.746 8.6v4.41h-3.858v4.071h3.858v12.214c0 3.323 2.038 5.599 5.068 5.654a7.34 7.34 0 0 0 4.061-.992h.04l1.105-4.174-.268.158v-.063ZM48.53 34.58h4.58V12.948h-4.58V34.58Z",fill:"#fff"}}),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M55.774 9.152a21.996 21.996 0 0 0-7.927-6.727A22.754 22.754 0 0 0 37.613 0C34.05 0 30.54.832 27.379 2.425a21.996 21.996 0 0 0-7.928 6.727l-.219.3h5.263l.057-.063a17.938 17.938 0 0 1 5.945-4.045 18.41 18.41 0 0 1 7.112-1.427c2.446 0 4.866.486 7.112 1.427a17.939 17.939 0 0 1 5.944 4.045l.065.063h5.256l-.212-.3Z",fill:"#E40520"}})]),n("div",{staticClass:"footer__links"},[n("router-link",{staticClass:"link nowrap",attrs:{to:"/"}},[t._v("Terms & Conditions")]),n("router-link",{staticClass:"link nowrap",attrs:{to:"/"}},[t._v("Privacy")]),n("router-link",{staticClass:"link nowrap",attrs:{to:"/"}},[t._v("Notice at Collection")]),n("router-link",{staticClass:"link nowrap",attrs:{to:"/"}},[t._v("CA Privacy Hub")]),n("router-link",{staticClass:"link nowrap",attrs:{to:"/"}},[t._v("Contact Us")]),n("router-link",{staticClass:"link nowrap",attrs:{to:"/"}},[t._v("Sitemap")])],1)]),n("div",{staticClass:"footer__bottom p-30"},[t._v(" Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender. ")])])])},h=[],g={name:"MainFooter"},w=g,_=(0,f.Z)(w,v,h,!1,null,null,null),C=_.exports,b={name:"App",components:{HeaderLayout:p,FooterLayout:C},computed:(0,s.Z)({},(0,a.Se)(["isAuthorizedUser","initialiseLoginedUser"])),mounted:function(){this.isAuthorizedUser&&this.$router.push({name:"todo"})},created:function(){this.$store.dispatch("initializeLoginedUser")}},y=b,E=(0,f.Z)(y,r,o,!1,null,null,null),L=E.exports,O=(n(1539),n(8783),n(3948),n(2809)),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"container p-rel mb-40 mt-40"},[n("login-form"),t._m(0),n("div",{staticClass:"mb-15"},[n("div",{staticClass:"mb-10"},[n("svg",{staticClass:"fl-l",attrs:{width:"23",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19.958 0 23 2.994 8.772 17 0 8.366 3.042 5.37l5.73 5.64L19.958 0Z",fill:"#0076C0"}})]),n("div",{staticClass:"bold-500 ml-35"},[t._v("Interactive Reporting")])]),n("div",{staticClass:"ml-35 maxW-630"},[t._v(" In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities. ")])]),n("div",{staticClass:"mb-15"},[n("div",{staticClass:"mb-10"},[n("svg",{staticClass:"fl-l",attrs:{width:"23",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19.958 0 23 2.994 8.772 17 0 8.366 3.042 5.37l5.73 5.64L19.958 0Z",fill:"#0076C0"}})]),n("div",{staticClass:"bold-500 ml-35"},[t._v("Automated data updates")])]),n("div",{staticClass:"ml-35 maxW-630"},[t._v(" The application automatically updates and structures the data in just 60 seconds, saving you time and money. ")])]),n("div",{staticClass:"mb-15"},[n("div",{staticClass:"mb-10"},[n("svg",{staticClass:"fl-l",attrs:{width:"23",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19.958 0 23 2.994 8.772 17 0 8.366 3.042 5.37l5.73 5.64L19.958 0Z",fill:"#0076C0"}})]),n("div",{staticClass:"bold-500 ml-35"},[t._v("Data Security")])]),n("div",{staticClass:"ml-35 maxW-630"},[t._v(" The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality. ")])])],1)])},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"maxW-665 mb-15"},[n("span",{staticClass:"bold-500"},[t._v("Business Analytics")]),t._v(" — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's ")])}],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loginForm"},[n("div",{staticClass:"loginForm__login mb-20"},[n("div",{staticClass:"flex f-column mb-40 p-rel"},[n("label",{staticClass:"mb-5",attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],class:{inputError:t.isErrorName},attrs:{type:"text",name:"name"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}}),t.isErrorName?n("span",{staticClass:"error flex f-center"},[n("svg",{staticClass:"mr-10",attrs:{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z",fill:"#D60000"}})]),n("span",[t._v("Enter right user name")])]):t._e()]),n("div",{staticClass:"flex f-column mb-40 p-rel"},[n("label",{staticClass:"mb-5",attrs:{for:"name"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPassword,expression:"inputPassword"}],class:{inputError:t.isErrorPassword},attrs:{type:"text",name:"password"},domProps:{value:t.inputPassword},on:{input:function(e){e.target.composing||(t.inputPassword=e.target.value)}}}),t.isErrorPassword?n("span",{staticClass:"error flex f-center"},[n("svg",{staticClass:"mr-10",attrs:{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z",fill:"#D60000"}})]),n("span",[t._v("Enter right password")])]):t._e()]),n("button",{staticClass:"button boxed mb-20",attrs:{type:"button"},on:{click:function(e){return t.compareInputedData()}}},[t._v(" LOGIN ")]),n("div",{staticClass:"text-c"},[n("router-link",{staticClass:"link-c size20",attrs:{to:"/"}},[t._v("Forgot Password")])],1)]),n("button",{staticClass:"button grey boxed",attrs:{type:"button"}},[t._v("Register now")])])},S=[],Z={name:"LoginForm",data:function(){return{inputName:"",inputPassword:"",isErrorName:!1,isErrorPassword:!1}},computed:(0,s.Z)((0,s.Z)({},(0,a.Se)(["getUser"])),{},{isEqualUserName:function(){return this.getUser.username===this.inputName},isEqualUserPassword:function(){return this.getUser.password===this.inputPassword}}),methods:{compareInputedData:function(){this.isEqualUserName||(this.isErrorName=!0),this.isEqualUserPassword||(this.isErrorPassword=!0),this.isEqualUserName&&this.isEqualUserPassword&&(this.isErrorName=!1,this.isErrorPassword=!1,this.$store.dispatch("changeAuthorizedStatus"),this.$router.push({name:"todo"}))}}},x=Z,N=(0,f.Z)(x,A,S,!1,null,null,null),k=N.exports,P={name:"LoginPage",components:{LoginForm:k}},I=P,D=(0,f.Z)(I,T,U,!1,null,null,null),M=D.exports;i.Z.use(O.Z);var z=[{path:"/",name:"login",component:M},{path:"/todo",name:"todo",component:function(){return n.e(300).then(n.bind(n,8551))}}],R=new O.Z({mode:"history",base:"/vue-upswot-todolist-test/",routes:z}),$=R,j=n(4479);n(2222),n(7327),n(1249);i.Z.use(a.ZP);var q=new a.ZP.Store({state:{user:{username:"Admin",password:"12345"},loginData:{username:"",password:""},authorizedUser:!1,todos:[{id:1,name:"TodoName",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!"},{id:12,name:"TodoName2",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!"},{id:13,name:"TodoName3",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!"}]},getters:{getUser:function(t){return t.user},isAuthorizedUser:function(t){return t.authorizedUser},getTodos:function(t){return t.todos}},mutations:{INITIALISE_LOGINED_USER:function(t){if(localStorage.getItem("loginedUser")){var e=JSON.parse(localStorage.getItem("loginedUser"));e&&(t.authorizedUser=!0)}},CHANGE_AUTHORIZED_STATUS:function(t){t.authorizedUser=!0,localStorage.setItem("loginedUser",!0)},LOGOUT_USER_STATUS:function(t){t.authorizedUser=!1,localStorage.setItem("loginedUser",!1)},ADD_TODO:function(t,e){t.todos=[].concat((0,j.Z)(t.todos),[e])},REMOVE_TODO:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e}))},EDIT_TODO:function(t,e){var n=t.todos.map((function(t){return t.id===e.id?(0,s.Z)((0,s.Z)({},t),{},{name:e.name,body:e.body}):t}));t.todos=(0,j.Z)(n)}},actions:{initializeLoginedUser:function(t){var e=t.commit;e("INITIALISE_LOGINED_USER")},changeAuthorizedStatus:function(t){var e=t.commit;e("CHANGE_AUTHORIZED_STATUS")},logOutStatus:function(t){var e=t.commit;e("LOGOUT_USER_STATUS")},addTodo:function(t,e){var n=t.commit;n("ADD_TODO",e)},removeTodo:function(t,e){var n=t.commit;n("REMOVE_TODO",e)},editTodo:function(t,e){var n=t.commit;n("EDIT_TODO",e)}},modules:{}});i.Z.config.productionTip=!1,new i.Z({router:$,store:q,render:function(t){return t(L)}}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/todo-legacy.f0be1cb8.js"}}(),function(){n.miniCssF=function(t){return"css/todo.2bedb3f1.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-upswot-todolist-test:";n.l=function(i,r,o,s){if(t[i])t[i].push(r);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=i),t[i]=[r];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var r=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vue-upswot-todolist-test/"}(),function(){var t=function(t,e,n,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,r.parentNode.removeChild(r),i(l)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){r=s[i],o=r.getAttribute("data-href");if(o===t||o===e)return r}},i=function(i){return new Promise((function(r,o){var s=n.miniCssF(i),a=n.p+s;if(e(s,a))return r();t(i,a,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={300:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=i(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=t[e]=[n,i]}));i.push(r[2]=o);var s=n.p+n.u(e),a=new Error,l=function(i){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,r[1](a)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(e&&e(i);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkvue_upswot_todolist_test"]=self["webpackChunkvue_upswot_todolist_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7995)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.6c359bda.js.map