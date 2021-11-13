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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameDetails\": function() { return /* binding */ GameDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GameDetails.module.css */ \"./styles/GameDetails.module.css\");\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar GameDetails = function(param) {\n    var game = param.game;\n    var _this4 = _this, _this1 = _this, _this2 = _this, _this3 = _this;\n    var name = game.name, background_image = game.background_image, description = game.description, developers = game.developers, esrb_rating = game.esrb_rating, publishers = game.publishers, platforms = game.platforms, rating = game.rating, tags = game.tags, ratings = game.ratings, stores = game.stores, metacritic = game.metacritic;\n    var metacriticRatingStyle = {\n        color: \"white\"\n    };\n    if (metacritic < 40) {\n        metacriticRatingStyle.color = \"red\";\n    }\n    if (metacritic >= 40 && metacritic < 60) {\n        metacriticRatingStyle.color = \"orange\";\n    }\n    if (metacritic >= 60) {\n        metacriticRatingStyle.color = \"#37D8B7\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n            lineNumber: 34,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 35,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: background_image,\n                    height: 500,\n                    width: 900,\n                    className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    __source: {\n                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 44,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                dangerouslySetInnerHTML: {\n                    __html: description\n                },\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 45,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().playtime),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 48,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 49,\n                            columnNumber: 6\n                        },\n                        __self: _this,\n                        children: \"Playtime\"\n                    }),\n                    \"div\"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 52,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 53,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Developed By\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 54,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: developers.map(function(developer) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developer),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 7\n                                },\n                                __self: _this4,\n                                children: developer.name\n                            }, developer.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publishers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 62,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 63,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Published By\"\n                    }),\n                    publishers.map(function(publisher) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publisher),\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 65,\n                                columnNumber: 6\n                            },\n                            __self: _this1,\n                            children: publisher.name\n                        }, publisher.id);\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratingsDiv),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 70,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 71,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Ratings\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().metacritic),\n                        style: metacriticRatingStyle,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 72,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: metacritic\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratings),\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 75,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().exceptional),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Exceptional\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[0].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().recommended),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Recommended\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[1].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().meh),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Meh\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[2].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().skip),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Skip\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[3].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().platforms),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 94,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 95,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Available On\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 96,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: platforms.map(function(platform) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 7\n                                },\n                                __self: _this2,\n                                children: platform.platform.name\n                            }, platform.platform.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().tags),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 102,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 103,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Tags\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 104,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: tags.map(function(tag) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 7\n                                },\n                                __self: _this3,\n                                children: tag.name\n                            }, tag.id);\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = GameDetails;\nvar _c;\n$RefreshReg$(_c, \"GameDetails\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQjtBQUNVOztBQUNqRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2pDLEdBQUssQ0FDSkMsSUFBSSxHQVlERCxJQUFJLENBWlBDLElBQUksRUFDSkMsZ0JBQWdCLEdBV2JGLElBQUksQ0FYUEUsZ0JBQWdCLEVBQ2hCQyxXQUFXLEdBVVJILElBQUksQ0FWUEcsV0FBVyxFQUNYQyxVQUFVLEdBU1BKLElBQUksQ0FUUEksVUFBVSxFQUNWQyxXQUFXLEdBUVJMLElBQUksQ0FSUEssV0FBVyxFQUNYQyxVQUFVLEdBT1BOLElBQUksQ0FQUE0sVUFBVSxFQUNWQyxTQUFTLEdBTU5QLElBQUksQ0FOUE8sU0FBUyxFQUNUQyxNQUFNLEdBS0hSLElBQUksQ0FMUFEsTUFBTSxFQUNOQyxJQUFJLEdBSURULElBQUksQ0FKUFMsSUFBSSxFQUNKQyxPQUFPLEdBR0pWLElBQUksQ0FIUFUsT0FBTyxFQUNQQyxNQUFNLEdBRUhYLElBQUksQ0FGUFcsTUFBTSxFQUNOQyxVQUFVLEdBQ1BaLElBQUksQ0FEUFksVUFBVTtJQUdYLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUcsQ0FBQztRQUM5QkMsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDckJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBSztJQUNwQyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxJQUFJQSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDekNDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUTtJQUN2QyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7UUFDdEJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUztJQUN4QyxDQUFDO0lBRUQsTUFBTSx1RUFDSkMsQ0FBRztRQUFDQyxTQUFTLEVBQUVsQixpRkFBZ0I7Ozs7Ozs7O2lGQUM5QmlCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWxCLG9GQUFtQjs7Ozs7OzsrRkFDakNGLG1EQUFLO29CQUNMdUIsR0FBRyxFQUFFakIsZ0JBQWdCO29CQUNyQmtCLE1BQU0sRUFBRSxHQUFHO29CQUNYQyxLQUFLLEVBQUUsR0FBRztvQkFDVkwsU0FBUyxFQUFFbEIsNkVBQVk7Ozs7Ozs7OztpRkFJeEJ5QixDQUFFO2dCQUFDUCxTQUFTLEVBQUVsQiw0RUFBVzs7Ozs7OzswQkFBR0csSUFBSTs7aUZBQ2hDYyxDQUFHO2dCQUNIQyxTQUFTLEVBQUVsQixtRkFBa0I7Z0JBQzdCMEIsdUJBQXVCLEVBQUUsQ0FBQztvQkFBQ0MsTUFBTSxFQUFFdEIsV0FBVztnQkFBQyxDQUFDOzs7Ozs7OztrRkFDL0NZLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWxCLGdGQUFlOzs7Ozs7Ozt5RkFDN0I2QixDQUFFOzs7Ozs7O2tDQUFDLENBQVE7O29CQUFLLENBRWxCOzs7a0ZBQ0FaLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWxCLGtGQUFpQjs7Ozs7Ozs7eUZBQy9COEIsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFZOzt5RkFDZkMsQ0FBSTs7Ozs7OztrQ0FDSHpCLFVBQVUsQ0FBQzBCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFNBQVM7MENBQ3pCLE1BQU0sd0RBQUxDLENBQUM7Z0NBQUNoQixTQUFTLEVBQUVsQixpRkFBZ0I7Ozs7Ozs7MENBQzVCaUMsU0FBUyxDQUFDOUIsSUFBSTsrQkFEcUI4QixTQUFTLENBQUNFLEVBQUU7Ozs7O2tGQU1uRGxCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWxCLGtGQUFpQjs7Ozs7Ozs7eUZBQy9COEIsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFZOztvQkFDZnRCLFVBQVUsQ0FBQ3dCLEdBQUcsQ0FBQyxRQUFRLENBQVBJLFNBQVM7c0NBQ3pCLE1BQU0sd0RBQUxGLENBQUM7NEJBQW9CaEIsU0FBUyxFQUFFbEIsaUZBQWdCOzs7Ozs7O3NDQUMvQ29DLFNBQVMsQ0FBQ2pDLElBQUk7MkJBRFJpQyxTQUFTLENBQUNELEVBQUU7Ozs7a0ZBS3JCbEIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFbEIsa0ZBQWlCOzs7Ozs7Ozt5RkFDL0I2QixDQUFFOzs7Ozs7O2tDQUFDLENBQU87O3lGQUNWSyxDQUFDO3dCQUFDaEIsU0FBUyxFQUFFbEIsa0ZBQWlCO3dCQUFFc0MsS0FBSyxFQUFFdkIscUJBQXFCOzs7Ozs7O2tDQUMzREQsVUFBVTs7MEZBRVhHLENBQUc7d0JBQUNDLFNBQVMsRUFBRWxCLCtFQUFjOzs7Ozs7OztrR0FDNUJpQixDQUFHOzs7Ozs7Ozt5R0FDRmlCLENBQUM7d0NBQUNoQixTQUFTLEVBQUVsQixtRkFBa0I7Ozs7Ozs7a0RBQUUsQ0FBVzs7MEdBQzVDK0IsQ0FBSTs7Ozs7Ozs7NENBQUVuQixPQUFPLENBQUMsQ0FBQyxFQUFFNEIsT0FBTzs0Q0FBQyxDQUFDOzs7OztrR0FFM0J2QixDQUFHOzs7Ozs7Ozt5R0FDRmlCLENBQUM7d0NBQUNoQixTQUFTLEVBQUVsQixtRkFBa0I7Ozs7Ozs7a0RBQUUsQ0FBVzs7MEdBQzVDK0IsQ0FBSTs7Ozs7Ozs7NENBQUVuQixPQUFPLENBQUMsQ0FBQyxFQUFFNEIsT0FBTzs0Q0FBQyxDQUFDOzs7OztrR0FFM0J2QixDQUFHOzs7Ozs7Ozt5R0FDRmlCLENBQUM7d0NBQUNoQixTQUFTLEVBQUVsQiwyRUFBVTs7Ozs7OztrREFBRSxDQUFHOzswR0FDNUIrQixDQUFJOzs7Ozs7Ozs0Q0FBRW5CLE9BQU8sQ0FBQyxDQUFDLEVBQUU0QixPQUFPOzRDQUFDLENBQUM7Ozs7O2tHQUUzQnZCLENBQUc7Ozs7Ozs7O3lHQUNGaUIsQ0FBQzt3Q0FBQ2hCLFNBQVMsRUFBRWxCLDRFQUFXOzs7Ozs7O2tEQUFFLENBQUk7OzBHQUM5QitCLENBQUk7Ozs7Ozs7OzRDQUFFbkIsT0FBTyxDQUFDLENBQUMsRUFBRTRCLE9BQU87NENBQUMsQ0FBQzs7Ozs7Ozs7O2tGQUk3QnZCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWxCLGlGQUFnQjs7Ozs7Ozs7eUZBQzlCNkIsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFZOzt5RkFDZlosQ0FBRzs7Ozs7OztrQ0FDRlIsU0FBUyxDQUFDdUIsR0FBRyxDQUFDLFFBQVEsQ0FBUFksUUFBUTswQ0FDdkIsTUFBTSx3REFBTEMsQ0FBRTs7Ozs7OzswQ0FBNkJELFFBQVEsQ0FBQ0EsUUFBUSxDQUFDekMsSUFBSTsrQkFBN0N5QyxRQUFRLENBQUNBLFFBQVEsQ0FBQ1QsRUFBRTs7Ozs7a0ZBSS9CbEIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFbEIsNEVBQVc7Ozs7Ozs7O3lGQUN6QjZCLENBQUU7Ozs7Ozs7a0NBQUMsQ0FBSTs7eUZBQ1BFLENBQUk7Ozs7Ozs7a0NBQ0hwQixJQUFJLENBQUNxQixHQUFHLENBQUMsUUFBUSxDQUFQYyxHQUFHOzBDQUNiLE1BQU0sd0RBQUxaLENBQUM7Ozs7Ozs7MENBQWVZLEdBQUcsQ0FBQzNDLElBQUk7K0JBQWpCMkMsR0FBRyxDQUFDWCxFQUFFOzs7Ozs7O0FBY3BCLENBQUM7S0FwSFlsQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1kZXRhaWxzL0dhbWVEZXRhaWxzLmpzP2UwY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gXCJyZWFjdC1pbWFnZS1nYWxsZXJ5XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvR2FtZURldGFpbHMubW9kdWxlLmNzc1wiO1xuZXhwb3J0IGNvbnN0IEdhbWVEZXRhaWxzID0gKHsgZ2FtZSB9KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRuYW1lLFxuXHRcdGJhY2tncm91bmRfaW1hZ2UsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZGV2ZWxvcGVycyxcblx0XHRlc3JiX3JhdGluZyxcblx0XHRwdWJsaXNoZXJzLFxuXHRcdHBsYXRmb3Jtcyxcblx0XHRyYXRpbmcsXG5cdFx0dGFncyxcblx0XHRyYXRpbmdzLFxuXHRcdHN0b3Jlcyxcblx0XHRtZXRhY3JpdGljLFxuXHR9ID0gZ2FtZTtcblxuXHRjb25zdCBtZXRhY3JpdGljUmF0aW5nU3R5bGUgPSB7XG5cdFx0Y29sb3I6IFwid2hpdGVcIixcblx0fTtcblx0aWYgKG1ldGFjcml0aWMgPCA0MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cdH1cblx0aWYgKG1ldGFjcml0aWMgPj0gNDAgJiYgbWV0YWNyaXRpYyA8IDYwKSB7XG5cdFx0bWV0YWNyaXRpY1JhdGluZ1N0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcblx0fVxuXHRpZiAobWV0YWNyaXRpYyA+PSA2MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwiIzM3RDhCN1wiO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlV3JhcHBlcn0+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdHNyYz17YmFja2dyb3VuZF9pbWFnZX1cblx0XHRcdFx0XHRoZWlnaHQ9ezUwMH1cblx0XHRcdFx0XHR3aWR0aD17OTAwfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L2gxPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn1cblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5dGltZX0+XG5cdFx0XHRcdFx0PGgzPlBsYXl0aW1lPC9oMz5cblx0XHRcdFx0XHRkaXZcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldmVsb3BlcnN9PlxuXHRcdFx0XHQ8aDI+RGV2ZWxvcGVkIEJ5PC9oMj5cblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0e2RldmVsb3BlcnMubWFwKChkZXZlbG9wZXIpID0+IChcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldmVsb3Blcn0ga2V5PXtkZXZlbG9wZXIuaWR9PlxuXHRcdFx0XHRcdFx0XHR7ZGV2ZWxvcGVyLm5hbWV9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wdWJsaXNoZXJzfT5cblx0XHRcdFx0PGgyPlB1Ymxpc2hlZCBCeTwvaDI+XG5cdFx0XHRcdHtwdWJsaXNoZXJzLm1hcCgocHVibGlzaGVyKSA9PiAoXG5cdFx0XHRcdFx0PHAga2V5PXtwdWJsaXNoZXIuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnB1Ymxpc2hlcn0+XG5cdFx0XHRcdFx0XHR7cHVibGlzaGVyLm5hbWV9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdzRGl2fT5cblx0XHRcdFx0PGgzPlJhdGluZ3M8L2gzPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5tZXRhY3JpdGljfSBzdHlsZT17bWV0YWNyaXRpY1JhdGluZ1N0eWxlfT5cblx0XHRcdFx0XHR7bWV0YWNyaXRpY31cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ3N9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5leGNlcHRpb25hbH0+RXhjZXB0aW9uYWw8L3A+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57cmF0aW5nc1swXS5wZXJjZW50fSU8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLnJlY29tbWVuZGVkfT5SZWNvbW1lbmRlZDwvcD5cblx0XHRcdFx0XHRcdDxzcGFuPntyYXRpbmdzWzFdLnBlcmNlbnR9JTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMubWVofT5NZWg8L3A+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57cmF0aW5nc1syXS5wZXJjZW50fSU8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLnNraXB9PlNraXA8L3A+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57cmF0aW5nc1szXS5wZXJjZW50fSU8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXRmb3Jtc30+XG5cdFx0XHRcdDxoMz5BdmFpbGFibGUgT248L2gzPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHtwbGF0Zm9ybXMubWFwKChwbGF0Zm9ybSkgPT4gKFxuXHRcdFx0XHRcdFx0PGg0IGtleT17cGxhdGZvcm0ucGxhdGZvcm0uaWR9PntwbGF0Zm9ybS5wbGF0Zm9ybS5uYW1lfTwvaDQ+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxuXHRcdFx0XHQ8aDM+VGFnczwvaDM+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdHt0YWdzLm1hcCgodGFnKSA9PiAoXG5cdFx0XHRcdFx0XHQ8cCBrZXk9e3RhZy5pZH0+e3RhZy5uYW1lfTwvcD5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9yZXN9PlxuXHRcdFx0XHQ8aDM+U3RvcmVzPC9oMz5cblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0e3N0b3Jlcy5tYXAoKHN0b3JlKSA9PiAoXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtzdG9yZS5zdG9yZS5kb21haW59IGtleT17c3RvcmUuaWR9PntzdG9yZS5zdG9yZS5uYW1lfTwvYT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkltYWdlR2FsbGVyeSIsInN0eWxlcyIsIkdhbWVEZXRhaWxzIiwiZ2FtZSIsIm5hbWUiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiZGVzY3JpcHRpb24iLCJkZXZlbG9wZXJzIiwiZXNyYl9yYXRpbmciLCJwdWJsaXNoZXJzIiwicGxhdGZvcm1zIiwicmF0aW5nIiwidGFncyIsInJhdGluZ3MiLCJzdG9yZXMiLCJtZXRhY3JpdGljIiwibWV0YWNyaXRpY1JhdGluZ1N0eWxlIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbWFnZVdyYXBwZXIiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImltYWdlIiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInBsYXl0aW1lIiwiaDMiLCJoMiIsInNwYW4iLCJtYXAiLCJkZXZlbG9wZXIiLCJwIiwiaWQiLCJwdWJsaXNoZXIiLCJyYXRpbmdzRGl2Iiwic3R5bGUiLCJleGNlcHRpb25hbCIsInBlcmNlbnQiLCJyZWNvbW1lbmRlZCIsIm1laCIsInNraXAiLCJwbGF0Zm9ybSIsImg0IiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-details/GameDetails.js\n");

/***/ })

});