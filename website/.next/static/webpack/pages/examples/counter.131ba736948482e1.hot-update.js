"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/examples/counter",{

/***/ "./examples/Counter.js":
/*!*****************************!*\
  !*** ./examples/Counter.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"../node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var alveron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alveron */ \"../packages/alveron/es/index.js\");\n/* harmony import */ var kilvin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kilvin */ \"../node_modules/.pnpm/kilvin@4.1.0/node_modules/kilvin/es/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Button(param) {\n    var action = param.action, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"button\",\n        onClick: action,\n        padding: 2,\n        minWidth: 60,\n        extend: {\n            borderRadius: 4,\n            backgroundColor: \"blue\",\n            color: \"white\",\n            appearance: \"none\",\n            cursor: \"pointer\"\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Button;\nfunction getStore() {\n    var model = 0;\n    var actions = {\n        reset: function() {\n            return model;\n        },\n        increment: function(state) {\n            return state + 1;\n        },\n        decrement: function(state) {\n            return state - 1;\n        },\n        incrementBy: function(state, increment) {\n            return state + increment;\n        },\n        decrementBy: function(state, decrement) {\n            return state - decrement;\n        }\n    };\n    var effects = {\n        incrementIn: function(actions, effects, delay) {\n            return setTimeout(actions.increment, delay);\n        },\n        incrementIn2Seconds: function(actions, effects) {\n            return effects.incrementIn(2000);\n        }\n    };\n    return {\n        model: model,\n        actions: actions,\n        effects: effects\n    };\n}\nfunction Counter() {\n    _s();\n    var ref = (0,alveron__WEBPACK_IMPORTED_MODULE_3__.useStore)(getStore()), state = ref.state, actions = ref.actions, effects = ref.effects;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(500), 2), delay = ref1[0], setDelay = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: state\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: function() {\n                    return actions.decrementBy(2);\n                },\n                children: \"-2\"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: actions.decrement,\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: actions.increment,\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: function() {\n                    return actions.incrementBy(2);\n                },\n                children: \"+2\"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: effects.incrementIn2Seconds,\n                children: \"+ in 2 seconds\"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: function() {\n                    return effects.incrementIn(delay);\n                },\n                children: \"+ in \"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: delay,\n                onChange: function(e) {\n                    return setDelay(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            \" seconds\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: actions.reset,\n                children: \"Reset\"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Counter, \"X3pAUhuIdtmLrcrChodF+csLcTo=\", false, function() {\n    return [\n        alveron__WEBPACK_IMPORTED_MODULE_3__.useStore\n    ];\n});\n_c1 = Counter;\nvar _c, _c1;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leGFtcGxlcy9Db3VudGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE4QjtBQUNJO0FBRU47QUFFNUIsU0FBU0csTUFBTSxDQUFDLEtBQW9CLEVBQUU7UUFBcEJDLE1BQU0sR0FBUixLQUFvQixDQUFsQkEsTUFBTSxFQUFFQyxRQUFRLEdBQWxCLEtBQW9CLENBQVZBLFFBQVE7SUFDaEMscUJBQ0UsOERBQUNILHVDQUFHO1FBQ0ZJLEVBQUUsRUFBQyxRQUFRO1FBQ1hDLE9BQU8sRUFBRUgsTUFBTTtRQUNmSSxPQUFPLEVBQUUsQ0FBQztRQUNWQyxRQUFRLEVBQUUsRUFBRTtRQUNaQyxNQUFNLEVBQUU7WUFDTkMsWUFBWSxFQUFFLENBQUM7WUFDZkMsZUFBZSxFQUFFLE1BQU07WUFDdkJDLEtBQUssRUFBRSxPQUFPO1lBQ2RDLFVBQVUsRUFBRSxNQUFNO1lBQ2xCQyxNQUFNLEVBQUUsU0FBUztTQUNsQjtrQkFDQVYsUUFBUTs7Ozs7WUFDTCxDQUNQO0FBQ0gsQ0FBQztBQWpCUUYsS0FBQUEsTUFBTTtBQW1CZixTQUFTYSxRQUFRLEdBQUc7SUFDbEIsSUFBTUMsS0FBSyxHQUFHLENBQUM7SUFFZixJQUFNQyxPQUFPLEdBQUc7UUFDZEMsS0FBSyxFQUFFO21CQUFNRixLQUFLO1NBQUE7UUFDbEJHLFNBQVMsRUFBRSxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLEdBQUcsQ0FBQztTQUFBO1FBQy9CQyxTQUFTLEVBQUUsU0FBQ0QsS0FBSzttQkFBS0EsS0FBSyxHQUFHLENBQUM7U0FBQTtRQUMvQkUsV0FBVyxFQUFFLFNBQUNGLEtBQUssRUFBRUQsU0FBUzttQkFBS0MsS0FBSyxHQUFHRCxTQUFTO1NBQUE7UUFDcERJLFdBQVcsRUFBRSxTQUFDSCxLQUFLLEVBQUVDLFNBQVM7bUJBQUtELEtBQUssR0FBR0MsU0FBUztTQUFBO0tBQ3JEO0lBRUQsSUFBTUcsT0FBTyxHQUFHO1FBQ2RDLFdBQVcsRUFBRSxTQUFDUixPQUFPLEVBQUVPLE9BQU8sRUFBRUUsS0FBSzttQkFDbkNDLFVBQVUsQ0FBQ1YsT0FBTyxDQUFDRSxTQUFTLEVBQUVPLEtBQUssQ0FBQztTQUFBO1FBQ3RDRSxtQkFBbUIsRUFBRSxTQUFDWCxPQUFPLEVBQUVPLE9BQU87bUJBQUtBLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQztTQUFBO0tBQ3JFO0lBRUQsT0FBTztRQUNMVCxLQUFLLEVBQUxBLEtBQUs7UUFDTEMsT0FBTyxFQUFQQSxPQUFPO1FBQ1BPLE9BQU8sRUFBUEEsT0FBTztLQUNSO0FBQ0gsQ0FBQztBQUVjLFNBQVNLLE9BQU8sR0FBRzs7SUFDaEMsSUFBb0M3QixHQUFvQixHQUFwQkEsaURBQVEsQ0FBQ2UsUUFBUSxFQUFFLENBQUMsRUFBaERLLEtBQUssR0FBdUJwQixHQUFvQixDQUFoRG9CLEtBQUssRUFBRUgsT0FBTyxHQUFjakIsR0FBb0IsQ0FBekNpQixPQUFPLEVBQUVPLE9BQU8sR0FBS3hCLEdBQW9CLENBQWhDd0IsT0FBTztJQUMvQixJQUEwQnpCLElBQW1CLG9GQUFuQkEsMkNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBdEMyQixLQUFLLEdBQWMzQixJQUFtQixHQUFqQyxFQUFFZ0MsUUFBUSxHQUFJaEMsSUFBbUIsR0FBdkI7SUFFdEIscUJBQ0UsOERBQUNFLHVDQUFHO1FBQUMrQixVQUFVLEVBQUMsUUFBUTs7MEJBQ3RCLDhEQUFDQyxJQUFFOzBCQUFFYixLQUFLOzs7OztvQkFBTTswQkFDaEIsOERBQUNsQixNQUFNO2dCQUFDSSxPQUFPLEVBQUU7MkJBQU1XLE9BQU8sQ0FBQ00sV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFBQTswQkFBRSxJQUFFOzs7OztvQkFBUzswQkFDMUQsOERBQUNyQixNQUFNO2dCQUFDSSxPQUFPLEVBQUVXLE9BQU8sQ0FBQ0ksU0FBUzswQkFBRSxHQUFDOzs7OztvQkFBUzswQkFDOUMsOERBQUNuQixNQUFNO2dCQUFDSSxPQUFPLEVBQUVXLE9BQU8sQ0FBQ0UsU0FBUzswQkFBRSxHQUFDOzs7OztvQkFBUzswQkFDOUMsOERBQUNqQixNQUFNO2dCQUFDSSxPQUFPLEVBQUU7MkJBQU1XLE9BQU8sQ0FBQ0ssV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFBQTswQkFBRSxJQUFFOzs7OztvQkFBUzswQkFDMUQsOERBQUNwQixNQUFNO2dCQUFDSSxPQUFPLEVBQUVrQixPQUFPLENBQUNJLG1CQUFtQjswQkFBRSxnQkFBYzs7Ozs7b0JBQVM7MEJBQ3JFLDhEQUFDMUIsTUFBTTtnQkFBQ0ksT0FBTyxFQUFFOzJCQUFNa0IsT0FBTyxDQUFDQyxXQUFXLENBQUNDLEtBQUssQ0FBQztpQkFBQTswQkFBRSxPQUFLOzs7OztvQkFBUzswQkFDakUsOERBQUNRLE9BQUs7Z0JBQUNDLEtBQUssRUFBRVQsS0FBSztnQkFBRVUsUUFBUSxFQUFFLFNBQUNDLENBQUM7MkJBQUtOLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztpQkFBQTs7Ozs7b0JBQUk7WUFBQSxVQUNsRTswQkFBQSw4REFBQ2pDLE1BQU07Z0JBQUNJLE9BQU8sRUFBRVcsT0FBTyxDQUFDQyxLQUFLOzBCQUFFLE9BQUs7Ozs7O29CQUFTOzs7Ozs7WUFDMUMsQ0FDUDtBQUNILENBQUM7R0FqQnVCVyxPQUFPOztRQUNPN0IsNkNBQVE7OztBQUR0QjZCLE1BQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXhhbXBsZXMvQ291bnRlci5qcz9kZjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdhbHZlcm9uJ1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdraWx2aW4nXG5cbmZ1bmN0aW9uIEJ1dHRvbih7IGFjdGlvbiwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9e2FjdGlvbn1cbiAgICAgIHBhZGRpbmc9ezJ9XG4gICAgICBtaW5XaWR0aD17NjB9XG4gICAgICBleHRlbmQ9e3tcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBnZXRTdG9yZSgpIHtcbiAgY29uc3QgbW9kZWwgPSAwXG5cbiAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICByZXNldDogKCkgPT4gbW9kZWwsXG4gICAgaW5jcmVtZW50OiAoc3RhdGUpID0+IHN0YXRlICsgMSxcbiAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4gc3RhdGUgLSAxLFxuICAgIGluY3JlbWVudEJ5OiAoc3RhdGUsIGluY3JlbWVudCkgPT4gc3RhdGUgKyBpbmNyZW1lbnQsXG4gICAgZGVjcmVtZW50Qnk6IChzdGF0ZSwgZGVjcmVtZW50KSA9PiBzdGF0ZSAtIGRlY3JlbWVudCxcbiAgfVxuXG4gIGNvbnN0IGVmZmVjdHMgPSB7XG4gICAgaW5jcmVtZW50SW46IChhY3Rpb25zLCBlZmZlY3RzLCBkZWxheSkgPT5cbiAgICAgIHNldFRpbWVvdXQoYWN0aW9ucy5pbmNyZW1lbnQsIGRlbGF5KSxcbiAgICBpbmNyZW1lbnRJbjJTZWNvbmRzOiAoYWN0aW9ucywgZWZmZWN0cykgPT4gZWZmZWN0cy5pbmNyZW1lbnRJbigyMDAwKSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW9kZWwsXG4gICAgYWN0aW9ucyxcbiAgICBlZmZlY3RzLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50ZXIoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMsIGVmZmVjdHMgfSA9IHVzZVN0b3JlKGdldFN0b3JlKCkpXG4gIGNvbnN0IFtkZWxheSwgc2V0RGVsYXldID0gUmVhY3QudXNlU3RhdGUoNTAwKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8aDE+e3N0YXRlfTwvaDE+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGFjdGlvbnMuZGVjcmVtZW50QnkoMil9Pi0yPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FjdGlvbnMuZGVjcmVtZW50fT4tPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FjdGlvbnMuaW5jcmVtZW50fT4rPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGFjdGlvbnMuaW5jcmVtZW50QnkoMil9PisyPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2VmZmVjdHMuaW5jcmVtZW50SW4yU2Vjb25kc30+KyBpbiAyIHNlY29uZHM8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZWZmZWN0cy5pbmNyZW1lbnRJbihkZWxheSl9PisgaW4gPC9CdXR0b24+XG4gICAgICA8aW5wdXQgdmFsdWU9e2RlbGF5fSBvbkNoYW5nZT17KGUpID0+IHNldERlbGF5KGUudGFyZ2V0LnZhbHVlKX0gLz4gc2Vjb25kc1xuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthY3Rpb25zLnJlc2V0fT5SZXNldDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdG9yZSIsIkJveCIsIkJ1dHRvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwiYXMiLCJvbkNsaWNrIiwicGFkZGluZyIsIm1pbldpZHRoIiwiZXh0ZW5kIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJhcHBlYXJhbmNlIiwiY3Vyc29yIiwiZ2V0U3RvcmUiLCJtb2RlbCIsImFjdGlvbnMiLCJyZXNldCIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnkiLCJkZWNyZW1lbnRCeSIsImVmZmVjdHMiLCJpbmNyZW1lbnRJbiIsImRlbGF5Iiwic2V0VGltZW91dCIsImluY3JlbWVudEluMlNlY29uZHMiLCJDb3VudGVyIiwidXNlU3RhdGUiLCJzZXREZWxheSIsImFsaWduSXRlbXMiLCJoMSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./examples/Counter.js\n"));

/***/ })

});