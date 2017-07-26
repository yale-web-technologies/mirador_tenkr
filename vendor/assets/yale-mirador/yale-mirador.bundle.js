// Yale-Mirador v0.6.3-24-g4bfe975 built Wed Jul 26 2017 13:17:33 GMT-0400 (EDT)
window._YaleMiradorVersion="Yale-Mirador v0.6.3-24-g4bfe975 built Wed Jul 26 2017 13:17:33 GMT-0400 (EDT)";


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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getLogger;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getLogger() {
  if (!instance) {
    instance = new Logger();
  }
  return instance;
}

var instance = null;

var Logger = function () {
  function Logger(logLevel, trace) {
    _classCallCheck(this, Logger);

    this.DEBUG = 0;
    this.INFO = 1;
    this.WARNING = 2;
    this.ERROR = 3;

    this._logLevel = logLevel || this.INFO;
    this._trace = trace || false;
  }

  _createClass(Logger, [{
    key: 'setLogLevel',
    value: function setLogLevel(logLevel) {
      this._logLevel = logLevel;
    }
  }, {
    key: 'log',
    value: function log() {
      if (this._trace) {
        console.trace.apply(console, arguments);
      } else {
        console.log.apply(console, arguments);
      }
    }
  }, {
    key: 'error',
    value: function error() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift('ERROR');
      this.log.apply(this, args);
    }
  }, {
    key: 'warning',
    value: function warning() {
      if (this._logLevel <= this.WARNING) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('WARNING');
        this.log.apply(this, args);
      }
    }
  }, {
    key: 'info',
    value: function info() {
      if (this._logLevel <= this.INFO) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('INFO');
        this.log.apply(this, args);
      }
    }
  }, {
    key: 'debug',
    value: function debug() {
      if (this._logLevel <= this.DEBUG) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('DEBUG');
        this.log.apply(this, args);
      }
    }
  }]);

  return Logger;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
__webpack_require__(49);
__webpack_require__(50);

var Anno = joosugi.AnnotationWrapper;
var AnnotationExplorer = joosugi.AnnotationExplorer;
var AnnotationExplorerDialog = joosugiUI.AnnotationExplorerDialog;
var AnnotationToc = joosugi.AnnotationToc;
var annoUtil = joosugi.annotationUtil;

exports.Anno = Anno;
exports.AnnotationExplorer = AnnotationExplorer;
exports.AnnotationExplorerDialog = AnnotationExplorerDialog;
exports.AnnotationToc = AnnotationToc;
exports.annoUtil = annoUtil;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxy = __webpack_require__(38);

var _miradorProxy2 = _interopRequireDefault(_miradorProxy);

var _windowProxy = __webpack_require__(5);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var MiradorProxyManager = function () {
  function MiradorProxyManager() {
    _classCallCheck(this, MiradorProxyManager);

    // Mirador instance doesn't have an ID. The ID here is conferred by
    // the MiradorProxyManager.
    this._miradorProxiesMap = {}; // Mirador instances { id: miradorInstance }
  }

  _createClass(MiradorProxyManager, [{
    key: 'addMirador',
    value: function addMirador(miradorId, mirador) {
      logger.debug('MiradorProxyManager#addMirador', mirador);
      var miradorProxy = this._miradorProxiesMap[miradorId];
      if (miradorProxy) {
        throw 'MiradorProxyManager#addMirador duplicate ID ' + miradorId;
      } else {
        miradorProxy = new _miradorProxy2.default(mirador, miradorId);
        this._miradorProxiesMap[miradorId] = miradorProxy;
      }
      return miradorProxy;
    }
  }, {
    key: 'getMiradorProxies',
    value: function getMiradorProxies() {
      return Object.values(this._miradorProxiesMap);
    }
  }, {
    key: 'getMiradorProxy',
    value: function getMiradorProxy(miradorId) {
      logger.debug('MiradorProxyManager#getMiradorProxy miradorId:', miradorId, 'proxies:', this._miradorProxiesMap);
      return this._miradorProxiesMap[miradorId] || null;
    }

    /**
     * @returns {WindowProxy[]} a list of window proxies for all windows in all Mirador instances
     */

  }, {
    key: 'getAllWindowProxies',
    value: function getAllWindowProxies() {
      var windowProxies = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(this._miradorProxiesMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var miradorProxy = _step.value;

          windowProxies = windowProxies.concat(miradorProxy.getWindowProxies());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return windowProxies;
    }
  }, {
    key: 'getWindowProxyById',
    value: function getWindowProxyById(windowId) {
      logger.debug('MiradorProxyManager#getWindowProxyById windowId:', windowId);
      var window = this.getWindowById(windowId);
      return window ? new _windowProxy2.default(window) : null;
    }
  }, {
    key: 'getWindowById',
    value: function getWindowById(windowId) {
      logger.debug('MiradorProxyManager#getWindowById windowId:', windowId);
      var window = null;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.values(this._miradorProxiesMap)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var miradorProxy = _step2.value;

          window = miradorProxy.getWindowById(windowId);
          if (window) {
            return window;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
  }, {
    key: 'getCurrentCanvasIdByWindowId',
    value: function getCurrentCanvasIdByWindowId(windowId) {
      var windowProxy = this.getWindowProxyById(windowId);
      if (windowProxy) {
        return windowProxy.getCurrentCanvasId();
      } else {
        return null;
      }
    }

    // XXX This works because only one Mirador window is assumed.
    // It should be refactored later.

  }, {
    key: 'anyId',
    value: function anyId() {
      return Object.keys(this._miradorProxies)[0];
    }

    // Subscribe to the same event from all Mirador instances

  }, {
    key: 'subscribe',
    value: function subscribe(eventName, callback) {
      logger.debug('MiradorProxyManager#subscribe ', eventName, callback);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.values(this._miradorProxiesMap)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var miradorProxy = _step3.value;

          miradorProxy.subscribe(eventName, callback);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return MiradorProxyManager;
}();

var instance = null;

function getMiradorProxyManager(destroyOld) {
  if (!instance || destroyOld) {
    instance = new MiradorProxyManager();
  }
  return instance;
};

exports.default = getMiradorProxyManager;


Mirador.getMiradorProxyManager = getMiradorProxyManager; // to be called from Mirador core.

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getStateStore;

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var registeredKeys = new Set(['annotationBackendUrl', 'annotationLayers', 'annotationsOverlay', 'copyrighted', 'copyrightedImageServiceUrl', 'disableAuthz', 'fixAnnoCellHeight', 'hideTagsInAnnotation', 'lastSelectedLayer', 'layerIndexMap', 'projectId', 'tagHierarchy', 'textDirection', 'tocSpec', 'tooltipStyles']);

/**
 * Holds states for the app, which will optionally persist if local storgae is
 * available.
 * The distinction of setString, setObject, setBoolean was necessary
 * because we have to assume only the "string" type is supported
 * currently for local storage on all browsers.
 */

var StateStore = function () {
  function StateStore() {
    _classCallCheck(this, StateStore);

    this._settings = {};
    this._localStorageAvailable = storageAvailable('localStorage');
  }

  // For values that are not persisted


  _createClass(StateStore, [{
    key: 'getTransient',
    value: function getTransient(key) {
      this._checkKey(key);
      return this._settings[key];
    }

    // For values that are not persisted

  }, {
    key: 'setTransient',
    value: function setTransient(key, value) {
      logger.debug('StateStore#setTransient', key, value);
      this._checkKey(key);
      this._settings[key] = value;
    }
  }, {
    key: 'getString',
    value: function getString(key) {
      logger.debug('StateStore#getString', key);
      this._checkKey(key);
      var value = this._settings[key];
      if (!value) {
        value = this._localStorageAvailable ? localStorage.getItem(key) : null;
        this._settings[key] = value;
      }
      return value;
    }
  }, {
    key: 'setString',
    value: function setString(key, value) {
      logger.debug('StateStore#setString', key, value, this._localStorageAvailable);
      this._checkKey(key);
      this._settings[key] = value;
      if (this._localStorageAvailable) {
        localStorage.setItem(key, value);
      }
    }
  }, {
    key: 'getBoolean',
    value: function getBoolean(key) {
      return this.getString(key) === 'true';
    }
  }, {
    key: 'setBoolean',
    value: function setBoolean(key, value) {
      this.setString(key, value ? 'true' : 'false');
    }
  }, {
    key: 'getObject',
    value: function getObject(key) {
      logger.debug('StateStore#getObject', key);
      this._checkKey(key);
      var value = this.getString(key);
      return value ? JSON.parse(value) : null;
    }
  }, {
    key: 'setObject',
    value: function setObject(key, value) {
      logger.debug('StateStore#setObject', key, value);
      this._checkKey(key);
      var stringValue = JSON.stringify(value);
      this.setString(key, stringValue);
    }
  }, {
    key: '_checkKey',
    value: function _checkKey(key) {
      if (!registeredKeys.has(key)) {
        throw 'ERROR Invalid key for StateStore ' + key;
      }
    }
  }]);

  return StateStore;
}();

/**
 * param {string} type "localStorage" or "sessionStorage"
 */


function storageAvailable(type) {
  try {
    var storage = window[type],
        x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

var _instance = null;

function getStateStore() {
  if (!_instance) {
    _instance = new StateStore();
  }
  return _instance;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getApp;

__webpack_require__(35);

var _import = __webpack_require__(1);

var _annotationSource = __webpack_require__(8);

var _annotationSource2 = _interopRequireDefault(_annotationSource);

var _annotationTocCache = __webpack_require__(22);

var _annotationTocCache2 = _interopRequireDefault(_annotationTocCache);

var _fatalError = __webpack_require__(10);

var _fatalError2 = _interopRequireDefault(_fatalError);

var _annotationCache = __webpack_require__(11);

var _annotationCache2 = _interopRequireDefault(_annotationCache);

var _configFetcher = __webpack_require__(24);

var _configFetcher2 = _interopRequireDefault(_configFetcher);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _pageController = __webpack_require__(6);

var _pageController2 = _interopRequireDefault(_pageController);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

var _grid = __webpack_require__(36);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(51);

//import MainMenu from './widgets/main-menu'; //deprecated
//import './util/jquery-tiny-pubsub-trace'; // import this only for debugging!

var logger = (0, _logger2.default)();
var instance = null;
var annotationExplorer = null;
var annotationSource = null;

function getApp() {
  if (!instance) {
    instance = new App({
      rootElement: 'ym_grid',
      dataElement: jQuery('#\\{\\{id\\}\\}') // {{id}} gets replaced with the Mirador instance ID by the Grid
    });
  }
  return instance;
}

var App = function () {
  function App(options) {
    _classCallCheck(this, App);

    this._setupLogger();
    logger.debug('App#constructor');
    this.options = jQuery.extend({
      rootElement: null,
      dataElement: null
    }, options);
  }

  _createClass(App, [{
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var configFetcher, settingsFromHtml, apiUrl, projectId, error, settingsFromApi, settings, grid;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initHandlebars();
                _context.next = 3;
                return (0, _annotationCache2.default)();

              case 3:
                // wait for annotation cache to be set up

                configFetcher = (0, _configFetcher2.default)();
                settingsFromHtml = configFetcher.fetchSettingsFromHtml(this.options.dataElement);
                apiUrl = settingsFromHtml.apiUrl, projectId = settingsFromHtml.projectId;
                error = false;

                // Retrieve settings from the server

                _context.next = 9;
                return configFetcher.fetchSettingsFromApi(apiUrl, projectId).catch(function (reason) {
                  logger.error('Failed to retrieve server setting', reason);
                  error = true;
                  (0, _fatalError2.default)(reason, 'Retrieving settings from server');
                });

              case 9:
                settingsFromApi = _context.sent;


                logger.debug('Settings from API:', settingsFromApi);
                this._preConfigureTinyMce(settingsFromApi.buildPath + '/');

                settings = jQuery.extend(settingsFromHtml, settingsFromApi);
                _context.next = 15;
                return this.initState(settings);

              case 15:

                this._setupAnnotationTocCache();

                grid = new _grid2.default(this.options.rootElement);
                //const mainMenu = new MainMenu();

                (0, _pageController2.default)().init({
                  //mainMenu: mainMenu,
                  grid: grid,
                  settings: settings,
                  state: (0, _stateStore2.default)()
                });

                return _context.abrupt('return', this);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'initHandlebars',
    value: function initHandlebars() {
      Handlebars.registerHelper('t', function (i18nKey) {
        return i18next.t(i18nKey);
      });
    }
  }, {
    key: 'initState',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(settings) {
        var state, explorer, layers;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logger.debug('App#initState settings:', settings);
                state = (0, _stateStore2.default)();


                state.setTransient('annotationBackendUrl', settings.endpointUrl);
                explorer = this.getAnnotationExplorer();


                state.setTransient('projectId', settings.projectId);
                state.setTransient('disableAuthz', settings.disableAuthz);

                _context2.next = 8;
                return explorer.getLayers();

              case 8:
                layers = _context2.sent;

                state.setTransient('annotationLayers', layers);

                state.setTransient('tocSpec', settings.tocSpec);
                state.setTransient('tagHierarchy', settings.tagHierarchy);

                state.setTransient('copyrighted', settings.copyrighted);
                state.setTransient('copyrightedImageServiceUrl', settings.copyrightedImageServiceUrl);

                if (settings.ui) {
                  state.setBoolean('fixAnnoCellHeight', settings.ui.fixAnnoCellHeight);
                  state.setString('textDirection', settings.ui.textDirection);
                  state.setTransient('annotationsOverlay', settings.ui.annotationsOverlay);
                  state.setTransient('tooltipStyles', settings.ui.tooltipStyles);
                  state.setTransient('hideTagsInAnnotation', settings.ui.hideTagsInAnnotation);
                }

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initState(_x) {
        return _ref2.apply(this, arguments);
      }

      return initState;
    }()
  }, {
    key: '_setupLogger',
    value: function _setupLogger() {
      if (window.location.hash === '#debug') {
        logger.setLogLevel(logger.DEBUG);
      } else {
        logger.setLogLevel(logger.INFO);
      }
      _import.annoUtil.setLogger(logger);
    }
  }, {
    key: '_preConfigureTinyMce',
    value: function _preConfigureTinyMce(miradorBuildPath) {
      logger.debug('App#preConfigureTinyMce buildPath:', miradorBuildPath);
      tinymce.base = miradorBuildPath + '/';
      tinymce.setup();
    }
  }, {
    key: '_setupAnnotationTocCache',
    value: function _setupAnnotationTocCache() {
      var tocSpec = (0, _stateStore2.default)().getTransient('tagHierarchy');
      if (tocSpec) {
        this._annotationTocCache = new _annotationTocCache2.default({
          tocSpec: tocSpec,
          annotationExplorer: this.getAnnotationExplorer()
        });
      } else {
        this._annotationTocCache = null;
      }
    }
  }, {
    key: 'getAnnotationExplorer',
    value: function getAnnotationExplorer() {
      if (!annotationExplorer) {
        annotationExplorer = new _import.AnnotationExplorer({
          dataSource: this.getAnnotationSource(),
          logger: logger
        });
      }
      return annotationExplorer;
    }
  }, {
    key: 'getAnnotationSource',
    value: function getAnnotationSource() {
      if (!annotationSource) {
        var annotationBackendUrl = (0, _stateStore2.default)().getTransient('annotationBackendUrl');
        annotationSource = new _annotationSource2.default({
          prefix: annotationBackendUrl
        });
      }
      return annotationSource;
    }
  }, {
    key: 'getAnnotationTocCache',
    value: function getAnnotationTocCache() {
      return this._annotationTocCache;
    }
  }]);

  return App;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var WindowProxy = function () {
  function WindowProxy(window) {
    _classCallCheck(this, WindowProxy);

    //logger.debug('WindowProxy#constructor window:', window);
    this.window = window;
  }

  /**
   * ID of the window
   */


  _createClass(WindowProxy, [{
    key: 'getWindowId',
    value: function getWindowId() {
      return this.window.id;
    }
  }, {
    key: 'getManifest',
    value: function getManifest() {
      return this.window.manifest;
    }
  }, {
    key: 'getCurrentCanvasId',
    value: function getCurrentCanvasId() {
      return this.window.canvasID;
    }
  }, {
    key: 'getCurrentCanvas',
    value: function getCurrentCanvas() {
      var canvases = this.getCanvases();
      var canvasId = this.getCurrentCanvasId();
      var matches = canvases.filter(function (canvas) {
        return canvas['@id'] === canvasId;
      });
      return matches[0];
    }
  }, {
    key: 'setCurrentCanvasId',
    value: function setCurrentCanvasId(canvasId, options) {
      logger.debug('WindowProxy#setCurrentCanvasId canvasId:', canvasId, 'options', options);
      this.window.setCurrentCanvasID(canvasId, options);
    }
  }, {
    key: 'getImageView',
    value: function getImageView() {
      return this.window.focusModules.ImageView;
    }

    /**
     * Annotation endpoint
     */

  }, {
    key: 'getEndPoint',
    value: function getEndPoint() {
      return this.window.endpoint;
    }
  }, {
    key: 'getCanvases',
    value: function getCanvases() {
      return this.window.manifest.getCanvases();
    }
  }, {
    key: 'getAnnotationsList',
    value: function getAnnotationsList() {
      return this.window.annotationsList;
    }
  }, {
    key: 'getSvgOverlay',
    value: function getSvgOverlay() {
      var drawTool = this.getDrawTool();
      return drawTool ? drawTool.svgOverlay : null;
    }
  }, {
    key: 'getDrawTool',
    value: function getDrawTool() {
      var imageView = this.getImageView();
      return imageView ? imageView.annotationsLayer.drawTool : null;
    }
  }, {
    key: 'getSidePanel',
    value: function getSidePanel() {
      return this.window.sidePanel;
    }

    /**
     * @param {*} klass CSS class for the root element of sidebar content (child of .tabContentArea)
     */

  }, {
    key: 'getSidePanelTabContentElement',
    value: function getSidePanelTabContentElement(klass) {
      return this.getSidePanel().element.find('.tabContentArea > .' + klass);
    }
  }]);

  return WindowProxy;
}();

exports.default = WindowProxy;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getPageController;

var _import = __webpack_require__(1);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

var _miradorWrapper = __webpack_require__(40);

var _miradorWrapper2 = _interopRequireDefault(_miradorWrapper);

var _session = __webpack_require__(9);

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getPageController() {
  if (!instance) {
    instance = new PageController();
  }
  return instance;
};

var instance = null;
var logger = (0, _logger2.default)();

/**
 * Code for the HTML page that hosts Mirador instance(s)
 * The page contains Mirador and  surrounding components, e.g., annoatation windows.
 */

var PageController = function () {
  function PageController() {
    _classCallCheck(this, PageController);
  }

  _createClass(PageController, [{
    key: 'init',
    value: function init(options) {
      this.options = jQuery.extend({
        //mainMenu: null,
        grid: null,
        settings: null, // settings retrieved from remote API
        state: null
      }, options);
      logger.debug('PageController#constructor options:', options);

      var miradorOptions = jQuery.extend(this.options.settings, {
        miradorId: Mirador.genUUID(),
        defaultSettings: Mirador.DEFAULT_SETTINGS,
        isEditor: _session2.default.isEditor()
      });

      this._miradorWrapper = this._createMirador(miradorOptions);
      this._miradorProxy = this._miradorWrapper.getMiradorProxy();
      this._miradorId = this._miradorProxy.getId();

      this._tocSpec = this.options.state.getTransient('tocSpec');
      this._annotationTocCache = (0, _app2.default)().getAnnotationTocCache();
      this._annotationExplorer = (0, _app2.default)().getAnnotationExplorer();

      this._bindEvents(miradorOptions);
    }

    // TODO: make it per Mirador instance

  }, {
    key: 'getConfig',
    value: function getConfig() {
      return this.miradorWrapper.getConfig();
    }
  }, {
    key: '_createMirador',
    value: function _createMirador(miradorOptions) {
      try {
        // Should create a container in the grid first before instantiating Mirador
        this.options.grid.addMiradorWindow(miradorOptions.miradorId);
        return new _miradorWrapper2.default({
          grid: this.options.grid,
          miradorOptions: miradorOptions
        });
      } catch (e) {
        var msg = 'PageController#_createMirador ' + e;
        logger.error(msg);
        throw msg;
      }
    }
  }, {
    key: '_showAnnotation',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(windowId, annoId) {
        var grid, windowProxy, canvasId, annotations, annotation, layerId, targetWindow, derivedAnnotation, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _annoWindow, annoWindow;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logger.debug('PageController#showAnnotation windowId:', windowId, 'annoId:' + annoId);
                grid = this.options.grid;
                windowProxy = this._miradorProxy.getWindowProxyById(windowId);
                canvasId = windowProxy.getCurrentCanvasId();
                _context.next = 6;
                return this._annotationExplorer.getAnnotations({ canvasId: canvasId });

              case 6:
                annotations = _context.sent;
                annotation = annotations.filter(function (anno) {
                  return anno['@id'] === annoId;
                })[0];
                layerId = annotation.layerId;
                targetWindow = null;

                if (!(this._tocSpec && this._tocSpec.defaultLayer)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return this._getAnnotationByTagsAndLayer((0, _import.Anno)(annotation).tags, this._tocSpec.defaultLayer, canvasId);

              case 13:
                derivedAnnotation = _context.sent;

                layerId = this._tocSpec.defaultLayer;

                if (derivedAnnotation) {
                  annotation = derivedAnnotation;
                } else {
                  logger.warning('PageController#_showAnnotation no annotation found for layer', layerId);
                }

              case 16:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 19;


                for (_iterator = Object.values(grid.getAnnotationWindows())[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _annoWindow = _step.value;

                  if (_annoWindow.getCurrentLayerId() === layerId) {
                    targetWindow = _annoWindow;
                  }
                }

                _context.next = 27;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context['catch'](19);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 27:
                _context.prev = 27;
                _context.prev = 28;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 30:
                _context.prev = 30;

                if (!_didIteratorError) {
                  _context.next = 33;
                  break;
                }

                throw _iteratorError;

              case 33:
                return _context.finish(30);

              case 34:
                return _context.finish(27);

              case 35:
                if (!targetWindow) {
                  _context.next = 40;
                  break;
                }

                _context.next = 38;
                return targetWindow.moveToAnnotation(annotation['@id'], canvasId);

              case 38:
                _context.next = 47;
                break;

              case 40:
                if (!annotation) {
                  _context.next = 46;
                  break;
                }

                _context.next = 43;
                return grid.addAnnotationWindow({
                  miradorId: this._miradorId,
                  imageWindowId: windowId,
                  layerId: layerId,
                  annotationId: annotation['@id']
                }).catch(function (reason) {
                  logger.error('PageController#_showAnnotation addAnnotationWindow failed <- ' + reason);
                });

              case 43:
                annoWindow = _context.sent;
                _context.next = 47;
                break;

              case 46:
                logger.error('PageController#_showAnnotation annotation not found in annotation window, annoId: ' + annotation['@id']);

              case 47:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[19, 23, 27, 35], [28,, 30, 34]]);
      }));

      function _showAnnotation(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return _showAnnotation;
    }()
  }, {
    key: '_getAnnotationByTagsAndLayer',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(tags, layerId, canvasId) {
        var toc, tocNode, annos;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._annotationTocCache.getToc(canvasId);

              case 2:
                toc = _context2.sent;
                tocNode = toc.getNodeFromTags(tags);

                if (tocNode) {
                  _context2.next = 7;
                  break;
                }

                logger.warning('PageController#_getAnnotationByTagsAndLayer tocNode not found for tags', tags);
                return _context2.abrupt('return', null);

              case 7:
                annos = _import.annoUtil.findAllAnnotationsForTocNode(tocNode).filter(function (anno) {
                  return anno.layerId === layerId;
                });
                return _context2.abrupt('return', annos[0]);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getAnnotationByTagsAndLayer(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return _getAnnotationByTagsAndLayer;
    }()
  }, {
    key: '_bindEvents',
    value: function _bindEvents(options) {
      var _this2 = this;

      logger.debug('PageController#_bindEvents options:', options);
      var _this = this;

      jQuery(window).resize(function () {
        _this.options.grid.resize();
      });

      this._miradorProxy.subscribe('YM_IMAGE_WINDOW_TOOLTIP_ANNO_CLICKED', function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(event, windowId, annoId) {
          var windowProxy, canvasId, tocPanel, annoTocMenu, toc, annotation;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  logger.debug('MiradorWrapper:SUB:YM_IMAGE_WINDOW_TOOLtip_ANNO_CLICKED windowId: ' + windowId + ', annoId: ' + annoId);
                  windowProxy = _this2._miradorProxy.getWindowProxyById(windowId);
                  canvasId = windowProxy.getCurrentCanvasId();
                  tocPanel = windowProxy.getSidePanelTabContentElement('ym-annotation-toc');
                  annoTocMenu = tocPanel.data('AnnotationTableOfContent');


                  _this2._showAnnotation(windowId, annoId);

                  _context3.next = 8;
                  return _this2._annotationTocCache.getToc(canvasId);

                case 8:
                  toc = _context3.sent;
                  annotation = toc.annotations.filter(function (anno) {
                    return anno['@id'] === annoId;
                  })[0];


                  if (annotation && annoTocMenu) {
                    annoTocMenu.scrollToTags(annotation.tocTags);
                  }

                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2);
        }));

        return function (_x6, _x7, _x8) {
          return _ref3.apply(this, arguments);
        };
      }());

      jQuery.subscribe('ANNOWIN_ANNOTATION_CLICKED', function (event, params) {
        logger.debug('PageController has received event ANNOWIN_ANNOTATION_CLICKED with options', params);
        var windowProxy = _this2._miradorProxy.getWindowProxyById(params.imageWindowId);
        var imageView = windowProxy.getImageView();
        var annoMap = {};

        if (params.canvasId === windowProxy.getCurrentCanvasId()) {
          // the clicked annotation belong to the current canvas
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = windowProxy.getAnnotationsList()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _anno = _step2.value;

              annoMap[_anno['@id']] = _anno;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var anno = params.annotation;

          if (!_import.annoUtil.hasTargetOnCanvas(anno)) {
            var annos = _import.annoUtil.findTargetAnnotationsOnCanvas(anno, annoMap);
            console.log('H1 annos', annos);
            anno = annos[0];
          }
          if (anno) {
            imageView.zoomToAnnotation(anno);
            imageView.panToAnnotation(anno);
            imageView.annotationsLayer.drawTool.updateHighlights(anno);
          } else {
            logger.error('PageController:SUB:ANNOWIN_ANNOTATION_CLICKED annotation not found');
          }
        } else {
          // need to load the canvas that the annotation is targeting
          imageView._annotationToBeFocused = params.annotation;
          windowProxy.setCurrentCanvasId(params.canvasId, {
            eventOriginatorType: 'AnnotationWindow'
          });
        }
      });
    }
  }]);

  return PageController;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // Return true if the device is mobile or a tablet.
  isMobileOrTablet: function isMobileOrTablet() {
    return function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        return true;
      } else {
        return false;
      }
    }(navigator.userAgent || navigator.vendor || window.opera);
  },

  getValues: function getValues(object) {
    var values = [];
    jQuery.each(object, function (key, value) {
      values.push(value);
    });
    return values;
  },

  waitUntil: function waitUntil(testFunc, execFunc, ms, count) {
    var _this = this;
    if (ms === undefined) {
      ms = 100;
    }
    if (count === undefined) {
      count = 1;
    }
    if (count > 5) {
      this.logger.debug('util.waitUntil max try num exceeded: giving up');
      this.logger.debug('testFunc: ' + testFunc);
      this.logger.debug('execFunc: ' + execFunc);
      return;
    }
    if (testFunc()) {
      execFunc();
    } else {
      this.logger.debug('util.waitUntil trial ' + count + ' failed. Retrying in ' + ms * 2 + ' ms.');
      setTimeout(function () {
        _this.waitUntil(testFunc, execFunc, ms * 2, count + 1);
      }, ms);
    }
  },

  directionClasses: ['horizontal-lr', 'horizontal-rl', 'vertical-lr', 'vertical-rl'],

  setTextDirectionClass: function setTextDirectionClass(jQueryElem, newClass) {
    if (!this.directionClasses.includes(newClass)) {
      (0, _logger2.default)().debug('util.setTextDriectionClass no class provided, using horizontal-lr');
      newClass = 'horizontal-lr';
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.directionClasses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var klass = _step.value;

        if (klass === newClass) {
          jQueryElem.addClass(klass);
        } else {
          jQueryElem.removeClass(klass);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _annotationCache = __webpack_require__(11);

var _annotationCache2 = _interopRequireDefault(_annotationCache);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _yaleEndpoint = __webpack_require__(12);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _pageController = __webpack_require__(6);

var _pageController2 = _interopRequireDefault(_pageController);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

// Implements inteface between Joosugi annotation explorer and the annotation server

var AnnotationSource = function () {
  function AnnotationSource(options) {
    _classCallCheck(this, AnnotationSource);

    this.options = jQuery.extend({
      prefix: null,
      state: (0, _stateStore2.default)()
    }, options);
    this.layers = null;
  }

  _createClass(AnnotationSource, [{
    key: 'getLayers',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var layers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logger.debug('AnnotationSource#getLayers');
                layers = null;

                if (!this.layers) {
                  _context.next = 7;
                  break;
                }

                logger.debug('AnnotationSource#getLayers hit cache', this.layers);
                layers = this.layers;
                _context.next = 11;
                break;

              case 7:
                _context.next = 9;
                return this._getRemoteLayers();

              case 9:
                layers = _context.sent;

                this._updateLayerIndex(layers);

              case 11:
                return _context.abrupt('return', layers);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLayers() {
        return _ref.apply(this, arguments);
      }

      return getLayers;
    }()
  }, {
    key: '_getRemoteLayers',
    value: function _getRemoteLayers() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var projectId = _this.options.state.getTransient('projectId');
        var disableAuthz = _this.options.state.getTransient('disableAuthz');
        var url = _this.options.prefix + '/layers';

        if (projectId && !disableAuthz) {
          url += '?group_id=' + projectId;
        }
        logger.debug('AnnotationSource#_getRemoteLayers url:', url);

        jQuery.ajax({
          url: url,
          type: 'GET',
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          success: function success(data, textStatus, jqXHR) {
            logger.debug('AnnotationSource#getLayers layers: ', data);
            _this.layers = data;
            resolve(data);
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            var msg = 'AnnotationSource#getLayers error status code: ' + jqXHR.status + ', textStatus: ' + textStatus + ', errorThrown: ' + errorThrown + ', URL: ' + url;
            logger.error(msg);
            reject(msg);
          }
        });
      });
    }
  }, {
    key: '_updateLayerIndex',
    value: function _updateLayerIndex(layers) {
      logger.debug('AnnotationSource#_updateLayerIndex');

      if (!this.options.state.getTransient('layerIndexMap')) {
        var map = {};
        var count = 0;
        layers.forEach(function (layer) {
          map[layer['@id']] = count;
          ++count;
        });
        this.options.state.setTransient('layerIndexMap', count > 0 ? map : null);
      }
      return layers;
    }

    /**
     * Options: {
     *   canvasId: <string>, // required,
     *   layerId: <string> // optional
     * }
     *
     * @param {object} options
     */

  }, {
    key: 'getAnnotations',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(options) {
        var canvasId, layerId, cache, annotations;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                canvasId = options.canvasId;
                layerId = options.layerId;
                _context2.next = 4;
                return (0, _annotationCache2.default)();

              case 4:
                cache = _context2.sent;
                annotations = null;

                if (!cache) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 9;
                return cache.getAnnotationsPerCanvas(canvasId);

              case 9:
                annotations = _context2.sent;

                logger.debug('AnnotationSource#getAnnotations from cache:', annotations);

              case 11:
                if (annotations) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 14;
                return this._getRemoteAnnotations(canvasId);

              case 14:
                annotations = _context2.sent;

                if (!cache) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 18;
                return cache.setAnnotationsPerCanvas(canvasId, annotations);

              case 18:
                this._attachEndpoint(annotations);

              case 19:
                //this._attachEndpoint(annotations);

                if (layerId) {
                  annotations = annotations.filter(function (anno) {
                    return anno.layerId === layerId;
                  });
                }

                return _context2.abrupt('return', annotations);

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAnnotations(_x) {
        return _ref2.apply(this, arguments);
      }

      return getAnnotations;
    }()
  }, {
    key: '_attachEndpoint',
    value: function _attachEndpoint(annotations) {
      logger.debug('AnnotationSource#_attachEndpoint annotations:', annotations);
      var endpoint = (0, _yaleEndpoint.getEndpoint)();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = annotations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var anno = _step.value;

          anno.endpoint = endpoint;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_detachEndpoint',
    value: function _detachEndpoint(annotations) {
      logger.debug('AnnotationSource#_detachEndpoint annotations:', annotations);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = annotations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var anno = _step2.value;

          delete anno.endpoint;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: '_getRemoteAnnotations',
    value: function _getRemoteAnnotations(canvasId) {
      var _this2 = this;

      logger.debug('AnnotationSource#_getRemoteAnnotations canvas: ' + canvasId);
      return new Promise(function (resolve, reject) {
        var url = _this2.options.prefix + '/getAnnotationsViaList?canvas_id=' + encodeURIComponent(canvasId);
        logger.debug('AnnotationSource#_getRemoteAnnotations url: ', url);
        var annotations = [];

        jQuery.ajax({
          url: url,
          type: 'GET',
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          success: function success(data, textStatus, jqXHR) {
            logger.debug('AnnotationSource#_getRemoteAnnotations data: ', data);
            try {
              var _annotations = [];

              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var item = _step3.value;

                  var annotation = item.annotation;
                  annotation.layerId = item.layer_id;
                  _annotations.push(_this2._toMiradorAnnotation(annotation));
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              resolve(_annotations);
            } catch (e) {
              logger.error('AnnotationSource#_getRemoteAnnotations error parsing data for canvas', canvasId, 'data:', data, 'error:', e);
              resolve([]);
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            var msg = 'AnnotationSource#getAnnotations failed to get annotations from ' + url;
            reject(msg);
          }
        });
      });
    }
  }, {
    key: 'createAnnotation',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(oaAnnotation) {
        var _this3 = this;

        var cache, layerId, annotation, url, request;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                logger.debug('AnnotationSource#createAnnotation oaAnnotation:', oaAnnotation);
                _context4.next = 3;
                return (0, _annotationCache2.default)();

              case 3:
                cache = _context4.sent;
                layerId = oaAnnotation.layerId;
                annotation = this._toBackendAnnotation(oaAnnotation);
                url = this.options.prefix + '/annotations';
                request = {
                  layer_id: layerId,
                  annotation: annotation
                };


                logger.debug('AnnotationSource#createAnnotation payload:', request);

                return _context4.abrupt('return', new Promise(function (resolve, reject) {
                  jQuery.ajax({
                    url: url,
                    type: 'POST',
                    dataType: 'json',
                    data: JSON.stringify(request),
                    contentType: 'application/json; charset=utf-8',
                    success: function () {
                      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(data) {
                        var annotation, oaAnnotation, tocCache;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                logger.debug('AnnotationSource#createAnnotation creation successful on the annotation server:', data);
                                annotation = data;
                                oaAnnotation = _this3._toMiradorAnnotation(annotation);

                                oaAnnotation.layerId = layerId;
                                oaAnnotation.endpoint = (0, _yaleEndpoint.getEndpoint)();

                                if (!cache) {
                                  _context3.next = 8;
                                  break;
                                }

                                _context3.next = 8;
                                return cache.invalidateAllCanvases();

                              case 8:
                                tocCache = (0, _app2.default)().getAnnotationTocCache();

                                if (tocCache) {
                                  tocCache.invalidate();
                                }
                                resolve(oaAnnotation);

                              case 11:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        }, _callee3, _this3);
                      }));

                      return function success(_x3) {
                        return _ref4.apply(this, arguments);
                      };
                    }(),
                    error: function error(jqXHR, textStatus, errorThrown) {
                      var msg = 'Failed to create annotation: ' + textStatus + ' ' + jqXHR.status + ' ' + errorThrown;
                      logger.error(msg);
                      reject(msg);
                    }
                  });
                }));

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createAnnotation(_x2) {
        return _ref3.apply(this, arguments);
      }

      return createAnnotation;
    }()
  }, {
    key: 'updateAnnotation',
    value: function () {
      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(oaAnnotation) {
        var _this4 = this;

        var cache, annotation, url, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _annotationCache2.default)();

              case 2:
                cache = _context6.sent;
                annotation = this.__toBackendAnnotation(oaAnnotation);
                url = this.options.prefix + '/annotations';
                data = {
                  layer_id: [oaAnnotation.layerId],
                  annotation: annotation
                };


                logger.debug('AnnotationSource#updateAnnotation payload:', data);

                return _context6.abrupt('return', new Promise(function (resolve, reject) {
                  jQuery.ajax({
                    url: url,
                    type: 'PUT',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify(data),
                    success: function () {
                      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(data, textStatus, jqXHR) {
                        var annotation, tocCache;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                logger.debug('AnnotationSource#updateAnnotation successful', data);
                                annotation = _this4._toMiradorAnnotation(data);

                                annotation.layerId = oaAnnotation.layerId;
                                annotation.endpoint = (0, _yaleEndpoint.getEndpoint)();

                                if (!cache) {
                                  _context5.next = 7;
                                  break;
                                }

                                _context5.next = 7;
                                return cache.invalidateAllCanvases();

                              case 7:
                                tocCache = (0, _app2.default)().getAnnotationTocCache();


                                if (tocCache) {
                                  tocCache.invalidate();
                                }

                                resolve(annotation);

                              case 10:
                              case 'end':
                                return _context5.stop();
                            }
                          }
                        }, _callee5, _this4);
                      }));

                      return function success(_x5, _x6, _x7) {
                        return _ref6.apply(this, arguments);
                      };
                    }(),
                    error: function error(jqXHR, textStatus, errorThrown) {
                      var msg = 'Failed to update annotation: ' + textStatus + ' ' + jqXHR.status + ' ' + errorThrown;
                      reject(msg);
                    }
                  });
                }));

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateAnnotation(_x4) {
        return _ref5.apply(this, arguments);
      }

      return updateAnnotation;
    }()
  }, {
    key: 'deleteAnnotation',
    value: function () {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(annotationId) {
        var _this5 = this;

        var cache, url;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                logger.debug('AnnotationSource#deleteAnnotations annotationId:', annotationId);
                _context8.next = 3;
                return (0, _annotationCache2.default)();

              case 3:
                cache = _context8.sent;
                url = this.options.prefix + '/' + annotationId.replace(/^https?:\/\/.*?(\/.*)$/, '$1');
                //const url = annotationId;

                return _context8.abrupt('return', new Promise(function (resolve, reject) {
                  jQuery.ajax({
                    url: url,
                    type: 'DELETE',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    success: function () {
                      var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(data, textStatus, jqXHR) {
                        var tocCache;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                logger.debug('AnnotationSource#deleteAnnotation success data:', data);

                                if (!cache) {
                                  _context7.next = 4;
                                  break;
                                }

                                _context7.next = 4;
                                return cache.invalidateAllCanvases();

                              case 4:
                                tocCache = (0, _app2.default)().getAnnotationTocCache();

                                if (tocCache) {
                                  tocCache.invalidate();
                                }
                                resolve();

                              case 7:
                              case 'end':
                                return _context7.stop();
                            }
                          }
                        }, _callee7, _this5);
                      }));

                      return function success(_x9, _x10, _x11) {
                        return _ref8.apply(this, arguments);
                      };
                    }(),
                    error: function error(jqXHR, textStatus, errorThrown) {
                      var msg = 'AnnotationSource#deleteAnnotation failed for annotationId: ' + annotationId;
                      reject(msg);
                    }
                  });
                }));

              case 6:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function deleteAnnotation(_x8) {
        return _ref7.apply(this, arguments);
      }

      return deleteAnnotation;
    }()
  }, {
    key: 'updateAnnotationListOrder',
    value: function () {
      var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(canvasId, layerId, annoIds) {
        var _this6 = this;

        var cache, url, data;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _annotationCache2.default)();

              case 2:
                cache = _context10.sent;
                url = this.options.prefix + '/resequenceList';
                data = {
                  canvas_id: canvasId,
                  layer_id: layerId,
                  annotation_ids: annoIds
                };
                return _context10.abrupt('return', new Promise(function (resolve, reject) {
                  jQuery.ajax({
                    url: url,
                    type: 'PUT',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify(data),
                    success: function () {
                      var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(data, textStatus, jqXHR) {
                        var tocCache;
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                logger.debug('AnnotationSource#updateAnnotationListOrder successful', data);

                                if (!cache) {
                                  _context9.next = 4;
                                  break;
                                }

                                _context9.next = 4;
                                return cache.invalidateAllCanvases();

                              case 4:
                                tocCache = (0, _app2.default)().getAnnotationTocCache();

                                if (tocCache) {
                                  tocCache.invalidate();
                                }
                                resolve(data);

                              case 7:
                              case 'end':
                                return _context9.stop();
                            }
                          }
                        }, _callee9, _this6);
                      }));

                      return function success(_x15, _x16, _x17) {
                        return _ref10.apply(this, arguments);
                      };
                    }(),
                    error: function error(jqXHR, textStatus, errorThrown) {
                      var msg = 'AnnotationSource#updateAnnotation failed: ' + textStatus + ' ' + jqXHR.status + ' ' + errorThrown;
                      logger.error(msg);
                      reject(msg);
                    }
                  });
                }));

              case 6:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateAnnotationListOrder(_x12, _x13, _x14) {
        return _ref9.apply(this, arguments);
      }

      return updateAnnotationListOrder;
    }()

    // Convert annotation to have format required by Mirador

  }, {
    key: '_toMiradorAnnotation',
    value: function _toMiradorAnnotation(annotation) {
      var anno = jQuery.extend(true, {}, annotation);
      var target = anno.on;

      if (target && target.selector && target.selector['@type'] === 'oa:Choice') {
        // if the new (dual) mirador strategy format
        target = [target];
      }

      anno.on = target;

      return anno;
    }

    // Convert annotation to correct format to be saved in backend

  }, {
    key: '_toBackendAnnotation',
    value: function _toBackendAnnotation(annotation) {
      var endpoint = annotation.endpoint;
      delete annotation.endpoint;
      var anno = jQuery.extend(true, {}, annotation);
      annotation.endpoint = endpoint;

      var target = anno.on;

      // XXX temporary fix until the annotation server supports multiple targets
      if (target instanceof Array) {
        if (target.length !== 1) {
          logger.error('AnnotationSource#__toBackendAnnotation unexpected target length', target.length);
        }
        target = target[0];
      }

      anno.target = target;

      return anno;
    }
  }]);

  return AnnotationSource;
}();

exports.default = AnnotationSource;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  serverSettings: null,

  /**
   * Returns true if the user is logged in via CAS.
   */
  loggedIn: function loggedIn() {
    return Cookies.get('loggedIn') == 'true';
  },

  isEditor: function isEditor() {
    return Cookies.get('isEditor') == 'true';
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fatalError;
// Show messages for an irrecoverable error after wiping out everything
function fatalError(error) {
  console.log('ERROR:', error);
  var rootElem = jQuery(template());
  if (error === 'FATAL') {
    throw error;
  } else {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    args.push(error);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var arg = _step.value;

        rootElem.append(jQuery('<p>' + arg + '</p>'));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    jQuery(document.body).empty().append(rootElem);
    throw 'FATAL';
  }
}

var template = Handlebars.compile(['<div class="fatal_error">', '  <div class="header">Error</div>', '</div>'].join(''));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getAnnotationCache;

var _import = __webpack_require__(1);

var _annotationCacheIndexeddb = __webpack_require__(20);

var _annotationCacheIndexeddb2 = _interopRequireDefault(_annotationCacheIndexeddb);

var _annotationCacheInMemory = __webpack_require__(19);

var _annotationCacheInMemory2 = _interopRequireDefault(_annotationCacheInMemory);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

function getAnnotationCache() {
  if (!instance) {
    instance = new AnnotationCache();
    return instance.init();
  } else {
    return Promise.resolve(instance);
  }
};

var instance = null;

var AnnotationCache = function () {
  function AnnotationCache() {
    _classCallCheck(this, AnnotationCache);

    this._dbCache = new _annotationCacheIndexeddb2.default();
    this._memCache = new _annotationCacheInMemory2.default();
    this._valid = false;
    this._inMemoryCache = {};
  }

  _createClass(AnnotationCache, [{
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._dbCache.isValid()) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this._dbCache.deleteDb();

              case 3:
                _context.next = 5;
                return this._dbCache.init();

              case 5:
                return _context.abrupt('return', this);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()

    /**
     * @returns {object} a Promise
     */

  }, {
    key: 'getAnnotationsPerCanvas',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(canvasId) {
        var annotations;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logger.debug('AnnotationCache#getAnnotationsPerCanvas', canvasId);
                annotations = this._memCache.getAnnotationsPerCanvas(canvasId);

                if (!(annotations !== null)) {
                  _context2.next = 7;
                  break;
                }

                logger.debug('mem cache hit', canvasId, annotations);
                return _context2.abrupt('return', Promise.resolve(annotations));

              case 7:
                if (!this._dbCache.isValid()) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 10;
                return this._dbCache.getAnnotationsPerCanvas(canvasId);

              case 10:
                annotations = _context2.sent;

                console.log('dadada dbcache annos:', annotations);
                if (annotations !== null) {
                  logger.debug('db cache hit', canvasId, annotations);
                  this._memCache.setAnnotationsPerCanvas(canvasId, annotations);
                }
                return _context2.abrupt('return', Promise.resolve(annotations));

              case 16:
                return _context2.abrupt('return', Promise.resolve(null));

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAnnotationsPerCanvas(_x) {
        return _ref2.apply(this, arguments);
      }

      return getAnnotationsPerCanvas;
    }()

    /**
     * @returns {object} a Promise
     */

  }, {
    key: 'setAnnotationsPerCanvas',
    value: function setAnnotationsPerCanvas(canvasId, data) {
      logger.debug('AnnotationCache#setAnnotationsPerCanvas canvas:', canvasId, 'data:', data);
      this._memCache.setAnnotationsPerCanvas(canvasId, data);
      if (this._dbCache.isValid()) {
        return this._dbCache.setAnnotationsPerCanvas(canvasId, data);
      } else {
        return Promise.resolve();
      }
    }
  }, {
    key: 'invalidateAllCanvases',
    value: function invalidateAllCanvases() {
      logger.debug('AnnotationCache#invalidateAllCanvases');
      this._memCache.invalidateAllCanvases();
      if (this._dbCache.isValid()) {
        return this._dbCache.invalidateAllCanvases();
      }
    }
  }, {
    key: 'invalidateCanvasId',
    value: function invalidateCanvasId(canvasId) {
      logger.debug('AnnotationCache#invalidateCanvasId canvasId:', canvasId);
      this._memCache.invalidateCanvasId(canvasId);
      if (this._dbCache.isValid()) {
        return this._dbCache.invalidateCanvasId(canvasId);
      }
    }
  }]);

  return AnnotationCache;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEndpoint = exports.YaleEndpoint = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _annotationSource = __webpack_require__(8);

var _annotationSource2 = _interopRequireDefault(_annotationSource);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _errorDialog = __webpack_require__(47);

var _errorDialog2 = _interopRequireDefault(_errorDialog);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

var _pageController = __webpack_require__(6);

var _pageController2 = _interopRequireDefault(_pageController);

var _modalAlert = __webpack_require__(15);

var _modalAlert2 = _interopRequireDefault(_modalAlert);

var _session = __webpack_require__(9);

var _session2 = _interopRequireDefault(_session);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();
var _explorer = null;
var _instances = [];

function getEndpoint() {
  logger.debug('getEndpoint _instances:', _instances.length, _instances);
  return _instances[0];
}

var YaleEndpoint = function () {
  function YaleEndpoint(options) {
    _classCallCheck(this, YaleEndpoint);

    jQuery.extend(this, {
      annotationsList: [],
      prefix: null,
      dfd: null
    }, options);
    this._explorer = (0, _app2.default)().getAnnotationExplorer();
    _instances.push(this);
  }

  _createClass(YaleEndpoint, [{
    key: 'search',
    value: function search(options) {
      var _this2 = this;

      logger.debug('YaleEndpoint#search options:', options);
      var canvasId = options.uri;
      var progressPane = (0, _modalAlert2.default)();
      var errorPane = (0, _errorDialog2.default)();

      progressPane.show('Loading annotations...');
      this._explorer.getAnnotations({ canvasId: canvasId }).catch(function (reason) {
        var msg = 'ERROR YaleEndpoint#search getAnnotations - ' + reason;
        throw msg;
      }).then(function (annotations) {
        logger.debug('YaleEndpoint#search annotations:', annotations);
        progressPane.hide();
        _this2.annotationsList = annotations;
        try {
          _this2.dfd.resolve(true);
        } catch (e) {
          logger.error('YaleEndpoint#search dfd.resolve failed - ', e);
        }
      }).catch(function (reason) {
        logger.error('YaleEndpoint#search failed - ', reason);
        progressPane.hide();
        errorPane.show('annotations');
      });
    }
  }, {
    key: 'create',
    value: function create(oaAnnotation, successCallback, errorCallback) {
      var _this = this;

      if (this.userAuthorize('create', oaAnnotation)) {
        this._create(oaAnnotation).catch(function (reason) {
          var msg = 'YaleEndpoint#create _create failed - ' + reason;
          throw msg;
        }).then(function (anno) {
          logger.debug('YaleEndpoint#create successful with anno: ', anno);
          if (typeof successCallback === 'function') {
            successCallback(anno);
          }
        }).catch(function (reason) {
          logger.error('ERROR YaleEndpoint#create successCallback failed');
          errorCallback();
        });
      } else {
        (0, _errorDialog2.default)().show('authz_create');
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    }
  }, {
    key: '_create',
    value: function _create(oaAnnotation) {
      logger.debug('YaleEndpoint#_create oaAnnotation:', oaAnnotation);
      var _this = this;

      return this._explorer.createAnnotation(oaAnnotation).catch(function (reason) {
        var msg = 'YaleEndpoint#_create createAnnotation failed - ' + reason;
        throw msg;
      }).then(function (anno) {
        _this.annotationsList.push(anno);
        return anno;
      });
    }
  }, {
    key: 'update',
    value: function update(oaAnnotation, successCallback, errorCallback) {
      var _this = this;
      var annotationId = oaAnnotation['@id'];

      if (this.userAuthorize('update', oaAnnotation)) {
        this._update(oaAnnotation).catch(function (reason) {
          var msg = 'ERROR YaleEndpoint#update _update failed - ' + reason;
          logger.error(msg);
          errorCallback();
        }).then(function (anno) {
          if (typeof successCallback === 'function') {
            successCallback(anno);
          }
        });
      } else {
        (0, _errorDialog2.default)().show('authz_update');
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    }
  }, {
    key: '_update',
    value: function _update(oaAnnotation) {
      var _this3 = this;

      logger.debug('YaleEndpoint#_update oaAnnotation:', oaAnnotation);
      var _this = this;
      var annotationId = oaAnnotation['@id'];

      var promise = Promise.resolve().then(function () {
        return _this3._explorer.updateAnnotation(oaAnnotation);
      }).catch(function (reason) {
        var msg = 'ERROR YaleEndpoint#_update updateAnnotation - ' + reason;
        throw msg;
      }).then(function (anno) {
        jQuery.each(_this.annotationsList, function (index, value) {
          if (value['@id'] === annotationId) {
            _this.annotationsList[index] = anno;
            return false;
          }
        });
        return anno;
      });
      return promise;
    }
  }, {
    key: 'deleteAnnotation',
    value: function deleteAnnotation(annotationId, successCallback, errorCallback) {
      logger.debug('YaleEndpoint#deleteAnnotation annotationId: ' + annotationId);
      var _this = this;

      if (this.userAuthorize('delete', null)) {
        this._deleteAnnotation(annotationId).then(function () {
          if (typeof successCallback === 'function') {
            successCallback();
          }
        }).catch(function (reason) {
          logger.error('YaleEndpoint#deleteAnnotation _deleteAnnotation failed:', reason);
          errorCallback();
        });
      } else {
        logger.info('YaleEndpoint#delete user not authorized');
        (0, _errorDialog2.default)().show('authz_update');
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    }
  }, {
    key: '_deleteAnnotation',
    value: function _deleteAnnotation(annotationId) {
      logger.debug('YaleEndpoint#_deleteAnnotation annotationId:', annotationId);
      var _this = this;

      var promise = this._explorer.deleteAnnotation(annotationId).catch(function (reason) {
        var msg = 'ERROR YaleEndpoint#_deleteAnnotation explorer.deleteAnnotation - ' + reason;
        throw msg;
      }).then(function (anno) {
        _this.annotationsList = jQuery.grep(_this.annotationsList, function (value, index) {
          return value['@id'] !== annotationId;
        });
        return anno;
      });
      return promise;
    }
  }, {
    key: 'getLayers',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logger.debug('YaleEndpoint#getLayers');
                return _context.abrupt('return', this._explorer.getLayers());

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLayers() {
        return _ref.apply(this, arguments);
      }

      return getLayers;
    }()
  }, {
    key: 'updateOrder',
    value: function updateOrder(canvasId, layerId, annoIds, successCallback, errorCallback) {
      logger.debug('YaleEndpoint#updateOrder canvasId:', canvasId, 'layerId:', layerId, 'annoIds:', annoIds);
      var _this = this;

      if (this.userAuthorize('update', null)) {
        this._updateOrder(canvasId, layerId, annoIds).catch(function (reason) {
          var msg = 'YaleEndpoint#updateOrder _upadteOrder failed: ' + reason;
          throw msg;
        }).then(function () {
          if (typeof successCallback === 'function') {
            successCallback();
          }
        }).catch(function (reason) {
          logger.error('YaleEndpoint#updateOrder', reason);
          errorCallback();
        });
      } else {
        logger.info('YaleEndpoint#updateOrder user not authorized');
        (0, _errorDialog2.default)().show('authz_update');
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    }
  }, {
    key: '_updateOrder',
    value: function _updateOrder(canvasId, layerId, annoIds) {
      return this._explorer.updateAnnotationListOrder(canvasId, layerId, annoIds);
    }
  }, {
    key: 'userAuthorize',
    value: function userAuthorize(action, annotation) {
      if (action === 'create' || action === 'update' || action === 'delete') {
        return _session2.default.isEditor();
      } else {
        return true;
      }
    }
  }, {
    key: 'set',
    value: function set(prop, value, options) {
      logger.debug('YaleEndpoint#set prop:', prop, ', value:', value, ', options:', options);
      if (options) {
        this[options.parent][prop] = value;
      } else {
        this[prop] = value;
      }
    }

    /*
    parseAnnotations() {
      const spec = getPageController().getConfig().extension.tagHierarchy;
      this._explorer.reloadAnnotationToc(spec, this.annotationsList);
    }
    */

  }]);

  return YaleEndpoint;
}();

exports.YaleEndpoint = YaleEndpoint;
exports.getEndpoint = getEndpoint;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

var _pageController = __webpack_require__(6);

var _pageController2 = _interopRequireDefault(_pageController);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

var _layerSelector = __webpack_require__(14);

var _layerSelector2 = _interopRequireDefault(_layerSelector);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var AnnotationEditor = function () {
  function AnnotationEditor(options) {
    _classCallCheck(this, AnnotationEditor);

    logger.debug('AnnotationEditor#constructor options:', options);
    jQuery.extend(this, {
      windowId: null,
      miradorDriven: false, // true if created and managed by Mirador core.
      annotation: null,
      id: null,
      parent: null,
      endpoint: null,
      targetAnnotation: null, // target annotation (annotation annotated by this annotation)
      saveCallback: null,
      cancelCallback: null
    }, options);

    this._mode = options.mode; // "create", "update", or "merge"
    this._$anno = this.annotation ? (0, _import.Anno)(this.annotation) : null;

    this._textDirectionClass = this._getTextDirectionClass(this._$anno);
    logger.debug('AnnotationEditor#constructor _useVerticalRL:', this._useVerticalRL);

    this.init();
    this.hide();
  }

  _createClass(AnnotationEditor, [{
    key: 'init',
    value: function init() {
      this.miradorProxyManager = (0, _miradorProxyManager2.default)();
      this.endpoint = this.endpoint || this.miradorProxyManager.getWindowProxyById(this.windowId).getEndPoint();
      this.id = this.id || Mirador.genUUID();

      var tagsStr = this.annotation ? this._$anno.tags.join(' ') : '';
      this.element = jQuery(template({
        miradorDriven: this.miradorDriven,
        tags: tagsStr
      })).attr('id', this.id);

      if (!this.miradorDriven) {
        this.reload(this.parent);
      }
    }
  }, {
    key: 'reload',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(parent) {
        var _this2 = this;

        var header, title, layers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logger.debug('AnnotationEditor#reload parent:', parent);

                parent.prepend(this.element);
                header = this.element.find('.header');
                title = header.find('.title');

                this.textArea = this.element.find('textarea');
                this.layerSelectorContainer = this.element.find('.layer_select');
                this.layerSelector = new _layerSelector2.default({
                  parent: this.layerSelectorContainer
                });

                _context.next = 9;
                return this.endpoint.getLayers();

              case 9:
                layers = _context.sent;


                this.layerSelector.init(layers).then(function () {
                  if (_this2._mode === 'create') {
                    title.text('Create Annotation');
                    var lastLayer = (0, _stateStore2.default)().getString('lastSelectedLayer');
                    _this2.layerSelector.val(lastLayer);
                  } else {
                    // update
                    title.text('');
                    if (_this2.annotation) {
                      _this2.textArea.val(_this2._$anno.bodyText);
                      if (_this2.annotation.layerId) {
                        _this2.layerSelector.val(_this2.annotation.layerId);
                      }
                    }
                  }
                  _this2.initTinyMce();
                  _this2.bindEvents();
                }).catch(function (reason) {
                  logger.error('ERROR AnnotationEditor#reload layerSelector.init failed - ' + reason);
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reload(_x) {
        return _ref.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: 'initTinyMce',
    value: function initTinyMce() {
      var _this = this;
      tinymce.init({
        selector: '#' + this.id + ' textarea',
        //plugins: 'link paste',
        plugins: 'link paste image',
        menubar: false,
        toolbar: 'bold italic fontsizeselect | bullist numlist | link image | undo redo | removeformat | TB_RL',
        fontsize_formats: '10px 12px 14px 18px 24px',
        statusbar: false,
        toolbar_items_size: 'small',
        default_link_target: '_blank',
        past_as_text: true, // from paste plugin
        resize: true,
        height: '140',
        theme_advanced_resizing: true,
        theme_advanced_statusbar_location: 'bottom',
        setup: function setup(editor) {
          editor.on('init', function (e) {
            this.getDoc().body.style.fontSize = '12px';
            tinymce.execCommand('mceFocus', false, e.target.id);
          });
          editor.on('focus', function (e) {
            logger.debug('TinyMCE on focus e:', e);
          });
          editor.addButton('TB_RL', {
            type: 'listbox',
            tooltip: 'Set text direction',
            icon: false,
            onselect: function onselect(event) {
              _this._textDirectionClass = this.value();
            },
            values: [{ text: 'Horizontal LR', value: 'horizontal-lr' }, { text: 'Horizontal RL', value: 'horizontal-rl' }, { text: 'Vertical LR', value: 'vertical-lr' }, { text: 'Vertical RL', value: 'vertical-rl' }],
            value: _this._textDirectionClass // initial value
          });
        }
      });
    }

    // Called by Mirador core

  }, {
    key: 'show',
    value: function show(selector) {
      logger.debug('AnnotationEditor#show', selector);
      if (selector) {
        this.reload(jQuery(selector));
      }
      this.element.show();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.element.hide();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.element.remove();
    }

    // Called by Mirador core

  }, {
    key: 'isDirty',
    value: function isDirty() {
      return this.getEditor().isDirty();
    }

    // Get tinymce editor

  }, {
    key: 'getEditor',
    value: function getEditor() {
      return tinymce.get(this.textArea.attr('id'));
    }

    // Called by Mirador core - XXX seong

  }, {
    key: 'getMode',
    value: function getMode() {
      return this._mode;
    }
  }, {
    key: 'getLoadedAnnotation',
    value: function getLoadedAnnotation() {
      return this._loadedAnnotation;
    }

    // Called by Mirador core

  }, {
    key: 'createAnnotation',
    value: function createAnnotation(targetAnnotation) {
      var tagText = this.element.find('.tags_editor').val().trim();
      var resourceText = this.getEditor().getContent();
      var tags = [];
      var motivation = [];
      var resource = [];

      if (tagText) {
        tags = tagText.split(/\s+/);
      }

      if (tags && tags.length > 0) {
        motivation.push("oa:tagging");
        jQuery.each(tags, function (index, value) {
          resource.push({
            "@type": "oa:Tag",
            "chars": value
          });
        });
      }
      motivation.push("oa:commenting");
      resource.push({
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": resourceText,
        "style": this._textDirectionClass
      });

      var layerId = this.layerSelector.val();
      var annotation = {
        '@context': 'http://iiif.io/api/presentation/2/context.json',
        '@type': 'oa:Annotation',
        motivation: motivation,
        resource: resource,
        layerId: layerId
      };
      if (targetAnnotation) {
        annotation.on = {
          '@type': 'oa:Annotation',
          full: targetAnnotation['@id']
        };
      }
      logger.debug('AnnotationEditor#createAnnotation anno:', annotation);
      return annotation;
    }
  }, {
    key: 'loadAnnotation',
    value: function loadAnnotation(annotation) {
      this._mode = 'merge';
      this._loadedAnnotation = annotation;
      var $anno = (0, _import.Anno)(annotation);

      // Reload the editor with the contents of the annotation
      var content = $anno.bodyText;
      this.layerSelector.val($anno.layerId);
      this.getEditor().setContent(content);

      var tags = $anno.tags;
      if (tags.length > 0) {
        this.element.find('.tags_editor').val(tags.join(' '));
      }

      // Prevent user from editing the merged content
      this.getEditor().getBody().setAttribute('contenteditable', false);
    }

    // Called by Mirador core

  }, {
    key: 'updateAnnotation',
    value: function updateAnnotation(oaAnno) {
      var tagText = this.element.find('.tags_editor').val().trim();
      var resourceText = this.getEditor().getContent();
      var tags = [];

      if (tagText) {
        tags = tagText.split(/\s+/);
      }

      var motivation = [],
          resource = [];

      //remove all tag-related content in annotation
      oaAnno.motivation = jQuery.grep(oaAnno.motivation, function (value) {
        return value !== 'oa:tagging';
      });
      oaAnno.resource = jQuery.grep(oaAnno.resource, function (value) {
        return value['@type'] !== 'oa:Tag';
      });

      //re-add tagging if we have them
      if (tags.length > 0) {
        oaAnno.motivation.push('oa:tagging');
        jQuery.each(tags, function (index, value) {
          oaAnno.resource.push({
            '@type': 'oa:Tag',
            chars: value
          });
        });
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = oaAnno.resource[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          if (value['@type'] === 'dctypes:Text') {
            value.chars = resourceText;
            value.style = this._textDirectionClass;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var layerId = this.layerSelector.val();
      oaAnno.layerId = layerId;
      return oaAnno;
    }
  }, {
    key: 'save',
    value: function save() {
      var _this = this;
      var annotation = null;

      if (this._mode == 'create') {
        annotation = this.createAnnotation(this.targetAnnotation);
        this.endpoint.create(annotation, function (data) {
          var annotation = data;
          if (typeof _this.saveCallback === 'function') {
            _this.saveCallback(annotation);
          }
          _this.destroy();
        }, function () {});
      } else {
        annotation = this.updateAnnotation(this.annotation);
        this.endpoint.update(annotation, function (data) {
          if (typeof _this.saveCallback === 'function') {
            var annotation = data;
            var content = _this.getEditor().getContent().trim();
            _this.saveCallback(annotation, content);
          }
          _this.destroy();
        }, function () {});
      }
    }
  }, {
    key: 'validate',
    value: function validate() {
      logger.debug('AnnotationEditor#validate target anno:', this.targetAnnotation);
      var msg = '';

      if (this._mode === 'create') {
        if (!this.targetAnnotation) {
          msg += 'Target annotation is missing.\n';
        }
      }
      if (this._mode === 'create' && !this.layerSelector.val()) {
        msg += 'Layer is not selected.\n';
      }
      if (this.getEditor().getContent().trim() === '') {
        msg += 'Please enter content.\n';
      }
      if (msg === '') {
        return true;
      } else {
        alert(msg);
        return false;
      }
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this = this;

      this.element.find('.ym_save').click(function () {
        if (_this.validate()) {
          _this.save();
        }
      });

      this.element.find('.ym_cancel').click(function () {
        _this.destroy();
        if (typeof _this.cancelCallback === 'function') {
          _this.cancelCallback();
        }
      });

      this.element.find('.ym_vertical_inc').click(function () {
        var iframeId = _this.getEditor().id + '_ifr';
        var element = tinyMCE.DOM.get(iframeId);
        var height = parseInt(tinyMCE.DOM.getStyle(element, 'height'), 10);
        tinyMCE.DOM.setStyle(element, 'height', height + 75 + 'px');
      });

      this.element.find('.ym_vertical_dec').click(function () {
        var iframeId = _this.getEditor().id + '_ifr';
        var element = tinyMCE.DOM.get(iframeId);
        var height = parseInt(tinyMCE.DOM.getStyle(element, 'height'), 10);
        tinyMCE.DOM.setStyle(element, 'height', height - 75 + 'px');
      });
    }

    /**
     * Get class name ($anno.bodyStyle) for text directions to save
     * with the annotation
     * @param {AnnotationWrapper} $anno
     */

  }, {
    key: '_getTextDirectionClass',
    value: function _getTextDirectionClass($anno) {
      var klass = '';
      if ($anno) {
        klass = $anno.bodyStyle;
        logger.debug('AnnotationEditor#_getTextDirectionClass class from anno:', klass);
        if (_util2.default.directionClasses.includes(klass)) {
          return klass;
        }
      }
      klass = (0, _stateStore2.default)().getString('textDirection');
      logger.debug('AnnotationEditor#_getTextDirectionClass default from state:', klass);
      if (_util2.default.directionClasses.includes(klass)) {
        return klass;
      }
      return 'horizontal-lr';
    }
  }]);

  return AnnotationEditor;
}();

exports.default = AnnotationEditor;


var template = Handlebars.compile(['<div class="ym_anno_editor">', '  <div class="header">', '    <span class="layer_select"></span>', '  </div>', '  <textarea></textarea>', '  <input class="tags_editor" placeholder="{{t "addTagsHere"}}…" {{#if tags}}value="{{tags}}"{{/if}}/>', '  {{#unless miradorDriven}}', '    <div class="bottom_row">', '        <button class="ym_save">Save</button>', '        <button class="ym_cancel">Cancel</button>', '      <div class="ym_float_right">', '        <i class="large caret up icon ym_vertical_dec"></i>', '        <i class="large caret down icon ym_vertical_inc"></i>', '      </div>', '    </div>', '  {{/unless}}', '</div>'].join(''));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

var _selector = __webpack_require__(16);

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  /**
   * init() should be called separately after instantiation
   * because it returns a Promise.
   */
  function _class(options) {
    _classCallCheck(this, _class);

    jQuery.extend(this, {
      selector: null,
      parent: null,
      changeCallback: null,
      initialLayerId: null
    }, options);
    this.logger = (0, _logger2.default)();
    this.appState = (0, _stateStore2.default)();
  }

  /**
   * @returns {Promise}
   */


  _createClass(_class, [{
    key: 'init',
    value: function init(layers) {
      this.logger.debug('LayerSelector#init layers:', layers, 'initialLayerId:', this.initialLayerId);
      this._isLoaded = false;
      this.selector = new _selector2.default({
        appendTo: this.parent
      });
      this.bindEvents();
      return this.reload(layers);
    }

    /**
     * @returns {Promise}
     */

  }, {
    key: 'reload',
    value: function reload(layers) {
      this.logger.debug('LayerSelector#reload');
      var _this = this;
      var layerIndexMap = this.appState.getTransient('layerIndexMap');
      if (!layerIndexMap) {
        this.logger.error('LayerSelector#reload cannot retrieve layerIndexMap');
      }
      this.selector.empty();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = layers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var layer = _step.value;

          var layerId = layer['@id'];
          var layerIndex = layerIndexMap ? layerIndexMap[layerId] : 0;
          var colorClass = typeof layerIndex === 'number' ? 'layer_' + layerIndex % 10 : undefined;

          _this.selector.addItem({
            label: layer.label,
            value: layerId,
            colorClass: colorClass
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return new Promise(function (resolve, reject) {
        if (layers.length > 0) {
          var layerId = _this.initialLayerId || layers[0]['@id'];
          var layerIndex = layerIndexMap ? layerIndexMap[layerId] : 0;
          _this.selector.val(layerId, true);
          _this.selector.setColorClass('layer_' + layerIndex % 10);
          _this._isLoaded = true;
        }
        resolve(_this);
      });
    }
  }, {
    key: 'val',
    value: function val(value, skipNotify) {
      this.logger.debug('LayerSelector#val', value, skipNotify);
      var retVal = this.selector.val(value, skipNotify);
      if (value !== undefined) {
        this.logger.debug('val:', value);
        (0, _stateStore2.default)().setString('lastSelectedLayer', value);
      }
      return retVal;
    }
  }, {
    key: 'isLoaded',
    value: function isLoaded() {
      return this._isLoaded;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this = this;
      this.selector.changeCallback = function (layerId, text) {
        _this.logger.debug('LayerSelector#bindEvents changeCallback');
        var layerIndexMap = _this.appState.getTransient('layerIndexMap');
        var layerIndex = layerIndexMap ? layerIndexMap[layerId] : 0;

        _this.selector.setColorClass('layer_' + layerIndex % 10);
        (0, _stateStore2.default)().setString('lastSelectedLayer', layerId);
        if (typeof _this.changeCallback === 'function') {
          _this.changeCallback(layerId, text);
        }
      };
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getModalAlert;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getModalAlert() {
  if (!instance) {
    var id = 'ym_modal_alert';
    var elem = jQuery('#' + id);
    if (elem.length === 0) {
      elem = jQuery('<div/>').attr('id', id).addClass('ui modal ym_modal').appendTo(jQuery('body'));
    }
    instance = new ModalAlert(elem);
  }
  return instance;
};

var ModalAlert = function () {
  function ModalAlert(elem) {
    _classCallCheck(this, ModalAlert);

    this.elem = elem;
    elem.modal({
      closable: false,
      allowMultiple: true,
      duration: 0,
      dimmerSettings: {
        opacity: 0.5
      }
    });
  }

  _createClass(ModalAlert, [{
    key: 'show',
    value: function show(text) {
      this.elem.text(text);
      this.elem.modal('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.elem.modal('hide');
    }
  }]);

  return ModalAlert;
}();

var instance = null;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var _class = function () {
  /**
   * A selector dropdown implemented with Semantic UI.
   */
  function _class(options) {
    _classCallCheck(this, _class);

    jQuery.extend(this, {
      appendTo: null,
      changeCallback: null
    }, options);

    this.init();
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      var _this = this;
      this.element = jQuery(template());
      this.appendTo.append(this.element);
      this.element.dropdown({
        direction: 'downward',
        onChange: function onChange(value, text) {
          logger.debug('Selector#init onChange ', value, text, _this._skipNotify);
          if (typeof _this.changeCallback === 'function' && !_this._skipNotify) {
            _this.changeCallback(value, text);
          }
          _this._skipNotify = false;
        },
        action: function action(text, value) {
          _this.element.dropdown('set selected', value);
          _this.element.dropdown('hide');
        }
      });
      this.values = [];
    }
  }, {
    key: 'setItems',
    value: function setItems(itemsConfig) {
      logger.debug('Selector#setItems itemsConfig:', itemsConfig);
      var root = this.element.find('.menu');
      root.empty();
      this._setItems(itemsConfig, root);
    }
  }, {
    key: '_setItems',
    value: function _setItems(itemsConfig, parent) {
      var _this = this;
      jQuery.each(itemsConfig, function (index, value) {
        if (value.children.length > 0) {
          _this.addItem({
            label: value.label,
            value: value.value,
            parent: parent
          });
          var menu = _this.addMenuItem(value.label, value.value, parent);
          _this._setItems(value.children, menu);
        } else {
          _this.addItem({
            label: value.label,
            value: value.value,
            parent: parent
          });
        }
      });
    }
  }, {
    key: 'addMenuItem',
    value: function addMenuItem(label, value, parent) {
      var item = jQuery('<div/>').addClass('item').attr('data-text', label).attr('data-value', value).text(label);
      var menu = jQuery('<div/>').addClass('menu').css('overflow', 'hidden');
      item.append(jQuery('<i class="dropdown icon"></i>'));
      item.append(menu);
      parent.append(item);
      return menu;
    }
  }, {
    key: 'addItem',
    value: function addItem(options) {
      //logger.debug('Selector#addItem options:', options);
      var item = jQuery(itemTemplate({
        label: options.label,
        colorClass: options.colorClass
      })).attr('data-text', options.label).attr('data-value', options.value);

      var parent = options.parent || this.element.find('.menu');
      parent.append(item);
      this.values.push(options.value);
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.element.find('.menu').empty();
    }
  }, {
    key: 'val',
    value: function val(value, skipNotify) {
      logger.debug('Selector#val', value, skipNotify);
      var dd = this.element;
      this._skipNotify = skipNotify || false;
      dd.dropdown('refresh');

      if (value === undefined) {
        // get value
        return dd.dropdown('get value');
      } else {
        // set value
        if (dd.dropdown('get item', value)) {
          dd.dropdown('set selected', value);
          return value;
        } else {
          dd.dropdown('set selected', this.values[0]);
          return this.values[0];
        }
      }
    }
  }, {
    key: 'setColorClass',
    value: function setColorClass(newClass) {
      if (this._oldClass) {
        this.element.removeClass(this._oldClass);
      }
      this.element.addClass(newClass);
      this._oldClass = newClass;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.element.remove();
    }
  }]);

  return _class;
}();

exports.default = _class;


var template = Handlebars.compile(['<div class="basic tiny ui button ym_button dropdown">', '  <input name="selection" type="hidden" />', '  <div class="default text"></div>', '  <i class="ym dropdown icon"></i>', '  <div class="menu">', '  </div>', '</div>'].join(''));

var itemTemplate = Handlebars.compile(['<div class="item">', '  {{#if colorClass}}', '    <span class="icon_span"><i class="circle icon {{colorClass}}"></i></span>', '  {{/if}}', '  <span class="label">{{label}}</span>', '</div>'].join(''));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fatalError = __webpack_require__(10);

var _fatalError2 = _interopRequireDefault(_fatalError);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)();

// Separated this code out to its own file because it shouldn't run with the test.
jQuery(document).ready(function () {
  logger.info(window._YaleMiradorVersion);
  if (jQuery('#ym_grid').length > 0) {
    (0, _app2.default)().init().catch(function (reason) {
      logger.error('Failed to init Mirador', reason);
      (0, _fatalError2.default)(reason, 'Initializing the app');
    });
  }
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var require;var require;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return require(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
"use strict";

_dereq_(295);

_dereq_(296);

_dereq_(2);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2,"295":295,"296":296}],2:[function(_dereq_,module,exports){
_dereq_(119);
module.exports = _dereq_(23).RegExp.escape;
},{"119":119,"23":23}],3:[function(_dereq_,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],4:[function(_dereq_,module,exports){
var cof = _dereq_(18);
module.exports = function(it, msg){
  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
  return +it;
};
},{"18":18}],5:[function(_dereq_,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _dereq_(117)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)_dereq_(40)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};
},{"117":117,"40":40}],6:[function(_dereq_,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],7:[function(_dereq_,module,exports){
var isObject = _dereq_(49);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"49":49}],8:[function(_dereq_,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = _dereq_(109)
  , toIndex  = _dereq_(105)
  , toLength = _dereq_(108);

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};
},{"105":105,"108":108,"109":109}],9:[function(_dereq_,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = _dereq_(109)
  , toIndex  = _dereq_(105)
  , toLength = _dereq_(108);
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};
},{"105":105,"108":108,"109":109}],10:[function(_dereq_,module,exports){
var forOf = _dereq_(37);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"37":37}],11:[function(_dereq_,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = _dereq_(107)
  , toLength  = _dereq_(108)
  , toIndex   = _dereq_(105);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"105":105,"107":107,"108":108}],12:[function(_dereq_,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = _dereq_(25)
  , IObject  = _dereq_(45)
  , toObject = _dereq_(109)
  , toLength = _dereq_(108)
  , asc      = _dereq_(15);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"108":108,"109":109,"15":15,"25":25,"45":45}],13:[function(_dereq_,module,exports){
var aFunction = _dereq_(3)
  , toObject  = _dereq_(109)
  , IObject   = _dereq_(45)
  , toLength  = _dereq_(108);

module.exports = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};
},{"108":108,"109":109,"3":3,"45":45}],14:[function(_dereq_,module,exports){
var isObject = _dereq_(49)
  , isArray  = _dereq_(47)
  , SPECIES  = _dereq_(117)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"117":117,"47":47,"49":49}],15:[function(_dereq_,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = _dereq_(14);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"14":14}],16:[function(_dereq_,module,exports){
'use strict';
var aFunction  = _dereq_(3)
  , isObject   = _dereq_(49)
  , invoke     = _dereq_(44)
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};
},{"3":3,"44":44,"49":49}],17:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_(18)
  , TAG = _dereq_(117)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"117":117,"18":18}],18:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],19:[function(_dereq_,module,exports){
'use strict';
var dP          = _dereq_(67).f
  , create      = _dereq_(66)
  , redefineAll = _dereq_(86)
  , ctx         = _dereq_(25)
  , anInstance  = _dereq_(6)
  , defined     = _dereq_(27)
  , forOf       = _dereq_(37)
  , $iterDefine = _dereq_(53)
  , step        = _dereq_(55)
  , setSpecies  = _dereq_(91)
  , DESCRIPTORS = _dereq_(28)
  , fastKey     = _dereq_(62).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"25":25,"27":27,"28":28,"37":37,"53":53,"55":55,"6":6,"62":62,"66":66,"67":67,"86":86,"91":91}],20:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = _dereq_(17)
  , from    = _dereq_(10);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"10":10,"17":17}],21:[function(_dereq_,module,exports){
'use strict';
var redefineAll       = _dereq_(86)
  , getWeak           = _dereq_(62).getWeak
  , anObject          = _dereq_(7)
  , isObject          = _dereq_(49)
  , anInstance        = _dereq_(6)
  , forOf             = _dereq_(37)
  , createArrayMethod = _dereq_(12)
  , $has              = _dereq_(39)
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
},{"12":12,"37":37,"39":39,"49":49,"6":6,"62":62,"7":7,"86":86}],22:[function(_dereq_,module,exports){
'use strict';
var global            = _dereq_(38)
  , $export           = _dereq_(32)
  , redefine          = _dereq_(87)
  , redefineAll       = _dereq_(86)
  , meta              = _dereq_(62)
  , forOf             = _dereq_(37)
  , anInstance        = _dereq_(6)
  , isObject          = _dereq_(49)
  , fails             = _dereq_(34)
  , $iterDetect       = _dereq_(54)
  , setToStringTag    = _dereq_(92)
  , inheritIfRequired = _dereq_(43);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"32":32,"34":34,"37":37,"38":38,"43":43,"49":49,"54":54,"6":6,"62":62,"86":86,"87":87,"92":92}],23:[function(_dereq_,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],24:[function(_dereq_,module,exports){
'use strict';
var $defineProperty = _dereq_(67)
  , createDesc      = _dereq_(85);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"67":67,"85":85}],25:[function(_dereq_,module,exports){
// optional / simple context binding
var aFunction = _dereq_(3);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"3":3}],26:[function(_dereq_,module,exports){
'use strict';
var anObject    = _dereq_(7)
  , toPrimitive = _dereq_(110)
  , NUMBER      = 'number';

module.exports = function(hint){
  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};
},{"110":110,"7":7}],27:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],28:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_(34)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"34":34}],29:[function(_dereq_,module,exports){
var isObject = _dereq_(49)
  , document = _dereq_(38).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"38":38,"49":49}],30:[function(_dereq_,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],31:[function(_dereq_,module,exports){
// all enumerable object keys, includes symbols
var getKeys = _dereq_(76)
  , gOPS    = _dereq_(73)
  , pIE     = _dereq_(77);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"73":73,"76":76,"77":77}],32:[function(_dereq_,module,exports){
var global    = _dereq_(38)
  , core      = _dereq_(23)
  , hide      = _dereq_(40)
  , redefine  = _dereq_(87)
  , ctx       = _dereq_(25)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"23":23,"25":25,"38":38,"40":40,"87":87}],33:[function(_dereq_,module,exports){
var MATCH = _dereq_(117)('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};
},{"117":117}],34:[function(_dereq_,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],35:[function(_dereq_,module,exports){
'use strict';
var hide     = _dereq_(40)
  , redefine = _dereq_(87)
  , fails    = _dereq_(34)
  , defined  = _dereq_(27)
  , wks      = _dereq_(117);

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};
},{"117":117,"27":27,"34":34,"40":40,"87":87}],36:[function(_dereq_,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = _dereq_(7);
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};
},{"7":7}],37:[function(_dereq_,module,exports){
var ctx         = _dereq_(25)
  , call        = _dereq_(51)
  , isArrayIter = _dereq_(46)
  , anObject    = _dereq_(7)
  , toLength    = _dereq_(108)
  , getIterFn   = _dereq_(118)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"108":108,"118":118,"25":25,"46":46,"51":51,"7":7}],38:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],39:[function(_dereq_,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],40:[function(_dereq_,module,exports){
var dP         = _dereq_(67)
  , createDesc = _dereq_(85);
module.exports = _dereq_(28) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"28":28,"67":67,"85":85}],41:[function(_dereq_,module,exports){
module.exports = _dereq_(38).document && document.documentElement;
},{"38":38}],42:[function(_dereq_,module,exports){
module.exports = !_dereq_(28) && !_dereq_(34)(function(){
  return Object.defineProperty(_dereq_(29)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"28":28,"29":29,"34":34}],43:[function(_dereq_,module,exports){
var isObject       = _dereq_(49)
  , setPrototypeOf = _dereq_(90).set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};
},{"49":49,"90":90}],44:[function(_dereq_,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],45:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"18":18}],46:[function(_dereq_,module,exports){
// check on default Array iterator
var Iterators  = _dereq_(56)
  , ITERATOR   = _dereq_(117)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"117":117,"56":56}],47:[function(_dereq_,module,exports){
// 7.2.2 IsArray(argument)
var cof = _dereq_(18);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"18":18}],48:[function(_dereq_,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = _dereq_(49)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
},{"49":49}],49:[function(_dereq_,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],50:[function(_dereq_,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = _dereq_(49)
  , cof      = _dereq_(18)
  , MATCH    = _dereq_(117)('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};
},{"117":117,"18":18,"49":49}],51:[function(_dereq_,module,exports){
// call something on iterator step with safe closing on error
var anObject = _dereq_(7);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"7":7}],52:[function(_dereq_,module,exports){
'use strict';
var create         = _dereq_(66)
  , descriptor     = _dereq_(85)
  , setToStringTag = _dereq_(92)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_(40)(IteratorPrototype, _dereq_(117)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"117":117,"40":40,"66":66,"85":85,"92":92}],53:[function(_dereq_,module,exports){
'use strict';
var LIBRARY        = _dereq_(58)
  , $export        = _dereq_(32)
  , redefine       = _dereq_(87)
  , hide           = _dereq_(40)
  , has            = _dereq_(39)
  , Iterators      = _dereq_(56)
  , $iterCreate    = _dereq_(52)
  , setToStringTag = _dereq_(92)
  , getPrototypeOf = _dereq_(74)
  , ITERATOR       = _dereq_(117)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"117":117,"32":32,"39":39,"40":40,"52":52,"56":56,"58":58,"74":74,"87":87,"92":92}],54:[function(_dereq_,module,exports){
var ITERATOR     = _dereq_(117)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"117":117}],55:[function(_dereq_,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],56:[function(_dereq_,module,exports){
module.exports = {};
},{}],57:[function(_dereq_,module,exports){
var getKeys   = _dereq_(76)
  , toIObject = _dereq_(107);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"107":107,"76":76}],58:[function(_dereq_,module,exports){
module.exports = false;
},{}],59:[function(_dereq_,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;
},{}],60:[function(_dereq_,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};
},{}],61:[function(_dereq_,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],62:[function(_dereq_,module,exports){
var META     = _dereq_(114)('meta')
  , isObject = _dereq_(49)
  , has      = _dereq_(39)
  , setDesc  = _dereq_(67).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !_dereq_(34)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"114":114,"34":34,"39":39,"49":49,"67":67}],63:[function(_dereq_,module,exports){
var Map     = _dereq_(149)
  , $export = _dereq_(32)
  , shared  = _dereq_(94)('metadata')
  , store   = shared.store || (shared.store = new (_dereq_(255)));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function(O){
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};
},{"149":149,"255":255,"32":32,"94":94}],64:[function(_dereq_,module,exports){
var global    = _dereq_(38)
  , macrotask = _dereq_(104).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = _dereq_(18)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"104":104,"18":18,"38":38}],65:[function(_dereq_,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _dereq_(76)
  , gOPS     = _dereq_(73)
  , pIE      = _dereq_(77)
  , toObject = _dereq_(109)
  , IObject  = _dereq_(45)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || _dereq_(34)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"109":109,"34":34,"45":45,"73":73,"76":76,"77":77}],66:[function(_dereq_,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = _dereq_(7)
  , dPs         = _dereq_(68)
  , enumBugKeys = _dereq_(30)
  , IE_PROTO    = _dereq_(93)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _dereq_(29)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _dereq_(41).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"29":29,"30":30,"41":41,"68":68,"7":7,"93":93}],67:[function(_dereq_,module,exports){
var anObject       = _dereq_(7)
  , IE8_DOM_DEFINE = _dereq_(42)
  , toPrimitive    = _dereq_(110)
  , dP             = Object.defineProperty;

exports.f = _dereq_(28) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"110":110,"28":28,"42":42,"7":7}],68:[function(_dereq_,module,exports){
var dP       = _dereq_(67)
  , anObject = _dereq_(7)
  , getKeys  = _dereq_(76);

module.exports = _dereq_(28) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"28":28,"67":67,"7":7,"76":76}],69:[function(_dereq_,module,exports){
// Forced replacement prototype accessors methods
module.exports = _dereq_(58)|| !_dereq_(34)(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete _dereq_(38)[K];
});
},{"34":34,"38":38,"58":58}],70:[function(_dereq_,module,exports){
var pIE            = _dereq_(77)
  , createDesc     = _dereq_(85)
  , toIObject      = _dereq_(107)
  , toPrimitive    = _dereq_(110)
  , has            = _dereq_(39)
  , IE8_DOM_DEFINE = _dereq_(42)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = _dereq_(28) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"107":107,"110":110,"28":28,"39":39,"42":42,"77":77,"85":85}],71:[function(_dereq_,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = _dereq_(107)
  , gOPN      = _dereq_(72).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"107":107,"72":72}],72:[function(_dereq_,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = _dereq_(75)
  , hiddenKeys = _dereq_(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"30":30,"75":75}],73:[function(_dereq_,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],74:[function(_dereq_,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = _dereq_(39)
  , toObject    = _dereq_(109)
  , IE_PROTO    = _dereq_(93)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"109":109,"39":39,"93":93}],75:[function(_dereq_,module,exports){
var has          = _dereq_(39)
  , toIObject    = _dereq_(107)
  , arrayIndexOf = _dereq_(11)(false)
  , IE_PROTO     = _dereq_(93)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"107":107,"11":11,"39":39,"93":93}],76:[function(_dereq_,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _dereq_(75)
  , enumBugKeys = _dereq_(30);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"30":30,"75":75}],77:[function(_dereq_,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],78:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
var $export = _dereq_(32)
  , core    = _dereq_(23)
  , fails   = _dereq_(34);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"23":23,"32":32,"34":34}],79:[function(_dereq_,module,exports){
var getKeys   = _dereq_(76)
  , toIObject = _dereq_(107)
  , isEnum    = _dereq_(77).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"107":107,"76":76,"77":77}],80:[function(_dereq_,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN     = _dereq_(72)
  , gOPS     = _dereq_(73)
  , anObject = _dereq_(7)
  , Reflect  = _dereq_(38).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
},{"38":38,"7":7,"72":72,"73":73}],81:[function(_dereq_,module,exports){
var $parseFloat = _dereq_(38).parseFloat
  , $trim       = _dereq_(102).trim;

module.exports = 1 / $parseFloat(_dereq_(103) + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;
},{"102":102,"103":103,"38":38}],82:[function(_dereq_,module,exports){
var $parseInt = _dereq_(38).parseInt
  , $trim     = _dereq_(102).trim
  , ws        = _dereq_(103)
  , hex       = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;
},{"102":102,"103":103,"38":38}],83:[function(_dereq_,module,exports){
'use strict';
var path      = _dereq_(84)
  , invoke    = _dereq_(44)
  , aFunction = _dereq_(3);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"3":3,"44":44,"84":84}],84:[function(_dereq_,module,exports){
module.exports = _dereq_(38);
},{"38":38}],85:[function(_dereq_,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],86:[function(_dereq_,module,exports){
var redefine = _dereq_(87);
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};
},{"87":87}],87:[function(_dereq_,module,exports){
var global    = _dereq_(38)
  , hide      = _dereq_(40)
  , has       = _dereq_(39)
  , SRC       = _dereq_(114)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_dereq_(23).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"114":114,"23":23,"38":38,"39":39,"40":40}],88:[function(_dereq_,module,exports){
module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};
},{}],89:[function(_dereq_,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],90:[function(_dereq_,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = _dereq_(49)
  , anObject = _dereq_(7);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = _dereq_(25)(Function.call, _dereq_(70).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"25":25,"49":49,"7":7,"70":70}],91:[function(_dereq_,module,exports){
'use strict';
var global      = _dereq_(38)
  , dP          = _dereq_(67)
  , DESCRIPTORS = _dereq_(28)
  , SPECIES     = _dereq_(117)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"117":117,"28":28,"38":38,"67":67}],92:[function(_dereq_,module,exports){
var def = _dereq_(67).f
  , has = _dereq_(39)
  , TAG = _dereq_(117)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"117":117,"39":39,"67":67}],93:[function(_dereq_,module,exports){
var shared = _dereq_(94)('keys')
  , uid    = _dereq_(114);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"114":114,"94":94}],94:[function(_dereq_,module,exports){
var global = _dereq_(38)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"38":38}],95:[function(_dereq_,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = _dereq_(7)
  , aFunction = _dereq_(3)
  , SPECIES   = _dereq_(117)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"117":117,"3":3,"7":7}],96:[function(_dereq_,module,exports){
var fails = _dereq_(34);

module.exports = function(method, arg){
  return !!method && fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};
},{"34":34}],97:[function(_dereq_,module,exports){
var toInteger = _dereq_(106)
  , defined   = _dereq_(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"106":106,"27":27}],98:[function(_dereq_,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = _dereq_(50)
  , defined  = _dereq_(27);

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};
},{"27":27,"50":50}],99:[function(_dereq_,module,exports){
var $export = _dereq_(32)
  , fails   = _dereq_(34)
  , defined = _dereq_(27)
  , quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};
},{"27":27,"32":32,"34":34}],100:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = _dereq_(108)
  , repeat   = _dereq_(101)
  , defined  = _dereq_(27);

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"101":101,"108":108,"27":27}],101:[function(_dereq_,module,exports){
'use strict';
var toInteger = _dereq_(106)
  , defined   = _dereq_(27);

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
},{"106":106,"27":27}],102:[function(_dereq_,module,exports){
var $export = _dereq_(32)
  , defined = _dereq_(27)
  , fails   = _dereq_(34)
  , spaces  = _dereq_(103)
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;
},{"103":103,"27":27,"32":32,"34":34}],103:[function(_dereq_,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
},{}],104:[function(_dereq_,module,exports){
var ctx                = _dereq_(25)
  , invoke             = _dereq_(44)
  , html               = _dereq_(41)
  , cel                = _dereq_(29)
  , global             = _dereq_(38)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_dereq_(18)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"18":18,"25":25,"29":29,"38":38,"41":41,"44":44}],105:[function(_dereq_,module,exports){
var toInteger = _dereq_(106)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"106":106}],106:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],107:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_(45)
  , defined = _dereq_(27);
module.exports = function(it){
  return IObject(defined(it));
};
},{"27":27,"45":45}],108:[function(_dereq_,module,exports){
// 7.1.15 ToLength
var toInteger = _dereq_(106)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"106":106}],109:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
var defined = _dereq_(27);
module.exports = function(it){
  return Object(defined(it));
};
},{"27":27}],110:[function(_dereq_,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = _dereq_(49);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"49":49}],111:[function(_dereq_,module,exports){
'use strict';
if(_dereq_(28)){
  var LIBRARY             = _dereq_(58)
    , global              = _dereq_(38)
    , fails               = _dereq_(34)
    , $export             = _dereq_(32)
    , $typed              = _dereq_(113)
    , $buffer             = _dereq_(112)
    , ctx                 = _dereq_(25)
    , anInstance          = _dereq_(6)
    , propertyDesc        = _dereq_(85)
    , hide                = _dereq_(40)
    , redefineAll         = _dereq_(86)
    , toInteger           = _dereq_(106)
    , toLength            = _dereq_(108)
    , toIndex             = _dereq_(105)
    , toPrimitive         = _dereq_(110)
    , has                 = _dereq_(39)
    , same                = _dereq_(89)
    , classof             = _dereq_(17)
    , isObject            = _dereq_(49)
    , toObject            = _dereq_(109)
    , isArrayIter         = _dereq_(46)
    , create              = _dereq_(66)
    , getPrototypeOf      = _dereq_(74)
    , gOPN                = _dereq_(72).f
    , getIterFn           = _dereq_(118)
    , uid                 = _dereq_(114)
    , wks                 = _dereq_(117)
    , createArrayMethod   = _dereq_(12)
    , createArrayIncludes = _dereq_(11)
    , speciesConstructor  = _dereq_(95)
    , ArrayIterators      = _dereq_(130)
    , Iterators           = _dereq_(56)
    , $iterDetect         = _dereq_(54)
    , setSpecies          = _dereq_(91)
    , arrayFill           = _dereq_(9)
    , arrayCopyWithin     = _dereq_(8)
    , $DP                 = _dereq_(67)
    , $GOPD               = _dereq_(70)
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };
},{"105":105,"106":106,"108":108,"109":109,"11":11,"110":110,"112":112,"113":113,"114":114,"117":117,"118":118,"12":12,"130":130,"17":17,"25":25,"28":28,"32":32,"34":34,"38":38,"39":39,"40":40,"46":46,"49":49,"54":54,"56":56,"58":58,"6":6,"66":66,"67":67,"70":70,"72":72,"74":74,"8":8,"85":85,"86":86,"89":89,"9":9,"91":91,"95":95}],112:[function(_dereq_,module,exports){
'use strict';
var global         = _dereq_(38)
  , DESCRIPTORS    = _dereq_(28)
  , LIBRARY        = _dereq_(58)
  , $typed         = _dereq_(113)
  , hide           = _dereq_(40)
  , redefineAll    = _dereq_(86)
  , fails          = _dereq_(34)
  , anInstance     = _dereq_(6)
  , toInteger      = _dereq_(106)
  , toLength       = _dereq_(108)
  , gOPN           = _dereq_(72).f
  , dP             = _dereq_(67).f
  , arrayFill      = _dereq_(9)
  , setToStringTag = _dereq_(92)
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
},{"106":106,"108":108,"113":113,"28":28,"34":34,"38":38,"40":40,"58":58,"6":6,"67":67,"72":72,"86":86,"9":9,"92":92}],113:[function(_dereq_,module,exports){
var global = _dereq_(38)
  , hide   = _dereq_(40)
  , uid    = _dereq_(114)
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};
},{"114":114,"38":38,"40":40}],114:[function(_dereq_,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],115:[function(_dereq_,module,exports){
var global         = _dereq_(38)
  , core           = _dereq_(23)
  , LIBRARY        = _dereq_(58)
  , wksExt         = _dereq_(116)
  , defineProperty = _dereq_(67).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"116":116,"23":23,"38":38,"58":58,"67":67}],116:[function(_dereq_,module,exports){
exports.f = _dereq_(117);
},{"117":117}],117:[function(_dereq_,module,exports){
var store      = _dereq_(94)('wks')
  , uid        = _dereq_(114)
  , Symbol     = _dereq_(38).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"114":114,"38":38,"94":94}],118:[function(_dereq_,module,exports){
var classof   = _dereq_(17)
  , ITERATOR  = _dereq_(117)('iterator')
  , Iterators = _dereq_(56);
module.exports = _dereq_(23).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"117":117,"17":17,"23":23,"56":56}],119:[function(_dereq_,module,exports){
// https://github.com/benjamingr/RexExp.escape
var $export = _dereq_(32)
  , $re     = _dereq_(88)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});

},{"32":32,"88":88}],120:[function(_dereq_,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = _dereq_(32);

$export($export.P, 'Array', {copyWithin: _dereq_(8)});

_dereq_(5)('copyWithin');
},{"32":32,"5":5,"8":8}],121:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(32)
  , $every  = _dereq_(12)(4);

$export($export.P + $export.F * !_dereq_(96)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});
},{"12":12,"32":32,"96":96}],122:[function(_dereq_,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = _dereq_(32);

$export($export.P, 'Array', {fill: _dereq_(9)});

_dereq_(5)('fill');
},{"32":32,"5":5,"9":9}],123:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(32)
  , $filter = _dereq_(12)(2);

$export($export.P + $export.F * !_dereq_(96)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});
},{"12":12,"32":32,"96":96}],124:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = _dereq_(32)
  , $find   = _dereq_(12)(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_dereq_(5)(KEY);
},{"12":12,"32":32,"5":5}],125:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = _dereq_(32)
  , $find   = _dereq_(12)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_dereq_(5)(KEY);
},{"12":12,"32":32,"5":5}],126:[function(_dereq_,module,exports){
'use strict';
var $export  = _dereq_(32)
  , $forEach = _dereq_(12)(0)
  , STRICT   = _dereq_(96)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});
},{"12":12,"32":32,"96":96}],127:[function(_dereq_,module,exports){
'use strict';
var ctx            = _dereq_(25)
  , $export        = _dereq_(32)
  , toObject       = _dereq_(109)
  , call           = _dereq_(51)
  , isArrayIter    = _dereq_(46)
  , toLength       = _dereq_(108)
  , createProperty = _dereq_(24)
  , getIterFn      = _dereq_(118);

$export($export.S + $export.F * !_dereq_(54)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"108":108,"109":109,"118":118,"24":24,"25":25,"32":32,"46":46,"51":51,"54":54}],128:[function(_dereq_,module,exports){
'use strict';
var $export       = _dereq_(32)
  , $indexOf      = _dereq_(11)(false)
  , $native       = [].indexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(96)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});
},{"11":11,"32":32,"96":96}],129:[function(_dereq_,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = _dereq_(32);

$export($export.S, 'Array', {isArray: _dereq_(47)});
},{"32":32,"47":47}],130:[function(_dereq_,module,exports){
'use strict';
var addToUnscopables = _dereq_(5)
  , step             = _dereq_(55)
  , Iterators        = _dereq_(56)
  , toIObject        = _dereq_(107);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_(53)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"107":107,"5":5,"53":53,"55":55,"56":56}],131:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export   = _dereq_(32)
  , toIObject = _dereq_(107)
  , arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (_dereq_(45) != Object || !_dereq_(96)(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});
},{"107":107,"32":32,"45":45,"96":96}],132:[function(_dereq_,module,exports){
'use strict';
var $export       = _dereq_(32)
  , toIObject     = _dereq_(107)
  , toInteger     = _dereq_(106)
  , toLength      = _dereq_(108)
  , $native       = [].lastIndexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(96)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});
},{"106":106,"107":107,"108":108,"32":32,"96":96}],133:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(32)
  , $map    = _dereq_(12)(1);

$export($export.P + $export.F * !_dereq_(96)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});
},{"12":12,"32":32,"96":96}],134:[function(_dereq_,module,exports){
'use strict';
var $export        = _dereq_(32)
  , createProperty = _dereq_(24);

// WebKit Array.of isn't generic
$export($export.S + $export.F * _dereq_(34)(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});
},{"24":24,"32":32,"34":34}],135:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(32)
  , $reduce = _dereq_(13);

$export($export.P + $export.F * !_dereq_(96)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});
},{"13":13,"32":32,"96":96}],136:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(32)
  , $reduce = _dereq_(13);

$export($export.P + $export.F * !_dereq_(96)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});
},{"13":13,"32":32,"96":96}],137:[function(_dereq_,module,exports){
'use strict';
var $export    = _dereq_(32)
  , html       = _dereq_(41)
  , cof        = _dereq_(18)
  , toIndex    = _dereq_(105)
  , toLength   = _dereq_(108)
  , arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * _dereq_(34)(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});
},{"105":105,"108":108,"18":18,"32":32,"34":34,"41":41}],138:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(32)
  , $some   = _dereq_(12)(3);

$export($export.P + $export.F * !_dereq_(96)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});
},{"12":12,"32":32,"96":96}],139:[function(_dereq_,module,exports){
'use strict';
var $export   = _dereq_(32)
  , aFunction = _dereq_(3)
  , toObject  = _dereq_(109)
  , fails     = _dereq_(34)
  , $sort     = [].sort
  , test      = [1, 2, 3];

$export($export.P + $export.F * (fails(function(){
  // IE8-
  test.sort(undefined);
}) || !fails(function(){
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !_dereq_(96)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});
},{"109":109,"3":3,"32":32,"34":34,"96":96}],140:[function(_dereq_,module,exports){
_dereq_(91)('Array');
},{"91":91}],141:[function(_dereq_,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = _dereq_(32);

$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});
},{"32":32}],142:[function(_dereq_,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = _dereq_(32)
  , fails   = _dereq_(34)
  , getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});
},{"32":32,"34":34}],143:[function(_dereq_,module,exports){
'use strict';
var $export     = _dereq_(32)
  , toObject    = _dereq_(109)
  , toPrimitive = _dereq_(110);

$export($export.P + $export.F * _dereq_(34)(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});
},{"109":109,"110":110,"32":32,"34":34}],144:[function(_dereq_,module,exports){
var TO_PRIMITIVE = _dereq_(117)('toPrimitive')
  , proto        = Date.prototype;

if(!(TO_PRIMITIVE in proto))_dereq_(40)(proto, TO_PRIMITIVE, _dereq_(26));
},{"117":117,"26":26,"40":40}],145:[function(_dereq_,module,exports){
var DateProto    = Date.prototype
  , INVALID_DATE = 'Invalid Date'
  , TO_STRING    = 'toString'
  , $toString    = DateProto[TO_STRING]
  , getTime      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  _dereq_(87)(DateProto, TO_STRING, function toString(){
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}
},{"87":87}],146:[function(_dereq_,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = _dereq_(32);

$export($export.P, 'Function', {bind: _dereq_(16)});
},{"16":16,"32":32}],147:[function(_dereq_,module,exports){
'use strict';
var isObject       = _dereq_(49)
  , getPrototypeOf = _dereq_(74)
  , HAS_INSTANCE   = _dereq_(117)('hasInstance')
  , FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))_dereq_(67).f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});
},{"117":117,"49":49,"67":67,"74":74}],148:[function(_dereq_,module,exports){
var dP         = _dereq_(67).f
  , createDesc = _dereq_(85)
  , has        = _dereq_(39)
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || _dereq_(28) && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});
},{"28":28,"39":39,"67":67,"85":85}],149:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_(19);

// 23.1 Map Objects
module.exports = _dereq_(22)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"19":19,"22":22}],150:[function(_dereq_,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = _dereq_(32)
  , log1p   = _dereq_(60)
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});
},{"32":32,"60":60}],151:[function(_dereq_,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = _dereq_(32)
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});
},{"32":32}],152:[function(_dereq_,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = _dereq_(32)
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});
},{"32":32}],153:[function(_dereq_,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = _dereq_(32)
  , sign    = _dereq_(61);

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});
},{"32":32,"61":61}],154:[function(_dereq_,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = _dereq_(32);

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});
},{"32":32}],155:[function(_dereq_,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = _dereq_(32)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});
},{"32":32}],156:[function(_dereq_,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = _dereq_(32)
  , $expm1  = _dereq_(59);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});
},{"32":32,"59":59}],157:[function(_dereq_,module,exports){
// 20.2.2.16 Math.fround(x)
var $export   = _dereq_(32)
  , sign      = _dereq_(61)
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});
},{"32":32,"61":61}],158:[function(_dereq_,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = _dereq_(32)
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});
},{"32":32}],159:[function(_dereq_,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = _dereq_(32)
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * _dereq_(34)(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});
},{"32":32,"34":34}],160:[function(_dereq_,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = _dereq_(32);

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});
},{"32":32}],161:[function(_dereq_,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = _dereq_(32);

$export($export.S, 'Math', {log1p: _dereq_(60)});
},{"32":32,"60":60}],162:[function(_dereq_,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = _dereq_(32);

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});
},{"32":32}],163:[function(_dereq_,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = _dereq_(32);

$export($export.S, 'Math', {sign: _dereq_(61)});
},{"32":32,"61":61}],164:[function(_dereq_,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = _dereq_(32)
  , expm1   = _dereq_(59)
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * _dereq_(34)(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});
},{"32":32,"34":34,"59":59}],165:[function(_dereq_,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = _dereq_(32)
  , expm1   = _dereq_(59)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});
},{"32":32,"59":59}],166:[function(_dereq_,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = _dereq_(32);

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
},{"32":32}],167:[function(_dereq_,module,exports){
'use strict';
var global            = _dereq_(38)
  , has               = _dereq_(39)
  , cof               = _dereq_(18)
  , inheritIfRequired = _dereq_(43)
  , toPrimitive       = _dereq_(110)
  , fails             = _dereq_(34)
  , gOPN              = _dereq_(72).f
  , gOPD              = _dereq_(70).f
  , dP                = _dereq_(67).f
  , $trim             = _dereq_(102).trim
  , NUMBER            = 'Number'
  , $Number           = global[NUMBER]
  , Base              = $Number
  , proto             = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF        = cof(_dereq_(66)(proto)) == NUMBER
  , TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = _dereq_(28) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _dereq_(87)(global, NUMBER, $Number);
}
},{"102":102,"110":110,"18":18,"28":28,"34":34,"38":38,"39":39,"43":43,"66":66,"67":67,"70":70,"72":72,"87":87}],168:[function(_dereq_,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = _dereq_(32);

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});
},{"32":32}],169:[function(_dereq_,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export   = _dereq_(32)
  , _isFinite = _dereq_(38).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});
},{"32":32,"38":38}],170:[function(_dereq_,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = _dereq_(32);

$export($export.S, 'Number', {isInteger: _dereq_(48)});
},{"32":32,"48":48}],171:[function(_dereq_,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = _dereq_(32);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});
},{"32":32}],172:[function(_dereq_,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export   = _dereq_(32)
  , isInteger = _dereq_(48)
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});
},{"32":32,"48":48}],173:[function(_dereq_,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = _dereq_(32);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
},{"32":32}],174:[function(_dereq_,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = _dereq_(32);

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
},{"32":32}],175:[function(_dereq_,module,exports){
var $export     = _dereq_(32)
  , $parseFloat = _dereq_(81);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});
},{"32":32,"81":81}],176:[function(_dereq_,module,exports){
var $export   = _dereq_(32)
  , $parseInt = _dereq_(82);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});
},{"32":32,"82":82}],177:[function(_dereq_,module,exports){
'use strict';
var $export      = _dereq_(32)
  , toInteger    = _dereq_(106)
  , aNumberValue = _dereq_(4)
  , repeat       = _dereq_(101)
  , $toFixed     = 1..toFixed
  , floor        = Math.floor
  , data         = [0, 0, 0, 0, 0, 0]
  , ERROR        = 'Number.toFixed: incorrect invocation!'
  , ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !_dereq_(34)(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});
},{"101":101,"106":106,"32":32,"34":34,"4":4}],178:[function(_dereq_,module,exports){
'use strict';
var $export      = _dereq_(32)
  , $fails       = _dereq_(34)
  , aNumberValue = _dereq_(4)
  , $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});
},{"32":32,"34":34,"4":4}],179:[function(_dereq_,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = _dereq_(32);

$export($export.S + $export.F, 'Object', {assign: _dereq_(65)});
},{"32":32,"65":65}],180:[function(_dereq_,module,exports){
var $export = _dereq_(32)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: _dereq_(66)});
},{"32":32,"66":66}],181:[function(_dereq_,module,exports){
var $export = _dereq_(32);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !_dereq_(28), 'Object', {defineProperties: _dereq_(68)});
},{"28":28,"32":32,"68":68}],182:[function(_dereq_,module,exports){
var $export = _dereq_(32);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !_dereq_(28), 'Object', {defineProperty: _dereq_(67).f});
},{"28":28,"32":32,"67":67}],183:[function(_dereq_,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = _dereq_(49)
  , meta     = _dereq_(62).onFreeze;

_dereq_(78)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
},{"49":49,"62":62,"78":78}],184:[function(_dereq_,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = _dereq_(107)
  , $getOwnPropertyDescriptor = _dereq_(70).f;

_dereq_(78)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"107":107,"70":70,"78":78}],185:[function(_dereq_,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
_dereq_(78)('getOwnPropertyNames', function(){
  return _dereq_(71).f;
});
},{"71":71,"78":78}],186:[function(_dereq_,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = _dereq_(109)
  , $getPrototypeOf = _dereq_(74);

_dereq_(78)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"109":109,"74":74,"78":78}],187:[function(_dereq_,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = _dereq_(49);

_dereq_(78)('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
},{"49":49,"78":78}],188:[function(_dereq_,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = _dereq_(49);

_dereq_(78)('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
},{"49":49,"78":78}],189:[function(_dereq_,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = _dereq_(49);

_dereq_(78)('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});
},{"49":49,"78":78}],190:[function(_dereq_,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = _dereq_(32);
$export($export.S, 'Object', {is: _dereq_(89)});
},{"32":32,"89":89}],191:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = _dereq_(109)
  , $keys    = _dereq_(76);

_dereq_(78)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"109":109,"76":76,"78":78}],192:[function(_dereq_,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = _dereq_(49)
  , meta     = _dereq_(62).onFreeze;

_dereq_(78)('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});
},{"49":49,"62":62,"78":78}],193:[function(_dereq_,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = _dereq_(49)
  , meta     = _dereq_(62).onFreeze;

_dereq_(78)('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});
},{"49":49,"62":62,"78":78}],194:[function(_dereq_,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = _dereq_(32);
$export($export.S, 'Object', {setPrototypeOf: _dereq_(90).set});
},{"32":32,"90":90}],195:[function(_dereq_,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = _dereq_(17)
  , test    = {};
test[_dereq_(117)('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _dereq_(87)(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}
},{"117":117,"17":17,"87":87}],196:[function(_dereq_,module,exports){
var $export     = _dereq_(32)
  , $parseFloat = _dereq_(81);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});
},{"32":32,"81":81}],197:[function(_dereq_,module,exports){
var $export   = _dereq_(32)
  , $parseInt = _dereq_(82);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});
},{"32":32,"82":82}],198:[function(_dereq_,module,exports){
'use strict';
var LIBRARY            = _dereq_(58)
  , global             = _dereq_(38)
  , ctx                = _dereq_(25)
  , classof            = _dereq_(17)
  , $export            = _dereq_(32)
  , isObject           = _dereq_(49)
  , aFunction          = _dereq_(3)
  , anInstance         = _dereq_(6)
  , forOf              = _dereq_(37)
  , speciesConstructor = _dereq_(95)
  , task               = _dereq_(104).set
  , microtask          = _dereq_(64)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_dereq_(117)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _dereq_(86)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
_dereq_(92)($Promise, PROMISE);
_dereq_(91)(PROMISE);
Wrapper = _dereq_(23)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && _dereq_(54)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"104":104,"117":117,"17":17,"23":23,"25":25,"3":3,"32":32,"37":37,"38":38,"49":49,"54":54,"58":58,"6":6,"64":64,"86":86,"91":91,"92":92,"95":95}],199:[function(_dereq_,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = _dereq_(32)
  , aFunction = _dereq_(3)
  , anObject  = _dereq_(7)
  , rApply    = (_dereq_(38).Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !_dereq_(34)(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});
},{"3":3,"32":32,"34":34,"38":38,"7":7}],200:[function(_dereq_,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = _dereq_(32)
  , create     = _dereq_(66)
  , aFunction  = _dereq_(3)
  , anObject   = _dereq_(7)
  , isObject   = _dereq_(49)
  , fails      = _dereq_(34)
  , bind       = _dereq_(16)
  , rConstruct = (_dereq_(38).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});
},{"16":16,"3":3,"32":32,"34":34,"38":38,"49":49,"66":66,"7":7}],201:[function(_dereq_,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = _dereq_(67)
  , $export     = _dereq_(32)
  , anObject    = _dereq_(7)
  , toPrimitive = _dereq_(110);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * _dereq_(34)(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"110":110,"32":32,"34":34,"67":67,"7":7}],202:[function(_dereq_,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = _dereq_(32)
  , gOPD     = _dereq_(70).f
  , anObject = _dereq_(7);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});
},{"32":32,"7":7,"70":70}],203:[function(_dereq_,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export  = _dereq_(32)
  , anObject = _dereq_(7);
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
_dereq_(52)(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});
},{"32":32,"52":52,"7":7}],204:[function(_dereq_,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = _dereq_(70)
  , $export  = _dereq_(32)
  , anObject = _dereq_(7);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});
},{"32":32,"7":7,"70":70}],205:[function(_dereq_,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = _dereq_(32)
  , getProto = _dereq_(74)
  , anObject = _dereq_(7);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});
},{"32":32,"7":7,"74":74}],206:[function(_dereq_,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = _dereq_(70)
  , getPrototypeOf = _dereq_(74)
  , has            = _dereq_(39)
  , $export        = _dereq_(32)
  , isObject       = _dereq_(49)
  , anObject       = _dereq_(7);

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});
},{"32":32,"39":39,"49":49,"7":7,"70":70,"74":74}],207:[function(_dereq_,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = _dereq_(32);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});
},{"32":32}],208:[function(_dereq_,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export       = _dereq_(32)
  , anObject      = _dereq_(7)
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});
},{"32":32,"7":7}],209:[function(_dereq_,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = _dereq_(32);

$export($export.S, 'Reflect', {ownKeys: _dereq_(80)});
},{"32":32,"80":80}],210:[function(_dereq_,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export            = _dereq_(32)
  , anObject           = _dereq_(7)
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"32":32,"7":7}],211:[function(_dereq_,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = _dereq_(32)
  , setProto = _dereq_(90);

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"32":32,"90":90}],212:[function(_dereq_,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = _dereq_(67)
  , gOPD           = _dereq_(70)
  , getPrototypeOf = _dereq_(74)
  , has            = _dereq_(39)
  , $export        = _dereq_(32)
  , createDesc     = _dereq_(85)
  , anObject       = _dereq_(7)
  , isObject       = _dereq_(49);

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});
},{"32":32,"39":39,"49":49,"67":67,"7":7,"70":70,"74":74,"85":85}],213:[function(_dereq_,module,exports){
var global            = _dereq_(38)
  , inheritIfRequired = _dereq_(43)
  , dP                = _dereq_(67).f
  , gOPN              = _dereq_(72).f
  , isRegExp          = _dereq_(50)
  , $flags            = _dereq_(36)
  , $RegExp           = global.RegExp
  , Base              = $RegExp
  , proto             = $RegExp.prototype
  , re1               = /a/g
  , re2               = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW       = new $RegExp(re1) !== re1;

if(_dereq_(28) && (!CORRECT_NEW || _dereq_(34)(function(){
  re2[_dereq_(117)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  };
  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  _dereq_(87)(global, 'RegExp', $RegExp);
}

_dereq_(91)('RegExp');
},{"117":117,"28":28,"34":34,"36":36,"38":38,"43":43,"50":50,"67":67,"72":72,"87":87,"91":91}],214:[function(_dereq_,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if(_dereq_(28) && /./g.flags != 'g')_dereq_(67).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _dereq_(36)
});
},{"28":28,"36":36,"67":67}],215:[function(_dereq_,module,exports){
// @@match logic
_dereq_(35)('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});
},{"35":35}],216:[function(_dereq_,module,exports){
// @@replace logic
_dereq_(35)('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});
},{"35":35}],217:[function(_dereq_,module,exports){
// @@search logic
_dereq_(35)('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});
},{"35":35}],218:[function(_dereq_,module,exports){
// @@split logic
_dereq_(35)('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = _dereq_(50)
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});
},{"35":35,"50":50}],219:[function(_dereq_,module,exports){
'use strict';
_dereq_(214);
var anObject    = _dereq_(7)
  , $flags      = _dereq_(36)
  , DESCRIPTORS = _dereq_(28)
  , TO_STRING   = 'toString'
  , $toString   = /./[TO_STRING];

var define = function(fn){
  _dereq_(87)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(_dereq_(34)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString.name != TO_STRING){
  define(function toString(){
    return $toString.call(this);
  });
}
},{"214":214,"28":28,"34":34,"36":36,"7":7,"87":87}],220:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_(19);

// 23.2 Set Objects
module.exports = _dereq_(22)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"19":19,"22":22}],221:[function(_dereq_,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
_dereq_(99)('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});
},{"99":99}],222:[function(_dereq_,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
_dereq_(99)('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});
},{"99":99}],223:[function(_dereq_,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
_dereq_(99)('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});
},{"99":99}],224:[function(_dereq_,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
_dereq_(99)('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});
},{"99":99}],225:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(32)
  , $at     = _dereq_(97)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});
},{"32":32,"97":97}],226:[function(_dereq_,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export   = _dereq_(32)
  , toLength  = _dereq_(108)
  , context   = _dereq_(98)
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * _dereq_(33)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});
},{"108":108,"32":32,"33":33,"98":98}],227:[function(_dereq_,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
_dereq_(99)('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});
},{"99":99}],228:[function(_dereq_,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
_dereq_(99)('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});
},{"99":99}],229:[function(_dereq_,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
_dereq_(99)('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});
},{"99":99}],230:[function(_dereq_,module,exports){
var $export        = _dereq_(32)
  , toIndex        = _dereq_(105)
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"105":105,"32":32}],231:[function(_dereq_,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export  = _dereq_(32)
  , context  = _dereq_(98)
  , INCLUDES = 'includes';

$export($export.P + $export.F * _dereq_(33)(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});
},{"32":32,"33":33,"98":98}],232:[function(_dereq_,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
_dereq_(99)('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});
},{"99":99}],233:[function(_dereq_,module,exports){
'use strict';
var $at  = _dereq_(97)(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_(53)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"53":53,"97":97}],234:[function(_dereq_,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
_dereq_(99)('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});
},{"99":99}],235:[function(_dereq_,module,exports){
var $export   = _dereq_(32)
  , toIObject = _dereq_(107)
  , toLength  = _dereq_(108);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});
},{"107":107,"108":108,"32":32}],236:[function(_dereq_,module,exports){
var $export = _dereq_(32);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: _dereq_(101)
});
},{"101":101,"32":32}],237:[function(_dereq_,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
_dereq_(99)('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});
},{"99":99}],238:[function(_dereq_,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export     = _dereq_(32)
  , toLength    = _dereq_(108)
  , context     = _dereq_(98)
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * _dereq_(33)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});
},{"108":108,"32":32,"33":33,"98":98}],239:[function(_dereq_,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
_dereq_(99)('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});
},{"99":99}],240:[function(_dereq_,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
_dereq_(99)('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});
},{"99":99}],241:[function(_dereq_,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
_dereq_(99)('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});
},{"99":99}],242:[function(_dereq_,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
_dereq_(102)('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});
},{"102":102}],243:[function(_dereq_,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = _dereq_(38)
  , has            = _dereq_(39)
  , DESCRIPTORS    = _dereq_(28)
  , $export        = _dereq_(32)
  , redefine       = _dereq_(87)
  , META           = _dereq_(62).KEY
  , $fails         = _dereq_(34)
  , shared         = _dereq_(94)
  , setToStringTag = _dereq_(92)
  , uid            = _dereq_(114)
  , wks            = _dereq_(117)
  , wksExt         = _dereq_(116)
  , wksDefine      = _dereq_(115)
  , keyOf          = _dereq_(57)
  , enumKeys       = _dereq_(31)
  , isArray        = _dereq_(47)
  , anObject       = _dereq_(7)
  , toIObject      = _dereq_(107)
  , toPrimitive    = _dereq_(110)
  , createDesc     = _dereq_(85)
  , _create        = _dereq_(66)
  , gOPNExt        = _dereq_(71)
  , $GOPD          = _dereq_(70)
  , $DP            = _dereq_(67)
  , $keys          = _dereq_(76)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  _dereq_(72).f = gOPNExt.f = $getOwnPropertyNames;
  _dereq_(77).f  = $propertyIsEnumerable;
  _dereq_(73).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !_dereq_(58)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_(40)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"107":107,"110":110,"114":114,"115":115,"116":116,"117":117,"28":28,"31":31,"32":32,"34":34,"38":38,"39":39,"40":40,"47":47,"57":57,"58":58,"62":62,"66":66,"67":67,"7":7,"70":70,"71":71,"72":72,"73":73,"76":76,"77":77,"85":85,"87":87,"92":92,"94":94}],244:[function(_dereq_,module,exports){
'use strict';
var $export      = _dereq_(32)
  , $typed       = _dereq_(113)
  , buffer       = _dereq_(112)
  , anObject     = _dereq_(7)
  , toIndex      = _dereq_(105)
  , toLength     = _dereq_(108)
  , isObject     = _dereq_(49)
  , ArrayBuffer  = _dereq_(38).ArrayBuffer
  , speciesConstructor = _dereq_(95)
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * _dereq_(34)(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

_dereq_(91)(ARRAY_BUFFER);
},{"105":105,"108":108,"112":112,"113":113,"32":32,"34":34,"38":38,"49":49,"7":7,"91":91,"95":95}],245:[function(_dereq_,module,exports){
var $export = _dereq_(32);
$export($export.G + $export.W + $export.F * !_dereq_(113).ABV, {
  DataView: _dereq_(112).DataView
});
},{"112":112,"113":113,"32":32}],246:[function(_dereq_,module,exports){
_dereq_(111)('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],247:[function(_dereq_,module,exports){
_dereq_(111)('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],248:[function(_dereq_,module,exports){
_dereq_(111)('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],249:[function(_dereq_,module,exports){
_dereq_(111)('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],250:[function(_dereq_,module,exports){
_dereq_(111)('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],251:[function(_dereq_,module,exports){
_dereq_(111)('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],252:[function(_dereq_,module,exports){
_dereq_(111)('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],253:[function(_dereq_,module,exports){
_dereq_(111)('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"111":111}],254:[function(_dereq_,module,exports){
_dereq_(111)('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);
},{"111":111}],255:[function(_dereq_,module,exports){
'use strict';
var each         = _dereq_(12)(0)
  , redefine     = _dereq_(87)
  , meta         = _dereq_(62)
  , assign       = _dereq_(65)
  , weak         = _dereq_(21)
  , isObject     = _dereq_(49)
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _dereq_(22)('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
},{"12":12,"21":21,"22":22,"49":49,"62":62,"65":65,"87":87}],256:[function(_dereq_,module,exports){
'use strict';
var weak = _dereq_(21);

// 23.4 WeakSet Objects
_dereq_(22)('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"21":21,"22":22}],257:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export   = _dereq_(32)
  , $includes = _dereq_(11)(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_dereq_(5)('includes');
},{"11":11,"32":32,"5":5}],258:[function(_dereq_,module,exports){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export   = _dereq_(32)
  , microtask = _dereq_(64)()
  , process   = _dereq_(38).process
  , isNode    = _dereq_(18)(process) == 'process';

$export($export.G, {
  asap: function asap(fn){
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});
},{"18":18,"32":32,"38":38,"64":64}],259:[function(_dereq_,module,exports){
// https://github.com/ljharb/proposal-is-error
var $export = _dereq_(32)
  , cof     = _dereq_(18);

$export($export.S, 'Error', {
  isError: function isError(it){
    return cof(it) === 'Error';
  }
});
},{"18":18,"32":32}],260:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_(32);

$export($export.P + $export.R, 'Map', {toJSON: _dereq_(20)('Map')});
},{"20":20,"32":32}],261:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_(32);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});
},{"32":32}],262:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_(32);

$export($export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});
},{"32":32}],263:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_(32);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});
},{"32":32}],264:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_(32);

$export($export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});
},{"32":32}],265:[function(_dereq_,module,exports){
'use strict';
var $export         = _dereq_(32)
  , toObject        = _dereq_(109)
  , aFunction       = _dereq_(3)
  , $defineProperty = _dereq_(67);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
_dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});
},{"109":109,"28":28,"3":3,"32":32,"67":67,"69":69}],266:[function(_dereq_,module,exports){
'use strict';
var $export         = _dereq_(32)
  , toObject        = _dereq_(109)
  , aFunction       = _dereq_(3)
  , $defineProperty = _dereq_(67);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
_dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});
},{"109":109,"28":28,"3":3,"32":32,"67":67,"69":69}],267:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export  = _dereq_(32)
  , $entries = _dereq_(79)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"32":32,"79":79}],268:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = _dereq_(32)
  , ownKeys        = _dereq_(80)
  , toIObject      = _dereq_(107)
  , gOPD           = _dereq_(70)
  , createProperty = _dereq_(24);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});
},{"107":107,"24":24,"32":32,"70":70,"80":80}],269:[function(_dereq_,module,exports){
'use strict';
var $export                  = _dereq_(32)
  , toObject                 = _dereq_(109)
  , toPrimitive              = _dereq_(110)
  , getPrototypeOf           = _dereq_(74)
  , getOwnPropertyDescriptor = _dereq_(70).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
_dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});
},{"109":109,"110":110,"28":28,"32":32,"69":69,"70":70,"74":74}],270:[function(_dereq_,module,exports){
'use strict';
var $export                  = _dereq_(32)
  , toObject                 = _dereq_(109)
  , toPrimitive              = _dereq_(110)
  , getPrototypeOf           = _dereq_(74)
  , getOwnPropertyDescriptor = _dereq_(70).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
_dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});
},{"109":109,"110":110,"28":28,"32":32,"69":69,"70":70,"74":74}],271:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = _dereq_(32)
  , $values = _dereq_(79)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
},{"32":32,"79":79}],272:[function(_dereq_,module,exports){
'use strict';
// https://github.com/zenparsing/es-observable
var $export     = _dereq_(32)
  , global      = _dereq_(38)
  , core        = _dereq_(23)
  , microtask   = _dereq_(64)()
  , OBSERVABLE  = _dereq_(117)('observable')
  , aFunction   = _dereq_(3)
  , anObject    = _dereq_(7)
  , anInstance  = _dereq_(6)
  , redefineAll = _dereq_(86)
  , hide        = _dereq_(40)
  , forOf       = _dereq_(37)
  , RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core.Promise || global.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export($export.G, {Observable: $Observable});

_dereq_(91)('Observable');
},{"117":117,"23":23,"3":3,"32":32,"37":37,"38":38,"40":40,"6":6,"64":64,"7":7,"86":86,"91":91}],273:[function(_dereq_,module,exports){
var metadata                  = _dereq_(63)
  , anObject                  = _dereq_(7)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});
},{"63":63,"7":7}],274:[function(_dereq_,module,exports){
var metadata               = _dereq_(63)
  , anObject               = _dereq_(7)
  , toMetaKey              = metadata.key
  , getOrCreateMetadataMap = metadata.map
  , store                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
}});
},{"63":63,"7":7}],275:[function(_dereq_,module,exports){
var Set                     = _dereq_(220)
  , from                    = _dereq_(10)
  , metadata                = _dereq_(63)
  , anObject                = _dereq_(7)
  , getPrototypeOf          = _dereq_(74)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
},{"10":10,"220":220,"63":63,"7":7,"74":74}],276:[function(_dereq_,module,exports){
var metadata               = _dereq_(63)
  , anObject               = _dereq_(7)
  , getPrototypeOf         = _dereq_(74)
  , ordinaryHasOwnMetadata = metadata.has
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"63":63,"7":7,"74":74}],277:[function(_dereq_,module,exports){
var metadata                = _dereq_(63)
  , anObject                = _dereq_(7)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
},{"63":63,"7":7}],278:[function(_dereq_,module,exports){
var metadata               = _dereq_(63)
  , anObject               = _dereq_(7)
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"63":63,"7":7}],279:[function(_dereq_,module,exports){
var metadata               = _dereq_(63)
  , anObject               = _dereq_(7)
  , getPrototypeOf         = _dereq_(74)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"63":63,"7":7,"74":74}],280:[function(_dereq_,module,exports){
var metadata               = _dereq_(63)
  , anObject               = _dereq_(7)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"63":63,"7":7}],281:[function(_dereq_,module,exports){
var metadata                  = _dereq_(63)
  , anObject                  = _dereq_(7)
  , aFunction                 = _dereq_(3)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
}});
},{"3":3,"63":63,"7":7}],282:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_(32);

$export($export.P + $export.R, 'Set', {toJSON: _dereq_(20)('Set')});
},{"20":20,"32":32}],283:[function(_dereq_,module,exports){
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = _dereq_(32)
  , $at     = _dereq_(97)(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});
},{"32":32,"97":97}],284:[function(_dereq_,module,exports){
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export     = _dereq_(32)
  , defined     = _dereq_(27)
  , toLength    = _dereq_(108)
  , isRegExp    = _dereq_(50)
  , getFlags    = _dereq_(36)
  , RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

_dereq_(52)($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});
},{"108":108,"27":27,"32":32,"36":36,"50":50,"52":52}],285:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = _dereq_(32)
  , $pad    = _dereq_(100);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});
},{"100":100,"32":32}],286:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = _dereq_(32)
  , $pad    = _dereq_(100);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});
},{"100":100,"32":32}],287:[function(_dereq_,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_dereq_(102)('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');
},{"102":102}],288:[function(_dereq_,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_dereq_(102)('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');
},{"102":102}],289:[function(_dereq_,module,exports){
_dereq_(115)('asyncIterator');
},{"115":115}],290:[function(_dereq_,module,exports){
_dereq_(115)('observable');
},{"115":115}],291:[function(_dereq_,module,exports){
// https://github.com/ljharb/proposal-global
var $export = _dereq_(32);

$export($export.S, 'System', {global: _dereq_(38)});
},{"32":32,"38":38}],292:[function(_dereq_,module,exports){
var $iterators    = _dereq_(130)
  , redefine      = _dereq_(87)
  , global        = _dereq_(38)
  , hide          = _dereq_(40)
  , Iterators     = _dereq_(56)
  , wks           = _dereq_(117)
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}
},{"117":117,"130":130,"38":38,"40":40,"56":56,"87":87}],293:[function(_dereq_,module,exports){
var $export = _dereq_(32)
  , $task   = _dereq_(104);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"104":104,"32":32}],294:[function(_dereq_,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global     = _dereq_(38)
  , $export    = _dereq_(32)
  , invoke     = _dereq_(44)
  , partial    = _dereq_(83)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});
},{"32":32,"38":38,"44":44,"83":83}],295:[function(_dereq_,module,exports){
_dereq_(243);
_dereq_(180);
_dereq_(182);
_dereq_(181);
_dereq_(184);
_dereq_(186);
_dereq_(191);
_dereq_(185);
_dereq_(183);
_dereq_(193);
_dereq_(192);
_dereq_(188);
_dereq_(189);
_dereq_(187);
_dereq_(179);
_dereq_(190);
_dereq_(194);
_dereq_(195);
_dereq_(146);
_dereq_(148);
_dereq_(147);
_dereq_(197);
_dereq_(196);
_dereq_(167);
_dereq_(177);
_dereq_(178);
_dereq_(168);
_dereq_(169);
_dereq_(170);
_dereq_(171);
_dereq_(172);
_dereq_(173);
_dereq_(174);
_dereq_(175);
_dereq_(176);
_dereq_(150);
_dereq_(151);
_dereq_(152);
_dereq_(153);
_dereq_(154);
_dereq_(155);
_dereq_(156);
_dereq_(157);
_dereq_(158);
_dereq_(159);
_dereq_(160);
_dereq_(161);
_dereq_(162);
_dereq_(163);
_dereq_(164);
_dereq_(165);
_dereq_(166);
_dereq_(230);
_dereq_(235);
_dereq_(242);
_dereq_(233);
_dereq_(225);
_dereq_(226);
_dereq_(231);
_dereq_(236);
_dereq_(238);
_dereq_(221);
_dereq_(222);
_dereq_(223);
_dereq_(224);
_dereq_(227);
_dereq_(228);
_dereq_(229);
_dereq_(232);
_dereq_(234);
_dereq_(237);
_dereq_(239);
_dereq_(240);
_dereq_(241);
_dereq_(141);
_dereq_(143);
_dereq_(142);
_dereq_(145);
_dereq_(144);
_dereq_(129);
_dereq_(127);
_dereq_(134);
_dereq_(131);
_dereq_(137);
_dereq_(139);
_dereq_(126);
_dereq_(133);
_dereq_(123);
_dereq_(138);
_dereq_(121);
_dereq_(136);
_dereq_(135);
_dereq_(128);
_dereq_(132);
_dereq_(120);
_dereq_(122);
_dereq_(125);
_dereq_(124);
_dereq_(140);
_dereq_(130);
_dereq_(213);
_dereq_(219);
_dereq_(214);
_dereq_(215);
_dereq_(216);
_dereq_(217);
_dereq_(218);
_dereq_(198);
_dereq_(149);
_dereq_(220);
_dereq_(255);
_dereq_(256);
_dereq_(244);
_dereq_(245);
_dereq_(250);
_dereq_(253);
_dereq_(254);
_dereq_(248);
_dereq_(251);
_dereq_(249);
_dereq_(252);
_dereq_(246);
_dereq_(247);
_dereq_(199);
_dereq_(200);
_dereq_(201);
_dereq_(202);
_dereq_(203);
_dereq_(206);
_dereq_(204);
_dereq_(205);
_dereq_(207);
_dereq_(208);
_dereq_(209);
_dereq_(210);
_dereq_(212);
_dereq_(211);
_dereq_(257);
_dereq_(283);
_dereq_(286);
_dereq_(285);
_dereq_(287);
_dereq_(288);
_dereq_(284);
_dereq_(289);
_dereq_(290);
_dereq_(268);
_dereq_(271);
_dereq_(267);
_dereq_(265);
_dereq_(266);
_dereq_(269);
_dereq_(270);
_dereq_(260);
_dereq_(282);
_dereq_(291);
_dereq_(259);
_dereq_(261);
_dereq_(263);
_dereq_(262);
_dereq_(264);
_dereq_(273);
_dereq_(274);
_dereq_(276);
_dereq_(275);
_dereq_(278);
_dereq_(277);
_dereq_(279);
_dereq_(280);
_dereq_(281);
_dereq_(258);
_dereq_(272);
_dereq_(294);
_dereq_(293);
_dereq_(292);
module.exports = _dereq_(23);
},{"120":120,"121":121,"122":122,"123":123,"124":124,"125":125,"126":126,"127":127,"128":128,"129":129,"130":130,"131":131,"132":132,"133":133,"134":134,"135":135,"136":136,"137":137,"138":138,"139":139,"140":140,"141":141,"142":142,"143":143,"144":144,"145":145,"146":146,"147":147,"148":148,"149":149,"150":150,"151":151,"152":152,"153":153,"154":154,"155":155,"156":156,"157":157,"158":158,"159":159,"160":160,"161":161,"162":162,"163":163,"164":164,"165":165,"166":166,"167":167,"168":168,"169":169,"170":170,"171":171,"172":172,"173":173,"174":174,"175":175,"176":176,"177":177,"178":178,"179":179,"180":180,"181":181,"182":182,"183":183,"184":184,"185":185,"186":186,"187":187,"188":188,"189":189,"190":190,"191":191,"192":192,"193":193,"194":194,"195":195,"196":196,"197":197,"198":198,"199":199,"200":200,"201":201,"202":202,"203":203,"204":204,"205":205,"206":206,"207":207,"208":208,"209":209,"210":210,"211":211,"212":212,"213":213,"214":214,"215":215,"216":216,"217":217,"218":218,"219":219,"220":220,"221":221,"222":222,"223":223,"224":224,"225":225,"226":226,"227":227,"228":228,"229":229,"23":23,"230":230,"231":231,"232":232,"233":233,"234":234,"235":235,"236":236,"237":237,"238":238,"239":239,"240":240,"241":241,"242":242,"243":243,"244":244,"245":245,"246":246,"247":247,"248":248,"249":249,"250":250,"251":251,"252":252,"253":253,"254":254,"255":255,"256":256,"257":257,"258":258,"259":259,"260":260,"261":261,"262":262,"263":263,"264":264,"265":265,"266":266,"267":267,"268":268,"269":269,"270":270,"271":271,"272":272,"273":273,"274":274,"275":275,"276":276,"277":277,"278":278,"279":279,"280":280,"281":281,"282":282,"283":283,"284":284,"285":285,"286":286,"287":287,"288":288,"289":289,"290":290,"291":291,"292":292,"293":293,"294":294}],296:[function(_dereq_,module,exports){
(function (global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53), __webpack_require__(52)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var AnnotationCache = function () {
  function AnnotationCache() {
    _classCallCheck(this, AnnotationCache);

    this._cache = {
      annosPerCanvas: {}
    };
    this._queues = {
      annosPerCanvas: []
    };
    this._maxCanvases = 5;
  }

  _createClass(AnnotationCache, [{
    key: 'getAnnotationsPerCanvas',
    value: function getAnnotationsPerCanvas(canvasId) {
      logger.debug('AnnotationCacheInMemory#getAnnotationsPerCanvas', canvasId);
      this._logState('get');
      return this._cache.annosPerCanvas[canvasId] || null;
    }
  }, {
    key: 'setAnnotationsPerCanvas',
    value: function setAnnotationsPerCanvas(canvasId, annotations) {
      logger.debug('AnnotationCacheInMemory#setAnnotationsPerCanvas canvasId:', canvasId, 'annotations:', annotations);
      var cache = this._cache.annosPerCanvas;
      var queue = this._queues.annosPerCanvas;

      this._logState('set before');

      if (cache[canvasId]) {
        // cache is already set
        return;
      }

      cache[canvasId] = annotations;
      queue.push(canvasId);

      if (queue.length > this._maxCanvases) {
        var _canvasId = queue.shift();
        delete cache[_canvasId];
      }

      this._logState('set after');
    }
  }, {
    key: 'invalidateAllCanvases',
    value: function invalidateAllCanvases() {
      logger.debug('AnnotationCacheInMemory#invalidateAllCanvases');
      this._cache.annosPerCanvas = {};
      this._queues.annosPerCanvas = [];
    }
  }, {
    key: 'invalidateCanvasId',
    value: function invalidateCanvasId(canvasId) {
      logger.debug('AnnotationCacheInMemory#invalidateCanvasId canvasId:', canvasId);
      var queue = this._queues.annosPerCanvas;

      delete this._cache.annosPerCanvas[canvasId];
      queue.splice(queue.indexOf(canvasId), 1);
    }
  }, {
    key: '_logState',
    value: function _logState(label) {
      logger.debug('Mem cache ' + label);
      logger.debug('cache:', this._cache);
      logger.debug('queues:', this._queues);
    }
  }]);

  return AnnotationCache;
}();

exports.default = AnnotationCache;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var AnnotationCacheIndexeddb = function () {
  function AnnotationCacheIndexeddb() {
    _classCallCheck(this, AnnotationCacheIndexeddb);

    this._dbName = 'anno_cache';
    this._valid = window.indexedDB ? true : false;
    this._expiresInMS = 2 * 60 * 60 * 1000; // milliseconds
    this._inMemoryCache = {};
  }

  /**
   * @returns {object} a Promise
   */


  _createClass(AnnotationCacheIndexeddb, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      logger.debug('AnnotationCacheINdexeddb#_init');

      this._db = new Dexie(this._dbName);
      this._db.version(1).stores({
        layers: 'id,jsonData,timestamp',
        annosPerCanvas: 'canvasId,jsonData,timestamp'
      });

      return this._db.open().catch(function (e) {
        _this2._valid = false;
        logger.error('AnnotationCache#setupIndexDb open failed:', e);
      });
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      return this._valid;
    }

    /**
     * @returns {object} a Promise
     */

  }, {
    key: 'deleteDb',
    value: function deleteDb() {
      logger.debug('AnnotationCache#deleteDb');
      return Dexie.delete(this._dbName);
    }

    /**
     * @returns {object} a Promise
     */

  }, {
    key: 'getLayers',
    value: function getLayers() {
      logger.debug('AnnotationCache#getLayers');
      return this._db.layers.where('id').equals(1).first(function (row) {
        var data = row !== undefined ? row.jsonData : null;
        return data instanceof Array ? data : [];
      });
    }

    /**
     * @returns {object} a Promise
     */

  }, {
    key: 'setLayers',
    value: function setLayers(layersJson) {
      logger.debug('AnnotationCache#setLayers', layersJson);
      var _this = this;
      return this._emptyTable('layers').then(function () {
        return _this._db.layers.add({ id: 1, jsonData: layersJson }).catch(function (e) {
          logger.error('AnnotatinCache#setLayers update failed: ' + e);
          throw e;
        });
      });
    }

    /**
     * @returns {object} a Promise
     */

  }, {
    key: 'getAnnotationsPerCanvas',
    value: function getAnnotationsPerCanvas(canvasId) {
      logger.debug('AnnotationCache#getAnnotationsPerCanvas', canvasId);
      var _this = this;
      var coll = this._db.annosPerCanvas.where('canvasId').equals(canvasId).and(function (rec) {
        var nowMS = new Date().valueOf();
        logger.debug('AnnotationCache#getAnnotationsPerCanvas expiration test: ' + (nowMS < rec.timestamp + _this._expiresInMS));
        return nowMS < rec.timestamp + _this._expiresInMS;
      });
      return coll.first(function (row) {
        return row ? row.jsonData : null;
      });
    }

    /**
     * @returns {object} a Promise
     */

  }, {
    key: 'setAnnotationsPerCanvas',
    value: function setAnnotationsPerCanvas(canvasId, data) {
      var _this3 = this;

      logger.debug('AnnotationCache#setAnnotationsPerCanvas canvas:', canvasId, 'data:', data);
      var table = this._db.annosPerCanvas;
      var coll = this._db.annosPerCanvas.where('canvasId').equals(canvasId);
      var nowMS = new Date().valueOf();
      var row = { canvasId: canvasId, jsonData: data, timestamp: nowMS };

      return table.put(row).catch(function (reason) {
        logger.error('AnnotationCache#setAnnotationsPerCanvas put failed for', row, ': ' + reason);
        _this3._valid = false;
      });
    }
  }, {
    key: 'invalidateAllCanvases',
    value: function invalidateAllCanvases() {
      logger.debug('AnnotationCache#invalidateAllCanvases');
      return this._emptyTable('annosPerCanvas');
    }
  }, {
    key: 'invalidateCanvasId',
    value: function invalidateCanvasId(canvasId) {
      logger.debug('AnnotationCache#invalidateCanvasId canvasId:', canvasId);
      return this._deleteAnnotationsPerCanvas(canvasId);
    }

    /**
      * @returns {object} a Promise
      */

  }, {
    key: '_emptyTable',
    value: function _emptyTable(name) {
      logger.debug('AnnotationCache#emptyTable', name);
      var _this = this;
      var table = this._db.table(name);
      return this._db.transaction('rw', table, function () {
        table.each(function (item, cursor) {
          logger.debug('AnnotationCache#emptyTable deleting', cursor.key);
          table.delete(cursor.key).catch(function (e) {
            logger.error('AnnotationCache#emptyTable deleting from table ' + name + ': ' + e);
          });
        });
      });
    }
  }, {
    key: '_deleteAnnotationsPerCanvas',
    value: function _deleteAnnotationsPerCanvas(canvasId) {
      logger.debug('AnnotationCache#deleteAnnotationsPerCanvas canvasId:', canvasId);
      var _this = this;
      var table = this._db.annosPerCanvas;
      var coll = table.where('canvasId').equals(canvasId);
      return coll.delete().catch(function (e) {
        logger.error('AnnotationCache#deleteAnnotationsPerCanvas failed to delete canvasId: ' + canvasId);
      });
    }
  }]);

  return AnnotationCacheIndexeddb;
}();

exports.default = AnnotationCacheIndexeddb;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _firebaseProxy = __webpack_require__(23);

var _firebaseProxy2 = _interopRequireDefault(_firebaseProxy);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _pageController = __webpack_require__(6);

var _pageController2 = _interopRequireDefault(_pageController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Implements inteface between Joosugi annotation explorer and the annotation server
var AnnotationSourceFb = function () {
  function AnnotationSourceFb() {
    _classCallCheck(this, AnnotationSourceFb);

    this.logger = (0, _logger2.default)();
    var fbSettings = (0, _pageController2.default)().getConfig().extension.firebase;
    this.fbProxy = new _firebaseProxy2.default(fbSettings);
    this.fbKeyMap = {}; // key: annotation['@id], value: firebase key.
  }

  _createClass(AnnotationSourceFb, [{
    key: 'getLayers',
    value: function getLayers() {
      var _this = this;
      this.logger.debug('AnnotationSourceFb#getLayers');
      var promise = new Promise(function (resolve, reject) {
        var ref = firebase.database().ref('layers');

        ref.once('value', function (snapshot) {
          var data = snapshot.val();
          var layers = [];
          _this.logger.debug('Layers:', data);
          jQuery.each(data, function (key, value) {
            layers.push(value);
          });
          resolve(layers);
        });
      });
      return promise;
    }
  }, {
    key: 'getAnnotations',
    value: function getAnnotations(canvasId) {
      this.logger.debug('AnnotationSourceFb#getAnnotations canvasId:', canvasId);
      var _this = this;

      return new Promise(function (resolve, reject) {
        var fbDfd = _this.fbProxy.getAnnosByCanvasId(canvasId);
        var annotations = [];

        fbDfd.done(function (annoInfos) {
          _this.logger.debug('AnnotationSourceFb#_search annoInfos:', annoInfos);
          jQuery.each(annoInfos, function (index, annoInfo) {
            var oaAnnotation = _this._getAnnotationInOA(annoInfo.annotation);
            oaAnnotation.layerId = annoInfo.layerId;
            _this.fbKeyMap[oaAnnotation['@id']] = annoInfo.fbKey;
            annotations.push(oaAnnotation);
          });
          resolve(annotations);
        });
      });
    }
  }, {
    key: 'createAnnotation',
    value: function createAnnotation(oaAnnotation) {
      this.logger.debug('AnnotationSourceFb#createAnnotation oaAnnotation:', oaAnnotation);
      var _this = this;
      var layerId = oaAnnotation.layerId;
      var annotation = this._getAnnotationInEndpoint(oaAnnotation);
      var annoId = Mirador.genUUID();
      annotation['@id'] = annoId;
      var canvasIds = _import.annoUtil.getTargetCanvasIds(annotation, this.annotationsList);
      var canvasId = canvasIds[0];
      var fbKey = this.fbProxy.addAnno(annotation, canvasId, layerId);
      this.fbKeyMap[annoId] = fbKey;

      return new Promise(function (resolve, reject) {
        oaAnnotation['@id'] = annoId;
        resolve(oaAnnotation);
      });
    }
  }, {
    key: 'updateAnnotation',
    value: function updateAnnotation(oaAnnotation) {
      this.logger.debug('AnnotationSourceFb#updateAnnotation annotation:', oaAnnotation);

      var _this = this;
      var canvasId = this._getTargetCanvasId(oaAnnotation);
      var layerId = oaAnnotation.layerId;
      var annotation = this._getAnnotationInEndpoint(oaAnnotation);
      var fbKey = this.fbKeyMap[annotation['@id']];
      var ref = firebase.database().ref('/annotations/' + fbKey);

      return new Promise(function (resolve, reject) {
        ref.update({ annotation: annotation, layerId: layerId }, function (error) {
          if (error) {
            var msg = 'ERROR: Firebase update failed';
            reject(msg);
          } else {
            // Delete from all lists except for this canvas/layer.
            _this.fbProxy.deleteAnnoFromListExcludeCanvasLayer(annotation, canvasId, layerId);
            _this.fbProxy.addAnnoToList(annotation, canvasId, layerId);
            _this.logger.debug('Firbase update succeeded');
            resolve(oaAnnotation);
          }
        });
      });
    }
  }, {
    key: 'deleteAnnotation',
    value: function deleteAnnotation(annotationId) {
      this.logger.debug('YaleDemoEndpoint#delete annotationId:' + annotationId);
      var _this = this;
      var fbKey = this.fbKeyMap[annotationId];
      var ref = firebase.database().ref('annotations/' + fbKey);

      return new Promise(function (resolve, reject) {
        ref.remove(function (error) {
          if (error) {
            var msg = 'ERROR delete failed for annotation id: ' + annotationId;
            reject(msg);
          } else {
            _this.fbProxy.deleteAnnoFromList(annotationId);
            resolve();
          }
        });
      });
    }
  }, {
    key: 'updateAnnotationListOrder',
    value: function updateAnnotationListOrder(canvasId, layerId, annoIds) {
      this.logger.debug('AnnotationSourceFb#updateAnnotationListOrder');
      var _this = this;
      var combinedId = canvasId + layerId;
      var ref = firebase.database().ref('lists');
      var query = ref.orderByChild('combinedId').equalTo(combinedId);

      return new Promise(function (resolve, reject) {
        query.once('value', function (snapshot) {
          if (snapshot.exists()) {
            // child with combiedId exists
            resolve();
          } else {
            _this.logger.debug('ERROR updateOrder: list not found for', combinedId);
            reject();
          }
        });
      }).then(function () {
        query.once('child_added', function (snapshot, prevChildKey) {
          snapshot.ref.update({ annotationIds: annoIds });
        });
      });
    }
  }, {
    key: '_getTargetCanvasId',
    value: function _getTargetCanvasId(annotation) {
      var targetAnno = null;

      if (annotation['@type'] === 'oa:Annotation') {
        targetAnno = _import.annoUtil.findFinalTargetAnnotation(annotation, this.annotationsList);
      } else {
        targetAnno = annotation;
      }

      var canvasId = targetAnno.on.full;
      this.logger.debug('_getTargetCanvasId canvas ID:', canvasId);
      return canvasId;
    }

    // Convert Endpoint annotation to OA

  }, {
    key: '_getAnnotationInOA',
    value: function _getAnnotationInOA(annotation) {
      var motivation = annotation.motivation;
      if (!(motivation instanceof Array)) {
        if (motivation !== 'oa:commenting') {
          this.logger.error('YaleEndpoint#getAnnotationInOA unexpected motivation value: ', motivation, ', id: ' + annotation['@id']);
        }
        motivation = ['oa:commenting'];
      }

      var oaAnnotation = {
        '@context': 'http://iiif.io/api/presentation/2/context.json',
        '@type': 'oa:Annotation',
        '@id': annotation['@id'],
        motivation: motivation,
        resource: annotation.resource,
        on: annotation.on,
        within: annotation.within
      };
      oaAnnotation.layerId = annotation.layerId;
      return oaAnnotation;
    }

    // Converts OA Annotation to endpoint format

  }, {
    key: '_getAnnotationInEndpoint',
    value: function _getAnnotationInEndpoint(oaAnnotation) {
      var annotation = {
        '@id': oaAnnotation['@id'],
        '@type': oaAnnotation['@type'],
        '@context': oaAnnotation['@context'],
        motivation: oaAnnotation.motivation,
        resource: oaAnnotation.resource,
        on: oaAnnotation.on
      };
      if (oaAnnotation.within) {
        annotation.within = oaAnnotation.within;
      }
      if (oaAnnotation.orderWeight) {
        annotation.orderWeight = oaAnnotation.orderWeight;
      }
      return annotation;
    }
  }]);

  return AnnotationSourceFb;
}();

exports.default = AnnotationSourceFb;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var AnnotationTocCache = function () {
  function AnnotationTocCache(options) {
    _classCallCheck(this, AnnotationTocCache);

    this.options = Object.assign({
      tocSpec: null,
      annotationExplorer: null
    }, options);

    this._cache = {};
  }

  _createClass(AnnotationTocCache, [{
    key: 'getToc',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(canvasId) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logger.debug('AnnotationTocCache#getToc canvasId:', canvasId);

                if (this._cache[canvasId]) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.createToc(canvasId);

              case 4:
                this._cache[canvasId] = _context.sent;
                _context.next = 8;
                break;

              case 7:
                logger.debug('AnnotationTocCache#getToc hit cache', canvasId);

              case 8:
                logger.debug('AnnotationTocCache getToc toc:', this._cache[canvasId]);
                return _context.abrupt('return', this._cache[canvasId]);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getToc(_x) {
        return _ref.apply(this, arguments);
      }

      return getToc;
    }()
  }, {
    key: 'createToc',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(canvasId) {
        var annotations, toc;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.options.annotationExplorer.getAnnotations({ canvasId: canvasId });

              case 2:
                annotations = _context2.sent;
                toc = new _import.AnnotationToc(this.options.tocSpec, annotations, { logger: logger });
                return _context2.abrupt('return', toc);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createToc(_x2) {
        return _ref2.apply(this, arguments);
      }

      return createToc;
    }()
  }, {
    key: 'invalidate',
    value: function invalidate(canvasId) {
      delete this._cache[canvasId];
    }
  }]);

  return AnnotationTocCache;
}();

exports.default = AnnotationTocCache;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FirebaseProxy = function () {
  function FirebaseProxy(settings) {
    _classCallCheck(this, FirebaseProxy);

    this.logger = (0, _logger2.default)();
    var config = {
      apiKey: settings.apiKey,
      authDomain: settings.authDomain,
      databaseURL: settings.databaseUrl,
      storageBuket: settings.storageBuket
    };
    firebase.initializeApp(config);
  }

  _createClass(FirebaseProxy, [{
    key: 'getAnnosByCanvasId',
    value: function getAnnosByCanvasId(canvasId) {
      var _this = this;
      var dfd = jQuery.Deferred();
      var ref = firebase.database().ref('annotations');
      var fbAnnos = {};
      var fbKeys = {};
      var annoInfos = [];

      ref.once('value', function (snapshot) {
        var data = snapshot.val() || [];
        jQuery.each(data, function (key, value) {
          if (value.canvasId === canvasId) {
            var annoId = value.annotation['@id'];
            fbKeys[annoId] = key;
            fbAnnos[annoId] = value.annotation;
          }
        });
        var listsRef = firebase.database().ref('lists');
        listsRef.once('value', function (snapshot) {
          var listObjs = snapshot.val() || [];
          jQuery.each(listObjs, function (key, listObj) {
            if (listObj.canvasId === canvasId) {
              var annotationIds = listObj.annotationIds || [];
              jQuery.each(annotationIds, function (index, annotationId) {
                var fbKey = fbKeys[annotationId];
                var anno = fbAnnos[annotationId];
                if (anno) {
                  annoInfos.push({
                    fbKey: fbKey,
                    annotation: anno,
                    layerId: listObj.layerId
                  });
                } else {
                  _this.logger.error("Anno in the list doesn't exist: " + annotationId);
                }
              });
            }
          });
          dfd.resolve(annoInfos);
        });
      });
      return dfd;
    }
  }, {
    key: 'addAnno',
    value: function addAnno(annotation, canvasId, layerId) {
      var ref = firebase.database().ref('annotations');
      var annoObj = {
        canvasId: canvasId,
        layerId: layerId,
        annotation: annotation
      };
      annoObj.id = annotation['@id'];
      var annoRef = ref.push(annoObj);
      this.addAnnoToList(annotation, canvasId, layerId);
      return annoRef.key;
    }
  }, {
    key: 'addAnnoToList',
    value: function addAnnoToList(annotation, canvasId, layerId) {
      var dfd = jQuery.Deferred();
      var annoId = annotation['@id'];
      var combinedId = canvasId + layerId;
      var ref = firebase.database().ref('lists');
      var query = ref.orderByChild('combinedId').equalTo(combinedId);

      query.once('value', function (snapshot) {
        if (snapshot.exists()) {
          // child with combiedId exists
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });

      dfd.done(function (matched) {
        if (matched) {
          query.once('child_added', function (snapshot, prevChildKey) {
            var data = snapshot.val();
            var ref = snapshot.ref;
            data.annotationIds = data.annotationIds || [];
            if (jQuery.inArray(annoId, data.annotationIds) === -1) {
              data.annotationIds.push(annoId);
              ref.update({ annotationIds: data.annotationIds });
            }
          });
        } else {
          ref.push({
            combinedId: combinedId,
            canvasId: canvasId,
            layerId: layerId,
            annotationIds: [annoId]
          });
        }
      });
    }
  }, {
    key: 'deleteAnnoFromList',
    value: function deleteAnnoFromList(annoId) {
      var ref = firebase.database().ref('lists');
      ref.on('child_added', function (snapshot) {
        var data = snapshot.val();
        var index = data.annotationIds ? data.annotationIds.indexOf(annoId) : -1;
        if (index > -1) {
          data.annotationIds.splice(index, 1);
          snapshot.ref.update({ annotationIds: data.annotationIds });
        }
      });
    }
  }, {
    key: 'deleteAnnoFromListExcludeCanvasLayer',
    value: function deleteAnnoFromListExcludeCanvasLayer(annotation, canvasId, layerId) {
      this.logger.debug('FirebaseProxy#_fbDeleteAnnoFromListExcludeCanvasLayer');
      var annoId = annotation['@id'];
      var combinedId = canvasId + layerId;
      var ref = firebase.database().ref('lists');

      ref.once('value', function (snapshot) {
        var data = snapshot.val() || [];
        snapshot.forEach(function (childSnapshot) {
          var childRef = childSnapshot.ref;
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          if (childData.combinedId !== combinedId) {
            var index = childData.annotationIds ? childData.annotationIds.indexOf(annoId) : -1;
            if (index > -1) {
              childData.annotationIds.splice(index, 1);
              childRef.update({ annotationIds: childData.annotationIds });
            }
          }
        });
      });
    }
  }]);

  return FirebaseProxy;
}();

exports.default = FirebaseProxy;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getConfigFetcher;

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getConfigFetcher() {
  if (!instance) {
    instance = new ConfigFetcher();
  }
  return instance;
}

var instance = null;

var ConfigFetcher = function () {
  function ConfigFetcher() {
    _classCallCheck(this, ConfigFetcher);

    this.logger = (0, _logger2.default)();
  }

  /**
   * Retrieves parameters passed via HTML attributes.
   */


  _createClass(ConfigFetcher, [{
    key: 'fetchSettingsFromHtml',
    value: function fetchSettingsFromHtml(elem) {
      var options = {};
      var tocTagsStr = elem.attr('data-toc-tags') || '';
      var layerIdsStr = elem.attr('data-layer-ids') || '';

      options.apiUrl = elem.attr('data-settings-url');
      options.roomId = elem.attr('data-room-id');

      options.manifestUri = elem.attr('data-manifest-url');
      options.projectId = elem.attr('data-room-id'); // group or project ID

      options.canvasId = elem.attr('data-canvas-id') || '';
      options.tocTags = tocTagsStr ? tocTagsStr.split(',') : [];
      options.layerIds = layerIdsStr ? layerIdsStr.split(',') : [];
      options.annotationId = elem.attr('data-annotation-id') || null;

      return options;
    }

    /**
     * Retrieves settings from the server via a REST API.
     */

  }, {
    key: 'fetchSettingsFromApi',
    value: function fetchSettingsFromApi(baseUrl, roomId) {
      var url = baseUrl + '?room_id=' + roomId;
      this.logger.debug('ConfigFetcher#fetchSettingsFromApi url:', url);

      return new Promise(function (resolve, reject) {
        var dfd = jQuery.Deferred();
        jQuery.ajax({
          url: url,
          success: function success(data) {
            resolve(data);
          },
          error: function error() {
            reject('Failed to fetch server settings from ' + url);
          }
        });
      });
    }
  }]);

  return ConfigFetcher;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: {
    nextCanvas: 'Next Canvas',
    previousCanvas: 'Previous Canvas',
    showBottomPanel: "Show Canvas List",
    hideBottomPanel: "Hide Canvas List"
  },
  ko: {
    nextCanvas: '다음 캔버스',
    previousCanvas: '이전 캔버스',
    showBottomPanel: "캔버스 리스트",
    hideBottomPanel: "캔버스 리스트 감추기"
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localesDefault = __webpack_require__(25);

var _localesDefault2 = _interopRequireDefault(_localesDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Locales = function () {
  function Locales() {
    _classCallCheck(this, Locales);
  }

  _createClass(Locales, [{
    key: 'getLocalesConfig',
    value: function getLocalesConfig(options) {
      var settings = _localesDefault2.default;
      var overrides = options.ui.i18nOverrides;
      if ((typeof overrides === 'undefined' ? 'undefined' : _typeof(overrides)) === 'object') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(overrides)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                lang = _step$value[0],
                data = _step$value[1];

            if (!settings[lang]) {
              settings[lang] = {};
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = Object.entries(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    key = _step2$value[0],
                    value = _step2$value[1];

                settings[lang][key] = value;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return settings;
    }
  }]);

  return Locales;
}();

exports.default = Locales;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _annotationSource = __webpack_require__(8);

var _annotationSource2 = _interopRequireDefault(_annotationSource);

var _annotationSourceFb = __webpack_require__(21);

var _annotationSourceFb2 = _interopRequireDefault(_annotationSourceFb);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

var _locales = __webpack_require__(26);

var _locales2 = _interopRequireDefault(_locales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var MiradorConfigBuilder = function () {
  function MiradorConfigBuilder(options) {
    _classCallCheck(this, MiradorConfigBuilder);

    this.options = Object.assign({
      buildPath: null,
      canvasId: null,
      defaultSettings: null, // Mirador default settings
      disableAuthz: false,
      endpointUrl: null,
      projectId: null,
      isEditor: false,
      manifestUri: null,
      miradorId: null, // ID of Mirador instance
      tagHierarchy: null
    }, options);
    logger.debug('MiradorConfigBuilder#constructor options:', options);
  }

  _createClass(MiradorConfigBuilder, [{
    key: 'buildConfig',
    value: function buildConfig() {
      var config = jQuery.extend(true, {}, this.options.defaultSettings);
      var annotationsOverlay = (0, _stateStore2.default)().getTransient('annotationsOverlay');
      var tocSpec = (0, _stateStore2.default)().getTransient('tocSpec');

      jQuery.extend(config, {
        id: this.options.miradorId,
        buildPath: this.options.buildPath || '/',
        i18nPath: '/locales/',
        imagesPath: '/images/',
        logosPath: '/images/logos/',
        mainMenuSettings: { show: false },
        data: [{ manifestUri: this.options.manifestUri }],
        windowObjects: [this.windowObject()],
        autoHideControls: false, // autoHide is bad for touch-only devices
        annotationEndpoint: this.endPointConfig(),
        annotationBodyEditor: {
          module: 'AnnotationEditor',
          options: {
            miradorDriven: true,
            mode: 'create'
          }
        },
        i18nAdditions: new _locales2.default().getLocalesConfig(this.options),
        extension: {
          tagHierarchy: this.options.tagHierarchy || null,
          projectId: this.options.projectId || null,
          firebase: this.options.firebase || null,
          disableAuthz: this.options.disableAuthz || false
        }
      });

      var windowSettings = config.windowSettings;

      windowSettings.displayLayout = false;

      if (tocSpec) {
        windowSettings.sidePanelOptions.annotationTocTabAvailable = true;
        windowSettings.sidePanelOptions.toc = false;
      }

      if (!this.options.isEditor) {
        windowSettings.canvasControls.annotations.annotationCreation = false;
      }
      windowSettings.canvasControls.annotations.annotationState = 'on';

      if (annotationsOverlay) {
        if (annotationsOverlay.hoverColor) {
          config.drawingToolsSettings.hoverColor = annotationsOverlay.hoverColor;
        }
        if (annotationsOverlay.hoverWidthFactor) {
          config.drawingToolsSettings.hoverWidthFactor = annotationsOverlay.hoverWidthFactor;
        }
      }

      logger.debug('MiradorConfigBuilder#buildConfig config:', config);
      return config;
    }
  }, {
    key: 'windowObject',
    value: function windowObject() {
      var windowObject = {
        loadedManifest: this.options.manifestUri,
        bottomPanelVisible: false
      };
      if (this.options.canvasId) {
        // if instructed to load a specific canvas
        windowObject.canvasID = this.options.canvasId;
      }
      return windowObject;
    }
  }, {
    key: 'endPointConfig',
    value: function endPointConfig() {
      if (this.options.endpointUrl === 'firebase') {
        return {
          name: 'Yale (Firebase) Annotations',
          module: 'YaleEndpoint',
          dataSource: _annotationSourceFb2.default,
          options: {}
        };
      } else {
        return {
          name: 'Yale Annotations',
          module: 'YaleEndpoint',
          dataSource: _annotationSource2.default,
          options: { prefix: this.options.endpointUrl }
        };
      }
    }
  }]);

  return MiradorConfigBuilder;
}();

exports.default = MiradorConfigBuilder;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnnotationTableOfContents = function () {
  function AnnotationTableOfContents(options) {
    _classCallCheck(this, AnnotationTableOfContents);

    this.options = Object.assign({
      element: null,
      appendTo: null,
      windowId: null,
      structures: [],
      manifestVersion: null,
      previousSelectedElements: [],
      selectedElements: [],
      previousOpenElements: [],
      openElements: [],
      hoveredElement: [],
      selectContext: null,
      tocData: {},
      active: null,
      eventEmitter: null
    }, options);

    this.init();
  }

  _createClass(AnnotationTableOfContents, [{
    key: 'init',
    value: function init() {
      var _this = this;
      var tocSpec = (0, _stateStore2.default)().getTransient('tocSpec');

      if (!tocSpec) {
        this.element = jQuery(emptyTemplate()).appendTo(this.options.appendTo);
      } else {
        this.element = jQuery(template()).appendTo(this.options.appendTo);
        var topGen = tocSpec.generator[0];

        for (var i = 0; i < topGen.max; ++i) {
          var itemElem = this._createItem(i, tocSpec);
          this.element.append(itemElem);
        }
      }

      this._selectedElem = null;

      this.element.data('AnnotationTableOfContent', this);

      this.element.mousemove(function (event) {
        // To prevent mousemove handler for the annotation overlay from being called
        // -- it must be a bug on the imageview's or annotation layer's side.
        event.stopPropagation();
      });

      this.element.mouseenter(function (event) {
        _this._unselect();
      });
    }
  }, {
    key: 'scrollToTags',
    value: function scrollToTags(tags) {
      var klass = '.' + tags[0];
      var targetElem = this.element.find(klass);

      this._select(targetElem);
      this.element.scrollTo(targetElem, 500);
    }
  }, {
    key: '_select',
    value: function _select(elem) {
      this._unselect();
      this._selectedElem = elem;
      elem.addClass('selected');
    }
  }, {
    key: '_unselect',
    value: function _unselect() {
      if (this._selectedElem) {
        this._selectedElem.removeClass('selected');
      }
    }
  }, {
    key: '_createItem',
    value: function _createItem(index, tocSpec) {
      var _this = this;
      var spec = tocSpec.generator[0];
      var tag = spec.tag.prefix + (index + 1);
      var item = jQuery(itemTemplate({
        tag: tag,
        content: spec.descriptions[index]
      }));

      var canvasIds = tocSpec.canvasMap[tag];

      item.click(function (event) {
        var imageWindowId = _this.options.windowId;
        jQuery.publish('YM_ANNOTATION_TOC_TAGS_SELECTED', [imageWindowId, canvasIds[0], [tag]]);
      });
      return item;
    }
  }]);

  return AnnotationTableOfContents;
}();

exports.default = AnnotationTableOfContents;


var template = Handlebars.compile(['<div class="ym-annotation-toc">', '<h1>Table of Contents</h1>', '</div>'].join(''));

var emptyTemplate = Handlebars.compile(['<div class="ym-annotation-toc">', 'Table of contents is empty', '</div>'].join(''));

var itemTemplate = Handlebars.compile(['<div class="ym-annotation-toc-item {{tag}}">', '<a href="#">{{{content}}}</a>', '</div>'].join(''));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Overrides the same-named file in Mirador core to prevent
 * Bootstrap or Bootbox code being called, which collides with Semantic UI.
 */

(function ($) {

  var template = Handlebars.compile(['<div class="header"></div>', '<div class="content">', '  <div class="description">', '    <p>{{message}}</p>', '  </div>', '</div>', '<div class="actions">', '  <div class="ui ok button">{{yesLabel}}</div>', '  <div class="ui cancel button">{{noLabel}}</div>', '</div>'].join(''));

  $.DialogBuilder = function (container) {
    this.logger = (0, _logger2.default)();
    var id = 'ym_dialog';
    var elem = jQuery('#' + id);
    if (elem.length === 0) {
      elem = jQuery('<div/>').attr('id', id).addClass('ui modal ym_modal').appendTo(jQuery('body'));
    }
    this.elem = elem;
  };

  $.DialogBuilder.prototype = {

    confirm: function confirm(message, callback) {
      var result = window.confirm(message);
      callback(result);
    },

    dialog: function dialog(opts) {
      this.logger.debug('DialogBuilder#dialog opts:', opts);
      var yes = opts.buttons.yes;
      var no = opts.buttons.no;

      this.elem.html(template({
        message: opts.message,
        yesLabel: yes.label,
        noLabel: no.label
      }));
      this.elem.modal({
        onApprove: function onApprove(elem) {
          if (typeof yes.callback === 'function') {
            yes.callback();
          }
        },
        onDeny: function onDeny(elem) {
          if (typeof no.callback === 'function') {
            no.callback();
          }
        }
      });
      this.elem.modal('show');
    }
  };
})(Mirador);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _import = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

  $.yaleExt = $.yaleExt || {};

  var logger = (0, _logger2.default)();

  jQuery.extend($.yaleExt, {

    // Get bounds of multiple paper.js shapes.
    getCombinedBounds: function getCombinedBounds(shapes) {
      logger.debug('yaleExt.getCombinedBounds shapes:', shapes);
      var bounds = null;
      jQuery.each(shapes, function (index, shape) {
        if (bounds) {
          bounds = bounds.unite(shape.strokeBounds);
        } else {
          bounds = shape.strokeBounds;
        }
        logger.debug('index: ' + index + ', bounds: ' + bounds);
      });
      return bounds;
    },

    updateTooltipStyles: function updateTooltipStyles() {
      var elem = jQuery('.qtip-default, .qtip-content');
      var styles = (0, _stateStore2.default)().getTransient('tooltipStyles');
      if (styles) {
        elem.css('color', styles.color);
        elem.css('background-color', styles.backgroundColor);
        elem.css('border', styles.border);
      }
    },

    truncate: function truncate(html, maxLen) {
      var text = html.replace(/<(?:.|\n)*?>/gm, '');
      text = text.replace(/&.*?;/gm, '');
      if (text.length > maxLen) {
        return text.slice(0, maxLen - 3) + '...';
      } else {
        return text;
      }
    }
  });
})(Mirador);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  var logger = (0, _logger2.default)();

  $.Hud.prototype.qtipExtra = function (jsonLd) {

    this.element.find('.mirador-osd-previous').each(function () {
      jQuery(this).qtip({
        content: {
          text: jQuery(this).attr('title')
        },
        position: {
          my: 'bottom left',
          at: 'top left'
        },
        style: {
          classes: 'qtip-dark qtip-shadow qtip-rounded',
          tip: false
        }
      });
    });
    this.element.find('.mirador-osd-next').each(function () {
      jQuery(this).qtip({
        content: {
          text: jQuery(this).attr('title')
        },
        position: {
          my: 'bottom right',
          at: 'top right'
        },
        style: {
          classes: 'qtip-dark qtip-shadow qtip-rounded',
          tip: false
        }
      });
    });
  };

  $.Hud.prototype.toggleBottomPanelQtip = function (bottomPanelVisible) {
    var title = bottomPanelVisible ? i18next.t('hideBottomPanel') : i18next.t('showBottomPanel');
    var elem = this.element.find('.mirador-osd-toggle-bottom-panel');

    if (!this._bottomPanelQtipInitialized) {
      elem.each(function () {
        jQuery(this).qtip({
          content: {
            text: title
          },
          position: {
            my: 'bottom center',
            at: 'top center',
            adjust: {
              method: 'shift',
              y: 10
            }
          },
          style: {
            classes: 'qtip-dark qtip-shadow qtip-rounded'
          }
        });
      });
      this._bottomPanelQtipInitialized = true;
    } else {
      elem.qtip('option', 'content.text', title);
    }
  };
})(Mirador);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _import = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

  $.yaleExt = $.yaleExt || {};

  var logger = (0, _logger2.default)();

  $.ImageView.prototype.zoomToAnnotation = function (annotation) {
    logger.debug('ImageView(ext)#zoomToAnnotation annotation:', annotation);
    var viewport = this.osd.viewport;
    var currentZoom = viewport.getZoom();
    logger.debug('zoomToAnnotation zoom: ' + currentZoom);
    var shapes = this.annotationsLayer.drawTool.getShapesForAnnotation(annotation);
    var shapeBounds = $.yaleExt.getCombinedBounds(shapes); // in image coordinates
    var shapeWH = viewport.imageToViewportCoordinates(shapeBounds.width, shapeBounds.height);
    var viewportBounds = viewport.getBounds();
    var widthRatio = shapeWH.x / viewportBounds.width;
    logger.debug('w ratio: ' + widthRatio);
    var heightRatio = shapeWH.y / viewportBounds.height;
    logger.debug('h ratio: ' + heightRatio);
    var zoomFactor = 1.0 / Math.max(widthRatio, heightRatio) * 0.75;
    logger.debug('zoomFactor: ' + zoomFactor);

    if (typeof zoomFactor === 'number' && !isNaN(zoomFactor)) {
      viewport.zoomBy(zoomFactor);
    } else {
      var msg = 'ImageView(ext)#zoomToAnnotation invalid zoomFactor ' + zoomFactor;
      logger.error(msg, annotation);
      throw msg;
    }
  };

  /*
    * Highlight the boundaries for the currently chosen annotation
    * and pan to show the annotated area.
    */
  $.ImageView.prototype.panToAnnotation = function (annotation) {
    logger.debug('ImageView(ext)#panToAnnotation anno:', annotation);
    var viewport = this.osd.viewport;
    var shapes = this.annotationsLayer.drawTool.getShapesForAnnotation(annotation);
    var shapeBounds = $.yaleExt.getCombinedBounds(shapes); // in image coordinates
    var x = shapeBounds.x + shapeBounds.width / 2;
    var y = shapeBounds.y + shapeBounds.height / 2;
    var p = new OpenSeadragon.Point(x, y);

    var shapeXY = viewport.imageToViewportCoordinates(shapeBounds.x, shapeBounds.y);
    var shapeWH = viewport.imageToViewportCoordinates(shapeBounds.width, shapeBounds.height);
    var shapeLeft = shapeXY.x;
    var shapeRight = shapeXY.x + shapeWH.x;
    var shapeTop = shapeXY.y;
    var shapeBottom = shapeXY.y + shapeWH.y;

    var viewportBounds = viewport.getBounds();
    var viewportHeight = viewport.getHomeBounds().height;

    var visibleLeft = viewportBounds.x;
    var visibleRight = viewportBounds.x + viewportBounds.width;
    var visibleTop = viewportBounds.y;
    var visibleBottom = viewportBounds.y + viewportBounds.height;

    var padding = 0.08 / viewport.getZoom();
    var panX = 0;
    var panY = 0;

    if (shapeRight + padding > visibleRight) {
      // right side hidden
      if (shapeLeft - padding < visibleLeft) {
        // right hidden, left hidden
        panX = shapeLeft - padding - visibleLeft;
      } else {
        // right hidden, left not hidden
        panX = shapeRight + padding - visibleRight;
        if (shapeLeft - panX - padding < visibleLeft) {
          // left hidden if panned
          panX -= visibleLeft - (shapeLeft - panX - padding);
        }
      }
    } else if (shapeLeft - padding < visibleLeft) {
      // left hidden, right not hidden
      panX = shapeLeft - padding - visibleLeft;
    }

    if (shapeBottom + padding > visibleBottom) {
      // bottom side hidden
      if (shapeTop - padding < visibleTop) {
        // bottom hidden, top hidden
        panY = shapeTop - padding - visibleTop;
      } else {
        // right hidden, left not hidden
        panY = shapeBottom + padding - visibleBottom;
        if (shapeTop - panY - padding < visibleTop) {
          // top hidden if panned
          panY -= visibleTop - (shapeTop - panY - padding);
        }
      }
    } else if (shapeTop - padding < visibleTop) {
      // top hidden, bottom not hidden
      panY = shapeTop - padding - visibleTop;
    }

    if (typeof panX === 'number' && !isNaN(panX) && typeof panY === 'number' && !isNaN(panY)) {
      viewport.panBy(new OpenSeadragon.Point(panX, panY));
    } else {
      var msg = 'ImageView(ext)#panToAnnotation invalid value(s) panX: ' + panX + ', panY: ' + panY;
      logger.error(msg, annotation);
      throw msg;
    }
  };

  var _listenForActions = $.ImageView.prototype.listenForActions;

  $.ImageView.prototype.listenForActions = function () {
    var _this = this;

    _listenForActions.call(this);

    this.eventEmitter.subscribe('ANNOTATIONS_LIST_UPDATED', function (event) {
      logger.debug('ImageView in window ' + _this.windowId + ' received annotationRendered; annotationToBeFocused:', _this._annotationToBeFocused);
      if (_this._annotationToBeFocused) {
        // setTimeout in order to give the OsdRegionDrawTool time to create
        // annotation shapes in the overlay after window.getAnnotations() is done
        setTimeout(function () {
          var imageWindowProxy = (0, _miradorProxyManager2.default)().getWindowProxyById(_this.windowId);
          var anno = _this._annotationToBeFocused;

          if (!_import.annoUtil.hasTargetOnCanvas(anno)) {
            var annoMap = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = imageWindowProxy.getAnnotationsList()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _anno = _step.value;

                annoMap[_anno['@id']] = _anno;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            anno = _import.annoUtil.findTransitiveTargetAnnotations(anno, annoMap).filter(function (anno) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = (0, _import.Anno)(anno).targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var target = _step2.value;

                  if (target.full === imageWindowProxy.getCurrentCanvasId()) {
                    return true;
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              return false;
            })[0];
          }
          _this._annotationToBeFocused = null;
          if (anno) {
            _this.zoomToAnnotation(anno);
            _this.panToAnnotation(anno);
            _this.annotationsLayer.drawTool.updateHighlights(anno);
          } else {
            logger.error('ImageWindow(ext):SUB:ANNOWIN_ANNOTATION_CLICKED annotation not found');
          }
        }, 500);
      }
    });
  };
})(Mirador);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  var logger = (0, _logger2.default)();
  var copyrightedImageServiceUrl = '';
  var width = 1,
      height = 1;

  $.Manifest.prototype.processCopyright = function (jsonLd) {
    logger.debug('Manifest#processCopyright jsonLd in:', jsonLd);
    copyrightedImageServiceUrl = (0, _stateStore2.default)().getTransient('copyrightedImageServiceUrl');

    if ((0, _stateStore2.default)().getTransient('copyrighted')) {
      var _getReplacementDimens = getReplacementDimensions(jsonLd);

      var _getReplacementDimens2 = _slicedToArray(_getReplacementDimens, 2);

      width = _getReplacementDimens2[0];
      height = _getReplacementDimens2[1];

      var sequences = jsonLd.sequences;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sequences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sequence = _step.value;

          processSequence(sequence);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    logger.debug('Manifest#processCopyright jsonLd out:', jsonLd);
    return jsonLd;
  };

  function getReplacementDimensions(manifest) {
    var maxWidth = 0,
        maxHeight = 0;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = manifest.sequences[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var sequence = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = sequence.canvases[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var canvas = _step3.value;

            if (canvas.width > maxWidth) {
              maxWidth = canvas.width;
            }
            if (canvas.height > maxHeight) {
              maxHeight = canvas.height;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
      // Since the image is 2048x2048, conversion to bigger than 4096x4096 is
      // not supported by the Loris server
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var side = Math.min(Math.max(maxWidth, maxHeight), 4096);
    return [side, side];
  }

  function processSequence(sequence) {
    var canvases = sequence.canvases;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = canvases[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var canvas = _step4.value;

        processCanvas(canvas);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  function processCanvas(canvas) {
    var images = canvas.images;

    canvas.width = width;
    canvas.height = height;

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = images[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var image = _step5.value;

        processImage(image);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  }

  function processImage(image) {
    var resource = image.resource;
    resource['@id'] = copyrightedImageServiceUrl + '/full/' + width + ',' + height + '/0/default.jpg';
    resource.service['@id'] = copyrightedImageServiceUrl;
    resource.width = String(width);
    resource.height = String(height);
  }
})(Mirador);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  var logger = (0, _logger2.default)();

  /*
    * Get paper.js shapes which are associated with the annotation.
    */
  $.OsdRegionDrawTool.prototype.getShapesForAnnotation = function (annotation) {
    logger.debug('OsdRegionDrawTool(ext)#getShapesForAnnotation this.annotationsToShapesMap:', this.annotationsToShapesMap);
    var out_shapes = [];
    jQuery.each(this.annotationsToShapesMap, function (key, shapes) {
      if (key === annotation['@id']) {
        jQuery.each(shapes, function (index, shape) {
          out_shapes.push(shape);
        });
      }
    });
    return out_shapes;
  };

  $.OsdRegionDrawTool.prototype.saveStrokeColor = function (shape) {
    if (!shape.data._ym_defaultStrokeColor) {
      shape.data._ym_defaultStrokeColor = shape.strokeColor;
    }
  };

  $.OsdRegionDrawTool.prototype.saveStrokeWidth = function (shape) {
    if (!shape.data._ym_defaultStrokeWidth) {
      shape.data._ym_defaultStrokeWidth = shape.data.strokeWidth;
    }
  };

  $.OsdRegionDrawTool.prototype.getDefaultStrokeWidth = function (shape) {
    if (typeof shape.data._ym_defaultStrokeWidth === 'number') {
      return shape.data._ym_defaultStrokeWidth;
    } else {
      return shape.data.strokeWidth;
    }
  };

  /*
    * Highlight annotated area for annotation focused in annotation window.
    */
  $.OsdRegionDrawTool.prototype.updateHighlights = function (annotation) {

    var _this = this;
    jQuery.each(this.annotationsToShapesMap, function (key, shapes) {
      jQuery.each(shapes, function (index, shape) {
        if (shape.data.annotation['@id'] === annotation['@id']) {
          _this.highlightShape(shape);
          shape.bringToFront();
        } else {
          _this.deHighlightShape(shape);
          shape.sendToBack();
        }
      });
    });
    this.osdViewer.forceRedraw();
  };

  $.OsdRegionDrawTool.prototype.updateShapesVisibility = function (annotations) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.values(this.annotationsToShapesMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var shapes = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = shapes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var shape = _step2.value;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = annotations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var annotation = _step3.value;

                if (shape.data.annotation['@id'] === annotation['@id']) {
                  //this.highlightShape(shape);
                  shape.bringToFront();
                  shape.opacity = 1;
                } else {
                  //this.deHighlightShape(shape);
                  shape.sendToBack();
                  var settings = (0, _stateStore2.default)().getTransient('annotationsOverlay');
                  if (settings && settings.hideUnfocused) {
                    shape.opacity = 0;
                  } else {
                    shape.opacity = 1;
                  }
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  $.OsdRegionDrawTool.prototype.highlightShape = function (shape) {
    logger.debug('highlightShape', shape);
    this.saveStrokeColor(shape);
    this.saveStrokeWidth(shape);

    var setting = (0, _stateStore2.default)().getTransient('annotationsOverlay');
    if (setting) {
      if (setting.hoverColor) {
        shape.strokeColor = setting.hoverColor;
      }
      if (setting.hoverWidthFactor) {
        var defaultWidth = shape.data._ym_defaultStrokeWidth;
        console.log('default width', defaultWidth);
        shape.data.strokeWidth = setting.hoverWidthFactor * (typeof defaultWidth === 'number' ? defaultWidth : shape.data.strokeWidth);
      }
    }
    shape.set({ opacity: 1 });
  }, $.OsdRegionDrawTool.prototype.deHighlightShape = function (shape) {
    //logger.debug('deHighlightShape', shape);

    if (shape.data._ym_defaultStrokeColor) {
      shape.strokeColor = shape.data._ym_defaultStrokeColor;
    }

    if (shape._ym_defaultStrokeWidth) {
      shape.data.strokeWidth = shape._ym_defaultStrokeWidth;
    }

    var settings = (0, _stateStore2.default)().getTransient('annotationsOverlay');
    if (settings && settings.hideUnfocused) {
      shape.opacity = 0;
    } else {
      shape.opacity = 1;
    }
  };
})(Mirador);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _annotationEditor = __webpack_require__(13);

var _annotationEditor2 = _interopRequireDefault(_annotationEditor);

var _annotationTableOfContents = __webpack_require__(28);

var _annotationTableOfContents2 = _interopRequireDefault(_annotationTableOfContents);

var _yaleEndpoint = __webpack_require__(12);

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Make global names available to Mirador.
 */
(function ($) {

  $.AnnotationEditor = _annotationEditor2.default;
  $.AnnotationTableOfContents = _annotationTableOfContents2.default;
  $.YaleEndpoint = _yaleEndpoint.YaleEndpoint;
})(Mirador);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

var _annotationWindow = __webpack_require__(43);

var _annotationWindow2 = _interopRequireDefault(_annotationWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var _class = function () {
  function _class(rootElementId) {
    _classCallCheck(this, _class);

    this.init(rootElementId);
  }

  _createClass(_class, [{
    key: 'init',
    value: function init(rootElementId) {
      logger.debug('Grid#init');
      this.element = jQuery('#' + rootElementId);
      this.miradorProxyManager = (0, _miradorProxyManager2.default)();
      this._annotationExplorer = (0, _app2.default)().getAnnotationExplorer();
      this._annotationWindows = {};

      this.initLayout();
      this.bindEvents();
    }

    // GoldenLayout

  }, {
    key: 'initLayout',
    value: function initLayout() {
      var _this = this;

      logger.debug('Grid#initLayout');
      var config = {
        settings: {
          hasHeaders: true,
          showPopoutIcon: false,
          selectionEnabled: false
        },
        dimensions: {
          minItemWidth: 200,
          minItemHeight: 200
        },
        content: [{
          type: 'row',
          isClosable: false,
          content: [/*{
                    type: 'component',
                    componentName: 'Mirador',
                    componentState: { label: 'Mirador' },
                    isClosable: false
                    }*/]
        }]
      };

      this._layout = new GoldenLayout(config, this.element);

      this._layout.registerComponent('Mirador', function (container, componentState) {
        var id = componentState.miradorId;
        var template = Handlebars.compile(jQuery('#viewer_template').html());
        container.getElement().html(template({ id: id }));
      });

      this._layout.registerComponent('Annotations', function (container, componentState) {
        var id = componentState.windowId;
        var annotationWindowElem = jQuery('<div/>').attr('id', id)[0];
        container.getElement().html(annotationWindowElem.outerHTML);
      });

      this._layout.on('stateChanged', function (e) {
        logger.debug('GoldenLayout stateChanged event:', e);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.miradorProxyManager.getMiradorProxies()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var miradorProxy = _step.value;

            miradorProxy.publish('resizeMirador');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return true;
      });

      this._layout.on('itemDestroyed', function (item) {
        logger.debug('GoldenLayout itemDestroyed item:', item);
        if (item.componentName == 'Annotations') {
          var windowId = item.config.componentState.windowId;
          logger.debug('Annotation window destroyed:', windowId);
          _this._annotationWindows[windowId].destroy();
          delete _this._annotationWindows[windowId];
          _this._resizeWindows();
        }
      });

      this._layout.init();
    }
  }, {
    key: 'resize',
    value: function resize() {
      logger.debug('Grid#resize');
      this.element.css('bottom', 0);
      this._layout.updateSize();
    }
  }, {
    key: 'addMiradorWindow',
    value: function addMiradorWindow(miradorId) {
      logger.debug('Grid#addMiradorWindow');
      var itemConfig = {
        type: 'component',
        componentName: 'Mirador',
        componentState: { miradorId: miradorId },
        isClosable: false
      };
      this._layout.root.contentItems[0].addChild(itemConfig);
    }
  }, {
    key: 'addAnnotationWindows',
    value: function addAnnotationWindows(config) {
      logger.debug('Grid#addAnnotationWindows config:', config);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = config.windows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var windowConfig = _step2.value;

          this.addAnnotationWindow(windowConfig);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'addAnnotationWindow',
    value: function addAnnotationWindow(options) {
      var _this2 = this;

      logger.debug('Grid#addAnnotationWindow options:', options);
      var windowId = Mirador.genUUID(); // annotation window ID
      var imageWindowId = options.imageWindowId || null;
      var itemConfig = {
        id: windowId,
        type: 'component',
        componentName: 'Annotations',
        componentState: { windowId: windowId }
      };
      this._layout.root.contentItems[0].addChild(itemConfig);

      var annoExplorer = (0, _app2.default)().getAnnotationExplorer();

      // Just taking the first (highest-level) tag, for now
      var annoWin = new _annotationWindow2.default({
        id: windowId,
        appendTo: jQuery('#' + windowId),
        explorer: annoExplorer,
        miradorId: options.miradorId || null,
        canvasWindowId: imageWindowId,
        initialLayerId: options.layerId || this._pickLayer(),
        initialTocTags: options.tocTags || null,
        annotationId: options.annotationId || null
      });
      return annoWin.init().then(function (window) {
        _this2._annotationWindows[windowId] = annoWin;
        _this2._resizeWindows();
        return window;
      }).catch(function (reason) {
        logger.error('Grid#addAnnotationWindow annoWin.init failed:', reason);
      });
    }
  }, {
    key: 'getAnnotationWindows',
    value: function getAnnotationWindows() {
      return this._annotationWindows;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this3 = this;

      logger.debug('Grid#bindEvents');

      jQuery.subscribe('YM_ADD_WINDOW', function (event, options) {
        _this3.addAnnotationWindow(options || {});
      });

      jQuery.subscribe('YM_ADD_WINDOWS', function (event, config) {
        logger.debug('Received YM_ADD_WINDOWS config:', config);
        _this3.addAnnotationWindows(config);
      });
    }
  }, {
    key: '_resizeWindows',
    value: function _resizeWindows() {
      var windowIds = Object.keys(this._annotationWindows);
      var numAnnoWindows = windowIds.length;
      var width = 0;

      switch (numAnnoWindows) {
        case 1:
          width = 20;break;
        case 2:
          width = 25;break;
        default:
          width = 100 / (numAnnoWindows + 1);
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = windowIds[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var windowId = _step3.value;

          this._setWidth(windowId, width);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: '_setWidth',
    value: function _setWidth(itemId, percentWidth) {
      logger.debug('Grid#_setWidth itemId:', itemId, 'width:', percentWidth);
      this._layout.root.getItemsById(itemId)[0].parent.config.width = percentWidth;
      this._layout.updateSize();
    }
  }, {
    key: '_pickLayer',
    value: function _pickLayer() {
      var allLayers = (0, _stateStore2.default)().getTransient('annotationLayers');
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = allLayers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var candidateLayer = _step4.value;

          var candidateLayerId = candidateLayer['@id'];
          var useThisLayer = true;

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = Object.values(this._annotationWindows)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var annoWin = _step5.value;

              var usedLayerId = annoWin.getCurrentLayerId();
              if (candidateLayerId === usedLayerId) {
                useThisLayer = false;
                break;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          if (useThisLayer) {
            return candidateLayerId;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return allLayers[0]['@id']; // return the first if every layer is already in use
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();
var proxyMgr = (0, _miradorProxyManager2.default)();

var LayoutConfigParser = function () {
  function LayoutConfigParser(options) {
    _classCallCheck(this, LayoutConfigParser);

    this.options = Object.assign({
      imageWindowId: null,
      layerIds: [],
      toc: null, // annotation TOC
      tocTags: []
    }, options);
  }

  /**
   * All windows created are derived from a single Mirador image window
   * identified by this.options.imageWindowId
   */


  _createClass(LayoutConfigParser, [{
    key: 'getWindowsConfig',
    value: function getWindowsConfig() {
      var annoId = this.options.annotationId;
      var layerIds = this.options.layerIds;
      var tocTags = this.options.tocTags;

      // If annotation ID is provided, everything else (layers, TOC)
      // gets derived from that annotation (provided values are ignored).
      if (annoId) {
        var annotation = this._findAnnotation(annoId);
        if (annotation) {
          layerIds = [annotation.layerId];
        } else {
          logger.error('LayoutConfigParser#getWindowsConfig cannot find annotation', annoId);
          return null;
        }
        if (this.options.toc) {
          tocTags = this.options.toc.getTagsFromAnnotationId(annoId);
          if (tocTags.length < 1) {
            logger.error('LayoutConfigParser#getWindowsConfig no toc tags for annotation', annoId);
          }
        }
      }

      var config = {
        windows: []
      };

      // Number of annotation windows is determined by number of layers
      if (layerIds instanceof Array && layerIds.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = layerIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var layerId = _step.value;

            config.windows.push({
              type: 'ANNOTATION_WINDOW',
              miradorId: this.options.miradorId,
              imageWindowId: this.options.imageWindowId,
              layerId: layerId || null,
              annotationId: annoId || null,
              tocTags: tocTags || []
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return config.windows.length > 0 ? config : null;
    }
  }, {
    key: '_findAnnotation',
    value: function _findAnnotation(annotationId) {
      var windowProxy = proxyMgr.getWindowProxyById(this.options.imageWindowId);
      var annotations = windowProxy.getAnnotationsList();
      var candidates = annotations.filter(function (anno) {
        return anno['@id'] === annotationId;
      });
      return candidates.length > 0 ? candidates[0] : null;
    }
  }]);

  return LayoutConfigParser;
}();

exports.default = LayoutConfigParser;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _workspaceProxy = __webpack_require__(39);

var _workspaceProxy2 = _interopRequireDefault(_workspaceProxy);

var _windowProxy = __webpack_require__(5);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var MiradorProxy = function () {
  function MiradorProxy(mirador, id) {
    _classCallCheck(this, MiradorProxy);

    this._mirador = mirador;
    this._workspaceProxy = null;
    this._id = id;
  }

  // Proxy ID. Mirador instance currently doesn't have an ID.


  _createClass(MiradorProxy, [{
    key: 'getId',
    value: function getId() {
      return this._id;
    }

    // Lazy call because workspace is set up asynchronously.

  }, {
    key: 'getWorkspaceProxy',
    value: function getWorkspaceProxy() {
      if (!this._workspaceProxy) {
        this._workspaceProxy = new _workspaceProxy2.default(this._mirador.viewer.workspace);
      }
      return this._workspaceProxy;
    }
  }, {
    key: 'getWindowProxies',
    value: function getWindowProxies() {
      return this.getWorkspaceProxy().getWindowProxies();
    }
  }, {
    key: 'getWindowProxyById',
    value: function getWindowProxyById(windowId) {
      return new _windowProxy2.default(this.getWindowById(windowId));
    }
  }, {
    key: 'getWindowById',
    value: function getWindowById(windowId) {
      logger.debug('MiradorProxy#getWindowById windowId:', windowId);
      return this.getWorkspaceProxy().getWindowById(windowId);
    }
  }, {
    key: 'publish',
    value: function publish() {
      var eventEmitter = this._mirador.eventEmitter;
      var args = Array.from(arguments);
      eventEmitter.publish.apply(eventEmitter, args);
    }
  }, {
    key: 'subscribe',
    value: function subscribe(eventName, callback) {
      logger.debug('MiradorProxy#subscribe', eventName, callback);
      this._mirador.eventEmitter.subscribe(eventName, callback);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(eventName) {
      this._mirador.eventEmitter.unsubscribe(eventName);
    }
  }]);

  return MiradorProxy;
}();

exports.default = MiradorProxy;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _windowProxy = __webpack_require__(5);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WorkspaceProxy = function () {
  function WorkspaceProxy(workspace) {
    _classCallCheck(this, WorkspaceProxy);

    this.logger = (0, _logger2.default)();
    this.workspace = workspace;
  }

  _createClass(WorkspaceProxy, [{
    key: 'getWorkspace',
    value: function getWorkspace() {
      return this.workspace;
    }
  }, {
    key: 'getWindowProxies',
    value: function getWindowProxies() {
      return this.workspace.windows.map(function (window) {
        return new _windowProxy2.default(window);
      });
    }
  }, {
    key: 'getWindowById',
    value: function getWindowById(windowId) {
      var _this = this;
      var windows = this.workspace.windows.filter(function (window) {
        _this.logger.debug('WorkspaceProxy#getWindowById current window:', window);
        return window.id === windowId;
      });
      var numWindows = windows.length;
      if (numWindows > 1) {
        this.logger.error('MiradorProxy#getWindowById: more than one (' + numWindows + ') found for id: ' + windowId);
      }
      return numWindows > 0 ? windows[0] : null;
    }
  }]);

  return WorkspaceProxy;
}();

exports.default = WorkspaceProxy;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

var _layoutConfigParser = __webpack_require__(37);

var _layoutConfigParser2 = _interopRequireDefault(_layoutConfigParser);

var _miradorConfigBuilder = __webpack_require__(27);

var _miradorConfigBuilder2 = _interopRequireDefault(_miradorConfigBuilder);

var _annotationExplorer = __webpack_require__(41);

var _windowProxy = __webpack_require__(5);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();
var proxyMgr = (0, _miradorProxyManager2.default)();

/**
 * Wrapper of a single Mirador instance
 */

var MiradorWrapper = function () {
  function MiradorWrapper(options) {
    _classCallCheck(this, MiradorWrapper);

    logger.debug('MiradorWrapper#constructor options:', options);
    this.options = Object.assign({
      grid: null,
      miradorOptions: null
    }, options);
    this._miradorId = options.miradorOptions.miradorId;
    this._miradorConfig = this._buildMiradorConfig(options.miradorOptions);
    this._mirador = Mirador(this._miradorConfig);
    this._miradorProxy = this._addToMiradorProxy(this._miradorId, this._mirador);
    this._bindEvents(options.miradorOptions);
  }

  _createClass(MiradorWrapper, [{
    key: 'getMirador',
    value: function getMirador() {
      return this._mirador;
    }
  }, {
    key: 'getMiradorProxy',
    value: function getMiradorProxy() {
      return this._miradorProxy;
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      return this._miradorConfig;
    }

    /**
     * Sets up configuration parameters to pass to Mirador.
     */

  }, {
    key: '_buildMiradorConfig',
    value: function _buildMiradorConfig(options) {
      var builder = new _miradorConfigBuilder2.default(options);
      return builder.buildConfig();
    }
  }, {
    key: '_addToMiradorProxy',
    value: function _addToMiradorProxy(miradorId, mirador) {
      var miradorProxy = proxyMgr.addMirador(miradorId, mirador);

      miradorProxy.subscribe('OPEN_ANNOTATION_SELECTOR', function (event, windowId, annotationEditor) {
        (0, _annotationExplorer.openAnnotationSelector)(windowId).then(function (annotation) {
          annotationEditor.loadAnnotation(annotation);
        });
      });

      return miradorProxy;
    }

    /**
     * Optionally create annotations windows after checking parameters.
     * It will examine the parameters and determine how many annotations
     * to create and how to configure them.
     */

  }, {
    key: '_createAnnotationWindows',
    value: function _createAnnotationWindows(imageWindowId, options) {
      var toc = (0, _app2.default)().getAnnotationExplorer().getAnnotationToc();
      var parser = new _layoutConfigParser2.default({
        miradorId: options.miradorId,
        imageWindowId: imageWindowId,
        layerIds: options.layerIds,
        toc: toc,
        tocTags: options.tocTags,
        annotationId: options.annotationId
      });
      var windowsConfig = parser.getWindowsConfig();
      if (windowsConfig) {
        jQuery.publish('YM_ADD_WINDOWS', windowsConfig);
      }
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents(options) {
      var _this = this;

      logger.debug('MiradorWrapper#_bindEvents options:', options);
      var miradorProxy = proxyMgr.getMiradorProxy(this._miradorId);

      miradorProxy.subscribe('ANNOTATIONS_LIST_UPDATED', function (event, params) {
        logger.debug('MiradorWrapper#bindEvents received ANNOTATIONS_LIST_UPDATED params:', params);
        var windowProxy = miradorProxy.getWindowProxyById(params.windowId);

        /* XXXX
        if (options.tagHierarchy) {
          const endpoint = windowProxy.getEndPoint();
          endpoint.parseAnnotations();
        }
        */

        if (!params.options || params.options.eventOriginatorType !== 'AnnotationWindow') {
          // Reload annotation windows
          jQuery.publish('YM_READY_TO_RELOAD_ANNO_WIN', params.windowId);
        }
      });

      miradorProxy.subscribe('YM_CLICKED_OPEN_ANNO_WINDOW', function (event, canvasWindowId) {
        logger.debug('MiradorWrapper received YM_CLICKED_OPEN_ANNO_WINDOW from ', canvasWindowId);
        miradorProxy.publish('YM_DISPLAY_ON');
        _this.options.grid.addAnnotationWindow({
          miradorId: _this._miradorId,
          imageWindowId: canvasWindowId
        });
      });

      jQuery.subscribe('YM_READY_TO_RELOAD_ANNO_WIN', function (event, imageWindowId) {
        // after annotations have been loaded
        if (_this._urlOptionsProcessed) {
          // run this function only once
          return;
        } else {
          _this._urlOptionsProcessed = true;
          var _miradorProxy = proxyMgr.getMiradorProxy(_this._miradorId);
          _miradorProxy.publish('YM_DISPLAY_ON');
          _this._createAnnotationWindows(imageWindowId, options);
        }
      });

      jQuery.subscribe('YM_ANNOTATION_TOC_TAGS_SELECTED', function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(evnet, windowId, canvasId, tags) {
          var tocCache, toc, miradorProxy, windowProxy, imageView, tocNode, annotation, newCanvasId, zoomToAnnotation;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  logger.debug('MiradorWrapper:SUB:YM_ANNOTATION_TOC_TAGS_SELECTED imageWindow:', windowId, 'canvasId:', canvasId, 'tags:', tags);

                  tocCache = (0, _app2.default)().getAnnotationTocCache();
                  _context.next = 4;
                  return tocCache.getToc(canvasId);

                case 4:
                  toc = _context.sent;
                  miradorProxy = proxyMgr.getMiradorProxy(_this._miradorId);
                  windowProxy = miradorProxy.getWindowProxyById(windowId);
                  imageView = windowProxy.getImageView();
                  tocNode = toc.getNodeFromTags(tags);
                  annotation = tocNode.annotation;
                  newCanvasId = canvasId;

                  zoomToAnnotation = function zoomToAnnotation(event) {
                    imageView.zoomToAnnotation(annotation);
                    imageView.panToAnnotation(annotation);
                    var drawTool = windowProxy.getDrawTool();
                    drawTool.updateHighlights(annotation);
                    miradorProxy.unsubscribe('annotationsRendered.' + windowId, zoomToAnnotation);
                  };

                  if (canvasId === windowProxy.getCurrentCanvasId()) {
                    zoomToAnnotation();
                  } else {
                    miradorProxy.subscribe('annotationsRendered.' + windowId, zoomToAnnotation);
                    windowProxy.setCurrentCanvasId(canvasId);
                  }

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }());

      jQuery.subscribe('ANNOWIN_ANNOTATION_CLICKED', function (event, params) {
        var miradorProxy = proxyMgr.getMiradorProxy(_this._miradorId);
        var windowProxy = miradorProxy.getWindowProxyById(params.imageWindowId);
        var tocPanel = windowProxy.getSidePanelTabContentElement('ym-annotation-toc');
        var annoTocMenu = tocPanel.data('AnnotationTableOfContent');

        if (annoTocMenu) {
          annoTocMenu.scrollToTags(params.annotation.tocTags);
        }
      });

      /*
      [{
         annotationWindowId: annoWin.getId(),
         annotation: annotation,
         canvasId: jQuery(this).data('canvasId'),
         imageWindowId: annoWin.getImageWindowId()
       }]);*/
    }
  }]);

  return MiradorWrapper;
}();

exports.default = MiradorWrapper;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openAnnotationSelector = undefined;

/**
  * @param {string} windowId ID of Mirador window from which this dialog is being created
  */
var openAnnotationSelector = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(windowId) {
    var windowProxy, svgOverlay, endpoint, annoSource, annotationExplorer, layers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            windowProxy = (0, _miradorProxyManager2.default)().getWindowProxyById(windowId);
            svgOverlay = windowProxy.getSvgOverlay();

            svgOverlay.removeMouseTool();
            endpoint = windowProxy.getEndPoint();
            annoSource = (0, _app2.default)().getAnnotationSource();
            annotationExplorer = new _import.AnnotationExplorer({
              dataSource: annoSource
            });
            _context.next = 8;
            return annotationExplorer.getLayers();

          case 8:
            layers = _context.sent;
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              var dialog = new _import.AnnotationExplorerDialog({
                appendTo: jQuery('body'),
                annotationExplorer: annotationExplorer,
                canvases: windowProxy.getCanvases(),
                defaultCanvasId: windowProxy.getCurrentCanvasId(),
                layers: layers,
                onSelect: function onSelect(annotation) {
                  resolve(annotation);
                },
                logger: logger
              });
              dialog.open();
            }).then(function (annotation) {
              svgOverlay.setMouseTool();
              return annotation;
            }).catch(function (reason) {
              svgOverlay.setMouseTool();
              logger.error('openAnnotationExplorer returned with error', reason);
            }));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function openAnnotationSelector(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _import = __webpack_require__(1);

var _annotationSource = __webpack_require__(8);

var _annotationSource2 = _interopRequireDefault(_annotationSource);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var logger = (0, _logger2.default)();

exports.openAnnotationSelector = openAnnotationSelector;
;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _annotationRenderer = __webpack_require__(45);

var _annotationRenderer2 = _interopRequireDefault(_annotationRenderer);

var _annotationPageRenderer = __webpack_require__(44);

var _annotationPageRenderer2 = _interopRequireDefault(_annotationPageRenderer);

var _import = __webpack_require__(1);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _modalAlert = __webpack_require__(15);

var _modalAlert2 = _interopRequireDefault(_modalAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

/**
 * Scrollable list of annotations in an AnnotationWindow
 */

var AnnotationListWidget = function () {
  function AnnotationListWidget(options) {
    _classCallCheck(this, AnnotationListWidget);

    this.options = Object.assign({
      annotationWindow: null,
      rootElem: null,
      imageWindowId: null,
      canvases: [],
      layerId: null,
      state: null,
      isEditor: false,
      annotationExplorer: null,
      annotationPageRenderer: null,
      annotationRenderer: null,
      maxContentRelativeHeight: 5
    }, options);

    this._currentPageNum = 0;
    this._loading = false;
    this._tocSpec = this.options.state.getTransient('tagHierarchy');
    this._tocSpec2 = this.options.state.getTransient('tocSpec');

    if (!this.options.annotationRenderer) {
      this.options.annotationRenderer = new _annotationRenderer2.default({
        annotationWindow: this.options.annotationWindow,
        state: this.options.state
      });
    }
    if (!this.options.annotationPageRenderer) {
      this.options.annotationPageRenderer = new _annotationPageRenderer2.default({
        annotationRenderer: this.options.annotationRenderer,
        annotationExplorer: this.options.annotationExplorer
      });
    }
  }

  _createClass(AnnotationListWidget, [{
    key: 'init',
    value: function init(layerId) {
      if (layerId) {
        this.options.layerId = layerId;
      }
      this.options.rootElem.empty();
      this._pageStateList = this._createPageStateList();
      this._createPageElements();
      this._bindEvents();
    }
  }, {
    key: 'getCurrentPageNum',
    value: function getCurrentPageNum() {
      return this._currentPageNum;
    }
  }, {
    key: 'getCurrentPageItem',
    value: function getCurrentPageItem() {
      return this._pageStateList[this._currentPageNum];
    }
  }, {
    key: 'moveToPage',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(pageNum) {
        var rootElem, imageWindowProxy, oldCanvasId, newPageItem, newCanvasId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logger.debug('AnnotationListWidgetr#moveToPage', pageNum);
                rootElem = this.options.rootElem;
                imageWindowProxy = this.options.annotationWindow.getImageWindowProxy();
                oldCanvasId = imageWindowProxy.getCurrentCanvasId();
                newPageItem = this._pageStateList[pageNum];
                newCanvasId = newPageItem.canvas['@id'];

                if (!(pageNum !== -1)) {
                  _context.next = 18;
                  break;
                }

                this._deactivateAllPages();
                this._currentPageNum = pageNum;
                _context.next = 11;
                return this._activatePage(pageNum);

              case 11:
                if (!(rootElem[0].scrollHeight <= rootElem.height())) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return this._activateMorePagesForwardFirst(pageNum);

              case 14:
                this.scrollToPage(pageNum, true);

                if (oldCanvasId !== newCanvasId) {
                  imageWindowProxy.setCurrentCanvasId(newCanvasId, {
                    eventOriginatorType: 'AnnotationWindow'
                  });
                }
                _context.next = 19;
                break;

              case 18:
                logger.error("AnnotationListWidget##moveTo couldn't find page number for", canvasId);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function moveToPage(_x) {
        return _ref.apply(this, arguments);
      }

      return moveToPage;
    }()
  }, {
    key: 'moveToCanvas',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(canvasId) {
        var pageNum;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logger.debug('AnnotationListWidgetr#moveToCanvas', canvasId);
                pageNum = this._getPageNum(canvasId);
                _context2.next = 4;
                return this.moveToPage(pageNum);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function moveToCanvas(_x2) {
        return _ref2.apply(this, arguments);
      }

      return moveToCanvas;
    }()
  }, {
    key: 'moveToTag',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(tagValue) {
        var canvasIds;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                logger.debug('AnnotationListWidgetr#moveToTag', tagValue);
                canvasIds = this._tocSpec2.canvasMap[tagValue];

                if (!(canvasIds instanceof Array && canvasIds.length > 0)) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 5;
                return this.moveToCanvas(canvasIds[0]);

              case 5:
                this.scrollToTag(tagValue);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function moveToTag(_x3) {
        return _ref3.apply(this, arguments);
      }

      return moveToTag;
    }()
  }, {
    key: 'moveToTags',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(tags) {
        var canvasIds;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                logger.debug('AnnotationListWidgetr#moveToTags', tags);
                canvasIds = this._tocSpec2.canvasMap[tags[0]];

                if (!(canvasIds instanceof Array && canvasIds.length > 0)) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 5;
                return this.moveToCanvas(canvasIds[0]);

              case 5:
                this.scrollToTags(tags);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function moveToTags(_x4) {
        return _ref4.apply(this, arguments);
      }

      return moveToTags;
    }()
  }, {
    key: 'pageForward',
    value: function () {
      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        var pageNum, nextPage;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                logger.debug('AnnotationListWidget#pageForward', this._loading);

                if (!this._loading) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt('return');

              case 3:
                this._loading = true;

                _context5.prev = 4;
                pageNum = this._currentPageNum + 1;

                if (!(pageNum < this._pageStateList.length)) {
                  _context5.next = 17;
                  break;
                }

                _context5.next = 9;
                return this._activatePageForward(pageNum);

              case 9:
                nextPage = _context5.sent;

                this._currentPageNum = nextPage;

                if (!(nextPage < this._pageStateList.length)) {
                  _context5.next = 15;
                  break;
                }

                _context5.next = 14;
                return this._activateMorePagesForwardFirst(nextPage);

              case 14:
                nextPage = _context5.sent;

              case 15:
                this._deactivatePagesFromBack();
                this._windBack();

              case 17:
                _context5.next = 22;
                break;

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5['catch'](4);

                logger.error('AnnotationListWidget#pageForward failed', _context5.t0);

              case 22:
                _context5.prev = 22;

                this._loading = false;
                return _context5.finish(22);

              case 25:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 19, 22, 25]]);
      }));

      function pageForward() {
        return _ref5.apply(this, arguments);
      }

      return pageForward;
    }()
  }, {
    key: 'pageBack',
    value: function () {
      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
        var pageNum, nextPage;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                logger.debug('AnnotationListWidget#pageBack', this._loading);

                if (!this._loading) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt('return');

              case 3:
                this._loading = true;

                _context6.prev = 4;
                pageNum = this._currentPageNum - 1;

                if (!(pageNum !== -1)) {
                  _context6.next = 16;
                  break;
                }

                _context6.next = 9;
                return this._activatePageBackward(pageNum);

              case 9:
                nextPage = _context6.sent;

                this._currentPageNum = nextPage;

                if (!(nextPage !== -1)) {
                  _context6.next = 14;
                  break;
                }

                _context6.next = 14;
                return this._activateMorePagesBackwardFirst(nextPage);

              case 14:
                this._deactivatePagesFromForward();
                this._windForward();

              case 16:
                this._loading = false;
                _context6.next = 22;
                break;

              case 19:
                _context6.prev = 19;
                _context6.t0 = _context6['catch'](4);

                logger.error('AnnotationListWidget#pageBack failed', _context6.t0);

              case 22:
                _context6.prev = 22;

                this._loading = false;
                return _context6.finish(22);

              case 25:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 19, 22, 25]]);
      }));

      function pageBack() {
        return _ref6.apply(this, arguments);
      }

      return pageBack;
    }()
  }, {
    key: 'moveToAnnotation',
    value: function () {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(annoId, canvasId) {
        var targetPage, i, pageItem, annoElem;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                logger.debug('AnnotationListWidget annoId', annoId, 'canvasId:', canvasId);

                targetPage = -1;
                i = 0;

              case 3:
                if (!(i < this._pageStateList.length)) {
                  _context7.next = 10;
                  break;
                }

                if (!(this._pageStateList[i].canvas['@id'] === canvasId)) {
                  _context7.next = 7;
                  break;
                }

                targetPage = i;
                return _context7.abrupt('break', 10);

              case 7:
                ++i;
                _context7.next = 3;
                break;

              case 10:
                if (!(targetPage >= 0)) {
                  _context7.next = 19;
                  break;
                }

                _context7.next = 13;
                return this.moveToPage(targetPage);

              case 13:
                pageItem = this._pageStateList[targetPage];
                annoElem = null;

                pageItem.element.find('.annowin_anno').each(function (index, value) {
                  var currentElem = jQuery(value);
                  if (currentElem.data('annotationId') === annoId) {
                    annoElem = currentElem;
                    annoElem[0].scrollIntoView(true);
                    return false;
                  }
                });
                this._highlightAnnotation(annoId, canvasId);
                _context7.next = 20;
                break;

              case 19:
                logger.debug('AnnotationListWidget#scrollToAnnotation page not found for canvasId', canvasId);

              case 20:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function moveToAnnotation(_x5, _x6) {
        return _ref7.apply(this, arguments);
      }

      return moveToAnnotation;
    }()

    /**
     * The page element must have already been loaded for this function to work.
     *
     * @param {number} pageNum
     */

  }, {
    key: 'scrollToPage',
    value: function scrollToPage(pageNum, alignToTop) {
      var pageItem = this._pageStateList[pageNum];
      var pageHeaderElem = pageItem.element.find('.page-header');

      this._unbindScrollEvent();
      pageHeaderElem[0].scrollIntoView(alignToTop);
      this._bindScrollEvent();
    }
  }, {
    key: 'scrollToTag',
    value: function scrollToTag(targetTagValue) {
      var targetElem = null;

      this.options.rootElem.find('.annowin_group_header').each(function (index, value) {
        var headerElem = jQuery(value);
        var tagValue = headerElem.data('tags')[0];
        if (tagValue === targetTagValue) {
          targetElem = headerElem;
          return false;
        }
      });
      if (targetElem) {
        targetElem[0].scrollIntoView();
      } else {
        logger.warning('AnnotationListWidget#scrollToTag Header element not found for', targetTagValue);
      }
    }
  }, {
    key: 'scrollToTags',
    value: function scrollToTags(targetTags) {
      logger.debug('AnnotationListWidget#srollToTags targetTags:', targetTags);
      var targetElem = null;

      this.options.rootElem.find('.annowin_group_header').each(function (index, value) {
        var headerElem = jQuery(value);
        var tags = headerElem.data('tags');

        if (targetTags.length === 1) {
          if (tags[0] === targetTags[0]) {
            targetElem = headerElem;
            return false;
          }
        } else if (tags[0] === targetTags[0] && tags[1] === targetTags[1]) {
          targetElem = headerElem;
          return false;
        }
      });
      if (targetElem) {
        targetElem[0].scrollIntoView();
        targetElem.next().click();
      } else {
        logger.warning('AnnotationListWidget#scrollToTags Header element not found for', targetTags);
      }
    }
  }, {
    key: 'scrollToElem',
    value: function scrollToElem(annoElem) {
      /*
      this.options.rootElem.animate({
        scrollTop: annoElem.position().top + this.options.rootElem.scrollTop()
      }, 0);
      */

      this._unbindScrollEvent();
      annoElem[0].scrollIntoView(true);
      this._bindScrollEvent();
    }
  }, {
    key: 'scrollToAnnotation',
    value: function scrollToAnnotation(annotationId) {
      var _this = this;
      this.options.rootElem.find('.annowin_anno').each(function (index, value) {
        var annoElem = jQuery(value);
        if (annoElem.data('annotationId') === annotationId) {
          _this.scrollToElem(annoElem);
          _this._highlightAnnotation(annotationId, annoElem.data('canvasId'));
        }
      });
    }
  }, {
    key: '_highlightAnnotation',
    value: function _highlightAnnotation(annoId, canvasId) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._pageStateList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pageItem = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = pageItem.element.find('.annowin_anno')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var annoElem = _step2.value;

              var $annoElem = jQuery(annoElem);
              var curAnnoId = $annoElem.data('annotationId');

              if (curAnnoId === annoId) {
                $annoElem.addClass('ym_anno_selected');
              } else {
                $annoElem.removeClass('ym_anno_selected');
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_createPageStateList',
    value: function _createPageStateList() {
      var pages = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.options.canvases[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var canvas = _step3.value;

          pages.push({
            toc: null,
            canvas: canvas,
            loaded: false,
            annotations: [],
            element: null
          });
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return pages;
    }

    /**
     * Create empty page elements under the root.
     */

  }, {
    key: '_createPageElements',
    value: function _createPageElements() {
      logger.debug('AnnotationListWidget#_createPageElements');
      var pageRenderer = this.options.annotationPageRenderer;

      for (var pageNum = 0; pageNum < this.options.canvases.length; ++pageNum) {
        var pageItem = this._pageStateList[pageNum];
        var pageElem = pageRenderer.createPageElement({
          pageNum: pageNum,
          canvasId: pageItem.canvas['@id'],
          canvasLabel: pageItem.canvas.label,
          layerId: this.options.layerId
        });

        this.options.rootElem.append(pageElem);
        pageElem.hide();
        pageItem.element = pageElem;
      }
    }
  }, {
    key: '_getPageNum',
    value: function _getPageNum(canvasId) {
      for (var i = 0; i < this._pageStateList.length; ++i) {
        var item = this._pageStateList[i];
        if (item.canvas['@id'] === canvasId) {
          return i;
        }
      }
      return -1;
    }
  }, {
    key: '_activatePage',
    value: function () {
      var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(pageNum) {
        var pageItem;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                logger.debug('AnnotationListWidget#_activatePage', pageNum);

                if (!(pageNum < 0 || pageNum >= this._pageStateList.length)) {
                  _context8.next = 4;
                  break;
                }

                logger.error('AnnotationListWidget#_activatePage invalid pageNum', pageNum);
                return _context8.abrupt('return');

              case 4:
                //this._currentPageNum = pageNum;

                pageItem = this._pageStateList[pageNum];

                if (pageItem.loaded) {
                  _context8.next = 9;
                  break;
                }

                pageItem.loaded = true;
                _context8.next = 9;
                return this._loadPage(pageNum);

              case 9:

                //if (pageItem.annotations.length > 0) {
                pageItem.element.show();
                //}

              case 10:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _activatePage(_x7) {
        return _ref8.apply(this, arguments);
      }

      return _activatePage;
    }()
  }, {
    key: '_activatePageForward',
    value: function () {
      var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(pageNum) {
        var pageItem, nextPage;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                pageItem = this._pageStateList[pageNum];
                _context9.next = 3;
                return this._activatePage(pageNum);

              case 3:
                logger.debug('AnnotationListWidget#_activatePageForward pageNum:', pageNum, 'pageItem.annotations after activate:', pageItem.annotations);
                nextPage = pageNum;

                if (!(pageNum < this._pageStateList.length - 1)) {
                  _context9.next = 9;
                  break;
                }

                ++nextPage;
                //while (pageItem.annotations.length === 0 && nextPage < this._pageStateList.length) {
                _context9.next = 9;
                return this._activatePage(nextPage);

              case 9:
                return _context9.abrupt('return', nextPage);

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _activatePageForward(_x8) {
        return _ref9.apply(this, arguments);
      }

      return _activatePageForward;
    }()
  }, {
    key: '_activatePageBackward',
    value: function () {
      var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(pageNum) {
        var pageItem, nextPage;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._activatePage(pageNum);

              case 2:
                pageItem = this._pageStateList[pageNum];
                nextPage = pageNum;

                if (!(pageNum > 0)) {
                  _context10.next = 8;
                  break;
                }

                --nextPage;

                //while (pageItem.annotations.length === 0 && nextPage >= 0) {
                _context10.next = 8;
                return this._activatePage(nextPage);

              case 8:
                return _context10.abrupt('return', nextPage);

              case 9:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function _activatePageBackward(_x9) {
        return _ref10.apply(this, arguments);
      }

      return _activatePageBackward;
    }()
  }, {
    key: '_activateMorePagesForwardFirst',
    value: function () {
      var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(pageNum) {
        var numCanvases, nextPage;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                logger.debug('AnnotationListWidget#_activateMorePagesForwardFirst', pageNum);
                numCanvases = this.options.canvases.length;
                _context11.next = 4;
                return this._activateMorePagesForward(pageNum, numCanvases);

              case 4:
                nextPage = _context11.sent;
                _context11.next = 7;
                return this._activateMorePagesBackward(pageNum, numCanvases);

              case 7:
                return _context11.abrupt('return', nextPage);

              case 8:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _activateMorePagesForwardFirst(_x10) {
        return _ref11.apply(this, arguments);
      }

      return _activateMorePagesForwardFirst;
    }()
  }, {
    key: '_activateMorePagesBackwardFirst',
    value: function () {
      var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(pageNum, numPages) {
        var numCanvases, nextPage;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                logger.debug('AnnotationListWidget#_activateMorePagesBackwardFirst', pageNum, numPages);
                numCanvases = this.options.canvases.length;
                _context12.next = 4;
                return this._activateMorePagesBackward(pageNum, numCanvases);

              case 4:
                nextPage = _context12.sent;
                _context12.next = 7;
                return this._activateMorePagesForward(pageNum, numCanvases);

              case 7:
                return _context12.abrupt('return', nextPage);

              case 8:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _activateMorePagesBackwardFirst(_x11, _x12) {
        return _ref12.apply(this, arguments);
      }

      return _activateMorePagesBackwardFirst;
    }()
  }, {
    key: '_windBack',
    value: function _windBack() {
      var rootElem = this.options.rootElem;
      var scrollTop = rootElem.scrollTop();
      var diff = rootElem[0].scrollHeight - rootElem.scrollTop() - rootElem.height();

      if (diff === 0) {
        logger.debug('Winding back');
        this._unbindScrollEvent();
        this.options.rootElem.scrollTop(scrollTop - 5);
        this._bindScrollEvent();
      }
    }
  }, {
    key: '_windForward',
    value: function _windForward() {
      logger.debug('_windForward');
      var rootElem = this.options.rootElem;
      var scrollTop = rootElem.scrollTop();

      if (scrollTop === 0) {
        logger.debug('Winding forward');
        this._unbindScrollEvent();
        this.options.rootElem.scrollTop(scrollTop + 5);
        this._bindScrollEvent();
      }
    }
  }, {
    key: '_activateMorePagesForward',
    value: function () {
      var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(pageNum, numPages) {
        var rootElem, nextPage, currentPage;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                logger.debug('AnnotationListWidget#_activateMorePagesForward', pageNum, numPages);
                rootElem = this.options.rootElem;
                nextPage = pageNum;

              case 3:
                if (!(nextPage < numPages)) {
                  _context13.next = 13;
                  break;
                }

                logger.debug('AnnotationListWidget#_activateMorePagesForward nextPage:', nextPage, 'numPages:', numPages, 'scroll height:', rootElem[0].scrollHeight, 'element height:', rootElem.height());
                currentPage = nextPage;
                _context13.next = 8;
                return this._activatePageForward(currentPage);

              case 8:
                nextPage = _context13.sent;

                if (!(nextPage === currentPage || rootElem[0].scrollHeight > rootElem.height())) {
                  _context13.next = 11;
                  break;
                }

                return _context13.abrupt('break', 13);

              case 11:
                _context13.next = 3;
                break;

              case 13:
                return _context13.abrupt('return', nextPage);

              case 14:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _activateMorePagesForward(_x13, _x14) {
        return _ref13.apply(this, arguments);
      }

      return _activateMorePagesForward;
    }()
  }, {
    key: '_activateMorePagesBackward',
    value: function () {
      var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(pageNum) {
        var rootElem, nextPage, currentPage;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                logger.debug('AnnotationListWidget#_activateMorePagesBackward', pageNum);
                rootElem = this.options.rootElem;
                nextPage = pageNum;

              case 3:
                if (!(nextPage >= 0)) {
                  _context14.next = 13;
                  break;
                }

                logger.debug('AnnotationListWidget#_activateMorePagesBackward nextPage:', nextPage, 'scroll height:', rootElem[0].scrollHeight, 'element height:', rootElem.height());
                currentPage = nextPage;
                _context14.next = 8;
                return this._activatePageBackward(currentPage);

              case 8:
                nextPage = _context14.sent;

                if (!(nextPage === currentPage || rootElem[0].scrollHeight > rootElem.height())) {
                  _context14.next = 11;
                  break;
                }

                return _context14.abrupt('break', 13);

              case 11:
                _context14.next = 3;
                break;

              case 13:
                return _context14.abrupt('return', nextPage);

              case 14:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function _activateMorePagesBackward(_x15) {
        return _ref14.apply(this, arguments);
      }

      return _activateMorePagesBackward;
    }()
  }, {
    key: '_deactivatePage',
    value: function _deactivatePage(pageNum) {
      logger.debug('AnnotationListWidget#_deactivatePage', pageNum);
      var pageItem = this._pageStateList[pageNum];
      pageItem.element.hide();
    }
  }, {
    key: '_deactivatePagesFromForward',
    value: function _deactivatePagesFromForward() {
      logger.debug('AnnotationListWidget#_deactivatePagesFromForward');
      var rootElem = this.options.rootElem;
      var rootElemHeight = rootElem.height();
      var maxHeight = this.options.maxContentRelativeHeight * rootElemHeight;

      for (var nextPage = this._pageStateList.length - 1; nextPage > this._currentPageNum + 1 && rootElem[0].scrollHeight - rootElemHeight > maxHeight; --nextPage) {
        logger.debug('AnnotationListWidget#_deactivatePagesBackward nextPage:', nextPage, 'scroll height:', rootElem[0].scrollHeight, 'maxHeight:', maxHeight);
        var pageItem = this._pageStateList[nextPage];
        console.log('HIDING ', nextPage);
        pageItem.element.hide();
      }
    }
  }, {
    key: '_deactivatePagesFromBack',
    value: function _deactivatePagesFromBack() {
      logger.debug('AnnotationListWidget#_deactivatePagesFromBack');
      var rootElem = this.options.rootElem;
      var rootElemHeight = rootElem.height();
      var maxHeight = this.options.maxContentRelativeHeight * rootElemHeight;

      for (var nextPage = 0; nextPage < this._currentPageNum - 1 && rootElem[0].scrollHeight - rootElemHeight > maxHeight; ++nextPage) {
        logger.debug('AnnotationListWidget#_deactivatePagesFromBack nextPage:', nextPage, 'scroll height:', rootElem[0].scrollHeight, 'maxHeight:', maxHeight);
        var pageItem = this._pageStateList[nextPage];
        console.log('HIDING ', nextPage);
        pageItem.element.hide();
      }
    }
  }, {
    key: '_deactivateAllPages',
    value: function _deactivateAllPages() {
      for (var nextPage = 0; nextPage < this._pageStateList.length; ++nextPage) {
        var pageItem = this._pageStateList[nextPage];
        pageItem.element.hide();
      }
    }
  }, {
    key: '_loadPage',
    value: function () {
      var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(pageNum) {
        var _this2 = this;

        var pageItem, canvasId, annotations, tocCache, toc;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                logger.debug('AnnotationListWidget#_loadPage pageNum:', pageNum);
                (0, _modalAlert2.default)().show('Loading');
                pageItem = this._pageStateList[pageNum];
                canvasId = pageItem.canvas['@id'];
                _context15.next = 6;
                return this.options.annotationExplorer.getAnnotations({
                  canvasId: canvasId
                });

              case 6:
                annotations = _context15.sent;
                tocCache = (0, _app2.default)().getAnnotationTocCache();

                if (!tocCache) {
                  _context15.next = 14;
                  break;
                }

                _context15.next = 11;
                return tocCache.getToc(canvasId);

              case 11:
                _context15.t0 = _context15.sent;
                _context15.next = 15;
                break;

              case 14:
                _context15.t0 = null;

              case 15:
                toc = _context15.t0;

                logger.debug('AnnotationListWidget#_loadPage toc:', toc);

                pageItem.annotations = annotations.filter(function (anno) {
                  return anno.layerId === _this2.options.layerId;
                });
                pageItem.toc = toc;

                this.options.annotationPageRenderer.render(pageItem.element, {
                  annotations: annotations,
                  annotationToc: toc,
                  isEditor: this.options.isEditor,
                  pageNum: pageNum
                });
                (0, _modalAlert2.default)().hide();

              case 21:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _loadPage(_x16) {
        return _ref15.apply(this, arguments);
      }

      return _loadPage;
    }()
  }, {
    key: '_lessPagesFrom',
    value: function _lessPagesFrom(pageNum) {
      var numCanvases = this.options.canvases.length;
    }
  }, {
    key: 'clearHighlights',
    value: function clearHighlights() {
      this.options.rootElem.find('.annowin_anno').each(function (index, value) {
        jQuery(value).removeClass('annowin_targeted').removeClass('ym_anno_selected ym_anno_targeting ym_anno_targeted');
      });
    }
  }, {
    key: '_bindScrollEvent',
    value: function _bindScrollEvent() {
      var _this = this;

      this.options.rootElem.scroll(function () {
        var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(event) {
          var elem, scrollTop, currentPos, contentHeight;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  console.log('SCROLL');
                  elem = jQuery(this);
                  scrollTop = elem.scrollTop();
                  currentPos = scrollTop + elem.height();
                  contentHeight = this.scrollHeight;

                  //logger.debug('contentHeight:', contentHeight, 'scrollTop:', scrollTop, 'scroll bottom:', currentPos);

                  if (!(scrollTop < 20)) {
                    _context16.next = 8;
                    break;
                  }

                  _context16.next = 8;
                  return _this.pageBack();

                case 8:
                  if (!(contentHeight - currentPos < 20)) {
                    _context16.next = 11;
                    break;
                  }

                  _context16.next = 11;
                  return _this.pageForward();

                case 11:
                case 'end':
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        return function (_x17) {
          return _ref16.apply(this, arguments);
        };
      }());
    }
  }, {
    key: '_unbindScrollEvent',
    value: function _unbindScrollEvent() {
      this.options.rootElem.off('scroll');
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      this._bindScrollEvent();
    }
  }]);

  return AnnotationListWidget;
}();

exports.default = AnnotationListWidget;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _annotationListWidget = __webpack_require__(42);

var _annotationListWidget2 = _interopRequireDefault(_annotationListWidget);

var _fatalError = __webpack_require__(10);

var _fatalError2 = _interopRequireDefault(_fatalError);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxyManager = __webpack_require__(2);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

var _stateStore = __webpack_require__(3);

var _stateStore2 = _interopRequireDefault(_stateStore);

var _menuTagSelector = __webpack_require__(48);

var _menuTagSelector2 = _interopRequireDefault(_menuTagSelector);

var _layerSelector = __webpack_require__(14);

var _layerSelector2 = _interopRequireDefault(_layerSelector);

var _session = __webpack_require__(9);

var _session2 = _interopRequireDefault(_session);

var _windowProxy = __webpack_require__(5);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var AnnotationWindow = function () {
  function AnnotationWindow(options) {
    _classCallCheck(this, AnnotationWindow);

    this.options = Object.assign({
      id: null, // annotation window ID
      miradorId: null,
      canvasWindowId: null,
      appendTo: null,
      annotationListWidget: null,
      explorer: null,
      initialLayerId: null,
      initialTocTags: null,
      annotationId: null
    }, options);

    logger.debug('AnnotationWindow#constructor options:', options);
    this._tocSpec = (0, _stateStore2.default)().getTransient('tocSpec');
    this._jQuerySubscribed = {};
    this._miradorSubscribed = {};
  }

  _createClass(AnnotationWindow, [{
    key: 'getId',
    value: function getId() {
      return this.options.id;
    }

    /**
     * @returns {Promise}
     */

  }, {
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _this, proxyMgr, annosToShow, fullTagsTargets, targetAnno, canvasId, toc, matched;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = this;
                proxyMgr = (0, _miradorProxyManager2.default)();
                annosToShow = [];
                fullTagsTargets = null;
                targetAnno = null;


                if (!this.options.id) {
                  this.options.id = Mirador.genUUID();
                }
                this.miradorProxy = proxyMgr.getMiradorProxy(this.options.miradorId);
                this.canvasWindow = this.miradorProxy.getWindowProxyById(this.options.canvasWindowId);

                //const toc = this.options.explorer.getAnnotationToc();
                canvasId = this.canvasWindow.getCurrentCanvasId();

                if (!this._tocSpec) {
                  _context.next = 15;
                  break;
                }

                _context.next = 12;
                return (0, _app2.default)().getAnnotationTocCache().getToc(canvasId);

              case 12:
                _context.t0 = _context.sent;
                _context.next = 16;
                break;

              case 15:
                _context.t0 = null;

              case 16:
                toc = _context.t0;


                this.element = jQuery(template({}));
                this.options.appendTo.append(this.element);
                this.listElem = this.element.find('.annowin_list');

                if (this.options.annotationId) {
                  // annotation ID was given in the URL
                  matched = this.canvasWindow.getAnnotationsList().filter(function (anno) {
                    if (!anno || (typeof anno === 'undefined' ? 'undefined' : _typeof(anno)) !== 'object') {
                      logger.error('AnnotationWindow#init Invalid annotation', anno);
                      return false;
                    }
                    return anno['@id'] === _this.options.annotationId;
                  });

                  targetAnno = matched[0];
                  if (matched.length > 0) {
                    this.options.initialLayerId = targetAnno.layerId;
                    if (toc) {
                      this.options.initialTocTags = toc.getTagsFromAnnotationId(this.options.annotationId);
                    }
                  }
                }

                if (this.options.initialLayerId) {
                  // layerIDs were given in the URL
                  annosToShow = this.canvasWindow.getAnnotationsList().filter(function (anno) {
                    return anno.layerId == _this.options.initialLayerId;
                  });
                  if (this.options.initialTocTags) {
                    if (toc) {
                      annosToShow = annosToShow.filter(function (anno) {
                        return toc.matchHierarchy(anno, _this2.options.initialTocTags.slice(0, 1));
                      });
                      fullTagsTargets = annosToShow.filter(function (anno) {
                        return toc.matchHierarchy(anno, _this2.options.initialTocTags);
                      });
                      if (fullTagsTargets.length > 0 && !targetAnno) {
                        targetAnno = fullTagsTargets[0];
                      }
                    }
                  }
                }

                if (!targetAnno) {
                  targetAnno = annosToShow[0];
                }
                logger.debug('AnnotationWindow#init targetAnno:', targetAnno);

                this.initLayerSelector();
                this.addCreateWindowButton();
                this.placeholder = this.element.find('.placeholder');
                this.placeholder.text('Loading...').show();

                this._setupAnnotationListWidget();

                return _context.abrupt('return', this.reload().catch(function (reason) {
                  throw 'AnnotationWindow#init reload failed - ' + reason;
                }).then(function () {
                  logger.debug('AnnotationWindow#init annosToShow:', annosToShow);
                  if ((_this2.options.annotationId || _this2.options.initialTocTags) && annosToShow.length > 0) {
                    _this.highlightAnnotations([targetAnno], 'SELECTED');
                  }
                  _this.bindEvents();
                  return _this;
                }).catch(function (reason) {
                  throw 'AnnotationWindow#init promise failed - ' + reason;
                }));

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'getImageWindowId',
    value: function getImageWindowId() {
      return this.options.canvasWindowId;
    }
  }, {
    key: 'getImageWindowProxy',
    value: function getImageWindowProxy() {
      var windowId = this.getImageWindowId();
      return (0, _miradorProxyManager2.default)().getWindowProxyById(windowId);
    }
  }, {
    key: '_setupAnnotationListWidget',
    value: function _setupAnnotationListWidget() {
      if (!this.options.annotationListWidget) {
        var windowProxy = (0, _miradorProxyManager2.default)().getWindowProxyById(this.options.canvasWindowId);
        var canvases = windowProxy.getManifest().getCanvases();

        this.options.annotationListWidget = new _annotationListWidget2.default({
          annotationWindow: this,
          rootElem: this.listElem,
          imageWindowId: this.options.canvasWindowId,
          canvases: canvases,
          layerId: this.options.initialLayerId,
          tocTags: this.options.initialTocTags,
          annotationExplorer: this.options.explorer,
          state: (0, _stateStore2.default)(),
          isEditor: _session2.default.isEditor()
        });
        this.options.annotationListWidget.init();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      logger.debug('AnnotationWindow#destroy');
      this._unsubscribeAll();
    }
  }, {
    key: 'initMenuTagSelector',
    value: function initMenuTagSelector() {
      var _this3 = this;

      logger.debug('AnnotationWindow#initMenuTagSelector');
      if (this.menuTagSelector) {
        this.menuTagSelector.destroy();
      }
      this.menuTagSelector = new _menuTagSelector2.default({
        parent: this.element.find('.menu_tag_selector_container'),
        tocSpec: (0, _stateStore2.default)().getTransient('tocSpec'),
        annotationExplorer: this.options.explorer,
        initialTags: this.options.initialTocTags,
        changeCallback: function () {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(value, text) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    logger.debug('Change from TOC selector: ', value);
                    _context2.next = 3;
                    return _this3.options.annotationListWidget.moveToTag(value);

                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this3);
          }));

          return function changeCallback(_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    }
  }, {
    key: 'initLayerSelector',
    value: function initLayerSelector() {
      var _this = this;
      this._setCurrentLayerId(this.options.initialLayerId);
      this.layerSelector = new _layerSelector2.default({
        parent: this.element.find('.layer_selector_container'),
        annotationExplorer: this.options.explorer,
        initialLayerId: this.options.initialLayerId,
        changeCallback: function changeCallback(value, text) {
          logger.debug('Change from Layer selector: ', value);
          _this._setCurrentLayerId(value);
          _this.updateList();
        }
      });
    }
  }, {
    key: 'addCreateWindowButton',
    value: function addCreateWindowButton() {
      var _this4 = this;

      var parent = this.element.find('.annowin_layer_row');
      var button = jQuery('<div/>').addClass('ym_create_window_button').append(jQuery('<i class="fa fa-plus fa-lg fa-fw"></i>'));
      parent.append(button);
      button.click(function (event) {
        _this4.miradorProxy.publish('YM_DISPLAY_ON');
        jQuery.publish('YM_ADD_WINDOW', {
          miradorId: _this4.options.miradorId,
          imageWindowId: _this4.options.canvasWindowId
        });
      });
    }
  }, {
    key: 'getCurrentLayerId',
    value: function getCurrentLayerId() {
      return this.currentLayerId;
    }
  }, {
    key: '_setCurrentLayerId',
    value: function _setCurrentLayerId(layerId) {
      logger.debug('AnnotationWindow#_setCurrentLayerId layerId:', layerId);
      this.currentLayerId = layerId;
    }
  }, {
    key: 'reload',
    value: function reload() {
      logger.debug('AnnotationWindow#reload');
      var _this = this;
      var state = (0, _stateStore2.default)();

      this.placeholder.hide();

      if (state.getBoolean('fixAnnoCellHeight')) {
        this.element.addClass('fixed_height_cells');
      } else {
        this.element.removeClass('fixed_height_cells');
      }

      var canvas = this.getCurrentCanvas();
      this.element.find('.title').text(canvas.label);

      /* We're not showing toc selector in annotation window. Annotation ToC is now in sidebar menu
      if (state.getTransient('tagHierarchy')) {
        this.initMenuTagSelector();
        this.element.find('.annowin_menu_tag_row').show();
      } else {
        this.element.find('.annowin_menu_tag_row').hide();
      }
      */

      var layersPromise = new Promise(function (resolve, reject) {
        _this.options.explorer.getLayers().then(function (layers) {
          if (layers.length > 0) {
            if (_this.layerSelector.isLoaded()) {
              resolve();
            } else {
              _this.layerSelector.init(layers).then(function (layerSelector) {
                _this._setCurrentLayerId(layerSelector.val());
                resolve();
              }).catch(function (reason) {
                reject('layerSelector.init failed - ' + reason);
              });
            }
          } else {
            reject('No layers from annotation explorer');
          }
        });
      });

      var tocPromise = new Promise(function (resolve, reject) {
        if (_this.options.explorer.getAnnotationToc()) {
          _this.menuTagSelector.reload().then(function () {
            resolve();
          }).catch(function (reason) {
            reject('menuTagSelector.reload failed - ' + reason);
          });
        } else {
          resolve();
        }
      });

      return Promise.all([layersPromise, tocPromise]).then(function () {
        _this.updateList();
        return _this;
      });
    }
  }, {
    key: 'updateList',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var listWidget, state, canvasId, count;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                logger.debug('AnnotationWindow#updateList');
                listWidget = this.options.annotationListWidget;
                state = (0, _stateStore2.default)();
                canvasId = this.canvasWindow.getCurrentCanvasId();
                /*
                if (this.options.explorer.getAnnotationToc()) {
                  options.selectedTags = this.menuTagSelector.val().split('|');
                }
                */

                listWidget.init(this.layerSelector.val());
                count = 0;

                if (!this.options.initialTocTags) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 9;
                return listWidget.moveToTags(this.options.initialTocTags);

              case 9:
                count = _context3.sent;

                if (this.options.annotationId) {
                  listWidget.scrollToAnnotation(this.options.annotationId);
                }
                _context3.next = 16;
                break;

              case 13:
                _context3.next = 15;
                return listWidget.moveToCanvas(canvasId);

              case 15:
                count = _context3.sent;

              case 16:

                if (count === 0) {
                  this.placeholder.text('No annotations found.').show();
                } else {
                  this.placeholder.hide();
                }

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateList() {
        return _ref3.apply(this, arguments);
      }

      return updateList;
    }()
  }, {
    key: 'getCurrentCanvas',
    value: function getCurrentCanvas() {
      var window = this.canvasWindow;
      var id = window.getCurrentCanvasId();
      var canvases = window.getManifest().getCanvases();
      var current = canvases.filter(function (canvas) {
        return canvas['@id'] === id;
      });
      if (current.length < 1) {
        (0, _fatalError2.default)('Could not find the requested canvas: ' + id);
      } else {
        return current[0];
      }
    }
  }, {
    key: 'highlightAnnotation',
    value: function highlightAnnotation(annoId) {
      this.options.annotationListWidget.options.rootElem.find('.annowin_anno').each(function (index, value) {
        var annoElem = jQuery(value);
        var curAnnoId = annoElem.data('annotationId');
        if (curAnnoId === annoId) {
          annoElem.addClass('ym_anno_selected');
        } else {
          annoElem.removeClass('ym_anno_selected');
        }
      });
    }
  }, {
    key: 'highlightAnnotations',
    value: function highlightAnnotations(annotations, flag) {
      logger.debug('AnnotationWindow#highlightAnnotations annotations:', annotations, 'flag:', flag);
      var annoListWidget = this.options.annotationListWidget;
      var klass = flag === 'TARGETING' ? 'ym_anno_targeting' : flag === 'TARGETED' ? 'ym_anno_targeted' : 'ym_anno_selected';
      var firstMatch = true;

      annoListWidget.options.rootElem.find('.annowin_anno').each(function (index, value) {
        var annoElem = jQuery(value);
        var annoId = annoElem.data('annotationId');
        var matched = false;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = annotations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var anno = _step.value;

            var targetAnnotationId = anno['@id'];
            if (annoId === targetAnnotationId) {
              matched = true;
              annoElem.addClass(klass);
              if (firstMatch) {
                annoListWidget.scrollToElem(annoElem);
                firstMatch = false;
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (!matched) {
          annoElem.removeClass(klass);
        }
      });
    }
  }, {
    key: 'scrollToAnnotation',
    value: function scrollToAnnotation(annoId) {
      this.options.annotationListWidget.scrollToAnnotation(annoId);
    }
  }, {
    key: 'moveToAnnotation',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(annoId, canvasId) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                logger.debug('AnnotationWindow#scrollToAnnotation annoId:', annoId, 'canvasId:', canvasId);

                _context4.next = 3;
                return this.options.annotationListWidget.moveToAnnotation(annoId, canvasId);

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function moveToAnnotation(_x3, _x4) {
        return _ref4.apply(this, arguments);
      }

      return moveToAnnotation;
    }()
  }, {
    key: 'createInfoDiv',
    value: function createInfoDiv(annotation, callback) {
      var targetAnnoID = annotation.on.full;
      var targetLink = '<a target="_blank" href="' + targetAnnoID + '">' + targetAnnoID + '</a>';
      return jQuery(infoTemplate({ on: targetLink }));
    }
  }, {
    key: 'hasOpenEditor',
    value: function hasOpenEditor() {
      var hasOne = false;
      this.listElem.find('.annowin_anno').each(function (index, value) {
        if (jQuery(value).data('editing') === true) {
          hasOne = true;
          return false; // breaking out of jQuery.each
        };
      });
      return hasOne;
    }
  }, {
    key: 'fadeUp',
    value: function fadeUp(elem, onComplete) {
      elem.transition({
        animation: 'fade up',
        duration: '0.3s',
        onComplete: onComplete
      });
    }
  }, {
    key: 'fadeDown',
    value: function fadeDown(elem, onComplete) {
      elem.transition({
        animation: 'fade down',
        duration: '0.3s',
        onComplete: onComplete
      });
    }
  }, {
    key: '_getParagraphTag',
    value: function _getParagraphTag(annotation) {
      var tags = (0, _import.Anno)(annotation).tags;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tag = _step2.value;

          if (tag.match(/^p\d+$/)) {
            return tag;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this5 = this;

      logger.debug('AnnotationWindow#bindEvents');

      /*
      this._subscribe(jQuery, 'YM_READY_TO_RELOAD_ANNO_WIN', (event, imageWindowId) => {
        logger.debug('AnnotationWindow:SUB:YM_READY_TO_RELOAD_ANNO_WIN annoWin:', this.options.id, 'imageWindow:', imageWindowId);
        if (imageWindowId === this.options.canvasWindowId && !this.hasOpenEditor()) {
          this.reload();
        }
      });
      */

      this._subscribe(jQuery, 'ANNOWIN_ANNOTATION_CLICKED', function () {
        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(event, params) {
          var $anno, listWidget, annotations, layerId, tocSpec, toc, siblings, annoMap, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, anno, targeting, targeted;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  logger.debug('Annotation window ' + _this5.options.id + ' received ANNOWIN_ANNOTATION_CLICKED params:', params, 'layer:', _this5.currentLayerId);
                  $anno = (0, _import.Anno)(params.annotation);
                  listWidget = _this5.options.annotationListWidget;

                  if (!(params.annotationWindowId === _this5.options.id)) {
                    _context5.next = 5;
                    break;
                  }

                  return _context5.abrupt('return');

                case 5:
                  listWidget.clearHighlights();

                  _context5.next = 8;
                  return listWidget.moveToCanvas(params.canvasId);

                case 8:
                  annotations = _this5.canvasWindow.getAnnotationsList();
                  layerId = _this5.currentLayerId;
                  tocSpec = (0, _stateStore2.default)().getTransient('tocSpec');

                  if (!tocSpec) {
                    _context5.next = 21;
                    break;
                  }

                  _context5.next = 14;
                  return (0, _app2.default)().getAnnotationTocCache().getToc(params.canvasId);

                case 14:
                  toc = _context5.sent;
                  siblings = _import.annoUtil.findTocSiblings(params.annotation, annotations, layerId, toc);

                  logger.debug('AnnotationWindow SUB ANNOWIN_ANNOTATION_CLICKED siblings:', siblings);

                  siblings = siblings.filter(function (anno) {
                    return _this5._getParagraphTag(anno) === _this5._getParagraphTag(params.annotation);
                  });

                  if (!(siblings.length > 0)) {
                    _context5.next = 21;
                    break;
                  }

                  _this5.highlightAnnotations(siblings, 'SIBLING');
                  return _context5.abrupt('return');

                case 21:
                  annoMap = {};
                  _iteratorNormalCompletion3 = true;
                  _didIteratorError3 = false;
                  _iteratorError3 = undefined;
                  _context5.prev = 25;

                  for (_iterator3 = annotations[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    anno = _step3.value;

                    annoMap[anno['@id']] = anno;
                  }
                  _context5.next = 33;
                  break;

                case 29:
                  _context5.prev = 29;
                  _context5.t0 = _context5['catch'](25);
                  _didIteratorError3 = true;
                  _iteratorError3 = _context5.t0;

                case 33:
                  _context5.prev = 33;
                  _context5.prev = 34;

                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }

                case 36:
                  _context5.prev = 36;

                  if (!_didIteratorError3) {
                    _context5.next = 39;
                    break;
                  }

                  throw _iteratorError3;

                case 39:
                  return _context5.finish(36);

                case 40:
                  return _context5.finish(33);

                case 41:
                  targeting = _import.annoUtil.findTransitiveTargetingAnnotations(params.annotation, annoMap);

                  targeting = targeting.filter(function (anno) {
                    return anno.layerId === _this5.getCurrentLayerId();
                  });

                  if (!(targeting.length > 0)) {
                    _context5.next = 46;
                    break;
                  }

                  _this5.highlightAnnotations(targeting, 'TARGETING');
                  return _context5.abrupt('return');

                case 46:
                  targeted = _import.annoUtil.findTransitiveTargetAnnotations(params.annotation, annoMap).filter(function (anno) {
                    return anno.layerId === _this5.getCurrentLayerId();
                  });

                  if (!(targeted.length > 0)) {
                    _context5.next = 50;
                    break;
                  }

                  _this5.highlightAnnotations(targeted, 'TARGET');
                  return _context5.abrupt('return');

                case 50:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5, [[25, 29, 33, 41], [34,, 36, 40]]);
        }));

        return function (_x5, _x6) {
          return _ref5.apply(this, arguments);
        };
      }());

      this._subscribe(jQuery, 'YM_ANNO_HEIGHT_FIXED', function (event, fixedHeight) {
        if (fixedHeight) {
          _this5.element.addClass('fixed_height_cells');
        } else {
          _this5.element.removeClass('fixed_height_cells');
        }
      });

      /*
      this._subscribe(this.miradorProxy, 'currentCanvasIDUpdated.' + this.canvasWindow.id, event => {
        this.placeholder.text('Loading...').show();
      });
      */

      this._subscribe(jQuery, 'YM_ANNOTATION_TOC_TAGS_SELECTED', function (evnet, windowId, canvasId, tags) {
        logger.debug('AnnotationWindow:SUB:YM_ANNOTATION_TOC_TAGS_SELECTED imageWindow:', windowId, 'canvasId:', canvasId, 'tags:', tags);
        _this5.options.annotationListWidget.moveToTags(tags);
      });
    }
  }, {
    key: '_subscribe',
    value: function _subscribe(context, eventId, handler) {
      var saved = void 0;

      if (context === jQuery) {
        saved = this._jQuerySubscribed;
      } else if (context === this.miradorProxy) {
        saved = this._miradorSubscribed;
      } else {
        var msg = 'AnnotationWindow#_subscribe invalid context ';
        logger.error(msg, context);
        throw msg + context;
      }
      if (!(saved[eventId] instanceof Array)) {
        saved[eventId] = [];
      }
      saved[eventId].push(handler);
      context.subscribe(eventId, handler);
    }
  }, {
    key: '_unsubscribeAll',
    value: function _unsubscribeAll() {
      var _arr = [jQuery, this.miradorProxy];

      for (var _i = 0; _i < _arr.length; _i++) {
        var context = _arr[_i];
        var saved = context === jQuery ? this._jQuerySubscribed : this._miradorSubscribed;

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = Object.entries(saved)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step4$value = _slicedToArray(_step4.value, 2),
                eventId = _step4$value[0],
                handlers = _step4$value[1];

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = handlers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var handler = _step5.value;

                context.unsubscribe(eventId, handler);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }
  }]);

  return AnnotationWindow;
}();

exports.default = AnnotationWindow;


var template = Handlebars.compile(['<div class="ym_annotation_window">', '  <div class="annowin_header">', '    <div class="annowin_layer_row">', '      <span class="layer_selector_container"></span>', '    </div>', '    <div class="annowin_menu_tag_row">', '      <span class="menu_tag_selector_container"></span>', '    </div>', '  </div>', '  <div class="placeholder"></div>', '  <div class="annowin_list">', '  </div>', '</div>'].join(''));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _annotationTocRenderer = __webpack_require__(46);

var _annotationTocRenderer2 = _interopRequireDefault(_annotationTocRenderer);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var AnnotationPageRenderer = function () {
  function AnnotationPageRenderer(options) {
    _classCallCheck(this, AnnotationPageRenderer);

    this.options = Object.assign({
      annotationWindow: null,
      annotationRenderer: null
    }, options);
  }

  /**
   * options: {
   *   layerId: <string>,
   *   canvasId: <string>,
   *   canvasLabel: <string>,
   *   pageNum: <number> // for debugging
   * }
   *
   * @param {object} options
   */


  _createClass(AnnotationPageRenderer, [{
    key: 'createPageElement',
    value: function createPageElement(options) {
      var _this2 = this;

      var html = pageTemplate({ pageNum: options.pageNum });
      var pageElem = jQuery(html);
      var saveOrderButtonRow = pageElem.find('.annowin_temp_row');

      pageElem.data('canvasId', options.canvasId);
      pageElem.data('layerId', options.layerId);

      var pageHeader = pageElem.find('.page-header');
      pageHeader.text(options.canvasLabel);

      saveOrderButtonRow.find('.ym_button.save').click(function (event) {
        _this2._saveAnnotationsOrder(pageElem);
        saveOrderButtonRow.hide();
      });
      saveOrderButtonRow.find('.ym_button.cancel').click(function (event) {
        saveOrderButtonRow.hide();
      });
      return pageElem;
    }

    /**
     * options: {
     *   annotations: <object[]>,
     *   canvasId: <string>,
     *   annotationToc: <object>,
     *   isEditor: <bool>,
     *   pageNum: <number> // for debugging
     * }
     *
     * @param {object} pageElem
     * @param {object} options
     */

  }, {
    key: 'render',
    value: function render(pageElem, options) {
      if (options.annotationToc) {
        this._renderToc(pageElem, options);
      } else {
        this._renderDefault(pageElem, options);
      }
    }

    /**
     * options: {
     *   annotations: <object[]>,
     *   canvasId: <string>,
     *   isEditor: <bool>
     * }
     *
     * @param {object} pageElem
     * @param {object} options
     */

  }, {
    key: '_renderDefault',
    value: function _renderDefault(pageElem, options) {
      logger.debug('AnnotationPageRenderer#_renderDefault options:', options);
      var canvasId = pageElem.data('canvasId');
      var layerId = pageElem.data('layerId');
      var count = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = options.annotations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var annotation = _step.value;

          try {
            if (annotation.layerId === layerId) {
              ++count;
              var annoElem = this.options.annotationRenderer.createAnnoElem(annotation, {
                pageElem: pageElem,
                canvasId: canvasId,
                isEditor: options.isEditor
              });
              pageElem.append(annoElem);
            }
          } catch (e) {
            logger.error('ERROR AnnotationPageRenderer#_renderDefault', e);
            throw e;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return count;
    }
  }, {
    key: '_renderToc',
    value: function _renderToc(pageElem, options) {
      logger.debug('AnnotationPageRenderer#_renderToc options:', options);
      var renderer = new _annotationTocRenderer2.default({
        container: pageElem,
        canvasId: pageElem.data('canvasId'),
        layerId: pageElem.data('layerId'),
        toc: options.annotationToc,
        annotationRenderer: this.options.annotationRenderer
      });
      return renderer.render();
    }
  }, {
    key: '_saveAnnotationsOrder',
    value: function _saveAnnotationsOrder(pageElem) {
      var annoElems = pageElem.find('.annowin_anno');
      var annoIds = [];
      var canvasId = pageElem.data('canvasId');
      var layerId = pageElem.data('layerId');

      annoElems.each(function (index, value) {
        var annoId = jQuery(value).data('annotationId');
        annoIds.push(annoId);
      });

      logger.debug('AnnotationPageRenderer#_saveAnnotationsOrder canvasId:', canvasId, 'layerId:', layerId, 'annoIds:', annoIds);

      this.options.annotationExplorer.updateAnnotationListOrder(canvasId, layerId, annoIds).catch(function (reason) {
        _this.tempMenuRow.hide();
        var msg = 'AnnotationPageRenderer#_saveAnnotationsOrder updateAnnotationListOrder failed: ' + reason;
        throw msg;
      });
    }
  }]);

  return AnnotationPageRenderer;
}();

exports.default = AnnotationPageRenderer;


var pageTemplate = Handlebars.compile(['<div class="ym-annotation-page page-{{pageNum}}">', '  <div class="page-header">{{text}}', '  </div>', '  <div class="annowin_temp_row">', '    <span class="ui small orange button ym_button save">Save new order</span>', '    <span class="ui small orange button ym_button cancel">Cancel</span>', '  </div>', '</div>'].join(''));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = __webpack_require__(1);

var _annotationEditor = __webpack_require__(13);

var _annotationEditor2 = _interopRequireDefault(_annotationEditor);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var AnnotationRenderer = function () {
  function AnnotationRenderer(options) {
    _classCallCheck(this, AnnotationRenderer);

    this.options = Object.assign({
      annotationWindow: null,
      state: null // global state store
    }, options);

    this.layerIndexMap = this.options.state.getTransient('layerIndexMap');
    this.hideTags = this.options.state.getTransient('hideTagsInAnnotation');
  }

  /**
   * options: {
   *   pageElem: <object>,
   *   canvasId: <string>,
   *   isEditor: <bool>
   * }
   *
   * @param {object} annotation
   * @param {object} options
   */


  _createClass(AnnotationRenderer, [{
    key: 'createAnnoElem',
    value: function createAnnoElem(annotation, options) {
      //logger.debug('AnnotationRenderer#createAnnoElem anno:', annotation);
      var anno = (0, _import.Anno)(annotation);
      var content = anno.bodyText;
      var tags = anno.tags;
      var tagsHtml = this.getTagsHtml(tags);
      var style = anno.bodyStyle;

      var annoHtml = annotationTemplate({
        content: content,
        tags: tagsHtml,
        isEditor: options.isEditor,
        orderable: options.isEditor
      });

      var layerIndex = this.layerIndexMap[annotation.layerId];
      var annoElem = jQuery(annoHtml);
      var contentElem = annoElem.find('.content');
      _util2.default.setTextDirectionClass(contentElem, style);

      var menuBar = annoElem.find('.menu_bar');
      var annoOrderButtonsRow = options.pageElem.find('.annowin_temp_row');

      annoElem.data('annotationId', annotation['@id']);
      annoElem.data('canvasId', options.canvasId);
      annoElem.data('annoOrderButtonsRow', annoOrderButtonsRow);

      annoElem.find('.ui.dropdown').dropdown({ direction: 'downward' });

      menuBar.addClass('layer_' + layerIndex % 10);
      if (annotation.on['@type'] == 'oa:Annotation') {
        // annotation of annotation
        menuBar.addClass('targeting_anno');
      } else {
        menuBar.removeClass('targeting_anno');
      }

      if (this.hideTags) {
        annoElem.find('.tags').hide();
      }

      this.bindAnnotationItemEvents(annoElem, annotation, options);
      return annoElem;
    }
  }, {
    key: 'getTagsHtml',
    value: function getTagsHtml(tags) {
      var html = '';
      jQuery.each(tags, function (index, value) {
        html += '<span class="tag">' + value + '</span>';
      });
      return html;
    }
  }, {
    key: 'bindAnnotationItemEvents',
    value: function bindAnnotationItemEvents(annoElem, annotation, options) {
      var _this = this;
      var annoWin = this.options.annotationWindow;

      annoElem.click(function (event) {
        logger.debug('Clicked annotation:', annotation);
        annoWin.options.annotationListWidget.clearHighlights();
        annoWin.highlightAnnotation(annotation['@id']);
        jQuery.publish('ANNOWIN_ANNOTATION_CLICKED', [{
          annotationWindowId: annoWin.getId(),
          annotation: annotation,
          canvasId: jQuery(this).data('canvasId'),
          imageWindowId: annoWin.getImageWindowId()
        }]);
      });

      annoElem.find('.annotate').click(function (event) {
        event.stopPropagation();

        var dialogElement = jQuery('#ym_annotation_dialog');
        var editor = new _annotationEditor2.default({
          parent: dialogElement,
          windowId: annoWin.getImageWindowId(),
          mode: 'create',
          targetAnnotation: annotation,
          endpoint: annoWin.endpoint,
          saveCallback: function saveCallback(annotation) {
            try {
              dialogElement.dialog('close');
              annoWin.canvasWindow.getAnnotationsList().push(annotation);
              annoWin.miradorProxy.publish('ANNOTATIONS_LIST_UPDATED', { windowId: annoWin.canvasWindow.id, annotationsList: annoWin.canvasWindow.annotationsList });
            } catch (e) {
              logger.error('AnnotationRenderer saving from "annotate" failed:', e);
            }
          },
          cancelCallback: function cancelCallback() {
            dialogElement.dialog('close');
          }
        });
        dialogElement.dialog({ // jQuery-UI dialog
          title: 'Create annotation',
          modal: true,
          draggable: true,
          dialogClass: 'no_close',
          width: 400
        });
        editor.show();
      });

      annoElem.find('.edit').click(function (event) {
        event.stopPropagation();

        var editor = new _annotationEditor2.default({
          parent: annoElem,
          windowId: annoWin.getImageWindowId(),
          mode: 'update',
          endpoint: annoWin.endpoint,
          annotation: annotation,
          saveCallback: function saveCallback(annotation, content) {
            if (annoWin.currentLayerId === annotation.layerId) {
              var normalView = annoElem.find('.normal_view');
              var contentElem = normalView.find('.content');
              contentElem.html(content);
              _util2.default.setTextDirectionClass(contentElem, (0, _import.Anno)(annotation).bodyStyle);
              normalView.show();
              annoElem.data('editing', false);
            } else {
              annoElem.remove();
            }
          },
          cancelCallback: function cancelCallback() {
            annoElem.find('.normal_view').show();
            annoElem.data('editing', false);
          }
        });

        annoElem.data('editing', true);
        annoElem.find('.normal_view').hide();
        editor.show();
      });

      annoElem.find('.delete').click(function (event) {
        event.stopPropagation();

        if (window.confirm('Do you really want to delete the annotation?')) {
          annoWin.miradorProxy.publish('annotationDeleted.' + annoWin.canvasWindow.id, [annotation['@id']]);
        }
      });

      annoElem.find('.up.icon').click(function (event) {
        event.stopPropagation();
        var sibling = annoElem.prev();

        if (sibling.length > 0 && sibling.hasClass('annowin_anno')) {
          annoWin.fadeDown(annoElem, function () {
            annoElem.after(sibling);
            annoWin.fadeUp(annoElem, function () {
              annoElem.data('annoOrderButtonsRow').show();
            });
          });
        }
      });

      annoElem.find('.down.icon').click(function (event) {
        event.stopPropagation();
        var sibling = annoElem.next();

        if (sibling.length > 0 && sibling.hasClass('annowin_anno')) {
          annoWin.fadeUp(annoElem, function () {
            annoElem.before(sibling);
            annoWin.fadeDown(annoElem, function () {
              annoElem.data('annoOrderButtonsRow').show();
            });
          });
        }
      });
    }
  }]);

  return AnnotationRenderer;
}();

exports.default = AnnotationRenderer;


var annotationTemplate = Handlebars.compile(['<div class="annowin_anno">', '  <div class="normal_view">', '    {{#if isEditor}}', '      <div class="menu_bar">', '        <div class="ui text menu">', '          <div class="ui dropdown item">', '            Action<i class="dropdown icon"></i>', '            <div class="menu">', '              <div class="annotate item"><i class="fa fa-hand-o-left fa-fw"></i> Annotate</div>', '              <div class="edit item"><i class="fa fa-edit fa-fw"></i> {{t "edit"}}</div>', '              <div class="delete item"><i class="fa fa-times fa-fw"></i> {{t "delete"}}</div>', '            </div>', '          </div>', '          {{#if orderable}}', '            <div class="right menu">', '              <i class="caret down icon"></i>', '              <i class="caret up icon"></i>', '            </div>', '          {{/if}}', '        </div>', '      </div>', '    {{/if}}', '    <div class="content">{{{content}}}</div>', '    <div class="tags">{{{tags}}}</div>', '  </div>', '</div>'].join(''));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _session = __webpack_require__(9);

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

/**
 * Render annotations  when an annotation ToC structure is available.
 */

var AnnotationTocRenderer = function () {
  function AnnotationTocRenderer(options) {
    _classCallCheck(this, AnnotationTocRenderer);

    this.options = Object.assign({
      container: null,
      canvasId: null,
      layerId: null,
      toc: null,
      annotationRenderer: null
    }, options);

    logger.debug('AnnotationTocRenderer#constructor options:', options);

    this._isEditor = _session2.default.isEditor();
  }

  _createClass(AnnotationTocRenderer, [{
    key: 'render',
    value: function render() {
      var _this = this;

      logger.debug('AnnotationTocRenderer#render');

      this.options.toc.walk(function (node) {
        if (node.isRoot) {
          return; // do nothing with root node
        }
        _this.appendHeader(node);
        _this.appendAnnotationForTocNode(node);
        _this.appendAnnotationsForChildNodes(node);
      });
      this.appendUnattachedAnnotations();
    }
  }, {
    key: 'appendHeader',
    value: function appendHeader(node) {
      var layerId = this.options.layerId;

      // We are distinguishing between leaf and non-leaf nodes to ensure
      // only one header will show over any set of annotations.

      if (nonLeafHasAnnotationsToShow(node, layerId) || leafHasAnnotationsToShow(node, layerId)) {
        var headerElem = this.createHeaderElem(node);
        this.options.container.append(headerElem);
      }
    }
  }, {
    key: 'appendAnnotationForTocNode',
    value: function appendAnnotationForTocNode(node) {
      logger.debug('AnnotationTocRenderer#appendAnnotationsForTocNode node:', node);
      if (node.annotation && node.annotation.layerId === this.options.layerId) {
        var renderer = this.options.annotationRenderer;
        var annoElem = renderer.createAnnoElem(node.annotation, {
          pageElem: this.options.container,
          canvasId: this.options.canvasId,
          isEditor: this._isEditor
        });
        this.options.container.append(annoElem);
      } else {
        //logger.debug('AnnotationTocRenderer#appendAnnotationForTocNode no annotation is associated with node', node, 'and layer', this.options.layerId);
      }
    }
  }, {
    key: 'appendAnnotationsForChildNodes',
    value: function appendAnnotationsForChildNodes(node) {
      logger.debug('AnnotationTocRenderer#appendAnnotationsForChildNodes children:', node.childAnnotations);
      var renderer = this.options.annotationRenderer;
      var pageElem = this.options.container;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = node.childAnnotations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var annotation = _step.value;

          if (annotation.layerId === this.options.layerId) {
            var annoElem = renderer.createAnnoElem(annotation, {
              pageElem: pageElem,
              canvasId: pageElem.data('canvasId'),
              isEditor: this._isEditor
            });
            pageElem.append(annoElem);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'appendUnattachedAnnotations',
    value: function appendUnattachedAnnotations() {
      logger.debug('AnnotationTocRenderer#appendUnattachedAnnotations');
      var renderer = this.options.annotationRenderer;

      if (this.options.toc.numUnassigned() > 0) {
        /*
        const unassignedHeader = jQuery(headerTemplate({ text: 'Unassigned' }));
        let count = 0;
        this.options.container.append(unassignedHeader);
        */
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.options.toc.unassigned()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var annotation = _step2.value;

            logger.error('AnnotationTocRenderer#appendUnattachedAnnotations unassigned:', annotation);
            /*
            let annoElem = renderer.createAnnoElem(annotation, {
              annotations: this.options.annotations,
              isEditor: this._isEditor
            });
            this.options.container.append(annoElem);
            ++count;
            */
          }
          /*
          if (count === 0) {
            unassignedHeader.hide();
          }
          */
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }, {
    key: 'createHeaderElem',
    value: function createHeaderElem(node) {
      var text = node.cumulativeLabel;
      var tags = node.cumulativeTags;
      var headerHtml = headerTemplate({ text: text });
      var headerElem = jQuery(headerHtml).addClass('header-level-' + tags.length);

      headerElem.data('tags', tags);
      return headerElem;
    }
  }]);

  return AnnotationTocRenderer;
}();

exports.default = AnnotationTocRenderer;


var headerTemplate = Handlebars.compile(['<div class="annowin_group_header">{{text}}', '</div>'].join(''));

// True if node is a non-leaf and there are annotations to show under the header
function nonLeafHasAnnotationsToShow(node, layerId) {
  var numChildNodes = Object.keys(node.childNodes).length;

  return numChildNodes > 0 && ( // non-leaf
  node.annotation && node.annotation.layerId === layerId || // the annotation for this node matches the current layer so it will show
  hasChildAnnotationsToShow(node, layerId)); // there are annotations that target this non-leaf node directly
}

// True if node is a leaf and there are annotations to show under the header
function leafHasAnnotationsToShow(node, layerId) {
  var numChildNodes = Object.keys(node.childNodes).length;

  return numChildNodes === 0 && // leaf
  node.layerIds.has(layerId); // node is a leaf and there are annotations with matching layer
}

function hasChildAnnotationsToShow(node, layerId) {
  var annos = node.childAnnotations;
  var num = annos.length;
  for (var i = 0; i < num; ++i) {
    var anno = node.childAnnotations[i];
    if (anno.layerId === layerId) {
      return true;
    }
  }
  return false;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getErrorDialog;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getErrorDialog() {
  if (!instance) {
    var id = 'ym_error_dialog';
    var elem = jQuery('#' + id);
    if (elem.length === 0) {
      elem = jQuery('<div/>').attr('id', id).addClass('ui modal ym_modal').appendTo(jQuery('body'));
    }
    instance = new ErrorDialog(elem);
  }
  return instance;
};

var ErrorDialog = function () {
  function ErrorDialog(elem) {
    _classCallCheck(this, ErrorDialog);

    this.elem = elem;
    elem.modal({
      onHidden: function onHidden() {
        elem.modal('hide dimmer');
      }
    });
    this.messageMap = {
      layers: '<p>Sorry, there was a problem retrieving the annotation layers.</p>' + MSG_TRY_LATER,
      annotations: '<p>Sorry, there was a problem retrieving the annotations.</p>' + MSG_TRY_LATER,
      authz_create: '<p>Sorry, you are not authorized to create annotations.</p>',
      authz_update: '<p>Sorry, you are not authorized to update data.</p>',
      authz_delete: '<p>Sorry, you are not authorized to delete data.</p>'
    };
  }

  _createClass(ErrorDialog, [{
    key: 'show',
    value: function show(errorId) {
      var message = this.messageMap[errorId] || 'Undefined error.';
      this.elem.html(template({ message: message }));
      this.elem.modal('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.elem.modal('hide');
    }
  }]);

  return ErrorDialog;
}();

var instance = null;

var template = Handlebars.compile(['<div class="header">Error</div>', '<div class="content">', '  <div class="description">', '    {{{message}}}', '  </div>', '</div>', '<div class="actions">', '  <div class="ui cancel button">Dismiss</div>', '</div>'].join(''));

var MSG_TRY_LATER = '<p>Please try again by reloading the page, or if problem persists, contact the site administrator.</p>';

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _selector = __webpack_require__(16);

var _selector2 = _interopRequireDefault(_selector);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var MenuTagSelector = function () {
  function MenuTagSelector(options) {
    _classCallCheck(this, MenuTagSelector);

    logger.debug('MenuTagSelector#constructor options:', options);
    this.options = Object.assign({
      selector: null,
      parent: null,
      tocSpec: null,
      annotationExplorer: null,
      changeCallback: null,
      initialTags: null,
      depth: 1
    }, options);

    this.init();
  }

  _createClass(MenuTagSelector, [{
    key: 'init',
    value: function init() {
      var _this = this;
      if (this.options.initialTags) {
        this.options.initialTags = this.options.initialTags.slice(0, this.options.depth);
      }

      this.options.selector = new _selector2.default({
        appendTo: this.options.parent,
        changeCallback: function changeCallback(value, text) {
          logger.debug('MenuTagSelector select value:', value, 'text:', text);
          if (typeof _this.options.changeCallback === 'function') {
            _this.options.changeCallback(value, text);
          }
        }
      });
      return this.reload();
    }
  }, {
    key: 'reload',
    value: function reload() {
      var _this2 = this;

      //var toc = this.options.annotationExplorer.getAnnotationToc();
      //var annoHierarchy = toc ? toc.annoHierarchy : null;
      var tocSpec = this.options.tocSpec;

      return new Promise(function (resolve, reject) {
        /*
        if (!annoHierarchy) {
          reject('Undefined annoHierarchy');
          return;
        }
        */

        _this2.options.selector.empty();

        var layers = [];
        //var menu = this.buildMenu(annoHierarchy, null, 0); //XXX
        var menu = _this2.buildMenu(tocSpec, null, 0); //XXX
        logger.debug('MenuTagSelector menu:', menu);

        _this2.options.selector.setItems(menu);

        var topGen = tocSpec.generator[0];
        var firstValue = topGen.tag.prefix + '1';

        setTimeout(function () {
          var value = _this2.options.initialTags && _this2.options.initialTags.length > 0 ? _this2.options.initialTags.join('|') : firstValue;
          logger.debug('MenuTagSelector#reload initially setting value to', value);
          _this2.options.selector.val(value, true);
          resolve();
        }, 0);
      });
    }
  }, {
    key: 'val',
    value: function val(value, skipNotify) {
      logger.debug('MenuTagSelector#val value:', value, 'skipNotify:', skipNotify);
      return this.options.selector.val(value, skipNotify);
    }
  }, {
    key: 'buildMenu',
    value: function buildMenu(tocSpec) {
      var topGen = tocSpec.generator[0];
      var menu = [];
      for (var i = 1; i <= topGen.max; ++i) {
        menu.push({
          label: topGen.label.prefix + i,
          value: topGen.tag.prefix + i,
          children: []
        });
      }
      return menu;
    }

    /**
     * node: an annoHierarchy node
     */

  }, {
    key: 'buildMenu_old',
    value: function buildMenu_old(node, parentItem, currentDepth) {
      logger.debug('MenuTagSelector#buildMenu node:', node, 'parentItem:', parentItem, 'currentDepth:', currentDepth);
      if (currentDepth > this.options.depth) {
        return null;
      }
      var _this = this;
      var children = _util2.default.getValues(node.childNodes).sort(function (a, b) {
        return a.weight - b.weight;
      });

      var item = { children: [] };

      if (!node.isRoot) {
        var label = parentItem ? parentItem.label + ', ' + node.spec.label : node.spec.label;
        var value = parentItem ? parentItem.value + '|' + node.spec.tag : node.spec.tag;
        item.label = label;
        item.value = value;
      }
      if (children.length > 0) {
        jQuery.each(children, function (key, childNode) {
          var subMenu = _this.buildMenu(childNode, node.isRoot ? null : item, currentDepth + 1);
          if (subMenu) {
            item.children.push(subMenu);
          }
        });
      }
      if (node.isRoot) {
        return [{ label: 'All', value: 'all', children: [] }].concat(item.children);
      } else {
        return item;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.options.selector.destroy();
    }
  }]);

  return MenuTagSelector;
}();

exports.default = MenuTagSelector;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// joosugi v0.2.1-9-g3a1bb78 built Wed Jul 26 2017 13:12:46 GMT-0400 (EDT)


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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = Anno;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Anno(oaAnnotation) {
  return new Annotation(oaAnnotation);
}

var Annotation = function () {
  function Annotation(oaAnnotation) {
    _classCallCheck(this, Annotation);

    this.oaAnnotation = oaAnnotation;
  }

  _createClass(Annotation, [{
    key: 'addTag',
    value: function addTag(tag) {
      var resources = this._makeArray(this.oaAnnotation.resource);
      resources.push(this._createTag(tag));
      this.oaAnnotation.resource = resources;
    }
  }, {
    key: 'addTarget',


    /**
     * Add target ("on" attribute) to annotation
     */
    value: function addTarget(target) {
      var anno = this.oaAnnotation;

      anno.on = this._makeArray(anno.on);
      anno.on.push(target);
    }
  }, {
    key: 'addInverseTarget',
    value: function addInverseTarget(annotation) {
      var anno = this.oaAnnotation;

      anno.targetedBy = this._makeArray(anno.targetedBy);
      anno.targetedBy.push(annotation);
    }
  }, {
    key: '_makeArray',
    value: function _makeArray(object) {
      if (typeof object === 'null' || typeof object === 'undefined') {
        return [];
      }
      if (object instanceof Array) {
        return object;
      }
      return [object];
    }
  }, {
    key: '_getTextResource',
    value: function _getTextResource() {
      var resources = this._makeArray(this.oaAnnotation.resource);

      var items = resources.filter(function (item) {
        return item['@type'] === 'dctypes:Text';
      });
      if (items.length > 0) {
        if (items.length > 1) {
          console.log('WARNING Annotation#_getTextResource too many text items:', items.length);
        }
        return items[0];
      } else {
        return null;
      }
    }
  }, {
    key: '_createTag',
    value: function _createTag(tagString) {
      return {
        '@type': 'oa:Tag',
        chars: tagString
      };
    }
  }, {
    key: 'id',
    get: function get() {
      return this.oaAnnotation['@id'];
    }
  }, {
    key: 'layerId',
    get: function get() {
      return this.oaAnnotation.layerId;
    }

    /**
     * @returns {Array} IDs of layers associated with the annotation
     */

  }, {
    key: 'layers',
    get: function get() {
      return this.oaAnnotation.layers;
    }

    /**
     * Returns content of first text (non-tag) resource it finds from the annotation.
     */

  }, {
    key: 'bodyText',
    get: function get() {
      var textResource = this._getTextResource();
      return textResource ? textResource.chars : null;
    },
    set: function set(s) {
      var textResource = this._getTextResource();
      if (textResource) {
        textResource.chars = s;
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'bodyStyle',
    get: function get() {
      var textResource = this._getTextResource();
      return textResource ? textResource.style : null;
    }

    /**
     * Is Mirador implementation of tags IIIF non-conforming?
     */

  }, {
    key: 'tags',
    get: function get() {
      var resources = this._makeArray(this.oaAnnotation.resource);
      var tags = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = resources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item['@type'] === "oa:Tag") {
            tags.push(item.chars);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return tags;
    }
  }, {
    key: 'targets',
    get: function get() {
      return this._makeArray(this.oaAnnotation.on);
    }
  }, {
    key: 'targetedBy',
    get: function get() {
      return this._makeArray(this.oaAnnotation.targetedBy);
    }
  }]);

  return Annotation;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotationWrapper = __webpack_require__(0);

var _annotationWrapper2 = _interopRequireDefault(_annotationWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  logger: { debug: function debug() {}, info: function info() {}, warning: function warning() {}, error: function error() {} },

  setLogger: function setLogger(logger) {
    this.logger = logger;
  },

  /**
   * @param {object} target "on" attribute of an annotation
   * @returns {boolean} true if the target is a canvas fragment, not another annotation
   */
  targetIsAnnotationOnCanvas: function targetIsAnnotationOnCanvas(target) {
    return target['@type'] !== 'oa:Annotation';
  },

  hasTargetOnCanvas: function hasTargetOnCanvas(annotation) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _annotationWrapper2.default)(annotation).targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var target = _step.value;

        if (this.targetIsAnnotationOnCanvas(target)) {
          return true;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return false;
  },

  // For an annotation that targets other annotation(s), follow the
  // "on" relations recursively until no more targets are found.
  findTransitiveTargetAnnotations: function findTransitiveTargetAnnotations(annotation, annotationMap) {
    //this.logger.debug('annoUtil.findTransitiveTargetAnnotations annotation:', annotation, 'annotationMap:', annotationMap);
    var $anno = (0, _annotationWrapper2.default)(annotation);
    var targetAnnos = $anno.targets.map(function (target) {
      var annoId = target.full;
      return annotationMap[annoId];
    }).filter(function (anno) {
      return anno !== undefined && anno !== null;
    });

    if (targetAnnos.length === 0) {
      return [];
    }

    var result = targetAnnos;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = targetAnnos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var targetAnno = _step2.value;

        var tempResult = this.findTransitiveTargetAnnotations(targetAnno, annotationMap);
        result = result.concat(tempResult);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return result;
  },

  // For an annotation that targets other annotation(s), follow the
  // "on" relations recursively until no more targets are found.
  findTransitiveTargetingAnnotations: function findTransitiveTargetingAnnotations(annotation, annotationMap) {
    //this.logger.debug('annoUtil.findTransitiveTargetingAnnotations annotation:', annotation, 'annotationMap:', annotationMap);
    var $anno = (0, _annotationWrapper2.default)(annotation);
    var targetingAnnos = $anno.targetedBy;

    targetingAnnos = targetingAnnos.filter(function (anno) {
      var annoInMap = annotationMap[anno['@id']];
      return annoInMap !== undefined && annoInMap !== null;
    });

    if (targetingAnnos.length === 0) {
      return [];
    }
    var result = targetingAnnos;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = targetingAnnos[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var targetingAnno = _step3.value;

        var tempResult = this.findTransitiveTargetingAnnotations(targetingAnno, annotationMap);
        result = result.concat(tempResult);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return result;
  },

  findTargetAnnotationsOnCanvas: function findTargetAnnotationsOnCanvas(annotation, annotationMap) {
    var _this = this;

    var allTargetAnnos = this.findTransitiveTargetAnnotations(annotation, annotationMap);
    return allTargetAnnos.filter(function (anno) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _annotationWrapper2.default)(anno).targets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var target = _step4.value;

          if (_this.targetIsAnnotationOnCanvas(target)) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return false;
    });
  },

  /**
   * Find annotations from "annotationsList" that belong to the same TOC node
   * and which belong to the layer with "layerId".
   */
  findTocSiblings: function findTocSiblings(annotation, annotationsList, layerId, toc) {
    var node = toc.findNodeForAnnotation(annotation);
    if (!node) {
      return [];
    }
    return annotationsList.filter(function (currentAnno) {
      return currentAnno.layerId === layerId && toc.findNodeForAnnotation(currentAnno) === node;
    });
  },

  findAllAnnotationsForTocNode: function findAllAnnotationsForTocNode(tocNode) {
    var result = [];

    if (tocNode.annotation) {
      result.push(tocNode.annotation);
    }
    if (tocNode.childAnnotations instanceof Array) {
      result = result.concat(tocNode.childAnnotations);
    }
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = Object.values(tocNode.childNodes)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var node = _step5.value;

        result = result.concat(this.findAllAnnotationsForTocNode(node));
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return result;
  },

  /**
   * XXX this version of mergeTargets will probably have to be removed
   * because SVG to SVG merge will likely turn out to be illegal against
   * the IIIF spec. The selector SVG of a target should always contains
   * a single path and if multiple targets exist for an annotation,
   * the "on" field should be an array of targets.
   *
   * Merge annotation's target ("on" attribute) with a new "on" attribute (sourceTarget).
   */
  mergeTargetsOld: function mergeTargetsOld(annotation, sourceTarget) {
    var destTarget = annotation.on;
    var destCanvasId = destTarget.full;
    var sourceCanvasId = sourceTarget.full;

    if (destTarget instanceof Array) {
      // (destination) annotation has (possibly) multiple targets
      var targetsWithSameCanvasId = destTarget.filter(function (on) {
        return on.full === sourceCanvasId;
      });
      if (targetsWithSameCanvasId.length === 1) {
        // there's a destination target on the same canvas as the source target
        var target = targetsWithSameCanvasId[0];
        target.selector.value = svgUtil.mergeSvgs(target.selector.value, sourceTarget.selector.value);
      } else if (targetsWithSameCanvasId.length === 0) {
        // there's no existing target on the same canvas
        annotation.on.push(sourceTarget);
      } else {
        throw 'multiple targets on same canvas';
      }
    } else {
      // (destination) annotation has a single target
      var destTargetId = destTarget.full;
      if (destCanvasId === sourceCanvasId) {
        destTarget.selector.value = svgUtil.mergeSvgs(destTarget.selector.value, sourceTarget.selector.value);
      } else {
        annotation.on = [destTarget, sourceTarget];
      }
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _annotationWrapper = __webpack_require__(0);

var _annotationWrapper2 = _interopRequireDefault(_annotationWrapper);

var _annotationUtil = __webpack_require__(1);

var _annotationUtil2 = _interopRequireDefault(_annotationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = { debug: function debug() {
    return null;
  }, info: function info() {
    return null;
  }, warning: function warning() {
    return null;
  }, error: function error() {
    return null;
  } };

/**
 * A tag based table-of-contents structure for annotations.
 *
 * Builds a structure (annoHiercrchy) of annotations
 * so they can be accessed and manipulated
 * according to the pre-defined TOC tags hierarchy (spec).
 */

var AnnotationToc = function () {
  function AnnotationToc(spec, annotations, options) {
    _classCallCheck(this, AnnotationToc);

    this.options = Object.assign({
      logger: null
    }, options || {});

    if (this.options.logger) {
      logger = this.options.logger;
    }

    /*
     * Spec is a JSON passed from outside (an array of arrays).
     * It defines the tags to be used to define the hiearchy.
     * It is different from "ranges" because
     * it is used to define a strucutre of annotations in a single canvas
     * while ranges are used to define a structure of canvases in a sequence.
     * For example, the first array could list tags for sections of a story
     * and the second one could list tags for sub-sections.
     */
    this.spec = spec;

    this.annotations = annotations;
    this._annoMap = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = annotations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var anno = _step.value;

        this._annoMap[anno['@id']] = anno;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.tagWeights = {}; // for sorting

    /**
     * This can be considered the output of parse,
     * while "this.spec" and "annotations" are the input.
     *
     * Each node is an object:
     * {
     *   spec: AN_OBJECT, // spec object from this.spec, with label, short, tag attributes
     *   annotation: AN_OBJECT, // annotation
     *   layerIds: A_SET, // set of layer IDs for annotations that belong to this node or its children
     *   cumulativeLabel: A_STRING, // concatenation of short labels inherited from the parent nodes
     *   cumulativeTags: [], // list of tags for this node and its ancestors
     *   childNodes: AN_OBJECT, // child TOC nodes as a hashmap on tags
     *   childAnnotations: AN_ARRAY, // non-TOC-node annotations that targets this node
     *   isRoot: A_BOOL, // true if the node is the root
     *   weight: A_NUMBER // for sorting
     * }
     */
    this.annoHierarchy = null;

    /**
     * Annotations that do not belong to the ToC structure.
     */
    this._unassigned = [];

    this.annoToNodeMap = {}; // key: annotation ID, value: node in annoHierarchy;
    this.init();
  }

  _createClass(AnnotationToc, [{
    key: 'init',
    value: function init(annotations) {
      logger.debug('AnnotationToc#init spec: ', this.spec);

      this.annoHierarchy = this.newNode(null, null); // root node

      this.initTagWeights();
      this.parse(this.annotations);
    }

    /**
     * Find the node corresponding to the sequence of tags.
     * @param {...string} tags
     * @returns {object} a TOC node
     */

  }, {
    key: 'getNode',
    value: function getNode() {
      var tags = Array.from(arguments);
      var node = this.annoHierarchy;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tag = _step2.value;

          if (!node) {
            break;
          }
          node = node.childNodes[tag];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return node === this.annoHierarchy ? null : node;
    }
  }, {
    key: 'findNodeForAnnotation',
    value: function findNodeForAnnotation(annotation) {
      var targetAnno = this._findFinalTargetAnnotationOnCanvas(annotation);
      return targetAnno ? this.annoToNodeMap[targetAnno['@id']] : null;
    }

    /**
     * Assign weights to tags according to their position in the array.
     */

  }, {
    key: 'initTagWeights',
    value: function initTagWeights() {
      var _this = this;
      //jQuery.each(this.spec.nodeSpecs, function(rowIndex, row) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.spec.nodeSpecs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var row = _step3.value;

          //jQuery.each(row, function(index, nodeSpec) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = row.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                  index = _step4$value[0],
                  nodeSpec = _step4$value[1];

              _this.tagWeights[nodeSpec.tag] = index;
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'parse',
    value: function parse() {
      // First pass
      var remainingAnnotations = this.addTaggedAnnotations(this.annotations);

      // Second pass
      this.addRemainingAnnotations(remainingAnnotations);

      // Third pass
      this.processOrdering();
    }

    /**
     * Build a TOC structure
     * @return An array of annotations that are NOT assigned to a TOC node.
     */

  }, {
    key: 'addTaggedAnnotations',
    value: function addTaggedAnnotations(annotations) {
      var _this = this;
      var remainder = [];

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = annotations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var annotation = _step5.value;

          var $anno = (0, _annotationWrapper2.default)(annotation);
          var tags = $anno.tags;
          var success = _this.buildChildNodes(annotation, tags, 0, _this.annoHierarchy);

          if (!success) {
            remainder.push(annotation);
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return remainder;
    }

    /**
     * Assign remaining (non-node) annotations to correct toc nodes.
     *
     * @param {object[]} annotations
     */

  }, {
    key: 'addRemainingAnnotations',
    value: function addRemainingAnnotations(annotations) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = annotations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var annotation = _step6.value;

          var targetAnno = this._findFinalTargetAnnotationOnCanvas(annotation);

          if (targetAnno) {
            var node = this.annoToNodeMap[targetAnno['@id']];
            if (targetAnno && node) {
              annotation.tocTags = node.cumulativeTags; // XXX
              node.childAnnotations.push(annotation);
              this.registerLayerWithNode(node, annotation.layerId);
            } else {
              logger.error('AnnotationToc#addRemainingAnnotations not covered by ToC');
              this._unassigned.push(annotation);
            }
          } else {
            logger.error('AnnotationToc#addRemainingAnnotations orphan', annotation);
            this._unassigned.push(annotation);
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }

    /**
     * Assign paragraph numbers (tags) to  annotations
     */

  }, {
    key: 'processOrdering',
    value: function processOrdering() {
      this.walk(function (node) {
        var annotations = node.childAnnotations;
        var counts = {};

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = annotations[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var anno = _step7.value;

            var $anno = (0, _annotationWrapper2.default)(anno);
            var layerId = $anno.layerId;
            if (counts[layerId] === undefined) {
              counts[layerId] = 0;
            }
            var count = ++counts[layerId];
            $anno.addTag('p' + count);
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      });
    }
  }, {
    key: '_findFinalTargetAnnotationOnCanvas',
    value: function _findFinalTargetAnnotationOnCanvas(annotation) {
      var annos = _annotationUtil2.default.findTargetAnnotationsOnCanvas(annotation, this._annoMap);
      if (annos.length > 1) {
        logger.warning('AnnotationToc#_findFinalTargetAnnotationOnCanvas foudn more than one targets:', annos);
      }
      return annos[0];
    }

    /**
     * Recursively builds the TOC structure.
     * @param {object} annotation Annotation to be assigned to the parent node
     * @param {string[]} tags
     * @param {number} rowIndex Index of this.annoHierarchy
     * @param {object} parent Parent node
     * @return {boolean} true if the annotation was set to be a TOC node, false if not.
     */

  }, {
    key: 'buildChildNodes',
    value: function buildChildNodes(annotation, tags, rowIndex, parent) {
      var currentNode = null;

      if (rowIndex >= this.spec.nodeSpecs.length) {
        // no more levels to explore in the TOC structure
        if (parent.isRoot) {
          // The root is not a TOC node
          return false;
        } else {
          // Assign the annotation to parent (a TOC node)
          parent.annotation = annotation;
          parent.annotation.tocTags = parent.cumulativeTags; // XXX
          this.annoToNodeMap[annotation['@id']] = parent;
          this.registerLayerWithNode(parent, annotation.layerId);
          return true;
        }
      }

      var nodeSpec = this.tagInSpecs(tags, this.spec.nodeSpecs[rowIndex]);

      if (nodeSpec) {
        // one of the tags belongs to the corresponding level of the pre-defined tag hierarchy
        var tag = nodeSpec.tag;
        var annoHierarchy = this.annoHierarchy;

        if (!parent.childNodes[tag]) {
          parent.childNodes[tag] = this.newNode(nodeSpec, parent);
        }

        currentNode = parent.childNodes[tag];

        if (parent.isRoot) {
          currentNode.cumulativeLabel = currentNode.spec.short;
        } else {
          currentNode.cumulativeLabel = parent.cumulativeLabel + this.spec.shortLabelSeparator + currentNode.spec.short;
        }
        return this.buildChildNodes(annotation, tags, rowIndex + 1, currentNode);
      } else {
        // no matching tags so far
        if (parent.isRoot) {
          return false;
        } else {
          parent.annotation = annotation;
          parent.annotation.tocTags = parent.cumulativeTags; // XXX
          this.registerLayerWithNode(parent, annotation.layerId);
          this.annoToNodeMap[annotation['@id']] = parent;
          return true;
        }
      }
    }

    /**
     * A tag object is an object in this.tagHierarcy that represents a tag.
     *
     * @param {string[]} tags List of tags
     * @param {object[]} nodeSpecs List of node specs
     * @return {object} The "node spec" object if one of the objects in nodeSpecs represents one of the tags; null if not.
     */

  }, {
    key: 'tagInSpecs',
    value: function tagInSpecs(tags, nodeSpecs) {
      var match = null;
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = tags[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var tag = _step8.value;
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = nodeSpecs[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var nodeSpec = _step9.value;

              if (tag === nodeSpec.tag) {
                match = nodeSpec;
                break;
              }
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          if (match) {
            break;
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return match;
    }
  }, {
    key: 'newNode',
    value: function newNode(nodeSpec, parent) {
      if (!parent) {
        // root node
        return {
          isRoot: true,
          childNodes: {}
        };
      } else {
        var tags = parent.isRoot ? [nodeSpec.tag] : parent.cumulativeTags.concat([nodeSpec.tag]);
        return {
          spec: nodeSpec,
          annotation: null,
          layerIds: new Set(),
          cumulativeLabel: '',
          cumulativeTags: tags,
          childNodes: {},
          childAnnotations: [],
          weight: this.tagWeights[nodeSpec.tag]
        };
      }
    }
  }, {
    key: 'getNodeFromTags',
    value: function getNodeFromTags(tags) {
      var node = this.annoHierarchy;

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = tags[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var tag = _step10.value;

          console.log('TAG', tag);
          console.log('NODE', node);
          node = node.childNodes[tag];
          if (!node) {
            break;
          }
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      console.log('NODENODE:', node);
      return !node || node.isRoot ? null : node;
    }

    /**
     * Return an array of tags for the node to which the annotation belongs
     * @param {string} annotationId
     */

  }, {
    key: 'getTagsFromAnnotationId',
    value: function getTagsFromAnnotationId(annotationId) {
      var tags = [];

      this.walk(function (node) {
        var annotations = (node.annotation ? [node.annotation] : []).concat(node.childAnnotations);

        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = annotations[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var anno = _step11.value;

            if (anno['@id'] === annotationId) {
              tags = node.cumulativeTags;
              return true;
            }
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11.return) {
              _iterator11.return();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }
      });
      return tags;
    }

    /**
     * @param {object} annotation
     * @param {string[]} tags
     */

  }, {
    key: 'matchHierarchy',
    value: function matchHierarchy(annotation, tags) {
      var node = this.getNodeFromTags(tags);
      return node ? this.matchNode(annotation, node) : false;
    }
  }, {
    key: 'matchNode',
    value: function matchNode(annotation, node) {
      var _this = this;
      var matched = false;

      if (!node.annotation) {
        logger.error('AnnotationToc#matchNode no annotation assigned to node', node.spec);
      }

      if (node.annotation && node.annotation['@id'] === annotation['@id']) {
        return true;
      }
      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = node.childAnnotations[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var anno = _step12.value;

          if (anno['@id'] === annotation['@id']) {
            matched = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }

      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = Object.values(node.childNodes)[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var childNode = _step13.value;

          if (_this.matchNode(annotation, childNode)) {
            matched = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13.return) {
            _iterator13.return();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }

      return matched;
    }
  }, {
    key: 'registerLayerWithNode',
    value: function registerLayerWithNode(node, layerId) {
      node.layerIds.add(layerId);
    }
  }, {
    key: 'unassigned',
    value: function unassigned() {
      return this._unassigned;
    }
  }, {
    key: 'numUnassigned',
    value: function numUnassigned() {
      return this._unassigned.length;
    }
  }, {
    key: 'findAllChildAnnotations',
    value: function findAllChildAnnotations(node) {}

    /**
     * Traverses the Toc structure and calls visitCallback() for each node.
     * @param {function} visitCallback
     */

  }, {
    key: 'walk',
    value: function walk(visitCallback) {
      this.visit(this.annoHierarchy, visitCallback);
    }
  }, {
    key: 'visit',
    value: function visit(node, callback) {
      var _this = this;
      var sortedTags = Object.keys(node.childNodes).sort(function (a, b) {
        return _this.tagWeights[a] - _this.tagWeights[b];
      });

      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = sortedTags[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var tag = _step14.value;

          var childNode = node.childNodes[tag];
          var stop = callback(childNode);
          if (!stop) {
            _this.visit(childNode, callback);
          }
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14.return) {
            _iterator14.return();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }
  }]);

  return AnnotationToc;
}();

exports.default = AnnotationToc;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _annotationWrapper = __webpack_require__(0);

var _annotationWrapper2 = _interopRequireDefault(_annotationWrapper);

var _annotationToc = __webpack_require__(2);

var _annotationToc2 = _interopRequireDefault(_annotationToc);

var _annotationUtil = __webpack_require__(1);

var _annotationUtil2 = _interopRequireDefault(_annotationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = null;

var AnnotationExplorer = function () {
  function AnnotationExplorer(options) {
    _classCallCheck(this, AnnotationExplorer);

    this.options = jQuery.extend({
      dataSource: null,
      tocSpec: null,
      logger: { debug: function debug() {
          return null;
        }, info: function info() {
          return null;
        }, error: function error() {
          return null;
        } }
    }, options);
    logger = this.options.logger;
    logger.debug('AnnotationExplorer#constructor options:', options);
    this.AnnotationToc = null;
  }

  _createClass(AnnotationExplorer, [{
    key: 'getLayers',
    value: function getLayers() {
      return this.options.dataSource.getLayers();
    }

    /**
     * Options: {
     *   canvasId: <string>, // required
     *   layerId: <string> // optional
     * }
     *
     * @param {object} options
     */

  }, {
    key: 'getAnnotations',
    value: function getAnnotations(options) {
      var _this = this;

      logger.debug('AnnotationExplorer#getAnnotations options:', options);

      if (!options.canvasId) {
        logger.error('AnnotationExplorer#getAnnotations missing options.canvasId');
        return Promise.resolve([]);
      }

      return this.options.dataSource.getAnnotations(options).catch(function (reason) {
        throw 'ERROR AnnotationExplorer#getAnnotations dataSource.getAnnotations failed: ' + reason;
      }).then(function (annotations) {
        logger.debug('AnnotationExplorer#getAnnotations annotations:', annotations);
        _this._generateInverseTargets(annotations);
        return annotations;
      });
    }
  }, {
    key: 'createAnnotation',
    value: function createAnnotation(annotation) {
      return this.options.dataSource.createAnnotation(annotation);
    }
  }, {
    key: 'updateAnnotation',
    value: function updateAnnotation(annotation) {
      return this.options.dataSource.updateAnnotation(annotation);
    }
  }, {
    key: 'deleteAnnotation',
    value: function deleteAnnotation(annotationId) {
      logger.debug('AnnotationExplorer#deleteAnnotation annotationId:', annotationId);
      var promise = this.options.dataSource.deleteAnnotation(annotationId);
      return promise;
    }
  }, {
    key: 'updateAnnotationListOrder',
    value: function updateAnnotationListOrder(canvasId, layerId, annoIds) {
      logger.debug('AnnotationExplorer#updateAnnotationListOrder');
      return this.options.dataSource.updateAnnotationListOrder(canvasId, layerId, annoIds);
    }
  }, {
    key: 'getAnnotationToc',
    value: function getAnnotationToc() {
      return this.annotationToc;
    }
  }, {
    key: 'reloadAnnotationToc',
    value: function reloadAnnotationToc(spec, annotations) {
      this.annotationToc = new _annotationToc2.default(spec, annotations);
      logger.debug('AnnotationExplorer#reloadAnnotationToc toc:', this.annotationToc.annoHierarchy);
    }
  }, {
    key: '_generateInverseTargets',
    value: function _generateInverseTargets(annotations) {
      var annoMap = {};

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = annotations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var anno = _step.value;

          annoMap[anno['@id']] = (0, _annotationWrapper2.default)(anno);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = annotations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _anno = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = (0, _annotationWrapper2.default)(_anno).targets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var target = _step3.value;

              var targetId = target.full;
              if (annoMap[targetId]) {
                annoMap[targetId].addInverseTarget(_anno);
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return AnnotationExplorer;
}();

exports.default = AnnotationExplorer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _annotationWrapper = __webpack_require__(0);

var _annotationWrapper2 = _interopRequireDefault(_annotationWrapper);

var _annotationExplorer = __webpack_require__(3);

var _annotationExplorer2 = _interopRequireDefault(_annotationExplorer);

var _annotationToc = __webpack_require__(2);

var _annotationToc2 = _interopRequireDefault(_annotationToc);

var _annotationUtil = __webpack_require__(1);

var _annotationUtil2 = _interopRequireDefault(_annotationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.joosugi = {
  AnnotationExplorer: _annotationExplorer2.default,
  AnnotationToc: _annotationToc2.default,
  AnnotationWrapper: _annotationWrapper2.default,
  annotationUtil: _annotationUtil2.default
};

/***/ })
/******/ ]);

/*** EXPORTS FROM exports-loader ***/
module.exports = joosugi;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// joosugi-semantic-ui v0.1.1-3-gbf770d5 built Thu Jul 20 2017 17:48:05 GMT-0400 (EDT)


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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _annotationExplorerDialog = __webpack_require__(8);

var _annotationExplorerDialog2 = _interopRequireDefault(_annotationExplorerDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(13);

window.joosugiUI = {
  AnnotationExplorerDialog: _annotationExplorerDialog2.default
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(1);
var ieee754 = __webpack_require__(4);
var isArray = __webpack_require__(5);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _facetSelector = __webpack_require__(10);

var _facetSelector2 = _interopRequireDefault(_facetSelector);

var _annotationPanel = __webpack_require__(9);

var _annotationPanel2 = _interopRequireDefault(_annotationPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = null;

var AnnotationExplorerDialog = function () {

  /**
   * @param {object} elem a jQuery element
   */
  function AnnotationExplorerDialog(options) {
    var _this2 = this;

    _classCallCheck(this, AnnotationExplorerDialog);

    this.options = Object.assign({
      appendTo: null,
      annotationExplorer: null,
      canvases: [], // canvas IDs or ranges
      defaultCanvasId: null, // ID of default canvas to select
      layers: [],
      defaultLayerId: null, // ID of default layer to select
      onSelect: null,
      logger: { debug: function debug() {
          return null;
        }, info: function info() {
          return null;
        }, error: function error() {
          return null;
        } }
    }, options);

    logger = this.options.logger;
    logger.debug('AnnotationExplorerDialog#constructor this.options:', this.options);

    this.id = 'joosugi_anno_explorer_dialog';
    this.elem = this.createElem(this.id);

    this.annosPanel = new _annotationPanel2.default({
      appendTo: this.elem.find('.column.annos'),
      onChange: function onChange(annotation) {
        _this2.selectedAnnotation = annotation;
        _this2.okButton.removeClass('disabled');
      }
    });

    this.okButton = this.elem.find('.ok');
    this.cancelButton = this.elem.find('.cancel');

    this.elem.modal({
      observeChanges: true,
      onApprove: function onApprove(elem) {
        _this2.options.onSelect(_this2.selectedAnnotation);
      },
      onDeny: function onDeny(elem) {},
      onHidden: function onHidden(elem) {}
    });

    this.canvasSelector = this.setupCanvasSelector();
    this.layerSelector = this.setupLayerSelector();

    var canvasId = this.options.defaultCanvasId || this.options.canvases[0]['@id'];
    this.canvasSelector.setValue(canvasId);

    setTimeout(function () {
      _this2.canvasSelector.scrollToValue(canvasId);
      console.log(7);
    }, 0);

    var layerId = this.options.defaultLayerId || this.options.layers[0]['@id'];
    this.layerSelector.setValue(layerId);
    this.layerSelector.scrollToValue(layerId);

    this.setupActions();
  }

  _createClass(AnnotationExplorerDialog, [{
    key: 'open',
    value: function open() {
      this.elem.modal('show');
    }
  }, {
    key: 'createElem',
    value: function createElem(id) {
      var oldElem = jQuery('#' + id);
      if (oldElem.length > 0) {
        oldElem.remove();
      }
      return jQuery('<div/>').addClass('ui modal').attr('id', id).html(template()).appendTo(this.options.appendTo);
    }
  }, {
    key: 'setupCanvasSelector',
    value: function setupCanvasSelector() {
      var _this3 = this;

      var selector = new _facetSelector2.default({
        appendTo: this.elem.find('#facets'),
        title: 'Canvas',
        items: this.options.canvases,
        parseItem: function parseItem(item) {
          return { label: item['label'], value: item['@id'] };
        },
        isLeaf: function isLeaf(item) {
          return item['@type'] !== 'sc:Range';
        },
        getChildren: function getChildren(item) {
          return (item.canvases instanceof Array ? item.canvases : []).concat(item.members instanceof Array ? item.members : []);
        },
        onChange: function onChange(selectedValue) {
          logger.debug('AnnotationExplorerDialog canvas selected:', selectedValue);
          _this3.refresh();
        },
        logger: logger
      });
      return selector;
    }
  }, {
    key: 'setupLayerSelector',
    value: function setupLayerSelector() {
      var _this4 = this;

      return new _facetSelector2.default({
        appendTo: this.elem.find('#facets'),
        title: 'Layer',
        items: this.options.layers,
        parseItem: function parseItem(item) {
          return { label: item.label, value: item['@id'] };
        },
        onChange: function onChange(selectedValue) {
          logger.debug('AnnotationExplorerDialog layer selected:', selectedValue);
          _this4.refresh();
        },
        logger: logger
      });
    }
  }, {
    key: 'refresh',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var canvasId, layerId, annotations;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                canvasId = this.canvasSelector.value();
                layerId = this.layerSelector.value();

                logger.debug('AnnotationExplorerDialog#refresh', canvasId, layerId);

                if (!(!canvasId || !layerId)) {
                  _context.next = 6;
                  break;
                }

                logger.debug('AnnotationExplorerDialog#refresh skipping...');
                return _context.abrupt('return');

              case 6:

                this.annosPanel.showPlaceHolderText('Retrieving annotations...');
                _context.next = 9;
                return this.options.annotationExplorer.getAnnotations({
                  canvasId: canvasId,
                  layerId: layerId
                });

              case 9:
                annotations = _context.sent;

                this.annosPanel.reload(annotations);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refresh() {
        return _ref.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: 'setDimensions',
    value: function setDimensions() {
      var winHeight = jQuery(window).height();
      var rest = 180; // estimate height of dialog minus height of content div
      var maxContentHeight = (winHeight - rest) * 0.82;

      this.elem.css('margin-top', -(winHeight * 0.45));
      this.contentGrid.css('height', maxContentHeight);
      this.canvasesPanel.css('height', maxContentHeight * 0.46);
      this.layersPanel.css('height', maxContentHeight * 0.46);
    }
  }, {
    key: 'scrollToCurrentCanvas',
    value: function scrollToCurrentCanvas() {
      var _this = this;
      var canvasElems = this.canvasesPanel.find('.canvas');
      var scrollTo = null;

      logger.debug('AnnotationExplorerDialog scrollToCurrentCanvas', canvasElems.length);

      canvasElems.each(function (index, canvasElem) {
        var elem = $(canvasElem);

        if (elem.data('canvasId') === _this.currentCanvasId) {
          scrollTo = elem;
          return false;
        }
      });

      if (scrollTo) {
        this.canvasesPanel.scrollTop(scrollTo.position().top + this.canvasesPanel.scrollTop() - 18);
      }
    }
  }, {
    key: 'setupActions',
    value: function setupActions() {
      var _this = this;
      this.okButton.addClass('disabled');
      this.okButton.click(function () {});
      this.cancelButton.click(function () {
        _this.elem.modal('hide');
      });
    }
  }]);

  return AnnotationExplorerDialog;
}();

exports.default = AnnotationExplorerDialog;


var template = Handlebars.compile(['<div class="header">Find Annotation', '</div>', '<div class="content">', '  <div class="ui grid">', '    <div id="facets" class="six wide column facets">', '    </div>', '    <div class="ten wide column annos">', '    </div>', '  </div>', '</div>', '<div class="actions">', '  <div class="ui ok button">Select</div>', '  <div class="ui cancel button">Cancel</div>', '</div>'].join(''));

var canvasLinkTemplate = Handlebars.compile(['<a href="#">{{label}}</a>'].join(''));

var layerLinkTemplate = Handlebars.compile(['<a href="#">{{label}}</a>'].join(''));

var annotationTemplate = Handlebars.compile(['<div>{{{content}}}</div>'].join(''));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import importPackage from './import';
//const util = importPackage('joosugi').annotationUtil;

var util = joosugi.annotationUtil;
var logger = null;

var AnnotationPanel = function () {
  function AnnotationPanel(options) {
    _classCallCheck(this, AnnotationPanel);

    this.options = Object.assign({
      appendTo: null,
      onChange: null,
      logger: { debug: function debug() {
          return null;
        }, info: function info() {
          return null;
        }, error: function error() {
          return null;
        } }
    }, options);

    logger = this.options.logger;
    this.elem = jQuery('<div/>').addClass('joosugi_anno_panel').html(template()).appendTo(this.options.appendTo);
    this.placeHolder = this.elem.find('.place-holder');
    this.content = this.elem.find('.content');
  }

  _createClass(AnnotationPanel, [{
    key: 'value',
    value: function value() {
      return this._value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this.findItemByValue(value)) {
        if (this._value !== value) {
          this._value = value;
          this.refresh();
          this.options.onChange(value);
        }
      } else {
        console.log('AnnotationPanel#setValue failed for value: ' + value);
      }
    }
  }, {
    key: 'findItemByValue',
    value: function findItemByValue(value) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.content.find('.item')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          console.log('00: ' + value['@id']);
          console.log('01: ' + jQuery(item).data('item')['@id']);

          if (jQuery(item).data('item') === value) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  }, {
    key: 'showPlaceHolderText',
    value: function showPlaceHolderText(text) {
      this.placeHolder.text(text);
      this.placeHolder.show();
    }
  }, {
    key: 'hidePlaceHolderText',
    value: function hidePlaceHolderText() {
      this.placeHolder.hide();
    }
  }, {
    key: 'reload',
    value: function reload(annotations) {
      logger.debug('AnnotationPanel#reload', annotations);
      this.content.empty();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = annotations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var anno = _step2.value;

          this.content.append(this.createItem(anno));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (annotations.length > 0) {
        this.hidePlaceHolderText();
      } else {
        this.showPlaceHolderText('No annotations found');
      }
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.content.find('.item')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          var $item = jQuery(item);
          if ($item.data('item')['@id'] === this._value['@id']) {
            $item.addClass('selected');
          } else {
            $item.removeClass('selected');
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'createItem',
    value: function createItem(annotation) {
      var _this = this;
      var elem = jQuery('<div/>').addClass('item').html(util.getText(annotation));
      elem.data('item', annotation);
      elem.click(function () {
        _this.setValue(annotation);
      });
      return elem;
    }
  }]);

  return AnnotationPanel;
}();

exports.default = AnnotationPanel;


var template = Handlebars.compile(['<span class="place-holder"></span>', '<div class="content"></div>'].join(''));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = null;

var FacetSelector = function () {
  function FacetSelector(options) {
    _classCallCheck(this, FacetSelector);

    this.options = Object.assign({
      appendTo: null,
      title: null,
      items: [],

      // function that returns on object
      // { label: _LABEL_, value: _VALUE_ }
      parseItem: null,

      isLeaf: function isLeaf() {
        return true;
      },
      getChildren: null,
      onChange: function onChange() {
        return null;
      },
      logger: { debug: function debug() {
          return null;
        }, info: function info() {
          return null;
        }, error: function error() {
          return null;
        } }
    }, options);

    logger = this.options.logger;

    this.elem = jQuery('<div/>').addClass('ui accordion').html(template).appendTo(this.options.appendTo);
    this.elem.find('.title').text(this.options.title);

    this.content = this.elem.find('.content');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.options.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        this.addItem(item, this.content);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.elem.accordion({
      collapsible: false,
      animateChildren: false,
      duration: 0,
      on: 'none'
    });

    this.elem.accordion('open', 0);
    this._value = null; // value of selected item
  }

  _createClass(FacetSelector, [{
    key: 'value',
    value: function value() {
      return this._value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      logger.debug('FacetSelector#setValue', value);
      if (this.findItemByValue(value)) {
        if (this._value !== value) {
          this._value = value;
          this.refresh();
          this.options.onChange(value);
        }
      } else {
        logger.error('FacetSelector#setValue failed for value', value);
      }
    }
  }, {
    key: 'findItemByValue',
    value: function findItemByValue(value) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.content.find('.item')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          if (jQuery(item).data('item').value === value) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return false;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.content.find('.item')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          var $item = jQuery(item);
          if ($item.data('item').value === this._value) {
            $item.addClass('selected');
          } else {
            $item.removeClass('selected');
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'addLeaf',
    value: function addLeaf(rawItem, appendTo) {
      //logger.debugg('FacetSelector#addLeaf item:', rawItem);
      var _this = this;
      var item = this.options.parseItem ? this.options.parseItem(rawItem) : rawItem;
      var elem = jQuery('<div/>').addClass('item').html(itemTemplate({ label: item.label }));

      elem.data('item', item);
      elem.click(function () {
        var item = jQuery(this).data('item');
        if (item.value !== _this.value) {
          _this.setValue(item.value);
        }
      });
      appendTo.append(elem);
    }
  }, {
    key: 'addItem',
    value: function addItem(item, appendTo) {
      if (this.options.isLeaf(item)) {
        this.addLeaf(item, appendTo);
      } else {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.options.getChildren(item)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var child = _step4.value;

            this.addItem(child, appendTo);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }
  }, {
    key: 'scrollToValue',
    value: function scrollToValue(value) {
      logger.debug('FacetSelector scrollToValue', value);
      var items = this.content.find('.item');
      var scrollTo = null;

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = items[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var item = _step5.value;

          var elem = jQuery(item);
          if (elem.data('item').value === value) {
            scrollTo = elem;
            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      if (scrollTo) {
        console.log('SCROLL TO', scrollTo[0].outerHTML);
        scrollTo[0].scrollIntoView();
      }
    }
  }]);

  return FacetSelector;
}();

exports.default = FacetSelector;


var template = Handlebars.compile(['<div class="title"></div>', '<div class="content">', '</div>'].join(''));

var itemTemplate = Handlebars.compile(['<a href="#">{{label}}</a>'].join(''));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#joosugi_anno_explorer_dialog {\n  height: 80%;\n}\n#joosugi_anno_explorer_dialog .content {\n  height: 72%;\n}\n#joosugi_anno_explorer_dialog .content .grid {\n  height: 100%;\n}\n#joosugi_anno_explorer_dialog .column.facets {\n  height: 100%;\n  overflow-y: scroll;\n}\n#joosugi_anno_explorer_dialog .item.selected {\n  background-color: orange;\n}\n#joosugi_anno_explorer_dialog .item {\n  padding: 5px;\n  background-color: #eee;\n  border-radius: 5px;\n  margin: 2px;\n}\n#joosugi_anno_explorer_dialog .ui.accordion .content {\n  height: 120px;\n  overflow-y: scroll;\n}\n.joosugi_anno_panel {\n  height: 100%;\n  overflow-y: scroll;\n  border: solid 1px #bbb;\n  border-radius: 5px;\n  padding: 5px;\n  text-align: center;\n}\n.joosugi_anno_panel .place-holder {\n  display: inline-block;\n  vertical-align: middle;\n}\n.joosugi_anno_panel .item {\n  text-align: left;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(12)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./main.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./main.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);

/*** EXPORTS FROM exports-loader ***/
module.exports = joosugiUI;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
__webpack_require__(4);
module.exports = __webpack_require__(17);


/***/ })
/******/ ]);