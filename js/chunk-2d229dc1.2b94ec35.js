(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229dc1"],{def0:function(t,s,e){"use strict";e.r(s);var a=Object.freeze(["\n                  query dboys($date: Mixed) {\n                    dboys(\n                      first:100\n                      page:1\n                       turns: {\n                        AND:[\n                          { column:CREATED_AT operator:GTE value: $date }\n                          { column:END_TURN operator:IS_NULL }\n                        ]\n                      }\n                    ){\n                      paginatorInfo{\n                        count\n                        currentPage\n                        firstItem\n                        hasMorePages\n                        lastItem\n                        lastPage\n                        total\n                        perPage\n                      }\n                      data{\n                        id\n                        firstname\n                        lastname\n                        possession_products{\n                          id\n                          status\n                          type_delivery\n                        }\n                        turns_today_minutes\n                        turns_today{\n                          id\n                          minutes\n                          endTurn\n                          latitude\n                          longitude\n                          end_latitude\n                          end_longitude\n                        }\n                        shippings_today{\n                          id\n                          reserve_date\n                          status\n                          type_delivery\n                        }\n                      }\n                    }\n                  }\n                "]),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"layout-px-spacing"},[e("div",{staticClass:"row layout-top-spacing"},[e("ApolloQuery",{staticClass:"col-12 px-5",attrs:{tag:"div",debounce:600,query:function(t){return t(a)},variables:{date:"2022-01-21"}},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.result,n=a.loading,i=a.error,r=a.data;return[n||null==r?e("div",{staticClass:"loading apollo"},[e("div",[e("loading",{attrs:{active:!0,"is-full-page":!0}})],1)]):i?e("div",{staticClass:"error apollo"},[t._v("An error occurred")]):r?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"statbox widget box box-shadow"},[e("div",{staticClass:"widget-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Repartidores activos")])])])]),e("div",{staticClass:"widget-content widget-content-area"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table mb-4"},[e("caption",[t._v("repartidores activos")]),e("thead",{staticClass:"thead-light "},[e("tr",[e("th",{staticClass:"text-center"},[t._v("Perfil")]),e("th",[t._v("Nombre")]),e("th",{staticClass:"text-center"},[t._v("Actividad")]),e("th",{staticClass:"text-center"},[t._v("Ubicación")]),e("th",{staticClass:"text-center"},[t._v("P recolectados")]),e("th",{staticClass:"text-center"},[t._v("P entregados")]),e("th",{staticClass:"text-center"},[t._v("Todas las posesiones")])])]),e("tbody",t._l(r.dboys.data,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"text-center"},[e("img",{attrs:{height:"70",width:"70",src:t.urlImgDboy+s.id+"/"+s.selfie,alt:"",onerror:"javascript:this.src='http://zultimate.com/wp-content/uploads/2019/12/default-profile.png'"}})]),e("td",{domProps:{textContent:t._s(s.firstname+" "+s.lastname)}}),e("td",{staticClass:"text-center"},[e("b-badge",{domProps:{textContent:t._s(t.secondsToString(60*s.turns_today_minutes))}})],1),e("td",{staticClass:"text-center"},[e("b-button",{attrs:{to:{name:"active-courier-map",params:{id:s.id}},size:"sm"}},[e("i",{staticClass:"fas fa-location-arrow"})])],1),e("td",{staticClass:"text-center"},[e("b-badge",[t._v(t._s(s.shippings_today.filter((function(t){return 1==t.type_delivery})).filter((function(t){return 3==t.status})).length))])],1),e("td",{staticClass:"text-center"},[e("b-badge",[t._v(t._s(s.shippings_today.filter((function(t){return 1==t.type_delivery})).filter((function(t){return 4==t.status})).length))])],1),e("td",{staticClass:"text-center"},[e("b-badge",[t._v(t._s(s.possession_products.length))])],1)])})),0)])])])])])]):e("div",{staticClass:"no-result apollo"},[t._v("No result :(")])]}}])})],1)])},i=[],r=e("9ab4"),o=e("1b40"),l=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return s.urlImgDboy="https://todi-upload.s3.amazonaws.com/upload/dboys/",s}return Object(r["d"])(s,t),s.prototype.secondsToString=function(t){var s=Math.floor(t/3600);s=s<10?"0"+s:s;var e=Math.floor(t/60%60);e=e<10?"0"+e:e;var a=t%60;return a=a<10?"0"+a:a,s+":"+e},s=Object(r["c"])([o["a"]],s),s}(o["c"]),c=l,d=c,u=e("2877"),p=Object(u["a"])(d,n,i,!1,null,"4b739076",null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d229dc1.2b94ec35.js.map