"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[856],{2856:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var n=a(9669),s=a.n(n);const r={components:{},data:function(){return{apps:[],headers:[{text:"Název",value:"name"},{text:"Popis",value:"description"},{text:"",value:"actions"}]}},created:function(){this.index()},methods:{index:function(){var t=this;s().get("apps").then((function(e){t.apps=e.data.data}))}}};const o=(0,a(1900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",[t.apps?e("v-row",t._l(t.apps.apps,(function(a,n){return e("v-col",{key:n,attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[e("v-card",{staticClass:"overflow-hidden rounded-xl blur shadow-blur",attrs:{flat:""}},[e("v-card-subtitle",[e("v-row",{staticClass:"justify-center"},[e("p",{staticClass:"mt-3 text-center caption font-weight-bold"},[t._v("\n                            "+t._s(n)+"\n                        ")])])],1),t._v(" "),e("v-card-text",{staticClass:"text--center"},[e("v-container",{attrs:{fluid:""}},[e("v-data-table",{attrs:{headers:t.headers,items:a},scopedSlots:t._u([{key:"item.actions",fn:function(a){var n=a.item;return[e("v-row",[e("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:n.path}},[e("v-icon",{attrs:{color:"green"}},[t._v("mdi-download")])],1)])]}}],null,!0)})],1)],1)],1)],1)})),1):t._e()],1)}),[],!1,null,null,null).exports}}]);