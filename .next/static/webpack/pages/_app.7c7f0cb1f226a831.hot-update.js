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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelCat = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            //640 -> 240\n            //8 -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/CAT_FIRDO.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                }\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-cat\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n                lineNumber: 94,\n                columnNumber: 17\n            }, _this),\n            \"Cat!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Html works\\\\Digital Cv Firdo Chakra UI\\\\components\\\\voxel-cat.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, _this));\n};\n_s(VoxelCat, \"rSqs5eCRt49v9VWbudlo/94/Fow=\");\n_c = VoxelCat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelCat);\nvar _c;\n$RefreshReg$(_c, \"VoxelCat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFBRTNCLFFBQVEsRUFBQyxDQUFVOztZQUNsTHBDLE9BQU8sZ0ZBQ0haLHFEQUFPO2dCQUFDNEUsSUFBSSxFQUFDLENBQUk7Z0JBQUM1QixRQUFRLEVBQUMsQ0FBVTtnQkFBQzZCLElBQUksRUFBQyxDQUFLO2dCQUFDQyxHQUFHLEVBQUMsQ0FBSztnQkFBQ0MsRUFBRSxFQUFDLENBQXFDO2dCQUFDQyxFQUFFLEVBQUMsQ0FBaUM7Ozs7OztZQUMzSSxDQUVOOzs7Ozs7O0FBRVIsQ0FBQztHQXZGS3RFLFFBQVE7S0FBUkEsUUFBUTtBQXlGZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWNhdC5qcz9kZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gJy4uL2xpYi9tb2RlbCdcclxuaW1wb3J0IHsgVG9ydXNHZW9tZXRyeSB9IGZyb20gJ3RocmVlJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCl7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXHJcbn1cclxuXHJcbmNvbnN0IFZveGVsQ2F0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIgLCBzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcclxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXHJcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSwgMTAsIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSkpXHJcbiAgICApXHJcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXHJcbiAgICBcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVyxzY0gpXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcclxuXHJcbiAgICAgICAgICAgIC8vNjQwIC0+IDI0MFxyXG4gICAgICAgICAgICAvLzggLT4gNlxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsc2NhbGUsc2NhbGUsLXNjYWxlLDAuMDEsNTAwMDBcclxuICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzIChjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxyXG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvQ0FUX0ZJUkRPLmdsYicse1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIE1hdGguY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtdKSBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggcmVmPXtyZWZDb250YWluZXJ9IGNsYXNzTmFtZT0ndm94ZWwtY2F0JyBtPVwiYXV0b1wiIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfSBtYj17WyctNDBweCcsICctMTQwcHgnLCAnLTIwMHB4J119IHc9e1syODAsIDQ4MCwgNjQwXX0gaD17WzI4MCwgNDgwLCA2NDBdfSBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCIgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkgLyAyKVwiIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIENhdCEhIVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3hlbENhdFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiVG9ydXNHZW9tZXRyeSIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxDYXQiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-cat.js\n");

/***/ })

});