"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/parent/ParentA",{

/***/ "./components/CacheSample.tsx":
/*!************************************!*\
  !*** ./components/CacheSample.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.tsx\");\nvar _this = undefined;\n\n\n\nvar CacheSample = function(param) {\n    var id = param.id;\n    var data = _pages_app__WEBPACK_IMPORTED_MODULE_2__.queryClient.getQueryData([\n        \"userProfile\",\n        id, \n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.birthDay\n            }, void 0, false, {\n                fileName: \"/Users/naoya.nakamoriplayground.live/naoya_nakamori/practice/react-sample/next-app/components/CacheSample.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.favoriteAnime\n            }, void 0, false, {\n                fileName: \"/Users/naoya.nakamoriplayground.live/naoya_nakamori/practice/react-sample/next-app/components/CacheSample.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.favoriteMovie\n            }, void 0, false, {\n                fileName: \"/Users/naoya.nakamoriplayground.live/naoya_nakamori/practice/react-sample/next-app/components/CacheSample.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = CacheSample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CacheSample);\nvar _c;\n$RefreshReg$(_c, \"CacheSample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhY2hlU2FtcGxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFFa0I7QUFLNUMsSUFBTUUsV0FBVyxHQUFHLGdCQUFtQjtRQUFoQkMsRUFBRSxTQUFGQSxFQUFFO0lBQ3ZCLElBQU1DLElBQUksR0FBeUJILGdFQUF3QixDQUFDO1FBQzFELGFBQWE7UUFDYkUsRUFBRTtLQUNILENBQUM7SUFFRixxQkFDRTs7MEJBQ0UsOERBQUNHLEtBQUc7MEJBQUVGLElBQUksYUFBSkEsSUFBSSxXQUFVLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsSUFBSSxDQUFFRyxRQUFROzs7OztxQkFBTzswQkFDM0IsOERBQUNELEtBQUc7MEJBQUVGLElBQUksYUFBSkEsSUFBSSxXQUFlLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFFSSxhQUFhOzs7OztxQkFBTzswQkFDaEMsOERBQUNGLEtBQUc7MEJBQUVGLElBQUksYUFBSkEsSUFBSSxXQUFlLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFFSyxhQUFhOzs7OztxQkFBTzs7b0JBQy9CLENBQ0g7Q0FDSDtBQWJLUCxLQUFBQSxXQUFXO0FBZWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWNoZVNhbXBsZS50c3g/NjM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9saWIvcHJpdmF0ZV9hcHAvbWVtYmVyc1wiO1xuaW1wb3J0IHsgcXVlcnlDbGllbnQgfSBmcm9tIFwiLi4vcGFnZXMvX2FwcFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBpZDogbnVtYmVyO1xufTtcbmNvbnN0IENhY2hlU2FtcGxlID0gKHsgaWQgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgZGF0YTogVXNlckluZm8gfCB1bmRlZmluZWQgPSBxdWVyeUNsaWVudC5nZXRRdWVyeURhdGEoW1xuICAgIFwidXNlclByb2ZpbGVcIixcbiAgICBpZCxcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj57ZGF0YT8uYmlydGhEYXl9PC9kaXY+XG4gICAgICA8ZGl2PntkYXRhPy5mYXZvcml0ZUFuaW1lfTwvZGl2PlxuICAgICAgPGRpdj57ZGF0YT8uZmF2b3JpdGVNb3ZpZX08L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlU2FtcGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwicXVlcnlDbGllbnQiLCJDYWNoZVNhbXBsZSIsImlkIiwiZGF0YSIsImdldFF1ZXJ5RGF0YSIsImRpdiIsImJpcnRoRGF5IiwiZmF2b3JpdGVBbmltZSIsImZhdm9yaXRlTW92aWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CacheSample.tsx\n");

/***/ })

});