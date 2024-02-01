"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_navigation_Navigation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/Notification.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/Notification.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    alert: function alert() {
      return this.$store.state.alerts;
    }
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    iconFunction: function iconFunction(status) {
      if (status == "success") {
        return "mdi-check";
      }
      return "mdi-close";
    }
  },
  watch: {
    alert: function alert() {
      if (this.alert.length != 0) {
        setTimeout(function () {
          this.$store.state.alerts = [];
        }.bind(this), 5000);
      } else {
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/Navigation.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/Navigation.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_verticalmenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/_verticalmenu.vue */ "./resources/js/components/navigation/_components/_verticalmenu.vue");
/* harmony import */ var _components_sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/_sidebar.vue */ "./resources/js/components/navigation/_components/_sidebar.vue");
/* harmony import */ var _Notifications_Notification_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notifications/Notification.vue */ "./resources/js/components/Notifications/Notification.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {},
  data: function data() {
    return {
      alert: true,
      permisions: []
    };
  },
  components: {
    SideBar: _components_sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VerticalMenu: _components_verticalmenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Notification: _Notifications_Notification_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    this.index();
    this.getPermisions();
  },
  methods: {
    index: function index() {
      var _this = this;
      axios.get("users/auth").then(function (response) {
        if (response.data.status != "success") {
          _this.$router.push("/login");
        } else {
          _this.$store.state.user = response.data.data;
        }
      })["catch"](function (error) {
        if (error.response.status == "401") {
          _this.$router.push("/login");
        }
      });
    },
    getPermisions: function getPermisions() {
      var _this2 = this;
      axios.get("permisions").then(function (response) {
        _this2.permisions = response.data.data;
      });
    }
  },
  mounted: function mounted() {
    //
  },
  watch: {
    $route: function $route(to, from) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: [{
        title: "Správa novinek",
        icon: "mdi-newspaper",
        link: "/admin/news"
      }, {
        title: "Správa aplikací",
        icon: "mdi-devices",
        link: "/admin/apps"
      }, {
        title: "Uživatelé",
        icon: "mdi-account-multiple",
        link: "/admin/users"
      }, {
        title: "Správa návodů",
        icon: "mdi-help",
        link: "/admin/help"
      }, {
        title: "Marketing",
        icon: "mdi-shopping",
        link: "/admin/marketing"
      }]
    };
  },
  components: {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // props: {
  //     user: Object,
  // },
  data: function data() {
    return {
      user: [],
      items: [{
        title: "Novinky",
        icon: "mdi-newspaper",
        link: "/news",
        can: "show_news"
      }, {
        title: "Aplikace",
        icon: "mdi-devices",
        link: "/apps",
        can: "show_apps"
      }, {
        title: "Tikety",
        icon: "mdi-checkbox-marked-circle-plus-outline",
        link: "/tikets",
        can: "show_tickets"
      }, {
        title: "Reporty",
        icon: "mdi-currency-usd",
        link: "/invoices",
        can: "show_invoices"
      }, {
        title: "Návody",
        icon: "mdi-help",
        link: "/help",
        can: "show_tutorials"
      }],
      nanguCustomerMenuPart: [{
        title: "Založení zákazníka",
        icon: "mdi-account-multiple",
        link: "/customers/create",
        can: "show_nangu"
      }, {
        title: "Vyhledání zákazníka",
        icon: "mdi-magnify",
        link: "/customers/search",
        can: "show_nangu"
      }
      // { title: "Users", icon: "mdi-account-group-outline" },
      ],

      api: [{
        title: "API",
        icon: "mdi-api",
        link: "/api",
        can: "show_api"
      }],
      marketing: [{
        title: "Marketing",
        icon: "mdi-shopping",
        link: "/marketing",
        can: "show_marketing"
      }]
    };
  },
  created: function created() {
    this.index();
  },
  components: {},
  mounted: function mounted() {},
  methods: {
    index: function index() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("users/auth").then(function (response) {
        _this.user = response.data.data;
      });
    },
    hasPermision: function hasPermision(itemPermision, userPermisions, isAdmin) {
      if (isAdmin == true) {
        return true;
      }
      var output = false;
      userPermisions.forEach(function (element) {
        if (element.permision.permision === itemPermision) {
          output = true;
        }
      });
      return output;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidebar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidebar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mainSideBarItems_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mainSideBarItems.vue */ "./resources/js/components/navigation/_components/_mainSideBarItems.vue");
/* harmony import */ var _adminSideBarItems_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_adminSideBarItems.vue */ "./resources/js/components/navigation/_components/_adminSideBarItems.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: [],
      drawer: true
    };
  },
  components: {
    MainSideBarItems: _mainSideBarItems_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminSideBarItemsVue: _adminSideBarItems_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("users/auth").then(function (response) {
        _this.user = response.data.data;
      })["catch"](function (error) {
        if (error.response.status == "401") {
          _this.$router.push("/login");
        }
      });
    },
    userZone: function userZone() {
      if (this.$route.params.component != "user") {
        this.$router.push("/user");
      }
    },
    logout: function logout() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("logout").then(function (response) {
        _this2.$router.push("/login");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    return {};
  },
  methods: {
    logout: function logout() {
      var _this = this;
      axios.post("logout").then(function (response) {
        _this.$router.push("/login");
      });
    },
    goToAdmin: function goToAdmin() {
      this.$router.push("/admin/news");
    },
    goHome: function goHome() {
      this.$router.push("/");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/Notification.vue?vue&type=template&id=59e4207d":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/Notification.vue?vue&type=template&id=59e4207d ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.alert.length != 0 ? _c("div", {
    staticClass: "flex-row-reverse d-flex"
  }, [_c("v-col", {
    staticStyle: {
      position: "fixed",
      "z-index": "2"
    },
    attrs: {
      cols: "12",
      sm: "12",
      md: "2",
      lg: "2"
    }
  }, [_c("v-snackbar", {
    staticStyle: {
      "z-index": "2"
    },
    attrs: {
      transition: "slide-x-reverse-transition",
      timeout: 4000,
      value: true,
      absolute: "",
      top: "",
      right: "",
      color: _vm.alert.status,
      elevation: "24"
    }
  }, [_c("v-row", [_c("v-icon", {
    staticClass: "mx-3",
    attrs: {
      small: ""
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.iconFunction(_vm.alert.status)) + "\n                    ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("span", {
    staticClass: "justify-end mx-6 body-2 font-weight-bold"
  }, [_vm._v("\n                        " + _vm._s(_vm.alert.message) + "\n                    ")])], 1)], 1)], 1)], 1) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/Navigation.vue?vue&type=template&id=ae7ecf58":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/Navigation.vue?vue&type=template&id=ae7ecf58 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-app", [_c("div", [_c("vertical-menu"), _vm._v(" "), _c("side-bar"), _vm._v(" "), _c("v-main", {
    staticClass: "dotted",
    attrs: {
      app: ""
    }
  }, [_c("v-container", {
    staticClass: "mr-16 mt-8",
    attrs: {
      fluid: ""
    }
  }, [_c("notification"), _vm._v(" "), _c("router-view", {
    staticClass: "mt-3"
  })], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=template&id=c55aade4":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=template&id=c55aade4 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-list", _vm._l(_vm.items, function (item) {
    return _c("v-list-item", {
      key: item.title,
      staticClass: "white--text",
      attrs: {
        link: "",
        nav: "",
        to: item.link
      }
    }, [_c("v-list-item-icon", [_c("v-img", {
      staticClass: "mx-auto",
      attrs: {
        "max-height": "26",
        "max-width": "26"
      }
    }, [_c("v-icon", {
      attrs: {
        color: "white"
      }
    }, [_vm._v(" " + _vm._s(item.icon) + " ")])], 1)], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "ml-6 subtitle-1 font-weight-medium"
    }, [_vm._v("\n                " + _vm._s(item.title))])], 1);
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-list", _vm._l(_vm.items, function (item) {
    return _c("v-list-item", {
      key: item.title,
      staticClass: "white--text",
      attrs: {
        link: "",
        nav: "",
        to: item.link
      }
    }, [_c("v-list-item-icon", [_c("v-img", {
      staticClass: "mx-auto",
      attrs: {
        "max-height": "26",
        "max-width": "26"
      }
    }, [_c("v-icon", {
      attrs: {
        color: "white"
      }
    }, [_vm._v(" " + _vm._s(item.icon) + " ")])], 1)], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "ml-6 subtitle-1 font-weight-medium"
    }, [_vm._v("\n                " + _vm._s(item.title))])], 1);
  }), 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list", _vm._l(_vm.nanguCustomerMenuPart, function (item) {
    return _c("v-list-item", {
      key: item.title,
      staticClass: "white--text",
      attrs: {
        link: "",
        nav: "",
        to: item.link
      }
    }, [_c("v-list-item-icon", [_c("v-img", {
      staticClass: "mx-auto",
      attrs: {
        "max-height": "26",
        "max-width": "26"
      }
    }, [_c("v-icon", {
      attrs: {
        color: "white"
      }
    }, [_vm._v(" " + _vm._s(item.icon) + " ")])], 1)], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "ml-6 subtitle-1 font-weight-medium"
    }, [_vm._v("\n                " + _vm._s(item.title))])], 1);
  }), 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list", _vm._l(_vm.api, function (item) {
    return _c("v-list-item", {
      key: item.title,
      staticClass: "white--text",
      attrs: {
        link: "",
        nav: "",
        to: item.link
      }
    }, [_c("v-list-item-icon", [_c("v-img", {
      staticClass: "mx-auto",
      attrs: {
        "max-height": "26",
        "max-width": "26"
      }
    }, [_c("v-icon", {
      attrs: {
        color: "white"
      }
    }, [_vm._v(" " + _vm._s(item.icon) + " ")])], 1)], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "ml-6 subtitle-1 font-weight-medium"
    }, [_vm._v("\n                " + _vm._s(item.title))])], 1);
  }), 1), _vm._v(" "), _c("v-list", _vm._l(_vm.marketing, function (item) {
    return _c("v-list-item", {
      key: item.title,
      staticClass: "white--text",
      attrs: {
        link: "",
        nav: "",
        to: item.link
      }
    }, [_c("v-list-item-icon", [_c("v-img", {
      staticClass: "mx-auto",
      attrs: {
        "max-height": "26",
        "max-width": "26"
      }
    }, [_c("v-icon", {
      attrs: {
        color: "white"
      }
    }, [_vm._v(" " + _vm._s(item.icon) + " ")])], 1)], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "ml-6 subtitle-1 font-weight-medium"
    }, [_vm._v("\n                " + _vm._s(item.title))])], 1);
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidebar.vue?vue&type=template&id=2d0de4d7":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidebar.vue?vue&type=template&id=2d0de4d7 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "justify-start mr-3 d-flex"
  }, [_c("v-app-bar-nav-icon", {
    staticClass: "hidden-lg-and-up mt-16",
    attrs: {
      color: "#1E293B"
    },
    on: {
      click: function click($event) {
        _vm.drawer = !_vm.drawer;
      }
    }
  })], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      "no-gutters": ""
    }
  }, [_c("v-navigation-drawer", {
    staticClass: "flex fill-height d-flex justify-items-center",
    staticStyle: {
      filter: "grayscale(0%)"
    },
    attrs: {
      fixed: "",
      app: "",
      color: "#0f0f0f",
      src: "/Images/cervene_pozadi-p-500.jpeg"
    },
    model: {
      value: _vm.drawer,
      callback: function callback($$v) {
        _vm.drawer = $$v;
      },
      expression: "drawer"
    }
  }, [_c("v-list", [_c("v-list-item", {
    attrs: {
      "two-line": ""
    }
  }, [_c("v-menu", {
    attrs: {
      "offset-y": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
          attrs = _ref.attrs;
        return [_c("v-list-item-content", _vm._g(_vm._b({}, "v-list-item-content", attrs, false), on), [_c("v-list-item-title", {
          staticClass: "white--text font-weight-medium"
        }, [_vm._v("\n                                    " + _vm._s(_vm.user.name) + "\n                                ")]), _vm._v(" "), _c("v-list-item-subtitle", {
          staticClass: "white--text"
        }, [_vm._v("\n                                    " + _vm._s(_vm.user.email) + "\n                                    "), _c("v-icon", {
          attrs: {
            color: "white"
          }
        }, [_vm._v("mdi-menu-down")])], 1)], 1)];
      }
    }])
  }, [_vm._v(" "), _c("v-list", {
    attrs: {
      color: "#F8F9FA"
    }
  }, [_c("v-list-item", {
    attrs: {
      dense: ""
    },
    on: {
      click: function click($event) {
        return _vm.userZone();
      }
    }
  }, [_c("v-list-item-icon", [_c("v-img", {
    staticClass: "mx-auto",
    attrs: {
      "max-height": "26",
      "max-width": "26"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "info",
      small: ""
    }
  }, [_vm._v("\n                                            mdi-account\n                                        ")])], 1)], 1), _vm._v(" "), _c("v-list-item-title", [_vm._v("\n                                    Nastavení\n                                ")])], 1), _vm._v(" "), _c("v-list-item", {
    attrs: {
      dense: ""
    },
    on: {
      click: function click($event) {
        return _vm.logout();
      }
    }
  }, [_c("v-list-item-icon", [_c("v-img", {
    staticClass: "mx-auto",
    attrs: {
      "max-height": "26",
      "max-width": "26"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "red",
      small: ""
    }
  }, [_vm._v("\n                                            mdi-logout\n                                        ")])], 1)], 1), _vm._v(" "), _c("v-list-item-title", [_vm._v("\n                                    Odhlásit se\n                                ")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _vm.$route.params.component != "admin" ? _c("MainSideBarItems") : _vm._e(), _vm._v(" "), _vm.user.is_admin == true && _vm.$route.params.component == "admin" ? _c("AdminSideBarItemsVue") : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=template&id=33e4f2ea":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=template&id=33e4f2ea ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-app-bar", {
    attrs: {
      fixed: "",
      dense: "",
      flat: "",
      color: "transparent"
    }
  }, [_c("v-spacer"), _vm._v(" "), _vm.user.is_admin == true ? _c("v-tooltip", {
    attrs: {
      bottom: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
          attrs = _ref.attrs;
        return [_c("v-avatar", _vm._g(_vm._b({
          staticStyle: {
            cursor: "pointer"
          },
          attrs: {
            size: "32",
            fixed: ""
          }
        }, "v-avatar", attrs, false), on), [_vm.$route.params.component != "admin" ? _c("v-icon", {
          attrs: {
            color: "black"
          },
          on: {
            click: function click($event) {
              return _vm.goToAdmin();
            }
          }
        }, [_vm._v("mdi-cog")]) : _c("v-icon", {
          attrs: {
            color: "black"
          },
          on: {
            click: function click($event) {
              return _vm.goHome();
            }
          }
        }, [_vm._v("\n                    mdi-home\n                ")])], 1)];
      }
    }], null, false, 2410554522)
  }, [_vm._v(" "), _vm.$route.params.component != "admin" ? _c("span", [_vm._v("Administrace")]) : _c("span", [_vm._v("Domů")])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Notifications/Notification.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Notifications/Notification.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notification_vue_vue_type_template_id_59e4207d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=59e4207d */ "./resources/js/components/Notifications/Notification.vue?vue&type=template&id=59e4207d");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js */ "./resources/js/components/Notifications/Notification.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_59e4207d__WEBPACK_IMPORTED_MODULE_0__.render,
  _Notification_vue_vue_type_template_id_59e4207d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notifications/Notification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/Navigation.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/navigation/Navigation.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_ae7ecf58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=ae7ecf58 */ "./resources/js/components/navigation/Navigation.vue?vue&type=template&id=ae7ecf58");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js */ "./resources/js/components/navigation/Navigation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_ae7ecf58__WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_ae7ecf58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/_components/_adminSideBarItems.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_adminSideBarItems.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminSideBarItems_vue_vue_type_template_id_c55aade4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_adminSideBarItems.vue?vue&type=template&id=c55aade4 */ "./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=template&id=c55aade4");
/* harmony import */ var _adminSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_adminSideBarItems.vue?vue&type=script&lang=js */ "./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _adminSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminSideBarItems_vue_vue_type_template_id_c55aade4__WEBPACK_IMPORTED_MODULE_0__.render,
  _adminSideBarItems_vue_vue_type_template_id_c55aade4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/_components/_adminSideBarItems.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/_components/_mainSideBarItems.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_mainSideBarItems.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainSideBarItems_vue_vue_type_template_id_3f9d7cd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2 */ "./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2");
/* harmony import */ var _mainSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mainSideBarItems.vue?vue&type=script&lang=js */ "./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mainSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _mainSideBarItems_vue_vue_type_template_id_3f9d7cd2__WEBPACK_IMPORTED_MODULE_0__.render,
  _mainSideBarItems_vue_vue_type_template_id_3f9d7cd2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/_components/_mainSideBarItems.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/_components/_sidebar.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_sidebar.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_vue_vue_type_template_id_2d0de4d7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_sidebar.vue?vue&type=template&id=2d0de4d7 */ "./resources/js/components/navigation/_components/_sidebar.vue?vue&type=template&id=2d0de4d7");
/* harmony import */ var _sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_sidebar.vue?vue&type=script&lang=js */ "./resources/js/components/navigation/_components/_sidebar.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _sidebar_vue_vue_type_template_id_2d0de4d7__WEBPACK_IMPORTED_MODULE_0__.render,
  _sidebar_vue_vue_type_template_id_2d0de4d7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/_components/_sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/_components/_verticalmenu.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_verticalmenu.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _verticalmenu_vue_vue_type_template_id_33e4f2ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_verticalmenu.vue?vue&type=template&id=33e4f2ea */ "./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=template&id=33e4f2ea");
/* harmony import */ var _verticalmenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_verticalmenu.vue?vue&type=script&lang=js */ "./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _verticalmenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _verticalmenu_vue_vue_type_template_id_33e4f2ea__WEBPACK_IMPORTED_MODULE_0__.render,
  _verticalmenu_vue_vue_type_template_id_33e4f2ea__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/_components/_verticalmenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notifications/Notification.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Notifications/Notification.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notification.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/Notification.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/Navigation.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/navigation/Navigation.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/Navigation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_adminSideBarItems.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_mainSideBarItems.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSideBarItems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/_components/_sidebar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_sidebar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_sidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidebar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalmenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_verticalmenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalmenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notifications/Notification.vue?vue&type=template&id=59e4207d":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Notifications/Notification.vue?vue&type=template&id=59e4207d ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_59e4207d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_59e4207d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_59e4207d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notification.vue?vue&type=template&id=59e4207d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Notifications/Notification.vue?vue&type=template&id=59e4207d");


/***/ }),

