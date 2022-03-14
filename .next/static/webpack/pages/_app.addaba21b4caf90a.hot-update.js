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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import { CatSpinner, CatContainer } from './voxel-cat-loader'\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelCat = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8   -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/CAT_FIRDO.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                console.log('unmount');\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-cat\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-150px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n                lineNumber: 128,\n                columnNumber: 17\n            }, _this),\n            \"Cat!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n        lineNumber: 126,\n        columnNumber: 9\n    }, _this));\n};\n_s(VoxelCat, \"OIjFuG/3ygOFG8At4ux4TrC1AzQ=\");\n_c = VoxelCat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelCat);\nvar _c;\n$RefreshReg$(_c, \"VoxelCat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUs7Z0JBQUNDLEVBQUUsRUFBQyxDQUFxQztnQkFBQ0MsRUFBRSxFQUFDLENBQWlDOzs7Ozs7WUFDM0ksQ0FFTjs7Ozs7OztBQUVSLENBQUM7R0F6SEs3RSxRQUFRO0tBQVJBLFFBQVE7QUEySGQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1jYXQuanM/ZGRhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzLFNwaW5uZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gJy4uL2xpYi9tb2RlbCdcclxuLy8gaW1wb3J0IHsgQ2F0U3Bpbm5lciwgQ2F0Q29udGFpbmVyIH0gZnJvbSAnLi92b3hlbC1jYXQtbG9hZGVyJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xyXG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxDYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcclxuICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxyXG4gICAgbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgIDEwLFxyXG4gICAgICAyMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXHJcbiAgICApXHJcbiAgKVxyXG4gIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcclxuICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcclxuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICB9XHJcbiAgfSwgW3JlbmRlcmVyXSlcclxuXHJcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKSB7XHJcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgYWxwaGE6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG5cclxuICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAvLyA4ICAgLT4gNlxyXG4gICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XHJcbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIC1zY2FsZSxcclxuICAgICAgICAwLjAxLFxyXG4gICAgICAgIDUwMDAwXHJcbiAgICAgIClcclxuICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcclxuXHJcbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXHJcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcblxyXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxyXG5cclxuICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9DQVRfRklSRE8uZ2xiJywge1xyXG4gICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGUoKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBsZXQgcmVxID0gbnVsbFxyXG4gICAgICBsZXQgZnJhbWUgPSAwXHJcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXHJcblxyXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuXHJcbiAgICAgICAgaWYgKGZyYW1lIDw9IDEwMCkge1xyXG4gICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxyXG4gICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXHJcblxyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPVxyXG4gICAgICAgICAgICBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID1cclxuICAgICAgICAgICAgcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bm1vdW50JylcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXHJcbiAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW3JlbmRlcmVyLCBoYW5kbGVXaW5kb3dSZXNpemVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPSd2b3hlbC1jYXQnIG09XCJhdXRvXCIgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IG1iPXtbJy00MHB4JywgJy0xNTBweCcsICctMjAwcHgnXX0gdz17WzI4MCwgNDgwLCA2NDBdfSBoPXtbMjgwLCA0ODAsIDY0MF19IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCIgbXQ9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgQ2F0ISEhXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZveGVsQ2F0XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiU3Bpbm5lciIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsQ2F0IiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-cat.js\n");

/***/ })

});