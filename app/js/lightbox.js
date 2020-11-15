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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lightbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lightbox.js":
/*!*************************!*\
  !*** ./src/lightbox.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//5-1-----------\n$(function(){\n\n    // 開啟 Modal 彈跳視窗\n    $(\".mainBtn_1\").on(\"click\", function(){\n        $(\".lightbox-block1\").addClass(\"-openbox\");\n    });\n\n    // 關閉 Modal\n    $(\".btn_modal_close\").on(\"click\", function(){\n        $(\".lightbox-block1\").addClass(\"-opacity-zero\");\n        // 設定隔一秒後，移除相關 class\n        setTimeout(function(){\n            $(\".lightbox-block1\").removeClass(\"-openbox -opacity-zero\");\n        }, 1000);\n    });\n});\n\n\n//5-2-----------\n$(function(){\n\n    // 開啟 Modal 彈跳視窗\n    $(\".mainBtn_2\").on(\"click\", function(){\n        $(\".lightbox-block2\").addClass(\"-openbox\");\n    });\n\n    // 關閉 Modal\n    $(\".btn_modal_close\").on(\"click\", function(){\n        $(\".lightbox-block2\").addClass(\"-opacity-zero\");\n        // 設定隔一秒後，移除相關 class\n            setTimeout(function(){\n            $(\".lightbox-block2\").removeClass(\"-openbox -opacity-zero\");\n            }, 1000);\n        });\n    $(\".submitbtn2\").on(\"click\", function(){\n        $(\".lightbox-block2\").addClass(\"-opacity-zero\");\n        // 設定隔一秒後，移除相關 class\n        setTimeout(function(){\n            $(\".lightbox-block2\").removeClass(\"-openbox -opacity-zero\");\n        }, 1000);\n    });\n\n});\n\n\n//5-3-----------\n$(function(){\n\n    // 開啟 Modal 彈跳視窗\n    $(\".mainBtn_3\").on(\"click\", function(){\n        $(\".lightbox-block3\").addClass(\"-openbox\");\n    });\n\n    // 關閉 Modal\n    $(\".btn_modal_close\").on(\"click\", function(){\n        $(\".lightbox-block3\").addClass(\"-opacity-zero\");\n        // 設定隔一秒後，移除相關 class\n        setTimeout(function(){\n            $(\".lightbox-block3\").removeClass(\"-openbox -opacity-zero\");\n        }, 1000);\n    });\n    $(\".submitbtn3\").on(\"click\", function(){\n        $(\".lightbox-block3\").addClass(\"-opacity-zero\");\n        // 設定隔一秒後，移除相關 class\n        setTimeout(function(){\n            $(\".lightbox-block3\").removeClass(\"-openbox -opacity-zero\");\n        }, 1000);\n    });\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlnaHRib3guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlnaHRib3guanM/MjY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLzUtMS0tLS0tLS0tLS0tXG4kKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyDplovllZ8gTW9kYWwg5b2I6Lez6KaW56qXXG4gICAgJChcIi5tYWluQnRuXzFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrMVwiKS5hZGRDbGFzcyhcIi1vcGVuYm94XCIpO1xuICAgIH0pO1xuXG4gICAgLy8g6Zec6ZaJIE1vZGFsXG4gICAgJChcIi5idG5fbW9kYWxfY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrMVwiKS5hZGRDbGFzcyhcIi1vcGFjaXR5LXplcm9cIik7XG4gICAgICAgIC8vIOioreWumumalOS4gOenkuW+jO+8jOenu+mZpOebuOmXnCBjbGFzc1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrMVwiKS5yZW1vdmVDbGFzcyhcIi1vcGVuYm94IC1vcGFjaXR5LXplcm9cIik7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xufSk7XG5cblxuLy81LTItLS0tLS0tLS0tLVxuJChmdW5jdGlvbigpe1xuXG4gICAgLy8g6ZaL5ZWfIE1vZGFsIOW9iOi3s+imlueql1xuICAgICQoXCIubWFpbkJ0bl8yXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5saWdodGJveC1ibG9jazJcIikuYWRkQ2xhc3MoXCItb3BlbmJveFwiKTtcbiAgICB9KTtcblxuICAgIC8vIOmXnOmWiSBNb2RhbFxuICAgICQoXCIuYnRuX21vZGFsX2Nsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5saWdodGJveC1ibG9jazJcIikuYWRkQ2xhc3MoXCItb3BhY2l0eS16ZXJvXCIpO1xuICAgICAgICAvLyDoqK3lrprpmpTkuIDnp5LlvozvvIznp7vpmaTnm7jpl5wgY2xhc3NcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoXCIubGlnaHRib3gtYmxvY2syXCIpLnJlbW92ZUNsYXNzKFwiLW9wZW5ib3ggLW9wYWNpdHktemVyb1wiKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICAkKFwiLnN1Ym1pdGJ0bjJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrMlwiKS5hZGRDbGFzcyhcIi1vcGFjaXR5LXplcm9cIik7XG4gICAgICAgIC8vIOioreWumumalOS4gOenkuW+jO+8jOenu+mZpOebuOmXnCBjbGFzc1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrMlwiKS5yZW1vdmVDbGFzcyhcIi1vcGVuYm94IC1vcGFjaXR5LXplcm9cIik7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG59KTtcblxuXG4vLzUtMy0tLS0tLS0tLS0tXG4kKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyDplovllZ8gTW9kYWwg5b2I6Lez6KaW56qXXG4gICAgJChcIi5tYWluQnRuXzNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrM1wiKS5hZGRDbGFzcyhcIi1vcGVuYm94XCIpO1xuICAgIH0pO1xuXG4gICAgLy8g6Zec6ZaJIE1vZGFsXG4gICAgJChcIi5idG5fbW9kYWxfY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrM1wiKS5hZGRDbGFzcyhcIi1vcGFjaXR5LXplcm9cIik7XG4gICAgICAgIC8vIOioreWumumalOS4gOenkuW+jO+8jOenu+mZpOebuOmXnCBjbGFzc1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LWJsb2NrM1wiKS5yZW1vdmVDbGFzcyhcIi1vcGVuYm94IC1vcGFjaXR5LXplcm9cIik7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICAgICQoXCIuc3VibWl0YnRuM1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIubGlnaHRib3gtYmxvY2szXCIpLmFkZENsYXNzKFwiLW9wYWNpdHktemVyb1wiKTtcbiAgICAgICAgLy8g6Kit5a6a6ZqU5LiA56eS5b6M77yM56e76Zmk55u46ZecIGNsYXNzXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoXCIubGlnaHRib3gtYmxvY2szXCIpLnJlbW92ZUNsYXNzKFwiLW9wZW5ib3ggLW9wYWNpdHktemVyb1wiKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lightbox.js\n");

/***/ })

/******/ });