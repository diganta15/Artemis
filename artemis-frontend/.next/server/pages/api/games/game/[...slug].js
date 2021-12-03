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
exports.id = "pages/api/games/game/[...slug]";
exports.ids = ["pages/api/games/game/[...slug]"];
exports.modules = {

/***/ "./pages/api/games/game/[...slug].js":
/*!*******************************************!*\
  !*** ./pages/api/games/game/[...slug].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        const { slug  } = req.query;\n        console.log(slug);\n        const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=1b349dee02d9402893d1b2be1c6e747c`);\n        const data = await response.json();\n        res.status(200).json(data);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2FtZXMvZ2FtZS9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFNLE9BQWdCQSxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ25DLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR0gsR0FBRyxDQUFDSSxLQUFLO1FBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtRQUNWLEtBQUssQ0FBQ0ksUUFBUSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLDhCQUE4QixFQUFFTCxJQUFJLENBQUMscUNBQXFDO1FBQzlHLEtBQUssQ0FBQ00sSUFBSSxHQUFHLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJO1FBRWhDVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQ0QsSUFBSTtJQUMxQixDQUFDLE1BQU0sQ0FBQztRQUNQUixHQUFHLENBQUNXLFNBQVMsQ0FBQyxDQUFPLFFBQUUsQ0FBQztZQUFBLENBQUs7UUFBQSxDQUFDO1FBQzlCWCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVFLEdBQUcsRUFBRSxPQUFPLEVBQUViLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVk7SUFDdEQsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRlbWlzLWZyb250ZW5kLy4vcGFnZXMvYXBpL2dhbWVzL2dhbWUvWy4uLnNsdWddLmpzPzg1M2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0aWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuXHRcdGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnF1ZXJ5O1xyXG5cdFx0Y29uc29sZS5sb2coc2x1Zyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXMvJHtzbHVnfT9rZXk9MWIzNDlkZWUwMmQ5NDAyODkzZDFiMmJlMWM2ZTc0N2NgKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJHRVRcIl0pO1xyXG5cdFx0cmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNsdWciLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/games/game/[...slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/games/game/[...slug].js"));
module.exports = __webpack_exports__;

})();