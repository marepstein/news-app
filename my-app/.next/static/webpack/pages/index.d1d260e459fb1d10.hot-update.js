"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ \"./styles/mediaQueries.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_getArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getArticles */ \"./services/getArticles.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.jsx\");\n/* harmony import */ var _components_common_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/Card */ \"./components/common/Card.jsx\");\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Button */ \"./components/common/Button.jsx\");\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      flex-direction: row;\\n      flex-wrap: wrap;\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    max-width: 1360px;\\n    margin: 2rem auto;\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n\\n    \",\n        \"\\n\\n    > :nth-child(4n) {\\n        border: 1px solid red;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.media.tablet(_templateObject()));\n_c = ContentWrapper;\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), articles = ref[0], setArticles = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), page = ref3[0], setPage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('uk'), filter = ref4[0], setFilter = ref4[1];\n    var handleChange = function(searchValue) {\n        if (!searchValue) {\n            setFilter('uk');\n        }\n        setFilter(searchValue);\n        console.log(filter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setLoading(true);\n        (0,_services_getArticles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(page, filter).then(function(response) {\n            setArticles(response.data.articles);\n            setLoading(false);\n        }).catch(function(error) {\n            return setError(error.message);\n        });\n    }, [\n        page,\n        filter\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        disabled: page <= 1,\n                        onClick: function() {\n                            return setPage(page - 1);\n                        },\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        disabled: page >= 10,\n                        onClick: function() {\n                            return setPage(page + 1);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"AzV81qyuuYa+CwJMFHwgIReP90k=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"ContentWrapper\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDUTtBQUVIO0FBQ1M7QUFFTDtBQUNJO0FBQ0g7Ozs7Ozs7Ozs7Ozs7UUFTN0IsQ0FHakI7Ozs7Ozs7OztRQVZnQyxDQU85QjtRQUdBLENBS0o7Ozs7Ozs7O0FBZkEsR0FBSyxDQUFDUSxjQUFjLEdBQUdSLDZEQUFVLHFCQU8zQkMsOERBQVk7S0FQWk8sY0FBYztBQWlCTCxRQUFRLENBQUNHLElBQUksR0FBRyxDQUFDOztJQUM1QixHQUFLLENBQTJCVCxHQUFVLEdBQVZBLCtDQUFRLElBQWpDVSxRQUFRLEdBQWlCVixHQUFVLEtBQXpCVyxXQUFXLEdBQUlYLEdBQVU7SUFDMUMsR0FBSyxDQUFxQkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUEzQlksTUFBSyxHQUFjWixJQUFVLEtBQXRCYSxRQUFRLEdBQUliLElBQVU7SUFDcEMsR0FBSyxDQUF5QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUEvQmMsT0FBTyxHQUFnQmQsSUFBVSxLQUF4QmUsVUFBVSxHQUFJZixJQUFVO0lBQ3hDLEdBQUssQ0FBbUJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNCZ0IsSUFBSSxHQUFhaEIsSUFBVyxLQUF0QmlCLE9BQU8sR0FBSWpCLElBQVc7SUFDbkMsR0FBSyxDQUF1QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLENBQUksTUFBbENrQixNQUFNLEdBQWVsQixJQUFjLEtBQTNCbUIsU0FBUyxHQUFJbkIsSUFBYztJQUUxQyxHQUFLLENBQUNvQixZQUFZLEdBQUcsUUFBUSxDQUFQQyxXQUFXLEVBQUssQ0FBQztRQUNuQyxFQUFFLEdBQUdBLFdBQVcsRUFBRSxDQUFDO1lBQ2ZGLFNBQVMsQ0FBQyxDQUFJO1FBQ2xCLENBQUM7UUFDREEsU0FBUyxDQUFDRSxXQUFXO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsTUFBTTtJQUN0QixDQUFDO0lBRURqQixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiYyxVQUFVLENBQUMsSUFBSTtRQUNmYixpRUFBYyxDQUFDYyxJQUFJLEVBQUVFLE1BQU0sRUFDdEJNLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO1lBQ2pCZCxXQUFXLENBQUNjLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDaEIsUUFBUTtZQUNsQ0ssVUFBVSxDQUFDLEtBQUs7UUFDcEIsQ0FBQyxFQUNBWSxLQUFLLENBQUMsUUFBUSxDQUFQZixLQUFLO1lBQUtDLE1BQU0sQ0FBTkEsUUFBUSxDQUFDRCxLQUFLLENBQUNnQixPQUFPOztJQUNoRCxDQUFDLEVBQUUsQ0FBQ1o7UUFBQUEsSUFBSTtRQUFFRSxNQUFNO0lBQUEsQ0FBQztJQUVqQixNQUFNOzt3RkFFR2YsNkRBQVM7Z0JBQUMwQixRQUFRLEVBQUVULFlBQVk7Ozs7Ozt3RkFDaENkLGNBQWM7O2dHQUNWRiwrREFBVzt3QkFBQ00sUUFBUSxFQUFFQSxRQUFROzs7Ozs7Z0dBQzlCTCxpRUFBTTt3QkFDSHlCLFFBQVEsRUFBRWQsSUFBSSxJQUFJLENBQUM7d0JBQ25CZSxPQUFPLEVBQUUsUUFBUTs0QkFBRmQsTUFBTSxDQUFOQSxPQUFPLENBQUNELElBQUksR0FBRyxDQUFDOzt3QkFDL0JnQixRQUFRLEVBQUMsQ0FBTTs7Ozs7O2dHQUVsQjNCLGlFQUFNO3dCQUNIeUIsUUFBUSxFQUFFZCxJQUFJLElBQUksRUFBRTt3QkFDcEJlLE9BQU8sRUFBRSxRQUFROzRCQUFGZCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQUM7O3dCQUMvQmdCLFFBQVEsRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7OztBQUtuQyxDQUFDO0dBM0N1QnZCLElBQUk7TUFBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICcuLi9zdHlsZXMvbWVkaWFRdWVyaWVzJztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXRBbGxBcnRpY2xlcyBmcm9tICcuLi9zZXJ2aWNlcy9nZXRBcnRpY2xlcyc7XG5cbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0NhcmQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24nO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiAxMzYwcHg7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJHttZWRpYS50YWJsZXRgXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICBgfVxuXG4gICAgPiA6bnRoLWNoaWxkKDRuKSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJ3VrJyk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoc2VhcmNoVmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFzZWFyY2hWYWx1ZSkge1xuICAgICAgICAgICAgc2V0RmlsdGVyKCd1aycpO1xuICAgICAgICB9XG4gICAgICAgIHNldEZpbHRlcihzZWFyY2hWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGdldEFsbEFydGljbGVzKHBhZ2UsIGZpbHRlcilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKHJlc3BvbnNlLmRhdGEuYXJ0aWNsZXMpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHNldEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9LCBbcGFnZSwgZmlsdGVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNlYXJjaEJhciBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlQ2FyZCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA8PSAxfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49XCJQcmV2XCJcbiAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSAxMH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlICsgMSl9XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiTmV4dFwiXG4gICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJtZWRpYSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0QWxsQXJ0aWNsZXMiLCJTZWFyY2hCYXIiLCJBcnRpY2xlQ2FyZCIsIkJ1dHRvbiIsIkNvbnRlbnRXcmFwcGVyIiwiZGl2IiwidGFibGV0IiwiSG9tZSIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlIiwic2V0UGFnZSIsImZpbHRlciIsInNldEZpbHRlciIsImhhbmRsZUNoYW5nZSIsInNlYXJjaFZhbHVlIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsIm1lc3NhZ2UiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwib25DbGljayIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});