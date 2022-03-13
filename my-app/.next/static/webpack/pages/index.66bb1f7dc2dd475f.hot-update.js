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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ \"./styles/mediaQueries.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_getArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getArticles */ \"./services/getArticles.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.jsx\");\n/* harmony import */ var _components_common_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/Card */ \"./components/common/Card.jsx\");\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Button */ \"./components/common/Button.jsx\");\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      flex-direction: row;\\n      flex-wrap: wrap;\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    max-width: 1360px;\\n    margin: 2rem auto;\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n\\n    \",\n        \"\\n\\n    > :nth-child(4n) {\\n        border: 1px solid red;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.media.tablet(_templateObject()));\n_c = ContentWrapper;\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), articles = ref[0], setArticles = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), page = ref3[0], setPage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), filter = ref4[0], setFilter = ref4[1];\n    var handleChange = function(searchValue) {\n        setFilter(searchValue);\n        console.log(filter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setLoading(true);\n        (0,_services_getArticles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(page, filter).then(function(response) {\n            setArticles(response.data.articles);\n            setLoading(false);\n        }).catch(function(error) {\n            return setError(error.message);\n        });\n    }, [\n        page\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        disabled: page <= 1,\n                        onClick: function() {\n                            return setPage(page - 1);\n                        },\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        disabled: page >= 10,\n                        onClick: function() {\n                            return setPage(page + 1);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"J9dFGkjPMoORFTuT2YvQR7/p/lE=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"ContentWrapper\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDUTtBQUVIO0FBQ1M7QUFFTDtBQUNJO0FBQ0g7Ozs7Ozs7Ozs7Ozs7UUFTN0IsQ0FHakI7Ozs7Ozs7OztRQVZnQyxDQU85QjtRQUdBLENBS0o7Ozs7Ozs7O0FBZkEsR0FBSyxDQUFDUSxjQUFjLEdBQUdSLDZEQUFVLHFCQU8zQkMsOERBQVk7S0FQWk8sY0FBYztBQWlCTCxRQUFRLENBQUNHLElBQUksR0FBRyxDQUFDOztJQUM1QixHQUFLLENBQTJCVCxHQUFVLEdBQVZBLCtDQUFRLElBQWpDVSxRQUFRLEdBQWlCVixHQUFVLEtBQXpCVyxXQUFXLEdBQUlYLEdBQVU7SUFDMUMsR0FBSyxDQUFxQkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUEzQlksTUFBSyxHQUFjWixJQUFVLEtBQXRCYSxRQUFRLEdBQUliLElBQVU7SUFDcEMsR0FBSyxDQUF5QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUEvQmMsT0FBTyxHQUFnQmQsSUFBVSxLQUF4QmUsVUFBVSxHQUFJZixJQUFVO0lBQ3hDLEdBQUssQ0FBbUJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNCZ0IsSUFBSSxHQUFhaEIsSUFBVyxLQUF0QmlCLE9BQU8sR0FBSWpCLElBQVc7SUFDbkMsR0FBSyxDQUF1QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUE3QmtCLE1BQU0sR0FBZWxCLElBQVUsS0FBdkJtQixTQUFTLEdBQUluQixJQUFVO0lBRXRDLEdBQUssQ0FBQ29CLFlBQVksR0FBRyxRQUFRLENBQVBDLFdBQVcsRUFBSyxDQUFDO1FBQ25DRixTQUFTLENBQUNFLFdBQVc7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxNQUFNO0lBQ3RCLENBQUM7SUFFRGpCLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JjLFVBQVUsQ0FBQyxJQUFJO1FBQ2ZiLGlFQUFjLENBQUNjLElBQUksRUFBRUUsTUFBTSxFQUN0Qk0sSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7WUFDakJkLFdBQVcsQ0FBQ2MsUUFBUSxDQUFDQyxJQUFJLENBQUNoQixRQUFRO1lBQ2xDSyxVQUFVLENBQUMsS0FBSztRQUNwQixDQUFDLEVBQ0FZLEtBQUssQ0FBQyxRQUFRLENBQVBmLEtBQUs7WUFBS0MsTUFBTSxDQUFOQSxRQUFRLENBQUNELEtBQUssQ0FBQ2dCLE9BQU87O0lBQ2hELENBQUMsRUFBRSxDQUFDWjtRQUFBQSxJQUFJO0lBQUEsQ0FBQztJQUVULE1BQU07O3dGQUVHYiw2REFBUztnQkFBQzBCLFFBQVEsRUFBRVQsWUFBWTs7Ozs7O3dGQUNoQ2QsY0FBYzs7Z0dBQ1ZGLCtEQUFXO3dCQUFDTSxRQUFRLEVBQUVBLFFBQVE7Ozs7OztnR0FDOUJMLGlFQUFNO3dCQUNIeUIsUUFBUSxFQUFFZCxJQUFJLElBQUksQ0FBQzt3QkFDbkJlLE9BQU8sRUFBRSxRQUFROzRCQUFGZCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQUM7O3dCQUMvQmdCLFFBQVEsRUFBQyxDQUFNOzs7Ozs7Z0dBRWxCM0IsaUVBQU07d0JBQ0h5QixRQUFRLEVBQUVkLElBQUksSUFBSSxFQUFFO3dCQUNwQmUsT0FBTyxFQUFFLFFBQVE7NEJBQUZkLE1BQU0sQ0FBTkEsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBQzs7d0JBQy9CZ0IsUUFBUSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7O0FBS25DLENBQUM7R0F4Q3VCdkIsSUFBSTtNQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJy4uL3N0eWxlcy9tZWRpYVF1ZXJpZXMnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldEFsbEFydGljbGVzIGZyb20gJy4uL3NlcnZpY2VzL2dldEFydGljbGVzJztcblxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XG5pbXBvcnQgQXJ0aWNsZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vQ2FyZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbic7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXgtd2lkdGg6IDEzNjBweDtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAke21lZGlhLnRhYmxldGBcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIGB9XG5cbiAgICA+IDpudGgtY2hpbGQoNG4pIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNlYXJjaFZhbHVlKSA9PiB7XG4gICAgICAgIHNldEZpbHRlcihzZWFyY2hWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGdldEFsbEFydGljbGVzKHBhZ2UsIGZpbHRlcilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKHJlc3BvbnNlLmRhdGEuYXJ0aWNsZXMpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHNldEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9LCBbcGFnZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhcmQgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPD0gMX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlIC0gMSl9XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiUHJldlwiXG4gICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gMTB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSArIDEpfVxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj1cIk5leHRcIlxuICAgICAgICAgICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwibWVkaWEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldEFsbEFydGljbGVzIiwiU2VhcmNoQmFyIiwiQXJ0aWNsZUNhcmQiLCJCdXR0b24iLCJDb250ZW50V3JhcHBlciIsImRpdiIsInRhYmxldCIsIkhvbWUiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFnZSIsInNldFBhZ2UiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJzZWFyY2hWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJtZXNzYWdlIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});