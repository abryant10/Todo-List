/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    font-family: Arial, Helvetica, sans-serif;\n    height: 100%;\n}\nbody {\n    margin: 0;\n    background-color: rgb(255, 255, 255);\n    height: 100%;\n}\n.viewport {\n    display: flex;\n    flex-flow: column;\n    margin: 0%;\n    height: 100%;\n    width: 100%;\n}\nheader {\n    padding: 15px;\n    background-color: rgb(58, 84, 153);\n    color: white;\n    font-size: 60px;\n    /* width: 100%; */\n}\n.listDeletePopup {\n    display: none; \n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n  }\n  .listDeleteContainer {\n    position: relative;\n    background-color: rgb(58, 84, 153);\n    color: #0A100D;\n    max-width: 500px;\n    margin: 15% auto;\n    padding: 0;\n    border: 1px solid rgb(255, 255, 255);\n    border-radius: 10px;\n    width: 60%;\n    box-shadow: 6px 10px 20px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    animation-name: animatetop;\n    animation-duration: 0.4s\n  }\n  @keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n  }\n .navBodyContainer {\n    flex-grow: 1;\n    display: flex;\n    flex-flow: row;\n}\n.navContainer {\n    background-color: rgb(221, 221, 221);\n    min-width: 250px;\n}\n.nav {\n    padding: 20px;\n    padding-left: 30px;\n    display: flex;\n    flex-direction: column;\n}\n\n.navButton {\n    display: flex;\n    flex-direction: row;\n    justify-content:space-between;\n    align-items: center;\n    margin: 10px;\n    border-style: none;\n    text-align: start;\n    background-color: transparent;\n    font-size: large;\n    border-radius: 5px;\n}\n.navButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.navButton:hover .deleteListButton { display: block;}\n.addListButton {\n    position: relative;\n    float: right;\n    margin-right: 10px;\n    border-style: none;\n    border-radius: 6px;\n    width: 25px;\n    height: 25px;\n    font-size: large;\n    padding-top: 2px;\n}\n.addListButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.addListForm {\n    display: none;\n}\n.addListText {\n    margin-top: 10px;\n    margin-left: 40px;\n    width: 130px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n}\n.addListText:focus {\n    outline: none;\n}\n.divider {\n    width: 90%;\n    margin-left: 4%;\n    border-top: 2px solid rgb(177, 177, 177);\n    text-align: center;\n    padding-top: 10px;\n    font-size: 30px;\n    font-weight: 600;\n}\n.deleteListButton {\n    display: none;\n    text-align: center;\n    cursor: pointer;\n    border-style: none;\n    border-radius: 6px;\n    width: 17px;\n    height: 17px;\n    font-size: 10px;\n    margin-left: 10px;\n    margin-right: 5px;\n    margin-bottom: 1px;\n    padding: 0%;\n}\n.deleteListButton:hover {\n    background: white;\n}\n.listButton {\n    display: flex;\n    cursor: pointer;\n    flex-grow: 1;\n    background: none;\n    border: none;\n    font-size: 20px;\n}\n.listButtonSelected {\n    background-color: rgb(182, 182, 182);\n}\n.taskViewerContainer {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n} \n.taskViewerNav {\n    display: flex;\n    padding: 20px;\n\n}\n.taskViewer {\n    display: flex;\n    flex-direction: column;\n    margin-left: 40px;\n}\n#sortBySelector {\n    margin-left: 10px;\n    border-radius: 5px;\n}\n#sortBySelector:focus {\n    outline: none;\n}\n.taskFormContainer {\n    display: none;\n}\n.taskCard {\n    display: flex;\n    flex-direction: column;\n    min-width: 100px;\n    max-width: 600px;\n    margin: 15px;\n    margin-right: 130px;\n    background-color: rgb(241, 241, 241);\n    border-radius: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n.taskCard:hover .TCPriorButton {display: block;}\n.taskCard:hover .TCDelete {display: block;}\n.taskCard:hover .TCExpand {display: block;}\n.TCTop {\n    display: flex;\n    flex-direction: row;\n}\n.TCTopLeft {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n}\n.TCCheck {\n}\n.TCTitle {\n    border: none;\n    margin-left: 5px;\n    font-size: 30px;\n    background: transparent;\n    min-width: none;\n    cursor: pointer;\n}\n.TCTopRight {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: flex-end;\n}\n.TCDate {\n    border: none;\n    font-family: Arial, Helvetica, sans-serif;\n    background: transparent;\n}\n.TCDelete {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCBottom {\n    display: none;\n}\n.expandedInfo {\n    display: block;\n}\n.TCNotes {\n    border: none;\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n    cursor: pointer;\n}\n.TCPriorityButtonContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.TCButton:hover {\n    background-color: white;\n}\n.TCPriorButton {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(90, 90, 90);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCMiddle {\n    display: flex;\n    justify-content: flex-end;\n}\n.TCExpand {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    padding: 2px;\n}\n.TCList {\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n}\n.newTaskButton {\n    margin-bottom: 200px;\n}\nfooter {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   background-color: rgb(58, 84, 153);\n   color: white;\n   text-align: center;\n   padding: 5px;\n}  ", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    font-family: Arial, Helvetica, sans-serif;\n    height: 100%;\n}\nbody {\n    margin: 0;\n    background-color: rgb(255, 255, 255);\n    height: 100%;\n}\n.viewport {\n    display: flex;\n    flex-flow: column;\n    margin: 0%;\n    height: 100%;\n    width: 100%;\n}\nheader {\n    padding: 15px;\n    background-color: rgb(58, 84, 153);\n    color: white;\n    font-size: 60px;\n    /* width: 100%; */\n}\n.listDeletePopup {\n    display: none; \n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n  }\n  .listDeleteContainer {\n    position: relative;\n    background-color: rgb(58, 84, 153);\n    color: #0A100D;\n    max-width: 500px;\n    margin: 15% auto;\n    padding: 0;\n    border: 1px solid rgb(255, 255, 255);\n    border-radius: 10px;\n    width: 60%;\n    box-shadow: 6px 10px 20px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    animation-name: animatetop;\n    animation-duration: 0.4s\n  }\n  @keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n  }\n .navBodyContainer {\n    flex-grow: 1;\n    display: flex;\n    flex-flow: row;\n}\n.navContainer {\n    background-color: rgb(221, 221, 221);\n    min-width: 250px;\n}\n.nav {\n    padding: 20px;\n    padding-left: 30px;\n    display: flex;\n    flex-direction: column;\n}\n\n.navButton {\n    display: flex;\n    flex-direction: row;\n    justify-content:space-between;\n    align-items: center;\n    margin: 10px;\n    border-style: none;\n    text-align: start;\n    background-color: transparent;\n    font-size: large;\n    border-radius: 5px;\n}\n.navButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.navButton:hover .deleteListButton { display: block;}\n.addListButton {\n    position: relative;\n    float: right;\n    margin-right: 10px;\n    border-style: none;\n    border-radius: 6px;\n    width: 25px;\n    height: 25px;\n    font-size: large;\n    padding-top: 2px;\n}\n.addListButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.addListForm {\n    display: none;\n}\n.addListText {\n    margin-top: 10px;\n    margin-left: 40px;\n    width: 130px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n}\n.addListText:focus {\n    outline: none;\n}\n.divider {\n    width: 90%;\n    margin-left: 4%;\n    border-top: 2px solid rgb(177, 177, 177);\n    text-align: center;\n    padding-top: 10px;\n    font-size: 30px;\n    font-weight: 600;\n}\n.deleteListButton {\n    display: none;\n    text-align: center;\n    cursor: pointer;\n    border-style: none;\n    border-radius: 6px;\n    width: 17px;\n    height: 17px;\n    font-size: 10px;\n    margin-left: 10px;\n    margin-right: 5px;\n    margin-bottom: 1px;\n    padding: 0%;\n}\n.deleteListButton:hover {\n    background: white;\n}\n.listButton {\n    display: flex;\n    cursor: pointer;\n    flex-grow: 1;\n    background: none;\n    border: none;\n    font-size: 20px;\n}\n.listButtonSelected {\n    background-color: rgb(182, 182, 182);\n}\n.taskViewerContainer {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n} \n.taskViewerNav {\n    display: flex;\n    padding: 20px;\n\n}\n.taskViewer {\n    display: flex;\n    flex-direction: column;\n    margin-left: 40px;\n}\n#sortBySelector {\n    margin-left: 10px;\n    border-radius: 5px;\n}\n#sortBySelector:focus {\n    outline: none;\n}\n.taskFormContainer {\n    display: none;\n}\n.taskCard {\n    display: flex;\n    flex-direction: column;\n    min-width: 100px;\n    max-width: 600px;\n    margin: 15px;\n    margin-right: 130px;\n    background-color: rgb(241, 241, 241);\n    border-radius: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n.taskCard:hover .TCPriorButton {display: block;}\n.taskCard:hover .TCDelete {display: block;}\n.taskCard:hover .TCExpand {display: block;}\n.TCTop {\n    display: flex;\n    flex-direction: row;\n}\n.TCTopLeft {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n}\n.TCCheck {\n}\n.TCTitle {\n    border: none;\n    margin-left: 5px;\n    font-size: 30px;\n    background: transparent;\n    min-width: none;\n    cursor: pointer;\n}\n.TCTopRight {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: flex-end;\n}\n.TCDate {\n    border: none;\n    font-family: Arial, Helvetica, sans-serif;\n    background: transparent;\n}\n.TCDelete {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCBottom {\n    display: none;\n}\n.expandedInfo {\n    display: block;\n}\n.TCNotes {\n    border: none;\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n    cursor: pointer;\n}\n.TCPriorityButtonContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.TCButton:hover {\n    background-color: white;\n}\n.TCPriorButton {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(90, 90, 90);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCMiddle {\n    display: flex;\n    justify-content: flex-end;\n}\n.TCExpand {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    padding: 2px;\n}\n.TCList {\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n}\n.newTaskButton {\n    margin-bottom: 200px;\n}\nfooter {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   background-color: rgb(58, 84, 153);\n   color: white;\n   text-align: center;\n   padding: 5px;\n}  "],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ taskForm),
/* harmony export */   "taskStorage": () => (/* binding */ taskStorage),
/* harmony export */   "renderTaskView": () => (/* binding */ renderTaskView),
/* harmony export */   "taskFormContainer": () => (/* binding */ taskFormContainer),
/* harmony export */   "currentView": () => (/* binding */ currentView),
/* harmony export */   "renderArray": () => (/* binding */ renderArray),
/* harmony export */   "listFormReset": () => (/* binding */ listFormReset),
/* harmony export */   "resetListDeletePopup": () => (/* binding */ resetListDeletePopup),
/* harmony export */   "addListForm": () => (/* binding */ addListForm),
/* harmony export */   "renderListsToForm": () => (/* binding */ renderListsToForm),
/* harmony export */   "renderListView": () => (/* binding */ renderListView)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/GitHub-Mark-Light-120px-plus.png */ "./src/styles/GitHub-Mark-Light-120px-plus.png");
/* harmony import */ var _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/modules/TaskLogic */ "./src/modules/TaskLogic.js");
/* harmony import */ var _src_modules_Completed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/modules/Completed */ "./src/modules/Completed.js");
/* harmony import */ var _modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ListLogic */ "./src/modules/ListLogic.js");






