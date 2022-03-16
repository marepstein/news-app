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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ \"./styles/mediaQueries.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_getArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getArticles */ \"./services/getArticles.js\");\n/* harmony import */ var _services_loadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loadingContext */ \"./services/loadingContext.jsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.jsx\");\n/* harmony import */ var _components_common_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Card */ \"./components/common/Card.jsx\");\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Button */ \"./components/common/Button.jsx\");\n/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FilterBar */ \"./components/FilterBar.jsx\");\n/* harmony import */ var _components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/Spinner */ \"./components/common/Spinner.jsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    //   flex-direction: row;\\n    //   flex-wrap: wrap;\\n    grid-template-columns: repeat(3, 1fr);\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin: 2rem auto;\\n    display: grid;\\n    grid-template-columns: 25% 25% 25%;\\n    grid-gap: 1em 1em;\\n    // justify-content: center;\\n    // flex-direction: column;\\n\\n    \",\n        \"// > :nth-child(4n) {\\n    //     grid-column: auto / span 4;\\n    //     grid-row: auto / span 4;\\n    //     height: 200px;\\n    // }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject1(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.media.tablet(_templateObject()));\n_c = ContentWrapper;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject2());\n_c1 = Container;\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject3());\n_c2 = ButtonContainer;\nfunction Home(param) {\n    var test = param.test;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_services_loadingContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), showLoading = ref.showLoading, hideLoading = ref.hideLoading;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), articles = ref1[0], setArticles = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), error1 = ref2[0], setError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), page = ref4[0], setPage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('uk'), filter = ref5[0], setFilter = ref5[1];\n    console.log(test);\n    var handleChange = function(searchValue) {\n        setFilter(searchValue);\n    };\n    var handleClick = function(clickedLink, e) {\n        setFilter(clickedLink);\n        console.log(clickedLink);\n        console.log(e);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setLoading(true);\n        (0,_services_getArticles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(page, filter).then(function(response) {\n            setArticles(response.data.articles);\n            setLoading(false);\n        }).catch(function(error) {\n            return setError(error.message);\n        });\n    }, [\n        page,\n        filter\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page <= 1,\n                                onClick: function() {\n                                    return setPage(page - 1);\n                                },\n                                children: \"Prev\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page >= 9,\n                                onClick: function() {\n                                    return setPage(page + 1);\n                                },\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n                children: !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    articles: articles,\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 97,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 99,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, this));\n};\n_s(Home, \"z6CaxAT/1rPUo4Zkt/z5SRL3DD8=\");\n_c3 = Home;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ContentWrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"ButtonContainer\");\n$RefreshReg$(_c3, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFFUztBQUVIO0FBQ0c7QUFFUjtBQUNJO0FBQ0g7QUFDRDtBQUNHO0FBQ0k7Ozs7Ozs7Ozs7Ozs7UUFVbkMsQ0FJakI7Ozs7Ozs7OztRQVpnQyxDQVE5QjtRQUlBLENBS0o7Ozs7Ozs7OztRQUU2QixDQUk3Qjs7Ozs7Ozs7O1FBRW1DLENBSW5DOzs7Ozs7OztBQTdCQSxHQUFLLENBQUNhLGNBQWMsR0FBR2IsOERBQVUscUJBUTNCQyw4REFBWTtLQVJaWSxjQUFjO0FBbUJwQixHQUFLLENBQUNHLFNBQVMsR0FBR2hCLDhEQUFVO01BQXRCZ0IsU0FBUztBQU1mLEdBQUssQ0FBQ0MsZUFBZSxHQUFHakIsOERBQVU7TUFBNUJpQixlQUFlO0FBTU4sUUFBUSxDQUFDQyxJQUFJLENBQUMsS0FBUSxFQUFFLENBQUM7UUFBVEMsSUFBSSxHQUFOLEtBQVEsQ0FBTkEsSUFBSTs7SUFDL0IsR0FBSyxDQUFnQ2YsR0FBMEIsR0FBMUJBLGlEQUFVLENBQUNFLGdFQUFjLEdBQXREYyxXQUFXLEdBQWtCaEIsR0FBMEIsQ0FBdkRnQixXQUFXLEVBQUVDLFdBQVcsR0FBS2pCLEdBQTBCLENBQTFDaUIsV0FBVztJQUNoQyxHQUFLLENBQTJCbkIsSUFBVSxHQUFWQSwrQ0FBUSxJQUFqQ29CLFFBQVEsR0FBaUJwQixJQUFVLEtBQXpCcUIsV0FBVyxHQUFJckIsSUFBVTtJQUMxQyxHQUFLLENBQXFCQSxJQUFVLEdBQVZBLCtDQUFRLElBQTNCc0IsTUFBSyxHQUFjdEIsSUFBVSxLQUF0QnVCLFFBQVEsR0FBSXZCLElBQVU7SUFDcEMsR0FBSyxDQUF5QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUEvQndCLE9BQU8sR0FBZ0J4QixJQUFVLEtBQXhCeUIsVUFBVSxHQUFJekIsSUFBVTtJQUN4QyxHQUFLLENBQW1CQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUEzQjBCLElBQUksR0FBYTFCLElBQVcsS0FBdEIyQixPQUFPLEdBQUkzQixJQUFXO0lBQ25DLEdBQUssQ0FBdUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxDQUFJLE1BQWxDNEIsTUFBTSxHQUFlNUIsSUFBYyxLQUEzQjZCLFNBQVMsR0FBSTdCLElBQWM7SUFFMUM4QixPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsSUFBSTtJQUVoQixHQUFLLENBQUNlLFlBQVksR0FBRyxRQUFRLENBQVBDLFdBQVcsRUFBSyxDQUFDO1FBQ25DSixTQUFTLENBQUNJLFdBQVc7SUFDekIsQ0FBQztJQUVELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsV0FBVyxFQUFFQyxDQUFDLEVBQUssQ0FBQztRQUNyQ1AsU0FBUyxDQUFDTSxXQUFXO1FBQ3JCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksV0FBVztRQUN2QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLENBQUM7SUFDakIsQ0FBQztJQUVEbkMsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYndCLFVBQVUsQ0FBQyxJQUFJO1FBQ2Z0QixpRUFBYyxDQUFDdUIsSUFBSSxFQUFFRSxNQUFNLEVBQ3RCUyxJQUFJLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUssQ0FBQztZQUNqQmpCLFdBQVcsQ0FBQ2lCLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDbkIsUUFBUTtZQUNsQ0ssVUFBVSxDQUFDLEtBQUs7UUFDcEIsQ0FBQyxFQUNBZSxLQUFLLENBQUMsUUFBUSxDQUFQbEIsS0FBSztZQUFLQyxNQUFNLENBQU5BLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDbUIsT0FBTzs7SUFDaEQsQ0FBQyxFQUFFLENBQUNmO1FBQUFBLElBQUk7UUFBRUUsTUFBTTtJQUFBLENBQUM7SUFFakIsTUFBTSw2RUFDRGxCLGtFQUFZOzt3RkFDUkYsNkRBQVM7Z0JBQUNrQyxPQUFPLEVBQUVSLFdBQVc7Ozs7Ozt3RkFDOUJwQixTQUFTOztnR0FDTFQsNkRBQVM7d0JBQUNzQyxRQUFRLEVBQUVYLFlBQVk7Ozs7OztnR0FDaENqQixlQUFlOzt3R0FDWFIsaUVBQU07Z0NBQ0hxQyxRQUFRLEVBQUVsQixJQUFJLElBQUksQ0FBQztnQ0FDbkJnQixPQUFPLEVBQUUsUUFBUTtvQ0FBRmYsTUFBTSxDQUFOQSxPQUFPLENBQUNELElBQUksR0FBRyxDQUFDOztnQ0FDL0JtQixRQUFRLEVBQUMsQ0FBTTs7Ozs7O3dHQUVsQnRDLGlFQUFNO2dDQUNIcUMsUUFBUSxFQUFFbEIsSUFBSSxJQUFJLENBQUM7Z0NBQ25CZ0IsT0FBTyxFQUFFLFFBQVE7b0NBQUZmLE1BQU0sQ0FBTkEsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBQzs7Z0NBQy9CbUIsUUFBUSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJMUJsQyxjQUFjOzJCQUNUYSxPQUFPLCtFQUNKbEIsK0RBQVc7b0JBQUNjLFFBQVEsRUFBRUEsUUFBUTtvQkFBRUksT0FBTyxFQUFFQSxPQUFPOzs7Ozt1R0FFaERmLGtFQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCLENBQUM7R0F6RHVCTyxJQUFJO01BQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAnLi4vc3R5bGVzL21lZGlhUXVlcmllcyc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBnZXRBbGxBcnRpY2xlcyBmcm9tICcuLi9zZXJ2aWNlcy9nZXRBcnRpY2xlcyc7XG5pbXBvcnQgTG9hZGluZ0NvbnRleHQgZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZ0NvbnRleHQnO1xuXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcbmltcG9ydCBBcnRpY2xlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9DYXJkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uJztcbmltcG9ydCBGaWx0ZXJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXJCYXInO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vU3Bpbm5lcic7XG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XG4gICAgZ3JpZC1nYXA6IDFlbSAxZW07XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICR7bWVkaWEudGFibGV0YFxuICAgIC8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBgfS8vID4gOm50aC1jaGlsZCg0bikge1xuICAgIC8vICAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gNDtcbiAgICAvLyAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDQ7XG4gICAgLy8gICAgIGhlaWdodDogMjAwcHg7XG4gICAgLy8gfVxuYDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG5gO1xuXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0ZXN0IH0pIHtcbiAgICBjb25zdCB7IHNob3dMb2FkaW5nLCBoaWRlTG9hZGluZyB9ID0gdXNlQ29udGV4dChMb2FkaW5nQ29udGV4dCk7XG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgndWsnKTtcblxuICAgIGNvbnNvbGUubG9nKHRlc3QpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNlYXJjaFZhbHVlKSA9PiB7XG4gICAgICAgIHNldEZpbHRlcihzZWFyY2hWYWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGNsaWNrZWRMaW5rLCBlKSA9PiB7XG4gICAgICAgIHNldEZpbHRlcihjbGlja2VkTGluayk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRMaW5rKTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGdldEFsbEFydGljbGVzKHBhZ2UsIGZpbHRlcilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKHJlc3BvbnNlLmRhdGEuYXJ0aWNsZXMpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHNldEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9LCBbcGFnZSwgZmlsdGVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZpbHRlckJhciBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJhciBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlIDw9IDF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiUHJldlwiXG4gICAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gOX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSArIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49XCJOZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhcmQgYXJ0aWNsZXM9e2FydGljbGVzfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwibWVkaWEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJnZXRBbGxBcnRpY2xlcyIsIkxvYWRpbmdDb250ZXh0IiwiU2VhcmNoQmFyIiwiQXJ0aWNsZUNhcmQiLCJCdXR0b24iLCJGaWx0ZXJCYXIiLCJTcGlubmVyIiwiQXBwQ29udGFpbmVyIiwiQ29udGVudFdyYXBwZXIiLCJkaXYiLCJ0YWJsZXQiLCJDb250YWluZXIiLCJCdXR0b25Db250YWluZXIiLCJIb21lIiwidGVzdCIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFnZSIsInNldFBhZ2UiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwic2VhcmNoVmFsdWUiLCJoYW5kbGVDbGljayIsImNsaWNrZWRMaW5rIiwiZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsIm1lc3NhZ2UiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});