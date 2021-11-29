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
exports.id = "pages/api/games/fetch";
exports.ids = ["pages/api/games/fetch"];
exports.modules = {

/***/ "./pages/api/games/fetch.js":
/*!**********************************!*\
  !*** ./pages/api/games/fetch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const response = await fetch(`https://api.rawg.io/api/games?key=1b349dee02d9402893d1b2be1c6e747c`);\n        const games = await response.json();\n        console.log(games);\n        res.status(200).json(games);\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2FtZXMvZmV0Y2guanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFNLE9BQWdCQSxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDLEVBQUUsRUFBQ0QsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDdEIsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDQyxLQUFLLEVBQUUsa0VBQWtFO1FBQ2hHLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJO1FBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSztRQUNqQkosR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFSCxJQUFJLENBQUNELEtBQUs7SUFDOUIsQ0FBQyxNQUNJLENBQUM7UUFDRkosR0FBRyxDQUFDUyxTQUFTLENBQUMsQ0FBTyxRQUFFLENBQUM7WUFBQSxDQUFLO1FBQUEsQ0FBQztRQUM5QlQsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFRSxHQUFHLEVBQUUsT0FBTyxFQUFFWCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZO0lBQ3pELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0ZW1pcy1mcm9udGVuZC8uL3BhZ2VzL2FwaS9nYW1lcy9mZXRjaC5qcz8yYjg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9MWIzNDlkZWUwMmQ5NDAyODkzZDFiMmJlMWM2ZTc0N2NgKTtcclxuICAgICAgICBjb25zdCBnYW1lcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZ2FtZXMpO1xyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJyZXNwb25zZSIsImZldGNoIiwiZ2FtZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/games/fetch.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/games/fetch.js"));
module.exports = __webpack_exports__;

})();