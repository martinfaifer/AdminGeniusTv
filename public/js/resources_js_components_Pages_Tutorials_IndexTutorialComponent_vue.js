"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Tutorials_IndexTutorialComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      search: "",
      tutorials: []
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("tutorials").then(function (response) {
        _this.tutorials = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=template&id=1a59d95d":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=template&id=1a59d95d ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-row", _vm._l(_vm.tutorials, function (tutorial) {
    return _c("v-col", {
      key: tutorial.id,
      attrs: {
        cols: "12",
        sm: "12",
        md: "6",
        lg: "6"
      }
    }, [_c("v-card", {
      staticClass: "overflow-hidden rounded-xl blur shadow-blur",
      attrs: {
        flat: ""
      }
    }, [_c("v-card-subtitle", {
      staticClass: "text-center font-weight-medium title"
    }, [_c("a", {
      attrs: {
        href: tutorial.video_url,
        target: "_blank"
      }
    }, [_vm._v(_vm._s(tutorial.title))])]), _vm._v(" "), _c("v-card-text", {
      staticClass: "text--center"
    }, [_c("v-container", {
      attrs: {
        fluid: ""
      }
    }, [_c("v-row", [_c("div", {
      staticClass: "mx-auto"
    }, [_c("iframe", {
      attrs: {
        width: "680",
        height: "435",
        src: tutorial.video_url,
        title: tutorial.title,
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: ""
      }
    })]), _vm._v(" "), tutorial.description != null ? _c("v-col", {
      attrs: {
        cols: "12"
      }
    }, [_c("small", {
      staticClass: "blue--text font-italic"
    }, [_vm._v(_vm._s(tutorial.description))])]) : _vm._e()], 1)], 1)], 1)], 1)], 1);
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexTutorialComponent_vue_vue_type_template_id_1a59d95d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexTutorialComponent.vue?vue&type=template&id=1a59d95d */ "./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=template&id=1a59d95d");
/* harmony import */ var _IndexTutorialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexTutorialComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexTutorialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexTutorialComponent_vue_vue_type_template_id_1a59d95d__WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexTutorialComponent_vue_vue_type_template_id_1a59d95d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTutorialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexTutorialComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTutorialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=template&id=1a59d95d":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=template&id=1a59d95d ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTutorialComponent_vue_vue_type_template_id_1a59d95d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTutorialComponent_vue_vue_type_template_id_1a59d95d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTutorialComponent_vue_vue_type_template_id_1a59d95d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexTutorialComponent.vue?vue&type=template&id=1a59d95d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tutorials/IndexTutorialComponent.vue?vue&type=template&id=1a59d95d");


/***/ })

}]);