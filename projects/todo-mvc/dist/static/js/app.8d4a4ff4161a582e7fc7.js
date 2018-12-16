webpackJsonp([1],{"1aWy":function(t,e){},"991W":function(t,e){},FprK:function(t,e){},"M+zA":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v(this._s(this.head))])])},staticRenderFns:[]};var s=i("VU/8")({name:"Header",data:function(){return{head:"todos"}}},n,!1,function(t){i("1aWy")},"data-v-024a1160",null).exports,l=i("mvHQ"),r=i.n(l),a=i("c/Tr"),c=i.n(a),m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"box"},[i("input",{staticClass:"box-checkbox hidden",attrs:{type:"checkbox",id:"completeAll"},domProps:{checked:t.isAllChecked},on:{change:t.completeAllItems}}),t._v(" "),i("label",{staticClass:"box-label",attrs:{for:"completeAll"}}),t._v(" "),i("input",{staticClass:"box-input",attrs:{type:"text",placeholder:t.placeholder},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addItem(e):null}}})])},staticRenderFns:[]};var d=i("VU/8")({name:"ToDoInput",props:["isAllChecked"],data:function(){return{placeholder:"What needs ?"}},methods:{completeAllItems:function(t){this.$emit("completeAllItems",t.target.checked)},addItem:function(t){""!==t.target.value.trim()&&this.$emit("addItem",t,t.target.value.trim()),t.target.value=""}}},m,!1,function(t){i("kc/l")},"data-v-db98351c",null).exports,u={name:"ToDoData",props:["items"],data:function(){return{prevClickTime:0}},methods:{activeItem:function(t){Date.now()-this.prevClickTime<800&&(t.target.setAttribute("contentEditable",!0),t.target.focus()),this.prevClickTime=Date.now()},test:function(t){console.log(t.type+Math.ceil(1e3*Math.random()))},inactiveItem:function(t,e){t.target.textContent=t.target.textContent.trim(),this.$emit("modifyItem",e,t.target.textContent),t.target.removeAttribute("contentEditable")},completeItem:function(t,e){this.$emit("completeItem",e,t.target.checked)},removeItem:function(t,e){this.$emit("removeItem",e)}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"items",attrs:{id:"todo-items"}},t._l(t.items,function(e){return i("li",{key:e.id,staticClass:"items-list"},[i("input",{staticClass:"list-complete-checkbox hidden",attrs:{type:"checkbox",id:e.id},domProps:{checked:e.isCompleted},on:{change:function(i){t.completeItem(arguments[0],e.id)}}}),t._v(" "),i("label",{staticClass:"list-complete-label",attrs:{for:e.id}}),t._v(" "),i("span",{staticClass:"list-text",on:{keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter")&&t._k(i.keyCode,"esc",27,i.key,"Escape"))return null;t.inactiveItem(arguments[0],e.id)},blur:function(i){t.inactiveItem(arguments[0],e.id)},click:function(e){t.activeItem(arguments[0])}}},[t._v("\n      "+t._s(e.text)+"\n    ")]),t._v(" "),i("button",{staticClass:"list-delete",on:{click:function(i){t.removeItem(arguments[0],e.id)}}},[t._v("X")])])}))},staticRenderFns:[]};var h=i("VU/8")(u,f,!1,function(t){i("FprK")},"data-v-25709b30",null).exports,p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"box"},[i("span",{staticClass:"box-result"},[t._v(t._s(t.items.length)+" left")]),t._v(" "),i("section",{staticClass:"box-filter"},[i("input",{staticClass:"hidden",attrs:{type:"radio",id:"showAll",name:"filterMode",checked:"checked"}}),t._v(" "),i("label",{staticClass:"box-filter-label",attrs:{for:"showAll"},on:{click:t.filterItem}},[t._v("All")]),t._v(" "),i("input",{staticClass:"hidden",attrs:{type:"radio",id:"showActive",name:"filterMode"}}),t._v(" "),i("label",{staticClass:"box-filter-label",attrs:{for:"showActive"},on:{click:t.filterItem}},[t._v("Active")]),t._v(" "),i("input",{staticClass:"hidden",attrs:{type:"radio",id:"showCompleted",name:"filterMode"}}),t._v(" "),i("label",{staticClass:"box-filter-label",attrs:{for:"showCompleted"},on:{click:t.filterItem}},[t._v("Done")])]),t._v(" "),i("button",{class:t.items.filter(function(t){return t.isCompleted}).length?"box-clear show":"box-clear",on:{click:t.clearCompletedItems}},[t._v("Clear done")])])},staticRenderFns:[]};var v=i("VU/8")({name:"ToDoResult",props:["items","displayedItem"],methods:{filterItem:function(t){this.$emit("filterItem",t.target.getAttribute("for"))},clearCompletedItems:function(){this.$emit("clearCompletedItems")}}},p,!1,function(t){i("gVDj")},"data-v-b99d4324",null).exports,I=0,C=[{text:"item0",isCompleted:!1,id:"todoItem"+String(I++)}];function _(t){return c()(document.querySelectorAll(t))}var g={name:"ToDoList",components:{ToDoInput:d,ToDoData:h,ToDoResult:v},data:function(){return{isAllChecked:!1,items:localStorage&&localStorage.getItem("todo-mvc")?JSON.parse(localStorage.getItem("todo-mvc")):C,filterMode:"showAll"}},created:function(){this.recountItems(),this.countStartFromHistory()},mounted:function(){this.resizeAppHeight(),this.resizeTodoListHeight()},watch:{items:function(t,e){localStorage.setItem("todo-mvc",r()(e))}},computed:{displayedItems:function(){return{showAll:this.items,showActive:this.items.filter(function(t){return!t.isCompleted}),showCompleted:this.items.filter(function(t){return t.isCompleted})}}},methods:{resizeAppHeight:function(){_("#app")[0].style.height=_("html")[0].clientHeight+"px"},resizeTodoListHeight:function(){_(".todo-list")[0].style.height=getComputedStyle(_(".todo-list")[0]).height},recountItems:function(){this.items.forEach(function(t,e){t.id="todoItem"+e})},countStartFromHistory:function(){I=this.items.length},getIndexById:function(t){return this.items.findIndex(function(e){return e.id===t})},addItem:function(t,e){this.items.push({text:e,isCompleted:!1,id:"todoItem"+String(I++)})},completeAllItems:function(t){var e=this;this.isAllChecked=t,0===this.items.length?this.$nextTick(function(){e.isAllChecked=!1}):this.items.forEach(function(e){return e.isCompleted=t})},modifyItem:function(t,e){this.items[this.getIndexById(t)].text=e},completeItem:function(t,e){this.items[this.getIndexById(t)].isCompleted=e},removeItem:function(t){this.items.splice(this.getIndexById(t),1)},filterItem:function(t){this.filterMode=t},clearCompletedItems:function(){for(var t=function(t){return!0===t.isCompleted};this.items.find(t);)this.items.splice(this.items.findIndex(t),1);this.isAllChecked=!1}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"todo-list"},[i("ToDoInput",{attrs:{isAllChecked:t.isAllChecked},on:{completeAllItems:t.completeAllItems,addItem:t.addItem}}),t._v(" "),i("ToDoData",{attrs:{items:t.displayedItems[t.filterMode]},on:{modifyItem:t.modifyItem,completeItem:t.completeItem,removeItem:t.removeItem}}),t._v(" "),i("ToDoResult",{attrs:{items:t.displayedItems[t.filterMode]},on:{filterItem:t.filterItem,clearCompletedItems:t.clearCompletedItems}})],1)},staticRenderFns:[]};var k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("p",{staticClass:"footer-info"},[t._v(t._s(t.info))]),t._v(" "),i("p",{staticClass:"footer-info"},[t._v("Written by "+t._s(t.author))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"footer-info"},[this._v("Part of\n    "),e("a",{staticClass:"footer-info-link",attrs:{href:"https://github.com/xianshenglu/vue/tree/master/demo"}},[this._v("Vue demo")])])}]};var x={name:"App",components:{Header:s,ToDoList:i("VU/8")(g,b,!1,function(t){i("d7TG")},"data-v-627b0e68",null).exports,Footer:i("VU/8")({name:"Footer",data:function(){return{info:"Double-click to edit a todo",author:"xianshenglu"}}},k,!1,function(t){i("y0Sa")},"data-v-6a59a1b2",null).exports}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("ToDoList"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var A=i("VU/8")(x,y,!1,function(t){i("M+zA")},null,null).exports;i("991W");o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:A},template:"<App/>"})},d7TG:function(t,e){},gVDj:function(t,e){},"kc/l":function(t,e){},y0Sa:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8d4a4ff4161a582e7fc7.js.map