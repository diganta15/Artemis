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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameDetails\": function() { return /* binding */ GameDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GameDetails.module.css */ \"./styles/GameDetails.module.css\");\n/* harmony import */ var _styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar GameDetails = function(param) {\n    var game = param.game;\n    var _this2 = _this, _this1 = _this;\n    var name = game.name, background_image = game.background_image, description = game.description, developers = game.developers, esrb_rating = game.esrb_rating, publishers = game.publishers, rating = game.rating, ratings = game.ratings, stores = game.stores, metacritic = game.metacritic;\n    var metacriticRatingStyle = {\n        color: \"white\"\n    };\n    if (metacritic < 40) {\n        metacriticRatingStyle.color = \"red\";\n    }\n    if (metacritic >= 40 && metacritic < 60) {\n        metacriticRatingStyle.color = \"orange\";\n    }\n    if (metacritic >= 60) {\n        metacriticRatingStyle.color = \"#37D8B7\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n            lineNumber: 32,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 33,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: background_image,\n                    height: 500,\n                    width: 900,\n                    className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    __source: {\n                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 42,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: game.name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                dangerouslySetInnerHTML: {\n                    __html: description\n                },\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 43,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 46,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 47,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Developed By\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 48,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: developers.map(function(developer) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().developer),\n                                __source: {\n                                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 7\n                                },\n                                __self: _this2,\n                                children: developer.name\n                            }, developer.id);\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publishers),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 56,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 57,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Published By\"\n                    }),\n                    publishers.map(function(publisher) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().publisher),\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 59,\n                                columnNumber: 6\n                            },\n                            __self: _this1,\n                            children: publisher.name\n                        }, publisher.id);\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratingsDiv),\n                __source: {\n                    fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                    lineNumber: 62,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 63,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: \"Ratings\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: (_styles_GameDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().metacritic),\n                        style: metacriticRatingStyle,\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 64,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: metacritic\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ratings\",\n                        __source: {\n                            fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                            lineNumber: 67,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            __source: {\n                                fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                lineNumber: 68,\n                                columnNumber: 6\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    __source: {\n                                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 7\n                                    },\n                                    __self: _this,\n                                    children: \"Exceptional\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                    __source: {\n                                        fileName: \"/home/diganta15/code/artemis/artemis-frontend/components/game-details/GameDetails.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 7\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        ratings[0].percent,\n                                        \"%\"\n                                    ]\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = GameDetails;\nvar _c;\n$RefreshReg$(_c, \"GameDetails\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQjtBQUNVOztBQUNqRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2pDLEdBQUssQ0FDSkMsSUFBSSxHQVVERCxJQUFJLENBVlBDLElBQUksRUFDSkMsZ0JBQWdCLEdBU2JGLElBQUksQ0FUUEUsZ0JBQWdCLEVBQ2hCQyxXQUFXLEdBUVJILElBQUksQ0FSUEcsV0FBVyxFQUNYQyxVQUFVLEdBT1BKLElBQUksQ0FQUEksVUFBVSxFQUNWQyxXQUFXLEdBTVJMLElBQUksQ0FOUEssV0FBVyxFQUNYQyxVQUFVLEdBS1BOLElBQUksQ0FMUE0sVUFBVSxFQUNWQyxNQUFNLEdBSUhQLElBQUksQ0FKUE8sTUFBTSxFQUNOQyxPQUFPLEdBR0pSLElBQUksQ0FIUFEsT0FBTyxFQUNQQyxNQUFNLEdBRUhULElBQUksQ0FGUFMsTUFBTSxFQUNOQyxVQUFVLEdBQ1BWLElBQUksQ0FEUFUsVUFBVTtJQUdYLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUcsQ0FBQztRQUM5QkMsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDckJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBSztJQUNwQyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxJQUFJQSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDekNDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUTtJQUN2QyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7UUFDdEJDLHFCQUFxQixDQUFDQyxLQUFLLEdBQUcsQ0FBUztJQUN4QyxDQUFDO0lBRUQsTUFBTSx1RUFDSkMsQ0FBRztRQUFDQyxTQUFTLEVBQUVoQixpRkFBZ0I7Ozs7Ozs7O2lGQUM5QmUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFaEIsb0ZBQW1COzs7Ozs7OytGQUNqQ0YsbURBQUs7b0JBQ0xxQixHQUFHLEVBQUVmLGdCQUFnQjtvQkFDckJnQixNQUFNLEVBQUUsR0FBRztvQkFDWEMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZMLFNBQVMsRUFBRWhCLDZFQUFZOzs7Ozs7Ozs7aUZBSXhCdUIsQ0FBRTtnQkFBQ1AsU0FBUyxFQUFFaEIsNEVBQVc7Ozs7Ozs7MEJBQUdFLElBQUksQ0FBQ0MsSUFBSTs7aUZBQ3JDWSxDQUFHO2dCQUNIQyxTQUFTLEVBQUVoQixtRkFBa0I7Z0JBQzdCd0IsdUJBQXVCLEVBQUUsQ0FBQztvQkFBQ0MsTUFBTSxFQUFFcEIsV0FBVztnQkFBQyxDQUFDOzs7Ozs7OztrRkFDaERVLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWhCLGtGQUFpQjs7Ozs7Ozs7eUZBQy9CMEIsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFZOzt5RkFDZkMsQ0FBSTs7Ozs7OztrQ0FDSHJCLFVBQVUsQ0FBQ3NCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFNBQVM7MENBQ3pCLE1BQU0sd0RBQUxDLENBQUM7Z0NBQUNkLFNBQVMsRUFBRWhCLGlGQUFnQjs7Ozs7OzswQ0FDNUI2QixTQUFTLENBQUMxQixJQUFJOytCQURxQjBCLFNBQVMsQ0FBQ0UsRUFBRTs7Ozs7a0ZBTW5EaEIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFaEIsa0ZBQWlCOzs7Ozs7Ozt5RkFDL0IwQixDQUFFOzs7Ozs7O2tDQUFDLENBQVk7O29CQUNmbEIsVUFBVSxDQUFDb0IsR0FBRyxDQUFDLFFBQVEsQ0FBUEksU0FBUztzQ0FDekIsTUFBTSx3REFBTEYsQ0FBQzs0QkFBb0JkLFNBQVMsRUFBRWhCLGlGQUFnQjs7Ozs7OztzQ0FBR2dDLFNBQVMsQ0FBQzdCLElBQUk7MkJBQTFENkIsU0FBUyxDQUFDRCxFQUFFOzs7O2tGQUdyQmhCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWhCLGtGQUFpQjs7Ozs7Ozs7eUZBQy9Ca0MsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFPOzt5RkFDVkosQ0FBQzt3QkFBQ2QsU0FBUyxFQUFFaEIsa0ZBQWlCO3dCQUFFbUMsS0FBSyxFQUFFdEIscUJBQXFCOzs7Ozs7O2tDQUMzREQsVUFBVTs7eUZBRVhHLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7O3dHQUN0QkQsQ0FBRzs7Ozs7Ozs7cUdBQ0ZlLENBQUM7Ozs7Ozs7OENBQUMsQ0FBVzs7c0dBQ2JILENBQUk7Ozs7Ozs7O3dDQUFFakIsT0FBTyxDQUFDLENBQUMsRUFBRTBCLE9BQU87d0NBQUMsQ0FBQzs7Ozs7Ozs7OztBQU1qQyxDQUFDO0tBeEVZbkMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtZGV0YWlscy9HYW1lRGV0YWlscy5qcz9lMGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tIFwicmVhY3QtaW1hZ2UtZ2FsbGVyeVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0dhbWVEZXRhaWxzLm1vZHVsZS5jc3NcIjtcbmV4cG9ydCBjb25zdCBHYW1lRGV0YWlscyA9ICh7IGdhbWUgfSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0bmFtZSxcblx0XHRiYWNrZ3JvdW5kX2ltYWdlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGRldmVsb3BlcnMsXG5cdFx0ZXNyYl9yYXRpbmcsXG5cdFx0cHVibGlzaGVycyxcblx0XHRyYXRpbmcsXG5cdFx0cmF0aW5ncyxcblx0XHRzdG9yZXMsXG5cdFx0bWV0YWNyaXRpYyxcblx0fSA9IGdhbWU7XG5cblx0Y29uc3QgbWV0YWNyaXRpY1JhdGluZ1N0eWxlID0ge1xuXHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdH07XG5cdGlmIChtZXRhY3JpdGljIDwgNDApIHtcblx0XHRtZXRhY3JpdGljUmF0aW5nU3R5bGUuY29sb3IgPSBcInJlZFwiO1xuXHR9XG5cdGlmIChtZXRhY3JpdGljID49IDQwICYmIG1ldGFjcml0aWMgPCA2MCkge1xuXHRcdG1ldGFjcml0aWNSYXRpbmdTdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG5cdH1cblx0aWYgKG1ldGFjcml0aWMgPj0gNjApIHtcblx0XHRtZXRhY3JpdGljUmF0aW5nU3R5bGUuY29sb3IgPSBcIiMzN0Q4QjdcIjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVdyYXBwZXJ9PlxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRzcmM9e2JhY2tncm91bmRfaW1hZ2V9XG5cdFx0XHRcdFx0aGVpZ2h0PXs1MDB9XG5cdFx0XHRcdFx0d2lkdGg9ezkwMH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2dhbWUubmFtZX08L2gxPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn1cblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fT48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV2ZWxvcGVyc30+XG5cdFx0XHRcdDxoMj5EZXZlbG9wZWQgQnk8L2gyPlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHR7ZGV2ZWxvcGVycy5tYXAoKGRldmVsb3BlcikgPT4gKFxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV2ZWxvcGVyfSBrZXk9e2RldmVsb3Blci5pZH0+XG5cdFx0XHRcdFx0XHRcdHtkZXZlbG9wZXIubmFtZX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB1Ymxpc2hlcnN9PlxuXHRcdFx0XHQ8aDI+UHVibGlzaGVkIEJ5PC9oMj5cblx0XHRcdFx0e3B1Ymxpc2hlcnMubWFwKChwdWJsaXNoZXIpID0+IChcblx0XHRcdFx0XHQ8cCBrZXk9e3B1Ymxpc2hlci5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucHVibGlzaGVyfT57cHVibGlzaGVyLm5hbWV9PC9wPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdzRGl2fT5cblx0XHRcdFx0PGgzPlJhdGluZ3M8L2gzPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5tZXRhY3JpdGljfSBzdHlsZT17bWV0YWNyaXRpY1JhdGluZ1N0eWxlfT5cblx0XHRcdFx0XHR7bWV0YWNyaXRpY31cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3NcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHA+RXhjZXB0aW9uYWw8L3A+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57cmF0aW5nc1swXS5wZXJjZW50fSU8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiSW1hZ2VHYWxsZXJ5Iiwic3R5bGVzIiwiR2FtZURldGFpbHMiLCJnYW1lIiwibmFtZSIsImJhY2tncm91bmRfaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRldmVsb3BlcnMiLCJlc3JiX3JhdGluZyIsInB1Ymxpc2hlcnMiLCJyYXRpbmciLCJyYXRpbmdzIiwic3RvcmVzIiwibWV0YWNyaXRpYyIsIm1ldGFjcml0aWNSYXRpbmdTdHlsZSIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1hZ2VXcmFwcGVyIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWFnZSIsImgxIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMiIsInNwYW4iLCJtYXAiLCJkZXZlbG9wZXIiLCJwIiwiaWQiLCJwdWJsaXNoZXIiLCJyYXRpbmdzRGl2IiwiaDMiLCJzdHlsZSIsInBlcmNlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-details/GameDetails.js\n");

/***/ })

});