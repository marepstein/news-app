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

/***/ "./components/FilterBar.jsx":
/*!**********************************!*\
  !*** ./components/FilterBar.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: space-evenly;\\n    width: 100%;\\n    border: 1px #cdcdcd;\\n    border-style: solid none;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 6rem;\\n    padding: 1rem 0;\\n    text-align: center;\\n    font-size: 0.85rem;\\n    text-transform: uppercase;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FiltersContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = FiltersContainer;\nvar FilterLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = FilterLink;\nvar FilterBar = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIndex = ref[0], setActiveIndex = ref[1];\n    var filterCategories = [\n        'uk',\n        'beauty',\n        'art',\n        'fashion',\n        'finance',\n        'business',\n        'celebrity',\n        'tech'\n    ];\n    var handleClick = function(event, index) {\n        props.onClick(event.target.innerText);\n        props.onClick(setActiveIndex(index));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FiltersContainer, {\n        children: filterCategories.map(function(filter, index) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterLink, {\n                value: filter,\n                onClick: function() {\n                    return handleClick(index);\n                },\n                className: activeIndex === index ? 'active' : 'inactive',\n                children: filter\n            }, index, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/FilterBar.jsx\",\n                lineNumber: 44,\n                columnNumber: 21\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/FilterBar.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this));\n};\n_s(FilterBar, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c2 = FilterBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FiltersContainer\");\n$RefreshReg$(_c1, \"FilterLink\");\n$RefreshReg$(_c2, \"FilterBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlckJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNNOzs7Ozs7Ozs7Ozs7OztRQUVGLENBTXBDOzs7Ozs7Ozs7UUFFOEIsQ0FPOUI7Ozs7Ozs7O0FBZkEsR0FBSyxDQUFDRSxnQkFBZ0IsR0FBR0QsNkRBQVU7S0FBN0JDLGdCQUFnQjtBQVF0QixHQUFLLENBQUNFLFVBQVUsR0FBR0gsNkRBQVU7TUFBdkJHLFVBQVU7QUFTaEIsR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7O0lBQzFCLEdBQUssQ0FBaUNOLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXpDTyxXQUFXLEdBQW9CUCxHQUFXLEtBQTdCUSxjQUFjLEdBQUlSLEdBQVc7SUFFakQsR0FBSyxDQUFDUyxnQkFBZ0IsR0FBRyxDQUFDO1FBQ3RCLENBQUk7UUFDSixDQUFRO1FBQ1IsQ0FBSztRQUNMLENBQVM7UUFDVCxDQUFTO1FBQ1QsQ0FBVTtRQUNWLENBQVc7UUFDWCxDQUFNO0lBQ1YsQ0FBQztJQUVELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsS0FBSyxFQUFLLENBQUM7UUFDbkNMLEtBQUssQ0FBQ08sT0FBTyxDQUFDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsU0FBUztRQUNwQ1QsS0FBSyxDQUFDTyxPQUFPLENBQUNMLGNBQWMsQ0FBQ0csS0FBSztJQUN0QyxDQUFDO0lBRUQsTUFBTSw2RUFDRFQsZ0JBQWdCO2tCQUNaTyxnQkFBZ0IsQ0FBQ08sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFFTixLQUFLLEVBQUssQ0FBQztZQUN0QyxNQUFNLDZFQUNEUCxVQUFVO2dCQUNQYyxLQUFLLEVBQUVELE1BQU07Z0JBQ2JKLE9BQU8sRUFBRSxRQUFRO29CQUFGSCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsS0FBSzs7Z0JBRWhDUSxTQUFTLEVBQ0xaLFdBQVcsS0FBS0ksS0FBSyxHQUFHLENBQVEsVUFBRyxDQUFVOzBCQUdoRE0sTUFBTTtlQUxGTixLQUFLOzs7OztRQVF0QixDQUFDOzs7Ozs7QUFHYixDQUFDO0dBckNLTixTQUFTO01BQVRBLFNBQVM7QUF1Q2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpbHRlckJhci5qc3g/ZTA0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGaWx0ZXJzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4ICNjZGNkY2Q7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lO1xuYDtcblxuY29uc3QgRmlsdGVyTGluayA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDZyZW07XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBGaWx0ZXJCYXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgZmlsdGVyQ2F0ZWdvcmllcyA9IFtcbiAgICAgICAgJ3VrJyxcbiAgICAgICAgJ2JlYXV0eScsXG4gICAgICAgICdhcnQnLFxuICAgICAgICAnZmFzaGlvbicsXG4gICAgICAgICdmaW5hbmNlJyxcbiAgICAgICAgJ2J1c2luZXNzJyxcbiAgICAgICAgJ2NlbGVicml0eScsXG4gICAgICAgICd0ZWNoJ1xuICAgIF07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgcHJvcHMub25DbGljayhldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgcHJvcHMub25DbGljayhzZXRBY3RpdmVJbmRleChpbmRleCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmlsdGVyc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIHtmaWx0ZXJDYXRlZ29yaWVzLm1hcCgoZmlsdGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPT09IGluZGV4ID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvRmlsdGVyc0NvbnRhaW5lcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVkIiwiRmlsdGVyc0NvbnRhaW5lciIsImRpdiIsIkZpbHRlckxpbmsiLCJGaWx0ZXJCYXIiLCJwcm9wcyIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJmaWx0ZXJDYXRlZ29yaWVzIiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsImV2ZW50Iiwib25DbGljayIsInRhcmdldCIsImlubmVyVGV4dCIsIm1hcCIsImZpbHRlciIsInZhbHVlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FilterBar.jsx\n");

/***/ })

});