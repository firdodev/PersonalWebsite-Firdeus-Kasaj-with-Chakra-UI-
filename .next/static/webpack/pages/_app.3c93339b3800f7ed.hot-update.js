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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelCat = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            //640 -> 240\n            //8 -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/CAT_FIRDO.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                }\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-cat\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n                lineNumber: 90,\n                columnNumber: 17\n            }, _this),\n            \"Cat!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this));\n};\n_s(VoxelCat, \"rSqs5eCRt49v9VWbudlo/94/Fow=\");\n_c = VoxelCat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelCat);\nvar _c;\n$RefreshReg$(_c, \"VoxelCat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxJQUFJM0QsV0FBVyxDQUFDd0QsS0FBSyxHQUFHLEdBQUcsSUFBSXRELElBQUksQ0FBQ2MsRUFBRSxHQUFHLEVBQUU7Z0JBQzdELENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRixDQUFDO2dCQUNWNEMsb0JBQW9CLENBQUNMLEdBQUc7Z0JBQ3hCOUMsU0FBUSxDQUFDb0QsT0FBTztZQUNwQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNLDZFQUNEbkUsaURBQUc7UUFBQ29FLEdBQUcsRUFBRXhELFlBQVk7UUFBRXlELFNBQVMsRUFBQyxDQUFXO1FBQUNDLENBQUMsRUFBQyxDQUFNO1FBQUNDLEVBQUUsRUFBRSxDQUFDO1lBQUEsQ0FBTztZQUFFLENBQU87WUFBRSxDQUFRO1FBQUEsQ0FBQztRQUFFQyxFQUFFLEVBQUUsQ0FBQztZQUFBLENBQU87WUFBRSxDQUFRO1lBQUUsQ0FBUTtRQUFBLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7QUFBQSxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7UUFBQSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0FBQUEsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1FBQUEsQ0FBQztRQUFFekIsUUFBUSxFQUFDLENBQVU7O1lBQ2xMcEMsT0FBTyxnRkFDSFoscURBQU87Z0JBQUMwRSxJQUFJLEVBQUMsQ0FBSTtnQkFBQzFCLFFBQVEsRUFBQyxDQUFVO2dCQUFDMkIsSUFBSSxFQUFDLENBQUs7Z0JBQUNDLEdBQUcsRUFBQyxDQUFLO2dCQUFDQyxFQUFFLEVBQUMsQ0FBcUM7Z0JBQUNDLEVBQUUsRUFBQyxDQUFpQzs7Ozs7O1lBQzNJLENBRU47Ozs7Ozs7QUFFUixDQUFDO0dBbkZLcEUsUUFBUTtLQUFSQSxRQUFRO0FBcUZkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtY2F0LmpzP2RkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5pbXBvcnQgeyBUb3J1c0dlb21ldHJ5IH0gZnJvbSAndGhyZWUnXHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KXtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxDYXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtyZW5kZXJlciAsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLCAxMCwgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKSlcclxuICAgIClcclxuICAgIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcclxuICAgIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcclxuICAgIFxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZihjb250YWluZXIgJiYgIXJlbmRlcmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG5cclxuICAgICAgICAgICAgLy82NDAgLT4gMjQwXHJcbiAgICAgICAgICAgIC8vOCAtPiA2XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxzY2FsZSxzY2FsZSwtc2NhbGUsMC4wMSw1MDAwMFxyXG4gICAgICAgICAgICApIFxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSlcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMgKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9DQVRfRklSRE8uZ2xiJyx7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcclxuICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZnJhbWUgPD0gMTAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPSd2b3hlbC1jYXQnIG09XCJhdXRvXCIgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IG1iPXtbJy00MHB4JywgJy0xNDBweCcsICctMjAwcHgnXX0gdz17WzI4MCwgNDgwLCA2NDBdfSBoPXtbMjgwLCA0ODAsIDY0MF19IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCIgbXQ9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgQ2F0ISEhXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZveGVsQ2F0XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJUb3J1c0dlb21ldHJ5IiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbENhdCIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-cat.js\n");

/***/ })

});