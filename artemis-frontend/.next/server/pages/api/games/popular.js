"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/games/popular";
exports.ids = ["pages/api/games/popular"];
exports.modules = {

/***/ "./pages/api/games/popular.js":
/*!************************************!*\
  !*** ./pages/api/games/popular.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const response = await fetch(`https://api.rawg.io/api/games?key=1b349dee02d9402893d1b2be1c6e747c`);\n        const games = await response.json();\n        res.status(200).json(games);\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2FtZXMvcG9wdWxhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQU0sT0FBZ0JBLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsRUFBRSxFQUFDRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN0QixLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssRUFBRSxrRUFBa0U7UUFDaEcsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLElBQUk7UUFFakNMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDRCxLQUFLO0lBQzlCLENBQUMsTUFDSSxDQUFDO1FBQ0ZKLEdBQUcsQ0FBQ08sU0FBUyxDQUFDLENBQU8sUUFBRSxDQUFDO1lBQUEsQ0FBSztRQUFBLENBQUM7UUFDOUJQLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUUsR0FBRyxFQUFFLE9BQU8sRUFBRVQsR0FBRyxDQUFDRSxNQUFNLENBQUMsWUFBWTtJQUN6RCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGVtaXMtZnJvbnRlbmQvLi9wYWdlcy9hcGkvZ2FtZXMvcG9wdWxhci5qcz8yN2IzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9MWIzNDlkZWUwMmQ5NDAyODkzZDFiMmJlMWM2ZTc0N2NgKTtcclxuICAgICAgICBjb25zdCBnYW1lcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihnYW1lcyk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJnYW1lcyIsImpzb24iLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/games/popular.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/games/popular.js"));
module.exports = __webpack_exports__;

})();