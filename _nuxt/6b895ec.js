(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{154:function(t,e,n){"use strict";var o=n(0),r=n(210),c=n.n(r);n(300);o.default.use(c.a,{})},198:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7388ab72",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("0fcdff5c",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";var o={data:function(){return{clipped:!1,drawer:!1,fixed:!1,active:"home",items:[{icon:"mdi-home-circle-outline",title:"Home",to:"/"},{icon:"mdi-file-account",title:"About",to:"/About"},{icon:"mdi-code-braces-box",title:"Resume",to:"/Resume"}],miniVariant:!1,title:"Vuetify.js"}}},r=(n(258),n(59)),c=n(95),l=n.n(c),d=n(307),f=n(310),v=n(308),_=n(311),m=n(150),h=n(309),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"font",staticStyle:{"background-color":"#252422"},attrs:{id:"sidebar"}},[n("vs-sidebar",{attrs:{open:t.drawer,background:"#DDA15E"},on:{"update:open":function(e){t.drawer=e}},scopedSlots:t._u([{key:"logo",fn:function(){},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._v(" "),n("vs-sidebar-item",{attrs:{id:"Home",NuxtLink:"",to:"/"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-icon",{attrs:{"aria-hidden":"false"}},[t._v("\n          mdi-home-circle-outline\n        ")])]},proxy:!0}])},[t._v("\n      Home\n    ")]),t._v(" "),n("vs-sidebar-item",{attrs:{id:"About",NuxtLink:"",to:"/about"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-icon",{attrs:{"aria-hidden":"false"}},[t._v("\n          mdi-file-account\n        ")])]},proxy:!0}])},[t._v("\n      About\n    ")]),t._v(" "),n("vs-sidebar-item",{attrs:{id:"Resume",NuxtLink:"",to:"/resume"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-icon",{attrs:{"aria-hidden":"false"}},[t._v("\n          mdi-code-braces-box\n        ")])]},proxy:!0}])},[t._v("\n      Resume\n    ")])],1),t._v(" "),n("v-app-bar",{attrs:{dense:"",collapse:!0,color:"#DDA15E"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,"b1e95510",null);e.a=component.exports;l()(component,{VApp:d.a,VAppBar:f.a,VAppBarNavIcon:v.a,VContainer:_.a,VIcon:m.a,VMain:h.a})},214:function(t,e,n){"use strict";var o=n(59),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("Nuxt")}),[],!1,null,null,null);e.a=component.exports},224:function(t,e,n){n(225),t.exports=n(226)},252:function(t,e,n){"use strict";n(198)},253:function(t,e,n){var o=n(21)(!1);o.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=o},258:function(t,e,n){"use strict";n(200)},259:function(t,e,n){var o=n(21)(!1);o.push([t.i,'.font[data-v-b1e95510]{font-family:"Google Sans",cursive}',""]),t.exports=o},66:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(252),n(59)),c=n(95),l=n.n(c),d=n(307),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[224,10,3,11]]]);