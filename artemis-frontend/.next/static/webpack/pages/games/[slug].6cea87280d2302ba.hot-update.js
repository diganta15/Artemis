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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameDetails\": function() { return /* binding */ GameDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GameDetails.module.css */ \"./styles/GameDetails.module.css\");\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar GameDetails = function(param) {\n    var game = param.game;\n    var _this2 = _this, _this1 = _this;\n    var name = game.name, background_image = game.background_image, description = game.description, developers = game.developers, esrb_rating = game.esrb_rating, publishers = game.publishers, rating = game.rating, ratings = game.ratings, stores = game.stores, metacritic = game.metacritic;\n    var metacriticRatingStyle = {\n        color: \"white\"\n    };\n    if (metacritic < 40) {\n        metacriticRatingStyle.color = \"red\";\n    }\n    if (metacritic >= 40 && metacritic < 60) {\n        metacriticRatingStyle.color = \"orange\";\n    }\n    if (metacritic >= 60) {\n        metacriticRatingStyle.color = \"#37D8B7\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n            lineNumber: 32,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 33,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: background_image,\n                    height: 500,\n                    width: 900,\n                    className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    __source: {\n                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 42,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: game.name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                dangerouslySetInnerHTML: {\n                    __html: description\n                },\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 43,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 46,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 47,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Developed By\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 48,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: developers.map(function(developer) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developer),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 7\n                                },\n                                __self: _this2,\n                                children: developer.name\n                            }, developer.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publishers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 56,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 57,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Published By\"\n                    }),\n                    publishers.map(function(publisher) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publisher),\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 59,\n                                columnNumber: 6\n                            },\n                            __self: _this1,\n                            children: publisher.name\n                        }, publisher.id);\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratingsDiv),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 64,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 65,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Ratings\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().metacritic),\n                        style: metacriticRatingStyle,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 66,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: metacritic\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"ratings\",\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 69,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Exceptional\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[0].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Recommended\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[1].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Meh\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[2].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Skip\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[3].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = GameDetails;\nvar _c;\n$RefreshReg$(_c, \"GameDetails\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQjtBQUNVOztBQUNqRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2pDLEdBQUssQ0FDSkMsSUFBSSxHQVVERCxJQUFJLENBVlBDLElBQUksRUFDSkMsZ0JBQWdCLEdBU2JGLElBQUksQ0FUUEUsZ0JBQWdCLEVBQ2hCQyxXQUFXLEdBUVJILElBQUksQ0FSUEcsV0FBVyxFQUNYQyxVQUFVLEdBT1BKLElBQUksQ0FQUEksVUFBVSxFQUNWQyxXQUFXLEdBTVJMLElBQUksQ0FOUEssV0FBVyxFQUNYQyxVQUFVLEdBS1BOLElBQUksQ0FMUE0sVUFBVSxFQUNWQyxNQUFNLEdBSUhQLElBQUksQ0FKUE8sTUFBTSxFQUNOQyxPQUFPLEdBR0pSLElBQUksQ0FIUFEsT0FBTyxFQUNQQyxNQUFNLEdBRUhULElBQUksQ0FGUFMsTUFBTSxFQUNOQyxVQUFVLEdBQ1BWLElBQUksQ0FEUFUsVUFBVTtJQUdYLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUcsQ0FBQztRQUM5QkMsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDckJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBSztJQUNwQyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxJQUFJQSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDekNDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUTtJQUN2QyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7UUFDdEJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUztJQUN4QyxDQUFDO0lBRUQsTUFBTSx1RUFDSkMsQ0FBRztRQUFDQyxTQUFTLEVBQUVoQixpRkFBZ0I7Ozs7Ozs7O2lGQUM5QmUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFaEIsb0ZBQW1COzs7Ozs7OytGQUNqQ0YsbURBQUs7b0JBQ0xxQixHQUFHLEVBQUVmLGdCQUFnQjtvQkFDckJnQixNQUFNLEVBQUUsR0FBRztvQkFDWEMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZMLFNBQVMsRUFBRWhCLDZFQUFZOzs7Ozs7Ozs7aUZBSXhCdUIsQ0FBRTtnQkFBQ1AsU0FBUyxFQUFFaEIsNEVBQVc7Ozs7Ozs7MEJBQUdFLElBQUksQ0FBQ0MsSUFBSTs7aUZBQ3JDWSxDQUFHO2dCQUNIQyxTQUFTLEVBQUVoQixtRkFBa0I7Z0JBQzdCd0IsdUJBQXVCLEVBQUUsQ0FBQztvQkFBQ0MsTUFBTSxFQUFFcEIsV0FBVztnQkFBQyxDQUFDOzs7Ozs7OztrRkFDaERVLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWhCLGtGQUFpQjs7Ozs7Ozs7eUZBQy9CMEIsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFZOzt5RkFDZkMsQ0FBSTs7Ozs7OztrQ0FDSHJCLFVBQVUsQ0FBQ3NCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFNBQVM7MENBQ3pCLE1BQU0sd0RBQUxDLENBQUM7Z0NBQUNkLFNBQVMsRUFBRWhCLGlGQUFnQjs7Ozs7OzswQ0FDNUI2QixTQUFTLENBQUMxQixJQUFJOytCQURxQjBCLFNBQVMsQ0FBQ0UsRUFBRTs7Ozs7a0ZBTW5EaEIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFaEIsa0ZBQWlCOzs7Ozs7Ozt5RkFDL0IwQixDQUFFOzs7Ozs7O2tDQUFDLENBQVk7O29CQUNmbEIsVUFBVSxDQUFDb0IsR0FBRyxDQUFDLFFBQVEsQ0FBUEksU0FBUztzQ0FDekIsTUFBTSx3REFBTEYsQ0FBQzs0QkFBb0JkLFNBQVMsRUFBRWhCLGlGQUFnQjs7Ozs7OztzQ0FDL0NnQyxTQUFTLENBQUM3QixJQUFJOzJCQURSNkIsU0FBUyxDQUFDRCxFQUFFOzs7O2tGQUtyQmhCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWhCLGtGQUFpQjs7Ozs7Ozs7eUZBQy9Ca0MsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFPOzt5RkFDVkosQ0FBQzt3QkFBQ2QsU0FBUyxFQUFFaEIsa0ZBQWlCO3dCQUFFbUMsS0FBSyxFQUFFdEIscUJBQXFCOzs7Ozs7O2tDQUMzREQsVUFBVTs7MEZBRVhHLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztrR0FDdEJELENBQUc7Ozs7Ozs7O3lHQUNGZSxDQUFDOzs7Ozs7O2tEQUFDLENBQVc7OzBHQUNiSCxDQUFJOzs7Ozs7Ozs0Q0FBRWpCLE9BQU8sQ0FBQyxDQUFDLEVBQUUwQixPQUFPOzRDQUFDLENBQUM7Ozs7O2tHQUUzQnJCLENBQUc7Ozs7Ozs7O3lHQUNGZSxDQUFDOzs7Ozs7O2tEQUFDLENBQVc7OzBHQUNiSCxDQUFJOzs7Ozs7Ozs0Q0FBRWpCLE9BQU8sQ0FBQyxDQUFDLEVBQUUwQixPQUFPOzRDQUFDLENBQUM7Ozs7O2tHQUUzQnJCLENBQUc7Ozs7Ozs7O3lHQUNGZSxDQUFDOzs7Ozs7O2tEQUFDLENBQUc7OzBHQUNMSCxDQUFJOzs7Ozs7Ozs0Q0FBRWpCLE9BQU8sQ0FBQyxDQUFDLEVBQUUwQixPQUFPOzRDQUFDLENBQUM7Ozs7O2tHQUUzQnJCLENBQUc7Ozs7Ozs7O3lHQUNGZSxDQUFDOzs7Ozs7O2tEQUFDLENBQUk7OzBHQUNOSCxDQUFJOzs7Ozs7Ozs0Q0FBRWpCLE9BQU8sQ0FBQyxDQUFDLEVBQUUwQixPQUFPOzRDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FBTWpDLENBQUM7S0F0RlluQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1kZXRhaWxzL0dhbWVEZXRhaWxzLmpzP2UwY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gXCJyZWFjdC1pbWFnZS1nYWxsZXJ5XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvR2FtZURldGFpbHMubW9kdWxlLmNzc1wiO1xuZXhwb3J0IGNvbnN0IEdhbWVEZXRhaWxzID0gKHsgZ2FtZSB9KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRuYW1lLFxuXHRcdGJhY2tncm91bmRfaW1hZ2UsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZGV2ZWxvcGVycyxcblx0XHRlc3JiX3JhdGluZyxcblx0XHRwdWJsaXNoZXJzLFxuXHRcdHJhdGluZyxcblx0XHRyYXRpbmdzLFxuXHRcdHN0b3Jlcyxcblx0XHRtZXRhY3JpdGljLFxuXHR9ID0gZ2FtZTtcblxuXHRjb25zdCBtZXRhY3JpdGljUmF0aW5nU3R5bGUgPSB7XG5cdFx0Y29sb3I6IFwid2hpdGVcIixcblx0fTtcblx0aWYgKG1ldGFjcml0aWMgPCA0MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cdH1cblx0aWYgKG1ldGFjcml0aWMgPj0gNDAgJiYgbWV0YWNyaXRpYyA8IDYwKSB7XG5cdFx0bWV0YWNyaXRpY1JhdGluZ1N0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcblx0fVxuXHRpZiAobWV0YWNyaXRpYyA+PSA2MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwiIzM3RDhCN1wiO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlV3JhcHBlcn0+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdHNyYz17YmFja2dyb3VuZF9pbWFnZX1cblx0XHRcdFx0XHRoZWlnaHQ9ezUwMH1cblx0XHRcdFx0XHR3aWR0aD17OTAwfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57Z2FtZS5uYW1lfTwvaDE+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19PjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXZlbG9wZXJzfT5cblx0XHRcdFx0PGgyPkRldmVsb3BlZCBCeTwvaDI+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdHtkZXZlbG9wZXJzLm1hcCgoZGV2ZWxvcGVyKSA9PiAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXZlbG9wZXJ9IGtleT17ZGV2ZWxvcGVyLmlkfT5cblx0XHRcdFx0XHRcdFx0e2RldmVsb3Blci5uYW1lfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHVibGlzaGVyc30+XG5cdFx0XHRcdDxoMj5QdWJsaXNoZWQgQnk8L2gyPlxuXHRcdFx0XHR7cHVibGlzaGVycy5tYXAoKHB1Ymxpc2hlcikgPT4gKFxuXHRcdFx0XHRcdDxwIGtleT17cHVibGlzaGVyLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5wdWJsaXNoZXJ9PlxuXHRcdFx0XHRcdFx0e3B1Ymxpc2hlci5uYW1lfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nc0Rpdn0+XG5cdFx0XHRcdDxoMz5SYXRpbmdzPC9oMz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMubWV0YWNyaXRpY30gc3R5bGU9e21ldGFjcml0aWNSYXRpbmdTdHlsZX0+XG5cdFx0XHRcdFx0e21ldGFjcml0aWN9XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JhdGluZ3MnPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cD5FeGNlcHRpb25hbDwvcD5cblx0XHRcdFx0XHRcdDxzcGFuPntyYXRpbmdzWzBdLnBlcmNlbnR9JTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHA+UmVjb21tZW5kZWQ8L3A+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57cmF0aW5nc1sxXS5wZXJjZW50fSU8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxwPk1laDwvcD5cblx0XHRcdFx0XHRcdDxzcGFuPntyYXRpbmdzWzJdLnBlcmNlbnR9JTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHA+U2tpcDwvcD5cblx0XHRcdFx0XHRcdDxzcGFuPntyYXRpbmdzWzNdLnBlcmNlbnR9JTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJJbWFnZUdhbGxlcnkiLCJzdHlsZXMiLCJHYW1lRGV0YWlscyIsImdhbWUiLCJuYW1lIiwiYmFja2dyb3VuZF9pbWFnZSIsImRlc2NyaXB0aW9uIiwiZGV2ZWxvcGVycyIsImVzcmJfcmF0aW5nIiwicHVibGlzaGVycyIsInJhdGluZyIsInJhdGluZ3MiLCJzdG9yZXMiLCJtZXRhY3JpdGljIiwibWV0YWNyaXRpY1JhdGluZ1N0eWxlIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbWFnZVdyYXBwZXIiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImltYWdlIiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgyIiwic3BhbiIsIm1hcCIsImRldmVsb3BlciIsInAiLCJpZCIsInB1Ymxpc2hlciIsInJhdGluZ3NEaXYiLCJoMyIsInN0eWxlIiwicGVyY2VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-details/GameDetails.js\n");

/***/ })

});