import EventEmitter$1, { EventEmitter } from 'events';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var asyncToGenerator = _asyncToGenerator;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

/**
 * @constant {boolean} HAS_MAP_SUPPORT
 */
var HAS_MAP_SUPPORT = typeof Map === 'function';
/**
 * @constant {boolean} HAS_SET_SUPPORT
 */

var HAS_SET_SUPPORT = typeof Set === 'function';
/**
 * @constant {boolean} HAS_WEAKSET_SUPPORT
 */

var HAS_WEAKSET_SUPPORT = typeof WeakSet === 'function';

// constants
var keys = Object.keys;
/**
 * @function addObjectToCache
 *
 * @description
 * add object to cache if it is indeed an object
 *
 * @param {any} object the object to potentially add to the cache
 * @param {Object|WeakSet} cache the cache to add to
 * @returns {void}
 */

var addObjectToCache = function addObjectToCache(object, cache) {
  return object && typeof object === 'object' && cache.add(object);
};
/**
 *
 * @param {Array<Array<any>>} pairs the pairs to check in
 * @param {Array<any>} pairToMatch the pair to check if exists
 * @param {function} isEqual the equality comparator
 * @param {any} meta the meta item to pass through
 * @returns {boolean} does the pair exist in the pairs
 */

var hasPair = function hasPair(pairs, pairToMatch, isEqual, meta) {
  var pair;

  for (var index = 0; index < pairs.length; index++) {
    pair = pairs[index];

    if (isEqual(pair[0], pairToMatch[0], meta) && isEqual(pair[1], pairToMatch[1], meta)) {
      return true;
    }
  }

  return false;
};
/**
 * @function hasValue
 *
 * @description
 * does the values include the vakye passed
 *
 * @param {Array<any>} values the values to check in
 * @param {any} item the value to locate
 * @param {function} isEqual the equality comparator
 * @param {any} meta the meta item to pass through
 * @returns {boolean} does the value exist in the values
 */

var hasValue = function hasValue(values, item, isEqual, meta) {
  for (var index = 0; index < values.length; index++) {
    if (isEqual(values[index], item, meta)) {
      return true;
    }
  }

  return false;
};
/**
 * @function sameValueZeroEqual
 *
 * @description
 * are the objects passed strictly equal or both NaN
 *
 * @param {any} objectA the object to compare against
 * @param {any} objectB the object to test
 * @returns {boolean} are the objects equal by the SameValueZero principle
 */

var sameValueZeroEqual = function sameValueZeroEqual(objectA, objectB) {
  return objectA === objectB || objectA !== objectA && objectB !== objectB;
};
/**
 * @function isPlainObject
 *
 * @description
 * is the object a plain object
 *
 * @param {any} object the object to test
 * @returns {boolean} is the object a plain object
 */

var isPlainObject = function isPlainObject(object) {
  return object.constructor === Object;
};
/**
 * @function isPromiseLike
 *
 * @description
 * is the object promise-like (thenable)
 *
 * @param {any} object the object to test
 * @returns {boolean} is the object promise-like
 */

var isPromiseLike = function isPromiseLike(object) {
  return typeof object.then === 'function';
};
/**
 * @function isReactElement
 *
 * @description
 * is the object passed a react element
 *
 * @param {any} object the object to test
 * @returns {boolean} is the object a react element
 */

var isReactElement = function isReactElement(object) {
  return !!(object.$$typeof && object._store);
};
/**
 * @function getNewCache
 *
 * @description
 * get a new cache object to prevent circular references
 *
 * @returns {Object|Weakset} the new cache object
 */

var getNewCache = function getNewCache() {
  return HAS_WEAKSET_SUPPORT ? new WeakSet() : Object.create({
    _values: [],
    add: function add(value) {
      this._values.push(value);
    },
    has: function has(value) {
      return !!~this._values.indexOf(value);
    }
  });
};
/**
 * @function createCircularEqual
 *
 * @description
 * create a custom isEqual handler specific to circular objects
 *
 * @param {funtion} [isEqual] the isEqual comparator to use instead of isDeepEqual
 * @returns {function(any, any): boolean}
 */

var createCircularEqual = function createCircularEqual(isEqual) {
  return function (isDeepEqual) {
    var comparator = isEqual || isDeepEqual;
    return function (objectA, objectB, cache) {
      if (cache === void 0) {
        cache = getNewCache();
      }

      var cacheHasA = cache.has(objectA);
      var cacheHasB = cache.has(objectB);

      if (cacheHasA || cacheHasB) {
        return cacheHasA && cacheHasB;
      }

      addObjectToCache(objectA, cache);
      addObjectToCache(objectB, cache);
      return comparator(objectA, objectB, cache);
    };
  };
};
/**
 * @function toPairs
 *
 * @param {Map} map the map to convert to [key, value] pairs (entries)
 * @returns {Array<Array<*>>} the [key, value] pairs
 */

var toPairs = function toPairs(map) {
  var pairs = [];
  map.forEach(function (value, key) {
    return pairs.push([key, value]);
  });
  return pairs;
};
/**
 * @function toValues
 *
 * @param {Set} set the set to convert to values
 * @returns {Array<*>} the values
 */

var toValues = function toValues(set) {
  var values = [];
  set.forEach(function (value) {
    return values.push(value);
  });
  return values;
};
/**
 * @function areArraysEqual
 *
 * @description
 * are the arrays equal in value
 *
 * @param {Array<any>} arrayA the array to test
 * @param {Array<any>} arrayB the array to test against
 * @param {function} isEqual the comparator to determine equality
 * @param {any} meta the meta object to pass through
 * @returns {boolean} are the arrays equal
 */

var areArraysEqual = function areArraysEqual(arrayA, arrayB, isEqual, meta) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var index = 0; index < arrayA.length; index++) {
    if (!isEqual(arrayA[index], arrayB[index], meta)) {
      return false;
    }
  }

  return true;
};
/**
 * @function areMapsEqual
 *
 * @description
 * are the maps equal in value
 *
 * @param {Map} mapA the map to test
 * @param {Map} mapB the map to test against
 * @param {function} isEqual the comparator to determine equality
 * @param {any} meta the meta map to pass through
 * @returns {boolean} are the maps equal
 */

var areMapsEqual = function areMapsEqual(mapA, mapB, isEqual, meta) {
  if (mapA.size !== mapB.size) {
    return false;
  }

  var pairsA = toPairs(mapA);
  var pairsB = toPairs(mapB);

  for (var index = 0; index < pairsA.length; index++) {
    if (!hasPair(pairsB, pairsA[index], isEqual, meta) || !hasPair(pairsA, pairsB[index], isEqual, meta)) {
      return false;
    }
  }

  return true;
};
/**
 * @function areObjectsEqual
 *
 * @description
 * are the objects equal in value
 *
 * @param {Object} objectA the object to test
 * @param {Object} objectB the object to test against
 * @param {function} isEqual the comparator to determine equality
 * @param {any} meta the meta object to pass through
 * @returns {boolean} are the objects equal
 */

var areObjectsEqual = function areObjectsEqual(objectA, objectB, isEqual, meta) {
  var keysA = keys(objectA);
  var keysB = keys(objectB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var key;

  for (var index = 0; index < keysA.length; index++) {
    key = keysA[index];

    if (!hasValue(keysB, key, sameValueZeroEqual)) {
      return false;
    } // if a react element, ignore the "_owner" key because its not necessary for equality comparisons


    if (key === '_owner' && isReactElement(objectA) && isReactElement(objectB)) {
      continue;
    }

    if (!isEqual(objectA[key], objectB[key], meta)) {
      return false;
    }
  }

  return true;
};
/**
 * @function areRegExpsEqual
 *
 * @description
 * are the regExps equal in value
 *
 * @param {RegExp} regExpA the regExp to test
 * @param {RegExp} regExpB the regExp to test agains
 * @returns {boolean} are the regExps equal
 */

var areRegExpsEqual = function areRegExpsEqual(regExpA, regExpB) {
  return regExpA.source === regExpB.source && regExpA.global === regExpB.global && regExpA.ignoreCase === regExpB.ignoreCase && regExpA.multiline === regExpB.multiline && regExpA.unicode === regExpB.unicode && regExpA.sticky === regExpB.sticky && regExpA.lastIndex === regExpB.lastIndex;
};
/**
 * @function areSetsEqual
 *
 * @description
 * are the sets equal in value
 *
 * @param {Set} setA the set to test
 * @param {Set} setB the set to test against
 * @param {function} isEqual the comparator to determine equality
 * @param {any} meta the meta set to pass through
 * @returns {boolean} are the sets equal
 */

var areSetsEqual = function areSetsEqual(setA, setB, isEqual, meta) {
  if (setA.size !== setB.size) {
    return false;
  }

  var valuesA = toValues(setA);
  var valuesB = toValues(setB);

  for (var index = 0; index < valuesA.length; index++) {
    if (!hasValue(valuesB, valuesA[index], isEqual, meta) || !hasValue(valuesA, valuesB[index], isEqual, meta)) {
      return false;
    }
  }

  return true;
};

// constants
var isArray = Array.isArray;

var createComparator = function createComparator(createIsEqual) {
  // eslint-disable-next-line no-use-before-define
  var isEqual = typeof createIsEqual === 'function' ? createIsEqual(comparator) : comparator;
  /**
   * @function comparator
   *
   * @description
   * compare the value of the two objects and return true if they are equivalent in values
   *
   * @param {any} objectA the object to test against
   * @param {any} objectB the object to test
   * @param {any} [meta] an optional meta object that is passed through to all equality test calls
   * @returns {boolean} are objectA and objectB equivalent in value
   */

  function comparator(objectA, objectB, meta) {
    if (sameValueZeroEqual(objectA, objectB)) {
      return true;
    }

    var typeOfA = typeof objectA;

    if (typeOfA !== typeof objectB || typeOfA !== 'object' || !objectA || !objectB) {
      return false;
    }

    if (isPlainObject(objectA) && isPlainObject(objectB)) {
      return areObjectsEqual(objectA, objectB, isEqual, meta);
    }

    var arrayA = isArray(objectA);
    var arrayB = isArray(objectB);

    if (arrayA || arrayB) {
      return arrayA === arrayB && areArraysEqual(objectA, objectB, isEqual, meta);
    }

    var dateA = objectA instanceof Date;
    var dateB = objectB instanceof Date;

    if (dateA || dateB) {
      return dateA === dateB && sameValueZeroEqual(objectA.getTime(), objectB.getTime());
    }

    var regexpA = objectA instanceof RegExp;
    var regexpB = objectB instanceof RegExp;

    if (regexpA || regexpB) {
      return regexpA === regexpB && areRegExpsEqual(objectA, objectB);
    }

    if (isPromiseLike(objectA) || isPromiseLike(objectB)) {
      return objectA === objectB;
    }

    if (HAS_MAP_SUPPORT) {
      var mapA = objectA instanceof Map;
      var mapB = objectB instanceof Map;

      if (mapA || mapB) {
        return mapA === mapB && areMapsEqual(objectA, objectB, isEqual, meta);
      }
    }

    if (HAS_SET_SUPPORT) {
      var setA = objectA instanceof Set;
      var setB = objectB instanceof Set;

      if (setA || setB) {
        return setA === setB && areSetsEqual(objectA, objectB, isEqual, meta);
      }
    }

    return areObjectsEqual(objectA, objectB, isEqual, meta);
  }

  return comparator;
};

// comparator
var circularDeepEqual = createComparator(createCircularEqual());
var circularShallowEqual = createComparator(createCircularEqual(sameValueZeroEqual));
var deepEqual = createComparator();
var shallowEqual = createComparator(function () {
  return sameValueZeroEqual;
});

// NOTE: this list must be up-to-date with browsers listed in
// test/acceptance/useragentstrings.yml
const BROWSER_ALIASES_MAP = {
  'Amazon Silk': 'amazon_silk',
  'Android Browser': 'android',
  Bada: 'bada',
  BlackBerry: 'blackberry',
  Chrome: 'chrome',
  Chromium: 'chromium',
  Electron: 'electron',
  Epiphany: 'epiphany',
  Firefox: 'firefox',
  Focus: 'focus',
  Generic: 'generic',
  'Google Search': 'google_search',
  Googlebot: 'googlebot',
  'Internet Explorer': 'ie',
  'K-Meleon': 'k_meleon',
  Maxthon: 'maxthon',
  'Microsoft Edge': 'edge',
  'MZ Browser': 'mz',
  'NAVER Whale Browser': 'naver',
  Opera: 'opera',
  'Opera Coast': 'opera_coast',
  PhantomJS: 'phantomjs',
  Puffin: 'puffin',
  QupZilla: 'qupzilla',
  QQ: 'qq',
  QQLite: 'qqlite',
  Safari: 'safari',
  Sailfish: 'sailfish',
  'Samsung Internet for Android': 'samsung_internet',
  SeaMonkey: 'seamonkey',
  Sleipnir: 'sleipnir',
  Swing: 'swing',
  Tizen: 'tizen',
  'UC Browser': 'uc',
  Vivaldi: 'vivaldi',
  'WebOS Browser': 'webos',
  WeChat: 'wechat',
  'Yandex Browser': 'yandex',
  Roku: 'roku',
};

const BROWSER_MAP = {
  amazon_silk: 'Amazon Silk',
  android: 'Android Browser',
  bada: 'Bada',
  blackberry: 'BlackBerry',
  chrome: 'Chrome',
  chromium: 'Chromium',
  electron: 'Electron',
  epiphany: 'Epiphany',
  firefox: 'Firefox',
  focus: 'Focus',
  generic: 'Generic',
  googlebot: 'Googlebot',
  google_search: 'Google Search',
  ie: 'Internet Explorer',
  k_meleon: 'K-Meleon',
  maxthon: 'Maxthon',
  edge: 'Microsoft Edge',
  mz: 'MZ Browser',
  naver: 'NAVER Whale Browser',
  opera: 'Opera',
  opera_coast: 'Opera Coast',
  phantomjs: 'PhantomJS',
  puffin: 'Puffin',
  qupzilla: 'QupZilla',
  qq: 'QQ Browser',
  qqlite: 'QQ Browser Lite',
  safari: 'Safari',
  sailfish: 'Sailfish',
  samsung_internet: 'Samsung Internet for Android',
  seamonkey: 'SeaMonkey',
  sleipnir: 'Sleipnir',
  swing: 'Swing',
  tizen: 'Tizen',
  uc: 'UC Browser',
  vivaldi: 'Vivaldi',
  webos: 'WebOS Browser',
  wechat: 'WeChat',
  yandex: 'Yandex Browser',
};

const PLATFORMS_MAP = {
  tablet: 'tablet',
  mobile: 'mobile',
  desktop: 'desktop',
  tv: 'tv',
};

const OS_MAP = {
  WindowsPhone: 'Windows Phone',
  Windows: 'Windows',
  MacOS: 'macOS',
  iOS: 'iOS',
  Android: 'Android',
  WebOS: 'WebOS',
  BlackBerry: 'BlackBerry',
  Bada: 'Bada',
  Tizen: 'Tizen',
  Linux: 'Linux',
  ChromeOS: 'Chrome OS',
  PlayStation4: 'PlayStation 4',
  Roku: 'Roku',
};

const ENGINE_MAP = {
  EdgeHTML: 'EdgeHTML',
  Blink: 'Blink',
  Trident: 'Trident',
  Presto: 'Presto',
  Gecko: 'Gecko',
  WebKit: 'WebKit',
};

class Utils {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(regexp, ua) {
    const match = ua.match(regexp);
    return (match && match.length > 0 && match[1]) || '';
  }

  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(regexp, ua) {
    const match = ua.match(regexp);
    return (match && match.length > 1 && match[2]) || '';
  }

  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(regexp, ua, _const) {
    if (regexp.test(ua)) {
      return _const;
    }
    return void (0);
  }

  static getWindowsVersionName(version) {
    switch (version) {
      case 'NT': return 'NT';
      case 'XP': return 'XP';
      case 'NT 5.0': return '2000';
      case 'NT 5.1': return 'XP';
      case 'NT 5.2': return '2003';
      case 'NT 6.0': return 'Vista';
      case 'NT 6.1': return '7';
      case 'NT 6.2': return '8';
      case 'NT 6.3': return '8.1';
      case 'NT 10.0': return '10';
      default: return undefined;
    }
  }

  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(version) {
    const v = version.split('.').splice(0, 2).map(s => parseInt(s, 10) || 0);
    v.push(0);
    if (v[0] !== 10) return undefined;
    switch (v[1]) {
      case 5: return 'Leopard';
      case 6: return 'Snow Leopard';
      case 7: return 'Lion';
      case 8: return 'Mountain Lion';
      case 9: return 'Mavericks';
      case 10: return 'Yosemite';
      case 11: return 'El Capitan';
      case 12: return 'Sierra';
      case 13: return 'High Sierra';
      case 14: return 'Mojave';
      case 15: return 'Catalina';
      default: return undefined;
    }
  }

  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(version) {
    const v = version.split('.').splice(0, 2).map(s => parseInt(s, 10) || 0);
    v.push(0);
    if (v[0] === 1 && v[1] < 5) return undefined;
    if (v[0] === 1 && v[1] < 6) return 'Cupcake';
    if (v[0] === 1 && v[1] >= 6) return 'Donut';
    if (v[0] === 2 && v[1] < 2) return 'Eclair';
    if (v[0] === 2 && v[1] === 2) return 'Froyo';
    if (v[0] === 2 && v[1] > 2) return 'Gingerbread';
    if (v[0] === 3) return 'Honeycomb';
    if (v[0] === 4 && v[1] < 1) return 'Ice Cream Sandwich';
    if (v[0] === 4 && v[1] < 4) return 'Jelly Bean';
    if (v[0] === 4 && v[1] >= 4) return 'KitKat';
    if (v[0] === 5) return 'Lollipop';
    if (v[0] === 6) return 'Marshmallow';
    if (v[0] === 7) return 'Nougat';
    if (v[0] === 8) return 'Oreo';
    if (v[0] === 9) return 'Pie';
    return undefined;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(version) {
    return version.split('.').length;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(versionA, versionB, isLoose = false) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    const versionAPrecision = Utils.getVersionPrecision(versionA);
    const versionBPrecision = Utils.getVersionPrecision(versionB);

    let precision = Math.max(versionAPrecision, versionBPrecision);
    let lastPrecision = 0;

    const chunks = Utils.map([versionA, versionB], (version) => {
      const delta = precision - Utils.getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      const _version = version + new Array(delta + 1).join('.0');

      // 3) "9.0" -> ["000000000"", "000000009"]
      return Utils.map(_version.split('.'), chunk => new Array(20 - chunk.length).join('0') + chunk).reverse();
    });

    // adjust precision for loose comparison
    if (isLoose) {
      lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
    }

    // iterate in reverse order by reversed chunks array
    precision -= 1;
    while (precision >= lastPrecision) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }

      if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === lastPrecision) {
          // all version chunks are same
          return 0;
        }

        precision -= 1;
      } else if (chunks[0][precision] < chunks[1][precision]) {
        return -1;
      }
    }

    return undefined;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(arr, iterator) {
    const result = [];
    let i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i += 1) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(arr, predicate) {
    let i;
    let l;
    if (Array.prototype.find) {
      return Array.prototype.find.call(arr, predicate);
    }
    for (i = 0, l = arr.length; i < l; i += 1) {
      const value = arr[i];
      if (predicate(value, i)) {
        return value;
      }
    }
    return undefined;
  }

  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(obj, ...assigners) {
    const result = obj;
    let i;
    let l;
    if (Object.assign) {
      return Object.assign(obj, ...assigners);
    }
    for (i = 0, l = assigners.length; i < l; i += 1) {
      const assigner = assigners[i];
      if (typeof assigner === 'object' && assigner !== null) {
        const keys = Object.keys(assigner);
        keys.forEach((key) => {
          result[key] = assigner[key];
        });
      }
    }
    return obj;
  }

  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(browserName) {
    return BROWSER_ALIASES_MAP[browserName];
  }

  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(browserAlias) {
    return BROWSER_MAP[browserAlias] || '';
  }
}

/**
 * Browsers' descriptors
 *
 * The idea of descriptors is simple. You should know about them two simple things:
 * 1. Every descriptor has a method or property called `test` and a `describe` method.
 * 2. Order of descriptors is important.
 *
 * More details:
 * 1. Method or property `test` serves as a way to detect whether the UA string
 * matches some certain browser or not. The `describe` method helps to make a result
 * object with params that show some browser-specific things: name, version, etc.
 * 2. Order of descriptors is important because a Parser goes through them one by one
 * in course. For example, if you insert Chrome's descriptor as the first one,
 * more then a half of browsers will be described as Chrome, because they will pass
 * the Chrome descriptor's test.
 *
 * Descriptor's `test` could be a property with an array of RegExps, where every RegExp
 * will be applied to a UA string to test it whether it matches or not.
 * If a descriptor has two or more regexps in the `test` array it tests them one by one
 * with a logical sum operation. Parser stops if it has found any RegExp that matches the UA.
 *
 * Or `test` could be a method. In that case it gets a Parser instance and should
 * return true/false to get the Parser know if this browser descriptor matches the UA or not.
 */

const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;

const browsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(ua) {
      const browser = {
        name: 'Googlebot',
      };
      const version = Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(ua) {
      const browser = {
        name: 'Opera',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(ua) {
      const browser = {
        name: 'Opera',
      };
      const version = Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/SamsungBrowser/i],
    describe(ua) {
      const browser = {
        name: 'Samsung Internet for Android',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/Whale/i],
    describe(ua) {
      const browser = {
        name: 'NAVER Whale Browser',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/MZBrowser/i],
    describe(ua) {
      const browser = {
        name: 'MZ Browser',
      };
      const version = Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/focus/i],
    describe(ua) {
      const browser = {
        name: 'Focus',
      };
      const version = Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/swing/i],
    describe(ua) {
      const browser = {
        name: 'Swing',
      };
      const version = Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/coast/i],
    describe(ua) {
      const browser = {
        name: 'Opera Coast',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/yabrowser/i],
    describe(ua) {
      const browser = {
        name: 'Yandex Browser',
      };
      const version = Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/ucbrowser/i],
    describe(ua) {
      const browser = {
        name: 'UC Browser',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/Maxthon|mxios/i],
    describe(ua) {
      const browser = {
        name: 'Maxthon',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/epiphany/i],
    describe(ua) {
      const browser = {
        name: 'Epiphany',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/puffin/i],
    describe(ua) {
      const browser = {
        name: 'Puffin',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/sleipnir/i],
    describe(ua) {
      const browser = {
        name: 'Sleipnir',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/k-meleon/i],
    describe(ua) {
      const browser = {
        name: 'K-Meleon',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/micromessenger/i],
    describe(ua) {
      const browser = {
        name: 'WeChat',
      };
      const version = Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/qqbrowser/i],
    describe(ua) {
      const browser = {
        name: (/qqbrowserlite/i).test(ua) ? 'QQ Browser Lite' : 'QQ Browser',
      };
      const version = Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/msie|trident/i],
    describe(ua) {
      const browser = {
        name: 'Internet Explorer',
      };
      const version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/\sedg\//i],
    describe(ua) {
      const browser = {
        name: 'Microsoft Edge',
      };

      const version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(ua) {
      const browser = {
        name: 'Microsoft Edge',
      };

      const version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/vivaldi/i],
    describe(ua) {
      const browser = {
        name: 'Vivaldi',
      };
      const version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/seamonkey/i],
    describe(ua) {
      const browser = {
        name: 'SeaMonkey',
      };
      const version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/sailfish/i],
    describe(ua) {
      const browser = {
        name: 'Sailfish',
      };

      const version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/silk/i],
    describe(ua) {
      const browser = {
        name: 'Amazon Silk',
      };
      const version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/phantom/i],
    describe(ua) {
      const browser = {
        name: 'PhantomJS',
      };
      const version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/slimerjs/i],
    describe(ua) {
      const browser = {
        name: 'SlimerJS',
      };
      const version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const browser = {
        name: 'BlackBerry',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const browser = {
        name: 'WebOS Browser',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/bada/i],
    describe(ua) {
      const browser = {
        name: 'Bada',
      };
      const version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/tizen/i],
    describe(ua) {
      const browser = {
        name: 'Tizen',
      };
      const version = Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/qupzilla/i],
    describe(ua) {
      const browser = {
        name: 'QupZilla',
      };
      const version = Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(ua) {
      const browser = {
        name: 'Firefox',
      };
      const version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/electron/i],
    describe(ua) {
      const browser = {
        name: 'Electron',
      };
      const version = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/chromium/i],
    describe(ua) {
      const browser = {
        name: 'Chromium',
      };
      const version = Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(ua) {
      const browser = {
        name: 'Chrome',
      };
      const version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/GSA/i],
    describe(ua) {
      const browser = {
        name: 'Google Search',
      };
      const version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Android Browser */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const browser = {
        name: 'Android Browser',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(ua) {
      const browser = {
        name: 'PlayStation 4',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(ua) {
      const browser = {
        name: 'Safari',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Something else */
  {
    test: [/.*/i],
    describe(ua) {
      /* Here we try to make sure that there are explicit details about the device
       * in order to decide what regexp exactly we want to apply
       * (as there is a specific decision based on that conclusion)
       */
      const regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
      const regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
      const hasDeviceSpec = ua.search('\\(') !== -1;
      const regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
      return {
        name: Utils.getFirstMatch(regexp, ua),
        version: Utils.getSecondMatch(regexp, ua),
      };
    },
  },
];

var osParsersList = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(ua) {
      const version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
      return {
        name: OS_MAP.Roku,
        version,
      };
    },
  },

  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.WindowsPhone,
        version,
      };
    },
  },

  /* Windows */
  {
    test: [/windows /i],
    describe(ua) {
      const version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua);
      const versionName = Utils.getWindowsVersionName(version);

      return {
        name: OS_MAP.Windows,
        version,
        versionName,
      };
    },
  },

  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
    describe(ua) {
      const version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
      return {
        name: OS_MAP.iOS,
        version,
      };
    },
  },

  /* macOS */
  {
    test: [/macintosh/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, '.');
      const versionName = Utils.getMacOSVersionName(version);

      const os = {
        name: OS_MAP.MacOS,
        version,
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    },
  },

  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, '.');

      return {
        name: OS_MAP.iOS,
        version,
      };
    },
  },

  /* Android */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua);
      const versionName = Utils.getAndroidVersionName(version);
      const os = {
        name: OS_MAP.Android,
        version,
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    },
  },

  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua);
      const os = {
        name: OS_MAP.WebOS,
      };

      if (version && version.length) {
        os.version = version;
      }
      return os;
    },
  },

  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua)
        || Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua)
        || Utils.getFirstMatch(/\bbb(\d+)/i, ua);

      return {
        name: OS_MAP.BlackBerry,
        version,
      };
    },
  },

  /* Bada */
  {
    test: [/bada/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);

      return {
        name: OS_MAP.Bada,
        version,
      };
    },
  },

  /* Tizen */
  {
    test: [/tizen/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);

      return {
        name: OS_MAP.Tizen,
        version,
      };
    },
  },

  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: OS_MAP.Linux,
      };
    },
  },

  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: OS_MAP.ChromeOS,
      };
    },
  },

  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(ua) {
      const version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.PlayStation4,
        version,
      };
    },
  },
];

/*
 * Tablets go first since usually they have more specific
 * signs to detect.
 */

var platformParsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: 'bot',
        vendor: 'Google',
      };
    },
  },

  /* Huawei */
  {
    test: [/huawei/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/(can-l01)/i, ua) && 'Nova';
      const platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Huawei',
      };
      if (model) {
        platform.model = model;
      }
      return platform;
    },
  },

  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Nexus',
      };
    },
  },

  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Apple',
        model: 'iPad',
      };
    },
  },

  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Apple',
        model: 'iPad',
      };
    },
  },

  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Amazon',
        model: 'Kindle Fire HD 7',
      };
    },
  },

  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Amazon',
      };
    },
  },

  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
      };
    },
  },

  /* iPod/iPhone */
  {
    test(parser) {
      const iDevice = parser.test(/ipod|iphone/i);
      const likeIDevice = parser.test(/like (ipod|iphone)/i);
      return iDevice && !likeIDevice;
    },
    describe(ua) {
      const model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Apple',
        model,
      };
    },
  },

  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Nexus',
      };
    },
  },

  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },

  /* BlackBerry */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'blackberry';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'BlackBerry',
      };
    },
  },

  /* Bada */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'bada';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },

  /* Windows Phone */
  {
    test(parser) {
      return parser.getBrowserName() === 'windows phone';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Microsoft',
      };
    },
  },

  /* Android Tablet */
  {
    test(parser) {
      const osMajorVersion = Number(String(parser.getOSVersion()).split('.')[0]);
      return parser.getOSName(true) === 'android' && (osMajorVersion >= 3);
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
      };
    },
  },

  /* Android Mobile */
  {
    test(parser) {
      return parser.getOSName(true) === 'android';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },

  /* desktop */
  {
    test(parser) {
      return parser.getOSName(true) === 'macos';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
        vendor: 'Apple',
      };
    },
  },

  /* Windows */
  {
    test(parser) {
      return parser.getOSName(true) === 'windows';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
      };
    },
  },

  /* Linux */
  {
    test(parser) {
      return parser.getOSName(true) === 'linux';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
      };
    },
  },

  /* PlayStation 4 */
  {
    test(parser) {
      return parser.getOSName(true) === 'playstation 4';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },

  /* Roku */
  {
    test(parser) {
      return parser.getOSName(true) === 'roku';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },
];

/*
 * More specific goes first
 */
var enginesParsersList = [
  /* EdgeHTML */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'microsoft edge';
    },
    describe(ua) {
      const isBlinkBased = /\sedg\//i.test(ua);

      // return blink if it's blink-based one
      if (isBlinkBased) {
        return {
          name: ENGINE_MAP.Blink,
        };
      }

      // otherwise match the version and return EdgeHTML
      const version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);

      return {
        name: ENGINE_MAP.EdgeHTML,
        version,
      };
    },
  },

  /* Trident */
  {
    test: [/trident/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Trident,
      };

      const version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Presto */
  {
    test(parser) {
      return parser.test(/presto/i);
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Presto,
      };

      const version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Gecko */
  {
    test(parser) {
      const isGecko = parser.test(/gecko/i);
      const likeGecko = parser.test(/like gecko/i);
      return isGecko && !likeGecko;
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Gecko,
      };

      const version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: ENGINE_MAP.Blink,
      };
    },
  },

  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.WebKit,
      };

      const version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },
];

