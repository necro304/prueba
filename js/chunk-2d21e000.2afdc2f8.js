(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e000"],{d460:function(e,t,i){"use strict";i.r(t);var n=Object.freeze(["\n            query renderMapService($shipping_id: ID! ) {\n             renderMapService(shipping_id: $shipping_id){\n              init{\n                latitude\n                longitude\n                title\n                description\n              }\n              finish{\n                latitude\n                longitude\n                title\n                description\n              }\n              time\n              distance\n              dboy{\n                id\n                firstname\n                lastname\n                email\n                phone\n              }\n              positions{\n                latitude\n                longitude\n                speed\n                altitude\n              }\n            }\n          }\n          "]),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout-px-spacing"},[i("div",{staticClass:"row layout-top-spacing"},[i("ApolloQuery",{staticClass:"col-12",attrs:{debounce:600,query:function(e){return e(n)},variables:{shipping_id:34}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.result,o=n.loading,s=n.error,r=n.data;return[o?i("div",{staticClass:"loading apollo"},[i("div",[i("loading",{attrs:{active:o,"is-full-page":!0},on:{"update:active":function(e){o=e}}})],1)]):s?i("div",{staticClass:"error apollo"},[e._v("An error occurred")]):r?i("div",[i("pre",[e._v(e._s(r))]),i("GmapMap",{staticStyle:{width:"100%",height:"800px"},attrs:{center:{lat:4.676001,lng:-74.098892},zoom:11}},[i("directions-renderer",{attrs:{travelMode:"DRIVING",origin:{lat:r.renderMapService.init.latitude,lng:r.renderMapService.init.longitude},destination:{lat:r.renderMapService.finish.latitude,lng:r.renderMapService.finish.longitude}}}),e._l(r.renderMapService.positions,(function(t,n){return i("GmapMarker",{key:n,attrs:{position:{lat:t.latitude,lng:t.longitude},clickable:!0,draggable:!1,highlight:"#ffffff",size:"200",title:"Velocidad: "+t.speed,label:{text:n+1===r.renderMapService.positions.length?"sports_motorsports":"delivery_dining",fontFamily:"Material Icons",color:n+1===r.renderMapService.positions.length?"#000000":"#ffffff",fontSize:n+1===r.renderMapService.positions.length?"24px":"18px"}},on:{click:function(t){return e.openInfoWindow(n)}}},[i("gmap-info-window",{attrs:{opened:e.infoWindows.includes(n)},on:{closeclick:function(t){return e.disableWindow(n)}}},[i("div",[e._v(" "+e._s(t.speed.toFixed(2)+" km")+" ")])])],1)}))],2)],1):i("div",{staticClass:"no-result apollo"},[e._v("No result :(")])]}}])})],1)])},s=[],r=i("9ab4"),a=i("1b40"),l=i("755e"),d=Object(l["MapElementFactory"])({name:"directionsRenderer",ctr(){return google.maps.DirectionsRenderer},events:[],mappedProps:{},props:{origin:{type:Object},destination:{type:Object},waypoints:{type:Array},travelMode:{type:String}},afterCreate(e){let t=new window.google.maps.DirectionsService;console.log(t);let{origin:i,destination:n,travelMode:o,waypoints:s}=this;t.route({origin:i,destination:n,travelMode:o,waypoints:s,optimizeWaypoints:!0},(t,i)=>{console.log(t),"OK"===i&&(e.setDirections(t),e.setOptions({draggable:!1,suppressInfoWindows:!0}))}).catch(e=>console.log(e)),this.$watch(()=>[this.origin,this.destination,this.travelMode,this.waypoints],()=>{let{origin:i,destination:n,travelMode:o,waypoints:s}=this;i&&n&&o&&t.route({origin:i,destination:n,travelMode:o,waypoints:s,optimizeWaypoints:!0},(t,i)=>{console.log(t),"OK"===i&&(e.setDirections(t),e.setOptions({draggable:!1,suppressInfoWindows:!0}))}).catch(e=>console.log(e))})}}),p=i("4bb5"),c=i("2ef0"),u=i.n(c),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.urlImgDboy="https://todi-upload.s3.amazonaws.com/upload/dboys/",t.waypoints=[],t.origin=null,t.destination=null,t.load=!1,t.dboyData=null,t.infoWindows=[],t}return Object(r["d"])(t,e),t.prototype.openInfoWindow=function(e){this.infoWindows.includes(e)||this.infoWindows.push(e)},t.prototype.disableWindow=function(e){this.infoWindows.includes(e)&&(this.infoWindows=u.a.remove(this.infoWindows,e))},t.prototype.getData=function(){},t.prototype.created=function(){this.getData()},Object(r["c"])([Object(p["a"])("dboyId")],t.prototype,"dboy",void 0),t=Object(r["c"])([Object(a["a"])({components:{directionsRenderer:d}})],t),t}(a["c"]),f=g,v=f,h=i("2877"),y=Object(h["a"])(v,o,s,!1,null,"267ca12a",null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d21e000.2afdc2f8.js.map