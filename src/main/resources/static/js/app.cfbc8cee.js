(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=o[0]))}return e}var a={},n={app:0},r=[];function c(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=a,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(o,a,function(t){return e[t]}.bind(null,a));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},cd49:function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"indigo"}},[o("v-toolbar-title",{staticClass:"headline text-uppercase"},[o("span",{staticStyle:{color:"white"}},[e._v("Teste Java")])])],1),o("v-content",{class:"d-flex justify-center"},[o("v-card",{staticClass:"mx-auto ",class:"justify-center col-md-8 col-lg-6",attrs:{raised:!0}},[o("v-card-text",[o("v-form",{on:{submit:function(t){return e.submit()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[o("v-row",[o("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[o("v-select",{attrs:{items:e.cities,"item-text":"label","item-value":"value",label:"Selecione Cidade","no-data-text":"Nenhum dado disponível",rules:[function(e){return!!e||"Data obrigatoria"}],dense:"",outlined:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),o("v-row",[o("v-col",[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[o("v-text-field",e._g({attrs:{label:"Data check-in","prepend-icon":"event",rules:[function(e){return!!e||"Data obrigatoria"}],outlined:"",readonly:""},model:{value:e.dateCheckinFormated,callback:function(t){e.dateCheckinFormated=t},expression:"dateCheckinFormated"}},a))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[o("v-date-picker",{attrs:{min:e.today.toISOString().slice(0,10),locale:"pt-BR"},on:{input:function(t){e.menu1=!1}},model:{value:e.checkin,callback:function(t){e.checkin=t},expression:"checkin"}})],1)],1),o("v-col",[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[o("v-text-field",e._g({attrs:{label:"Data check-out","prepend-icon":"event",outlined:"",readonly:""},model:{value:e.dateCheckoutFormated,callback:function(t){e.dateCheckoutFormated=t},expression:"dateCheckoutFormated"}},a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[o("v-date-picker",{attrs:{min:e.checkinPlus,locale:"pt-BR"},on:{input:function(t){e.menu2=!1}},model:{value:e.checkout,callback:function(t){e.checkout=t},expression:"checkout"}})],1)],1)],1),o("v-row",[o("v-col",[o("v-text-field",{attrs:{label:"Adultos",type:"number",min:"0",rules:[function(e){return e&&e>0||"Deve-se ter pelo menos um adulto"}],outlined:""},model:{value:e.adults,callback:function(t){e.adults=t},expression:"adults"}})],1),o("v-col",[o("v-text-field",{attrs:{label:"Crianças",type:"number",min:"0",outlined:""},model:{value:e.childs,callback:function(t){e.childs=t},expression:"childs"}})],1)],1)],1)],1)],1),o("v-card-actions",[o("v-btn",{attrs:{disabled:!e.formValid,block:!0,rounded:!0,color:"primary",loading:e.processing},on:{click:function(t){return e.submit()}}},[e._v("Calcular")])],1)],1)],1),e.hotels?o("v-content",[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.hotels,"item-key":"key","no-data-text":"Nenhum dado","sort-by":["id","roomId"],"multi-sort":""}})],1):e._e(),o("v-footer")],1)},r=[],c=(o("ac6a"),o("28a5"),o("768b")),i=o("d225"),l=o("b0b4"),s=o("308d"),u=o("6bb5"),d=o("4e2b"),f=o("9ab4"),p=o("2fe1"),h=o("bc3a"),v=o.n(h),m=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.checkin="",e.checkout="",e.today=new Date,e.adults=0,e.childs=0,e.city=0,e.formValid=!1,e.menu1=!1,e.menu2=!1,e.cities=[{label:"São Paulo",value:9626},{label:"Rio de Janeiro",value:7110},{label:"Porto Seguro",value:1032}],e.processing=!1,e.hotels=[],e.headers=[{text:"Hotel",align:"left",sortable:!0,value:"id"},{text:"Quarto",sortable:!0,value:"roomId"},{text:"Categoria",sortable:!1,value:"categoryName"},{text:"Valor Total",sortable:!1,value:"totalPrice"}],e.cityRules=[],e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"formatDate",value:function(e){if(!e)return"";var t=e.split("-"),o=Object(c["a"])(t,3),a=o[0],n=o[1],r=o[2];return"".concat(r,"/").concat(n,"/").concat(a)}},{key:"submit",value:function(){var e=this;this.formValid&&(this.processing=!0,v.a.get("http://localhost:9000/api/prices",{params:{adults:this.adults,childs:this.childs,dateCheckIn:new Date(this.checkin),dateCheckOut:new Date(this.checkout),cityCode:this.city}}).then((function(t){e.hotels=[],t.data&&t.data.forEach((function(t){t.rooms.forEach((function(o){e.hotels.push({key:"".concat(t.id," - ").concat(o.roomID),cityName:t.cityName,id:t.id,roomId:o.roomID,categoryName:o.categoryName,priceDetail:{pricePerDayAdult:o.priceDetail.pricePerDayAdult.toFixed(2),pricePerDayChild:o.priceDetail.pricePerDayChild.toFixed(2)},totalPrice:o.totalPrice.toFixed(2)})}))})),e.processing=!1})).catch((function(t){e.hotels=[],e.processing=!1})))}},{key:"dateCheckinFormated",get:function(){return this.formatDate(this.checkin)}},{key:"dateCheckoutFormated",get:function(){return this.formatDate(this.checkout)}},{key:"checkinPlus",get:function(){return this.checkin?new Date(new Date(this.checkin).valueOf()+864e5).toISOString():""}}]),t}(a["a"]);m=Object(f["a"])([Object(p["a"])({})],m);var b=m,k=b,y=o("2877"),g=o("6544"),x=o.n(g),w=o("7496"),C=o("40dc"),O=o("8336"),D=o("b0af"),V=o("99d9"),j=o("62ad"),P=o("a75b"),S=o("8fea"),F=o("2e4b"),_=o("553a"),N=o("4bd4"),T=o("e449"),A=o("0fd9"),I=o("b974"),B=o("8654"),M=o("2a7f"),R=Object(y["a"])(k,n,r,!1,null,null,null),E=R.exports;x()(R,{VApp:w["a"],VAppBar:C["a"],VBtn:O["a"],VCard:D["a"],VCardActions:V["a"],VCardText:V["b"],VCol:j["a"],VContent:P["a"],VDataTable:S["a"],VDatePicker:F["a"],VFooter:_["a"],VForm:N["a"],VMenu:T["a"],VRow:A["a"],VSelect:I["a"],VTextField:B["a"],VToolbarTitle:M["a"]});var J=o("9483");Object(J["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d1e7");var $=o("f309");a["a"].use($["a"]);var q=new $["a"]({icons:{iconfont:"md"},theme:{themes:{light:{primary:"#3f51b5",secondary:"#e91e63",accent:"#00bcd4",error:"#f44336",warning:"#ffc107",info:"#03a9f4",success:"#4caf50"}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:q,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.cfbc8cee.js.map