/**
 * The main class that arranges the whole parsing process.
 */
class Parser {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(UA, skipParsing = false) {
    if (UA === void (0) || UA === null || UA === '') {
      throw new Error("UserAgent parameter can't be empty");
    }

    this._ua = UA;

    /**
     * @typedef ParsedResult
     * @property {Object} browser
     * @property {String|undefined} [browser.name]
     * Browser name, like `"Chrome"` or `"Internet Explorer"`
     * @property {String|undefined} [browser.version] Browser version as a String `"12.01.45334.10"`
     * @property {Object} os
     * @property {String|undefined} [os.name] OS name, like `"Windows"` or `"macOS"`
     * @property {String|undefined} [os.version] OS version, like `"NT 5.1"` or `"10.11.1"`
     * @property {String|undefined} [os.versionName] OS name, like `"XP"` or `"High Sierra"`
     * @property {Object} platform
     * @property {String|undefined} [platform.type]
     * platform type, can be either `"desktop"`, `"tablet"` or `"mobile"`
     * @property {String|undefined} [platform.vendor] Vendor of the device,
     * like `"Apple"` or `"Samsung"`
     * @property {String|undefined} [platform.model] Device model,
     * like `"iPhone"` or `"Kindle Fire HD 7"`
     * @property {Object} engine
     * @property {String|undefined} [engine.name]
     * Can be any of this: `WebKit`, `Blink`, `Gecko`, `Trident`, `Presto`, `EdgeHTML`
     * @property {String|undefined} [engine.version] String version of the engine
     */
    this.parsedResult = {};

    if (skipParsing !== true) {
      this.parse();
    }
  }

  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }

  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(regex) {
    return regex.test(this._ua);
  }

  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};

    const browserDescriptor = Utils.find(browsersList, (_browser) => {
      if (typeof _browser.test === 'function') {
        return _browser.test(this);
      }

      if (_browser.test instanceof Array) {
        return _browser.test.some(condition => this.test(condition));
      }

      throw new Error("Browser's test function is not valid");
    });

    if (browserDescriptor) {
      this.parsedResult.browser = browserDescriptor.describe(this.getUA());
    }

    return this.parsedResult.browser;
  }

  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    if (this.parsedResult.browser) {
      return this.parsedResult.browser;
    }

    return this.parseBrowser();
  }

  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(toLowerCase) {
    if (toLowerCase) {
      return String(this.getBrowser().name).toLowerCase() || '';
    }
    return this.getBrowser().name || '';
  }


  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }

  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    if (this.parsedResult.os) {
      return this.parsedResult.os;
    }

    return this.parseOS();
  }

  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};

    const os = Utils.find(osParsersList, (_os) => {
      if (typeof _os.test === 'function') {
        return _os.test(this);
      }

      if (_os.test instanceof Array) {
        return _os.test.some(condition => this.test(condition));
      }

      throw new Error("Browser's test function is not valid");
    });

    if (os) {
      this.parsedResult.os = os.describe(this.getUA());
    }

    return this.parsedResult.os;
  }

  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(toLowerCase) {
    const { name } = this.getOS();

    if (toLowerCase) {
      return String(name).toLowerCase() || '';
    }

    return name || '';
  }

  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }

  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    if (this.parsedResult.platform) {
      return this.parsedResult.platform;
    }

    return this.parsePlatform();
  }

  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(toLowerCase = false) {
    const { type } = this.getPlatform();

    if (toLowerCase) {
      return String(type).toLowerCase() || '';
    }

    return type || '';
  }

  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};

    const platform = Utils.find(platformParsersList, (_platform) => {
      if (typeof _platform.test === 'function') {
        return _platform.test(this);
      }

      if (_platform.test instanceof Array) {
        return _platform.test.some(condition => this.test(condition));
      }

      throw new Error("Browser's test function is not valid");
    });

    if (platform) {
      this.parsedResult.platform = platform.describe(this.getUA());
    }

    return this.parsedResult.platform;
  }

  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    if (this.parsedResult.engine) {
      return this.parsedResult.engine;
    }

    return this.parseEngine();
  }

  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(toLowerCase) {
    if (toLowerCase) {
      return String(this.getEngine().name).toLowerCase() || '';
    }
    return this.getEngine().name || '';
  }

  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};

    const engine = Utils.find(enginesParsersList, (_engine) => {
      if (typeof _engine.test === 'function') {
        return _engine.test(this);
      }

      if (_engine.test instanceof Array) {
        return _engine.test.some(condition => this.test(condition));
      }

      throw new Error("Browser's test function is not valid");
    });

    if (engine) {
      this.parsedResult.engine = engine.describe(this.getUA());
    }

    return this.parsedResult.engine;
  }

  /**
   * Parse full information about the browser
   */
  parse() {
    this.parseBrowser();
    this.parseOS();
    this.parsePlatform();
    this.parseEngine();

    return this;
  }

  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return Utils.assign({}, this.parsedResult);
  }

  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(checkTree) {
    const platformsAndOSes = {};
    let platformsAndOSCounter = 0;
    const browsers = {};
    let browsersCounter = 0;

    const allDefinitions = Object.keys(checkTree);

    allDefinitions.forEach((key) => {
      const currentDefinition = checkTree[key];
      if (typeof currentDefinition === 'string') {
        browsers[key] = currentDefinition;
        browsersCounter += 1;
      } else if (typeof currentDefinition === 'object') {
        platformsAndOSes[key] = currentDefinition;
        platformsAndOSCounter += 1;
      }
    });

    if (platformsAndOSCounter > 0) {
      const platformsAndOSNames = Object.keys(platformsAndOSes);
      const OSMatchingDefinition = Utils.find(platformsAndOSNames, name => (this.isOS(name)));

      if (OSMatchingDefinition) {
        const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);

        if (osResult !== void 0) {
          return osResult;
        }
      }

      const platformMatchingDefinition = Utils.find(
        platformsAndOSNames,
        name => (this.isPlatform(name)),
      );
      if (platformMatchingDefinition) {
        const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);

        if (platformResult !== void 0) {
          return platformResult;
        }
      }
    }

    if (browsersCounter > 0) {
      const browserNames = Object.keys(browsers);
      const matchingDefinition = Utils.find(browserNames, name => (this.isBrowser(name, true)));

      if (matchingDefinition !== void 0) {
        return this.compareVersion(browsers[matchingDefinition]);
      }
    }

    return undefined;
  }

  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(browserName, includingAlias = false) {
    const defaultBrowserName = this.getBrowserName().toLowerCase();
    let browserNameLower = browserName.toLowerCase();
    const alias = Utils.getBrowserTypeByAlias(browserNameLower);

    if (includingAlias && alias) {
      browserNameLower = alias.toLowerCase();
    }
    return browserNameLower === defaultBrowserName;
  }

  compareVersion(version) {
    let expectedResults = [0];
    let comparableVersion = version;
    let isLoose = false;

    const currentBrowserVersion = this.getBrowserVersion();

    if (typeof currentBrowserVersion !== 'string') {
      return void 0;
    }

    if (version[0] === '>' || version[0] === '<') {
      comparableVersion = version.substr(1);
      if (version[1] === '=') {
        isLoose = true;
        comparableVersion = version.substr(2);
      } else {
        expectedResults = [];
      }
      if (version[0] === '>') {
        expectedResults.push(1);
      } else {
        expectedResults.push(-1);
      }
    } else if (version[0] === '=') {
      comparableVersion = version.substr(1);
    } else if (version[0] === '~') {
      isLoose = true;
      comparableVersion = version.substr(1);
    }

    return expectedResults.indexOf(
      Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose),
    ) > -1;
  }

  isOS(osName) {
    return this.getOSName(true) === String(osName).toLowerCase();
  }

  isPlatform(platformType) {
    return this.getPlatformType(true) === String(platformType).toLowerCase();
  }

  isEngine(engineName) {
    return this.getEngineName(true) === String(engineName).toLowerCase();
  }

  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @returns {Boolean}
   */
  is(anything) {
    return this.isBrowser(anything) || this.isOS(anything) || this.isPlatform(anything);
  }

  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(anythings = []) {
    return anythings.some(anything => this.is(anything));
  }
}

/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */

/**
 * Bowser class.
 * Keep it simple as much as it can be.
 * It's supposed to work with collections of {@link Parser} instances
 * rather then solve one-instance problems.
 * All the one-instance stuff is located in Parser class.
 *
 * @class
 * @classdesc Bowser is a static object, that provides an API to the Parsers
 * @hideconstructor
 */
class Bowser {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(UA, skipParsing = false) {
    if (typeof UA !== 'string') {
      throw new Error('UserAgent should be a string');
    }
    return new Parser(UA, skipParsing);
  }

  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(UA) {
    return (new Parser(UA)).getResult();
  }

  static get BROWSER_MAP() {
    return BROWSER_MAP;
  }

  static get ENGINE_MAP() {
    return ENGINE_MAP;
  }

  static get OS_MAP() {
    return OS_MAP;
  }

  static get PLATFORMS_MAP() {
    return PLATFORMS_MAP;
  }
}

//
// external - exported from module.js
//
// meeting states
var DAILY_STATE_NEW = 'new';
var DAILY_STATE_LOADING = 'loading';
var DAILY_STATE_LOADED = 'loaded';
var DAILY_STATE_JOINING = 'joining-meeting';
var DAILY_STATE_JOINED = 'joined-meeting';
var DAILY_STATE_LEFT = 'left-meeting';
var DAILY_STATE_ERROR = 'error'; // track states

var DAILY_TRACK_STATE_BLOCKED = 'blocked';
var DAILY_TRACK_STATE_OFF = 'off';
var DAILY_TRACK_STATE_SENDABLE = 'sendable';
var DAILY_TRACK_STATE_LOADING = 'loading';
var DAILY_TRACK_STATE_INTERRUPTED = 'interrupted';
var DAILY_TRACK_STATE_PLAYABLE = 'playable'; // meeting access

var DAILY_ACCESS_UNKNOWN = 'unknown';
var DAILY_ACCESS_LEVEL_FULL = 'full';
var DAILY_ACCESS_LEVEL_LOBBY = 'lobby';
var DAILY_ACCESS_LEVEL_NONE = 'none'; // receive settings

var DAILY_RECEIVE_SETTINGS_BASE_KEY = 'base';
var DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY = '*'; // error types

var DAILY_FATAL_ERROR_EJECTED = 'ejected';
var DAILY_FATAL_ERROR_NBF_ROOM = 'nbf-room';
var DAILY_FATAL_ERROR_NBF_TOKEN = 'nbf-token';
var DAILY_FATAL_ERROR_EXP_ROOM = 'exp-room';
var DAILY_FATAL_ERROR_EXP_TOKEN = 'exp-token';
var DAILY_FATAL_ERROR_MEETING_FULL = 'meeting-full';
var DAILY_CAMERA_ERROR_CAM_IN_USE = 'cam-in-use';
var DAILY_CAMERA_ERROR_MIC_IN_USE = 'mic-in-use';
var DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE = 'cam-mic-in-use';
var DAILY_CAMERA_ERROR_PERMISSIONS = 'permissions';
var DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES = 'undefined-mediadevices';
var DAILY_CAMERA_ERROR_NOT_FOUND = 'not-found';
var DAILY_CAMERA_ERROR_CONSTRAINTS = 'constraints';
var DAILY_CAMERA_ERROR_UNKNOWN = 'unknown'; // events

var DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG = 'iframe-ready-for-launch-config';
var DAILY_EVENT_IFRAME_LAUNCH_CONFIG = 'iframe-launch-config';
var DAILY_EVENT_THEME_UPDATED = 'theme-updated';
var DAILY_EVENT_LOADING = 'loading';
var DAILY_EVENT_LOAD_ATTEMPT_FAILED = 'load-attempt-failed';
var DAILY_EVENT_LOADED = 'loaded';
var DAILY_EVENT_STARTED_CAMERA = 'started-camera';
var DAILY_EVENT_CAMERA_ERROR = 'camera-error';
var DAILY_EVENT_JOINING_MEETING = 'joining-meeting';
var DAILY_EVENT_JOINED_MEETING = 'joined-meeting';
var DAILY_EVENT_LEFT_MEETING = 'left-meeting';
var DAILY_EVENT_AVAILABLE_DEVICES_UPDATED = 'available-devices-updated';
var DAILY_EVENT_SELECTED_DEVICES_UPDATED = 'selected-devices-updated';
var DAILY_EVENT_PARTICIPANT_JOINED = 'participant-joined';
var DAILY_EVENT_PARTICIPANT_UPDATED = 'participant-updated';
var DAILY_EVENT_PARTICIPANT_LEFT = 'participant-left';
var DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED = 'participant-counts-updated';
var DAILY_EVENT_ACCESS_STATE_UPDATED = 'access-state-updated';
var DAILY_EVENT_MEETING_SESSION_UPDATED = 'meeting-session-updated';
var DAILY_EVENT_MEETING_SESSION_STATE_UPDATED = 'meeting-session-state-updated';
var DAILY_EVENT_MEETING_SESSION_DATA_ERROR = 'meeting-session-data-error';
var DAILY_EVENT_WAITING_PARTICIPANT_ADDED = 'waiting-participant-added';
var DAILY_EVENT_WAITING_PARTICIPANT_UPDATED = 'waiting-participant-updated';
var DAILY_EVENT_WAITING_PARTICIPANT_REMOVED = 'waiting-participant-removed';
var DAILY_EVENT_TRACK_STARTED = 'track-started';
var DAILY_EVENT_TRACK_STOPPED = 'track-stopped';
var DAILY_EVENT_TRANSCRIPTION_STARTED = 'transcription-started';
var DAILY_EVENT_TRANSCRIPTION_STOPPED = 'transcription-stopped';
var DAILY_EVENT_TRANSCRIPTION_ERROR = 'transcription-error';
var DAILY_EVENT_RECORDING_STARTED = 'recording-started';
var DAILY_EVENT_RECORDING_STOPPED = 'recording-stopped';
var DAILY_EVENT_RECORDING_STATS = 'recording-stats';
var DAILY_EVENT_RECORDING_ERROR = 'recording-error';
var DAILY_EVENT_RECORDING_UPLOAD_COMPLETED = 'recording-upload-completed';
var DAILY_EVENT_RECORDING_DATA = 'recording-data';
var DAILY_EVENT_APP_MSG = 'app-message';
var DAILY_EVENT_INPUT_EVENT = 'input-event';
var DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED = 'remote-media-player-started';
var DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED = 'remote-media-player-updated';
var DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED = 'remote-media-player-stopped';
var DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED = 'local-screen-share-started';
var DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED = 'local-screen-share-stopped';
var DAILY_EVENT_ACTIVE_SPEAKER_CHANGE = 'active-speaker-change';
var DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE = 'active-speaker-mode-change';
var DAILY_EVENT_NETWORK_QUALITY_CHANGE = 'network-quality-change';
var DAILY_EVENT_NETWORK_CONNECTION = 'network-connection';
var DAILY_EVENT_FULLSCREEN = 'fullscreen';
var DAILY_EVENT_EXIT_FULLSCREEN = 'exited-fullscreen';
var DAILY_EVENT_LIVE_STREAMING_STARTED = 'live-streaming-started';
var DAILY_EVENT_LIVE_STREAMING_STOPPED = 'live-streaming-stopped';
var DAILY_EVENT_LIVE_STREAMING_ERROR = 'live-streaming-error';
var DAILY_EVENT_LANG_UPDATED = 'lang-updated';
var DAILY_EVENT_SHOW_LOCAL_VIDEO_CHANGED = 'show-local-video-changed';
var DAILY_EVENT_RECEIVE_SETTINGS_UPDATED = 'receive-settings-updated';
var DAILY_EVENT_INPUT_SETTINGS_UPDATED = 'input-settings-updated';
var DAILY_EVENT_NONFATAL_ERROR = 'nonfatal-error';
var DAILY_EVENT_ERROR = 'error';
var DAILY_EVENT_CUSTOM_BUTTON_CLICK = 'custom-button-click'; //
// internal
//

var MAX_APP_MSG_SIZE = 1024 * 4;
var MAX_SESSION_DATA_SIZE = 1024 * 4 * 25;
var MAX_USER_DATA_SIZE = 1024 * 4;
var IFRAME_MESSAGE_MARKER = 'iframe-call-message';
var DAILY_METHOD_UPDATE_CUSTOM_INTEGRATIONS = 'update-custom-integrations';
var DAILY_METHOD_UPDATE_CUSTOM_TRAY_BUTTONS = 'update-custom-tray-buttons';
var DAILY_METHOD_SET_THEME = 'set-theme';
var DAILY_METHOD_START_CAMERA = 'start-camera';
var DAILY_METHOD_SET_INPUT_DEVICES = 'set-input-devices';
var DAILY_METHOD_SET_OUTPUT_DEVICE = 'set-output-device';
var DAILY_METHOD_GET_INPUT_DEVICES = 'get-input-devices';
var DAILY_METHOD_JOIN = 'join-meeting';
var DAILY_METHOD_LEAVE = 'leave-meeting';
var DAILY_METHOD_UPDATE_PARTICIPANT = 'update-participant';
var DAILY_METHOD_UPDATE_PARTICIPANTS = 'update-participants';
var DAILY_METHOD_LOCAL_AUDIO = 'local-audio';
var DAILY_METHOD_LOCAL_VIDEO = 'local-video';
var DAILY_METHOD_START_SCREENSHARE = 'local-screen-start';
var DAILY_METHOD_STOP_SCREENSHARE = 'local-screen-stop';
var DAILY_METHOD_START_RECORDING = 'local-recording-start';
var DAILY_METHOD_UPDATE_RECORDING = 'daily-method-update-recording';
var DAILY_METHOD_STOP_RECORDING = 'local-recording-stop';
var DAILY_METHOD_LOAD_CSS = 'load-css';
var DAILY_METHOD_SET_BANDWIDTH = 'set-bandwidth';
var DAILY_METHOD_GET_CALC_STATS = 'get-calc-stats';
var DAILY_METHOD_ENUMERATE_DEVICES = 'enumerate-devices';
var DAILY_METHOD_CYCLE_CAMERA = 'cycle-camera';
var DAILY_METHOD_SET_CAMERA = 'set-camera';
var DAILY_METHOD_START_CUSTOM_TRACK = 'start-custom-track';
var DAILY_METHOD_STOP_CUSTOM_TRACK = 'stop-custom-track';
var DAILY_METHOD_CYCLE_MIC = 'cycle-mic';
var DAILY_METHOD_GET_CAMERA_FACING_MODE = 'get-camera-facing-mode';
var DAILY_METHOD_APP_MSG = 'app-msg';
var DAILY_METHOD_ADD_FAKE_PARTICIPANT = 'add-fake-participant';
var DAILY_METHOD_SET_SHOW_NAMES = 'set-show-names';
var DAILY_METHOD_SET_SHOW_LOCAL_VIDEO = 'set-show-local-video';
var DAILY_METHOD_SET_SHOW_PARTICIPANTS_BAR = 'set-show-participants-bar';
var DAILY_METHOD_SET_ACTIVE_SPEAKER_MODE = 'set-active-speaker-mode';
var DAILY_METHOD_REGISTER_INPUT_HANDLER = 'register-input-handler';
var DAILY_METHOD_GET_LANG = 'get-daily-lang';
var DAILY_METHOD_SET_LANG = 'set-daily-lang';
var DAILY_METHOD_GET_MEETING_SESSION = 'get-meeting-session';
var DAILY_METHOD_SET_SESSION_DATA = 'set-session-data';
var DAILY_METHOD_SET_USER_NAME = 'set-user-name';
var DAILY_METHOD_SET_USER_DATA = 'set-user-data';
var DAILY_METHOD_DETECT_ALL_FACES = 'detect-all-faces';
var DAILY_METHOD_ROOM = 'lib-room-info';
var DAILY_METHOD_GET_NETWORK_TOPOLOGY = 'get-network-topology';
var DAILY_METHOD_SET_NETWORK_TOPOLOGY = 'set-network-topology';
var DAILY_METHOD_SET_PLAY_DING = 'daily-method-set-play-ding';
var DAILY_METHOD_SET_SUBSCRIBE_TO_TRACKS_AUTOMATICALLY = 'daily-method-subscribe-to-tracks-automatically';
var DAILY_METHOD_START_LIVE_STREAMING = 'daily-method-start-live-streaming';
var DAILY_METHOD_UPDATE_LIVE_STREAMING = 'daily-method-update-live-streaming';
var DAILY_METHOD_UPDATE_LIVE_STREAMING_ENDPOINTS = 'daily-method-update-live-streaming-endpoints';
var DAILY_METHOD_STOP_LIVE_STREAMING = 'daily-method-stop-live-streaming';
var DAILY_METHOD_START_REMOTE_MEDIA_PLAYER = 'daily-method-start-remote-media-player';
var DAILY_METHOD_STOP_REMOTE_MEDIA_PLAYER = 'daily-method-stop-remote-media-player';
var DAILY_METHOD_UPDATE_REMOTE_MEDIA_PLAYER = 'daily-method-update-remote-media-player';
var DAILY_METHOD_START_TRANSCRIPTION = 'daily-method-start-transcription';
var DAILY_METHOD_STOP_TRANSCRIPTION = 'daily-method-stop-transcription';
var DAILY_METHOD_PREAUTH = 'daily-method-preauth';
var DAILY_METHOD_REQUEST_ACCESS = 'daily-method-request-access';
var DAILY_METHOD_UPDATE_WAITING_PARTICIPANT = 'daily-method-update-waiting-participant';
var DAILY_METHOD_UPDATE_WAITING_PARTICIPANTS = 'daily-method-update-waiting-participants';
var DAILY_METHOD_GET_SINGLE_PARTICIPANT_RECEIVE_SETTINGS = 'get-single-participant-receive-settings';
var DAILY_METHOD_UPDATE_RECEIVE_SETTINGS = 'update-receive-settings';
var DAILY_METHOD_UPDATE_INPUT_SETTINGS = 'update-input-settings';
var DAILY_CUSTOM_TRACK = 'daily-custom-track';
var DAILY_UI_REQUEST_FULLSCREEN = 'request-fullscreen';
var DAILY_UI_EXIT_FULLSCREEN = 'request-exit-fullscreen';

var DAILY_JS_VIDEO_PROCESSOR_TYPES = {
  NONE: 'none',
  BGBLUR: 'background-blur',
  BGIMAGE: 'background-image' // CUSTOM: 'custom',

};
var DAILY_JS_REMOTE_MEDIA_PLAYER_SETTING = {
  PLAY: 'play',
  PAUSE: 'pause'
};
var DAILY_PRESELECTED_BG_IMAGE_URLS_LENGTH = 10;
var DAILY_SUPPORTED_BG_IMG_TYPES = ['jpg', 'png', 'jpeg'];
var UPDATE_LIVE_STREAMING_ENDPOINTS_OP = {
  ADD_ENDPOINTS: 'add-endpoints',
  REMOVE_ENDPOINTS: 'remove-endpoints'
};

// Note: Bowser is only used for OS detection, not Browser detection
// is not defined in React Native and results in an error.
// (Actually, if it *is* defined in React Native, it's not meant for us, but
// for our customer's code; that's why we don't just simply override it globally).

function getUserAgent() {
  if (!isReactNative() && typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) {
    return window.navigator.userAgent;
  }

  return '';
}
function isReactNative() {
  return typeof navigator !== 'undefined' && navigator.product && navigator.product === 'ReactNative';
}
function isIOS() {
  var userAgent = getUserAgent();
  return !!userAgent.match(/iPad|iPhone|iPod/i);
} // Only valid if cam/mic are accessible from browser

function isUserMediaAccessible() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
} // Returns whether we should allow screen sharing from this browser.
//
// Note: technically we *could* try to support screen sharing from any browser where
// isDisplayMediaAccessible() is true (PeerToPeer.js is mostly set up to do so).
// However, limiting screen sharing to only those that support the Unified Plan SDP
// format lets us simplify code paths on the receiving end of screen shares: in order
// to check whether to always expect a single inbound video track, we simply have to
// check whether we're a browser that only supports the older Plan B SDP format (see below).
// Additionally, limiting screen sharing this way reduces our test matrix.

function isScreenSharingSupported() {
  return isDisplayMediaAccessible() && canUnifiedPlan();
}
function isFullscreenSupported() {
  if (isReactNative()) return false;
  if (!document) return false;
  var iframe = document.createElement('iframe');
  return !!iframe.requestFullscreen || !!iframe.webkitRequestFullscreen;
}
var supportedBrowsersForVideoProcessors = ['Chrome', 'Firefox'];
function isVideoProcessingSupported() {
  if (isReactNative()) return false;
  if (browserMobile_p()) return false;
  return supportedBrowsersForVideoProcessors.includes(getBrowserName());
}
function canUnifiedPlan() {
  return browserCanUnifiedPlan(getBrowserName(), getBrowserVersion());
}
function browserCanUnifiedPlan(browserName, browserVersion) {
  if (!(browserName && browserVersion)) {
    return true;
  }

  switch (browserName) {
    case 'Chrome':
      return browserVersion.major >= 75;

    case 'Safari':
      // This is the check that Apple suggests in https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/,
      // plus a workaround that was already in place here for a Safari 13.0.0 bug, forcing it into Plan B.
      return RTCRtpTransceiver.prototype.hasOwnProperty('currentDirection') && !(browserVersion.major === 13 && browserVersion.minor === 0 && browserVersion.point === 0);
    // Note: We now only support Firefox 80+ so this should always be true

    case 'Firefox':
      return browserVersion.major >= 67;
  }

  return true;
}
function browserVideoSupported_p() {
  return isUserMediaAccessible() && !browserNeedsUpgrade();
}
function isAndroidApp() {
  return getUserAgent().match(/DailyAnd\//);
}
function browserMobile_p() {
  var userAgent = getUserAgent();

  if (userAgent.match(/Mobi/) || userAgent.match(/Android/)) {
    return true;
  }

  if (isAndroidApp()) {
    return true;
  }
}
function browserNeedsUpgrade() {
  var browser = getBrowserName(),
      ua = getUserAgent(),
      version;

  if (!ua) {
    return true;
  }

  switch (browser) {
    case 'Chrome':
      // Includes Chromium-based browsers
      version = getChromeVersion();
      return version.major && version.major > 0 && version.major < 61;

    case 'Firefox':
      version = getFirefoxVersion();
      return version.major < 78;

    case 'Safari':
      version = getSafariVersion();
      return version.major < 12;

    default:
      return true;
  }
}
function getBrowserName() {
  if (typeof window !== 'undefined') {
    var userAgent = getUserAgent(); // Treat supported WKWebView as Safari. Check for this first just in case
    // 3rd-party browsers on iOS decide to customize their user agent strings to
    // match the other conditions.

    if (isSupportedIOSEnvironment()) {
      return 'Safari';
    } else if (userAgent.indexOf('Edge') > -1) {
      // Note: check will (purposefully) fail for chromium-based Edge
      // since the user-agent for chromium-based Edge reports `Edg`
      // (or EdgA (android) or EdgiOS)
      // Also note: getBrowserName is primarily used for internal
      //   logic, so this should go away eventually. However, it is used
      //   in the old prebuilt UI for some upgrade messaging so leaving
      //   it in until Edge or the old prebuilt is really no longer a thing
      return 'Edge'; // }  else if (userAgent.indexOf('OPR') > -1 ||
      //            userAgent.indexOf('Opera') > -1) {
      //   return 'Opera';
    } else if (userAgent.match(/Chrome\//)) {
      // Includes Chromium-based browsers
      return 'Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
      return 'Safari';
    } else if (userAgent.indexOf('Firefox') > -1) {
      return 'Firefox';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('.NET') > -1) {
      return 'IE';
    } else {
      return 'Unknown Browser';
    }
  }
}
function getBrowserVersion() {
  var name = getBrowserName();

  switch (name) {
    case 'Chrome':
      // Includes Chromium-based browsers
      return getChromeVersion();

    case 'Safari':
      return getSafariVersion();

    case 'Firefox':
      return getFirefoxVersion();

    case 'Edge':
      return getEdgeVersion();
  }
}
function getChromeVersion() {
  var major = 0,
      minor = 0,
      build = 0,
      patch = 0,
      opera = false;

  if (typeof window !== 'undefined') {
    var userAgent = getUserAgent(),
        match = userAgent.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);

    if (match) {
      try {
        major = parseInt(match[1]);
        minor = parseInt(match[2]);
        build = parseInt(match[3]);
        patch = parseInt(match[4]);
        opera = userAgent.indexOf('OPR/') > -1;
      } catch (e) {}
    }
  }

  return {
    major: major,
    minor: minor,
    build: build,
    patch: patch,
    opera: opera
  };
} // Mobile Safari or WKWebView on iOS/iPadOS >= 14.3

function isSupportedIOSEnvironment() {
  return isIOS() && isUserMediaAccessible();
}

function isDisplayMediaAccessible() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia);
}

function getSafariVersion() {
  var major = 0,
      minor = 0,
      point = 0;

  if (typeof window !== 'undefined') {
    var userAgent = getUserAgent(),
        match = userAgent.match(/Version\/(\d+).(\d+)(.(\d+))?/);

    if (match) {
      try {
        major = parseInt(match[1]);
        minor = parseInt(match[2]);
        point = parseInt(match[4]);
      } catch (e) {}
    } else if (isSupportedIOSEnvironment()) {
      // Hack: treat supported WKWebView like Safari 14.0.3 (no need to be
      // precise; just needs to be new enough to appear supported, and this was
      // the Safari version around the time WKWebView WebRTC support was added)
      major = 14;
      minor = 0;
      point = 3;
    }
  }

  return {
    major: major,
    minor: minor,
    point: point
  };
}

