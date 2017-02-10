// Yale-Mirador version 0.4.3 - Fri Feb 10 2017 12:01:55 GMT-0500 (EST)
window._YaleMiradorVersion="Yale-Mirador version 0.4.3 - Fri Feb 10 2017 12:01:55 GMT-0500 (EST)";

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

	__webpack_require__(1);
	module.exports = __webpack_require__(335);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(2);

	__webpack_require__(299);

	__webpack_require__(301);

	__webpack_require__(302);

	__webpack_require__(303);

	__webpack_require__(304);

	__webpack_require__(323);

	__webpack_require__(326);

	var _configFetcher = __webpack_require__(327);

	var _configFetcher2 = _interopRequireDefault(_configFetcher);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _grid = __webpack_require__(328);

	var _grid2 = _interopRequireDefault(_grid);

	var _mainMenu = __webpack_require__(332);

	var _mainMenu2 = _interopRequireDefault(_mainMenu);

	var _miradorWindow = __webpack_require__(314);

	var _miradorWindow2 = _interopRequireDefault(_miradorWindow);

	__webpack_require__(333);

	var _stateStore = __webpack_require__(320);

	var _stateStore2 = _interopRequireDefault(_stateStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(334);
	//import './util/jquery-tiny-pubsub-trace'; // import this only for debugging!

	var App = function () {
	  function App(options) {
	    _classCallCheck(this, App);

	    this.logger = this.setupLogger();
	    this.logger.debug('App#constructor');
	    this.options = jQuery.extend({
	      rootElement: null,
	      dataElement: null
	    }, options);
	  }

	  _createClass(App, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	      var configFetcher = (0, _configFetcher2.default)();
	      var settingsFromHtml = configFetcher.fetchSettingsFromHtml(this.options.dataElement);
	      var apiUrl = settingsFromHtml.apiUrl;
	      var projectId = settingsFromHtml.projectId;


	      (0, _stateStore2.default)().setObject('layerIndexMap', null);

	      configFetcher.fetchSettingsFromApi(apiUrl, projectId).catch(function (reason) {
	        var msg = 'ERROR failed to retrieve server setting - ' + reason;
	        throw msg;
	      }).then(function (settingsFromApi) {
	        _this.logger.debug('Settings from API:', settingsFromApi);
	        var settings = jQuery.extend(settingsFromHtml, settingsFromApi);
	        var grid = new _grid2.default(_this.options.rootElement);
	        var mainMenu = new _mainMenu2.default();

	        if (settings.fixAnnoCellHeight) {
	          (0, _stateStore2.default)().setString('ANNO_CELL_FIXED', 'true');
	        }

	        (0, _miradorWindow2.default)().init({
	          mainMenu: mainMenu,
	          grid: grid,
	          settings: settings
	        });
	      }).catch(function (reason) {
	        var msg = 'ERROR failed to init Mirador - ' + reason;
	        alert(msg);
	        throw msg;
	      });
	    }
	  }, {
	    key: 'setupLogger',
	    value: function setupLogger() {
	      var logger = (0, _logger2.default)();
	      if (window.location.hash === '#debug') {
	        logger.setLogLevel(logger.DEBUG);
	      } else {
	        logger.setLogLevel(logger.INFO);
	      }
	      return logger;
	    }
	  }]);

	  return App;
	}();

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(3);

	__webpack_require__(294);

	__webpack_require__(296);

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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(58);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(71);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(77);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(90);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(212);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(292);
	__webpack_require__(293);
	module.exports = __webpack_require__(10);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(5)
	  , has            = __webpack_require__(6)
	  , DESCRIPTORS    = __webpack_require__(7)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(19)
	  , META           = __webpack_require__(23).KEY
	  , $fails         = __webpack_require__(8)
	  , shared         = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(25)
	  , uid            = __webpack_require__(20)
	  , wks            = __webpack_require__(26)
	  , wksExt         = __webpack_require__(27)
	  , wksDefine      = __webpack_require__(28)
	  , keyOf          = __webpack_require__(30)
	  , enumKeys       = __webpack_require__(43)
	  , isArray        = __webpack_require__(46)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(17)
	  , createDesc     = __webpack_require__(18)
	  , _create        = __webpack_require__(47)
	  , gOPNExt        = __webpack_require__(50)
	  , $GOPD          = __webpack_require__(52)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(31)
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
	  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(45).f  = $propertyIsEnumerable;
	  __webpack_require__(44).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(29)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(8)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(10)
	  , hide      = __webpack_require__(11)
	  , redefine  = __webpack_require__(19)
	  , ctx       = __webpack_require__(21)
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(7) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(17)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function(){
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
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

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , hide      = __webpack_require__(11)
	  , has       = __webpack_require__(6)
	  , SRC       = __webpack_require__(20)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(10).inspectSource = function(it){
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

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
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

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(20)('meta')
	  , isObject = __webpack_require__(14)
	  , has      = __webpack_require__(6)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(8)(function(){
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

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(6)
	  , TAG = __webpack_require__(26)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(24)('wks')
	  , uid        = __webpack_require__(20)
	  , Symbol     = __webpack_require__(5).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(26);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(5)
	  , core           = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(29)
	  , wksExt         = __webpack_require__(27)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(31)
	  , toIObject = __webpack_require__(33);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(6)
	  , toIObject    = __webpack_require__(33)
	  , arrayIndexOf = __webpack_require__(37)(false)
	  , IE_PROTO     = __webpack_require__(41)('IE_PROTO');

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

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(36);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(38)
	  , toIndex   = __webpack_require__(40);
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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(24)('keys')
	  , uid    = __webpack_require__(20);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(31)
	  , gOPS    = __webpack_require__(44)
	  , pIE     = __webpack_require__(45);
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

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(42)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(49).appendChild(iframe);
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


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(31);

	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33)
	  , gOPN      = __webpack_require__(51).f
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


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(32)
	  , hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(45)
	  , createDesc     = __webpack_require__(18)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(17)
	  , has            = __webpack_require__(6)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(47)});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperties: __webpack_require__(48)});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(33)
	  , $getOwnPropertyDescriptor = __webpack_require__(52).f;

	__webpack_require__(57)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(8);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(59)
	  , $getPrototypeOf = __webpack_require__(60);

	__webpack_require__(57)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(36);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(6)
	  , toObject    = __webpack_require__(59)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(59)
	  , $keys    = __webpack_require__(31);

	__webpack_require__(57)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(57)('getOwnPropertyNames', function(){
	  return __webpack_require__(50).f;
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(14)
	  , meta     = __webpack_require__(23).onFreeze;

	__webpack_require__(57)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(14)
	  , meta     = __webpack_require__(23).onFreeze;

	__webpack_require__(57)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(14)
	  , meta     = __webpack_require__(23).onFreeze;

	__webpack_require__(57)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(57)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(57)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(57)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(70)});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(31)
	  , gOPS     = __webpack_require__(44)
	  , pIE      = __webpack_require__(45)
	  , toObject = __webpack_require__(59)
	  , IObject  = __webpack_require__(34)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(8)(function(){
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

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {is: __webpack_require__(72)});

/***/ },
/* 72 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(74).set});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(21)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
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

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(76)
	  , test    = {};
	test[__webpack_require__(26)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(19)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35)
	  , TAG = __webpack_require__(26)('toStringTag')
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

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(9);

	$export($export.P, 'Function', {bind: __webpack_require__(78)});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(22)
	  , isObject   = __webpack_require__(14)
	  , invoke     = __webpack_require__(79)
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

/***/ },
/* 79 */
/***/ function(module, exports) {

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

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12).f
	  , createDesc = __webpack_require__(18)
	  , has        = __webpack_require__(6)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
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

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(14)
	  , getPrototypeOf = __webpack_require__(60)
	  , HAS_INSTANCE   = __webpack_require__(26)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(12).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , $parseInt = __webpack_require__(83);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(5).parseInt
	  , $trim     = __webpack_require__(84).trim
	  , ws        = __webpack_require__(85)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , defined = __webpack_require__(36)
	  , fails   = __webpack_require__(8)
	  , spaces  = __webpack_require__(85)
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

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(9)
	  , $parseFloat = __webpack_require__(87);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(5).parseFloat
	  , $trim       = __webpack_require__(84).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(85) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(5)
	  , has               = __webpack_require__(6)
	  , cof               = __webpack_require__(35)
	  , inheritIfRequired = __webpack_require__(89)
	  , toPrimitive       = __webpack_require__(17)
	  , fails             = __webpack_require__(8)
	  , gOPN              = __webpack_require__(51).f
	  , gOPD              = __webpack_require__(52).f
	  , dP                = __webpack_require__(12).f
	  , $trim             = __webpack_require__(84).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(47)(proto)) == NUMBER
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
	  for(var keys = __webpack_require__(7) ? gOPN(Base) : (
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
	  __webpack_require__(19)(global, NUMBER, $Number);
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(14)
	  , setPrototypeOf = __webpack_require__(74).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , toInteger    = __webpack_require__(39)
	  , aNumberValue = __webpack_require__(91)
	  , repeat       = __webpack_require__(92)
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
	) || !__webpack_require__(8)(function(){
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

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(35);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(36);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , $fails       = __webpack_require__(8)
	  , aNumberValue = __webpack_require__(91)
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

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(9)
	  , _isFinite = __webpack_require__(5).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {isInteger: __webpack_require__(97)});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(14)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(9)
	  , isInteger = __webpack_require__(97)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(9)
	  , $parseFloat = __webpack_require__(87);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , $parseInt = __webpack_require__(83);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(9)
	  , log1p   = __webpack_require__(105)
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

/***/ },
/* 105 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(9)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(9)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(9)
	  , sign    = __webpack_require__(109);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(9)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(9)
	  , $expm1  = __webpack_require__(113);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 113 */
/***/ function(module, exports) {

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

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(9)
	  , sign      = __webpack_require__(109)
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

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(9)
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

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(9)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(8)(function(){
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

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {log1p: __webpack_require__(105)});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {sign: __webpack_require__(109)});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(9)
	  , expm1   = __webpack_require__(113)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(9)
	  , expm1   = __webpack_require__(113)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(9)
	  , toIndex        = __webpack_require__(40)
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

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(38);

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

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(84)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(128)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(129)(String, 'String', function(iterated){
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

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(36);
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

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(29)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(19)
	  , hide           = __webpack_require__(11)
	  , has            = __webpack_require__(6)
	  , Iterators      = __webpack_require__(130)
	  , $iterCreate    = __webpack_require__(131)
	  , setToStringTag = __webpack_require__(25)
	  , getPrototypeOf = __webpack_require__(60)
	  , ITERATOR       = __webpack_require__(26)('iterator')
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

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(47)
	  , descriptor     = __webpack_require__(18)
	  , setToStringTag = __webpack_require__(25)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(26)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $at     = __webpack_require__(128)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(9)
	  , toLength  = __webpack_require__(38)
	  , context   = __webpack_require__(134)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
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

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(135)
	  , defined  = __webpack_require__(36);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(14)
	  , cof      = __webpack_require__(35)
	  , MATCH    = __webpack_require__(26)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(26)('match');
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

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(9)
	  , context  = __webpack_require__(134)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(92)
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(9)
	  , toLength    = __webpack_require__(38)
	  , context     = __webpack_require__(134)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(141)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , fails   = __webpack_require__(8)
	  , defined = __webpack_require__(36)
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

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(141)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(141)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(141)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(141)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(141)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(141)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(141)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(141)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(141)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(141)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(141)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(141)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(9);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(9)
	  , toObject    = __webpack_require__(59)
	  , toPrimitive = __webpack_require__(17);

	$export($export.P + $export.F * __webpack_require__(8)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(9)
	  , fails   = __webpack_require__(8)
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

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(19)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(26)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(159));

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(13)
	  , toPrimitive = __webpack_require__(17)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(9);

	$export($export.S, 'Array', {isArray: __webpack_require__(46)});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(21)
	  , $export        = __webpack_require__(9)
	  , toObject       = __webpack_require__(59)
	  , call           = __webpack_require__(162)
	  , isArrayIter    = __webpack_require__(163)
	  , toLength       = __webpack_require__(38)
	  , createProperty = __webpack_require__(164)
	  , getIterFn      = __webpack_require__(165);

	$export($export.S + $export.F * !__webpack_require__(166)(function(iter){ Array.from(iter); }), 'Array', {
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


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(13);
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

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(130)
	  , ITERATOR   = __webpack_require__(26)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(12)
	  , createDesc      = __webpack_require__(18);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(76)
	  , ITERATOR  = __webpack_require__(26)('iterator')
	  , Iterators = __webpack_require__(130);
	module.exports = __webpack_require__(10).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(26)('iterator')
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

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(9)
	  , createProperty = __webpack_require__(164);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(8)(function(){
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

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(9)
	  , toIObject = __webpack_require__(33)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(34) != Object || !__webpack_require__(169)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(8);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(9)
	  , html       = __webpack_require__(49)
	  , cof        = __webpack_require__(35)
	  , toIndex    = __webpack_require__(40)
	  , toLength   = __webpack_require__(38)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(8)(function(){
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

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(9)
	  , aFunction = __webpack_require__(22)
	  , toObject  = __webpack_require__(59)
	  , fails     = __webpack_require__(8)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(169)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(9)
	  , $forEach = __webpack_require__(173)(0)
	  , STRICT   = __webpack_require__(169)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(21)
	  , IObject  = __webpack_require__(34)
	  , toObject = __webpack_require__(59)
	  , toLength = __webpack_require__(38)
	  , asc      = __webpack_require__(174);
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

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(175);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , isArray  = __webpack_require__(46)
	  , SPECIES  = __webpack_require__(26)('species');

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

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $map    = __webpack_require__(173)(1);

	$export($export.P + $export.F * !__webpack_require__(169)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $filter = __webpack_require__(173)(2);

	$export($export.P + $export.F * !__webpack_require__(169)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $some   = __webpack_require__(173)(3);

	$export($export.P + $export.F * !__webpack_require__(169)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $every  = __webpack_require__(173)(4);

	$export($export.P + $export.F * !__webpack_require__(169)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $reduce = __webpack_require__(181);

	$export($export.P + $export.F * !__webpack_require__(169)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(22)
	  , toObject  = __webpack_require__(59)
	  , IObject   = __webpack_require__(34)
	  , toLength  = __webpack_require__(38);

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

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $reduce = __webpack_require__(181);

	$export($export.P + $export.F * !__webpack_require__(169)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(9)
	  , $indexOf      = __webpack_require__(37)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(9)
	  , toIObject     = __webpack_require__(33)
	  , toInteger     = __webpack_require__(39)
	  , toLength      = __webpack_require__(38)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
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

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(186)});

	__webpack_require__(187)('copyWithin');

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(59)
	  , toIndex  = __webpack_require__(40)
	  , toLength = __webpack_require__(38);

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

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(26)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', {fill: __webpack_require__(189)});

	__webpack_require__(187)('fill');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(59)
	  , toIndex  = __webpack_require__(40)
	  , toLength = __webpack_require__(38);
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

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(9)
	  , $find   = __webpack_require__(173)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(9)
	  , $find   = __webpack_require__(173)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(193)('Array');

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(5)
	  , dP          = __webpack_require__(12)
	  , DESCRIPTORS = __webpack_require__(7)
	  , SPECIES     = __webpack_require__(26)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(187)
	  , step             = __webpack_require__(195)
	  , Iterators        = __webpack_require__(130)
	  , toIObject        = __webpack_require__(33);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(129)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(5)
	  , inheritIfRequired = __webpack_require__(89)
	  , dP                = __webpack_require__(12).f
	  , gOPN              = __webpack_require__(51).f
	  , isRegExp          = __webpack_require__(135)
	  , $flags            = __webpack_require__(197)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(8)(function(){
	  re2[__webpack_require__(26)('match')] = false;
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
	  __webpack_require__(19)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(193)('RegExp');

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(13);
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

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var anObject    = __webpack_require__(13)
	  , $flags      = __webpack_require__(197)
	  , DESCRIPTORS = __webpack_require__(7)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(19)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(8)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
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

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(7) && /./g.flags != 'g')__webpack_require__(12).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(197)
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(201)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(11)
	  , redefine = __webpack_require__(19)
	  , fails    = __webpack_require__(8)
	  , defined  = __webpack_require__(36)
	  , wks      = __webpack_require__(26);

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

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(201)('replace', 2, function(defined, REPLACE, $replace){
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

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(201)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(201)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(135)
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

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(29)
	  , global             = __webpack_require__(5)
	  , ctx                = __webpack_require__(21)
	  , classof            = __webpack_require__(76)
	  , $export            = __webpack_require__(9)
	  , isObject           = __webpack_require__(14)
	  , aFunction          = __webpack_require__(22)
	  , anInstance         = __webpack_require__(206)
	  , forOf              = __webpack_require__(207)
	  , speciesConstructor = __webpack_require__(208)
	  , task               = __webpack_require__(209).set
	  , microtask          = __webpack_require__(210)()
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
	      , FakePromise = (promise.constructor = {})[__webpack_require__(26)('species')] = function(exec){ exec(empty, empty); };
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
	  Internal.prototype = __webpack_require__(211)($Promise.prototype, {
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
	__webpack_require__(25)($Promise, PROMISE);
	__webpack_require__(193)(PROMISE);
	Wrapper = __webpack_require__(10)[PROMISE];

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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(166)(function(iter){
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

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(21)
	  , call        = __webpack_require__(162)
	  , isArrayIter = __webpack_require__(163)
	  , anObject    = __webpack_require__(13)
	  , toLength    = __webpack_require__(38)
	  , getIterFn   = __webpack_require__(165)
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

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(13)
	  , aFunction = __webpack_require__(22)
	  , SPECIES   = __webpack_require__(26)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(21)
	  , invoke             = __webpack_require__(79)
	  , html               = __webpack_require__(49)
	  , cel                = __webpack_require__(16)
	  , global             = __webpack_require__(5)
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
	  if(__webpack_require__(35)(process) == 'process'){
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

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , macrotask = __webpack_require__(209).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(35)(process) == 'process';

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

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(19);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(213);

	// 23.1 Map Objects
	module.exports = __webpack_require__(214)('Map', function(get){
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

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(12).f
	  , create      = __webpack_require__(47)
	  , redefineAll = __webpack_require__(211)
	  , ctx         = __webpack_require__(21)
	  , anInstance  = __webpack_require__(206)
	  , defined     = __webpack_require__(36)
	  , forOf       = __webpack_require__(207)
	  , $iterDefine = __webpack_require__(129)
	  , step        = __webpack_require__(195)
	  , setSpecies  = __webpack_require__(193)
	  , DESCRIPTORS = __webpack_require__(7)
	  , fastKey     = __webpack_require__(23).fastKey
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

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(5)
	  , $export           = __webpack_require__(9)
	  , redefine          = __webpack_require__(19)
	  , redefineAll       = __webpack_require__(211)
	  , meta              = __webpack_require__(23)
	  , forOf             = __webpack_require__(207)
	  , anInstance        = __webpack_require__(206)
	  , isObject          = __webpack_require__(14)
	  , fails             = __webpack_require__(8)
	  , $iterDetect       = __webpack_require__(166)
	  , setToStringTag    = __webpack_require__(25)
	  , inheritIfRequired = __webpack_require__(89);

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

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(213);

	// 23.2 Set Objects
	module.exports = __webpack_require__(214)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(173)(0)
	  , redefine     = __webpack_require__(19)
	  , meta         = __webpack_require__(23)
	  , assign       = __webpack_require__(70)
	  , weak         = __webpack_require__(217)
	  , isObject     = __webpack_require__(14)
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
	var $WeakMap = module.exports = __webpack_require__(214)('WeakMap', wrapper, methods, weak, true, true);

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

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(211)
	  , getWeak           = __webpack_require__(23).getWeak
	  , anObject          = __webpack_require__(13)
	  , isObject          = __webpack_require__(14)
	  , anInstance        = __webpack_require__(206)
	  , forOf             = __webpack_require__(207)
	  , createArrayMethod = __webpack_require__(173)
	  , $has              = __webpack_require__(6)
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

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(217);

	// 23.4 WeakSet Objects
	__webpack_require__(214)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , $typed       = __webpack_require__(220)
	  , buffer       = __webpack_require__(221)
	  , anObject     = __webpack_require__(13)
	  , toIndex      = __webpack_require__(40)
	  , toLength     = __webpack_require__(38)
	  , isObject     = __webpack_require__(14)
	  , ArrayBuffer  = __webpack_require__(5).ArrayBuffer
	  , speciesConstructor = __webpack_require__(208)
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

	$export($export.P + $export.U + $export.F * __webpack_require__(8)(function(){
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

	__webpack_require__(193)(ARRAY_BUFFER);

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , hide   = __webpack_require__(11)
	  , uid    = __webpack_require__(20)
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

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(7)
	  , LIBRARY        = __webpack_require__(29)
	  , $typed         = __webpack_require__(220)
	  , hide           = __webpack_require__(11)
	  , redefineAll    = __webpack_require__(211)
	  , fails          = __webpack_require__(8)
	  , anInstance     = __webpack_require__(206)
	  , toInteger      = __webpack_require__(39)
	  , toLength       = __webpack_require__(38)
	  , gOPN           = __webpack_require__(51).f
	  , dP             = __webpack_require__(12).f
	  , arrayFill      = __webpack_require__(189)
	  , setToStringTag = __webpack_require__(25)
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

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	$export($export.G + $export.W + $export.F * !__webpack_require__(220).ABV, {
	  DataView: __webpack_require__(221).DataView
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(7)){
	  var LIBRARY             = __webpack_require__(29)
	    , global              = __webpack_require__(5)
	    , fails               = __webpack_require__(8)
	    , $export             = __webpack_require__(9)
	    , $typed              = __webpack_require__(220)
	    , $buffer             = __webpack_require__(221)
	    , ctx                 = __webpack_require__(21)
	    , anInstance          = __webpack_require__(206)
	    , propertyDesc        = __webpack_require__(18)
	    , hide                = __webpack_require__(11)
	    , redefineAll         = __webpack_require__(211)
	    , toInteger           = __webpack_require__(39)
	    , toLength            = __webpack_require__(38)
	    , toIndex             = __webpack_require__(40)
	    , toPrimitive         = __webpack_require__(17)
	    , has                 = __webpack_require__(6)
	    , same                = __webpack_require__(72)
	    , classof             = __webpack_require__(76)
	    , isObject            = __webpack_require__(14)
	    , toObject            = __webpack_require__(59)
	    , isArrayIter         = __webpack_require__(163)
	    , create              = __webpack_require__(47)
	    , getPrototypeOf      = __webpack_require__(60)
	    , gOPN                = __webpack_require__(51).f
	    , getIterFn           = __webpack_require__(165)
	    , uid                 = __webpack_require__(20)
	    , wks                 = __webpack_require__(26)
	    , createArrayMethod   = __webpack_require__(173)
	    , createArrayIncludes = __webpack_require__(37)
	    , speciesConstructor  = __webpack_require__(208)
	    , ArrayIterators      = __webpack_require__(194)
	    , Iterators           = __webpack_require__(130)
	    , $iterDetect         = __webpack_require__(166)
	    , setSpecies          = __webpack_require__(193)
	    , arrayFill           = __webpack_require__(189)
	    , arrayCopyWithin     = __webpack_require__(186)
	    , $DP                 = __webpack_require__(12)
	    , $GOPD               = __webpack_require__(52)
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

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(9)
	  , aFunction = __webpack_require__(22)
	  , anObject  = __webpack_require__(13)
	  , rApply    = (__webpack_require__(5).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(8)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(9)
	  , create     = __webpack_require__(47)
	  , aFunction  = __webpack_require__(22)
	  , anObject   = __webpack_require__(13)
	  , isObject   = __webpack_require__(14)
	  , fails      = __webpack_require__(8)
	  , bind       = __webpack_require__(78)
	  , rConstruct = (__webpack_require__(5).Reflect || {}).construct;

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

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(12)
	  , $export     = __webpack_require__(9)
	  , anObject    = __webpack_require__(13)
	  , toPrimitive = __webpack_require__(17);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(8)(function(){
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

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(9)
	  , gOPD     = __webpack_require__(52).f
	  , anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(9)
	  , anObject = __webpack_require__(13);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(131)(Enumerate, 'Object', function(){
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

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(60)
	  , has            = __webpack_require__(6)
	  , $export        = __webpack_require__(9)
	  , isObject       = __webpack_require__(14)
	  , anObject       = __webpack_require__(13);

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

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(52)
	  , $export  = __webpack_require__(9)
	  , anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(9)
	  , getProto = __webpack_require__(60)
	  , anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(9)
	  , anObject      = __webpack_require__(13)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(244)});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(51)
	  , gOPS     = __webpack_require__(44)
	  , anObject = __webpack_require__(13)
	  , Reflect  = __webpack_require__(5).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(9)
	  , anObject           = __webpack_require__(13)
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

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(12)
	  , gOPD           = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(60)
	  , has            = __webpack_require__(6)
	  , $export        = __webpack_require__(9)
	  , createDesc     = __webpack_require__(18)
	  , anObject       = __webpack_require__(13)
	  , isObject       = __webpack_require__(14);

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

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(9)
	  , setProto = __webpack_require__(74);

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

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(9)
	  , $includes = __webpack_require__(37)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(187)('includes');

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(9)
	  , $at     = __webpack_require__(128)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9)
	  , $pad    = __webpack_require__(251);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(38)
	  , repeat   = __webpack_require__(92)
	  , defined  = __webpack_require__(36);

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


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9)
	  , $pad    = __webpack_require__(251);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(84)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(84)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(9)
	  , defined     = __webpack_require__(36)
	  , toLength    = __webpack_require__(38)
	  , isRegExp    = __webpack_require__(135)
	  , getFlags    = __webpack_require__(197)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(131)($RegExpStringIterator, 'RegExp String', function next(){
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

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)('asyncIterator');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)('observable');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(9)
	  , ownKeys        = __webpack_require__(244)
	  , toIObject      = __webpack_require__(33)
	  , gOPD           = __webpack_require__(52)
	  , createProperty = __webpack_require__(164);

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

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(9)
	  , $values = __webpack_require__(260)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(31)
	  , toIObject = __webpack_require__(33)
	  , isEnum    = __webpack_require__(45).f;
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

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(9)
	  , $entries = __webpack_require__(260)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(9)
	  , toObject        = __webpack_require__(59)
	  , aFunction       = __webpack_require__(22)
	  , $defineProperty = __webpack_require__(12);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(29)|| !__webpack_require__(8)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(5)[K];
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(9)
	  , toObject        = __webpack_require__(59)
	  , aFunction       = __webpack_require__(22)
	  , $defineProperty = __webpack_require__(12);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(9)
	  , toObject                 = __webpack_require__(59)
	  , toPrimitive              = __webpack_require__(17)
	  , getPrototypeOf           = __webpack_require__(60)
	  , getOwnPropertyDescriptor = __webpack_require__(52).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(9)
	  , toObject                 = __webpack_require__(59)
	  , toPrimitive              = __webpack_require__(17)
	  , getPrototypeOf           = __webpack_require__(60)
	  , getOwnPropertyDescriptor = __webpack_require__(52).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(9);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(268)('Map')});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(76)
	  , from    = __webpack_require__(269);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(207);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(9);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(268)('Set')});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(9);

	$export($export.S, 'System', {global: __webpack_require__(5)});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(9)
	  , cof     = __webpack_require__(35);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

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

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

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

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(278)
	  , anObject                  = __webpack_require__(13)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(212)
	  , $export = __webpack_require__(9)
	  , shared  = __webpack_require__(24)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(216)));

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

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
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

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , getPrototypeOf         = __webpack_require__(60)
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

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(215)
	  , from                    = __webpack_require__(269)
	  , metadata                = __webpack_require__(278)
	  , anObject                = __webpack_require__(13)
	  , getPrototypeOf          = __webpack_require__(60)
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

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(278)
	  , anObject                = __webpack_require__(13)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , getPrototypeOf         = __webpack_require__(60)
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

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(278)
	  , anObject                  = __webpack_require__(13)
	  , aFunction                 = __webpack_require__(22)
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

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(9)
	  , microtask = __webpack_require__(210)()
	  , process   = __webpack_require__(5).process
	  , isNode    = __webpack_require__(35)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(9)
	  , global      = __webpack_require__(5)
	  , core        = __webpack_require__(10)
	  , microtask   = __webpack_require__(210)()
	  , OBSERVABLE  = __webpack_require__(26)('observable')
	  , aFunction   = __webpack_require__(22)
	  , anObject    = __webpack_require__(13)
	  , anInstance  = __webpack_require__(206)
	  , redefineAll = __webpack_require__(211)
	  , hide        = __webpack_require__(11)
	  , forOf       = __webpack_require__(207)
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

	__webpack_require__(193)('Observable');

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(5)
	  , $export    = __webpack_require__(9)
	  , invoke     = __webpack_require__(79)
	  , partial    = __webpack_require__(290)
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

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(291)
	  , invoke    = __webpack_require__(79)
	  , aFunction = __webpack_require__(22);
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

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , $task   = __webpack_require__(209);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(194)
	  , redefine      = __webpack_require__(19)
	  , global        = __webpack_require__(5)
	  , hide          = __webpack_require__(11)
	  , Iterators     = __webpack_require__(130)
	  , wks           = __webpack_require__(26)
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

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
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

	  var hasOwn = Object.prototype.hasOwnProperty;
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
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
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

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

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
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
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

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

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

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(295)))

/***/ },
/* 295 */
/***/ function(module, exports) {

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


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(297);
	module.exports = __webpack_require__(10).RegExp.escape;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(9)
	  , $re     = __webpack_require__(298)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function ($) {

	  $.yaleExt = $.yaleExt || {};

	  var logger = (0, _logger2.default)();

	  jQuery.extend($.yaleExt, {

	    // Get bounds of multiple paper.js shapes.
	    getCombinedBounds: function getCombinedBounds(shapes) {
	      logger.debug('shapes: ' + shapes);
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

	    highlightShape: function highlightShape(shape) {
	      if (!shape._ym_oldStrokeColor) {
	        shape.data._ym_oldStrokeColor = shape.strokeColor;
	      }
	      if (!shape._ym_oldStrokeWdth) {
	        shape.data._ym_oldStrokeWidth = shape.data.currentStrokeValue;
	      }
	      shape.data.currentStrokeValue = 2;
	      shape.set({ opacity: 1 });
	    },

	    deHighlightShape: function deHighlightShape(shape) {
	      if (shape.data._ym_oldStrokeColor) {
	        shape.set({ strokeColor: shape.data._ym_oldStrokeColor });
	      }
	      if (shape.data._ym_oldStrokeWidth) {
	        shape.data.currentStrokeValue = shape.data._ym_oldStrokeWidth;
	      }
	      shape.opacity = 0;
	    }

	  });
	})(Mirador);

/***/ },
/* 300 */
/***/ function(module, exports) {

	'use strict';

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
	    this.ERROR = 2;

	    this.logLevel = logLevel || this.INFO;
	    this.trace = trace || false;
	  }

	  _createClass(Logger, [{
	    key: 'setLogLevel',
	    value: function setLogLevel(logLevel) {
	      this.logLevel = logLevel;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      if (this.trace) {
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
	    key: 'info',
	    value: function info() {
	      if (this.logLevel <= this.INFO) {
	        var args = Array.prototype.slice.call(arguments);
	        args.unshift('INFO');
	        this.log.apply(this, args);
	      }
	    }
	  }, {
	    key: 'debug',
	    value: function debug() {
	      if (this.logLevel <= this.DEBUG) {
	        var args = Array.prototype.slice.call(arguments);
	        args.unshift('DEBUG');
	        this.log.apply(this, args);
	      }
	    }
	  }]);

	  return Logger;
	}();

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function ($) {

	  $.yaleExt = $.yaleExt || {};

	  var logger = (0, _logger2.default)();

	  /*
	   * Functions in this file must be called in the context of an ImageView 
	   * so "this" will point to the instance of the image view.
	   */
	  jQuery.extend($.yaleExt, {

	    zoomToAnnotation: function zoomToAnnotation(annotation) {
	      var viewport = this.osd.viewport;
	      var currentZoom = viewport.getZoom();
	      logger.debug('panToAnnotation zoom: ' + currentZoom);
	      var shapes = $.yaleExt.getShapesForAnnotation.call(this.annotationsLayer.drawTool, annotation);
	      var shapeBounds = $.yaleExt.getCombinedBounds(shapes); // in image coordinates
	      var shapeWH = viewport.imageToViewportCoordinates(shapeBounds.width, shapeBounds.height);
	      var viewportBounds = viewport.getBounds();
	      var widthRatio = shapeWH.x / viewportBounds.width;
	      logger.debug('w ratio: ' + widthRatio);
	      var heightRatio = shapeWH.y / viewportBounds.height;
	      logger.debug('h ratio: ' + heightRatio);
	      var zoomFactor = 1.0 / Math.max(widthRatio, heightRatio) * 0.75;
	      logger.debug('zoomFactor: ' + zoomFactor);

	      viewport.zoomBy(zoomFactor);
	    },

	    /*
	     * Highlight the boundaries for the currently chosen annotation
	     * and pan to show the annotated area.
	     */
	    panToAnnotation: function panToAnnotation(annotation) {
	      var viewport = this.osd.viewport;
	      var shapes = $.yaleExt.getShapesForAnnotation.call(this.annotationsLayer.drawTool, annotation);
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

	      if (panX !== 0 || panY !== 0) {
	        viewport.panBy(new OpenSeadragon.Point(panX, panY));
	      }
	    }

	  });
	})(Mirador);

/***/ },
/* 302 */
/***/ function(module, exports) {

	'use strict';

	(function ($) {

	  $.yaleExt = $.yaleExt || {};

	  /*
	   * All functions in this file must be called in the context of 
	   * an OsdRegionDrawTool so "this" will point to the instance of it.
	   */
	  jQuery.extend($.yaleExt, {

	    /*
	     * Get paper.js shapes which are associated with the annotation.
	     */
	    getShapesForAnnotation: function getShapesForAnnotation(annotation) {
	      var out_shapes = [];
	      jQuery.each(this.annotationsToShapesMap, function (key, shapes) {
	        jQuery.each(shapes, function (index, shape) {
	          if (shape.data.annotation['@id'] === annotation['@id']) {
	            out_shapes.push(shape);
	          }
	        });
	      });
	      return out_shapes;
	    },

	    /*
	     * Highlight annotated area for annotation focused in annotation window.
	     */
	    updateHighlights: function updateHighlights(annotation) {
	      jQuery.each(this.annotationsToShapesMap, function (key, shapes) {
	        jQuery.each(shapes, function (index, shape) {
	          if (shape.data.annotation['@id'] === annotation['@id']) {
	            $.yaleExt.highlightShape(shape);
	            shape.bringToFront();
	          } else {
	            $.yaleExt.deHighlightShape(shape);
	            shape.sendToBack();
	          }
	        });
	      });
	      this.osdViewer.forceRedraw();
	    }

	  });
	})(Mirador);

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(300);

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

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _import = __webpack_require__(305);

	var _annotationSource = __webpack_require__(308);

	var _annotationSource2 = _interopRequireDefault(_annotationSource);

	var _errorDialog = __webpack_require__(321);

	var _errorDialog2 = _interopRequireDefault(_errorDialog);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	var _miradorWindow = __webpack_require__(314);

	var _miradorWindow2 = _interopRequireDefault(_miradorWindow);

	var _modalAlert = __webpack_require__(315);

	var _modalAlert2 = _interopRequireDefault(_modalAlert);

	var _session = __webpack_require__(319);

	var _session2 = _interopRequireDefault(_session);

	var _util = __webpack_require__(322);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _explorer = null;

	var YaleEndpoint = function () {
	  function YaleEndpoint(options) {
	    _classCallCheck(this, YaleEndpoint);

	    jQuery.extend(this, {
	      annotationsList: [],
	      prefix: null,
	      dfd: null
	    }, options);
	    this.logger = (0, _logger2.default)();
	  }

	  _createClass(YaleEndpoint, [{
	    key: 'search',
	    value: function search(options) {
	      this.logger.debug('YaleEndpoint#search', options);
	      var _this = this;
	      var canvasId = options.uri;
	      var progressPane = (0, _modalAlert2.default)();
	      var errorPane = (0, _errorDialog2.default)();
	      var explorer = this.getAnnotationExplorer();

	      progressPane.show();
	      explorer.getAnnotations({ canvasId: canvasId }).catch(function (reason) {
	        var msg = 'ERROR YaleEndpoint#search getAnnotations - ' + reason;
	        throw msg;
	      }).then(function (annotations) {
	        _this.logger.debug('YaleEndpoint#search annotations: ', annotations);
	        progressPane.hide();
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = annotations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var anno = _step.value;

	            anno.endpoint = _this;
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

	        _this.annotationsList = annotations;
	        _this.dfd.resolve(true);
	      }).catch(function (reason) {
	        _this.logger.error('YaleEndpoint#search failed - ', reason);
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
	          _this.logger.debug('YaleEndpoint#create successful with anno: ', anno);
	          anno.endpoint = _this;
	          if (typeof successCallback === 'function') {
	            successCallback(anno);
	          }
	        }).catch(function (reason) {
	          _this.logger.error('ERROR YaleEndpoint#create successCallback failed');
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
	      this.logger.debug('YaleEndpoint#_create oaAnnotation:', oaAnnotation);
	      var _this = this;
	      var explorer = this.getAnnotationExplorer();

	      return explorer.createAnnotation(oaAnnotation).catch(function (reason) {
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
	          _this.logger.error(msg);
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
	      this.logger.debug('YaleEndpoint#_update oaAnnotation:', oaAnnotation);
	      var _this = this;
	      var explorer = this.getAnnotationExplorer();
	      var annotationId = oaAnnotation['@id'];

	      var promise = Promise.resolve().then(function () {
	        return explorer.updateAnnotation(oaAnnotation);
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
	      this.logger.debug('YaleEndpoint#deleteAnnotation annotationId: ' + annotationId);
	      var _this = this;

	      if (this.userAuthorize('delete', null)) {
	        this._deleteAnnotation(annotationId).then(function () {
	          if (typeof successCallback === 'function') {
	            successCallback();
	          }
	        }).catch(function (reason) {
	          errorCallback();
	        });
	      } else {
	        this.logger.info('YaleEndpoint#delete user not authorized');
	        (0, _errorDialog2.default)().show('authz_update');
	        if (typeof errorCallback === 'function') {
	          errorCallback();
	        }
	      }
	    }
	  }, {
	    key: '_deleteAnnotation',
	    value: function _deleteAnnotation(annotationId) {
	      this.logger.debug('YaleEndpoint#_deleteAnnotation annotationId:', annotationId);
	      var _this = this;
	      var explorer = this.getAnnotationExplorer();

	      var promise = explorer.deleteAnnotation(annotationId).catch(function (reason) {
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
	        var explorer;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                this.logger.debug('YaleEndpoint#getLayers');
	                explorer = this.getAnnotationExplorer();
	                return _context.abrupt('return', explorer.getLayers());

	              case 3:
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
	      this.logger.debug('YaleEndpoint#updateOrder canvasId:', canvasId, 'layerId:', layerId, 'annoIds:', annoIds);
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
	          _this.logger.error('YaleEndpoint#updateOrder', reason);
	          errorCallback();
	        });
	      } else {
	        this.logger.info('YaleEndpoint#updateOrder user not authorized');
	        (0, _errorDialog2.default)().show('authz_update');
	        if (typeof errorCallback === 'function') {
	          errorCallback();
	        }
	      }
	    }
	  }, {
	    key: '_updateOrder',
	    value: function _updateOrder(canvasId, layerId, annoIds) {
	      var explorer = this.getAnnotationExplorer();
	      return explorer.updateAnnotationListOrder(canvasId, layerId, annoIds);
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
	      this.logger.debug('YaleEndpoint#set prop:', prop, ', value:', value, ', options:', options);
	      if (options) {
	        this[options.parent][prop] = value;
	      } else {
	        this[prop] = value;
	      }
	    }
	  }, {
	    key: 'getAnnotationExplorer',
	    value: function getAnnotationExplorer() {
	      if (!_explorer) {
	        _explorer = new _import.AnnotationExplorer({
	          dataSource: this.createAnnotationSource()
	        });
	      }
	      return _explorer;
	    }
	  }, {
	    key: 'createAnnotationSource',
	    value: function createAnnotationSource() {
	      var source = (0, _miradorWindow2.default)().getConfig().annotationEndpoint.dataSource;
	      this.logger.debug('YaleEndpoint#createAnnotationSource', source);
	      return new source({ prefix: this.prefix });
	    }
	  }, {
	    key: 'parseAnnotations',
	    value: function parseAnnotations() {
	      var explorer = this.getAnnotationExplorer();
	      var spec = (0, _miradorWindow2.default)().getConfig().extension.tagHierarchy;
	      explorer.reloadAnnotationToc(spec, this.annotationsList);
	    }
	  }]);

	  return YaleEndpoint;
	}();

	exports.default = YaleEndpoint;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__webpack_require__(306);
	__webpack_require__(307);

	var annoUtil = joosugi.annotationUtil;
	var AnnotationExplorer = joosugi.AnnotationExplorer;
	var AnnotationExplorerDialog = joosugiUI.AnnotationExplorerDialog;

	exports.annoUtil = annoUtil;
	exports.AnnotationExplorer = AnnotationExplorer;
	exports.AnnotationExplorerDialog = AnnotationExplorerDialog;

/***/ },
/* 306 */
/***/ function(module, exports) {

	// Joosugi version 0.1.2
	// Build: Fri Feb 10 2017 01:29:34 GMT-0500 (EST)

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

		'use strict';

		var _annotationToc = __webpack_require__(1);

		var _annotationToc2 = _interopRequireDefault(_annotationToc);

		var _annotationExplorer = __webpack_require__(3);

		var _annotationExplorer2 = _interopRequireDefault(_annotationExplorer);

		var _annotationUtil = __webpack_require__(2);

		var _annotationUtil2 = _interopRequireDefault(_annotationUtil);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		window.joosugi = {
		  AnnotationExplorer: _annotationExplorer2.default,
		  AnnotationToc: _annotationToc2.default,
		  annotationUtil: _annotationUtil2.default
		};

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _annotationUtil = __webpack_require__(2);

		var _annotationUtil2 = _interopRequireDefault(_annotationUtil);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		/**
		 * A tag based table-of-contents structure for annotations.
		 *
		 * Builds a structure (annoHiercrchy) of annotations
		 * so they can be accessed and manipulated
		 * according to the pre-defined TOC tags hierarchy (spec).
		 */
		var AnnotationToc = function () {
		  function AnnotationToc(spec, annotations) {
		    _classCallCheck(this, AnnotationToc);

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
		      console.log('Toc#init spec: ', this.spec);

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

		      var _iteratorNormalCompletion = true;
		      var _didIteratorError = false;
		      var _iteratorError = undefined;

		      try {
		        for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		          var tag = _step.value;

		          if (!node) {
		            break;
		          }
		          node = node.childNodes[tag];
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

		      return node === this.annoHierarchy ? null : node;
		    }
		  }, {
		    key: 'findNodeForAnnotation',
		    value: function findNodeForAnnotation(annotation) {
		      var targetAnno = _annotationUtil2.default.findFinalTargetAnnotation(annotation, this.annotations);
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
		      var _iteratorNormalCompletion2 = true;
		      var _didIteratorError2 = false;
		      var _iteratorError2 = undefined;

		      try {
		        for (var _iterator2 = this.spec.nodeSpecs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		          var row = _step2.value;

		          //jQuery.each(row, function(index, nodeSpec) {
		          var _iteratorNormalCompletion3 = true;
		          var _didIteratorError3 = false;
		          var _iteratorError3 = undefined;

		          try {
		            for (var _iterator3 = row.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		              var _step3$value = _slicedToArray(_step3.value, 2),
		                  index = _step3$value[0],
		                  nodeSpec = _step3$value[1];

		              _this.tagWeights[nodeSpec.tag] = index;
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
		  }, {
		    key: 'parse',
		    value: function parse() {
		      // First pass
		      var remainingAnnotations = this.addTaggedAnnotations(this.annotations);
		      // Second pass
		      this.addRemainingAnnotations(remainingAnnotations);
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

		      var _iteratorNormalCompletion4 = true;
		      var _didIteratorError4 = false;
		      var _iteratorError4 = undefined;

		      try {
		        for (var _iterator4 = annotations[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		          var annotation = _step4.value;

		          var tags = _annotationUtil2.default.getTags(annotation);
		          var success = _this.buildChildNodes(annotation, tags, 0, _this.annoHierarchy);

		          if (!success) {
		            remainder.push(annotation);
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

		      return remainder;
		    }
		  }, {
		    key: 'addRemainingAnnotations',
		    value: function addRemainingAnnotations(annotations) {
		      var _this = this;
		      var _iteratorNormalCompletion5 = true;
		      var _didIteratorError5 = false;
		      var _iteratorError5 = undefined;

		      try {
		        for (var _iterator5 = annotations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
		          var annotation = _step5.value;

		          var targetAnno = _annotationUtil2.default.findFinalTargetAnnotation(annotation, _this.annotations);
		          if (targetAnno) {
		            var node = _this.annoToNodeMap[targetAnno['@id']];
		            if (targetAnno && node) {
		              node.childAnnotations.push(annotation);
		              _this.registerLayerWithNode(node, annotation.layerId);
		            } else {
		              console.log('WARNING Toc#addRemainingAnnotations not covered by ToC');
		              _this._unassigned.push(annotation);
		            }
		          } else {
		            console.log('WARNING Toc#addRemainingAnnotations orphan', annotation);
		            _this._unassigned.push(annotation);
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
		      //console.log('ParsedAnnotations#buildNode rowIndex: ' + rowIndex + ', anno:', annotation);

		      var currentNode = null;

		      if (rowIndex >= this.spec.nodeSpecs.length) {
		        // no more levels to explore in the TOC structure
		        if (parent.isRoot) {
		          // The root is not a TOC node
		          return false;
		        } else {
		          // Assign the annotation to parent (a TOC node)
		          parent.annotation = annotation;
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
		      var _iteratorNormalCompletion6 = true;
		      var _didIteratorError6 = false;
		      var _iteratorError6 = undefined;

		      try {
		        for (var _iterator6 = tags[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
		          var tag = _step6.value;
		          var _iteratorNormalCompletion7 = true;
		          var _didIteratorError7 = false;
		          var _iteratorError7 = undefined;

		          try {
		            for (var _iterator7 = nodeSpecs[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
		              var nodeSpec = _step7.value;

		              if (tag === nodeSpec.tag) {
		                match = nodeSpec;
		                break;
		              }
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

		          if (match) {
		            break;
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

		      var _iteratorNormalCompletion8 = true;
		      var _didIteratorError8 = false;
		      var _iteratorError8 = undefined;

		      try {
		        for (var _iterator8 = tags[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
		          var tag = _step8.value;

		          node = node.childNodes[tag];
		          if (!node) {
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

		      return node;
		    }
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

		      if (node.annotation['@id'] === annotation['@id']) {
		        return true;
		      }
		      console.log('XXX node.childAnnotations:', node.childAnnotations);
		      console.log('XXX type:', _typeof(node.childAnnotations));
		      var _iteratorNormalCompletion9 = true;
		      var _didIteratorError9 = false;
		      var _iteratorError9 = undefined;

		      try {
		        for (var _iterator9 = node.childAnnotations[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
		          var anno = _step9.value;

		          if (anno['@id'] === annotation['@id']) {
		            matched = true;
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

		      var _iteratorNormalCompletion10 = true;
		      var _didIteratorError10 = false;
		      var _iteratorError10 = undefined;

		      try {
		        for (var _iterator10 = node.childNodes[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
		          var childNode = _step10.value;

		          if (_this.matchNode(annotation, childNode)) {
		            matched = true;
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

		      var _iteratorNormalCompletion11 = true;
		      var _didIteratorError11 = false;
		      var _iteratorError11 = undefined;

		      try {
		        for (var _iterator11 = sortedTags[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
		          var tag = _step11.value;

		          var childNode = node.childNodes[tag];
		          callback(childNode);
		          _this.visit(childNode, callback);
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
		    }
		  }]);

		  return AnnotationToc;
		}();

		exports.default = AnnotationToc;

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		exports.default = {

		  /**
		   * @returns {Array} IDs of layers associated with the annotation
		   */
		  getLayers: function getLayers(annotation) {
		    var layers = annotation.layer || annotation.layerId; //TODO remove layerId after refactoring yale-mirador
		    return layers instanceof Array ? layers : [layers];
		  },

		  /**
		   * @returns {boolean} true if the annotation targets a canvas fragment, not another annotation.
		   */
		  isAnnoOnCanvas: function isAnnoOnCanvas(annotation) {
		    return annotation.on['@type'] !== 'oa:Annotation';
		  },

		  /**
		   * Returns content of first text (non-tag) resource it finds from the annotation.
		   */
		  getText: function getText(annotation) {
		    var content = null;
		    var resource = annotation.resource;

		    if (!(resource instanceof Array || (typeof resource === 'undefined' ? 'undefined' : _typeof(resource)) === 'object')) {
		      return null;
		    }
		    if (!(resource instanceof Array)) {
		      resource = [resource];
		    }
		    var _iteratorNormalCompletion = true;
		    var _didIteratorError = false;
		    var _iteratorError = undefined;

		    try {
		      for (var _iterator = resource[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		        var item = _step.value;

		        if (item['@type'] === 'dctypes:Text') {
		          content = item.chars;
		          break;
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

		    return content;
		  },

		  getTags: function getTags(annotation) {
		    var tags = [];

		    if (annotation.resource instanceof Array) {
		      var _iteratorNormalCompletion2 = true;
		      var _didIteratorError2 = false;
		      var _iteratorError2 = undefined;

		      try {
		        for (var _iterator2 = annotation.resource[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		          var item = _step2.value;

		          if (item['@type'] === "oa:Tag") {
		            tags.push(item.chars);
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
		    return tags;
		  },

		  hasTags: function hasTags(annotation, tags) {
		    var annoTags = this.getTags(annotation);

		    for (var i = 0; i < tags.length; ++i) {
		      var found = false;
		      for (var j = 0; j < annoTags.length; ++j) {
		        if (tags[i] === annoTags[j]) {
		          found = true;
		          break;
		        }
		      }
		      if (!found) {
		        return false;
		      }
		    }
		    return true;
		  },

		  getTargetSelectorValue: function getTargetSelectorValue(annotation) {
		    var selector = annotation.on.selector;
		    return selector ? selector.value : null;
		  },

		  // For an annotation of annotation,
		  // follow the "on" relation until the eventual target annotation if found.
		  findFinalTargetAnnotation: function findFinalTargetAnnotation(annotation, annotations) {
		    var nextId = '';
		    var nextAnno = annotation;
		    var targetAnno = annotation;

		    while (nextAnno) {
		      //console.log('nextAnno:', nextAnno);

		      if (nextAnno.on['@type'] === 'oa:Annotation') {
		        nextId = nextAnno.on.full;
		        nextAnno = null;
		        var _iteratorNormalCompletion3 = true;
		        var _didIteratorError3 = false;
		        var _iteratorError3 = undefined;

		        try {
		          for (var _iterator3 = annotations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		            var anno = _step3.value;

		            if (anno['@id'] === nextId) {
		              targetAnno = anno;
		              nextAnno = anno;
		              break;
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
		      } else {
		        nextAnno = null;
		      }
		    }
		    return targetAnno;
		  },

		  findTargetAnnotation: function findTargetAnnotation(annotation, annotations) {
		    var nextId = '';
		    var nextAnno = annotation;
		    var targetAnno = annotation;

		    while (nextAnno) {
		      //console.log('nextAnno: ');
		      //console.dir(nextAnno);

		      if (nextAnno.on['@type'] === 'oa:Annotation') {
		        nextId = nextAnno.on.full;
		        nextAnno = null;
		        var _iteratorNormalCompletion4 = true;
		        var _didIteratorError4 = false;
		        var _iteratorError4 = undefined;

		        try {
		          for (var _iterator4 = annotations[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		            var anno = _step4.value;

		            if (anno['@id'] === nextId) {
		              targetAnno = anno;
		              nextAnno = anno;
		              break;
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
		      } else {
		        nextAnno = null;
		      }
		    }
		    return targetAnno;
		  },

		  getTargetCanvasIds: function getTargetCanvasIds(annotation, options) {
		    var canvasIds = [];
		    var targetAnno = null;

		    if (annotation.on['@type'] === 'oa:Annotation') {
		      targetAnno = this.findFinalTargetAnnotation(annotation, options.annotations);
		    } else {
		      targetAnno = annotation;
		    }
		    if (!targetAnno) {
		      return [];
		    }
		    var targets = targetAnno.on;
		    if (targets instanceof Array) {
		      var _iteratorNormalCompletion5 = true;
		      var _didIteratorError5 = false;
		      var _iteratorError5 = undefined;

		      try {
		        for (var _iterator5 = targets[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
		          var target = _step5.value;

		          if (target.full) {
		            canvasIds.push(target.full);
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
		    } else if ((typeof targets === 'undefined' ? 'undefined' : _typeof(targets)) === 'object') {
		      if (targets.full) {
		        canvasIds.push(targets.full);
		      }
		    } else {
		      console.log('ERROR annoUtil.getFinalTargetCanvasIds: wrong target type ' + (typeof targets === 'undefined' ? 'undefined' : _typeof(targets)));
		    }
		    return canvasIds;
		  },


		  /**
		   * Find annotations from "annotationsList" which this "annotation" annotates
		   * and which belong to the layer with "layerId".
		   */
		  findTargetAnnotations: function findTargetAnnotations(annotation, annotationsList, layerId) {
		    var targetId = annotation.on.full;
		    return annotationsList.filter(function (currentAnno) {
		      return currentAnno.layerId === layerId && currentAnno['@id'] === targetId;
		    });
		  },

		  /**
		   * Find annotations from "annotationsList" which annotates this "annotation"
		   * and which belong to the layer with "layerId".
		   */
		  findTargetingAnnotations: function findTargetingAnnotations(annotation, annotationsList, layerId) {
		    return annotationsList.filter(function (currentAnno) {
		      var targetId = currentAnno.on.full;
		      return currentAnno.layerId === layerId && annotation['@id'] === targetId;
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

		  /**
		   * Add target ("on" attribute) to annotation
		   */
		  addTarget: function addTarget(annotation, target) {
		    if (annotation.on) {
		      if (annotation.on instanceof Array) {
		        annotation.on.push(target);
		      } else {
		        annotation.on = [annotation.on, target];
		      }
		    } else {
		      annotation.on = [target];
		    }
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

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _annotationToc = __webpack_require__(1);

		var _annotationToc2 = _interopRequireDefault(_annotationToc);

		var _annotationUtil = __webpack_require__(2);

		var _annotationUtil2 = _interopRequireDefault(_annotationUtil);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var AnnotationExplorer = function () {
		  function AnnotationExplorer(options) {
		    _classCallCheck(this, AnnotationExplorer);

		    this.options = jQuery.extend({
		      dataSource: null,
		      tocSpec: null
		    }, options);
		    this.AnnotationToc = null;
		  }

		  _createClass(AnnotationExplorer, [{
		    key: 'getLayers',
		    value: function getLayers() {
		      return this.options.dataSource.getLayers();
		    }
		  }, {
		    key: 'getAnnotations',
		    value: function getAnnotations(options) {
		      console.log('AnnotationExplorer#getAnnotations options:', options);
		      return this.options.dataSource.getAnnotations(options);
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
		    value: function deleteAnnotation(annotation) {
		      return this.options.dataSource.deleteAnnotation(annotation);
		    }
		  }, {
		    key: 'updateAnnotationListOrder',
		    value: function updateAnnotationListOrder(canvasId, layerId, annoIds) {
		      console.log('AnnotationExplorer#updateAnnotationListOrder');
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
		      console.log('AnnotationExplorer#reloadAnnotationToc toc:', this.annotationToc.annoHierarchy);
		    }
		  }]);

		  return AnnotationExplorer;
		}();

		exports.default = AnnotationExplorer;

	/***/ }
	/******/ ]);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = joosugi;

/***/ },
/* 307 */
/***/ function(module, exports) {

	// joosugi-semantic-ui DEV version 0.1.1
	// Build: Thu Feb 09 2017 17:36:28 GMT-0500 (EST)

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
	/******/ 	__webpack_require__.p = "/dist/";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _annotationExplorerDialog = __webpack_require__(2);

		var _annotationExplorerDialog2 = _interopRequireDefault(_annotationExplorerDialog);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(5);

		window.joosugiUI = {
		  AnnotationExplorerDialog: _annotationExplorerDialog2.default
		};

	/***/ },
	/* 1 */,
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _facetSelector = __webpack_require__(3);

		var _facetSelector2 = _interopRequireDefault(_facetSelector);

		var _annotationPanel = __webpack_require__(4);

		var _annotationPanel2 = _interopRequireDefault(_annotationPanel);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		//import importPackage from './import';
		//const joosugi = importPackage('joosugi');

		var AnnotationExplorerDialog = function () {

		  /**
		   * @param {object} elem a jQuery element
		   */
		  function AnnotationExplorerDialog(options) {
		    _classCallCheck(this, AnnotationExplorerDialog);

		    var _this = this;

		    jQuery.extend(this, {
		      appendTo: null,
		      dataSource: null,
		      canvases: null, // canvas IDs or ranges
		      defaultCanvas: null, // ID of default canvas to select
		      defaultLayer: null, // ID of default layer to select
		      onSelect: null
		    }, options);

		    if (!this.model) {
		      this.model = new joosugi.AnnotationExplorer({
		        dataSource: this.dataSource
		      });
		    }

		    this.id = 'joosugi_anno_explorer_dialog';
		    this.elem = this.createElem(this.id);
		    this.annosPanel = new _annotationPanel2.default({
		      appendTo: this.elem.find('.column.annos'),
		      onChange: function onChange(annotation) {
		        _this.selectedAnnotation = annotation;
		        _this.okButton.removeClass('disabled');
		      }
		    });

		    this.okButton = this.elem.find('.ok');
		    this.cancelButton = this.elem.find('.cancel');

		    this.elem.modal({
		      observeChanges: true,
		      onApprove: function onApprove(elem) {
		        console.log('approve');
		        _this.onSelect(_this.selectedAnnotation);
		      },
		      onDeny: function onDeny(elem) {
		        console.log('deny');
		      },
		      onHidden: function onHidden(elem) {
		        console.log('hidden');
		      }
		    });

		    this.canvasSelector = this.setupCanvasSelector();

		    this.setupLayerSelector().then(function (selector) {
		      _this.layerSelector = selector;
		      if (_this.defaultCanvas) {
		        _this.canvasSelector.setValue(_this.defaultCanvas);
		      }
		      if (_this.defaultLayer) {
		        _this.layerSelector.setValue(_this.defaultLayer);
		      }
		    });

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
		      return jQuery('<div/>').addClass('ui modal').attr('id', id).html(template()).appendTo(this.appendTo);
		    }
		  }, {
		    key: 'setupCanvasSelector',
		    value: function setupCanvasSelector() {
		      var _this = this;
		      var selector = new _facetSelector2.default({
		        appendTo: this.elem.find('#facets'),
		        title: 'Canvas',
		        items: this.canvases,
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
		          console.log('canvas select: ' + selectedValue);
		          _this.refresh({
		            canvasId: selectedValue
		          });
		        }
		      });
		      return selector;
		    }
		  }, {
		    key: 'setupLayerSelector',
		    value: function setupLayerSelector() {
		      var _this = this;
		      return this.model.getLayers().then(function (layers) {
		        return new _facetSelector2.default({
		          appendTo: _this.elem.find('#facets'),
		          title: 'Layer',
		          items: layers,
		          parseItem: function parseItem(item) {
		            return { label: item.label, value: item['@id'] };
		          },
		          onChange: function onChange(selectedValue) {
		            console.log('layer select: ' + selectedValue);
		            _this.refresh({
		              layerId: selectedValue
		            });
		          }
		        });
		      });
		    }
		  }, {
		    key: 'refresh',
		    value: function refresh(options) {
		      console.log('AnnotationExplorerDialog#refresh');
		      var _this = this;
		      var canvasId = this.canvasSelector.value();
		      var layerId = this.layerSelector.value();

		      this.model.getAnnotations({
		        canvasId: canvasId,
		        layerId: layerId
		      }).then(function (annotations) {
		        _this.annosPanel.reload(annotations);
		      });
		    }
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

		      console.log('scrollToCurrentCanvas ' + canvasElems.length);

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
		      this.okButton.click(function () {
		        console.log('ok clicked');
		      });
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

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var FacetSelector = function () {
		  function FacetSelector(options) {
		    _classCallCheck(this, FacetSelector);

		    jQuery.extend(this, {
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
		      onChange: function onChange() {}
		    }, options);

		    this.elem = jQuery('<div/>').addClass('ui accordion').html(template).appendTo(this.appendTo);
		    this.elem.find('.title').text(this.title);

		    this.content = this.elem.find('.content');

		    var _iteratorNormalCompletion = true;
		    var _didIteratorError = false;
		    var _iteratorError = undefined;

		    try {
		      for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
		      if (this.findItemByValue(value)) {
		        if (this._value !== value) {
		          this._value = value;
		          this.refresh();
		          this.onChange(value);
		        }
		      } else {
		        console.log('FacetSelector#setValue failed for value: ' + value);
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
		      //console.log('FacetSelector#addLeaf item:', JSON.stringify(rawItem));
		      var _this = this;
		      var item = this.parseItem ? this.parseItem(rawItem) : rawItem;
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
		      if (this.isLeaf(item)) {
		        this.addLeaf(item, appendTo);
		      } else {
		        var _iteratorNormalCompletion4 = true;
		        var _didIteratorError4 = false;
		        var _iteratorError4 = undefined;

		        try {
		          for (var _iterator4 = this.getChildren(item)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
		  }]);

		  return FacetSelector;
		}();

		exports.default = FacetSelector;


		var template = Handlebars.compile(['<div class="title"></div>', '<div class="content">', '</div>'].join(''));

		var itemTemplate = Handlebars.compile(['<a href="#">{{label}}</a>'].join(''));

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		//import importPackage from './import';
		//const util = importPackage('joosugi').annotationUtil;

		var util = joosugi.annotationUtil;

		var AnnotationPanel = function () {
		  function AnnotationPanel(options) {
		    _classCallCheck(this, AnnotationPanel);

		    jQuery.extend(this, {
		      appendTo: null,
		      onChange: null
		    }, options);

		    this.elem = jQuery('<div/>').addClass('joosugi_anno_panel').html(template()).appendTo(this.appendTo);
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
		          this.onChange(value);
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
		        for (var _iterator = this.elem.find('.item')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
		    key: 'reload',
		    value: function reload(annotations) {
		      console.log('AnnotationPanel#reload');
		      console.log(annotations);
		      this.elem.empty();
		      var _iteratorNormalCompletion2 = true;
		      var _didIteratorError2 = false;
		      var _iteratorError2 = undefined;

		      try {
		        for (var _iterator2 = annotations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		          var anno = _step2.value;

		          this.elem.append(this.createItem(anno));
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
		    key: 'refresh',
		    value: function refresh() {
		      var _iteratorNormalCompletion3 = true;
		      var _didIteratorError3 = false;
		      var _iteratorError3 = undefined;

		      try {
		        for (var _iterator3 = this.elem.find('.item')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		          var item = _step3.value;

		          var $item = jQuery(item);
		          console.log('0: ' + this._value['@id']);
		          console.log('1: ' + $item.data('item')['@id']);
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


		var template = Handlebars.compile(['<div>{{{content}}}</div>'].join(''));

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(6);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(8)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(7)();
		// imports


		// module
		exports.push([module.id, "#joosugi_anno_explorer_dialog {\n  height: 80%;\n}\n#joosugi_anno_explorer_dialog .content {\n  height: 72%;\n}\n#joosugi_anno_explorer_dialog .content .grid {\n  height: 100%;\n}\n#joosugi_anno_explorer_dialog .column.facets {\n  height: 100%;\n  overflow-y: scroll;\n}\n#joosugi_anno_explorer_dialog .item.selected {\n  background-color: orange;\n}\n#joosugi_anno_explorer_dialog .item {\n  padding: 5px;\n  background-color: #eee;\n  border-radius: 5px;\n  margin: 2px;\n}\n#joosugi_anno_explorer_dialog .ui.accordion .content {\n  height: 120px;\n  overflow-y: scroll;\n}\n.joosugi_anno_panel {\n  height: 100%;\n  overflow-y: scroll;\n  border: solid 1px #bbb;\n  border-radius: 5px;\n  padding: 5px;\n}\n", ""]);

		// exports


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		"use strict";

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function () {
			var list = [];

			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for (var i = 0; i < this.length; i++) {
					var item = this[i];
					if (item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
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

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

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
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0,
			styleElementsInsertedAtTop = [];

		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}

			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();

			// By default, add <style> tags to the bottom of <head>.
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
		}

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
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if(!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if(lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
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
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}

		function createLinkElement(options) {
			var linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			insertStyleElement(options, linkElement);
			return linkElement;
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
				update = updateLink.bind(null, styleElement);
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

		function updateLink(linkElement, obj) {
			var css = obj.css;
			var sourceMap = obj.sourceMap;

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


	/***/ }
	/******/ ]);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = joosugiUI;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _annotationCache = __webpack_require__(309);

	var _annotationCache2 = _interopRequireDefault(_annotationCache);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorWindow = __webpack_require__(314);

	var _miradorWindow2 = _interopRequireDefault(_miradorWindow);

	var _stateStore = __webpack_require__(320);

	var _stateStore2 = _interopRequireDefault(_stateStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Implements inteface between Joosugi annotation explorer and the annotation server
	var AnnotationSource = function () {
	  function AnnotationSource(options) {
	    _classCallCheck(this, AnnotationSource);

	    this.options = jQuery.extend({
	      prefix: null
	    }, options);
	    this.logger = (0, _logger2.default)();
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
	                this.logger.debug('AnnotationSource#getLayers');
	                layers = null;

	                if (!this.layers) {
	                  _context.next = 7;
	                  break;
	                }

	                this.logger.debug('AnnotationSource#getLayers hit cache', this.layers);
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
	        var settings = (0, _miradorWindow2.default)().getConfig().extension;
	        var url = _this.options.prefix + '/layers';
	        if (settings.projectId && !settings.disableAuthz) {
	          url += '?group_id=' + settings.projectId;
	        }
	        _this.logger.debug('AnnotationSource#getLayers url:', url);

	        jQuery.ajax({
	          url: url,
	          type: 'GET',
	          dataType: 'json',
	          contentType: 'application/json; charset=utf-8',
	          success: function success(data, textStatus, jqXHR) {
	            _this.logger.debug('AnnotationSource#getLayers layers: ', data);
	            _this.layers = data;
	            resolve(data);
	          },
	          error: function error(jqXHR, textStatus, errorThrown) {
	            var msg = 'AnnotationSource#getLayers error status code: ' + jqXHR.status + ', textStatus: ' + textStatus + ', errorThrown: ' + errorThrown + ', URL: ' + url;
	            _this.logger.error(msg);
	            reject(msg);
	          }
	        });
	      });
	    }
	  }, {
	    key: '_updateLayerIndex',
	    value: function _updateLayerIndex(layers) {
	      this.logger.debug('AnnotationSource#_updateLayerIndex');
	      var state = (0, _stateStore2.default)();

	      if (!state.getObject('layerIndexMap')) {
	        (function () {
	          var map = {};
	          var count = 0;
	          layers.forEach(function (layer) {
	            map[layer['@id']] = count;
	            ++count;
	          });
	          state.setObject('layerIndexMap', count > 0 ? map : null);
	        })();
	      }
	      return layers;
	    }
	  }, {
	    key: 'getAnnotations',
	    value: function () {
	      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(options) {
	        var _this, canvasId, layerId, cache, annotations;

	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _this = this;
	                canvasId = options.canvasId;
	                layerId = options.layerId;
	                _context2.next = 5;
	                return (0, _annotationCache2.default)();

	              case 5:
	                cache = _context2.sent;
	                annotations = null;

	                if (!cache) {
	                  _context2.next = 12;
	                  break;
	                }

	                _context2.next = 10;
	                return cache.getAnnotationsPerCanvas(canvasId);

	              case 10:
	                annotations = _context2.sent;

	                this.logger.debug('AnnotationSource#getAnnotations from cache:', annotations);

	              case 12:
	                if (annotations) {
	                  _context2.next = 16;
	                  break;
	                }

	                _context2.next = 15;
	                return this._getRemoteAnnotations(canvasId).then(function (annotations) {
	                  if (cache) {
	                    cache.setAnnotationsPerCanvas(canvasId, annotations);
	                  }
	                  return annotations;
	                });

	              case 15:
	                annotations = _context2.sent;

	              case 16:

	                if (layerId) {
	                  annotations.filter(function (anno) {
	                    return anno.layerId === layerId;
	                  });
	                }
	                return _context2.abrupt('return', annotations);

	              case 18:
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
	    key: '_getRemoteAnnotations',
	    value: function _getRemoteAnnotations(canvasId) {
	      this.logger.debug('AnnotationSource#_getRemoteAnnotation canvas: ' + canvasId);
	      var _this = this;
	      return new Promise(function (resolve, reject) {
	        var url = _this.options.prefix + '/getAnnotationsViaList?canvas_id=' + encodeURIComponent(canvasId);
	        _this.logger.debug('AnnotationSource#_getRemoteAnnotations url: ', url);
	        var annotations = [];

	        jQuery.ajax({
	          url: url,
	          type: 'GET',
	          dataType: 'json',
	          contentType: 'application/json; charset=utf-8',
	          success: function success(data, textStatus, jqXHR) {
	            _this.logger.debug('AnnotationSource#_getAnnotations data: ', data);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var value = _step.value;

	                var annotation = value.annotation;
	                annotation.layerId = value.layer_id;
	                annotations.push(annotation);
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

	            resolve(annotations);
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
	      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(oaAnnotation) {
	        var _this, cache, layerId, annotation, url, request;

	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                this.logger.debug('AnnotationSource#createAnnotation oaAnnotation:', oaAnnotation);
	                _this = this;
	                _context3.next = 4;
	                return (0, _annotationCache2.default)();

	              case 4:
	                cache = _context3.sent;
	                layerId = oaAnnotation.layerId;
	                annotation = this._getAnnotationInEndpoint(oaAnnotation);
	                url = this.options.prefix + '/annotations';
	                request = {
	                  layer_id: layerId,
	                  annotation: annotation
	                };
	                return _context3.abrupt('return', new Promise(function (resolve, reject) {
	                  jQuery.ajax({
	                    url: url,
	                    type: 'POST',
	                    dataType: 'json',
	                    data: JSON.stringify(request),
	                    contentType: 'application/json; charset=utf-8',
	                    success: function success(data) {
	                      _this.logger.debug('AnnotationSource#createAnnotation creation successful on the annotation server:', data);
	                      var annotation = data;
	                      var oaAnnotation = _this._getAnnotationInOA(annotation);
	                      oaAnnotation.layerId = layerId;
	                      if (cache) {
	                        setTimeout(function () {
	                          cache.invalidateAnnotation(oaAnnotation);
	                        }, 250);
	                      }
	                      resolve(oaAnnotation);
	                    },
	                    error: function error(jqXHR, textStatus, errorThrown) {
	                      var msg = 'Failed to create annotation: ' + textStatus + ' ' + jqXHR.status + ' ' + errorThrown;
	                      _this.logger.error(msg);
	                      reject(msg);
	                    }
	                  });
	                }));

	              case 10:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function createAnnotation(_x2) {
	        return _ref3.apply(this, arguments);
	      }

	      return createAnnotation;
	    }()
	  }, {
	    key: 'updateAnnotation',
	    value: function () {
	      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(oaAnnotation) {
	        var _this, cache, annotation, url, data;

	        return regeneratorRuntime.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                _this = this;
	                _context4.next = 3;
	                return (0, _annotationCache2.default)();

	              case 3:
	                cache = _context4.sent;
	                annotation = this._getAnnotationInEndpoint(oaAnnotation);
	                url = this.options.prefix + '/annotations';
	                data = {
	                  layer_id: [oaAnnotation.layerId],
	                  annotation: annotation
	                };


	                this.logger.debug('AnnotationSource#updateAnnotation payload:', data);

	                return _context4.abrupt('return', new Promise(function (resolve, reject) {
	                  jQuery.ajax({
	                    url: url,
	                    type: 'PUT',
	                    dataType: 'json',
	                    contentType: 'application/json; charset=utf-8',
	                    data: JSON.stringify(data),
	                    success: function success(data, textStatus, jqXHR) {
	                      _this.logger.debug('AnnotationSource#updateAnnotation successful', data);
	                      data.layerId = oaAnnotation.layerId;
	                      if (cache) {
	                        cache.invalidateAnnotation(oaAnnotation);
	                      }
	                      resolve(data);
	                    },
	                    error: function error(jqXHR, textStatus, errorThrown) {
	                      var msg = 'Failed to update annotation: ' + textStatus + ' ' + jqXHR.status + ' ' + errorThrown;
	                      reject(msg);
	                    }
	                  });
	                }));

	              case 9:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this);
	      }));

	      function updateAnnotation(_x3) {
	        return _ref4.apply(this, arguments);
	      }

	      return updateAnnotation;
	    }()
	  }, {
	    key: 'deleteAnnotation',
	    value: function () {
	      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(annotationId) {
	        var _this, cache, url;

	        return regeneratorRuntime.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                this.log.debug('AnnotationSource#deleteAnnotations annotationId:', annotationId);
	                _this = this;
	                _context5.next = 4;
	                return (0, _annotationCache2.default)();

	              case 4:
	                cache = _context5.sent;
	                url = annotationId;
	                return _context5.abrupt('return', new Promise(function (resolve, reject) {
	                  jQuery.ajax({
	                    url: url,
	                    type: 'DELETE',
	                    dataType: 'json',
	                    contentType: 'application/json; charset=utf-8',
	                    success: function success(data, textStatus, jqXHR) {
	                      _this.logger.debug('AnnotationSource#deleteAnnotation success data:', data);
	                      if (cache) {
	                        cache.invalidateAnnotationId(annotationId);
	                      }
	                      resolve();
	                    },
	                    error: function error(jqXHR, textStatus, errorThrown) {
	                      var msg = 'AnnotationSource#deleteAnnotation failed for annotationId: ' + annotationId;
	                      reject(msg);
	                    }
	                  });
	                }));

	              case 7:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this);
	      }));

	      function deleteAnnotation(_x4) {
	        return _ref5.apply(this, arguments);
	      }

	      return deleteAnnotation;
	    }()
	  }, {
	    key: 'updateAnnotationListOrder',
	    value: function () {
	      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(canvasId, layerId, annoIds) {
	        var _this, cache, url, data;

	        return regeneratorRuntime.wrap(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                _this = this;
	                _context6.next = 3;
	                return (0, _annotationCache2.default)();

	              case 3:
	                cache = _context6.sent;
	                url = this.options.prefix + '/resequenceList';
	                data = {
	                  canvas_id: canvasId,
	                  layer_id: layerId,
	                  annotation_ids: annoIds
	                };
	                return _context6.abrupt('return', new Promise(function (resolve, reject) {
	                  jQuery.ajax({
	                    url: url,
	                    type: 'PUT',
	                    dataType: 'json',
	                    contentType: 'application/json; charset=utf-8',
	                    data: JSON.stringify(data),
	                    success: function success(data, textStatus, jqXHR) {
	                      _this.logger.debug('AnnotationSource#updateAnnotationListOrder successful', data);
	                      if (cache) {
	                        cache.invalidateCanvasId(canvasId);
	                      }
	                      resolve(data);
	                    },
	                    error: function error(jqXHR, textStatus, errorThrown) {
	                      var msg = 'AnnotationSource#updateAnnotation failed: ' + textStatus + ' ' + jqXHR.status + ' ' + errorThrown;
	                      _this.logger.error(msg);
	                      reject(msg);
	                    }
	                  });
	                }));

	              case 7:
	              case 'end':
	                return _context6.stop();
	            }
	          }
	        }, _callee6, this);
	      }));

	      function updateAnnotationListOrder(_x5, _x6, _x7) {
	        return _ref6.apply(this, arguments);
	      }

	      return updateAnnotationListOrder;
	    }()

	    // Convert Endpoint annotation to OA

	  }, {
	    key: '_getAnnotationInOA',
	    value: function _getAnnotationInOA(annotation) {
	      var motivation = annotation.motivation;
	      if (!(motivation instanceof Array)) {
	        if (motivation !== 'oa:commenting') {
	          this.logger.error('ERROR YaleEndpoint#getAnnotationInOA unexpected motivation value: ', motivation, ', id: ' + annotation['@id']);
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
	      oaAnnotation.endpoint = this;

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

	  return AnnotationSource;
	}();

	exports.default = AnnotationSource;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = getAnnotationCache;

	var _import = __webpack_require__(305);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getAnnotationCache() {
	  if (!instance) {
	    var cache = new AnnotationCache();
	    return cache.init();
	  } else {
	    return new Promise(function (resolve, reject) {
	      instance.isValid() ? resolve(instance) : resolve(null);
	    });
	  }
	};

	var instance = null;

	var AnnotationCache = function () {
	  function AnnotationCache() {
	    _classCallCheck(this, AnnotationCache);

	    this.logger = (0, _logger2.default)();
	    this._dbName = 'anno_cache';
	    this._valid = false;
	    this._expiresInMS = 2 * 60 * 60 * 1000; // milliseconds
	  }

	  _createClass(AnnotationCache, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	      return new Promise(function (resolve, reject) {
	        if (window.indexedDB) {
	          _this._initIndexedDb().then(function () {
	            _this._valid = true;
	            resolve(_this);
	          }).catch(function (reason) {
	            _this.logger.error('AnnotationCache#constructor promise rejected - ', reason);
	            reject(_this);
	          });
	        } else {
	          reject(_this);
	          _this.logger.info('IndexedDB is not available on this browser.');
	        }
	      });
	    }

	    /**
	     * @returns {object} a Promise
	     */

	  }, {
	    key: '_initIndexedDb',
	    value: function _initIndexedDb() {
	      var _this = this;
	      this._db = new Dexie(this._dbName).on('versionchange', function (event) {
	        _this.logger.debug('versionchange ' + event.newVersion);
	      });

	      this._db.version(1).stores({
	        layers: 'id,jsonData,timestamp',
	        annosPerCanvas: 'canvasId,jsonData,timestamp'
	      });
	      return this._db.open().catch(function (e) {
	        _this.logger.error('AnnotationCache#setupIndexDb open failed: ' + e);
	        _this._valid = false;
	      });
	    }

	    /**
	     * @returns {object} a Promise
	     */

	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this = this;
	      this.logger.debug('AnnotationCache#clear');
	      return new Dexie(this._dbName).delete().catch(function (e) {
	        _this.logger.error('AnnotationCache#clear exception: ' + e.stack);
	      });
	    }

	    /**
	     * @returns {object} a Promise
	     */

	  }, {
	    key: 'emptyTable',
	    value: function emptyTable(name) {
	      var _this = this;
	      var table = this._db.table(name);
	      return this._db.transaction('rw', table, function () {
	        table.each(function (item, cursor) {
	          _this.logger.debug('AnnotationCache#emptyTable deleting', cursor.key);
	          table.delete(cursor.key).catch(function (e) {
	            _this.logger.error('AnnotationCache#emptyTable deleting from table ' + name + ': ' + e);
	          });
	        });
	      });
	    }

	    /**
	     * @returns {object} a Promise
	     */

	  }, {
	    key: 'getLayers',
	    value: function getLayers() {
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
	      var _this = this;
	      return this.emptyTable('layers').then(function () {
	        return _this._db.layers.add({ id: 1, jsonData: layersJson }).catch(function (e) {
	          _this.logger.error('AnnotatinCache#setLayers update failed: ' + e);
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
	      var _this = this;
	      var coll = this._db.annosPerCanvas.where('canvasId').equals(canvasId).and(function (rec) {
	        var nowMS = new Date().valueOf();
	        _this.logger.debug('AnnotationCache#getAnnotationsPerCanvas expiration test: ' + (rec.timestamp > nowMS - _this._expiresInMS));
	        return rec.timestamp > nowMS - _this._expiresInMS;
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
	      var table = this._db.annosPerCanvas;
	      var coll = this._db.annosPerCanvas.where('canvasId').equals(canvasId);
	      var nowMS = new Date().valueOf();

	      if (coll.count() === 0) {
	        return table.add({ canvasId: canvasId, jsonData: data, timestamp: nowMS });
	      } else {
	        return table.put({ canvasId: canvasId, jsonData: data, timestamp: nowMS });
	      }
	    }
	  }, {
	    key: 'deleteAnnotationsPerCanvas',
	    value: function deleteAnnotationsPerCanvas(canvasId) {
	      var _this = this;
	      var table = this._db.annosPerCanvas;
	      var coll = table.where('canvasId').equals(canvasId);
	      return coll.delete().catch(function (e) {
	        _this.logger.error('AnnotationCache#deleteAnnotationsPerCanvas failed to delete canvasId: ' + canvasId);
	      });
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      return this._valid;
	    }
	  }, {
	    key: 'invalidateCanvasId',
	    value: function invalidateCanvasId(canvasId) {
	      this.logger.debug('CACHE INVALIDATED: ' + canvasId);
	      return this.deleteAnnotationsPerCanvas(canvasId);
	    }
	  }, {
	    key: 'invalidateAnnotation',
	    value: function invalidateAnnotation(annotation, annoIsNew) {
	      this.invalidateAnnotationId(annotation['@id']);
	    }
	  }, {
	    key: 'invalidateAnnotationId',
	    value: function invalidateAnnotationId(annotationId) {
	      this.logger.debug('invalidateAnnotationId: ' + annotationId);
	      var proxyMgr = (0, _miradorProxyManager2.default)();
	      var canvasIdSet = new Set();
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = proxyMgr.getAllWindowProxies()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var windowProxy = _step.value;

	          var annotations = windowProxy.getAnnotationsList();
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = annotations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var annotation = _step3.value;

	              if (annotation['@id'] === annotationId) {
	                var targetCanvasIds = _import.annoUtil.getTargetCanvasIds(annotation, {
	                  annotations: annotations });
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;

	                try {
	                  for (var _iterator4 = targetCanvasIds[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var canvasId = _step4.value;

	                    canvasIdSet.add(canvasId);
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
	        for (var _iterator2 = canvasIdSet[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _canvasId = _step2.value;

	          this.invalidateCanvasId(_canvasId);
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

	  return AnnotationCache;
	}();

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _miradorProxy = __webpack_require__(311);

	var _miradorProxy2 = _interopRequireDefault(_miradorProxy);

	var _windowProxy = __webpack_require__(313);

	var _windowProxy2 = _interopRequireDefault(_windowProxy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MiradorProxyManager = function () {
	  function MiradorProxyManager() {
	    _classCallCheck(this, MiradorProxyManager);

	    this.miradorProxies = {}; // Mirador instances
	  }

	  _createClass(MiradorProxyManager, [{
	    key: 'addMirador',
	    value: function addMirador(id, mirador) {
	      this.miradorProxies[id] = new _miradorProxy2.default(mirador);
	    }
	  }, {
	    key: 'getMiradorProxies',
	    value: function getMiradorProxies() {
	      return this.miradorProxies;
	    }
	  }, {
	    key: 'getMiradorProxy',
	    value: function getMiradorProxy(miradorId) {
	      return this.miradorProxies[miradorId];
	    }

	    /**
	     * @returns {WindowProxy[]} a list of window proxies for all windows in all Mirador instances
	     */

	  }, {
	    key: 'getAllWindowProxies',
	    value: function getAllWindowProxies() {
	      var windowProxies = [];
	      var miradorProxies = this.getMiradorProxies();

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = Object.keys(miradorProxies)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var key = _step.value;

	          var miradorProxy = miradorProxies[key];
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
	      return new _windowProxy2.default(this.getWindowById(windowId));
	    }
	  }, {
	    key: 'getWindowById',
	    value: function getWindowById(windowId) {
	      var window = null;
	      jQuery.each(this.miradorProxies, function (miradorId, miradorProxy) {
	        window = miradorProxy.getWindowById(windowId);
	        if (window) {
	          return false;
	        }
	      });
	      return window;
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
	      return Object.keys(this.miradorProxies)[0];
	    }
	  }]);

	  return MiradorProxyManager;
	}();

	var _instance = null;

	function getMiradorProxyManager() {
	  if (!_instance) {
	    _instance = new MiradorProxyManager();
	  }
	  return _instance;
	};

	exports.default = getMiradorProxyManager;


	Mirador.getMiradorProxyManager = getMiradorProxyManager; // to be called from Mirador core.

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _workspaceProxy = __webpack_require__(312);

	var _workspaceProxy2 = _interopRequireDefault(_workspaceProxy);

	var _windowProxy = __webpack_require__(313);

	var _windowProxy2 = _interopRequireDefault(_windowProxy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MiradorProxy = function () {
	  function MiradorProxy(mirador) {
	    _classCallCheck(this, MiradorProxy);

	    this.mirador = mirador;
	    this.workspaceProxy = null;
	  }

	  /*
	  getState() {
	    return this.mirador.viewer.state;
	  }*/

	  // Lazy call because workspace is set up asynchronously.


	  _createClass(MiradorProxy, [{
	    key: 'getWorkspaceProxy',
	    value: function getWorkspaceProxy() {
	      if (!this.workspaceProxy) {
	        this.workspaceProxy = new _workspaceProxy2.default(this.mirador.viewer.workspace);
	      }
	      return this.workspaceProxy;
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
	      return this.getWorkspaceProxy().getWindowById(windowId);
	    }
	  }, {
	    key: 'getFirstWindow',
	    value: function getFirstWindow() {
	      return this.getWorkspaceProxy().getWorkspace().windows[0];
	    }
	  }, {
	    key: 'getFirstWindowProxy',
	    value: function getFirstWindowProxy() {
	      return new _windowProxy2.default(this.getFirstWindow());
	    }
	  }, {
	    key: 'getEndPoint',
	    value: function getEndPoint() {
	      return this.getFirstWindowProxy().getEndPoint();
	    }
	  }, {
	    key: 'publish',
	    value: function publish() {
	      var eventEmitter = this.mirador.viewer.eventEmitter;
	      var args = Array.from(arguments);
	      eventEmitter.publish.apply(eventEmitter, args);
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe(eventName, callback) {
	      this.mirador.viewer.eventEmitter.subscribe(eventName, callback);
	    }
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(eventName) {
	      this.mirador.viewer.eventEmitter.unsubscribe(eventName);
	    }
	  }]);

	  return MiradorProxy;
	}();

	exports.default = MiradorProxy;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _windowProxy = __webpack_require__(313);

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
	      var windows = jQuery.grep(this.workspace.windows, function (window) {
	        return window.id === windowId;
	      });
	      var numWindows = windows.length;
	      if (numWindows > 1) {
	        this.logger.debug('Error MiradorProxy#getWindowById: more than one (' + numWindows + ') found for id: ' + windowId);
	      }
	      return numWindows == 1 ? windows[0] : null;
	    }
	  }]);

	  return WorkspaceProxy;
	}();

	exports.default = WorkspaceProxy;

/***/ },
/* 313 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WindowProxy = function () {
	  function WindowProxy(window) {
	    _classCallCheck(this, WindowProxy);

	    this.window = window;
	  }

	  _createClass(WindowProxy, [{
	    key: "getManifest",
	    value: function getManifest() {
	      return this.window.manifest;
	    }
	  }, {
	    key: "getCurrentCanvasId",
	    value: function getCurrentCanvasId() {
	      return this.window.canvasID;
	    }
	  }, {
	    key: "getEndPoint",
	    value: function getEndPoint() {
	      return this.window.endpoint;
	    }
	  }, {
	    key: "getCanvases",
	    value: function getCanvases() {
	      return this.window.manifest.getCanvases();
	    }
	  }, {
	    key: "getAnnotationsList",
	    value: function getAnnotationsList() {
	      return this.window.annotationsList;
	    }
	  }]);

	  return WindowProxy;
	}();

	exports.default = WindowProxy;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = getMiradorWindow;

	var _import = __webpack_require__(305);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	var _modalAlert = __webpack_require__(315);

	var _modalAlert2 = _interopRequireDefault(_modalAlert);

	var _miradorConfigBuilder = __webpack_require__(316);

	var _miradorConfigBuilder2 = _interopRequireDefault(_miradorConfigBuilder);

	var _session = __webpack_require__(319);

	var _session2 = _interopRequireDefault(_session);

	var _windowProxy = __webpack_require__(313);

	var _windowProxy2 = _interopRequireDefault(_windowProxy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getMiradorWindow() {
	  if (!_instance) {
	    _instance = new MiradorWindow();
	  }
	  return _instance;
	};

	var _instance = null;

	// JavaScript code for the browser window that embeds Mirador.

	var MiradorWindow = function () {
	  function MiradorWindow() {
	    _classCallCheck(this, MiradorWindow);
	  }

	  _createClass(MiradorWindow, [{
	    key: 'init',
	    value: function init(options) {
	      this.options = jQuery.extend({
	        mainMenu: null,
	        grid: null,
	        settings: null // settings retrieved from remote API
	      }, options);
	      this.logger = (0, _logger2.default)();
	      var miradorId = Mirador.genUUID();
	      var configOptions = jQuery.extend(this.options.settings, {
	        miradorId: miradorId,
	        defaultSettings: Mirador.DEFAULT_SETTINGS,
	        isEditor: _session2.default.isEditor()
	      });
	      this.logger.debug('MiradorWindow#init configOptions:', configOptions);
	      this._miradorConfig = this._buildMiradorConfig(configOptions);
	      this._createMirador(this._miradorConfig);
	      this._bindEvents(configOptions);
	    }
	  }, {
	    key: 'getConfig',
	    value: function getConfig() {
	      return this._miradorConfig;
	    }
	  }, {
	    key: '_createMirador',
	    value: function _createMirador(settings) {
	      this._miradorId = settings.id;
	      this.options.grid.addMiradorWindow(this._miradorId);

	      var mirador = Mirador(settings);
	      (0, _miradorProxyManager2.default)().addMirador(this._miradorId, mirador);
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
	    key: '_createAnnotationWindows',
	    value: function _createAnnotationWindows(options) {
	      this.logger.debug('MiradorWindow#_createAnnotationWindows options:', options);
	      var annotationId = options.annotationId;
	      var layerIds = options.layerIds;
	      var tocTags = options.tocTags;

	      var config = {
	        miradorId: options.miradorId,
	        windows: []
	      };

	      this.logger.debug('tocTags:', tocTags);

	      if (layerIds instanceof Array && layerIds.length > 0) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = layerIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var layerId = _step.value;

	            config.windows.push({
	              layerId: layerId,
	              annotationId: annotationId || null,
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
	      } else if (annotationId) {
	        config.windows.push({ annotationId: annotationId });
	      }

	      if (config.windows.length > 0) {
	        options.miradorProxy.publish('YM_DISPLAY_ON');
	        jQuery.publish('YM_ADD_WINDOWS', config);
	      }
	    }
	  }, {
	    key: '_bindEvents',
	    value: function _bindEvents(options) {
	      var _this = this;
	      var miradorProxy = (0, _miradorProxyManager2.default)().getMiradorProxy(options.miradorId);

	      jQuery(window).resize(function () {
	        _this.options.grid.resize();
	      });

	      miradorProxy.subscribe('ANNOTATIONS_LIST_UPDATED', function (event, params) {
	        _this.logger.debug('MiradorWindow#bindEvents received ANNOTATIONS_LIST_UPDATED');

	        if (options.tagHierarchy) {
	          var windowProxy = miradorProxy.getWindowProxyById(params.windowId);
	          var endpoint = windowProxy.getEndPoint();
	          endpoint.parseAnnotations();
	        }

	        jQuery.publish('YM_READY_TO_RELOAD_ANNO_WIN');
	      });

	      miradorProxy.subscribe('YM_ANNOWIN_ANNO_SHOW', function (event, windowId, annoId) {
	        _this.logger.debug('MiradorWindow SUB YM_ANNOWIN_ANNO_SHOW windowId: ' + windowId + ', annoId: ' + annoId);
	        _this.options.grid.showAnnotation(_this._miradorId, windowId, annoId);
	      });

	      jQuery.subscribe('YM_READY_TO_RELOAD_ANNO_WIN', function (event) {
	        // after annotations have been loaded
	        if (_this._urlOptionsProcessed) {
	          // run this function only once
	          return;
	        } else {
	          _this._urlOptionsProcessed = true;
	          _this._createAnnotationWindows({
	            miradorId: options.miradorId,
	            layerIds: options.layerIds,
	            tocTags: options.tocTags,
	            annotationId: options.annotationId,
	            miradorProxy: miradorProxy
	          });
	        }
	      });
	    }
	  }]);

	  return MiradorWindow;
	}();

/***/ },
/* 315 */
/***/ function(module, exports) {

	'use strict';

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
	    elem.html(template());
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
	    value: function show() {
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

	var template = Handlebars.compile(['Loading annotations ...'].join(''));

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _annotationSource = __webpack_require__(308);

	var _annotationSource2 = _interopRequireDefault(_annotationSource);

	var _annotationSourceFb = __webpack_require__(317);

	var _annotationSourceFb2 = _interopRequireDefault(_annotationSourceFb);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MiradorConfigBuilder = function () {
	  function MiradorConfigBuilder(options) {
	    _classCallCheck(this, MiradorConfigBuilder);

	    this.options = jQuery.extend({
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
	    this.logger = (0, _logger2.default)();
	  }

	  _createClass(MiradorConfigBuilder, [{
	    key: 'buildConfig',
	    value: function buildConfig() {
	      var config = jQuery.extend(true, {}, this.options.defaultSettings);

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
	        extension: {
	          tagHierarchy: this.options.tagHierarchy || null,
	          projectId: this.options.projectId || null,
	          firebase: this.options.firebase || null,
	          disableAuthz: this.options.disableAuthz || false
	        }
	      });

	      config.windowSettings.displayLayout = false;

	      if (!this.options.isEditor) {
	        config.windowSettings.canvasControls.annotations.annotationCreation = false;
	      }

	      this.logger.debug('MiradorConfigBuilder#buildConfig config:', config);
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

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _import = __webpack_require__(305);

	var _firebaseProxy = __webpack_require__(318);

	var _firebaseProxy2 = _interopRequireDefault(_firebaseProxy);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorWindow = __webpack_require__(314);

	var _miradorWindow2 = _interopRequireDefault(_miradorWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Implements inteface between Joosugi annotation explorer and the annotation server
	var AnnotationSourceFb = function () {
	  function AnnotationSourceFb() {
	    _classCallCheck(this, AnnotationSourceFb);

	    this.logger = (0, _logger2.default)();
	    var fbSettings = (0, _miradorWindow2.default)().getConfig().extension.firebase;
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

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _import = __webpack_require__(305);

	var _logger = __webpack_require__(300);

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

/***/ },
/* 319 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = getStateStore;

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var registeredKeys = new Set(['ANNO_CELL_FIXED', 'lastSelectedLayer', 'layerIndexMap']);

	// Holds states for the app, which will persist if local storgae is available.

	var StateStore = function () {
	  function StateStore() {
	    _classCallCheck(this, StateStore);

	    this.logger = (0, _logger2.default)();
	    this._settings = {};
	    this._localStorageAvailable = storageAvailable('localStorage');
	  }

	  _createClass(StateStore, [{
	    key: 'getString',
	    value: function getString(key) {
	      this.logger.debug('StateStore#getString', key);
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
	      this.logger.debug('StateStore#setString', key, value, this._localStorageAvailable);
	      this._checkKey(key);
	      this._settings[key] = value;
	      if (this._localStorageAvailable) {
	        localStorage.setItem(key, value);
	      }
	    }
	  }, {
	    key: 'getObject',
	    value: function getObject(key) {
	      this.logger.debug('StateStore#getObject', key);
	      this._checkKey(key);
	      var value = this.getString(key);
	      return value ? JSON.parse(value) : null;
	    }
	  }, {
	    key: 'setObject',
	    value: function setObject(key, value) {
	      this.logger.debug('StateStore#setObject', key, value);
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

/***/ },
/* 321 */
/***/ function(module, exports) {

	'use strict';

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

	var MSG_TRY_LATER = '<p>Please try again a bit later, or if problem persists, create an issue at <a class="ym_link" target="_blank" href="https://github.com/yale-web-technologies/mirador-project/issues">GitHub</a>.</p>';

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logger = __webpack_require__(300);

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
	  }
	};

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _import = __webpack_require__(305);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	var _stateStore = __webpack_require__(320);

	var _stateStore2 = _interopRequireDefault(_stateStore);

	var _layerSelector = __webpack_require__(324);

	var _layerSelector2 = _interopRequireDefault(_layerSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AnnotationEditor = function () {
	  function AnnotationEditor(options) {
	    var _jQuery$extend;

	    _classCallCheck(this, AnnotationEditor);

	    this.logger = (0, _logger2.default)();
	    this.logger.debug('AnnotationEditor#constructor options:', options);
	    jQuery.extend(this, (_jQuery$extend = {
	      windowId: null,
	      miradorDriven: false }, _defineProperty(_jQuery$extend, 'windowId', null), _defineProperty(_jQuery$extend, 'annotation', null), _defineProperty(_jQuery$extend, 'id', null), _defineProperty(_jQuery$extend, 'parent', null), _defineProperty(_jQuery$extend, 'canvasWindow', null), _defineProperty(_jQuery$extend, 'endpoint', null), _defineProperty(_jQuery$extend, 'targetAnnotation', null), _defineProperty(_jQuery$extend, 'saveCallback', null), _defineProperty(_jQuery$extend, 'cancelCallback', null), _jQuery$extend), options);

	    this._mode = options.mode; // "create", "update", or "merge"

	    this.init();
	    this.hide();
	  }

	  _createClass(AnnotationEditor, [{
	    key: 'init',
	    value: function init() {
	      this.miradorProxyManager = (0, _miradorProxyManager2.default)();
	      this.endpoint = this.endpoint || this.miradorProxyManager.getWindowProxyById(this.windowId).getEndPoint();
	      this.id = this.id || Mirador.genUUID();

	      var tagsStr = this.annotation ? _import.annoUtil.getTags(this.annotation).join(' ') : '';
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
	        var _this, header, title, layers;

	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                this.logger.debug('AnnotationEditor#reload parent:', parent);
	                _this = this;


	                parent.prepend(this.element);
	                header = this.element.find('.header');
	                title = header.find('.title');

	                this.textArea = this.element.find('textarea');
	                this.layerSelectorContainer = this.element.find('.layer_select');
	                this.layerSelector = new _layerSelector2.default({
	                  parent: this.layerSelectorContainer
	                });

	                _context.next = 10;
	                return this.endpoint.getLayers();

	              case 10:
	                layers = _context.sent;


	                this.layerSelector.init(layers).then(function () {
	                  if (_this._mode === 'create') {
	                    title.text('Create Annotation');
	                    var lastLayer = (0, _stateStore2.default)().getString('lastSelectedLayer');
	                    _this.layerSelector.val(lastLayer);
	                  } else {
	                    // update
	                    title.text('');
	                    if (_this.annotation) {
	                      _this.textArea.val(_import.annoUtil.getText(_this.annotation));
	                      if (_this.annotation.layerId) {
	                        _this.layerSelector.val(_this.annotation.layerId);
	                      }
	                    }
	                  }

	                  // Sometimes the textarea is not set up with tinymce.
	                  // Trying to see if helps to delay the call to tinymce.init.
	                  setTimeout(function () {
	                    _this.initTinyMce();
	                    _this.bindEvents();
	                  }, 0);
	                }).catch(function (reason) {
	                  _this.logger.error('ERROR AnnotationEditor#reload layerSelector.init failed - ' + reason);
	                });

	              case 12:
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
	    value: function initTinyMce(textAreaSelector) {
	      tinymce.init({
	        selector: '#' + this.id + ' textarea',
	        plugins: 'link paste',
	        menubar: false,
	        toolbar: 'bold italic fontsizeselect | bullist numlist | link | undo redo | removeformat',
	        fontsize_formats: '10px 12px 14px 16px 18px',
	        statusbar: false,
	        toolbar_items_size: 'small',
	        default_link_target: '_blank',
	        past_as_text: true, // from paste plugin
	        resize: true,
	        height: '140',
	        theme_advanced_resizing: true,
	        theme_advanced_statusbar_location: 'bottom',
	        setup: function setup(ed) {
	          ed.on('init', function () {
	            this.getDoc().body.style.fontSize = '12px';
	          });
	        }
	      });
	    }

	    // Called by Mirador core

	  }, {
	    key: 'show',
	    value: function show(selector) {
	      this.logger.debug('AnnotationEditor#show', selector);
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
	        "chars": resourceText
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
	      this.logger.debug('AnnotationEditor#createAnnotation anno:', annotation);
	      return annotation;
	    }
	  }, {
	    key: 'loadAnnotation',
	    value: function loadAnnotation(annotation) {
	      this._mode = 'merge';
	      this._loadedAnnotation = annotation;

	      // Reload the editor with the contents of the annotation
	      var content = _import.annoUtil.getText(annotation);
	      this.layerSelector.val(annotation.layerId);
	      this.getEditor().setContent(content);

	      var tags = _import.annoUtil.getTags(annotation);
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
	      jQuery.each(oaAnno.resource, function (index, value) {
	        if (value['@type'] === 'dctypes:Text') {
	          value.chars = resourceText;
	        }
	      });

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
	      this.logger.debug('AnnotationEditor#validate target anno:', this.targetAnnotation);
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
	  }]);

	  return AnnotationEditor;
	}();

	exports.default = AnnotationEditor;


	var template = Handlebars.compile(['<div class="ym_anno_editor">', '  <div class="header">', '    <span class="layer_select"></span>', '  </div>', '  <textarea></textarea>', '  <input class="tags_editor" placeholder="{{t "addTagsHere"}}…" {{#if tags}}value="{{tags}}"{{/if}}/>', '  {{#unless miradorDriven}}', '    <div class="bottom_row">', '        <button class="ym_save">Save</button>', '        <button class="ym_cancel">Cancel</button>', '      <div class="ym_float_right">', '        <i class="large caret up icon ym_vertical_dec"></i>', '        <i class="large caret down icon ym_vertical_inc"></i>', '      </div>', '    </div>', '  {{/unless}}', '</div>'].join(''));

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _stateStore = __webpack_require__(320);

	var _stateStore2 = _interopRequireDefault(_stateStore);

	var _selector = __webpack_require__(325);

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
	      var layerIndexMap = this.appState.getObject('layerIndexMap');
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
	        var layerIndexMap = _this.appState.getObject('layerIndexMap');
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

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

	    this.logger = (0, _logger2.default)();
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
	          _this.logger.debug('Selector#init onChange ', value, text, _this._skipNotify);
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
	          _this.addItem(value.label, value.value, parent);
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
	      this.values.push(value);
	      return menu;
	    }
	  }, {
	    key: 'addItem',
	    value: function addItem(options) {
	      var item = jQuery(itemTemplate({
	        label: options.label,
	        colorClass: options.colorClass
	      })).attr('data-text', options.label).attr('data-value', options.value);

	      parent = options.parent || this.element.find('.menu');
	      parent.append(item);
	    }
	  }, {
	    key: 'empty',
	    value: function empty() {
	      this.element.find('.menu').empty();
	    }
	  }, {
	    key: 'val',
	    value: function val(value, skipNotify) {
	      this.logger.debug('Selector#val', value, skipNotify);
	      var dd = this.element;
	      this._skipNotify = skipNotify || false;
	      dd.dropdown('refresh');

	      if (value === undefined) {
	        return dd.dropdown('get value');
	      } else {
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

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _import = __webpack_require__(305);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var YmAnnotationSelector = function () {
	  function YmAnnotationSelector(elem) {
	    _classCallCheck(this, YmAnnotationSelector);

	    var _this = this;

	    this.logger = (0, _logger2.default)();
	    this.elem = elem;
	    elem.modal({
	      onApprove: function onApprove(elem) {
	        _this.dfd.resolve(_this.selectedAnnotation);
	      }
	    });
	  }

	  _createClass(YmAnnotationSelector, [{
	    key: 'open',
	    value: function open(windowId) {
	      var _this = this;
	      var miradorProxyManager = (0, _miradorProxyManager2.default)();
	      var windowProxy = miradorProxyManager.getWindowProxyById(windowId);
	      var manifest = windowProxy.getManifest();

	      this.dfd = jQuery.Deferred();

	      this.currentCanvasId = windowProxy.getCurrentCanvasId();
	      this.endpoint = windowProxy.getEndPoint();

	      this.elem.html(template());
	      this.contentGrid = this.elem.find('.grid');
	      this.filtersPanel = this.elem.find('.filters');
	      this.canvasesPanel = this.elem.find('.canvases');
	      this.layersPanel = this.elem.find('.layers');
	      this.annosPanel = this.elem.find('.annos');

	      this.selectedAnnotation = null;

	      this.loadCanvases(manifest);
	      this.loadLayers();
	      this.loadAnnotations(windowProxy.getAnnotationsList());
	      this.elem.modal('show');
	      this.setDimensions();
	      setTimeout(function () {
	        _this.scrollToCurrentCanvas(windowProxy);
	      }, 500);
	      return this.dfd;
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh(options) {
	      var _this = this;

	      if (options.newCanvasId && options.newCanvasId !== options.oldCanvasId) {
	        this.refreshCanvasesPanel(options.oldCanvasId, options.newCanvasId);
	        var dfd = jQuery.Deferred();
	        this.endpoint.set('dfd', dfd);
	        this.endpoint.search({ uri: options.newCanvasId });
	        dfd.done(function (loaded) {
	          _this.loadAnnotations(_this.endpoint.annotationsList);
	        });
	      } else if (options.newLayerId && options.newLayerId !== options.oldLayerId) {
	        this.refreshLayersPanel(options.oldLayerId, options.newLayerId);
	        this.loadAnnotations(this.endpoint.annotationsList);
	      }
	    }
	  }, {
	    key: 'refreshCanvasesPanel',
	    value: function refreshCanvasesPanel(oldCanvasId, newCanvasId) {
	      var canvasElems = this.canvasesPanel.find('.canvas');
	      canvasElems.each(function (index, canvasElem) {
	        var elem = $(canvasElem);
	        var canvasId = elem.data('canvasId');
	        if (canvasId === oldCanvasId) {
	          elem.removeClass('selected');
	        }
	        if (canvasId === newCanvasId) {
	          elem.addClass('selected');
	        }
	      });
	    }
	  }, {
	    key: 'refreshLayersPanel',
	    value: function refreshLayersPanel(oldLayerId, newLayerId) {
	      var layerElems = this.layersPanel.find('.layer');

	      layerElems.each(function (index, layerElem) {
	        var elem = $(layerElem);
	        var layerId = elem.data('layerId');
	        if (layerId === oldLayerId) {
	          elem.removeClass('selected');
	        }
	        if (layerId === newLayerId) {
	          elem.addClass('selected');
	        }
	      });
	    }
	  }, {
	    key: 'refreshAnnosPanel',
	    value: function refreshAnnosPanel(oldAnnoId, newAnnoId) {
	      var annoElems = this.annosPanel.find('.anno');

	      annoElems.each(function (index, annoElem) {
	        var elem = $(annoElem);
	        var annoId = elem.data('annotation')['@id'];
	        if (annoId === oldAnnoId) {
	          elem.removeClass('selected');
	        }
	        if (annoId === newAnnoId) {
	          elem.addClass('selected');
	        }
	      });
	    }
	  }, {
	    key: 'loadCanvases',
	    value: function loadCanvases(manifest) {
	      var _this = this;
	      var canvases = manifest.getCanvases();

	      jQuery.each(canvases, function (index, canvas) {
	        _this.canvasesPanel.append(_this.createCanvasLink(canvas));
	      });
	    }
	  }, {
	    key: 'loadLayers',
	    value: function loadLayers() {
	      var _this = this;
	      var dfd = jQuery.Deferred();

	      this.endpoint.getLayers(dfd);
	      dfd.done(function (layers) {
	        _this.currentLayerId = layers[0]['@id'];
	        jQuery.each(layers, function (index, layer) {
	          _this.layersPanel.append(_this.createLayerLink(layer));
	        });
	      });
	    }
	  }, {
	    key: 'loadAnnotations',
	    value: function loadAnnotations(annotations) {
	      var _this = this;

	      this.annosPanel.empty();

	      jQuery.each(annotations, function (index, annotation) {
	        if (_import.annoUtil.isAnnoOnCanvas(annotation) && annotation.layerId === _this.currentLayerId) {
	          var elem = _this.createAnnoElem(annotation);
	          _this.annosPanel.append(elem);
	        }
	      });
	    }
	  }, {
	    key: 'createCanvasLink',
	    value: function createCanvasLink(canvas) {
	      var _this = this;
	      var canvasId = canvas['@id'];
	      var elem = jQuery('<div/>').addClass('canvas').html(canvasLinkTemplate({ label: canvas.label }));

	      elem.data('canvasId', canvasId);

	      if (canvasId === this.currentCanvasId) {
	        elem.addClass('selected');
	      }
	      elem.click(function () {
	        var oldCanvasId = _this.currentCanvasId;

	        _this.currentCanvasId = canvasId;
	        _this.refresh({
	          oldCanvasId: oldCanvasId,
	          newCanvasId: canvasId
	        });
	      });
	      return elem;
	    }
	  }, {
	    key: 'createLayerLink',
	    value: function createLayerLink(layer) {
	      var _this = this;
	      var layerId = layer['@id'];
	      var elem = jQuery('<div/>').addClass('layer').html(layerLinkTemplate({ label: layer.label }));
	      elem.data('layerId', layerId);
	      if (layerId === this.currentLayerId) {
	        elem.addClass('selected');
	      }
	      elem.click(function () {
	        var oldLayerId = _this.currentLayerId;

	        _this.currentLayerId = layerId;
	        _this.refresh({
	          oldLayerId: oldLayerId,
	          newLayerId: layerId
	        });
	      });
	      return elem;
	    }
	  }, {
	    key: 'createAnnoElem',
	    value: function createAnnoElem(annotation) {
	      var _this = this;
	      var content = _import.annoUtil.getText(annotation);
	      var html = annotationTemplate({ content: content });
	      var elem = jQuery(html).addClass('anno');

	      elem.data('annotation', annotation);

	      elem.click(function () {
	        var oldAnnoId = _this.selectedAnnotation ? _this.selectedAnnotation['@id'] : null;
	        var newAnnoId = annotation['@id'];
	        _this.selectedAnnotation = annotation;
	        _this.refreshAnnosPanel(oldAnnoId, newAnnoId);
	      });
	      return elem;
	    }
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

	      this.logger.debug('scrollToCurrentCanvas ' + canvasElems.length);

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
	  }]);

	  return YmAnnotationSelector;
	}();

	var instance = null;

	Mirador.getYmAnnotationSelector = function () {
	  if (!instance) {
	    var id = 'ym_annotation_selector';
	    var elem = jQuery('#' + id);
	    if (elem.length === 0) {
	      elem = jQuery('<div/>').attr('id', id).addClass('ui modal ym_modal ym_large_modal').appendTo(jQuery('body'));
	    }
	    instance = new YmAnnotationSelector(elem);
	  }
	  return instance;
	};

	var template = Handlebars.compile(['<div class="header">Find Annotation', '</div>', '<div class="content">', '  <div class="ui grid">', '    <div class="six wide column filters">', '      <div class="column canvases"></div>', '      <div class="column layers"></div>', '    </div>', '    <div class="ten wide column annos">', '    </div>', '  </div>', '</div>', '<div class="actions">', '  <div class="ui ok button">Select</div>', '  <div class="ui cancel button">Cancel</div>', '</div>'].join(''));

	var canvasLinkTemplate = Handlebars.compile(['<a href="#">{{label}}</a>'].join(''));

	var layerLinkTemplate = Handlebars.compile(['<a href="#">{{label}}</a>'].join(''));

	var annotationTemplate = Handlebars.compile(['<div>{{{content}}}</div>'].join(''));

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = getConfigFetcher;

	var _logger = __webpack_require__(300);

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

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	var _annotationListRenderer = __webpack_require__(329);

	var _annotationListRenderer2 = _interopRequireDefault(_annotationListRenderer);

	var _annotationWindow = __webpack_require__(330);

	var _annotationWindow2 = _interopRequireDefault(_annotationWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(rootElementId) {
	    _classCallCheck(this, _class);

	    this.logger = (0, _logger2.default)();
	    this.init(rootElementId);
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init(rootElementId) {
	      this.logger.debug('Grid#init');
	      this.element = jQuery('#' + rootElementId);
	      this.miradorProxyManager = (0, _miradorProxyManager2.default)();

	      this._annotationWindows = {};

	      this.initLayout();
	      this.bindEvents();
	    }

	    // GoldenLayout

	  }, {
	    key: 'initLayout',
	    value: function initLayout() {
	      var _this = this;
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
	          content: [/*{
	                    type: 'component',
	                    componentName: 'Mirador',
	                    componentState: { label: 'Mirador' },
	                    isClosable: false
	                    }*/]
	        }]
	      };

	      this.layout = new GoldenLayout(config, this.element);

	      this.layout.registerComponent('Mirador', function (container, componentState) {
	        var id = componentState.miradorId;
	        var template = Handlebars.compile(jQuery('#viewer_template').html());
	        container.getElement().html(template({ id: id }));
	      });

	      this.layout.registerComponent('Annotations', function (container, componentState) {
	        var id = componentState.windowId;
	        var appendTo = jQuery('<div/>').attr('id', id);
	        container.getElement().html(appendTo[0].outerHTML);
	      });

	      this.layout.on('stateChanged', function (e) {
	        _this.logger.debug('GoldenLayout stateChanged');
	        jQuery.each(_this.miradorProxyManager.getMiradorProxies(), function (key, miradorProxy) {
	          miradorProxy.publish('resizeMirador');
	        });
	        return true;
	      });

	      this.layout.init();
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.logger.debug('Grid#resize');
	      this.element.css('bottom', 0);
	      this.layout.updateSize();
	    }
	  }, {
	    key: 'addMiradorWindow',
	    value: function addMiradorWindow(miradorId) {
	      this.logger.debug('Grid#addMiradorWindow');
	      var windowId = Mirador.genUUID();
	      var itemConfig = {
	        type: 'component',
	        componentName: 'Mirador',
	        componentState: { miradorId: miradorId }
	      };
	      this.layout.root.contentItems[0].addChild(itemConfig);
	    }
	  }, {
	    key: 'addWindows',
	    value: function addWindows(config) {
	      this.logger.debug('Grid#addWindows config:', config);
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = config.windows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var windowConfig = _step.value;

	          windowConfig.miradorId = config.miradorId;
	          this.addWindow(windowConfig);
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
	    key: 'addWindow',
	    value: function addWindow(options) {
	      this.logger.debug('Grid#addWindow', options);
	      var _this = this;
	      var windowId = Mirador.genUUID();
	      var itemConfig = {
	        type: 'component',
	        componentName: 'Annotations',
	        componentState: { windowId: windowId }
	      };
	      this.layout.root.contentItems[0].addChild(itemConfig);

	      return new _annotationWindow2.default({ appendTo: jQuery('#' + windowId),
	        annotationListRenderer: new _annotationListRenderer2.default(),
	        miradorId: options.miradorId,
	        initialLayerId: options.layerId || null,
	        initialTocTags: options.tocTags || null,
	        annotationId: options.annotationId || null
	      }).then(function (window) {
	        _this._annotationWindows[windowId] = window;
	        return window;
	      }).catch(function (reason) {
	        throw reason;
	      });
	    }
	  }, {
	    key: 'bindEvents',
	    value: function bindEvents() {
	      var _this = this;

	      this.layout.on('itemDestroyed', function (item) {
	        _this.logger.debug('itemDestroyed', item);

	        if (item.componentName == 'Annotations') {
	          var windowId = item.config.componentState.windowId;
	          _this.logger.debug('Annotatin window ' + windowId);
	          delete _this._annotationWindows[windowId];
	        }
	      });

	      jQuery.subscribe('YM_ADD_WINDOW', function (event, options) {
	        _this.addWindow(options || {});
	      });

	      jQuery.subscribe('YM_ADD_WINDOWS', function (event, config) {
	        _this.logger.debug('Received YM_ADD_WINDOWS config:', config);
	        _this.addWindows(config);
	      });
	    }
	  }, {
	    key: 'showAnnotation',
	    value: function showAnnotation(miradorId, windowId, annoId) {
	      this.logger.debug('Grid#showAnnotation miradorId: ' + miradorId + ', windowId: ' + windowId + ', annoId: ' + annoId);
	      var miradorProxy = this.miradorProxyManager.getMiradorProxy(miradorId);
	      var windowProxy = miradorProxy.getWindowProxyById(windowId);
	      var annotations = windowProxy.getAnnotationsList();
	      var annotation = annotations.filter(function (anno) {
	        return anno['@id'] === annoId;
	      })[0];
	      var found = false;

	      jQuery.each(this._annotationWindows, function (key, annoWindow) {
	        var success = annoWindow.scrollToAnnotation(annoId);
	        if (success) {
	          annoWindow.highlightAnnotation(annoId);
	        }
	        found = found || success;
	      });
	      if (!found) {
	        if (annotation) {
	          this.addWindow({
	            miradorId: miradorId,
	            layerId: annotation.layerId
	          }).then(function (annoWindow) {
	            annoWindow.scrollToAnnotation(annoId);
	          }).catch(function (reason) {
	            _this.logger.error('Grid#showAnnotation addWindow failed <- ' + reason);
	          });
	        } else {
	          _this.logger.error('Grid#showAnnotation annotation not found from endpoint, id: ' + annoId);
	        }
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _import = __webpack_require__(305);

	var _annotationEditor = __webpack_require__(323);

	var _annotationEditor2 = _interopRequireDefault(_annotationEditor);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _stateStore = __webpack_require__(320);

	var _stateStore2 = _interopRequireDefault(_stateStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Generate HTML elements for the annotations to be shown in the annotation window,
	 * depending on the context.
	 */
	var AnnotationListRenderer = function () {
	  function AnnotationListRenderer() {
	    _classCallCheck(this, AnnotationListRenderer);

	    this.logger = (0, _logger2.default)();
	    this.state = (0, _stateStore2.default)();
	  }

	  /*
	   * Creates a div that contains annotation elements.
	   * @param {object} options
	   */


	  _createClass(AnnotationListRenderer, [{
	    key: 'render',
	    value: function render(options) {
	      this.logger.debug('AnnotationListRenderer#render options:', options);
	      this.layerIndexMap = this.state.getObject('layerIndexMap');
	      options.parentElem.empty();
	      if (options.toc) {
	        return this.renderWithToc(options);
	      } else {
	        return this.renderDefault(options);
	      }
	    }
	  }, {
	    key: 'renderDefault',
	    value: function renderDefault(options) {
	      this.logger.debug('AnnotationListRenderer#renderDefault options:', options);
	      var _this = this;
	      var count = 0;

	      jQuery.each(options.annotationsList, function (index, annotation) {
	        try {
	          if (options.layerId === annotation.layerId) {
	            if (options.selectedTags[0] === 'all' || options.toc.matchHierarchy(annotation, options.selectedTags)) {
	              ++count;
	              var annoElem = _this.createAnnoElem(annotation, options);
	              options.parentElem.append(annoElem);
	            }
	          }
	        } catch (e) {
	          _this.logger.error('ERROR AnnotationListRenderer#render', e);
	          throw e;
	        }
	      });
	      return count;
	    }

	    /**
	     * Consult the table of contents structure to populate the annotations list.
	     */

	  }, {
	    key: 'renderWithToc',
	    value: function renderWithToc(options) {
	      this.logger.debug('AnnotationListRenderer#renderWithToc options:', options);
	      var _this = this;

	      options.toc.walk(function (node) {
	        if (node.isRoot) {
	          return; // do nothing with root node
	        }
	        _this.appendHeader(node, options);
	        _this.appendAnnotationForTocNode(node, options);
	        _this.appendAnnotationsForChildNodes(node, options);
	      });
	      _this.appendUnattachedAnnotations(options);
	    }
	  }, {
	    key: 'appendHeader',
	    value: function appendHeader(node, options) {
	      var layerId = options.layerId;
	      var selectedTags = options.selectedTags;
	      var numChildNodes = Object.keys(node.childNodes).length;
	      var showAll = selectedTags[0] === 'all';

	      function arrayContains(a, b) {
	        if (a.length < b.length) {
	          return false;
	        }
	        for (var i = 0; i < b.length; ++i) {
	          if (a[i] !== b[i]) {
	            return false;
	          }
	        }
	        return true;
	      }

	      // We are distinguishing between leaf and non-leaf nodes to ensure
	      // only one header will show over any set of annotations.

	      // True if node is a non-leaf and there are annotations to show under the header
	      function nonLeafHasAnnotationsToShow() {
	        function hasChildAnnotationsToShow() {
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
	        return numChildNodes > 0 && ( // non-leaf
	        node.annotation && node.annotation.layerId === layerId || // the annotation for this node matches the current layer so it will show
	        hasChildAnnotationsToShow()); // there are annotations that target this non-leaf node directly
	      }

	      // True if node is a leaf and there are annotations to show under the header
	      function leafHasAnnotationsToShow() {
	        return numChildNodes === 0 && node.layerIds.has(layerId); // node is a leaf and there are annotations with matching layer
	      }

	      if ((showAll || arrayContains(node.cumulativeTags, selectedTags)) && (nonLeafHasAnnotationsToShow() || leafHasAnnotationsToShow())) {
	        var headerElem = this.createHeaderElem(node);
	        options.parentElem.append(headerElem);
	      }
	    }
	  }, {
	    key: 'appendAnnotationForTocNode',
	    value: function appendAnnotationForTocNode(node, options) {
	      var layerId = options.layerId;
	      var selectedTags = options.selectedTags;
	      var showAll = selectedTags[0] === 'all'; // show all chapters/scenes if true

	      if (node.annotation && layerId === node.annotation.layerId && (showAll || options.toc.matchHierarchy(node.annotation, selectedTags))) {
	        options.parentElem.append(this.createAnnoElem(node.annotation, options));
	      }
	    }
	  }, {
	    key: 'appendAnnotationsForChildNodes',
	    value: function appendAnnotationsForChildNodes(node, options) {
	      var _this = this;
	      var layerId = options.layerId;
	      var selectedTags = options.selectedTags;
	      var showAll = selectedTags[0] === 'all';

	      jQuery.each(node.childAnnotations, function (index, annotation) {
	        if (layerId === annotation.layerId && (showAll || options.toc.matchHierarchy(annotation, selectedTags))) {
	          options.parentElem.append(_this.createAnnoElem(annotation, options));
	        }
	      });
	    }
	  }, {
	    key: 'appendUnattachedAnnotations',
	    value: function appendUnattachedAnnotations(options) {
	      this.logger.debug('AnnotationListRenderer#appendUnattachedAnnotations');
	      var _this = this;
	      var layerId = options.layerId;
	      var showAll = options.selectedTags[0] === 'all';

	      if (showAll && options.toc.numUnassigned() > 0) {
	        (function () {
	          var unassignedHeader = jQuery(headerTemplate({ text: 'Unassigned' }));
	          var count = 0;
	          options.parentElem.append(unassignedHeader);
	          jQuery.each(options.toc.unassigned(), function (index, annotation) {
	            if (layerId === annotation.layerId) {
	              options.parentElem.append(_this.createAnnoElem(annotation, options));
	              ++count;
	            }
	          });
	          if (count === 0) {
	            unassignedHeader.hide();
	          }
	        })();
	      }
	    }
	  }, {
	    key: 'createHeaderElem',
	    value: function createHeaderElem(node) {
	      var text = node.cumulativeLabel;
	      var headerHtml = headerTemplate({ text: text });
	      return jQuery(headerHtml);
	    }
	  }, {
	    key: 'createAnnoElem',
	    value: function createAnnoElem(annotation, options) {
	      this.logger.debug('AnnotationWindow#createAnnoElem anno:', annotation);
	      var content = _import.annoUtil.getText(annotation);
	      var tags = _import.annoUtil.getTags(annotation);
	      var tagsHtml = this.getTagsHtml(tags);
	      var state = (0, _stateStore2.default)();

	      var annoHtml = annotationTemplate({
	        content: content,
	        tags: tagsHtml,
	        isEditor: options.isEditor,
	        orderable: options.isCompleteList
	      });
	      var layerIndex = this.layerIndexMap[annotation.layerId];
	      var annoElem = jQuery(annoHtml);
	      var menuBar = annoElem.find('.menu_bar');

	      annoElem.data('annotationId', annotation['@id']);
	      annoElem.find('.ui.dropdown').dropdown({ direction: 'downward' });

	      menuBar.addClass('layer_' + layerIndex % 10);
	      if (annotation.on['@type'] == 'oa:Annotation') {
	        // annotation of annotation
	        menuBar.addClass('targeting_anno');
	      } else {
	        menuBar.removeClass('targeting_anno');
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
	      var annoWin = options.annotationWindow;
	      var finalTargetAnno = _import.annoUtil.findFinalTargetAnnotation(annotation, options.annotationsList);

	      annoElem.click(function (event) {
	        _this.logger.debug('Clicked annotation:', annotation);
	        annoWin.clearHighlights();
	        annoWin.highlightAnnotation(annotation['@id']);
	        annoWin.miradorProxy.publish('ANNOTATION_FOCUSED', [annoWin.id, finalTargetAnno]);
	        jQuery.publish('ANNOTATION_FOCUSED', [annoWin.id, annotation]);
	      });

	      annoElem.find('.annotate').click(function (event) {
	        var dialogElement = jQuery('#ym_annotation_dialog');
	        var editor = new _annotationEditor2.default({
	          parent: dialogElement,
	          canvasWindow: annoWin.canvasWindow,
	          mode: 'create',
	          targetAnnotation: annotation,
	          endpoint: annoWin.endpoint,
	          saveCallback: function saveCallback(annotation) {
	            dialogElement.dialog('close');
	            annoWin.canvasWindow.annotationsList.push(annotation);
	            annoWin.miradorProxy.publish('ANNOTATIONS_LIST_UPDATED', { windowId: annoWin.canvasWindow.id, annotationsList: annoWin.canvasWindow.annotationsList });
	          },
	          cancelCallback: function cancelCallback() {
	            dialogElement.dialog('close');
	          }
	        });
	        dialogElement.dialog({
	          title: 'Create annotation',
	          modal: true,
	          draggable: true,
	          dialogClass: 'no_close',
	          width: 400
	        });
	        editor.show();
	      });

	      annoElem.find('.edit').click(function (event) {
	        var editor = new _annotationEditor2.default({
	          parent: annoElem,
	          canvasWindow: annoWin.canvasWindow,
	          mode: 'update',
	          endpoint: annoWin.endpoint,
	          annotation: annotation,
	          saveCallback: function saveCallback(annotation, content) {
	            if (annoWin.currentLayerId === annotation.layerId) {
	              var normalView = annoElem.find('.normal_view');
	              normalView.find('.content').html(content);
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
	        if (window.confirm('Do you really want to delete the annotation?')) {
	          annoWin.miradorProxy.publish('annotationDeleted.' + annoWin.canvasWindow.id, [annotation['@id']]);
	        }
	      });

	      annoElem.find('.up.icon').click(function (event) {
	        var sibling = annoElem.prev();
	        if (sibling.length > 0 && sibling.hasClass('annowin_anno')) {
	          annoWin.fadeDown(annoElem, function () {
	            annoElem.after(sibling);
	            annoWin.fadeUp(annoElem, function () {
	              annoWin.tempMenuRow.show();
	            });
	          });
	        }
	      });

	      annoElem.find('.down.icon').click(function (event) {
	        var sibling = annoElem.next();
	        if (sibling.length > 0 && sibling.hasClass('annowin_anno')) {
	          annoWin.fadeUp(annoElem, function () {
	            annoElem.before(sibling);
	            annoWin.fadeDown(annoElem, function () {
	              annoWin.tempMenuRow.show();
	            });
	          });
	        }
	      });
	    }
	  }]);

	  return AnnotationListRenderer;
	}();

	exports.default = AnnotationListRenderer;


	var annotationTemplate = Handlebars.compile(['<div class="annowin_anno">', '  <div class="normal_view">', '    {{#if isEditor}}', '      <div class="menu_bar">', '        <div class="ui text menu">', '          <div class="ui dropdown item">', '            Action<i class="dropdown icon"></i>', '            <div class="menu">', '              <div class="annotate item"><i class="fa fa-hand-o-left fa-fw"></i> Annotate</div>', '              <div class="edit item"><i class="fa fa-edit fa-fw"></i> {{t "edit"}}</div>', '              <div class="delete item"><i class="fa fa-times fa-fw"></i> {{t "delete"}}</div>', '            </div>', '          </div>', '          {{#if orderable}}', '            <div class="right menu">', '              <i class="caret down icon"></i>', '              <i class="caret up icon"></i>', '            </div>', '          {{/if}}', '        </div>', '      </div>', '    {{/if}}', '    <div class="content">{{{content}}}</div>', '    <div class="tags">{{{tags}}}</div>', '  </div>', '</div>'].join(''));

	var headerTemplate = Handlebars.compile(['<div class="annowin_group_header">{{text}}', '</div>'].join(''));

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _import = __webpack_require__(305);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	var _stateStore = __webpack_require__(320);

	var _stateStore2 = _interopRequireDefault(_stateStore);

	var _menuTagSelector = __webpack_require__(331);

	var _menuTagSelector2 = _interopRequireDefault(_menuTagSelector);

	var _layerSelector = __webpack_require__(324);

	var _layerSelector2 = _interopRequireDefault(_layerSelector);

	var _session = __webpack_require__(319);

	var _session2 = _interopRequireDefault(_session);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AnnotationWindow = function () {

	  /**
	   * @returns {Promise}
	   */
	  function AnnotationWindow(options) {
	    _classCallCheck(this, AnnotationWindow);

	    var _this = this;

	    jQuery.extend(this, {
	      id: null, // annotation window ID
	      miradorId: null,
	      appnedTo: null,
	      annotationListRenderer: null,
	      initialLayerId: null,
	      initialTocTags: null,
	      annotationId: null
	    }, options);

	    this.logger = (0, _logger2.default)();

	    return new Promise(function (resolve, reject) {
	      _this.init().then(function () {
	        resolve(_this);
	      }).catch(function (reason) {
	        var msg = 'AnnotationWindow#init failed - ' + reason;
	        throw msg;
	      });
	    });
	  }

	  /**
	   * @returns {Promise}
	   */


	  _createClass(AnnotationWindow, [{
	    key: 'init',
	    value: function () {
	      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var _this, annosToShow;

	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _this = this;
	                annosToShow = [];


	                this.miradorProxy = (0, _miradorProxyManager2.default)().getMiradorProxy(this.miradorId);
	                if (!this.id) {
	                  this.id = Mirador.genUUID();
	                }
	                this.canvasWindow = this.miradorProxy.getFirstWindow(); // window that contains the canvas for the annotations
	                this.endpoint = this.canvasWindow.endpoint;
	                _context.next = 8;
	                return this.endpoint.getAnnotationExplorer();

	              case 8:
	                this.explorer = _context.sent;

	                this.element = jQuery(template({}));
	                this.appendTo.append(this.element);
	                this.listElem = this.element.find('.annowin_list');

	                if (!this.initialLayerId && this.annotationId) {
	                  annosToShow = this.canvasWindow.annotationsList.filter(function (anno) {
	                    return anno['@id'] === _this.annotationId;
	                  });
	                  if (annosToShow.length > 0) {
	                    this.initialLayerId = annosToShow[0].layerId;
	                  }
	                }

	                this.initLayerSelector();
	                this.tempMenuRow = this.element.find('.annowin_temp_row');
	                this.placeholder = this.element.find('.placeholder');
	                this.placeholder.text('Loading...').show();

	                return _context.abrupt('return', this.reload().then(function () {
	                  if (annosToShow.length > 0) {
	                    var finalTargetAnno = _import.annoUtil.findFinalTargetAnnotation(annosToShow[0], _this.canvasWindow.annotationsList);
	                    _this.highlightAnnotations(annosToShow, 'SELECTED');
	                    _this.miradorProxy.publish('ANNOTATION_FOCUSED', [_this.id, finalTargetAnno]);
	                  }
	                  _this.bindEvents();
	                }).catch(function (reason) {
	                  throw 'AnnotationWindow#init promise failed - ' + reason;
	                }));

	              case 18:
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
	    key: 'initMenuTagSelector',
	    value: function initMenuTagSelector() {
	      var _this = this;
	      if (this.menuTagSelector) {
	        this.menuTagSelector.destroy();
	      }
	      this.menuTagSelector = new _menuTagSelector2.default({
	        parent: this.element.find('.menu_tag_selector_container'),
	        annotationExplorer: this.explorer,
	        initialTags: this.initialTocTags,
	        changeCallback: function changeCallback(value, text) {
	          _this.logger.debug('Change from TOC selector: ', value);
	          _this.updateList();
	        }
	      });
	      this.initialTocTags = null;
	    }
	  }, {
	    key: 'initLayerSelector',
	    value: function initLayerSelector() {
	      var _this = this;
	      this._setCurrentLayerId(this.initialLayerId);
	      this.layerSelector = new _layerSelector2.default({
	        parent: this.element.find('.layer_selector_container'),
	        annotationExplorer: this.explorer,
	        initialLayerId: this.initialLayerId,
	        changeCallback: function changeCallback(value, text) {
	          _this.logger.debug('Change from Layer selector: ', value);
	          _this._setCurrentLayerId(value);
	          _this.updateList();
	        }
	      });
	    }
	  }, {
	    key: '_setCurrentLayerId',
	    value: function _setCurrentLayerId(layerId) {
	      this.logger.debug('AnnotationWindow#_setCurrentLayerId layerId:', layerId);
	      this.currentLayerId = layerId;
	    }
	  }, {
	    key: 'reload',
	    value: function reload() {
	      this.logger.debug('AnnotationWindow#reload');
	      var _this = this;
	      var state = (0, _stateStore2.default)();

	      this.placeholder.hide();

	      if (state.getString('ANNO_CELL_FIXED') === 'true') {
	        this.element.addClass('fixed_height_cells');
	      } else {
	        this.element.removeClass('fixed_height_cells');
	      }

	      var canvas = this.getCurrentCanvas();
	      this.element.find('.title').text(canvas.label);

	      if (this.explorer.getAnnotationToc()) {
	        this.initMenuTagSelector();
	        this.element.find('.annowin_menu_tag_row').show();
	      } else {
	        this.element.find('.annowin_menu_tag_row').hide();
	      }
	      var layersPromise = new Promise(function (resolve, reject) {
	        _this.explorer.getLayers().then(function (layers) {
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
	        if (_this.explorer.getAnnotationToc()) {
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
	    value: function updateList() {
	      this.logger.debug('AnnotationWindow#updateList');
	      var _this = this;
	      var state = (0, _stateStore2.default)();
	      var options = {};

	      options.parentElem = this.listElem;
	      options.annotationWindow = this;
	      options.isEditor = _session2.default.isEditor();
	      options.annotationsList = this.canvasWindow.annotationsList;
	      options.toc = this.explorer.getAnnotationToc();
	      options.selectedTags = ['all'];
	      if (this.explorer.getAnnotationToc()) {
	        options.selectedTags = this.menuTagSelector.val().split('|');
	      }
	      options.isCompleteList = options.selectedTags[0] === 'all'; // true if current window will show all annotations of a sortable list.
	      options.layerId = this.layerSelector.val();

	      var count = this.annotationListRenderer.render(options);

	      if (count === 0) {
	        this.placeholder.text('No annotations found.').show();
	      } else {
	        this.placeholder.hide();
	      }
	    }
	  }, {
	    key: 'getCurrentCanvas',
	    value: function getCurrentCanvas() {
	      var window = this.canvasWindow;
	      var id = window.canvasID;
	      var canvases = window.manifest.getCanvases();
	      return canvases.filter(function (canvas) {
	        return canvas['@id'] === id;
	      })[0];
	    }
	  }, {
	    key: 'highlightAnnotation',
	    value: function highlightAnnotation(annoId) {
	      this.listElem.find('.annowin_anno').each(function (index, value) {
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
	      var _this = this;
	      var klass = flag === 'TARGETING' ? 'ym_anno_targeting' : flag === 'TARGETED' ? 'ym_anno_targeted' : 'ym_anno_selected';
	      var firstMatch = true;

	      this.listElem.find('.annowin_anno').each(function (index, value) {
	        var annoElem = jQuery(value);
	        var annoId = annoElem.data('annotationId');
	        var matched = false;

	        jQuery.each(annotations, function (index, value) {
	          var targetAnnotationId = value['@id'];
	          if (annoId === targetAnnotationId) {
	            matched = true;
	            annoElem.addClass(klass);
	            if (firstMatch) {
	              _this.scrollToElem(annoElem);
	              firstMatch = false;
	            }
	          }
	        });
	        if (!matched) {
	          annoElem.removeClass(klass);
	        }
	      });
	    }
	  }, {
	    key: 'scrollToElem',
	    value: function scrollToElem(annoElem) {
	      this.logger.debug('annoElem.position().top:', annoElem.position().top);
	      this.logger.debug('element.scrollTop():' + this.element.scrollTop());

	      //this.listElem.animate({
	      this.element.animate({
	        //scrollTop: annoElem.position().top + this.listElem.scrollTop()
	        scrollTop: annoElem.position().top + this.listElem.position().top + this.element.scrollTop()
	      }, 250);
	    }
	  }, {
	    key: 'scrollToAnnotation',
	    value: function scrollToAnnotation(annoId) {
	      this.logger.debug('AnnotationWindow#scrollToAnnotation annoId: ' + annoId);
	      var _this = this;
	      var found = false;

	      this.listElem.find('.annowin_anno').each(function (index, value) {
	        var elem = jQuery(value);
	        if (elem.data('annotationId') === annoId) {
	          found = true;
	          _this.scrollToElem(elem);
	          return false;
	        }
	      });
	      return found;
	    }
	  }, {
	    key: 'clearHighlights',
	    value: function clearHighlights() {
	      this.listElem.find('.annowin_anno').each(function (index, value) {
	        jQuery(value).removeClass('annowin_targeted').removeClass('ym_anno_selected ym_anno_targeting ym_anno_targeted');
	      });
	    }
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
	    key: 'saveOrder',
	    value: function saveOrder() {
	      var _this = this;
	      var annoElems = this.listElem.find('.annowin_anno');
	      var annoIds = [];
	      jQuery.each(annoElems, function (index, value) {
	        var annoId = jQuery(value).data('annotationId');
	        annoIds.push(annoId);
	      });
	      var canvas = this.getCurrentCanvas();
	      this.endpoint.updateOrder(canvas['@id'], this.currentLayerId, annoIds, function () {
	        // success
	        _this.tempMenuRow.hide();
	      }, function () {
	        // error
	        _this.tempMenuRow.hide();
	      });
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
	    key: 'bindEvents',
	    value: function bindEvents() {
	      var _this = this;

	      this.element.find('.annowin_temp_row .ym_button').click(function (event) {
	        _this.saveOrder();
	      });

	      jQuery.subscribe('YM_READY_TO_RELOAD_ANNO_WIN', function (event) {
	        if (!_this.hasOpenEditor()) {
	          _this.reload();
	        }
	      });

	      jQuery.subscribe('ANNOTATION_FOCUSED', function (event, annoWinId, annotation) {
	        _this.logger.debug('Annotation window ' + _this.id + ' received annotation_focused event from ' + annoWinId);
	        if (annoWinId === _this.id) {
	          return;
	        }
	        _this.clearHighlights();

	        var annotationsList = _this.canvasWindow.annotationsList;
	        var layerId = _this.currentLayerId;
	        var toc = _this.explorer.getAnnotationToc();

	        if (toc) {
	          var siblings = _import.annoUtil.findTocSiblings(annotation, annotationsList, layerId, toc);
	          _this.logger.debug('AnnotationWindow SUB ANNOTATION_FOCUSED siblings:', siblings);
	          if (siblings.length > 0) {
	            _this.highlightAnnotations(siblings, 'SIBLING');
	            return;
	          }
	        }
	        var targeting = _import.annoUtil.findTargetingAnnotations(annotation, annotationsList, layerId);
	        if (targeting.length > 0) {
	          _this.highlightAnnotations(targeting, 'TARGETING');
	          return;
	        }
	        var targeted = _import.annoUtil.findTargetAnnotations(annotation, annotationsList, layerId);
	        if (targeted.length > 0) {
	          _this.highlightAnnotations(targeted, 'TARGET');
	          return;
	        }
	      });

	      jQuery.subscribe('YM_ANNO_HEIGHT_FIXED', function (event, fixedHeight) {
	        if (fixedHeight) {
	          _this.element.addClass('fixed_height_cells');
	        } else {
	          _this.element.removeClass('fixed_height_cells');
	        }
	      });

	      this.miradorProxy.subscribe('currentCanvasIDUpdated.' + this.canvasWindow.id, function (event) {
	        _this.placeholder.text('Loading...').show();
	      });
	    }
	  }]);

	  return AnnotationWindow;
	}();

	exports.default = AnnotationWindow;


	var template = Handlebars.compile(['<div class="ym_annotation_window">', '  <div class="annowin_header">', '    <div class="annowin_layer_row">', '      <span class="layer_selector_container"></span>', '    </div>', '    <div class="annowin_menu_tag_row">', '      <span class="menu_tag_selector_container"></span>', '    </div>', '    <div class="annowin_temp_row">', '      <div class="fluid ui small orange button ym_button">Click to save order</div>', '    </div>', '  </div>', '  <div class="placeholder"></div>', '  <div class="annowin_list">', '  </div>', '</div>'].join(''));

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	var _selector = __webpack_require__(325);

	var _selector2 = _interopRequireDefault(_selector);

	var _util = __webpack_require__(322);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(options) {
	    _classCallCheck(this, _class);

	    jQuery.extend(this, {
	      selector: null,
	      parent: null,
	      annotationExplorer: null,
	      changeCallback: null
	    }, options);

	    this.logger = (0, _logger2.default)();
	    this.init();
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	      this.selector = new _selector2.default({
	        appendTo: this.parent,
	        changeCallback: function changeCallback(value, text) {
	          _this.logger.debug('SELECT value: ' + value + ', text: ' + text);
	          if (typeof _this.changeCallback === 'function') {
	            _this.changeCallback(value, text);
	          }
	        }
	      });
	      return this.reload();
	    }
	  }, {
	    key: 'reload',
	    value: function reload() {
	      var _this = this;
	      var toc = this.annotationExplorer.getAnnotationToc();
	      var annoHierarchy = toc ? toc.annoHierarchy : null;

	      return new Promise(function (resolve, reject) {
	        if (!annoHierarchy) {
	          reject();
	        }
	        _this.selector.empty();

	        var layers = [];
	        var menu = _this.buildMenu(annoHierarchy);
	        _this.logger.debug('MenuTagSelector menu:', menu);

	        _this.selector.setItems(menu);

	        setTimeout(function () {
	          var value = _this.initialTags && _this.initialTags.length > 0 ? _this.initialTags.join('|') : 'all';
	          _this.selector.val(value, true);
	          resolve();
	        }, 0);
	      });
	    }
	  }, {
	    key: 'val',
	    value: function val(value, skipNotify) {
	      return this.selector.val(value, skipNotify);
	    }

	    /**
	     * node: an annoHierarchy node
	     */

	  }, {
	    key: 'buildMenu',
	    value: function buildMenu(node, parentItem) {
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
	          item.children.push(_this.buildMenu(childNode, node.isRoot ? null : item));
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
	      this.selector.destroy();
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	var _stateStore = __webpack_require__(320);

	var _stateStore2 = _interopRequireDefault(_stateStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Menu bar at the top of the Mirador-embedding window.
	var _class = function () {
	  function _class(options) {
	    _classCallCheck(this, _class);

	    jQuery.extend(this, {
	      headerElement: jQuery('#mirador_header')
	    }, options);
	    this.init();
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init() {
	      this.headerElement.html(template());
	      this.headerElement.find('.ui.dropdown').dropdown();
	      this.initAnnoHeightMenu();
	      this.bindEvents();
	    }
	  }, {
	    key: 'initAnnoHeightMenu',
	    value: function initAnnoHeightMenu() {
	      var state = (0, _stateStore2.default)();

	      this.annoHeightMenu = jQuery('#ym_menu_anno_height');
	      if (state.getString('ANNO_CELL_FIXED') === 'true') {
	        this.annoHeightMenu.find('.checkmark').show();
	      } else {
	        this.annoHeightMenu.find('.checkmark').hide();
	      }
	    }
	  }, {
	    key: 'bindEvents',
	    value: function bindEvents() {
	      var _this = this;
	      var state = (0, _stateStore2.default)();

	      jQuery('#ym_menu_add_window').click(function (event) {
	        jQuery.publish('YM_ADD_WINDOW', { miradorId: (0, _miradorProxyManager2.default)().anyId() });
	      });

	      jQuery('#ym_menu_anno_height').click(function (event) {
	        if (state.getString('ANNO_CELL_FIXED') === 'true') {
	          state.setString('ANNO_CELL_FIXED', false);
	          _this.annoHeightMenu.find('.checkmark').hide();
	          jQuery.publish('YM_ANNO_HEIGHT_FIXED', false);
	        } else {
	          state.setString('ANNO_CELL_FIXED', true);
	          _this.annoHeightMenu.find('.checkmark').show();
	          jQuery.publish('YM_ANNO_HEIGHT_FIXED', true);
	        }
	      });
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;


	var template = Handlebars.compile(['<div class="ui small menu">', '  <div class="ui dropdown item">', '    Window <i style="margin-left: 5px" class="caret down icon"></i>', '    <div class="menu">', '      <div id="ym_menu_add_window" class="item">Add annotation window</div>', '    </div>', '  </div>', '  <div class="ui dropdown item">', '    View <i style="margin-left: 5px" class="caret down icon"></i>', '    <div class="menu">', '      <div id="ym_menu_anno_height" class="item">', '        Annotation cell - fixed height', '        <i class="checkmark icon"></i>', '      </div>', '    </div>', '  </div>', '  <a target="blank" class="item" href="https://github.com/yale-web-technologies/mirador-project/wiki/User-Guide---Mirador-@Yale">Help</a>', '</div>'].join(''));

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _import = __webpack_require__(305);

	var _yaleEndpoint = __webpack_require__(304);

	var _yaleEndpoint2 = _interopRequireDefault(_yaleEndpoint);

	var _annotationEditor = __webpack_require__(323);

	var _annotationEditor2 = _interopRequireDefault(_annotationEditor);

	var _annotationSource = __webpack_require__(308);

	var _annotationSource2 = _interopRequireDefault(_annotationSource);

	var _miradorProxyManager = __webpack_require__(310);

	var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Exposes names to Mirador core.
	(function ($) {
	  $.ym = {};

	  $.YaleEndpoint = _yaleEndpoint2.default;
	  $.AnnotationEditor = _annotationEditor2.default;
	  //$.annoUtil = annoUtil;

	  /**
	    * @param {string} windowId ID of Mirador window from which this dialog is being created
	    */
	  $.ym.openAnnotationExplorer = function (windowId) {
	    return new Promise(function (resolve, reject) {
	      var windowProxy = (0, _miradorProxyManager2.default)().getWindowProxyById(windowId);
	      var endpoint = windowProxy.getEndPoint();
	      var annoSource = new _annotationSource2.default({ endpoint: endpoint });
	      var dialog = new _import.AnnotationExplorerDialog({
	        appendTo: jQuery('body'),
	        dataSource: annoSource,
	        canvases: windowProxy.getCanvases(),
	        defaultCanvasId: windowProxy.getCurrentCanvasId(),
	        onSelect: function onSelect(annotation) {
	          resolve(annotation);
	        }
	      });
	      dialog.open();
	    });
	  };
	})(Mirador);

/***/ },
/* 334 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	var _logger = __webpack_require__(300);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Separated this code out to its own file because it shouldn't run with the test.
	jQuery(document).ready(function () {
	  (0, _logger2.default)().info(window._YaleMiradorVersion);
	  if (jQuery('#ym_grid').length > 0) {
	    var app = new _app2.default({
	      rootElement: 'ym_grid',
	      dataElement: jQuery('#\\{\\{id\\}\\}')
	    });
	    app.init();
	  }
	});

/***/ }
/******/ ]);