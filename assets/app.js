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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Maybe.js":
/*!*************************!*\
  !*** ./src/js/Maybe.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Maybe(value) {
  var _this = this;

  this.__value = value;

  this.flatMap = function (fn) {
    if (_this.isNothing()) return Maybe.Nothing();
    var m = fn(_this.__value);
    return m.isNothing() ? Maybe.Nothing() : Maybe.of(m.__value);
  };

  this.getOrElse = function (elseVal) {
    return _this.isNothing() ? elseVal : _this.__value;
  };

  this.getOrEmptyArray = function () {
    return _this.getOrElse([]);
  };

  this.getOrNull = function () {
    return _this.getOrElse(null);
  };

  this.isNothing = function () {
    return _this.__value === null || _this.__value === undefined;
  };

  this.map = function (fn) {
    return _this.isNothing() ? Maybe.of(null) : Maybe.of(fn(_this.__value));
  };
}

Maybe.of = function (valueToBox) {
  return new Maybe(valueToBox);
};

Maybe.Nothing = function () {
  return Maybe.of(null);
};

/* harmony default export */ __webpack_exports__["default"] = (Maybe);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/js/header.js");


/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maybe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maybe */ "./src/js/Maybe.js");


var getElementById = function getElementById(id) {
  return document.querySelector("#".concat(id));
};

var addBtnClick = function addBtnClick(btn_id, target_id, callback) {
  _Maybe__WEBPACK_IMPORTED_MODULE_0__["default"].of(getElementById(btn_id)).map(function (btn) {
    return btn.addEventListener("click", function () {
      return callback(getElementById(target_id));
    });
  });
};

var isOpen = function isOpen(element) {
  return !element.classList.contains("search_input--close");
};

var addOrRemoveClass = function addOrRemoveClass(element, targetClass, add) {
  add ? element.classList.add(targetClass) : element.classList.remove(targetClass);
};

var toggleInput = function toggleInput(element, targetClass) {
  _Maybe__WEBPACK_IMPORTED_MODULE_0__["default"].of(element).flatMap(function (el) {
    return _Maybe__WEBPACK_IMPORTED_MODULE_0__["default"].of(isOpen(el));
  }).map(function (isOpen) {
    return addOrRemoveClass(element, targetClass, isOpen);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  document.addEventListener("DOMContentLoaded", function () {
    addBtnClick("header-search-btn", "header-search", function (element) {
      return toggleInput(element, "search_input--close");
    });
  });
})());

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/joao/Develop/courses/shopify_bootcamp/ep/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /home/joao/Develop/courses/shopify_bootcamp/ep/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });