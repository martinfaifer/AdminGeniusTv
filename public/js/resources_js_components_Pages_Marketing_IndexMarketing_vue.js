"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Marketing_IndexMarketing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      marketingMaterials: [],
      benched: 0,
      headers: [{
        text: "Název",
        value: "title"
      }, {
        text: "Popis",
        value: "text"
      }, {
        text: "",
        value: "actions"
      }]
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("marketing").then(function (response) {
        _this.marketingMaterials = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=template&id=74d2edd3":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=template&id=74d2edd3 ***!
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
  return _c("div", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "12",
      lg: "12"
    }
  }, [_c("v-card", {
    staticClass: "overflow-hidden rounded-xl blur shadow-blur",
    attrs: {
      flat: ""
    }
  }, [_c("v-card-subtitle", [_c("v-row", {
    staticClass: "justify-center"
  }, [_c("p", {
    staticClass: "mt-3 text-center caption font-weight-bold"
  }, [_vm._v("\n                            Propagační materiály\n                        ")])])], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "text--center"
  }, [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.marketingMaterials
    },
    scopedSlots: _vm._u([{
      key: "item.actions",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("v-row", [_c("a", {
          staticStyle: {
            "text-decoration": "none"
          },
          attrs: {
            target: "_blank",
            href: item.path
          }
        }, [_c("v-icon", {
          attrs: {
            color: "green"
          }
        }, [_vm._v("mdi-download")])], 1)])];
      }
    }])
  })], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Pages/Marketing/IndexMarketing.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Pages/Marketing/IndexMarketing.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexMarketing_vue_vue_type_template_id_74d2edd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexMarketing.vue?vue&type=template&id=74d2edd3 */ "./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=template&id=74d2edd3");
/* harmony import */ var _IndexMarketing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexMarketing.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexMarketing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexMarketing_vue_vue_type_template_id_74d2edd3__WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexMarketing_vue_vue_type_template_id_74d2edd3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Marketing/IndexMarketing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMarketing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMarketing.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMarketing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=template&id=74d2edd3":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=template&id=74d2edd3 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMarketing_vue_vue_type_template_id_74d2edd3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMarketing_vue_vue_type_template_id_74d2edd3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMarketing_vue_vue_type_template_id_74d2edd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMarketing.vue?vue&type=template&id=74d2edd3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Marketing/IndexMarketing.vue?vue&type=template&id=74d2edd3");


/***/ })

}]);