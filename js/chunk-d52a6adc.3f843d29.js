(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d52a6adc"],{7246:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout-px-spacing"},[s("div",{staticClass:"row layout-top-spacing"},[s("div",{staticClass:"col-12"},[t.isLoading?s("div",[s("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}})],1):s("div",{staticClass:"statbox widget box box-shadow"},[t._m(0),s("div",{staticClass:"widget-content widget-content-area"},[s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"input-group "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar...","aria-label":"buscar...","aria-describedby":"button-addon2"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:function(e){return t.getClients()}}},[s("i",{staticClass:"fa fa-search"})])])])])]),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table mb-4"},[s("caption",[t._v("Todos los repartidores")]),t._m(1),s("tbody",t._l(t.users,(function(e,n){return s("tr",[s("td",{staticClass:"text-center"},[s("img",{attrs:{onerror:"javascript:this.src='http://zultimate.com/wp-content/uploads/2019/12/default-profile.png'",height:"150",width:"120",src:t.urlImgDboy+e.avatar,alt:""}})]),s("td",{domProps:{textContent:t._s(e.firstname+" "+e.lastname)}}),s("td",{domProps:{textContent:t._s(e.phone)}}),s("td",{domProps:{textContent:t._s(e.created_at)}}),s("td",{staticClass:"text-center"},[s("span",{staticClass:"badge badge-secondary"},[t._v(t._s(e["deliveries_count"]))])]),s("td",{staticClass:"text-center"},[s("span",{staticClass:"badge badge-secondary"},[t._v(t._s(e["viajes-completados-count"]))])]),s("td",{staticClass:"text-center"},[s("span",{staticClass:"badge badge-secondary"},[t._v(t._s(1==e["tody_envios"]?"SI":"NO"))])]),s("td",[s("div",[t._v(t._s(e.discount)+"%")]),s("br"),s("div",{staticClass:"input-group mb-3"},[s("input",{staticClass:"form-control",staticStyle:{padding:"10px","font-size":"10px",width:"50px"},attrs:{min:"0",max:"100",type:"number",id:"discount_input_"+n,placeholder:"Porcentaje","aria-label":"Recipient's username","aria-describedby":"discount_input_button_"+n}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-sm btn-outline-secondary",staticStyle:{padding:"5px"},attrs:{type:"button",id:"discount_input_button_"+n},on:{click:function(s){return t.addDiscount("discount_input_"+n,e.id)}}},[s("i",{staticClass:"fas fa-plus"})])])])])])})),0)])])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widget-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",[t._v("Clientes")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark "},[s("tr",[s("th",{staticClass:"text-center"},[t._v("Perfil")]),s("th",[t._v("Nombre")]),s("th",[t._v("Telefono")]),s("th",[t._v("Inscripción")]),s("th",{staticClass:"text-center"},[t._v("Servicios solicitados")]),s("th",{staticClass:"text-center"},[t._v("Servicios completados")]),s("th",{staticClass:"text-center"},[t._v("Usuario todi")]),s("th",{staticClass:"text-center"},[t._v("Descuento")])])])}],i=s("9ab4"),o=s("1b40"),c=s("ba8b"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.urlImgDboy="https://todi-upload.s3.amazonaws.com/upload/avatar/",e.search="",e.users=[],e.isLoading=!0,e}return Object(i["d"])(e,t),e.prototype.setClients=function(t){console.log(t),this.users=t.data,this.isLoading=!1},e.prototype.addDiscount=function(t,e){var s=document.getElementById(t);(null===s||void 0===s?void 0:s.value)>=0&&(null===s||void 0===s?void 0:s.value)<=100&&(console.log(null===s||void 0===s?void 0:s.value),this.addDiscountClient(e,null===s||void 0===s?void 0:s.value),null===s||void 0===s||(s.value=""))},e.prototype.addDiscountClient=function(t,e){c["a"].post("clientes/"+t+"/add/discount",{discount:e},this.setItem)},e.prototype.setItem=function(t){var e=t.data,s=this.users.findIndex((function(t){return t.id==e.id}));if(void 0!=s&&s>-1){var n=this.users[s];n.discount=e.discount,console.log(s),this.$set(this.users,s,n)}},e.prototype.getClients=function(){c["a"].get("clientes?search="+this.search+"&filter[tody_envios]=1&include=deliveriesCount&append=viajes-completados-count",this.setClients)},e.prototype.created=function(){this.getClients()},e=Object(i["c"])([o["a"]],e),e}(o["c"]),d=r,u=d,l=(s("978a"),s("2877")),p=Object(l["a"])(u,n,a,!1,null,null,null);e["default"]=p.exports},"8e68":function(t,e,s){},"978a":function(t,e,s){"use strict";s("8e68")},ba8b:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var n=s("9ab4"),a=s("3def"),i=function(t){function e(){return t.call(this)||this}return Object(n["d"])(e,t),e.prototype.get=function(t,e){return this.service.get(t).then((function(t){return e(t.data)}))},e.prototype.delete=function(t,e){return this.service.delete(t).then((function(t){return e(t.data)}))},e.prototype.patch=function(t,e,s){return this.service.request({method:"PATCH",url:t,responseType:"json",data:e}).then((function(t){return s(t.status,t.data)}))},e.prototype.post=function(t,e,s){return this.service.request({method:"POST",url:t,responseType:"json",data:e}).then((function(t){return s(t.data)}))},e.prototype.put=function(t,e,s){return this.service.request({method:"PUT",url:t,responseType:"json",data:e}).then((function(t){return s(t.data)}))},e.prototype.test=function(){console.log(this.$vue),console.log(this.$router)},e}(a["a"]),o=new i}}]);
//# sourceMappingURL=chunk-d52a6adc.3f843d29.js.map