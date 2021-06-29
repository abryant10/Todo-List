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
/* harmony export */   "completedTasks": () => (/* binding */ completedTasks),
/* harmony export */   "renderArray": () => (/* binding */ renderArray)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/GitHub-Mark-Light-120px-plus.png */ "./src/styles/GitHub-Mark-Light-120px-plus.png");
/* harmony import */ var _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/modules/TaskLogic */ "./src/modules/TaskLogic.js");




// storage
let taskStorage = JSON.parse(localStorage.getItem('taskStorage')) || [];

let listStorage = JSON.parse(localStorage.getItem('listStorage')) || ["Reminders"];

let currentView =  "all";

var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

let listToDelete;

let renderArray;

// ------------task factory-----------------------------

function listFormSubmit () {
    var listText = (addListForm.querySelector('[name=addListText]')).value;
    if (listText == "") return;
    var newList = addListText.value;
    listStorage.push(newList);
    addListForm.reset();
    addListForm.style.display = "none";
    setListStorage();
    renderListsToForm();
    renderListView();
}

function setListStorage () {
    localStorage.setItem("listStorage", JSON.stringify(listStorage));
}


const listDeleteButtonClicked = (e) => {
    if(!e.target.matches(".deleteListButton")) return;
    listToDelete = e.target.dataset.list;
    listDeletePopup.style.display = "block";
    listDeleteWarning.innerHTML = `Are you sure you want to delete ${listToDelete} and all of it's tasks?`;
}
function deleteList () {
    listStorage.splice((listStorage.indexOf(listToDelete)), 1);
    setListStorage();
    renderListView();
    renderListsToForm();
    taskStorage.forEach(task => {
        if(task.list == listDeleteButtonClicked.listToDelete) {
            taskStorage.splice(taskStorage.indexOf(task), 1);
        }
    })
    ;(0,_src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.updateAllPriority)();
    (0,_src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.setTaskStorage)();
    renderTaskView(currentView);
    listDeletePopup.style.display = "none";
}
function clearDeleteList () {
    listDeletePopup.style.display = "none";
}

function listButtonClicked (e) {
    if(!e.target.matches(".listButton")) return;
    currentView = e.target.innerHTML;
    renderTaskView(currentView);
    renderListsToForm();
    listButtonHighlight(e.target);
}

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
                    renderArray = completedTasks.slice().sort((a, b) => a.allPriority - b.allPriority);
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
}