function getFirefoxVersion() {
  var major = 0,
      minor = 0;

  if (typeof window !== 'undefined') {
    var userAgent = getUserAgent(),
        match = userAgent.match(/Firefox\/(\d+).(\d+)/);

    if (match) {
      try {
        major = parseInt(match[1]);
        minor = parseInt(match[2]);
      } catch (e) {}
    }
  }

  return {
    major: major,
    minor: minor
  };
}

function getEdgeVersion() {
  var major = 0,
      minor = 0;

  if (typeof window !== 'undefined') {
    var userAgent = getUserAgent(),
        match = userAgent.match(/Edge\/(\d+).(\d+)/);

    if (match) {
      try {
        major = parseInt(match[1]);
        minor = parseInt(match[2]);
      } catch (e) {}
    }
  }

  return {
    major: major,
    minor: minor
  };
}

function randomStringId() {
  return Date.now() + Math.random().toString();
}
function notImplementedError() {
  throw new Error('Method must be implemented in subclass');
}
function callObjectBundleUrl() {
  // ADVANCED: if a custom bundle URL override is specified, use that.
  if (window._dailyConfig && window._dailyConfig.callObjectBundleUrlOverride) {
    return window._dailyConfig.callObjectBundleUrlOverride;
  } // 1. Dev build of daily-js --> load bundle from "https://khk-local.wss.daily.co:8000/static/call-machine-object-bundle.js", which
  //    is either:
  //    - DEV_CALL_MACHINE_URL env variable (read at build time)
  //    - default local dev URL
  //    See webpack or rollup config for details.
  // 2. Prod build of daily-js --> load bundle from version-specific prod URL.


  return  "https://khk-local.wss.daily.co:8000/static/call-machine-object-bundle.js" ;
}
function validateHttpUrl(string) {
  try {
    var url = new URL(string);
  } catch (_) {
    return false;
  }

  return true;
}

/**
 * A two-way message channel between daily-js and the call machine (pluot-core).
 */

var ScriptMessageChannel = /*#__PURE__*/function () {
  function ScriptMessageChannel() {
    classCallCheck(this, ScriptMessageChannel);
  }

  createClass(ScriptMessageChannel, [{
    key: "addListenerForMessagesFromCallMachine",

    /**
     * Adds a listener for messages from the call machine (pluot-core).
     * For use by daily-js.
     */
    value: function addListenerForMessagesFromCallMachine(listener, callFrameId, thisValue) {
      notImplementedError();
    }
    /**
     * Adds a listener for messages from daily-js.
     * For use by the call machine (pluot-core).
     */

  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function addListenerForMessagesFromDailyJs(listener, callFrameId, thisValue) {
      notImplementedError();
    }
    /**
     * Send a message to the call machine (pluot-core).
     * For use by daily-js.
     */

  }, {
    key: "sendMessageToCallMachine",
    value: function sendMessageToCallMachine(message, callback, iframe, callFrameId) {
      notImplementedError();
    }
    /**
     * Send a message to daily-js.
     * For use by the call machine (pluot-core).
     */

  }, {
    key: "sendMessageToDailyJs",
    value: function sendMessageToDailyJs(message, isCallObject, callFrameId) {
      notImplementedError();
    }
    /**
     * Remove an added listener.
     */

  }, {
    key: "removeListener",
    value: function removeListener(listener) {
      notImplementedError();
    }
  }]);

  return ScriptMessageChannel;
}();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * A two-way message channel between daily-js and the call machine (pluot-core),
 * when running in a web context (in a browser or Electron).
 */

var WebMessageChannel = /*#__PURE__*/function (_ScriptMessageChannel) {
  inherits(WebMessageChannel, _ScriptMessageChannel);

  var _super = _createSuper(WebMessageChannel);

  function WebMessageChannel() {
    var _this;

    classCallCheck(this, WebMessageChannel);

    _this = _super.call(this);
    _this._wrappedListeners = {}; // Mapping between listeners and wrapped listeners

    _this._messageCallbacks = {};
    return _this;
  }

  createClass(WebMessageChannel, [{
    key: "addListenerForMessagesFromCallMachine",
    value: function addListenerForMessagesFromCallMachine(listener, callFrameId, thisValue) {
      var _this2 = this;

      var wrappedListener = function wrappedListener(evt) {
        if (evt.data && evt.data.what === 'iframe-call-message' && ( // make callFrameId addressing backwards-compatible with
        // old versions of the library, which didn't have it
        evt.data.callFrameId ? evt.data.callFrameId === callFrameId : true) && (evt.data.from ? evt.data.from !== 'module' : true)) {
          var msg = _objectSpread({}, evt.data); // console.log('[WebMessageChannel] received call machine message', msg);


          delete msg.from; // messages could be completely handled by callbacks

          if (msg.callbackStamp && _this2._messageCallbacks[msg.callbackStamp]) {
            // console.log('[WebMessageChannel] handling message as callback', msg);
            var callbackStamp = msg.callbackStamp; // Storing here since the callback could delete msg.callbackStamp

            _this2._messageCallbacks[callbackStamp].call(thisValue, msg);

            delete _this2._messageCallbacks[callbackStamp];
          } // or perhaps we should handle this message based on its
          // msg.action tag. first we'll delete internal fields so the
          // listener function has the option of just emitting the raw
          // message as an event


          delete msg.what;
          delete msg.callbackStamp;
          listener.call(thisValue, msg);
        }
      };

      this._wrappedListeners[listener] = wrappedListener;
      window.addEventListener('message', wrappedListener);
    }
  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function addListenerForMessagesFromDailyJs(listener, callFrameId, thisValue) {
      var wrappedListener = function wrappedListener(evt) {
        if (!(evt.data && evt.data.what === IFRAME_MESSAGE_MARKER && evt.data.action && (!evt.data.from || evt.data.from === 'module') && (evt.data.callFrameId && callFrameId ? evt.data.callFrameId === callFrameId : true))) {
          return;
        }

        var msg = evt.data; // console.log('[WebMessageChannel] received daily-js message', msg);

        listener.call(thisValue, msg);
      };

      this._wrappedListeners[listener] = wrappedListener;
      window.addEventListener('message', wrappedListener);
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function sendMessageToCallMachine(message, callback, iframe, callFrameId) {
      var msg = _objectSpread({}, message);

      msg.what = IFRAME_MESSAGE_MARKER;
      msg.from = 'module';
      msg.callFrameId = callFrameId;

      if (callback) {
        var stamp = randomStringId();
        this._messageCallbacks[stamp] = callback;
        msg.callbackStamp = stamp;
      }

      var w = iframe ? iframe.contentWindow : window; // console.log('[WebMessageChannel] sending message to call machine', msg);

      w.postMessage(msg, '*');
    }
  }, {
    key: "sendMessageToDailyJs",
    value: function sendMessageToDailyJs(message, isCallObject, callFrameId) {
      message.what = IFRAME_MESSAGE_MARKER;
      message.callFrameId = callFrameId;
      message.from = 'embedded';
      var w = isCallObject ? window : window.parent; // console.log('[WebMessageChannel] sending message to daily-js', message);

      w.postMessage(message, '*');
    }
  }, {
    key: "removeListener",
    value: function removeListener(listener) {
      var wrappedListener = this._wrappedListeners[listener];

      if (wrappedListener) {
        window.removeEventListener('message', wrappedListener);
        delete this._wrappedListeners[listener];
      }
    } // Expects msg to already be packaged with all internal metadata fields
    // (what, from, callFrameId, etc.)

  }, {
    key: "forwardPackagedMessageToCallMachine",
    value: function forwardPackagedMessageToCallMachine(msg, iframe, newCallFrameId) {
      var newMsg = _objectSpread({}, msg);

      newMsg.callFrameId = newCallFrameId;
      var w = iframe ? iframe.contentWindow : window; // console.log(
      //   '[WebMessageChannel] forwarding packaged message to call machine',
      //   msg
      // );

      w.postMessage(newMsg, '*');
    } // Listener will be given packaged message with all internal metadata fields
    // (what, from, callFrameId, etc.)

  }, {
    key: "addListenerForPackagedMessagesFromCallMachine",
    value: function addListenerForPackagedMessagesFromCallMachine(listener, callFrameId) {
      var wrappedListener = function wrappedListener(evt) {
        // console.log(
        //   '[WebMessageChannel] received packaged call machine message',
        //   msg
        // );
        if (evt.data && evt.data.what === 'iframe-call-message' && ( // make callFrameId addressing backwards-compatible with
        // old versions of the library, which didn't have it
        evt.data.callFrameId ? evt.data.callFrameId === callFrameId : true) && (evt.data.from ? evt.data.from !== 'module' : true)) {
          var msg = evt.data;
          listener(msg);
        }
      }; // For now we're still using the listener itself as the key, like in the
      // other addListener* methods. We should probably change this everywhere to
      // use a proper unique id.


      this._wrappedListeners[listener] = wrappedListener;
      window.addEventListener('message', wrappedListener);
      return listener;
    }
  }, {
    key: "removeListenerForPackagedMessagesFromCallMachine",
    value: function removeListenerForPackagedMessagesFromCallMachine(listenerId) {
      var wrappedListener = this._wrappedListeners[listenerId];

      if (wrappedListener) {
        window.removeEventListener('message', wrappedListener);
        delete this._wrappedListeners[listenerId];
      }
    }
  }]);

  return WebMessageChannel;
}(ScriptMessageChannel);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * A two-way message channel between daily-js and the call machine (pluot-core),
 * when running in a React Native context.
 */

var ReactNativeMessageChannel = /*#__PURE__*/function (_ScriptMessageChannel) {
  inherits(ReactNativeMessageChannel, _ScriptMessageChannel);

  var _super = _createSuper$1(ReactNativeMessageChannel);

  function ReactNativeMessageChannel() {
    var _this;

    classCallCheck(this, ReactNativeMessageChannel);

    _this = _super.call(this); // A ReactNativeMessageChannel is constructed both in daily-js and the call
    // machine. Make sure we only instantiate emitters once.

    global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new EventEmitter();
    global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new EventEmitter();
    _this._wrappedListeners = {}; // Mapping between listeners and wrapped listeners

    _this._messageCallbacks = {};
    return _this;
  }

  createClass(ReactNativeMessageChannel, [{
    key: "addListenerForMessagesFromCallMachine",
    value: function addListenerForMessagesFromCallMachine(listener, callFrameId, thisValue) {
      this._addListener(listener, global.callMachineToDailyJsEmitter, thisValue, 'received call machine message');
    }
  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function addListenerForMessagesFromDailyJs(listener, callFrameId, thisValue) {
      this._addListener(listener, global.dailyJsToCallMachineEmitter, thisValue, 'received daily-js message');
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function sendMessageToCallMachine(message, callback) {
      this._sendMessage(message, global.dailyJsToCallMachineEmitter, 'sending message to call machine', callback);
    }
  }, {
    key: "sendMessageToDailyJs",
    value: function sendMessageToDailyJs(message) {
      this._sendMessage(message, global.callMachineToDailyJsEmitter, 'sending message to daily-js');
    }
  }, {
    key: "removeListener",
    value: function removeListener(listener) {
      var wrappedListener = this._wrappedListeners[listener];

      if (wrappedListener) {
        // The listener was added to one of these. Might as well try removing
        // from both (otherwise we would've needed two remove methods in this
        // class, targeting each side of the channel).
        global.callMachineToDailyJsEmitter.removeListener('message', wrappedListener);
        global.dailyJsToCallMachineEmitter.removeListener('message', wrappedListener);
        delete this._wrappedListeners[listener];
      }
    }
  }, {
    key: "_addListener",
    value: function _addListener(listener, messageEmitter, thisValue, logMessage) {
      var _this2 = this;

      var wrappedListener = function wrappedListener(msg) {
        // console.log(`[ReactNativeMessageChannel] ${logMessage}`, msg);
        if (msg.callbackStamp && _this2._messageCallbacks[msg.callbackStamp]) {
          // console.log('[ReactNativeMessageChannel] handling message as callback', msg);
          var callbackStamp = msg.callbackStamp; // Storing here since the callback could delete msg.callbackStamp

          _this2._messageCallbacks[callbackStamp].call(thisValue, msg);

          delete _this2._messageCallbacks[callbackStamp];
        }

        listener.call(thisValue, msg);
      };

      this._wrappedListeners[listener] = wrappedListener;
      messageEmitter.addListener('message', wrappedListener);
    }
  }, {
    key: "_sendMessage",
    value: function _sendMessage(message, messageEmitter, logMessage, callback) {
      if (callback) {
        var stamp = randomStringId();
        this._messageCallbacks[stamp] = callback;
        message.callbackStamp = stamp;
      } // console.log(`[ReactNativeMessageChannel] ${logMessage}`, message);


      messageEmitter.emit('message', message);
    }
  }]);

  return ReactNativeMessageChannel;
}(ScriptMessageChannel);

var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

var REPLACE_STRATEGY = 'replace';
var SHALLOW_MERGE_STRATEGY = 'shallow-merge';
var MERGE_STRATEGIES = [REPLACE_STRATEGY, SHALLOW_MERGE_STRATEGY]; // Explanation of public meeting-session-data-related classes:
// - Client side (this file):
//   - SessionDataUpdate: used on the client side to validate & encapsulate
//     user-specified updates to meeting session data.
//   - SessionDataClientUpdateQueue: used on the client side to enqueue multiple
//     user-specified updates before flushing them to the server as a single
//     payload.
// - Server side (other file, skyliner-express/app/SessionDataServerStore.js):
//   - SessionDataServerStore: used on the SFU side to interact with stored
//     meeting session data, including updating the data and listening to
//     changes to that data (which may have been updated via a different SFU).
// Check whether data is a Plain Old JavaScript Object (a map-like object),
// which can be shallow-merged with another.
// From https://masteringjs.io/tutorials/fundamentals/pojo.

function isPlainOldJavaScriptObject(data) {
  if (data == null || _typeof_1(data) !== 'object') {
    return false;
  }

  var proto = Object.getPrototypeOf(data);

  if (proto == null) {
    return true;
  }

  return proto === Object.prototype;
} // Meeting session data.
// Guaranteed to be valid upon construction, which means:
// - mergeStrategy is either 'replace' or 'shallow-merge'
// - data is a plain (map-like) object
// - data isn't too big

var SessionDataUpdate = /*#__PURE__*/function () {
  function SessionDataUpdate() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        data = _ref.data,
        _ref$mergeStrategy = _ref.mergeStrategy,
        mergeStrategy = _ref$mergeStrategy === void 0 ? REPLACE_STRATEGY : _ref$mergeStrategy;

    classCallCheck(this, SessionDataUpdate);

    SessionDataUpdate._validateMergeStrategy(mergeStrategy);

    SessionDataUpdate._validateData(data, mergeStrategy);

    this.mergeStrategy = mergeStrategy;
    this.data = data;
  } // Whether this update is a no-op.


  createClass(SessionDataUpdate, [{
    key: "isNoOp",
    value: function isNoOp() {
      return SessionDataUpdate.isNoOpUpdate(this.data, this.mergeStrategy);
    } // Whether an update comprised of the given data and mergeStrategy would be a
    // no-op.

  }], [{
    key: "isNoOpUpdate",
    value: function isNoOpUpdate(data, mergeStrategy) {
      return Object.keys(data).length === 0 && mergeStrategy === SHALLOW_MERGE_STRATEGY;
    } // Validate merge strategy, throwing an error if invalid.
    // Assumes mergeStrategy is not undefined.

  }, {
    key: "_validateMergeStrategy",
    value: function _validateMergeStrategy(mergeStrategy) {
      if (!MERGE_STRATEGIES.includes(mergeStrategy)) {
        throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(MERGE_STRATEGIES, "]"));
      }
    } // Validate data with the given merge strategy, throwing an error if invalid.
    // Assumes mergeStrategy is valid.

  }, {
    key: "_validateData",
    value: function _validateData(data, mergeStrategy) {
      // Data must be a plain (map-like) object.
      if (!isPlainOldJavaScriptObject(data)) {
        throw Error("Meeting session data must be a plain (map-like) object");
      } // Check that what goes in will be the same coming out :)
      // (Make an exception for top-level 'undefined's with 'shallow-merge',
      // though, since those are meaningful and will be translated into key
      // deletions).


      var dataStr;

      try {
        dataStr = JSON.stringify(data);

        if (mergeStrategy === REPLACE_STRATEGY) {
          var out = JSON.parse(dataStr);

          if (!dequal(out, data)) {
            console.warn("The meeting session data provided will be modified when serialized.", out, data);
          }
        } else if (mergeStrategy === SHALLOW_MERGE_STRATEGY) {
          for (var key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              if (data[key] !== undefined) {
                var _out = JSON.parse(JSON.stringify(data[key]));

                if (!dequal(data[key], _out)) {
                  console.warn("At least one key in the meeting session data provided will be modified when serialized.", _out, data[key]);
                }
              }
            }
          }
        }
      } catch (e) {
        throw Error("Meeting session data must be serializable to JSON: ".concat(e));
      } // Check the size of the payload


      if (dataStr.length > MAX_SESSION_DATA_SIZE) {
        throw Error("Meeting session data is too large (".concat(dataStr.length, " characters). Maximum size suppported is ").concat(MAX_SESSION_DATA_SIZE, "."));
      }
    }
  }]);

  return SessionDataUpdate;
}(); // The client-side update "queue" where meeting session data updates temporarily

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

var isNativeFunction = _isNativeFunction;

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var isNativeReflectConstruct = _isNativeReflectConstruct$2;

var construct = createCommonjsModule(function (module) {
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
});

var wrapNativeSuper = createCommonjsModule(function (module) {
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
});

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function prepareDailyConfig(callFrameId, avoidEval) {
  // Add a global callFrameId so we can have both iframes and one
  // call object mode calls live at the same time
  if (!window._dailyConfig) {
    window._dailyConfig = {};
  }

  window._dailyConfig.callFrameId = callFrameId;
  window._dailyConfig.avoidEval = avoidEval;
}

var CallObjectLoader = /*#__PURE__*/function () {
  function CallObjectLoader() {
    classCallCheck(this, CallObjectLoader);

    this._currentLoad = null;
  }
  /**
   * Loads the call object bundle (if needed), then invokes the callback
   * function, which takes one boolean argument whose value is true if the
   * load was a no-op.
   *
   * No-op loads can happen when leaving a meeting and then later joining one.
   * Since the call object bundle sets up global state in the same scope as the
   * app code consuming it, it only needs to be loaded and executed once ever.
   *
   * @param callFrameId A string identifying this "call frame", to distinguish it
   *  from other iframe-based calls for message channel purposes.
   * @param avoidEval Whether to use the new eval-less loading mechanism on web
   *  (LoadAttempt_Web) instead of the legacy loading mechanism
   *  (LoadAttempt_ReactNative).
   * @param successCallback Callback function that takes a wasNoOp argument
   *  (true if call object script was ever loaded once before).
   * @param failureCallback Callback function that takes an error message and a
   *   boolean indicating whether an automatic retry is slated to occur.
   */


  createClass(CallObjectLoader, [{
    key: "load",
    value: function load(callFrameId, avoidEval, successCallback, failureCallback) {
      if (this.loaded) {
        window._dailyCallObjectSetup(callFrameId);

        successCallback(true); // true = "this load() was a no-op"

        return;
      }

      prepareDailyConfig(callFrameId, avoidEval); // Cancel current load, if any

      this._currentLoad && this._currentLoad.cancel(); // Start a new load

      this._currentLoad = new LoadOperation(function () {
        successCallback(false); // false = "this load() wasn't a no-op"
      }, failureCallback);

      this._currentLoad.start();
    }
    /**
     * Cancel loading the call object bundle. No callbacks will be invoked.
     */

  }, {
    key: "cancel",
    value: function cancel() {
      this._currentLoad && this._currentLoad.cancel();
    }
    /**
     * Returns a boolean indicating whether the call object bundle has been
     * loaded and executed.
     */

  }, {
    key: "loaded",
    get: function get() {
      return this._currentLoad && this._currentLoad.succeeded;
    }
  }]);

  return CallObjectLoader;
}();
var LOAD_ATTEMPTS = 3;
var LOAD_ATTEMPT_DELAY = 3 * 1000;
/**
 * Represents a call machine bundle load.
 *
 * Since a load may fail, it may need to retry a few times. It delegates each
 * attempt to the LoadAttempt class.
 */

var LoadOperation = /*#__PURE__*/function () {
  // Here failureCallback takes the same parameters as CallObjectLoader.load,
  // and successCallback takes no parameters.
  function LoadOperation(successCallback, failureCallback) {
    classCallCheck(this, LoadOperation);

    this._attemptsRemaining = LOAD_ATTEMPTS;
    this._currentAttempt = null;
    this._successCallback = successCallback;
    this._failureCallback = failureCallback;
  }

  createClass(LoadOperation, [{
    key: "start",
    value: function start() {
      var _this = this;

      // Bail if this load has already started
      if (this._currentAttempt) {
        return;
      } // console.log("[LoadOperation] starting...");


      var retryOrFailureCallback = function retryOrFailureCallback(errorMessage) {
        if (_this._currentAttempt.cancelled) {
          // console.log("[LoadOperation] cancelled");
          return;
        }

        _this._attemptsRemaining--;

        _this._failureCallback(errorMessage, _this._attemptsRemaining > 0); // true = "will retry"


        if (_this._attemptsRemaining <= 0) {
          // Should never be <0, but just being extra careful here
          // console.log("[LoadOperation] ran out of attempts");
          return;
        }

        setTimeout(function () {
          if (_this._currentAttempt.cancelled) {
            // console.log("[LoadOperation] cancelled");
            return;
          }

          _this._currentAttempt = new LoadAttempt(_this._successCallback, retryOrFailureCallback);

          _this._currentAttempt.start();
        }, LOAD_ATTEMPT_DELAY);
      };

      this._currentAttempt = new LoadAttempt(this._successCallback, retryOrFailureCallback);

      this._currentAttempt.start();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this._currentAttempt && this._currentAttempt.cancel();
    }
  }, {
    key: "cancelled",
    get: function get() {
      return this._currentAttempt && this._currentAttempt.cancelled;
    }
  }, {
    key: "succeeded",
    get: function get() {
      return this._currentAttempt && this._currentAttempt.succeeded;
    }
  }]);

  return LoadOperation;
}();

var LoadAttemptAbortedError = /*#__PURE__*/function (_Error) {
  inherits(LoadAttemptAbortedError, _Error);

  var _super = _createSuper$2(LoadAttemptAbortedError);

  function LoadAttemptAbortedError() {
    classCallCheck(this, LoadAttemptAbortedError);

    return _super.apply(this, arguments);
  }

  return LoadAttemptAbortedError;
}( /*#__PURE__*/wrapNativeSuper(Error));

var LOAD_ATTEMPT_NETWORK_TIMEOUT = 20 * 1000;
/**
 * Represents a single call machine bundle load attempt.
 *
 * The LoadOperation does the heavy lifting in terms of coordinating different
 * LoadAttempts (i.e. kicking off retries and handling interruptions by, say, a
 * user calling leave()). It will ask each LoadAttempt to start() and, if
 * necessary, cancel().
 *
 * The LoadAttempt itself only needs to concern itself with obeying those
 * requests, invoking the success or failure callbacks at the end of an attempt,
 * and setting its cancelled and succeeded flags as appropriate.
 *
 * Since we support running both on Web and React Native and there are slightly
 * different constraints on each, there are two different implementations of
 * LoadAttempt:
 * - On Web, we use an HTMLScriptElement to load the bundle in order
 * to allow our users to set a CSP (Content Security Policy) without
 * 'unsafe-eval'. The alternative would be using fetch() + Function()/eval().
 * - On React Native, we use fetch() + Function(). There is no HTMLScriptElement
 * in React Native and also no CSP consideration to contend with.
 */

