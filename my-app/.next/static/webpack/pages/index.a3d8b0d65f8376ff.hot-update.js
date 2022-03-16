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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: space-evenly;\\n    width: 100%;\\n    border: 1px #cdcdcd;\\n    border-style: solid none;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 6rem;\\n    padding: 1rem 0;\\n    text-align: center;\\n    font-size: 0.85rem;\\n    text-transform: uppercase;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FiltersContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = FiltersContainer;\nvar FilterLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = FilterLink;\nvar FilterBar = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(useState(), 2), isActive = ref[0], setIsActive = ref[1];\n    var filterCategories = [\n        'uk',\n        'beauty',\n        'art',\n        'fashion',\n        'finance',\n        'business',\n        'celebrity',\n        'tech'\n    ];\n    var handleClick = function(event) {\n        props.onClick(event.target.innerText);\n        props.onClick(setIsActive(true));\n        console.log(event.target.innerText);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FiltersContainer, {\n        children: filterCategories.map(function(filter) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterLink, {\n                value: filter,\n                onClick: handleClick,\n                children: filter\n            }, void 0, false, {\n                fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/FilterBar.jsx\",\n                lineNumber: 45,\n                columnNumber: 21\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/marissaepstein/Documents/conde-nast-test/my-app/components/FilterBar.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, _this));\n};\n_s(FilterBar, \"51CcEygMtYnilTSEm4l/F4b5Dqg=\");\n_c2 = FilterBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FiltersContainer\");\n$RefreshReg$(_c1, \"FilterLink\");\n$RefreshReg$(_c2, \"FilterBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlckJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFRixDQU1wQzs7Ozs7Ozs7O1FBRThCLENBTzlCOzs7Ozs7OztBQWZBLEdBQUssQ0FBQ0UsZ0JBQWdCLEdBQUdELDZEQUFVO0tBQTdCQyxnQkFBZ0I7QUFRdEIsR0FBSyxDQUFDRSxVQUFVLEdBQUdILDZEQUFVO01BQXZCRyxVQUFVO0FBU2hCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7OztJQUMxQixHQUFLLENBQTJCQyxHQUFVLGtCQUFWQSxRQUFRLFFBQWpDQyxRQUFRLEdBQWlCRCxHQUFVLEtBQXpCRSxXQUFXLEdBQUlGLEdBQVU7SUFFMUMsR0FBSyxDQUFDRyxnQkFBZ0IsR0FBRyxDQUFDO1FBQ3RCLENBQUk7UUFDSixDQUFRO1FBQ1IsQ0FBSztRQUNMLENBQVM7UUFDVCxDQUFTO1FBQ1QsQ0FBVTtRQUNWLENBQVc7UUFDWCxDQUFNO0lBQ1YsQ0FBQztJQUVELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDNUJOLEtBQUssQ0FBQ08sT0FBTyxDQUFDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsU0FBUztRQUNwQ1QsS0FBSyxDQUFDTyxPQUFPLENBQUNKLFdBQVcsQ0FBQyxJQUFJO1FBQzlCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDRSxNQUFNLENBQUNDLFNBQVM7SUFDdEMsQ0FBQztJQUVELE1BQU0sNkVBQ0RiLGdCQUFnQjtrQkFDWlEsZ0JBQWdCLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO1lBQy9CLE1BQU0sNkVBQ0RmLFVBQVU7Z0JBQUNnQixLQUFLLEVBQUVELE1BQU07Z0JBQUVOLE9BQU8sRUFBRUYsV0FBVzswQkFDMUNRLE1BQU07Ozs7OztRQUduQixDQUFDOzs7Ozs7QUFHYixDQUFDO0dBL0JLZCxTQUFTO01BQVRBLFNBQVM7QUFpQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpbHRlckJhci5qc3g/ZTA0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRmlsdGVyc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCAjY2RjZGNkO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZTtcbmA7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA2cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgRmlsdGVyQmFyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyQ2F0ZWdvcmllcyA9IFtcbiAgICAgICAgJ3VrJyxcbiAgICAgICAgJ2JlYXV0eScsXG4gICAgICAgICdhcnQnLFxuICAgICAgICAnZmFzaGlvbicsXG4gICAgICAgICdmaW5hbmNlJyxcbiAgICAgICAgJ2J1c2luZXNzJyxcbiAgICAgICAgJ2NlbGVicml0eScsXG4gICAgICAgICd0ZWNoJ1xuICAgIF07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBwcm9wcy5vbkNsaWNrKGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICBwcm9wcy5vbkNsaWNrKHNldElzQWN0aXZlKHRydWUpKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGaWx0ZXJzQ29udGFpbmVyPlxuICAgICAgICAgICAge2ZpbHRlckNhdGVnb3JpZXMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayB2YWx1ZT17ZmlsdGVyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0ZpbHRlcnNDb250YWluZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJzdHlsZWQiLCJGaWx0ZXJzQ29udGFpbmVyIiwiZGl2IiwiRmlsdGVyTGluayIsIkZpbHRlckJhciIsInByb3BzIiwidXNlU3RhdGUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiZmlsdGVyQ2F0ZWdvcmllcyIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJvbkNsaWNrIiwidGFyZ2V0IiwiaW5uZXJUZXh0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZpbHRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FilterBar.jsx\n");

/***/ })

});