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

/***/ "./components/SearchBar.jsx":
/*!**********************************!*\
  !*** ./components/SearchBar.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mediaQueries */ \"./styles/mediaQueries.jsx\");\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width: 30%\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    text-align: center;\\n    margin: 1rem 0;\\n    width: 100%;\\n\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    height: 2rem;\\n    padding-left: 0.5rem;\\n    width: 100%;\\n    border-radius: 0%;\\n    box-shadow: none;\\n    border: solid 1px #cdcdcd;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    clip: rect(0 0 0 0);\\n    clip-path: inset(50%);\\n    height: 1px;\\n    overflow: hidden;\\n    position: absolute;\\n    white-space: nowrap;\\n    width: 1px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form(_templateObject1(), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_2__.media.tablet(_templateObject()));\n_c = Form;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input(_templateObject2());\n_c1 = Input;\nvar ScreenReaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject3());\n_c2 = ScreenReaderTitle;\nvar SearchBar = function(props) {\n    var handleChange = function(event) {\n        props.onChange(event.target.value);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n        action: \"/\",\n        method: \"get\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"header-search\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScreenReaderTitle, {\n                    className: \"visually-hidden\",\n                    children: \"Search articles\"\n                }, void 0, false, {\n                    fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/SearchBar.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/SearchBar.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                icon: \"search\",\n                placeholder: \"Search your own keywords...\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/SearchBar.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/SearchBar.jsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, _this));\n};\n_c3 = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c1, \"Input\");\n$RefreshReg$(_c2, \"ScreenReaderTitle\");\n$RefreshReg$(_c3, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDTTtBQUNROzs7Ozs7Ozs7Ozs7OztRQU8zQixDQUVmOzs7Ozs7Ozs7UUFQcUIsQ0FLckI7UUFFRSxDQUNOOzs7Ozs7Ozs7UUFFMkIsQ0FPM0I7Ozs7Ozs7OztRQUVzQyxDQVF0Qzs7Ozs7OztBQTNCQSxHQUFLLENBQUNHLElBQUksR0FBR0YsOERBQVcscUJBS2xCQyw4REFBWTtLQUxaQyxJQUFJO0FBVVYsR0FBSyxDQUFDRyxLQUFLLEdBQUdMLCtEQUFZO01BQXBCSyxLQUFLO0FBU1gsR0FBSyxDQUFDRSxpQkFBaUIsR0FBR1AsOERBQVc7TUFBL0JPLGlCQUFpQjtBQVV2QixHQUFLLENBQUNFLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO0lBQzFCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDN0JGLEtBQUssQ0FBQ0csUUFBUSxDQUFDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQyxDQUFDO0lBRUQsTUFBTSw2RUFDRGIsSUFBSTtRQUFDYyxNQUFNLEVBQUMsQ0FBRztRQUFDQyxNQUFNLEVBQUMsQ0FBSzs7d0ZBQ3hCQyxDQUFLO2dCQUFDQyxPQUFPLEVBQUMsQ0FBZTtzR0FDekJaLGlCQUFpQjtvQkFBQ2EsU0FBUyxFQUFDLENBQWlCOzhCQUFDLENBRS9DOzs7Ozs7Ozs7Ozt3RkFFSGYsS0FBSztnQkFDRmdCLElBQUksRUFBQyxDQUFRO2dCQUNiQyxXQUFXLEVBQUMsQ0FBNkI7Z0JBQ3pDVCxRQUFRLEVBQUVGLFlBQVk7Ozs7Ozs7Ozs7OztBQUt0QyxDQUFDO01BcEJLRixTQUFTO0FBc0JmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIuanN4P2RhOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAnLi4vc3R5bGVzL21lZGlhUXVlcmllcyc7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAke21lZGlhLnRhYmxldGBcbiAgICAgICAgd2lkdGg6IDMwJVxuICAgIGB9XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2RjZGNkO1xuYDtcblxuY29uc3QgU2NyZWVuUmVhZGVyVGl0bGUgPSBzdHlsZWQuc3BhbmBcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxcHg7XG5gO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gYWN0aW9uPVwiL1wiIG1ldGhvZD1cImdldFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoZWFkZXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPFNjcmVlblJlYWRlclRpdGxlIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggYXJ0aWNsZXNcbiAgICAgICAgICAgICAgICA8L1NjcmVlblJlYWRlclRpdGxlPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHlvdXIgb3duIGtleXdvcmRzLi4uXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj4gKi99XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVkIiwibWVkaWEiLCJGb3JtIiwiZm9ybSIsInRhYmxldCIsIklucHV0IiwiaW5wdXQiLCJTY3JlZW5SZWFkZXJUaXRsZSIsInNwYW4iLCJTZWFyY2hCYXIiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbiIsIm1ldGhvZCIsImxhYmVsIiwiaHRtbEZvciIsImNsYXNzTmFtZSIsImljb24iLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchBar.jsx\n");

/***/ })

});