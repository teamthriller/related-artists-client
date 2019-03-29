/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ({

/***/ 84:
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module 'babel-plugin-transform-runtime' from '/home/student/Desktop/Immersive/FEC/related-artists-client'\\n    at Function.module.exports [as sync] (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/resolve/lib/sync.js:58:15)\\n    at resolveStandardizedName (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/files/plugins.js:101:31)\\n    at resolvePlugin (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/files/plugins.js:54:10)\\n    at loadPlugin (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/files/plugins.js:62:20)\\n    at createDescriptor (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-descriptors.js:154:9)\\n    at items.map (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-descriptors.js:109:50)\\n    at Array.map (native)\\n    at createDescriptors (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\\n    at createPluginDescriptors (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-descriptors.js:105:10)\\n    at plugins (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-descriptors.js:40:19)\\n    at mergeChainOpts (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-chain.js:319:26)\\n    at /home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-chain.js:283:7\\n    at buildRootChain (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/config-chain.js:120:22)\\n    at loadPrivatePartialConfig (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/partial.js:85:55)\\n    at Object.loadPartialConfig (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/@babel/core/lib/config/partial.js:110:18)\\n    at Object.<anonymous> (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/babel-loader/lib/index.js:140:26)\\n    at next (native)\\n    at asyncGeneratorStep (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/babel-loader/lib/index.js:5:194)\\n    at /home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/babel-loader/lib/index.js:5:364\\n    at Object.<anonymous> (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/babel-loader/lib/index.js:5:97)\\n    at Object.loader (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/babel-loader/lib/index.js:56:18)\\n    at Object.<anonymous> (/home/student/Desktop/Immersive/FEC/related-artists-client/node_modules/babel-loader/lib/index.js:51:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///84\n");

/***/ })

/******/ });