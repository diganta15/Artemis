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

/***/ "./components/games-grid/GamesItem.js":
/*!********************************************!*\
  !*** ./components/games-grid/GamesItem.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamesItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform */ \"./components/games-grid/Platform.js\");\n/* harmony import */ var _styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GamesItem.module.css */ \"./styles/GamesItem.module.css\");\n/* harmony import */ var _styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction GamesItem(param) {\n    var item = param.item;\n    var _this = this;\n    var parent_platforms = item.parent_platforms, released = item.released;\n    var rating = item.rating;\n    var date = new Date(released);\n    var style = {\n        color: \"white\",\n        fontFamily: \"Nunito,sans-serif\",\n        fontSize: \"17px\"\n    };\n    if (rating < 2) {\n        style.color = \"red\";\n    }\n    if (rating < 3.7 && rating > 2) {\n        style.color = \"#fcff82\";\n    }\n    if (rating > 3.7) {\n        style.color = \"#42b883\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n            lineNumber: 27,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/games/\".concat(item.slug),\n            __source: {\n                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: item.background_image,\n                        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                        width: 350,\n                        height: 170,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                            lineNumber: 37,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 8\n                                },\n                                __self: this,\n                                children: item.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                style: style,\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: item.rating\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().released),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    \"Released:\",\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().metacriticRating),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                    __source: {\n                                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 8\n                                    },\n                                    __self: this,\n                                    children: [\n                                        \"Metacritic: \",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 21\n                                            },\n                                            __self: this,\n                                            children: item.metacritic\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().platforms),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: \"Platforms: \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().platform),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \" \",\n                                            parent_platforms.map(function(platform) {\n                                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Platform__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    slug: platform.platform.slug,\n                                                    __source: {\n                                                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 10\n                                                    },\n                                                    __self: _this\n                                                }, platform.platform.id);\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().esrb),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: \"ESRB: \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: item.esrb_rating.name\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().playtime),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: \"Play Time: \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: [\n                                            item.playtime,\n                                            \" hrs\"\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = GamesItem;\nvar _c;\n$RefreshReg$(_c, \"GamesItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUk7Ozs7Ozs7a0RBQUU1QixJQUFJLENBQUNtQyxXQUFXLENBQUNYLElBQUk7Ozs7a0dBRTVCZCxDQUFHO2dDQUFDQyxTQUFTLEVBQUVkLDhFQUFlOzs7Ozs7Ozt5R0FDN0I2QixDQUFDOzs7Ozs7O2tEQUFDLENBQVc7OzBHQUNiRSxDQUFJOzs7Ozs7Ozs0Q0FBRTVCLElBQUksQ0FBQ29DLFFBQVE7NENBQUMsQ0FBSTs7Ozs7Ozs7Ozs7QUFPaEMsQ0FBQztLQXJFdUJyQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZXMtZ3JpZC9HYW1lc0l0ZW0uanM/Mjc2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0dhbWVzSXRlbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lc0l0ZW0oeyBpdGVtIH0pIHtcblx0Y29uc3QgeyBwYXJlbnRfcGxhdGZvcm1zLCByZWxlYXNlZCB9ID0gaXRlbTtcblx0Y29uc3QgeyByYXRpbmcgfSA9IGl0ZW07XG5cblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHJlbGVhc2VkKTtcblxuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdGZvbnRGYW1pbHk6IFwiTnVuaXRvLHNhbnMtc2VyaWZcIixcblx0XHRmb250U2l6ZTogXCIxN3B4XCIsXG5cdH07XG5cblx0aWYgKHJhdGluZyA8IDIpIHtcblx0XHRzdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cdH1cblx0aWYgKHJhdGluZyA8IDMuNyAmJiByYXRpbmcgPiAyKSB7XG5cdFx0c3R5bGUuY29sb3IgPSBcIiNmY2ZmODJcIjtcblx0fVxuXHRpZiAocmF0aW5nID4gMy43KSB7XG5cdFx0c3R5bGUuY29sb3IgPSBcIiM0MmI4ODNcIjtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG5cdFx0XHQ8TGluayBocmVmPXtgL2dhbWVzLyR7aXRlbS5zbHVnfWB9PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17aXRlbS5iYWNrZ3JvdW5kX2ltYWdlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG5cdFx0XHRcdFx0XHR3aWR0aD17MzUwfVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsxNzB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57aXRlbS5uYW1lfTwvaDM+XG5cdFx0XHRcdFx0XHQ8aDIgc3R5bGU9e3N0eWxlfT57aXRlbS5yYXRpbmd9PC9oMj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLnJlbGVhc2VkfT5cblx0XHRcdFx0XHRcdFx0UmVsZWFzZWQ6e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWV0YWNyaXRpY1JhdGluZ30+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdE1ldGFjcml0aWM6IDxzcGFuPntpdGVtLm1ldGFjcml0aWN9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhdGZvcm1zfT5cblx0XHRcdFx0XHRcdFx0PHA+UGxhdGZvcm1zOiA8L3A+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBsYXRmb3JtfT5cblx0XHRcdFx0XHRcdFx0XHR7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e3BhcmVudF9wbGF0Zm9ybXMubWFwKChwbGF0Zm9ybSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFBsYXRmb3JtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cGxhdGZvcm0ucGxhdGZvcm0uaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e3BsYXRmb3JtLnBsYXRmb3JtLnNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXNyYn0+XG5cdFx0XHRcdFx0XHRcdDxwPkVTUkI6IDwvcD5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW0uZXNyYl9yYXRpbmcubmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheXRpbWV9PlxuXHRcdFx0XHRcdFx0XHQ8cD5QbGF5IFRpbWU6IDwvcD5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW0ucGxheXRpbWV9IGhyczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJQbGF0Zm9ybSIsInN0eWxlcyIsIkxpbmsiLCJHYW1lc0l0ZW0iLCJpdGVtIiwicGFyZW50X3BsYXRmb3JtcyIsInJlbGVhc2VkIiwicmF0aW5nIiwiZGF0ZSIsIkRhdGUiLCJzdHlsZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImhyZWYiLCJzbHVnIiwiYSIsImxpbmsiLCJzcmMiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImRldGFpbHMiLCJoMyIsIm5hbWUiLCJoMiIsInAiLCJtZXRhY3JpdGljUmF0aW5nIiwic3BhbiIsIm1ldGFjcml0aWMiLCJwbGF0Zm9ybXMiLCJwbGF0Zm9ybSIsIm1hcCIsImlkIiwiZXNyYiIsImVzcmJfcmF0aW5nIiwicGxheXRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/games-grid/GamesItem.js\n");

/***/ })

});