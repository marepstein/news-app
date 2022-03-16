"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.jsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_nav_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav/menu */ \"./components/nav/menu.jsx\");\n/* harmony import */ var _services_loadingProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loadingProvider */ \"./services/loadingProvider.jsx\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.jsx\");\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('hi'), test = ref[0], setTest = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), articles = ref1[0], setArticles = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), error1 = ref2[0], setError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), page = ref4[0], setPage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('uk'), filter = ref5[0], setFilter = ref5[1];\n    useEffect(function() {\n        setLoading(true);\n        getAllArticles(page, filter).then(function(response) {\n            setArticles(response.data.articles);\n            setLoading(false);\n        }).catch(function(error) {\n            return setError(error.message);\n        });\n    }, [\n        page,\n        filter\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/_app.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps, {\n                test: test\n            }), void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/_app.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/_app.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this));\n}\n_s(MyApp, \"KaqQbHjFuKgWbwHCskH3jCFh5F8=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaUI7QUFDZDtBQUNMO0FBRVc7QUFDZ0I7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRXZDTSxLQUFLLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNqQyxHQUFLLENBQW1CUixHQUFjLEdBQWRBLCtDQUFRLENBQUMsQ0FBSSxNQUE5QlMsSUFBSSxHQUFhVCxHQUFjLEtBQXpCVSxPQUFPLEdBQUlWLEdBQWM7SUFDdEMsR0FBSyxDQUEyQkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUFqQ1csUUFBUSxHQUFpQlgsSUFBVSxLQUF6QlksV0FBVyxHQUFJWixJQUFVO0lBQzFDLEdBQUssQ0FBcUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBM0JhLE1BQUssR0FBY2IsSUFBVSxLQUF0QmMsUUFBUSxHQUFJZCxJQUFVO0lBQ3BDLEdBQUssQ0FBeUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBL0JlLE9BQU8sR0FBZ0JmLElBQVUsS0FBeEJnQixVQUFVLEdBQUloQixJQUFVO0lBQ3hDLEdBQUssQ0FBbUJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNCaUIsSUFBSSxHQUFhakIsSUFBVyxLQUF0QmtCLE9BQU8sR0FBSWxCLElBQVc7SUFDbkMsR0FBSyxDQUF1QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLENBQUksTUFBbENtQixNQUFNLEdBQWVuQixJQUFjLEtBQTNCb0IsU0FBUyxHQUFJcEIsSUFBYztJQUUxQ3FCLFNBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYkwsVUFBVSxDQUFDLElBQUk7UUFDZk0sY0FBYyxDQUFDTCxJQUFJLEVBQUVFLE1BQU0sRUFDdEJJLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO1lBQ2pCWixXQUFXLENBQUNZLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDZCxRQUFRO1lBQ2xDSyxVQUFVLENBQUMsS0FBSztRQUNwQixDQUFDLEVBQ0FVLEtBQUssQ0FBQyxRQUFRLENBQVBiLEtBQUs7WUFBS0MsTUFBTSxDQUFOQSxRQUFRLENBQUNELEtBQUssQ0FBQ2MsT0FBTzs7SUFDaEQsQ0FBQyxFQUFFLENBQUNWO1FBQUFBLElBQUk7UUFBRUUsTUFBTTtJQUFBLENBQUM7SUFFakIsTUFBTSw2RUFDRGxCLDREQUFhO1FBQUNDLEtBQUssRUFBRUEscURBQUs7O3dGQUd0QkMsNERBQUk7Ozs7O3dGQUNKSSxTQUFTLG9CQUFLQyxTQUFTO2dCQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7Ozs7OztBQUtoRCxDQUFDO0dBNUJRSCxLQUFLO0tBQUxBLEtBQUs7QUE4QmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2L21lbnUnO1xuaW1wb3J0IExvYWRpbmdQcm92aWRlciBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nUHJvdmlkZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCBbdGVzdCwgc2V0VGVzdF0gPSB1c2VTdGF0ZSgnaGknKTtcbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCd1aycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgZ2V0QWxsQXJ0aWNsZXMocGFnZSwgZmlsdGVyKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZXMocmVzcG9uc2UuZGF0YS5hcnRpY2xlcyk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gc2V0RXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgIH0sIFtwYWdlLCBmaWx0ZXJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICB7LyogPExvYWRpbmdQcm92aWRlcj4gKi99XG4gICAgICAgICAgICB7LyogPExheW91dD4gKi99XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB0ZXN0PXt0ZXN0fSAvPlxuICAgICAgICAgICAgey8qIDwvTGF5b3V0PiAqL31cbiAgICAgICAgICAgIHsvKiA8L0xvYWRpbmdQcm92aWRlcj4gKi99XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsIk1lbnUiLCJMb2FkaW5nUHJvdmlkZXIiLCJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRlc3QiLCJzZXRUZXN0IiwiYXJ0aWNsZXMiLCJzZXRBcnRpY2xlcyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBhZ2UiLCJzZXRQYWdlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidXNlRWZmZWN0IiwiZ2V0QWxsQXJ0aWNsZXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});