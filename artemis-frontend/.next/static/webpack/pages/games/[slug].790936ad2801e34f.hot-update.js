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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameDetails\": function() { return /* binding */ GameDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GameDetails.module.css */ \"./styles/GameDetails.module.css\");\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar GameDetails = function(param) {\n    var game = param.game;\n    var _this4 = _this, _this1 = _this, _this2 = _this, _this3 = _this;\n    var name = game.name, background_image = game.background_image, description = game.description, developers = game.developers, esrb_rating = game.esrb_rating, publishers = game.publishers, platforms = game.platforms, rating = game.rating, tags = game.tags, ratings = game.ratings, stores = game.stores, metacritic = game.metacritic;\n    var metacriticRatingStyle = {\n        color: \"white\"\n    };\n    if (metacritic < 40) {\n        metacriticRatingStyle.color = \"red\";\n    }\n    if (metacritic >= 40 && metacritic < 60) {\n        metacriticRatingStyle.color = \"orange\";\n    }\n    if (metacritic >= 60) {\n        metacriticRatingStyle.color = \"#37D8B7\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n            lineNumber: 34,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 35,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: background_image,\n                    height: 500,\n                    width: 900,\n                    className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    __source: {\n                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 44,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                dangerouslySetInnerHTML: {\n                    __html: description\n                },\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 45,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().playtime),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 48,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 51,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 52,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Developed By\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 53,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: developers.map(function(developer) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developer),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 7\n                                },\n                                __self: _this4,\n                                children: developer.name\n                            }, developer.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publishers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 61,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 62,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Published By\"\n                    }),\n                    publishers.map(function(publisher) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publisher),\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            },\n                            __self: _this1,\n                            children: publisher.name\n                        }, publisher.id);\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratingsDiv),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 69,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 70,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Ratings\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().metacritic),\n                        style: metacriticRatingStyle,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 71,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: metacritic\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratings),\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 74,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().exceptional),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Exceptional\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[0].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().recommended),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Recommended\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[1].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().meh),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Meh\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[2].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().skip),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Skip\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[3].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().platforms),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 93,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 94,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Available On\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 95,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: platforms.map(function(platform) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 7\n                                },\n                                __self: _this2,\n                                children: platform.platform.name\n                            }, platform.platform.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().tags),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 101,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 102,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Tags\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 103,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: tags.map(function(tag) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 7\n                                },\n                                __self: _this3,\n                                children: tag.name\n                            }, tag.id);\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = GameDetails;\nvar _c;\n$RefreshReg$(_c, \"GameDetails\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQjtBQUNVOztBQUNqRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2pDLEdBQUssQ0FDSkMsSUFBSSxHQVlERCxJQUFJLENBWlBDLElBQUksRUFDSkMsZ0JBQWdCLEdBV2JGLElBQUksQ0FYUEUsZ0JBQWdCLEVBQ2hCQyxXQUFXLEdBVVJILElBQUksQ0FWUEcsV0FBVyxFQUNYQyxVQUFVLEdBU1BKLElBQUksQ0FUUEksVUFBVSxFQUNWQyxXQUFXLEdBUVJMLElBQUksQ0FSUEssV0FBVyxFQUNYQyxVQUFVLEdBT1BOLElBQUksQ0FQUE0sVUFBVSxFQUNWQyxTQUFTLEdBTU5QLElBQUksQ0FOUE8sU0FBUyxFQUNUQyxNQUFNLEdBS0hSLElBQUksQ0FMUFEsTUFBTSxFQUNOQyxJQUFJLEdBSURULElBQUksQ0FKUFMsSUFBSSxFQUNKQyxPQUFPLEdBR0pWLElBQUksQ0FIUFUsT0FBTyxFQUNQQyxNQUFNLEdBRUhYLElBQUksQ0FGUFcsTUFBTSxFQUNOQyxVQUFVLEdBQ1BaLElBQUksQ0FEUFksVUFBVTtJQUdYLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUcsQ0FBQztRQUM5QkMsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDckJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBSztJQUNwQyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxJQUFJQSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDekNDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUTtJQUN2QyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7UUFDdEJDLHFCQUFx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Ozs7Ozs7eUZBQzlCcUMsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFZOzt5RkFDZnBCLENBQUc7Ozs7Ozs7a0NBQ0ZSLFNBQVMsQ0FBQ3NCLEdBQUcsQ0FBQyxRQUFRLENBQVBhLFFBQVE7MENBQ3ZCLE1BQU0sd0RBQUxDLENBQUU7Ozs7Ozs7MENBQTZCRCxRQUFRLENBQUNBLFFBQVEsQ0FBQ3pDLElBQUk7K0JBQTdDeUMsUUFBUSxDQUFDQSxRQUFRLENBQUNWLEVBQUU7Ozs7O2tGQUkvQmpCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWxCLDRFQUFXOzs7Ozs7Ozt5RkFDekJxQyxDQUFFOzs7Ozs7O2tDQUFDLENBQUk7O3lGQUNQUCxDQUFJOzs7Ozs7O2tDQUNIbkIsSUFBSSxDQUFDb0IsR0FBRyxDQUFDLFFBQVEsQ0FBUGUsR0FBRzswQ0FDYixNQUFNLHdEQUFMYixDQUFDOzs7Ozs7OzBDQUFlYSxHQUFHLENBQUMzQyxJQUFJOytCQUFqQjJDLEdBQUcsQ0FBQ1osRUFBRTs7Ozs7OztBQWNwQixDQUFDO0tBbkhZakMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcz9lMGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tIFwicmVhY3QtaW1hZ2UtZ2FsbGVyeVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0dhbWVEZXRhaWxzLm1vZHVsZS5jc3NcIjtcbmV4cG9ydCBjb25zdCBHYW1lRGV0YWlscyA9ICh7IGdhbWUgfSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0bmFtZSxcblx0XHRiYWNrZ3JvdW5kX2ltYWdlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGRldmVsb3BlcnMsXG5cdFx0ZXNyYl9yYXRpbmcsXG5cdFx0cHVibGlzaGVycyxcblx0XHRwbGF0Zm9ybXMsXG5cdFx0cmF0aW5nLFxuXHRcdHRhZ3MsXG5cdFx0cmF0aW5ncyxcblx0XHRzdG9yZXMsXG5cdFx0bWV0YWNyaXRpYyxcblx0fSA9IGdhbWU7XG5cblx0Y29uc3QgbWV0YWNyaXRpY1JhdGluZ1N0eWxlID0ge1xuXHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdH07XG5cdGlmIChtZXRhY3JpdGljIDwgNDApIHtcblx0XHRtZXRhY3JpdGljUmF0aW5nU3R5bGUuY29sb3IgPSBcInJlZFwiO1xuXHR9XG5cdGlmIChtZXRhY3JpdGljID49IDQwICYmIG1ldGFjcml0aWMgPCA2MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG5cdH1cblx0aWYgKG1ldGFjcml0aWMgPj0gNjApIHtcblx0XHRtZXRhY3JpdGljUmF0aW5nU3R5bGUuY29sb3IgPSBcIiMzN0Q4QjdcIjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVdyYXBwZXJ9PlxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRzcmM9e2JhY2tncm91bmRfaW1hZ2V9XG5cdFx0XHRcdFx0aGVpZ2h0PXs1MDB9XG5cdFx0XHRcdFx0d2lkdGg9ezkwMH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e25hbWV9PC9oMT5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX0+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheXRpbWV9PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV2ZWxvcGVyc30+XG5cdFx0XHRcdDxoMj5EZXZlbG9wZWQgQnk8L2gyPlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHR7ZGV2ZWxvcGVycy5tYXAoKGRldmVsb3BlcikgPT4gKFxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV2ZWxvcGVyfSBrZXk9e2RldmVsb3Blci5pZH0+XG5cdFx0XHRcdFx0XHRcdHtkZXZlbG9wZXIubmFtZX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB1Ymxpc2hlcnN9PlxuXHRcdFx0XHQ8aDI+UHVibGlzaGVkIEJ5PC9oMj5cblx0XHRcdFx0e3B1Ymxpc2hlcnMubWFwKChwdWJsaXNoZXIpID0+IChcblx0XHRcdFx0XHQ8cCBrZXk9e3B1Ymxpc2hlci5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucHVibGlzaGVyfT5cblx0XHRcdFx0XHRcdHtwdWJsaXNoZXIubmFtZX1cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ3NEaXZ9PlxuXHRcdFx0XHQ8aDM+UmF0aW5nczwvaDM+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFjcml0aWN9IHN0eWxlPXttZXRhY3JpdGljUmF0aW5nU3R5bGV9PlxuXHRcdFx0XHRcdHttZXRhY3JpdGljfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nc30+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLmV4Y2VwdGlvbmFsfT5FeGNlcHRpb25hbDwvcD5cblx0XHRcdFx0XHRcdDxzcGFuPntyYXRpbmdzWzBdLnBlcmNlbnR9JTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMucmVjb21tZW5kZWR9PlJlY29tbWVuZGVkPC9wPlxuXHRcdFx0XHRcdFx0PHNwYW4+e3JhdGluZ3NbMV0ucGVyY2VudH0lPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5tZWh9Pk1laDwvcD5cblx0XHRcdFx0XHRcdDxzcGFuPntyYXRpbmdzWzJdLnBlcmNlbnR9JTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMuc2tpcH0+U2tpcDwvcD5cblx0XHRcdFx0XHRcdDxzcGFuPntyYXRpbmdzWzNdLnBlcmNlbnR9JTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhdGZvcm1zfT5cblx0XHRcdFx0PGgzPkF2YWlsYWJsZSBPbjwvaDM+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e3BsYXRmb3Jtcy5tYXAoKHBsYXRmb3JtKSA9PiAoXG5cdFx0XHRcdFx0XHQ8aDQga2V5PXtwbGF0Zm9ybS5wbGF0Zm9ybS5pZH0+e3BsYXRmb3JtLnBsYXRmb3JtLm5hbWV9PC9oND5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XG5cdFx0XHRcdDxoMz5UYWdzPC9oMz5cblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0e3RhZ3MubWFwKCh0YWcpID0+IChcblx0XHRcdFx0XHRcdDxwIGtleT17dGFnLmlkfT57dGFnLm5hbWV9PC9wPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b3Jlc30+XG5cdFx0XHRcdDxoMz5TdG9yZXM8L2gzPlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHR7c3RvcmVzLm1hcCgoc3RvcmUpID0+IChcblx0XHRcdFx0XHRcdDxhIGhyZWY9e3N0b3JlLnN0b3JlLmRvbWFpbn0ga2V5PXtzdG9yZS5pZH0+e3N0b3JlLnN0b3JlLm5hbWV9PC9hPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj4gKi99XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiSW1hZ2VHYWxsZXJ5Iiwic3R5bGVzIiwiR2FtZURldGFpbHMiLCJnYW1lIiwibmFtZSIsImJhY2tncm91bmRfaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRldmVsb3BlcnMiLCJlc3JiX3JhdGluZyIsInB1Ymxpc2hlcnMiLCJwbGF0Zm9ybXMiLCJyYXRpbmciLCJ0YWdzIiwicmF0aW5ncyIsInN0b3JlcyIsIm1ldGFjcml0aWMiLCJtZXRhY3JpdGljUmF0aW5nU3R5bGUiLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImltYWdlV3JhcHBlciIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJoMSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicGxheXRpbWUiLCJoMiIsInNwYW4iLCJtYXAiLCJkZXZlbG9wZXIiLCJwIiwiaWQiLCJwdWJsaXNoZXIiLCJyYXRpbmdzRGl2IiwiaDMiLCJzdHlsZSIsImV4Y2VwdGlvbmFsIiwicGVyY2VudCIsInJlY29tbWVuZGVkIiwibWVoIiwic2tpcCIsInBsYXRmb3JtIiwiaDQiLCJ0YWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-details/GameDetails.js\n");

/***/ })

});