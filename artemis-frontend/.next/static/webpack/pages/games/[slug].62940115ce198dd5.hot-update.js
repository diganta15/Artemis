"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/games/[slug]",{

/***/ "./components/game-details/GameDetails.js":
/*!************************************************!*\
  !*** ./components/game-details/GameDetails.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameDetails\": function() { return /* binding */ GameDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GameDetails.module.css */ \"./styles/GameDetails.module.css\");\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar GameDetails = function(param) {\n    var game = param.game;\n    var _this2 = _this, _this1 = _this;\n    var name = game.name, background_image = game.background_image, description = game.description, developers = game.developers, esrb_rating = game.esrb_rating, publishers = game.publishers, rating = game.rating, stores = game.stores, metacritic = game.metacritic;\n    var metacriticRatingStyle = {\n        color: \"white\"\n    };\n    if (metacritic < 40) {\n        metacriticRatingStyle.color = \"red\";\n    }\n    if (metacritic >= 40 && metacritic < 60) {\n        metacriticRatingStyle.color = \"orange\";\n    }\n    if (metacritic >= 60) {\n        metacriticRatingStyle.color = \"#37D8B7\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n            lineNumber: 31,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 32,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: background_image,\n                    height: 500,\n                    width: 900,\n                    className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    __source: {\n                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 41,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: game.name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                dangerouslySetInnerHTML: {\n                    __html: description\n                },\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 42,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 45,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 46,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Developed By\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 47,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: developers.map(function(developer) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developer),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 7\n                                },\n                                __self: _this2,\n                                children: developer.name\n                            }, developer.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publishers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 55,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 56,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Published By\"\n                    }),\n                    publishers.map(function(publisher) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publisher),\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 58,\n                                columnNumber: 6\n                            },\n                            __self: _this1,\n                            children: publisher.name\n                        }, publisher.id);\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratingsDiv),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 61,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 62,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Ratings\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().metacritic),\n                        style: metacriticRatingStyle,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 63,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: metacritic\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ratings\",\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 66,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 67,\n                                columnNumber: 6\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    __source: {\n                                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 7\n                                    },\n                                    __self: _this,\n                                    children: \"Exceptional\"\n                                }),\n                                ratings\n                            ]\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = GameDetails;\nvar _c;\n$RefreshReg$(_c, \"GameDetails\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQjtBQUNVOztBQUNqRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2pDLEdBQUssQ0FDSkMsSUFBSSxHQVNERCxJQUFJLENBVFBDLElBQUksRUFDSkMsZ0JBQWdCLEdBUWJGLElBQUksQ0FSUEUsZ0JBQWdCLEVBQ2hCQyxXQUFXLEdBT1JILElBQUksQ0FQUEcsV0FBVyxFQUNYQyxVQUFVLEdBTVBKLElBQUksQ0FOUEksVUFBVSxFQUNWQyxXQUFXLEdBS1JMLElBQUksQ0FMUEssV0FBVyxFQUNYQyxVQUFVLEdBSVBOLElBQUksQ0FKUE0sVUFBVSxFQUNWQyxNQUFNLEdBR0hQLElBQUksQ0FIUE8sTUFBTSxFQUNOQyxNQUFNLEdBRUhSLElBQUksQ0FGUFEsTUFBTSxFQUNOQyxVQUFVLEdBQ1BULElBQUksQ0FEUFMsVUFBVTtJQUdYLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUcsQ0FBQztRQUM5QkMsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDckJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBSztJQUNwQyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxJQUFJQSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDekNDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUTtJQUN2QyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7UUFDdEJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUztJQUN4QyxDQUFDO0lBRUQsTUFBTSx1RUFDSkMsQ0FBRztRQUFDQyxTQUFTLEVBQUVmLGlGQUFnQjs7Ozs7Ozs7aUZBQzlCYyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVmLG9GQUFtQjs7Ozs7OzsrRkFDakNGLG1EQUFLO29CQUNMb0IsR0FBRyxFQUFFZCxnQkFBZ0I7b0JBQ3JCZSxNQUFNLEVBQUUsR0FBRztvQkFDWEMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZMLFNBQVMsRUFBRWYsNkVBQVk7Ozs7Ozs7OztpRkFJeEJzQixDQUFFO2dCQUFDUCxTQUFTLEVBQUVmLDRFQUFXOzs7Ozs7OzBCQUFHRSxJQUFJLENBQUNDLElBQUk7O2lGQUNyQ1csQ0FBRztnQkFDSEMsU0FBUyxFQUFFZixtRkFBa0I7Z0JBQzdCdUIsdUJBQXVCLEVBQUUsQ0FBQztvQkFBQ0MsTUFBTSxFQUFFbkIsV0FBVztnQkFBQyxDQUFDOzs7Ozs7OztrRkFDaERTLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWYsa0ZBQWlCOzs7Ozs7Ozt5RkFDL0J5QixDQUFFOzs7Ozs7O2tDQUFDLENBQVk7O3lGQUNmQyxDQUFJOzs7Ozs7O2tDQUNIcEIsVUFBVSxDQUFDcUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsU0FBUzswQ0FDekIsTUFBTSx3REFBTEMsQ0FBQztnQ0FBQ2QsU0FBUyxFQUFFZixpRkFBZ0I7Ozs7Ozs7MENBQzVCNEIsU0FBUyxDQUFDekIsSUFBSTsrQkFEcUJ5QixTQUFTLENBQUNFLEVBQUU7Ozs7O2tGQU1uRGhCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWYsa0ZBQWlCOzs7Ozs7Ozt5RkFDL0J5QixDQUFFOzs7Ozs7O2tDQUFDLENBQVk7O29CQUNmakIsVUFBVSxDQUFDbUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEksU0FBUztzQ0FDekIsTUFBTSx3REFBTEYsQ0FBQzs0QkFBb0JkLFNBQVMsRUFBRWYsaUZBQWdCOzs7Ozs7O3NDQUFHK0IsU0FBUyxDQUFDNUIsSUFBSTsyQkFBMUQ0QixTQUFTLENBQUNELEVBQUU7Ozs7a0ZBR3JCaEIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFZixrRkFBaUI7Ozs7Ozs7O3lGQUMvQmlDLENBQUU7Ozs7Ozs7a0NBQUMsQ0FBTzs7eUZBQ1ZKLENBQUM7d0JBQUNkLFNBQVMsRUFBRWYsa0ZBQWlCO3dCQUFFa0MsS0FBSyxFQUFFdEIscUJBQXFCOzs7Ozs7O2tDQUMzREQsVUFBVTs7eUZBRVhHLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7O3dHQUN0QkQsQ0FBRzs7Ozs7Ozs7cUdBQ0ZlLENBQUM7Ozs7Ozs7OENBQUMsQ0FBVzs7Z0NBQ2JNLE9BQU87Ozs7Ozs7O0FBTWQsQ0FBQztLQXZFWWxDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLWRldGFpbHMvR2FtZURldGFpbHMuanM/ZTBjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSBcInJlYWN0LWltYWdlLWdhbGxlcnlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9HYW1lRGV0YWlscy5tb2R1bGUuY3NzXCI7XG5leHBvcnQgY29uc3QgR2FtZURldGFpbHMgPSAoeyBnYW1lIH0pID0+IHtcblx0Y29uc3Qge1xuXHRcdG5hbWUsXG5cdFx0YmFja2dyb3VuZF9pbWFnZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkZXZlbG9wZXJzLFxuXHRcdGVzcmJfcmF0aW5nLFxuXHRcdHB1Ymxpc2hlcnMsXG5cdFx0cmF0aW5nLFxuXHRcdHN0b3Jlcyxcblx0XHRtZXRhY3JpdGljLFxuXHR9ID0gZ2FtZTtcblxuXHRjb25zdCBtZXRhY3JpdGljUmF0aW5nU3R5bGUgPSB7XG5cdFx0Y29sb3I6IFwid2hpdGVcIixcblx0fTtcblx0aWYgKG1ldGFjcml0aWMgPCA0MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cdH1cblx0aWYgKG1ldGFjcml0aWMgPj0gNDAgJiYgbWV0YWNyaXRpYyA8IDYwKSB7XG5cdFx0bWV0YWNyaXRpY1JhdGluZ1N0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcblx0fVxuXHRpZiAobWV0YWNyaXRpYyA+PSA2MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwiIzM3RDhCN1wiO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlV3JhcHBlcn0+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdHNyYz17YmFja2dyb3VuZF9pbWFnZX1cblx0XHRcdFx0XHRoZWlnaHQ9ezUwMH1cblx0XHRcdFx0XHR3aWR0aD17OTAwfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57Z2FtZS5uYW1lfTwvaDE+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19PjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXZlbG9wZXJzfT5cblx0XHRcdFx0PGgyPkRldmVsb3BlZCBCeTwvaDI+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdHtkZXZlbG9wZXJzLm1hcCgoZGV2ZWxvcGVyKSA9PiAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXZlbG9wZXJ9IGtleT17ZGV2ZWxvcGVyLmlkfT5cblx0XHRcdFx0XHRcdFx0e2RldmVsb3Blci5uYW1lfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHVibGlzaGVyc30+XG5cdFx0XHRcdDxoMj5QdWJsaXNoZWQgQnk8L2gyPlxuXHRcdFx0XHR7cHVibGlzaGVycy5tYXAoKHB1Ymxpc2hlcikgPT4gKFxuXHRcdFx0XHRcdDxwIGtleT17cHVibGlzaGVyLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5wdWJsaXNoZXJ9PntwdWJsaXNoZXIubmFtZX08L3A+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ3NEaXZ9PlxuXHRcdFx0XHQ8aDM+UmF0aW5nczwvaDM+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFjcml0aWN9IHN0eWxlPXttZXRhY3JpdGljUmF0aW5nU3R5bGV9PlxuXHRcdFx0XHRcdHttZXRhY3JpdGljfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cD5FeGNlcHRpb25hbDwvcD5cblx0XHRcdFx0XHRcdHtyYXRpbmdzfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkltYWdlR2FsbGVyeSIsInN0eWxlcyIsIkdhbWVEZXRhaWxzIiwiZ2FtZSIsIm5hbWUiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiZGVzY3JpcHRpb24iLCJkZXZlbG9wZXJzIiwiZXNyYl9yYXRpbmciLCJwdWJsaXNoZXJzIiwicmF0aW5nIiwic3RvcmVzIiwibWV0YWNyaXRpYyIsIm1ldGFjcml0aWNSYXRpbmdTdHlsZSIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1hZ2VXcmFwcGVyIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWFnZSIsImgxIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMiIsInNwYW4iLCJtYXAiLCJkZXZlbG9wZXIiLCJwIiwiaWQiLCJwdWJsaXNoZXIiLCJyYXRpbmdzRGl2IiwiaDMiLCJzdHlsZSIsInJhdGluZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-details/GameDetails.js\n");

/***/ })

});