"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_News_IndexNewsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shareListComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shareListComponent.vue */ "./resources/js/components/Pages/News/_shareListComponent.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ShareList: _shareListComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      news: [],
      maintenances: [],
      appNews: [],
      benched: 0
    };
  },
  created: function created() {
    this.getNews();
    this.getMaintenances();
    this.getAppNews();
  },
  methods: {
    getNews: function getNews() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("news/channels-info").then(function (response) {
        _this.news = response.data.data;
      });
    },
    getMaintenances: function getMaintenances() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("news/maintenances").then(function (response) {
        _this2.maintenances = response.data.data;
      });
    },
    getAppNews: function getAppNews() {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("news/apps").then(function (response) {
        _this3.appNews = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var InfoAlert = function InfoAlert() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Notifications__infoAlert_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../Notifications/_infoAlert.vue */ "./resources/js/components/Notifications/_infoAlert.vue"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["cardTitle", "news"],
  components: {
    InfoAlert: InfoAlert
  },
  data: function data() {
    return {
      benched: 0,
      newsDetailDialog: false,
      detail: []
    };
  },
  created: function created() {},
  methods: {
    openNewsDetail: function openNewsDetail(item) {
      this.newsDetailDialog = true;
      this.detail = item;
    },
    closeDialog: function closeDialog() {
      this.newsDetailDialog = false;
      this.detail = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "4",
      lg: "4"
    }
  }, [_c("ShareList", {
    attrs: {
      "card-title": "Novinky",
      news: _vm.news
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "4",
      lg: "4"
    }
  }, [_c("ShareList", {
    attrs: {
      "card-title": "Plánované výpadky",
      news: _vm.maintenances
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "4",
      lg: "4"
    }
  }, [_c("ShareList", {
    attrs: {
      "card-title": "Nově nahrané aplikace",
      news: _vm.appNews
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=template&id=b2e2200e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=template&id=b2e2200e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-card", {
    staticClass: "overflow-hidden rounded-xl blur shadow-blur",
    attrs: {
      flat: "",
      height: "80vh"
    }
  }, [_c("v-card-subtitle", [_c("v-row", {
    staticClass: "justify-center"
  }, [_c("p", {
    staticClass: "mt-3 text-center caption font-weight-bold"
  }, [_vm._v("\n                    " + _vm._s(_vm.cardTitle) + "\n                ")])])], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "text--center"
  }, [_vm.news.length > 0 ? _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-virtual-scroll", {
    attrs: {
      bench: _vm.benched,
      items: _vm.news,
      height: "900px",
      "max-height": "800px",
      "item-height": "78"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("v-list-item", {
          key: item.id,
          on: {
            click: function click($event) {
              return _vm.openNewsDetail(item);
            }
          }
        }, [_c("v-list-item-content", [_c("v-list-item-title", {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n                                    " + _vm._s(item.title) + "\n                                ")]), _vm._v(" "), _c("v-list-item-subtitle", [_vm._v(_vm._s(item.text))]), _vm._v(" "), _c("v-list-item-subtitle", {
          staticClass: "font-italic text-end mt-1"
        }, [_vm._v("\n                                    " + _vm._s(item.created_at) + "\n                                ")])], 1)], 1), _vm._v(" "), _c("v-divider")];
      }
    }], null, false, 3018248133)
  })], 1) : _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("InfoAlert", {
    attrs: {
      alertText: "Zatím nejsou žádná data."
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-dialog", {
    attrs: {
      scrollable: "",
      "max-width": "900px"
    },
    model: {
      value: _vm.newsDetailDialog,
      callback: function callback($$v) {
        _vm.newsDetailDialog = $$v;
      },
      expression: "newsDetailDialog"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "black--text"
  }, [_vm._v(_vm._s(_vm.detail.title))]), _vm._v(" "), _c("v-card-text", {
    staticStyle: {
      height: "300px"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.detail.text) + "\n                ")]), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "blue darken-1 white--text rounded-lg"
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v("\n                        Zavřít\n                    ")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Pages/News/IndexNewsComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Pages/News/IndexNewsComponent.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexNewsComponent_vue_vue_type_template_id_5fb3cc4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e */ "./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e");
/* harmony import */ var _IndexNewsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexNewsComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexNewsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexNewsComponent_vue_vue_type_template_id_5fb3cc4e__WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexNewsComponent_vue_vue_type_template_id_5fb3cc4e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/News/IndexNewsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/News/_shareListComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Pages/News/_shareListComponent.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shareListComponent_vue_vue_type_template_id_b2e2200e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shareListComponent.vue?vue&type=template&id=b2e2200e */ "./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=template&id=b2e2200e");
/* harmony import */ var _shareListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shareListComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shareListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _shareListComponent_vue_vue_type_template_id_b2e2200e__WEBPACK_IMPORTED_MODULE_0__.render,
  _shareListComponent_vue_vue_type_template_id_b2e2200e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/News/_shareListComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNewsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNewsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNewsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shareListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_shareListComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shareListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNewsComponent_vue_vue_type_template_id_5fb3cc4e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNewsComponent_vue_vue_type_template_id_5fb3cc4e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNewsComponent_vue_vue_type_template_id_5fb3cc4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/IndexNewsComponent.vue?vue&type=template&id=5fb3cc4e");


/***/ }),

/***/ "./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=template&id=b2e2200e":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=template&id=b2e2200e ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shareListComponent_vue_vue_type_template_id_b2e2200e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shareListComponent_vue_vue_type_template_id_b2e2200e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shareListComponent_vue_vue_type_template_id_b2e2200e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_shareListComponent.vue?vue&type=template&id=b2e2200e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/News/_shareListComponent.vue?vue&type=template&id=b2e2200e");


/***/ })

}]);