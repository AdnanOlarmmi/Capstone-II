"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_ii"] = self["webpackChunkcapstone_ii"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hoverlikeIcon.svg */ \"./src/images/hoverlikeIcon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/likeIcon.svg */ \"./src/images/likeIcon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Google font */\\n/* page reset styles */\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  \\n}\\n\\n:root {\\n  --font-mont: 'Montserrat', sans-serif;\\n  --clr-dark: #fff, sans-serif;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  font-family: 'Poppins', sans-serif;\\n  min-height: 100vh;\\n}\\n\\n.flex-row {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.flex-column {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem 0.2rem;\\n  gap: 2rem;\\n  background-color: red;\\n  color: white;\\n  font-weight: 600;\\n  align-items: center;\\n  transition: all 0.3s ease-in-out;\\n  position: fixed;\\n  width: 7rem;\\n  left: -7rem;\\n  height: 100%;\\n  z-index: 1;\\n}\\n\\n.nav__item {\\n  width: max-content;\\n}\\n\\n.open {\\n  left: 0;\\n}\\n\\n.hamburger {\\n  position: absolute;\\n  top: 1rem;\\n  right: -2.5rem;\\n}\\n\\n.hamburger:hover {\\n  cursor: pointer;\\n}\\n\\n.hamburger span {\\n  display: block;\\n  background-color: black;\\n  margin: 0.4rem 0;\\n  height: 0.4rem;\\n  width: 2.1rem;\\n  border-radius: 0.15rem;\\n  transition: 0.3s all ease-in-out;\\n  position: relative;\\n}\\n\\n.change.first-bar {\\n  top: 0.8rem;\\n  transform: rotate(45deg);\\n}\\n\\n.change.second-bar {\\n  opacity: 0;\\n}\\n\\n.change.third-bar {\\n  bottom: 0.755rem;\\n  transform: rotate(-45deg);\\n}\\n\\n.brand__name b {\\n  font-size: 1.5rem;\\n}\\n\\n.item_number {\\n  border-radius: 50%;\\n  background-color: white;\\n  color: red;\\n  padding: 0.1rem 0.5rem;\\n  position: absolute;\\n  margin-top: -1.2rem;\\n  margin-left: 2rem;\\n}\\n\\n.nav__menu {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 3rem;\\n  margin-left: 1rem;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.nav__menu li {\\n  cursor: pointer;\\n  border-bottom: 2px solid transparent;\\n  transition: border 0.3s ease-in-out;\\n}\\n\\n.nav__menu li:hover {\\n  cursor: pointer;\\n  border-bottom: 2px solid white;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n.icon__hot {\\n  padding: 0.7rem 0.6rem;\\n  background-color: #00a950;\\n  border-radius: 50%;\\n  color: white;\\n  cursor: pointer;\\n  font-size: 0.7em;\\n  box-shadow: 0.7rem 0.7rem 1rem rgba(185, 184, 184, 0.6);\\n}\\n\\n.icon__like {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  opacity: 0.15;\\n  background-repeat: no-repeat;\\n  cursor: pointer;\\n  transition: all 0.2s ease-in-out;\\n  color: transparent;\\n  padding: 0.1rem 1rem;\\n}\\n\\n.icon__like:hover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  opacity: 0.4;\\n}\\n\\n.icon__like:active {\\n  opacity: 1;\\n}\\n\\nimg {\\n  object-fit: cover;\\n  border-radius: 20px;\\n  width: 40vw;\\n  height: 50vw;\\n  margin: 0.7rem;\\n}\\n\\n.food__icon {\\n  width: 100%;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.food__item {\\n  align-items: center;\\n  width: 70vw;\\n  justify-content: center;\\n  border-radius: 2rem;\\n  padding: 2rem;\\n  gap: 0.5rem;\\n  transition: all 0.4s ease-in-out;\\n  text-align: center;\\n}\\n\\n.shift .food__item {\\n  margin-left: 7rem;\\n  width: 60vw;\\n}\\n\\n.food__item:hover {\\n  border-radius: 2rem;\\n  box-shadow: 0.05rem 0.05rem 1rem rgba(185, 184, 184, 0.6);\\n}\\n\\n.food__image {\\n  text-align: center;\\n  cursor: pointer;\\n}\\n\\n.food__name,\\n.food__area {\\n  text-transform: uppercase;\\n  font-size: 0.8rem;\\n  font-weight: 550;\\n  width: 120%;\\n}\\n\\nbutton {\\n  background-color: white;\\n  border-radius: 2rem;\\n  border: 1px solid black;\\n  cursor: pointer;\\n  color: black;\\n  font-size: 0.75rem;\\n  font-weight: bold;\\n  padding: 8px 18px;\\n  transition: 0.3s all ease-in-out;\\n  margin-top: 0.5rem;\\n}\\n\\nbutton:hover {\\n  background-color: red;\\n  color: white;\\n  border: 1px solid transparent;\\n}\\n\\nbutton:active {\\n  scale: 0.85;\\n}\\n\\n.foods__container {\\n  display: grid;\\n  grid-template-columns: repeat(1, 1fr);\\n  gap: 1.75rem;\\n  margin: 0 auto;\\n  padding: 1rem;\\n}\\n\\n/* comment popUp */\\n.model {\\n  display: none;\\n  background-color: rgba(0, 255, 255, 0.633);\\n  backdrop-filter: blur(3px);\\n  height: 100vh;\\n  width: 100%;\\n  position: fixed;\\n  z-index: 999;\\n  top: 0;\\n}\\n\\n.model__content {\\n  background-color: rgb(255,255,255);\\n  width: 80vw;\\n  height: 95vh;\\n  margin: 1rem auto;\\n  overflow-y: scroll;\\n  scroll-behavior: smooth;\\n}\\n\\n.model__content::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.model__head {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.model__name {\\n  text-align: center;\\n  font-weight: 500;\\n}\\n\\n.model__prop {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 20px;\\n}\\n\\n.model__item {\\n  font-family: var(--font-mont);\\n  font-size: 15px;\\n  font-weight: 300;\\n  color: rgb(158,158,158);\\n}\\n\\n.span__content {\\n  color: rgb(84,84,84);\\n  font-weight: 400;\\n}\\n\\n.show{\\n  display: block;\\n}\\n\\n.close {\\n  float: right;\\n  display: block;\\n  border: none;\\n  background: none;\\n  position: relative;\\n  bottom: 10px;\\n  left: -50px;\\n}\\n\\n.x__btn {\\n  font-size: 4rem;\\n  position: fixed;\\n}\\n\\n/* model comment */\\n.form__title {\\n  font-family: var(--font-mont);\\n  text-align: center;\\n  color: rgb(134,134,134);\\n  font-weight: 500;\\n}\\n\\n.post__comment {\\n  padding: 2rem 0;\\n  text-align: left;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.post__comment__title {\\n  font-family: var(--font-mont);\\n  font-weight: 400;\\n  color: rgb(134,134,134);\\n}\\n\\n.listed__comment {\\n  font-family: var(--font-mont);\\n  font-size: 15px;\\n  color: rgb(39,39,39);\\n  font-weight: 500;\\n}\\n\\n/* model form */\\n.comment__form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  width: 70rem;\\n  margin: auto;\\n}\\n\\n.comment__name,\\n.comment {\\n  font-family: 'poppins', serif;\\n  padding: 0.5rem;\\n  outline: none;\\n  border: none;\\n  box-shadow: 0 0 0 1px rgb(217,217,217);;\\n  border-radius: 3px;\\n  letter-spacing: 0.03rem;\\n}\\n\\n.form__btn {\\n  width: fit-content;\\n  padding: 0.5rem 0.8rem;\\n}\\n\\n/* footer */\\nfooter {\\n  margin-top: auto;\\n  background-color: rgb(32, 32, 32);\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  color: white;\\n  font-size: 0.9rem;\\n}\\n\\nfooter a {\\n  font-weight: bold;\\n}\\n\\n.creator {\\n  font-weight: 400;\\n  color: red;\\n}\\n\\n\\n/* form message */\\n\\n@keyframes slideDown {\\n  0% {\\n    transform: scale(0.1);\\n  }\\n\\n  100% {\\n    transform: scale(1);\\n  }\\n}\\n\\n.message {  \\n  text-align: center;\\n  padding: 1rem;\\n  animation: slideDown 0.3s linear;\\n}\\n\\n.success,\\n.danger {\\n  line-height: 0;\\n  display: none;\\n}\\n\\n.success{\\n  color: green;\\n}\\n\\n.danger {\\n  color: red;\\n}\\n\\n\\n\\n\\n@media only screen and (min-width: 768px) {\\n  body {\\n    overflow-x: hidden;\\n  }\\n\\n  nav {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    padding: 1rem 2rem;\\n    position: static;\\n    width: 100vw;\\n  }\\n\\n  .hamburger {\\n    display: none;\\n  }\\n\\n  .nav__menu {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 3rem;\\n  }\\n\\n  .foods__container {\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n\\n  .food__item {\\n    width: 40vw;\\n  }\\n\\n  .shift .food__item {\\n    margin-left: 0;\\n    width: 40vw;\\n  }\\n\\n  img {\\n    width: 25vw;\\n    height: 40vw;\\n  }\\n}\\n\\n@media only screen and (min-width: 1200px) {\\n  .foods__container {\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n  }\\n\\n  .food__item {\\n    width: 20vw;\\n  }\\n\\n  .shift .food__item {\\n    width: 20vw;\\n  }\\n\\n  img {\\n    width: 12.5vw;\\n    height: 20vw;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-ii/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-ii/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://capstone-ii/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-ii/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-ii/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-ii/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-ii/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-ii/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-ii/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-ii/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-ii/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_renderLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderLikes.js */ \"./src/modules/renderLikes.js\");\n/* harmony import */ var _modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n/* harmony import */ var _modules_addLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _modules_renderFoodItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderFoodItems.js */ \"./src/modules/renderFoodItems.js\");\n/* harmony import */ var _modules_commentModel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/commentModel.js */ \"./src/modules/commentModel.js\");\n/* harmony import */ var _modules_countComment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/countComment.js */ \"./src/modules/countComment.js\");\n/* harmony import */ var _modules_displayComments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/displayComments.js */ \"./src/modules/displayComments.js\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n\n\n\n\n\n\n\n\n\n\n\nwindow.onload = async () => {\n  (0,_modules_displayComments_js__WEBPACK_IMPORTED_MODULE_7__.listComments)(await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_8__.getComments)());\n  (0,_modules_countComment_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_8__.getComments)());\n};\n\nconst foodContainerEl = document.querySelector('main');\nconst hamburgerEl = document.querySelector('.hamburger');\nconst navEl = document.querySelector('nav');\nconst barsEl = document.getElementsByClassName('bar');\nconst itemsNumberEl = document.querySelector('.item_number');\n\nitemsNumberEl.innerHTML = (0,_modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst toggleNav = () => {\n  hamburgerEl.addEventListener('click', () => {\n    navEl.classList.toggle('open');\n    [...barsEl].forEach((item) => {\n      item.classList.toggle('change');\n    });\n    foodContainerEl.classList.toggle('shift');\n  });\n};\n\nfoodContainerEl.addEventListener('click', async (e) => {\n  if (e.target.className === 'icon__like') {\n    await (0,_modules_addLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.parentNode.id);\n    (0,_modules_renderLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n});\n\n(0,_modules_renderLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_renderFoodItems_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\ntoggleNav();\n\n// const ShowTriggerBtn = document.querySelector('.popbtn__trigger');\n// const closeBtn = document.querySelector('.x__btn');\n// const model = document.querySelector('.model');\n\n// const modelWindow = () => {\n//   ShowTriggerBtn.addEventListener('click', () => {\n//     model.classList.add('show');\n//   });\n\n//   closeBtn.addEventListener('click', () => {\n//     model.classList.remove('show');\n//   });\n\n//   window.addEventListener('click', (e) => {\n//     if(e.target === model) {\n//       model.classList.remove('show');\n//     }\n//   });\n// }\n// modelWindow()\n\n//# sourceURL=webpack://capstone-ii/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n\n\nconst addLikes = async (id) => {\n  const like = {\n    item_id: id,\n    likes: 1,\n  };\n  await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.likeApiEndPoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(like),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);\n\n//# sourceURL=webpack://capstone-ii/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiKey = 'o3ZbADYRisQBifGzcDCQ';\nconst baseApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}`;\n\nconst getComments = async () => {\n  const response = await fetch(`${baseApi}/comments?item_id=item1`);\n  const result = await response.json();\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://capstone-ii/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentModel.js":
/*!*************************************!*\
  !*** ./src/modules/commentModel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createXBtn\": () => (/* binding */ createXBtn),\n/* harmony export */   \"modelWindow\": () => (/* binding */ modelWindow)\n/* harmony export */ });\nconst modelContent = document.querySelector('.model__content');\nconst createXBtn = () => {\n  const div = document.createElement('div');\n  const xBtn = document.createElement('button');\n  const span = document.createElement('span');\n\n  div.classList.add('model__container');\n  span.classList.add('x__btn');\n  xBtn.classList.add('close');\n\n  span.innerHTML = '&times';\n  xBtn.setAttribute('type', 'button');\n\n  xBtn.appendChild(span);\n  div.appendChild(xBtn);\n  return div;\n};\n\nconst createItemDetailsEl = () => {\n  const divHead = document.createElement('div');\n  const modelImg = document.createElement('img');\n  const modelName = document.createElement('h2');\n  const modelUl = document.createElement('ul');\n  const Li1 = document.createElement('li');\n  const Li2 = document.createElement('li');\n  const Li3 = document.createElement('li');\n  const Li4 = document.createElement('li');\n  const span1 = document.createElement('span');\n  const span2 = document.createElement('span');\n  const span3 = document.createElement('span');\n  const span4 = document.createElement('span');\n  const span5 = document.createElement('span');\n  const span6 = document.createElement('span');\n  const span7 = document.createElement('span');\n  const span8 = document.createElement('span');\n\n  divHead.classList.add('model__head');\n  modelImg.classList.add('model__img');\n  modelName.classList.add('model__name');\n  modelUl.classList.add('model__prop');\n  Li1.classList.add('model__item');\n  Li2.classList.add('model__item');\n  Li3.classList.add('model__item');\n  Li4.classList.add('model__item');\n  span5.classList.add('span__content');\n  span6.classList.add('span__content');\n  span7.classList.add('span__content');\n  span8.classList.add('span__content');\n\n  modelImg.setAttribute('src', '');\n  modelImg.setAttribute('alt', 'Item1');\n\n  modelName.innerText = 'Item1';\n  span1.innerText = 'Fuel: ';\n  span2.innerText = 'Fuel: ';\n  span3.innerText = 'Fuel: ';\n  span4.innerText = 'Fuel: ';\n  span5.innerText = 'Titanium';\n  span6.innerText = 'Titanium';\n  span7.innerText = 'Titanium';\n  span8.innerText = 'Titanium';\n\n  Li1.append(span1, span5);\n  Li2.append(span2, span6);\n  Li3.append(span3, span7);\n  Li4.append(span4, span8);\n  modelUl.append(Li1, Li2, Li3, Li4);\n  divHead.append(modelImg, modelName, modelUl);\n\n  return divHead;\n};\n\nconst createCommentEl = () => {\n  const postUl = document.createElement('ul');\n  const postH2 = document.createElement('h2');\n\n  postUl.classList.add('post__comment');\n  postH2.classList.add('post__comment__title');\n\n  postH2.innerText = 'Comments';\n  postUl.append(postH2);\n  return postUl;\n};\n\nconst createformEl = () => {\n  const formDiv = document.createElement('div');\n  const h3El = document.createElement('h3');\n  const formEl = document.createElement('form');\n  const input = document.createElement('input');\n  const textarea = document.createElement('textarea');\n  const button = document.createElement('button');\n  const divMsg = document.createElement('div');\n  const p1 = document.createElement('p');\n  const p2 = document.createElement('p');\n\n  formDiv.classList.add('model__form');\n  h3El.classList.add('form__title');\n  formEl.classList.add('comment__form');\n  input.classList.add('comment__name');\n  textarea.classList.add('comment');\n  button.classList.add('form__btn');\n  divMsg.classList.add('message');\n  p1.classList.add('success');\n  p2.classList.add('danger');\n\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', 'Your name');\n  textarea.setAttribute('placeholder', 'insights');\n  textarea.setAttribute('cols', '20');\n  textarea.setAttribute('rows', '10');\n  button.setAttribute('type', 'submit');\n\n  h3El.innerText = 'Add a comment';\n  button.innerText = 'Comment';\n  p1.innerText = 'Form successfully submited';\n  p2.innerText = 'Please fill in the form';\n\n  divMsg.append(p1, p2);\n  formEl.append(input, textarea, button, divMsg);\n  formDiv.append(h3El, formEl);\n\n  return formDiv;\n};\n\nmodelContent.append(\n  createXBtn(),\n  createItemDetailsEl(),\n  createCommentEl(),\n  createformEl(),\n);\n\nconst ShowTriggerBtn = document.querySelector('.popbtn__trigger');\nconst closeBtn = document.querySelector('.x__btn');\nconst modelWindow = () => {\n  const model = document.querySelector('.model');\n\n  ShowTriggerBtn.addEventListener('click', () => {\n    model.classList.add('show');\n  });\n\n  closeBtn.addEventListener('click', () => {\n    model.classList.remove('show');\n  });\n\n  window.addEventListener('click', (e) => {\n    if (e.target === model) {\n      model.classList.remove('show');\n    }\n  });\n};\nmodelWindow();\n\n\n//# sourceURL=webpack://capstone-ii/./src/modules/commentModel.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"foodBaseUrl\": () => (/* binding */ foodBaseUrl),\n/* harmony export */   \"likeApiEndPoint\": () => (/* binding */ likeApiEndPoint)\n/* harmony export */ });\n/* harmony import */ var _foodItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodItems.js */ \"./src/modules/foodItems.js\");\n\n\nconst likeKey = 'o3ZbADYRisQBifGzcDCQ';\n\nconst likeURL = 'https://us-central1-involvement-api.cloudfunctions.net';\n\nconst likeApiEndPoint = `${likeURL}/capstoneApi/apps/${likeKey}/likes`;\n\nconst foodURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';\n\nconst foodBaseUrl = [];\n\n_foodItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n  foodBaseUrl.push(`${foodURL}=${item}`);\n});\n\n\n\n//# sourceURL=webpack://capstone-ii/./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/countComment.js":
