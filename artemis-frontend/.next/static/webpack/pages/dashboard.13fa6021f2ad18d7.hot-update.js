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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Dashboard.module.css */ \"./styles/Dashboard.module.css\");\n/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_games_grid_Games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/games-grid/Games */ \"./components/games-grid/Games.js\");\n/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu/Menu */ \"./components/menu/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser)(), user = ref.user, isLoading = ref.isLoading, error = ref.error;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        tit: true,\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/pages/dashboard.js\",\n            lineNumber: 12,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            __source: {\n                fileName: \"/home/diganta15/code/artemis/artemis-frontend/pages/dashboard.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainGrid),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/pages/dashboard.js\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_menu_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/pages/dashboard.js\",\n                            lineNumber: 15,\n                            columnNumber: 6\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_games_grid_Games__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/pages/dashboard.js\",\n                            lineNumber: 16,\n                            columnNumber: 6\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Dashboard, \"HS4ZDCYBfte8Xd6ooaGKP8za5HY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNZO0FBQ007QUFDVjtBQUNTO0FBQ1I7O0FBRTNCLFFBQVEsQ0FBQ00sU0FBUyxHQUFHLENBQUM7O0lBQ3BDLEdBQUssQ0FBOEJMLEdBQVMsR0FBVEEsNERBQU8sSUFBbENNLElBQUksR0FBdUJOLEdBQVMsQ0FBcENNLElBQUksRUFBRUMsU0FBUyxHQUFZUCxHQUFTLENBQTlCTyxTQUFTLEVBQUVDLEtBQUssR0FBS1IsR0FBUyxDQUFuQlEsS0FBSztJQUU5QixNQUFNLHNFQUNKTiwwREFBTTtRQUFDTyxHQUFHOzs7Ozs7O3VGQUNUQyxDQUFHO1lBQUNDLFNBQVMsRUFBRVYsK0VBQWdCOzs7Ozs7OzRGQUM5QlMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFViw4RUFBZTs7Ozs7Ozs7eUZBQzdCRyw2REFBSTs7Ozs7Ozs7eUZBQ0pELG9FQUFLOzs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO0dBYnVCRSxTQUFTOztRQUNHTCx3REFBTzs7O0tBRG5CSyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcz8wZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgR2FtZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZXMtZ3JpZC9HYW1lc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudS9NZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblx0Y29uc3QgeyB1c2VyLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VVc2VyKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0IHRpdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluR3JpZH0+XG5cdFx0XHRcdFx0PE1lbnUgLz5cblx0XHRcdFx0XHQ8R2FtZXMgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VVc2VyIiwic3R5bGVzIiwiTGF5b3V0IiwiR2FtZXMiLCJNZW51IiwiRGFzaGJvYXJkIiwidXNlciIsImlzTG9hZGluZyIsImVycm9yIiwidGl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbkdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

});