// storage
let taskStorage = JSON.parse(localStorage.getItem('taskStorage')) || [];

let currentView =  "all";

let renderArray;

const listDeleteButtonClicked = (e) => {
    if(!e.target.matches(".deleteListButton")) return;
    (0,_modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.setListToDelete)(e.target.dataset.list)
    listDeletePopup.style.display = "block";
    listDeleteWarning.innerHTML = `Are you sure you want to delete ${_modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.listToDelete} and all of it's tasks?`;
}

function clearDeleteList () {
    listDeletePopup.style.display = "none";
}
function listFormReset() {
    addListForm.reset();
    addListForm.style.display = "none";
}
function resetListDeletePopup() {
    listDeletePopup.style.display = "none";
}
function listButtonClicked (e) {
    if(!e.target.matches(".listButton")) return;
    currentView = e.target.innerHTML;
    renderTaskView(currentView);
    renderListsToForm();
    listButtonHighlight(e.target);
    CheckHideNewTaskButton();
}
//hide the new task button so tasks are not made in completed view
function CheckHideNewTaskButton() {
    newTaskButton.style.display = "block";
    if (currentView != "completed") return;
    newTaskButton.style.display = "none";
    console.log("test");
}
//logic that sorts user data for task card creation
function getRenderArray (list) {
    var sortVal = sortBySelector.value;
    let filteredArray;
    let today = new Date().toISOString().split('T')[0];
    let renderArray;
    switch (list) {
        case ("all"): 
            switch (sortVal) {
                case ("priority"):
                    renderArray = taskStorage.slice().sort((a, b) => a.allPriority - b.allPriority); 
                    break;
                case ("due-date"):
                    renderArray = taskStorage.slice().sort(function (a, b) {
                        var key1 = new Date(a.dueDate);
                        var key2 = new Date(b.dueDate);
                    
                        if (key1 < key2) {
                            return -1;
                        } else if (key1 == key2) {
                            return 0;
                        } else {
                            return 1;
                        }
                    });
                    break;
            }
            break;
        case ("today"):
            switch (sortVal) {
                case ("priority"):
                    filteredArray = taskStorage.filter(task => task.dueDate == today);
                    renderArray = filteredArray.slice().sort((a, b) => a.allPriority - b.allPriority);
                    break;
                case ("due-date"):
                    //code
                    break;
            }
            break;
        case ("completed"):
            switch (sortVal) {
                case ("priority"):
                    renderArray = _src_modules_Completed__WEBPACK_IMPORTED_MODULE_3__.completedTasks.slice().sort((a, b) => a.allPriority - b.allPriority);
                    break;
                case ("due-date"):
                    //code
                    break;
            }
            break;
        default: 
        switch (sortVal) {
            case ("priority"):
                filteredArray = taskStorage.filter(task => task.list == list);
                renderArray = filteredArray.slice().sort((a, b) => a.listPriority - b.listPriority);
                break;
            case ("due-date"):
                //code
                break;
        }
    }
    return renderArray;
}
function allButtonClicked () {
    currentView = "all"
    renderTaskView("all");
    listButtonHighlight();
    CheckHideNewTaskButton();
}

function todayButtonClicked () {
    currentView = "today";
    renderTaskView("today");
    listButtonHighlight()
    CheckHideNewTaskButton();
}
function completedButtonClicked() {
    currentView = "completed"
    renderTaskView("completed");
    listButtonHighlight()
    CheckHideNewTaskButton();
}



// -------------- dom listeners ----------------------------------------------------

const addListButton = document.querySelector(".addListButton");
const addListForm = document.querySelector(".addListForm");
const addListText = document.getElementById("addListText");
const allButton = document.getElementById("allButton")
const todayButton = document.getElementById("todayButton");
const completedButton = document.getElementById("completedButton");
const listNav = document.querySelector(".listNav");
const newTaskButton = document.querySelector(".newTaskButton");
const sortBySelector = document.getElementById("sortBySelector");
const taskFormContainer = document.querySelector(".taskFormContainer");
const taskForm = document.querySelector(".taskForm");
const taskText = document.getElementById("taskText");
const listSelector = document.getElementById('listSelector');
const taskViewRenderDiv = document.querySelector('.taskViewRenderDiv');
const listDeletePopup = document.querySelector(".listDeletePopup");
const listDeleteWarning = listDeletePopup.querySelector(".listDeleteWarning");
const yesDeleteList = document.getElementById("yesDeleteList");
const noDeleteList = document.getElementById("noDeleteList");
const footerLink = document.getElementById("footerLink");


listNav.addEventListener("click", listButtonClicked);
listNav.addEventListener("click", listDeleteButtonClicked);
yesDeleteList.addEventListener("click", _modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.deleteList);
noDeleteList.addEventListener("click", clearDeleteList);
allButton.addEventListener('click', allButtonClicked);
todayButton.addEventListener('click', todayButtonClicked);
completedButton.addEventListener("click", completedButtonClicked);
taskViewRenderDiv.addEventListener("click", _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.deleteTask);
taskViewRenderDiv.addEventListener("click", _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.priorityUp);
taskViewRenderDiv.addEventListener("click", _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.priorityDown);
taskViewRenderDiv.addEventListener("click", expandCardInfo);
taskViewRenderDiv.addEventListener("click", _src_modules_Completed__WEBPACK_IMPORTED_MODULE_3__.completeTask);
taskViewRenderDiv.addEventListener("click", taskTitleToInputField);
taskViewRenderDiv.addEventListener("submit", updateTaskTitle);
taskViewRenderDiv.addEventListener("click", taskNotesToTextArea);
taskViewRenderDiv.addEventListener("click", updateTaskNotes);
addListButton.addEventListener("click", () => {
    (0,_modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.listFormSubmit)();
    createNewListForm();
    addListText.focus();
});
addListForm.addEventListener('submit', (event) => {
    event.preventDefault();
    (0,_modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.listFormSubmit)();
});

newTaskButton.addEventListener("click", () => {
    (0,_src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.taskFormSubmit)();
    createTaskForm();
});
sortBySelector.addEventListener("change", () => {renderTaskView(currentView);});
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    (0,_src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.taskFormSubmit)();
}); 
window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    resetTaskForm();
    resetListForm();
    renderTaskView(currentView);
  }
})
window.addEventListener("keydown", function(e) {
    if (taskFormContainer.style.display == "block" && e.key === "Enter") {
        (0,_src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.taskFormSubmit)();
    }
})
// When the user clicks anywhere outside of the taskform, 

// window.onclick = function(e) { //this logic needs work
//     if(e.target.matches(""))
// }



//--------------- dom editors -----------------------

const myIcon = new Image();
myIcon.src = _styles_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_1__;
myIcon.alt="git hub mark";
myIcon.height = "20";
myIcon.width = "20";
footerLink.appendChild(myIcon);
//highlight list buttons when clicked
function listButtonHighlight(target) {
    var allListButtons = [...document.querySelectorAll(".listButton")];
    allListButtons.forEach(button => {button.classList.remove("listButtonSelected");});
    switch (currentView) {
        case ("all"): 
            allButton.classList.add("listButtonSelected");
            break;
        case ("today"):
            todayButton.classList.add("listButtonSelected");
            break;
        case ("completed"):
            completedButton.classList.add("listButtonSelected");
            break;
        default:
            target.classList.add("listButtonSelected");
            break;
    }
}
function expandCardInfo (e) {
    if (!e.target.matches(".TCExpand")) return;
    var index = e.target.dataset.info;
    var target = e.currentTarget;
    var targetBottom = target.querySelector(`[data-expand="${index}"]`)
    if(targetBottom.classList.contains("expandedInfo")) {
        targetBottom.classList.remove("expandedInfo");
    } else {
        targetBottom.classList.add("expandedInfo");
    }
}    

function createTaskForm () {
    taskForm.reset();
    renderListsToForm();
    taskFormContainer.style.display = "block";    
    taskText.focus();
}

