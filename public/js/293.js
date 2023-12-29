"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[293],{9293:(t,i,n)=>{n.r(i),n.d(i,{default:()=>d});const e={computed:{user:function(){return this.$store.state.user}},components:{},data:function(){return{}},methods:{logout:function(){var t=this;axios.post("logout").then((function(i){t.$router.push("/login")}))},goToAdmin:function(){this.$router.push("/admin/news")},goHome:function(){this.$router.push("/")}}};var s=n(1900);const a=(0,s.Z)(e,(function(){var t=this,i=t._self._c;return i("v-app-bar",{attrs:{fixed:"",dense:"",flat:"",color:"transparent"}},[i("v-spacer"),t._v(" "),1==t.user.is_admin?i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on,s=n.attrs;return[i("v-avatar",t._g(t._b({staticStyle:{cursor:"pointer"},attrs:{size:"32",fixed:""}},"v-avatar",s,!1),e),["admin"!=t.$route.params.component?i("v-icon",{attrs:{color:"black"},on:{click:function(i){return t.goToAdmin()}}},[t._v("mdi-cog")]):i("v-icon",{attrs:{color:"black"},on:{click:function(i){return t.goHome()}}},[t._v("\n                    mdi-home\n                ")])],1)]}}],null,!1,2410554522)},[t._v(" "),"admin"!=t.$route.params.component?i("span",[t._v("Administrace")]):i("span",[t._v("Domů")])]):t._e()],1)}),[],!1,null,null,null).exports;var o=n(9669),r=n.n(o);const l={data:function(){return{user:[],items:[{title:"Novinky",icon:"mdi-newspaper",link:"/news",can:"show_news"},{title:"Aplikace",icon:"mdi-devices",link:"/apps",can:"show_apps"},{title:"Tikety",icon:"mdi-checkbox-marked-circle-plus-outline",link:"/tikets",can:"show_tickets"},{title:"Fakturace",icon:"mdi-currency-usd",link:"/invoices",can:"show_invoices"},{title:"Návody",icon:"mdi-help",link:"/help",can:"show_tutorials"}],nanguCustomerMenuPart:[{title:"Založení zákazníka",icon:"mdi-account-multiple",link:"/customers/create",can:"show_nangu"},{title:"Vyhledání zákazníka",icon:"mdi-magnify",link:"/customers/search",can:"show_nangu"}],api:[{title:"API",icon:"mdi-api",link:"/api",can:"show_api"}],marketing:[{title:"Marketing",icon:"mdi-shopping",link:"/marketing",can:"show_marketing"}]}},created:function(){this.index()},components:{},mounted:function(){},methods:{index:function(){var t=this;r().get("users/auth").then((function(i){t.user=i.data.data}))},hasPermision:function(t,i,n){if(1==n)return!0;var e=!1;return i.forEach((function(i){i.permision.permision===t&&(e=!0)})),e}}};const c={data:function(){return{items:[{title:"Správa novinek",icon:"mdi-newspaper",link:"/admin/news"},{title:"Správa aplikací",icon:"mdi-devices",link:"/admin/apps"},{title:"Uživatelé",icon:"mdi-account-multiple",link:"/admin/users"},{title:"Správa návodů",icon:"mdi-help",link:"/admin/help"},{title:"Marketing",icon:"mdi-shopping",link:"/admin/marketing"}]}},components:{},mounted:function(){},methods:{}};const u={data:function(){return{user:[],drawer:!0}},components:{MainSideBarItems:(0,s.Z)(l,(function(){var t=this,i=t._self._c;return i("div",[i("v-list",t._l(t.items,(function(n){return i("v-list-item",{key:n.title,staticClass:"white--text",attrs:{link:"",nav:"",to:n.link}},[i("v-list-item-icon",[i("v-img",{staticClass:"mx-auto",attrs:{"max-height":"26","max-width":"26"}},[i("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(n.icon)+" ")])],1)],1),t._v(" "),i("v-list-item-title",{staticClass:"ml-6 subtitle-1 font-weight-medium"},[t._v("\n                "+t._s(n.title))])],1)})),1),t._v(" "),i("v-divider"),t._v(" "),i("v-list",t._l(t.nanguCustomerMenuPart,(function(n){return i("v-list-item",{key:n.title,staticClass:"white--text",attrs:{link:"",nav:"",to:n.link}},[i("v-list-item-icon",[i("v-img",{staticClass:"mx-auto",attrs:{"max-height":"26","max-width":"26"}},[i("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(n.icon)+" ")])],1)],1),t._v(" "),i("v-list-item-title",{staticClass:"ml-6 subtitle-1 font-weight-medium"},[t._v("\n                "+t._s(n.title))])],1)})),1),t._v(" "),i("v-divider"),t._v(" "),i("v-list",t._l(t.api,(function(n){return i("v-list-item",{key:n.title,staticClass:"white--text",attrs:{link:"",nav:"",to:n.link}},[i("v-list-item-icon",[i("v-img",{staticClass:"mx-auto",attrs:{"max-height":"26","max-width":"26"}},[i("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(n.icon)+" ")])],1)],1),t._v(" "),i("v-list-item-title",{staticClass:"ml-6 subtitle-1 font-weight-medium"},[t._v("\n                "+t._s(n.title))])],1)})),1),t._v(" "),i("v-list",t._l(t.marketing,(function(n){return i("v-list-item",{key:n.title,staticClass:"white--text",attrs:{link:"",nav:"",to:n.link}},[i("v-list-item-icon",[i("v-img",{staticClass:"mx-auto",attrs:{"max-height":"26","max-width":"26"}},[i("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(n.icon)+" ")])],1)],1),t._v(" "),i("v-list-item-title",{staticClass:"ml-6 subtitle-1 font-weight-medium"},[t._v("\n                "+t._s(n.title))])],1)})),1)],1)}),[],!1,null,null,null).exports,AdminSideBarItemsVue:(0,s.Z)(c,(function(){var t=this,i=t._self._c;return i("div",[i("v-list",t._l(t.items,(function(n){return i("v-list-item",{key:n.title,staticClass:"white--text",attrs:{link:"",nav:"",to:n.link}},[i("v-list-item-icon",[i("v-img",{staticClass:"mx-auto",attrs:{"max-height":"26","max-width":"26"}},[i("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(n.icon)+" ")])],1)],1),t._v(" "),i("v-list-item-title",{staticClass:"ml-6 subtitle-1 font-weight-medium"},[t._v("\n                "+t._s(n.title))])],1)})),1)],1)}),[],!1,null,null,null).exports},created:function(){this.index()},methods:{index:function(){var t=this;r().get("users/auth").then((function(i){t.user=i.data.data})).catch((function(i){"401"==i.response.status&&t.$router.push("/login")}))},userZone:function(){"user"!=this.$route.params.component&&this.$router.push("/user")},logout:function(){var t=this;r().post("logout").then((function(i){t.$router.push("/login")}))}}};const m={computed:{alert:function(){return this.$store.state.alerts}},data:function(){return{}},created:function(){},methods:{iconFunction:function(t){return"success"==t?"mdi-check":"mdi-close"}},watch:{alert:function(){0!=this.alert.length&&setTimeout(function(){this.$store.state.alerts=[]}.bind(this),5e3)}}};const v={computed:{},data:function(){return{alert:!0,permisions:[]}},components:{SideBar:(0,s.Z)(u,(function(){var t=this,i=t._self._c;return i("div",[i("div",{staticClass:"justify-start mr-3 d-flex"},[i("v-app-bar-nav-icon",{staticClass:"hidden-lg-and-up mt-16",attrs:{color:"#1E293B"},on:{click:function(i){t.drawer=!t.drawer}}})],1),t._v(" "),i("v-row",{attrs:{"no-gutters":""}},[i("v-navigation-drawer",{staticClass:"flex fill-height d-flex justify-items-center",staticStyle:{filter:"grayscale(0%)"},attrs:{fixed:"",app:"",color:"#0f0f0f",src:"/Images/cervene_pozadi-p-500.jpeg"},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[i("v-list",[i("v-list-item",{attrs:{"two-line":""}},[i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on,s=n.attrs;return[i("v-list-item-content",t._g(t._b({},"v-list-item-content",s,!1),e),[i("v-list-item-title",{staticClass:"white--text font-weight-medium"},[t._v("\n                                    "+t._s(t.user.name)+"\n                                ")]),t._v(" "),i("v-list-item-subtitle",{staticClass:"white--text"},[t._v("\n                                    "+t._s(t.user.email)+"\n                                    "),i("v-icon",{attrs:{color:"white"}},[t._v("mdi-menu-down")])],1)],1)]}}])},[t._v(" "),i("v-list",{attrs:{color:"#F8F9FA"}},[i("v-list-item",{attrs:{dense:""},on:{click:function(i){return t.userZone()}}},[i("v-list-item-icon",[i("v-img",{staticClass:"mx-auto",attrs:{"max-height":"26","max-width":"26"}},[i("v-icon",{attrs:{color:"info",small:""}},[t._v("\n                                            mdi-account\n                                        ")])],1)],1),t._v(" "),i("v-list-item-title",[t._v("\n                                    Nastavení\n                                ")])],1),t._v(" "),i("v-list-item",{attrs:{dense:""},on:{click:function(i){return t.logout()}}},[i("v-list-item-icon",[i("v-img",{staticClass:"mx-auto",attrs:{"max-height":"26","max-width":"26"}},[i("v-icon",{attrs:{color:"red",small:""}},[t._v("\n                                            mdi-logout\n                                        ")])],1)],1),t._v(" "),i("v-list-item-title",[t._v("\n                                    Odhlásit se\n                                ")])],1)],1)],1)],1)],1),t._v(" "),i("v-divider"),t._v(" "),"admin"!=t.$route.params.component?i("MainSideBarItems"):t._e(),t._v(" "),1==t.user.is_admin&&"admin"==t.$route.params.component?i("AdminSideBarItemsVue"):t._e()],1)],1)],1)}),[],!1,null,null,null).exports,VerticalMenu:a,Notification:(0,s.Z)(m,(function(){var t=this,i=t._self._c;return i("div",[0!=t.alert.length?i("div",{staticClass:"flex-row-reverse d-flex"},[i("v-col",{staticStyle:{position:"fixed","z-index":"2"},attrs:{cols:"12",sm:"12",md:"2",lg:"2"}},[i("v-snackbar",{staticStyle:{"z-index":"2"},attrs:{transition:"slide-x-reverse-transition",timeout:4e3,value:!0,absolute:"",top:"",right:"",color:t.alert.status,elevation:"24"}},[i("v-row",[i("v-icon",{staticClass:"mx-3",attrs:{small:""}},[t._v("\n                        "+t._s(t.iconFunction(t.alert.status))+"\n                    ")]),t._v(" "),i("v-spacer"),t._v(" "),i("span",{staticClass:"justify-end mx-6 body-2 font-weight-bold"},[t._v("\n                        "+t._s(t.alert.message)+"\n                    ")])],1)],1)],1)],1):t._e()])}),[],!1,null,null,null).exports},created:function(){this.index(),this.getPermisions()},methods:{index:function(){var t=this;axios.get("users/auth").then((function(i){"success"!=i.data.status?t.$router.push("/login"):t.$store.state.user=i.data.data})).catch((function(i){"401"==i.response.status&&t.$router.push("/login")}))},getPermisions:function(){var t=this;axios.get("permisions").then((function(i){t.permisions=i.data.data}))}},mounted:function(){},watch:{$route:function(t,i){}}};const d=(0,s.Z)(v,(function(){var t=this,i=t._self._c;return i("v-app",[i("div",[i("vertical-menu"),t._v(" "),i("side-bar"),t._v(" "),i("v-main",{staticClass:"dotted",attrs:{app:""}},[i("v-container",{staticClass:"mr-16 mt-8",attrs:{fluid:""}},[i("notification"),t._v(" "),i("router-view",{staticClass:"mt-3"})],1)],1)],1)])}),[],!1,null,null,null).exports},1900:(t,i,n)=>{function e(t,i,n,e,s,a,o,r){var l,c="function"==typeof t?t.options:t;if(i&&(c.render=i,c.staticRenderFns=n,c._compiled=!0),e&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,i){return l.call(i),u(t,i)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:c}}n.d(i,{Z:()=>e})}}]);