/*!*************************************!*\
  !*** ./src/modules/countComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = async () => {\n  const commentConnter = document.querySelectorAll('.listed__comment');\n  const postCount = document.querySelector('.post__comment__title');\n  const counter = (await commentConnter.length);\n  postCount.innerText += `(${counter})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://capstone-ii/./src/modules/countComment.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentsContainer\": () => (/* binding */ commentsContainer),\n/* harmony export */   \"listComments\": () => (/* binding */ listComments)\n/* harmony export */ });\nconst commentsContainer = document.querySelector('.post__comment');\nconst listComments = (post) => {\n  if (!post) {\n    commentsContainer.innerHTML = 'No post listed';\n    return;\n  }\n\n  post.sort((a, b) => b.comments - a.comments)\n    .forEach((each) => {\n      commentsContainer.innerHTML += `\n    <li class=\"listed__comment\">\n    <span>${each.creation_date}</span>\n    <span>${each.username}: </span>\n    <span>${each.comment}</span>\n    </li>\n    `;\n    });\n};\n\n\n//# sourceURL=webpack://capstone-ii/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/foodItems.js":
/*!**********************************!*\
  !*** ./src/modules/foodItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst foodItems = ['Arrabiata', 'Pizza', 'Shawarma', 'Burger', 'Salmon Prawn Risotto', 'Steak Diane', 'Tandoori chicken', 'Noodles'];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodItems);\n\n//# sourceURL=webpack://capstone-ii/./src/modules/foodItems.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _foodItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodItems.js */ \"./src/modules/foodItems.js\");\n\n\nconst itemsCounter = () => _foodItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n//# sourceURL=webpack://capstone-ii/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/renderFoodItems.js":
