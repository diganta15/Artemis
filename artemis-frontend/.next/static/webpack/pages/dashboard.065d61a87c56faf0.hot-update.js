"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Dashboard.module.css */ \"./styles/Dashboard.module.css\");\n/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_games_grid_Games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/games-grid/Games */ \"./components/games-grid/Games.js\");\n/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu/Menu */ \"./components/menu/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Dashboard() {\n    _s();\n    var ref = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser)(), user = ref.user, isLoading = ref.isLoading, error = ref.error;\n    console.log(user);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Dashboard\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\DIGANTA\\\\Documents\\\\Code\\\\Artemis\\\\artemis-frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 14,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            __source: {\n                fileName: \"C:\\\\Users\\\\DIGANTA\\\\Documents\\\\Code\\\\Artemis\\\\artemis-frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 16,\n                columnNumber: 4\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainGrid),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\DIGANTA\\\\Documents\\\\Code\\\\Artemis\\\\artemis-frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_menu_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\DIGANTA\\\\Documents\\\\Code\\\\Artemis\\\\artemis-frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 18,\n                            columnNumber: 6\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_games_grid_Games__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\DIGANTA\\\\Documents\\\\Code\\\\Artemis\\\\artemis-frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 19,\n                            columnNumber: 6\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Dashboard, \"HS4ZDCYBfte8Xd6ooaGKP8za5HY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDWTtBQUNNO0FBQ1Y7QUFDUztBQUNSOzs7QUFFM0IsUUFBUSxDQUFDTSxTQUFTLEdBQUcsQ0FBQzs7SUFDcEMsR0FBSyxDQUE4QkwsR0FBUyxHQUFUQSw0REFBTyxJQUFsQ00sSUFBSSxHQUF1Qk4sR0FBUyxDQUFwQ00sSUFBSSxFQUFFQyxTQUFTLEdBQVlQLEdBQVMsQ0FBOUJPLFNBQVMsRUFBRUMsS0FBSyxHQUFLUixHQUFTLENBQW5CUSxLQUFLO0lBRTlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSTtJQUVoQixNQUFNLHNFQUNKSiwwREFBTTtRQUFDUyxLQUFLLEVBQUMsQ0FBVzs7Ozs7Ozt1RkFFdkJDLENBQUc7WUFBQ0MsU0FBUyxFQUFFWiwrRUFBZ0I7Ozs7Ozs7NEZBQzlCVyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVaLDhFQUFlOzs7Ozs7Ozt5RkFDN0JHLDZEQUFJOzs7Ozs7Ozt5RkFDSkQsb0VBQUs7Ozs7Ozs7Ozs7OztBQUtYLENBQUM7R0FoQnVCRSxTQUFTOztRQUNHTCx3REFBTzs7O0tBRG5CSyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcz8wZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBHYW1lcyBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lcy1ncmlkL0dhbWVzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvTWVudVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cdGNvbnN0IHsgdXNlciwgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlVXNlcigpO1xyXG5cclxuXHRjb25zb2xlLmxvZyh1c2VyKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZT0nRGFzaGJvYXJkJyA+XHJcblx0XHRcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkdyaWR9PlxyXG5cdFx0XHRcdFx0PE1lbnUgLz5cclxuXHRcdFx0XHRcdDxHYW1lcyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcblxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVVzZXIiLCJzdHlsZXMiLCJMYXlvdXQiLCJHYW1lcyIsIk1lbnUiLCJEYXNoYm9hcmQiLCJ1c2VyIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

});