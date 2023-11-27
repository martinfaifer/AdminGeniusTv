"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[799],{6236:(t,e,a)=>{a.d(e,{Z:()=>r});const o={props:["value","label","type","error","placeholder"],data:function(){return{}},created:function(){},methods:{updateValue:function(t){this.$emit("input",t)}}};const r=(0,a(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",[e("v-text-field",t._b({attrs:{dense:"",placeholder:t.placeholder,label:t.label,type:t.type,value:t.value,"error-messages":t.error,outlined:"",clearable:""},on:{input:function(e){return t.updateValue(e)}}},"v-text-field",t.$attrs,!1))],1)}),[],!1,null,null,null).exports},8799:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var o=a(9669),r=a.n(o);const i={components:{BaseInput:a(6236).Z},data:function(){return{editAppDialog:!1,fileUploadLoader:!1,createCategoryDialog:!1,editCategoryDialog:!1,deleteCategoryDialog:!1,deleteAppDialog:!1,uploadDialog:!1,categories:[],formData:[],errors:[],apps:[],file:[],search:"",headersAppCategories:[{text:"Kategorie",value:"category"},{text:"",value:"actions"}],headersApps:[{text:"Název",value:"name"},{text:"Popis",value:"description"},{text:"Kategorie",value:"category.category"},{text:"",value:"actions"}]}},created:function(){this.getAppsCategories(),this.getApps()},methods:{getAppsCategories:function(){var t=this;r().get("apps/categories").then((function(e){t.categories=e.data.data}))},selectFile:function(t){this.file=t},getApps:function(){var t=this;r().get("apps?unsorted=true").then((function(e){t.apps=e.data.data.apps}))},openUploadAppDialog:function(){this.fileUploadLoader=!1,this.uploadDialog=!0},uploadFile:function(){var t=this;this.fileUploadLoader=!0;var e=new FormData;e.append("file",this.file,this.file.name),e.append("category",this.formData.category.id),this.formData.description&&e.append("description",this.formData.description),r().post("apps",e).then((function(e){t.$store.state.alerts=e.data,t.closeDialog()})).catch((function(e){t.fileUploadLoader=!1,t.errors=e.response.data.errors}))},openEditAppDialog:function(t){this.formData=t,this.editAppDialog=!0},editApp:function(){var t=this;r().patch("apps/"+this.formData.id,{description:this.formData.description}).then((function(e){t.$store.state.alerts=e.data,t.closeDialog()})).catch((function(e){t.errors=e.response.data.errors}))},openDeleteAppDialog:function(t){this.formData.id=t,this.deleteAppDialog=!0},deleteApp:function(){var t=this;r().delete("apps/"+this.formData.id).then((function(e){t.$store.state.alerts=e.data,t.closeDialog()}))},openCreateCategoryDialog:function(){this.createCategoryDialog=!0},createCategory:function(){var t=this;r().post("apps/categories",{category:this.formData.category}).then((function(e){t.$store.state.alerts=e.data,t.closeDialog()})).catch((function(e){t.errors=e.response.data.errors}))},openEditCategoryDialog:function(t){this.editCategoryDialog=!0,this.formData=t},editCategory:function(){var t=this;r().patch("apps/categories/"+this.formData.id,{category:this.formData.category}).then((function(e){t.$store.state.alerts=e.data,t.closeDialog()})).catch((function(e){t.errors=e.response.data.errors}))},openDeleteCategoryDialog:function(t){this.deleteCategoryDialog=!0,this.formData.categoryId=t},deleteCategory:function(){var t=this;r().delete("apps/categories/"+this.formData.categoryId).then((function(e){t.$store.state.alerts=e.data,t.closeDialog()}))},closeDialog:function(){this.getAppsCategories(),this.getApps(),this.editCategoryDialog=!1,this.deleteCategoryDialog=!1,this.createCategoryDialog=!1,this.uploadDialog=!1,this.fileUploadLoader=!0,this.editAppDialog=!1,this.deleteAppDialog=!1,this.formData=[],this.errors=[],this.file=[]}}};const n=(0,a(1900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[e("v-card",{staticClass:"overflow-hidden rounded-xl blur shadow-blur",attrs:{flat:""}},[e("v-card-subtitle",{staticClass:"text-center font-weight-medium"},[t._v("\n                    Kategorie\n                    "),e("v-btn",{staticClass:"mr-3",staticStyle:{position:"fixed",right:"0px"},attrs:{icon:"",color:"green",small:""},on:{click:function(e){return t.openCreateCategoryDialog()}}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1)],1),t._v(" "),e("v-card-text",[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{attrs:{headers:t.headersAppCategories,items:t.categories},scopedSlots:t._u([{key:"item.actions",fn:function(a){var o=a.item;return[e("v-row",[e("v-icon",{attrs:{small:"",color:"green"},on:{click:function(e){return t.openEditCategoryDialog(o)}}},[t._v("mdi-pencil")]),t._v(" "),e("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.openDeleteCategoryDialog(o.id)}}},[t._v("mdi-delete")])],1)]}}])})],1)],1)],1)],1)],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[e("v-card",{staticClass:"overflow-hidden rounded-xl blur shadow-blur",attrs:{flat:""}},[e("v-card-subtitle",{staticClass:"text-center font-weight-medium"},[t._v("\n                    Nahrané aplikace\n                    "),e("v-btn",{staticClass:"mr-3",staticStyle:{position:"fixed",right:"0px"},attrs:{icon:"",color:"green",small:""},on:{click:function(e){return t.openUploadAppDialog()}}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1)],1),t._v(" "),e("v-card-text",[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{"preppend-inner-icon":"mdi-magnify",label:"Vyhledat ...","single-line":"","hide-details":"",autofocus:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e("v-spacer")],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{attrs:{headers:t.headersApps,items:t.apps,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function(a){var o=a.item;return[e("v-row",[e("v-icon",{attrs:{small:"",color:"green"},on:{click:function(e){return t.openEditAppDialog(o)}}},[t._v("mdi-pencil")]),t._v(" "),e("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.openDeleteAppDialog(o.id)}}},[t._v("mdi-delete")])],1)]}}])})],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("v-row",{staticClass:"center"},[e("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.deleteCategoryDialog,callback:function(e){t.deleteCategoryDialog=e},expression:"deleteCategoryDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-3"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("p",{staticClass:"mt-6 text-center headline"},[t._v("\n                                    Přejete si odebrat kategorii?\n                                ")])])],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",plain:"",outlined:""},on:{click:function(e){return t.deleteCategory()}}},[t._v("\n                        Odebrat\n                    ")])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.editCategoryDialog,callback:function(e){t.editCategoryDialog=e},expression:"editCategoryDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("BaseInput",{attrs:{label:"Kategorie",type:"text",error:t.errors.category},model:{value:t.formData.category,callback:function(e){t.$set(t.formData,"category",e)},expression:"formData.category"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",plain:"",outlined:""},on:{click:function(e){return t.editCategory()}}},[t._v("\n                        Upravit\n                    ")])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.createCategoryDialog,callback:function(e){t.createCategoryDialog=e},expression:"createCategoryDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("BaseInput",{attrs:{label:"Kategorie",type:"text",error:t.errors.category},model:{value:t.formData.category,callback:function(e){t.$set(t.formData,"category",e)},expression:"formData.category"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",plain:"",outlined:""},on:{click:function(e){return t.createCategory()}}},[t._v("\n                        Vytvořit\n                    ")])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.uploadDialog,callback:function(e){t.uploadDialog=e},expression:"uploadDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("v-file-input",{attrs:{outlined:"",dense:"",label:"Nahrajte soubor",error:t.errors.file,"show-size":"",clearable:""},on:{change:t.selectFile}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-combobox",{attrs:{"prepend-inner-icon":"mdi-file-tree",items:t.categories,"item-text":"category","item-value":"id",outlined:"",dense:"",label:"Vyberte kategorii",error:t.errors.category},model:{value:t.formData.category,callback:function(e){t.$set(t.formData,"category",e)},expression:"formData.category"}})],1),t._v(" "),e("v-col",[e("v-textarea",{attrs:{"prepend-inner-icon":"mdi-comment-text",outlined:"",label:"Popis aplikace",error:t.errors.description,counter:"250"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{plain:"",outlined:"",color:"blue darken-1"},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",{staticClass:"mr-3"},[t._v(" mdi-close ")]),t._v("\n                        Zavřít\n                    ")],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{loading:t.fileUploadLoader,disabled:!t.formData.category||0==t.file.length,plain:"",outlined:"",color:"green darken-1"},on:{click:function(e){return t.uploadFile()}}},[e("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus")]),t._v("\n                        Nahrát\n                    ")],1)],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.editAppDialog,callback:function(e){t.editAppDialog=e},expression:"editAppDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-12",attrs:{fluid:""}},[e("v-row",[e("v-col",[e("v-textarea",{attrs:{"prepend-inner-icon":"mdi-comment-text",outlined:"",label:"Popis aplikace",error:t.errors.description,counter:"250"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{plain:"",outlined:"",color:"blue darken-1"},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",{staticClass:"mr-3"},[t._v(" mdi-close ")]),t._v("\n                        Zavřít\n                    ")],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{plain:"",outlined:"",color:"green darken-1"},on:{click:function(e){return t.editApp()}}},[t._v("\n                        Upravit\n                    ")])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.deleteAppDialog,callback:function(e){t.deleteAppDialog=e},expression:"deleteAppDialog"}},[e("v-card",[e("v-card-text",[e("v-container",{staticClass:"pt-3"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e("p",{staticClass:"mt-6 text-center headline"},[t._v("\n                                    Přejete si odebrat soubor?\n                                ")])])],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-1",plain:"",outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n                        Zavřít\n                    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",plain:"",outlined:""},on:{click:function(e){return t.deleteApp()}}},[t._v("\n                        Odebrat\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);