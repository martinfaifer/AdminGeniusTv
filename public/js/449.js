"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[449],{6236:(t,a,s)=>{s.d(a,{Z:()=>n});const e={props:["value","label","type","error","placeholder"],data:function(){return{}},created:function(){},methods:{updateValue:function(t){this.$emit("input",t)}}};const n=(0,s(1900).Z)(e,(function(){var t=this,a=t._self._c;return a("div",[a("v-text-field",t._b({attrs:{dense:"",placeholder:t.placeholder,label:t.label,type:t.type,value:t.value,"error-messages":t.error,outlined:"",clearable:""},on:{input:function(a){return t.updateValue(a)}}},"v-text-field",t.$attrs,!1))],1)}),[],!1,null,null,null).exports},9449:(t,a,s)=>{s.r(a),s.d(a,{default:()=>i});var e=s(9669),n=s.n(e);const o={components:{BaseInput:s(6236).Z},data:function(){return{user:[],editNameDialog:!1,editPasswordDialog:!1,formData:[],errors:[]}},created:function(){this.index()},methods:{index:function(){var t=this;n().get("users/auth").then((function(a){t.user=a.data.data}))},openEditNameDialog:function(){this.editNameDialog=!0},openPasswordDialog:function(){this.editPasswordDialog=!0},editPassword:function(){var t=this;n().patch("users/authentificate/password",{password:this.formData.password}).then((function(a){t.$store.state.alerts=a.data,t.closeDialog(),t.index()})).catch((function(a){t.errors=a.response.data.errors}))},editName:function(){var t=this;n().patch("users/authentificate/name",{name:this.formData.name}).then((function(a){t.$store.state.alerts=a.data,t.closeDialog(),t.index()})).catch((function(a){t.errors=a.response.data.errors}))},changeNotification:function(t,a){var s=this;n().patch("users/authentificate/notification",{state:t,notificationType:a}).then((function(t){s.$store.state.alerts=t.data,s.index()})).catch((function(t){s.errors=t.response.data.errors}))},closeDialog:function(){this.editNameDialog=!1,this.editPasswordDialog=!1,this.formData=[],this.errors=[]}}};const i=(0,s(1900).Z)(o,(function(){var t=this,a=t._self._c;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-avatar",{staticClass:"mt-3",staticStyle:{"z-index":"1"},attrs:{size:"128",color:"#1E293B",fixed:""}},[null==t.user.avatar?a("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.user.name.substring(0,1)))]):t._e(),t._v(" "),null!=t.user.avatar?a("img",{attrs:{src:t.user.avatar,"lazy-src":t.user.avata,contain:"",alt:"avatar"}}):t._e()])],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-card",{staticClass:"overflow-hidden rounded-xl blur shadow-blur mt-n12",attrs:{flat:""}},[a("v-card-text",{staticClass:"text--center mt-4"},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[a("p",{staticClass:"subtitle-2"},[a("span",{staticClass:"font-weight-medium mx-3"},[t._v("Jméno:")]),t._v(t._s(t.user.name)+"\n                                    "),a("v-icon",{staticClass:"mx-3",attrs:{small:"",color:"green"},on:{click:function(a){return t.openEditNameDialog()}}},[t._v("mdi-pencil")])],1)]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[t.user.nangu_isp?a("p",{staticClass:"subtitle-2"},[a("span",{staticClass:"font-weight-medium mx-3"},[t._v("Společnost:")]),t._v(t._s(t.user.nangu_isp.name)+"\n                                ")]):t._e()]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}}),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[a("p",{staticClass:"subtitle-2"},[a("span",{staticClass:"font-weight-medium mx-3"},[t._v("Email:")]),t._v(t._s(t.user.email)+"\n                                ")])]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[a("v-btn",{attrs:{small:"",outlined:"",plain:"",color:"info"},on:{click:function(a){return t.openPasswordDialog()}}},[t._v("Změnit heslo")])],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}}),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[a("p",{staticClass:"subtitle-2"},[a("span",{staticClass:"font-weight-medium mx-3"},[t._v("Upozornění na novinky:")]),t._v(" "),1==t.user.has_newsletter_notification?a("v-icon",{attrs:{small:"",color:"green"},on:{click:function(a){return t.changeNotification(!1,"has_newsletter_notification")}}},[t._v("mdi-check")]):a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(a){return t.changeNotification(!0,"has_newsletter_notification")}}},[t._v("mdi-close")])],1)]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[a("p",{staticClass:"subtitle-2"},[a("span",{staticClass:"font-weight-medium mx-3"},[t._v("Upozornění na plánované\n                                        výpadky:")]),t._v(" "),1==t.user.has_maintenance_notification?a("v-icon",{attrs:{small:"",color:"green"},on:{click:function(a){return t.changeNotification(!1,"has_maintenance_notification")}}},[t._v("mdi-check")]):a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(a){return t.changeNotification(!0,"has_maintenance_notification")}}},[t._v("mdi-close")])],1)]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[a("p",{staticClass:"subtitle-2"},[a("span",{staticClass:"font-weight-medium mx-3"},[t._v("Upozornění na nové aplikace:")]),t._v(" "),1==t.user.has_apps_notification?a("v-icon",{attrs:{small:"",color:"green"},on:{click:function(a){return t.changeNotification(!1,"has_apps_notification")}}},[t._v("mdi-check")]):a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(a){return t.changeNotification(!0,"has_apps_notification")}}},[t._v("mdi-close")])],1)])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-row",{staticClass:"center"},[a("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.editNameDialog,callback:function(a){t.editNameDialog=a},expression:"editNameDialog"}},[a("v-card",[a("v-card-text",[a("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("BaseInput",{attrs:{label:"Jméno",type:"text",error:t.errors.name},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(a){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",plain:"",outlined:""},on:{click:function(a){return t.editName()}}},[t._v("\n                        Upravit\n                    ")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.editPasswordDialog,callback:function(a){t.editPasswordDialog=a},expression:"editPasswordDialog"}},[a("v-card",[a("v-card-text",[a("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("BaseInput",{attrs:{label:"Nové heslo",type:"text",error:t.errors.password},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(a){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",plain:"",outlined:""},on:{click:function(a){return t.editPassword()}}},[t._v("\n                        Upravit\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);