/*!****************************************!*\
  !*** ./src/modules/renderFoodItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n\n\nconst foodContainerEl = document.querySelector('.foods__container');\n\nconst renderFoodItems = async () => {\n  let markup = '';\n\n  _config_js__WEBPACK_IMPORTED_MODULE_0__.foodBaseUrl.forEach(async (item) => {\n    try {\n      const res = await fetch(item);\n      const data = await res.json();\n      if (!res.ok) {\n        foodContainerEl.innerHTML = 'Server Down';\n      }\n\n      data.meals.forEach((item) => {\n        markup += `\n            <section class=\"food__item flex-column\">\n            <div class=\"food__icon flex-row\">\n            <span class=\"icon__hot\">HOT</span>\n            <span class=\"icon\" id=${item.idMeal}>\n            <span class=\"icon__like\"></span>\n            <span class=\"like__count\"></span>\n            </span>\n            </div>\n            <div class=\"food__image\">\n            <img src=\"${item.strMealThumb}\" alt=\"asdf\"></div>\n            <p class=\"food__name\">${item.strMeal}</p>\n            <p class=\"food__area\">${item.strArea}</p>\n            <button>See More</button>\n            </section>`;\n        foodContainerEl.innerHTML = markup;\n      });\n    } catch (err) {\n      foodContainerEl.innerHTML = err;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFoodItems);\n\n//# sourceURL=webpack://capstone-ii/./src/modules/renderFoodItems.js?");

/***/ }),

