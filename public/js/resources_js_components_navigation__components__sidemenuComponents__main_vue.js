"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_navigation__components__sidemenuComponents__main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  components: {},
  data: function data() {
    return {
      systemVersion: null
    };
  },
  created: function created() {},
  methods: {
    logOut: function logOut() {
      var _this = this;
      axios.get("logOut").then(function (response) {
        if (response.data.status == "success") {
          _this.$router.push("/login");
        }
      });
    }
  },
  watch: {
    $route: function $route(to, from) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=template&id=0c2b034a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=template&id=0c2b034a ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-list", {
    attrs: {
      dense: ""
    }
  }, [_c("v-list-item", {
    staticClass: "px-2"
  }, [_c("v-menu", {
    attrs: {
      transition: "scroll-y-transition"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on;
        return [_c("v-list-item-avatar", [_c("v-avatar", _vm._g({
          staticStyle: {
            cursor: "pointer"
          },
          attrs: {
            size: "32",
            color: "#1E293B",
            fixed: ""
          }
        }, on), [_c("span", {
          staticClass: "white--text text-h5"
        }, [_vm._v(_vm._s(_vm.user.inicials))])])], 1)];
      }
    }])
  }, [_vm._v(" "), _c("v-list", {
    staticClass: "text-center caption",
    attrs: {
      width: "200px"
    }
  }, [_c("v-list-item", {
    attrs: {
      link: "",
      to: "/user/prehled"
    }
  }, [_vm._v("\n                        Uživatelský účet\n                        "), _c("v-spacer"), _c("v-icon", {
    attrs: {
      color: "blue",
      right: "",
      "x-small": ""
    }
  }, [_vm._v("mdi-account-cog-outline")])], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "ml-2 mr-2"
  }), _vm._v(" "), _c("v-list-item", {
    on: {
      click: function click($event) {
        return _vm.logOut();
      }
    }
  }, [_vm._v("\n                        Odhlásit se\n                        "), _c("v-spacer"), _c("v-icon", {
    attrs: {
      color: "red",
      right: "",
      "x-small": ""
    }
  }, [_vm._v("mdi-lock")])], 1)], 1)], 1), _vm._v(" "), _c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.mini = !_vm.mini;
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-chevron-left")])], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list", {
    attrs: {
      dense: "",
      nav: ""
    }
  }, [_c("v-list-item", {
    attrs: {
      link: "",
      to: "/customers"
    }
  }, [_c("v-tooltip", {
    attrs: {
      bottom: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref2) {
        var on = _ref2.on;
        return [_c("v-icon", _vm._g({
          "class": {
            "white--text": _vm.$route.path.match("/customers.*"),
            "grey--text": !_vm.$route.path.match("/customers.*")
          }
        }, on), [_vm._v("mdi-account-multiple")])];
      }
    }])
  }, [_vm._v(" "), _c("span", [_vm._v("Přehled kanálů")])])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_vue_vue_type_template_id_0c2b034a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_main.vue?vue&type=template&id=0c2b034a */ "./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=template&id=0c2b034a");
/* harmony import */ var _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_main.vue?vue&type=script&lang=js */ "./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_0c2b034a__WEBPACK_IMPORTED_MODULE_0__.render,
  _main_vue_vue_type_template_id_0c2b034a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/_components/_sidemenuComponents/_main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_main.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=template&id=0c2b034a":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=template&id=0c2b034a ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_0c2b034a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_0c2b034a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_0c2b034a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_main.vue?vue&type=template&id=0c2b034a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidemenuComponents/_main.vue?vue&type=template&id=0c2b034a");


/***/ })

}]);