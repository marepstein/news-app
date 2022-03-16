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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ \"./styles/mediaQueries.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_getArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getArticles */ \"./services/getArticles.js\");\n/* harmony import */ var _services_loadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loadingContext */ \"./services/loadingContext.jsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.jsx\");\n/* harmony import */ var _components_common_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Card */ \"./components/common/Card.jsx\");\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Button */ \"./components/common/Button.jsx\");\n/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FilterBar */ \"./components/FilterBar.jsx\");\n/* harmony import */ var _components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/Spinner */ \"./components/common/Spinner.jsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        height: 118rem;\\n        flex-direction: row;\\n        flex-wrap: wrap;\\n        align-items: stretch;\\n    // grid-template-columns: repeat(3, 1fr);\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin: 2rem auto;\\n    display: flex;\\n    // grid-template-columns: 25% 25% 25%;\\n    // grid-gap: 1em 1em;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\\n    \",\n        \"; // > :nth-child(4n) {\\n    //     grid-column: auto / span 4;\\n    //     grid-row: auto / span 4;\\n    //     height: 200px;\\n    // }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: flex-end;\\n    margin: 1rem 0;\\n    padding: 0 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-size: 2rem;\\n    text-transform: uppercase;\\n    margin: 0;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: flex-end;\\n    align-items: flex-end;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        justify-content: flex-end;\\n        padding: 0 1rem;\\n        margin-top: 0.5rem;\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject1(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.media.tablet(_templateObject()));\n_c = ContentWrapper;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject2());\n_c1 = Container;\nvar SelectedCategory = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].h1(_templateObject3());\n_c2 = SelectedCategory;\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject4());\n_c3 = ButtonContainer;\nvar BottomButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject6(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.media.tablet(_templateObject5()));\n_c4 = BottomButtonContainer;\nfunction Home(param) {\n    var articles = param.articles, setFilter = param.setFilter, filter = param.filter, setPage = param.setPage, page = param.page, loading = param.loading;\n    var handleClick = function(clickedLink) {\n        setFilter(clickedLink);\n        console.log(clickedLink);\n    // console.log(e);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectedCategory, {\n                        children: filter\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page <= 1,\n                                onClick: function() {\n                                    return setPage(page - 1);\n                                },\n                                children: \"Prev\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                disabled: page >= 9,\n                                onClick: function() {\n                                    return setPage(page + 1);\n                                },\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n                children: !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    articles: articles,\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 105,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Spinner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                    lineNumber: 107,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomButtonContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        disabled: page <= 1,\n                        onClick: function() {\n                            return setPage(page - 1);\n                        },\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        disabled: page >= 9,\n                        onClick: function() {\n                            return setPage(page + 1);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/pages/index.js\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, this));\n};\n_c5 = Home;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ContentWrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"SelectedCategory\");\n$RefreshReg$(_c3, \"ButtonContainer\");\n$RefreshReg$(_c4, \"BottomButtonContainer\");\n$RefreshReg$(_c5, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFFUztBQUVIO0FBQ0c7QUFFUjtBQUNJO0FBQ0g7QUFDRDtBQUNHO0FBQ0k7Ozs7Ozs7Ozs7Ozs7UUFXbkMsQ0FNakI7Ozs7Ozs7OztRQWZnQyxDQVM5QjtRQU1BLENBS0o7Ozs7Ozs7OztRQUU2QixDQU03Qjs7Ozs7Ozs7O1FBRW1DLENBSW5DOzs7Ozs7Ozs7UUFFbUMsQ0FLbkM7Ozs7Ozs7OztRQU9tQixDQUlmOzs7Ozs7Ozs7UUFUcUMsQ0FLckM7UUFJRSxDQUNOOzs7Ozs7O0FBckRBLEdBQUssQ0FBQ2EsY0FBYyxHQUFHYiw4REFBVSxxQkFTM0JDLDhEQUFZO0tBVFpZLGNBQWM7QUFzQnBCLEdBQUssQ0FBQ0csU0FBUyxHQUFHaEIsOERBQVU7TUFBdEJnQixTQUFTO0FBUWYsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR2pCLDZEQUFTO01BQTVCaUIsZ0JBQWdCO0FBTXRCLEdBQUssQ0FBQ0UsZUFBZSxHQUFHbkIsOERBQVU7TUFBNUJtQixlQUFlO0FBT3JCLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUdwQiw4REFBVSxxQkFLbENDLDhEQUFZO01BTFptQixxQkFBcUI7QUFZWixRQUFRLENBQUNDLElBQUksQ0FBQyxLQU81QixFQUFFLENBQUM7UUFOQUMsUUFBUSxHQURpQixLQU81QixDQU5HQSxRQUFRLEVBQ1JDLFNBQVMsR0FGZ0IsS0FPNUIsQ0FMR0EsU0FBUyxFQUNUQyxNQUFNLEdBSG1CLEtBTzVCLENBSkdBLE1BQU0sRUFDTkMsT0FBTyxHQUprQixLQU81QixDQUhHQSxPQUFPLEVBQ1BDLElBQUksR0FMcUIsS0FPNUIsQ0FGR0EsSUFBSSxFQUNKQyxPQUFPLEdBTmtCLEtBTzVCLENBREdBLE9BQU87SUFFUCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLFdBQVcsRUFBSyxDQUFDO1FBQ2xDTixTQUFTLENBQUNNLFdBQVc7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXO0lBQ3ZCLEVBQWtCO0lBQ3RCLENBQUM7SUFFRCxNQUFNLDZFQUNEakIsa0VBQVk7O3dGQUNSRiw2REFBUztnQkFBQ3NCLE9BQU8sRUFBRUosV0FBVzs7Ozs7O3dGQUM5QlosU0FBUzs7Z0dBQ0xDLGdCQUFnQjtrQ0FBRU8sTUFBTTs7Ozs7O2dHQUN4QkwsZUFBZTs7d0dBQ1hWLGlFQUFNO2dDQUNId0IsUUFBUSxFQUFFUCxJQUFJLElBQUksQ0FBQztnQ0FDbkJNLE9BQU8sRUFBRSxRQUFRO29DQUFGUCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsSUFBSSxHQUFHLENBQUM7O2dDQUMvQlEsUUFBUSxFQUFDLENBQU07Ozs7Ozt3R0FFbEJ6QixpRUFBTTtnQ0FDSHdCLFFBQVEsRUFBRVAsSUFBSSxJQUFJLENBQUM7Z0NBQ25CTSxPQUFPLEVBQUUsUUFBUTtvQ0FBRlAsTUFBTSxDQUFOQSxPQUFPLENBQUNDLElBQUksR0FBRyxDQUFDOztnQ0FDL0JRLFFBQVEsRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSTFCckIsY0FBYzsyQkFDVGMsT0FBTywrRUFDSm5CLCtEQUFXO29CQUFDYyxRQUFRLEVBQUVBLFFBQVE7b0JBQUVLLE9BQU8sRUFBRUEsT0FBTzs7Ozs7dUdBRWhEaEIsa0VBQU87Ozs7Ozs7Ozs7d0ZBR2ZTLHFCQUFxQjs7Z0dBQ2pCWCxpRUFBTTt3QkFDSHdCLFFBQVEsRUFBRVAsSUFBSSxJQUFJLENBQUM7d0JBQ25CTSxPQUFPLEVBQUUsUUFBUTs0QkFBRlAsTUFBTSxDQUFOQSxPQUFPLENBQUNDLElBQUksR0FBRyxDQUFDOzt3QkFDL0JRLFFBQVEsRUFBQyxDQUFNOzs7Ozs7Z0dBRWxCekIsaUVBQU07d0JBQ0h3QixRQUFRLEVBQUVQLElBQUksSUFBSSxDQUFDO3dCQUNuQk0sT0FBTyxFQUFFLFFBQVE7NEJBQUZQLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxJQUFJLEdBQUcsQ0FBQzs7d0JBQy9CUSxRQUFRLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25DLENBQUM7TUFyRHVCYixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJy4uL3N0eWxlcy9tZWRpYVF1ZXJpZXMnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZ2V0QWxsQXJ0aWNsZXMgZnJvbSAnLi4vc2VydmljZXMvZ2V0QXJ0aWNsZXMnO1xuaW1wb3J0IExvYWRpbmdDb250ZXh0IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRpbmdDb250ZXh0JztcblxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XG5pbXBvcnQgQXJ0aWNsZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vQ2FyZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbic7XG5pbXBvcnQgRmlsdGVyQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvRmlsdGVyQmFyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL1NwaW5uZXInO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xuICAgIC8vIGdyaWQtZ2FwOiAxZW0gMWVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICR7bWVkaWEudGFibGV0YFxuICAgICAgICBoZWlnaHQ6IDExOHJlbTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBgfTsgLy8gPiA6bnRoLWNoaWxkKDRuKSB7XG4gICAgLy8gICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiA0O1xuICAgIC8vICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gNDtcbiAgICAvLyAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAvLyB9XG5gO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG5gO1xuXG5jb25zdCBTZWxlY3RlZENhdGVnb3J5ID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuYDtcblxuY29uc3QgQm90dG9tQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAke21lZGlhLnRhYmxldGBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe1xuICAgIGFydGljbGVzLFxuICAgIHNldEZpbHRlcixcbiAgICBmaWx0ZXIsXG4gICAgc2V0UGFnZSxcbiAgICBwYWdlLFxuICAgIGxvYWRpbmdcbn0pIHtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChjbGlja2VkTGluaykgPT4ge1xuICAgICAgICBzZXRGaWx0ZXIoY2xpY2tlZExpbmspO1xuICAgICAgICBjb25zb2xlLmxvZyhjbGlja2VkTGluayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZpbHRlckJhciBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdGVkQ2F0ZWdvcnk+e2ZpbHRlcn08L1NlbGVjdGVkQ2F0ZWdvcnk+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPD0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49XCJQcmV2XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSA5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlICsgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj1cIk5leHRcIlxuICAgICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICB7IWxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQ2FyZCBhcnRpY2xlcz17YXJ0aWNsZXN9IGxvYWRpbmc9e2xvYWRpbmd9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDxCb3R0b21CdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA8PSAxfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49XCJQcmV2XCJcbiAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSA5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgKyAxKX1cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49XCJOZXh0XCJcbiAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICA8L0JvdHRvbUJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJtZWRpYSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImdldEFsbEFydGljbGVzIiwiTG9hZGluZ0NvbnRleHQiLCJTZWFyY2hCYXIiLCJBcnRpY2xlQ2FyZCIsIkJ1dHRvbiIsIkZpbHRlckJhciIsIlNwaW5uZXIiLCJBcHBDb250YWluZXIiLCJDb250ZW50V3JhcHBlciIsImRpdiIsInRhYmxldCIsIkNvbnRhaW5lciIsIlNlbGVjdGVkQ2F0ZWdvcnkiLCJoMSIsIkJ1dHRvbkNvbnRhaW5lciIsIkJvdHRvbUJ1dHRvbkNvbnRhaW5lciIsIkhvbWUiLCJhcnRpY2xlcyIsInNldEZpbHRlciIsImZpbHRlciIsInNldFBhZ2UiLCJwYWdlIiwibG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY2xpY2tlZExpbmsiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsImRpc2FibGVkIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});