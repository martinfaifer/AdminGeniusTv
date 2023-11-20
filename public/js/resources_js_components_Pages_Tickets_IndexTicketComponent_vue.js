"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Tickets_IndexTicketComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      loadingData: true,
      search: "",
      tickets: [],
      ticketDetail: null,
      detailTicketDialog: false,
      headers: [{
        text: "Tiket",
        align: "start",
        value: "current_step.inbox"
      }, {
        text: "Zadání",
        value: "detail"
      }, {
        text: "Vytvořeno",
        value: "created_at"
      }, {
        text: "Stav",
        value: "current_step"
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
      this.tickets = [];
      this.loadingData = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("tickets").then(function (response) {
        _this.tickets = response.data.data;
        _this.loadingData = false;
      });
    },
    activesTicket: function activesTicket() {
      this.index();
    },
    archivesTickets: function archivesTickets() {
      var _this2 = this;
      this.tickets = [];
      this.loadingData = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("tickets/closed").then(function (response) {
        _this2.tickets = response.data.data;
        _this2.loadingData = false;
      });
    },
    getDetail: function getDetail(ticketData) {
      if ((ticketData === null || ticketData === void 0 ? void 0 : ticketData.detail) !== undefined) {
        return ticketData.detail.data;
      }
      if ((ticketData === null || ticketData === void 0 ? void 0 : ticketData.ticket) !== undefined) {
        return ticketData.ticket.data.detail;
      }
    },
    formatDate: function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [year, month, day].join("-");
    },
    openTicketDetail: function openTicketDetail(ticket) {
      this.ticketDetail = ticket;
      this.detailTicketDialog = true;
    },
    closeDialog: function closeDialog() {
      this.detailTicketDialog = false;
      this.ticketDetail = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=template&id=a7b600c6":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=template&id=a7b600c6 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("v-card-text", {
    staticClass: "text--center"
  }, [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "12",
      lg: "12"
    }
  }, [_c("v-tabs", {
    attrs: {
      centered: "",
      "background-color": "transparent",
      color: "info"
    }
  }, [_c("v-tab", {
    on: {
      click: function click($event) {
        return _vm.activesTicket();
      }
    }
  }, [_vm._v("Aktivní")]), _vm._v(" "), _c("v-tab", {
    on: {
      click: function click($event) {
        return _vm.archivesTickets();
      }
    }
  }, [_vm._v("Archivované")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "12",
      lg: "12"
    }
  }, [_vm.tickets.error ? _c("div", [_c("v-alert", {
    attrs: {
      type: "info"
    }
  }, [_vm._v("\n                                        Nenalezeny tikety\n                                    ")])], 1) : _c("div", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      lg: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      placeholder: "Vyhledat tiket",
      dense: "",
      autofocus: "",
      clearable: ""
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.tickets,
      search: _vm.search,
      loading: _vm.loadingData,
      "loading-text": "Načítání Vašich tiketů"
    },
    scopedSlots: _vm._u([{
      key: "item.current_step.inbox",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("span", {
          domProps: {
            innerHTML: _vm._s(item.current_step.inbox)
          }
        })];
      }
    }, {
      key: "item.detail",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("span", {
          domProps: {
            innerHTML: _vm._s(_vm.getDetail(item.variables))
          }
        })];
      }
    }, {
      key: "item.created_at",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_c("span", [_vm._v(_vm._s(_vm.formatDate(item.created_at)))])];
      }
    }, {
      key: "item.current_step",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("span", [_vm._v("\n                                                " + _vm._s(item.current_step.name) + "\n                                            ")])];
      }
    }, {
      key: "item.actions",
      fn: function fn(_ref5) {
        var item = _ref5.item;
        return [_c("v-tooltip", {
          attrs: {
            bottom: ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref6) {
              var on = _ref6.on,
                attrs = _ref6.attrs;
              return [_c("v-icon", _vm._g(_vm._b({
                attrs: {
                  small: "",
                  color: "info"
                },
                on: {
                  click: function click($event) {
                    return _vm.openTicketDetail(item);
                  }
                }
              }, "v-icon", attrs, false), on), [_vm._v("mdi-magnify")])];
            }
          }], null, true)
        }, [_vm._v(" "), _c("span", [_vm._v("Detail tiketu")])])];
      }
    }])
  })], 1)])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "800"
    },
    model: {
      value: _vm.detailTicketDialog,
      callback: function callback($$v) {
        _vm.detailTicketDialog = $$v;
      },
      expression: "detailTicketDialog"
    }
  }, [_vm.ticketDetail != null ? _c("v-card", [_c("v-card-title", {
    staticClass: "text-h5"
  }, [_c("span", {
    staticClass: "black--text",
    domProps: {
      innerHTML: _vm._s(_vm.ticketDetail.current_step.inbox)
    }
  })]), _vm._v(" "), _c("v-card-text", _vm._l(_vm.ticketDetail.discussion, function (discussion) {
    return _c("v-col", {
      key: discussion.id,
      attrs: {
        cols: "12"
      }
    }, [_c("v-card", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: discussion.message.includes("Email zákazníkovi") || discussion.message.includes("Odchozí email pro"),
        expression: "\n                                discussion.message.includes(\n                                    'Email zákazníkovi'\n                                ) ||\n                                discussion.message.includes(\n                                    'Odchozí email pro'\n                                )\n                            "
      }],
      attrs: {
        flat: ""
      }
    }, [_c("v-card-text", [_c("p", {
      domProps: {
        innerHTML: _vm._s(discussion.message)
      }
    }), _vm._v(" "), _c("v-divider")], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("span", {
      staticClass: "text-caption mx-2"
    }, [_vm._v("Řešitel:\n                                ")]), _vm._v(" "), _c("span", {
      staticClass: "text-caption font-weight-medium",
      domProps: {
        innerHTML: _vm._s(discussion.author.fullname)
      }
    })], 1)], 1)], 1);
  }), 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "blue darken-1 rounded-lg"
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_c("span", {
    staticClass: "white--text"
  }, [_vm._v(" Zavřít ")])])], 1)], 1) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Pages/Tickets/IndexTicketComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Pages/Tickets/IndexTicketComponent.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexTicketComponent_vue_vue_type_template_id_a7b600c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexTicketComponent.vue?vue&type=template&id=a7b600c6 */ "./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=template&id=a7b600c6");
/* harmony import */ var _IndexTicketComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexTicketComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexTicketComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexTicketComponent_vue_vue_type_template_id_a7b600c6__WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexTicketComponent_vue_vue_type_template_id_a7b600c6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Tickets/IndexTicketComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTicketComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexTicketComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTicketComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=template&id=a7b600c6":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=template&id=a7b600c6 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTicketComponent_vue_vue_type_template_id_a7b600c6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTicketComponent_vue_vue_type_template_id_a7b600c6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTicketComponent_vue_vue_type_template_id_a7b600c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexTicketComponent.vue?vue&type=template&id=a7b600c6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Tickets/IndexTicketComponent.vue?vue&type=template&id=a7b600c6");


/***/ })

}]);