function createNewListForm () {
    addListForm.reset();
    addListForm.style.display = "block";
    addListText.focus();
}
function resetTaskForm () {
    taskForm.reset();
    taskFormContainer.style.display = "none";
}
function resetListForm () {
    addListForm.reset();
    addListForm.style.display = "none";
}
function renderListsToForm () {
    listSelector.innerHTML = "";
    _modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.listStorage.forEach(listIndex => {
        if (listIndex == currentView){
            var listOption = document.createElement('option');
            var listOption = document.createElement('option');
            listOption.innerHTML = `${listIndex}`;
            listOption.selected = "selected";
            listSelector.appendChild(listOption);
        }else {
            var listOption = document.createElement('option');
            listOption.value = `${listIndex}`;
            listOption.innerHTML = `${listIndex}`;
            listSelector.appendChild(listOption);
        }
    })
}
function renderListView () {
    listNav.innerHTML = "";
    _modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.listStorage.forEach(listIndex => {
        var listButtonDiv = document.createElement("div");
        listButtonDiv.classList.add("navButton");
        var listButton = document.createElement("button");
        listButton.classList.add("listButton");
        listButton.innerHTML = `${listIndex}`;
        var deleteListButton = document.createElement("button");
        deleteListButton.innerHTML = "X";
        deleteListButton.classList.add("deleteListButton");
        deleteListButton.dataset.list = `${listIndex}`;
        listNav.appendChild(listButtonDiv);
        listButtonDiv.appendChild(listButton);
        listButtonDiv.appendChild(deleteListButton);
    })
}
function clearTaskView () {
    while(taskViewRenderDiv.firstChild) {
        taskViewRenderDiv.removeChild(taskViewRenderDiv.lastChild);
    }
}
function taskTitleToInputField(e) {
    if(!e.target.matches(".TCTitle")) return;
    if(currentView == "completed") return;
    let index = e.target.dataset.index;
    let parent =  e.target.parentElement;
    parent.removeChild(e.target);
    let form = document.createElement("form");
    form.classList.add("TCchangeTitleForm");
    let input = document.createElement("input");
    input.type ="text";
    input.classList.add("TCchangeTitleInput");
    input.dataset.index = index;
    input.value = taskStorage[index].title;
    parent.appendChild(form);
    form.appendChild(input);
}
function updateTaskTitle(e) {
    e.preventDefault();
    if(!e.target.matches(".changeTitleForm")) return;
    let input = e.target.querySelector("input");
    taskStorage[input.dataset.index].title = input.value;
    (0,_src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.setTaskStorage)();
    renderTaskView(currentView);
}
function taskNotesToTextArea(e) {
    if(!e.target.matches(".TCNotes")) return;
    if(currentView == "completed") return;
    let index = e.target.dataset.index;
    let parent =  e.target.parentElement;
    parent.removeChild(e.target);
    let form = document.createElement("form");
    form.classList.add("TCchangeNotesForm");
    let textArea = document.createElement("TEXTAREA");
    textArea.classList.add(".TCchangeNotesTextArea");
    textArea.dataset.index = index;
    textArea.value = taskStorage[index].notes;
    let submit = document.createElement("button");
    submit.classList.add("TCNotesButton");
    submit.innerHTML = "Save Changes";
    parent.appendChild(form);
    form.appendChild(textArea);
    form.appendChild(submit);
}
function updateTaskNotes(e) {
    e.preventDefault();
    if(!e.target.matches(".TCNotesButton")) return;
    let parent = e.target.parentElement;
    let textArea = parent.querySelector("textarea");
    taskStorage[textArea.dataset.index].notes = textArea.value;
    (0,_src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.setTaskStorage)();
    renderTaskView(currentView);
}

function renderTaskView (list) {
    renderArray = getRenderArray(list); 
    clearTaskView();
    renderArray.forEach(task => { 
        let checkbox = `<input type="checkbox" class="TCCheck" data-index="${task.allPriority}">`
        let priorityButtons = 
            `<button class="TCButton TCPriorButton priorUp" data-index="${task.allPriority}">&#9650</button>
            <button class="TCButton TCPriorButton priorDown" data-index="${task.allPriority}">&#9660</button>`;
        let notes = `&nbsp;`;
        if(task.notes != "") {notes = task.notes};
        if(currentView == "completed"){checkbox = ""};
        if(sortBySelector.value != "priority") {priorityButtons = ""};
        var newTaskCard = document.createElement('div');
        newTaskCard.classList.add('taskCard');
        newTaskCard.innerHTML =     
            `<div class="TCTop">
                <div class="TCTopLeft">
                    ${checkbox}
                    <p class="TCTitle" data-index="${task.allPriority}">${task.title}</p>
                </div>
                <div class="TCTopRight">
                    <input type="date" class="TCDate" value="${task.dueDate}">
                    <div class="TCPriorityButtonContainer">
                        ${priorityButtons}
                    </div>
                    <button class="TCButton TCDelete" data-index="${task.allPriority}">X</button>
                </div>
            </div>
            <div class="TCMiddle">
                <button class="TCButton TCExpand" data-info="${task.allPriority}">info</button>
            </div>
            <div class="TCBottom" data-expand="${task.allPriority}">
                <p>Notes:</p>
                <div><p class="TCNotes" data-index="${task.allPriority}">${notes}</p></div>
                <p>List:</p>
                <p class="TCList">${task.list}</p>
            </div>`
        taskViewRenderDiv.appendChild(newTaskCard);
    });
}


//----------------------- 
renderListsToForm();
renderListView();
renderTaskView("all");



/***/ }),

/***/ "./src/modules/Completed.js":
/*!**********************************!*\
  !*** ./src/modules/Completed.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedTasks": () => (/* binding */ completedTasks),
/* harmony export */   "completeTask": () => (/* binding */ completeTask),
/* harmony export */   "updateCompletedPriority": () => (/* binding */ updateCompletedPriority),
/* harmony export */   "setCompletedStorage": () => (/* binding */ setCompletedStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _TaskLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskLogic */ "./src/modules/TaskLogic.js");



var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

function updateCompletedArray(data) {
    completedTasks = completedTasks.concat(data);
}

function completeTask(e) {
    if(!e.target.matches(".TCCheck")) return;
    var task = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.splice((e.target.dataset.index), 1);
    updateCompletedArray(task);
    setCompletedStorage();
    (0,_TaskLogic__WEBPACK_IMPORTED_MODULE_1__.updateAllPriority)();
    (0,_TaskLogic__WEBPACK_IMPORTED_MODULE_1__.updateListPriority)();
    updateCompletedPriority();
    (0,_TaskLogic__WEBPACK_IMPORTED_MODULE_1__.setTaskStorage)();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);
}
function setCompletedStorage() {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}
function updateCompletedPriority() {
    completedTasks.forEach(task => {
        task.allPriority = completedTasks.indexOf(task);
    }) 
}



/***/ }),

/***/ "./src/modules/ListLogic.js":
/*!**********************************!*\
  !*** ./src/modules/ListLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listFormSubmit": () => (/* binding */ listFormSubmit),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "listStorage": () => (/* binding */ listStorage),
/* harmony export */   "setListToDelete": () => (/* binding */ setListToDelete)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _TaskLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskLogic */ "./src/modules/TaskLogic.js");




let listStorage = JSON.parse(localStorage.getItem('listStorage')) || ["Reminders"];

let listToDelete;

function setListToDelete(list) {listToDelete = list};

function setListStorage () {
    localStorage.setItem("listStorage", JSON.stringify(listStorage));
}

function listFormSubmit () {
    var listText = (_index__WEBPACK_IMPORTED_MODULE_0__.addListForm.querySelector('[name=addListText]')).value;
    if (listText == "") return;
    var newList = addListText.value;
    listStorage.push(newList);
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.listFormReset)();
    setListStorage();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderListsToForm)();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderListView)();
}

function deleteList () {
    listStorage.splice((listStorage.indexOf(listToDelete)), 1);
    setListStorage();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderListView)();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderListsToForm)();
    (0,_TaskLogic__WEBPACK_IMPORTED_MODULE_1__.deleteAllTaskFromDeadList)(listToDelete);
    (0,_TaskLogic__WEBPACK_IMPORTED_MODULE_1__.updateAllPriority)();
    (0,_TaskLogic__WEBPACK_IMPORTED_MODULE_1__.setTaskStorage)();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetListDeletePopup)();
}




/***/ }),

/***/ "./src/modules/TaskLogic.js":
/*!**********************************!*\
  !*** ./src/modules/TaskLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFormSubmit": () => (/* binding */ taskFormSubmit),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "updateAllPriority": () => (/* binding */ updateAllPriority),
/* harmony export */   "updateListPriority": () => (/* binding */ updateListPriority),
/* harmony export */   "setTaskStorage": () => (/* binding */ setTaskStorage),
/* harmony export */   "priorityUp": () => (/* binding */ priorityUp),
/* harmony export */   "priorityDown": () => (/* binding */ priorityDown),
/* harmony export */   "deleteAllTaskFromDeadList": () => (/* binding */ deleteAllTaskFromDeadList)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Completed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Completed */ "./src/modules/Completed.js");



const Task = (title, list, notes, dueDate, listPriority, allPriority) => {
    return{
        title, 
        list, 
        notes,
        dueDate,
        listPriority,
        allPriority,
    }
}

