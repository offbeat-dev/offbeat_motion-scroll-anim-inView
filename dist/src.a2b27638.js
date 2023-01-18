// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@motionone/utils/dist/array.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUniqueItem = addUniqueItem;
exports.removeItem = removeItem;
function addUniqueItem(array, item) {
  array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}
},{}],"node_modules/@motionone/utils/dist/clamp.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = void 0;
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);
exports.clamp = clamp;
},{}],"node_modules/@motionone/utils/dist/defaults.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = void 0;
const defaults = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};
exports.defaults = defaults;
},{}],"node_modules/@motionone/utils/dist/is-number.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;
const isNumber = value => typeof value === "number";
exports.isNumber = isNumber;
},{}],"node_modules/@motionone/utils/dist/is-easing-list.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEasingList = void 0;
var _isNumberEs = require("./is-number.es.js");
const isEasingList = easing => Array.isArray(easing) && !(0, _isNumberEs.isNumber)(easing[0]);
exports.isEasingList = isEasingList;
},{"./is-number.es.js":"node_modules/@motionone/utils/dist/is-number.es.js"}],"node_modules/@motionone/utils/dist/wrap.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = void 0;
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
exports.wrap = wrap;
},{}],"node_modules/@motionone/utils/dist/easing.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEasingForSegment = getEasingForSegment;
var _isEasingListEs = require("./is-easing-list.es.js");
var _wrapEs = require("./wrap.es.js");
function getEasingForSegment(easing, i) {
  return (0, _isEasingListEs.isEasingList)(easing) ? easing[(0, _wrapEs.wrap)(0, easing.length, i)] : easing;
}
},{"./is-easing-list.es.js":"node_modules/@motionone/utils/dist/is-easing-list.es.js","./wrap.es.js":"node_modules/@motionone/utils/dist/wrap.es.js"}],"node_modules/@motionone/utils/dist/mix.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mix = void 0;
const mix = (min, max, progress) => -progress * min + progress * max + min;
exports.mix = mix;
},{}],"node_modules/@motionone/utils/dist/noop.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noopReturn = exports.noop = void 0;
const noop = () => {};
exports.noop = noop;
const noopReturn = v => v;
exports.noopReturn = noopReturn;
},{}],"node_modules/@motionone/utils/dist/progress.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progress = void 0;
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);
exports.progress = progress;
},{}],"node_modules/@motionone/utils/dist/offset.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOffset = defaultOffset;
exports.fillOffset = fillOffset;
var _mixEs = require("./mix.es.js");
var _progressEs = require("./progress.es.js");
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = (0, _progressEs.progress)(0, remaining, i);
    offset.push((0, _mixEs.mix)(min, 1, offsetProgress));
  }
}
function defaultOffset(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}
},{"./mix.es.js":"node_modules/@motionone/utils/dist/mix.es.js","./progress.es.js":"node_modules/@motionone/utils/dist/progress.es.js"}],"node_modules/@motionone/utils/dist/interpolate.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolate = interpolate;
var _mixEs = require("./mix.es.js");
var _noopEs = require("./noop.es.js");
var _offsetEs = require("./offset.es.js");
var _progressEs = require("./progress.es.js");
var _easingEs = require("./easing.es.js");
var _clampEs = require("./clamp.es.js");
function interpolate(output, input = (0, _offsetEs.defaultOffset)(output.length), easing = _noopEs.noopReturn) {
  const length = output.length;
  /**
   * If the input length is lower than the output we
   * fill the input to match. This currently assumes the input
   * is an animation progress value so is a good candidate for
   * moving outside the function.
   */
  const remainder = length - input.length;
  remainder > 0 && (0, _offsetEs.fillOffset)(input, remainder);
  return t => {
    let i = 0;
    for (; i < length - 2; i++) {
      if (t < input[i + 1]) break;
    }
    let progressInRange = (0, _clampEs.clamp)(0, 1, (0, _progressEs.progress)(input[i], input[i + 1], t));
    const segmentEasing = (0, _easingEs.getEasingForSegment)(easing, i);
    progressInRange = segmentEasing(progressInRange);
    return (0, _mixEs.mix)(output[i], output[i + 1], progressInRange);
  };
}
},{"./mix.es.js":"node_modules/@motionone/utils/dist/mix.es.js","./noop.es.js":"node_modules/@motionone/utils/dist/noop.es.js","./offset.es.js":"node_modules/@motionone/utils/dist/offset.es.js","./progress.es.js":"node_modules/@motionone/utils/dist/progress.es.js","./easing.es.js":"node_modules/@motionone/utils/dist/easing.es.js","./clamp.es.js":"node_modules/@motionone/utils/dist/clamp.es.js"}],"node_modules/@motionone/utils/dist/is-cubic-bezier.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCubicBezier = void 0;
var _isNumberEs = require("./is-number.es.js");
const isCubicBezier = easing => Array.isArray(easing) && (0, _isNumberEs.isNumber)(easing[0]);
exports.isCubicBezier = isCubicBezier;
},{"./is-number.es.js":"node_modules/@motionone/utils/dist/is-number.es.js"}],"node_modules/@motionone/utils/dist/is-easing-generator.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEasingGenerator = void 0;
const isEasingGenerator = easing => typeof easing === "object" && Boolean(easing.createAnimation);
exports.isEasingGenerator = isEasingGenerator;
},{}],"node_modules/@motionone/utils/dist/is-function.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;
const isFunction = value => typeof value === "function";
exports.isFunction = isFunction;
},{}],"node_modules/@motionone/utils/dist/is-string.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;
const isString = value => typeof value === "string";
exports.isString = isString;
},{}],"node_modules/@motionone/utils/dist/time.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.time = void 0;
const time = {
  ms: seconds => seconds * 1000,
  s: milliseconds => milliseconds / 1000
};
exports.time = time;
},{}],"node_modules/@motionone/utils/dist/velocity.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.velocityPerSecond = velocityPerSecond;
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
},{}],"node_modules/@motionone/utils/dist/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addUniqueItem", {
  enumerable: true,
  get: function () {
    return _arrayEs.addUniqueItem;
  }
});
Object.defineProperty(exports, "clamp", {
  enumerable: true,
  get: function () {
    return _clampEs.clamp;
  }
});
Object.defineProperty(exports, "defaultOffset", {
  enumerable: true,
  get: function () {
    return _offsetEs.defaultOffset;
  }
});
Object.defineProperty(exports, "defaults", {
  enumerable: true,
  get: function () {
    return _defaultsEs.defaults;
  }
});
Object.defineProperty(exports, "fillOffset", {
  enumerable: true,
  get: function () {
    return _offsetEs.fillOffset;
  }
});
Object.defineProperty(exports, "getEasingForSegment", {
  enumerable: true,
  get: function () {
    return _easingEs.getEasingForSegment;
  }
});
Object.defineProperty(exports, "interpolate", {
  enumerable: true,
  get: function () {
    return _interpolateEs.interpolate;
  }
});
Object.defineProperty(exports, "isCubicBezier", {
  enumerable: true,
  get: function () {
    return _isCubicBezierEs.isCubicBezier;
  }
});
Object.defineProperty(exports, "isEasingGenerator", {
  enumerable: true,
  get: function () {
    return _isEasingGeneratorEs.isEasingGenerator;
  }
});
Object.defineProperty(exports, "isEasingList", {
  enumerable: true,
  get: function () {
    return _isEasingListEs.isEasingList;
  }
});
Object.defineProperty(exports, "isFunction", {
  enumerable: true,
  get: function () {
    return _isFunctionEs.isFunction;
  }
});
Object.defineProperty(exports, "isNumber", {
  enumerable: true,
  get: function () {
    return _isNumberEs.isNumber;
  }
});
Object.defineProperty(exports, "isString", {
  enumerable: true,
  get: function () {
    return _isStringEs.isString;
  }
});
Object.defineProperty(exports, "mix", {
  enumerable: true,
  get: function () {
    return _mixEs.mix;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function () {
    return _noopEs.noop;
  }
});
Object.defineProperty(exports, "noopReturn", {
  enumerable: true,
  get: function () {
    return _noopEs.noopReturn;
  }
});
Object.defineProperty(exports, "progress", {
  enumerable: true,
  get: function () {
    return _progressEs.progress;
  }
});
Object.defineProperty(exports, "removeItem", {
  enumerable: true,
  get: function () {
    return _arrayEs.removeItem;
  }
});
Object.defineProperty(exports, "time", {
  enumerable: true,
  get: function () {
    return _timeEs.time;
  }
});
Object.defineProperty(exports, "velocityPerSecond", {
  enumerable: true,
  get: function () {
    return _velocityEs.velocityPerSecond;
  }
});
Object.defineProperty(exports, "wrap", {
  enumerable: true,
  get: function () {
    return _wrapEs.wrap;
  }
});
var _arrayEs = require("./array.es.js");
var _clampEs = require("./clamp.es.js");
var _defaultsEs = require("./defaults.es.js");
var _easingEs = require("./easing.es.js");
var _interpolateEs = require("./interpolate.es.js");
var _isCubicBezierEs = require("./is-cubic-bezier.es.js");
var _isEasingGeneratorEs = require("./is-easing-generator.es.js");
var _isEasingListEs = require("./is-easing-list.es.js");
var _isFunctionEs = require("./is-function.es.js");
var _isNumberEs = require("./is-number.es.js");
var _isStringEs = require("./is-string.es.js");
var _mixEs = require("./mix.es.js");
var _noopEs = require("./noop.es.js");
var _offsetEs = require("./offset.es.js");
var _progressEs = require("./progress.es.js");
var _timeEs = require("./time.es.js");
var _velocityEs = require("./velocity.es.js");
var _wrapEs = require("./wrap.es.js");
},{"./array.es.js":"node_modules/@motionone/utils/dist/array.es.js","./clamp.es.js":"node_modules/@motionone/utils/dist/clamp.es.js","./defaults.es.js":"node_modules/@motionone/utils/dist/defaults.es.js","./easing.es.js":"node_modules/@motionone/utils/dist/easing.es.js","./interpolate.es.js":"node_modules/@motionone/utils/dist/interpolate.es.js","./is-cubic-bezier.es.js":"node_modules/@motionone/utils/dist/is-cubic-bezier.es.js","./is-easing-generator.es.js":"node_modules/@motionone/utils/dist/is-easing-generator.es.js","./is-easing-list.es.js":"node_modules/@motionone/utils/dist/is-easing-list.es.js","./is-function.es.js":"node_modules/@motionone/utils/dist/is-function.es.js","./is-number.es.js":"node_modules/@motionone/utils/dist/is-number.es.js","./is-string.es.js":"node_modules/@motionone/utils/dist/is-string.es.js","./mix.es.js":"node_modules/@motionone/utils/dist/mix.es.js","./noop.es.js":"node_modules/@motionone/utils/dist/noop.es.js","./offset.es.js":"node_modules/@motionone/utils/dist/offset.es.js","./progress.es.js":"node_modules/@motionone/utils/dist/progress.es.js","./time.es.js":"node_modules/@motionone/utils/dist/time.es.js","./velocity.es.js":"node_modules/@motionone/utils/dist/velocity.es.js","./wrap.es.js":"node_modules/@motionone/utils/dist/wrap.es.js"}],"node_modules/@motionone/easing/dist/cubic-bezier.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicBezier = cubicBezier;
var _utils = require("@motionone/utils");
/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0.0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  // If this is a linear gradient, return linear easing
  if (mX1 === mY1 && mX2 === mY2) return _utils.noopReturn;
  const getTForX = aX => binarySubdivide(aX, 0, 1, mX1, mX2);
  // If animation is at start/end, return t without easing
  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/easing/dist/steps.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.steps = void 0;
