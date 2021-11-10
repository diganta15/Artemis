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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamesItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform */ \"./components/games-grid/Platform.js\");\n/* harmony import */ var _styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GamesItem.module.css */ \"./styles/GamesItem.module.css\");\n/* harmony import */ var _styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction GamesItem(param) {\n    var item = param.item;\n    var _this = this;\n    var parent_platforms = item.parent_platforms, released = item.released;\n    var rating = item.rating;\n    var date = new Date(released);\n    var style = {\n        color: \"white\",\n        fontFamily: \"Nunito,sans-serif\",\n        fontSize: \"17px\"\n    };\n    if (rating < 2) {\n        style.color = \"red\";\n    }\n    if (rating < 3.7 && rating > 2) {\n        style.color = \"yellow\";\n    }\n    if (rating > 3.7) {\n        style.color = \"green\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n            lineNumber: 27,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/hello\",\n            __source: {\n                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: item.background_image,\n                        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                        width: 350,\n                        height: 170,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                            lineNumber: 37,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: item.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                style: style,\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: item.rating\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().released),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    \"Released:\",\n                                    \" \",\n                                    date.getDate() + \"/\" + date.getMonth() + \"/\" + date.getFullYear(),\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().metacriticRating),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                    __source: {\n                                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 8\n                                    },\n                                    __self: this,\n                                    children: [\n                                        \"Metacritic: \",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            },\n                                            __self: this,\n                                            children: item.metacritic\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().platforms),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: \"Platforms: \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().platform),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \" \",\n                                            parent_platforms.map(function(platform) {\n                                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Platform__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    slug: platform.platform.slug,\n                                                    __source: {\n                                                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 10\n                                                    },\n                                                    __self: _this\n                                                }, platform.platform.id);\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().esrb),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: \"ESRB: \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: item.esrb_rating.name\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_GamesItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().playtime),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: \"Play Time: \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/games-grid/GamesItem.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 8\n                                        },\n                                        __self: this,\n                                        children: [\n                                            item.playtime,\n                                            \" hrs\"\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = GamesItem;\nvar _c;\n$RefreshReg$(_c, \"GamesItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWVzLWdyaWQvR2FtZXNJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNHO0FBQ3FCO0FBQzFCO0FBQ2IsUUFBUSxDQUFDSSxTQUFTLENBQUMsS0FBUSxFQUFFLENBQUM7UUFBVEMsSUFBSSxHQUFOLEtBQVEsQ0FBTkEsSUFBSTs7SUFDdkMsR0FBSyxDQUFHQyxnQkFBZ0IsR0FBZUQsSUFBSSxDQUFuQ0MsZ0JBQWdCLEVBQUVDLFFBQVEsR0FBS0YsSUFBSSxDQUFqQkUsUUFBUTtJQUNsQyxHQUFLLENBQUdDLE1BQU0sR0FBS0gsSUFBSSxDQUFmRyxNQUFNO0lBRWQsR0FBSyxDQUFDQyxJQUFJLEdBQUcsR0FBRyxDQUFDQyxJQUFJLENBQUNILFFBQVE7SUFFOUIsR0FBSyxDQUFDSSxLQUFLLEdBQUcsQ0FBQztRQUNkQyxLQUFLLEVBQUUsQ0FBTztRQUNkQyxVQUFVLEVBQUUsQ0FBbUI7UUFDL0JDLFFBQVEsRUFBRSxDQUFNO0lBQ2pCLENBQUM7SUFFRCxFQUFFLEVBQUVOLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNoQkcsS0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBSztJQUNwQixDQUFDO0lBQ0QsRUFBRSxFQUFFSixNQUFNLEdBQUcsR0FBRyxJQUFJQSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDaENHLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQVE7SUFDdkIsQ0FBQztJQUNELEVBQUUsRUFBRUosTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2xCRyxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFPO0lBQ3RCLENBQUM7SUFDRCxNQUFNLHNFQUNKRyxDQUFHO1FBQUNDLFNBQVMsRUFBRWQsMEVBQVc7Ozs7Ozs7dUZBQ3pCQyxrREFBSTtZQUFDZSxJQUFJLEVBQUMsQ0FBUTs7Ozs7Ozs0RkFDakJDLENBQUM7Ozs7Ozs7O3lGQUNBbkIsbURBQUs7d0JBQ0xvQixHQUFHLEVBQUVmLElBQUksQ0FBQ2dCLGdCQUFnQjt3QkFDMUJMLFNBQVMsRUFBRWQsMkVBQVk7d0JBQ3ZCcUIsS0FBSyxFQUFFLEdBQUc7d0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7Ozs7OzswRkFHWFQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFZCw2RUFBYzs7Ozs7Ozs7aUdBQzVCd0IsQ0FBRTtnQ0FBQ1YsU0FBUyxFQUFFZCwwRUFBVzs7Ozs7OzswQ0FBR0csSUFBSSxDQUFDc0IsSUFBSTs7aUdBQ3JDQyxDQUFFO2dDQUFDakIsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7OzBDQUFHTixJQUFJLENBQUNHLE1BQU07O2tHQUM3QnFCLENBQUM7Z0NBQUNiLFNBQVMsRUFBRWQsOEVBQWU7Ozs7Ozs7O29DQUFFLENBQ3JCO29DQUFDLENBQUc7b0NBQ1pPLElBQUksQ0FBQ3FCLE9BQU8sS0FDWixDQUFHLEtBQ0hyQixJQUFJLENBQUNzQixRQUFRLEtBQ2IsQ0FBRyxLQUNIdEIsSUFBSSxDQUFDdUIsV0FBVztvQ0FBSSxDQUFHOzs7aUdBRXhCakIsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFZCxzRkFBdUI7Ozs7Ozs7Z0hBQ3JDMkIsQ0FBQzs7Ozs7Ozs7d0NBQUMsQ0FDVTs2R0FBQ0ssQ0FBSTs7Ozs7OztzREFBRTdCLElBQUksQ0FBQzhCLFVBQVU7Ozs7O2tHQUduQ3BCLENBQUc7Z0NBQUNDLFNBQVMsRUFBRWQsK0VBQWdCOzs7Ozs7Ozt5R0FDOUIyQixDQUFDOzs7Ozs7O2tEQUFDLENBQVc7OzBHQUNiSyxDQUFJO3dDQUFDbEIsU0FBUyxFQUFFZCw4RUFBZTs7Ozs7Ozs7NENBQzlCLENBQUc7NENBQ0hJLGdCQUFnQixDQUFDZ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEQsUUFBUTs4REFDOUIsTUFBTSx3REFBTHBDLGlEQUFRO29EQUVSc0MsSUFBSSxFQUFFRixRQUFRLENBQUNBLFFBQVEsQ0FBQ0UsSUFBSTs7Ozs7OzttREFEdkJGLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDRyxFQUFFOzs7Ozs7a0dBTTVCekIsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFZCwwRUFBVzs7Ozs7Ozs7eUdBQ3pCMkIsQ0FBQzs7Ozs7OztrREFBQyxDQUFNOzt5R0FDUkssQ0FBSTs7Ozs7OztrREFBRTdCLElBQUksQ0FBQ3FDLFdBQVcsQ0FBQ2YsSUFBSTs7OztrR0FFNUJaLENBQUc7Z0NBQUNDLFNBQVMsRUFBRWQsOEVBQWU7Ozs7Ozs7O3lHQUM3QjJCLENBQUM7Ozs7Ozs7a0RBQUMsQ0FBVzs7MEdBQ2JLLENBQUk7Ozs7Ozs7OzRDQUFFN0IsSUFBSSxDQUFDc0MsUUFBUTs0Q0FBQyxDQUFJOzs7Ozs7Ozs7OztBQU9oQyxDQUFDO0tBekV1QnZDLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lcy1ncmlkL0dhbWVzSXRlbS5qcz8yNzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL1BsYXRmb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvR2FtZXNJdGVtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVzSXRlbSh7IGl0ZW0gfSkge1xuXHRjb25zdCB7IHBhcmVudF9wbGF0Zm9ybXMsIHJlbGVhc2VkIH0gPSBpdGVtO1xuXHRjb25zdCB7IHJhdGluZyB9ID0gaXRlbTtcblxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUocmVsZWFzZWQpO1xuXG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0Zm9udEZhbWlseTogXCJOdW5pdG8sc2Fucy1zZXJpZlwiLFxuXHRcdGZvbnRTaXplOiBcIjE3cHhcIixcblx0fTtcblxuXHRpZiAocmF0aW5nIDwgMikge1xuXHRcdHN0eWxlLmNvbG9yID0gXCJyZWRcIjtcblx0fVxuXHRpZiAocmF0aW5nIDwgMy43ICYmIHJhdGluZyA+IDIpIHtcblx0XHRzdHlsZS5jb2xvciA9IFwieWVsbG93XCI7XG5cdH1cblx0aWYgKHJhdGluZyA+IDMuNykge1xuXHRcdHN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cblx0XHRcdDxMaW5rIGhyZWY9Jy9oZWxsbyc+XG5cdFx0XHRcdDxhPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0c3JjPXtpdGVtLmJhY2tncm91bmRfaW1hZ2V9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cblx0XHRcdFx0XHRcdHdpZHRoPXszNTB9XG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezE3MH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57aXRlbS5uYW1lfTwvaDM+XG5cdFx0XHRcdFx0XHQ8aDIgc3R5bGU9e3N0eWxlfT57aXRlbS5yYXRpbmd9PC9oMj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLnJlbGVhc2VkfT5cblx0XHRcdFx0XHRcdFx0UmVsZWFzZWQ6e1wiIFwifVxuXHRcdFx0XHRcdFx0XHR7ZGF0ZS5nZXREYXRlKCkgK1xuXHRcdFx0XHRcdFx0XHRcdFwiL1wiICtcblx0XHRcdFx0XHRcdFx0XHRkYXRlLmdldE1vbnRoKCkgK1xuXHRcdFx0XHRcdFx0XHRcdFwiL1wiICtcblx0XHRcdFx0XHRcdFx0XHRkYXRlLmdldEZ1bGxZZWFyKCl9e1wiIFwifVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhY3JpdGljUmF0aW5nfT5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0TWV0YWNyaXRpYzogPHNwYW4+e2l0ZW0ubWV0YWNyaXRpY308L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF0Zm9ybXN9PlxuXHRcdFx0XHRcdFx0XHQ8cD5QbGF0Zm9ybXM6IDwvcD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucGxhdGZvcm19PlxuXHRcdFx0XHRcdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHR7cGFyZW50X3BsYXRmb3Jtcy5tYXAoKHBsYXRmb3JtKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UGxhdGZvcm1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwbGF0Zm9ybS5wbGF0Zm9ybS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17cGxhdGZvcm0ucGxhdGZvcm0uc2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lc3JifT5cblx0XHRcdFx0XHRcdFx0PHA+RVNSQjogPC9wPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbS5lc3JiX3JhdGluZy5uYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5dGltZX0+XG5cdFx0XHRcdFx0XHRcdDxwPlBsYXkgVGltZTogPC9wPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbS5wbGF5dGltZX0gaHJzPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlBsYXRmb3JtIiwic3R5bGVzIiwiTGluayIsIkdhbWVzSXRlbSIsIml0ZW0iLCJwYXJlbnRfcGxhdGZvcm1zIiwicmVsZWFzZWQiLCJyYXRpbmciLCJkYXRlIiwiRGF0ZSIsInN0eWxlIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaHJlZiIsImEiLCJzcmMiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImRldGFpbHMiLCJoMyIsIm5hbWUiLCJoMiIsInAiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm1ldGFjcml0aWNSYXRpbmciLCJzcGFuIiwibWV0YWNyaXRpYyIsInBsYXRmb3JtcyIsInBsYXRmb3JtIiwibWFwIiwic2x1ZyIsImlkIiwiZXNyYiIsImVzcmJfcmF0aW5nIiwicGxheXRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/games-grid/GamesItem.js\n");

/***/ })

});