/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/cocogoose);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"COCOGOOSE\", sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\nmain {\r\n  width: 100vw;\r\n  height: 110vh;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\nh1 {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 20px;\r\n  font-size: 250%;\r\n  color: rgb(130, 194, 3);\r\n  background-color: rgb(0, 0, 102);\r\n  padding: 4px 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.scores-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.scores-wrapper {\r\n  display: flex;\r\n  gap: 140px;\r\n  color: rgb(130, 194, 3);\r\n  background-color: rgb(0, 0, 102);\r\n  padding: 40px;\r\n  padding-bottom: 70px;\r\n  border-radius: 20px;\r\n  position: relative;\r\n  top: 5vh;\r\n  animation-name: scale;\r\n  animation-duration: 2s;\r\n}\r\n\r\n.scores-display-title {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.refresh {\r\n  background-color: transparent;\r\n  padding: 0 10px;\r\n  border: 3.5px solid black;\r\n}\r\n\r\n.scores-display-content {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 20px;\r\n  width: 89%;\r\n  border: 3.5px solid black;\r\n  min-height: 100px;\r\n  max-height: 300px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.scores-display-list li {\r\n  padding: 5px 0 5px 8px;\r\n  list-style: none;\r\n  color: rgb(108, 149, 25);\r\n}\r\n\r\n.scores-display-list li:nth-of-type(even) {\r\n  background-color: rgb(200, 205, 180);\r\n}\r\n\r\n.scores-display-list li:nth-of-type(odd) {\r\n  background-color: rgb(224, 229, 201);\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#form-name,\r\n#form-score {\r\n  border: 3.5px solid black;\r\n  padding: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#form-name:focus,\r\n#form-score:focus {\r\n  outline: none;\r\n}\r\n\r\n.form-submit {\r\n  width: 80px;\r\n  background-color: transparent;\r\n  border: 3.5px solid black;\r\n  padding: 4px 0;\r\n  align-self: flex-end !important;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-add-msg {\r\n  display: none;\r\n}\r\n\r\n.form-submit,\r\n.refresh {\r\n  background-color: #67434f;\r\n  color: wheat;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-submit:hover,\r\n.refresh:hover {\r\n  scale: 0.95;\r\n}\r\n\r\nbody {\r\n  --s: 100px; /* control the size */\r\n  --c1: #c3ccaf;\r\n  --c2: #67434f;\r\n  --_s: calc(2 * var(--s)) calc(2 * var(--s));\r\n  --_g: var(--_s) conic-gradient(at 40% 40%, #0000 75%, var(--c1) 0);\r\n  --_p: var(--_s) conic-gradient(at 20% 20%, #0000 75%, var(--c2) 0);\r\n\r\n  background:\r\n    calc(0.9 * var(--s)) calc(0.9 * var(--s)) / var(--_p),\r\n    calc(-0.1 * var(--s)) calc(-0.1 * var(--s)) / var(--_p),\r\n    calc(0.7 * var(--s)) calc(0.7 * var(--s)) / var(--_g),\r\n    calc(-0.3 * var(--s)) calc(-0.3 * var(--s)) / var(--_g),\r\n    conic-gradient(from 90deg at 20% 20%, var(--c2) 25%, var(--c1) 0) 0 0 /\r\n    var(--s) var(--s);\r\n  animation: m 3s infinite;\r\n}\r\n\r\n@keyframes m {\r\n  0% {\r\n    background-position:\r\n      calc(0.9 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(-0.1 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(0.7 * var(--s)) calc(0.7 * var(--s)),\r\n      calc(-0.3 * var(--s)) calc(-0.3 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  25% {\r\n    background-position:\r\n      calc(1.9 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(-1.1 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(1.7 * var(--s)) calc(0.7 * var(--s)),\r\n      calc(-1.3 * var(--s)) calc(-0.3 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position:\r\n      calc(1.9 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(-1.1 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(1.7 * var(--s)) calc(-0.3 * var(--s)),\r\n      calc(-1.3 * var(--s)) calc(0.7 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  75% {\r\n    background-position:\r\n      calc(2.9 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(-2.1 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(2.7 * var(--s)) calc(-0.3 * var(--s)),\r\n      calc(-2.3 * var(--s)) calc(0.7 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  100% {\r\n    background-position:\r\n      calc(2.9 * var(--s)) calc(-1.1 * var(--s)),\r\n      calc(-2.1 * var(--s)) calc(1.9 * var(--s)),\r\n      calc(2.7 * var(--s)) calc(-1.3 * var(--s)),\r\n      calc(-2.3 * var(--s)) calc(1.7 * var(--s)),\r\n      0 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 786px) {\r\n  .scores-wrapper {\r\n    flex-direction: column;\r\n    position: relative;\r\n    top: 15vh;\r\n    gap: 60px;\r\n    margin-bottom: 250px;\r\n  }\r\n\r\n  .order2 {\r\n    order: 2;\r\n  }\r\n}\r\n\r\n.scores-display-content::-webkit-scrollbar,\r\n.scores-display-content::-webkit-scrollbar-thumb {\r\n  width: 26px;\r\n  border-radius: 13px;\r\n  background-clip: padding-box;\r\n  border: 10px solid transparent;\r\n}\r\n\r\n.scores-display-content::-webkit-scrollbar-thumb {\r\n  box-shadow: inset 0 0 0 10px;\r\n}\r\n\r\n@keyframes scale {\r\n  from { scale: 0; }\r\n  to { scale: 1; }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,gCAAgC;EAChC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,uBAAuB;EACvB,gCAAgC;EAChC,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,2BAA2B;EAC3B,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,yBAAyB;EACzB,cAAc;EACd,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,UAAU,EAAE,qBAAqB;EACjC,aAAa;EACb,aAAa;EACb,2CAA2C;EAC3C,kEAAkE;EAClE,kEAAkE;;EAElE;;;;;;qBAMmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE;IACE;;;;;SAKK;EACP;;EAEA;IACE;;;;;SAKK;EACP;;EAEA;IACE;;;;;SAKK;EACP;;EAEA;IACE;;;;;SAKK;EACP;;EAEA;IACE;;;;;SAKK;EACP;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,oBAAoB;EACtB;;EAEA;IACE,QAAQ;EACV;AACF;;AAEA;;EAEE,WAAW;EACX,mBAAmB;EACnB,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,OAAO,QAAQ,EAAE;EACjB,KAAK,QAAQ,EAAE;AACjB","sourcesContent":["@import url(\"https://fonts.cdnfonts.com/css/cocogoose\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"COCOGOOSE\", sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\nmain {\r\n  width: 100vw;\r\n  height: 110vh;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\nh1 {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 20px;\r\n  font-size: 250%;\r\n  color: rgb(130, 194, 3);\r\n  background-color: rgb(0, 0, 102);\r\n  padding: 4px 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.scores-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.scores-wrapper {\r\n  display: flex;\r\n  gap: 140px;\r\n  color: rgb(130, 194, 3);\r\n  background-color: rgb(0, 0, 102);\r\n  padding: 40px;\r\n  padding-bottom: 70px;\r\n  border-radius: 20px;\r\n  position: relative;\r\n  top: 5vh;\r\n  animation-name: scale;\r\n  animation-duration: 2s;\r\n}\r\n\r\n.scores-display-title {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.refresh {\r\n  background-color: transparent;\r\n  padding: 0 10px;\r\n  border: 3.5px solid black;\r\n}\r\n\r\n.scores-display-content {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 20px;\r\n  width: 89%;\r\n  border: 3.5px solid black;\r\n  min-height: 100px;\r\n  max-height: 300px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.scores-display-list li {\r\n  padding: 5px 0 5px 8px;\r\n  list-style: none;\r\n  color: rgb(108, 149, 25);\r\n}\r\n\r\n.scores-display-list li:nth-of-type(even) {\r\n  background-color: rgb(200, 205, 180);\r\n}\r\n\r\n.scores-display-list li:nth-of-type(odd) {\r\n  background-color: rgb(224, 229, 201);\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#form-name,\r\n#form-score {\r\n  border: 3.5px solid black;\r\n  padding: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#form-name:focus,\r\n#form-score:focus {\r\n  outline: none;\r\n}\r\n\r\n.form-submit {\r\n  width: 80px;\r\n  background-color: transparent;\r\n  border: 3.5px solid black;\r\n  padding: 4px 0;\r\n  align-self: flex-end !important;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-add-msg {\r\n  display: none;\r\n}\r\n\r\n.form-submit,\r\n.refresh {\r\n  background-color: #67434f;\r\n  color: wheat;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-submit:hover,\r\n.refresh:hover {\r\n  scale: 0.95;\r\n}\r\n\r\nbody {\r\n  --s: 100px; /* control the size */\r\n  --c1: #c3ccaf;\r\n  --c2: #67434f;\r\n  --_s: calc(2 * var(--s)) calc(2 * var(--s));\r\n  --_g: var(--_s) conic-gradient(at 40% 40%, #0000 75%, var(--c1) 0);\r\n  --_p: var(--_s) conic-gradient(at 20% 20%, #0000 75%, var(--c2) 0);\r\n\r\n  background:\r\n    calc(0.9 * var(--s)) calc(0.9 * var(--s)) / var(--_p),\r\n    calc(-0.1 * var(--s)) calc(-0.1 * var(--s)) / var(--_p),\r\n    calc(0.7 * var(--s)) calc(0.7 * var(--s)) / var(--_g),\r\n    calc(-0.3 * var(--s)) calc(-0.3 * var(--s)) / var(--_g),\r\n    conic-gradient(from 90deg at 20% 20%, var(--c2) 25%, var(--c1) 0) 0 0 /\r\n    var(--s) var(--s);\r\n  animation: m 3s infinite;\r\n}\r\n\r\n@keyframes m {\r\n  0% {\r\n    background-position:\r\n      calc(0.9 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(-0.1 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(0.7 * var(--s)) calc(0.7 * var(--s)),\r\n      calc(-0.3 * var(--s)) calc(-0.3 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  25% {\r\n    background-position:\r\n      calc(1.9 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(-1.1 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(1.7 * var(--s)) calc(0.7 * var(--s)),\r\n      calc(-1.3 * var(--s)) calc(-0.3 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position:\r\n      calc(1.9 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(-1.1 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(1.7 * var(--s)) calc(-0.3 * var(--s)),\r\n      calc(-1.3 * var(--s)) calc(0.7 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  75% {\r\n    background-position:\r\n      calc(2.9 * var(--s)) calc(-0.1 * var(--s)),\r\n      calc(-2.1 * var(--s)) calc(0.9 * var(--s)),\r\n      calc(2.7 * var(--s)) calc(-0.3 * var(--s)),\r\n      calc(-2.3 * var(--s)) calc(0.7 * var(--s)),\r\n      0 0;\r\n  }\r\n\r\n  100% {\r\n    background-position:\r\n      calc(2.9 * var(--s)) calc(-1.1 * var(--s)),\r\n      calc(-2.1 * var(--s)) calc(1.9 * var(--s)),\r\n      calc(2.7 * var(--s)) calc(-1.3 * var(--s)),\r\n      calc(-2.3 * var(--s)) calc(1.7 * var(--s)),\r\n      0 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 786px) {\r\n  .scores-wrapper {\r\n    flex-direction: column;\r\n    position: relative;\r\n    top: 15vh;\r\n    gap: 60px;\r\n    margin-bottom: 250px;\r\n  }\r\n\r\n  .order2 {\r\n    order: 2;\r\n  }\r\n}\r\n\r\n.scores-display-content::-webkit-scrollbar,\r\n.scores-display-content::-webkit-scrollbar-thumb {\r\n  width: 26px;\r\n  border-radius: 13px;\r\n  background-clip: padding-box;\r\n  border: 10px solid transparent;\r\n}\r\n\r\n.scores-display-content::-webkit-scrollbar-thumb {\r\n  box-shadow: inset 0 0 0 10px;\r\n}\r\n\r\n@keyframes scale {\r\n  from { scale: 0; }\r\n  to { scale: 1; }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");

})();

/******/ })()
;
//# sourceMappingURL=bundlea6097a0b760cbff3499e.js.map