var LoadAttempt = /*#__PURE__*/function () {
  function LoadAttempt(successCallback, failureCallback) {
    classCallCheck(this, LoadAttempt);

    this._loadAttemptImpl = isReactNative() || !_dailyConfig.avoidEval ? new LoadAttempt_ReactNative(successCallback, failureCallback) : new LoadAttempt_Web(successCallback, failureCallback);
  }

  createClass(LoadAttempt, [{
    key: "start",
    value: function () {
      var _start = asyncToGenerator(function* () {
        return this._loadAttemptImpl.start();
      });

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "cancel",
    value: function cancel() {
      this._loadAttemptImpl.cancel();
    }
  }, {
    key: "cancelled",
    get: function get() {
      return this._loadAttemptImpl.cancelled;
    }
  }, {
    key: "succeeded",
    get: function get() {
      return this._loadAttemptImpl.succeeded;
    }
  }]);

  return LoadAttempt;
}();
/**
 * Represents a single call machine bundle load attempt in React Native.
 *
 * NOTE: this is also the legacy web code path, when avoidEval is not set.
 */


var LoadAttempt_ReactNative = /*#__PURE__*/function () {
  // Here successCallback takes no parameters, and failureCallback takes a
  // single error message parameter.
  function LoadAttempt_ReactNative(successCallback, failureCallback) {
    classCallCheck(this, LoadAttempt_ReactNative);

    this.cancelled = false;
    this.succeeded = false;
    this._networkTimedOut = false;
    this._networkTimeout = null;
    this._iosCache = typeof iOSCallObjectBundleCache !== 'undefined' && iOSCallObjectBundleCache;
    this._refetchHeaders = null;
    this._successCallback = successCallback;
    this._failureCallback = failureCallback;
  }

  createClass(LoadAttempt_ReactNative, [{
    key: "start",
    value: function () {
      var _start2 = asyncToGenerator(function* () {
        // console.log("[LoadAttempt_ReactNative] starting...");
        var url = callObjectBundleUrl();
        var loadedFromIOSCache = yield this._tryLoadFromIOSCache(url);
        !loadedFromIOSCache && this._loadFromNetwork(url);
      });

      function start() {
        return _start2.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "cancel",
    value: function cancel() {
      clearTimeout(this._networkTimeout);
      this.cancelled = true;
    }
    /**
     * Try to load the call object bundle from the iOS cache.
     * This is a React Native-specific workaround for the fact that the iOS HTTP
     * cache won't cache the call object bundle due to size.
     *
     * @param {string} url The url of the call object bundle to try to load.
     * @returns A Promise that resolves to false if the load failed or true
     * otherwise (if it succeeded or was cancelled), indicating whether a network
     * load attempt is needed.
     */

  }, {
    key: "_tryLoadFromIOSCache",
    value: function () {
      var _tryLoadFromIOSCache2 = asyncToGenerator(function* (url) {
        // console.log("[LoadAttempt_ReactNative] trying to load from iOS cache...");
        // Bail if we're not running in iOS
        if (!this._iosCache) {
          // console.log("[LoadAttempt_ReactNative] not iOS, so not checking iOS cache");
          return false;
        }

        try {
          var cacheResponse = yield this._iosCache.get(url); // If load has been cancelled, report work complete (no network load
          // needed)

          if (this.cancelled) {
            return true;
          } // If cache miss, report failure (network load needed)


          if (!cacheResponse) {
            // console.log("[LoadAttempt_ReactNative] iOS cache miss");
            return false;
          } // If cache expired, store refetch headers to use later and report
          // failure (network load needed)


          if (!cacheResponse.code) {
            // console.log(
            //   "[LoadAttempt_ReactNative] iOS cache expired, setting refetch headers",
            //   cacheResponse.refetchHeaders
            // );
            this._refetchHeaders = cacheResponse.refetchHeaders;
            return false;
          } // Cache is fresh, so run code and success callback, and report work
          // complete (no network load needed)
          // console.log("[LoadAttempt_ReactNative] iOS cache hit");


          Function('"use strict";' + cacheResponse.code)();
          this.succeeded = true;

          this._successCallback();

          return true;
        } catch (e) {
          // Report failure
          // console.log("[LoadAttempt_ReactNative] failure running bundle from iOS cache", e);
          return false;
        }
      });

      function _tryLoadFromIOSCache(_x) {
        return _tryLoadFromIOSCache2.apply(this, arguments);
      }

      return _tryLoadFromIOSCache;
    }()
    /**
     * Try to load the call object bundle from the network.
     * @param {string} url The url of the call object bundle to load.
     */

  }, {
    key: "_loadFromNetwork",
    value: function () {
      var _loadFromNetwork2 = asyncToGenerator(function* (url) {
        var _this2 = this;

        // console.log("[LoadAttempt_ReactNative] trying to load from network...");
        this._networkTimeout = setTimeout(function () {
          _this2._networkTimedOut = true;

          _this2._failureCallback("Timed out (>".concat(LOAD_ATTEMPT_NETWORK_TIMEOUT, " ms) when loading call object bundle ").concat(url));
        }, LOAD_ATTEMPT_NETWORK_TIMEOUT);

        try {
          var fetchOptions = this._refetchHeaders ? {
            headers: this._refetchHeaders
          } : {};
          var response = yield fetch(url, fetchOptions);
          clearTimeout(this._networkTimeout); // Check that load wasn't cancelled or timed out during fetch

          if (this.cancelled || this._networkTimedOut) {
            throw new LoadAttemptAbortedError();
          }

          var code = yield this._getBundleCodeFromResponse(url, response); // Check again that load wasn't cancelled during reading response

          if (this.cancelled) {
            throw new LoadAttemptAbortedError();
          } // Execute bundle code


          Function('"use strict";' + code)(); // Since code ran successfully (no errors thrown), cache it and call
          // success callback
          // console.log("[LoadAttempt_ReactNative] succeeded...");

          this._iosCache && this._iosCache.set(url, code, response.headers);
          this.succeeded = true;

          this._successCallback();
        } catch (e) {
          clearTimeout(this._networkTimeout); // We need to check all these conditions since long outstanding
          // requests can fail *after* cancellation or timeout (i.e. checking for
          // LoadAttemptAbortedError is not enough).

          if (e instanceof LoadAttemptAbortedError || this.cancelled || this._networkTimedOut) {
            // console.log("[LoadAttempt_ReactNative] cancelled or timed out");
            return;
          }

          this._failureCallback("Failed to load call object bundle ".concat(url, ": ").concat(e));
        }
      });

      function _loadFromNetwork(_x2) {
        return _loadFromNetwork2.apply(this, arguments);
      }

      return _loadFromNetwork;
    }()
  }, {
    key: "_getBundleCodeFromResponse",
    value: function () {
      var _getBundleCodeFromResponse2 = asyncToGenerator(function* (url, response) {
        // Normal success case
        if (response.ok) {
          return yield response.text();
        } // React Native iOS-specific case: 304 Not-Modified response
        // (Since we're doing manual cache management for iOS, the fetch mechanism
        //  doesn't opaquely handle 304s for us)


        if (this._iosCache && response.status === 304) {
          var cacheResponse = yield this._iosCache.renew(url, response.headers);
          return cacheResponse.code;
        }

        throw new Error("Received ".concat(response.status, " response"));
      });

      function _getBundleCodeFromResponse(_x3, _x4) {
        return _getBundleCodeFromResponse2.apply(this, arguments);
      }

      return _getBundleCodeFromResponse;
    }()
  }]);

  return LoadAttempt_ReactNative;
}();
/**
 * Represents a single call machine bundle load attempt on Web.
 *
 * While this attempt is active - that is, it hasn't been cancelled or hasn't
 * timed out - it signs itself up to be on a global "call machine load
 * waitlist", which represents the set of load attempts that want the call
 * machine to finish loading.
 *
 * Because...
 * a) ..."finishing loading" is something that happens on the call machine
 *    bundle side (i.e. not in this code) once it's been downloaded and is
 *    executing, and...
 * b) ...we actually *can't* stop the call machine bundle from running after an
 *    attempt has been cancelled or timed out, if the bundle finishes
 *    downloading (HTMLScriptElement doesn't have a cancel() method)...
 * ...we need a way of telling the call machine bundle "hey someone's still
 * interested in you loading".
 *
 * Note that there really shouldn't be more than one active load attempt at a
 * time. But this load attempt doesn't know that! Hence the waitlist being a
 * Set() and each attempt being responsible only for adding/removing itself from
 * the waitlist. This approach - as opposed to a global boolean or counter -
 * felt like the most bulletproof (i.e. future- and race-condition-proof) way
 * of implementing this synchronization.
 */


var LoadAttempt_Web = /*#__PURE__*/function () {
  function LoadAttempt_Web(successCallback, failureCallback) {
    classCallCheck(this, LoadAttempt_Web);

    this.cancelled = false;
    this.succeeded = false;
    this._successCallback = successCallback;
    this._failureCallback = failureCallback;
    this._attemptId = randomStringId();
    this._networkTimeout = null;
    this._scriptElement = null;
  }

  createClass(LoadAttempt_Web, [{
    key: "start",
    value: function () {
      var _start3 = asyncToGenerator(function* () {
        // Initialize global state tracking active load attempts
        if (!window._dailyCallMachineLoadWaitlist) {
          window._dailyCallMachineLoadWaitlist = new Set();
        } // Get call machine bundle URL


        var url = callObjectBundleUrl(); // Sanity check that we're running in a DOM/web context

        if ((typeof document === "undefined" ? "undefined" : _typeof_1(document)) !== 'object') {
          this._failureCallback("Call object bundle must be loaded in a DOM/web context");

          return;
        }

        this._startLoading(url);
      });

      function start() {
        return _start3.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "cancel",
    value: function cancel() {
      // console.log('[LoadAttempt_Web] cancelled');
      this._stopLoading();

      this.cancelled = true;
    }
  }, {
    key: "_startLoading",
    value: function _startLoading(url) {
      var _this3 = this;

      // console.log('[LoadAttempt_Web] trying to load...');
      this._signUpForCallMachineLoadWaitlist(); // Start a timeout, after which we'll consider this attempt a failure


      this._networkTimeout = setTimeout(function () {
        // console.log('[LoadAttempt_Web] timed out');
        _this3._stopLoading();

        _this3._failureCallback("Timed out (>".concat(LOAD_ATTEMPT_NETWORK_TIMEOUT, " ms) when loading call object bundle ").concat(url));
      }, LOAD_ATTEMPT_NETWORK_TIMEOUT); // Create a script tag to download the call machine bundle

      var head = document.getElementsByTagName('head')[0],
          script = document.createElement('script');
      this._scriptElement = script; // On load, consider this attempt a success

      script.onload = /*#__PURE__*/asyncToGenerator(function* () {
        // console.log('[LoadAttempt_Web] succeeded');
        _this3._stopLoading();

        _this3.succeeded = true;

        _this3._successCallback();
      }); // On error, consider this attempt a failure

      script.onerror = /*#__PURE__*/function () {
        var _ref2 = asyncToGenerator(function* (e) {
          // console.log('[LoadAttempt_Web] failed');
          _this3._stopLoading();

          _this3._failureCallback("Failed to load call object bundle ".concat(e.target.src));
        });

        return function (_x5) {
          return _ref2.apply(this, arguments);
        };
      }(); // Start the download


      script.src = url;
      head.appendChild(script);
    }
  }, {
    key: "_stopLoading",
    value: function _stopLoading() {
      this._withdrawFromCallMachineLoadWaitlist();

      clearTimeout(this._networkTimeout);

      if (this._scriptElement) {
        this._scriptElement.onload = null;
        this._scriptElement.onerror = null;
      }
    }
  }, {
    key: "_signUpForCallMachineLoadWaitlist",
    value: function _signUpForCallMachineLoadWaitlist() {
      window._dailyCallMachineLoadWaitlist.add(this._attemptId);
    }
  }, {
    key: "_withdrawFromCallMachineLoadWaitlist",
    value: function _withdrawFromCallMachineLoadWaitlist() {
      window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
    }
  }]);

  return LoadAttempt_Web;
}();

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys$1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  _baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

var _baseFilter = baseFilter;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$6 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array$1 = _root.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView$1 = _getNative(_root, 'DataView');

var _DataView = DataView$1;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
  return func(collection, _baseIteratee(predicate));
}

var filter_1 = filter;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

var _baseSortBy = baseSortBy;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol_1(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol_1(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

var _compareMultiple = compareMultiple;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = _arrayMap(iteratees, function(iteratee) {
      if (isArray_1(iteratee)) {
        return function(value) {
          return _baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity_1];
  }

  var index = -1;
  iteratees = _arrayMap(iteratees, _baseUnary(_baseIteratee));

  var result = _baseMap(collection, function(value, key, collection) {
    var criteria = _arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return _baseSortBy(result, function(object, other) {
    return _compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy;

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray_1(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray_1(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return _baseOrderBy(collection, iteratees, orders);
}

var orderBy_1 = orderBy;

var getLocalIsSubscribedToTrack = function getLocalIsSubscribedToTrack(state, id, mediaTag) {
  return _getSubscriptionToTrack(state.local, id, mediaTag) === true;
}; // NOTE: only meant for use in P2P mode, where we have access to remote
// kind is "video" or "audio"

var getLocalTrack = function getLocalTrack(state, type, kind) {
  return state.local.streams && state.local.streams[type] && state.local.streams[type].stream && state.local.streams[type].stream["get".concat(kind === 'video' ? 'Video' : 'Audio', "Tracks")]()[0];
}; // kind is "video" or "audio"
// for standard tracks, type is "cam" or "screen"
// for custom tracks, type is the mediaTag

var getRemoteTrack = function getRemoteTrack(state, participantId, type, kind) {
  var streamEntry = _getRemoteStreamEntry(state, participantId, type, kind);

  return streamEntry && streamEntry.pendingTrack;
}; // type is "cam" or "screen"
// and is currently accessed directly from redux anyway (not via this selector)
// where it's needed.

var _getSubscriptionToTrack = function _getSubscriptionToTrack(subscriber, subscribeeId, mediaTag) {
  // if we don't have a participant record at all, assume that
  // false is the safest thing to return, here
  if (!subscriber) {
    return false;
  }

  var mapToTrueFalseStaged = function mapToTrueFalseStaged(subscription) {
    switch (subscription) {
      case 'avatar':
        return true;

      case 'staged':
        return subscription;

      default:
        // boolean or undefined
        return !!subscription;
    }
  };

  var sTracks = subscriber.public.subscribedTracks; // Below shows the return values for all the various versions of sTracks
  //   { ALL: true }                   -> true
  //   { ALL: false }                  -> false
  //   { ALL: 'staged' }               -> 'staged'
  //   { ALL: 'avatar' }               -> true
  //   undefined                       -> true  // this should never happen
  //   {},                             -> false
  //   { p2id: { }}                    -> false
  //   { p2id: { mediaTag: true }}     -> true
  //   { p2id: { mediaTag: false }}    -> false
  //   { p2id: { mediaTag: 'staged' }} -> 'staged'
  //   { p2id: { mediaTag: 'avatar' }} -> true

  if (!(sTracks && sTracks[subscribeeId])) {
    return sTracks ? mapToTrueFalseStaged(sTracks.ALL) : true;
  }

  var isCustomTrack = ['cam-audio', 'cam-video', 'screen-video', 'screen-audio', 'rmpAudio', 'rmpVideo'].indexOf(mediaTag) === -1;
  var result;

  if (isCustomTrack && sTracks[subscribeeId]['custom']) {
    result = [true, 'staged'].includes(sTracks[subscribeeId]['custom']) ? mapToTrueFalseStaged(sTracks[subscribeeId]['custom']) : mapToTrueFalseStaged(sTracks[subscribeeId]['custom'][mediaTag]);
  } else {
    result = mapToTrueFalseStaged(sTracks[subscribeeId][mediaTag]);
  }

  return result;
};

var _getRemoteStreamEntry = function _getRemoteStreamEntry(state, participantId, type, kind) {
  var streams = orderBy_1(filter_1(state.streams, function (s) {
    return s.participantId === participantId && s.type === type && s.pendingTrack && s.pendingTrack.kind === kind;
  }), 'starttime', 'desc');
  return streams && streams[0];
};

var getLocalCustomTrack = function getLocalCustomTrack(state, trackEntryKey) {
  var trackEntries = state.local.public.customTracks;

  if (!(trackEntries && trackEntries[trackEntryKey])) {
    return;
  }

  return trackEntries[trackEntryKey].track;
};

function addTracks(p) {
  var state = store.getState();

  for (var _i = 0, _arr = ['cam', 'screen']; _i < _arr.length; _i++) {
    var type = _arr[_i];

    for (var _i2 = 0, _arr2 = ['video', 'audio']; _i2 < _arr2.length; _i2++) {
      var kind = _arr2[_i2];
      var key = type === 'cam' ? kind : "screen".concat(kind.charAt(0).toUpperCase() + kind.slice(1));
      var trackInfo = p.tracks[key];

      if (trackInfo) {
        var track = p.local ? getLocalTrack(state, type, kind) : getRemoteTrack(state, p.session_id, type, kind);

        if (trackInfo.state === 'playable') {
          trackInfo.track = track;
        } // Set "persistent" track field where track is present even if not "playable"


        trackInfo.persistentTrack = track;
      }
    }
  }
} // todo: refactor so that his logic is part of addTracks and friends()

function addCustomTracks(p) {
  try {
    var state = store.getState();

    for (var trackEntryKey in p.tracks) {
      if (isPredefinedTrack(trackEntryKey)) {
        continue;
      }

      var kind = p.tracks[trackEntryKey].kind;

      if (!kind) {
        console.error('unknown type for custom track');
        continue;
      }

      var trackInfo = p.tracks[trackEntryKey];

      if (trackInfo) {
        var track = p.local ? getLocalCustomTrack(state, trackEntryKey, kind) : getRemoteTrack(state, p.session_id, trackEntryKey, kind);

        if (trackInfo.state === 'playable') {
          p.tracks[trackEntryKey].track = track;
        }

        trackInfo.persistentTrack = track;
      }
    }
  } catch (e) {
    console.error(e);
  }
}
function isPredefinedTrack(trackEntryKey) {
  return ['video', 'audio', 'screenVideo', 'screenAudio'].includes(trackEntryKey);
} // Adds tracks to daily-js Participant object.

function addLegacyTracks(p, prevP) {
  var state = store.getState();

  if (p.local) {
    if (p.audio) {
      try {
        p.audioTrack = state.local.streams.cam.stream.getAudioTracks()[0];

        if (!p.audioTrack) {
          p.audio = false;
        }
      } catch (e) {}
    }

    if (p.video) {
      try {
        p.videoTrack = state.local.streams.cam.stream.getVideoTracks()[0];

        if (!p.videoTrack) {
          p.video = false;
        }
      } catch (e) {}
    }

    if (p.screen) {
      try {
        p.screenVideoTrack = state.local.streams.screen.stream.getVideoTracks()[0];
        p.screenAudioTrack = state.local.streams.screen.stream.getAudioTracks()[0];

        if (!(p.screenVideoTrack || p.screenAudioTrack)) {
          p.screen = false;
        }
      } catch (e) {}
    }

    return;
  }

  var connected = true; // default to true to minimize impact of new bugs
  // as of 11/20/2019 when this block of code was
  // first written

  try {
    var sp = state.participants[p.session_id];

    if (sp && sp.public && sp.public.rtcType && sp.public.rtcType.impl === 'peer-to-peer') {
      if (sp.private && !['connected', 'completed'].includes(sp.private.peeringState)) {
        connected = false;
      }
    }
  } catch (e) {
    console.error(e);
  }

  if (!connected) {
    p.audio = false;
    p.audioTrack = false;
    p.video = false;
    p.videoTrack = false;
    p.screen = false;
    p.screenTrack = false;
    return;
  }

  try {
    var allStreams = state.streams; // find audio track

    if (p.audio && getLocalIsSubscribedToTrack(state, p.session_id, 'cam-audio')) {
      var audioTrack = getRemoteTrack(state, p.session_id, 'cam', 'audio');

      if (audioTrack) {
        if (prevP && prevP.audioTrack && prevP.audioTrack.id === audioTrack.id) {
          // if we have an apparently identical audio track already in
          // our participant struct leave it in place to avoid flicker
          // during quick muted/unmuted PeerConnection cycles. we'll update
          // audio/video muted at the app level via signaling
          p.audioTrack = audioTrack;
        } else if (!audioTrack.muted) {
          // otherwise, add the found track if it's not muted
          p.audioTrack = audioTrack;
        }
      }

      if (!p.audioTrack) {
        p.audio = false;
      }
    } // find video track


    if (p.video && getLocalIsSubscribedToTrack(state, p.session_id, 'cam-video')) {
      var videoTrack = getRemoteTrack(state, p.session_id, 'cam', 'video');

      if (videoTrack) {
        if (prevP && prevP.videoTrack && prevP.videoTrack.id === videoTrack.id) {
          p.videoTrack = videoTrack;
        } else if (!videoTrack.muted) {
          // otherwise, add the found track if it's not muted
          p.videoTrack = videoTrack;
        }
      }

      if (!p.videoTrack) {
        p.video = false;
      }
    } // find screen-share audio track


    if (p.screen && getLocalIsSubscribedToTrack(state, p.session_id, 'screen-audio')) {
      var screenAudioTrack = getRemoteTrack(state, p.session_id, 'screen', 'audio');

      if (screenAudioTrack) {
        if (prevP && prevP.screenAudioTrack && prevP.screenAudioTrack.id === screenAudioTrack.id) {
          p.screenAudioTrack = screenAudioTrack;
        } else if (!screenAudioTrack.muted) {
          // otherwise, add the found track if it's not muted
          p.screenAudioTrack = screenAudioTrack;
        }
      }
    } // find screen-share video track


    if (p.screen && getLocalIsSubscribedToTrack(state, p.session_id, 'screen-video')) {
      var screenVideoTrack = getRemoteTrack(state, p.session_id, 'screen', 'video');

      if (screenVideoTrack) {
        if (prevP && prevP.screenVideoTrack && prevP.screenVideoTrack.id === screenVideoTrack.id) {
          p.screenVideoTrack = screenVideoTrack;
        } else if (!screenVideoTrack.muted) {
          // otherwise, add the found track if it's not muted
          // note: there is an issue here with timing ... Chrome (and
          // possibly other browsers), gets a video track that's initially
          // not muted, for an audio-only screenshare. The track
          // switches to muted fairly quickly, but we don't have any
          // logic in place to respond to that. todo: fix this so that,
          // at the very least we get a track-stopped event when the
          // "empty" track switches to muted.
          p.screenVideoTrack = screenVideoTrack;
        }
      }
    }

    if (!(p.screenVideoTrack || p.screenAudioTrack)) {
      p.screen = false;
    }
  } catch (e) {
    console.error('unexpected error matching up tracks', e);
  }
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// calls or audio calls (i.e. whether we should use speakerphone).

var NATIVE_AUDIO_MODE_VIDEO_CALL = 'video';
var NATIVE_AUDIO_MODE_VOICE_CALL = 'voice';
var NATIVE_AUDIO_MODE_IDLE = 'idle';
var MAX_RMP_FPS = 30;
var MIN_RMP_FPS = 1;
var MAX_SIMULCAST_LAYERS = 3;
var MAX_SCALE_RESOLUTION_BY = 8;
var MAX_LAYER_BITRATE = 2500000;
var MIN_LAYER_BITRATE = 100000;
var DEFAULT_SESSION_STATE = isReactNative() ? {
  data: {}
} : {
  data: {},
  topology: 'none'
};
var EMPTY_PARTICIPANT_COUNTS = {
  present: 0,
  hidden: 0
};
var simulcastEncodingsValidRanges = {
  maxBitrate: {
    min: MIN_LAYER_BITRATE,
    max: MAX_LAYER_BITRATE
  },
  maxFramerate: {
    min: MIN_RMP_FPS,
    max: MAX_RMP_FPS
  },
  scaleResolutionDownBy: {
    min: 1,
    max: MAX_SCALE_RESOLUTION_BY
  }
};
var startRmpSettingsValidKeys = ['state', 'volume', 'simulcastEncodings']; //
//
//

var reactNativeConfigType = {
  androidInCallNotification: {
    title: 'string',
    subtitle: 'string',
    iconName: 'string',
    disableForCustomOverride: 'boolean'
  },
  disableAutoDeviceManagement: {
    audio: 'boolean',
    video: 'boolean'
  }
};
var customTrayButtonsType = {
  id: {
    iconPath: 'string',
    iconPathDarkMode: 'string',
    label: 'string',
    tooltip: 'string'
  }
};
var FRAME_PROPS = {
  customIntegrations: true,
  customTrayButtons: {
    validate: validateCustomTrayButtons,
    help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(customTrayButtonsType))
  },
  url: {
    validate: function validate(url) {
      return typeof url === 'string';
    },
    help: 'url should be a string'
  },
  baseUrl: {
    validate: function validate(url) {
      return typeof url === 'string';
    },
    help: 'baseUrl should be a string'
  },
  token: {
    validate: function validate(token) {
      return typeof token === 'string';
    },
    help: 'token should be a string',
    queryString: 't'
  },
  dailyConfig: {
    // only for call object mode, for now
    validate: function validate(config) {
      if (!window._dailyConfig) {
        window._dailyConfig = {};
      }

      window._dailyConfig.experimentalGetUserMediaConstraintsModify = config.experimentalGetUserMediaConstraintsModify;
      window._dailyConfig.userMediaVideoConstraints = config.userMediaVideoConstraints;
      window._dailyConfig.userMediaAudioConstraints = config.userMediaAudioConstraints;
      window._dailyConfig.callObjectBundleUrlOverride = config.callObjectBundleUrlOverride;
      return true;
    }
  },
  reactNativeConfig: {
    validate: validateReactNativeConfig,
    help: "reactNativeConfig should look like ".concat(JSON.stringify(reactNativeConfigType), ", all fields optional")
  },
  lang: {
    validate: function validate(lang) {
      return ['de', 'en-us', // Here for backwards compatibility, but not encouraged (just maps to 'en' anyway)
      'en', 'es', 'fi', 'fr', 'it', 'jp', 'ka', 'nl', 'no', 'pl', 'pt', 'ru', 'sv', 'tr', 'user'].includes(lang);
    },
    help: 'language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, ru, sv, tr, user'
  },
  userName: true,
  // ignored if there's a token
  userData: {
    validate: function validate(data) {
      try {
        validateUserData(data);
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    help: 'invalid userData type provided'
  },
  startVideoOff: true,
  startAudioOff: true,
  activeSpeakerMode: true,
  showLeaveButton: true,
  showLocalVideo: true,
  showParticipantsBar: true,
  showFullscreenButton: true,
  showUserNameChangeUI: true,
  // style to apply to iframe in createFrame factory method
  iframeStyle: true,
  // styles passed through to video calls inside the iframe
  customLayout: true,
  cssFile: true,
  cssText: true,
  bodyClass: true,
  videoSource: {
    validate: function validate(s, callObject) {
      callObject._preloadCache.videoDeviceId = s;
      return true;
    }
  },
  audioSource: {
    validate: function validate(s, callObject) {
      callObject._preloadCache.audioDeviceId = s;
      return true;
    }
  },
  subscribeToTracksAutomatically: {
    validate: function validate(s, callObject) {
      callObject._preloadCache.subscribeToTracksAutomatically = s;
      return true;
    }
  },
  theme: {
    validate: function validate(o) {
      var validColors = ['accent', 'accentText', 'background', 'backgroundAccent', 'baseText', 'border', 'mainAreaBg', 'mainAreaBgAccent', 'mainAreaText', 'supportiveText'];

      var containsValidColors = function containsValidColors(colors) {
        for (var _i = 0, _Object$keys = Object.keys(colors); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (!validColors.includes(key)) {
            // Key is not a supported theme color
            console.error("unsupported color \"".concat(key, "\". Valid colors: ").concat(validColors.join(', ')));
            return false;
          }

          if (!colors[key].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) {
            // Color is not in hex format
            console.error("".concat(key, " theme color should be provided in valid hex color format. Received: \"").concat(colors[key], "\""));
            return false;
          }
        }

        return true;
      };

      if (_typeof_1(o) !== 'object' || !('light' in o && 'dark' in o || 'colors' in o)) {
        // Must define either both themes or colors
        console.error('Theme must contain either both "light" and "dark" properties, or "colors".', o);
        return false;
      }

      if ('light' in o && 'dark' in o) {
        if (!('colors' in o.light)) {
          console.error('Light theme is missing "colors" property.', o);
          return false;
        }

        if (!('colors' in o.dark)) {
          console.error('Dark theme is missing "colors" property.', o);
          return false;
        }

        return containsValidColors(o.light.colors) && containsValidColors(o.dark.colors);
      }

      return containsValidColors(o.colors);
    },
    help: 'unsupported theme configuration. Check error logs for detailed info.'
  },
  layoutConfig: {
    validate: function validate(layoutConfig) {
      if ('grid' in layoutConfig) {
        var gridConfig = layoutConfig.grid;

        if ('maxTilesPerPage' in gridConfig) {
          if (!Number.isInteger(gridConfig.maxTilesPerPage)) {
            console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(gridConfig.maxTilesPerPage, "."));
            return false;
          }

          if (gridConfig.maxTilesPerPage > 49) {
            console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case.");
            return false;
          }
        }

        if ('minTilesPerPage' in gridConfig) {
          if (!Number.isInteger(gridConfig.minTilesPerPage)) {
            console.error("grid.minTilesPerPage should be an integer. You passed ".concat(gridConfig.minTilesPerPage, "."));
            return false;
          }

          if (gridConfig.minTilesPerPage < 1) {
            console.error("grid.minTilesPerPage can't be lower than 1.");
            return false;
          }

          if ('maxTilesPerPage' in gridConfig && gridConfig.minTilesPerPage > gridConfig.maxTilesPerPage) {
            console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage.");
            return false;
          }
        }
      }

      return true;
    },
    help: 'unsupported layoutConfig. Check error logs for detailed info.'
  },
  receiveSettings: {
    // Disallow "*" shorthand key since it's a shorthand for participants
    // currently connected *to you* (i.e. participants already in
    // participants()), which is necessarily empty at join time. Allowing this
    // key might only sow confusion: it might lead people to think it's a
    // shorthand for participants currently connected *to the room*.
    validate: function validate(receiveSettings) {
      return validateReceiveSettings(receiveSettings, {
        allowAllParticipantsKey: false
      });
    },
    help: receiveSettingsValidationHelpMsg({
      allowAllParticipantsKey: false
    })
  },
  inputSettings: {
    validate: function validate(inputSettings) {
      return validateInputSettings(inputSettings);
    },
    help: inputSettingsValidationHelpMsg()
  },
  // used internally
  layout: {
    validate: function validate(layout) {
      return layout === 'custom-v1' || layout === 'browser' || layout === 'none';
    },
    help: 'layout may only be set to "custom-v1"',
    queryString: 'layout'
  },
  emb: {
    queryString: 'emb'
  },
  embHref: {
    queryString: 'embHref'
  },
  dailyJsVersion: {
    queryString: 'dailyJsVersion'
  }
}; // todo: more validation?

var PARTICIPANT_PROPS = {
  styles: {
    validate: function validate(styles) {
      for (var k in styles) {
        if (k !== 'cam' && k !== 'screen') {
          return false;
        }
      }

      if (styles.cam) {
        for (var k in styles.cam) {
          if (k !== 'div' && k !== 'video') {
            return false;
          }
        }
      }

      if (styles.screen) {
        for (var k in styles.screen) {
          if (k !== 'div' && k !== 'video') {
            return false;
          }
        }
      }

      return true;
    },
    help: 'styles format should be a subset of: ' + '{ cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }'
  },
  setSubscribedTracks: {
    validate: function validate(subs, callObject, participant) {
      if (callObject._preloadCache.subscribeToTracksAutomatically) {
        return false;
      }

      var validPrimitiveValues = [true, false, 'staged'];

      if (validPrimitiveValues.includes(subs) || !isReactNative() && subs === 'avatar') {
        return true;
      }

      var knownTracks = ['audio', 'video', 'screenAudio', 'screenVideo', 'rmpAudio', 'rmpVideo'];

      var validateTrackSubs = function validateTrackSubs(subs) {
        var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        for (var s in subs) {
          if (s === 'custom') {
            var containsValidValue = validPrimitiveValues.includes(subs[s]);

            if (!containsValidValue && !validateTrackSubs(subs[s], true)) {
              return false;
            }
          } else {
            var isUnexpectedTrackType = !custom && !knownTracks.includes(s);
            var isUnexpectedValue = !validPrimitiveValues.includes(subs[s]);

            if (isUnexpectedTrackType || isUnexpectedValue) {
              return false;
            }
          }
        }

        return true;
      };

      return validateTrackSubs(subs);
    },
    help: 'setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: ' + "true".concat(!isReactNative() ? " | 'avatar'" : '', " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")
  },
  setAudio: true,
  setVideo: true,
  eject: true,
  updatePermissions: {
    validate: function validate(permissionsUpdate) {
      // Note: this validation logic should probably be moved into
      // Permissions.js, which should then be used by this file. It'd be a first
      // for us to depend on a file outside daily-js, though.
      for (var _i2 = 0, _Object$entries = Object.entries(permissionsUpdate); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = slicedToArray(_Object$entries[_i2], 2),
            permissionName = _Object$entries$_i[0],
            permission = _Object$entries$_i[1];

        switch (permissionName) {
          case 'hasPresence':
            if (typeof permission !== 'boolean') {
              return false;
            }

            break;

          case 'canSend':
            if (permission instanceof Set) {
              var knownMediaTypes = ['video', 'audio', 'screenVideo', 'screenAudio', 'customVideo', 'customAudio'];

              var _iterator = _createForOfIteratorHelper(permission),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var mediaType = _step.value;

                  if (!knownMediaTypes.includes(mediaType)) {
                    return false;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else if (typeof permission !== 'boolean') {
              return false;
            }

            break;

          default:
            return false;
        }
      }

      return true;
    },
    help: 'updatePermissions can take hasPresence and canSend permissions. hasPresence must be a boolean. canSend can be a boolean or an array of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio).'
  }
}; //
//
//

var DailyIframe = /*#__PURE__*/function (_EventEmitter) {
  inherits(DailyIframe, _EventEmitter);

  var _super = _createSuper$3(DailyIframe);

  createClass(DailyIframe, null, [{
    key: "supportedBrowser",
    //
    // static methods
    //
    value: function supportedBrowser() {
      if (isReactNative()) {
        return {
          supported: true,
          mobile: true,
          name: 'React Native',
          version: null,
          supportsScreenShare: false,
          supportsSfu: true,
          supportsVideoProcessing: false
        };
      }

      var browser = Bowser.getParser(getUserAgent());
      return {
        supported: !!browserVideoSupported_p(),
        mobile: browser.getPlatformType() === 'mobile',
        name: browser.getBrowserName(),
        version: browser.getBrowserVersion(),
        supportsFullscreen: !!isFullscreenSupported(),
        supportsScreenShare: !!isScreenSharingSupported(),
        supportsSfu: !!browserVideoSupported_p(),
        supportsVideoProcessing: isVideoProcessingSupported()
      };
    }
  }, {
    key: "version",
    value: function version() {
      return "0.35.1-internal.1";
    } //
    // constructors
    //

  }, {
    key: "createCallObject",
    value: function createCallObject() {
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      properties.layout = 'none';
      return new DailyIframe(null, properties);
    }
  }, {
    key: "wrap",
    value: function wrap(iframeish) {
      var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      methodNotSupportedInReactNative();

      if (!iframeish || !iframeish.contentWindow || 'string' !== typeof iframeish.src) {
        throw new Error('DailyIframe::Wrap needs an iframe-like first argument');
      }

      if (!properties.layout) {
        if (properties.customLayout) {
          properties.layout = 'custom-v1';
        } else {
          properties.layout = 'browser';
        }
      }

      return new DailyIframe(iframeish, properties);
    }
  }, {
    key: "createFrame",
    value: function createFrame(arg1, arg2) {
      methodNotSupportedInReactNative();
      var parentEl, properties;

      if (arg1 && arg2) {
        parentEl = arg1;
        properties = arg2;
      } else if (arg1 && arg1.append) {
        parentEl = arg1;
        properties = {};
      } else {
        parentEl = document.body;
        properties = arg1 || {};
      }

      var iframeStyle = properties.iframeStyle;

      if (!iframeStyle) {
        if (parentEl === document.body) {
          iframeStyle = {
            position: 'fixed',
            border: '1px solid black',
            backgroundColor: 'white',
            width: '375px',
            height: '450px',
            right: '1em',
            bottom: '1em'
          };
        } else {
          iframeStyle = {
            border: 0,
            width: '100%',
            height: '100%'
          };
        }
      }

      var iframeEl = document.createElement('iframe'); // special-case for old Electron for Figma

      if (window.navigator && window.navigator.userAgent.match(/Chrome\/61\./)) {
        iframeEl.allow = 'microphone, camera';
      } else {
        iframeEl.allow = 'microphone; camera; autoplay; display-capture';
      }

      iframeEl.style.visibility = 'hidden';
      parentEl.appendChild(iframeEl);
      iframeEl.style.visibility = null;
      Object.keys(iframeStyle).forEach(function (k) {
        return iframeEl.style[k] = iframeStyle[k];
      });

      if (!properties.layout) {
        if (properties.customLayout) {
          properties.layout = 'custom-v1';
        } else {
          properties.layout = 'browser';
        }
      }

      try {
        var callFrame = new DailyIframe(iframeEl, properties);
        return callFrame;
      } catch (e) {
        // something when wrong while constructing the object. so let's clean
        // up by removing ourselves from the page, then rethrow the error.
        parentEl.removeChild(iframeEl);
        throw e;
      }
    }
  }, {
    key: "createTransparentFrame",
    value: function createTransparentFrame() {
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      methodNotSupportedInReactNative();
      var iframeEl = document.createElement('iframe');
      iframeEl.allow = 'microphone; camera; autoplay';
      iframeEl.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    ";
      document.body.appendChild(iframeEl);

      if (!properties.layout) {
        properties.layout = 'custom-v1';
      }

      return DailyIframe.wrap(iframeEl, properties);
    }
  }]);

  function DailyIframe(iframeish) {
    var _this;

    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    classCallCheck(this, DailyIframe);

    _this = _super.call(this);

    defineProperty(assertThisInitialized(_this), "startListeningForDeviceChanges", function () {
      if (typeof navigator.mediaDevices.ondevicechange !== 'undefined' || isReactNative()) {
        // Desktop web, iOS web, and React Native support the 'devicechange' event
        navigator.mediaDevices.addEventListener('devicechange', _this.deviceChangeListener);
      } else {
        // Android Chrome/Samsung Internet doesn't support the 'devicechange'
        // event, so do polling instead
        _this.startPollingForDeviceChanges();
      }
    });

    defineProperty(assertThisInitialized(_this), "stopListeningForDeviceChanges", function () {
      if (typeof navigator.mediaDevices.ondevicechange !== 'undefined' || isReactNative()) {
        // Desktop web, iOS web, and React Native support the 'devicechange' event
        navigator.mediaDevices.removeEventListener('devicechange', _this.deviceChangeListener);
      } else {
        // Android Chrome/Samsung Internet doesn't support the 'devicechange'
        // event, so do polling instead
        _this.stopPollingForDeviceChanges();
      }
    });

    defineProperty(assertThisInitialized(_this), "deviceChangeListener", /*#__PURE__*/asyncToGenerator(function* () {
      // Let our own enumerateDevices() method be the source of truth
      var devicesInfo = yield _this.enumerateDevices();

      _this.handleDeviceChange(devicesInfo.devices);
    }));

    defineProperty(assertThisInitialized(_this), "handleDeviceChange", function (newDevices) {
      _this.emit(DAILY_EVENT_AVAILABLE_DEVICES_UPDATED, {
        action: DAILY_EVENT_AVAILABLE_DEVICES_UPDATED,
        availableDevices: newDevices
      });
    });

    defineProperty(assertThisInitialized(_this), "startPollingForDeviceChanges", function () {
      if (_this._deviceChangeInterval) return;
      _this._deviceChangeInterval = setInterval( /*#__PURE__*/asyncToGenerator(function* () {
        // Let our own enumerateDevices() method be the source of truth
        var devicesInfo = yield _this.enumerateDevices();
        var devicesJSON = JSON.stringify(devicesInfo);

        if (_this._lastDevicesJSON && devicesJSON !== _this._lastDevicesJSON) {
          _this.handleDeviceChange(devicesInfo.devices);
        }

        _this._lastDevicesJSON = devicesJSON;
      }), 3000);
    });

    defineProperty(assertThisInitialized(_this), "stopPollingForDeviceChanges", function () {
      if (!_this._deviceChangeInterval) return;
      clearInterval(_this._deviceChangeInterval);
      _this._deviceChangeInterval = null;
      _this._lastDevicesJSON = null;
    });

    defineProperty(assertThisInitialized(_this), "handleNativeAppActiveStateChange", function (isActive) {
      // If automatic video device management is disabled, bail
      if (_this.disableReactNativeAutoDeviceManagement('video')) {
        return;
      }

      if (isActive) {
        // If cam was unmuted before losing focus, unmute
        // (Note this is assumption is not perfect, since theoretically an app
        // could unmute while in the background, but it's decent for now)
        if (_this.camUnmutedBeforeLosingNativeActiveState) {
          _this.setLocalVideo(true);
        }
      } else {
        _this.camUnmutedBeforeLosingNativeActiveState = _this.localVideo(); // Mute cam, but check first whether we have local video in the first
        // place: if we don't, we may still be in the gUM process, with the app
        // "inactive" simply because it's behind the permissions dialogs.

        if (_this.camUnmutedBeforeLosingNativeActiveState) {
          _this.setLocalVideo(false);
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "handleNativeAudioFocusChange", function (hasFocus) {
      // If automatic audio device management is disabled, bail
      if (_this.disableReactNativeAutoDeviceManagement('audio')) {
        return;
      }

      _this._hasNativeAudioFocus = hasFocus; // toggle participant audio if needed

      _this.toggleParticipantAudioBasedOnNativeAudioFocus(); // toggle mic mute if needed


      if (_this._hasNativeAudioFocus) {
        // If mic was unmuted before losing focus, unmute
        // (Note this is assumption is not perfect, since theoretically an app
        // could unmute while in the background, but it's decent for now)
        if (_this.micUnmutedBeforeLosingNativeAudioFocus) {
          _this.setLocalAudio(true);
        }
      } else {
        _this.micUnmutedBeforeLosingNativeAudioFocus = _this.localAudio();

        _this.setLocalAudio(false);
      }
    });

    properties.dailyJsVersion = DailyIframe.version();
    _this._iframe = iframeish;
    _this._callObjectMode = properties.layout === 'none' && !_this._iframe;
    _this._preloadCache = initializePreloadCache();

    if (_this._callObjectMode) {
      window._dailyPreloadCache = _this._preloadCache;
    }

    if (properties.showLocalVideo !== undefined) {
      if (_this._callObjectMode) {
        console.error('showLocalVideo is not available in call object mode');
      } else {
        _this._showLocalVideo = !!properties.showLocalVideo;
      }
    } else {
      _this._showLocalVideo = true;
    }

    if (properties.showParticipantsBar !== undefined) {
      if (_this._callObjectMode) {
        console.error('showParticipantsBar is not available in call object mode');
      } else {
        _this._showParticipantsBar = !!properties.showParticipantsBar;
      }
    } else {
      _this._showParticipantsBar = true;
    }

    if (properties.customIntegrations !== undefined) {
      if (_this._callObjectMode) {
        console.error('customIntegrations is not available in call object mode');
      } else {
        _this._customIntegrations = properties.customIntegrations;
      }
    } else {
      _this._customIntegrations = {};
    }

    if (properties.customTrayButtons !== undefined) {
      if (_this._callObjectMode) {
        console.error('customTrayButtons is not available in call object mode');
      } else {
        _this._customTrayButtons = properties.customTrayButtons;
      }
    } else {
      _this._customTrayButtons = {};
    }

    if (properties.activeSpeakerMode !== undefined) {
      if (_this._callObjectMode) {
        console.error('activeSpeakerMode is not available in call object mode');
      } else {
        _this._activeSpeakerMode = !!properties.activeSpeakerMode;
      }
    } else {
      _this._activeSpeakerMode = false;
    }

    if (properties.receiveSettings) {
      if (_this._callObjectMode) {
        _this._receiveSettings = properties.receiveSettings;
      } else {
        console.error('receiveSettings is only available in call object mode');
      }
    } else {
      // Here we avoid falling back to defaults, instead letting the call
      // machine decide on defaults when its loaded and telling us about them
      // via a DAILY_EVENT_RECEIVE_SETTINGS_UPDATED event. This will make it
      // easier to update defaults in the future, eliminating the worry of
      // daily-js getting out of sync with the call machine.
      _this._receiveSettings = {};
    }

    _this._inputSettings = {};

    if (properties.inputSettings) {
      // #Question: Do I need the call-object check here?
      _this._inputSettings = properties.inputSettings;
    }

    _this.validateProperties(properties);

    _this.properties = _objectSpread$1({}, properties);
    _this._callObjectLoader = _this._callObjectMode ? new CallObjectLoader() : null;
    _this._callState = DAILY_STATE_NEW; // only update via updateIsPreparingToJoin() or _updateCallState()

    _this._isPreparingToJoin = false; // only update via _updateCallState()

    _this._accessState = {
      access: DAILY_ACCESS_UNKNOWN
    };
    _this._meetingSessionState = DEFAULT_SESSION_STATE;
    _this._nativeInCallAudioMode = NATIVE_AUDIO_MODE_VIDEO_CALL;
    _this._participants = {};
    _this._participantCounts = EMPTY_PARTICIPANT_COUNTS;
    _this._rmpPlayerState = {};
    _this._waitingParticipants = {};
    _this._inputEventsOn = {}; // need to cache these until loaded

    _this._network = {
      threshold: 'good',
      quality: 100
    };
    _this._activeSpeaker = {};
    _this._callFrameId = randomStringId();
    _this._messageChannel = isReactNative() ? new ReactNativeMessageChannel() : new WebMessageChannel(); // fullscreen event listener

    if (_this._iframe) {
      if (_this._iframe.requestFullscreen) {
        // chrome (not safari)
        _this._iframe.addEventListener('fullscreenchange', function (e) {
          if (document.fullscreenElement === _this._iframe) {
            _this.emit(DAILY_EVENT_FULLSCREEN, {
              action: DAILY_EVENT_FULLSCREEN
            });

            _this.sendMessageToCallMachine({
              action: DAILY_EVENT_FULLSCREEN
            });
          } else {
            _this.emit(DAILY_EVENT_EXIT_FULLSCREEN, {
              action: DAILY_EVENT_EXIT_FULLSCREEN
            });

            _this.sendMessageToCallMachine({
              action: DAILY_EVENT_EXIT_FULLSCREEN
            });
          }
        });
      } else if (_this._iframe.webkitRequestFullscreen) {
        // safari
        _this._iframe.addEventListener('webkitfullscreenchange', function (e) {
          if (document.webkitFullscreenElement === _this._iframe) {
            _this.emit(DAILY_EVENT_FULLSCREEN, {
              action: DAILY_EVENT_FULLSCREEN
            });

            _this.sendMessageToCallMachine({
              action: DAILY_EVENT_FULLSCREEN
            });
          } else {
            _this.emit(DAILY_EVENT_EXIT_FULLSCREEN, {
              action: DAILY_EVENT_EXIT_FULLSCREEN
            });

            _this.sendMessageToCallMachine({
              action: DAILY_EVENT_EXIT_FULLSCREEN
            });
          }
        });
      }
    } // add native event listeners


    if (isReactNative()) {
      var nativeUtils = _this.nativeUtils();

      if (!(nativeUtils.addAudioFocusChangeListener && nativeUtils.removeAudioFocusChangeListener && nativeUtils.addAppActiveStateChangeListener && nativeUtils.removeAppActiveStateChangeListener)) {
        console.warn('expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native');
      } // audio focus event, used for auto-muting mic


      _this._hasNativeAudioFocus = true;
      nativeUtils.addAudioFocusChangeListener(_this.handleNativeAudioFocusChange); // app active state event, used for auto-muting cam

      nativeUtils.addAppActiveStateChangeListener(_this.handleNativeAppActiveStateChange);
    } // start available device change listener in call object mode (including RN).
    // note: in iframe mode, Prebuilt's internal call object will handle this,
    // and the events it sends will propagate up appropriately.


    if (_this._callObjectMode) {
      _this.startListeningForDeviceChanges();
    }

    _this._messageChannel.addListenerForMessagesFromCallMachine(_this.handleMessageFromCallMachine, _this._callFrameId, assertThisInitialized(_this));

    return _this;
  } //
  // instance methods
  //


  createClass(DailyIframe, [{
    key: "destroy",
    value: function () {
      var _destroy = asyncToGenerator(function* () {
        try {
          if ([DAILY_STATE_JOINED, DAILY_STATE_LOADING].includes(this._callState)) {
            yield this.leave();
          }
        } catch (e) {}

        var iframe = this._iframe;

        if (iframe) {
          var parent = iframe.parentElement;

          if (parent) {
            parent.removeChild(iframe);
          }
        }

        this._messageChannel.removeListener(this.handleMessageFromCallMachine); // tear down native event listeners


        if (isReactNative()) {
          var nativeUtils = this.nativeUtils();
          nativeUtils.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange);
          nativeUtils.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange);
        } // tear down available device change listener


        if (this._callObjectMode) {
          this.stopListeningForDeviceChanges();
        }

        this.resetMeetingDependentVars();
      });

      function destroy() {
        return _destroy.apply(this, arguments);
      }

      return destroy;
    }()
  }, {
    key: "loadCss",
    value: function loadCss(_ref3) {
      var bodyClass = _ref3.bodyClass,
          cssFile = _ref3.cssFile,
          cssText = _ref3.cssText;
      methodNotSupportedInReactNative();
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_LOAD_CSS,
        cssFile: this.absoluteUrl(cssFile),
        bodyClass: bodyClass,
        cssText: cssText
      });
      return this;
    }
  }, {
    key: "iframe",
    value: function iframe() {
      methodNotSupportedInReactNative();
      return this._iframe;
    }
  }, {
    key: "meetingState",
    value: function meetingState() {
      // TODO: This function will be deprecated and renamed to callState()
      //       for better consistency in naming
      return this._callState;
    }
  }, {
    key: "accessState",
    value: function accessState() {
      if (!this._callObjectMode) {
        throw new Error('accessState() currently only supported in call object mode');
      }

      return this._accessState;
    }
  }, {
    key: "participants",
    value: function participants() {
      return this._participants;
    }
  }, {
    key: "participantCounts",
    value: function participantCounts() {
      return this._participantCounts;
    }
  }, {
    key: "waitingParticipants",
    value: function waitingParticipants() {
      if (!this._callObjectMode) {
        throw new Error('waitingParticipants() currently only supported in call object mode');
      }

      return this._waitingParticipants;
    }
  }, {
    key: "validateParticipantProperties",
    value: function validateParticipantProperties(sessionId, properties) {
      for (var prop in properties) {
        if (!PARTICIPANT_PROPS[prop]) {
          throw new Error("unrecognized updateParticipant property ".concat(prop));
        }

        if (PARTICIPANT_PROPS[prop].validate) {
          if (!PARTICIPANT_PROPS[prop].validate(properties[prop], this, this._participants[sessionId])) {
            throw new Error(PARTICIPANT_PROPS[prop].help);
          }
        }
      }
    }
  }, {
    key: "updateParticipant",
    value: function updateParticipant(sessionId, properties) {
      if (this._participants.local && this._participants.local.session_id === sessionId) {
        sessionId = 'local';
      }

      if (sessionId && properties) {
        this.validateParticipantProperties(sessionId, properties);
        this.sendMessageToCallMachine({
          action: DAILY_METHOD_UPDATE_PARTICIPANT,
          id: sessionId,
          properties: properties
        });
      }

      return this;
    }
  }, {
    key: "updateParticipants",
    value: function updateParticipants(properties) {
      var localId = this._participants.local && this._participants.local.session_id;

      for (var sessionId in properties) {
        if (sessionId === localId) {
          sessionId = 'local';
        }

        if (sessionId && properties[sessionId]) {
          this.validateParticipantProperties(sessionId, properties[sessionId]);
        }
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_UPDATE_PARTICIPANTS,
        participants: properties
      });
      return this;
    }
  }, {
    key: "updateWaitingParticipant",
    value: function () {
      var _updateWaitingParticipant = asyncToGenerator(function* () {
        var _this2 = this;

        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var updates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Validate mode.
        if (!this._callObjectMode) {
          throw new Error('updateWaitingParticipant() currently only supported in call object mode');
        } // Validate call state: only allowed once you've joined.


        if (this._callState !== DAILY_STATE_JOINED) {
          throw new Error('updateWaitingParticipant() only supported for joined meetings');
        } // Validate argument presence.


        if (!(typeof id === 'string' && _typeof_1(updates) === 'object')) {
          throw new Error('updateWaitingParticipant() must take an id string and a updates object');
        }

        return new Promise(function (resolve, reject) {
          var k = function k(msg) {
            if (msg.error) {
              reject(msg.error);
            }

            if (!msg.id) {
              reject(new Error('unknown error in updateWaitingParticipant()'));
            }

            resolve({
              id: msg.id
            });
          };

          _this2.sendMessageToCallMachine({
            action: DAILY_METHOD_UPDATE_WAITING_PARTICIPANT,
            id: id,
            updates: updates
          }, k);
        });
      });

      function updateWaitingParticipant() {
        return _updateWaitingParticipant.apply(this, arguments);
      }

      return updateWaitingParticipant;
    }()
  }, {
    key: "updateWaitingParticipants",
    value: function () {
      var _updateWaitingParticipants = asyncToGenerator(function* () {
        var _this3 = this;

        var updatesById = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // Validate mode.
        if (!this._callObjectMode) {
          throw new Error('updateWaitingParticipants() currently only supported in call object mode');
        } // Validate call state: only allowed once you've joined.


        if (this._callState !== DAILY_STATE_JOINED) {
          throw new Error('updateWaitingParticipants() only supported for joined meetings');
        } // Validate argument presence.


        if (_typeof_1(updatesById) !== 'object') {
          throw new Error('updateWaitingParticipants() must take a mapping between ids and update objects');
        }

        return new Promise(function (resolve, reject) {
          var k = function k(msg) {
            if (msg.error) {
              reject(msg.error);
            }

            if (!msg.ids) {
              reject(new Error('unknown error in updateWaitingParticipants()'));
            }

            resolve({
              ids: msg.ids
            });
          };

          _this3.sendMessageToCallMachine({
            action: DAILY_METHOD_UPDATE_WAITING_PARTICIPANTS,
            updatesById: updatesById
          }, k);
        });
      });

      function updateWaitingParticipants() {
        return _updateWaitingParticipants.apply(this, arguments);
      }

      return updateWaitingParticipants;
    }()
  }, {
    key: "requestAccess",
    value: function () {
      var _requestAccess = asyncToGenerator(function* () {
        var _this4 = this;

        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref4$access = _ref4.access,
            access = _ref4$access === void 0 ? {
          level: DAILY_ACCESS_LEVEL_FULL
        } : _ref4$access,
            _ref4$name = _ref4.name,
            name = _ref4$name === void 0 ? '' : _ref4$name;

        // Validate mode.
        if (!this._callObjectMode) {
          throw new Error('requestAccess() currently only supported in call object mode');
        } // Validate call state: access requesting is only allowed once you've
        // joined.


        if (this._callState !== DAILY_STATE_JOINED) {
          throw new Error('requestAccess() only supported for joined meetings');
        }

        return new Promise(function (resolve, reject) {
          var k = function k(msg) {
            if (msg.error) {
              reject(msg.error);
            }

            if (!msg.access) {
              reject(new Error('unknown error in requestAccess()'));
            }

            resolve({
              access: msg.access,
              granted: msg.granted
            });
          };

          _this4.sendMessageToCallMachine({
            action: DAILY_METHOD_REQUEST_ACCESS,
            access: access,
            name: name
          }, k);
        });
      });

      function requestAccess() {
        return _requestAccess.apply(this, arguments);
      }

      return requestAccess;
    }()
  }, {
    key: "localAudio",
    value: function localAudio() {
      if (this._participants.local) {
        return this._participants.local.audio;
      }

      return null;
    }
  }, {
    key: "localVideo",
    value: function localVideo() {
      if (this._participants.local) {
        return this._participants.local.video;
      }

      return null;
    }
  }, {
    key: "setLocalAudio",
    value: function setLocalAudio(bool) {
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_LOCAL_AUDIO,
        state: bool
      });
      return this;
    }
  }, {
    key: "setLocalVideo",
    value: function setLocalVideo(bool) {
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_LOCAL_VIDEO,
        state: bool
      });
      return this;
    } // NOTE: "base" receive settings will not appear until the call machine bundle
    // is initialized (e.g. after a call to join()).
    // Listen for the receive-settings-updated to be notified when those come in.

  }, {
    key: "getReceiveSettings",
    value: function () {
      var _getReceiveSettings = asyncToGenerator(function* (id) {
        var _this5 = this;

        var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref5$showInheritedVa = _ref5.showInheritedValues,
            showInheritedValues = _ref5$showInheritedVa === void 0 ? false : _ref5$showInheritedVa;

        // Validate mode.
        if (!this._callObjectMode) {
          throw new Error('getReceiveSettings() only supported in call object mode');
        } // This method can be called in two main ways:
        // - it can get receive settings for a specific participant (or "base")
        // - it can get *all* receive settings


        switch (_typeof_1(id)) {
          // Case: getting receive settings for a single participant
          case 'string':
            // Ask call machine to get receive settings for the participant.
            // Centralizing this nontrivial fetching logic in the call machine,
            // rather than attempting to duplicate it here, avoids the problem of
            // daily-js and the call machine getting out of sync.
            return new Promise(function (resolve) {
              var k = function k(msg) {
                resolve(msg.receiveSettings);
              };

              _this5.sendMessageToCallMachine({
                action: DAILY_METHOD_GET_SINGLE_PARTICIPANT_RECEIVE_SETTINGS,
                id: id,
                showInheritedValues: showInheritedValues
              }, k);
            });
          // Case: getting all receive settings

          case 'undefined':
            return this._receiveSettings;

          default:
            throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
        }
      });

      function getReceiveSettings(_x) {
        return _getReceiveSettings.apply(this, arguments);
      }

      return getReceiveSettings;
    }()
  }, {
    key: "updateReceiveSettings",
    value: function () {
      var _updateReceiveSettings = asyncToGenerator(function* (receiveSettings) {
        var _this6 = this;

        // Validate mode.
        if (!this._callObjectMode) {
          throw new Error('updateReceiveSettings() only supported in call object mode');
        } // Validate receive settings.


        if (!validateReceiveSettings(receiveSettings, {
          allowAllParticipantsKey: true
        })) {
          throw new Error(receiveSettingsValidationHelpMsg({
            allowAllParticipantsKey: true
          }));
        } // Validate that call machine is joined.
        // (We need the Redux state to be set up first; technically, we could
        // proceed if we've either join()ed *or* preAuth()ed *or* startCamera()ed
        // but since there's an easy alternative way to specify initial receive
        // settings until join(), for simplicity let's just require that we be
        // joined).


        if (this._callState !== DAILY_STATE_JOINED) {
          throw new Error('updateReceiveSettings() is only allowed when joined. To specify receive settings earlier, use the receiveSettings config property.');
        } // Ask call machine to update receive settings, then await callback.


        return new Promise(function (resolve) {
          var k = function k(msg) {
            resolve({
              receiveSettings: msg.receiveSettings
            });
          };

          _this6.sendMessageToCallMachine({
            action: DAILY_METHOD_UPDATE_RECEIVE_SETTINGS,
            receiveSettings: receiveSettings
          }, k);
        });
      });

      function updateReceiveSettings(_x2) {
        return _updateReceiveSettings.apply(this, arguments);
      }

      return updateReceiveSettings;
    }() // Input Settings Getter
    // { video: { processor } }
    // In the future:
    // { video: {...}, audio: {...}, screenVideo: {...}, screenAudio: {...} }

  }, {
    key: "getInputSettings",
    value: function getInputSettings() {
      var _this7 = this;

      return new Promise(function (resolve) {
        resolve(_this7._inputSettings);
      });
    }
  }, {
    key: "updateInputSettings",
    value: function () {
      var _updateInputSettings = asyncToGenerator(function* (inputSettings) {
        var _this8 = this;

        // Ask call machine to update input settings, then await callback.
        return new Promise(function (resolve, reject) {
          if (!validateInputSettings(inputSettings)) {
            console.error(inputSettingsValidationHelpMsg());
            reject(inputSettingsValidationHelpMsg());
            return;
          }

          var k = function k(msg) {
            if (msg.error) {
              reject(msg.error);
            } else {
              resolve({
                inputSettings: msg.inputSettings
              });
            }
          };

          _this8.sendMessageToCallMachine({
            action: DAILY_METHOD_UPDATE_INPUT_SETTINGS,
            inputSettings: inputSettings
          }, k);
        });
      });

      function updateInputSettings(_x3) {
        return _updateInputSettings.apply(this, arguments);
      }

      return updateInputSettings;
    }()
  }, {
    key: "setBandwidth",
    value: function setBandwidth(_ref6) {
      var kbs = _ref6.kbs,
          trackConstraints = _ref6.trackConstraints;
      methodNotSupportedInReactNative();
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_BANDWIDTH,
        kbs: kbs,
        trackConstraints: trackConstraints
      });
      return this;
    }
  }, {
    key: "getDailyLang",
    value: function getDailyLang() {
      var _this9 = this;

      methodNotSupportedInReactNative();
      return new Promise( /*#__PURE__*/function () {
        var _ref7 = asyncToGenerator(function* (resolve) {
          var k = function k(msg) {
            delete msg.action;
            delete msg.callbackStamp;
            resolve(msg);
          };

          _this9.sendMessageToCallMachine({
            action: DAILY_METHOD_GET_LANG
          }, k);
        });

        return function (_x4) {
          return _ref7.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "setDailyLang",
    value: function setDailyLang(lang) {
      methodNotSupportedInReactNative();
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_LANG,
        lang: lang
      });
      return this;
    }
  }, {
    key: "getMeetingSession",
    value: function () {
      var _getMeetingSession = asyncToGenerator(function* () {
        var _this10 = this;

        // Validate call state: meeting session details are only available
        // once you have joined the meeting
        if (this._callState !== DAILY_STATE_JOINED) {
          throw new Error('getMeetingSession() is only allowed when joined');
        }

        return new Promise(function (resolve) {
          var k = function k(msg) {
            delete msg.action;
            delete msg.callbackStamp;
            delete msg.callFrameId;
            resolve(msg);
          };

          _this10.sendMessageToCallMachine({
            action: DAILY_METHOD_GET_MEETING_SESSION
          }, k);
        });
      });

      function getMeetingSession() {
        return _getMeetingSession.apply(this, arguments);
      }

      return getMeetingSession;
    }()
  }, {
    key: "meetingSessionState",
    value: function meetingSessionState() {
      // Validate call state: meeting session details are only available
      // once you have joined the meeting
      if (this._callState !== DAILY_STATE_JOINED) {
        throw new Error('meetingSessionState() is only available when joined');
      } // currently only default values returned


      return this._meetingSessionState;
    }
  }, {
    key: "setMeetingSessionData",
    value: function setMeetingSessionData(data) {
      var mergeStrategy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'replace';

      // Validate call state: session data can only be set once you have
      // joined the meeting
      if (this._callState !== DAILY_STATE_JOINED) {
        throw new Error('setMeetingSessionData() is only available when joined');
      }

      try {
        validateSessionDataUpdate(data, mergeStrategy);
      } catch (e) {
        console.error(e);
        throw e;
      }

      try {
        this.sendMessageToCallMachine({
          action: DAILY_METHOD_SET_SESSION_DATA,
          data: data,
          mergeStrategy: mergeStrategy
        });
      } catch (e) {
        // Probably data was not structured-clonable and couldn't be sent in the
        // message to the call machine...
        throw new Error("Error setting meeting session data: ".concat(e));
      }
    }
  }, {
    key: "setUserName",
    value: function setUserName(name, options) {
      var _this11 = this;

      this.properties.userName = name;
      return new Promise(function (resolve) {
        var k = function k(msg) {
          delete msg.action;
          delete msg.callbackStamp;
          resolve(msg);
        };

        _this11.sendMessageToCallMachine({
          action: DAILY_METHOD_SET_USER_NAME,
          name: name !== null && name !== void 0 ? name : '',
          thisMeetingOnly: isReactNative() || (options ? !!options.thisMeetingOnly : false)
        }, k);
      });
    }
  }, {
    key: "setUserData",
    value: function () {
      var _setUserData = asyncToGenerator(function* (data) {
        var _this12 = this;

        try {
          validateUserData(data);
        } catch (e) {
          console.error(e);
          throw e;
        }

        this.properties.userData = data;
        return new Promise(function (resolve) {
          var k = function k(msg) {
            delete msg.action;
            delete msg.callbackStamp;
            delete msg.callFrameId;
            resolve(msg);
          };

          try {
            _this12.sendMessageToCallMachine({
              action: DAILY_METHOD_SET_USER_DATA,
              userData: data
            }, k);
          } catch (e) {
            // Probably userData was not structured-clonable and couldn't be sent in
            // a message to the call machine...
            throw new Error("Error setting user data: ".concat(e));
          }
        });
      });

      function setUserData(_x5) {
        return _setUserData.apply(this, arguments);
      }

      return setUserData;
    }()
  }, {
    key: "startCamera",
    value: function startCamera() {
      var _this13 = this;

      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Validate mode.
      if (!this._callObjectMode) {
        throw new Error('startCamera() currently only supported in call object mode');
      } // Validate call state: startCamera() is only allowed if you haven't
      // already joined (or aren't in the process of joining).


      if ([DAILY_STATE_JOINING, DAILY_STATE_JOINED].includes(this._callState)) {
        throw new Error('startCamera() not supported after joining a meeting: did you mean to use setLocalAudio() and/or setLocalVideo() instead?');
      }

      return new Promise( /*#__PURE__*/function () {
        var _ref8 = asyncToGenerator(function* (resolve, reject) {
          var k = function k(msg) {
            delete msg.action;
            delete msg.callbackStamp;
            resolve(msg);
          };

          if (_this13.needsLoad()) {
            try {
              yield _this13.load(properties);
            } catch (e) {
              reject(e);
            }
          } else {
            // even if is already loaded, needs to validate the properties, so the dailyConfig properties can be inserted inside window._dailyConfig
            _this13.validateProperties(properties);
          }

          _this13.sendMessageToCallMachine({
            action: DAILY_METHOD_START_CAMERA,
            properties: makeSafeForPostMessage(_this13.properties),
            preloadCache: makeSafeForPostMessage(_this13._preloadCache)
          }, k);
        });

        return function (_x6, _x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "validateCustomTrack",
    value: function validateCustomTrack(track, mode, trackName) {
      if (trackName && trackName.length > 50) {
        throw new Error('Custom track `trackName` must not be more than 50 characters');
      }

      if (mode) {
        // Since no property from DailyMicAudioModeSettings is required, we are just checking if It is an object
        if (mode !== 'music' && mode !== 'speech' && !(mode instanceof Object)) {
          throw new Error('Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`');
        }
      }

      var isUsingReservedTrackName = trackName ? ['cam-audio', 'cam-video', 'screen-video', 'screen-audio', 'rmpAudio', 'rmpVideo'].includes(trackName) : false;

      if (isUsingReservedTrackName) {
        throw new Error('Custom track `trackName` must not match a track name already used by daily: ' + 'cam-audio, cam-video, screen-video, screen-audio, rmpAudio, rmpVideo');
      }

      if (!(track instanceof MediaStreamTrack)) {
        throw new Error('Custom tracks provided must be instances of MediaStreamTrack');
      }
    }
  }, {
    key: "startCustomTrack",
    value: function startCustomTrack() {
      var _this14 = this;

      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        track: track,
        mode: mode,
        trackName: trackName
      };
      methodNotSupportedInReactNative();
      this.validateCustomTrack(properties.track, properties.mode, properties.trackName); // Validate meeting state: custom tracks are only available
      // once you have joined the meeting

      if (this._callState !== DAILY_STATE_JOINED) {
        throw new Error('startCustomTrack() is only allowed when joined');
      }

      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          if (msg.error) {
            reject({
              error: msg.error
            });
          } else {
            resolve(msg.mediaTag);
          }
        };

        window._dailyPreloadCache.customTrack = properties.track;
        properties.track = DAILY_CUSTOM_TRACK;

        _this14.sendMessageToCallMachine({
          action: DAILY_METHOD_START_CUSTOM_TRACK,
          properties: properties
        }, k);
      });
    }
  }, {
    key: "stopCustomTrack",
    value: function stopCustomTrack(trackName) {
      var _this15 = this;

      methodNotSupportedInReactNative(); // Validate meeting state: custom tracks are only available
      // once you have joined the meeting

      if (this._callState !== DAILY_STATE_JOINED) {
        throw new Error('stopCustomTrack() is only allowed when joined');
      }

      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          resolve(msg.mediaTag);
        };

        _this15.sendMessageToCallMachine({
          action: DAILY_METHOD_STOP_CUSTOM_TRACK,
          mediaTag: trackName
        }, k);
      });
    }
  }, {
    key: "setCamera",
    value: function setCamera(cameraDeviceId) {
      var _this16 = this;

      methodOnlySupportedInReactNative();

      if (this.needsLoad()) {
        throw new Error('Before you can invoke setCamera, first you need to invoke one of these methods: join, startCamera, or preAuth');
      }

      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          resolve({
            device: msg.device
          });
        };

        _this16.sendMessageToCallMachine({
          action: DAILY_METHOD_SET_CAMERA,
          cameraDeviceId: cameraDeviceId
        }, k);
      });
    }
  }, {
    key: "setAudioDevice",
    value: function () {
      var _setAudioDevice = asyncToGenerator(function* (deviceId) {
        methodOnlySupportedInReactNative();
        this.nativeUtils().setAudioDevice(deviceId);
        var currentAudioDevice = yield this.nativeUtils().getAudioDevice();
        return {
          deviceId: currentAudioDevice
        };
      });

      function setAudioDevice(_x8) {
        return _setAudioDevice.apply(this, arguments);
      }

      return setAudioDevice;
    }()
  }, {
    key: "cycleCamera",
    value: function cycleCamera() {
      var _this17 = this;

      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          resolve({
            device: msg.device
          });
        };

        _this17.sendMessageToCallMachine({
          action: DAILY_METHOD_CYCLE_CAMERA
        }, k);
      });
    }
  }, {
    key: "cycleMic",
    value: function cycleMic() {
      var _this18 = this;

      methodNotSupportedInReactNative();
      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          resolve({
            device: msg.device
          });
        };

        _this18.sendMessageToCallMachine({
          action: DAILY_METHOD_CYCLE_MIC
        }, k);
      });
    }
  }, {
    key: "getCameraFacingMode",
    value: function getCameraFacingMode() {
      var _this19 = this;

      methodOnlySupportedInReactNative();
      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          resolve(msg.facingMode);
        };

        _this19.sendMessageToCallMachine({
          action: DAILY_METHOD_GET_CAMERA_FACING_MODE
        }, k);
      });
    }
  }, {
    key: "setInputDevices",
    value: function setInputDevices(_ref9) {
      var audioDeviceId = _ref9.audioDeviceId,
          videoDeviceId = _ref9.videoDeviceId,
          audioSource = _ref9.audioSource,
          videoSource = _ref9.videoSource;
      console.warn('setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise');
      this.setInputDevicesAsync({
        audioDeviceId: audioDeviceId,
        videoDeviceId: videoDeviceId,
        audioSource: audioSource,
        videoSource: videoSource
      });
      return this;
    }
  }, {
    key: "setInputDevicesAsync",
    value: function () {
      var _setInputDevicesAsync = asyncToGenerator(function* (_ref10) {
        var _this20 = this;

        var audioDeviceId = _ref10.audioDeviceId,
            videoDeviceId = _ref10.videoDeviceId,
            audioSource = _ref10.audioSource,
            videoSource = _ref10.videoSource;
        methodNotSupportedInReactNative(); // use audioDeviceId and videoDeviceId internally

        if (audioSource !== undefined) {
          audioDeviceId = audioSource;
        }

        if (videoSource !== undefined) {
          videoDeviceId = videoSource;
        } // cache these for use in subsequent calls


        if (audioDeviceId) {
          this._preloadCache.audioDeviceId = audioDeviceId;
        }

        if (videoDeviceId) {
          this._preloadCache.videoDeviceId = videoDeviceId;
        } // if we're in callObject mode and not loaded yet, don't do anything


        if (this._callObjectMode && this.needsLoad()) {
          return {
            camera: {
              deviceId: this._preloadCache.videoDeviceId
            },
            mic: {
              deviceId: this._preloadCache.audioDeviceId
            },
            speaker: {
              deviceId: this._preloadCache.outputDeviceId
            }
          };
        }

        if (audioDeviceId instanceof MediaStreamTrack) {
          audioDeviceId = DAILY_CUSTOM_TRACK;
        }

        if (videoDeviceId instanceof MediaStreamTrack) {
          videoDeviceId = DAILY_CUSTOM_TRACK;
        }

        return new Promise(function (resolve) {
          var k = function k(msg) {
            delete msg.action;
            delete msg.callbackStamp;

            if (msg.returnPreloadCache) {
              resolve({
                camera: {
                  deviceId: _this20._preloadCache.videoDeviceId
                },
                mic: {
                  deviceId: _this20._preloadCache.audioDeviceId
                },
                speaker: {
                  deviceId: _this20._preloadCache.outputDeviceId
                }
              });
              return;
            }

            resolve(msg);
          };

          _this20.sendMessageToCallMachine({
            action: DAILY_METHOD_SET_INPUT_DEVICES,
            audioDeviceId: audioDeviceId,
            videoDeviceId: videoDeviceId
          }, k);
        });
      });

      function setInputDevicesAsync(_x9) {
        return _setInputDevicesAsync.apply(this, arguments);
      }

      return setInputDevicesAsync;
    }()
  }, {
    key: "setOutputDevice",
    value: function setOutputDevice(_ref11) {
      var outputDeviceId = _ref11.outputDeviceId;
      console.warn('setOutputDevice() is deprecated: instead use setOutputDeviceAsync(), which returns a Promise');
      this.setOutputDeviceAsync({
        outputDeviceId: outputDeviceId
      });
      return this;
    }
  }, {
    key: "setOutputDeviceAsync",
    value: function () {
      var _setOutputDeviceAsync = asyncToGenerator(function* (_ref12) {
        var _this21 = this;

        var outputDeviceId = _ref12.outputDeviceId;
        methodNotSupportedInReactNative(); // cache this for use later

        if (outputDeviceId) {
          this._preloadCache.outputDeviceId = outputDeviceId;
        } // if we're in callObject mode and not loaded yet, don't do anything


        if (this._callObjectMode && this.needsLoad()) {
          return {
            camera: {
              deviceId: this._preloadCache.videoDeviceId
            },
            mic: {
              deviceId: this._preloadCache.audioDeviceId
            },
            speaker: {
              deviceId: this._preloadCache.outputDeviceId
            }
          };
        }

        return new Promise(function (resolve) {
          var k = function k(msg) {
            delete msg.action;
            delete msg.callbackStamp;

            if (msg.returnPreloadCache) {
              resolve({
                camera: {
                  deviceId: _this21._preloadCache.videoDeviceId
                },
                mic: {
                  deviceId: _this21._preloadCache.audioDeviceId
                },
                speaker: {
                  deviceId: _this21._preloadCache.outputDeviceId
                }
              });
              return;
            }

            resolve(msg);
          };

          _this21.sendMessageToCallMachine({
            action: DAILY_METHOD_SET_OUTPUT_DEVICE,
            outputDeviceId: outputDeviceId
          }, k);
        });
      });

      function setOutputDeviceAsync(_x10) {
        return _setOutputDeviceAsync.apply(this, arguments);
      }

      return setOutputDeviceAsync;
    }()
  }, {
    key: "getInputDevices",
    value: function () {
      var _getInputDevices = asyncToGenerator(function* () {
        var _this22 = this;

        if (this._callObjectMode && this.needsLoad()) {
          return {
            camera: {
              deviceId: this._preloadCache.videoDeviceId
            },
            mic: {
              deviceId: this._preloadCache.audioDeviceId
            },
            speaker: {
              deviceId: this._preloadCache.outputDeviceId
            }
          };
        }

        return new Promise(function (resolve, reject) {
          var k = function k(msg) {
            delete msg.action;
            delete msg.callbackStamp;

            if (msg.returnPreloadCache) {
              resolve({
                camera: {
                  deviceId: _this22._preloadCache.videoDeviceId
                },
                mic: {
                  deviceId: _this22._preloadCache.audioDeviceId
                },
                speaker: {
                  deviceId: _this22._preloadCache.outputDeviceId
                }
              });
              return;
            }

            resolve(msg);
          };

          _this22.sendMessageToCallMachine({
            action: DAILY_METHOD_GET_INPUT_DEVICES
          }, k);
        });
      });

      function getInputDevices() {
        return _getInputDevices.apply(this, arguments);
      }

      return getInputDevices;
    }()
  }, {
    key: "nativeInCallAudioMode",
    value: function nativeInCallAudioMode() {
      methodOnlySupportedInReactNative();
      return this._nativeInCallAudioMode;
    }
  }, {
    key: "setNativeInCallAudioMode",
    value: function setNativeInCallAudioMode(inCallAudioMode) {
      methodOnlySupportedInReactNative();

      if (![NATIVE_AUDIO_MODE_VIDEO_CALL, NATIVE_AUDIO_MODE_VOICE_CALL].includes(inCallAudioMode)) {
        console.error('invalid in-call audio mode specified: ', inCallAudioMode);
        return;
      }

      if (inCallAudioMode === this._nativeInCallAudioMode) {
        return;
      } // Set new audio mode (video call, audio call) to use when we're in a call


      this._nativeInCallAudioMode = inCallAudioMode; // If we're in a call now, apply the new audio mode
      // (assuming automatic audio device management isn't disabled)

      if (!this.disableReactNativeAutoDeviceManagement('audio') && this._isCallPendingOrOngoing(this._callState, this._isPreparingToJoin)) {
        this.nativeUtils().setAudioMode(this._nativeInCallAudioMode);
      }

      return this;
    }
  }, {
    key: "preAuth",
    value: function () {
      var _preAuth = asyncToGenerator(function* () {
        var _this23 = this;

        var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // Validate mode.
        if (!this._callObjectMode) {
          throw new Error('preAuth() currently only supported in call object mode');
        } // Validate call state: pre-auth is only allowed if you haven't already
        // joined (or aren't in the process of joining).


        if ([DAILY_STATE_JOINING, DAILY_STATE_JOINED].includes(this._callState)) {
          throw new Error('preAuth() not supported after joining a meeting');
        } // Load call machine bundle, if needed.


        if (this.needsLoad()) {
          yield this.load(properties);
        } // Assign properties, ensuring that at a minimum url is set.


        if (!properties.url) {
          throw new Error('preAuth() requires at least a url to be provided');
        }

        this.validateProperties(properties);
        this.properties = _objectSpread$1(_objectSpread$1({}, this.properties), properties); // Pre-auth with the server.

        return new Promise(function (resolve, reject) {
          var k = function k(msg) {
            if (msg.error) {
              return reject(msg.error);
            }

            if (!msg.access) {
              return reject(new Error('unknown error in preAuth()'));
            } // Set a flag indicating that we've pre-authed.
            // This flag has the effect of "locking in" url and token, so that they
            // can't be changed subsequently on join(), which would invalidate this
            // pre-auth.


            _this23._didPreAuth = true;
            resolve({
              access: msg.access
            });
          };

          _this23.sendMessageToCallMachine({
            action: DAILY_METHOD_PREAUTH,
            properties: makeSafeForPostMessage(_this23.properties)
          }, k);
        });
      });

      function preAuth() {
        return _preAuth.apply(this, arguments);
      }

      return preAuth;
    }()
  }, {
    key: "load",
    value: function () {
      var _load = asyncToGenerator(function* (properties) {
        var _this24 = this;

        if (!this.needsLoad()) {
          return;
        }

        if (properties) {
          this.validateProperties(properties);
          this.properties = _objectSpread$1(_objectSpread$1({}, this.properties), properties);
        } // In iframe mode, we *must* have a meeting url
        // (As opposed to call object mode, where a meeting url, a base url, or no
        // url at all are all valid here)


        if (!this._callObjectMode && !this.properties.url) {
          throw new Error("can't load iframe meeting because url property isn't set");
        }

        this._updateCallState(DAILY_STATE_LOADING);

        try {
          this.emit(DAILY_EVENT_LOADING, {
            action: DAILY_EVENT_LOADING
          });
        } catch (e) {
          console.log("could not emit 'loading'", e);
        }

        if (this._callObjectMode) {
          // non-iframe, callObjectMode
          return new Promise(function (resolve, reject) {
            _this24._callObjectLoader.cancel();

            _this24._callObjectLoader.load(_this24._callFrameId, _this24.properties.dailyConfig && _this24.properties.dailyConfig.avoidEval, function (wasNoOp) {
              _this24._updateCallState(DAILY_STATE_LOADED); // Only need to emit event if load was a no-op, since the loaded
              // bundle won't be emitting it if it's not executed again


              wasNoOp && _this24.emit(DAILY_EVENT_LOADED, {
                action: DAILY_EVENT_LOADED
              });
              resolve();
            }, function (errorMsg, willRetry) {
              _this24.emit(DAILY_EVENT_LOAD_ATTEMPT_FAILED, {
                action: DAILY_EVENT_LOAD_ATTEMPT_FAILED,
                errorMsg: errorMsg
              });

              if (!willRetry) {
                _this24._updateCallState(DAILY_STATE_ERROR);

                _this24.resetMeetingDependentVars();

                _this24.emit(DAILY_EVENT_ERROR, {
                  action: DAILY_EVENT_ERROR,
                  errorMsg: errorMsg
                });

                reject(errorMsg);
              }
            });
          });
        } else {
          // iframe
          this._iframe.src = this.assembleMeetingUrl();
          return new Promise(function (resolve, reject) {
            _this24._loadedCallback = function (error) {
              if (_this24._callState === DAILY_STATE_ERROR) {
                reject(error);
                return;
              }

              _this24._updateCallState(DAILY_STATE_LOADED);

              if (_this24.properties.cssFile || _this24.properties.cssText) {
                _this24.loadCss(_this24.properties);
              }

              for (var eventName in _this24._inputEventsOn) {
                _this24.sendMessageToCallMachine({
                  action: DAILY_METHOD_REGISTER_INPUT_HANDLER,
                  on: eventName
                });
              }

              resolve();
            };
          });
        }
      });

      function load(_x11) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "join",
    value: function () {
      var _join = asyncToGenerator(function* () {
        var _this25 = this;

        var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var newCss = false;

        if (this.needsLoad()) {
          this.updateIsPreparingToJoin(true);

          try {
            yield this.load(properties);
          } catch (e) {
            this.updateIsPreparingToJoin(false);
            return Promise.reject(e);
          }
        } else {
          newCss = !!(this.properties.cssFile || this.properties.cssText); // Validate that any provided url or token doesn't conflict with url or
          // token already used to preAuth()

          if (this._didPreAuth) {
            if (properties.url && properties.url !== this.properties.url) {
              console.error("url in join() is different than the one used in preAuth()");
              this.updateIsPreparingToJoin(false);
              return Promise.reject();
            }

            if (properties.token && properties.token !== this.properties.token) {
              console.error("token in join() is different than the one used in preAuth()");
              this.updateIsPreparingToJoin(false);
              return Promise.reject();
            }
          } // In iframe mode, validate that url we're using to join() doesn't
          // conflict with the url we used to load()


          if (properties.url && !this._callObjectMode) {
            if (properties.url && properties.url !== this.properties.url) {
              console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(properties.url, ")"));
              this.updateIsPreparingToJoin(false);
              return Promise.reject();
            }
          } // Validate and assign properties to this.properties, for use by call
          // machine


          this.validateProperties(properties);
          this.properties = _objectSpread$1(_objectSpread$1({}, this.properties), properties);
        } // only update if showLocalVideo/showParticipantsBar are being explicitly set


        if (properties.showLocalVideo !== undefined) {
          if (this._callObjectMode) {
            console.error('showLocalVideo is not available in callObject mode');
          } else {
            this._showLocalVideo = !!properties.showLocalVideo;
          }
        }

        if (properties.showParticipantsBar !== undefined) {
          if (this._callObjectMode) {
            console.error('showParticipantsBar is not available in callObject mode');
          } else {
            this._showParticipantsBar = !!properties.showParticipantsBar;
          }
        }

        if (this._callState === DAILY_STATE_JOINED || this._callState === DAILY_STATE_JOINING) {
          console.warn('already joined meeting, call leave() before joining again');
          this.updateIsPreparingToJoin(false);
          return;
        }

        this._updateCallState(DAILY_STATE_JOINING, false);

        try {
          this.emit(DAILY_EVENT_JOINING_MEETING, {
            action: DAILY_EVENT_JOINING_MEETING
          });
        } catch (e) {
          console.log("could not emit 'joining-meeting'", e);
        }

        this.sendMessageToCallMachine({
          action: DAILY_METHOD_JOIN,
          properties: makeSafeForPostMessage(this.properties),
          preloadCache: makeSafeForPostMessage(this._preloadCache)
        });
        return new Promise(function (resolve, reject) {
          _this25._joinedCallback = function (participants, error) {
            if (_this25._callState === DAILY_STATE_ERROR) {
              reject(error);
              return;
            }

            _this25._updateCallState(DAILY_STATE_JOINED);

            if (participants) {
              for (var id in participants) {
                if (_this25._callObjectMode) {
                  addTracks(participants[id]);
                  addCustomTracks(participants[id]);
                  addLegacyTracks(participants[id], _this25._participants[id]);
                }

                _this25._participants[id] = _objectSpread$1({}, participants[id]);

                _this25.toggleParticipantAudioBasedOnNativeAudioFocus();
              }
            }

            if (newCss) {
              _this25.loadCss(_this25.properties);
            }

            resolve(participants);
          };
        });
      });

      function join() {
        return _join.apply(this, arguments);
      }

      return join;
    }()
  }, {
    key: "leave",
    value: function () {
      var _leave = asyncToGenerator(function* () {
        var _this26 = this;

        return new Promise(function (resolve, _) {
          if (_this26._callObjectLoader && !_this26._callObjectLoader.loaded) {
            // If call object bundle never successfully loaded, cancel load if
            // needed and clean up state immediately (without waiting for call
            // machine to clean up its state).
            _this26._callObjectLoader.cancel();

            _this26._updateCallState(DAILY_STATE_LEFT);

            _this26.resetMeetingDependentVars();

            try {
              _this26.emit(DAILY_STATE_LEFT, {
                action: DAILY_STATE_LEFT
              });
            } catch (e) {
              console.log("could not emit 'left-meeting'", e);
            }

            resolve();
          } else if (_this26._callState === DAILY_STATE_LEFT || _this26._callState === DAILY_STATE_ERROR) {
            // nothing to do, here, just resolve
            resolve();
          } else {
            _this26._resolveLeave = resolve; // TODO: the possibility that the iframe call machine is not yet loaded
            // is never handled here...

            _this26.sendMessageToCallMachine({
              action: DAILY_METHOD_LEAVE
            });
          }
        });
      });

      function leave() {
        return _leave.apply(this, arguments);
      }

      return leave;
    }()
  }, {
    key: "startScreenShare",
    value: function startScreenShare() {
      var captureOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      methodNotSupportedInReactNative();

      if (captureOptions.mediaStream) {
        this._preloadCache.screenMediaStream = captureOptions.mediaStream;
        captureOptions.mediaStream = DAILY_CUSTOM_TRACK;
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_START_SCREENSHARE,
        captureOptions: captureOptions
      });
    }
  }, {
    key: "stopScreenShare",
    value: function stopScreenShare() {
      methodNotSupportedInReactNative();
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_STOP_SCREENSHARE
      });
    }
  }, {
    key: "startRecording",
    value: function startRecording() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.sendMessageToCallMachine(_objectSpread$1({
        action: DAILY_METHOD_START_RECORDING
      }, args));
    }
  }, {
    key: "updateRecording",
    value: function updateRecording(_ref13) {
      var _ref13$layout = _ref13.layout,
          layout = _ref13$layout === void 0 ? {
        preset: 'default'
      } : _ref13$layout,
          instanceId = _ref13.instanceId;
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_UPDATE_RECORDING,
        layout: layout,
        instanceId: instanceId
      });
    }
  }, {
    key: "stopRecording",
    value: function stopRecording() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.sendMessageToCallMachine(_objectSpread$1({
        action: DAILY_METHOD_STOP_RECORDING
      }, args));
    }
  }, {
    key: "startLiveStreaming",
    value: function startLiveStreaming() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.sendMessageToCallMachine(_objectSpread$1({
        action: DAILY_METHOD_START_LIVE_STREAMING
      }, args));
    }
  }, {
    key: "updateLiveStreaming",
    value: function updateLiveStreaming(_ref14) {
      var _ref14$layout = _ref14.layout,
          layout = _ref14$layout === void 0 ? {
        preset: 'default'
      } : _ref14$layout,
          instanceId = _ref14.instanceId;
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_UPDATE_LIVE_STREAMING,
        layout: layout,
        instanceId: instanceId
      });
    }
  }, {
    key: "addLiveStreamingEndpoints",
    value: function addLiveStreamingEndpoints(_ref15) {
      var endpoints = _ref15.endpoints,
          instanceId = _ref15.instanceId;
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_UPDATE_LIVE_STREAMING_ENDPOINTS,
        endpointsOp: UPDATE_LIVE_STREAMING_ENDPOINTS_OP.ADD_ENDPOINTS,
        endpoints: endpoints,
        instanceId: instanceId
      });
    }
  }, {
    key: "removeLiveStreamingEndpoints",
    value: function removeLiveStreamingEndpoints(_ref16) {
      var endpoints = _ref16.endpoints,
          instanceId = _ref16.instanceId;
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_UPDATE_LIVE_STREAMING_ENDPOINTS,
        endpointsOp: UPDATE_LIVE_STREAMING_ENDPOINTS_OP.REMOVE_ENDPOINTS,
        endpoints: endpoints,
        instanceId: instanceId
      });
    }
  }, {
    key: "stopLiveStreaming",
    value: function stopLiveStreaming() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.sendMessageToCallMachine(_objectSpread$1({
        action: DAILY_METHOD_STOP_LIVE_STREAMING
      }, args));
    }
  }, {
    key: "startRemoteMediaPlayer",
    value: function () {
      var _startRemoteMediaPlayer = asyncToGenerator(function* (_ref17) {
        var _this27 = this;

        var url = _ref17.url,
            _ref17$settings = _ref17.settings,
            settings = _ref17$settings === void 0 ? {
          state: DAILY_JS_REMOTE_MEDIA_PLAYER_SETTING.PLAY
        } : _ref17$settings;

        try {
          validateRemotePlayerUrl(url);
          validateRemotePlayerSettings(settings);
          validateRemotePlayerEncodingSettings(settings);
        } catch (e) {
          console.error("invalid argument Error: ".concat(e));
          console.error(remoteMediaPlayerStartValidationHelpMsg());
          throw e;
        }

        return new Promise( /*#__PURE__*/function () {
          var _ref18 = asyncToGenerator(function* (resolve, reject) {
            var k = function k(msg) {
              if (msg.error) {
                reject({
                  error: msg.error,
                  errorMsg: msg.errorMsg
                });
              } else {
                resolve({
                  session_id: msg.session_id,
                  remoteMediaPlayerState: {
                    state: msg.state,
                    settings: msg.settings
                  }
                });
              }
            };

            _this27.sendMessageToCallMachine({
              action: DAILY_METHOD_START_REMOTE_MEDIA_PLAYER,
              url: url,
              settings: settings
            }, k);
          });

          return function (_x13, _x14) {
            return _ref18.apply(this, arguments);
          };
        }());
      });

      function startRemoteMediaPlayer(_x12) {
        return _startRemoteMediaPlayer.apply(this, arguments);
      }

      return startRemoteMediaPlayer;
    }()
  }, {
    key: "stopRemoteMediaPlayer",
    value: function () {
      var _stopRemoteMediaPlayer = asyncToGenerator(function* (session_id) {
        var _this28 = this;

        if (typeof session_id !== 'string') throw new Error(' remotePlayerID must be of type string');
        return new Promise( /*#__PURE__*/function () {
          var _ref19 = asyncToGenerator(function* (resolve, reject) {
            var k = function k(msg) {
              if (msg.error) {
                reject({
                  error: msg.error,
                  errorMsg: msg.errorMsg
                });
              } else {
                resolve();
              }
            };

            _this28.sendMessageToCallMachine({
              action: DAILY_METHOD_STOP_REMOTE_MEDIA_PLAYER,
              session_id: session_id
            }, k);
          });

          return function (_x16, _x17) {
            return _ref19.apply(this, arguments);
          };
        }());
      });

      function stopRemoteMediaPlayer(_x15) {
        return _stopRemoteMediaPlayer.apply(this, arguments);
      }

      return stopRemoteMediaPlayer;
    }()
  }, {
    key: "updateRemoteMediaPlayer",
    value: function () {
      var _updateRemoteMediaPlayer = asyncToGenerator(function* (_ref20) {
        var _this29 = this;

        var session_id = _ref20.session_id,
            settings = _ref20.settings;

        // TODO: Add check of the current_state === desired state
        // And resolve() from here itself.
        try {
          validateRemotePlayerSettings(settings);
        } catch (e) {
          console.error("invalid argument Error: ".concat(e));
          console.error(remoteMediaPlayerUpdateValidationHelpMsg());
          throw e;
        }

        return new Promise( /*#__PURE__*/function () {
          var _ref21 = asyncToGenerator(function* (resolve, reject) {
            var k = function k(msg) {
              if (msg.error) {
                reject({
                  error: msg.error,
                  errorMsg: msg.errorMsg
                });
              } else {
                resolve({
                  session_id: msg.session_id,
                  remoteMediaPlayerState: {
                    state: msg.state,
                    settings: msg.settings
                  }
                });
              }
            };

            _this29.sendMessageToCallMachine({
              action: DAILY_METHOD_UPDATE_REMOTE_MEDIA_PLAYER,
              session_id: session_id,
              settings: settings
            }, k);
          });

          return function (_x19, _x20) {
            return _ref21.apply(this, arguments);
          };
        }());
      });

      function updateRemoteMediaPlayer(_x18) {
        return _updateRemoteMediaPlayer.apply(this, arguments);
      }

      return updateRemoteMediaPlayer;
    }()
  }, {
    key: "startTranscription",
    value: function startTranscription(args) {
      this.sendMessageToCallMachine(_objectSpread$1({
        action: DAILY_METHOD_START_TRANSCRIPTION
      }, args));
    }
  }, {
    key: "stopTranscription",
    value: function stopTranscription() {
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_STOP_TRANSCRIPTION
      });
    }
  }, {
    key: "getNetworkStats",
    value: function getNetworkStats() {
      var _this30 = this;

      if (this._callState !== DAILY_STATE_JOINED) {
        var stats = {
          latest: {}
        };
        return {
          stats: stats
        };
      }

      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          resolve(_objectSpread$1({
            stats: msg.stats
          }, _this30._network));
        };

        _this30.sendMessageToCallMachine({
          action: DAILY_METHOD_GET_CALC_STATS
        }, k);
      });
    }
  }, {
    key: "getActiveSpeaker",
    value: function getActiveSpeaker() {
      methodNotSupportedInReactNative();
      return this._activeSpeaker;
    }
  }, {
    key: "setActiveSpeakerMode",
    value: function setActiveSpeakerMode(enabled) {
      methodNotSupportedInReactNative();
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_ACTIVE_SPEAKER_MODE,
        enabled: enabled
      });
      return this;
    }
  }, {
    key: "activeSpeakerMode",
    value: function activeSpeakerMode() {
      methodNotSupportedInReactNative();
      return this._activeSpeakerMode;
    }
  }, {
    key: "subscribeToTracksAutomatically",
    value: function subscribeToTracksAutomatically() {
      return this._preloadCache.subscribeToTracksAutomatically;
    }
  }, {
    key: "setSubscribeToTracksAutomatically",
    value: function setSubscribeToTracksAutomatically(enabled) {
      if (this._callState !== DAILY_STATE_JOINED) {
        throw new Error('setSubscribeToTracksAutomatically() is only allowed when joined');
      }

      this._preloadCache.subscribeToTracksAutomatically = enabled;
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_SUBSCRIBE_TO_TRACKS_AUTOMATICALLY,
        enabled: enabled
      });
      return this;
    }
  }, {
    key: "enumerateDevices",
    value: function () {
      var _enumerateDevices = asyncToGenerator(function* () {
        var _this31 = this;

        if (this._callObjectMode) {
          var raw = yield navigator.mediaDevices.enumerateDevices();
          return {
            devices: raw.map(function (d) {
              return JSON.parse(JSON.stringify(d));
            })
          };
        }

        return new Promise(function (resolve, _) {
          var k = function k(msg) {
            resolve({
              devices: msg.devices
            });
          };

          _this31.sendMessageToCallMachine({
            action: DAILY_METHOD_ENUMERATE_DEVICES
          }, k);
        });
      });

      function enumerateDevices() {
        return _enumerateDevices.apply(this, arguments);
      }

      return enumerateDevices;
    }()
  }, {
    key: "sendAppMessage",
    value: function sendAppMessage(data) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

      if (JSON.stringify(data).length > MAX_APP_MSG_SIZE) {
        throw new Error('Message data too large. Max size is ' + MAX_APP_MSG_SIZE);
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_APP_MSG,
        data: data,
        to: to
      });
      return this;
    }
  }, {
    key: "addFakeParticipant",
    value: function addFakeParticipant(args) {
      methodNotSupportedInReactNative();
      this.sendMessageToCallMachine(_objectSpread$1({
        action: DAILY_METHOD_ADD_FAKE_PARTICIPANT
      }, args));
      return this;
    }
  }, {
    key: "setShowNamesMode",
    value: function setShowNamesMode(mode) {
      methodNotSupportedInReactNative();

      if (mode && !(mode === 'always' || mode === 'never')) {
        console.error('setShowNamesMode argument should be "always", "never", or false');
        return this;
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_SHOW_NAMES,
        mode: mode
      });
      return this;
    }
  }, {
    key: "setShowLocalVideo",
    value: function setShowLocalVideo() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      methodNotSupportedInReactNative();

      if (typeof show !== 'boolean') {
        console.error('setShowLocalVideo only accepts a boolean value');
        return this;
      }

      if (this._callObjectMode) {
        console.error('setShowLocalVideo is not available in callObject mode');
        return this;
      }

      if (this._callState !== DAILY_STATE_JOINED) {
        console.error('the meeting must be joined before calling setShowLocalVideo');
        return this;
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_SHOW_LOCAL_VIDEO,
        show: show
      });
      this._showLocalVideo = show;
      return this;
    }
  }, {
    key: "showLocalVideo",
    value: function showLocalVideo() {
      methodNotSupportedInReactNative();

      if (this._callObjectMode) {
        console.error('showLocalVideo is not available in callObject mode');
        return this;
      }

      return this._showLocalVideo;
    }
  }, {
    key: "setShowParticipantsBar",
    value: function setShowParticipantsBar() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      methodNotSupportedInReactNative();

      if (typeof show !== 'boolean') {
        console.error('setShowParticipantsBar only accepts a boolean value');
        return this;
      }

      if (this._callObjectMode) {
        console.error('setShowParticipantsBar is not available in callObject mode');
        return this;
      }

      if (this._callState !== DAILY_STATE_JOINED) {
        console.error('the meeting must be joined before calling setShowParticipantsBar');
        return this;
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_SHOW_PARTICIPANTS_BAR,
        show: show
      });
      this._showParticipantsBar = show;
      return this;
    }
  }, {
    key: "showParticipantsBar",
    value: function showParticipantsBar() {
      methodNotSupportedInReactNative();

      if (this._callObjectMode) {
        console.error('showParticipantsBar is not available in callObject mode');
        return this;
      }

      return this._showParticipantsBar;
    }
  }, {
    key: "customIntegrations",
    value: function customIntegrations() {
      methodNotSupportedInReactNative();

      if (this._callObjectMode) {
        console.error('customIntegrations is not available in callObject mode');
        return this;
      }

      return this._customIntegrations;
    }
  }, {
    key: "updateCustomIntegrations",
    value: function updateCustomIntegrations(integrations) {
      methodNotSupportedInReactNative();

      if (this._callObjectMode) {
        console.error('updateCustomIntegrations is not available in callObject mode');
        return this;
      }

      if (this._callState !== DAILY_STATE_JOINED) {
        console.error('the meeting must be joined before calling updateCustomIntegrations');
        return this;
      } // TODO: Write validator for custom integrations.
      // if (!validateCustomIntegrations(integrations)) {
      //   console.error(
      //     `updateCustomIntegrations only accepts a dictionary of the type ${JSON.stringify(
      //       customIntegrationsType
      //     )}`
      //   );
      //   return this;
      // }


      this.sendMessageToCallMachine({
        action: DAILY_METHOD_UPDATE_CUSTOM_INTEGRATIONS,
        integrations: integrations
      });
      this._customIntegrations = integrations;
      return this;
    }
  }, {
    key: "customTrayButtons",
    value: function customTrayButtons() {
      methodNotSupportedInReactNative();

      if (this._callObjectMode) {
        console.error('customTrayButtons is not available in callObject mode');
        return this;
      }

      return this._customTrayButtons;
    }
  }, {
    key: "updateCustomTrayButtons",
    value: function updateCustomTrayButtons(btns) {
      methodNotSupportedInReactNative();

      if (this._callObjectMode) {
        console.error('updateCustomTrayButtons is not available in callObject mode');
        return this;
      }

      if (this._callState !== DAILY_STATE_JOINED) {
        console.error('the meeting must be joined before calling updateCustomTrayButtons');
        return this;
      }

      if (!validateCustomTrayButtons(btns)) {
        console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(customTrayButtonsType)));
        return this;
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_UPDATE_CUSTOM_TRAY_BUTTONS,
        btns: btns
      });
      this._customTrayButtons = btns;
      return this;
    }
  }, {
    key: "theme",
    value: function theme() {
      if (this._callObjectMode) {
        console.error('theme is not available in callObject mode');
        return this;
      }

      return this.properties.theme;
    }
  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      var _this32 = this;

      return new Promise(function (resolve, reject) {
        if (_this32._callObjectMode) {
          reject('setTheme is not available in callObject mode');
          return;
        }

        try {
          _this32.validateProperties({
            theme: theme
          });

          _this32.properties.theme = _objectSpread$1({}, theme); // Send message to Prebuilt UI Iframe driver

          _this32.sendMessageToCallMachine({
            action: DAILY_METHOD_SET_THEME,
            theme: _this32.properties.theme
          });
          /**
           * For simplicity, emitting theme-updated here rather than
           * listening for it from Prebuilt & re-emitting it, since:
           * - we've fully validated the theme, so there's no risk of it not being applied
           * - we set `this.properties.theme` first, so in a customer's `theme-updated`
           *   handler, a call to `theme()` will return the latest value
           * - this method is the only way `theme-updated` can change
           */


          try {
            _this32.emit(DAILY_EVENT_THEME_UPDATED, {
              action: DAILY_EVENT_THEME_UPDATED,
              theme: _this32.properties.theme
            });
          } catch (e) {
            console.log("could not emit 'theme-updated'", e);
          }

          resolve(_this32.properties.theme);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: "detectAllFaces",
    value: function detectAllFaces() {
      var _this33 = this;

      methodNotSupportedInReactNative();
      return new Promise(function (resolve, _) {
        var k = function k(msg) {
          delete msg.action;
          delete msg.callbackStamp;
          resolve(msg);
        };

        _this33.sendMessageToCallMachine({
          action: DAILY_METHOD_DETECT_ALL_FACES
        }, k);
      });
    }
  }, {
    key: "requestFullscreen",
    value: function () {
      var _requestFullscreen = asyncToGenerator(function* () {
        methodNotSupportedInReactNative();

        if (!this._iframe || document.fullscreenElement || !isFullscreenSupported()) {
          return;
        }

        try {
          (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
        } catch (e) {
          console.log('could not make video call fullscreen', e);
        }
      });

      function requestFullscreen() {
        return _requestFullscreen.apply(this, arguments);
      }

      return requestFullscreen;
    }()
  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      methodNotSupportedInReactNative();

      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
      }
    }
  }, {
    key: "room",
    value: function () {
      var _room = asyncToGenerator(function* () {
        var _this34 = this;

        var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref22$includeRoomCon = _ref22.includeRoomConfigDefaults,
            includeRoomConfigDefaults = _ref22$includeRoomCon === void 0 ? true : _ref22$includeRoomCon;

        // The call machine bundle is loaded and it's already given us an access
        // state (which is based on room info), so we know it can be queried for
        // room info.
        if (this._accessState.access !== DAILY_ACCESS_UNKNOWN && !this.needsLoad()) {
          // We've succesfully join()ed or preAuth()ed, so we should have room info.
          return new Promise(function (resolve, _) {
            var k = function k(msg) {
              delete msg.action;
              delete msg.callbackStamp;
              resolve(msg);
            };

            _this34.sendMessageToCallMachine({
              action: DAILY_METHOD_ROOM,
              includeRoomConfigDefaults: includeRoomConfigDefaults
            }, k);
          });
        } else {
          // Return the URL of the room we'll be in if/when we successfully join(),
          // since we have no other room info to show yet.
          if (this.properties.url) {
            // NOTE: technically this should be called "roomUrlPendingJoinOrPreauth"
            // to indicate that *either* a join() or a preAuth() will allow you to
            // access room info, but preAuth() was added later and this name was
            // preserved to maintain backward compatibility: if a consumer hasn't
            // updated their app to use preAuth(), they'll be none the wiser.
            return {
              roomUrlPendingJoin: this.properties.url
            };
          }

          return null;
        }
      });

      function room() {
        return _room.apply(this, arguments);
      }

      return room;
    }()
  }, {
    key: "geo",
    value: function () {
      var _geo = asyncToGenerator(function* () {
        return new Promise( /*#__PURE__*/function () {
          var _ref23 = asyncToGenerator(function* (resolve, _) {
            try {
              var url = 'https://gs.daily.co/_ks_/x-swsl/:';
              var res = yield fetch(url);
              var data = yield res.json();
              resolve({
                current: data.geo
              });
            } catch (e) {
              console.error('geo lookup failed', e);
              resolve({
                current: ''
              });
            }
          });

          return function (_x21, _x22) {
            return _ref23.apply(this, arguments);
          };
        }());
      });

      function geo() {
        return _geo.apply(this, arguments);
      }

      return geo;
    }()
  }, {
    key: "setNetworkTopology",
    value: function () {
      var _setNetworkTopology = asyncToGenerator(function* (opts) {
        var _this35 = this;

        methodNotSupportedInReactNative();
        return new Promise( /*#__PURE__*/function () {
          var _ref24 = asyncToGenerator(function* (resolve, reject) {
            var k = function k(msg) {
              if (msg.error) {
                reject({
                  error: msg.error
                });
              } else {
                resolve({
                  workerId: msg.workerId
                });
              }
            };

            _this35.sendMessageToCallMachine({
              action: DAILY_METHOD_SET_NETWORK_TOPOLOGY,
              opts: opts
            }, k);
          });

          return function (_x24, _x25) {
            return _ref24.apply(this, arguments);
          };
        }());
      });

      function setNetworkTopology(_x23) {
        return _setNetworkTopology.apply(this, arguments);
      }

      return setNetworkTopology;
    }()
  }, {
    key: "getNetworkTopology",
    value: function () {
      var _getNetworkTopology = asyncToGenerator(function* () {
        var _this36 = this;

        return new Promise( /*#__PURE__*/function () {
          var _ref25 = asyncToGenerator(function* (resolve, reject) {
            var k = function k(msg) {
              if (msg.error) {
                reject({
                  error: msg.error
                });
              } else {
                resolve({
                  topology: msg.topology
                });
              }
            };

            _this36.sendMessageToCallMachine({
              action: DAILY_METHOD_GET_NETWORK_TOPOLOGY
            }, k);
          });

          return function (_x26, _x27) {
            return _ref25.apply(this, arguments);
          };
        }());
      });

      function getNetworkTopology() {
        return _getNetworkTopology.apply(this, arguments);
      }

      return getNetworkTopology;
    }()
  }, {
    key: "setPlayNewParticipantSound",
    value: function setPlayNewParticipantSound(arg) {
      methodNotSupportedInReactNative();

      if (!(typeof arg === 'number' || arg === true || arg === false)) {
        throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(arg));
      }

      this.sendMessageToCallMachine({
        action: DAILY_METHOD_SET_PLAY_DING,
        arg: arg
      });
    }
  }, {
    key: "on",
    value: function on(eventName, k) {
      this._inputEventsOn[eventName] = {};
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_REGISTER_INPUT_HANDLER,
        on: eventName
      });
      return EventEmitter$1.prototype.on.call(this, eventName, k);
    } // todo: once is almost certainly implemented incorrectly. read the
    // EventEmitter source to figure out how to do this properly. since
    // overriding on/off/once are optimizations, anyway, we won't worry
    // about it right now.

  }, {
    key: "once",
    value: function once(eventName, k) {
      this._inputEventsOn[eventName] = {};
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_REGISTER_INPUT_HANDLER,
        on: eventName
      });
      return EventEmitter$1.prototype.once.call(this, eventName, k);
    }
  }, {
    key: "off",
    value: function off(eventName, k) {
      delete this._inputEventsOn[eventName];
      this.sendMessageToCallMachine({
        action: DAILY_METHOD_REGISTER_INPUT_HANDLER,
        off: eventName
      });
      return EventEmitter$1.prototype.off.call(this, eventName, k);
    } //
    // internal methods
    //

  }, {
    key: "validateProperties",
    value: function validateProperties(properties) {
      for (var k in properties) {
        if (!FRAME_PROPS[k]) {
          throw new Error("unrecognized property '".concat(k, "'"));
        }

        if (FRAME_PROPS[k].validate && !FRAME_PROPS[k].validate(properties[k], this)) {
          throw new Error("property '".concat(k, "': ").concat(FRAME_PROPS[k].help));
        }
      }
    }
  }, {
    key: "assembleMeetingUrl",
    value: function assembleMeetingUrl() {
      // handle case of url with query string and without
      var props = _objectSpread$1(_objectSpread$1({}, this.properties), {}, {
        emb: this._callFrameId,
        embHref: encodeURIComponent(window.location.href)
      }),
          firstSep = props.url.match(/\?/) ? '&' : '?',
          url = props.url,
          urlProps = Object.keys(FRAME_PROPS).filter(function (p) {
        return FRAME_PROPS[p].queryString && props[p] !== undefined;
      });

      var newQueryString = urlProps.map(function (p) {
        return "".concat(FRAME_PROPS[p].queryString, "=").concat(props[p]);
      }).join('&');
      return url + firstSep + newQueryString;
    } // Note that even if the below method returns true, load() may decide that
    // there's nothing more to do (e.g. in the case that the call object has
    // already been loaded once) and simply carry out the appropriate meeting
    // state transition.

  }, {
    key: "needsLoad",
    value: function needsLoad() {
      // NOTE: The *only* reason DAILY_STATE_LOADING is here is to preserve a bug
      // that I (@kompfner) am a bit hesitant to fix until more time can be
      // dedicated to doing the *right* fix. If we're in DAILY_STATE_LOADING, we
      // probably *shouldn't* let you trigger another load() and get into a weird
      // state, but this has been long-standing behavior. The alternative would mean
      // that, if load() failed silently for some reason, you couldn't re-trigger it
      // since we'd be stuck in the DAILY_STATE_LOADING state.
      return [DAILY_STATE_NEW, DAILY_STATE_LOADING, DAILY_STATE_LEFT, DAILY_STATE_ERROR].includes(this._callState);
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function sendMessageToCallMachine(message, callback) {
      this._messageChannel.sendMessageToCallMachine(message, callback, this._iframe, this._callFrameId);
    } ///
    /// The below *packagedMessage* methods facilitate wiring up a DailyIframe
    /// instance as a remote driver of another DailyIframe instance, like in the
    /// new prebuilt UI case, where an "outer" callFrame controls an "inner"
    /// callObject through an intermediate iframed app.
    ///

  }, {
    key: "forwardPackagedMessageToCallMachine",
    value: function forwardPackagedMessageToCallMachine(msg) {
      this._messageChannel.forwardPackagedMessageToCallMachine(msg, this._iframe, this._callFrameId);
    }
  }, {
    key: "addListenerForPackagedMessagesFromCallMachine",
    value: function addListenerForPackagedMessagesFromCallMachine(listener) {
      return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(listener, this._callFrameId);
    }
  }, {
    key: "removeListenerForPackagedMessagesFromCallMachine",
    value: function removeListenerForPackagedMessagesFromCallMachine(listenerId) {
      this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(listenerId);
    }
  }, {
    key: "handleMessageFromCallMachine",
    value: function handleMessageFromCallMachine(msg) {
      switch (msg.action) {
        case DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG:
          this.sendMessageToCallMachine(_objectSpread$1({
            action: DAILY_EVENT_IFRAME_LAUNCH_CONFIG
          }, this.properties));
          break;

        case DAILY_EVENT_LOADED:
          if (this._loadedCallback) {
            this._loadedCallback();

            this._loadedCallback = null;
          }

          try {
            this.emit(msg.action, msg);
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_EVENT_JOINED_MEETING:
          if (this._joinedCallback) {
            this._joinedCallback(msg.participants);

            this._joinedCallback = null;
          }

          try {
            this.emit(msg.action, msg);
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_EVENT_PARTICIPANT_JOINED:
        case DAILY_EVENT_PARTICIPANT_UPDATED:
          if (this._callState === DAILY_STATE_LEFT) {
            return;
          }

          if (msg.participant && msg.participant.session_id) {
            var id = msg.participant.local ? 'local' : msg.participant.session_id;

            if (this._callObjectMode) {
              addTracks(msg.participant);
              addCustomTracks(msg.participant);
              addLegacyTracks(msg.participant, this._participants[id]);
            }

            try {
              // track events
              this.maybeEventTrackStopped(this._participants[id], msg.participant, 'audioTrack');
              this.maybeEventTrackStopped(this._participants[id], msg.participant, 'videoTrack');
              this.maybeEventTrackStopped(this._participants[id], msg.participant, 'screenVideoTrack');
              this.maybeEventTrackStopped(this._participants[id], msg.participant, 'screenAudioTrack');
              this.maybeEventTrackStarted(this._participants[id], msg.participant, 'audioTrack');
              this.maybeEventTrackStarted(this._participants[id], msg.participant, 'videoTrack');
              this.maybeEventTrackStarted(this._participants[id], msg.participant, 'screenVideoTrack');
              this.maybeEventTrackStarted(this._participants[id], msg.participant, 'screenAudioTrack'); // custom tracks (presumably we'll do all tracks consistently in the
              // future, refactoring the above maybeEventTrack* events)

              this.maybeEventTrackStoppedForCustomTracks(this._participants[id], msg.participant);
              this.maybeEventTrackStartedForCustomTracks(this._participants[id], msg.participant); // recording events

              this.maybeEventRecordingStopped(this._participants[id], msg.participant);
              this.maybeEventRecordingStarted(this._participants[id], msg.participant);
            } catch (e) {
              console.error('track events error', e);
            } // participant joined/updated events


            if (!this.compareEqualForParticipantUpdateEvent(msg.participant, this._participants[id])) {
              this._participants[id] = _objectSpread$1({}, msg.participant);
              this.toggleParticipantAudioBasedOnNativeAudioFocus();

              try {
                this.emit(msg.action, msg);
              } catch (e) {
                console.log('could not emit', msg, e);
              }
            }
          }

          break;

        case DAILY_EVENT_PARTICIPANT_LEFT:
          if (msg.participant && msg.participant.session_id) {
            // track events
            var prevP = this._participants[msg.participant.session_id];

            if (prevP) {
              this.maybeEventTrackStopped(prevP, null, 'audioTrack');
              this.maybeEventTrackStopped(prevP, null, 'videoTrack');
              this.maybeEventTrackStopped(prevP, null, 'screenVideoTrack');
              this.maybeEventTrackStopped(prevP, null, 'screenAudioTrack');
              this.maybeEventTrackStoppedForCustomTracks(prevP, null);
            } // delete from local cach


            delete this._participants[msg.participant.session_id];

            try {
              this.emit(msg.action, msg);
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED:
          if (!deepEqual(this._participantCounts, msg.participantCounts)) {
            this._participantCounts = msg.participantCounts;

            try {
              this.emit(msg.action, msg);
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_ACCESS_STATE_UPDATED:
          {
            var newAccessState = {
              access: msg.access
            };

            if (msg.awaitingAccess) {
              newAccessState.awaitingAccess = msg.awaitingAccess;
            }

            if (!deepEqual(this._accessState, newAccessState)) {
              this._accessState = newAccessState;

              try {
                this.emit(msg.action, msg);
              } catch (e) {
                console.log('could not emit', msg, e);
              }
            }

            break;
          }

        case DAILY_EVENT_MEETING_SESSION_UPDATED:
          if (msg.meetingSession) {
            try {
              delete msg.callFrameId;
              this.emit(msg.action, msg);
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_ERROR:
          if (this._iframe && !msg.preserveIframe) {
            this._iframe.src = '';
          }

          this._updateCallState(DAILY_STATE_ERROR);

          this.resetMeetingDependentVars();

          if (this._loadedCallback) {
            this._loadedCallback(msg.errorMsg);

            this._loadedCallback = null;
          }

          if (this._joinedCallback) {
            this._joinedCallback(null, msg.errorMsg);

            this._joinedCallback = null;
          }

          try {
            var preserveIframe = msg.preserveIframe,
                event = objectWithoutProperties(msg, ["preserveIframe"]);

            this.emit(msg.action, event);
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_EVENT_LEFT_MEETING:
          // if we've left due to error, the error msg should have
          // already been handled and we do not want to override
          // the state.
          if (this._callState !== DAILY_STATE_ERROR) {
            this._updateCallState(DAILY_STATE_LEFT);
          }

          this.resetMeetingDependentVars();

          if (this._resolveLeave) {
            this._resolveLeave();

            this._resolveLeave = null;
          }

          try {
            this.emit(msg.action, msg);
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_EVENT_INPUT_EVENT:
          var p = this._participants[msg.session_id];

          if (!p) {
            if (msg.session_id === this._participants.local.session_id) {
              p = this._participants.local;
            } else {
              p = {};
            }
          }

          try {
            this.emit(msg.event.type, {
              action: msg.event.type,
              event: msg.event,
              participant: _objectSpread$1({}, p)
            });
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_EVENT_SELECTED_DEVICES_UPDATED:
          if (msg.devices) {
            try {
              this.emit(msg.action, msg);
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_NETWORK_QUALITY_CHANGE:
          var threshold = msg.threshold,
              quality = msg.quality;

          if (threshold !== this._network.threshold || quality !== this._network.quality) {
            this._network.quality = quality;
            this._network.threshold = threshold;

            try {
              this.emit(msg.action, msg);
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_ACTIVE_SPEAKER_CHANGE:
          var activeSpeaker = msg.activeSpeaker;

          if (this._activeSpeaker.peerId !== activeSpeaker.peerId) {
            this._activeSpeaker.peerId = activeSpeaker.peerId;

            try {
              this.emit(msg.action, {
                action: msg.action,
                activeSpeaker: this._activeSpeaker
              });
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_SHOW_LOCAL_VIDEO_CHANGED:
          if (this._callObjectMode) return;
          var show = msg.show;
          this._showLocalVideo = show;

          try {
            this.emit(msg.action, {
              action: msg.action,
              show: show
            });
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE:
          var enabled = msg.enabled;

          if (this._activeSpeakerMode !== enabled) {
            this._activeSpeakerMode = enabled;

            try {
              this.emit(msg.action, {
                action: msg.action,
                enabled: this._activeSpeakerMode
              });
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_WAITING_PARTICIPANT_ADDED:
        case DAILY_EVENT_WAITING_PARTICIPANT_UPDATED:
        case DAILY_EVENT_WAITING_PARTICIPANT_REMOVED:
          this._waitingParticipants = msg.allWaitingParticipants;

          try {
            this.emit(msg.action, {
              action: msg.action,
              participant: msg.participant
            });
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_EVENT_RECEIVE_SETTINGS_UPDATED:
          // NOTE: doing equality check here rather than before sending message in
          // the first place from call machine, to simplify handling initial
          // receive settings
          if (!deepEqual(this._receiveSettings, msg.receiveSettings)) {
            this._receiveSettings = msg.receiveSettings;

            try {
              this.emit(msg.action, {
                action: msg.action,
                receiveSettings: msg.receiveSettings
              });
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_INPUT_SETTINGS_UPDATED:
          // NOTE: doing equality check here rather than before sending message in
          // the first place from call machine, to simplify handling initial
          // input settings
          if (!deepEqual(this._inputSettings, msg.inputSettings)) {
            this._inputSettings = msg.inputSettings;

            try {
              this.emit(msg.action, {
                action: msg.action,
                inputSettings: msg.inputSettings
              });
            } catch (e) {
              console.log('could not emit', msg, e);
            }
          }

          break;

        case DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED:
          {
            var participantId = msg.session_id;
            this._rmpPlayerState[participantId] = msg.playerState;
            this.emitDailyJSEvent(msg);
          }
          break;

        case DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED:
          delete this._rmpPlayerState[msg.session_id];
          this.emitDailyJSEvent(msg);
          break;

        case DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED:
          {
            var _participantId = msg.session_id;
            var rmpPlayerState = this._rmpPlayerState[_participantId];

            if (!rmpPlayerState || !this.compareEqualForRMPUpdateEvent(rmpPlayerState, msg.remoteMediaPlayerState)) {
              this._rmpPlayerState[_participantId] = msg.remoteMediaPlayerState;
              this.emitDailyJSEvent(msg);
            }
          }
          break;

        case DAILY_EVENT_CUSTOM_BUTTON_CLICK:
          this.emitDailyJSEvent(msg);
          break;

        case DAILY_EVENT_MEETING_SESSION_STATE_UPDATED:
          this._meetingSessionState = msg.meetingSessionState;
          this.emitDailyJSEvent(msg);
          break;

        case DAILY_EVENT_RECORDING_STARTED:
        case DAILY_EVENT_RECORDING_STOPPED:
        case DAILY_EVENT_RECORDING_STATS:
        case DAILY_EVENT_RECORDING_ERROR:
        case DAILY_EVENT_RECORDING_UPLOAD_COMPLETED:
        case DAILY_EVENT_TRANSCRIPTION_STARTED:
        case DAILY_EVENT_TRANSCRIPTION_STOPPED:
        case DAILY_EVENT_TRANSCRIPTION_ERROR:
        case DAILY_EVENT_STARTED_CAMERA:
        case DAILY_EVENT_CAMERA_ERROR:
        case DAILY_EVENT_APP_MSG:
        case DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED:
        case DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED:
        case DAILY_EVENT_NETWORK_CONNECTION:
        case DAILY_EVENT_RECORDING_DATA:
        case DAILY_EVENT_LIVE_STREAMING_STARTED:
        case DAILY_EVENT_LIVE_STREAMING_STOPPED:
        case DAILY_EVENT_LIVE_STREAMING_ERROR:
        case DAILY_EVENT_NONFATAL_ERROR:
        case DAILY_EVENT_LANG_UPDATED:
          try {
            this.emit(msg.action, msg);
          } catch (e) {
            console.log('could not emit', msg, e);
          }

          break;

        case DAILY_UI_REQUEST_FULLSCREEN:
          this.requestFullscreen();
          break;

        case DAILY_UI_EXIT_FULLSCREEN:
          this.exitFullscreen();
          break;

      }
    }
  }, {
    key: "maybeEventRecordingStopped",
    value: function maybeEventRecordingStopped(prevP, thisP) {
      var key = 'record';

      if (!prevP) {
        return;
      }

      if (!thisP.local && thisP[key] === false && prevP[key] !== thisP[key]) {
        try {
          this.emit(DAILY_EVENT_RECORDING_STOPPED, {
            action: DAILY_EVENT_RECORDING_STOPPED
          });
        } catch (e) {
          console.log('could not emit', e);
        }
      }
    }
  }, {
    key: "maybeEventRecordingStarted",
    value: function maybeEventRecordingStarted(prevP, thisP) {
      var key = 'record';

      if (!prevP) {
        return;
      }

      if (!thisP.local && thisP[key] === true && prevP[key] !== thisP[key]) {
        try {
          this.emit(DAILY_EVENT_RECORDING_STARTED, {
            action: DAILY_EVENT_RECORDING_STARTED
          });
        } catch (e) {
          console.log('could not emit', e);
        }
      }
    }
  }, {
    key: "maybeEventTrackStopped",
    value: function maybeEventTrackStopped(prevP, thisP, key) {
      if (!prevP) {
        return;
      }

      if (prevP[key] && prevP[key].readyState === 'ended' || prevP[key] && !(thisP && thisP[key]) || prevP[key] && prevP[key].id !== thisP[key].id) {
        try {
          this.emit(DAILY_EVENT_TRACK_STOPPED, {
            action: DAILY_EVENT_TRACK_STOPPED,
            track: prevP[key],
            participant: thisP
          });
        } catch (e) {
          console.log('could not emit', e);
        }
      }
    }
  }, {
    key: "maybeEventCustomTrackStopped",
    value: function maybeEventCustomTrackStopped(prevTrack, thisTrack, thisP) {
      if (!prevTrack) {
        return;
      }

      if (prevTrack && prevTrack.readyState === 'ended' || prevTrack && !thisTrack || prevTrack && prevTrack.id !== thisTrack.id) {
        try {
          this.emit(DAILY_EVENT_TRACK_STOPPED, {
            action: DAILY_EVENT_TRACK_STOPPED,
            track: prevTrack,
            participant: thisP
          });
        } catch (e) {
          console.log('maybeEventCustomTrackStopped: could not emit', e);
        }
      }
    }
  }, {
    key: "maybeEventCustomTrackStarted",
    value: function maybeEventCustomTrackStarted(prevTrack, thisTrack, thisP) {
      if (thisTrack && !prevTrack || thisTrack && prevTrack.readyState === 'ended' || thisTrack && thisTrack.id !== prevTrack.id) {
        try {
          this.emit(DAILY_EVENT_TRACK_STARTED, {
            action: DAILY_EVENT_TRACK_STARTED,
            track: thisTrack,
            participant: thisP
          });
        } catch (e) {
          console.log('maybeEventCustomTrackStarted: could not emit', e);
        }
      }
    }
  }, {
    key: "maybeEventTrackStarted",
    value: function maybeEventTrackStarted(prevP, thisP, key) {
      if (thisP[key] && !(prevP && prevP[key]) || thisP[key] && prevP[key].readyState === 'ended' || thisP[key] && thisP[key].id !== prevP[key].id) {
        try {
          this.emit(DAILY_EVENT_TRACK_STARTED, {
            action: DAILY_EVENT_TRACK_STARTED,
            track: thisP[key],
            participant: thisP
          });
        } catch (e) {
          console.log('could not emit', e);
        }
      }
    }
  }, {
    key: "maybeEventTrackStoppedForCustomTracks",
    value: function maybeEventTrackStoppedForCustomTracks(prevP, thisP) {
      if (!prevP) {
        return;
      }

      for (var trackKey in prevP.tracks) {
        // we might be able to use this logic for all tracks, not just additional,
        // non-standard tracks. but for now, we'll only handle the non-standard
        // tracks
        if (isPredefinedTrack(trackKey)) {
          continue;
        }

        this.maybeEventCustomTrackStopped(prevP.tracks[trackKey].track, thisP && thisP.tracks[trackKey] ? thisP.tracks[trackKey].track : null, thisP);
      }
    }
  }, {
    key: "maybeEventTrackStartedForCustomTracks",
    value: function maybeEventTrackStartedForCustomTracks(prevP, thisP) {
      if (!thisP) {
        return;
      }

      for (var trackKey in thisP.tracks) {
        // we might be able to use this logic for all tracks, not just additional,
        // non-standard tracks. but for now, we'll only handle the non-standard
        // tracks
        if (isPredefinedTrack(trackKey)) {
          continue;
        }

        this.maybeEventCustomTrackStarted(prevP && prevP.tracks[trackKey] ? prevP.tracks[trackKey].track : null, thisP.tracks[trackKey].track, thisP);
      }
    }
  }, {
    key: "compareEqualForRMPUpdateEvent",
    value: function compareEqualForRMPUpdateEvent(a, b) {
      var _a$settings, _b$settings;

      if (a.state === b.state && ((_a$settings = a.settings) === null || _a$settings === void 0 ? void 0 : _a$settings.volume) === ((_b$settings = b.settings) === null || _b$settings === void 0 ? void 0 : _b$settings.volume)) {
        return true;
      }

      return false;
    }
  }, {
    key: "emitDailyJSEvent",
    value: function emitDailyJSEvent(msg) {
      {
        try {
          this.emit(msg.action, msg);
        } catch (e) {
          console.log('could not emit', msg, e);
        }
      }
    }
  }, {
    key: "compareEqualForParticipantUpdateEvent",
    value: function compareEqualForParticipantUpdateEvent(a, b) {
      if (!deepEqual(a, b)) {
        return false;
      }

      if (a.videoTrack && b.videoTrack && (a.videoTrack.id !== b.videoTrack.id || a.videoTrack.muted !== b.videoTrack.muted || a.videoTrack.enabled !== b.videoTrack.enabled)) {
        return false;
      }

      if (a.audioTrack && b.audioTrack && (a.audioTrack.id !== b.audioTrack.id || a.audioTrack.muted !== b.audioTrack.muted || a.audioTrack.enabled !== b.audioTrack.enabled)) {
        return false;
      }

      return true;
    }
  }, {
    key: "nativeUtils",
    value: function nativeUtils() {
      if (!isReactNative()) {
        return null;
      }

      if (typeof DailyNativeUtils === 'undefined') {
        console.warn('in React Native, DailyNativeUtils is expected to be available');
        return null;
      }

      return DailyNativeUtils;
    }
  }, {
    key: "updateIsPreparingToJoin",
    value: function updateIsPreparingToJoin(isPreparingToJoin) {
      this._updateCallState(this._callState, isPreparingToJoin);
    }
  }, {
    key: "_updateCallState",
    value: function _updateCallState(callState) {
      var isPreparingToJoin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._isPreparingToJoin;

      // If state hasn't changed, bail
      if (callState === this._callState && isPreparingToJoin === this._isPreparingToJoin) {
        return;
      } // Update state


      var oldMeetingState = this._callState;
      var oldIsPreparingToJoin = this._isPreparingToJoin;
      this._callState = callState;
      this._isPreparingToJoin = isPreparingToJoin; // Update state side-effects (which, for now, all depend on whether
      // _isCallPendingOrOngoing)

      var oldIsMeetingPendingOrOngoing = this._isCallPendingOrOngoing(oldMeetingState, oldIsPreparingToJoin);

      var _isCallPendingOrOngoing = this._isCallPendingOrOngoing(this._callState, this._isPreparingToJoin);

      if (oldIsMeetingPendingOrOngoing === _isCallPendingOrOngoing) {
        return;
      }

      this.updateKeepDeviceAwake(_isCallPendingOrOngoing);
      this.updateDeviceAudioMode(_isCallPendingOrOngoing);
      this.updateShowAndroidOngoingMeetingNotification(_isCallPendingOrOngoing);
      this.updateNoOpRecordingEnsuringBackgroundContinuity(_isCallPendingOrOngoing);
    } // To be invoked this when leaving or erroring out of a meeting.
    // NOTE (Paul, 2021-01-07): this could probably be expanded to reset *all*
    // meeting-dependent vars, but starting with this targeted small set which
    // were being reset properly on leave() but not when leaving via prebuilt ui.

  }, {
    key: "resetMeetingDependentVars",
    value: function resetMeetingDependentVars() {
      this._participants = {};
      this._participantCounts = EMPTY_PARTICIPANT_COUNTS;
      this._waitingParticipants = {};
      this._activeSpeaker = {};
      this._activeSpeakerMode = false;
      this._didPreAuth = false;
      this._accessState = {
        access: DAILY_ACCESS_UNKNOWN
      };
      this._meetingSessionState = DEFAULT_SESSION_STATE;
      this._receiveSettings = {};
      this._inputSettings = {};
      resetPreloadCache(this._preloadCache);
    }
  }, {
    key: "updateKeepDeviceAwake",
    value: function updateKeepDeviceAwake(keepAwake) {
      if (!isReactNative()) {
        return;
      }

      this.nativeUtils().setKeepDeviceAwake(keepAwake, this._callFrameId);
    }
  }, {
    key: "updateDeviceAudioMode",
    value: function updateDeviceAudioMode(useInCallAudioMode) {
      if (!isReactNative() || this.disableReactNativeAutoDeviceManagement('audio')) {
        return;
      }

      var audioMode = useInCallAudioMode ? this._nativeInCallAudioMode : NATIVE_AUDIO_MODE_IDLE;
      this.nativeUtils().setAudioMode(audioMode);
    } // Note: notification properties can't be changed while it is ongoing

  }, {
    key: "updateShowAndroidOngoingMeetingNotification",
    value: function updateShowAndroidOngoingMeetingNotification(showNotification) {
      // Check that we're React Native and that the Android-only method exists
      if (!(isReactNative() && this.nativeUtils().setShowOngoingMeetingNotification)) {
        return;
      } // Use current this.properties to customize notification behavior


      var title, subtitle, iconName, disableForCustomOverride;

      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var _this$properties$reac = this.properties.reactNativeConfig.androidInCallNotification;
        title = _this$properties$reac.title;
        subtitle = _this$properties$reac.subtitle;
        iconName = _this$properties$reac.iconName;
        disableForCustomOverride = _this$properties$reac.disableForCustomOverride;
      }

      if (disableForCustomOverride) {
        showNotification = false;
      }

      this.nativeUtils().setShowOngoingMeetingNotification(showNotification, title, subtitle, iconName, this._callFrameId);
    } // Whether to enable no-op audio recording to ensure continuity of the app
    // when backgrounded. Required in iOS to ensure we can finish joining when the
    // app is backgrounded before gUM is called, and to ensure that signaling
    // remains connected when we're in an empty room and our own cam and mic are
    // off.

  }, {
    key: "updateNoOpRecordingEnsuringBackgroundContinuity",
    value: function updateNoOpRecordingEnsuringBackgroundContinuity(enableNoOpRecording) {
      if (!(isReactNative() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity)) {
        return;
      }

      this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(enableNoOpRecording);
    }
  }, {
    key: "_isCallPendingOrOngoing",
    value: function _isCallPendingOrOngoing(callState, isPreparingToJoin) {
      return [DAILY_STATE_JOINING, DAILY_STATE_JOINED].includes(callState) || isPreparingToJoin;
    }
  }, {
    key: "toggleParticipantAudioBasedOnNativeAudioFocus",
    value: function toggleParticipantAudioBasedOnNativeAudioFocus() {
      if (!isReactNative()) {
        return;
      } // Need to access store directly since when participant muted their audio we
      // don't have access to their audio tracks in this._participants


      var state = store.getState();

      for (var streamId in state.streams) {
        var streamData = state.streams[streamId];

        if (streamData && streamData.pendingTrack && streamData.pendingTrack.kind === 'audio') {
          streamData.pendingTrack.enabled = this._hasNativeAudioFocus;
        }
      }
    } // type must be either 'audio' or 'video'

  }, {
    key: "disableReactNativeAutoDeviceManagement",
    value: function disableReactNativeAutoDeviceManagement(type) {
      return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[type];
    }
  }, {
    key: "absoluteUrl",
    value: function absoluteUrl(url) {
      if ('undefined' === typeof url) {
        return undefined;
      }

      var a = document.createElement('a');
      a.href = url;
      return a.href;
    }
  }, {
    key: "sayHello",
    value: function sayHello() {
      var str = 'hello, world.';
      console.log(str);
      return str;
    }
  }]);

  return DailyIframe;
}(EventEmitter$1);

function initializePreloadCache(callObject, properties) {
  return {
    subscribeToTracksAutomatically: true,
    audioDeviceId: null,
    videoDeviceId: null,
    outputDeviceId: null
  };
}

function resetPreloadCache(c) {// don't need to do anything, until we add stuff to the preload
  // cache that should not persist
}

function makeSafeForPostMessage(props) {
  var safe = {};

  for (var p in props) {
    if (props[p] instanceof MediaStreamTrack) {
      // note: could store the track in a global variable for accessing
      // on the other side of the postMessage, here, instead of as we
      // currently do in the validate-properties routines, which definitely
      // is a spooky-action-at-a-distance code anti-pattern
      safe[p] = DAILY_CUSTOM_TRACK;
    } else if (p === 'dailyConfig') {
      if (props[p].modifyLocalSdpHook) {
        if (window._dailyConfig) {
          window._dailyConfig.modifyLocalSdpHook = props[p].modifyLocalSdpHook;
        }

        delete props[p].modifyLocalSdpHook;
      }

      if (props[p].modifyRemoteSdpHook) {
        if (window._dailyConfig) {
          window._dailyConfig.modifyRemoteSdpHook = props[p].modifyRemoteSdpHook;
        }

        delete props[p].modifyRemoteSdpHook;
      }

      safe[p] = props[p];
    } else {
      safe[p] = props[p];
    }
  }

  return safe;
}

function methodNotSupportedInReactNative() {
  if (isReactNative()) {
    throw new Error('This daily-js method is not currently supported in React Native');
  }
}

function methodOnlySupportedInReactNative() {
  if (!isReactNative()) {
    throw new Error('This daily-js method is only supported in React Native');
  }
}

function validateSessionDataUpdate(data, mergeStrategy) {
  // the SessionDataUpdate constructor validates everything and will
  // throw the errors necessary if things don't check out
  new SessionDataUpdate({
    data: data,
    mergeStrategy: mergeStrategy
  });
  return true;
}

function validateUserData(data) {
  // undefined is considered valid but would fail the checks below
  if (data === undefined) {
    return true;
  }

  var dataStr;

  if (typeof data === 'string') {
    // JSON.stringify adds two characters to the string, so do sizing checks
    // on the raw string.
    dataStr = data;
  } else {
    try {
      dataStr = JSON.stringify(data); // check that what goes in is the same coming out :)

      if (!deepEqual(JSON.parse(dataStr), data)) {
        console.warn("The userData provided will be modified when serialized.");
      }
    } catch (e) {
      throw Error("userData must be serializable to JSON: ".concat(e));
    }
  } // check the size of the payload


  if (dataStr.length > MAX_USER_DATA_SIZE) {
    throw Error("userData is too large (".concat(dataStr.length, " characters). Maximum size suppported is ").concat(MAX_USER_DATA_SIZE, "."));
  }

  return true;
}

function validateReceiveSettings(receiveSettingsParam, _ref26) {
  var allowAllParticipantsKey = _ref26.allowAllParticipantsKey;

  var isParticipantIdValid = function isParticipantIdValid(participantId) {
    var disallowedKeys = ['local'];
    if (!allowAllParticipantsKey) disallowedKeys.push('*');
    return participantId && !disallowedKeys.includes(participantId);
  };

  var areVideoReceiveSettingsValid = function areVideoReceiveSettingsValid(videoReceiveSettings) {
    if (videoReceiveSettings.layer !== undefined) {
      if (!(Number.isInteger(videoReceiveSettings.layer) && videoReceiveSettings.layer >= 0 || videoReceiveSettings.layer === 'inherit')) {
        return false;
      }
    }

    return true;
  }; // NOTE: partial receive settings *are* allowed, in both senses:
  // - only a subset of media types (e.g. only "video")
  // - only a subset of settings per media type (e.g. only "layer")


  var areParticipantReceiveSettingsValid = function areParticipantReceiveSettingsValid(receiveSettings) {
    if (!receiveSettings) return false;

    if (receiveSettings.video) {
      if (!areVideoReceiveSettingsValid(receiveSettings.video)) {
        return false;
      }
    }

    if (receiveSettings.screenVideo) {
      if (!areVideoReceiveSettingsValid(receiveSettings.screenVideo)) {
        return false;
      }
    }

    return true;
  };

  for (var _i3 = 0, _Object$entries2 = Object.entries(receiveSettingsParam); _i3 < _Object$entries2.length; _i3++) {
    var _Object$entries2$_i = slicedToArray(_Object$entries2[_i3], 2),
        participantId = _Object$entries2$_i[0],
        receiveSettings = _Object$entries2$_i[1];

    if (!(isParticipantIdValid(participantId) && areParticipantReceiveSettingsValid(receiveSettings))) {
      return false;
    }
  }

  return true;
} // Since currently videoProcessor is the only inputSetting. I wrote this code to reject
// everything else. I feel it is the safe approach. This will need changes as more
// functionality is added to inputSettings in the future.


function validateInputSettings(settings) {
  if (_typeof_1(settings) !== 'object') return false;
  if (!(settings.video && _typeof_1(settings.video) === 'object')) return false;
  if (!validateVideoProcessor(settings.video.processor)) return false;
  return true;
}

function validateVideoProcessor(p) {
  // publish has been deprecated. It hasnt been removed from VALID_PROCESSOR_KEYS
  // so as to not throw an error for any active users; Added a warning about the
  // deprecation below.
  var VALID_PROCESSOR_KEYS = ['type', "config", 'publish'];
  if (!p) return false;
  if (_typeof_1(p) !== 'object') return false;
  if (Object.keys(p).length === 0) return false; // lodash isEmpty did not work well with github workflow for some reason

  if (p.type && !validateVideoProcessorType(p.type)) return false;
  if (p.publish !== undefined && typeof p.publish !== 'boolean') return false; // publish flag has been deprecated

  if (typeof p.publish === 'boolean') {
    console.warn('inputSettings.video.processor: publish key has been deprecated; it will be ignored');
  }

  if (p.config) {
    if (_typeof_1(p.config) !== 'object') return false;
    if (!validateVideoProcessorConfig(p.type, p.config)) return false;
  } // scrub invalid keys in processor object


  Object.keys(p).filter(function (k) {
    return !VALID_PROCESSOR_KEYS.includes(k);
  }).forEach(function (k) {
    console.warn("invalid key inputSettings -> video -> processor : ".concat(k));
    delete p[k];
  });
  return true;
}

function validateVideoProcessorConfig(type, config) {
  var keys = Object.keys(config);
  if (keys.length === 0) return true;
  var configErrMsg = 'invalid object in inputSettings -> video -> processor -> config';

  switch (type) {
    case DAILY_JS_VIDEO_PROCESSOR_TYPES.BGBLUR:
      if (keys.length > 1 || keys[0] !== 'strength') {
        console.error(configErrMsg);
        return false;
      }

      if (typeof config.strength !== 'number' || config.strength <= 0 || config.strength > 1 || isNaN(config.strength)) {
        console.error("".concat(configErrMsg, "; expected: {0 < strength <= 1}, got: ").concat(config.strength));
        return false;
      }

      return true;

    case DAILY_JS_VIDEO_PROCESSOR_TYPES.BGIMAGE:
      if (config.source !== undefined) {
        if (!validateAndTagBgImageSource(config)) return false;
      }

      return true;

    default:
      return true;
  }
}

function validateAndTagBgImageSource(config) {
  if (config.source === 'default') {
    config.type = 'default';
    return true;
  }

  if (validateHttpUrl(config.source)) {
    config.type = 'url';

    if (!validateBgImageFileType(config.source)) {
      console.error("invalid image type; supported types: [".concat(DAILY_SUPPORTED_BG_IMG_TYPES.join(', '), "]"));
      return false;
    }

    return true;
  }

  if (validateImageSelection(config.source)) {
    config.type = 'daily-preselect';
    return true;
  } else {
    console.error("invalid image selection; must be an int, > 0, <= ".concat(DAILY_PRESELECTED_BG_IMAGE_URLS_LENGTH));
    return false;
  }
}

function validateBgImageFileType(url) {
  // ignore query params
  var parsedUrl = new URL(url);
  var pathName = parsedUrl.pathname;

  if (parsedUrl.protocol === 'data:') {
    try {
      var blobContentType = pathName.substring(pathName.indexOf(':') + 1, pathName.indexOf(';'));
      var blobExtension = blobContentType.split('/')[1];
      return DAILY_SUPPORTED_BG_IMG_TYPES.includes(blobExtension);
    } catch (e) {
      console.error('failed to deduce blob content type', e);
      return false;
    }
  }

  var urlFileType = pathName.split('.').at(-1).toLowerCase().trim();
  return DAILY_SUPPORTED_BG_IMG_TYPES.includes(urlFileType);
}

function validateImageSelection(selectImg) {
  var imgNum = Number(selectImg);
  if (isNaN(imgNum)) return false;
  if (!Number.isInteger(imgNum)) return false;
  if (imgNum <= 0) return false;
  if (imgNum > DAILY_PRESELECTED_BG_IMAGE_URLS_LENGTH) return false;
  return true;
}

function validateVideoProcessorType(type) {
  if (typeof type !== 'string') return false;

  if (!Object.values(DAILY_JS_VIDEO_PROCESSOR_TYPES).includes(type)) {
    console.error('inputSettings video processor type invalid');
    return false;
  }

  return true;
}

function inputSettingsValidationHelpMsg() {
  var processorOpts = Object.values(DAILY_JS_VIDEO_PROCESSOR_TYPES).join(' | ');
  return "inputSettings must be of the form: { video: { processor: [ ".concat(processorOpts, " ] }, config?: {} }");
}

function receiveSettingsValidationHelpMsg(_ref27) {
  var allowAllParticipantsKey = _ref27.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(DAILY_RECEIVE_SETTINGS_BASE_KEY).concat(allowAllParticipantsKey ? " | \"".concat(DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY, "\"") : '', "]: ") + '{ ' + '[video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], ' + '[screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] ' + '}}}';
}

function validateCustomTrayButtons(btns) {
  if (btns && _typeof_1(btns) !== 'object' || Array.isArray(btns)) {
    console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(customTrayButtonsType), "."));
    return false;
  }

  if (btns) {
    for (var _i4 = 0, _Object$entries3 = Object.entries(btns); _i4 < _Object$entries3.length; _i4++) {
      var _Object$entries3$_i = slicedToArray(_Object$entries3[_i4], 1),
          btnsKey = _Object$entries3$_i[0];

      for (var _i5 = 0, _Object$entries4 = Object.entries(btns[btnsKey]); _i5 < _Object$entries4.length; _i5++) {
        var _Object$entries4$_i = slicedToArray(_Object$entries4[_i5], 2),
            btnKey = _Object$entries4$_i[0],
            btnValue = _Object$entries4$_i[1];

        if (btnKey === 'iconPath' && !validateHttpUrl(btnValue)) {
          console.error("customTrayButton ".concat(btnKey, " should be a url."));
          return false;
        }

        if (btnKey === 'iconPathDarkMode' && !validateHttpUrl(btnValue)) {
          console.error("customTrayButton ".concat(btnKey, " should be a url."));
          return false;
        }

        var expectedKey = customTrayButtonsType.id[btnKey];

        if (!expectedKey) {
          console.error("customTrayButton does not support key ".concat(btnKey));
          return false;
        }

        if (_typeof_1(btnValue) !== expectedKey) {
          console.error("customTrayButton ".concat(btnKey, " should be a ").concat(expectedKey, "."));
          return false;
        }
      }
    }
  }

  return true;
}

function validateReactNativeConfig(config) {
  return validateConfigPropType(config, reactNativeConfigType);
}

function validateConfigPropType(prop, propType) {
  if (propType === undefined) {
    return false;
  }

  switch (_typeof_1(propType)) {
    case 'string':
      return _typeof_1(prop) === propType;

    case 'object':
      if (_typeof_1(prop) !== 'object') {
        return false;
      }

      for (var key in prop) {
        if (!validateConfigPropType(prop[key], propType[key])) {
          return false;
        }
      }

      return true;

    default:
      // console.error(
      //   "Internal programming error: we've defined our config prop types wrong"
      // );
      return false;
  }
}

function remoteMediaPlayerStartValidationHelpMsg() {
  return "startRemoteMediaPlayer arguments must be of the form: \n  { url: \"playback url\", \n  settings?: \n  {state: \"play\"|\"pause\", simulcastEncodings?: [{}] } }";
}

function remoteMediaPlayerUpdateValidationHelpMsg() {
  return "updateRemoteMediaPlayer arguments must be of the form: \n  session_id: \"participant session\", \n  { settings?: {state: \"play\"|\"pause\"} }";
}

function validateRemotePlayerUrl(url) {
  // TODO: add protocol check as well http://, https://. file://..
  if (typeof url !== 'string') {
    throw new Error("url parameter must be \"string\" type");
  }
}

function validateRemotePlayerSettings(playerSettings) {
  if (_typeof_1(playerSettings) !== 'object') {
    throw new Error("RemoteMediaPlayerSettings: must be \"object\" type");
  }

  if (playerSettings.state) {
    if (!Object.values(DAILY_JS_REMOTE_MEDIA_PLAYER_SETTING).includes(playerSettings.state)) {
      throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(DAILY_JS_REMOTE_MEDIA_PLAYER_SETTING));
    }
  }

  if (playerSettings.volume) {
    if (typeof playerSettings.volume !== 'number') {
      throw new Error("RemoteMediaPlayerSettings.volume: must be \"number\" type");
    }

    if (playerSettings.volume < 0 || playerSettings.volume > 2) {
      throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
    }
  }
}

function isValueInRange(val, min, max) {
  if (typeof val !== 'number' || val < min || val > max) {
    return false;
  }

  return true;
}

function validateRemotePlayerEncodingSettings(playerSettings) {
  for (var prop in playerSettings) {
    if (!startRmpSettingsValidKeys.includes(prop)) {
      throw new Error("Invalid key ".concat(prop, ", valid keys are: ").concat(startRmpSettingsValidKeys));
    }
  } // validate simulcastEncodings


  if (playerSettings.simulcastEncodings) {
    if (!(playerSettings.simulcastEncodings instanceof Array)) {
      throw new Error("simulcastEncodings must be \"Array\"");
    } // max 3 layers


    if (!isValueInRange(playerSettings.simulcastEncodings.length, 0, MAX_SIMULCAST_LAYERS)) {
      throw new Error("\"simulcastEncodings\" not in range. valid range 1 to 3 layers");
    } // check value within each simulcast layer


    playerSettings.simulcastEncodings.every(function (layer) {
      for (var _prop in layer) {
        // check property is valid
        if (!simulcastEncodingsValidRanges.hasOwnProperty(_prop)) {
          throw new Error("Invalid key ".concat(_prop, ", valid keys are:") + Object.keys(simulcastEncodingsValidRanges));
        } // property must be number


        if (typeof layer[_prop] !== 'number') {
          throw new Error("simulcastEncodings[].".concat(_prop, " must be \"number\""));
        } // property must be within range


        var _simulcastEncodingsVa = simulcastEncodingsValidRanges[_prop],
            min = _simulcastEncodingsVa.min,
            max = _simulcastEncodingsVa.max;

        if (!isValueInRange(layer[_prop], min, max)) {
          throw new Error("simulcastEncodings[].".concat(_prop, " value not in range. valid range:        ").concat(min, " to ").concat(max));
        }
      } // maxBitrate is mandatory


      if (!layer.hasOwnProperty('maxBitrate')) {
        throw new Error("simulcastEncodings[].maxBitrate is not specified");
      }
    });
  }
}

export default DailyIframe;
export { DAILY_ACCESS_LEVEL_FULL, DAILY_ACCESS_LEVEL_LOBBY, DAILY_ACCESS_LEVEL_NONE, DAILY_ACCESS_UNKNOWN, DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE, DAILY_CAMERA_ERROR_CAM_IN_USE, DAILY_CAMERA_ERROR_CONSTRAINTS, DAILY_CAMERA_ERROR_MIC_IN_USE, DAILY_CAMERA_ERROR_NOT_FOUND, DAILY_CAMERA_ERROR_PERMISSIONS, DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES, DAILY_CAMERA_ERROR_UNKNOWN, DAILY_EVENT_ACCESS_STATE_UPDATED, DAILY_EVENT_ACTIVE_SPEAKER_CHANGE, DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE, DAILY_EVENT_APP_MSG, DAILY_EVENT_CAMERA_ERROR, DAILY_EVENT_ERROR, DAILY_EVENT_EXIT_FULLSCREEN, DAILY_EVENT_FULLSCREEN, DAILY_EVENT_IFRAME_LAUNCH_CONFIG, DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG, DAILY_EVENT_INPUT_EVENT, DAILY_EVENT_INPUT_SETTINGS_UPDATED, DAILY_EVENT_JOINED_MEETING, DAILY_EVENT_JOINING_MEETING, DAILY_EVENT_LANG_UPDATED, DAILY_EVENT_LEFT_MEETING, DAILY_EVENT_LIVE_STREAMING_ERROR, DAILY_EVENT_LIVE_STREAMING_STARTED, DAILY_EVENT_LIVE_STREAMING_STOPPED, DAILY_EVENT_LOADED, DAILY_EVENT_LOADING, DAILY_EVENT_LOAD_ATTEMPT_FAILED, DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED, DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED, DAILY_EVENT_MEETING_SESSION_DATA_ERROR, DAILY_EVENT_MEETING_SESSION_STATE_UPDATED, DAILY_EVENT_MEETING_SESSION_UPDATED, DAILY_EVENT_NETWORK_CONNECTION, DAILY_EVENT_NETWORK_QUALITY_CHANGE, DAILY_EVENT_NONFATAL_ERROR, DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED, DAILY_EVENT_PARTICIPANT_JOINED, DAILY_EVENT_PARTICIPANT_LEFT, DAILY_EVENT_PARTICIPANT_UPDATED, DAILY_EVENT_RECEIVE_SETTINGS_UPDATED, DAILY_EVENT_RECORDING_DATA, DAILY_EVENT_RECORDING_ERROR, DAILY_EVENT_RECORDING_STARTED, DAILY_EVENT_RECORDING_STATS, DAILY_EVENT_RECORDING_STOPPED, DAILY_EVENT_RECORDING_UPLOAD_COMPLETED, DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED, DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED, DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED, DAILY_EVENT_STARTED_CAMERA, DAILY_EVENT_THEME_UPDATED, DAILY_EVENT_TRACK_STARTED, DAILY_EVENT_TRACK_STOPPED, DAILY_EVENT_TRANSCRIPTION_ERROR, DAILY_EVENT_TRANSCRIPTION_STARTED, DAILY_EVENT_TRANSCRIPTION_STOPPED, DAILY_EVENT_WAITING_PARTICIPANT_ADDED, DAILY_EVENT_WAITING_PARTICIPANT_REMOVED, DAILY_EVENT_WAITING_PARTICIPANT_UPDATED, DAILY_FATAL_ERROR_EJECTED, DAILY_FATAL_ERROR_EXP_ROOM, DAILY_FATAL_ERROR_EXP_TOKEN, DAILY_FATAL_ERROR_MEETING_FULL, DAILY_FATAL_ERROR_NBF_ROOM, DAILY_FATAL_ERROR_NBF_TOKEN, DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY, DAILY_RECEIVE_SETTINGS_BASE_KEY, DAILY_STATE_ERROR, DAILY_STATE_JOINED, DAILY_STATE_JOINING, DAILY_STATE_LEFT, DAILY_STATE_NEW, DAILY_TRACK_STATE_BLOCKED, DAILY_TRACK_STATE_INTERRUPTED, DAILY_TRACK_STATE_LOADING, DAILY_TRACK_STATE_OFF, DAILY_TRACK_STATE_PLAYABLE, DAILY_TRACK_STATE_SENDABLE };
