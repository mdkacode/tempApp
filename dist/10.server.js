exports.ids = [10];
exports.modules = {

/***/ "./src/common/modules/features_list/presentational.jsx":
/*!*************************************************************!*\
  !*** ./src/common/modules/features_list/presentational.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_tabular_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tabular_list */ \"./src/common/components/tabular_list/index.jsx\");\n\n\n\nvar FeaturesList = function FeaturesList(props) {\n  var _columnMeta = [{\n    label: \"Primary Key\",\n    dataKey: \"pk\",\n    width: 50,\n    flexGrow: 4,\n    sortable: true\n  }, {\n    label: \"Name\",\n    dataKey: \"name\",\n    width: 50,\n    flexGrow: 4,\n    sortable: true\n  }, {\n    label: \"Flag Constant\",\n    dataKey: \"featureFlagConstant\",\n    width: 50,\n    flexGrow: 4,\n    sortable: true\n  }, {\n    label: \"Enabled\",\n    dataKey: \"isEnabled\",\n    width: 50,\n    flexGrow: 4,\n    sortable: true\n  }];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"dashboard_table\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tabular_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    disableHeader: false,\n    showSearchbox: true,\n    windowScroller: true,\n    data: props.data,\n    columnMeta: _columnMeta\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturesList);\n\n//# sourceURL=webpack:///./src/common/modules/features_list/presentational.jsx?");

/***/ })

};;