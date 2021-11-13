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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameDetails\": function() { return /* binding */ GameDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GameDetails.module.css */ \"./styles/GameDetails.module.css\");\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar GameDetails = function(param) {\n    var game = param.game;\n    var _this4 = _this, _this1 = _this, _this2 = _this, _this3 = _this;\n    var name = game.name, background_image = game.background_image, description = game.description, developers = game.developers, esrb_rating = game.esrb_rating, publishers = game.publishers, platforms = game.platforms, rating = game.rating, tags = game.tags, ratings = game.ratings, stores = game.stores, metacritic = game.metacritic;\n    var metacriticRatingStyle = {\n        color: \"white\"\n    };\n    if (metacritic < 40) {\n        metacriticRatingStyle.color = \"red\";\n    }\n    if (metacritic >= 40 && metacritic < 60) {\n        metacriticRatingStyle.color = \"orange\";\n    }\n    if (metacritic >= 60) {\n        metacriticRatingStyle.color = \"#37D8B7\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n            lineNumber: 34,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 35,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: background_image,\n                    height: 500,\n                    width: 900,\n                    className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    __source: {\n                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 44,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                dangerouslySetInnerHTML: {\n                    __html: description\n                },\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 45,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 48,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 49,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Developed By\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 50,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: developers.map(function(developer) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developer),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 7\n                                },\n                                __self: _this4,\n                                children: developer.name\n                            }, developer.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publishers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 58,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 59,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Published By\"\n                    }),\n                    publishers.map(function(publisher) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publisher),\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 61,\n                                columnNumber: 6\n                            },\n                            __self: _this1,\n                            children: publisher.name\n                        }, publisher.id);\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratingsDiv),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 66,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 67,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Ratings\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().metacritic),\n                        style: metacriticRatingStyle,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 68,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: metacritic\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratings),\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 71,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().exceptional),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Exceptional\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[0].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().recommended),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Recommended\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[1].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().meh),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Meh\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[2].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().skip),\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: \"Skip\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 7\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            ratings[3].percent,\n                                            \"%\"\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().platforms),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 90,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 91,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Available On\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 92,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: platforms.map(function(platform) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 7\n                                },\n                                __self: _this2,\n                                children: platform.platform.name\n                            }, platform.platform.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().tags),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 98,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 99,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Tags\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 100,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: tags.map(function(tag) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 7\n                                },\n                                __self: _this3,\n                                children: tag.name\n                            }, tag.id);\n                        })\n                    })\n                ]\n            }),\n            \"x */}\"\n        ]\n    }));\n};\n_c = GameDetails;\nvar _c;\n$RefreshReg$(_c, \"GameDetails\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQjtBQUNVOztBQUNqRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2pDLEdBQUssQ0FDSkMsSUFBSSxHQVlERCxJQUFJLENBWlBDLElBQUksRUFDSkMsZ0JBQWdCLEdBV2JGLElBQUksQ0FYUEUsZ0JBQWdCLEVBQ2hCQyxXQUFXLEdBVVJILElBQUksQ0FWUEcsV0FBVyxFQUNYQyxVQUFVLEdBU1BKLElBQUksQ0FUUEksVUFBVSxFQUNWQyxXQUFXLEdBUVJMLElBQUksQ0FSUEssV0FBVyxFQUNYQyxVQUFVLEdBT1BOLElBQUksQ0FQUE0sVUFBVSxFQUNWQyxTQUFTLEdBTU5QLElBQUksQ0FOUE8sU0FBUyxFQUNUQyxNQUFNLEdBS0hSLElBQUksQ0FMUFEsTUFBTSxFQUNOQyxJQUFJLEdBSURULElBQUksQ0FKUFMsSUFBSSxFQUNKQyxPQUFPLEdBR0pWLElBQUksQ0FIUFUsT0FBTyxFQUNQQyxNQUFNLEdBRUhYLElBQUksQ0FGUFcsTUFBTSxFQUNOQyxVQUFVLEdBQ1BaLElBQUksQ0FEUFksVUFBVTtJQUdYLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUcsQ0FBQztRQUM5QkMsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDckJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBSztJQUNwQyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxJQUFJQSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDekNDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUTtJQUN2QyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7UUFDdEJDLHFCQUFx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Ozs7Ozs7O2tDQUNGUixTQUFTLENBQUNxQixHQUFHLENBQUMsUUFBUSxDQUFQYSxRQUFROzBDQUN2QixNQUFNLHdEQUFMQyxDQUFFOzs7Ozs7OzBDQUE2QkQsUUFBUSxDQUFDQSxRQUFRLENBQUN4QyxJQUFJOytCQUE3Q3dDLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDVixFQUFFOzs7OztrRkFJL0JoQixDQUFHO2dCQUFDQyxTQUFTLEVBQUVsQiw0RUFBVzs7Ozs7Ozs7eUZBQ3pCb0MsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFJOzt5RkFDUFAsQ0FBSTs7Ozs7OztrQ0FDSGxCLElBQUksQ0FBQ21CLEdBQUcsQ0FBQyxRQUFRLENBQVBlLEdBQUc7MENBQ2IsTUFBTSx3REFBTGIsQ0FBQzs7Ozs7OzswQ0FBZWEsR0FBRyxDQUFDMUMsSUFBSTsrQkFBakIwQyxHQUFHLENBQUNaLEVBQUU7Ozs7O1lBR1gsQ0FFUDs7O0FBRUYsQ0FBQztLQXpHWWhDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLWRldGFpbHMvR2FtZURldGFpbHMuanM/ZTBjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSBcInJlYWN0LWltYWdlLWdhbGxlcnlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9HYW1lRGV0YWlscy5tb2R1bGUuY3NzXCI7XG5leHBvcnQgY29uc3QgR2FtZURldGFpbHMgPSAoeyBnYW1lIH0pID0+IHtcblx0Y29uc3Qge1xuXHRcdG5hbWUsXG5cdFx0YmFja2dyb3VuZF9pbWFnZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkZXZlbG9wZXJzLFxuXHRcdGVzcmJfcmF0aW5nLFxuXHRcdHB1Ymxpc2hlcnMsXG5cdFx0cGxhdGZvcm1zLFxuXHRcdHJhdGluZyxcblx0XHR0YWdzLFxuXHRcdHJhdGluZ3MsXG5cdFx0c3RvcmVzLFxuXHRcdG1ldGFjcml0aWMsXG5cdH0gPSBnYW1lO1xuXG5cdGNvbnN0IG1ldGFjcml0aWNSYXRpbmdTdHlsZSA9IHtcblx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHR9O1xuXHRpZiAobWV0YWNyaXRpYyA8IDQwKSB7XG5cdFx0bWV0YWNyaXRpY1JhdGluZ1N0eWxlLmNvbG9yID0gXCJyZWRcIjtcblx0fVxuXHRpZiAobWV0YWNyaXRpYyA+PSA0MCAmJiBtZXRhY3JpdGljIDwgNjApIHtcblx0XHRtZXRhY3JpdGljUmF0aW5nU3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuXHR9XG5cdGlmIChtZXRhY3JpdGljID49IDYwKSB7XG5cdFx0bWV0YWNyaXRpY1JhdGluZ1N0eWxlLmNvbG9yID0gXCIjMzdEOEI3XCI7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VXcmFwcGVyfT5cblx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0c3JjPXtiYWNrZ3JvdW5kX2ltYWdlfVxuXHRcdFx0XHRcdGhlaWdodD17NTAwfVxuXHRcdFx0XHRcdHdpZHRoPXs5MDB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvaDE+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19PjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXZlbG9wZXJzfT5cblx0XHRcdFx0PGgyPkRldmVsb3BlZCBCeTwvaDI+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdHtkZXZlbG9wZXJzLm1hcCgoZGV2ZWxvcGVyKSA9PiAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXZlbG9wZXJ9IGtleT17ZGV2ZWxvcGVyLmlkfT5cblx0XHRcdFx0XHRcdFx0e2RldmVsb3Blci5uYW1lfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHVibGlzaGVyc30+XG5cdFx0XHRcdDxoMj5QdWJsaXNoZWQgQnk8L2gyPlxuXHRcdFx0XHR7cHVibGlzaGVycy5tYXAoKHB1Ymxpc2hlcikgPT4gKFxuXHRcdFx0XHRcdDxwIGtleT17cHVibGlzaGVyLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5wdWJsaXNoZXJ9PlxuXHRcdFx0XHRcdFx0e3B1Ymxpc2hlci5uYW1lfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nc0Rpdn0+XG5cdFx0XHRcdDxoMz5SYXRpbmdzPC9oMz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMubWV0YWNyaXRpY30gc3R5bGU9e21ldGFjcml0aWNSYXRpbmdTdHlsZX0+XG5cdFx0XHRcdFx0e21ldGFjcml0aWN9XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdzfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMuZXhjZXB0aW9uYWx9PkV4Y2VwdGlvbmFsPC9wPlxuXHRcdFx0XHRcdFx0PHNwYW4+e3JhdGluZ3NbMF0ucGVyY2VudH0lPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5yZWNvbW1lbmRlZH0+UmVjb21tZW5kZWQ8L3A+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57cmF0aW5nc1sxXS5wZXJjZW50fSU8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLm1laH0+TWVoPC9wPlxuXHRcdFx0XHRcdFx0PHNwYW4+e3JhdGluZ3NbMl0ucGVyY2VudH0lPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5za2lwfT5Ta2lwPC9wPlxuXHRcdFx0XHRcdFx0PHNwYW4+e3JhdGluZ3NbM10ucGVyY2VudH0lPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF0Zm9ybXN9PlxuXHRcdFx0XHQ8aDM+QXZhaWxhYmxlIE9uPC9oMz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7cGxhdGZvcm1zLm1hcCgocGxhdGZvcm0pID0+IChcblx0XHRcdFx0XHRcdDxoNCBrZXk9e3BsYXRmb3JtLnBsYXRmb3JtLmlkfT57cGxhdGZvcm0ucGxhdGZvcm0ubmFtZX08L2g0PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cblx0XHRcdFx0PGgzPlRhZ3M8L2gzPlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHR7dGFncy5tYXAoKHRhZykgPT4gKFxuXHRcdFx0XHRcdFx0PHAga2V5PXt0YWcuaWR9Pnt0YWcubmFtZX08L3A+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdHggKi99XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiSW1hZ2VHYWxsZXJ5Iiwic3R5bGVzIiwiR2FtZURldGFpbHMiLCJnYW1lIiwibmFtZSIsImJhY2tncm91bmRfaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRldmVsb3BlcnMiLCJlc3JiX3JhdGluZyIsInB1Ymxpc2hlcnMiLCJwbGF0Zm9ybXMiLCJyYXRpbmciLCJ0YWdzIiwicmF0aW5ncyIsInN0b3JlcyIsIm1ldGFjcml0aWMiLCJtZXRhY3JpdGljUmF0aW5nU3R5bGUiLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImltYWdlV3JhcHBlciIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJoMSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDIiLCJzcGFuIiwibWFwIiwiZGV2ZWxvcGVyIiwicCIsImlkIiwicHVibGlzaGVyIiwicmF0aW5nc0RpdiIsImgzIiwic3R5bGUiLCJleGNlcHRpb25hbCIsInBlcmNlbnQiLCJyZWNvbW1lbmRlZCIsIm1laCIsInNraXAiLCJwbGF0Zm9ybSIsImg0IiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-details/GameDetails.js\n");

/***/ })

});