function todayButtonClicked () {
    currentView = "today";
    renderTaskView("today");
    listButtonHighlight()
}
function completedButtonClicked() {
    currentView = "completed"
    renderTaskView("completed");
    listButtonHighlight()
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
yesDeleteList.addEventListener("click", deleteList);
noDeleteList.addEventListener("click", clearDeleteList);
allButton.addEventListener('click', allButtonClicked);
todayButton.addEventListener('click', todayButtonClicked);
completedButton.addEventListener("click", completedButtonClicked);
taskViewRenderDiv.addEventListener("click", _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.deleteTask);
taskViewRenderDiv.addEventListener("click", _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.priorityUp);
taskViewRenderDiv.addEventListener("click", _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.priorityDown);
taskViewRenderDiv.addEventListener("click", expandCardInfo);
taskViewRenderDiv.addEventListener("click", _src_modules_TaskLogic__WEBPACK_IMPORTED_MODULE_2__.completeTask);
taskViewRenderDiv.addEventListener("click", taskTitleToInputField);
taskViewRenderDiv.addEventListener("submit", updateTaskTitle);
taskViewRenderDiv.addEventListener("click", taskNotesToTextArea);
taskViewRenderDiv.addEventListener("click", updateTaskNotes);
addListButton.addEventListener("click", () => {
    listFormSubmit();
    createNewListForm();
    addListText.focus();
});
addListForm.addEventListener('submit', (event) => {
    event.preventDefault();
    listFormSubmit();
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
    listStorage.forEach(listIndex => {
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
    listStorage.forEach(listIndex => {
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
/* harmony export */   "updateCompletedPriority": () => (/* binding */ updateCompletedPriority),
/* harmony export */   "setTaskStorage": () => (/* binding */ setTaskStorage),
/* harmony export */   "priorityUp": () => (/* binding */ priorityUp),
/* harmony export */   "priorityDown": () => (/* binding */ priorityDown),
/* harmony export */   "completeTask": () => (/* binding */ completeTask),
/* harmony export */   "setCompletedStorage": () => (/* binding */ setCompletedStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


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
        _index__WEBPACK_IMPORTED_MODULE_0__.completedTasks.splice((e.target.dataset.index), 1);
        updateCompletedPriority();
        setCompletedStorage();
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

function completeTask(e) {
    if(!e.target.matches(".TCCheck")) return;
    var completedTask = _index__WEBPACK_IMPORTED_MODULE_0__.taskStorage.splice((e.target.dataset.index), 1);
    const test = _index__WEBPACK_IMPORTED_MODULE_0__.completedTasks.concat(completedTask);
    console.log(test);
    _index__WEBPACK_IMPORTED_MODULE_0__.completedTasks = test;
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.completedTasks);
    setCompletedStorage();
    updateAllPriority();
    updateListPriority();
    updateCompletedPriority();
    setTaskStorage();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskView)(_index__WEBPACK_IMPORTED_MODULE_0__.currentView);
}
function setCompletedStorage() {
    localStorage.setItem("completedTasks", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.completedTasks));
}

function updateCompletedPriority() {   // this is not working
    _index__WEBPACK_IMPORTED_MODULE_0__.completedTasks.forEach(task => {
        task.allPriority = _index__WEBPACK_IMPORTED_MODULE_0__.completedTasks.indexOf(task);
    }) 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2tMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7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QVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sc0JBQXNCLHVCQUF1Qix1QkFBdUIsTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsK0JBQStCLGdEQUFnRCxtQkFBbUIsR0FBRyxRQUFRLGdCQUFnQiwyQ0FBMkMsbUJBQW1C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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxRQUFRLHNFQUFjO0FBQ3RCO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGlDQUFpQztBQUNqQztBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQSxhQUFhLHFFQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtDQUErQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxNQUFNO0FBQ25FO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDLHNDQUFzQyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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X19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udmlld3BvcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4NCwgMTUzKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbn1cXG4ubGlzdERlbGV0ZVBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gIH1cXG4gIC5saXN0RGVsZXRlQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDg0LCAxNTMpO1xcbiAgICBjb2xvcjogIzBBMTAwRDtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3gtc2hhZG93OiA2cHggMTBweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzXFxuICB9XFxuICBAa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHt0b3A6IC0zMDBweDsgb3BhY2l0eTogMH1cXG4gICAgdG8ge3RvcDogMDsgb3BhY2l0eTogMX1cXG4gIH1cXG4gLm5hdkJvZHlDb250YWluZXIge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG4ubmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm5hdkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2QnV0dG9uOmhvdmVyIC5kZWxldGVMaXN0QnV0dG9uIHsgZGlzcGxheTogYmxvY2s7fVxcbi5hZGRMaXN0QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxufVxcbi5hZGRMaXN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGRMaXN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGRMaXN0VGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5hZGRMaXN0VGV4dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5kaXZpZGVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kZWxldGVMaXN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogMTdweDtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xcbiAgICBwYWRkaW5nOiAwJTtcXG59XFxuLmRlbGV0ZUxpc3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmxpc3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5saXN0QnV0dG9uU2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxufVxcbi50YXNrVmlld2VyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn0gXFxuLnRhc2tWaWV3ZXJOYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG4udGFza1ZpZXdlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4jc29ydEJ5U2VsZWN0b3Ige1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jc29ydEJ5U2VsZWN0b3I6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4udGFza0Zvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbi50YXNrQ2FyZDpob3ZlciAuVENQcmlvckJ1dHRvbiB7ZGlzcGxheTogYmxvY2s7fVxcbi50YXNrQ2FyZDpob3ZlciAuVENEZWxldGUge2Rpc3BsYXk6IGJsb2NrO31cXG4udGFza0NhcmQ6aG92ZXIgLlRDRXhwYW5kIHtkaXNwbGF5OiBibG9jazt9XFxuLlRDVG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLlRDVG9wTGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLlRDQ2hlY2sge1xcbn1cXG4uVENUaXRsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbWluLXdpZHRoOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5UQ1RvcFJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uVENEYXRlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5UQ0RlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMzLCAxMzMsIDEzMyk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICBwYWRkaW5nOiAwJTtcXG59XFxuLlRDQm90dG9tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmV4cGFuZGVkSW5mbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uVENOb3RlcyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5UQ1ByaW9yaXR5QnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uVENCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLlRDUHJpb3JCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5UQ01pZGRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5UQ0V4cGFuZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMzLCAxMzMsIDEzMyk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcbi5UQ0xpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcbi5uZXdUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxufVxcbmZvb3RlciB7XFxuICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIGxlZnQ6IDA7XFxuICAgYm90dG9tOiAwO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nOiA1cHg7XFxufSAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25C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QWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxrQ0FBa0M7R0FDbEMsWUFBWTtHQUNaLGtCQUFrQjtHQUNsQixZQUFZO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udmlld3BvcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4NCwgMTUzKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbn1cXG4ubGlzdERlbGV0ZVBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gIH1cXG4gIC5saXN0RGVsZXRlQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDg0LCAxNTMpO1xcbiAgICBjb2xvcjogIzBBMTAwRDtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3gtc2hhZG93OiA2cHggMTBweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzXFxuICB9XFxuICBAa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHt0b3A6IC0zMDBweDsgb3BhY2l0eTogMH1cXG4gICAgdG8ge3RvcDogMDsgb3BhY2l0eTogMX1cXG4gIH1cXG4gLm5hdkJvZHlDb250YWluZXIge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG4ubmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm5hdkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2QnV0dG9uOmhvdmVyIC5kZWxldGVMaXN0QnV0dG9uIHsgZGlzcGxheTogYmxvY2s7fVxcbi5hZGRMaXN0QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxufVxcbi5hZGRMaXN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGRMaXN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGRMaXN0VGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5hZGRMaXN0VGV4dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5kaXZpZGVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kZWxldGVMaXN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogMTdweDtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xcbiAgICBwYWRkaW5nOiAwJTtcXG59XFxuLmRlbGV0ZUxpc3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmxpc3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5saXN0QnV0dG9uU2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxufVxcbi50YXNrVmlld2VyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn0gXFxuLnRhc2tWaWV3ZXJOYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG4udGFza1ZpZXdlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4jc29ydEJ5U2VsZWN0b3Ige1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jc29ydEJ5U2VsZWN0b3I6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4udGFza0Zvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbi50YXNrQ2FyZDpob3ZlciAuVENQcmlvckJ1dHRvbiB7ZGlzcGxheTogYmxvY2s7fVxcbi50YXNrQ2FyZDpob3ZlciAuVENEZWxldGUge2Rpc3BsYXk6IGJsb2NrO31cXG4udGFza0NhcmQ6aG92ZXIgLlRDRXhwYW5kIHtkaXNwbGF5OiBibG9jazt9XFxuLlRDVG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLlRDVG9wTGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLlRDQ2hlY2sge1xcbn1cXG4uVENUaXRsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbWluLXdpZHRoOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5UQ1RvcFJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uVENEYXRlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5UQ0RlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMzLCAxMzMsIDEzMyk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICBwYWRkaW5nOiAwJTtcXG59XFxuLlRDQm90dG9tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmV4cGFuZGVkSW5mbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uVENOb3RlcyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5UQ1ByaW9yaXR5QnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uVENCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLlRDUHJpb3JCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5UQ01pZGRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5UQ0V4cGFuZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMzLCAxMzMsIDEzMyk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcbi5UQ0xpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcbi5uZXdUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxufVxcbmZvb3RlciB7XFxuICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIGxlZnQ6IDA7XFxuICAgYm90dG9tOiAwO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nOiA1cHg7XFxufSAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9zdHlsZXMvR2l0SHViLU1hcmstTGlnaHQtMTIwcHgtcGx1cy5wbmcnO1xuaW1wb3J0IHt0YXNrRm9ybVN1Ym1pdCwgZGVsZXRlVGFzaywgdXBkYXRlQWxsUHJpb3JpdHksIHNldFRhc2tTdG9yYWdlLCBwcmlvcml0eURvd24sIHByaW9yaXR5VXAsIGNvbXBsZXRlVGFza30gZnJvbSAnL3NyYy9tb2R1bGVzL1Rhc2tMb2dpYyc7XG5cbi8vIHN0b3JhZ2VcbmxldCB0YXNrU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tTdG9yYWdlJykpIHx8IFtdO1xuXG5sZXQgbGlzdFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0U3RvcmFnZScpKSB8fCBbXCJSZW1pbmRlcnNcIl07XG5cbmxldCBjdXJyZW50VmlldyA9ICBcImFsbFwiO1xuXG52YXIgY29tcGxldGVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGxldGVkVGFza3NcIikpIHx8IFtdO1xuXG5sZXQgbGlzdFRvRGVsZXRlO1xuXG5sZXQgcmVuZGVyQXJyYXk7XG5cbi8vIC0tLS0tLS0tLS0tLXRhc2sgZmFjdG9yeS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxpc3RGb3JtU3VibWl0ICgpIHtcbiAgICB2YXIgbGlzdFRleHQgPSAoYWRkTGlzdEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9YWRkTGlzdFRleHRdJykpLnZhbHVlO1xuICAgIGlmIChsaXN0VGV4dCA9PSBcIlwiKSByZXR1cm47XG4gICAgdmFyIG5ld0xpc3QgPSBhZGRMaXN0VGV4dC52YWx1ZTtcbiAgICBsaXN0U3RvcmFnZS5wdXNoKG5ld0xpc3QpO1xuICAgIGFkZExpc3RGb3JtLnJlc2V0KCk7XG4gICAgYWRkTGlzdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHNldExpc3RTdG9yYWdlKCk7XG4gICAgcmVuZGVyTGlzdHNUb0Zvcm0oKTtcbiAgICByZW5kZXJMaXN0VmlldygpO1xufVxuXG5mdW5jdGlvbiBzZXRMaXN0U3RvcmFnZSAoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShsaXN0U3RvcmFnZSkpO1xufVxuXG5cbmNvbnN0IGxpc3REZWxldGVCdXR0b25DbGlja2VkID0gKGUpID0+IHtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5kZWxldGVMaXN0QnV0dG9uXCIpKSByZXR1cm47XG4gICAgbGlzdFRvRGVsZXRlID0gZS50YXJnZXQuZGF0YXNldC5saXN0O1xuICAgIGxpc3REZWxldGVQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGxpc3REZWxldGVXYXJuaW5nLmlubmVySFRNTCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7bGlzdFRvRGVsZXRlfSBhbmQgYWxsIG9mIGl0J3MgdGFza3M/YDtcbn1cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QgKCkge1xuICAgIGxpc3RTdG9yYWdlLnNwbGljZSgobGlzdFN0b3JhZ2UuaW5kZXhPZihsaXN0VG9EZWxldGUpKSwgMSk7XG4gICAgc2V0TGlzdFN0b3JhZ2UoKTtcbiAgICByZW5kZXJMaXN0VmlldygpO1xuICAgIHJlbmRlckxpc3RzVG9Gb3JtKCk7XG4gICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYodGFzay5saXN0ID09IGxpc3REZWxldGVCdXR0b25DbGlja2VkLmxpc3RUb0RlbGV0ZSkge1xuICAgICAgICAgICAgdGFza1N0b3JhZ2Uuc3BsaWNlKHRhc2tTdG9yYWdlLmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICB1cGRhdGVBbGxQcmlvcml0eSgpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xuICAgIGxpc3REZWxldGVQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5mdW5jdGlvbiBjbGVhckRlbGV0ZUxpc3QgKCkge1xuICAgIGxpc3REZWxldGVQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGxpc3RCdXR0b25DbGlja2VkIChlKSB7XG4gICAgaWYoIWUudGFyZ2V0Lm1hdGNoZXMoXCIubGlzdEJ1dHRvblwiKSkgcmV0dXJuO1xuICAgIGN1cnJlbnRWaWV3ID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbiAgICByZW5kZXJMaXN0c1RvRm9ybSgpO1xuICAgIGxpc3RCdXR0b25IaWdobGlnaHQoZS50YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBnZXRSZW5kZXJBcnJheSAobGlzdCkge1xuICAgIHZhciBzb3J0VmFsID0gc29ydEJ5U2VsZWN0b3IudmFsdWU7XG4gICAgbGV0IGZpbHRlcmVkQXJyYXk7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgbGV0IHJlbmRlckFycmF5O1xuICAgIHN3aXRjaCAobGlzdCkge1xuICAgICAgICBjYXNlIChcImFsbFwiKTogXG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRWYWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBcnJheSA9IHRhc2tTdG9yYWdlLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJkdWUtZGF0ZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyYXkgPSB0YXNrU3RvcmFnZS5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkxID0gbmV3IERhdGUoYS5kdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkyID0gbmV3IERhdGUoYi5kdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5MSA8IGtleTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleTEgPT0ga2V5Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFwidG9kYXlcIik6XG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRWYWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEFycmF5ID0gdGFza1N0b3JhZ2UuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWVEYXRlID09IHRvZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyYXkgPSBmaWx0ZXJlZEFycmF5LnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIChcImR1ZS1kYXRlXCIpOlxuICAgICAgICAgICAgICAgICAgICAvL2NvZGVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoXCJjb21wbGV0ZWRcIik6XG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRWYWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBcnJheSA9IGNvbXBsZXRlZFRhc2tzLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIChcImR1ZS1kYXRlXCIpOlxuICAgICAgICAgICAgICAgICAgICAvL2NvZGVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgIHN3aXRjaCAoc29ydFZhbCkge1xuICAgICAgICAgICAgY2FzZSAoXCJwcmlvcml0eVwiKTpcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFycmF5ID0gdGFza1N0b3JhZ2UuZmlsdGVyKHRhc2sgPT4gdGFzay5saXN0ID09IGxpc3QpO1xuICAgICAgICAgICAgICAgIHJlbmRlckFycmF5ID0gZmlsdGVyZWRBcnJheS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEubGlzdFByaW9yaXR5IC0gYi5saXN0UHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoXCJkdWUtZGF0ZVwiKTpcbiAgICAgICAgICAgICAgICAvL2NvZGVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyQXJyYXk7XG59XG5mdW5jdGlvbiBhbGxCdXR0b25DbGlja2VkICgpIHtcbiAgICBjdXJyZW50VmlldyA9IFwiYWxsXCJcbiAgICByZW5kZXJUYXNrVmlldyhcImFsbFwiKTtcbiAgICBsaXN0QnV0dG9uSGlnaGxpZ2h0KCk7XG59XG5cbmZ1bmN0aW9uIHRvZGF5QnV0dG9uQ2xpY2tlZCAoKSB7XG4gICAgY3VycmVudFZpZXcgPSBcInRvZGF5XCI7XG4gICAgcmVuZGVyVGFza1ZpZXcoXCJ0b2RheVwiKTtcbiAgICBsaXN0QnV0dG9uSGlnaGxpZ2h0KClcbn1cbmZ1bmN0aW9uIGNvbXBsZXRlZEJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgY3VycmVudFZpZXcgPSBcImNvbXBsZXRlZFwiXG4gICAgcmVuZGVyVGFza1ZpZXcoXCJjb21wbGV0ZWRcIik7XG4gICAgbGlzdEJ1dHRvbkhpZ2hsaWdodCgpXG59XG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLSBkb20gbGlzdGVuZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTGlzdEJ1dHRvblwiKTtcbmNvbnN0IGFkZExpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRMaXN0Rm9ybVwiKTtcbmNvbnN0IGFkZExpc3RUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRMaXN0VGV4dFwiKTtcbmNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsQnV0dG9uXCIpXG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlCdXR0b25cIik7XG5jb25zdCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZEJ1dHRvblwiKTtcbmNvbnN0IGxpc3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3ROYXZcIik7XG5jb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrQnV0dG9uXCIpO1xuY29uc3Qgc29ydEJ5U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVNlbGVjdG9yXCIpO1xuY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtQ29udGFpbmVyXCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpO1xuY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUZXh0XCIpO1xuY29uc3QgbGlzdFNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RTZWxlY3RvcicpO1xuY29uc3QgdGFza1ZpZXdSZW5kZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdSZW5kZXJEaXYnKTtcbmNvbnN0IGxpc3REZWxldGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdERlbGV0ZVBvcHVwXCIpO1xuY29uc3QgbGlzdERlbGV0ZVdhcm5pbmcgPSBsaXN0RGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5saXN0RGVsZXRlV2FybmluZ1wiKTtcbmNvbnN0IHllc0RlbGV0ZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllc0RlbGV0ZUxpc3RcIik7XG5jb25zdCBub0RlbGV0ZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vRGVsZXRlTGlzdFwiKTtcbmNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlckxpbmtcIik7XG5cblxubGlzdE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdEJ1dHRvbkNsaWNrZWQpO1xubGlzdE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdERlbGV0ZUJ1dHRvbkNsaWNrZWQpO1xueWVzRGVsZXRlTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlTGlzdCk7XG5ub0RlbGV0ZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRGVsZXRlTGlzdCk7XG5hbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGxCdXR0b25DbGlja2VkKTtcbnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9kYXlCdXR0b25DbGlja2VkKTtcbmNvbXBsZXRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29tcGxldGVkQnV0dG9uQ2xpY2tlZCk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzayk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpb3JpdHlVcCk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpb3JpdHlEb3duKTtcbnRhc2tWaWV3UmVuZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBhbmRDYXJkSW5mbyk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29tcGxldGVUYXNrKTtcbnRhc2tWaWV3UmVuZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrVGl0bGVUb0lucHV0RmllbGQpO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB1cGRhdGVUYXNrVGl0bGUpO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tOb3Rlc1RvVGV4dEFyZWEpO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRhc2tOb3Rlcyk7XG5hZGRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGlzdEZvcm1TdWJtaXQoKTtcbiAgICBjcmVhdGVOZXdMaXN0Rm9ybSgpO1xuICAgIGFkZExpc3RUZXh0LmZvY3VzKCk7XG59KTtcbmFkZExpc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGlzdEZvcm1TdWJtaXQoKTtcbn0pO1xuXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1TdWJtaXQoKTtcbiAgICBjcmVhdGVUYXNrRm9ybSgpO1xufSk7XG5zb3J0QnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtyZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7fSk7XG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tGb3JtU3VibWl0KCk7XG59KTsgXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgcmVzZXRUYXNrRm9ybSgpO1xuICAgIHJlc2V0TGlzdEZvcm0oKTtcbiAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG4gIH1cbn0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgIGlmICh0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIiAmJiBlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRhc2tGb3JtU3VibWl0KCk7XG4gICAgfVxufSlcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIHRhc2tmb3JtLCBcblxuLy8gd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7IC8vdGhpcyBsb2dpYyBuZWVkcyB3b3JrXG4vLyAgICAgaWYoZS50YXJnZXQubWF0Y2hlcyhcIlwiKSlcbi8vIH1cblxuXG5cbi8vLS0tLS0tLS0tLS0tLS0tIGRvbSBlZGl0b3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IEljb247XG5teUljb24uYWx0PVwiZ2l0IGh1YiBtYXJrXCI7XG5teUljb24uaGVpZ2h0ID0gXCIyMFwiO1xubXlJY29uLndpZHRoID0gXCIyMFwiO1xuZm9vdGVyTGluay5hcHBlbmRDaGlsZChteUljb24pO1xuLy9oaWdobGlnaHQgbGlzdCBidXR0b25zIHdoZW4gY2xpY2tlZFxuZnVuY3Rpb24gbGlzdEJ1dHRvbkhpZ2hsaWdodCh0YXJnZXQpIHtcbiAgICB2YXIgYWxsTGlzdEJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0QnV0dG9uXCIpXTtcbiAgICBhbGxMaXN0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0QnV0dG9uU2VsZWN0ZWRcIik7fSk7XG4gICAgc3dpdGNoIChjdXJyZW50Vmlldykge1xuICAgICAgICBjYXNlIChcImFsbFwiKTogXG4gICAgICAgICAgICBhbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3RCdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcInRvZGF5XCIpOlxuICAgICAgICAgICAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3RCdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcImNvbXBsZXRlZFwiKTpcbiAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdEJ1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImxpc3RCdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGV4cGFuZENhcmRJbmZvIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDRXhwYW5kXCIpKSByZXR1cm47XG4gICAgdmFyIGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmZvO1xuICAgIHZhciB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgdmFyIHRhcmdldEJvdHRvbSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1leHBhbmQ9XCIke2luZGV4fVwiXWApXG4gICAgaWYodGFyZ2V0Qm90dG9tLmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkSW5mb1wiKSkge1xuICAgICAgICB0YXJnZXRCb3R0b20uY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkSW5mb1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRCb3R0b20uY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkSW5mb1wiKTtcbiAgICB9XG59ICAgIFxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSAoKSB7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICByZW5kZXJMaXN0c1RvRm9ybSgpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICAgIFxuICAgIHRhc2tUZXh0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RGb3JtICgpIHtcbiAgICBhZGRMaXN0Rm9ybS5yZXNldCgpO1xuICAgIGFkZExpc3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgYWRkTGlzdFRleHQuZm9jdXMoKTtcbn1cbmZ1bmN0aW9uIHJlc2V0VGFza0Zvcm0gKCkge1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuZnVuY3Rpb24gcmVzZXRMaXN0Rm9ybSAoKSB7XG4gICAgYWRkTGlzdEZvcm0ucmVzZXQoKTtcbiAgICBhZGRMaXN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5mdW5jdGlvbiByZW5kZXJMaXN0c1RvRm9ybSAoKSB7XG4gICAgbGlzdFNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGlzdFN0b3JhZ2UuZm9yRWFjaChsaXN0SW5kZXggPT4ge1xuICAgICAgICBpZiAobGlzdEluZGV4ID09IGN1cnJlbnRWaWV3KXtcbiAgICAgICAgICAgIHZhciBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICB2YXIgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi5pbm5lckhUTUwgPSBgJHtsaXN0SW5kZXh9YDtcbiAgICAgICAgICAgIGxpc3RPcHRpb24uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XG4gICAgICAgICAgICBsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHZhciBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLnZhbHVlID0gYCR7bGlzdEluZGV4fWA7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLmlubmVySFRNTCA9IGAke2xpc3RJbmRleH1gO1xuICAgICAgICAgICAgbGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICAgICAgICB9XG4gICAgfSlcbn1cbmZ1bmN0aW9uIHJlbmRlckxpc3RWaWV3ICgpIHtcbiAgICBsaXN0TmF2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGlzdFN0b3JhZ2UuZm9yRWFjaChsaXN0SW5kZXggPT4ge1xuICAgICAgICB2YXIgbGlzdEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxpc3RCdXR0b25EaXYuY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcbiAgICAgICAgdmFyIGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0QnV0dG9uXCIpO1xuICAgICAgICBsaXN0QnV0dG9uLmlubmVySFRNTCA9IGAke2xpc3RJbmRleH1gO1xuICAgICAgICB2YXIgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24uaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZUxpc3RCdXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24uZGF0YXNldC5saXN0ID0gYCR7bGlzdEluZGV4fWA7XG4gICAgICAgIGxpc3ROYXYuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbkRpdik7XG4gICAgICAgIGxpc3RCdXR0b25EaXYuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XG4gICAgICAgIGxpc3RCdXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ1dHRvbik7XG4gICAgfSlcbn1cbmZ1bmN0aW9uIGNsZWFyVGFza1ZpZXcgKCkge1xuICAgIHdoaWxlKHRhc2tWaWV3UmVuZGVyRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza1ZpZXdSZW5kZXJEaXYucmVtb3ZlQ2hpbGQodGFza1ZpZXdSZW5kZXJEaXYubGFzdENoaWxkKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0YXNrVGl0bGVUb0lucHV0RmllbGQoZSkge1xuICAgIGlmKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDVGl0bGVcIikpIHJldHVybjtcbiAgICBpZihjdXJyZW50VmlldyA9PSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBsZXQgcGFyZW50ID0gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIlRDY2hhbmdlVGl0bGVGb3JtXCIpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID1cInRleHRcIjtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiVENjaGFuZ2VUaXRsZUlucHV0XCIpO1xuICAgIGlucHV0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBpbnB1dC52YWx1ZSA9IHRhc2tTdG9yYWdlW2luZGV4XS50aXRsZTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5mdW5jdGlvbiB1cGRhdGVUYXNrVGl0bGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5jaGFuZ2VUaXRsZUZvcm1cIikpIHJldHVybjtcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgdGFza1N0b3JhZ2VbaW5wdXQuZGF0YXNldC5pbmRleF0udGl0bGUgPSBpbnB1dC52YWx1ZTtcbiAgICBzZXRUYXNrU3RvcmFnZSgpO1xuICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbn1cbmZ1bmN0aW9uIHRhc2tOb3Rlc1RvVGV4dEFyZWEoZSkge1xuICAgIGlmKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDTm90ZXNcIikpIHJldHVybjtcbiAgICBpZihjdXJyZW50VmlldyA9PSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBsZXQgcGFyZW50ID0gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIlRDY2hhbmdlTm90ZXNGb3JtXCIpO1xuICAgIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURVhUQVJFQVwiKTtcbiAgICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiLlRDY2hhbmdlTm90ZXNUZXh0QXJlYVwiKTtcbiAgICB0ZXh0QXJlYS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgdGV4dEFyZWEudmFsdWUgPSB0YXNrU3RvcmFnZVtpbmRleF0ubm90ZXM7XG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJUQ05vdGVzQnV0dG9uXCIpO1xuICAgIHN1Ym1pdC5pbm5lckhUTUwgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG59XG5mdW5jdGlvbiB1cGRhdGVUYXNrTm90ZXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5UQ05vdGVzQnV0dG9uXCIpKSByZXR1cm47XG4gICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRleHRBcmVhID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0YXNrU3RvcmFnZVt0ZXh0QXJlYS5kYXRhc2V0LmluZGV4XS5ub3RlcyA9IHRleHRBcmVhLnZhbHVlO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrVmlldyAobGlzdCkge1xuICAgIHJlbmRlckFycmF5ID0gZ2V0UmVuZGVyQXJyYXkobGlzdCk7IFxuICAgIGNsZWFyVGFza1ZpZXcoKTtcbiAgICByZW5kZXJBcnJheS5mb3JFYWNoKHRhc2sgPT4geyBcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIlRDQ2hlY2tcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPmBcbiAgICAgICAgbGV0IHByaW9yaXR5QnV0dG9ucyA9IFxuICAgICAgICAgICAgYDxidXR0b24gY2xhc3M9XCJUQ0J1dHRvbiBUQ1ByaW9yQnV0dG9uIHByaW9yVXBcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPiYjOTY1MDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlRDQnV0dG9uIFRDUHJpb3JCdXR0b24gcHJpb3JEb3duXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj4mIzk2NjA8L2J1dHRvbj5gO1xuICAgICAgICBsZXQgbm90ZXMgPSBgJm5ic3A7YDtcbiAgICAgICAgaWYodGFzay5ub3RlcyAhPSBcIlwiKSB7bm90ZXMgPSB0YXNrLm5vdGVzfTtcbiAgICAgICAgaWYoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIil7Y2hlY2tib3ggPSBcIlwifTtcbiAgICAgICAgaWYoc29ydEJ5U2VsZWN0b3IudmFsdWUgIT0gXCJwcmlvcml0eVwiKSB7cHJpb3JpdHlCdXR0b25zID0gXCJcIn07XG4gICAgICAgIHZhciBuZXdUYXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdUYXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuICAgICAgICBuZXdUYXNrQ2FyZC5pbm5lckhUTUwgPSAgICAgXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIlRDVG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDVG9wTGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAke2NoZWNrYm94fVxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlRDVGl0bGVcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDVG9wUmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJUQ0RhdGVcIiB2YWx1ZT1cIiR7dGFzay5kdWVEYXRlfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVENQcmlvcml0eUJ1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwcmlvcml0eUJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiVENCdXR0b24gVENEZWxldGVcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPlg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDTWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlRDQnV0dG9uIFRDRXhwYW5kXCIgZGF0YS1pbmZvPVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPmluZm88L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDQm90dG9tXCIgZGF0YS1leHBhbmQ9XCIke3Rhc2suYWxsUHJpb3JpdHl9XCI+XG4gICAgICAgICAgICAgICAgPHA+Tm90ZXM6PC9wPlxuICAgICAgICAgICAgICAgIDxkaXY+PHAgY2xhc3M9XCJUQ05vdGVzXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj4ke25vdGVzfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5MaXN0OjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlRDTGlzdFwiPiR7dGFzay5saXN0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgdGFza1ZpZXdSZW5kZXJEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0NhcmQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQge3Rhc2tGb3JtLCB0YXNrU3RvcmFnZSwgcmVuZGVyVGFza1ZpZXcsIHRhc2tGb3JtQ29udGFpbmVyLCBjdXJyZW50VmlldywgY29tcGxldGVkVGFza3MsIHJlbmRlckFycmF5fTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG5yZW5kZXJMaXN0c1RvRm9ybSgpO1xucmVuZGVyTGlzdFZpZXcoKTtcbnJlbmRlclRhc2tWaWV3KFwiYWxsXCIpO1xuXG4iLCJpbXBvcnQgeyB0YXNrRm9ybSwgdGFza1N0b3JhZ2UsIHJlbmRlclRhc2tWaWV3LCB0YXNrRm9ybUNvbnRhaW5lciwgY3VycmVudFZpZXcsIGNvbXBsZXRlZFRhc2tzLCByZW5kZXJBcnJheX0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNvbnN0IFRhc2sgPSAodGl0bGUsIGxpc3QsIG5vdGVzLCBkdWVEYXRlLCBsaXN0UHJpb3JpdHksIGFsbFByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSwgXG4gICAgICAgIGxpc3QsIFxuICAgICAgICBub3RlcyxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgbGlzdFByaW9yaXR5LFxuICAgICAgICBhbGxQcmlvcml0eSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRhc2tGb3JtU3VibWl0ICgpIHtcbiAgICB2YXIgdGFza1RleHQgPSAodGFza0Zvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9dGFza1RleHRdJykpLnZhbHVlO1xuICAgIGlmICh0YXNrVGV4dCA9PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSAodGFza0Zvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9dGFza0R1ZURhdGVdJykpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tOb3RlcyA9ICh0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT10YXNrTm90ZXNdJykpLnZhbHVlIHx8IFwiICAgXCI7XG4gICAgY29uc3QgdGFza0xpc3QgPSAodGFza0Zvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9bGlzdFNlbGVjdG9yXScpKS52YWx1ZTtcbiAgICB2YXIgcHJpb3JpdHkgPSAoY2hlY2tMaXN0UHJpb3JpdHkodGFza0xpc3QpKTtcbiAgICB2YXIgdGFzayA9IFRhc2sodGFza1RleHQsIHRhc2tMaXN0LCB0YXNrTm90ZXMsIHRhc2tEdWVEYXRlLCBwcmlvcml0eSwgKHRhc2tTdG9yYWdlLmxlbmd0aCkpO1xuICAgIHRhc2tTdG9yYWdlLnB1c2godGFzayk7XG4gICAgc2V0VGFza1N0b3JhZ2UoKTtcbiAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7ICAgIFxuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xufVxuZnVuY3Rpb24gc2V0VGFza1N0b3JhZ2UgKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza1N0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkodGFza1N0b3JhZ2UpKTtcbn1cbmZ1bmN0aW9uIGNoZWNrTGlzdFByaW9yaXR5IChsaXN0KSB7XG4gICAgdmFyIGxpc3RGaWx0ZXIgPSB0YXNrU3RvcmFnZS5maWx0ZXIodGFzayA9PiB0YXNrLmxpc3QgPT0gbGlzdCk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSAobGlzdEZpbHRlci5sZW5ndGggKzEpO1xuICAgIHJldHVybiBwcmlvcml0eTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sgKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuVENEZWxldGVcIikpIHJldHVybjtcbiAgICBpZihjdXJyZW50VmlldyA9PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLnNwbGljZSgoZS50YXJnZXQuZGF0YXNldC5pbmRleCksIDEpO1xuICAgICAgICB1cGRhdGVDb21wbGV0ZWRQcmlvcml0eSgpO1xuICAgICAgICBzZXRDb21wbGV0ZWRTdG9yYWdlKCk7XG4gICAgICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHZhciBsaXN0ID0gdGFza1N0b3JhZ2VbZS50YXJnZXQuZGF0YXNldC5pbmRleF0ubGlzdDsgXG4gICAgICAgIHZhciBpbmRleCA9IHRhc2tTdG9yYWdlW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmxpc3RQcmlvcml0eTtcbiAgICAgICAgdGFza1N0b3JhZ2Uuc3BsaWNlKChlLnRhcmdldC5kYXRhc2V0LmluZGV4KSwgMSk7XG4gICAgICAgIHVwZGF0ZUFsbFByaW9yaXR5KCk7XG4gICAgICAgIHVwZGF0ZUxpc3RQcmlvcml0eShsaXN0LCBpbmRleCk7XG4gICAgICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVBbGxQcmlvcml0eSgpIHtcbiAgICB0YXNrU3RvcmFnZS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLmFsbFByaW9yaXR5ID0gKHRhc2tTdG9yYWdlLmluZGV4T2YodGFzaykpO1xuICAgIH0pIFxufVxuZnVuY3Rpb24gdXBkYXRlTGlzdFByaW9yaXR5KGxpc3QsIGluZGV4KSB7XG4gICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYodGFzay5saXN0ICE9IGxpc3QpIHJldHVybjtcbiAgICAgICAgaWYodGFzay5saXN0UHJpb3JpdHkgPCBpbmRleCkgcmV0dXJuO1xuICAgICAgICB0YXNrLmxpc3RQcmlvcml0eS0tO1xuICAgIH0pXG59XG5mdW5jdGlvbiBwcmlvcml0eVVwIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLnByaW9yVXBcIikpIHJldHVybjtcbiAgICBpZiAoY3VycmVudFZpZXcgPT0gXCJ0b2RheVwiKSByZXR1cm47XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09IFwiY29tcGxldGVkXCIpIHJldHVybjtcbiAgICBpZihjdXJyZW50VmlldyA9PSBcImFsbFwiKXtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXggPT0gMCkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmKHRhc2suYWxsUHJpb3JpdHkgPCAoaW5kZXggLSAxKSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5hbGxQcmlvcml0eSA+IChpbmRleCkpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2suYWxsUHJpb3JpdHkgPT0gKGluZGV4IC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suYWxsUHJpb3JpdHkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgIH1lbHNlIHtcbiAgICAgICAgdmFyIGxpc3RQcmlvciA9IHRhc2tTdG9yYWdlW3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXS5saXN0UHJpb3JpdHk7XG4gICAgICAgIGlmKGxpc3RQcmlvciA9PSAxKSByZXR1cm47XG4gICAgICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmxpc3QgIT0gY3VycmVudFZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5IDwgKGxpc3RQcmlvciAtIDEpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmxpc3RQcmlvcml0eSA+IChsaXN0UHJpb3IpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmxpc3RQcmlvcml0eSA9PSAobGlzdFByaW9yIC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eSsrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmxpc3RQcmlvcml0eSA9PSBsaXN0UHJpb3IpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9XG4gICAgd2luZG93LnRhc2tTdG9yYWdlID0gdGFza1N0b3JhZ2Uuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xufVxuZnVuY3Rpb24gcHJpb3JpdHlEb3duIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLnByaW9yRG93blwiKSkgcmV0dXJuO1xuICAgIGlmIChjdXJyZW50VmlldyA9PSBcInRvZGF5XCIpIHJldHVybjtcbiAgICBpZiAoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIikgcmV0dXJuO1xuICAgIGlmKGN1cnJlbnRWaWV3ID09IFwiYWxsXCIpe1xuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5pbmRleCA9PSAodGFza1N0b3JhZ2UubGVuZ3RoIC0gMSkpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmFsbFByaW9yaXR5IDwgKGluZGV4KSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5hbGxQcmlvcml0eSA+IChpbmRleCArIDEpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmFsbFByaW9yaXR5ID09IChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suYWxsUHJpb3JpdHkgPT0gKGluZGV4ICsgMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmFsbFByaW9yaXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsaXN0UHJpb3IgPSB0YXNrU3RvcmFnZVtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4KV0ubGlzdFByaW9yaXR5O1xuICAgICAgICBpZihsaXN0UHJpb3IgPT0gcmVuZGVyQXJyYXkubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmxpc3QgIT0gY3VycmVudFZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5IDwgKGxpc3RQcmlvcikpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5ID4gKGxpc3RQcmlvciArIDEpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmxpc3RQcmlvcml0eSA9PSAobGlzdFByaW9yICsgMSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eS0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmxpc3RQcmlvcml0eSA9PSBsaXN0UHJpb3IpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmxpc3RQcmlvcml0eSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9XG4gICAgd2luZG93LnRhc2tTdG9yYWdlID0gdGFza1N0b3JhZ2Uuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZSkge1xuICAgIGlmKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDQ2hlY2tcIikpIHJldHVybjtcbiAgICB2YXIgY29tcGxldGVkVGFzayA9IHRhc2tTdG9yYWdlLnNwbGljZSgoZS50YXJnZXQuZGF0YXNldC5pbmRleCksIDEpO1xuICAgIGNvbnN0IHRlc3QgPSBjb21wbGV0ZWRUYXNrcy5jb25jYXQoY29tcGxldGVkVGFzayk7XG4gICAgY29uc29sZS5sb2codGVzdCk7XG4gICAgY29tcGxldGVkVGFza3MgPSB0ZXN0O1xuICAgIGNvbnNvbGUubG9nKGNvbXBsZXRlZFRhc2tzKTtcbiAgICBzZXRDb21wbGV0ZWRTdG9yYWdlKCk7XG4gICAgdXBkYXRlQWxsUHJpb3JpdHkoKTtcbiAgICB1cGRhdGVMaXN0UHJpb3JpdHkoKTtcbiAgICB1cGRhdGVDb21wbGV0ZWRQcmlvcml0eSgpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xufVxuZnVuY3Rpb24gc2V0Q29tcGxldGVkU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbXBsZXRlZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZFRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlZFByaW9yaXR5KCkgeyAgIC8vIHRoaXMgaXMgbm90IHdvcmtpbmdcbiAgICBjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLmFsbFByaW9yaXR5ID0gY29tcGxldGVkVGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICB9KSBcbn1cbmV4cG9ydCB7dGFza0Zvcm1TdWJtaXQsIGRlbGV0ZVRhc2ssIHVwZGF0ZUFsbFByaW9yaXR5LCB1cGRhdGVMaXN0UHJpb3JpdHksIHVwZGF0ZUNvbXBsZXRlZFByaW9yaXR5LCBzZXRUYXNrU3RvcmFnZSwgcHJpb3JpdHlVcCwgcHJpb3JpdHlEb3duLCBjb21wbGV0ZVRhc2ssIHNldENvbXBsZXRlZFN0b3JhZ2V9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9