"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Admin_Apps_AdminAppsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/BaseInput.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/BaseInput.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["value", "label", "type", "error", "placeholder"],
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    updateValue: function updateValue(value) {
      this.$emit("input", value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Forms_BaseInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Forms/BaseInput.vue */ "./resources/js/components/Forms/BaseInput.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BaseInput: _Forms_BaseInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      editAppDialog: false,
      fileUploadLoader: false,
      createCategoryDialog: false,
      editCategoryDialog: false,
      deleteCategoryDialog: false,
      deleteAppDialog: false,
      uploadDialog: false,
      categories: [],
      formData: [],
      errors: [],
      apps: [],
      file: [],
      search: "",
      headersAppCategories: [{
        text: "Kategorie",
        value: "category"
      }, {
        text: "",
        value: "actions"
      }],
      headersApps: [{
        text: "Název",
        value: "name"
      }, {
        text: "Popis",
        value: "description"
      }, {
        text: "Kategorie",
        value: "category.category"
      }, {
        text: "",
        value: "actions"
      }]
    };
  },
  created: function created() {
    this.getAppsCategories();
    this.getApps();
  },
  methods: {
    getAppsCategories: function getAppsCategories() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("apps/categories").then(function (response) {
        _this.categories = response.data.data;
      });
    },
    selectFile: function selectFile(event) {
      this.file = event;
    },
    getApps: function getApps() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("apps?unsorted=true").then(function (response) {
        _this2.apps = response.data.data.apps;
      });
    },
    openUploadAppDialog: function openUploadAppDialog() {
      this.fileUploadLoader = false;
      this.uploadDialog = true;
    },
    uploadFile: function uploadFile() {
      var _this3 = this;
      this.fileUploadLoader = true;
      var formUploadData = new FormData();
      formUploadData.append("file", this.file, this.file.name);
      formUploadData.append("category", this.formData.category.id);
      if (this.formData.description) {
        formUploadData.append("description", this.formData.description);
      }
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("apps", formUploadData).then(function (response) {
        _this3.$store.state.alerts = response.data;
        _this3.closeDialog();
      })["catch"](function (error) {
        _this3.fileUploadLoader = false;
        _this3.errors = error.response.data.errors;
      });
    },
    openEditAppDialog: function openEditAppDialog(data) {
      this.formData = data;
      this.editAppDialog = true;
    },
    editApp: function editApp() {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().patch("apps/" + this.formData.id, {
        description: this.formData.description
      }).then(function (response) {
        _this4.$store.state.alerts = response.data;
        _this4.closeDialog();
      })["catch"](function (error) {
        _this4.errors = error.response.data.errors;
      });
    },
    openDeleteAppDialog: function openDeleteAppDialog(appId) {
      this.formData.id = appId;
      this.deleteAppDialog = true;
    },
    deleteApp: function deleteApp() {
      var _this5 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("apps/" + this.formData.id).then(function (response) {
        _this5.$store.state.alerts = response.data;
        _this5.closeDialog();
      });
    },
    openCreateCategoryDialog: function openCreateCategoryDialog() {
      this.createCategoryDialog = true;
    },
    createCategory: function createCategory() {
      var _this6 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("apps/categories", {
        category: this.formData.category
      }).then(function (response) {
        _this6.$store.state.alerts = response.data;
        _this6.closeDialog();
      })["catch"](function (error) {
        _this6.errors = error.response.data.errors;
      });
    },
    openEditCategoryDialog: function openEditCategoryDialog(category) {
      this.editCategoryDialog = true;
      this.formData = category;
    },
    editCategory: function editCategory() {
      var _this7 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().patch("apps/categories/" + this.formData.id, {
        category: this.formData.category
      }).then(function (response) {
        _this7.$store.state.alerts = response.data;
        _this7.closeDialog();
      })["catch"](function (error) {
        _this7.errors = error.response.data.errors;
      });
    },
    openDeleteCategoryDialog: function openDeleteCategoryDialog(categoryId) {
      this.deleteCategoryDialog = true;
      this.formData.categoryId = categoryId;
    },
    deleteCategory: function deleteCategory() {
      var _this8 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("apps/categories/" + this.formData.categoryId).then(function (response) {
        _this8.$store.state.alerts = response.data;
        _this8.closeDialog();
      });
    },
    closeDialog: function closeDialog() {
      this.getAppsCategories();
      this.getApps();
      this.editCategoryDialog = false;
      this.deleteCategoryDialog = false;
      this.createCategoryDialog = false;
      this.uploadDialog = false;
      this.fileUploadLoader = true;
      this.editAppDialog = false;
      this.deleteAppDialog = false;
      this.formData = [];
      this.errors = [];
      this.file = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/BaseInput.vue?vue&type=template&id=319ee55e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/BaseInput.vue?vue&type=template&id=319ee55e ***!
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
  return _c("div", [_c("v-text-field", _vm._b({
    attrs: {
      dense: "",
      placeholder: _vm.placeholder,
      label: _vm.label,
      type: _vm.type,
      value: _vm.value,
      "error-messages": _vm.error,
      outlined: "",
      clearable: ""
    },
    on: {
      input: function input($event) {
        return _vm.updateValue($event);
      }
    }
  }, "v-text-field", _vm.$attrs, false))], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=template&id=5e217b53":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=template&id=5e217b53 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      lg: "4",
      xl: "4"
    }
  }, [_c("v-card", {
    staticClass: "overflow-hidden rounded-xl blur shadow-blur",
    attrs: {
      flat: ""
    }
  }, [_c("v-card-subtitle", {
    staticClass: "text-center font-weight-medium"
  }, [_vm._v("\n                    Kategorie\n                    "), _c("v-btn", {
    staticClass: "mr-3",
    staticStyle: {
      position: "fixed",
      right: "0px"
    },
    attrs: {
      icon: "",
      color: "green",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.openCreateCategoryDialog();
      }
    }
  }, [_c("v-icon", {
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-plus")])], 1)], 1), _vm._v(" "), _c("v-card-text", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headersAppCategories,
      items: _vm.categories
    },
    scopedSlots: _vm._u([{
      key: "item.actions",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("v-row", [_c("v-icon", {
          attrs: {
            small: "",
            color: "green"
          },
          on: {
            click: function click($event) {
              return _vm.openEditCategoryDialog(item);
            }
          }
        }, [_vm._v("mdi-pencil")]), _vm._v(" "), _c("v-icon", {
          attrs: {
            small: "",
            color: "red"
          },
          on: {
            click: function click($event) {
              return _vm.openDeleteCategoryDialog(item.id);
            }
          }
        }, [_vm._v("mdi-delete")])], 1)];
      }
    }])
  })], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "8",
      lg: "8",
      xl: "8"
    }
  }, [_c("v-card", {
    staticClass: "overflow-hidden rounded-xl blur shadow-blur",
    attrs: {
      flat: ""
    }
  }, [_c("v-card-subtitle", {
    staticClass: "text-center font-weight-medium"
  }, [_vm._v("\n                    Nahrané aplikace\n                    "), _c("v-btn", {
    staticClass: "mr-3",
    staticStyle: {
      position: "fixed",
      right: "0px"
    },
    attrs: {
      icon: "",
      color: "green",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.openUploadAppDialog();
      }
    }
  }, [_c("v-icon", {
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-plus")])], 1)], 1), _vm._v(" "), _c("v-card-text", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-text-field", {
    attrs: {
      "preppend-inner-icon": "mdi-magnify",
      label: "Vyhledat ...",
      "single-line": "",
      "hide-details": "",
      autofocus: ""
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c("v-spacer")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headersApps,
      items: _vm.apps,
      search: _vm.search
    },
    scopedSlots: _vm._u([{
      key: "item.actions",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("v-row", [_c("v-icon", {
          attrs: {
            small: "",
            color: "green"
          },
          on: {
            click: function click($event) {
              return _vm.openEditAppDialog(item);
            }
          }
        }, [_vm._v("mdi-pencil")]), _vm._v(" "), _c("v-icon", {
          attrs: {
            small: "",
            color: "red"
          },
          on: {
            click: function click($event) {
              return _vm.openDeleteAppDialog(item.id);
            }
          }
        }, [_vm._v("mdi-delete")])], 1)];
      }
    }])
  })], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "center"
  }, [_c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "400px"
    },
    model: {
      value: _vm.deleteCategoryDialog,
      callback: function callback($$v) {
        _vm.deleteCategoryDialog = $$v;
      },
      expression: "deleteCategoryDialog"
    }
  }, [_c("v-card", [_c("v-card-text", [_c("v-container", {
    staticClass: "pt-3"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "12",
      lg: "12"
    }
  }, [_c("p", {
    staticClass: "mt-6 text-center headline"
  }, [_vm._v("\n                                    Přejete si odebrat kategorii?\n                                ")])])], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "blue darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v("\n                        Zavřít\n                    ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "red darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteCategory();
      }
    }
  }, [_vm._v("\n                        Odebrat\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "800px"
    },
    model: {
      value: _vm.editCategoryDialog,
      callback: function callback($$v) {
        _vm.editCategoryDialog = $$v;
      },
      expression: "editCategoryDialog"
    }
  }, [_c("v-card", [_c("v-card-text", [_c("v-container", {
    staticClass: "pt-12",
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
  }, [_c("BaseInput", {
    attrs: {
      label: "Kategorie",
      type: "text",
      error: _vm.errors.category
    },
    model: {
      value: _vm.formData.category,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "category", $$v);
      },
      expression: "formData.category"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "blue darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v("\n                        Zavřít\n                    ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "green darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.editCategory();
      }
    }
  }, [_vm._v("\n                        Upravit\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "800px"
    },
    model: {
      value: _vm.createCategoryDialog,
      callback: function callback($$v) {
        _vm.createCategoryDialog = $$v;
      },
      expression: "createCategoryDialog"
    }
  }, [_c("v-card", [_c("v-card-text", [_c("v-container", {
    staticClass: "pt-12",
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
  }, [_c("BaseInput", {
    attrs: {
      label: "Kategorie",
      type: "text",
      error: _vm.errors.category
    },
    model: {
      value: _vm.formData.category,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "category", $$v);
      },
      expression: "formData.category"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "blue darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v("\n                        Zavřít\n                    ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "green darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.createCategory();
      }
    }
  }, [_vm._v("\n                        Vytvořit\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "800px"
    },
    model: {
      value: _vm.uploadDialog,
      callback: function callback($$v) {
        _vm.uploadDialog = $$v;
      },
      expression: "uploadDialog"
    }
  }, [_c("v-card", [_c("v-card-text", [_c("v-container", {
    staticClass: "pt-12",
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      lg: "6"
    }
  }, [_c("v-file-input", {
    attrs: {
      outlined: "",
      dense: "",
      label: "Nahrajte soubor",
      error: _vm.errors.file,
      "show-size": "",
      clearable: ""
    },
    on: {
      change: _vm.selectFile
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      md: "6"
    }
  }, [_c("v-combobox", {
    attrs: {
      "prepend-inner-icon": "mdi-file-tree",
      items: _vm.categories,
      "item-text": "category",
      "item-value": "id",
      outlined: "",
      dense: "",
      label: "Vyberte kategorii",
      error: _vm.errors.category
    },
    model: {
      value: _vm.formData.category,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "category", $$v);
      },
      expression: "formData.category"
    }
  })], 1), _vm._v(" "), _c("v-col", [_c("v-textarea", {
    attrs: {
      "prepend-inner-icon": "mdi-comment-text",
      outlined: "",
      label: "Popis aplikace",
      error: _vm.errors.description,
      counter: "250"
    },
    model: {
      value: _vm.formData.description,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "description", $$v);
      },
      expression: "formData.description"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      plain: "",
      outlined: "",
      color: "blue darken-1"
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-3"
  }, [_vm._v(" mdi-close ")]), _vm._v("\n                        Zavřít\n                    ")], 1), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      loading: _vm.fileUploadLoader,
      disabled: !_vm.formData.category || _vm.file.length == 0,
      plain: "",
      outlined: "",
      color: "green darken-1"
    },
    on: {
      click: function click($event) {
        return _vm.uploadFile();
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-3"
  }, [_vm._v("mdi-plus")]), _vm._v("\n                        Nahrát\n                    ")], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "800px"
    },
    model: {
      value: _vm.editAppDialog,
      callback: function callback($$v) {
        _vm.editAppDialog = $$v;
      },
      expression: "editAppDialog"
    }
  }, [_c("v-card", [_c("v-card-text", [_c("v-container", {
    staticClass: "pt-12",
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", [_c("v-textarea", {
    attrs: {
      "prepend-inner-icon": "mdi-comment-text",
      outlined: "",
      label: "Popis aplikace",
      error: _vm.errors.description,
      counter: "250"
    },
    model: {
      value: _vm.formData.description,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "description", $$v);
      },
      expression: "formData.description"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      plain: "",
      outlined: "",
      color: "blue darken-1"
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-3"
  }, [_vm._v(" mdi-close ")]), _vm._v("\n                        Zavřít\n                    ")], 1), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      plain: "",
      outlined: "",
      color: "green darken-1"
    },
    on: {
      click: function click($event) {
        return _vm.editApp();
      }
    }
  }, [_vm._v("\n                        Upravit\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "400px"
    },
    model: {
      value: _vm.deleteAppDialog,
      callback: function callback($$v) {
        _vm.deleteAppDialog = $$v;
      },
      expression: "deleteAppDialog"
    }
  }, [_c("v-card", [_c("v-card-text", [_c("v-container", {
    staticClass: "pt-3"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "12",
      lg: "12"
    }
  }, [_c("p", {
    staticClass: "mt-6 text-center headline"
  }, [_vm._v("\n                                    Přejete si odebrat soubor?\n                                ")])])], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "blue darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v("\n                        Zavřít\n                    ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "red darken-1",
      plain: "",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteApp();
      }
    }
  }, [_vm._v("\n                        Odebrat\n                    ")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Forms/BaseInput.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Forms/BaseInput.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInput_vue_vue_type_template_id_319ee55e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=template&id=319ee55e */ "./resources/js/components/Forms/BaseInput.vue?vue&type=template&id=319ee55e");
/* harmony import */ var _BaseInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=script&lang=js */ "./resources/js/components/Forms/BaseInput.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BaseInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseInput_vue_vue_type_template_id_319ee55e__WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseInput_vue_vue_type_template_id_319ee55e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forms/BaseInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminAppsComponent_vue_vue_type_template_id_5e217b53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminAppsComponent.vue?vue&type=template&id=5e217b53 */ "./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=template&id=5e217b53");
/* harmony import */ var _AdminAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminAppsComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminAppsComponent_vue_vue_type_template_id_5e217b53__WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminAppsComponent_vue_vue_type_template_id_5e217b53__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forms/BaseInput.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Forms/BaseInput.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/BaseInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminAppsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAppsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forms/BaseInput.vue?vue&type=template&id=319ee55e":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Forms/BaseInput.vue?vue&type=template&id=319ee55e ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_319ee55e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_319ee55e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_319ee55e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=template&id=319ee55e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/BaseInput.vue?vue&type=template&id=319ee55e");


/***/ }),

/***/ "./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=template&id=5e217b53":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=template&id=5e217b53 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAppsComponent_vue_vue_type_template_id_5e217b53__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAppsComponent_vue_vue_type_template_id_5e217b53__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAppsComponent_vue_vue_type_template_id_5e217b53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminAppsComponent.vue?vue&type=template&id=5e217b53 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Admin/Apps/AdminAppsComponent.vue?vue&type=template&id=5e217b53");


/***/ })

}]);