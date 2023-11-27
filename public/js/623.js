"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[623],{6236:(t,e,a)=>{a.d(e,{Z:()=>s});const r={props:["value","label","type","error","placeholder"],data:function(){return{}},created:function(){},methods:{updateValue:function(t){this.$emit("input",t)}}};const s=(0,a(1900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",[e("v-text-field",t._b({attrs:{dense:"",placeholder:t.placeholder,label:t.label,type:t.type,value:t.value,"error-messages":t.error,outlined:"",clearable:""},on:{input:function(e){return t.updateValue(e)}}},"v-text-field",t.$attrs,!1))],1)}),[],!1,null,null,null).exports},623:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var r=a(9669),s=a.n(r);const i={components:{BaseInput:a(6236).Z},data:function(){return{editDialog:!1,deleteDialog:!1,createDialog:!1,resetPasswordDialog:!1,formData:[],users:[],isps:[],errors:[],search:"",headers:[{text:"jméno",value:"name"},{text:"Email",value:"email"},{text:"Nangu ISP",value:"nangu_isp.name"},{text:"CRM ID",value:"crm_id"},{text:"Admin",value:"is_admin"},{text:"",value:"actions"}]}},created:function(){this.index(),this.getIsps()},methods:{index:function(){var t=this;s().get("users").then((function(e){t.users=e.data.data}))},getIsps:function(){var t=this;s().get("nangu/isps").then((function(e){t.isps=e.data.data}))},openResetPasswordDialog:function(t){this.formData.userId=t,this.resetPasswordDialog=!0},changePassword:function(){var t=this;s().patch("users/"+this.formData.userId+"/password").then((function(e){t.$store.state.alerts=e.data,t.closeDialog(),t.index()}))},openCreateDialog:function(){this.createDialog=!0},createItem:function(){var t=this;s().post("users",{name:this.formData.name,email:this.formData.email,nangu_isp_id:this.formData.nangu_isp_id,crm_id:this.formData.crm_id,is_admin:this.formData.is_admin}).then((function(e){t.$store.state.alerts=e.data,t.closeDialog(),t.index()})).catch((function(e){t.errors=e.response.data.errors}))},openEditDialog:function(t){this.formData=t,this.editDialog=!0},openDeleteDialog:function(t){this.formData.userId=t,this.deleteDialog=!0},deleteItem:function(){var t=this;s().delete("users/"+this.formData.userId).then((function(e){t.$store.state.alerts=e.data,t.closeDialog(),t.index()}))},editItem:function(){var t=this;s().patch("users/"+this.formData.id,{nangu_isp_id:this.formData.nangu_isp_id,crm_id:this.formData.crm_id,is_admin:this.formData.is_admin}).then((function(e){t.$store.state.alerts=e.data,t.closeDialog(),t.index()})).catch((function(e){t.errors=e.response.data.errors}))},closeDialog:function(){this.editDialog=!1,this.deleteDialog=!1,this.createDialog=!1,this.resetPasswordDialog=!1,this.formData=[]}}};const n=(0,a(1900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[e("v-card",{staticClass:"overflow-hidden rounded-xl blur shadow-blur",attrs:{flat:""}},[e("v-card-title",[e("v-text-field",{attrs:{"preppend-inner-icon":"mdi-magnify",label:"Vyhledat ...","single-line":"","hide-details":"",autofocus:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"mr-3",attrs:{icon:"",color:"green",small:""},on:{click:function(e){return t.openCreateDialog()}}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1)],1),t._v(" "),e("v-card-text",[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{attrs:{headers:t.headers,items:t.users,search:t.search},scopedSlots:t._u([{key:"item.is_admin",fn:function(a){return[1==a.item.is_admin?e("v-icon",{attrs:{color:"green",small:""}},[t._v("mdi-check")]):e("v-icon",{attrs:{color:"red",small:""}},[t._v("mdi-close")])]}},{key:"item.actions",fn:function(a){var r=a.item;return[e("v-row",[e("v-icon",{attrs:{small:"",color:"green"},on:{click:function(e){return t.openEditDialog(r)}}},[t._v("mdi-pencil")]),t._v(" "),e("v-icon",{attrs:{small:"",color:"info"},on:{click:function(e){return t.openResetPasswordDialog(r.id)}}},[t._v("mdi-lock-reset")]),t._v(" "),e("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.openDeleteDialog(r.id)}}},[t._v("mdi-delete")])],1)]}}])})],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("v-row",{staticClass:"center"},[e("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-3"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("p",{staticClass:"mt-6 text-center headline"},[t._v("\n                                    Přejete si odebrat uživatele?\n                                ")])])],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",plain:"",outlined:""},on:{click:function(e){return t.deleteItem()}}},[t._v("\n                        Odebrat\n                    ")])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.resetPasswordDialog,callback:function(e){t.resetPasswordDialog=e},expression:"resetPasswordDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-3"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("p",{staticClass:"mt-6 text-center headline"},[t._v("\n                                    Přejete si změnit heslo a zaslat jej\n                                    uživately do emailu?\n                                ")])])],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",plain:"",outlined:""},on:{click:function(e){return t.changePassword()}}},[t._v("\n                        Změnit\n                    ")])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("v-autocomplete",{attrs:{label:"ISP",items:t.isps,outlined:"",dense:"","item-value":"id","item-text":"name",error:t.errors.nangu_isp_id},model:{value:t.formData.nangu_isp_id,callback:function(e){t.$set(t.formData,"nangu_isp_id",e)},expression:"formData.nangu_isp_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("BaseInput",{attrs:{label:"CRM ID ",type:"text",error:t.errors.crm_id},model:{value:t.formData.crm_id,callback:function(e){t.$set(t.formData,"crm_id",e)},expression:"formData.crm_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("v-checkbox",{attrs:{label:"Admin",error:t.errors.is_admin},model:{value:t.formData.is_admin,callback:function(e){t.$set(t.formData,"is_admin",e)},expression:"formData.is_admin"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",plain:"",outlined:""},on:{click:function(e){return t.editItem()}}},[t._v("\n                        Upravit\n                    ")])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.createDialog,callback:function(e){t.createDialog=e},expression:"createDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("BaseInput",{attrs:{label:"Jméno",type:"text",error:t.errors.name},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("BaseInput",{attrs:{label:"Email",type:"text",error:t.errors.email},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("v-autocomplete",{attrs:{label:"ISP",items:t.isps,outlined:"",dense:"","item-value":"id","item-text":"name",error:t.errors.nangu_isp_id},model:{value:t.formData.nangu_isp_id,callback:function(e){t.$set(t.formData,"nangu_isp_id",e)},expression:"formData.nangu_isp_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("BaseInput",{attrs:{label:"CRM ID ",type:"text",error:t.errors.crm_id},model:{value:t.formData.crm_id,callback:function(e){t.$set(t.formData,"crm_id",e)},expression:"formData.crm_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("v-checkbox",{attrs:{label:"Admin",error:t.errors.is_admin},model:{value:t.formData.is_admin,callback:function(e){t.$set(t.formData,"is_admin",e)},expression:"formData.is_admin"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",plain:"",outlined:""},on:{click:function(e){return t.createItem()}}},[t._v("\n                        Vytvořit\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);