var _utils = require("@motionone/utils");
const steps = (steps, direction = "end") => progress => {
  progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
  const expanded = progress * steps;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return (0, _utils.clamp)(0, 1, rounded / steps);
};
exports.steps = steps;
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/easing/dist/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cubicBezier", {
  enumerable: true,
  get: function () {
    return _cubicBezierEs.cubicBezier;
  }
});
Object.defineProperty(exports, "steps", {
  enumerable: true,
  get: function () {
    return _stepsEs.steps;
  }
});
var _cubicBezierEs = require("./cubic-bezier.es.js");
var _stepsEs = require("./steps.es.js");
},{"./cubic-bezier.es.js":"node_modules/@motionone/easing/dist/cubic-bezier.es.js","./steps.es.js":"node_modules/@motionone/easing/dist/steps.es.js"}],"node_modules/@motionone/animation/dist/utils/easing.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEasingFunction = getEasingFunction;
var _easing = require("@motionone/easing");
var _utils = require("@motionone/utils");
const namedEasings = {
  ease: (0, _easing.cubicBezier)(0.25, 0.1, 0.25, 1.0),
  "ease-in": (0, _easing.cubicBezier)(0.42, 0.0, 1.0, 1.0),
  "ease-in-out": (0, _easing.cubicBezier)(0.42, 0.0, 0.58, 1.0),
  "ease-out": (0, _easing.cubicBezier)(0.0, 0.0, 0.58, 1.0)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
  // If already an easing function, return
  if ((0, _utils.isFunction)(definition)) return definition;
  // If an easing curve definition, return bezier function
  if ((0, _utils.isCubicBezier)(definition)) return (0, _easing.cubicBezier)(...definition);
  // If we have a predefined easing function, return
  if (namedEasings[definition]) return namedEasings[definition];
  // If this is a steps function, attempt to create easing curve
  if (definition.startsWith("steps")) {
    const args = functionArgsRegex.exec(definition);
    if (args) {
      const argsArray = args[1].split(",");
      return (0, _easing.steps)(parseFloat(argsArray[0]), argsArray[1].trim());
    }
  }
  return _utils.noopReturn;
}
},{"@motionone/easing":"node_modules/@motionone/easing/dist/index.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/animation/dist/Animation.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animation = void 0;
var _utils = require("@motionone/utils");
var _easingEs = require("./utils/easing.es.js");
class Animation {
  constructor(output, keyframes = [0, 1], {
    easing,
    duration: initialDuration = _utils.defaults.duration,
    delay = _utils.defaults.delay,
    endDelay = _utils.defaults.endDelay,
    repeat = _utils.defaults.repeat,
    offset,
    direction = "normal"
  } = {}) {
    this.startTime = null;
    this.rate = 1;
    this.t = 0;
    this.cancelTimestamp = null;
    this.easing = _utils.noopReturn;
    this.duration = 0;
    this.totalDuration = 0;
    this.repeat = 0;
    this.playState = "idle";
    this.finished = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    easing = easing || _utils.defaults.easing;
    if ((0, _utils.isEasingGenerator)(easing)) {
      const custom = easing.createAnimation(keyframes);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      initialDuration = custom.duration || initialDuration;
    }
    this.repeat = repeat;
    this.easing = (0, _utils.isEasingList)(easing) ? _utils.noopReturn : (0, _easingEs.getEasingFunction)(easing);
    this.updateDuration(initialDuration);
    const interpolate$1 = (0, _utils.interpolate)(keyframes, offset, (0, _utils.isEasingList)(easing) ? easing.map(_easingEs.getEasingFunction) : _utils.noopReturn);
    this.tick = timestamp => {
      var _a;
      // TODO: Temporary fix for OptionsResolver typing
      delay = delay;
      let t = 0;
      if (this.pauseTime !== undefined) {
        t = this.pauseTime;
      } else {
        t = (timestamp - this.startTime) * this.rate;
      }
      this.t = t;
      // Convert to seconds
      t /= 1000;
      // Rebase on delay
      t = Math.max(t - delay, 0);
      /**
       * If this animation has finished, set the current time
       * to the total duration.
       */
      if (this.playState === "finished" && this.pauseTime === undefined) {
        t = this.totalDuration;
      }
      /**
       * Get the current progress (0-1) of the animation. If t is >
       * than duration we'll get values like 2.5 (midway through the
       * third iteration)
       */
      const progress = t / this.duration;
      // TODO progress += iterationStart
      /**
       * Get the current iteration (0 indexed). For instance the floor of
       * 2.5 is 2.
       */
      let currentIteration = Math.floor(progress);
      /**
       * Get the current progress of the iteration by taking the remainder
       * so 2.5 is 0.5 through iteration 2
       */
      let iterationProgress = progress % 1.0;
      if (!iterationProgress && progress >= 1) {
        iterationProgress = 1;
      }
      /**
       * If iteration progress is 1 we count that as the end
       * of the previous iteration.
       */
      iterationProgress === 1 && currentIteration--;
      /**
       * Reverse progress if we're not running in "normal" direction
       */
      const iterationIsOdd = currentIteration % 2;
      if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
        iterationProgress = 1 - iterationProgress;
      }
      const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
      const latest = interpolate$1(this.easing(p));
      output(latest);
      const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
      if (isAnimationFinished) {
        this.playState = "finished";
        (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
      } else if (this.playState !== "idle") {
        this.frameRequestId = requestAnimationFrame(this.tick);
      }
    };
    this.play();
  }
  play() {
    const now = performance.now();
    this.playState = "running";
    if (this.pauseTime !== undefined) {
      this.startTime = now - this.pauseTime;
    } else if (!this.startTime) {
      this.startTime = now;
    }
    this.cancelTimestamp = this.startTime;
    this.pauseTime = undefined;
    this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused";
    this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished";
    this.tick(0);
  }
  stop() {
    var _a;
    this.playState = "idle";
    if (this.frameRequestId !== undefined) {
      cancelAnimationFrame(this.frameRequestId);
    }
    (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
  }
  cancel() {
    this.stop();
    this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(duration) {
    this.duration = duration;
    this.totalDuration = duration * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    if (this.pauseTime !== undefined || this.rate === 0) {
      this.pauseTime = t;
    } else {
      this.startTime = performance.now() - t / this.rate;
    }
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(rate) {
    this.rate = rate;
  }
}
exports.Animation = Animation;
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./utils/easing.es.js":"node_modules/@motionone/animation/dist/utils/easing.es.js"}],"node_modules/@motionone/animation/dist/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Animation", {
  enumerable: true,
  get: function () {
    return _AnimationEs.Animation;
  }
});
Object.defineProperty(exports, "getEasingFunction", {
  enumerable: true,
  get: function () {
    return _easingEs.getEasingFunction;
  }
});
var _AnimationEs = require("./Animation.es.js");
var _easingEs = require("./utils/easing.es.js");
},{"./Animation.es.js":"node_modules/@motionone/animation/dist/Animation.es.js","./utils/easing.es.js":"node_modules/@motionone/animation/dist/utils/easing.es.js"}],"node_modules/hey-listen/dist/hey-listen.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.invariant = void 0;
var warning = function () {};
exports.warning = warning;
var invariant = function () {};
exports.invariant = invariant;
if ("development" !== 'production') {
  exports.warning = warning = function (check, message) {
    if (!check && typeof console !== 'undefined') {
      console.warn(message);
    }
  };
  exports.invariant = invariant = function (check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}
},{}],"node_modules/@motionone/types/dist/MotionValue.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MotionValue = void 0;
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */
class MotionValue {
  setAnimation(animation) {
    this.animation = animation;
    animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = undefined;
  }
}
exports.MotionValue = MotionValue;
},{}],"node_modules/@motionone/types/dist/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MotionValue", {
  enumerable: true,
  get: function () {
    return _MotionValueEs.MotionValue;
  }
});
var _MotionValueEs = require("./MotionValue.es.js");
},{"./MotionValue.es.js":"node_modules/@motionone/types/dist/MotionValue.es.js"}],"node_modules/@motionone/dom/dist/animate/data.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimationData = getAnimationData;
exports.getMotionValue = getMotionValue;
var _types = require("@motionone/types");
const data = new WeakMap();
function getAnimationData(element) {
  if (!data.has(element)) {
    data.set(element, {
      transforms: [],
      values: new Map()
    });
  }
  return data.get(element);
}
function getMotionValue(motionValues, name) {
  if (!motionValues.has(name)) {
    motionValues.set(name, new _types.MotionValue());
  }
  return motionValues.get(name);
}
},{"@motionone/types":"node_modules/@motionone/types/dist/index.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/transforms.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformDefinitions = exports.transformAlias = exports.isTransform = exports.compareTransformOrder = exports.buildTransformTemplate = exports.axes = exports.asTransformCssVar = exports.addTransformToElement = void 0;
var _utils = require("@motionone/utils");
var _dataEs = require("../data.es.js");
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
const axes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
exports.axes = axes;
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
exports.transformAlias = transformAlias;
const rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: v => v + "deg"
};
const baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: v => v + "px"
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: _utils.noopReturn
  },
  skew: rotation
};
const transformDefinitions = new Map();
exports.transformDefinitions = transformDefinitions;
const asTransformCssVar = name => `--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */
exports.asTransformCssVar = asTransformCssVar;
const transforms = ["x", "y", "z"];
order.forEach(name => {
  axes.forEach(axis => {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
const compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */
exports.compareTransformOrder = compareTransformOrder;
const transformLookup = new Set(transforms);
const isTransform = name => transformLookup.has(name);
exports.isTransform = isTransform;
const addTransformToElement = (element, name) => {
  // Map x to translateX etc
  if (transformAlias[name]) name = transformAlias[name];
  const {
    transforms
  } = (0, _dataEs.getAnimationData)(element);
  (0, _utils.addUniqueItem)(transforms, name);
  /**
   * TODO: An optimisation here could be to cache the transform in element data
   * and only update if this has changed.
   */
  element.style.transform = buildTransformTemplate(transforms);
};
exports.addTransformToElement = addTransformToElement;
const buildTransformTemplate = transforms => transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
exports.buildTransformTemplate = buildTransformTemplate;
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","../data.es.js":"node_modules/@motionone/dom/dist/animate/data.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/css-var.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCssVar = void 0;
exports.registerCssVariable = registerCssVariable;
exports.registeredProperties = void 0;
var _transformsEs = require("./transforms.es.js");
const isCssVar = name => name.startsWith("--");
exports.isCssVar = isCssVar;
const registeredProperties = new Set();
exports.registeredProperties = registeredProperties;
function registerCssVariable(name) {
  if (registeredProperties.has(name)) return;
  registeredProperties.add(name);
  try {
    const {
      syntax,
      initialValue
    } = _transformsEs.transformDefinitions.has(name) ? _transformsEs.transformDefinitions.get(name) : {};
    CSS.registerProperty({
      name,
      inherits: false,
      syntax,
      initialValue
    });
  } catch (e) {}
}
},{"./transforms.es.js":"node_modules/@motionone/dom/dist/animate/utils/transforms.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supports = void 0;
const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
  cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({
        opacity: [1]
      });
    } catch (e) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({
    opacity: [0, 1]
  }, {
    duration: 0.001
  }).finished),
  linearEasing: () => {
    try {
      testAnimation({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch (e) {
      return false;
    }
    return true;
  }
};
const results = {};
const supports = {};
exports.supports = supports;
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
  };
}
},{}],"node_modules/@motionone/dom/dist/animate/utils/easing.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLinearEasingPoints = exports.cubicBezierAsString = exports.convertEasing = void 0;
var _utils = require("@motionone/utils");
var _featureDetectionEs = require("./feature-detection.es.js");
// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
  let points = "";
  const numPoints = Math.round(duration / resolution);
  for (let i = 0; i < numPoints; i++) {
    points += easing((0, _utils.progress)(0, numPoints - 1, i)) + ", ";
  }
  return points.substring(0, points.length - 2);
};
exports.generateLinearEasingPoints = generateLinearEasingPoints;
const convertEasing = (easing, duration) => {
  if ((0, _utils.isFunction)(easing)) {
    return _featureDetectionEs.supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : _utils.defaults.easing;
  } else {
    return (0, _utils.isCubicBezier)(easing) ? cubicBezierAsString(easing) : easing;
  }
};
exports.convertEasing = convertEasing;
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
exports.cubicBezierAsString = cubicBezierAsString;
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./feature-detection.es.js":"node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrateKeyframes = hydrateKeyframes;
exports.keyframesList = void 0;
function hydrateKeyframes(keyframes, readInitialValue) {
  for (let i = 0; i < keyframes.length; i++) {
    if (keyframes[i] === null) {
      keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    }
  }
  return keyframes;
}
const keyframesList = keyframes => Array.isArray(keyframes) ? keyframes : [keyframes];
exports.keyframesList = keyframesList;
},{}],"node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyleName = getStyleName;
var _transformsEs = require("./transforms.es.js");
function getStyleName(key) {
  if (_transformsEs.transformAlias[key]) key = _transformsEs.transformAlias[key];
  return (0, _transformsEs.isTransform)(key) ? (0, _transformsEs.asTransformCssVar)(key) : key;
}
},{"./transforms.es.js":"node_modules/@motionone/dom/dist/animate/utils/transforms.es.js"}],"node_modules/@motionone/dom/dist/animate/style.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = void 0;
var _cssVarEs = require("./utils/css-var.es.js");
var _getStyleNameEs = require("./utils/get-style-name.es.js");
var _transformsEs = require("./utils/transforms.es.js");
const style = {
  get: (element, name) => {
    name = (0, _getStyleNameEs.getStyleName)(name);
    let value = (0, _cssVarEs.isCssVar)(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
    if (!value && value !== 0) {
      const definition = _transformsEs.transformDefinitions.get(name);
      if (definition) value = definition.initialValue;
    }
    return value;
  },
  set: (element, name, value) => {
    name = (0, _getStyleNameEs.getStyleName)(name);
    if ((0, _cssVarEs.isCssVar)(name)) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  }
};
exports.style = style;
},{"./utils/css-var.es.js":"node_modules/@motionone/dom/dist/animate/utils/css-var.es.js","./utils/get-style-name.es.js":"node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js","./utils/transforms.es.js":"node_modules/@motionone/dom/dist/animate/utils/transforms.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopAnimation = stopAnimation;
function stopAnimation(animation, needsCommit = true) {
  if (!animation || animation.playState === "finished") return;
  // Suppress error thrown by WAAPI
  try {
    if (animation.stop) {
      animation.stop();
    } else {
      needsCommit && animation.commitStyles();
      animation.cancel();
    }
  } catch (e) {}
}
},{}],"node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnitConverter = getUnitConverter;
var _utils = require("@motionone/utils");
function getUnitConverter(keyframes, definition) {
  var _a;
  let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || _utils.noopReturn;
  const finalKeyframe = keyframes[keyframes.length - 1];
  if ((0, _utils.isString)(finalKeyframe)) {
    const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
    if (unit) toUnit = value => value + unit;
  }
  return toUnit;
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/animate/animate-style.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateStyle = animateStyle;
var _dataEs = require("./data.es.js");
var _cssVarEs = require("./utils/css-var.es.js");
var _utils = require("@motionone/utils");
var _transformsEs = require("./utils/transforms.es.js");
var _easingEs = require("./utils/easing.es.js");
var _featureDetectionEs = require("./utils/feature-detection.es.js");
var _keyframesEs = require("./utils/keyframes.es.js");
var _styleEs = require("./style.es.js");
var _getStyleNameEs = require("./utils/get-style-name.es.js");
var _stopAnimationEs = require("./utils/stop-animation.es.js");
var _getUnitEs = require("./utils/get-unit.es.js");
function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
  const record = getDevToolsRecord();
  const isRecording = options.record !== false && record;
  let animation;
  let {
    duration = _utils.defaults.duration,
    delay = _utils.defaults.delay,
    endDelay = _utils.defaults.endDelay,
    repeat = _utils.defaults.repeat,
    easing = _utils.defaults.easing,
    persist = false,
    direction,
    offset,
    allowWebkitAcceleration = false
  } = options;
  const data = (0, _dataEs.getAnimationData)(element);
  const valueIsTransform = (0, _transformsEs.isTransform)(key);
  let canAnimateNatively = _featureDetectionEs.supports.waapi();
  /**
   * If this is an individual transform, we need to map its
   * key to a CSS variable and update the element's transform style
   */
  valueIsTransform && (0, _transformsEs.addTransformToElement)(element, key);
  const name = (0, _getStyleNameEs.getStyleName)(key);
  const motionValue = (0, _dataEs.getMotionValue)(data.values, name);
  /**
   * Get definition of value, this will be used to convert numerical
   * keyframes into the default value type.
   */
  const definition = _transformsEs.transformDefinitions.get(name);
  /**
   * Stop the current animation, if any. Because this will trigger
   * commitStyles (DOM writes) and we might later trigger DOM reads,
   * this is fired now and we return a factory function to create
   * the actual animation that can get called in batch,
   */
  (0, _stopAnimationEs.stopAnimation)(motionValue.animation, !((0, _utils.isEasingGenerator)(easing) && motionValue.generator) && options.record !== false);
  /**
   * Batchable factory function containing all DOM reads.
   */
  return () => {
    const readInitialValue = () => {
      var _a, _b;
      return (_b = (_a = _styleEs.style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
    };
    /**
     * Replace null values with the previous keyframe value, or read
     * it from the DOM if it's the first keyframe.
     */
    let keyframes = (0, _keyframesEs.hydrateKeyframes)((0, _keyframesEs.keyframesList)(keyframesDefinition), readInitialValue);
    /**
     * Detect unit type of keyframes.
     */
    const toUnit = (0, _getUnitEs.getUnitConverter)(keyframes, definition);
    if ((0, _utils.isEasingGenerator)(easing)) {
      const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      duration = custom.duration || duration;
    }
    /**
     * If this is a CSS variable we need to register it with the browser
     * before it can be animated natively. We also set it with setProperty
     * rather than directly onto the element.style object.
     */
    if ((0, _cssVarEs.isCssVar)(name)) {
      if (_featureDetectionEs.supports.cssRegisterProperty()) {
        (0, _cssVarEs.registerCssVariable)(name);
      } else {
        canAnimateNatively = false;
      }
    }
    /**
     * If we've been passed a custom easing function, and this browser
     * does **not** support linear() easing, and the value is a transform
     * (and thus a pure number) we can still support the custom easing
     * by falling back to the animation polyfill.
     */
    if (valueIsTransform && !_featureDetectionEs.supports.linearEasing() && ((0, _utils.isFunction)(easing) || (0, _utils.isEasingList)(easing) && easing.some(_utils.isFunction))) {
      canAnimateNatively = false;
    }
    /**
     * If we can animate this value with WAAPI, do so.
     */
    if (canAnimateNatively) {
      /**
       * Convert numbers to default value types. Currently this only supports
       * transforms but it could also support other value types.
       */
      if (definition) {
        keyframes = keyframes.map(value => (0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value);
      }
      /**
       * If this browser doesn't support partial/implicit keyframes we need to
       * explicitly provide one.
       */
      if (keyframes.length === 1 && (!_featureDetectionEs.supports.partialKeyframes() || isRecording)) {
        keyframes.unshift(readInitialValue());
      }
      const animationOptions = {
        delay: _utils.time.ms(delay),
        duration: _utils.time.ms(duration),
        endDelay: _utils.time.ms(endDelay),
        easing: !(0, _utils.isEasingList)(easing) ? (0, _easingEs.convertEasing)(easing, duration) : undefined,
        direction,
        iterations: repeat + 1,
        fill: "both"
      };
      animation = element.animate({
        [name]: keyframes,
        offset,
        easing: (0, _utils.isEasingList)(easing) ? easing.map(thisEasing => (0, _easingEs.convertEasing)(thisEasing, duration)) : undefined
      }, animationOptions);
      /**
       * Polyfill finished Promise in browsers that don't support it
       */
      if (!animation.finished) {
        animation.finished = new Promise((resolve, reject) => {
          animation.onfinish = resolve;
          animation.oncancel = reject;
        });
      }
      const target = keyframes[keyframes.length - 1];
      animation.finished.then(() => {
        if (persist) return;
        // Apply styles to target
        _styleEs.style.set(element, name, target);
        // Ensure fill modes don't persist
        animation.cancel();
      }).catch(_utils.noop);
      /**
       * This forces Webkit to run animations on the main thread by exploiting
       * this condition:
       * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
       *
       * This fixes Webkit's timing bugs, like accelerated animations falling
       * out of sync with main thread animations and massive delays in starting
       * accelerated animations in WKWebView.
       */
      if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
      /**
       * If we can't animate the value natively then we can fallback to the numbers-only
       * polyfill for transforms.
       */
    } else if (AnimationPolyfill && valueIsTransform) {
      /**
       * If any keyframe is a string (because we measured it from the DOM), we need to convert
       * it into a number before passing to the Animation polyfill.
       */
      keyframes = keyframes.map(value => typeof value === "string" ? parseFloat(value) : value);
      /**
       * If we only have a single keyframe, we need to create an initial keyframe by reading
       * the current value from the DOM.
       */
      if (keyframes.length === 1) {
        keyframes.unshift(parseFloat(readInitialValue()));
      }
      animation = new AnimationPolyfill(latest => {
        _styleEs.style.set(element, name, toUnit ? toUnit(latest) : latest);
      }, keyframes, Object.assign(Object.assign({}, options), {
        duration,
        easing
      }));
    } else {
      const target = keyframes[keyframes.length - 1];
      _styleEs.style.set(element, name, definition && (0, _utils.isNumber)(target) ? definition.toDefaultUnit(target) : target);
    }
    if (isRecording) {
      record(element, key, keyframes, {
        duration,
        delay: delay,
        easing,
        repeat,
        offset
      }, "motion-one");
    }
    motionValue.setAnimation(animation);
    return animation;
  };
}
},{"./data.es.js":"node_modules/@motionone/dom/dist/animate/data.es.js","./utils/css-var.es.js":"node_modules/@motionone/dom/dist/animate/utils/css-var.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./utils/transforms.es.js":"node_modules/@motionone/dom/dist/animate/utils/transforms.es.js","./utils/easing.es.js":"node_modules/@motionone/dom/dist/animate/utils/easing.es.js","./utils/feature-detection.es.js":"node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js","./utils/keyframes.es.js":"node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js","./style.es.js":"node_modules/@motionone/dom/dist/animate/style.es.js","./utils/get-style-name.es.js":"node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js","./utils/stop-animation.es.js":"node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js","./utils/get-unit.es.js":"node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/options.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = void 0;
const getOptions = (options, key) =>
/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */
options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);
exports.getOptions = getOptions;
},{}],"node_modules/@motionone/dom/dist/utils/resolve-elements.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveElements = resolveElements;
function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  /**
   * Return an empty array
   */
  return Array.from(elements || []);
}
},{}],"node_modules/@motionone/dom/dist/animate/utils/controls.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withControls = exports.controls = void 0;
var _utils = require("@motionone/utils");
var _stopAnimationEs = require("./stop-animation.es.js");
const createAnimation = factory => factory();
const withControls = (animationFactory, options, duration = _utils.defaults.duration) => {
  return new Proxy({
    animations: animationFactory.map(createAnimation).filter(Boolean),
    duration,
    options
  }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */
exports.withControls = withControls;
const getActiveAnimation = state => state.animations[0];
const controls = {
  get: (target, key) => {
    const activeAnimation = getActiveAnimation(target);
    switch (key) {
      case "duration":
        return target.duration;
      case "currentTime":
        return _utils.time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
      case "playbackRate":
      case "playState":
        return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
      case "finished":
        if (!target.finished) {
          target.finished = Promise.all(target.animations.map(selectFinished)).catch(_utils.noop);
        }
        return target.finished;
      case "stop":
        return () => {
          target.animations.forEach(animation => (0, _stopAnimationEs.stopAnimation)(animation));
        };
      case "forEachNative":
        /**
         * This is for internal use only, fire a callback for each
         * underlying animation.
         */
        return callback => {
          target.animations.forEach(animation => callback(animation, target));
        };
      default:
        return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : () => target.animations.forEach(animation => animation[key]());
    }
  },
  set: (target, key, value) => {
    switch (key) {
      case "currentTime":
        value = _utils.time.ms(value);
      case "currentTime":
      case "playbackRate":
        for (let i = 0; i < target.animations.length; i++) {
          target.animations[i][key] = value;
        }
        return true;
    }
    return false;
  }
};
exports.controls = controls;
const selectFinished = animation => animation.finished;
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./stop-animation.es.js":"node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js"}],"node_modules/@motionone/dom/dist/utils/stagger.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromIndex = getFromIndex;
exports.resolveOption = resolveOption;
exports.stagger = stagger;
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function stagger(duration = 0.1, {
  start = 0,
  from = 0,
  easing
} = {}) {
  return (i, total) => {
    const fromIndex = (0, _utils.isNumber)(from) ? from : getFromIndex(from, total);
    const distance = Math.abs(fromIndex - i);
    let delay = duration * distance;
    if (easing) {
      const maxDelay = total * duration;
      const easingFunction = (0, _animation.getEasingFunction)(easing);
      delay = easingFunction(delay / maxDelay) * maxDelay;
    }
    return start + delay;
  };
}
function getFromIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function resolveOption(option, i, total) {
  return (0, _utils.isFunction)(option) ? option(i, total) : option;
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","@motionone/animation":"node_modules/@motionone/animation/dist/index.es.js"}],"node_modules/@motionone/dom/dist/animate/create-animate.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimate = createAnimate;
var _heyListen = require("hey-listen");
var _animateStyleEs = require("./animate-style.es.js");
var _optionsEs = require("./utils/options.es.js");
var _resolveElementsEs = require("../utils/resolve-elements.es.js");
var _controlsEs = require("./utils/controls.es.js");
var _staggerEs = require("../utils/stagger.es.js");
function createAnimate(AnimatePolyfill) {
  return function animate(elements, keyframes, options = {}) {
    elements = (0, _resolveElementsEs.resolveElements)(elements);
    const numElements = elements.length;
    (0, _heyListen.invariant)(Boolean(numElements), "No valid element provided.");
    (0, _heyListen.invariant)(Boolean(keyframes), "No keyframes defined.");
    /**
     * Create and start new animations
     */
    const animationFactories = [];
    for (let i = 0; i < numElements; i++) {
      const element = elements[i];
      for (const key in keyframes) {
        const valueOptions = (0, _optionsEs.getOptions)(options, key);
        valueOptions.delay = (0, _staggerEs.resolveOption)(valueOptions.delay, i, numElements);
        const animation = (0, _animateStyleEs.animateStyle)(element, key, keyframes[key], valueOptions, AnimatePolyfill);
        animationFactories.push(animation);
      }
    }
    return (0, _controlsEs.withControls)(animationFactories, options,
    /**
     * TODO:
     * If easing is set to spring or glide, duration will be dynamically
     * generated. Ideally we would dynamically generate this from
     * animation.effect.getComputedTiming().duration but this isn't
     * supported in iOS13 or our number polyfill. Perhaps it's possible
     * to Proxy animations returned from animateStyle that has duration
     * as a getter.
     */
    options.duration);
  };
}
},{"hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","./animate-style.es.js":"node_modules/@motionone/dom/dist/animate/animate-style.es.js","./utils/options.es.js":"node_modules/@motionone/dom/dist/animate/utils/options.es.js","../utils/resolve-elements.es.js":"node_modules/@motionone/dom/dist/utils/resolve-elements.es.js","./utils/controls.es.js":"node_modules/@motionone/dom/dist/animate/utils/controls.es.js","../utils/stagger.es.js":"node_modules/@motionone/dom/dist/utils/stagger.es.js"}],"node_modules/@motionone/dom/dist/animate/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = void 0;
var _animation = require("@motionone/animation");
var _createAnimateEs = require("./create-animate.es.js");
const animate = (0, _createAnimateEs.createAnimate)(_animation.Animation);
exports.animate = animate;
},{"@motionone/animation":"node_modules/@motionone/animation/dist/index.es.js","./create-animate.es.js":"node_modules/@motionone/dom/dist/animate/create-animate.es.js"}],"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldIn = __classPrivateFieldIn;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = void 0;
exports.__decorate = __decorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__read = __read;
exports.__rest = __rest;
exports.__spread = __spread;
exports.__spreadArray = __spreadArray;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__assign = __assign;
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
exports.__createBinding = __createBinding;
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
},{}],"node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcNextTime = calcNextTime;
var _utils = require("@motionone/utils");
function calcNextTime(current, next, prev, labels) {
  var _a;
  if ((0, _utils.isNumber)(next)) {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/timeline/utils/edit.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addKeyframes = addKeyframes;
exports.eraseKeyframes = eraseKeyframes;
var _utils = require("@motionone/utils");
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      (0, _utils.removeItem)(sequence, keyframe);
      // If we remove this item we have to push the pointer back one
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
  /**
   * Erase every existing value between currentTime and targetTime,
   * this will essentially splice this timeline into any currently
   * defined ones.
   */
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes.length; i++) {
    sequence.push({
      value: keyframes[i],
      at: (0, _utils.mix)(startTime, endTime, offset[i]),
      easing: (0, _utils.getEasingForSegment)(easing, i)
    });
  }
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/timeline/utils/sort.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareByTime = compareByTime;
function compareByTime(a, b) {
  if (a.at === b.at) {
    return a.value === null ? 1 : -1;
  } else {
    return a.at - b.at;
  }
}
},{}],"node_modules/@motionone/dom/dist/timeline/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimationsFromTimeline = createAnimationsFromTimeline;
exports.timeline = timeline;
var _tslib = require("tslib");
var _heyListen = require("hey-listen");
var _utils = require("@motionone/utils");
var _staggerEs = require("../utils/stagger.es.js");
var _animateStyleEs = require("../animate/animate-style.es.js");
var _controlsEs = require("../animate/utils/controls.es.js");
var _keyframesEs = require("../animate/utils/keyframes.es.js");
var _optionsEs = require("../animate/utils/options.es.js");
var _resolveElementsEs = require("../utils/resolve-elements.es.js");
var _calcTimeEs = require("./utils/calc-time.es.js");
var _editEs = require("./utils/edit.es.js");
var _sortEs = require("./utils/sort.es.js");
var _animation = require("@motionone/animation");
function timeline(definition, options = {}) {
  var _a;
  const animationDefinitions = createAnimationsFromTimeline(definition, options);
  /**
   * Create and start animations
   */
  const animationFactories = animationDefinitions.map(definition => (0, _animateStyleEs.animateStyle)(...definition, _animation.Animation)).filter(Boolean);
  return (0, _controlsEs.withControls)(animationFactories, options,
  // Get the duration from the first animation definition
  (_a = animationDefinitions[0]) === null || _a === void 0 ? void 0 : _a[3].duration);
}
function createAnimationsFromTimeline(definition, _a = {}) {
  var {
      defaultOptions = {}
    } = _a,
    timelineOptions = (0, _tslib.__rest)(_a, ["defaultOptions"]);
  const animationDefinitions = [];
  const elementSequences = new Map();
  const elementCache = {};
  const timeLabels = new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  /**
   * Build the timeline by mapping over the definition array and converting
   * the definitions into keyframes and offsets with absolute time values.
   * These will later get converted into relative offsets in a second pass.
   */
  for (let i = 0; i < definition.length; i++) {
    const segment = definition[i];
    /**
     * If this is a timeline label, mark it and skip the rest of this iteration.
     */
    if ((0, _utils.isString)(segment)) {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, (0, _calcTimeEs.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    const [elementDefinition, keyframes, options = {}] = segment;
    /**
     * If a relative or absolute time value has been specified we need to resolve
     * it in relation to the currentTime.
     */
    if (options.at !== undefined) {
      currentTime = (0, _calcTimeEs.calcNextTime)(currentTime, options.at, prevTime, timeLabels);
    }
    /**
     * Keep track of the maximum duration in this definition. This will be
     * applied to currentTime once the definition has been parsed.
     */
    let maxDuration = 0;
    /**
     * Find all the elements specified in the definition and parse value
     * keyframes from their timeline definitions.
     */
    const elements = (0, _resolveElementsEs.resolveElements)(elementDefinition, elementCache);
    const numElements = elements.length;
    for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
      const element = elements[elementIndex];
      const elementSequence = getElementSequence(element, elementSequences);
      for (const key in keyframes) {
        const valueSequence = getValueSequence(key, elementSequence);
        let valueKeyframes = (0, _keyframesEs.keyframesList)(keyframes[key]);
        const valueOptions = (0, _optionsEs.getOptions)(options, key);
        let {
          duration = defaultOptions.duration || _utils.defaults.duration,
          easing = defaultOptions.easing || _utils.defaults.easing
        } = valueOptions;
        if ((0, _utils.isEasingGenerator)(easing)) {
          (0, _heyListen.invariant)(key === "opacity" || valueKeyframes.length > 1, "spring must be provided 2 keyframes within timeline()");
          const custom = easing.createAnimation(valueKeyframes, key !== "opacity", () => 0, key);
          easing = custom.easing;
          valueKeyframes = custom.keyframes || valueKeyframes;
          duration = custom.duration || duration;
        }
        const delay = (0, _staggerEs.resolveOption)(options.delay, elementIndex, numElements) || 0;
        const startTime = currentTime + delay;
        const targetTime = startTime + duration;
        /**
         *
         */
        let {
          offset = (0, _utils.defaultOffset)(valueKeyframes.length)
        } = valueOptions;
        /**
         * If there's only one offset of 0, fill in a second with length 1
         *
         * TODO: Ensure there's a test that covers this removal
         */
        if (offset.length === 1 && offset[0] === 0) {
          offset[1] = 1;
        }
        /**
         * Fill out if offset if fewer offsets than keyframes
         */
        const remainder = offset.length - valueKeyframes.length;
        remainder > 0 && (0, _utils.fillOffset)(offset, remainder);
        /**
         * If only one value has been set, ie [1], push a null to the start of
         * the keyframe array. This will let us mark a keyframe at this point
         * that will later be hydrated with the previous value.
         */
        valueKeyframes.length === 1 && valueKeyframes.unshift(null);
        /**
         * Add keyframes, mapping offsets to absolute time.
         */
        (0, _editEs.addKeyframes)(valueSequence, valueKeyframes, easing, offset, startTime, targetTime);
        maxDuration = Math.max(delay + duration, maxDuration);
        totalDuration = Math.max(targetTime, totalDuration);
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration;
  }
  /**
   * For every element and value combination create a new animation.
   */
  elementSequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      /**
       * Arrange all the keyframes in ascending time order.
       */
      valueSequence.sort(_sortEs.compareByTime);
      const keyframes = [];
      const valueOffset = [];
      const valueEasing = [];
      /**
       * For each keyframe, translate absolute times into
       * relative offsets based on the total duration of the timeline.
       */
      for (let i = 0; i < valueSequence.length; i++) {
        const {
          at,
          value,
          easing
        } = valueSequence[i];
        keyframes.push(value);
        valueOffset.push((0, _utils.progress)(0, totalDuration, at));
        valueEasing.push(easing || _utils.defaults.easing);
      }
      /**
       * If the first keyframe doesn't land on offset: 0
       * provide one by duplicating the initial keyframe. This ensures
       * it snaps to the first keyframe when the animation starts.
       */
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes.unshift(keyframes[0]);
        valueEasing.unshift("linear");
      }
      /**
       * If the last keyframe doesn't land on offset: 1
       * provide one with a null wildcard value. This will ensure it
       * stays static until the end of the animation.
       */
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes.push(null);
      }
      animationDefinitions.push([element, key, keyframes, Object.assign(Object.assign(Object.assign({}, defaultOptions), {
        duration: totalDuration,
        easing: valueEasing,
        offset: valueOffset
      }), timelineOptions)]);
    }
  });
  return animationDefinitions;
}
function getElementSequence(element, sequences) {
  !sequences.has(element) && sequences.set(element, {});
  return sequences.get(element);
}
function getValueSequence(name, sequences) {
  if (!sequences[name]) sequences[name] = [];
  return sequences[name];
}
},{"tslib":"node_modules/tslib/tslib.es6.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","../utils/stagger.es.js":"node_modules/@motionone/dom/dist/utils/stagger.es.js","../animate/animate-style.es.js":"node_modules/@motionone/dom/dist/animate/animate-style.es.js","../animate/utils/controls.es.js":"node_modules/@motionone/dom/dist/animate/utils/controls.es.js","../animate/utils/keyframes.es.js":"node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js","../animate/utils/options.es.js":"node_modules/@motionone/dom/dist/animate/utils/options.es.js","../utils/resolve-elements.es.js":"node_modules/@motionone/dom/dist/utils/resolve-elements.es.js","./utils/calc-time.es.js":"node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js","./utils/edit.es.js":"node_modules/@motionone/dom/dist/timeline/utils/edit.es.js","./utils/sort.es.js":"node_modules/@motionone/dom/dist/timeline/utils/sort.es.js","@motionone/animation":"node_modules/@motionone/animation/dist/index.es.js"}],"node_modules/@motionone/generators/dist/utils/velocity.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcGeneratorVelocity = calcGeneratorVelocity;
var _utils = require("@motionone/utils");
const sampleT = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - sampleT, 0);
  return (0, _utils.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/generators/dist/spring/defaults.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = void 0;
const defaults = {
  stiffness: 100.0,
  damping: 10.0,
  mass: 1.0
};
exports.defaults = defaults;
},{}],"node_modules/@motionone/generators/dist/spring/utils.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcDampingRatio = void 0;
var _defaultsEs = require("./defaults.es.js");
const calcDampingRatio = (stiffness = _defaultsEs.defaults.stiffness, damping = _defaultsEs.defaults.damping, mass = _defaultsEs.defaults.mass) => damping / (2 * Math.sqrt(stiffness * mass));
exports.calcDampingRatio = calcDampingRatio;
},{"./defaults.es.js":"node_modules/@motionone/generators/dist/spring/defaults.es.js"}],"node_modules/@motionone/generators/dist/utils/has-reached-target.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasReachedTarget = hasReachedTarget;
function hasReachedTarget(origin, target, current) {
  return origin < target && current >= target || origin > target && current <= target;
}
},{}],"node_modules/@motionone/generators/dist/spring/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spring = void 0;
var _utils = require("@motionone/utils");
var _defaultsEs = require("./defaults.es.js");
var _utilsEs = require("./utils.es.js");
var _hasReachedTargetEs = require("../utils/has-reached-target.es.js");
var _velocityEs = require("../utils/velocity.es.js");
const spring = ({
  stiffness = _defaultsEs.defaults.stiffness,
  damping = _defaultsEs.defaults.damping,
  mass = _defaultsEs.defaults.mass,
  from = 0,
  to = 1,
  velocity = 0.0,
  restSpeed = 2,
  restDistance = 0.5
} = {}) => {
  velocity = velocity ? _utils.time.s(velocity) : 0.0;
  const state = {
    done: false,
    hasReachedTarget: false,
    current: from,
    target: to
  };
  const initialDelta = to - from;
  const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
  const dampingRatio = (0, _utilsEs.calcDampingRatio)(stiffness, damping, mass);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
    // Underdamped spring (bouncy)
    resolveSpring = t => to - Math.exp(-dampingRatio * undampedAngularFreq * t) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
  } else {
    // Critically damped spring
    resolveSpring = t => {
      return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t);
    };
  }
  return t => {
    state.current = resolveSpring(t);
    const currentVelocity = t === 0 ? velocity : (0, _velocityEs.calcGeneratorVelocity)(resolveSpring, t, state.current);
    const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
    state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
    state.hasReachedTarget = (0, _hasReachedTargetEs.hasReachedTarget)(from, to, state.current);
    return state;
  };
};
exports.spring = spring;
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./defaults.es.js":"node_modules/@motionone/generators/dist/spring/defaults.es.js","./utils.es.js":"node_modules/@motionone/generators/dist/spring/utils.es.js","../utils/has-reached-target.es.js":"node_modules/@motionone/generators/dist/utils/has-reached-target.es.js","../utils/velocity.es.js":"node_modules/@motionone/generators/dist/utils/velocity.es.js"}],"node_modules/@motionone/generators/dist/glide/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.glide = void 0;
var _utils = require("@motionone/utils");
var _velocityEs = require("../utils/velocity.es.js");
var _indexEs = require("../spring/index.es.js");
const glide = ({
  from = 0,
  velocity = 0.0,
  power = 0.8,
  decay = 0.325,
  bounceDamping,
  bounceStiffness,
  changeTarget,
  min,
  max,
  restDistance = 0.5,
  restSpeed
}) => {
  decay = _utils.time.ms(decay);
  const state = {
    hasReachedTarget: false,
    done: false,
    current: from,
    target: from
  };
  const isOutOfBounds = v => min !== undefined && v < min || max !== undefined && v > max;
  const nearestBoundary = v => {
    if (min === undefined) return max;
    if (max === undefined) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = changeTarget === undefined ? ideal : changeTarget(ideal);
  state.target = target;
  /**
   * If the target has changed we need to re-calculate the amplitude, otherwise
   * the animation will start from the wrong position.
   */
  if (target !== ideal) amplitude = target - from;
  const calcDelta = t => -amplitude * Math.exp(-t / decay);
  const calcLatest = t => target + calcDelta(t);
  const applyFriction = t => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDistance;
    state.current = state.done ? target : latest;
  };
  /**
   * Ideally this would resolve for t in a stateless way, we could
   * do that by always precalculating the animation but as we know
   * this will be done anyway we can assume that spring will
   * be discovered during that.
   */
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = t => {
    if (!isOutOfBounds(state.current)) return;
    timeReachedBoundary = t;
    spring$1 = (0, _indexEs.spring)({
      from: state.current,
      to: nearestBoundary(state.current),
      velocity: (0, _velocityEs.calcGeneratorVelocity)(calcLatest, t, state.current),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDistance,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return t => {
    /**
     * We need to resolve the friction to figure out if we need a
     * spring but we don't want to do this twice per frame. So here
     * we flag if we updated for this frame and later if we did
     * we can skip doing it again.
     */
    let hasUpdatedFrame = false;
    if (!spring$1 && timeReachedBoundary === undefined) {
      hasUpdatedFrame = true;
      applyFriction(t);
      checkCatchBoundary(t);
    }
    /**
     * If we have a spring and the provided t is beyond the moment the friction
     * animation crossed the min/max boundary, use the spring.
     */
    if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
      state.hasReachedTarget = true;
      return spring$1(t - timeReachedBoundary);
    } else {
      state.hasReachedTarget = false;
      !hasUpdatedFrame && applyFriction(t);
      return state;
    }
  };
};
exports.glide = glide;
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","../utils/velocity.es.js":"node_modules/@motionone/generators/dist/utils/velocity.es.js","../spring/index.es.js":"node_modules/@motionone/generators/dist/spring/index.es.js"}],"node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pregenerateKeyframes = pregenerateKeyframes;
var _utils = require("@motionone/utils");
const timeStep = 10;
const maxDuration = 10000;
function pregenerateKeyframes(generator, toUnit = _utils.noopReturn) {
  let overshootDuration = undefined;
  let timestamp = timeStep;
  let state = generator(0);
  const keyframes = [toUnit(state.current)];
  while (!state.done && timestamp < maxDuration) {
    state = generator(timestamp);
    keyframes.push(toUnit(state.done ? state.target : state.current));
    if (overshootDuration === undefined && state.hasReachedTarget) {
      overshootDuration = timestamp;
    }
    timestamp += timeStep;
  }
  const duration = timestamp - timeStep;
  /**
   * If generating an animation that didn't actually move,
   * generate a second keyframe so we have an origin and target.
   */
  if (keyframes.length === 1) keyframes.push(state.current);
  return {
    keyframes,
    duration: duration / 1000,
    overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1000
  };
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/generators/dist/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "calcGeneratorVelocity", {
  enumerable: true,
  get: function () {
    return _velocityEs.calcGeneratorVelocity;
  }
});
Object.defineProperty(exports, "glide", {
  enumerable: true,
  get: function () {
    return _indexEs.glide;
  }
});
Object.defineProperty(exports, "pregenerateKeyframes", {
  enumerable: true,
  get: function () {
    return _pregenerateKeyframesEs.pregenerateKeyframes;
  }
});
Object.defineProperty(exports, "spring", {
  enumerable: true,
  get: function () {
    return _indexEs2.spring;
  }
});
var _indexEs = require("./glide/index.es.js");
var _indexEs2 = require("./spring/index.es.js");
var _pregenerateKeyframesEs = require("./utils/pregenerate-keyframes.es.js");
var _velocityEs = require("./utils/velocity.es.js");
},{"./glide/index.es.js":"node_modules/@motionone/generators/dist/glide/index.es.js","./spring/index.es.js":"node_modules/@motionone/generators/dist/spring/index.es.js","./utils/pregenerate-keyframes.es.js":"node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js","./utils/velocity.es.js":"node_modules/@motionone/generators/dist/utils/velocity.es.js"}],"node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGeneratorEasing = createGeneratorEasing;
var _generators = require("@motionone/generators");
var _utils = require("@motionone/utils");
var _getUnitEs = require("../animate/utils/get-unit.es.js");
var _transformsEs = require("../animate/utils/transforms.es.js");
var _getStyleNameEs = require("../animate/utils/get-style-name.es.js");
function canGenerate(value) {
  return (0, _utils.isNumber)(value) && !isNaN(value);
}
function getAsNumber(value) {
  return (0, _utils.isString)(value) ? parseFloat(value) : value;
}
function createGeneratorEasing(createGenerator) {
  const keyframesCache = new WeakMap();
  return (options = {}) => {
    const generatorCache = new Map();
    const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false) => {
      const key = `${from}-${to}-${velocity}-${isScale}`;
      if (!generatorCache.has(key)) {
        generatorCache.set(key, createGenerator(Object.assign({
          from,
          to,
          velocity,
          restSpeed: isScale ? 0.05 : 2,
          restDistance: isScale ? 0.01 : 0.5
        }, options)));
      }
      return generatorCache.get(key);
    };
    const getKeyframes = (generator, toUnit) => {
      if (!keyframesCache.has(generator)) {
        keyframesCache.set(generator, (0, _generators.pregenerateKeyframes)(generator, toUnit));
      }
      return keyframesCache.get(generator);
    };
    return {
      createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue) => {
        let settings;
        let origin;
        let target;
        let velocity = 0;
        let toUnit = _utils.noopReturn;
        const numKeyframes = keyframes.length;
        /**
         * If we should generate an animation for this value, run some preperation
         * like resolving target/origin, finding a unit (if any) and determine if
         * it is actually possible to generate.
         */
        if (shouldGenerate) {
          toUnit = (0, _getUnitEs.getUnitConverter)(keyframes, name ? _transformsEs.transformDefinitions.get((0, _getStyleNameEs.getStyleName)(name)) : undefined);
          const targetDefinition = keyframes[numKeyframes - 1];
          target = getAsNumber(targetDefinition);
          if (numKeyframes > 1 && keyframes[0] !== null) {
            /**
             * If we have multiple keyframes, take the initial keyframe as the origin.
             */
            origin = getAsNumber(keyframes[0]);
          } else {
            const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
            /**
             * If we have an existing generator for this value we can use it to resolve
             * the animation's current value and velocity.
             */
            if (prevGenerator) {
              /**
               * If we have a generator for this value we can use it to resolve
               * the animations's current value and velocity.
               */
              const {
                animation,
                generatorStartTime
              } = motionValue;
              const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
              const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
              const prevGeneratorCurrent = prevGenerator(currentTime).current;
              origin = prevGeneratorCurrent;
              velocity = (0, _generators.calcGeneratorVelocity)(t => prevGenerator(t).current, currentTime, prevGeneratorCurrent);
            } else if (getOrigin) {
              /**
               * As a last resort, read the origin from the DOM.
               */
              origin = getAsNumber(getOrigin());
            }
          }
        }
        /**
         * If we've determined it is possible to generate an animation, do so.
         */
        if (canGenerate(origin) && canGenerate(target)) {
          const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
          settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), {
            easing: "linear"
          });
          // TODO Add test for this
          if (motionValue) {
            motionValue.generator = generator;
            motionValue.generatorStartTime = performance.now();
          }
        }
        /**
         * If by now we haven't generated a set of keyframes, create a generic generator
         * based on the provided props that animates from 0-100 to fetch a rough
         * "overshootDuration" - the moment when the generator first hits the animation target.
         * Then return animation settings that will run a normal animation for that duration.
         */
        if (!settings) {
          const keyframesMetadata = getKeyframes(getGenerator(0, 100));
          settings = {
            easing: "ease",
            duration: keyframesMetadata.overshootDuration
          };
        }
        return settings;
      }
    };
  };
}
},{"@motionone/generators":"node_modules/@motionone/generators/dist/index.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","../animate/utils/get-unit.es.js":"node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js","../animate/utils/transforms.es.js":"node_modules/@motionone/dom/dist/animate/utils/transforms.es.js","../animate/utils/get-style-name.es.js":"node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js"}],"node_modules/@motionone/dom/dist/easing/spring/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spring = void 0;
var _generators = require("@motionone/generators");
var _createGeneratorEasingEs = require("../create-generator-easing.es.js");
const spring = (0, _createGeneratorEasingEs.createGeneratorEasing)(_generators.spring);
exports.spring = spring;
},{"@motionone/generators":"node_modules/@motionone/generators/dist/index.es.js","../create-generator-easing.es.js":"node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js"}],"node_modules/@motionone/dom/dist/easing/glide/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.glide = void 0;
var _generators = require("@motionone/generators");
var _createGeneratorEasingEs = require("../create-generator-easing.es.js");
const glide = (0, _createGeneratorEasingEs.createGeneratorEasing)(_generators.glide);
exports.glide = glide;
},{"@motionone/generators":"node_modules/@motionone/generators/dist/index.es.js","../create-generator-easing.es.js":"node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js"}],"node_modules/@motionone/dom/dist/gestures/in-view.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inView = inView;
var _resolveElementsEs = require("../utils/resolve-elements.es.js");
var _utils = require("@motionone/utils");
const thresholds = {
  any: 0,
  all: 1
};
function inView(elementOrSelector, onStart, {
  root,
  margin: rootMargin,
  amount = "any"
} = {}) {
  /**
   * If this browser doesn't support IntersectionObserver, return a dummy stop function.
   * Default triggering of onStart is tricky - it could be used for starting/stopping
   * videos, lazy loading content etc. We could provide an option to enable a fallback, or
   * provide a fallback callback option.
   */
  if (typeof IntersectionObserver === "undefined") {
    return () => {};
  }
  const elements = (0, _resolveElementsEs.resolveElements)(elementOrSelector);
  const activeIntersections = new WeakMap();
  const onIntersectionChange = entries => {
    entries.forEach(entry => {
      const onEnd = activeIntersections.get(entry.target);
      /**
       * If there's no change to the intersection, we don't need to
       * do anything here.
       */
      if (entry.isIntersecting === Boolean(onEnd)) return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if ((0, _utils.isFunction)(newOnEnd)) {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach(element => observer.observe(element));
  return () => observer.disconnect();
}
},{"../utils/resolve-elements.es.js":"node_modules/@motionone/dom/dist/utils/resolve-elements.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeElement = resizeElement;
var _resolveElementsEs = require("../../utils/resolve-elements.es.js");
const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const {
      inlineSize,
      blockSize
    } = borderBoxSize[0];
    return {
      width: inlineSize,
      height: blockSize
    };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({
  target,
  contentRect,
  borderBoxSize
}) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach(handler => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined") return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer) createResizeObserver();
  const elements = (0, _resolveElementsEs.resolveElements)(target);
  elements.forEach(element => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach(element => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}
},{"../../utils/resolve-elements.es.js":"node_modules/@motionone/dom/dist/utils/resolve-elements.es.js"}],"node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeWindow = resizeWindow;
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach(callback => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler) createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = undefined;
    }
  };
}
},{}],"node_modules/@motionone/dom/dist/gestures/resize/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resize = resize;
var _handleElementEs = require("./handle-element.es.js");
var _handleWindowEs = require("./handle-window.es.js");
var _utils = require("@motionone/utils");
function resize(a, b) {
  return (0, _utils.isFunction)(a) ? (0, _handleWindowEs.resizeWindow)(a) : (0, _handleElementEs.resizeElement)(a, b);
}
},{"./handle-element.es.js":"node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js","./handle-window.es.js":"node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/gestures/scroll/info.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScrollInfo = void 0;
exports.updateScrollInfo = updateScrollInfo;
var _utils = require("@motionone/utils");
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
const createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
exports.createScrollInfo = createScrollInfo;
const keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const {
    length,
    position
  } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element["scroll" + position];
  axis.scrollLength = element["scroll" + length] - element["client" + length];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = (0, _utils.progress)(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed ? 0 : (0, _utils.velocityPerSecond)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcInset = calcInset;
function calcInset(element, container) {
  let inset = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
      const {
        top,
        left
      } = current.getBBox();
      inset.x += left;
      inset.y += top;
      /**
       * Assign the next parent element as the <svg /> tag.
       */
      while (current && current.tagName !== "svg") {
        current = current.parentNode;
      }
    }
  }
  return inset;
}
},{}],"node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollOffset = void 0;
const ScrollOffset = {
  Enter: [[0, 1], [1, 1]],
  Exit: [[0, 0], [1, 0]],
  Any: [[1, 0], [0, 1]],
  All: [[0, 0], [1, 1]]
};
exports.ScrollOffset = ScrollOffset;
},{}],"node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namedEdges = void 0;
exports.resolveEdge = resolveEdge;
var _utils = require("@motionone/utils");
const namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
exports.namedEdges = namedEdges;
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  /**
   * If we have this edge defined as a preset, replace the definition
   * with the numerical value.
   */
  if (namedEdges[edge] !== undefined) {
    edge = namedEdges[edge];
  }
  /**
   * Handle unit values
   */
  if ((0, _utils.isString)(edge)) {
    const asNumber = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber;
    } else if (edge.endsWith("%")) {
      edge = asNumber / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber;
    }
  }
  /**
   * If the edge is defined as a number, handle as a progress value.
   */
  if ((0, _utils.isNumber)(edge)) {
    delta = length * edge;
  }
  return inset + delta;
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveOffset = resolveOffset;
var _utils = require("@motionone/utils");
var _edgeEs = require("./edge.es.js");
const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
  let targetPoint = 0;
  let containerPoint = 0;
  if ((0, _utils.isNumber)(offset)) {
    /**
     * If we're provided offset: [0, 0.5, 1] then each number x should become
     * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
     * and container etc.
     */
    offsetDefinition = [offset, offset];
  } else if ((0, _utils.isString)(offset)) {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      /**
       * If we're provided a definition like "100px" then we want to apply
       * that only to the top of the target point, leaving the container at 0.
       * Whereas a named offset like "end" should be applied to both.
       */
      offsetDefinition = [offset, _edgeEs.namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = (0, _edgeEs.resolveEdge)(offsetDefinition[0], targetLength, targetInset);
  containerPoint = (0, _edgeEs.resolveEdge)(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./edge.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js"}],"node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveOffsets = resolveOffsets;
var _utils = require("@motionone/utils");
var _insetEs = require("./inset.es.js");
var _presetsEs = require("./presets.es.js");
var _offsetEs = require("./offset.es.js");
const point = {
  x: 0,
  y: 0
};
function resolveOffsets(container, info, options) {
  let {
    offset: offsetDefinition = _presetsEs.ScrollOffset.All
  } = options;
  const {
    target = container,
    axis = "y"
  } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? (0, _insetEs.calcInset)(target, container) : point;
  /**
   * Measure the target and container. If they're the same thing then we
   * use the container's scrollWidth/Height as the target, from there
   * all other calculations can remain the same.
   */
  const targetSize = target === container ? {
    width: container.scrollWidth,
    height: container.scrollHeight
  } : {
    width: target.clientWidth,
    height: target.clientHeight
  };
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  /**
   * Reset the length of the resolved offset array rather than creating a new one.
   * TODO: More reusable data structures for targetSize/containerSize would also be good.
   */
  info[axis].offset.length = 0;
  /**
   * Populate the offset array by resolving the user's offset definition into
   * a list of pixel scroll offets.
   */
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = (0, _offsetEs.resolveOffset)(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  /**
   * If the pixel scroll offsets have changed, create a new interpolator function
   * to map scroll value into a progress.
   */
  if (hasChanged) {
    info[axis].interpolate = (0, _utils.interpolate)((0, _utils.defaultOffset)(numOffsets), info[axis].offset);
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./inset.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js","./presets.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js","./offset.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js"}],"node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOnScrollHandler = createOnScrollHandler;
var _utils = require("@motionone/utils");
var _infoEs = require("./info.es.js");
var _indexEs = require("./offsets/index.es.js");
function measure(container, target = container, info) {
  /**
   * Find inset of target within scrollable container
   */
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node != container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  const axis = options.axis || "y";
  return {
    measure: () => measure(element, options.target, info),
    update: time => {
      (0, _infoEs.updateScrollInfo)(element, info, time);
      if (options.offset || options.target) {
        (0, _indexEs.resolveOffsets)(element, info, options);
      }
    },
    notify: (0, _utils.isFunction)(onScroll) ? () => onScroll(info) : scrubAnimation(onScroll, info[axis])
  };
}
function scrubAnimation(controls, axisInfo) {
  controls.pause();
  controls.forEachNative((animation, {
    easing
  }) => {
    var _a, _b;
    if (animation.updateDuration) {
      if (!easing) animation.easing = _utils.noopReturn;
      animation.updateDuration(1);
    } else {
      const timingOptions = {
        duration: 1000
      };
      if (!easing) timingOptions.easing = "linear";
      (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 ? void 0 : _b.call(_a, timingOptions);
    }
  });
  return () => {
    controls.currentTime = axisInfo.progress;
  };
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./info.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/info.es.js","./offsets/index.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js"}],"node_modules/@motionone/dom/dist/gestures/scroll/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scroll = scroll;
var _tslib = require("tslib");
var _indexEs = require("../resize/index.es.js");
var _infoEs = require("./info.es.js");
var _onScrollHandlerEs = require("./on-scroll-handler.es.js");
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = element => element === document.documentElement ? window : element;
function scroll(onScroll, _a = {}) {
  var {
      container = document.documentElement
    } = _a,
    options = (0, _tslib.__rest)(_a, ["container"]);
  let containerHandlers = onScrollHandlers.get(container);
  /**
   * Get the onScroll handlers for this container.
   * If one isn't found, create a new one.
   */
  if (!containerHandlers) {
    containerHandlers = new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  /**
   * Create a new onScroll handler for the provided callback.
   */
  const info = (0, _infoEs.createScrollInfo)();
  const containerHandler = (0, _onScrollHandlerEs.createOnScrollHandler)(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  /**
   * Check if there's a scroll event listener for this container.
   * If not, create one.
   */
  if (!scrollListeners.has(container)) {
    const listener = () => {
      const time = performance.now();
      for (const handler of containerHandlers) handler.measure();
      for (const handler of containerHandlers) handler.update(time);
      for (const handler of containerHandlers) handler.notify();
    };
    scrollListeners.set(container, listener);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener, {
      passive: true
    });
    if (container !== document.documentElement) {
      resizeListeners.set(container, (0, _indexEs.resize)(container, listener));
    }
    target.addEventListener("scroll", listener, {
      passive: true
    });
  }
  const listener = scrollListeners.get(container);
  const onLoadProcesss = requestAnimationFrame(listener);
  return () => {
    var _a;
    if (typeof onScroll !== "function") onScroll.stop();
    cancelAnimationFrame(onLoadProcesss);
    /**
     * Check if we even have any handlers for this container.
     */
    const containerHandlers = onScrollHandlers.get(container);
    if (!containerHandlers) return;
    containerHandlers.delete(containerHandler);
    if (containerHandlers.size) return;
    /**
     * If no more handlers, remove the scroll listener too.
     */
    const listener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (listener) {
      getEventTarget(container).removeEventListener("scroll", listener);
      (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
      window.removeEventListener("resize", listener);
    }
  };
}
},{"tslib":"node_modules/tslib/tslib.es6.js","../resize/index.es.js":"node_modules/@motionone/dom/dist/gestures/resize/index.es.js","./info.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/info.es.js","./on-scroll-handler.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js"}],"node_modules/@motionone/dom/dist/state/utils/has-changed.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasChanged = hasChanged;
exports.shallowCompare = shallowCompare;
function hasChanged(a, b) {
  if (typeof a !== typeof b) return true;
  if (Array.isArray(a) && Array.isArray(b)) return !shallowCompare(a, b);
  return a !== b;
}
function shallowCompare(next, prev) {
  const prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}
},{}],"node_modules/@motionone/dom/dist/state/utils/is-variant.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVariant = isVariant;
function isVariant(definition) {
  return typeof definition === "object";
}
},{}],"node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveVariant = resolveVariant;
var _isVariantEs = require("./is-variant.es.js");
function resolveVariant(definition, variants) {
  if ((0, _isVariantEs.isVariant)(definition)) {
    return definition;
  } else if (definition && variants) {
    return variants[definition];
  }
}
},{"./is-variant.es.js":"node_modules/@motionone/dom/dist/state/utils/is-variant.es.js"}],"node_modules/@motionone/dom/dist/state/utils/schedule.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleAnimation = scheduleAnimation;
exports.unscheduleAnimation = unscheduleAnimation;
var _utils = require("@motionone/utils");
let scheduled = undefined;
function processScheduledAnimations() {
  if (!scheduled) return;
  const generators = scheduled.sort(compareByDepth).map(fireAnimateUpdates);
  generators.forEach(fireNext);
  generators.forEach(fireNext);
  scheduled = undefined;
}
function scheduleAnimation(state) {
  if (!scheduled) {
    scheduled = [state];
    requestAnimationFrame(processScheduledAnimations);
  } else {
    (0, _utils.addUniqueItem)(scheduled, state);
  }
}
function unscheduleAnimation(state) {
  scheduled && (0, _utils.removeItem)(scheduled, state);
}
const compareByDepth = (a, b) => a.getDepth() - b.getDepth();
const fireAnimateUpdates = state => state.animateUpdates();
const fireNext = iterator => iterator.next();
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js"}],"node_modules/@motionone/dom/dist/state/utils/events.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchPointerEvent = dispatchPointerEvent;
exports.dispatchViewEvent = dispatchViewEvent;
exports.motionEvent = void 0;
const motionEvent = (name, target) => new CustomEvent(name, {
  detail: {
    target
  }
});
exports.motionEvent = motionEvent;
function dispatchPointerEvent(element, name, event) {
  element.dispatchEvent(new CustomEvent(name, {
    detail: {
      originalEvent: event
    }
  }));
}
function dispatchViewEvent(element, name, entry) {
  element.dispatchEvent(new CustomEvent(name, {
    detail: {
      originalEntry: entry
    }
  }));
}
},{}],"node_modules/@motionone/dom/dist/state/gestures/in-view.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inView = void 0;
var _tslib = require("tslib");
var _eventsEs = require("../utils/events.es.js");
var _inViewEs = require("../../gestures/in-view.es.js");
const inView = {
  isActive: options => Boolean(options.inView),
  subscribe: (element, {
    enable,
    disable
  }, {
    inViewOptions = {}
  }) => {
    const {
        once
      } = inViewOptions,
      viewOptions = (0, _tslib.__rest)(inViewOptions, ["once"]);
    return (0, _inViewEs.inView)(element, enterEntry => {
      enable();
      (0, _eventsEs.dispatchViewEvent)(element, "viewenter", enterEntry);
      if (!once) {
        return leaveEntry => {
          disable();
          (0, _eventsEs.dispatchViewEvent)(element, "viewleave", leaveEntry);
        };
      }
    }, viewOptions);
  }
};
exports.inView = inView;
},{"tslib":"node_modules/tslib/tslib.es6.js","../utils/events.es.js":"node_modules/@motionone/dom/dist/state/utils/events.es.js","../../gestures/in-view.es.js":"node_modules/@motionone/dom/dist/gestures/in-view.es.js"}],"node_modules/@motionone/dom/dist/state/gestures/hover.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = void 0;
var _eventsEs = require("../utils/events.es.js");
const mouseEvent = (element, name, action) => event => {
  if (event.pointerType && event.pointerType !== "mouse") return;
  action();
  (0, _eventsEs.dispatchPointerEvent)(element, name, event);
};
const hover = {
  isActive: options => Boolean(options.hover),
  subscribe: (element, {
    enable,
    disable
  }) => {
    const onEnter = mouseEvent(element, "hoverstart", enable);
    const onLeave = mouseEvent(element, "hoverend", disable);
    element.addEventListener("pointerenter", onEnter);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      element.removeEventListener("pointerenter", onEnter);
      element.removeEventListener("pointerleave", onLeave);
    };
  }
};
exports.hover = hover;
},{"../utils/events.es.js":"node_modules/@motionone/dom/dist/state/utils/events.es.js"}],"node_modules/@motionone/dom/dist/state/gestures/press.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.press = void 0;
var _eventsEs = require("../utils/events.es.js");
const press = {
  isActive: options => Boolean(options.press),
  subscribe: (element, {
    enable,
    disable
  }) => {
    const onPointerUp = event => {
      disable();
      (0, _eventsEs.dispatchPointerEvent)(element, "pressend", event);
      window.removeEventListener("pointerup", onPointerUp);
    };
    const onPointerDown = event => {
      enable();
      (0, _eventsEs.dispatchPointerEvent)(element, "pressstart", event);
      window.addEventListener("pointerup", onPointerUp);
    };
    element.addEventListener("pointerdown", onPointerDown);
    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }
};
exports.press = press;
},{"../utils/events.es.js":"node_modules/@motionone/dom/dist/state/utils/events.es.js"}],"node_modules/@motionone/dom/dist/state/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMotionState = createMotionState;
exports.mountedStates = void 0;
var _tslib = require("tslib");
var _heyListen = require("hey-listen");
var _utils = require("@motionone/utils");
var _animateStyleEs = require("../animate/animate-style.es.js");
var _styleEs = require("../animate/style.es.js");
var _optionsEs = require("../animate/utils/options.es.js");
var _hasChangedEs = require("./utils/has-changed.es.js");
var _resolveVariantEs = require("./utils/resolve-variant.es.js");
var _scheduleEs = require("./utils/schedule.es.js");
var _inViewEs = require("./gestures/in-view.es.js");
var _hoverEs = require("./gestures/hover.es.js");
var _pressEs = require("./gestures/press.es.js");
var _eventsEs = require("./utils/events.es.js");
var _animation = require("@motionone/animation");
const gestures = {
  inView: _inViewEs.inView,
  hover: _hoverEs.hover,
  press: _pressEs.press
};
/**
 * A list of state types, in priority order. If a value is defined in
 * a righter-most type, it will override any definition in a lefter-most.
 */
const stateTypes = ["initial", "animate", ...Object.keys(gestures), "exit"];
/**
 * A global store of all generated motion states. This can be used to lookup
 * a motion state for a given Element.
 */
const mountedStates = new WeakMap();
exports.mountedStates = mountedStates;
function createMotionState(options = {}, parent) {
  /**
   * The element represented by the motion state. This is an empty reference
   * when we create the state to support SSR and allow for later mounting
   * in view libraries.
   *
   * @ts-ignore
   */
  let element;
  /**
   * Calculate a depth that we can use to order motion states by tree depth.
   */
  let depth = parent ? parent.getDepth() + 1 : 0;
  /**
   * Track which states are currently active.
   */
  const activeStates = {
    initial: true,
    animate: true
  };
  /**
   * A map of functions that, when called, will remove event listeners for
   * a given gesture.
   */
  const gestureSubscriptions = {};
  /**
   * Initialise a context to share through motion states. This
   * will be populated by variant names (if any).
   */
  const context = {};
  for (const name of stateTypes) {
    context[name] = typeof options[name] === "string" ? options[name] : parent === null || parent === void 0 ? void 0 : parent.getContext()[name];
  }
  /**
   * If initial is set to false we use the animate prop as the initial
   * animation state.
   */
  const initialVariantSource = options.initial === false ? "animate" : "initial";
  /**
   * Destructure an initial target out from the resolved initial variant.
   */
  let _a = (0, _resolveVariantEs.resolveVariant)(options[initialVariantSource] || context[initialVariantSource], options.variants) || {},
    target = (0, _tslib.__rest)(_a, ["transition"]);
  /**
   * The base target is a cached map of values that we'll use to animate
   * back to if a value is removed from all active state types. This
   * is usually the initial value as read from the DOM, for instance if
   * it hasn't been defined in initial.
   */
  const baseTarget = Object.assign({}, target);
  /**
   * A generator that will be processed by the global animation scheduler.
   * This yeilds when it switches from reading the DOM to writing to it
   * to prevent layout thrashing.
   */
  function* animateUpdates() {
    var _a, _b;
    const prevTarget = target;
    target = {};
    const animationOptions = {};
    for (const name of stateTypes) {
      if (!activeStates[name]) continue;
      const variant = (0, _resolveVariantEs.resolveVariant)(options[name]);
      if (!variant) continue;
      for (const key in variant) {
        if (key === "transition") continue;
        target[key] = variant[key];
        animationOptions[key] = (0, _optionsEs.getOptions)((_b = (_a = variant.transition) !== null && _a !== void 0 ? _a : options.transition) !== null && _b !== void 0 ? _b : {}, key);
      }
    }
    const allTargetKeys = new Set([...Object.keys(target), ...Object.keys(prevTarget)]);
    const animationFactories = [];
    allTargetKeys.forEach(key => {
      var _a;
      if (target[key] === undefined) {
        target[key] = baseTarget[key];
      }
      if ((0, _hasChangedEs.hasChanged)(prevTarget[key], target[key])) {
        (_a = baseTarget[key]) !== null && _a !== void 0 ? _a : baseTarget[key] = _styleEs.style.get(element, key);
        animationFactories.push((0, _animateStyleEs.animateStyle)(element, key, target[key], animationOptions[key], _animation.Animation));
      }
    });
    // Wait for all animation states to read from the DOM
    yield;
    const animations = animationFactories.map(factory => factory()).filter(Boolean);
    if (!animations.length) return;
    const animationTarget = target;
    element.dispatchEvent((0, _eventsEs.motionEvent)("motionstart", animationTarget));
    Promise.all(animations.map(animation => animation.finished)).then(() => {
      element.dispatchEvent((0, _eventsEs.motionEvent)("motioncomplete", animationTarget));
    }).catch(_utils.noop);
  }
  const setGesture = (name, isActive) => () => {
    activeStates[name] = isActive;
    (0, _scheduleEs.scheduleAnimation)(state);
  };
  const updateGestureSubscriptions = () => {
    for (const name in gestures) {
      const isGestureActive = gestures[name].isActive(options);
      const remove = gestureSubscriptions[name];
      if (isGestureActive && !remove) {
        gestureSubscriptions[name] = gestures[name].subscribe(element, {
          enable: setGesture(name, true),
          disable: setGesture(name, false)
        }, options);
      } else if (!isGestureActive && remove) {
        remove();
        delete gestureSubscriptions[name];
      }
    }
  };
  const state = {
    update: newOptions => {
      if (!element) return;
      options = newOptions;
      updateGestureSubscriptions();
      (0, _scheduleEs.scheduleAnimation)(state);
    },
    setActive: (name, isActive) => {
      if (!element) return;
      activeStates[name] = isActive;
      (0, _scheduleEs.scheduleAnimation)(state);
    },
    animateUpdates,
    getDepth: () => depth,
    getTarget: () => target,
    getOptions: () => options,
    getContext: () => context,
    mount: newElement => {
      (0, _heyListen.invariant)(Boolean(newElement), "Animation state must be mounted with valid Element");
      element = newElement;
      mountedStates.set(element, state);
      updateGestureSubscriptions();
      return () => {
        mountedStates.delete(element);
        (0, _scheduleEs.unscheduleAnimation)(state);
        for (const key in gestureSubscriptions) {
          gestureSubscriptions[key]();
        }
      };
    },
    isMounted: () => Boolean(element)
  };
  return state;
}
},{"tslib":"node_modules/tslib/tslib.es6.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","../animate/animate-style.es.js":"node_modules/@motionone/dom/dist/animate/animate-style.es.js","../animate/style.es.js":"node_modules/@motionone/dom/dist/animate/style.es.js","../animate/utils/options.es.js":"node_modules/@motionone/dom/dist/animate/utils/options.es.js","./utils/has-changed.es.js":"node_modules/@motionone/dom/dist/state/utils/has-changed.es.js","./utils/resolve-variant.es.js":"node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js","./utils/schedule.es.js":"node_modules/@motionone/dom/dist/state/utils/schedule.es.js","./gestures/in-view.es.js":"node_modules/@motionone/dom/dist/state/gestures/in-view.es.js","./gestures/hover.es.js":"node_modules/@motionone/dom/dist/state/gestures/hover.es.js","./gestures/press.es.js":"node_modules/@motionone/dom/dist/state/gestures/press.es.js","./utils/events.es.js":"node_modules/@motionone/dom/dist/state/utils/events.es.js","@motionone/animation":"node_modules/@motionone/animation/dist/index.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/style-object.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyles = createStyles;
var _utils = require("@motionone/utils");
var _transformsEs = require("./transforms.es.js");
function createStyles(keyframes) {
  const initialKeyframes = {};
  const transformKeys = [];
  for (let key in keyframes) {
    const value = keyframes[key];
    if ((0, _transformsEs.isTransform)(key)) {
      if (_transformsEs.transformAlias[key]) key = _transformsEs.transformAlias[key];
      transformKeys.push(key);
      key = (0, _transformsEs.asTransformCssVar)(key);
    }
    let initialKeyframe = Array.isArray(value) ? value[0] : value;
    /**
     * If this is a number and we have a default value type, convert the number
     * to this type.
     */
    const definition = _transformsEs.transformDefinitions.get(key);
    if (definition) {
      initialKeyframe = (0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value;
    }
    initialKeyframes[key] = initialKeyframe;
  }
  if (transformKeys.length) {
    initialKeyframes.transform = (0, _transformsEs.buildTransformTemplate)(transformKeys);
  }
  return initialKeyframes;
}
},{"@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","./transforms.es.js":"node_modules/@motionone/dom/dist/animate/utils/transforms.es.js"}],"node_modules/@motionone/dom/dist/animate/utils/style-string.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleString = createStyleString;
var _styleObjectEs = require("./style-object.es.js");
const camelLetterToPipeLetter = letter => `-${letter.toLowerCase()}`;
const camelToPipeCase = str => str.replace(/[A-Z]/g, camelLetterToPipeLetter);
function createStyleString(target = {}) {
  const styles = (0, _styleObjectEs.createStyles)(target);
  let style = "";
  for (const key in styles) {
    style += key.startsWith("--") ? key : camelToPipeCase(key);
    style += `: ${styles[key]}; `;
  }
  return style;
}
},{"./style-object.es.js":"node_modules/@motionone/dom/dist/animate/utils/style-object.es.js"}],"node_modules/@motionone/dom/dist/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ScrollOffset", {
  enumerable: true,
  get: function () {
    return _presetsEs.ScrollOffset;
  }
});
Object.defineProperty(exports, "animate", {
  enumerable: true,
  get: function () {
    return _indexEs.animate;
  }
});
Object.defineProperty(exports, "animateStyle", {
  enumerable: true,
  get: function () {
    return _animateStyleEs.animateStyle;
  }
});
Object.defineProperty(exports, "createAnimate", {
  enumerable: true,
  get: function () {
    return _createAnimateEs.createAnimate;
  }
});
Object.defineProperty(exports, "createMotionState", {
  enumerable: true,
  get: function () {
    return _indexEs7.createMotionState;
  }
});
Object.defineProperty(exports, "createStyleString", {
  enumerable: true,
  get: function () {
    return _styleStringEs.createStyleString;
  }
});
Object.defineProperty(exports, "createStyles", {
  enumerable: true,
  get: function () {
    return _styleObjectEs.createStyles;
  }
});
Object.defineProperty(exports, "getAnimationData", {
  enumerable: true,
  get: function () {
    return _dataEs.getAnimationData;
  }
});
Object.defineProperty(exports, "getStyleName", {
  enumerable: true,
  get: function () {
    return _getStyleNameEs.getStyleName;
  }
});
Object.defineProperty(exports, "glide", {
  enumerable: true,
  get: function () {
    return _indexEs4.glide;
  }
});
Object.defineProperty(exports, "inView", {
  enumerable: true,
  get: function () {
    return _inViewEs.inView;
  }
});
Object.defineProperty(exports, "mountedStates", {
  enumerable: true,
  get: function () {
    return _indexEs7.mountedStates;
  }
});
Object.defineProperty(exports, "resize", {
  enumerable: true,
  get: function () {
    return _indexEs5.resize;
  }
});
Object.defineProperty(exports, "scroll", {
  enumerable: true,
  get: function () {
    return _indexEs6.scroll;
  }
});
Object.defineProperty(exports, "spring", {
  enumerable: true,
  get: function () {
    return _indexEs3.spring;
  }
});
Object.defineProperty(exports, "stagger", {
  enumerable: true,
  get: function () {
    return _staggerEs.stagger;
  }
});
Object.defineProperty(exports, "style", {
  enumerable: true,
  get: function () {
    return _styleEs.style;
  }
});
Object.defineProperty(exports, "timeline", {
  enumerable: true,
  get: function () {
    return _indexEs2.timeline;
  }
});
Object.defineProperty(exports, "withControls", {
  enumerable: true,
  get: function () {
    return _controlsEs.withControls;
  }
});
var _indexEs = require("./animate/index.es.js");
var _createAnimateEs = require("./animate/create-animate.es.js");
var _animateStyleEs = require("./animate/animate-style.es.js");
var _indexEs2 = require("./timeline/index.es.js");
var _staggerEs = require("./utils/stagger.es.js");
var _indexEs3 = require("./easing/spring/index.es.js");
var _indexEs4 = require("./easing/glide/index.es.js");
var _styleEs = require("./animate/style.es.js");
var _inViewEs = require("./gestures/in-view.es.js");
var _indexEs5 = require("./gestures/resize/index.es.js");
var _indexEs6 = require("./gestures/scroll/index.es.js");
var _presetsEs = require("./gestures/scroll/offsets/presets.es.js");
var _controlsEs = require("./animate/utils/controls.es.js");
var _dataEs = require("./animate/data.es.js");
var _getStyleNameEs = require("./animate/utils/get-style-name.es.js");
var _indexEs7 = require("./state/index.es.js");
var _styleObjectEs = require("./animate/utils/style-object.es.js");
var _styleStringEs = require("./animate/utils/style-string.es.js");
},{"./animate/index.es.js":"node_modules/@motionone/dom/dist/animate/index.es.js","./animate/create-animate.es.js":"node_modules/@motionone/dom/dist/animate/create-animate.es.js","./animate/animate-style.es.js":"node_modules/@motionone/dom/dist/animate/animate-style.es.js","./timeline/index.es.js":"node_modules/@motionone/dom/dist/timeline/index.es.js","./utils/stagger.es.js":"node_modules/@motionone/dom/dist/utils/stagger.es.js","./easing/spring/index.es.js":"node_modules/@motionone/dom/dist/easing/spring/index.es.js","./easing/glide/index.es.js":"node_modules/@motionone/dom/dist/easing/glide/index.es.js","./animate/style.es.js":"node_modules/@motionone/dom/dist/animate/style.es.js","./gestures/in-view.es.js":"node_modules/@motionone/dom/dist/gestures/in-view.es.js","./gestures/resize/index.es.js":"node_modules/@motionone/dom/dist/gestures/resize/index.es.js","./gestures/scroll/index.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/index.es.js","./gestures/scroll/offsets/presets.es.js":"node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js","./animate/utils/controls.es.js":"node_modules/@motionone/dom/dist/animate/utils/controls.es.js","./animate/data.es.js":"node_modules/@motionone/dom/dist/animate/data.es.js","./animate/utils/get-style-name.es.js":"node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js","./state/index.es.js":"node_modules/@motionone/dom/dist/state/index.es.js","./animate/utils/style-object.es.js":"node_modules/@motionone/dom/dist/animate/utils/style-object.es.js","./animate/utils/style-string.es.js":"node_modules/@motionone/dom/dist/animate/utils/style-string.es.js"}],"node_modules/motion/dist/animate.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = animate;
exports.animateProgress = animateProgress;
var _dom = require("@motionone/dom");
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function animateProgress(target, options = {}) {
  return (0, _dom.withControls)([() => {
    const animation = new _animation.Animation(target, [0, 1], options);
    animation.finished.catch(() => {});
    return animation;
  }], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
  const factory = (0, _utils.isFunction)(target) ? animateProgress : _dom.animate;
  return factory(target, keyframesOrOptions, options);
}
},{"@motionone/dom":"node_modules/@motionone/dom/dist/index.es.js","@motionone/utils":"node_modules/@motionone/utils/dist/index.es.js","@motionone/animation":"node_modules/@motionone/animation/dist/index.es.js"}],"node_modules/motion/dist/main.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  animate: true
};
Object.defineProperty(exports, "animate", {
  enumerable: true,
  get: function () {
    return _animateEs.animate;
  }
});
var _dom = require("@motionone/dom");
Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _dom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});
var _types = require("@motionone/types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _animateEs = require("./animate.es.js");
},{"@motionone/dom":"node_modules/@motionone/dom/dist/index.es.js","@motionone/types":"node_modules/@motionone/types/dist/index.es.js","./animate.es.js":"node_modules/motion/dist/animate.es.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _motion = require("motion");
(0, _motion.inView)("span", function (info) {
  var controls = (0, _motion.animate)(info.target, {
    opacity: 1
  }, {
    duration: 1
  });
  console.log("enters");
  // This will fire when the element leaves the viewport
  return function (leaveInfo) {
    console.log("leaves", leaveInfo);
    controls.stop();
    leaveInfo.target.style.opacity = 0;
  };
}, {
  margin: "-25% 0px -50% 0px"
});
},{"motion":"node_modules/motion/dist/main.es.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62787" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map