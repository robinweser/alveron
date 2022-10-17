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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"../node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var alveron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alveron */ \"../packages/alveron/es/index.js\");\n/* harmony import */ var kilvin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kilvin */ \"../node_modules/.pnpm/kilvin@4.1.0/node_modules/kilvin/es/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Button(param) {\n    var action = param.action, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"button\",\n        onClick: action,\n        padding: 4,\n        minWidth: 50,\n        extend: {\n            fontSize: 16,\n            borderRadius: 7,\n            backgroundColor: \"blue\",\n            color: \"white\",\n            appearance: \"none\",\n            cursor: \"pointer\",\n            border: 0\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Button;\nfunction Input(param) {\n    var value = param.value, onChange = param.onChange;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"input\",\n        value: value,\n        onChange: function(e) {\n            return onChange(e.target.value);\n        },\n        extend: {}\n    }, void 0, false, {\n        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Input;\nfunction getStore() {\n    var model = 0;\n    var actions = {\n        reset: function() {\n            return model;\n        },\n        increment: function(state) {\n            return state + 1;\n        },\n        decrement: function(state) {\n            return state - 1;\n        },\n        incrementBy: function(state, increment) {\n            return state + increment;\n        },\n        decrementBy: function(state, decrement) {\n            return state - decrement;\n        }\n    };\n    var effects = {\n        incrementIn: function(actions, effects, delay) {\n            return setTimeout(actions.increment, delay);\n        },\n        incrementIn2Seconds: function(actions, effects) {\n            return effects.incrementIn(2000);\n        }\n    };\n    return {\n        model: model,\n        actions: actions,\n        effects: effects\n    };\n}\nfunction Counter() {\n    _s();\n    var ref = (0,alveron__WEBPACK_IMPORTED_MODULE_3__.useStore)(getStore()), state = ref.state, actions = ref.actions, effects = ref.effects;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(500), 2), delay = ref1[0], setDelay = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        alignItems: \"center\",\n        padding: 4,\n        space: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                extend: {\n                    fontSize: 28\n                },\n                children: state\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                direction: \"row\",\n                space: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: function() {\n                            return actions.decrementBy(2);\n                        },\n                        children: \"-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: actions.decrement,\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: actions.increment,\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: function() {\n                            return actions.incrementBy(2);\n                        },\n                        children: \"+2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                direction: \"row\",\n                space: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: effects.incrementIn2Seconds,\n                        children: \"+ in 2 seconds\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(kilvin__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        direction: \"row\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                onClick: function() {\n                                    return effects.incrementIn(delay);\n                                },\n                                children: \"+ in \"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: delay,\n                                onChange: function(e) {\n                                    return setDelay(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            \"seconds\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: actions.reset,\n                children: \"Reset\"\n            }, void 0, false, {\n                fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robinweser/Code/alveron/website/examples/Counter.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Counter, \"X3pAUhuIdtmLrcrChodF+csLcTo=\", false, function() {\n    return [\n        alveron__WEBPACK_IMPORTED_MODULE_3__.useStore\n    ];\n});\n_c2 = Counter;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"Input\");\n$RefreshReg$(_c2, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUssQ0FBQztpQ0FBQTswQ0FBRSxPQUFLOzs7OztvQ0FBUzswQ0FDakUsOERBQUNTLE9BQUs7Z0NBQUN4QixLQUFLLEVBQUVlLEtBQUs7Z0NBQUVkLFFBQVEsRUFBRSxTQUFDQyxDQUFDOzJDQUFLa0IsUUFBUSxDQUFDbEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztpQ0FBQTs7Ozs7b0NBQUk7NEJBQUEsU0FFcEU7Ozs7Ozs0QkFBTTs7Ozs7O29CQUNGOzBCQUNOLDhEQUFDaEIsTUFBTTtnQkFBQ0ksT0FBTyxFQUFFa0IsT0FBTyxDQUFDQyxLQUFLOzBCQUFFLE9BQUs7Ozs7O29CQUFTOzs7Ozs7WUFDMUMsQ0FDUDtBQUNILENBQUM7R0F4QnVCVyxPQUFPOztRQUNPcEMsNkNBQVE7OztBQUR0Qm9DLE1BQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXhhbXBsZXMvQ291bnRlci5qcz9kZjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdhbHZlcm9uJ1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdraWx2aW4nXG5cbmZ1bmN0aW9uIEJ1dHRvbih7IGFjdGlvbiwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9e2FjdGlvbn1cbiAgICAgIHBhZGRpbmc9ezR9XG4gICAgICBtaW5XaWR0aD17NTB9XG4gICAgICBleHRlbmQ9e3tcbiAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5wdXQoeyB2YWx1ZSwgb25DaGFuZ2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiaW5wdXRcIlxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICBleHRlbmQ9e3t9fVxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gZ2V0U3RvcmUoKSB7XG4gIGNvbnN0IG1vZGVsID0gMFxuXG4gIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgcmVzZXQ6ICgpID0+IG1vZGVsLFxuICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiBzdGF0ZSArIDEsXG4gICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHN0YXRlIC0gMSxcbiAgICBpbmNyZW1lbnRCeTogKHN0YXRlLCBpbmNyZW1lbnQpID0+IHN0YXRlICsgaW5jcmVtZW50LFxuICAgIGRlY3JlbWVudEJ5OiAoc3RhdGUsIGRlY3JlbWVudCkgPT4gc3RhdGUgLSBkZWNyZW1lbnQsXG4gIH1cblxuICBjb25zdCBlZmZlY3RzID0ge1xuICAgIGluY3JlbWVudEluOiAoYWN0aW9ucywgZWZmZWN0cywgZGVsYXkpID0+XG4gICAgICBzZXRUaW1lb3V0KGFjdGlvbnMuaW5jcmVtZW50LCBkZWxheSksXG4gICAgaW5jcmVtZW50SW4yU2Vjb25kczogKGFjdGlvbnMsIGVmZmVjdHMpID0+IGVmZmVjdHMuaW5jcmVtZW50SW4oMjAwMCksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vZGVsLFxuICAgIGFjdGlvbnMsXG4gICAgZWZmZWN0cyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudGVyKCkge1xuICBjb25zdCB7IHN0YXRlLCBhY3Rpb25zLCBlZmZlY3RzIH0gPSB1c2VTdG9yZShnZXRTdG9yZSgpKVxuICBjb25zdCBbZGVsYXksIHNldERlbGF5XSA9IFJlYWN0LnVzZVN0YXRlKDUwMClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggYWxpZ25JdGVtcz1cImNlbnRlclwiIHBhZGRpbmc9ezR9IHNwYWNlPXs0fT5cbiAgICAgIDxCb3ggZXh0ZW5kPXt7IGZvbnRTaXplOiAyOCB9fT57c3RhdGV9PC9Cb3g+XG4gICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIHNwYWNlPXsyfT5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zLmRlY3JlbWVudEJ5KDIpfT4tMjwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FjdGlvbnMuZGVjcmVtZW50fT4tPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17YWN0aW9ucy5pbmNyZW1lbnR9Pis8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zLmluY3JlbWVudEJ5KDIpfT4rMjwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIHNwYWNlPXs0fT5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlZmZlY3RzLmluY3JlbWVudEluMlNlY29uZHN9PisgaW4gMiBzZWNvbmRzPC9CdXR0b24+XG4gICAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZWZmZWN0cy5pbmNyZW1lbnRJbihkZWxheSl9PisgaW4gPC9CdXR0b24+XG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtkZWxheX0gb25DaGFuZ2U9eyhlKSA9PiBzZXREZWxheShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgc2Vjb25kc1xuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthY3Rpb25zLnJlc2V0fT5SZXNldDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdG9yZSIsIkJveCIsIkJ1dHRvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwiYXMiLCJvbkNsaWNrIiwicGFkZGluZyIsIm1pbldpZHRoIiwiZXh0ZW5kIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImFwcGVhcmFuY2UiLCJjdXJzb3IiLCJib3JkZXIiLCJJbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZ2V0U3RvcmUiLCJtb2RlbCIsImFjdGlvbnMiLCJyZXNldCIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnkiLCJkZWNyZW1lbnRCeSIsImVmZmVjdHMiLCJpbmNyZW1lbnRJbiIsImRlbGF5Iiwic2V0VGltZW91dCIsImluY3JlbWVudEluMlNlY29uZHMiLCJDb3VudGVyIiwidXNlU3RhdGUiLCJzZXREZWxheSIsImFsaWduSXRlbXMiLCJzcGFjZSIsImRpcmVjdGlvbiIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./examples/Counter.js\n"));

/***/ })

});