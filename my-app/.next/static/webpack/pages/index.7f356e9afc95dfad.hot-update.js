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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ \"./styles/mediaQueries.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_getArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getArticles */ \"./services/getArticles.js\");\n/* harmony import */ var _services_loadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loadingContext */ \"./services/loadingContext.jsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.jsx\");\n/* harmony import */ var _components_common_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Card */ \"./components/common/Card.jsx\");\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Button */ \"./components/common/Button.jsx\");\n/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FilterBar */ \"./components/FilterBar.jsx\");\n/* harmony import */ var _components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/Spinner */ \"./components/common/Spinner.jsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      flex-direction: row;\\n      flex-wrap: wrap;\\n    grid-template-columns: repeat(3, 1fr);\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin: 2rem auto;\\n    display: flex;\\n    // grid-template-columns: 25% 25% 25%;\\n    // grid-gap: 1em 1em;\\n    justify-content: center;\\n    flex-direction: column;\\n\\n    \",\n        \"// > :nth-child(4n) {\\n    //     grid-column: auto / span 4;\\n    //     grid-row: auto / span 4;\\n    //     height: 200px;\\n    // }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-size: 2rem;\\n    text-transform: uppercase;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: flex-end;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject1(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.media.tablet(_templateObject()));\n_c = ContentWrapper;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject2());\n_c1 = Container;\nvar SelectedCategory = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].h1(_templateObject3());\n_c2 = SelectedCategory;\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject4());\n_c3 = ButtonContainer;\nfunction Home(param) {\n    var articles = param.articles, setFilter = param.setFilter, filter = param.filter, setPage = param.setPage, page = param.page, loading = param.loading;\n    var handleClick = function(clickedLink) {\n        setFilter(clickedLink);\n        console.log(clickedLink);\n    // console.log(e);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectedCategory, {\n                        children: filter\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page <= 1,\n                                onClick: function() {\n                                    return setPage(page - 1);\n                                },\n                                children: \"Prev\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page >= 9,\n                                onClick: function() {\n                                    return setPage(page + 1);\n                                },\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n                children: !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    articles: articles,\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this));\n};\n_c4 = Home;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"ContentWrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"SelectedCategory\");\n$RefreshReg$(_c3, \"ButtonContainer\");\n$RefreshReg$(_c4, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFFUztBQUVIO0FBQ0c7QUFFUjtBQUNJO0FBQ0g7QUFDRDtBQUNHO0FBQ0k7Ozs7Ozs7Ozs7Ozs7UUFVbkMsQ0FJakI7Ozs7Ozs7OztRQVpnQyxDQVE5QjtRQUlBLENBS0o7Ozs7Ozs7OztRQUU2QixDQUk3Qjs7Ozs7Ozs7O1FBRW1DLENBR25DOzs7Ozs7Ozs7UUFFbUMsQ0FLbkM7Ozs7Ozs7QUFuQ0EsR0FBSyxDQUFDYSxjQUFjLEdBQUdiLDhEQUFVLHFCQVEzQkMsOERBQVk7S0FSWlksY0FBYztBQW1CcEIsR0FBSyxDQUFDRyxTQUFTLEdBQUdoQiw4REFBVTtNQUF0QmdCLFNBQVM7QUFNZixHQUFLLENBQUNDLGdCQUFnQixHQUFHakIsNkRBQVM7TUFBNUJpQixnQkFBZ0I7QUFLdEIsR0FBSyxDQUFDRSxlQUFlLEdBQUduQiw4REFBVTtNQUE1Qm1CLGVBQWU7QUFPTixRQUFRLENBQUNDLElBQUksQ0FBQyxLQU81QixFQUFFLENBQUM7UUFOQUMsUUFBUSxHQURpQixLQU81QixDQU5HQSxRQUFRLEVBQ1JDLFNBQVMsR0FGZ0IsS0FPNUIsQ0FMR0EsU0FBUyxFQUNUQyxNQUFNLEdBSG1CLEtBTzVCLENBSkdBLE1BQU0sRUFDTkMsT0FBTyxHQUprQixLQU81QixDQUhHQSxPQUFPLEVBQ1BDLElBQUksR0FMcUIsS0FPNUIsQ0FGR0EsSUFBSSxFQUNKQyxPQUFPLEdBTmtCLEtBTzVCLENBREdBLE9BQU87SUFFUCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLFdBQVcsRUFBSyxDQUFDO1FBQ2xDTixTQUFTLENBQUNNLFdBQVc7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXO0lBQ3ZCLEVBQWtCO0lBQ3RCLENBQUM7SUFFRCxNQUFNLDZFQUNEaEIsa0VBQVk7O3dGQUNSRiw2REFBUztnQkFBQ3FCLE9BQU8sRUFBRUosV0FBVzs7Ozs7O3dGQUM5QlgsU0FBUzs7Z0dBQ0xDLGdCQUFnQjtrQ0FBRU0sTUFBTTs7Ozs7O2dHQUN4QkosZUFBZTs7d0dBQ1hWLGlFQUFNO2dDQUNIdUIsUUFBUSxFQUFFUCxJQUFJLElBQUksQ0FBQztnQ0FDbkJNLE9BQU8sRUFBRSxRQUFRO29DQUFGUCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsSUFBSSxHQUFHLENBQUM7O2dDQUMvQlEsUUFBUSxFQUFDLENBQU07Ozs7Ozt3R0FFbEJ4QixpRUFBTTtnQ0FDSHVCLFFBQVEsRUFBRVAsSUFBSSxJQUFJLENBQUM7Z0NBQ25CTSxPQUFPLEVBQUUsUUFBUTtvQ0FBRlAsTUFBTSxDQUFOQSxPQUFPLENBQUNDLElBQUksR0FBRyxDQUFDOztnQ0FDL0JRLFFBQVEsRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSTFCcEIsY0FBYzsyQkFDVGEsT0FBTywrRUFDSmxCLCtEQUFXO29CQUFDYSxRQUFRLEVBQUVBLFFBQVE7b0JBQUVLLE9BQU8sRUFBRUEsT0FBTzs7Ozs7dUdBRWhEZixrRUFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QixDQUFDO01BekN1QlMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICcuLi9zdHlsZXMvbWVkaWFRdWVyaWVzJztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGdldEFsbEFydGljbGVzIGZyb20gJy4uL3NlcnZpY2VzL2dldEFydGljbGVzJztcbmltcG9ydCBMb2FkaW5nQ29udGV4dCBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nQ29udGV4dCc7XG5cbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0NhcmQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24nO1xuaW1wb3J0IEZpbHRlckJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlckJhcic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9TcGlubmVyJztcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcbiAgICAvLyBncmlkLWdhcDogMWVtIDFlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJHttZWRpYS50YWJsZXRgXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGB9Ly8gPiA6bnRoLWNoaWxkKDRuKSB7XG4gICAgLy8gICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiA0O1xuICAgIC8vICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gNDtcbiAgICAvLyAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAvLyB9XG5gO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbmA7XG5cbmNvbnN0IFNlbGVjdGVkQ2F0ZWdvcnkgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gO1xuXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtcbiAgICBhcnRpY2xlcyxcbiAgICBzZXRGaWx0ZXIsXG4gICAgZmlsdGVyLFxuICAgIHNldFBhZ2UsXG4gICAgcGFnZSxcbiAgICBsb2FkaW5nXG59KSB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoY2xpY2tlZExpbmspID0+IHtcbiAgICAgICAgc2V0RmlsdGVyKGNsaWNrZWRMaW5rKTtcbiAgICAgICAgY29uc29sZS5sb2coY2xpY2tlZExpbmspO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGaWx0ZXJCYXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RlZENhdGVnb3J5PntmaWx0ZXJ9PC9TZWxlY3RlZENhdGVnb3J5PlxuICAgICAgICAgICAgICAgIDxCdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlIDw9IDF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiUHJldlwiXG4gICAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gOX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSArIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49XCJOZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhcmQgYXJ0aWNsZXM9e2FydGljbGVzfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwibWVkaWEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJnZXRBbGxBcnRpY2xlcyIsIkxvYWRpbmdDb250ZXh0IiwiU2VhcmNoQmFyIiwiQXJ0aWNsZUNhcmQiLCJCdXR0b24iLCJGaWx0ZXJCYXIiLCJTcGlubmVyIiwiQXBwQ29udGFpbmVyIiwiQ29udGVudFdyYXBwZXIiLCJkaXYiLCJ0YWJsZXQiLCJDb250YWluZXIiLCJTZWxlY3RlZENhdGVnb3J5IiwiaDEiLCJCdXR0b25Db250YWluZXIiLCJIb21lIiwiYXJ0aWNsZXMiLCJzZXRGaWx0ZXIiLCJmaWx0ZXIiLCJzZXRQYWdlIiwicGFnZSIsImxvYWRpbmciLCJoYW5kbGVDbGljayIsImNsaWNrZWRMaW5rIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});