function taskFormSubmit () {
    var taskText = (_index__WEBPACK_IMPORTED_MODULE_0__.taskForm.querySelector('[name=taskText]')).value;
    if (taskText == "") return;
    const taskDueDate = (_index__WEBPACK_IMPORTED_MODULE_0__.taskForm.querySelector('[name=taskDueDate]')).value;
    const taskNotes = (_index__WEBPACK_IMPORTED_MODULE_0__.taskForm.querySelector('[name=taskNotes]')).value || "   ";
    const taskList = (_index__WEBPACK_IMPORTED_MODULE_0__.taskForm.querySelector('[name=listSelector]')).value;
    var priority = (checkListPriority(taskList));
    var task = Task(taskText, taskList, taskNotes, taskDueDate, priority, (_index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.length));
    _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.push(task);
    setTaskStorage();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);    
    _index__WEBPACK_IMPORTED_MODULE_0__.taskFormContainer.style.display = "none";
    _index__WEBPACK_IMPORTED_MODULE_0__.taskForm.reset();
}
function setTaskStorage () {
    localStorage.setItem("taskStorage", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.taskStorage));
}
function checkListPriority (list) {
    var listFilter = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.filter(task => task.list == list);
    const priority = (listFilter.length +1);
    return priority;
}
function deleteTask (e) {
    if (!e.target.matches(".TCDelete")) return;
    if(_index__WEBPACK_IMPORTED_MODULE_0__.currentView == "completed") {
        _Completed__WEBPACK_IMPORTED_MODULE_1__.completedTasks.splice((e.target.dataset.index), 1);
        (0,_Completed__WEBPACK_IMPORTED_MODULE_1__.updateCompletedPriority)();
        (0,_Completed__WEBPACK_IMPORTED_MODULE_1__.setCompletedStorage)();
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);
    }else {
        var list = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage[e.target.dataset.index].list; 
        var index = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage[e.target.dataset.index].listPriority;
        _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.splice((e.target.dataset.index), 1);
        updateAllPriority();
        updateListPriority(list, index);
        setTaskStorage();
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);
    }
}
function updateAllPriority() {
    _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.forEach(task => {
        task.allPriority = (_index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.indexOf(task));
    }) 
}
function updateListPriority(list, index) {
    _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.forEach(task => {
        if(task.list != list) return;
        if(task.listPriority < index) return;
        task.listPriority--;
    })
}
function deleteAllTaskFromDeadList(list){
    _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.forEach(task => {
        if(task.list == list) {
            _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.splice(_index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.indexOf(task), 1);
        }
    })
}
function priorityUp (e) {
    if (!e.target.matches(".priorUp")) return;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.currentView == "today") return;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.currentView == "completed") return;
    if(_index__WEBPACK_IMPORTED_MODULE_0__.currentView == "all"){
        if (e.target.dataset.index == 0) return;
        var index = parseInt(e.target.dataset.index);
        _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.forEach(task => {
            if(task.allPriority < (index - 1)) return;
            if(task.allPriority > (index)) return;
            if(task.allPriority == (index - 1)) {
                task.allPriority++;
            } else if (task.allPriority == index) {
                task.allPriority--;
            }
        }) 
    }else {
        var listPrior = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage[parseInt(e.target.dataset.index)].listPriority;
        if(listPrior == 1) return;
        _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.forEach(task => {
            if(task.list != _index__WEBPACK_IMPORTED_MODULE_0__.currentView) return;
            if(task.listPriority < (listPrior - 1)) return;
            if(task.listPriority > (listPrior)) return;
            if(task.listPriority == (listPrior - 1)) {
                task.listPriority++;
            } else if (task.listPriority == listPrior) {
                task.listPriority--;
            }
        }) 
    }
    window.taskStorage = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.sort((a, b) => a.allPriority - b.allPriority);
    setTaskStorage();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);
}
function priorityDown (e) {
    if (!e.target.matches(".priorDown")) return;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.currentView == "today") return;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.currentView == "completed") return;
    if(_index__WEBPACK_IMPORTED_MODULE_0__.currentView == "all"){
        if (e.target.dataset.index == (_index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.length - 1)) return;
        var index = parseInt(e.target.dataset.index);
        _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.forEach(task => {
            if(task.allPriority < (index)) return;
            if(task.allPriority > (index + 1)) return;
            if(task.allPriority == (index)) {
                task.allPriority++;
            } else if (task.allPriority == (index + 1)) {
                task.allPriority--;
            }
        }) 
    } else {
        var listPrior = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage[parseInt(e.target.dataset.index)].listPriority;
        if(listPrior == _index__WEBPACK_IMPORTED_MODULE_0__.renderArray.length) return;
        _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.forEach(task => {
            if(task.list != _index__WEBPACK_IMPORTED_MODULE_0__.currentView) return;
            if(task.listPriority < (listPrior)) return;
            if(task.listPriority > (listPrior + 1)) return;
            if(task.listPriority == (listPrior + 1)) {
                task.listPriority--;
            } else if (task.listPriority == listPrior) {
                task.listPriority++;
            }
        }) 
    }
    window.taskStorage = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.sort((a, b) => a.allPriority - b.allPriority);
    setTaskStorage();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);
}



/***/ }),

