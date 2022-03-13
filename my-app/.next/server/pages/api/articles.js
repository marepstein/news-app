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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api */ \"(api)/./services/api.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case 'GET':\n            try {\n                const currentPage = req.query.currentPage;\n                const { data  } = await _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('api/articles', {\n                    params: {\n                        currentPage: currentPage\n                    }\n                });\n                res.json(data);\n            } catch (err) {\n                const statusCode = err.response ? err.response.status : 500;\n                const message = err.response ? err.response.data.errors : err.message;\n                res.status(statusCode).json({\n                    type: err.type,\n                    errors: message\n                });\n            }\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXJ0aWNsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFFcEMsaUVBQU0sT0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxFQUFDLENBQUMsR0FBR0YsR0FBRztJQUV0QixNQUFNLENBQUVFLE1BQU07UUFDVixJQUFJLENBQUMsQ0FBSztZQUNOLEdBQUcsQ0FBQyxDQUFDO2dCQUNELEtBQUssQ0FBQ0MsV0FBVyxHQUFHSCxHQUFHLENBQUNJLEtBQUssQ0FBQ0QsV0FBVztnQkFDekMsS0FBSyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNOLHlEQUFPLENBQUMsQ0FBYyxlQUFFLENBQUM7b0JBQzVDUSxNQUFNLEVBQUUsQ0FBQzt3QkFDTEosV0FBVyxFQUFFQSxXQUFXO29CQUM1QixDQUFDO2dCQUNMLENBQUM7Z0JBQ0RGLEdBQUcsQ0FBQ08sSUFBSSxDQUFDSCxJQUFJO1lBQ2pCLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEdBQUcsRUFBRSxDQUFDO2dCQUNYLEtBQUssQ0FBQ0MsVUFBVSxHQUFHRCxHQUFHLENBQUNFLFFBQVEsR0FBR0YsR0FBRyxDQUFDRSxRQUFRLENBQUNDLE1BQU0sR0FBRyxHQUFHO2dCQUMzRCxLQUFLLENBQUNDLE9BQU8sR0FBR0osR0FBRyxDQUFDRSxRQUFRLEdBQ3RCRixHQUFHLENBQUNFLFFBQVEsQ0FBQ04sSUFBSSxDQUFDUyxNQUFNLEdBQ3hCTCxHQUFHLENBQUNJLE9BQU87Z0JBRWpCWixHQUFHLENBQUNXLE1BQU0sQ0FBQ0YsVUFBVSxFQUFFRixJQUFJLENBQUMsQ0FBQztvQkFDekJPLElBQUksRUFBRU4sR0FBRyxDQUFDTSxJQUFJO29CQUNkRCxNQUFNLEVBQUVELE9BQU87Z0JBQ25CLENBQUM7WUFDTCxDQUFDO1lBQ0QsS0FBSzs7QUFFakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmRlLW5hc3QtdGVzdC8uL3BhZ2VzL2FwaS9hcnRpY2xlcy5qcz9kODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gcmVxLnF1ZXJ5LmN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnYXBpL2FydGljbGVzJywge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gZXJyLnJlc3BvbnNlID8gZXJyLnJlc3BvbnNlLnN0YXR1cyA6IDUwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyLnJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgID8gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgIDogZXJyLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKHN0YXR1c0NvZGUpLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBlcnIudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbImFwaSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImN1cnJlbnRQYWdlIiwicXVlcnkiLCJkYXRhIiwiZ2V0IiwicGFyYW1zIiwianNvbiIsImVyciIsInN0YXR1c0NvZGUiLCJyZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/articles.js\n");

/***/ }),

/***/ "(api)/./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3080\",\n    headers: {\n        post: {\n            'Content-Type': 'application/json'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHRCxtREFBWSxDQUFDLENBQUM7SUFDdEJHLE9BQU8sRUFBRUMsdUJBQWdDO0lBQ3pDRyxPQUFPLEVBQUUsQ0FBQztRQUNOQyxJQUFJLEVBQUUsQ0FBQztZQUNILENBQWMsZUFBRSxDQUFrQjtRQUN0QyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZVAsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uZGUtbmFzdC10ZXN0Ly4vc2VydmljZXMvYXBpLmpzPzgwM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfSE9TVCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgIHBvc3Q6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9IT1NUIiwiaGVhZGVycyIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/api.js\n");

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