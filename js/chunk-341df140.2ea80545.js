(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341df140"],{"5ec4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout-px-spacing"},[s("div",{staticClass:"row layout-top-spacing"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"statbox widget box box-shadow"},[t._m(0),s("div",{staticClass:"widget-content widget-content-area"},[s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"input-group "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar...","aria-label":"buscar...","aria-describedby":"button-addon2"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:function(e){return t.getDeliveries()}}},[s("i",{staticClass:"fa fa-search"})])])])])]),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table mb-4"},[s("caption",[t._v("Todos los repartidores")]),t._m(1),s("tbody",t._l(t.deliveries,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"text-center"},[s("img",{attrs:{height:"150",width:"120",src:t.urlImgDboy+e.id+"/"+e.selfie,alt:"",onerror:"javascript:this.src='http://zultimate.com/wp-content/uploads/2019/12/default-profile.png'"}})]),s("td",{domProps:{textContent:t._s(e.firstname+" "+e.lastname)}}),s("td",{domProps:{textContent:t._s(e.phone)}}),s("td",{domProps:{textContent:t._s(e.vehicle)}}),s("td",[s("div",[t._v(t._s(t._f("toCurrency")(e.wallet)))]),s("br"),s("div",{staticClass:"input-group mb-3"},[s("input",{staticClass:"form-control",staticStyle:{padding:"10px","font-size":"10px"},attrs:{type:"number",id:"wallet_input_"+a,placeholder:"monto","aria-label":"Recipient's username","aria-describedby":"wallet_input_button_"+a}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-sm btn-outline-secondary",staticStyle:{padding:"5px"},attrs:{type:"button",id:"wallet_input_button_"+a},on:{click:function(s){return t.addSaldo("wallet_input_"+a,e.id)}}},[s("i",{staticClass:"fas fa-plus"})])])])]),s("td",{},[s("button",{class:"mb-2 btn-block shadow-none btn btn-"+(1==e.verified?"success":"danger"),on:{click:function(s){return t.changeVerified(e.id)}}},[t._v(t._s(1==e.verified?"verificado":"no verificado"))]),s("br"),s("button",{class:"btn-block shadow-none btn btn-"+(1==e.suspend?"danger":"success"),on:{click:function(s){return t.changeStatus(e.id)}}},[t._v(t._s(1==e.suspend?"inactivo":"activo"))])]),s("td",{staticClass:"text-center"},[s("router-link",{staticClass:"btn btn-info",attrs:{tag:"a",to:{name:"mensajero-detail",params:{id:e.id}}}},[s("i",{staticClass:"fa fa-edit"})])],1)])})),0)])])])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widget-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",[t._v("Repartidores")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark "},[s("tr",[s("th",{staticClass:"text-center"},[t._v("Perfil")]),s("th",[t._v("Nombre")]),s("th",[t._v("Telefono")]),s("th",[t._v("Vehiculos")]),s("th",[t._v("Billetera")]),s("th",{staticClass:"text-center"},[t._v("Estado")]),s("th",{staticClass:"text-center"},[t._v("Detalles")])])])}],i=s("9ab4"),o=s("1b40"),r=s("ba8b"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.urlImgDboy="https://todi-upload.s3.amazonaws.com/upload/dboys/",e.search="",e.deliveries=[],e}return Object(i["d"])(e,t),e.prototype.setDeliveries=function(t){console.log(t),this.deliveries=t.data},e.prototype.setItem=function(t){var e=t.data,s=this.deliveries.findIndex((function(t){return t.id==e.id}));void 0!=s&&s>-1&&(console.log(s),this.$set(this.deliveries,s,e))},e.prototype.changeStatus=function(t){r["a"].get("mensajeros/"+t+"/cambiar/estatus",this.setItem)},e.prototype.changeVerified=function(t){r["a"].get("mensajeros/"+t+"/cambiar/verificar",this.setItem)},e.prototype.addSaldoDboy=function(t,e){r["a"].post("mensajeros/"+t+"/cambiar/wallet",{wallet:e},this.setItem)},e.prototype.addSaldo=function(t,e){var s=document.getElementById(t);(null===s||void 0===s?void 0:s.value)>=1e4&&(console.log(null===s||void 0===s?void 0:s.value),this.addSaldoDboy(e,null===s||void 0===s?void 0:s.value),null===s||void 0===s||(s.value=""))},e.prototype.getDeliveries=function(){r["a"].get("repartidores?search="+this.search,this.setDeliveries)},e.prototype.created=function(){this.getDeliveries()},e=Object(i["c"])([o["a"]],e),e}(o["c"]),l=c,d=l,u=(s("eabe"),s("2877")),p=Object(u["a"])(d,a,n,!1,null,null,null);e["default"]=p.exports},ba8b:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var a=s("9ab4"),n=s("3def"),i=function(t){function e(){return t.call(this)||this}return Object(a["d"])(e,t),e.prototype.get=function(t,e){return this.service.get(t).then((function(t){return e(t.data)}))},e.prototype.delete=function(t,e){return this.service.delete(t).then((function(t){return e(t.data)}))},e.prototype.patch=function(t,e,s){return this.service.request({method:"PATCH",url:t,responseType:"json",data:e}).then((function(t){return s(t.status,t.data)}))},e.prototype.post=function(t,e,s){return this.service.request({method:"POST",url:t,responseType:"json",data:e}).then((function(t){return s(t.data)}))},e.prototype.put=function(t,e,s){return this.service.request({method:"PUT",url:t,responseType:"json",data:e}).then((function(t){return s(t.data)}))},e.prototype.test=function(){console.log(this.$vue),console.log(this.$router)},e}(n["a"]),o=new i},eabe:function(t,e,s){"use strict";s("ffa2")},ffa2:function(t,e,s){}}]);
//# sourceMappingURL=chunk-341df140.2ea80545.js.map