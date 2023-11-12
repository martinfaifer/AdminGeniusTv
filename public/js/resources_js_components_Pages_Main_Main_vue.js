"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Main_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/_infoAlert.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/_infoAlert.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["alertText"],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    //
  },
  data: function data() {
    return {
      apps: [],
      headers: [{
        text: "Název",
        value: "name"
      }, {
        text: "Popis",
        value: "description"
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
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("apps").then(function (response) {
        _this.apps = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Main/Main.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Main/Main.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notifications_infoAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Notifications/_infoAlert */ "./resources/js/components/Notifications/_infoAlert.vue");
/* harmony import */ var _News_IndexNewsComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../News/IndexNewsComponent.vue */ "./resources/js/components/Pages/News/IndexNewsComponent.vue");
/* harmony import */ var _Apps_IndexAppsComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Apps/IndexAppsComponent.vue */ "./resources/js/components/Pages/Apps/IndexAppsComponent.vue");
/* harmony import */ var _Tickets_IndexTicketComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tickets/IndexTicketComponent.vue */ "./resources/js/components/Pages/Tickets/IndexTicketComponent.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    InfoAlert: _Notifications_infoAlert__WEBPACK_IMPORTED_MODULE_0__["default"],
    IndexNews: _News_IndexNewsComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IndexApps: _Apps_IndexAppsComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IndexTickets: _Tickets_IndexTicketComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

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
      benched: 0
    };
  },
  created: function created() {
    this.getNews();
    this.getMaintenances();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["cardTitle", "news"],
  components: {},
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
        value: "current_step"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/_infoAlert.vue?vue&type=template&id=7cf4fbc1":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/_infoAlert.vue?vue&type=template&id=7cf4fbc1 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-alert", {
    staticClass: "rounded-lg overflow-hidden blur shadow-blur-info",
    staticStyle: {
      background: "linear-gradient(to right, #0dc2f3, #2756ff)"
    },
    attrs: {
      type: "info"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.alertText) + "\n")]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=template&id=113ec490":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=template&id=113ec490 ***!
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
  return _c("div", [_vm.apps ? _c("v-row", _vm._l(_vm.apps.apps, function (items, index) {
    return _c("v-col", {
      key: index,
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
    }, [_c("v-card-subtitle", [_c("v-row", {
      staticClass: "justify-center"
    }, [_c("p", {
      staticClass: "mt-3 text-center caption font-weight-bold"
    }, [_vm._v("\n                            " + _vm._s(index) + "\n                        ")])])], 1), _vm._v(" "), _c("v-card-text", {
      staticClass: "text--center"
    }, [_c("v-container", {
      attrs: {
        fluid: ""
      }
    }, [_c("v-data-table", {
      attrs: {
        headers: _vm.headers,
        items: items
      }
    })], 1)], 1)], 1)], 1);
  }), 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Main/Main.vue?vue&type=template&id=5a71ea29":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Main/Main.vue?vue&type=template&id=5a71ea29 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.$route.params.component ? _c("div", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_vm.$route.params.component == "news" ? _c("IndexNews") : _vm._e(), _vm._v(" "), _vm.$route.params.component == "apps" ? _c("IndexApps") : _vm._e(), _vm._v(" "), _vm.$route.params.component == "tikets" ? _c("IndexTickets") : _vm._e()], 1)], 1) : _c("div", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "12",
      lg: "12"
    }
  }, [_c("InfoAlert", {
    attrs: {
      alertText: "Vyberte z menu v levo"
    }
  })], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


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
  }, [_c("v-card", {
    staticClass: "overflow-hidden rounded-xl blur shadow-blur",
    attrs: {
      flat: "",
      height: "80vh"
    }
  }, [_c("v-card-subtitle", [_c("v-row", {
    staticClass: "justify-center"
  }, [_c("p", {
    staticClass: "mt-3 text-center caption font-weight-bold"
  }, [_vm._v("\n                            Nově nahrané aplikace\n                        ")])])], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "text--center"
  }, [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row")], 1)], 1)], 1)], 1)], 1)], 1);
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
  }, [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-virtual-scroll", {
    attrs: {
      bench: _vm.benched,
      items: _vm.news,
      height: "900px",
      "max-height": "800px",
      "item-height": "64"
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
        }, [_vm._v("\n                                    " + _vm._s(item.title) + "\n                                ")]), _vm._v(" "), _c("v-list-item-subtitle", [_vm._v(_vm._s(item.text))])], 1)], 1), _vm._v(" "), _c("v-divider")];
      }
    }])
  })], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
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
      centered: ""
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
  }, [_vm._v("\n                                        Nenalezeny tikety\n                                    ")])], 1) : _c("div", [_c("v-text-field", {
    attrs: {
      placeholder: "Vyhledat",
      dense: "",
      autofocus: "",
      outlined: ""
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.tickets,
      search: _vm.search,
      loading: _vm.loadingData,
      "loading-text": "Načítání Vašich tiketů"
    },
    scopedSlots: _vm._u([{
      key: "item.current_step",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("span", [_vm._v("\n                                                " + _vm._s(item.current_step.name) + "\n                                            ")])];
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
      key: "item.actions",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("v-tooltip", {
          attrs: {
            bottom: ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref5) {
              var on = _ref5.on,
                attrs = _ref5.attrs;
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

/***/ "./resources/js/components/Notifications/_infoAlert.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Notifications/_infoAlert.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoAlert_vue_vue_type_template_id_7cf4fbc1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_infoAlert.vue?vue&type=template&id=7cf4fbc1 */ "./resources/js/components/Notifications/_infoAlert.vue?vue&type=template&id=7cf4fbc1");
/* harmony import */ var _infoAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_infoAlert.vue?vue&type=script&lang=js */ "./resources/js/components/Notifications/_infoAlert.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _infoAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _infoAlert_vue_vue_type_template_id_7cf4fbc1__WEBPACK_IMPORTED_MODULE_0__.render,
  _infoAlert_vue_vue_type_template_id_7cf4fbc1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notifications/_infoAlert.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Apps/IndexAppsComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Pages/Apps/IndexAppsComponent.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexAppsComponent_vue_vue_type_template_id_113ec490__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexAppsComponent.vue?vue&type=template&id=113ec490 */ "./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=template&id=113ec490");
/* harmony import */ var _IndexAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexAppsComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexAppsComponent_vue_vue_type_template_id_113ec490__WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexAppsComponent_vue_vue_type_template_id_113ec490__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Apps/IndexAppsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Main/Main.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Pages/Main/Main.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_5a71ea29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=5a71ea29 */ "./resources/js/components/Pages/Main/Main.vue?vue&type=template&id=5a71ea29");
/* harmony import */ var _Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/Main/Main.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_5a71ea29__WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_5a71ea29__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Main/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/Notifications/_infoAlert.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Notifications/_infoAlert.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_infoAlert.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/_infoAlert.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexAppsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Main/Main.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Pages/Main/Main.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Main/Main.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Notifications/_infoAlert.vue?vue&type=template&id=7cf4fbc1":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Notifications/_infoAlert.vue?vue&type=template&id=7cf4fbc1 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoAlert_vue_vue_type_template_id_7cf4fbc1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoAlert_vue_vue_type_template_id_7cf4fbc1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoAlert_vue_vue_type_template_id_7cf4fbc1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_infoAlert.vue?vue&type=template&id=7cf4fbc1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/_infoAlert.vue?vue&type=template&id=7cf4fbc1");


/***/ }),

/***/ "./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=template&id=113ec490":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=template&id=113ec490 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexAppsComponent_vue_vue_type_template_id_113ec490__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexAppsComponent_vue_vue_type_template_id_113ec490__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexAppsComponent_vue_vue_type_template_id_113ec490__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexAppsComponent.vue?vue&type=template&id=113ec490 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Apps/IndexAppsComponent.vue?vue&type=template&id=113ec490");


/***/ }),

/***/ "./resources/js/components/Pages/Main/Main.vue?vue&type=template&id=5a71ea29":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Pages/Main/Main.vue?vue&type=template&id=5a71ea29 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_5a71ea29__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_5a71ea29__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_5a71ea29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=5a71ea29 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Main/Main.vue?vue&type=template&id=5a71ea29");


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


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);