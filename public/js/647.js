"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{1647:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});const r={computed:{user:function(){return this.$store.state.user}},components:{InfoAlert:function(){return t.e(827).then(t.bind(t,4827))},IndexNews:function(){return t.e(770).then(t.bind(t,5770))},IndexApps:function(){return t.e(856).then(t.bind(t,2856))},IndexTickets:function(){return t.e(853).then(t.bind(t,5853))},Invoices:function(){return t.e(534).then(t.bind(t,7534))},Tutorials:function(){return t.e(965).then(t.bind(t,9965))},AdminNews:function(){return t.e(105).then(t.bind(t,6105))},AdminApps:function(){return t.e(799).then(t.bind(t,8799))},AdminUsers:function(){return t.e(623).then(t.bind(t,623))},AdminTutorials:function(){return t.e(241).then(t.bind(t,8241))},PageNotFound:function(){return t.e(227).then(t.bind(t,4921))},User:function(){return t.e(449).then(t.bind(t,9449))},Api:function(){return t.e(436).then(t.bind(t,436))}},data:function(){return{}}};const o=(0,t(1900).Z)(r,(function(){var n=this,e=n._self._c;return e("div",[n.$route.params.component?e("div",{},[e("v-container",{attrs:{fluid:""}},["news"==n.$route.params.component?e("IndexNews"):"apps"==n.$route.params.component?e("IndexApps"):"tikets"==n.$route.params.component?e("IndexTickets"):"invoices"==n.$route.params.component?e("Invoices"):"help"==n.$route.params.component?e("Tutorials"):1==n.user.is_admin&&"admin"==n.$route.params.component&&"news"==n.$route.params.subcomponent?e("AdminNews"):1==n.user.is_admin&&"admin"==n.$route.params.component&&"apps"==n.$route.params.subcomponent?e("AdminApps"):1==n.user.is_admin&&"admin"==n.$route.params.component&&"users"==n.$route.params.subcomponent?e("AdminUsers"):1==n.user.is_admin&&"admin"==n.$route.params.component&&"help"==n.$route.params.subcomponent?e("AdminTutorials"):"user"==n.$route.params.component?e("User"):"api"==n.$route.params.component?e("Api"):n._e()],1)],1):e("div",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("InfoAlert",{attrs:{alertText:"Vyberte z menu v levo"}})],1)],1)])}),[],!1,null,null,null).exports},1900:(n,e,t)=>{function r(n,e,t,r,o,s,i,u){var a,p="function"==typeof n?n.options:n;if(e&&(p.render=e,p.staticRenderFns=t,p._compiled=!0),r&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),i?(a=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(i)},p._ssrRegister=a):o&&(a=u?function(){o.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(p.functional){p._injectStyles=a;var c=p.render;p.render=function(n,e){return a.call(e),c(n,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,a):[a]}return{exports:n,options:p}}t.d(e,{Z:()=>r})}}]);