/***/ "./resources/js/components/navigation/Navigation.vue?vue&type=template&id=ae7ecf58":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/navigation/Navigation.vue?vue&type=template&id=ae7ecf58 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_ae7ecf58__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_ae7ecf58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_ae7ecf58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=ae7ecf58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/Navigation.vue?vue&type=template&id=ae7ecf58");


/***/ }),

/***/ "./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=template&id=c55aade4":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=template&id=c55aade4 ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminSideBarItems_vue_vue_type_template_id_c55aade4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminSideBarItems_vue_vue_type_template_id_c55aade4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminSideBarItems_vue_vue_type_template_id_c55aade4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_adminSideBarItems.vue?vue&type=template&id=c55aade4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_adminSideBarItems.vue?vue&type=template&id=c55aade4");


/***/ }),

/***/ "./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSideBarItems_vue_vue_type_template_id_3f9d7cd2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSideBarItems_vue_vue_type_template_id_3f9d7cd2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSideBarItems_vue_vue_type_template_id_3f9d7cd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_mainSideBarItems.vue?vue&type=template&id=3f9d7cd2");


/***/ }),

/***/ "./resources/js/components/navigation/_components/_sidebar.vue?vue&type=template&id=2d0de4d7":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_sidebar.vue?vue&type=template&id=2d0de4d7 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_2d0de4d7__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_2d0de4d7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_2d0de4d7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_sidebar.vue?vue&type=template&id=2d0de4d7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_sidebar.vue?vue&type=template&id=2d0de4d7");


/***/ }),

/***/ "./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=template&id=33e4f2ea":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=template&id=33e4f2ea ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalmenu_vue_vue_type_template_id_33e4f2ea__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalmenu_vue_vue_type_template_id_33e4f2ea__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalmenu_vue_vue_type_template_id_33e4f2ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_verticalmenu.vue?vue&type=template&id=33e4f2ea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navigation/_components/_verticalmenu.vue?vue&type=template&id=33e4f2ea");


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