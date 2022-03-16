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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ \"./styles/mediaQueries.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_getArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getArticles */ \"./services/getArticles.js\");\n/* harmony import */ var _services_loadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loadingContext */ \"./services/loadingContext.jsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.jsx\");\n/* harmony import */ var _components_common_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Card */ \"./components/common/Card.jsx\");\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Button */ \"./components/common/Button.jsx\");\n/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FilterBar */ \"./components/FilterBar.jsx\");\n/* harmony import */ var _components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/Spinner */ \"./components/common/Spinner.jsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    //   flex-direction: row;\\n    //   flex-wrap: wrap;\\n    grid-template-columns: repeat(3, 1fr);\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin: 2rem auto;\\n    display: grid;\\n    grid-template-columns: 25% 25% 25%;\\n    grid-gap: 1em 1em;\\n    // justify-content: center;\\n    // flex-direction: column;\\n\\n    \",\n        \"// > :nth-child(4n) {\\n    //     grid-column: auto / span 4;\\n    //     grid-row: auto / span 4;\\n    //     height: 200px;\\n    // }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject1(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.media.tablet(_templateObject()));\n_c = ContentWrapper;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject2());\n_c1 = Container;\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject3());\n_c2 = ButtonContainer;\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_services_loadingContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), showLoading = ref.showLoading, hideLoading = ref.hideLoading;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), articles = ref1[0], setArticles = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), error1 = ref2[0], setError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), page = ref4[0], setPage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('uk'), filter = ref5[0], setFilter = ref5[1];\n    var handleChange = function(searchValue) {\n        setFilter(searchValue);\n    };\n    var handleClick = function(clickedLink, index) {\n        setFilter(clickedLink);\n        console.log(filter);\n        console.log(index);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setLoading(true);\n        (0,_services_getArticles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(page, filter).then(function(response) {\n            setArticles(response.data.articles);\n            setLoading(false);\n        }).catch(function(error) {\n            return setError(error.message);\n        });\n    }, [\n        page,\n        filter\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page <= 1,\n                                onClick: function() {\n                                    return setPage(page - 1);\n                                },\n                                children: \"Prev\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page >= 9,\n                                onClick: function() {\n                                    return setPage(page + 1);\n                                },\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n                children: !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    articles: articles,\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 95,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 97,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this));\n};\n_s(Home, \"z6CaxAT/1rPUo4Zkt/z5SRL3DD8=\");\n_c3 = Home;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ContentWrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"ButtonContainer\");\n$RefreshReg$(_c3, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFGZixNQUFNLENBQU5BLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQUM7O2dDQUMvQm1CLFFBQVEsRUFBQyxDQUFNOzs7Ozs7d0dBRWxCckMsaUVBQU07Z0NBQ0hvQyxRQUFRLEVBQUVsQixJQUFJLElBQUksQ0FBQztnQ0FDbkJnQixPQUFPLEVBQUUsUUFBUTtvQ0FBRmYsTUFBTSxDQUFOQSxPQUFPLENBQUNELElBQUksR0FBRyxDQUFDOztnQ0FDL0JtQixRQUFRLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUkxQmpDLGNBQWM7MkJBQ1RZLE9BQU8sK0VBQ0pqQiwrREFBVztvQkFBQ2EsUUFBUSxFQUFFQSxRQUFRO29CQUFFSSxPQUFPLEVBQUVBLE9BQU87Ozs7O3VHQUVoRGQsa0VBQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUIsQ0FBQztHQXZEdUJPLElBQUk7TUFBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICcuLi9zdHlsZXMvbWVkaWFRdWVyaWVzJztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGdldEFsbEFydGljbGVzIGZyb20gJy4uL3NlcnZpY2VzL2dldEFydGljbGVzJztcbmltcG9ydCBMb2FkaW5nQ29udGV4dCBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nQ29udGV4dCc7XG5cbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0NhcmQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24nO1xuaW1wb3J0IEZpbHRlckJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlckJhcic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9TcGlubmVyJztcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcbiAgICBncmlkLWdhcDogMWVtIDFlbTtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJHttZWRpYS50YWJsZXRgXG4gICAgLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8vICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGB9Ly8gPiA6bnRoLWNoaWxkKDRuKSB7XG4gICAgLy8gICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiA0O1xuICAgIC8vICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gNDtcbiAgICAvLyAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAvLyB9XG5gO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbmA7XG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCB7IHNob3dMb2FkaW5nLCBoaWRlTG9hZGluZyB9ID0gdXNlQ29udGV4dChMb2FkaW5nQ29udGV4dCk7XG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgndWsnKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChzZWFyY2hWYWx1ZSkgPT4ge1xuICAgICAgICBzZXRGaWx0ZXIoc2VhcmNoVmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChjbGlja2VkTGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgc2V0RmlsdGVyKGNsaWNrZWRMaW5rKTtcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBnZXRBbGxBcnRpY2xlcyhwYWdlLCBmaWx0ZXIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlcyhyZXNwb25zZS5kYXRhLmFydGljbGVzKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBzZXRFcnJvcihlcnJvci5tZXNzYWdlKSk7XG4gICAgfSwgW3BhZ2UsIGZpbHRlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGaWx0ZXJCYXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA8PSAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlIC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj1cIlByZXZcIlxuICAgICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IDl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgKyAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiTmV4dFwiXG4gICAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIHshbG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVDYXJkIGFydGljbGVzPXthcnRpY2xlc30gbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIm1lZGlhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiZ2V0QWxsQXJ0aWNsZXMiLCJMb2FkaW5nQ29udGV4dCIsIlNlYXJjaEJhciIsIkFydGljbGVDYXJkIiwiQnV0dG9uIiwiRmlsdGVyQmFyIiwiU3Bpbm5lciIsIkFwcENvbnRhaW5lciIsIkNvbnRlbnRXcmFwcGVyIiwiZGl2IiwidGFibGV0IiwiQ29udGFpbmVyIiwiQnV0dG9uQ29udGFpbmVyIiwiSG9tZSIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFnZSIsInNldFBhZ2UiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJzZWFyY2hWYWx1ZSIsImhhbmRsZUNsaWNrIiwiY2xpY2tlZExpbmsiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJtZXNzYWdlIiwib25DbGljayIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});