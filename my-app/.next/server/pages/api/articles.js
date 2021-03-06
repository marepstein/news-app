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
exports.id = "pages/api/articles";
exports.ids = ["pages/api/articles"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/articles.js":
/*!*******************************!*\
  !*** ./pages/api/articles.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api */ \"(api)/./services/api.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case 'GET':\n            try {\n                const currentPage = req.query.currentPage;\n                const query = req.query.q;\n                const { data  } = await _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('api/articles', {\n                    params: {\n                        currentPage: currentPage,\n                        q: query\n                    }\n                });\n                res.json(data);\n            } catch (err) {\n                const statusCode = err.response ? err.response.status : 500;\n                const message = err.response ? err.response.data.errors : err.message;\n                res.status(statusCode).json({\n                    type: err.type,\n                    errors: message\n                });\n            }\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXJ0aWNsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFFcEMsaUVBQU0sT0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxFQUFDLENBQUMsR0FBR0YsR0FBRztJQUV0QixNQUFNLENBQUVFLE1BQU07UUFDVixJQUFJLENBQUMsQ0FBSztZQUNOLEdBQUcsQ0FBQyxDQUFDO2dCQUNELEtBQUssQ0FBQ0MsV0FBVyxHQUFHSCxHQUFHLENBQUNJLEtBQUssQ0FBQ0QsV0FBVztnQkFDekMsS0FBSyxDQUFDQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxDQUFDO2dCQUV6QixLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ1AseURBQU8sQ0FBQyxDQUFjLGVBQUUsQ0FBQztvQkFDNUNTLE1BQU0sRUFBRSxDQUFDO3dCQUNMTCxXQUFXLEVBQUVBLFdBQVc7d0JBQ3hCRSxDQUFDLEVBQUVELEtBQUs7b0JBQ1osQ0FBQztnQkFDTCxDQUFDO2dCQUNESCxHQUFHLENBQUNRLElBQUksQ0FBQ0gsSUFBSTtZQUNqQixDQUFDLENBQUMsS0FBSyxFQUFFSSxHQUFHLEVBQUUsQ0FBQztnQkFDWCxLQUFLLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxDQUFDRSxRQUFRLEdBQUdGLEdBQUcsQ0FBQ0UsUUFBUSxDQUFDQyxNQUFNLEdBQUcsR0FBRztnQkFDM0QsS0FBSyxDQUFDQyxPQUFPLEdBQUdKLEdBQUcsQ0FBQ0UsUUFBUSxHQUN0QkYsR0FBRyxDQUFDRSxRQUFRLENBQUNOLElBQUksQ0FBQ1MsTUFBTSxHQUN4QkwsR0FBRyxDQUFDSSxPQUFPO2dCQUVqQmIsR0FBRyxDQUFDWSxNQUFNLENBQUNGLFVBQVUsRUFBRUYsSUFBSSxDQUFDLENBQUM7b0JBQ3pCTyxJQUFJLEVBQUVOLEdBQUcsQ0FBQ00sSUFBSTtvQkFDZEQsTUFBTSxFQUFFRCxPQUFPO2dCQUNuQixDQUFDO1lBQ0wsQ0FBQztZQUNELEtBQUs7O0FBRWpCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXdzLWFwcC8uL3BhZ2VzL2FwaS9hcnRpY2xlcy5qcz9kODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gcmVxLnF1ZXJ5LmN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLnF1ZXJ5LnE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJ2FwaS9hcnRpY2xlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBxOiBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gZXJyLnJlc3BvbnNlID8gZXJyLnJlc3BvbnNlLnN0YXR1cyA6IDUwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyLnJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgID8gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgIDogZXJyLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKHN0YXR1c0NvZGUpLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBlcnIudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbImFwaSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImN1cnJlbnRQYWdlIiwicXVlcnkiLCJxIiwiZGF0YSIsImdldCIsInBhcmFtcyIsImpzb24iLCJlcnIiLCJzdGF0dXNDb2RlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZXJyb3JzIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/articles.js\n");

/***/ }),

/***/ "(api)/./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3080\",\n    headers: {\n        post: {\n            'Content-Type': 'application/json'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHRCxtREFBWSxDQUFDLENBQUM7SUFDdEJHLE9BQU8sRUFBRUMsdUJBQWdDO0lBQ3pDRyxPQUFPLEVBQUUsQ0FBQztRQUNOQyxJQUFJLEVBQUUsQ0FBQztZQUNILENBQWMsZUFBRSxDQUFrQjtRQUN0QyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZVAsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV3cy1hcHAvLi9zZXJ2aWNlcy9hcGkuanM/ODAzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9IT1NULFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgcG9zdDoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0hPU1QiLCJoZWFkZXJzIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/api.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/articles.js"));
module.exports = __webpack_exports__;

})();