/***/ "./src/styles/GitHub-Mark-Light-120px-plus.png":
/*!*****************************************************!*\
  !*** ./src/styles/GitHub-Mark-Light-120px-plus.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5de0643bf1bbf77878ff.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9MaXN0TG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFza0xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdEQUFnRCxtQkFBbUIsR0FBRyxRQUFRLGdCQUFnQiwyQ0FBMkMsbUJBQW1CLEdBQUcsYUFBYSxvQkFBb0Isd0JBQXdCLGlCQUFpQixtQkFBbUIsa0JBQWtCLEdBQUcsVUFBVSxvQkFBb0IseUNBQXlDLG1CQUFtQixzQkFBc0IscUJBQXFCLE1BQU0sb0JBQW9CLG9CQUFvQix1QkFBdUIsa0JBQWtCLGNBQWMsYUFBYSxrQkFBa0IsbUJBQW1CLHFCQUFxQixtQ0FBbUMsd0NBQXdDLEtBQUssMEJBQTBCLHlCQUF5Qix5Q0FBeUMscUJBQXFCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLDJDQUEyQywwQkFBMEIsaUJBQWlCLGdGQUFnRixpQ0FBaUMsbUNBQW1DLDJCQUEyQixZQUFZLFlBQVksWUFBWSxVQUFVLE9BQU8sWUFBWSxLQUFLLHNCQUFzQixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLGlCQUFpQiwyQ0FBMkMsdUJBQXVCLEdBQUcsUUFBUSxvQkFBb0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsR0FBRyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixvQ0FBb0MsMEJBQTBCLG1CQUFtQix5QkFBeUIsd0JBQXdCLG9DQUFvQyx1QkFBdUIseUJBQXlCLEdBQUcsb0JBQW9CLDJDQUEyQyxzQkFBc0IsR0FBRyxzQ0FBc0MsaUJBQWlCLGtCQUFrQix5QkFBeUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIseUJBQXlCLGtCQUFrQixtQkFBbUIsdUJBQXVCLHVCQUF1QixHQUFHLHdCQUF3QiwyQ0FBMkMsc0JBQXNCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGdCQUFnQix1QkFBdUIsd0JBQXdCLG1CQUFtQixt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LFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxzQkFBc0IsdUJBQXVCLHVCQUF1QixNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFB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Ozs7VUMzSUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnZpZXdwb3J0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuLmxpc3REZWxldGVQb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuICB9XFxuICAubGlzdERlbGV0ZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4NCwgMTUzKTtcXG4gICAgY29sb3I6ICMwQTEwMEQ7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm94LXNoYWRvdzogNnB4IDEwcHggMjBweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xcbiAgfVxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XFxuICAgIHRvIHt0b3A6IDA7IG9wYWNpdHk6IDF9XFxuICB9XFxuIC5uYXZCb2R5Q29udGFpbmVyIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdztcXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuLm5hdiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdkJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5uYXZCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdkJ1dHRvbjpob3ZlciAuZGVsZXRlTGlzdEJ1dHRvbiB7IGRpc3BsYXk6IGJsb2NrO31cXG4uYWRkTGlzdEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG4uYWRkTGlzdEJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkTGlzdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYWRkTGlzdFRleHQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4uYWRkTGlzdFRleHQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZGl2aWRlciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigxNzcsIDE3NywgMTc3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZGVsZXRlTGlzdEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5kZWxldGVMaXN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5saXN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubGlzdEJ1dHRvblNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcbn1cXG4udGFza1ZpZXdlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59IFxcbi50YXNrVmlld2VyTmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuLnRhc2tWaWV3ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2tGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4udGFza0NhcmQ6aG92ZXIgLlRDUHJpb3JCdXR0b24ge2Rpc3BsYXk6IGJsb2NrO31cXG4udGFza0NhcmQ6aG92ZXIgLlRDRGVsZXRlIHtkaXNwbGF5OiBibG9jazt9XFxuLnRhc2tDYXJkOmhvdmVyIC5UQ0V4cGFuZCB7ZGlzcGxheTogYmxvY2s7fVxcbi5UQ1RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5UQ1RvcExlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbi5UQ0NoZWNrIHtcXG59XFxuLlRDVGl0bGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1pbi13aWR0aDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENUb3BSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLlRDRGF0ZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uVENEZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5UQ0JvdHRvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5leHBhbmRlZEluZm8ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLlRDTm90ZXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENQcmlvcml0eUJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLlRDQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5UQ1ByaW9yQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzMsIDEzMywgMTMzKTtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDAlO1xcbn1cXG4uVENNaWRkbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uVENFeHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG4uVENMaXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG4ubmV3VGFza0J1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbn1cXG5mb290ZXIge1xcbiAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICBsZWZ0OiAwO1xcbiAgIGJvdHRvbTogMDtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDg0LCAxNTMpO1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZzogNXB4O1xcbn0gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlDQUF5QztJQUN6QyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YseUVBQXlFO0lBQ3pFLDBCQUEwQjtJQUMxQjtFQUNGO0VBQ0E7SUFDRSxNQUFNLFdBQVcsRUFBRSxVQUFVO0lBQzdCLElBQUksTUFBTSxFQUFFLFVBQVU7RUFDeEI7Q0FDRDtJQUNHLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsa0JBQWtC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Q0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7R0FDRyxlQUFlO0dBQ2YsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsa0NBQWtDO0dBQ2xDLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsWUFBWTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnZpZXdwb3J0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuLmxpc3REZWxldGVQb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuICB9XFxuICAubGlzdERlbGV0ZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4NCwgMTUzKTtcXG4gICAgY29sb3I6ICMwQTEwMEQ7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm94LXNoYWRvdzogNnB4IDEwcHggMjBweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xcbiAgfVxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XFxuICAgIHRvIHt0b3A6IDA7IG9wYWNpdHk6IDF9XFxuICB9XFxuIC5uYXZCb2R5Q29udGFpbmVyIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdztcXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuLm5hdiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdkJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5uYXZCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdkJ1dHRvbjpob3ZlciAuZGVsZXRlTGlzdEJ1dHRvbiB7IGRpc3BsYXk6IGJsb2NrO31cXG4uYWRkTGlzdEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG4uYWRkTGlzdEJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkTGlzdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYWRkTGlzdFRleHQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4uYWRkTGlzdFRleHQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZGl2aWRlciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigxNzcsIDE3NywgMTc3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZGVsZXRlTGlzdEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5kZWxldGVMaXN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5saXN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubGlzdEJ1dHRvblNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcbn1cXG4udGFza1ZpZXdlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59IFxcbi50YXNrVmlld2VyTmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuLnRhc2tWaWV3ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2tGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4udGFza0NhcmQ6aG92ZXIgLlRDUHJpb3JCdXR0b24ge2Rpc3BsYXk6IGJsb2NrO31cXG4udGFza0NhcmQ6aG92ZXIgLlRDRGVsZXRlIHtkaXNwbGF5OiBibG9jazt9XFxuLnRhc2tDYXJkOmhvdmVyIC5UQ0V4cGFuZCB7ZGlzcGxheTogYmxvY2s7fVxcbi5UQ1RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5UQ1RvcExlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbi5UQ0NoZWNrIHtcXG59XFxuLlRDVGl0bGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1pbi13aWR0aDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENUb3BSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLlRDRGF0ZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uVENEZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5UQ0JvdHRvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5leHBhbmRlZEluZm8ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLlRDTm90ZXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENQcmlvcml0eUJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLlRDQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5UQ1ByaW9yQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzMsIDEzMywgMTMzKTtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDAlO1xcbn1cXG4uVENNaWRkbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uVENFeHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG4uVENMaXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG4ubmV3VGFza0J1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbn1cXG5mb290ZXIge1xcbiAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICBsZWZ0OiAwO1xcbiAgIGJvdHRvbTogMDtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDg0LCAxNTMpO1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZzogNXB4O1xcbn0gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcbmltcG9ydCBJY29uIGZyb20gJy4vc3R5bGVzL0dpdEh1Yi1NYXJrLUxpZ2h0LTEyMHB4LXBsdXMucG5nJztcbmltcG9ydCB7dGFza0Zvcm1TdWJtaXQsIGRlbGV0ZVRhc2ssIHNldFRhc2tTdG9yYWdlLCBwcmlvcml0eURvd24sIHByaW9yaXR5VXAsIH0gZnJvbSAnL3NyYy9tb2R1bGVzL1Rhc2tMb2dpYyc7XG5pbXBvcnQge2NvbXBsZXRlZFRhc2tzLCBjb21wbGV0ZVRhc2t9IGZyb20gJy9zcmMvbW9kdWxlcy9Db21wbGV0ZWQnO1xuaW1wb3J0IHtsaXN0U3RvcmFnZSwgbGlzdEZvcm1TdWJtaXQsIGRlbGV0ZUxpc3QsIGxpc3RUb0RlbGV0ZSwgc2V0TGlzdFRvRGVsZXRlfSBmcm9tICcuL21vZHVsZXMvTGlzdExvZ2ljJztcblxuLy8gc3RvcmFnZVxubGV0IHRhc2tTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza1N0b3JhZ2UnKSkgfHwgW107XG5cbmxldCBjdXJyZW50VmlldyA9ICBcImFsbFwiO1xuXG5sZXQgcmVuZGVyQXJyYXk7XG5cbmNvbnN0IGxpc3REZWxldGVCdXR0b25DbGlja2VkID0gKGUpID0+IHtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5kZWxldGVMaXN0QnV0dG9uXCIpKSByZXR1cm47XG4gICAgc2V0TGlzdFRvRGVsZXRlKGUudGFyZ2V0LmRhdGFzZXQubGlzdClcbiAgICBsaXN0RGVsZXRlUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBsaXN0RGVsZXRlV2FybmluZy5pbm5lckhUTUwgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke2xpc3RUb0RlbGV0ZX0gYW5kIGFsbCBvZiBpdCdzIHRhc2tzP2A7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVsZXRlTGlzdCAoKSB7XG4gICAgbGlzdERlbGV0ZVBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbmZ1bmN0aW9uIGxpc3RGb3JtUmVzZXQoKSB7XG4gICAgYWRkTGlzdEZvcm0ucmVzZXQoKTtcbiAgICBhZGRMaXN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5mdW5jdGlvbiByZXNldExpc3REZWxldGVQb3B1cCgpIHtcbiAgICBsaXN0RGVsZXRlUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuZnVuY3Rpb24gbGlzdEJ1dHRvbkNsaWNrZWQgKGUpIHtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5saXN0QnV0dG9uXCIpKSByZXR1cm47XG4gICAgY3VycmVudFZpZXcgPSBlLnRhcmdldC5pbm5lckhUTUw7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xuICAgIHJlbmRlckxpc3RzVG9Gb3JtKCk7XG4gICAgbGlzdEJ1dHRvbkhpZ2hsaWdodChlLnRhcmdldCk7XG4gICAgQ2hlY2tIaWRlTmV3VGFza0J1dHRvbigpO1xufVxuLy9oaWRlIHRoZSBuZXcgdGFzayBidXR0b24gc28gdGFza3MgYXJlIG5vdCBtYWRlIGluIGNvbXBsZXRlZCB2aWV3XG5mdW5jdGlvbiBDaGVja0hpZGVOZXdUYXNrQnV0dG9uKCkge1xuICAgIG5ld1Rhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBpZiAoY3VycmVudFZpZXcgIT0gXCJjb21wbGV0ZWRcIikgcmV0dXJuO1xuICAgIG5ld1Rhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbn1cbi8vbG9naWMgdGhhdCBzb3J0cyB1c2VyIGRhdGEgZm9yIHRhc2sgY2FyZCBjcmVhdGlvblxuZnVuY3Rpb24gZ2V0UmVuZGVyQXJyYXkgKGxpc3QpIHtcbiAgICB2YXIgc29ydFZhbCA9IHNvcnRCeVNlbGVjdG9yLnZhbHVlO1xuICAgIGxldCBmaWx0ZXJlZEFycmF5O1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIGxldCByZW5kZXJBcnJheTtcbiAgICBzd2l0Y2ggKGxpc3QpIHtcbiAgICAgICAgY2FzZSAoXCJhbGxcIik6IFxuICAgICAgICAgICAgc3dpdGNoIChzb3J0VmFsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwcmlvcml0eVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyYXkgPSB0YXNrU3RvcmFnZS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEuYWxsUHJpb3JpdHkgLSBiLmFsbFByaW9yaXR5KTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiZHVlLWRhdGVcIik6XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckFycmF5ID0gdGFza1N0b3JhZ2Uuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5MSA9IG5ldyBEYXRlKGEuZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5MiA9IG5ldyBEYXRlKGIuZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleTEgPCBrZXkyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkxID09IGtleTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcInRvZGF5XCIpOlxuICAgICAgICAgICAgc3dpdGNoIChzb3J0VmFsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwcmlvcml0eVwiKTpcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRBcnJheSA9IHRhc2tTdG9yYWdlLmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PSB0b2RheSk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckFycmF5ID0gZmlsdGVyZWRBcnJheS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEuYWxsUHJpb3JpdHkgLSBiLmFsbFByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJkdWUtZGF0ZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgLy9jb2RlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFwiY29tcGxldGVkXCIpOlxuICAgICAgICAgICAgc3dpdGNoIChzb3J0VmFsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwcmlvcml0eVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyYXkgPSBjb21wbGV0ZWRUYXNrcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEuYWxsUHJpb3JpdHkgLSBiLmFsbFByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJkdWUtZGF0ZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgLy9jb2RlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICBzd2l0Y2ggKHNvcnRWYWwpIHtcbiAgICAgICAgICAgIGNhc2UgKFwicHJpb3JpdHlcIik6XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBcnJheSA9IHRhc2tTdG9yYWdlLmZpbHRlcih0YXNrID0+IHRhc2subGlzdCA9PSBsaXN0KTtcbiAgICAgICAgICAgICAgICByZW5kZXJBcnJheSA9IGZpbHRlcmVkQXJyYXkuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhLmxpc3RQcmlvcml0eSAtIGIubGlzdFByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKFwiZHVlLWRhdGVcIik6XG4gICAgICAgICAgICAgICAgLy9jb2RlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlckFycmF5O1xufVxuZnVuY3Rpb24gYWxsQnV0dG9uQ2xpY2tlZCAoKSB7XG4gICAgY3VycmVudFZpZXcgPSBcImFsbFwiXG4gICAgcmVuZGVyVGFza1ZpZXcoXCJhbGxcIik7XG4gICAgbGlzdEJ1dHRvbkhpZ2hsaWdodCgpO1xuICAgIENoZWNrSGlkZU5ld1Rhc2tCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gdG9kYXlCdXR0b25DbGlja2VkICgpIHtcbiAgICBjdXJyZW50VmlldyA9IFwidG9kYXlcIjtcbiAgICByZW5kZXJUYXNrVmlldyhcInRvZGF5XCIpO1xuICAgIGxpc3RCdXR0b25IaWdobGlnaHQoKVxuICAgIENoZWNrSGlkZU5ld1Rhc2tCdXR0b24oKTtcbn1cbmZ1bmN0aW9uIGNvbXBsZXRlZEJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgY3VycmVudFZpZXcgPSBcImNvbXBsZXRlZFwiXG4gICAgcmVuZGVyVGFza1ZpZXcoXCJjb21wbGV0ZWRcIik7XG4gICAgbGlzdEJ1dHRvbkhpZ2hsaWdodCgpXG4gICAgQ2hlY2tIaWRlTmV3VGFza0J1dHRvbigpO1xufVxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0gZG9tIGxpc3RlbmVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZExpc3RCdXR0b25cIik7XG5jb25zdCBhZGRMaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTGlzdEZvcm1cIik7XG5jb25zdCBhZGRMaXN0VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTGlzdFRleHRcIik7XG5jb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbEJ1dHRvblwiKVxuY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5QnV0dG9uXCIpO1xuY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRCdXR0b25cIik7XG5jb25zdCBsaXN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0TmF2XCIpO1xuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VGFza0J1dHRvblwiKTtcbmNvbnN0IHNvcnRCeVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0QnlTZWxlY3RvclwiKTtcbmNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRm9ybUNvbnRhaW5lclwiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRm9ybVwiKTtcbmNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGV4dFwiKTtcbmNvbnN0IGxpc3RTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0U2VsZWN0b3InKTtcbmNvbnN0IHRhc2tWaWV3UmVuZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3UmVuZGVyRGl2Jyk7XG5jb25zdCBsaXN0RGVsZXRlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3REZWxldGVQb3B1cFwiKTtcbmNvbnN0IGxpc3REZWxldGVXYXJuaW5nID0gbGlzdERlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdERlbGV0ZVdhcm5pbmdcIik7XG5jb25zdCB5ZXNEZWxldGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZXNEZWxldGVMaXN0XCIpO1xuY29uc3Qgbm9EZWxldGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub0RlbGV0ZUxpc3RcIik7XG5jb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJMaW5rXCIpO1xuXG5cbmxpc3ROYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpc3RCdXR0b25DbGlja2VkKTtcbmxpc3ROYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpc3REZWxldGVCdXR0b25DbGlja2VkKTtcbnllc0RlbGV0ZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUxpc3QpO1xubm9EZWxldGVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckRlbGV0ZUxpc3QpO1xuYWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxsQnV0dG9uQ2xpY2tlZCk7XG50b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZGF5QnV0dG9uQ2xpY2tlZCk7XG5jb21wbGV0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbXBsZXRlZEJ1dHRvbkNsaWNrZWQpO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByaW9yaXR5VXApO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByaW9yaXR5RG93bik7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwYW5kQ2FyZEluZm8pO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbXBsZXRlVGFzayk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza1RpdGxlVG9JbnB1dEZpZWxkKTtcbnRhc2tWaWV3UmVuZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdXBkYXRlVGFza1RpdGxlKTtcbnRhc2tWaWV3UmVuZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrTm90ZXNUb1RleHRBcmVhKTtcbnRhc2tWaWV3UmVuZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVUYXNrTm90ZXMpO1xuYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxpc3RGb3JtU3VibWl0KCk7XG4gICAgY3JlYXRlTmV3TGlzdEZvcm0oKTtcbiAgICBhZGRMaXN0VGV4dC5mb2N1cygpO1xufSk7XG5hZGRMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxpc3RGb3JtU3VibWl0KCk7XG59KTtcblxubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtU3VibWl0KCk7XG4gICAgY3JlYXRlVGFza0Zvcm0oKTtcbn0pO1xuc29ydEJ5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7cmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO30pO1xudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrRm9ybVN1Ym1pdCgpO1xufSk7IFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIHJlc2V0VGFza0Zvcm0oKTtcbiAgICByZXNldExpc3RGb3JtKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xuICB9XG59KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIgJiYgZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0YXNrRm9ybVN1Ym1pdCgpO1xuICAgIH1cbn0pXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSB0YXNrZm9ybSwgXG5cbi8vIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZSkgeyAvL3RoaXMgbG9naWMgbmVlZHMgd29ya1xuLy8gICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJcIikpXG4vLyB9XG5cblxuXG4vLy0tLS0tLS0tLS0tLS0tLSBkb20gZWRpdG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbm15SWNvbi5zcmMgPSBJY29uO1xubXlJY29uLmFsdD1cImdpdCBodWIgbWFya1wiO1xubXlJY29uLmhlaWdodCA9IFwiMjBcIjtcbm15SWNvbi53aWR0aCA9IFwiMjBcIjtcbmZvb3RlckxpbmsuYXBwZW5kQ2hpbGQobXlJY29uKTtcbi8vaGlnaGxpZ2h0IGxpc3QgYnV0dG9ucyB3aGVuIGNsaWNrZWRcbmZ1bmN0aW9uIGxpc3RCdXR0b25IaWdobGlnaHQodGFyZ2V0KSB7XG4gICAgdmFyIGFsbExpc3RCdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdEJ1dHRvblwiKV07XG4gICAgYWxsTGlzdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdEJ1dHRvblNlbGVjdGVkXCIpO30pO1xuICAgIHN3aXRjaCAoY3VycmVudFZpZXcpIHtcbiAgICAgICAgY2FzZSAoXCJhbGxcIik6IFxuICAgICAgICAgICAgYWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0QnV0dG9uU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoXCJ0b2RheVwiKTpcbiAgICAgICAgICAgIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0QnV0dG9uU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoXCJjb21wbGV0ZWRcIik6XG4gICAgICAgICAgICBjb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3RCdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJsaXN0QnV0dG9uU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5mdW5jdGlvbiBleHBhbmRDYXJkSW5mbyAoZSkge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcyhcIi5UQ0V4cGFuZFwiKSkgcmV0dXJuO1xuICAgIHZhciBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5mbztcbiAgICB2YXIgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIHZhciB0YXJnZXRCb3R0b20gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihgW2RhdGEtZXhwYW5kPVwiJHtpbmRleH1cIl1gKVxuICAgIGlmKHRhcmdldEJvdHRvbS5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZEluZm9cIikpIHtcbiAgICAgICAgdGFyZ2V0Qm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZEluZm9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0Qm90dG9tLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZEluZm9cIik7XG4gICAgfVxufSAgICBcblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0gKCkge1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyTGlzdHNUb0Zvcm0oKTtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgICBcbiAgICB0YXNrVGV4dC5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdMaXN0Rm9ybSAoKSB7XG4gICAgYWRkTGlzdEZvcm0ucmVzZXQoKTtcbiAgICBhZGRMaXN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGFkZExpc3RUZXh0LmZvY3VzKCk7XG59XG5mdW5jdGlvbiByZXNldFRhc2tGb3JtICgpIHtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbmZ1bmN0aW9uIHJlc2V0TGlzdEZvcm0gKCkge1xuICAgIGFkZExpc3RGb3JtLnJlc2V0KCk7XG4gICAgYWRkTGlzdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuZnVuY3Rpb24gcmVuZGVyTGlzdHNUb0Zvcm0gKCkge1xuICAgIGxpc3RTZWxlY3Rvci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxpc3RTdG9yYWdlLmZvckVhY2gobGlzdEluZGV4ID0+IHtcbiAgICAgICAgaWYgKGxpc3RJbmRleCA9PSBjdXJyZW50Vmlldyl7XG4gICAgICAgICAgICB2YXIgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgdmFyIGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxpc3RPcHRpb24uaW5uZXJIVE1MID0gYCR7bGlzdEluZGV4fWA7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuICAgICAgICAgICAgbGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi52YWx1ZSA9IGAke2xpc3RJbmRleH1gO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi5pbm5lckhUTUwgPSBgJHtsaXN0SW5kZXh9YDtcbiAgICAgICAgICAgIGxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChsaXN0T3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5mdW5jdGlvbiByZW5kZXJMaXN0VmlldyAoKSB7XG4gICAgbGlzdE5hdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxpc3RTdG9yYWdlLmZvckVhY2gobGlzdEluZGV4ID0+IHtcbiAgICAgICAgdmFyIGxpc3RCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsaXN0QnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJuYXZCdXR0b25cIik7XG4gICAgICAgIHZhciBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdEJ1dHRvblwiKTtcbiAgICAgICAgbGlzdEJ1dHRvbi5pbm5lckhUTUwgPSBgJHtsaXN0SW5kZXh9YDtcbiAgICAgICAgdmFyIGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVMaXN0QnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLmRhdGFzZXQubGlzdCA9IGAke2xpc3RJbmRleH1gO1xuICAgICAgICBsaXN0TmF2LmFwcGVuZENoaWxkKGxpc3RCdXR0b25EaXYpO1xuICAgICAgICBsaXN0QnV0dG9uRGl2LmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xuICAgICAgICBsaXN0QnV0dG9uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUxpc3RCdXR0b24pO1xuICAgIH0pXG59XG5mdW5jdGlvbiBjbGVhclRhc2tWaWV3ICgpIHtcbiAgICB3aGlsZSh0YXNrVmlld1JlbmRlckRpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tWaWV3UmVuZGVyRGl2LnJlbW92ZUNoaWxkKHRhc2tWaWV3UmVuZGVyRGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGFza1RpdGxlVG9JbnB1dEZpZWxkKGUpIHtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5UQ1RpdGxlXCIpKSByZXR1cm47XG4gICAgaWYoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIikgcmV0dXJuO1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgbGV0IHBhcmVudCA9ICBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChlLnRhcmdldCk7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJUQ2NoYW5nZVRpdGxlRm9ybVwiKTtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9XCJ0ZXh0XCI7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIlRDY2hhbmdlVGl0bGVJbnB1dFwiKTtcbiAgICBpbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgaW5wdXQudmFsdWUgPSB0YXNrU3RvcmFnZVtpbmRleF0udGl0bGU7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuZnVuY3Rpb24gdXBkYXRlVGFza1RpdGxlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuY2hhbmdlVGl0bGVGb3JtXCIpKSByZXR1cm47XG4gICAgbGV0IGlucHV0ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIHRhc2tTdG9yYWdlW2lucHV0LmRhdGFzZXQuaW5kZXhdLnRpdGxlID0gaW5wdXQudmFsdWU7XG4gICAgc2V0VGFza1N0b3JhZ2UoKTtcbiAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG59XG5mdW5jdGlvbiB0YXNrTm90ZXNUb1RleHRBcmVhKGUpIHtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5UQ05vdGVzXCIpKSByZXR1cm47XG4gICAgaWYoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIikgcmV0dXJuO1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgbGV0IHBhcmVudCA9ICBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChlLnRhcmdldCk7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJUQ2NoYW5nZU5vdGVzRm9ybVwiKTtcbiAgICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEVYVEFSRUFcIik7XG4gICAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcIi5UQ2NoYW5nZU5vdGVzVGV4dEFyZWFcIik7XG4gICAgdGV4dEFyZWEuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIHRleHRBcmVhLnZhbHVlID0gdGFza1N0b3JhZ2VbaW5kZXhdLm5vdGVzO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiVENOb3Rlc0J1dHRvblwiKTtcbiAgICBzdWJtaXQuaW5uZXJIVE1MID0gXCJTYXZlIENoYW5nZXNcIjtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xufVxuZnVuY3Rpb24gdXBkYXRlVGFza05vdGVzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuVENOb3Rlc0J1dHRvblwiKSkgcmV0dXJuO1xuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCB0ZXh0QXJlYSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG4gICAgdGFza1N0b3JhZ2VbdGV4dEFyZWEuZGF0YXNldC5pbmRleF0ubm90ZXMgPSB0ZXh0QXJlYS52YWx1ZTtcbiAgICBzZXRUYXNrU3RvcmFnZSgpO1xuICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza1ZpZXcgKGxpc3QpIHtcbiAgICByZW5kZXJBcnJheSA9IGdldFJlbmRlckFycmF5KGxpc3QpOyBcbiAgICBjbGVhclRhc2tWaWV3KCk7XG4gICAgcmVuZGVyQXJyYXkuZm9yRWFjaCh0YXNrID0+IHsgXG4gICAgICAgIGxldCBjaGVja2JveCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJUQ0NoZWNrXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj5gXG4gICAgICAgIGxldCBwcmlvcml0eUJ1dHRvbnMgPSBcbiAgICAgICAgICAgIGA8YnV0dG9uIGNsYXNzPVwiVENCdXR0b24gVENQcmlvckJ1dHRvbiBwcmlvclVwXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj4mIzk2NTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJUQ0J1dHRvbiBUQ1ByaW9yQnV0dG9uIHByaW9yRG93blwiIGRhdGEtaW5kZXg9XCIke3Rhc2suYWxsUHJpb3JpdHl9XCI+JiM5NjYwPC9idXR0b24+YDtcbiAgICAgICAgbGV0IG5vdGVzID0gYCZuYnNwO2A7XG4gICAgICAgIGlmKHRhc2subm90ZXMgIT0gXCJcIikge25vdGVzID0gdGFzay5ub3Rlc307XG4gICAgICAgIGlmKGN1cnJlbnRWaWV3ID09IFwiY29tcGxldGVkXCIpe2NoZWNrYm94ID0gXCJcIn07XG4gICAgICAgIGlmKHNvcnRCeVNlbGVjdG9yLnZhbHVlICE9IFwicHJpb3JpdHlcIikge3ByaW9yaXR5QnV0dG9ucyA9IFwiXCJ9O1xuICAgICAgICB2YXIgbmV3VGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3VGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFza0NhcmQnKTtcbiAgICAgICAgbmV3VGFza0NhcmQuaW5uZXJIVE1MID0gICAgIFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJUQ1RvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUQ1RvcExlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtjaGVja2JveH1cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJUQ1RpdGxlXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUQ1RvcFJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiVENEYXRlXCIgdmFsdWU9XCIke3Rhc2suZHVlRGF0ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDUHJpb3JpdHlCdXR0b25Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJpb3JpdHlCdXR0b25zfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlRDQnV0dG9uIFRDRGVsZXRlXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj5YPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUQ01pZGRsZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJUQ0J1dHRvbiBUQ0V4cGFuZFwiIGRhdGEtaW5mbz1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj5pbmZvPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUQ0JvdHRvbVwiIGRhdGEtZXhwYW5kPVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPlxuICAgICAgICAgICAgICAgIDxwPk5vdGVzOjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2PjxwIGNsYXNzPVwiVENOb3Rlc1wiIGRhdGEtaW5kZXg9XCIke3Rhc2suYWxsUHJpb3JpdHl9XCI+JHtub3Rlc308L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+TGlzdDo8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJUQ0xpc3RcIj4ke3Rhc2subGlzdH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHRhc2tWaWV3UmVuZGVyRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tDYXJkKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHt0YXNrRm9ybSwgdGFza1N0b3JhZ2UsIHJlbmRlclRhc2tWaWV3LCB0YXNrRm9ybUNvbnRhaW5lciwgY3VycmVudFZpZXcsIHJlbmRlckFycmF5LCBsaXN0Rm9ybVJlc2V0LCByZXNldExpc3REZWxldGVQb3B1cCwgYWRkTGlzdEZvcm0sIHJlbmRlckxpc3RzVG9Gb3JtLCByZW5kZXJMaXN0Vmlld307XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxucmVuZGVyTGlzdHNUb0Zvcm0oKTtcbnJlbmRlckxpc3RWaWV3KCk7XG5yZW5kZXJUYXNrVmlldyhcImFsbFwiKTtcblxuIiwiaW1wb3J0IHsgdGFza1N0b3JhZ2UsIHJlbmRlclRhc2tWaWV3LCBjdXJyZW50VmlldyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgdXBkYXRlQWxsUHJpb3JpdHksIHVwZGF0ZUxpc3RQcmlvcml0eSwgc2V0VGFza1N0b3JhZ2V9IGZyb20gXCIuL1Rhc2tMb2dpY1wiO1xuXG52YXIgY29tcGxldGVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGxldGVkVGFza3NcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiB1cGRhdGVDb21wbGV0ZWRBcnJheShkYXRhKSB7XG4gICAgY29tcGxldGVkVGFza3MgPSBjb21wbGV0ZWRUYXNrcy5jb25jYXQoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayhlKSB7XG4gICAgaWYoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuVENDaGVja1wiKSkgcmV0dXJuO1xuICAgIHZhciB0YXNrID0gdGFza1N0b3JhZ2Uuc3BsaWNlKChlLnRhcmdldC5kYXRhc2V0LmluZGV4KSwgMSk7XG4gICAgdXBkYXRlQ29tcGxldGVkQXJyYXkodGFzayk7XG4gICAgc2V0Q29tcGxldGVkU3RvcmFnZSgpO1xuICAgIHVwZGF0ZUFsbFByaW9yaXR5KCk7XG4gICAgdXBkYXRlTGlzdFByaW9yaXR5KCk7XG4gICAgdXBkYXRlQ29tcGxldGVkUHJpb3JpdHkoKTtcbiAgICBzZXRUYXNrU3RvcmFnZSgpO1xuICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbn1cbmZ1bmN0aW9uIHNldENvbXBsZXRlZFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb21wbGV0ZWRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRUYXNrcykpO1xufVxuZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkUHJpb3JpdHkoKSB7XG4gICAgY29tcGxldGVkVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5hbGxQcmlvcml0eSA9IGNvbXBsZXRlZFRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgfSkgXG59XG5cbmV4cG9ydCB7Y29tcGxldGVkVGFza3MsIGNvbXBsZXRlVGFzaywgdXBkYXRlQ29tcGxldGVkUHJpb3JpdHksIHNldENvbXBsZXRlZFN0b3JhZ2V9IiwiaW1wb3J0IHsgbGlzdEZvcm1SZXNldCwgcmVuZGVyTGlzdHNUb0Zvcm0sIHJlbmRlckxpc3RWaWV3LCByZW5kZXJUYXNrVmlldywgcmVzZXRMaXN0RGVsZXRlUG9wdXAsIHRhc2tTdG9yYWdlLCBhZGRMaXN0Rm9ybSwgY3VycmVudFZpZXd9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHt1cGRhdGVBbGxQcmlvcml0eSwgc2V0VGFza1N0b3JhZ2UsIGRlbGV0ZUFsbFRhc2tGcm9tRGVhZExpc3R9IGZyb20gXCIuL1Rhc2tMb2dpY1wiO1xuXG5cbmxldCBsaXN0U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RTdG9yYWdlJykpIHx8IFtcIlJlbWluZGVyc1wiXTtcblxubGV0IGxpc3RUb0RlbGV0ZTtcblxuZnVuY3Rpb24gc2V0TGlzdFRvRGVsZXRlKGxpc3QpIHtsaXN0VG9EZWxldGUgPSBsaXN0fTtcblxuZnVuY3Rpb24gc2V0TGlzdFN0b3JhZ2UgKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobGlzdFN0b3JhZ2UpKTtcbn1cblxuZnVuY3Rpb24gbGlzdEZvcm1TdWJtaXQgKCkge1xuICAgIHZhciBsaXN0VGV4dCA9IChhZGRMaXN0Rm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZGRMaXN0VGV4dF0nKSkudmFsdWU7XG4gICAgaWYgKGxpc3RUZXh0ID09IFwiXCIpIHJldHVybjtcbiAgICB2YXIgbmV3TGlzdCA9IGFkZExpc3RUZXh0LnZhbHVlO1xuICAgIGxpc3RTdG9yYWdlLnB1c2gobmV3TGlzdCk7XG4gICAgbGlzdEZvcm1SZXNldCgpO1xuICAgIHNldExpc3RTdG9yYWdlKCk7XG4gICAgcmVuZGVyTGlzdHNUb0Zvcm0oKTtcbiAgICByZW5kZXJMaXN0VmlldygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0ICgpIHtcbiAgICBsaXN0U3RvcmFnZS5zcGxpY2UoKGxpc3RTdG9yYWdlLmluZGV4T2YobGlzdFRvRGVsZXRlKSksIDEpO1xuICAgIHNldExpc3RTdG9yYWdlKCk7XG4gICAgcmVuZGVyTGlzdFZpZXcoKTtcbiAgICByZW5kZXJMaXN0c1RvRm9ybSgpO1xuICAgIGRlbGV0ZUFsbFRhc2tGcm9tRGVhZExpc3QobGlzdFRvRGVsZXRlKTtcbiAgICB1cGRhdGVBbGxQcmlvcml0eSgpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xuICAgIHJlc2V0TGlzdERlbGV0ZVBvcHVwKCk7XG59XG5cblxuZXhwb3J0IHtsaXN0Rm9ybVN1Ym1pdCwgZGVsZXRlTGlzdCwgbGlzdFN0b3JhZ2UsIHNldExpc3RUb0RlbGV0ZX07IiwiaW1wb3J0IHsgdGFza0Zvcm0sIHRhc2tTdG9yYWdlLCByZW5kZXJUYXNrVmlldywgdGFza0Zvcm1Db250YWluZXIsIGN1cnJlbnRWaWV3LCByZW5kZXJBcnJheX0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQge3VwZGF0ZUNvbXBsZXRlZFByaW9yaXR5LCBzZXRDb21wbGV0ZWRTdG9yYWdlLCBjb21wbGV0ZWRUYXNrc30gZnJvbSBcIi4vQ29tcGxldGVkXCJcblxuY29uc3QgVGFzayA9ICh0aXRsZSwgbGlzdCwgbm90ZXMsIGR1ZURhdGUsIGxpc3RQcmlvcml0eSwgYWxsUHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgbGlzdCwgXG4gICAgICAgIG5vdGVzLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBsaXN0UHJpb3JpdHksXG4gICAgICAgIGFsbFByaW9yaXR5LFxuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFza0Zvcm1TdWJtaXQgKCkge1xuICAgIHZhciB0YXNrVGV4dCA9ICh0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT10YXNrVGV4dF0nKSkudmFsdWU7XG4gICAgaWYgKHRhc2tUZXh0ID09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9ICh0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT10YXNrRHVlRGF0ZV0nKSkudmFsdWU7XG4gICAgY29uc3QgdGFza05vdGVzID0gKHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXRhc2tOb3Rlc10nKSkudmFsdWUgfHwgXCIgICBcIjtcbiAgICBjb25zdCB0YXNrTGlzdCA9ICh0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1saXN0U2VsZWN0b3JdJykpLnZhbHVlO1xuICAgIHZhciBwcmlvcml0eSA9IChjaGVja0xpc3RQcmlvcml0eSh0YXNrTGlzdCkpO1xuICAgIHZhciB0YXNrID0gVGFzayh0YXNrVGV4dCwgdGFza0xpc3QsIHRhc2tOb3RlcywgdGFza0R1ZURhdGUsIHByaW9yaXR5LCAodGFza1N0b3JhZ2UubGVuZ3RoKSk7XG4gICAgdGFza1N0b3JhZ2UucHVzaCh0YXNrKTtcbiAgICBzZXRUYXNrU3RvcmFnZSgpO1xuICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTsgICAgXG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG59XG5mdW5jdGlvbiBzZXRUYXNrU3RvcmFnZSAoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrU3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh0YXNrU3RvcmFnZSkpO1xufVxuZnVuY3Rpb24gY2hlY2tMaXN0UHJpb3JpdHkgKGxpc3QpIHtcbiAgICB2YXIgbGlzdEZpbHRlciA9IHRhc2tTdG9yYWdlLmZpbHRlcih0YXNrID0+IHRhc2subGlzdCA9PSBsaXN0KTtcbiAgICBjb25zdCBwcmlvcml0eSA9IChsaXN0RmlsdGVyLmxlbmd0aCArMSk7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xufVxuZnVuY3Rpb24gZGVsZXRlVGFzayAoZSkge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcyhcIi5UQ0RlbGV0ZVwiKSkgcmV0dXJuO1xuICAgIGlmKGN1cnJlbnRWaWV3ID09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgY29tcGxldGVkVGFza3Muc3BsaWNlKChlLnRhcmdldC5kYXRhc2V0LmluZGV4KSwgMSk7XG4gICAgICAgIHVwZGF0ZUNvbXBsZXRlZFByaW9yaXR5KCk7XG4gICAgICAgIHNldENvbXBsZXRlZFN0b3JhZ2UoKTtcbiAgICAgICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgdmFyIGxpc3QgPSB0YXNrU3RvcmFnZVtlLnRhcmdldC5kYXRhc2V0LmluZGV4XS5saXN0OyBcbiAgICAgICAgdmFyIGluZGV4ID0gdGFza1N0b3JhZ2VbZS50YXJnZXQuZGF0YXNldC5pbmRleF0ubGlzdFByaW9yaXR5O1xuICAgICAgICB0YXNrU3RvcmFnZS5zcGxpY2UoKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCAxKTtcbiAgICAgICAgdXBkYXRlQWxsUHJpb3JpdHkoKTtcbiAgICAgICAgdXBkYXRlTGlzdFByaW9yaXR5KGxpc3QsIGluZGV4KTtcbiAgICAgICAgc2V0VGFza1N0b3JhZ2UoKTtcbiAgICAgICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUFsbFByaW9yaXR5KCkge1xuICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2suYWxsUHJpb3JpdHkgPSAodGFza1N0b3JhZ2UuaW5kZXhPZih0YXNrKSk7XG4gICAgfSkgXG59XG5mdW5jdGlvbiB1cGRhdGVMaXN0UHJpb3JpdHkobGlzdCwgaW5kZXgpIHtcbiAgICB0YXNrU3RvcmFnZS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZih0YXNrLmxpc3QgIT0gbGlzdCkgcmV0dXJuO1xuICAgICAgICBpZih0YXNrLmxpc3RQcmlvcml0eSA8IGluZGV4KSByZXR1cm47XG4gICAgICAgIHRhc2subGlzdFByaW9yaXR5LS07XG4gICAgfSlcbn1cbmZ1bmN0aW9uIGRlbGV0ZUFsbFRhc2tGcm9tRGVhZExpc3QobGlzdCl7XG4gICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYodGFzay5saXN0ID09IGxpc3QpIHtcbiAgICAgICAgICAgIHRhc2tTdG9yYWdlLnNwbGljZSh0YXNrU3RvcmFnZS5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5mdW5jdGlvbiBwcmlvcml0eVVwIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLnByaW9yVXBcIikpIHJldHVybjtcbiAgICBpZiAoY3VycmVudFZpZXcgPT0gXCJ0b2RheVwiKSByZXR1cm47XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09IFwiY29tcGxldGVkXCIpIHJldHVybjtcbiAgICBpZihjdXJyZW50VmlldyA9PSBcImFsbFwiKXtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXggPT0gMCkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmKHRhc2suYWxsUHJpb3JpdHkgPCAoaW5kZXggLSAxKSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5hbGxQcmlvcml0eSA+IChpbmRleCkpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2suYWxsUHJpb3JpdHkgPT0gKGluZGV4IC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suYWxsUHJpb3JpdHkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgIH1lbHNlIHtcbiAgICAgICAgdmFyIGxpc3RQcmlvciA9IHRhc2tTdG9yYWdlW3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXS5saXN0UHJpb3JpdHk7XG4gICAgICAgIGlmKGxpc3RQcmlvciA9PSAxKSByZXR1cm47XG4gICAgICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmxpc3QgIT0gY3VycmVudFZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5IDwgKGxpc3RQcmlvciAtIDEpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmxpc3RQcmlvcml0eSA+IChsaXN0UHJpb3IpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmxpc3RQcmlvcml0eSA9PSAobGlzdFByaW9yIC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eSsrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmxpc3RQcmlvcml0eSA9PSBsaXN0UHJpb3IpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9XG4gICAgd2luZG93LnRhc2tTdG9yYWdlID0gdGFza1N0b3JhZ2Uuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xufVxuZnVuY3Rpb24gcHJpb3JpdHlEb3duIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLnByaW9yRG93blwiKSkgcmV0dXJuO1xuICAgIGlmIChjdXJyZW50VmlldyA9PSBcInRvZGF5XCIpIHJldHVybjtcbiAgICBpZiAoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIikgcmV0dXJuO1xuICAgIGlmKGN1cnJlbnRWaWV3ID09IFwiYWxsXCIpe1xuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5pbmRleCA9PSAodGFza1N0b3JhZ2UubGVuZ3RoIC0gMSkpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmFsbFByaW9yaXR5IDwgKGluZGV4KSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5hbGxQcmlvcml0eSA+IChpbmRleCArIDEpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmFsbFByaW9yaXR5ID09IChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suYWxsUHJpb3JpdHkgPT0gKGluZGV4ICsgMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsaXN0UHJpb3IgPSB0YXNrU3RvcmFnZVtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4KV0ubGlzdFByaW9yaXR5O1xuICAgICAgICBpZihsaXN0UHJpb3IgPT0gcmVuZGVyQXJyYXkubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmxpc3QgIT0gY3VycmVudFZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5IDwgKGxpc3RQcmlvcikpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5ID4gKGxpc3RQcmlvciArIDEpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmxpc3RQcmlvcml0eSA9PSAobGlzdFByaW9yICsgMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eS0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmxpc3RQcmlvcml0eSA9PSBsaXN0UHJpb3IpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9XG4gICAgd2luZG93LnRhc2tTdG9yYWdlID0gdGFza1N0b3JhZ2Uuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xufVxuXG5leHBvcnQge3Rhc2tGb3JtU3VibWl0LCBkZWxldGVUYXNrLCB1cGRhdGVBbGxQcmlvcml0eSwgdXBkYXRlTGlzdFByaW9yaXR5LCBzZXRUYXNrU3RvcmFnZSwgcHJpb3JpdHlVcCwgcHJpb3JpdHlEb3duLCBkZWxldGVBbGxUYXNrRnJvbURlYWRMaXN0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==