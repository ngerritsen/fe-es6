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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _headerComponent = __webpack_require__(1);

	var _headerComponent2 = _interopRequireDefault(_headerComponent);

	var _headerReducer = __webpack_require__(2);

	var _headerReducer2 = _interopRequireDefault(_headerReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* global cb */

	cb.store.registerReducer('header', _headerReducer2.default);

	var headerEl = document.querySelector('.header');

	new _headerComponent2.default(headerEl, cb.store);

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _headerActions = __webpack_require__(19);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HIGHLIGHTED_CLASSNAME = 'is-highlighted';

	var HeaderComponent = function () {
	  /**
	   * @param {Element} el
	   * @param {DynamicStore} store
	   */
	  function HeaderComponent(el, store) {
	    _classCallCheck(this, HeaderComponent);

	    this._el = el;

	    el.addEventListener('click', function () {
	      return store.dispatch((0, _headerActions.toggleHeaderHighlight)());
	    });
	    store.subscribeTo('header.highlight', this._toggleHighlight.bind(this));
	  }

	  /**
	   * @private
	   */


	  _createClass(HeaderComponent, [{
	    key: '_toggleHighlight',
	    value: function _toggleHighlight(highlight) {
	      if (!highlight) {
	        this._el.classList.remove(HIGHLIGHTED_CLASSNAME);
	        return;
	      }

	      this._el.classList.add(HIGHLIGHTED_CLASSNAME);
	    }
	  }]);

	  return HeaderComponent;
	}();

	exports.default = HeaderComponent;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = headerReducer;
	var initialState = { highlight: false };

	function headerReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  switch (action.type) {
	    case 'TOGGLE_HEADER_HIGHLIGHT':
	      return { highlight: !state.highlight };
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 19:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var toggleHeaderHighlight = exports.toggleHeaderHighlight = function toggleHeaderHighlight() {
	  return { type: 'TOGGLE_HEADER_HIGHLIGHT' };
	};

/***/ }

/******/ });