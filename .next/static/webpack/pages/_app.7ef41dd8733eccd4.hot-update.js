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

/***/ "./components/voxel-cat.js":
/*!*********************************!*\
  !*** ./components/voxel-cat.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelCat = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-cat\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, _this),\n            \"Cat!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this));\n};\n_s(VoxelCat, \"jh+OqUZMWU82CZAKNhBclkwaeNs=\");\n_c = VoxelCat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelCat);\nvar _c;\n$RefreshReg$(_c, \"VoxelCat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZveGVsLWNhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdFO0FBQ2pCO0FBQ2pCO0FBQzJDO0FBQzdCOzs7U0FFbkNTLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFDLENBQUM7SUFDcEIsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsR0FBRyxDQUFDSCxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDMUMsQ0FBQztBQUVELEdBQUssQ0FBQ0ksUUFBUSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNwQixHQUFLLENBQUNDLFlBQVksR0FBR2IsNkNBQU07SUFDM0IsR0FBSyxDQUF5QkYsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcENnQixPQUFPLEdBQWdCaEIsR0FBYyxLQUE1QmlCLFVBQVUsR0FBSWpCLEdBQWM7SUFDNUMsR0FBSyxDQUE0QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUFsQ2tCLFFBQVEsR0FBa0JsQixJQUFVLEtBQXpCbUIsV0FBVyxHQUFJbkIsSUFBVTtJQUMzQyxHQUFLLENBQXdCQSxJQUFVLEdBQVZBLCtDQUFRLElBQTlCb0IsT0FBTyxHQUFlcEIsSUFBVSxLQUF2QnFCLFNBQVMsR0FBSXJCLElBQVU7SUFDdkMsR0FBSyxDQUFZQSxJQUF5QyxHQUF6Q0EsK0NBQVEsQ0FBQyxHQUFHLENBQUNNLDBDQUFhLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQWpEaUIsTUFBTSxHQUFJdkIsSUFBeUM7SUFDMUQsR0FBSyxDQUEyQkEsSUFFL0IsR0FGK0JBLCtDQUFRLENBQ3BDLEdBQUcsQ0FBQ00sMENBQWEsQ0FBQyxFQUFFLEdBQUdLLElBQUksQ0FBQ2EsR0FBRyxDQUFDLEdBQUcsR0FBR2IsSUFBSSxDQUFDYyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBR2QsSUFBSSxDQUFDZSxHQUFHLENBQUMsR0FBRyxHQUFHZixJQUFJLENBQUNjLEVBQUUsS0FENUVFLHFCQUFxQixHQUFJM0IsSUFFL0I7SUFFRCxNQUFNLDZFQUNESSxpREFBRztRQUFDd0IsR0FBRyxFQUFFYixZQUFZO1FBQUVjLFNBQVMsRUFBQyxDQUFXO1FBQUNDLENBQUMsRUFBQyxDQUFNO1FBQUNDLEVBQUUsRUFBRSxDQUFDO1lBQUEsQ0FBTztZQUFFLENBQU87WUFBRSxDQUFRO1FBQUEsQ0FBQztRQUFFQyxFQUFFLEVBQUUsQ0FBQztZQUFBLENBQU87WUFBRSxDQUFRO1lBQUUsQ0FBUTtRQUFBLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7QUFBQSxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7UUFBQSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0FBQUEsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1FBQUEsQ0FBQztRQUFFQyxRQUFRLEVBQUMsQ0FBVTs7WUFDbExuQixPQUFPLGdGQUNIWCxxREFBTztnQkFBQytCLElBQUksRUFBQyxDQUFJO2dCQUFDRCxRQUFRLEVBQUMsQ0FBVTtnQkFBQ0UsSUFBSSxFQUFDLENBQUs7Z0JBQUNDLEdBQUcsRUFBQyxDQUFLO2dCQUFDQyxFQUFFLEVBQUMsQ0FBcUM7Z0JBQUNDLEVBQUUsRUFBQyxDQUFpQzs7Ozs7O1lBQzNJLENBRU47Ozs7Ozs7QUFFUixDQUFDO0dBbEJLMUIsUUFBUTtLQUFSQSxRQUFRO0FBb0JkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtY2F0LmpzP2RkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCl7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXHJcbn1cclxuXHJcbmNvbnN0IFZveGVsQ2F0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIgLCBzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcclxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXHJcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSwgMTAsIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSkpXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHJlZj17cmVmQ29udGFpbmVyfSBjbGFzc05hbWU9J3ZveGVsLWNhdCcgbT1cImF1dG9cIiBhdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnXX0gbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfSB3PXtbMjgwLCA0ODAsIDY0MF19IGg9e1syODAsIDQ4MCwgNjQwXX0gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIiBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBDYXQhISFcclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm94ZWxDYXRcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxDYXQiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInBvc2l0aW9uIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-cat.js\n");

/***/ })

});