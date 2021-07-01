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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    font-family: Arial, Helvetica, sans-serif;\n    height: 100%;\n}\nbody {\n    margin: 0;\n    background-color: rgb(255, 255, 255);\n    height: 100%;\n}\n\n.viewport {\n    display: flex;\n    flex-flow: column;\n    margin: 0%;\n    height: 100%;\n    width: 100%;\n}\nheader {\n    padding: 15px;\n    background-color: rgb(58, 84, 153);\n    color: white;\n    font-size: 60px;\n}\n.listDeletePopup {\n    display: none; \n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n  }\n  .listDeleteContainer {\n    position: relative;\n    background-color: rgb(58, 84, 153);\n    color: #0A100D;\n    max-width: 500px;\n    margin: 15% auto;\n    padding: 0;\n    border: 1px solid rgb(255, 255, 255);\n    border-radius: 10px;\n    width: 60%;\n    box-shadow: 6px 10px 20px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    animation-name: animatetop;\n    animation-duration: 0.4s\n  }\n  @keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n  }\n  .listDeleteWarning {\n      padding: 15px;\n      font-size: 20px;\n      text-align: center;\n      color: white;\n  }\n  .listDelWarnButtonContainer {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      padding: 20px;\n  }\n\n .navBodyContainer {\n    flex-grow: 1;\n    display: flex;\n    flex-flow: row;\n}\n.navContainer {\n    background-color: rgb(221, 221, 221);\n    min-width: 250px;\n}\n.nav {\n    padding: 20px;\n    padding-left: 30px;\n    display: flex;\n    flex-direction: column;\n}\n\n.navButton {\n    display: flex;\n    flex-direction: row;\n    justify-content:space-between;\n    align-items: center;\n    margin: 10px;\n    border-style: none;\n    text-align: start;\n    background-color: transparent;\n    font-size: large;\n    border-radius: 5px;\n}\n.navButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.navButton:hover .deleteListButton { display: block;}\n.addListButton {\n    position: relative;\n    float: right;\n    margin-right: 10px;\n    border-style: none;\n    border-radius: 6px;\n    width: 25px;\n    height: 25px;\n    font-size: large;\n    padding-top: 2px;\n}\n.addListButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.addListForm {\n    display: none;\n}\n.addListText {\n    margin-top: 10px;\n    margin-left: 40px;\n    width: 130px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n}\n.addListText:focus {\n    outline: none;\n}\n.divider {\n    width: 90%;\n    margin-left: 4%;\n    border-top: 2px solid rgb(177, 177, 177);\n    text-align: center;\n    padding-top: 10px;\n    font-size: 30px;\n    font-weight: 600;\n}\n.deleteListButton {\n    display: none;\n    text-align: center;\n    justify-content: center;\n    cursor: pointer;\n    border-style: none;\n    border-radius: 6px;\n    min-width: 17px;\n    height: 17px;\n    font-size: 10px;\n    margin-left: 10px;\n    margin-right: 5px;\n    margin-bottom: 1px;\n    padding: 2px;\n}\n.deleteListButton:hover {\n    background: white;\n}\n.listButton {\n    display: flex;\n    cursor: pointer;\n    flex-grow: 1;\n    max-width: 200px;\n    background: none;\n    text-align: start;\n    border: none;\n    font-size: 20px;\n}\n.listButtonSelected {\n    background-color: rgb(182, 182, 182);\n}\n.taskViewerContainer {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    margin-bottom: 50px;\n} \n.taskViewerNav {\n    display: flex;\n    padding: 20px;\n\n}\n.taskViewer {\n    display: flex;\n    flex-direction: column;\n    margin-left: 40px;\n}\n#sortBySelector {\n    margin-left: 10px;\n    border-radius: 5px;\n}\n#sortBySelector:focus {\n    outline: none;\n}\n.taskFormContainer {\n    display: none;\n    min-width: 100px;\n    max-width: 600px;\n    margin: 15px;\n    margin-right: 130px;\n    background-color: rgb(241, 241, 241);\n    border-radius: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n.taskForm {\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n}\n.formTopRow {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n#taskText {\n    position: relative;\n    width: 200px;\n    min-width: 50px;\n    margin-right: 10px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n#taskDueDate {\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n    font-family: Arial, Helvetica, sans-serif; \n    width: auto;\n}\n#taskNotes {\n    margin-bottom: 10px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n#listSelector {\n    width: fit-content;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n.taskCard {\n    display: flex;\n    flex-direction: column;\n    min-width: 100px;\n    max-width: 600px;\n    margin: 15px;\n    margin-right: 130px;\n    background-color: rgb(241, 241, 241);\n    border-radius: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n.taskCard:hover .TCPriorButton {display: block;}\n.taskCard:hover .TCDelete {display: block;}\n.taskCard:hover .TCExpand {display: block;}\n.TCTop {\n    display: flex;\n    flex-direction: row;\n}\n.TCTopLeft {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n}\n.TCCheck {\n}\n.TCTitle {\n    border: none;\n    margin-left: 5px;\n    font-size: 30px;\n    background: transparent;\n    min-width: none;\n    cursor: pointer;\n}\n.TCTopRight {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: flex-end;\n}\n.TCDate {\n    border: none;\n    font-family: Arial, Helvetica, sans-serif;\n    background: transparent;\n}\n.TCDelete {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCBottom {\n    display: none;\n}\n.expandedInfo {\n    display: block;\n}\n.TCNotes {\n    border: none;\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n    cursor: pointer;\n}\n.TCNotesButton {\n    align-items: center;\n    margin: 10px;\n    border-style: none;\n    text-align: center;\n    background-color: transparent;\n    font-size: large;\n    border-radius: 5px;\n}\n.TCchangeNotesTextArea {\n    margin-bottom: 10px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n.TCNotesButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.TCPriorityButtonContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.TCButton:hover {\n    background-color: white;\n}\n.TCPriorButton {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(90, 90, 90);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCMiddle {\n    display: flex;\n    justify-content: flex-end;\n}\n.TCExpand {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    padding: 2px;\n}\n.TCList {\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n}\n.newTaskButton {\n    margin-bottom: 200px;\n}\n.newTaskButtonContainer {\n    height: 50px;\n    margin-left: 15px;\n}\nfooter {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   background-color: rgb(58, 84, 153);\n   color: white;\n   text-align: center;\n   padding: 5px;\n}  \n.listDelWarnButton {\n    color: white;\n    font-size: 20px;\n    justify-content: center;\n    width: 65px;\n    background-color: rgb(116, 138, 199);\n    padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    font-family: Arial, Helvetica, sans-serif;\n    height: 100%;\n}\nbody {\n    margin: 0;\n    background-color: rgb(255, 255, 255);\n    height: 100%;\n}\n\n.viewport {\n    display: flex;\n    flex-flow: column;\n    margin: 0%;\n    height: 100%;\n    width: 100%;\n}\nheader {\n    padding: 15px;\n    background-color: rgb(58, 84, 153);\n    color: white;\n    font-size: 60px;\n}\n.listDeletePopup {\n    display: none; \n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n  }\n  .listDeleteContainer {\n    position: relative;\n    background-color: rgb(58, 84, 153);\n    color: #0A100D;\n    max-width: 500px;\n    margin: 15% auto;\n    padding: 0;\n    border: 1px solid rgb(255, 255, 255);\n    border-radius: 10px;\n    width: 60%;\n    box-shadow: 6px 10px 20px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    animation-name: animatetop;\n    animation-duration: 0.4s\n  }\n  @keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n  }\n  .listDeleteWarning {\n      padding: 15px;\n      font-size: 20px;\n      text-align: center;\n      color: white;\n  }\n  .listDelWarnButtonContainer {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      padding: 20px;\n  }\n\n .navBodyContainer {\n    flex-grow: 1;\n    display: flex;\n    flex-flow: row;\n}\n.navContainer {\n    background-color: rgb(221, 221, 221);\n    min-width: 250px;\n}\n.nav {\n    padding: 20px;\n    padding-left: 30px;\n    display: flex;\n    flex-direction: column;\n}\n\n.navButton {\n    display: flex;\n    flex-direction: row;\n    justify-content:space-between;\n    align-items: center;\n    margin: 10px;\n    border-style: none;\n    text-align: start;\n    background-color: transparent;\n    font-size: large;\n    border-radius: 5px;\n}\n.navButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.navButton:hover .deleteListButton { display: block;}\n.addListButton {\n    position: relative;\n    float: right;\n    margin-right: 10px;\n    border-style: none;\n    border-radius: 6px;\n    width: 25px;\n    height: 25px;\n    font-size: large;\n    padding-top: 2px;\n}\n.addListButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.addListForm {\n    display: none;\n}\n.addListText {\n    margin-top: 10px;\n    margin-left: 40px;\n    width: 130px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n}\n.addListText:focus {\n    outline: none;\n}\n.divider {\n    width: 90%;\n    margin-left: 4%;\n    border-top: 2px solid rgb(177, 177, 177);\n    text-align: center;\n    padding-top: 10px;\n    font-size: 30px;\n    font-weight: 600;\n}\n.deleteListButton {\n    display: none;\n    text-align: center;\n    justify-content: center;\n    cursor: pointer;\n    border-style: none;\n    border-radius: 6px;\n    min-width: 17px;\n    height: 17px;\n    font-size: 10px;\n    margin-left: 10px;\n    margin-right: 5px;\n    margin-bottom: 1px;\n    padding: 2px;\n}\n.deleteListButton:hover {\n    background: white;\n}\n.listButton {\n    display: flex;\n    cursor: pointer;\n    flex-grow: 1;\n    max-width: 200px;\n    background: none;\n    text-align: start;\n    border: none;\n    font-size: 20px;\n}\n.listButtonSelected {\n    background-color: rgb(182, 182, 182);\n}\n.taskViewerContainer {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    margin-bottom: 50px;\n} \n.taskViewerNav {\n    display: flex;\n    padding: 20px;\n\n}\n.taskViewer {\n    display: flex;\n    flex-direction: column;\n    margin-left: 40px;\n}\n#sortBySelector {\n    margin-left: 10px;\n    border-radius: 5px;\n}\n#sortBySelector:focus {\n    outline: none;\n}\n.taskFormContainer {\n    display: none;\n    min-width: 100px;\n    max-width: 600px;\n    margin: 15px;\n    margin-right: 130px;\n    background-color: rgb(241, 241, 241);\n    border-radius: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n.taskForm {\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n}\n.formTopRow {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n#taskText {\n    position: relative;\n    width: 200px;\n    min-width: 50px;\n    margin-right: 10px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n#taskDueDate {\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n    font-family: Arial, Helvetica, sans-serif; \n    width: auto;\n}\n#taskNotes {\n    margin-bottom: 10px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n#listSelector {\n    width: fit-content;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n.taskCard {\n    display: flex;\n    flex-direction: column;\n    min-width: 100px;\n    max-width: 600px;\n    margin: 15px;\n    margin-right: 130px;\n    background-color: rgb(241, 241, 241);\n    border-radius: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n.taskCard:hover .TCPriorButton {display: block;}\n.taskCard:hover .TCDelete {display: block;}\n.taskCard:hover .TCExpand {display: block;}\n.TCTop {\n    display: flex;\n    flex-direction: row;\n}\n.TCTopLeft {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n}\n.TCCheck {\n}\n.TCTitle {\n    border: none;\n    margin-left: 5px;\n    font-size: 30px;\n    background: transparent;\n    min-width: none;\n    cursor: pointer;\n}\n.TCTopRight {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: flex-end;\n}\n.TCDate {\n    border: none;\n    font-family: Arial, Helvetica, sans-serif;\n    background: transparent;\n}\n.TCDelete {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCBottom {\n    display: none;\n}\n.expandedInfo {\n    display: block;\n}\n.TCNotes {\n    border: none;\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n    cursor: pointer;\n}\n.TCNotesButton {\n    align-items: center;\n    margin: 10px;\n    border-style: none;\n    text-align: center;\n    background-color: transparent;\n    font-size: large;\n    border-radius: 5px;\n}\n.TCchangeNotesTextArea {\n    margin-bottom: 10px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    outline: none;\n}\n.TCNotesButton:hover {\n    background-color: rgb(180, 180, 180);\n    cursor: pointer;\n}\n.TCPriorityButtonContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.TCButton:hover {\n    background-color: white;\n}\n.TCPriorButton {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(90, 90, 90);\n    margin: 3px;\n    width: 20px;\n    height: 17px;\n    padding: 0%;\n}\n.TCMiddle {\n    display: flex;\n    justify-content: flex-end;\n}\n.TCExpand {\n    display: none;\n    font-size: 10px;\n    border-radius: 6px;\n    border: 1px solid rgb(133, 133, 133);\n    color: rgb(0, 0, 0);\n    margin: 3px;\n    padding: 2px;\n}\n.TCList {\n    background-color: white;\n    padding: 5px;\n    border-radius: 7px;\n}\n.newTaskButton {\n    margin-bottom: 200px;\n}\n.newTaskButtonContainer {\n    height: 50px;\n    margin-left: 15px;\n}\nfooter {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   background-color: rgb(58, 84, 153);\n   color: white;\n   text-align: center;\n   padding: 5px;\n}  \n.listDelWarnButton {\n    color: white;\n    font-size: 20px;\n    justify-content: center;\n    width: 65px;\n    background-color: rgb(116, 138, 199);\n    padding: 10px;\n}"],"sourceRoot":""}]);
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






let taskStorage = JSON.parse(localStorage.getItem('taskStorage')) || [];

let currentView =  "all";

let renderArray;

const listDeleteButtonClicked = (e) => {
    if(!e.target.matches(".deleteListButton")) return;
    (0,_modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.setListToDelete)(e.target.dataset.list)
    listDeletePopup.style.display = "block";
    listDeleteWarning.innerHTML = `Are you sure you want to delete <b>${_modules_ListLogic__WEBPACK_IMPORTED_MODULE_4__.listToDelete}</b> and all of it's tasks?`;
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
/* harmony export */   "setListToDelete": () => (/* binding */ setListToDelete),
/* harmony export */   "listToDelete": () => (/* binding */ listToDelete)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9MaXN0TG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFza0xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdEQUFnRCxtQkFBbUIsR0FBRyxRQUFRLGdCQUFnQiwyQ0FBMkMsbUJBQW1CLEdBQUcsZUFBZSxvQkFBb0Isd0JBQXdCLGlCQUFpQixtQkFBbUIsa0JBQWtCLEdBQUcsVUFBVSxvQkFBb0IseUNBQXlDLG1CQUFtQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLHVCQUF1QixrQkFBa0IsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIscUJBQXFCLG1DQUFtQyx3Q0FBd0MsS0FBSywwQkFBMEIseUJBQXlCLHlDQUF5QyxxQkFBcUIsdUJBQXVCLHVCQUF1QixpQkFBaUIsMkNBQTJDLDBCQUEwQixpQkFBaUIsZ0ZBQWdGLGlDQUFpQyxtQ0FBbUMsMkJBQTJCLFlBQVksWUFBWSxZQUFZLFVBQVUsT0FBTyxZQUFZLEtBQUssd0JBQXdCLHNCQUFzQix3QkFBd0IsMkJBQTJCLHFCQUFxQixLQUFLLGlDQUFpQyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxzQkFBc0IsS0FBSyx3QkFBd0IsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRyxpQkFBaUIsMkNBQTJDLHVCQUF1QixHQUFHLFFBQVEsb0JBQW9CLHlCQUF5QixvQkFBb0IsNkJBQTZCLEdBQUcsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLDBCQUEwQixtQkFBbUIseUJBQXlCLHdCQUF3QixvQ0FBb0MsdUJBQXVCLHlCQUF5QixHQUFHLG9CQUFvQiwyQ0FBMkMsc0JBQXNCLEdBQUcsc0NBQXNDLGlCQUFpQixrQkFBa0IseUJBQXlCLG1CQUFtQix5QkFBeUIseUJBQXlCLHlCQUF5QixrQkFBa0IsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyx3QkFBd0IsMkNBQTJDLHNCQUFzQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxnQkFBZ0IsdUJBQXVCLHdCQUF3QixtQkFBbUIsbUJBQW1CLHlCQUF5QixtQkFBbUIsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsWUFBWSxpQkFBaUIsc0JBQXNCLCtDQUErQyx5QkFBeUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRyxxQkFBcUIsb0JBQW9CLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixzQkFBc0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIsbUJBQW1CLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLGVBQWUsb0JBQW9CLHNCQUFzQixtQkFBbUIsdUJBQXVCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHNCQUFzQixHQUFHLHVCQUF1QiwyQ0FBMkMsR0FBRyx3QkFBd0Isb0JBQW9CLG1CQUFtQiw2QkFBNkIsMEJBQTBCLEdBQUcsbUJBQW1CLG9CQUFvQixvQkFBb0IsS0FBSyxlQUFlLG9CQUFvQiw2QkFBNkIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3Qix5QkFBeUIsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsc0JBQXNCLG9CQUFvQix1QkFBdUIsdUJBQXVCLG1CQUFtQiwwQkFBMEIsMkNBQTJDLDBCQUEwQixtQkFBbUIseUJBQXlCLDBCQUEwQixHQUFHLGFBQWEsb0JBQW9CLDZCQUE2QixvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEdBQUcsYUFBYSx5QkFBeUIsbUJBQW1CLHNCQUFzQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIsb0JBQW9CLEdBQUcsZ0JBQWdCLG1CQUFtQix5QkFBeUIsbUJBQW1CLG9CQUFvQixnREFBZ0QsbUJBQW1CLEdBQUcsY0FBYywwQkFBMEIsbUJBQW1CLHlCQUF5QixtQkFBbUIsb0JBQW9CLEdBQUcsaUJBQWlCLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQixvQkFBb0IsR0FBRyxhQUFhLG9CQUFvQiw2QkFBNkIsdUJBQXVCLHVCQUF1QixtQkFBbUIsMEJBQTBCLDJDQUEyQywwQkFBMEIsbUJBQW1CLHlCQUF5QiwwQkFBMEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLDZCQUE2QixnQkFBZ0IsNkJBQTZCLGdCQUFnQixVQUFVLG9CQUFvQiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQiwwQkFBMEIsMEJBQTBCLG1CQUFtQixHQUFHLFlBQVksR0FBRyxZQUFZLG1CQUFtQix1QkFBdUIsc0JBQXNCLDhCQUE4QixzQkFBc0Isc0JBQXNCLEdBQUcsZUFBZSxvQkFBb0IsMEJBQTBCLG1CQUFtQiwwQkFBMEIsZ0NBQWdDLEdBQUcsV0FBVyxtQkFBbUIsZ0RBQWdELDhCQUE4QixHQUFHLGFBQWEsb0JBQW9CLHNCQUFzQix5QkFBeUIsMkNBQTJDLDBCQUEwQixrQkFBa0Isa0JBQWtCLG1CQUFtQixrQkFBa0IsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyxZQUFZLG1CQUFtQiw4QkFBOEIsbUJBQW1CLHlCQUF5QixzQkFBc0IsR0FBRyxrQkFBa0IsMEJBQTBCLG1CQUFtQix5QkFBeUIseUJBQXlCLG9DQUFvQyx1QkFBdUIseUJBQXlCLEdBQUcsMEJBQTBCLDBCQUEwQixtQkFBbUIseUJBQXlCLG1CQUFtQixvQkFBb0IsR0FBRyx3QkFBd0IsMkNBQTJDLHNCQUFzQixHQUFHLDZCQUE2QixvQkFBb0IsNkJBQTZCLDBCQUEwQixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxrQkFBa0Isb0JBQW9CLHNCQUFzQix5QkFBeUIsMkNBQTJDLDZCQUE2QixrQkFBa0Isa0JBQWtCLG1CQUFtQixrQkFBa0IsR0FBRyxhQUFhLG9CQUFvQixnQ0FBZ0MsR0FBRyxhQUFhLG9CQUFvQixzQkFBc0IseUJBQXlCLDJDQUEyQywwQkFBMEIsa0JBQWtCLG1CQUFtQixHQUFHLFdBQVcsOEJBQThCLG1CQUFtQix5QkFBeUIsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsMkJBQTJCLG1CQUFtQix3QkFBd0IsR0FBRyxVQUFVLHFCQUFxQixhQUFhLGVBQWUsaUJBQWlCLHdDQUF3QyxrQkFBa0Isd0JBQXdCLGtCQUFrQixHQUFHLHdCQUF3QixtQkFBbUIsc0JBQXNCLDhCQUE4QixrQkFBa0IsMkNBQTJDLG9CQUFvQixHQUFHLE9BQU8sd0ZBQXdGLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLHlCQUF5QiwwQkFBMEIsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLHNCQUFzQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sc0JBQXNCLHVCQUF1Qix1QkFBdUIsTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxh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OztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udmlld3BvcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4NCwgMTUzKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcbi5saXN0RGVsZXRlUG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lOyBcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbiAgfVxcbiAgLmxpc3REZWxldGVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgIGNvbG9yOiAjMEExMDBEO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJveC1zaGFkb3c6IDZweCAxMHB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcXG4gIH1cXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge3RvcDogLTMwMHB4OyBvcGFjaXR5OiAwfVxcbiAgICB0byB7dG9wOiAwOyBvcGFjaXR5OiAxfVxcbiAgfVxcbiAgLmxpc3REZWxldGVXYXJuaW5nIHtcXG4gICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgLmxpc3REZWxXYXJuQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gLm5hdkJvZHlDb250YWluZXIge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG4ubmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm5hdkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2QnV0dG9uOmhvdmVyIC5kZWxldGVMaXN0QnV0dG9uIHsgZGlzcGxheTogYmxvY2s7fVxcbi5hZGRMaXN0QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxufVxcbi5hZGRMaXN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGRMaXN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGRMaXN0VGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5hZGRMaXN0VGV4dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5kaXZpZGVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kZWxldGVMaXN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWluLXdpZHRoOiAxN3B4O1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuLmRlbGV0ZUxpc3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmxpc3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubGlzdEJ1dHRvblNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcbn1cXG4udGFza1ZpZXdlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59IFxcbi50YXNrVmlld2VyTmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuLnRhc2tWaWV3ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2tGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4udGFza0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uZm9ybVRvcFJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuI3Rhc2tUZXh0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jdGFza0R1ZURhdGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4jdGFza05vdGVzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI2xpc3RTZWxlY3RvciB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4udGFza0NhcmQ6aG92ZXIgLlRDUHJpb3JCdXR0b24ge2Rpc3BsYXk6IGJsb2NrO31cXG4udGFza0NhcmQ6aG92ZXIgLlRDRGVsZXRlIHtkaXNwbGF5OiBibG9jazt9XFxuLnRhc2tDYXJkOmhvdmVyIC5UQ0V4cGFuZCB7ZGlzcGxheTogYmxvY2s7fVxcbi5UQ1RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5UQ1RvcExlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbi5UQ0NoZWNrIHtcXG59XFxuLlRDVGl0bGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1pbi13aWR0aDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENUb3BSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLlRDRGF0ZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uVENEZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5UQ0JvdHRvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5leHBhbmRlZEluZm8ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLlRDTm90ZXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENOb3Rlc0J1dHRvbiB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5UQ2NoYW5nZU5vdGVzVGV4dEFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uVENOb3Rlc0J1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENQcmlvcml0eUJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLlRDQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5UQ1ByaW9yQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzMsIDEzMywgMTMzKTtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDAlO1xcbn1cXG4uVENNaWRkbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uVENFeHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG4uVENMaXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG4ubmV3VGFza0J1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbn1cXG4ubmV3VGFza0J1dHRvbkNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbmZvb3RlciB7XFxuICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIGxlZnQ6IDA7XFxuICAgYm90dG9tOiAwO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nOiA1cHg7XFxufSAgXFxuLmxpc3REZWxXYXJuQnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMTM4LCAxOTkpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5Q0FBeUM7SUFDekMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztJQUNULG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix5RUFBeUU7SUFDekUsMEJB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QUM3QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7R0FDRyxlQUFlO0dBQ2YsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsa0NBQWtDO0dBQ2xDLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsWUFBWTtBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udmlld3BvcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4NCwgMTUzKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcbi5saXN0RGVsZXRlUG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lOyBcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbiAgfVxcbiAgLmxpc3REZWxldGVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgIGNvbG9yOiAjMEExMDBEO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJveC1zaGFkb3c6IDZweCAxMHB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcXG4gIH1cXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge3RvcDogLTMwMHB4OyBvcGFjaXR5OiAwfVxcbiAgICB0byB7dG9wOiAwOyBvcGFjaXR5OiAxfVxcbiAgfVxcbiAgLmxpc3REZWxldGVXYXJuaW5nIHtcXG4gICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgLmxpc3REZWxXYXJuQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gLm5hdkJvZHlDb250YWluZXIge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG4ubmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm5hdkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2QnV0dG9uOmhvdmVyIC5kZWxldGVMaXN0QnV0dG9uIHsgZGlzcGxheTogYmxvY2s7fVxcbi5hZGRMaXN0QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxufVxcbi5hZGRMaXN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGRMaXN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGRMaXN0VGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5hZGRMaXN0VGV4dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5kaXZpZGVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kZWxldGVMaXN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWluLXdpZHRoOiAxN3B4O1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuLmRlbGV0ZUxpc3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmxpc3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubGlzdEJ1dHRvblNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcbn1cXG4udGFza1ZpZXdlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59IFxcbi50YXNrVmlld2VyTmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuLnRhc2tWaWV3ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3NvcnRCeVNlbGVjdG9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2tGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4udGFza0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uZm9ybVRvcFJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuI3Rhc2tUZXh0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jdGFza0R1ZURhdGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4jdGFza05vdGVzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI2xpc3RTZWxlY3RvciB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4udGFza0NhcmQ6aG92ZXIgLlRDUHJpb3JCdXR0b24ge2Rpc3BsYXk6IGJsb2NrO31cXG4udGFza0NhcmQ6aG92ZXIgLlRDRGVsZXRlIHtkaXNwbGF5OiBibG9jazt9XFxuLnRhc2tDYXJkOmhvdmVyIC5UQ0V4cGFuZCB7ZGlzcGxheTogYmxvY2s7fVxcbi5UQ1RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5UQ1RvcExlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbi5UQ0NoZWNrIHtcXG59XFxuLlRDVGl0bGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1pbi13aWR0aDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENUb3BSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLlRDRGF0ZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uVENEZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcbi5UQ0JvdHRvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5leHBhbmRlZEluZm8ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLlRDTm90ZXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENOb3Rlc0J1dHRvbiB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5UQ2NoYW5nZU5vdGVzVGV4dEFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uVENOb3Rlc0J1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVENQcmlvcml0eUJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLlRDQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5UQ1ByaW9yQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzMsIDEzMywgMTMzKTtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDAlO1xcbn1cXG4uVENNaWRkbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uVENFeHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG4uVENMaXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG4ubmV3VGFza0J1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbn1cXG4ubmV3VGFza0J1dHRvbkNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbmZvb3RlciB7XFxuICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIGxlZnQ6IDA7XFxuICAgYm90dG9tOiAwO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODQsIDE1Myk7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nOiA1cHg7XFxufSAgXFxuLmxpc3REZWxXYXJuQnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMTM4LCAxOTkpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL3N0eWxlcy9HaXRIdWItTWFyay1MaWdodC0xMjBweC1wbHVzLnBuZyc7XG5pbXBvcnQge3Rhc2tGb3JtU3VibWl0LCBkZWxldGVUYXNrLCBzZXRUYXNrU3RvcmFnZSwgcHJpb3JpdHlEb3duLCBwcmlvcml0eVVwLCB9IGZyb20gJy9zcmMvbW9kdWxlcy9UYXNrTG9naWMnO1xuaW1wb3J0IHtjb21wbGV0ZWRUYXNrcywgY29tcGxldGVUYXNrfSBmcm9tICcvc3JjL21vZHVsZXMvQ29tcGxldGVkJztcbmltcG9ydCB7bGlzdFN0b3JhZ2UsIGxpc3RGb3JtU3VibWl0LCBkZWxldGVMaXN0LCBsaXN0VG9EZWxldGUsIHNldExpc3RUb0RlbGV0ZX0gZnJvbSAnLi9tb2R1bGVzL0xpc3RMb2dpYyc7XG5cbmxldCB0YXNrU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tTdG9yYWdlJykpIHx8IFtdO1xuXG5sZXQgY3VycmVudFZpZXcgPSAgXCJhbGxcIjtcblxubGV0IHJlbmRlckFycmF5O1xuXG5jb25zdCBsaXN0RGVsZXRlQnV0dG9uQ2xpY2tlZCA9IChlKSA9PiB7XG4gICAgaWYoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuZGVsZXRlTGlzdEJ1dHRvblwiKSkgcmV0dXJuO1xuICAgIHNldExpc3RUb0RlbGV0ZShlLnRhcmdldC5kYXRhc2V0Lmxpc3QpXG4gICAgbGlzdERlbGV0ZVBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbGlzdERlbGV0ZVdhcm5pbmcuaW5uZXJIVE1MID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgPGI+JHtsaXN0VG9EZWxldGV9PC9iPiBhbmQgYWxsIG9mIGl0J3MgdGFza3M/YDtcbn1cblxuZnVuY3Rpb24gY2xlYXJEZWxldGVMaXN0ICgpIHtcbiAgICBsaXN0RGVsZXRlUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuZnVuY3Rpb24gbGlzdEZvcm1SZXNldCgpIHtcbiAgICBhZGRMaXN0Rm9ybS5yZXNldCgpO1xuICAgIGFkZExpc3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbmZ1bmN0aW9uIHJlc2V0TGlzdERlbGV0ZVBvcHVwKCkge1xuICAgIGxpc3REZWxldGVQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5mdW5jdGlvbiBsaXN0QnV0dG9uQ2xpY2tlZCAoZSkge1xuICAgIGlmKCFlLnRhcmdldC5tYXRjaGVzKFwiLmxpc3RCdXR0b25cIikpIHJldHVybjtcbiAgICBjdXJyZW50VmlldyA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG4gICAgcmVuZGVyTGlzdHNUb0Zvcm0oKTtcbiAgICBsaXN0QnV0dG9uSGlnaGxpZ2h0KGUudGFyZ2V0KTtcbiAgICBDaGVja0hpZGVOZXdUYXNrQnV0dG9uKCk7XG59XG4vL2hpZGUgdGhlIG5ldyB0YXNrIGJ1dHRvbiBzbyB0YXNrcyBhcmUgbm90IG1hZGUgaW4gY29tcGxldGVkIHZpZXdcbmZ1bmN0aW9uIENoZWNrSGlkZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgbmV3VGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGlmIChjdXJyZW50VmlldyAhPSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG4gICAgbmV3VGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xufVxuLy9sb2dpYyB0aGF0IHNvcnRzIHVzZXIgZGF0YSBmb3IgdGFzayBjYXJkIGNyZWF0aW9uXG5mdW5jdGlvbiBnZXRSZW5kZXJBcnJheSAobGlzdCkge1xuICAgIHZhciBzb3J0VmFsID0gc29ydEJ5U2VsZWN0b3IudmFsdWU7XG4gICAgbGV0IGZpbHRlcmVkQXJyYXk7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgbGV0IHJlbmRlckFycmF5O1xuICAgIHN3aXRjaCAobGlzdCkge1xuICAgICAgICBjYXNlIChcImFsbFwiKTogXG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRWYWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBcnJheSA9IHRhc2tTdG9yYWdlLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJkdWUtZGF0ZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyYXkgPSB0YXNrU3RvcmFnZS5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkxID0gbmV3IERhdGUoYS5kdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkyID0gbmV3IERhdGUoYi5kdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5MSA8IGtleTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleTEgPT0ga2V5Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFwidG9kYXlcIik6XG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRWYWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEFycmF5ID0gdGFza1N0b3JhZ2UuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWVEYXRlID09IHRvZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyYXkgPSBmaWx0ZXJlZEFycmF5LnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIChcImR1ZS1kYXRlXCIpOlxuICAgICAgICAgICAgICAgICAgICAvL2NvZGVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoXCJjb21wbGV0ZWRcIik6XG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRWYWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBcnJheSA9IGNvbXBsZXRlZFRhc2tzLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5hbGxQcmlvcml0eSAtIGIuYWxsUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIChcImR1ZS1kYXRlXCIpOlxuICAgICAgICAgICAgICAgICAgICAvL2NvZGVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgIHN3aXRjaCAoc29ydFZhbCkge1xuICAgICAgICAgICAgY2FzZSAoXCJwcmlvcml0eVwiKTpcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFycmF5ID0gdGFza1N0b3JhZ2UuZmlsdGVyKHRhc2sgPT4gdGFzay5saXN0ID09IGxpc3QpO1xuICAgICAgICAgICAgICAgIHJlbmRlckFycmF5ID0gZmlsdGVyZWRBcnJheS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEubGlzdFByaW9yaXR5IC0gYi5saXN0UHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoXCJkdWUtZGF0ZVwiKTpcbiAgICAgICAgICAgICAgICAvL2NvZGVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyQXJyYXk7XG59XG5mdW5jdGlvbiBhbGxCdXR0b25DbGlja2VkICgpIHtcbiAgICBjdXJyZW50VmlldyA9IFwiYWxsXCJcbiAgICByZW5kZXJUYXNrVmlldyhcImFsbFwiKTtcbiAgICBsaXN0QnV0dG9uSGlnaGxpZ2h0KCk7XG4gICAgQ2hlY2tIaWRlTmV3VGFza0J1dHRvbigpO1xufVxuXG5mdW5jdGlvbiB0b2RheUJ1dHRvbkNsaWNrZWQgKCkge1xuICAgIGN1cnJlbnRWaWV3ID0gXCJ0b2RheVwiO1xuICAgIHJlbmRlclRhc2tWaWV3KFwidG9kYXlcIik7XG4gICAgbGlzdEJ1dHRvbkhpZ2hsaWdodCgpXG4gICAgQ2hlY2tIaWRlTmV3VGFza0J1dHRvbigpO1xufVxuZnVuY3Rpb24gY29tcGxldGVkQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICBjdXJyZW50VmlldyA9IFwiY29tcGxldGVkXCJcbiAgICByZW5kZXJUYXNrVmlldyhcImNvbXBsZXRlZFwiKTtcbiAgICBsaXN0QnV0dG9uSGlnaGxpZ2h0KClcbiAgICBDaGVja0hpZGVOZXdUYXNrQnV0dG9uKCk7XG59XG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLSBkb20gbGlzdGVuZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTGlzdEJ1dHRvblwiKTtcbmNvbnN0IGFkZExpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRMaXN0Rm9ybVwiKTtcbmNvbnN0IGFkZExpc3RUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRMaXN0VGV4dFwiKTtcbmNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsQnV0dG9uXCIpXG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlCdXR0b25cIik7XG5jb25zdCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZEJ1dHRvblwiKTtcbmNvbnN0IGxpc3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3ROYXZcIik7XG5jb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrQnV0dG9uXCIpO1xuY29uc3Qgc29ydEJ5U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVNlbGVjdG9yXCIpO1xuY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtQ29udGFpbmVyXCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpO1xuY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUZXh0XCIpO1xuY29uc3QgbGlzdFNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RTZWxlY3RvcicpO1xuY29uc3QgdGFza1ZpZXdSZW5kZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdSZW5kZXJEaXYnKTtcbmNvbnN0IGxpc3REZWxldGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdERlbGV0ZVBvcHVwXCIpO1xuY29uc3QgbGlzdERlbGV0ZVdhcm5pbmcgPSBsaXN0RGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5saXN0RGVsZXRlV2FybmluZ1wiKTtcbmNvbnN0IHllc0RlbGV0ZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllc0RlbGV0ZUxpc3RcIik7XG5jb25zdCBub0RlbGV0ZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vRGVsZXRlTGlzdFwiKTtcbmNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlckxpbmtcIik7XG5cblxubGlzdE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdEJ1dHRvbkNsaWNrZWQpO1xubGlzdE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdERlbGV0ZUJ1dHRvbkNsaWNrZWQpO1xueWVzRGVsZXRlTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlTGlzdCk7XG5ub0RlbGV0ZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRGVsZXRlTGlzdCk7XG5hbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGxCdXR0b25DbGlja2VkKTtcbnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9kYXlCdXR0b25DbGlja2VkKTtcbmNvbXBsZXRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29tcGxldGVkQnV0dG9uQ2xpY2tlZCk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzayk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpb3JpdHlVcCk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpb3JpdHlEb3duKTtcbnRhc2tWaWV3UmVuZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBhbmRDYXJkSW5mbyk7XG50YXNrVmlld1JlbmRlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29tcGxldGVUYXNrKTtcbnRhc2tWaWV3UmVuZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrVGl0bGVUb0lucHV0RmllbGQpO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB1cGRhdGVUYXNrVGl0bGUpO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tOb3Rlc1RvVGV4dEFyZWEpO1xudGFza1ZpZXdSZW5kZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRhc2tOb3Rlcyk7XG5hZGRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGlzdEZvcm1TdWJtaXQoKTtcbiAgICBjcmVhdGVOZXdMaXN0Rm9ybSgpO1xuICAgIGFkZExpc3RUZXh0LmZvY3VzKCk7XG59KTtcbmFkZExpc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGlzdEZvcm1TdWJtaXQoKTtcbn0pO1xuXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1TdWJtaXQoKTtcbiAgICBjcmVhdGVUYXNrRm9ybSgpO1xufSk7XG5zb3J0QnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtyZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7fSk7XG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tGb3JtU3VibWl0KCk7XG59KTsgXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgcmVzZXRUYXNrRm9ybSgpO1xuICAgIHJlc2V0TGlzdEZvcm0oKTtcbiAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG4gIH1cbn0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgIGlmICh0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIiAmJiBlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRhc2tGb3JtU3VibWl0KCk7XG4gICAgfVxufSlcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIHRhc2tmb3JtLCBcblxuLy8gd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7IC8vdGhpcyBsb2dpYyBuZWVkcyB3b3JrXG4vLyAgICAgaWYoZS50YXJnZXQubWF0Y2hlcyhcIlwiKSlcbi8vIH1cblxuXG5cbi8vLS0tLS0tLS0tLS0tLS0tIGRvbSBlZGl0b3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IEljb247XG5teUljb24uYWx0PVwiZ2l0IGh1YiBtYXJrXCI7XG5teUljb24uaGVpZ2h0ID0gXCIyMFwiO1xubXlJY29uLndpZHRoID0gXCIyMFwiO1xuZm9vdGVyTGluay5hcHBlbmRDaGlsZChteUljb24pO1xuLy9oaWdobGlnaHQgbGlzdCBidXR0b25zIHdoZW4gY2xpY2tlZFxuZnVuY3Rpb24gbGlzdEJ1dHRvbkhpZ2hsaWdodCh0YXJnZXQpIHtcbiAgICB2YXIgYWxsTGlzdEJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0QnV0dG9uXCIpXTtcbiAgICBhbGxMaXN0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0QnV0dG9uU2VsZWN0ZWRcIik7fSk7XG4gICAgc3dpdGNoIChjdXJyZW50Vmlldykge1xuICAgICAgICBjYXNlIChcImFsbFwiKTogXG4gICAgICAgICAgICBhbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3RCdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcInRvZGF5XCIpOlxuICAgICAgICAgICAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3RCdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcImNvbXBsZXRlZFwiKTpcbiAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdEJ1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImxpc3RCdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGV4cGFuZENhcmRJbmZvIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDRXhwYW5kXCIpKSByZXR1cm47XG4gICAgdmFyIGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmZvO1xuICAgIHZhciB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgdmFyIHRhcmdldEJvdHRvbSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1leHBhbmQ9XCIke2luZGV4fVwiXWApXG4gICAgaWYodGFyZ2V0Qm90dG9tLmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkSW5mb1wiKSkge1xuICAgICAgICB0YXJnZXRCb3R0b20uY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkSW5mb1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRCb3R0b20uY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkSW5mb1wiKTtcbiAgICB9XG59ICAgIFxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSAoKSB7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICByZW5kZXJMaXN0c1RvRm9ybSgpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICAgIFxuICAgIHRhc2tUZXh0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RGb3JtICgpIHtcbiAgICBhZGRMaXN0Rm9ybS5yZXNldCgpO1xuICAgIGFkZExpc3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgYWRkTGlzdFRleHQuZm9jdXMoKTtcbn1cbmZ1bmN0aW9uIHJlc2V0VGFza0Zvcm0gKCkge1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuZnVuY3Rpb24gcmVzZXRMaXN0Rm9ybSAoKSB7XG4gICAgYWRkTGlzdEZvcm0ucmVzZXQoKTtcbiAgICBhZGRMaXN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5mdW5jdGlvbiByZW5kZXJMaXN0c1RvRm9ybSAoKSB7XG4gICAgbGlzdFNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGlzdFN0b3JhZ2UuZm9yRWFjaChsaXN0SW5kZXggPT4ge1xuICAgICAgICBpZiAobGlzdEluZGV4ID09IGN1cnJlbnRWaWV3KXtcbiAgICAgICAgICAgIHZhciBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICB2YXIgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi5pbm5lckhUTUwgPSBgJHtsaXN0SW5kZXh9YDtcbiAgICAgICAgICAgIGxpc3RPcHRpb24uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XG4gICAgICAgICAgICBsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHZhciBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLnZhbHVlID0gYCR7bGlzdEluZGV4fWA7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLmlubmVySFRNTCA9IGAke2xpc3RJbmRleH1gO1xuICAgICAgICAgICAgbGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICAgICAgICB9XG4gICAgfSlcbn1cbmZ1bmN0aW9uIHJlbmRlckxpc3RWaWV3ICgpIHtcbiAgICBsaXN0TmF2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGlzdFN0b3JhZ2UuZm9yRWFjaChsaXN0SW5kZXggPT4ge1xuICAgICAgICB2YXIgbGlzdEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxpc3RCdXR0b25EaXYuY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcbiAgICAgICAgdmFyIGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0QnV0dG9uXCIpO1xuICAgICAgICBsaXN0QnV0dG9uLmlubmVySFRNTCA9IGAke2xpc3RJbmRleH1gO1xuICAgICAgICB2YXIgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24uaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZUxpc3RCdXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24uZGF0YXNldC5saXN0ID0gYCR7bGlzdEluZGV4fWA7XG4gICAgICAgIGxpc3ROYXYuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbkRpdik7XG4gICAgICAgIGxpc3RCdXR0b25EaXYuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XG4gICAgICAgIGxpc3RCdXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ1dHRvbik7XG4gICAgfSlcbn1cbmZ1bmN0aW9uIGNsZWFyVGFza1ZpZXcgKCkge1xuICAgIHdoaWxlKHRhc2tWaWV3UmVuZGVyRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza1ZpZXdSZW5kZXJEaXYucmVtb3ZlQ2hpbGQodGFza1ZpZXdSZW5kZXJEaXYubGFzdENoaWxkKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0YXNrVGl0bGVUb0lucHV0RmllbGQoZSkge1xuICAgIGlmKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDVGl0bGVcIikpIHJldHVybjtcbiAgICBpZihjdXJyZW50VmlldyA9PSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBsZXQgcGFyZW50ID0gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIlRDY2hhbmdlVGl0bGVGb3JtXCIpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID1cInRleHRcIjtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiVENjaGFuZ2VUaXRsZUlucHV0XCIpO1xuICAgIGlucHV0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBpbnB1dC52YWx1ZSA9IHRhc2tTdG9yYWdlW2luZGV4XS50aXRsZTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5mdW5jdGlvbiB1cGRhdGVUYXNrVGl0bGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5jaGFuZ2VUaXRsZUZvcm1cIikpIHJldHVybjtcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgdGFza1N0b3JhZ2VbaW5wdXQuZGF0YXNldC5pbmRleF0udGl0bGUgPSBpbnB1dC52YWx1ZTtcbiAgICBzZXRUYXNrU3RvcmFnZSgpO1xuICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbn1cbmZ1bmN0aW9uIHRhc2tOb3Rlc1RvVGV4dEFyZWEoZSkge1xuICAgIGlmKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDTm90ZXNcIikpIHJldHVybjtcbiAgICBpZihjdXJyZW50VmlldyA9PSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBsZXQgcGFyZW50ID0gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIlRDY2hhbmdlTm90ZXNGb3JtXCIpO1xuICAgIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURVhUQVJFQVwiKTtcbiAgICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiLlRDY2hhbmdlTm90ZXNUZXh0QXJlYVwiKTtcbiAgICB0ZXh0QXJlYS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgdGV4dEFyZWEudmFsdWUgPSB0YXNrU3RvcmFnZVtpbmRleF0ubm90ZXM7XG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJUQ05vdGVzQnV0dG9uXCIpO1xuICAgIHN1Ym1pdC5pbm5lckhUTUwgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG59XG5mdW5jdGlvbiB1cGRhdGVUYXNrTm90ZXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighZS50YXJnZXQubWF0Y2hlcyhcIi5UQ05vdGVzQnV0dG9uXCIpKSByZXR1cm47XG4gICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRleHRBcmVhID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0YXNrU3RvcmFnZVt0ZXh0QXJlYS5kYXRhc2V0LmluZGV4XS5ub3RlcyA9IHRleHRBcmVhLnZhbHVlO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrVmlldyAobGlzdCkge1xuICAgIHJlbmRlckFycmF5ID0gZ2V0UmVuZGVyQXJyYXkobGlzdCk7IFxuICAgIGNsZWFyVGFza1ZpZXcoKTtcbiAgICByZW5kZXJBcnJheS5mb3JFYWNoKHRhc2sgPT4geyBcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIlRDQ2hlY2tcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPmBcbiAgICAgICAgbGV0IHByaW9yaXR5QnV0dG9ucyA9IFxuICAgICAgICAgICAgYDxidXR0b24gY2xhc3M9XCJUQ0J1dHRvbiBUQ1ByaW9yQnV0dG9uIHByaW9yVXBcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPiYjOTY1MDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlRDQnV0dG9uIFRDUHJpb3JCdXR0b24gcHJpb3JEb3duXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj4mIzk2NjA8L2J1dHRvbj5gO1xuICAgICAgICBsZXQgbm90ZXMgPSBgJm5ic3A7YDtcbiAgICAgICAgaWYodGFzay5ub3RlcyAhPSBcIlwiKSB7bm90ZXMgPSB0YXNrLm5vdGVzfTtcbiAgICAgICAgaWYoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIil7Y2hlY2tib3ggPSBcIlwifTtcbiAgICAgICAgaWYoc29ydEJ5U2VsZWN0b3IudmFsdWUgIT0gXCJwcmlvcml0eVwiKSB7cHJpb3JpdHlCdXR0b25zID0gXCJcIn07XG4gICAgICAgIHZhciBuZXdUYXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdUYXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuICAgICAgICBuZXdUYXNrQ2FyZC5pbm5lckhUTUwgPSAgICAgXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIlRDVG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDVG9wTGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAke2NoZWNrYm94fVxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlRDVGl0bGVcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDVG9wUmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJUQ0RhdGVcIiB2YWx1ZT1cIiR7dGFzay5kdWVEYXRlfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVENQcmlvcml0eUJ1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwcmlvcml0eUJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiVENCdXR0b24gVENEZWxldGVcIiBkYXRhLWluZGV4PVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPlg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDTWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlRDQnV0dG9uIFRDRXhwYW5kXCIgZGF0YS1pbmZvPVwiJHt0YXNrLmFsbFByaW9yaXR5fVwiPmluZm88L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRDQm90dG9tXCIgZGF0YS1leHBhbmQ9XCIke3Rhc2suYWxsUHJpb3JpdHl9XCI+XG4gICAgICAgICAgICAgICAgPHA+Tm90ZXM6PC9wPlxuICAgICAgICAgICAgICAgIDxkaXY+PHAgY2xhc3M9XCJUQ05vdGVzXCIgZGF0YS1pbmRleD1cIiR7dGFzay5hbGxQcmlvcml0eX1cIj4ke25vdGVzfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5MaXN0OjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlRDTGlzdFwiPiR7dGFzay5saXN0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgdGFza1ZpZXdSZW5kZXJEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0NhcmQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQge3Rhc2tGb3JtLCB0YXNrU3RvcmFnZSwgcmVuZGVyVGFza1ZpZXcsIHRhc2tGb3JtQ29udGFpbmVyLCBjdXJyZW50VmlldywgcmVuZGVyQXJyYXksIGxpc3RGb3JtUmVzZXQsIHJlc2V0TGlzdERlbGV0ZVBvcHVwLCBhZGRMaXN0Rm9ybSwgcmVuZGVyTGlzdHNUb0Zvcm0sIHJlbmRlckxpc3RWaWV3fTtcblxucmVuZGVyTGlzdHNUb0Zvcm0oKTtcbnJlbmRlckxpc3RWaWV3KCk7XG5yZW5kZXJUYXNrVmlldyhcImFsbFwiKTtcblxuIiwiaW1wb3J0IHsgdGFza1N0b3JhZ2UsIHJlbmRlclRhc2tWaWV3LCBjdXJyZW50VmlldyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgdXBkYXRlQWxsUHJpb3JpdHksIHVwZGF0ZUxpc3RQcmlvcml0eSwgc2V0VGFza1N0b3JhZ2V9IGZyb20gXCIuL1Rhc2tMb2dpY1wiO1xuXG52YXIgY29tcGxldGVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGxldGVkVGFza3NcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiB1cGRhdGVDb21wbGV0ZWRBcnJheShkYXRhKSB7XG4gICAgY29tcGxldGVkVGFza3MgPSBjb21wbGV0ZWRUYXNrcy5jb25jYXQoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayhlKSB7XG4gICAgaWYoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuVENDaGVja1wiKSkgcmV0dXJuO1xuICAgIHZhciB0YXNrID0gdGFza1N0b3JhZ2Uuc3BsaWNlKChlLnRhcmdldC5kYXRhc2V0LmluZGV4KSwgMSk7XG4gICAgdXBkYXRlQ29tcGxldGVkQXJyYXkodGFzayk7XG4gICAgc2V0Q29tcGxldGVkU3RvcmFnZSgpO1xuICAgIHVwZGF0ZUFsbFByaW9yaXR5KCk7XG4gICAgdXBkYXRlTGlzdFByaW9yaXR5KCk7XG4gICAgdXBkYXRlQ29tcGxldGVkUHJpb3JpdHkoKTtcbiAgICBzZXRUYXNrU3RvcmFnZSgpO1xuICAgIHJlbmRlclRhc2tWaWV3KGN1cnJlbnRWaWV3KTtcbn1cbmZ1bmN0aW9uIHNldENvbXBsZXRlZFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb21wbGV0ZWRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRUYXNrcykpO1xufVxuZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkUHJpb3JpdHkoKSB7XG4gICAgY29tcGxldGVkVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5hbGxQcmlvcml0eSA9IGNvbXBsZXRlZFRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgfSkgXG59XG5cbmV4cG9ydCB7Y29tcGxldGVkVGFza3MsIGNvbXBsZXRlVGFzaywgdXBkYXRlQ29tcGxldGVkUHJpb3JpdHksIHNldENvbXBsZXRlZFN0b3JhZ2V9IiwiaW1wb3J0IHsgbGlzdEZvcm1SZXNldCwgcmVuZGVyTGlzdHNUb0Zvcm0sIHJlbmRlckxpc3RWaWV3LCByZW5kZXJUYXNrVmlldywgcmVzZXRMaXN0RGVsZXRlUG9wdXAsIHRhc2tTdG9yYWdlLCBhZGRMaXN0Rm9ybSwgY3VycmVudFZpZXd9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHt1cGRhdGVBbGxQcmlvcml0eSwgc2V0VGFza1N0b3JhZ2UsIGRlbGV0ZUFsbFRhc2tGcm9tRGVhZExpc3R9IGZyb20gXCIuL1Rhc2tMb2dpY1wiO1xuXG5cbmxldCBsaXN0U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RTdG9yYWdlJykpIHx8IFtcIlJlbWluZGVyc1wiXTtcblxubGV0IGxpc3RUb0RlbGV0ZTtcblxuZnVuY3Rpb24gc2V0TGlzdFRvRGVsZXRlKGxpc3QpIHtsaXN0VG9EZWxldGUgPSBsaXN0fTtcblxuZnVuY3Rpb24gc2V0TGlzdFN0b3JhZ2UgKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobGlzdFN0b3JhZ2UpKTtcbn1cblxuZnVuY3Rpb24gbGlzdEZvcm1TdWJtaXQgKCkge1xuICAgIHZhciBsaXN0VGV4dCA9IChhZGRMaXN0Rm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZGRMaXN0VGV4dF0nKSkudmFsdWU7XG4gICAgaWYgKGxpc3RUZXh0ID09IFwiXCIpIHJldHVybjtcbiAgICB2YXIgbmV3TGlzdCA9IGFkZExpc3RUZXh0LnZhbHVlO1xuICAgIGxpc3RTdG9yYWdlLnB1c2gobmV3TGlzdCk7XG4gICAgbGlzdEZvcm1SZXNldCgpO1xuICAgIHNldExpc3RTdG9yYWdlKCk7XG4gICAgcmVuZGVyTGlzdHNUb0Zvcm0oKTtcbiAgICByZW5kZXJMaXN0VmlldygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0ICgpIHtcbiAgICBsaXN0U3RvcmFnZS5zcGxpY2UoKGxpc3RTdG9yYWdlLmluZGV4T2YobGlzdFRvRGVsZXRlKSksIDEpO1xuICAgIHNldExpc3RTdG9yYWdlKCk7XG4gICAgcmVuZGVyTGlzdFZpZXcoKTtcbiAgICByZW5kZXJMaXN0c1RvRm9ybSgpO1xuICAgIGRlbGV0ZUFsbFRhc2tGcm9tRGVhZExpc3QobGlzdFRvRGVsZXRlKTtcbiAgICB1cGRhdGVBbGxQcmlvcml0eSgpO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpO1xuICAgIHJlc2V0TGlzdERlbGV0ZVBvcHVwKCk7XG59XG5cblxuZXhwb3J0IHtsaXN0Rm9ybVN1Ym1pdCwgZGVsZXRlTGlzdCwgbGlzdFN0b3JhZ2UsIHNldExpc3RUb0RlbGV0ZSwgbGlzdFRvRGVsZXRlfTsiLCJpbXBvcnQgeyB0YXNrRm9ybSwgdGFza1N0b3JhZ2UsIHJlbmRlclRhc2tWaWV3LCB0YXNrRm9ybUNvbnRhaW5lciwgY3VycmVudFZpZXcsIHJlbmRlckFycmF5fSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7dXBkYXRlQ29tcGxldGVkUHJpb3JpdHksIHNldENvbXBsZXRlZFN0b3JhZ2UsIGNvbXBsZXRlZFRhc2tzfSBmcm9tIFwiLi9Db21wbGV0ZWRcIlxuXG5jb25zdCBUYXNrID0gKHRpdGxlLCBsaXN0LCBub3RlcywgZHVlRGF0ZSwgbGlzdFByaW9yaXR5LCBhbGxQcmlvcml0eSkgPT4ge1xuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBsaXN0LCBcbiAgICAgICAgbm90ZXMsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIGxpc3RQcmlvcml0eSxcbiAgICAgICAgYWxsUHJpb3JpdHksXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0YXNrRm9ybVN1Ym1pdCAoKSB7XG4gICAgdmFyIHRhc2tUZXh0ID0gKHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXRhc2tUZXh0XScpKS52YWx1ZTtcbiAgICBpZiAodGFza1RleHQgPT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gKHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXRhc2tEdWVEYXRlXScpKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrTm90ZXMgPSAodGFza0Zvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9dGFza05vdGVzXScpKS52YWx1ZSB8fCBcIiAgIFwiO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gKHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWxpc3RTZWxlY3Rvcl0nKSkudmFsdWU7XG4gICAgdmFyIHByaW9yaXR5ID0gKGNoZWNrTGlzdFByaW9yaXR5KHRhc2tMaXN0KSk7XG4gICAgdmFyIHRhc2sgPSBUYXNrKHRhc2tUZXh0LCB0YXNrTGlzdCwgdGFza05vdGVzLCB0YXNrRHVlRGF0ZSwgcHJpb3JpdHksICh0YXNrU3RvcmFnZS5sZW5ndGgpKTtcbiAgICB0YXNrU3RvcmFnZS5wdXNoKHRhc2spO1xuICAgIHNldFRhc2tTdG9yYWdlKCk7XG4gICAgcmVuZGVyVGFza1ZpZXcoY3VycmVudFZpZXcpOyAgICBcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbn1cbmZ1bmN0aW9uIHNldFRhc2tTdG9yYWdlICgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tTdG9yYWdlKSk7XG59XG5mdW5jdGlvbiBjaGVja0xpc3RQcmlvcml0eSAobGlzdCkge1xuICAgIHZhciBsaXN0RmlsdGVyID0gdGFza1N0b3JhZ2UuZmlsdGVyKHRhc2sgPT4gdGFzay5saXN0ID09IGxpc3QpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gKGxpc3RGaWx0ZXIubGVuZ3RoICsxKTtcbiAgICByZXR1cm4gcHJpb3JpdHk7XG59XG5mdW5jdGlvbiBkZWxldGVUYXNrIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLlRDRGVsZXRlXCIpKSByZXR1cm47XG4gICAgaWYoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgICBjb21wbGV0ZWRUYXNrcy5zcGxpY2UoKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCAxKTtcbiAgICAgICAgdXBkYXRlQ29tcGxldGVkUHJpb3JpdHkoKTtcbiAgICAgICAgc2V0Q29tcGxldGVkU3RvcmFnZSgpO1xuICAgICAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG4gICAgfWVsc2Uge1xuICAgICAgICB2YXIgbGlzdCA9IHRhc2tTdG9yYWdlW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmxpc3Q7IFxuICAgICAgICB2YXIgaW5kZXggPSB0YXNrU3RvcmFnZVtlLnRhcmdldC5kYXRhc2V0LmluZGV4XS5saXN0UHJpb3JpdHk7XG4gICAgICAgIHRhc2tTdG9yYWdlLnNwbGljZSgoZS50YXJnZXQuZGF0YXNldC5pbmRleCksIDEpO1xuICAgICAgICB1cGRhdGVBbGxQcmlvcml0eSgpO1xuICAgICAgICB1cGRhdGVMaXN0UHJpb3JpdHkobGlzdCwgaW5kZXgpO1xuICAgICAgICBzZXRUYXNrU3RvcmFnZSgpO1xuICAgICAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlQWxsUHJpb3JpdHkoKSB7XG4gICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5hbGxQcmlvcml0eSA9ICh0YXNrU3RvcmFnZS5pbmRleE9mKHRhc2spKTtcbiAgICB9KSBcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RQcmlvcml0eShsaXN0LCBpbmRleCkge1xuICAgIHRhc2tTdG9yYWdlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmKHRhc2subGlzdCAhPSBsaXN0KSByZXR1cm47XG4gICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5IDwgaW5kZXgpIHJldHVybjtcbiAgICAgICAgdGFzay5saXN0UHJpb3JpdHktLTtcbiAgICB9KVxufVxuZnVuY3Rpb24gZGVsZXRlQWxsVGFza0Zyb21EZWFkTGlzdChsaXN0KXtcbiAgICB0YXNrU3RvcmFnZS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZih0YXNrLmxpc3QgPT0gbGlzdCkge1xuICAgICAgICAgICAgdGFza1N0b3JhZ2Uuc3BsaWNlKHRhc2tTdG9yYWdlLmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICB9XG4gICAgfSlcbn1cbmZ1bmN0aW9uIHByaW9yaXR5VXAgKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIucHJpb3JVcFwiKSkgcmV0dXJuO1xuICAgIGlmIChjdXJyZW50VmlldyA9PSBcInRvZGF5XCIpIHJldHVybjtcbiAgICBpZiAoY3VycmVudFZpZXcgPT0gXCJjb21wbGV0ZWRcIikgcmV0dXJuO1xuICAgIGlmKGN1cnJlbnRWaWV3ID09IFwiYWxsXCIpe1xuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5pbmRleCA9PSAwKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB0YXNrU3RvcmFnZS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYodGFzay5hbGxQcmlvcml0eSA8IChpbmRleCAtIDEpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmFsbFByaW9yaXR5ID4gKGluZGV4KSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5hbGxQcmlvcml0eSA9PSAoaW5kZXggLSAxKSkge1xuICAgICAgICAgICAgICAgIHRhc2suYWxsUHJpb3JpdHkrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5hbGxQcmlvcml0eSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHRhc2suYWxsUHJpb3JpdHktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgfWVsc2Uge1xuICAgICAgICB2YXIgbGlzdFByaW9yID0gdGFza1N0b3JhZ2VbcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCldLmxpc3RQcmlvcml0eTtcbiAgICAgICAgaWYobGlzdFByaW9yID09IDEpIHJldHVybjtcbiAgICAgICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdCAhPSBjdXJyZW50VmlldykgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5saXN0UHJpb3JpdHkgPCAobGlzdFByaW9yIC0gMSkpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5ID4gKGxpc3RQcmlvcikpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5ID09IChsaXN0UHJpb3IgLSAxKSkge1xuICAgICAgICAgICAgICAgIHRhc2subGlzdFByaW9yaXR5Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2subGlzdFByaW9yaXR5ID09IGxpc3RQcmlvcikge1xuICAgICAgICAgICAgICAgIHRhc2subGlzdFByaW9yaXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgIH1cbiAgICB3aW5kb3cudGFza1N0b3JhZ2UgPSB0YXNrU3RvcmFnZS5zb3J0KChhLCBiKSA9PiBhLmFsbFByaW9yaXR5IC0gYi5hbGxQcmlvcml0eSk7XG4gICAgc2V0VGFza1N0b3JhZ2UoKTtcbiAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG59XG5mdW5jdGlvbiBwcmlvcml0eURvd24gKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIucHJpb3JEb3duXCIpKSByZXR1cm47XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09IFwidG9kYXlcIikgcmV0dXJuO1xuICAgIGlmIChjdXJyZW50VmlldyA9PSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG4gICAgaWYoY3VycmVudFZpZXcgPT0gXCJhbGxcIil7XG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LmluZGV4ID09ICh0YXNrU3RvcmFnZS5sZW5ndGggLSAxKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmKHRhc2suYWxsUHJpb3JpdHkgPCAoaW5kZXgpKSByZXR1cm47XG4gICAgICAgICAgICBpZih0YXNrLmFsbFByaW9yaXR5ID4gKGluZGV4ICsgMSkpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2suYWxsUHJpb3JpdHkgPT0gKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRhc2suYWxsUHJpb3JpdHkrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5hbGxQcmlvcml0eSA9PSAoaW5kZXggKyAxKSkge1xuICAgICAgICAgICAgICAgIHRhc2suYWxsUHJpb3JpdHktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxpc3RQcmlvciA9IHRhc2tTdG9yYWdlW3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXS5saXN0UHJpb3JpdHk7XG4gICAgICAgIGlmKGxpc3RQcmlvciA9PSByZW5kZXJBcnJheS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgdGFza1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdCAhPSBjdXJyZW50VmlldykgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5saXN0UHJpb3JpdHkgPCAobGlzdFByaW9yKSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYodGFzay5saXN0UHJpb3JpdHkgPiAobGlzdFByaW9yICsgMSkpIHJldHVybjtcbiAgICAgICAgICAgIGlmKHRhc2subGlzdFByaW9yaXR5ID09IChsaXN0UHJpb3IgKyAxKSkge1xuICAgICAgICAgICAgICAgIHRhc2subGlzdFByaW9yaXR5LS07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2subGlzdFByaW9yaXR5ID09IGxpc3RQcmlvcikge1xuICAgICAgICAgICAgICAgIHRhc2subGlzdFByaW9yaXR5Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgIH1cbiAgICB3aW5kb3cudGFza1N0b3JhZ2UgPSB0YXNrU3RvcmFnZS5zb3J0KChhLCBiKSA9PiBhLmFsbFByaW9yaXR5IC0gYi5hbGxQcmlvcml0eSk7XG4gICAgc2V0VGFza1N0b3JhZ2UoKTtcbiAgICByZW5kZXJUYXNrVmlldyhjdXJyZW50Vmlldyk7XG59XG5cbmV4cG9ydCB7dGFza0Zvcm1TdWJtaXQsIGRlbGV0ZVRhc2ssIHVwZGF0ZUFsbFByaW9yaXR5LCB1cGRhdGVMaXN0UHJpb3JpdHksIHNldFRhc2tTdG9yYWdlLCBwcmlvcml0eVVwLCBwcmlvcml0eURvd24sIGRlbGV0ZUFsbFRhc2tGcm9tRGVhZExpc3R9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9