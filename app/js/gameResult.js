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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/gameResult.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameResult.js":
/*!***************************!*\
  !*** ./src/gameResult.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar score = localStorage.getItem('myScore');\r\n\r\ndocument.getElementById(\"score\").innerHTML = score;\r\n\r\n$(document).ready(function(){\r\n    $.ajax({\r\n            url: 'game.php',\r\n            dataType: 'JSON',\r\n            type: 'GET',\r\n            success(data) {\r\n                console.log(data);\r\n            },\r\n    });\r\n});\r\n\r\nfunction $id(id){\r\n\treturn document.getElementById(id);\r\n}\t\r\nlet member;\r\n\r\n    // function showLoginForm(){\r\n    //   //檢查登入bar面版上 spanLogin 的字是登入或登出\r\n    //   //如果是登入，就顯示登入用的燈箱(lightBox)\r\n    //   //如果是登出\r\n    //   //將登入bar面版上，登入者資料清空 \r\n    //   //spanLogin的字改成登入\r\n    //   //將頁面上的使用者資料清掉\r\n    //   if($id('spanLogin').innerHTML == \"登入\"){\r\n    //     $id('lightBox').style.display = 'block';\r\n    //   }else{//登出\r\n    //     let xhr = new XMLHttpRequest();\r\n    //     xhr.onload = function(){\r\n    //       $id('memName').innerHTML = '&nbsp';\r\n    //       $id('spanLogin').innerHTML = '登入';          \r\n    //     }\r\n    //     xhr.open(\"get\", \"logout.php\", true);\r\n    //     xhr.send(null);\r\n    //   }\r\n\r\n    // }//showLoginForm\r\n\r\n    function sendForm(){\r\n      //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 \r\n    //   let memId = $id(\"memId\").value;  \r\n    //   let memPsw = $id(\"memPsw\").value; \r\n      let xhr = new XMLHttpRequest();\r\n      xhr.onload = function(){\r\n        member = JSON.parse(xhr.responseText);\r\n        if(member.memGamePoint){\r\n          window.alert(memGamePoint);\r\n          $id('memName').value = '';\r\n          $id('memGamePoint').value = '';          \r\n        }else{\r\n            window.alert(\"帳密錯誤~\");\r\n        }\r\n      }\r\n\r\n      xhr.open(\"Post\", \"ajaxLogin.php\", true);\r\n      xhr.setRequestHeader(\"content-type\",\"application/x-www-form-urlencoded\");\r\n    //   let data_info = `memId=${memId}&memPsw=${memPsw}`;\r\n      xhr.send(data_info); \r\n    }\r\n\r\n    // function cancelLogin(){\r\n    //   //將登入表單上的資料清空，並將燈箱隱藏起來\r\n    //   $id('lightBox').style.display = 'none';\r\n    //   $id('memId').value = '';\r\n    //   $id('memPsw').value = '';\r\n    // }\r\n\r\n    // function getMemberInfo(){\r\n    //   let xhr = new XMLHttpRequest();\r\n    //   xhr.onload = function(){\r\n    //     if(xhr.status == 200){ //success\r\n    //       member = JSON.parse(xhr.responseText);\r\n    //       if(member.memId){\r\n    //         $id(\"memName\").innerText = member.memName;\r\n    //         $id('spanLogin').innerHTML = '登出';            \r\n    //       }\r\n    //     }else{ //error\r\n    //       alert(xhr.status);\r\n    //     }\r\n    //   }\r\n\r\n    //   xhr.open(\"get\", \"getMemberInfo.php\", true);\r\n    //   xhr.send(null);\r\n    // }\r\n\r\n    // function init(){\r\n\r\n    //   //-----------------------檢查是否已登入\r\n    //   getMemberInfo();\r\n\r\n    //   //===設定spanLogin.onclick 事件處理程序是 showLoginForm\r\n\r\n    //   $id('spanLogin').onclick = showLoginForm;\r\n\r\n    //   //===設定btnLogin.onclick 事件處理程序是 sendForm\r\n    //   $id('btnLogin').onclick = sendForm;\r\n\r\n    //   //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin\r\n    //   $id('btnLoginCancel').onclick = cancelLogin;\r\n\r\n    // }; //window.onload\r\n\r\n    window.addEventListener(\"load\",init,false);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZVJlc3VsdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nYW1lUmVzdWx0LmpzP2U2MTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlTY29yZScpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKS5pbm5lckhUTUwgPSBzY29yZTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICdnYW1lLnBocCcsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gJGlkKGlkKXtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG59XHRcclxubGV0IG1lbWJlcjtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaG93TG9naW5Gb3JtKCl7XHJcbiAgICAvLyAgIC8v5qqi5p+l55m75YWlYmFy6Z2i54mI5LiKIHNwYW5Mb2dpbiDnmoTlrZfmmK/nmbvlhaXmiJbnmbvlh7pcclxuICAgIC8vICAgLy/lpoLmnpzmmK/nmbvlhaXvvIzlsLHpoa/npLrnmbvlhaXnlKjnmoTnh4jnrrEobGlnaHRCb3gpXHJcbiAgICAvLyAgIC8v5aaC5p6c5piv55m75Ye6XHJcbiAgICAvLyAgIC8v5bCH55m75YWlYmFy6Z2i54mI5LiK77yM55m75YWl6ICF6LOH5paZ5riF56m6IFxyXG4gICAgLy8gICAvL3NwYW5Mb2dpbueahOWtl+aUueaIkOeZu+WFpVxyXG4gICAgLy8gICAvL+Wwh+mggemdouS4iueahOS9v+eUqOiAheizh+aWmea4heaOiVxyXG4gICAgLy8gICBpZigkaWQoJ3NwYW5Mb2dpbicpLmlubmVySFRNTCA9PSBcIueZu+WFpVwiKXtcclxuICAgIC8vICAgICAkaWQoJ2xpZ2h0Qm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyAgIH1lbHNley8v55m75Ye6XHJcbiAgICAvLyAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgLy8gICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgJGlkKCdtZW1OYW1lJykuaW5uZXJIVE1MID0gJyZuYnNwJztcclxuICAgIC8vICAgICAgICRpZCgnc3BhbkxvZ2luJykuaW5uZXJIVE1MID0gJ+eZu+WFpSc7ICAgICAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB4aHIub3BlbihcImdldFwiLCBcImxvZ291dC5waHBcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyB9Ly9zaG93TG9naW5Gb3JtXHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZEZvcm0oKXtcclxuICAgICAgLy89PT09PeS9v+eUqEFqYXgg5Zuec2VydmVy56uvLOWPluWbnueZu+WFpeiAheWnk+WQjSwg5pS+5Yiw6aCB6Z2i5LiKIFxyXG4gICAgLy8gICBsZXQgbWVtSWQgPSAkaWQoXCJtZW1JZFwiKS52YWx1ZTsgIFxyXG4gICAgLy8gICBsZXQgbWVtUHN3ID0gJGlkKFwibWVtUHN3XCIpLnZhbHVlOyBcclxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBtZW1iZXIgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIGlmKG1lbWJlci5tZW1HYW1lUG9pbnQpe1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KG1lbUdhbWVQb2ludCk7XHJcbiAgICAgICAgICAkaWQoJ21lbU5hbWUnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgJGlkKCdtZW1HYW1lUG9pbnQnKS52YWx1ZSA9ICcnOyAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5biz5a+G6Yyv6KqkflwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHhoci5vcGVuKFwiUG9zdFwiLCBcImFqYXhMb2dpbi5waHBcIiwgdHJ1ZSk7XHJcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAvLyAgIGxldCBkYXRhX2luZm8gPSBgbWVtSWQ9JHttZW1JZH0mbWVtUHN3PSR7bWVtUHN3fWA7XHJcbiAgICAgIHhoci5zZW5kKGRhdGFfaW5mbyk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGNhbmNlbExvZ2luKCl7XHJcbiAgICAvLyAgIC8v5bCH55m75YWl6KGo5Zau5LiK55qE6LOH5paZ5riF56m677yM5Lim5bCH54eI566x6Zqx6JeP6LW35L6GXHJcbiAgICAvLyAgICRpZCgnbGlnaHRCb3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAkaWQoJ21lbUlkJykudmFsdWUgPSAnJztcclxuICAgIC8vICAgJGlkKCdtZW1Qc3cnKS52YWx1ZSA9ICcnO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGdldE1lbWJlckluZm8oKXtcclxuICAgIC8vICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgLy8gICB4aHIub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7IC8vc3VjY2Vzc1xyXG4gICAgLy8gICAgICAgbWVtYmVyID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIC8vICAgICAgIGlmKG1lbWJlci5tZW1JZCl7XHJcbiAgICAvLyAgICAgICAgICRpZChcIm1lbU5hbWVcIikuaW5uZXJUZXh0ID0gbWVtYmVyLm1lbU5hbWU7XHJcbiAgICAvLyAgICAgICAgICRpZCgnc3BhbkxvZ2luJykuaW5uZXJIVE1MID0gJ+eZu+WHuic7ICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfWVsc2V7IC8vZXJyb3JcclxuICAgIC8vICAgICAgIGFsZXJ0KHhoci5zdGF0dXMpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgeGhyLm9wZW4oXCJnZXRcIiwgXCJnZXRNZW1iZXJJbmZvLnBocFwiLCB0cnVlKTtcclxuICAgIC8vICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgIC8vICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeaqouafpeaYr+WQpuW3sueZu+WFpVxyXG4gICAgLy8gICBnZXRNZW1iZXJJbmZvKCk7XHJcblxyXG4gICAgLy8gICAvLz09PeioreWumnNwYW5Mb2dpbi5vbmNsaWNrIOS6i+S7tuiZleeQhueoi+W6j+aYryBzaG93TG9naW5Gb3JtXHJcblxyXG4gICAgLy8gICAkaWQoJ3NwYW5Mb2dpbicpLm9uY2xpY2sgPSBzaG93TG9naW5Gb3JtO1xyXG5cclxuICAgIC8vICAgLy89PT3oqK3lrppidG5Mb2dpbi5vbmNsaWNrIOS6i+S7tuiZleeQhueoi+W6j+aYryBzZW5kRm9ybVxyXG4gICAgLy8gICAkaWQoJ2J0bkxvZ2luJykub25jbGljayA9IHNlbmRGb3JtO1xyXG5cclxuICAgIC8vICAgLy89PT3oqK3lrppidG5Mb2dpbkNhbmNlbC5vbmNsaWNrIOS6i+S7tuiZleeQhueoi+W6j+aYryBjYW5jZWxMb2dpblxyXG4gICAgLy8gICAkaWQoJ2J0bkxvZ2luQ2FuY2VsJykub25jbGljayA9IGNhbmNlbExvZ2luO1xyXG5cclxuICAgIC8vIH07IC8vd2luZG93Lm9ubG9hZFxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGluaXQsZmFsc2UpO1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/gameResult.js\n");

/***/ })

/******/ });