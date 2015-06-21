/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Popin = (function () {
	  function Popin(options) {
	    _classCallCheck(this, Popin);

	    this.triggerElements = document.querySelectorAll(options.triggerElements);
	    this.overlay = document.querySelector(options.overlay ? options.overlay : '.overlay');
	    this.currentPopin = null;
	    this.closeElements = document.querySelectorAll(options.closeElements ? options.closeElements : '.popin-close-button');
	    this.closeHTML = options.closeHTML;
	    this.content = options.content;

	    this.overlay ? '' : this.createOverlay();
	    this.bind();
	  }

	  _createClass(Popin, [{
	    key: 'bind',
	    value: function bind() {
	      var _this = this;

	      [].forEach.call(this.triggerElements, function (element) {

	        if (_this.content) {
	          var target = document.getElementById(element.getAttribute('data-target'));

	          target.innerHTML = _this.content;
	        }

	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          _this.show(e);
	        }, false);
	      });

	      [].forEach.call(this.closeElements, function (element) {

	        if (_this.closeHTML) {
	          element.innerHTML = _this.closeHTML;
	        }

	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          _this.hide();
	        }, false);
	      });

	      this.overlay.addEventListener('click', function (e) {
	        _this.hide();
	      }, false);
	    }
	  }, {
	    key: 'show',
	    value: function show(e) {
	      var target = e.target.getAttribute('data-target');
	      this.popin = this.popin ? this.popin : document.getElementById(target);

	      this.popin.classList.add('popin--visible');
	      this.showOverlay();
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.hideOverlay();
	      this.popin.classList.remove('popin--visible');
	    }
	  }, {
	    key: 'showOverlay',
	    value: function showOverlay() {
	      this.overlay.classList.add('overlay--visible');
	    }
	  }, {
	    key: 'hideOverlay',
	    value: function hideOverlay() {
	      this.overlay.classList.remove('overlay--visible');
	    }
	  }, {
	    key: 'createOverlay',
	    value: function createOverlay() {
	      console.log(this.overlay);
	      var overlay = document.createElement('div');
	      overlay.className = 'overlay';

	      this.overlay = overlay;
	      document.body.appendChild(overlay);
	    }
	  }]);

	  return Popin;
	})();

	module.exports = Popin;

/***/ }
/******/ ]);