/***/ "./src/modules/renderLikes.js":
/*!************************************!*\
  !*** ./src/modules/renderLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n\n\nconst likeCountEl = document.getElementsByClassName('like__count');\n\nconst renderLikes = () => {\n  setTimeout(async () => {\n    try {\n      const res = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.likeApiEndPoint);\n      const data = await res.json();\n      const likeCount = [...likeCountEl];\n      data.forEach(async (item) => {\n        likeCount.forEach((itemid) => {\n          if (item.item_id === itemid.parentNode.id) {\n            itemid.innerHTML = item.likes;\n          }\n        });\n      });\n    } catch (err) {\n      likeCountEl.item = err;\n    }\n  }, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLikes);\n\n//# sourceURL=webpack://capstone-ii/./src/modules/renderLikes.js?");

/***/ }),

/***/ "./src/images/hoverlikeIcon.svg":
/*!**************************************!*\
  !*** ./src/images/hoverlikeIcon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a5102905b390d3aa264.svg\";\n\n//# sourceURL=webpack://capstone-ii/./src/images/hoverlikeIcon.svg?");

/***/ }),

/***/ "./src/images/likeIcon.svg":
/*!*********************************!*\
  !*** ./src/images/likeIcon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0f47eee815e47a0178f.svg\";\n\n//# sourceURL=webpack://capstone-ii/./src/images/likeIcon.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);