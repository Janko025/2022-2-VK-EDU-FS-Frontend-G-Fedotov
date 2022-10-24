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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var form = document.querySelector(\"form\");\nvar input = document.querySelector(\".form-input\");\nvar messages = document.querySelector(\".messages\");\nform.addEventListener(\"submit\", handleKeyPress);\nform.addEventListener(\"keypress\", handleKeyPress);\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    var date = new Date();\n    var setValue = {\n      \"message\": input.value,\n      \"date\": \"\".concat(date.getHours(), \":\").concat(date.getMinutes()),\n      \"stat\": null\n    };\n    localStorage.setItem(\"\".concat(generetorKeys()), JSON.stringify(setValue));\n    createBlock(setValue);\n    input.value = \"\";\n  }\n}\nfunction createBlock(setValue) {\n  var block = document.createElement(\"div\");\n  block.className = \"message right\";\n  block.innerHTML = \"\\n  <div class=\\\"message-text\\\">\".concat(setValue.message, \"</div>\\n  <div class=\\\"message-meta\\\">\\n      <div class=\\\"message-date\\\">\").concat(setValue.date, \"</div>\\n      <div class=\\\"message-status\\\">\\n          <span class=\\\"material-icons\\\"></span>\\n          </div>\\n  </div>\\n    \");\n  messages.append(block);\n}\nfunction startRender() {\n  var chat = Object.keys(localStorage).sort();\n  chat.forEach(function (item) {\n    var value = localStorage.getItem(item);\n    createBlock(JSON.parse(value));\n  });\n}\nfunction generetorKeys() {\n  var numberKeys = Object.keys(localStorage).sort();\n  var numberKey;\n  if (numberKeys.length == 0) {\n    numberKey = 1;\n    return numberKey;\n  } else {\n    numberKey = 1 + parseInt(numberKeys[numberKeys.length - 1]);\n    return numberKey;\n  }\n}\nstartRender();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });