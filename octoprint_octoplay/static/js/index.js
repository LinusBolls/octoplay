var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// ../../node_modules/@babel/runtime/helpers/arrayWithHoles.js
var require_arrayWithHoles = __commonJS((exports, module) => {
  function _arrayWithHoles(r) {
    if (Array.isArray(r))
      return r;
  }
  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
var require_iterableToArrayLimit = __commonJS((exports, module) => {
  function _iterableToArrayLimit(r, l) {
    var t = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, l === 0) {
          if (Object(t) !== t)
            return;
          f = false;
        } else
          for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
            ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && t["return"] != null && (u = t["return"](), Object(u) !== u))
            return;
        } finally {
          if (o)
            throw n;
        }
      }
      return a;
    }
  }
  module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS((exports, module) => {
  function _arrayLikeToArray(r, a) {
    (a == null || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a);e < a; e++)
      n[e] = r[e];
    return n;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS((exports, module) => {
  var arrayLikeToArray = require_arrayLikeToArray();
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if (typeof r == "string")
        return arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : undefined;
    }
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/nonIterableRest.js
var require_nonIterableRest = __commonJS((exports, module) => {
  function _nonIterableRest() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/slicedToArray.js
var require_slicedToArray = __commonJS((exports, module) => {
  var arrayWithHoles = require_arrayWithHoles();
  var iterableToArrayLimit = require_iterableToArrayLimit();
  var unsupportedIterableToArray = require_unsupportedIterableToArray();
  var nonIterableRest = require_nonIterableRest();
  function _slicedToArray(r, e) {
    return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
  }
  module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS((exports, module) => {
  function _classCallCheck(a, n) {
    if (!(a instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS((exports, module) => {
  function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS((exports, module) => {
  var _typeof = require_typeof()["default"];
  function toPrimitive(t, r) {
    if (_typeof(t) != "object" || !t)
      return t;
    var e = t[Symbol.toPrimitive];
    if (e !== undefined) {
      var i = e.call(t, r || "default");
      if (_typeof(i) != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(t);
  }
  module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS((exports, module) => {
  var _typeof = require_typeof()["default"];
  var toPrimitive = require_toPrimitive();
  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return _typeof(i) == "symbol" ? i : i + "";
  }
  module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS((exports, module) => {
  var toPropertyKey = require_toPropertyKey();
  function _defineProperties(e, r) {
    for (var t = 0;t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../../node_modules/automation-events/build/es5/bundle.js
var require_bundle = __commonJS((exports, module) => {
  (function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_slicedToArray(), require_classCallCheck(), require_createClass()) : typeof define === "function" && define.amd ? define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.automationEvents = {}, global._slicedToArray, global._classCallCheck, global._createClass));
  })(exports, function(exports2, _slicedToArray, _classCallCheck, _createClass) {
    var createExtendedExponentialRampToValueAutomationEvent = function createExtendedExponentialRampToValueAutomationEvent(value, endTime, insertTime) {
      return {
        endTime,
        insertTime,
        type: "exponentialRampToValue",
        value
      };
    };
    var createExtendedLinearRampToValueAutomationEvent = function createExtendedLinearRampToValueAutomationEvent(value, endTime, insertTime) {
      return {
        endTime,
        insertTime,
        type: "linearRampToValue",
        value
      };
    };
    var createSetValueAutomationEvent = function createSetValueAutomationEvent(value, startTime) {
      return {
        startTime,
        type: "setValue",
        value
      };
    };
    var createSetValueCurveAutomationEvent = function createSetValueCurveAutomationEvent(values, startTime, duration) {
      return {
        duration,
        startTime,
        type: "setValueCurve",
        values
      };
    };
    var getTargetValueAtTime = function getTargetValueAtTime(time, valueAtStartTime, _ref) {
      var { startTime, target, timeConstant } = _ref;
      return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
    };
    var isExponentialRampToValueAutomationEvent = function isExponentialRampToValueAutomationEvent(automationEvent) {
      return automationEvent.type === "exponentialRampToValue";
    };
    var isLinearRampToValueAutomationEvent = function isLinearRampToValueAutomationEvent(automationEvent) {
      return automationEvent.type === "linearRampToValue";
    };
    var isAnyRampToValueAutomationEvent = function isAnyRampToValueAutomationEvent(automationEvent) {
      return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
    };
    var isSetValueAutomationEvent = function isSetValueAutomationEvent(automationEvent) {
      return automationEvent.type === "setValue";
    };
    var isSetValueCurveAutomationEvent = function isSetValueCurveAutomationEvent(automationEvent) {
      return automationEvent.type === "setValueCurve";
    };
    var _getValueOfAutomationEventAtIndexAtTime = function getValueOfAutomationEventAtIndexAtTime(automationEvents, index, time, defaultValue) {
      var automationEvent = automationEvents[index];
      return automationEvent === undefined ? defaultValue : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent) ? automationEvent.value : isSetValueCurveAutomationEvent(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
    };
    var getEndTimeAndValueOfPreviousAutomationEvent = function getEndTimeAndValueOfPreviousAutomationEvent(automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) {
      return currentAutomationEvent === undefined ? [nextAutomationEvent.insertTime, defaultValue] : isAnyRampToValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : isSetValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : isSetValueCurveAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
    };
    var isCancelAndHoldAutomationEvent = function isCancelAndHoldAutomationEvent(automationEvent) {
      return automationEvent.type === "cancelAndHold";
    };
    var isCancelScheduledValuesAutomationEvent = function isCancelScheduledValuesAutomationEvent(automationEvent) {
      return automationEvent.type === "cancelScheduledValues";
    };
    var getEventTime = function getEventTime(automationEvent) {
      if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
        return automationEvent.cancelTime;
      }
      if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
        return automationEvent.endTime;
      }
      return automationEvent.startTime;
    };
    var getExponentialRampValueAtTime = function getExponentialRampValueAtTime(time, startTime, valueAtStartTime, _ref) {
      var { endTime, value } = _ref;
      if (valueAtStartTime === value) {
        return value;
      }
      if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
        return valueAtStartTime * Math.pow(value / valueAtStartTime, (time - startTime) / (endTime - startTime));
      }
      return 0;
    };
    var getLinearRampValueAtTime = function getLinearRampValueAtTime(time, startTime, valueAtStartTime, _ref) {
      var { endTime, value } = _ref;
      return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
    };
    var interpolateValue = function interpolateValue(values, theoreticIndex) {
      var lowerIndex = Math.floor(theoreticIndex);
      var upperIndex = Math.ceil(theoreticIndex);
      if (lowerIndex === upperIndex) {
        return values[lowerIndex];
      }
      return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
    };
    var getValueCurveValueAtTime = function getValueCurveValueAtTime(time, _ref) {
      var { duration, startTime, values } = _ref;
      var theoreticIndex = (time - startTime) / duration * (values.length - 1);
      return interpolateValue(values, theoreticIndex);
    };
    var isSetTargetAutomationEvent = function isSetTargetAutomationEvent(automationEvent) {
      return automationEvent.type === "setTarget";
    };
    var AutomationEventList = /* @__PURE__ */ function() {
      function AutomationEventList2(defaultValue) {
        _classCallCheck(this, AutomationEventList2);
        this._automationEvents = [];
        this._currenTime = 0;
        this._defaultValue = defaultValue;
      }
      return _createClass(AutomationEventList2, [{
        key: Symbol.iterator,
        value: function value() {
          return this._automationEvents[Symbol.iterator]();
        }
      }, {
        key: "add",
        value: function add(automationEvent) {
          var eventTime = getEventTime(automationEvent);
          if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
              if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
              }
              return getEventTime(currentAutomationEvent) >= eventTime;
            });
            var removedAutomationEvent = this._automationEvents[index];
            if (index !== -1) {
              this._automationEvents = this._automationEvents.slice(0, index);
            }
            if (isCancelAndHoldAutomationEvent(automationEvent)) {
              var lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
              if (removedAutomationEvent !== undefined && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                if (lastAutomationEvent !== undefined && isSetTargetAutomationEvent(lastAutomationEvent)) {
                  throw new Error("The internal list is malformed.");
                }
                var startTime = lastAutomationEvent === undefined ? removedAutomationEvent.insertTime : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : getEventTime(lastAutomationEvent);
                var startValue = lastAutomationEvent === undefined ? this._defaultValue : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
                var value = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent) : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                var truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime) : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                this._automationEvents.push(truncatedAutomationEvent);
              }
              if (lastAutomationEvent !== undefined && isSetTargetAutomationEvent(lastAutomationEvent)) {
                this._automationEvents.push(createSetValueAutomationEvent(this.getValue(eventTime), eventTime));
              }
              if (lastAutomationEvent !== undefined && isSetValueCurveAutomationEvent(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                var duration = eventTime - lastAutomationEvent.startTime;
                var ratio = (lastAutomationEvent.values.length - 1) / lastAutomationEvent.duration;
                var length = Math.max(2, 1 + Math.ceil(duration * ratio));
                var fraction = duration / (length - 1) * ratio;
                var values = lastAutomationEvent.values.slice(0, length);
                if (fraction < 1) {
                  for (var i = 1;i < length; i += 1) {
                    var factor = fraction * i % 1;
                    values[i] = lastAutomationEvent.values[i - 1] * (1 - factor) + lastAutomationEvent.values[i] * factor;
                  }
                }
                this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent(values, lastAutomationEvent.startTime, duration);
              }
            }
          } else {
            var _index = this._automationEvents.findIndex(function(currentAutomationEvent) {
              return getEventTime(currentAutomationEvent) > eventTime;
            });
            var previousAutomationEvent = _index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[_index - 1];
            if (previousAutomationEvent !== undefined && isSetValueCurveAutomationEvent(previousAutomationEvent) && getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
              return false;
            }
            var persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent) ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime) : isLinearRampToValueAutomationEvent(automationEvent) ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime) : automationEvent;
            if (_index === -1) {
              this._automationEvents.push(persistentAutomationEvent);
            } else {
              if (isSetValueCurveAutomationEvent(automationEvent) && eventTime + automationEvent.duration > getEventTime(this._automationEvents[_index])) {
                return false;
              }
              this._automationEvents.splice(_index, 0, persistentAutomationEvent);
            }
          }
          return true;
        }
      }, {
        key: "flush",
        value: function flush(time) {
          var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
            return getEventTime(currentAutomationEvent) > time;
          });
          if (index > 1) {
            var remainingAutomationEvents = this._automationEvents.slice(index - 1);
            var firstRemainingAutomationEvent = remainingAutomationEvents[0];
            if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
              remainingAutomationEvents.unshift(createSetValueAutomationEvent(_getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
            }
            this._automationEvents = remainingAutomationEvents;
          }
        }
      }, {
        key: "getValue",
        value: function getValue(time) {
          if (this._automationEvents.length === 0) {
            return this._defaultValue;
          }
          var indexOfNextEvent = this._automationEvents.findIndex(function(automationEvent) {
            return getEventTime(automationEvent) > time;
          });
          var nextAutomationEvent = this._automationEvents[indexOfNextEvent];
          var indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
          var currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
          if (currentAutomationEvent !== undefined && isSetTargetAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
            return getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
          }
          if (currentAutomationEvent !== undefined && isSetValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
            return currentAutomationEvent.value;
          }
          if (currentAutomationEvent !== undefined && isSetValueCurveAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
            if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
              return getValueCurveValueAtTime(time, currentAutomationEvent);
            }
            return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
          }
          if (currentAutomationEvent !== undefined && isAnyRampToValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
            return currentAutomationEvent.value;
          }
          if (nextAutomationEvent !== undefined && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
            var _getEndTimeAndValueOf = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf2 = _slicedToArray(_getEndTimeAndValueOf, 2), startTime = _getEndTimeAndValueOf2[0], value = _getEndTimeAndValueOf2[1];
            return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
          }
          if (nextAutomationEvent !== undefined && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
            var _getEndTimeAndValueOf3 = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf4 = _slicedToArray(_getEndTimeAndValueOf3, 2), _startTime = _getEndTimeAndValueOf4[0], _value = _getEndTimeAndValueOf4[1];
            return getLinearRampValueAtTime(time, _startTime, _value, nextAutomationEvent);
          }
          return this._defaultValue;
        }
      }]);
    }();
    var createCancelAndHoldAutomationEvent = function createCancelAndHoldAutomationEvent(cancelTime) {
      return {
        cancelTime,
        type: "cancelAndHold"
      };
    };
    var createCancelScheduledValuesAutomationEvent = function createCancelScheduledValuesAutomationEvent(cancelTime) {
      return {
        cancelTime,
        type: "cancelScheduledValues"
      };
    };
    var createExponentialRampToValueAutomationEvent = function createExponentialRampToValueAutomationEvent(value, endTime) {
      return {
        endTime,
        type: "exponentialRampToValue",
        value
      };
    };
    var createLinearRampToValueAutomationEvent = function createLinearRampToValueAutomationEvent(value, endTime) {
      return {
        endTime,
        type: "linearRampToValue",
        value
      };
    };
    var createSetTargetAutomationEvent = function createSetTargetAutomationEvent(target, startTime, timeConstant) {
      return {
        startTime,
        target,
        timeConstant,
        type: "setTarget"
      };
    };
    exports2.AutomationEventList = AutomationEventList;
    exports2.createCancelAndHoldAutomationEvent = createCancelAndHoldAutomationEvent;
    exports2.createCancelScheduledValuesAutomationEvent = createCancelScheduledValuesAutomationEvent;
    exports2.createExponentialRampToValueAutomationEvent = createExponentialRampToValueAutomationEvent;
    exports2.createLinearRampToValueAutomationEvent = createLinearRampToValueAutomationEvent;
    exports2.createSetTargetAutomationEvent = createSetTargetAutomationEvent;
    exports2.createSetValueAutomationEvent = createSetValueAutomationEvent;
    exports2.createSetValueCurveAutomationEvent = createSetValueCurveAutomationEvent;
  });
});

// ../../node_modules/midi-file/lib/midi-parser.js
var require_midi_parser = __commonJS((exports, module) => {
  function parseMidi(data) {
    var p = new Parser(data);
    var headerChunk = p.readChunk();
    if (headerChunk.id != "MThd")
      throw "Bad MIDI file.  Expected 'MHdr', got: '" + headerChunk.id + "'";
    var header = parseHeader(headerChunk.data);
    var tracks = [];
    for (var i = 0;!p.eof() && i < header.numTracks; i++) {
      var trackChunk = p.readChunk();
      if (trackChunk.id != "MTrk")
        throw "Bad MIDI file.  Expected 'MTrk', got: '" + trackChunk.id + "'";
      var track = parseTrack(trackChunk.data);
      tracks.push(track);
    }
    return {
      header,
      tracks
    };
  }
  function parseHeader(data) {
    var p = new Parser(data);
    var format = p.readUInt16();
    var numTracks = p.readUInt16();
    var result = {
      format,
      numTracks
    };
    var timeDivision = p.readUInt16();
    if (timeDivision & 32768) {
      result.framesPerSecond = 256 - (timeDivision >> 8);
      result.ticksPerFrame = timeDivision & 255;
    } else {
      result.ticksPerBeat = timeDivision;
    }
    return result;
  }
  function parseTrack(data) {
    var p = new Parser(data);
    var events = [];
    while (!p.eof()) {
      var event2 = readEvent();
      events.push(event2);
    }
    return events;
    var lastEventTypeByte = null;
    function readEvent() {
      var event3 = {};
      event3.deltaTime = p.readVarInt();
      var eventTypeByte = p.readUInt8();
      if ((eventTypeByte & 240) === 240) {
        if (eventTypeByte === 255) {
          event3.meta = true;
          var metatypeByte = p.readUInt8();
          var length = p.readVarInt();
          switch (metatypeByte) {
            case 0:
              event3.type = "sequenceNumber";
              if (length !== 2)
                throw "Expected length for sequenceNumber event is 2, got " + length;
              event3.number = p.readUInt16();
              return event3;
            case 1:
              event3.type = "text";
              event3.text = p.readString(length);
              return event3;
            case 2:
              event3.type = "copyrightNotice";
              event3.text = p.readString(length);
              return event3;
            case 3:
              event3.type = "trackName";
              event3.text = p.readString(length);
              return event3;
            case 4:
              event3.type = "instrumentName";
              event3.text = p.readString(length);
              return event3;
            case 5:
              event3.type = "lyrics";
              event3.text = p.readString(length);
              return event3;
            case 6:
              event3.type = "marker";
              event3.text = p.readString(length);
              return event3;
            case 7:
              event3.type = "cuePoint";
              event3.text = p.readString(length);
              return event3;
            case 32:
              event3.type = "channelPrefix";
              if (length != 1)
                throw "Expected length for channelPrefix event is 1, got " + length;
              event3.channel = p.readUInt8();
              return event3;
            case 33:
              event3.type = "portPrefix";
              if (length != 1)
                throw "Expected length for portPrefix event is 1, got " + length;
              event3.port = p.readUInt8();
              return event3;
            case 47:
              event3.type = "endOfTrack";
              if (length != 0)
                throw "Expected length for endOfTrack event is 0, got " + length;
              return event3;
            case 81:
              event3.type = "setTempo";
              if (length != 3)
                throw "Expected length for setTempo event is 3, got " + length;
              event3.microsecondsPerBeat = p.readUInt24();
              return event3;
            case 84:
              event3.type = "smpteOffset";
              if (length != 5)
                throw "Expected length for smpteOffset event is 5, got " + length;
              var hourByte = p.readUInt8();
              var FRAME_RATES = { 0: 24, 32: 25, 64: 29, 96: 30 };
              event3.frameRate = FRAME_RATES[hourByte & 96];
              event3.hour = hourByte & 31;
              event3.min = p.readUInt8();
              event3.sec = p.readUInt8();
              event3.frame = p.readUInt8();
              event3.subFrame = p.readUInt8();
              return event3;
            case 88:
              event3.type = "timeSignature";
              if (length != 2 && length != 4)
                throw "Expected length for timeSignature event is 4 or 2, got " + length;
              event3.numerator = p.readUInt8();
              event3.denominator = 1 << p.readUInt8();
              if (length === 4) {
                event3.metronome = p.readUInt8();
                event3.thirtyseconds = p.readUInt8();
              } else {
                event3.metronome = 36;
                event3.thirtyseconds = 8;
              }
              return event3;
            case 89:
              event3.type = "keySignature";
              if (length != 2)
                throw "Expected length for keySignature event is 2, got " + length;
              event3.key = p.readInt8();
              event3.scale = p.readUInt8();
              return event3;
            case 127:
              event3.type = "sequencerSpecific";
              event3.data = p.readBytes(length);
              return event3;
            default:
              event3.type = "unknownMeta";
              event3.data = p.readBytes(length);
              event3.metatypeByte = metatypeByte;
              return event3;
          }
        } else if (eventTypeByte == 240) {
          event3.type = "sysEx";
          var length = p.readVarInt();
          event3.data = p.readBytes(length);
          return event3;
        } else if (eventTypeByte == 247) {
          event3.type = "endSysEx";
          var length = p.readVarInt();
          event3.data = p.readBytes(length);
          return event3;
        } else {
          throw "Unrecognised MIDI event type byte: " + eventTypeByte;
        }
      } else {
        var param1;
        if ((eventTypeByte & 128) === 0) {
          if (lastEventTypeByte === null)
            throw "Running status byte encountered before status byte";
          param1 = eventTypeByte;
          eventTypeByte = lastEventTypeByte;
          event3.running = true;
        } else {
          param1 = p.readUInt8();
          lastEventTypeByte = eventTypeByte;
        }
        var eventType = eventTypeByte >> 4;
        event3.channel = eventTypeByte & 15;
        switch (eventType) {
          case 8:
            event3.type = "noteOff";
            event3.noteNumber = param1;
            event3.velocity = p.readUInt8();
            return event3;
          case 9:
            var velocity = p.readUInt8();
            event3.type = velocity === 0 ? "noteOff" : "noteOn";
            event3.noteNumber = param1;
            event3.velocity = velocity;
            if (velocity === 0)
              event3.byte9 = true;
            return event3;
          case 10:
            event3.type = "noteAftertouch";
            event3.noteNumber = param1;
            event3.amount = p.readUInt8();
            return event3;
          case 11:
            event3.type = "controller";
            event3.controllerType = param1;
            event3.value = p.readUInt8();
            return event3;
          case 12:
            event3.type = "programChange";
            event3.programNumber = param1;
            return event3;
          case 13:
            event3.type = "channelAftertouch";
            event3.amount = param1;
            return event3;
          case 14:
            event3.type = "pitchBend";
            event3.value = param1 + (p.readUInt8() << 7) - 8192;
            return event3;
          default:
            throw "Unrecognised MIDI event type: " + eventType;
        }
      }
    }
  }
  function Parser(data) {
    this.buffer = data;
    this.bufferLen = this.buffer.length;
    this.pos = 0;
  }
  Parser.prototype.eof = function() {
    return this.pos >= this.bufferLen;
  };
  Parser.prototype.readUInt8 = function() {
    var result = this.buffer[this.pos];
    this.pos += 1;
    return result;
  };
  Parser.prototype.readInt8 = function() {
    var u = this.readUInt8();
    if (u & 128)
      return u - 256;
    else
      return u;
  };
  Parser.prototype.readUInt16 = function() {
    var b0 = this.readUInt8(), b1 = this.readUInt8();
    return (b0 << 8) + b1;
  };
  Parser.prototype.readInt16 = function() {
    var u = this.readUInt16();
    if (u & 32768)
      return u - 65536;
    else
      return u;
  };
  Parser.prototype.readUInt24 = function() {
    var b0 = this.readUInt8(), b1 = this.readUInt8(), b2 = this.readUInt8();
    return (b0 << 16) + (b1 << 8) + b2;
  };
  Parser.prototype.readInt24 = function() {
    var u = this.readUInt24();
    if (u & 8388608)
      return u - 16777216;
    else
      return u;
  };
  Parser.prototype.readUInt32 = function() {
    var b0 = this.readUInt8(), b1 = this.readUInt8(), b2 = this.readUInt8(), b3 = this.readUInt8();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  };
  Parser.prototype.readBytes = function(len) {
    var bytes = this.buffer.slice(this.pos, this.pos + len);
    this.pos += len;
    return bytes;
  };
  Parser.prototype.readString = function(len) {
    var bytes = this.readBytes(len);
    return String.fromCharCode.apply(null, bytes);
  };
  Parser.prototype.readVarInt = function() {
    var result = 0;
    while (!this.eof()) {
      var b = this.readUInt8();
      if (b & 128) {
        result += b & 127;
        result <<= 7;
      } else {
        return result + b;
      }
    }
    return result;
  };
  Parser.prototype.readChunk = function() {
    var id = this.readString(4);
    var length = this.readUInt32();
    var data = this.readBytes(length);
    return {
      id,
      length,
      data
    };
  };
  module.exports = parseMidi;
});

// ../../node_modules/midi-file/lib/midi-writer.js
var require_midi_writer = __commonJS((exports, module) => {
  function writeMidi(data, opts) {
    if (typeof data !== "object")
      throw "Invalid MIDI data";
    opts = opts || {};
    var header = data.header || {};
    var tracks = data.tracks || [];
    var i, len = tracks.length;
    var w = new Writer;
    writeHeader(w, header, len);
    for (i = 0;i < len; i++) {
      writeTrack(w, tracks[i], opts);
    }
    return w.buffer;
  }
  function writeHeader(w, header, numTracks) {
    var format = header.format == null ? 1 : header.format;
    var timeDivision = 128;
    if (header.timeDivision) {
      timeDivision = header.timeDivision;
    } else if (header.ticksPerFrame && header.framesPerSecond) {
      timeDivision = -(header.framesPerSecond & 255) << 8 | header.ticksPerFrame & 255;
    } else if (header.ticksPerBeat) {
      timeDivision = header.ticksPerBeat & 32767;
    }
    var h = new Writer;
    h.writeUInt16(format);
    h.writeUInt16(numTracks);
    h.writeUInt16(timeDivision);
    w.writeChunk("MThd", h.buffer);
  }
  function writeTrack(w, track, opts) {
    var t = new Writer;
    var i, len = track.length;
    var eventTypeByte = null;
    for (i = 0;i < len; i++) {
      if (opts.running === false || !opts.running && !track[i].running)
        eventTypeByte = null;
      eventTypeByte = writeEvent(t, track[i], eventTypeByte, opts.useByte9ForNoteOff);
    }
    w.writeChunk("MTrk", t.buffer);
  }
  function writeEvent(w, event2, lastEventTypeByte, useByte9ForNoteOff) {
    var type = event2.type;
    var deltaTime = event2.deltaTime;
    var text = event2.text || "";
    var data = event2.data || [];
    var eventTypeByte = null;
    w.writeVarInt(deltaTime);
    switch (type) {
      case "sequenceNumber":
        w.writeUInt8(255);
        w.writeUInt8(0);
        w.writeVarInt(2);
        w.writeUInt16(event2.number);
        break;
      case "text":
        w.writeUInt8(255);
        w.writeUInt8(1);
        w.writeVarInt(text.length);
        w.writeString(text);
        break;
      case "copyrightNotice":
        w.writeUInt8(255);
        w.writeUInt8(2);
        w.writeVarInt(text.length);
        w.writeString(text);
        break;
      case "trackName":
        w.writeUInt8(255);
        w.writeUInt8(3);
        w.writeVarInt(text.length);
        w.writeString(text);
        break;
      case "instrumentName":
        w.writeUInt8(255);
        w.writeUInt8(4);
        w.writeVarInt(text.length);
        w.writeString(text);
        break;
      case "lyrics":
        w.writeUInt8(255);
        w.writeUInt8(5);
        w.writeVarInt(text.length);
        w.writeString(text);
        break;
      case "marker":
        w.writeUInt8(255);
        w.writeUInt8(6);
        w.writeVarInt(text.length);
        w.writeString(text);
        break;
      case "cuePoint":
        w.writeUInt8(255);
        w.writeUInt8(7);
        w.writeVarInt(text.length);
        w.writeString(text);
        break;
      case "channelPrefix":
        w.writeUInt8(255);
        w.writeUInt8(32);
        w.writeVarInt(1);
        w.writeUInt8(event2.channel);
        break;
      case "portPrefix":
        w.writeUInt8(255);
        w.writeUInt8(33);
        w.writeVarInt(1);
        w.writeUInt8(event2.port);
        break;
      case "endOfTrack":
        w.writeUInt8(255);
        w.writeUInt8(47);
        w.writeVarInt(0);
        break;
      case "setTempo":
        w.writeUInt8(255);
        w.writeUInt8(81);
        w.writeVarInt(3);
        w.writeUInt24(event2.microsecondsPerBeat);
        break;
      case "smpteOffset":
        w.writeUInt8(255);
        w.writeUInt8(84);
        w.writeVarInt(5);
        var FRAME_RATES = { 24: 0, 25: 32, 29: 64, 30: 96 };
        var hourByte = event2.hour & 31 | FRAME_RATES[event2.frameRate];
        w.writeUInt8(hourByte);
        w.writeUInt8(event2.min);
        w.writeUInt8(event2.sec);
        w.writeUInt8(event2.frame);
        w.writeUInt8(event2.subFrame);
        break;
      case "timeSignature":
        w.writeUInt8(255);
        w.writeUInt8(88);
        w.writeVarInt(4);
        w.writeUInt8(event2.numerator);
        var denominator = Math.floor(Math.log(event2.denominator) / Math.LN2) & 255;
        w.writeUInt8(denominator);
        w.writeUInt8(event2.metronome);
        w.writeUInt8(event2.thirtyseconds || 8);
        break;
      case "keySignature":
        w.writeUInt8(255);
        w.writeUInt8(89);
        w.writeVarInt(2);
        w.writeInt8(event2.key);
        w.writeUInt8(event2.scale);
        break;
      case "sequencerSpecific":
        w.writeUInt8(255);
        w.writeUInt8(127);
        w.writeVarInt(data.length);
        w.writeBytes(data);
        break;
      case "unknownMeta":
        if (event2.metatypeByte != null) {
          w.writeUInt8(255);
          w.writeUInt8(event2.metatypeByte);
          w.writeVarInt(data.length);
          w.writeBytes(data);
        }
        break;
      case "sysEx":
        w.writeUInt8(240);
        w.writeVarInt(data.length);
        w.writeBytes(data);
        break;
      case "endSysEx":
        w.writeUInt8(247);
        w.writeVarInt(data.length);
        w.writeBytes(data);
        break;
      case "noteOff":
        var noteByte = useByte9ForNoteOff !== false && event2.byte9 || useByte9ForNoteOff && event2.velocity == 0 ? 144 : 128;
        eventTypeByte = noteByte | event2.channel;
        if (eventTypeByte !== lastEventTypeByte)
          w.writeUInt8(eventTypeByte);
        w.writeUInt8(event2.noteNumber);
        w.writeUInt8(event2.velocity);
        break;
      case "noteOn":
        eventTypeByte = 144 | event2.channel;
        if (eventTypeByte !== lastEventTypeByte)
          w.writeUInt8(eventTypeByte);
        w.writeUInt8(event2.noteNumber);
        w.writeUInt8(event2.velocity);
        break;
      case "noteAftertouch":
        eventTypeByte = 160 | event2.channel;
        if (eventTypeByte !== lastEventTypeByte)
          w.writeUInt8(eventTypeByte);
        w.writeUInt8(event2.noteNumber);
        w.writeUInt8(event2.amount);
        break;
      case "controller":
        eventTypeByte = 176 | event2.channel;
        if (eventTypeByte !== lastEventTypeByte)
          w.writeUInt8(eventTypeByte);
        w.writeUInt8(event2.controllerType);
        w.writeUInt8(event2.value);
        break;
      case "programChange":
        eventTypeByte = 192 | event2.channel;
        if (eventTypeByte !== lastEventTypeByte)
          w.writeUInt8(eventTypeByte);
        w.writeUInt8(event2.programNumber);
        break;
      case "channelAftertouch":
        eventTypeByte = 208 | event2.channel;
        if (eventTypeByte !== lastEventTypeByte)
          w.writeUInt8(eventTypeByte);
        w.writeUInt8(event2.amount);
        break;
      case "pitchBend":
        eventTypeByte = 224 | event2.channel;
        if (eventTypeByte !== lastEventTypeByte)
          w.writeUInt8(eventTypeByte);
        var value14 = 8192 + event2.value;
        var lsb14 = value14 & 127;
        var msb14 = value14 >> 7 & 127;
        w.writeUInt8(lsb14);
        w.writeUInt8(msb14);
        break;
      default:
        throw "Unrecognized event type: " + type;
    }
    return eventTypeByte;
  }
  function Writer() {
    this.buffer = [];
  }
  Writer.prototype.writeUInt8 = function(v) {
    this.buffer.push(v & 255);
  };
  Writer.prototype.writeInt8 = Writer.prototype.writeUInt8;
  Writer.prototype.writeUInt16 = function(v) {
    var b0 = v >> 8 & 255, b1 = v & 255;
    this.writeUInt8(b0);
    this.writeUInt8(b1);
  };
  Writer.prototype.writeInt16 = Writer.prototype.writeUInt16;
  Writer.prototype.writeUInt24 = function(v) {
    var b0 = v >> 16 & 255, b1 = v >> 8 & 255, b2 = v & 255;
    this.writeUInt8(b0);
    this.writeUInt8(b1);
    this.writeUInt8(b2);
  };
  Writer.prototype.writeInt24 = Writer.prototype.writeUInt24;
  Writer.prototype.writeUInt32 = function(v) {
    var b0 = v >> 24 & 255, b1 = v >> 16 & 255, b2 = v >> 8 & 255, b3 = v & 255;
    this.writeUInt8(b0);
    this.writeUInt8(b1);
    this.writeUInt8(b2);
    this.writeUInt8(b3);
  };
  Writer.prototype.writeInt32 = Writer.prototype.writeUInt32;
  Writer.prototype.writeBytes = function(arr) {
    this.buffer = this.buffer.concat(Array.prototype.slice.call(arr, 0));
  };
  Writer.prototype.writeString = function(str) {
    var i, len = str.length, arr = [];
    for (i = 0;i < len; i++) {
      arr.push(str.codePointAt(i));
    }
    this.writeBytes(arr);
  };
  Writer.prototype.writeVarInt = function(v) {
    if (v < 0)
      throw "Cannot write negative variable-length integer";
    if (v <= 127) {
      this.writeUInt8(v);
    } else {
      var i = v;
      var bytes = [];
      bytes.push(i & 127);
      i >>= 7;
      while (i) {
        var b = i & 127 | 128;
        bytes.push(b);
        i >>= 7;
      }
      this.writeBytes(bytes.reverse());
    }
  };
  Writer.prototype.writeChunk = function(id, data) {
    this.writeString(id);
    this.writeUInt32(data.length);
    this.writeBytes(data);
  };
  module.exports = writeMidi;
});

// ../../node_modules/midi-file/index.js
var require_midi_file = __commonJS((exports) => {
  exports.parseMidi = require_midi_parser();
  exports.writeMidi = require_midi_writer();
});

// ../../node_modules/@tonejs/midi/dist/BinarySearch.js
var require_BinarySearch = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.insert = exports.search = undefined;
  function search(array, value, prop) {
    if (prop === undefined) {
      prop = "ticks";
    }
    var beginning = 0;
    var len = array.length;
    var end = len;
    if (len > 0 && array[len - 1][prop] <= value) {
      return len - 1;
    }
    while (beginning < end) {
      var midPoint = Math.floor(beginning + (end - beginning) / 2);
      var event_1 = array[midPoint];
      var nextEvent = array[midPoint + 1];
      if (event_1[prop] === value) {
        for (var i = midPoint;i < array.length; i++) {
          var testEvent = array[i];
          if (testEvent[prop] === value) {
            midPoint = i;
          }
        }
        return midPoint;
      } else if (event_1[prop] < value && nextEvent[prop] > value) {
        return midPoint;
      } else if (event_1[prop] > value) {
        end = midPoint;
      } else if (event_1[prop] < value) {
        beginning = midPoint + 1;
      }
    }
    return -1;
  }
  exports.search = search;
  function insert(array, event2, prop) {
    if (prop === undefined) {
      prop = "ticks";
    }
    if (array.length) {
      var index = search(array, event2[prop], prop);
      array.splice(index + 1, 0, event2);
    } else {
      array.push(event2);
    }
  }
  exports.insert = insert;
});

// ../../node_modules/@tonejs/midi/dist/Header.js
var require_Header = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Header = exports.keySignatureKeys = undefined;
  var BinarySearch_1 = require_BinarySearch();
  var privatePPQMap = new WeakMap;
  exports.keySignatureKeys = [
    "Cb",
    "Gb",
    "Db",
    "Ab",
    "Eb",
    "Bb",
    "F",
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "C#"
  ];
  var Header = function() {
    function Header2(midiData) {
      var _this = this;
      this.tempos = [];
      this.timeSignatures = [];
      this.keySignatures = [];
      this.meta = [];
      this.name = "";
      privatePPQMap.set(this, 480);
      if (midiData) {
        privatePPQMap.set(this, midiData.header.ticksPerBeat);
        midiData.tracks.forEach(function(track) {
          track.forEach(function(event2) {
            if (event2.meta) {
              if (event2.type === "timeSignature") {
                _this.timeSignatures.push({
                  ticks: event2.absoluteTime,
                  timeSignature: [
                    event2.numerator,
                    event2.denominator
                  ]
                });
              } else if (event2.type === "setTempo") {
                _this.tempos.push({
                  bpm: 60000000 / event2.microsecondsPerBeat,
                  ticks: event2.absoluteTime
                });
              } else if (event2.type === "keySignature") {
                _this.keySignatures.push({
                  key: exports.keySignatureKeys[event2.key + 7],
                  scale: event2.scale === 0 ? "major" : "minor",
                  ticks: event2.absoluteTime
                });
              }
            }
          });
        });
        var firstTrackCurrentTicks_1 = 0;
        midiData.tracks[0].forEach(function(event2) {
          firstTrackCurrentTicks_1 += event2.deltaTime;
          if (event2.meta) {
            if (event2.type === "trackName") {
              _this.name = event2.text;
            } else if (event2.type === "text" || event2.type === "cuePoint" || event2.type === "marker" || event2.type === "lyrics") {
              _this.meta.push({
                text: event2.text,
                ticks: firstTrackCurrentTicks_1,
                type: event2.type
              });
            }
          }
        });
        this.update();
      }
    }
    Header2.prototype.update = function() {
      var _this = this;
      var currentTime = 0;
      var lastEventBeats = 0;
      this.tempos.sort(function(a, b) {
        return a.ticks - b.ticks;
      });
      this.tempos.forEach(function(event2, index) {
        var lastBPM = index > 0 ? _this.tempos[index - 1].bpm : _this.tempos[0].bpm;
        var beats = event2.ticks / _this.ppq - lastEventBeats;
        var elapsedSeconds = 60 / lastBPM * beats;
        event2.time = elapsedSeconds + currentTime;
        currentTime = event2.time;
        lastEventBeats += beats;
      });
      this.timeSignatures.sort(function(a, b) {
        return a.ticks - b.ticks;
      });
      this.timeSignatures.forEach(function(event2, index) {
        var lastEvent = index > 0 ? _this.timeSignatures[index - 1] : _this.timeSignatures[0];
        var elapsedBeats = (event2.ticks - lastEvent.ticks) / _this.ppq;
        var elapsedMeasures = elapsedBeats / lastEvent.timeSignature[0] / (lastEvent.timeSignature[1] / 4);
        lastEvent.measures = lastEvent.measures || 0;
        event2.measures = elapsedMeasures + lastEvent.measures;
      });
    };
    Header2.prototype.ticksToSeconds = function(ticks) {
      var index = (0, BinarySearch_1.search)(this.tempos, ticks);
      if (index !== -1) {
        var tempo = this.tempos[index];
        var tempoTime = tempo.time;
        var elapsedBeats = (ticks - tempo.ticks) / this.ppq;
        return tempoTime + 60 / tempo.bpm * elapsedBeats;
      } else {
        var beats = ticks / this.ppq;
        return 60 / 120 * beats;
      }
    };
    Header2.prototype.ticksToMeasures = function(ticks) {
      var index = (0, BinarySearch_1.search)(this.timeSignatures, ticks);
      if (index !== -1) {
        var timeSigEvent = this.timeSignatures[index];
        var elapsedBeats = (ticks - timeSigEvent.ticks) / this.ppq;
        return timeSigEvent.measures + elapsedBeats / (timeSigEvent.timeSignature[0] / timeSigEvent.timeSignature[1]) / 4;
      } else {
        return ticks / this.ppq / 4;
      }
    };
    Object.defineProperty(Header2.prototype, "ppq", {
      get: function() {
        return privatePPQMap.get(this);
      },
      enumerable: false,
      configurable: true
    });
    Header2.prototype.secondsToTicks = function(seconds) {
      var index = (0, BinarySearch_1.search)(this.tempos, seconds, "time");
      if (index !== -1) {
        var tempo = this.tempos[index];
        var tempoTime = tempo.time;
        var elapsedTime = seconds - tempoTime;
        var elapsedBeats = elapsedTime / (60 / tempo.bpm);
        return Math.round(tempo.ticks + elapsedBeats * this.ppq);
      } else {
        var beats = seconds / (60 / 120);
        return Math.round(beats * this.ppq);
      }
    };
    Header2.prototype.toJSON = function() {
      return {
        keySignatures: this.keySignatures,
        meta: this.meta,
        name: this.name,
        ppq: this.ppq,
        tempos: this.tempos.map(function(t) {
          return {
            bpm: t.bpm,
            ticks: t.ticks
          };
        }),
        timeSignatures: this.timeSignatures
      };
    };
    Header2.prototype.fromJSON = function(json) {
      this.name = json.name;
      this.tempos = json.tempos.map(function(t) {
        return Object.assign({}, t);
      });
      this.timeSignatures = json.timeSignatures.map(function(t) {
        return Object.assign({}, t);
      });
      this.keySignatures = json.keySignatures.map(function(t) {
        return Object.assign({}, t);
      });
      this.meta = json.meta.map(function(t) {
        return Object.assign({}, t);
      });
      privatePPQMap.set(this, json.ppq);
      this.update();
    };
    Header2.prototype.setTempo = function(bpm) {
      this.tempos = [
        {
          bpm,
          ticks: 0
        }
      ];
      this.update();
    };
    return Header2;
  }();
  exports.Header = Header;
});

// ../../node_modules/@tonejs/midi/dist/ControlChange.js
var require_ControlChange = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ControlChange = exports.controlChangeIds = exports.controlChangeNames = undefined;
  exports.controlChangeNames = {
    1: "modulationWheel",
    2: "breath",
    4: "footController",
    5: "portamentoTime",
    7: "volume",
    8: "balance",
    10: "pan",
    64: "sustain",
    65: "portamentoTime",
    66: "sostenuto",
    67: "softPedal",
    68: "legatoFootswitch",
    84: "portamentoControl"
  };
  exports.controlChangeIds = Object.keys(exports.controlChangeNames).reduce(function(obj, key) {
    obj[exports.controlChangeNames[key]] = key;
    return obj;
  }, {});
  var privateHeaderMap = new WeakMap;
  var privateCCNumberMap = new WeakMap;
  var ControlChange = function() {
    function ControlChange2(event2, header) {
      privateHeaderMap.set(this, header);
      privateCCNumberMap.set(this, event2.controllerType);
      this.ticks = event2.absoluteTime;
      this.value = event2.value;
    }
    Object.defineProperty(ControlChange2.prototype, "number", {
      get: function() {
        return privateCCNumberMap.get(this);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ControlChange2.prototype, "name", {
      get: function() {
        if (exports.controlChangeNames[this.number]) {
          return exports.controlChangeNames[this.number];
        } else {
          return null;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ControlChange2.prototype, "time", {
      get: function() {
        var header = privateHeaderMap.get(this);
        return header.ticksToSeconds(this.ticks);
      },
      set: function(t) {
        var header = privateHeaderMap.get(this);
        this.ticks = header.secondsToTicks(t);
      },
      enumerable: false,
      configurable: true
    });
    ControlChange2.prototype.toJSON = function() {
      return {
        number: this.number,
        ticks: this.ticks,
        time: this.time,
        value: this.value
      };
    };
    return ControlChange2;
  }();
  exports.ControlChange = ControlChange;
});

// ../../node_modules/@tonejs/midi/dist/ControlChanges.js
var require_ControlChanges = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createControlChanges = undefined;
  var ControlChange_1 = require_ControlChange();
  function createControlChanges() {
    return new Proxy({}, {
      get: function(target, handler2) {
        if (target[handler2]) {
          return target[handler2];
        } else if (ControlChange_1.controlChangeIds.hasOwnProperty(handler2)) {
          return target[ControlChange_1.controlChangeIds[handler2]];
        }
      },
      set: function(target, handler2, value) {
        if (ControlChange_1.controlChangeIds.hasOwnProperty(handler2)) {
          target[ControlChange_1.controlChangeIds[handler2]] = value;
        } else {
          target[handler2] = value;
        }
        return true;
      }
    });
  }
  exports.createControlChanges = createControlChanges;
});

// ../../node_modules/@tonejs/midi/dist/PitchBend.js
var require_PitchBend = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PitchBend = undefined;
  var privateHeaderMap = new WeakMap;
  var PitchBend = function() {
    function PitchBend2(event2, header) {
      privateHeaderMap.set(this, header);
      this.ticks = event2.absoluteTime;
      this.value = event2.value;
    }
    Object.defineProperty(PitchBend2.prototype, "time", {
      get: function() {
        var header = privateHeaderMap.get(this);
        return header.ticksToSeconds(this.ticks);
      },
      set: function(t) {
        var header = privateHeaderMap.get(this);
        this.ticks = header.secondsToTicks(t);
      },
      enumerable: false,
      configurable: true
    });
    PitchBend2.prototype.toJSON = function() {
      return {
        ticks: this.ticks,
        time: this.time,
        value: this.value
      };
    };
    return PitchBend2;
  }();
  exports.PitchBend = PitchBend;
});

// ../../node_modules/@tonejs/midi/dist/InstrumentMaps.js
var require_InstrumentMaps = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DrumKitByPatchID = exports.InstrumentFamilyByID = exports.instrumentByPatchID = undefined;
  exports.instrumentByPatchID = [
    "acoustic grand piano",
    "bright acoustic piano",
    "electric grand piano",
    "honky-tonk piano",
    "electric piano 1",
    "electric piano 2",
    "harpsichord",
    "clavi",
    "celesta",
    "glockenspiel",
    "music box",
    "vibraphone",
    "marimba",
    "xylophone",
    "tubular bells",
    "dulcimer",
    "drawbar organ",
    "percussive organ",
    "rock organ",
    "church organ",
    "reed organ",
    "accordion",
    "harmonica",
    "tango accordion",
    "acoustic guitar (nylon)",
    "acoustic guitar (steel)",
    "electric guitar (jazz)",
    "electric guitar (clean)",
    "electric guitar (muted)",
    "overdriven guitar",
    "distortion guitar",
    "guitar harmonics",
    "acoustic bass",
    "electric bass (finger)",
    "electric bass (pick)",
    "fretless bass",
    "slap bass 1",
    "slap bass 2",
    "synth bass 1",
    "synth bass 2",
    "violin",
    "viola",
    "cello",
    "contrabass",
    "tremolo strings",
    "pizzicato strings",
    "orchestral harp",
    "timpani",
    "string ensemble 1",
    "string ensemble 2",
    "synthstrings 1",
    "synthstrings 2",
    "choir aahs",
    "voice oohs",
    "synth voice",
    "orchestra hit",
    "trumpet",
    "trombone",
    "tuba",
    "muted trumpet",
    "french horn",
    "brass section",
    "synthbrass 1",
    "synthbrass 2",
    "soprano sax",
    "alto sax",
    "tenor sax",
    "baritone sax",
    "oboe",
    "english horn",
    "bassoon",
    "clarinet",
    "piccolo",
    "flute",
    "recorder",
    "pan flute",
    "blown bottle",
    "shakuhachi",
    "whistle",
    "ocarina",
    "lead 1 (square)",
    "lead 2 (sawtooth)",
    "lead 3 (calliope)",
    "lead 4 (chiff)",
    "lead 5 (charang)",
    "lead 6 (voice)",
    "lead 7 (fifths)",
    "lead 8 (bass + lead)",
    "pad 1 (new age)",
    "pad 2 (warm)",
    "pad 3 (polysynth)",
    "pad 4 (choir)",
    "pad 5 (bowed)",
    "pad 6 (metallic)",
    "pad 7 (halo)",
    "pad 8 (sweep)",
    "fx 1 (rain)",
    "fx 2 (soundtrack)",
    "fx 3 (crystal)",
    "fx 4 (atmosphere)",
    "fx 5 (brightness)",
    "fx 6 (goblins)",
    "fx 7 (echoes)",
    "fx 8 (sci-fi)",
    "sitar",
    "banjo",
    "shamisen",
    "koto",
    "kalimba",
    "bag pipe",
    "fiddle",
    "shanai",
    "tinkle bell",
    "agogo",
    "steel drums",
    "woodblock",
    "taiko drum",
    "melodic tom",
    "synth drum",
    "reverse cymbal",
    "guitar fret noise",
    "breath noise",
    "seashore",
    "bird tweet",
    "telephone ring",
    "helicopter",
    "applause",
    "gunshot"
  ];
  exports.InstrumentFamilyByID = [
    "piano",
    "chromatic percussion",
    "organ",
    "guitar",
    "bass",
    "strings",
    "ensemble",
    "brass",
    "reed",
    "pipe",
    "synth lead",
    "synth pad",
    "synth effects",
    "world",
    "percussive",
    "sound effects"
  ];
  exports.DrumKitByPatchID = {
    0: "standard kit",
    8: "room kit",
    16: "power kit",
    24: "electronic kit",
    25: "tr-808 kit",
    32: "jazz kit",
    40: "brush kit",
    48: "orchestra kit",
    56: "sound fx kit"
  };
});

// ../../node_modules/@tonejs/midi/dist/Instrument.js
var require_Instrument = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Instrument = undefined;
  var InstrumentMaps_1 = require_InstrumentMaps();
  var privateTrackMap = new WeakMap;
  var Instrument2 = function() {
    function Instrument3(trackData, track) {
      this.number = 0;
      privateTrackMap.set(this, track);
      this.number = 0;
      if (trackData) {
        var programChange = trackData.find(function(e) {
          return e.type === "programChange";
        });
        if (programChange) {
          this.number = programChange.programNumber;
        }
      }
    }
    Object.defineProperty(Instrument3.prototype, "name", {
      get: function() {
        if (this.percussion) {
          return InstrumentMaps_1.DrumKitByPatchID[this.number];
        } else {
          return InstrumentMaps_1.instrumentByPatchID[this.number];
        }
      },
      set: function(n) {
        var patchNumber = InstrumentMaps_1.instrumentByPatchID.indexOf(n);
        if (patchNumber !== -1) {
          this.number = patchNumber;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Instrument3.prototype, "family", {
      get: function() {
        if (this.percussion) {
          return "drums";
        } else {
          return InstrumentMaps_1.InstrumentFamilyByID[Math.floor(this.number / 8)];
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Instrument3.prototype, "percussion", {
      get: function() {
        var track = privateTrackMap.get(this);
        return track.channel === 9;
      },
      enumerable: false,
      configurable: true
    });
    Instrument3.prototype.toJSON = function() {
      return {
        family: this.family,
        number: this.number,
        name: this.name
      };
    };
    Instrument3.prototype.fromJSON = function(json) {
      this.number = json.number;
    };
    return Instrument3;
  }();
  exports.Instrument = Instrument2;
});

// ../../node_modules/@tonejs/midi/dist/Note.js
var require_Note = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Note = undefined;
  function midiToPitch(midi) {
    var octave = Math.floor(midi / 12) - 1;
    return midiToPitchClass(midi) + octave.toString();
  }
  function midiToPitchClass(midi) {
    var scaleIndexToNote2 = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var note = midi % 12;
    return scaleIndexToNote2[note];
  }
  function pitchClassToMidi(pitch) {
    var scaleIndexToNote2 = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return scaleIndexToNote2.indexOf(pitch);
  }
  var pitchToMidi = function() {
    var regexp = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i;
    var noteToScaleIndex2 = {
      cbb: -2,
      cb: -1,
      c: 0,
      "c#": 1,
      cx: 2,
      dbb: 0,
      db: 1,
      d: 2,
      "d#": 3,
      dx: 4,
      ebb: 2,
      eb: 3,
      e: 4,
      "e#": 5,
      ex: 6,
      fbb: 3,
      fb: 4,
      f: 5,
      "f#": 6,
      fx: 7,
      gbb: 5,
      gb: 6,
      g: 7,
      "g#": 8,
      gx: 9,
      abb: 7,
      ab: 8,
      a: 9,
      "a#": 10,
      ax: 11,
      bbb: 9,
      bb: 10,
      b: 11,
      "b#": 12,
      bx: 13
    };
    return function(note) {
      var split = regexp.exec(note);
      var pitch = split[1];
      var octave = split[2];
      var index = noteToScaleIndex2[pitch.toLowerCase()];
      return index + (parseInt(octave, 10) + 1) * 12;
    };
  }();
  var privateHeaderMap = new WeakMap;
  var Note = function() {
    function Note2(noteOn, noteOff, header) {
      privateHeaderMap.set(this, header);
      this.midi = noteOn.midi;
      this.velocity = noteOn.velocity;
      this.noteOffVelocity = noteOff.velocity;
      this.ticks = noteOn.ticks;
      this.durationTicks = noteOff.ticks - noteOn.ticks;
    }
    Object.defineProperty(Note2.prototype, "name", {
      get: function() {
        return midiToPitch(this.midi);
      },
      set: function(n) {
        this.midi = pitchToMidi(n);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Note2.prototype, "octave", {
      get: function() {
        return Math.floor(this.midi / 12) - 1;
      },
      set: function(o) {
        var diff = o - this.octave;
        this.midi += diff * 12;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Note2.prototype, "pitch", {
      get: function() {
        return midiToPitchClass(this.midi);
      },
      set: function(p) {
        this.midi = 12 * (this.octave + 1) + pitchClassToMidi(p);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Note2.prototype, "duration", {
      get: function() {
        var header = privateHeaderMap.get(this);
        return header.ticksToSeconds(this.ticks + this.durationTicks) - header.ticksToSeconds(this.ticks);
      },
      set: function(d) {
        var header = privateHeaderMap.get(this);
        var noteEndTicks = header.secondsToTicks(this.time + d);
        this.durationTicks = noteEndTicks - this.ticks;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Note2.prototype, "time", {
      get: function() {
        var header = privateHeaderMap.get(this);
        return header.ticksToSeconds(this.ticks);
      },
      set: function(t) {
        var header = privateHeaderMap.get(this);
        this.ticks = header.secondsToTicks(t);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Note2.prototype, "bars", {
      get: function() {
        var header = privateHeaderMap.get(this);
        return header.ticksToMeasures(this.ticks);
      },
      enumerable: false,
      configurable: true
    });
    Note2.prototype.toJSON = function() {
      return {
        duration: this.duration,
        durationTicks: this.durationTicks,
        midi: this.midi,
        name: this.name,
        ticks: this.ticks,
        time: this.time,
        velocity: this.velocity
      };
    };
    return Note2;
  }();
  exports.Note = Note;
});

// ../../node_modules/@tonejs/midi/dist/Track.js
var require_Track = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Track = undefined;
  var BinarySearch_1 = require_BinarySearch();
  var ControlChange_1 = require_ControlChange();
  var ControlChanges_1 = require_ControlChanges();
  var PitchBend_1 = require_PitchBend();
  var Instrument_1 = require_Instrument();
  var Note_1 = require_Note();
  var privateHeaderMap = new WeakMap;
  var Track = function() {
    function Track2(trackData, header) {
      var _this = this;
      this.name = "";
      this.notes = [];
      this.controlChanges = (0, ControlChanges_1.createControlChanges)();
      this.pitchBends = [];
      privateHeaderMap.set(this, header);
      if (trackData) {
        var nameEvent = trackData.find(function(e) {
          return e.type === "trackName";
        });
        this.name = nameEvent ? nameEvent.text : "";
      }
      this.instrument = new Instrument_1.Instrument(trackData, this);
      this.channel = 0;
      if (trackData) {
        var noteOns = trackData.filter(function(event2) {
          return event2.type === "noteOn";
        });
        var noteOffs = trackData.filter(function(event2) {
          return event2.type === "noteOff";
        });
        var _loop_1 = function() {
          var currentNote = noteOns.shift();
          this_1.channel = currentNote.channel;
          var offIndex = noteOffs.findIndex(function(note) {
            return note.noteNumber === currentNote.noteNumber && note.absoluteTime >= currentNote.absoluteTime;
          });
          if (offIndex !== -1) {
            var noteOff = noteOffs.splice(offIndex, 1)[0];
            this_1.addNote({
              durationTicks: noteOff.absoluteTime - currentNote.absoluteTime,
              midi: currentNote.noteNumber,
              noteOffVelocity: noteOff.velocity / 127,
              ticks: currentNote.absoluteTime,
              velocity: currentNote.velocity / 127
            });
          }
        };
        var this_1 = this;
        while (noteOns.length) {
          _loop_1();
        }
        var controlChanges = trackData.filter(function(event2) {
          return event2.type === "controller";
        });
        controlChanges.forEach(function(event2) {
          _this.addCC({
            number: event2.controllerType,
            ticks: event2.absoluteTime,
            value: event2.value / 127
          });
        });
        var pitchBends = trackData.filter(function(event2) {
          return event2.type === "pitchBend";
        });
        pitchBends.forEach(function(event2) {
          _this.addPitchBend({
            ticks: event2.absoluteTime,
            value: event2.value / Math.pow(2, 13)
          });
        });
        var endOfTrackEvent = trackData.find(function(event2) {
          return event2.type === "endOfTrack";
        });
        this.endOfTrackTicks = endOfTrackEvent !== undefined ? endOfTrackEvent.absoluteTime : undefined;
      }
    }
    Track2.prototype.addNote = function(props) {
      var header = privateHeaderMap.get(this);
      var note = new Note_1.Note({
        midi: 0,
        ticks: 0,
        velocity: 1
      }, {
        ticks: 0,
        velocity: 0
      }, header);
      Object.assign(note, props);
      (0, BinarySearch_1.insert)(this.notes, note, "ticks");
      return this;
    };
    Track2.prototype.addCC = function(props) {
      var header = privateHeaderMap.get(this);
      var cc = new ControlChange_1.ControlChange({
        controllerType: props.number
      }, header);
      delete props.number;
      Object.assign(cc, props);
      if (!Array.isArray(this.controlChanges[cc.number])) {
        this.controlChanges[cc.number] = [];
      }
      (0, BinarySearch_1.insert)(this.controlChanges[cc.number], cc, "ticks");
      return this;
    };
    Track2.prototype.addPitchBend = function(props) {
      var header = privateHeaderMap.get(this);
      var pb = new PitchBend_1.PitchBend({}, header);
      Object.assign(pb, props);
      (0, BinarySearch_1.insert)(this.pitchBends, pb, "ticks");
      return this;
    };
    Object.defineProperty(Track2.prototype, "duration", {
      get: function() {
        if (!this.notes.length) {
          return 0;
        }
        var maxDuration = this.notes[this.notes.length - 1].time + this.notes[this.notes.length - 1].duration;
        for (var i = 0;i < this.notes.length - 1; i++) {
          var duration = this.notes[i].time + this.notes[i].duration;
          if (maxDuration < duration) {
            maxDuration = duration;
          }
        }
        return maxDuration;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Track2.prototype, "durationTicks", {
      get: function() {
        if (!this.notes.length) {
          return 0;
        }
        var maxDuration = this.notes[this.notes.length - 1].ticks + this.notes[this.notes.length - 1].durationTicks;
        for (var i = 0;i < this.notes.length - 1; i++) {
          var duration = this.notes[i].ticks + this.notes[i].durationTicks;
          if (maxDuration < duration) {
            maxDuration = duration;
          }
        }
        return maxDuration;
      },
      enumerable: false,
      configurable: true
    });
    Track2.prototype.fromJSON = function(json) {
      var _this = this;
      this.name = json.name;
      this.channel = json.channel;
      this.instrument = new Instrument_1.Instrument(undefined, this);
      this.instrument.fromJSON(json.instrument);
      if (json.endOfTrackTicks !== undefined) {
        this.endOfTrackTicks = json.endOfTrackTicks;
      }
      for (var number in json.controlChanges) {
        if (json.controlChanges[number]) {
          json.controlChanges[number].forEach(function(cc) {
            _this.addCC({
              number: cc.number,
              ticks: cc.ticks,
              value: cc.value
            });
          });
        }
      }
      json.notes.forEach(function(n) {
        _this.addNote({
          durationTicks: n.durationTicks,
          midi: n.midi,
          ticks: n.ticks,
          velocity: n.velocity
        });
      });
    };
    Track2.prototype.toJSON = function() {
      var controlChanges = {};
      for (var i = 0;i < 127; i++) {
        if (this.controlChanges.hasOwnProperty(i)) {
          controlChanges[i] = this.controlChanges[i].map(function(c) {
            return c.toJSON();
          });
        }
      }
      var json = {
        channel: this.channel,
        controlChanges,
        pitchBends: this.pitchBends.map(function(pb) {
          return pb.toJSON();
        }),
        instrument: this.instrument.toJSON(),
        name: this.name,
        notes: this.notes.map(function(n) {
          return n.toJSON();
        })
      };
      if (this.endOfTrackTicks !== undefined) {
        json.endOfTrackTicks = this.endOfTrackTicks;
      }
      return json;
    };
    return Track2;
  }();
  exports.Track = Track;
});

// ../../node_modules/array-flatten/dist/index.js
var require_dist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  function flatten(array) {
    var result = [];
    $flatten(array, result);
    return result;
  }
  exports.flatten = flatten;
  function $flatten(array, result) {
    for (var i = 0;i < array.length; i++) {
      var value = array[i];
      if (Array.isArray(value)) {
        $flatten(value, result);
      } else {
        result.push(value);
      }
    }
  }
});

// ../../node_modules/@tonejs/midi/dist/Encode.js
var require_Encode = __commonJS((exports) => {
  var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.encode = undefined;
  var midi_file_1 = require_midi_file();
  var Header_1 = require_Header();
  var array_flatten_1 = require_dist();
  function encodeNote(note, channel) {
    return [
      {
        absoluteTime: note.ticks,
        channel,
        deltaTime: 0,
        noteNumber: note.midi,
        type: "noteOn",
        velocity: Math.floor(note.velocity * 127)
      },
      {
        absoluteTime: note.ticks + note.durationTicks,
        channel,
        deltaTime: 0,
        noteNumber: note.midi,
        type: "noteOff",
        velocity: Math.floor(note.noteOffVelocity * 127)
      }
    ];
  }
  function encodeNotes(track) {
    return (0, array_flatten_1.flatten)(track.notes.map(function(note) {
      return encodeNote(note, track.channel);
    }));
  }
  function encodeControlChange(cc, channel) {
    return {
      absoluteTime: cc.ticks,
      channel,
      controllerType: cc.number,
      deltaTime: 0,
      type: "controller",
      value: Math.floor(cc.value * 127)
    };
  }
  function encodeControlChanges(track) {
    var controlChanges = [];
    for (var i = 0;i < 127; i++) {
      if (track.controlChanges.hasOwnProperty(i)) {
        track.controlChanges[i].forEach(function(cc) {
          controlChanges.push(encodeControlChange(cc, track.channel));
        });
      }
    }
    return controlChanges;
  }
  function encodePitchBend(pb, channel) {
    return {
      absoluteTime: pb.ticks,
      channel,
      deltaTime: 0,
      type: "pitchBend",
      value: pb.value
    };
  }
  function encodePitchBends(track) {
    var pitchBends = [];
    track.pitchBends.forEach(function(pb) {
      pitchBends.push(encodePitchBend(pb, track.channel));
    });
    return pitchBends;
  }
  function encodeInstrument(track) {
    return {
      absoluteTime: 0,
      channel: track.channel,
      deltaTime: 0,
      programNumber: track.instrument.number,
      type: "programChange"
    };
  }
  function encodeTrackName(name) {
    return {
      absoluteTime: 0,
      deltaTime: 0,
      meta: true,
      text: name,
      type: "trackName"
    };
  }
  function encodeTempo(tempo) {
    return {
      absoluteTime: tempo.ticks,
      deltaTime: 0,
      meta: true,
      microsecondsPerBeat: Math.floor(60000000 / tempo.bpm),
      type: "setTempo"
    };
  }
  function encodeTimeSignature(timeSig) {
    return {
      absoluteTime: timeSig.ticks,
      deltaTime: 0,
      denominator: timeSig.timeSignature[1],
      meta: true,
      metronome: 24,
      numerator: timeSig.timeSignature[0],
      thirtyseconds: 8,
      type: "timeSignature"
    };
  }
  function encodeKeySignature(keySig) {
    var keyIndex = Header_1.keySignatureKeys.indexOf(keySig.key);
    return {
      absoluteTime: keySig.ticks,
      deltaTime: 0,
      key: keyIndex + 7,
      meta: true,
      scale: keySig.scale === "major" ? 0 : 1,
      type: "keySignature"
    };
  }
  function encodeText(textEvent) {
    return {
      absoluteTime: textEvent.ticks,
      deltaTime: 0,
      meta: true,
      text: textEvent.text,
      type: textEvent.type
    };
  }
  function encode(midi) {
    var midiData = {
      header: {
        format: 1,
        numTracks: midi.tracks.length + 1,
        ticksPerBeat: midi.header.ppq
      },
      tracks: __spreadArray([
        __spreadArray(__spreadArray(__spreadArray(__spreadArray([
          {
            absoluteTime: 0,
            deltaTime: 0,
            meta: true,
            text: midi.header.name,
            type: "trackName"
          }
        ], midi.header.keySignatures.map(function(keySig) {
          return encodeKeySignature(keySig);
        }), true), midi.header.meta.map(function(e) {
          return encodeText(e);
        }), true), midi.header.tempos.map(function(tempo) {
          return encodeTempo(tempo);
        }), true), midi.header.timeSignatures.map(function(timeSig) {
          return encodeTimeSignature(timeSig);
        }), true)
      ], midi.tracks.map(function(track) {
        return __spreadArray(__spreadArray(__spreadArray([
          encodeTrackName(track.name),
          encodeInstrument(track)
        ], encodeNotes(track), true), encodeControlChanges(track), true), encodePitchBends(track), true);
      }), true)
    };
    midiData.tracks = midiData.tracks.map(function(track) {
      track = track.sort(function(a, b) {
        return a.absoluteTime - b.absoluteTime;
      });
      var lastTime = 0;
      track.forEach(function(note) {
        note.deltaTime = note.absoluteTime - lastTime;
        lastTime = note.absoluteTime;
        delete note.absoluteTime;
      });
      track.push({
        deltaTime: 0,
        meta: true,
        type: "endOfTrack"
      });
      return track;
    });
    return new Uint8Array((0, midi_file_1.writeMidi)(midiData));
  }
  exports.encode = encode;
});

// ../../node_modules/@tonejs/midi/dist/Midi.js
var require_Midi = __commonJS((exports) => {
  var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator = exports && exports.__generator || function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
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
              if (t[2])
                _.ops.pop();
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
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : undefined, done: true };
    }
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Header = exports.Track = exports.Midi = undefined;
  var midi_file_1 = require_midi_file();
  var Header_1 = require_Header();
  var Track_1 = require_Track();
  var Encode_1 = require_Encode();
  var Midi2 = function() {
    function Midi3(midiArray) {
      var _this = this;
      var midiData = null;
      if (midiArray) {
        var midiArrayLike = midiArray instanceof ArrayBuffer ? new Uint8Array(midiArray) : midiArray;
        midiData = (0, midi_file_1.parseMidi)(midiArrayLike);
        midiData.tracks.forEach(function(track) {
          var currentTicks = 0;
          track.forEach(function(event2) {
            currentTicks += event2.deltaTime;
            event2.absoluteTime = currentTicks;
          });
        });
        midiData.tracks = splitTracks(midiData.tracks);
      }
      this.header = new Header_1.Header(midiData);
      this.tracks = [];
      if (midiArray) {
        this.tracks = midiData.tracks.map(function(trackData) {
          return new Track_1.Track(trackData, _this.header);
        });
        if (midiData.header.format === 1 && this.tracks[0].duration === 0) {
          this.tracks.shift();
        }
      }
    }
    Midi3.fromUrl = function(url) {
      return __awaiter2(this, undefined, undefined, function() {
        var response, arrayBuffer;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, fetch(url)];
            case 1:
              response = _a.sent();
              if (!response.ok)
                return [3, 3];
              return [4, response.arrayBuffer()];
            case 2:
              arrayBuffer = _a.sent();
              return [2, new Midi3(arrayBuffer)];
            case 3:
              throw new Error("Could not load '".concat(url, "'"));
          }
        });
      });
    };
    Object.defineProperty(Midi3.prototype, "name", {
      get: function() {
        return this.header.name;
      },
      set: function(n) {
        this.header.name = n;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Midi3.prototype, "duration", {
      get: function() {
        var durations = this.tracks.map(function(t) {
          return t.duration;
        });
        return Math.max.apply(Math, durations);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Midi3.prototype, "durationTicks", {
      get: function() {
        var durationTicks = this.tracks.map(function(t) {
          return t.durationTicks;
        });
        return Math.max.apply(Math, durationTicks);
      },
      enumerable: false,
      configurable: true
    });
    Midi3.prototype.addTrack = function() {
      var track = new Track_1.Track(undefined, this.header);
      this.tracks.push(track);
      return track;
    };
    Midi3.prototype.toArray = function() {
      return (0, Encode_1.encode)(this);
    };
    Midi3.prototype.toJSON = function() {
      return {
        header: this.header.toJSON(),
        tracks: this.tracks.map(function(track) {
          return track.toJSON();
        })
      };
    };
    Midi3.prototype.fromJSON = function(json) {
      var _this = this;
      this.header = new Header_1.Header;
      this.header.fromJSON(json.header);
      this.tracks = json.tracks.map(function(trackJSON) {
        var track = new Track_1.Track(undefined, _this.header);
        track.fromJSON(trackJSON);
        return track;
      });
    };
    Midi3.prototype.clone = function() {
      var midi = new Midi3;
      midi.fromJSON(this.toJSON());
      return midi;
    };
    return Midi3;
  }();
  exports.Midi = Midi2;
  var Track_2 = require_Track();
  Object.defineProperty(exports, "Track", { enumerable: true, get: function() {
    return Track_2.Track;
  } });
  var Header_2 = require_Header();
  Object.defineProperty(exports, "Header", { enumerable: true, get: function() {
    return Header_2.Header;
  } });
  function splitTracks(tracks) {
    var newTracks = [];
    for (var i = 0;i < tracks.length; i++) {
      var defaultTrack = newTracks.length;
      var trackMap = new Map;
      var currentProgram = Array(16).fill(0);
      for (var _i = 0, _a = tracks[i];_i < _a.length; _i++) {
        var event_1 = _a[_i];
        var targetTrack = defaultTrack;
        var channel = event_1.channel;
        if (channel !== undefined) {
          if (event_1.type === "programChange") {
            currentProgram[channel] = event_1.programNumber;
          }
          var program = currentProgram[channel];
          var trackKey = "".concat(program, " ").concat(channel);
          if (trackMap.has(trackKey)) {
            targetTrack = trackMap.get(trackKey);
          } else {
            targetTrack = defaultTrack + trackMap.size;
            trackMap.set(trackKey, targetTrack);
          }
        }
        if (!newTracks[targetTrack]) {
          newTracks.push([]);
        }
        newTracks[targetTrack].push(event_1);
      }
    }
    return newTracks;
  }
});

// ../../node_modules/tone/build/esm/version.js
var version = "15.0.4";

// ../../node_modules/standardized-audio-context/build/es2019/module.js
var import_automation_events2 = __toESM(require_bundle(), 1);

// ../../node_modules/standardized-audio-context/build/es2019/factories/abort-error.js
var createAbortError = () => new DOMException("", "AbortError");

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-active-input-connection-to-audio-node.js
var createAddActiveInputConnectionToAudioNode = (insertElementInSet) => {
  return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
    insertElementInSet(activeInputs[input], [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-audio-node-connections.js
var createAddAudioNodeConnections = (audioNodeConnectionsStore) => {
  return (audioNode, audioNodeRenderer, nativeAudioNode) => {
    const activeInputs = [];
    for (let i = 0;i < nativeAudioNode.numberOfInputs; i += 1) {
      activeInputs.push(new Set);
    }
    audioNodeConnectionsStore.set(audioNode, {
      activeInputs,
      outputs: new Set,
      passiveInputs: new WeakMap,
      renderer: audioNodeRenderer
    });
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-audio-param-connections.js
var createAddAudioParamConnections = (audioParamConnectionsStore) => {
  return (audioParam, audioParamRenderer) => {
    audioParamConnectionsStore.set(audioParam, { activeInputs: new Set, passiveInputs: new WeakMap, renderer: audioParamRenderer });
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/globals.js
var ACTIVE_AUDIO_NODE_STORE = new WeakSet;
var AUDIO_NODE_CONNECTIONS_STORE = new WeakMap;
var AUDIO_NODE_STORE = new WeakMap;
var AUDIO_PARAM_CONNECTIONS_STORE = new WeakMap;
var AUDIO_PARAM_STORE = new WeakMap;
var CONTEXT_STORE = new WeakMap;
var EVENT_LISTENERS = new WeakMap;
var CYCLE_COUNTERS = new WeakMap;
var NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS = new WeakMap;
var NODE_TO_PROCESSOR_MAPS = new WeakMap;

// ../../node_modules/standardized-audio-context/build/es2019/helpers/is-constructible.js
var handler = {
  construct() {
    return handler;
  }
};
var isConstructible = (constructible) => {
  try {
    const proxy = new Proxy(constructible, handler);
    new proxy;
  } catch {
    return false;
  }
  return true;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/split-import-statements.js
var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/;
var splitImportStatements = (source, url) => {
  const importStatements = [];
  let sourceWithoutImportStatements = source.replace(/^[\s]+/, "");
  let result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
  while (result !== null) {
    const unresolvedUrl = result[1].slice(1, -1);
    const importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, "").replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
    importStatements.push(importStatementWithResolvedUrl);
    sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, "");
    result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
  }
  return [importStatements.join(";"), sourceWithoutImportStatements];
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-audio-worklet-module.js
var verifyParameterDescriptors = (parameterDescriptors) => {
  if (parameterDescriptors !== undefined && !Array.isArray(parameterDescriptors)) {
    throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
  }
};
var verifyProcessorCtor = (processorCtor) => {
  if (!isConstructible(processorCtor)) {
    throw new TypeError("The given value for processorCtor should be a constructor.");
  }
  if (processorCtor.prototype === null || typeof processorCtor.prototype !== "object") {
    throw new TypeError("The given value for processorCtor should have a prototype.");
  }
};
var createAddAudioWorkletModule = (cacheTestResult, createNotSupportedError, evaluateSource, exposeCurrentFrameAndCurrentTime, fetchSource, getNativeContext, getOrCreateBackupOfflineAudioContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, ongoingRequests, resolvedRequests, testAudioWorkletProcessorPostMessageSupport, window2) => {
  let index = 0;
  return (context, moduleURL, options = { credentials: "omit" }) => {
    const resolvedRequestsOfContext = resolvedRequests.get(context);
    if (resolvedRequestsOfContext !== undefined && resolvedRequestsOfContext.has(moduleURL)) {
      return Promise.resolve();
    }
    const ongoingRequestsOfContext = ongoingRequests.get(context);
    if (ongoingRequestsOfContext !== undefined) {
      const promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);
      if (promiseOfOngoingRequest !== undefined) {
        return promiseOfOngoingRequest;
      }
    }
    const nativeContext = getNativeContext(context);
    const promise = nativeContext.audioWorklet === undefined ? fetchSource(moduleURL).then(([source, absoluteUrl]) => {
      const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
      const wrappedSource = `${importStatements};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${sourceWithoutImportStatements}
})})(window,'_AWGS')`;
      return evaluateSource(wrappedSource);
    }).then(() => {
      const evaluateAudioWorkletGlobalScope = window2._AWGS.pop();
      if (evaluateAudioWorkletGlobalScope === undefined) {
        throw new SyntaxError;
      }
      exposeCurrentFrameAndCurrentTime(nativeContext.currentTime, nativeContext.sampleRate, () => evaluateAudioWorkletGlobalScope(class AudioWorkletProcessor {
      }, undefined, (name, processorCtor) => {
        if (name.trim() === "") {
          throw createNotSupportedError();
        }
        const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
        if (nodeNameToProcessorConstructorMap !== undefined) {
          if (nodeNameToProcessorConstructorMap.has(name)) {
            throw createNotSupportedError();
          }
          verifyProcessorCtor(processorCtor);
          verifyParameterDescriptors(processorCtor.parameterDescriptors);
          nodeNameToProcessorConstructorMap.set(name, processorCtor);
        } else {
          verifyProcessorCtor(processorCtor);
          verifyParameterDescriptors(processorCtor.parameterDescriptors);
          NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(nativeContext, new Map([[name, processorCtor]]));
        }
      }, nativeContext.sampleRate, undefined, undefined));
    }) : Promise.all([
      fetchSource(moduleURL),
      Promise.resolve(cacheTestResult(testAudioWorkletProcessorPostMessageSupport, testAudioWorkletProcessorPostMessageSupport))
    ]).then(([[source, absoluteUrl], isSupportingPostMessage]) => {
      const currentIndex = index + 1;
      index = currentIndex;
      const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
      const patchedAudioWorkletProcessor = isSupportingPostMessage ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}";
      const memberDefinition = isSupportingPostMessage ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));";
      const bufferRegistration = isSupportingPostMessage ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));";
      const wrappedSource = `${importStatements};((AudioWorkletProcessor,registerProcessor)=>{${sourceWithoutImportStatements}
})(${patchedAudioWorkletProcessor},(n,p)=>registerProcessor(n,class extends p{${memberDefinition}process(i,o,p){${bufferRegistration}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${currentIndex}',class extends AudioWorkletProcessor{process(){return !1}})`;
      const blob = new Blob([wrappedSource], { type: "application/javascript; charset=utf-8" });
      const url = URL.createObjectURL(blob);
      return nativeContext.audioWorklet.addModule(url, options).then(() => {
        if (isNativeOfflineAudioContext(nativeContext)) {
          return nativeContext;
        }
        const backupOfflineAudioContext = getOrCreateBackupOfflineAudioContext(nativeContext);
        return backupOfflineAudioContext.audioWorklet.addModule(url, options).then(() => backupOfflineAudioContext);
      }).then((nativeContextOrBackupOfflineAudioContext) => {
        if (nativeAudioWorkletNodeConstructor === null) {
          throw new SyntaxError;
        }
        try {
          new nativeAudioWorkletNodeConstructor(nativeContextOrBackupOfflineAudioContext, `__sac${currentIndex}`);
        } catch {
          throw new SyntaxError;
        }
      }).finally(() => URL.revokeObjectURL(url));
    });
    if (ongoingRequestsOfContext === undefined) {
      ongoingRequests.set(context, new Map([[moduleURL, promise]]));
    } else {
      ongoingRequestsOfContext.set(moduleURL, promise);
    }
    promise.then(() => {
      const updatedResolvedRequestsOfContext = resolvedRequests.get(context);
      if (updatedResolvedRequestsOfContext === undefined) {
        resolvedRequests.set(context, new Set([moduleURL]));
      } else {
        updatedResolvedRequestsOfContext.add(moduleURL);
      }
    }).finally(() => {
      const updatedOngoingRequestsOfContext = ongoingRequests.get(context);
      if (updatedOngoingRequestsOfContext !== undefined) {
        updatedOngoingRequestsOfContext.delete(moduleURL);
      }
    });
    return promise;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-value-for-key.js
var getValueForKey = (map, key) => {
  const value = map.get(key);
  if (value === undefined) {
    throw new Error("A value with the given key could not be found.");
  }
  return value;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/pick-element-from-set.js
var pickElementFromSet = (set, predicate) => {
  const matchingElements = Array.from(set).filter(predicate);
  if (matchingElements.length > 1) {
    throw Error("More than one element was found.");
  }
  if (matchingElements.length === 0) {
    throw Error("No element was found.");
  }
  const [matchingElement] = matchingElements;
  set.delete(matchingElement);
  return matchingElement;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-node.js
var deletePassiveInputConnectionToAudioNode = (passiveInputs, source, output, input) => {
  const passiveInputConnections = getValueForKey(passiveInputs, source);
  const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input);
  if (passiveInputConnections.size === 0) {
    passiveInputs.delete(source);
  }
  return matchingConnection;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-event-listeners-of-audio-node.js
var getEventListenersOfAudioNode = (audioNode) => {
  return getValueForKey(EVENT_LISTENERS, audioNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-active.js
var setInternalStateToActive = (audioNode) => {
  if (ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
    throw new Error("The AudioNode is already stored.");
  }
  ACTIVE_AUDIO_NODE_STORE.add(audioNode);
  getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(true));
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/audio-worklet-node.js
var isAudioWorkletNode = (audioNode) => {
  return "port" in audioNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive.js
var setInternalStateToPassive = (audioNode) => {
  if (!ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
    throw new Error("The AudioNode is not stored.");
  }
  ACTIVE_AUDIO_NODE_STORE.delete(audioNode);
  getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(false));
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive-when-necessary.js
var setInternalStateToPassiveWhenNecessary = (audioNode, activeInputs) => {
  if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
    setInternalStateToPassive(audioNode);
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-connection-to-audio-node.js
var createAddConnectionToAudioNode = (addActiveInputConnectionToAudioNode, addPassiveInputConnectionToAudioNode, connectNativeAudioNodeToNativeAudioNode, deleteActiveInputConnectionToAudioNode, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getAudioNodeTailTime, getEventListenersOfAudioNode2, getNativeAudioNode, insertElementInSet, isActiveAudioNode, isPartOfACycle, isPassiveAudioNode) => {
  const tailTimeTimeoutIds = new WeakMap;
  return (source, destination, output, input, isOffline) => {
    const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
    const { outputs } = getAudioNodeConnections(source);
    const eventListeners = getEventListenersOfAudioNode2(source);
    const eventListener = (isActive) => {
      const nativeDestinationAudioNode = getNativeAudioNode(destination);
      const nativeSourceAudioNode = getNativeAudioNode(source);
      if (isActive) {
        const partialConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
        addActiveInputConnectionToAudioNode(activeInputs, source, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          connectNativeAudioNodeToNativeAudioNode(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
        }
        if (isPassiveAudioNode(destination)) {
          setInternalStateToActive(destination);
        }
      } else {
        const partialConnection = deleteActiveInputConnectionToAudioNode(activeInputs, source, output, input);
        addPassiveInputConnectionToAudioNode(passiveInputs, input, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          disconnectNativeAudioNodeFromNativeAudioNode(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
        }
        const tailTime = getAudioNodeTailTime(destination);
        if (tailTime === 0) {
          if (isActiveAudioNode(destination)) {
            setInternalStateToPassiveWhenNecessary(destination, activeInputs);
          }
        } else {
          const tailTimeTimeoutId = tailTimeTimeoutIds.get(destination);
          if (tailTimeTimeoutId !== undefined) {
            clearTimeout(tailTimeTimeoutId);
          }
          tailTimeTimeoutIds.set(destination, setTimeout(() => {
            if (isActiveAudioNode(destination)) {
              setInternalStateToPassiveWhenNecessary(destination, activeInputs);
            }
          }, tailTime * 1000));
        }
      }
    };
    if (insertElementInSet(outputs, [destination, output, input], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output && outputConnection[2] === input, true)) {
      eventListeners.add(eventListener);
      if (isActiveAudioNode(source)) {
        addActiveInputConnectionToAudioNode(activeInputs, source, [output, input, eventListener], true);
      } else {
        addPassiveInputConnectionToAudioNode(passiveInputs, input, [source, output, eventListener], true);
      }
      return true;
    }
    return false;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-passive-input-connection-to-audio-node.js
var createAddPassiveInputConnectionToAudioNode = (insertElementInSet) => {
  return (passiveInputs, input, [source, output, eventListener], ignoreDuplicates) => {
    const passiveInputConnections = passiveInputs.get(source);
    if (passiveInputConnections === undefined) {
      passiveInputs.set(source, new Set([[output, input, eventListener]]));
    } else {
      insertElementInSet(passiveInputConnections, [output, input, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input, ignoreDuplicates);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-silent-connection.js
var createAddSilentConnection = (createNativeGainNode) => {
  return (nativeContext, nativeAudioScheduledSourceNode) => {
    const nativeGainNode = createNativeGainNode(nativeContext, {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      gain: 0
    });
    nativeAudioScheduledSourceNode.connect(nativeGainNode).connect(nativeContext.destination);
    const disconnect = () => {
      nativeAudioScheduledSourceNode.removeEventListener("ended", disconnect);
      nativeAudioScheduledSourceNode.disconnect(nativeGainNode);
      nativeGainNode.disconnect();
    };
    nativeAudioScheduledSourceNode.addEventListener("ended", disconnect);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/add-unrendered-audio-worklet-node.js
var createAddUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes) => {
  return (nativeContext, audioWorkletNode) => {
    getUnrenderedAudioWorkletNodes(nativeContext).add(audioWorkletNode);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/analyser-node-constructor.js
var DEFAULT_OPTIONS = {
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  fftSize: 2048,
  maxDecibels: -30,
  minDecibels: -100,
  smoothingTimeConstant: 0.8
};
var createAnalyserNodeConstructor = (audionNodeConstructor, createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, getNativeContext, isNativeOfflineAudioContext) => {
  return class AnalyserNode extends audionNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
      const nativeAnalyserNode = createNativeAnalyserNode(nativeContext, mergedOptions);
      const analyserNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createAnalyserNodeRenderer() : null;
      super(context, false, nativeAnalyserNode, analyserNodeRenderer);
      this._nativeAnalyserNode = nativeAnalyserNode;
    }
    get fftSize() {
      return this._nativeAnalyserNode.fftSize;
    }
    set fftSize(value) {
      this._nativeAnalyserNode.fftSize = value;
    }
    get frequencyBinCount() {
      return this._nativeAnalyserNode.frequencyBinCount;
    }
    get maxDecibels() {
      return this._nativeAnalyserNode.maxDecibels;
    }
    set maxDecibels(value) {
      const maxDecibels = this._nativeAnalyserNode.maxDecibels;
      this._nativeAnalyserNode.maxDecibels = value;
      if (!(value > this._nativeAnalyserNode.minDecibels)) {
        this._nativeAnalyserNode.maxDecibels = maxDecibels;
        throw createIndexSizeError();
      }
    }
    get minDecibels() {
      return this._nativeAnalyserNode.minDecibels;
    }
    set minDecibels(value) {
      const minDecibels = this._nativeAnalyserNode.minDecibels;
      this._nativeAnalyserNode.minDecibels = value;
      if (!(this._nativeAnalyserNode.maxDecibels > value)) {
        this._nativeAnalyserNode.minDecibels = minDecibels;
        throw createIndexSizeError();
      }
    }
    get smoothingTimeConstant() {
      return this._nativeAnalyserNode.smoothingTimeConstant;
    }
    set smoothingTimeConstant(value) {
      this._nativeAnalyserNode.smoothingTimeConstant = value;
    }
    getByteFrequencyData(array) {
      this._nativeAnalyserNode.getByteFrequencyData(array);
    }
    getByteTimeDomainData(array) {
      this._nativeAnalyserNode.getByteTimeDomainData(array);
    }
    getFloatFrequencyData(array) {
      this._nativeAnalyserNode.getFloatFrequencyData(array);
    }
    getFloatTimeDomainData(array) {
      this._nativeAnalyserNode.getFloatTimeDomainData(array);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/is-owned-by-context.js
var isOwnedByContext = (nativeAudioNode, nativeContext) => {
  return nativeAudioNode.context === nativeContext;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/analyser-node-renderer-factory.js
var createAnalyserNodeRendererFactory = (createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeAnalyserNodes = new WeakMap;
    const createAnalyserNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeAnalyserNode = getNativeAudioNode(proxy);
      const nativeAnalyserNodeIsOwnedByContext = isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext);
      if (!nativeAnalyserNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeAnalyserNode.channelCount,
          channelCountMode: nativeAnalyserNode.channelCountMode,
          channelInterpretation: nativeAnalyserNode.channelInterpretation,
          fftSize: nativeAnalyserNode.fftSize,
          maxDecibels: nativeAnalyserNode.maxDecibels,
          minDecibels: nativeAnalyserNode.minDecibels,
          smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
        };
        nativeAnalyserNode = createNativeAnalyserNode(nativeOfflineAudioContext, options);
      }
      renderedNativeAnalyserNodes.set(nativeOfflineAudioContext, nativeAnalyserNode);
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAnalyserNode);
      return nativeAnalyserNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAnalyserNode = renderedNativeAnalyserNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAnalyserNode !== undefined) {
          return Promise.resolve(renderedNativeAnalyserNode);
        }
        return createAnalyserNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support.js
var testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer) => {
  try {
    nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
  } catch {
    return false;
  }
  return true;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/index-size-error.js
var createIndexSizeError = () => new DOMException("", "IndexSizeError");

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-get-channel-data-method.js
var wrapAudioBufferGetChannelDataMethod = (audioBuffer) => {
  audioBuffer.getChannelData = ((getChannelData) => {
    return (channel) => {
      try {
        return getChannelData.call(audioBuffer, channel);
      } catch (err) {
        if (err.code === 12) {
          throw createIndexSizeError();
        }
        throw err;
      }
    };
  })(audioBuffer.getChannelData);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-constructor.js
var DEFAULT_OPTIONS2 = {
  numberOfChannels: 1
};
var createAudioBufferConstructor = (audioBufferStore, cacheTestResult, createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, testNativeAudioBufferConstructorSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds) => {
  let nativeOfflineAudioContext = null;
  return class AudioBuffer {
    constructor(options) {
      if (nativeOfflineAudioContextConstructor === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS2, ...options };
      if (nativeOfflineAudioContext === null) {
        nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
      }
      const audioBuffer = nativeAudioBufferConstructor !== null && cacheTestResult(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport) ? new nativeAudioBufferConstructor({ length, numberOfChannels, sampleRate }) : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate);
      if (audioBuffer.numberOfChannels === 0) {
        throw createNotSupportedError();
      }
      if (typeof audioBuffer.copyFromChannel !== "function") {
        wrapAudioBufferCopyChannelMethods(audioBuffer);
        wrapAudioBufferGetChannelDataMethod(audioBuffer);
      } else if (!cacheTestResult(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer))) {
        wrapAudioBufferCopyChannelMethodsOutOfBounds(audioBuffer);
      }
      audioBufferStore.add(audioBuffer);
      return audioBuffer;
    }
    static [Symbol.hasInstance](instance) {
      return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === AudioBuffer.prototype || audioBufferStore.has(instance);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/constants.js
var MOST_NEGATIVE_SINGLE_FLOAT = -340282346638528860000000000000000000000;
var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

// ../../node_modules/standardized-audio-context/build/es2019/helpers/is-active-audio-node.js
var isActiveAudioNode = (audioNode) => ACTIVE_AUDIO_NODE_STORE.has(audioNode);

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-constructor.js
var DEFAULT_OPTIONS3 = {
  buffer: null,
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  loop: false,
  loopEnd: 0,
  loopStart: 0,
  playbackRate: 1
};
var createAudioBufferSourceNodeConstructor = (audioNodeConstructor, createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener) => {
  return class AudioBufferSourceNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS3, ...options };
      const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer() : null;
      super(context, false, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer);
      this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
      this._isBufferNullified = false;
      this._isBufferSet = mergedOptions.buffer !== null;
      this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
      this._onended = null;
      this._playbackRate = createAudioParam(this, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
    }
    get buffer() {
      if (this._isBufferNullified) {
        return null;
      }
      return this._nativeAudioBufferSourceNode.buffer;
    }
    set buffer(value) {
      this._nativeAudioBufferSourceNode.buffer = value;
      if (value !== null) {
        if (this._isBufferSet) {
          throw createInvalidStateError();
        }
        this._isBufferSet = true;
      }
    }
    get loop() {
      return this._nativeAudioBufferSourceNode.loop;
    }
    set loop(value) {
      this._nativeAudioBufferSourceNode.loop = value;
    }
    get loopEnd() {
      return this._nativeAudioBufferSourceNode.loopEnd;
    }
    set loopEnd(value) {
      this._nativeAudioBufferSourceNode.loopEnd = value;
    }
    get loopStart() {
      return this._nativeAudioBufferSourceNode.loopStart;
    }
    set loopStart(value) {
      this._nativeAudioBufferSourceNode.loopStart = value;
    }
    get onended() {
      return this._onended;
    }
    set onended(value) {
      const wrappedListener = typeof value === "function" ? wrapEventListener(this, value) : null;
      this._nativeAudioBufferSourceNode.onended = wrappedListener;
      const nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
      this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
    }
    get playbackRate() {
      return this._playbackRate;
    }
    start(when = 0, offset = 0, duration) {
      this._nativeAudioBufferSourceNode.start(when, offset, duration);
      if (this._audioBufferSourceNodeRenderer !== null) {
        this._audioBufferSourceNodeRenderer.start = duration === undefined ? [when, offset] : [when, offset, duration];
      }
      if (this.context.state !== "closed") {
        setInternalStateToActive(this);
        const resetInternalStateToPassive = () => {
          this._nativeAudioBufferSourceNode.removeEventListener("ended", resetInternalStateToPassive);
          if (isActiveAudioNode(this)) {
            setInternalStateToPassive(this);
          }
        };
        this._nativeAudioBufferSourceNode.addEventListener("ended", resetInternalStateToPassive);
      }
    }
    stop(when = 0) {
      this._nativeAudioBufferSourceNode.stop(when);
      if (this._audioBufferSourceNodeRenderer !== null) {
        this._audioBufferSourceNodeRenderer.stop = when;
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-renderer-factory.js
var createAudioBufferSourceNodeRendererFactory = (connectAudioParam, createNativeAudioBufferSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeAudioBufferSourceNodes = new WeakMap;
    let start = null;
    let stop = null;
    const createAudioBufferSourceNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeAudioBufferSourceNode = getNativeAudioNode(proxy);
      const nativeAudioBufferSourceNodeIsOwnedByContext = isOwnedByContext(nativeAudioBufferSourceNode, nativeOfflineAudioContext);
      if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
        const options = {
          buffer: nativeAudioBufferSourceNode.buffer,
          channelCount: nativeAudioBufferSourceNode.channelCount,
          channelCountMode: nativeAudioBufferSourceNode.channelCountMode,
          channelInterpretation: nativeAudioBufferSourceNode.channelInterpretation,
          loop: nativeAudioBufferSourceNode.loop,
          loopEnd: nativeAudioBufferSourceNode.loopEnd,
          loopStart: nativeAudioBufferSourceNode.loopStart,
          playbackRate: nativeAudioBufferSourceNode.playbackRate.value
        };
        nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext, options);
        if (start !== null) {
          nativeAudioBufferSourceNode.start(...start);
        }
        if (stop !== null) {
          nativeAudioBufferSourceNode.stop(stop);
        }
      }
      renderedNativeAudioBufferSourceNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode);
      if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);
      return nativeAudioBufferSourceNode;
    };
    return {
      set start(value) {
        start = value;
      },
      set stop(value) {
        stop = value;
      },
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioBufferSourceNode = renderedNativeAudioBufferSourceNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioBufferSourceNode !== undefined) {
          return Promise.resolve(renderedNativeAudioBufferSourceNode);
        }
        return createAudioBufferSourceNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/audio-buffer-source-node.js
var isAudioBufferSourceNode = (audioNode) => {
  return "playbackRate" in audioNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/biquad-filter-node.js
var isBiquadFilterNode = (audioNode) => {
  return "frequency" in audioNode && "gain" in audioNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/constant-source-node.js
var isConstantSourceNode = (audioNode) => {
  return "offset" in audioNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/gain-node.js
var isGainNode = (audioNode) => {
  return !("frequency" in audioNode) && "gain" in audioNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/oscillator-node.js
var isOscillatorNode = (audioNode) => {
  return "detune" in audioNode && "frequency" in audioNode && !("gain" in audioNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/stereo-panner-node.js
var isStereoPannerNode = (audioNode) => {
  return "pan" in audioNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-audio-node-connections.js
var getAudioNodeConnections = (audioNode) => {
  return getValueForKey(AUDIO_NODE_CONNECTIONS_STORE, audioNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-audio-param-connections.js
var getAudioParamConnections = (audioParam) => {
  return getValueForKey(AUDIO_PARAM_CONNECTIONS_STORE, audioParam);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/deactivate-active-audio-node-input-connections.js
var deactivateActiveAudioNodeInputConnections = (audioNode, trace) => {
  const { activeInputs } = getAudioNodeConnections(audioNode);
  activeInputs.forEach((connections) => connections.forEach(([source]) => {
    if (!trace.includes(audioNode)) {
      deactivateActiveAudioNodeInputConnections(source, [...trace, audioNode]);
    }
  }));
  const audioParams = isAudioBufferSourceNode(audioNode) ? [
    audioNode.playbackRate
  ] : isAudioWorkletNode(audioNode) ? Array.from(audioNode.parameters.values()) : isBiquadFilterNode(audioNode) ? [audioNode.Q, audioNode.detune, audioNode.frequency, audioNode.gain] : isConstantSourceNode(audioNode) ? [audioNode.offset] : isGainNode(audioNode) ? [audioNode.gain] : isOscillatorNode(audioNode) ? [audioNode.detune, audioNode.frequency] : isStereoPannerNode(audioNode) ? [audioNode.pan] : [];
  for (const audioParam of audioParams) {
    const audioParamConnections = getAudioParamConnections(audioParam);
    if (audioParamConnections !== undefined) {
      audioParamConnections.activeInputs.forEach(([source]) => deactivateActiveAudioNodeInputConnections(source, trace));
    }
  }
  if (isActiveAudioNode(audioNode)) {
    setInternalStateToPassive(audioNode);
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/deactivate-audio-graph.js
var deactivateAudioGraph = (context) => {
  deactivateActiveAudioNodeInputConnections(context.destination, []);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/is-valid-latency-hint.js
var isValidLatencyHint = (latencyHint) => {
  return latencyHint === undefined || typeof latencyHint === "number" || typeof latencyHint === "string" && (latencyHint === "balanced" || latencyHint === "interactive" || latencyHint === "playback");
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-context-constructor.js
var createAudioContextConstructor = (baseAudioContextConstructor, createInvalidStateError, createNotSupportedError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioDestinationNodeConstructor, mediaStreamAudioSourceNodeConstructor, mediaStreamTrackAudioSourceNodeConstructor, nativeAudioContextConstructor) => {
  return class AudioContext extends baseAudioContextConstructor {
    constructor(options = {}) {
      if (nativeAudioContextConstructor === null) {
        throw new Error("Missing the native AudioContext constructor.");
      }
      let nativeAudioContext;
      try {
        nativeAudioContext = new nativeAudioContextConstructor(options);
      } catch (err) {
        if (err.code === 12 && err.message === "sampleRate is not in range") {
          throw createNotSupportedError();
        }
        throw err;
      }
      if (nativeAudioContext === null) {
        throw createUnknownError();
      }
      if (!isValidLatencyHint(options.latencyHint)) {
        throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
      }
      if (options.sampleRate !== undefined && nativeAudioContext.sampleRate !== options.sampleRate) {
        throw createNotSupportedError();
      }
      super(nativeAudioContext, 2);
      const { latencyHint } = options;
      const { sampleRate } = nativeAudioContext;
      this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === undefined ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
      this._nativeAudioContext = nativeAudioContext;
      if (nativeAudioContextConstructor.name === "webkitAudioContext") {
        this._nativeGainNode = nativeAudioContext.createGain();
        this._nativeOscillatorNode = nativeAudioContext.createOscillator();
        this._nativeGainNode.gain.value = 0.0000000000000000000000000000000000001;
        this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
        this._nativeOscillatorNode.start();
      } else {
        this._nativeGainNode = null;
        this._nativeOscillatorNode = null;
      }
      this._state = null;
      if (nativeAudioContext.state === "running") {
        this._state = "suspended";
        const revokeState = () => {
          if (this._state === "suspended") {
            this._state = null;
          }
          nativeAudioContext.removeEventListener("statechange", revokeState);
        };
        nativeAudioContext.addEventListener("statechange", revokeState);
      }
    }
    get baseLatency() {
      return this._baseLatency;
    }
    get state() {
      return this._state !== null ? this._state : this._nativeAudioContext.state;
    }
    close() {
      if (this.state === "closed") {
        return this._nativeAudioContext.close().then(() => {
          throw createInvalidStateError();
        });
      }
      if (this._state === "suspended") {
        this._state = null;
      }
      return this._nativeAudioContext.close().then(() => {
        if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
          this._nativeOscillatorNode.stop();
          this._nativeGainNode.disconnect();
          this._nativeOscillatorNode.disconnect();
        }
        deactivateAudioGraph(this);
      });
    }
    createMediaElementSource(mediaElement) {
      return new mediaElementAudioSourceNodeConstructor(this, { mediaElement });
    }
    createMediaStreamDestination() {
      return new mediaStreamAudioDestinationNodeConstructor(this);
    }
    createMediaStreamSource(mediaStream) {
      return new mediaStreamAudioSourceNodeConstructor(this, { mediaStream });
    }
    createMediaStreamTrackSource(mediaStreamTrack) {
      return new mediaStreamTrackAudioSourceNodeConstructor(this, { mediaStreamTrack });
    }
    resume() {
      if (this._state === "suspended") {
        return new Promise((resolve, reject) => {
          const resolvePromise = () => {
            this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
            if (this._nativeAudioContext.state === "running") {
              resolve();
            } else {
              this.resume().then(resolve, reject);
            }
          };
          this._nativeAudioContext.addEventListener("statechange", resolvePromise);
        });
      }
      return this._nativeAudioContext.resume().catch((err) => {
        if (err === undefined || err.code === 15) {
          throw createInvalidStateError();
        }
        throw err;
      });
    }
    suspend() {
      return this._nativeAudioContext.suspend().catch((err) => {
        if (err === undefined) {
          throw createInvalidStateError();
        }
        throw err;
      });
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-constructor.js
var createAudioDestinationNodeConstructor = (audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError2, createInvalidStateError, createNativeAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext, renderInputsOfAudioNode) => {
  return class AudioDestinationNode extends audioNodeConstructor {
    constructor(context, channelCount) {
      const nativeContext = getNativeContext(context);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount, isOffline);
      const audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer(renderInputsOfAudioNode) : null;
      super(context, false, nativeAudioDestinationNode, audioDestinationNodeRenderer);
      this._isNodeOfNativeOfflineAudioContext = isOffline;
      this._nativeAudioDestinationNode = nativeAudioDestinationNode;
    }
    get channelCount() {
      return this._nativeAudioDestinationNode.channelCount;
    }
    set channelCount(value) {
      if (this._isNodeOfNativeOfflineAudioContext) {
        throw createInvalidStateError();
      }
      if (value > this._nativeAudioDestinationNode.maxChannelCount) {
        throw createIndexSizeError2();
      }
      this._nativeAudioDestinationNode.channelCount = value;
    }
    get channelCountMode() {
      return this._nativeAudioDestinationNode.channelCountMode;
    }
    set channelCountMode(value) {
      if (this._isNodeOfNativeOfflineAudioContext) {
        throw createInvalidStateError();
      }
      this._nativeAudioDestinationNode.channelCountMode = value;
    }
    get maxChannelCount() {
      return this._nativeAudioDestinationNode.maxChannelCount;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-renderer-factory.js
var createAudioDestinationNodeRenderer = (renderInputsOfAudioNode) => {
  const renderedNativeAudioDestinationNodes = new WeakMap;
  const createAudioDestinationNode = async (proxy, nativeOfflineAudioContext) => {
    const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
    renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);
    await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);
    return nativeAudioDestinationNode;
  };
  return {
    render(proxy, nativeOfflineAudioContext) {
      const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);
      if (renderedNativeAudioDestinationNode !== undefined) {
        return Promise.resolve(renderedNativeAudioDestinationNode);
      }
      return createAudioDestinationNode(proxy, nativeOfflineAudioContext);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-listener-factory.js
var createAudioListenerFactory = (createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, createNotSupportedError, getFirstSample, isNativeOfflineAudioContext, overwriteAccessors) => {
  return (context, nativeContext) => {
    const nativeListener = nativeContext.listener;
    const createFakeAudioParams = () => {
      const buffer = new Float32Array(1);
      const channelMergerNode = createNativeChannelMergerNode(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: 9
      });
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      let isScriptProcessorNodeCreated = false;
      let lastOrientation = [0, 0, -1, 0, 1, 0];
      let lastPosition = [0, 0, 0];
      const createScriptProcessorNode = () => {
        if (isScriptProcessorNodeCreated) {
          return;
        }
        isScriptProcessorNodeCreated = true;
        const scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 9, 0);
        scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
          const orientation = [
            getFirstSample(inputBuffer, buffer, 0),
            getFirstSample(inputBuffer, buffer, 1),
            getFirstSample(inputBuffer, buffer, 2),
            getFirstSample(inputBuffer, buffer, 3),
            getFirstSample(inputBuffer, buffer, 4),
            getFirstSample(inputBuffer, buffer, 5)
          ];
          if (orientation.some((value, index) => value !== lastOrientation[index])) {
            nativeListener.setOrientation(...orientation);
            lastOrientation = orientation;
          }
          const positon = [
            getFirstSample(inputBuffer, buffer, 6),
            getFirstSample(inputBuffer, buffer, 7),
            getFirstSample(inputBuffer, buffer, 8)
          ];
          if (positon.some((value, index) => value !== lastPosition[index])) {
            nativeListener.setPosition(...positon);
            lastPosition = positon;
          }
        };
        channelMergerNode.connect(scriptProcessorNode);
      };
      const createSetOrientation = (index) => (value) => {
        if (value !== lastOrientation[index]) {
          lastOrientation[index] = value;
          nativeListener.setOrientation(...lastOrientation);
        }
      };
      const createSetPosition = (index) => (value) => {
        if (value !== lastPosition[index]) {
          lastPosition[index] = value;
          nativeListener.setPosition(...lastPosition);
        }
      };
      const createFakeAudioParam = (input, initialValue, setValue) => {
        const constantSourceNode = createNativeConstantSourceNode(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          offset: initialValue
        });
        constantSourceNode.connect(channelMergerNode, 0, input);
        constantSourceNode.start();
        Object.defineProperty(constantSourceNode.offset, "defaultValue", {
          get() {
            return initialValue;
          }
        });
        const audioParam = createAudioParam({ context }, isOffline, constantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        overwriteAccessors(audioParam, "value", (get) => () => get.call(audioParam), (set) => (value) => {
          try {
            set.call(audioParam, value);
          } catch (err) {
            if (err.code !== 9) {
              throw err;
            }
          }
          createScriptProcessorNode();
          if (isOffline) {
            setValue(value);
          }
        });
        audioParam.cancelAndHoldAtTime = ((cancelAndHoldAtTime) => {
          if (isOffline) {
            return () => {
              throw createNotSupportedError();
            };
          }
          return (...args) => {
            const value = cancelAndHoldAtTime.apply(audioParam, args);
            createScriptProcessorNode();
            return value;
          };
        })(audioParam.cancelAndHoldAtTime);
        audioParam.cancelScheduledValues = ((cancelScheduledValues) => {
          if (isOffline) {
            return () => {
              throw createNotSupportedError();
            };
          }
          return (...args) => {
            const value = cancelScheduledValues.apply(audioParam, args);
            createScriptProcessorNode();
            return value;
          };
        })(audioParam.cancelScheduledValues);
        audioParam.exponentialRampToValueAtTime = ((exponentialRampToValueAtTime) => {
          if (isOffline) {
            return () => {
              throw createNotSupportedError();
            };
          }
          return (...args) => {
            const value = exponentialRampToValueAtTime.apply(audioParam, args);
            createScriptProcessorNode();
            return value;
          };
        })(audioParam.exponentialRampToValueAtTime);
        audioParam.linearRampToValueAtTime = ((linearRampToValueAtTime) => {
          if (isOffline) {
            return () => {
              throw createNotSupportedError();
            };
          }
          return (...args) => {
            const value = linearRampToValueAtTime.apply(audioParam, args);
            createScriptProcessorNode();
            return value;
          };
        })(audioParam.linearRampToValueAtTime);
        audioParam.setTargetAtTime = ((setTargetAtTime) => {
          if (isOffline) {
            return () => {
              throw createNotSupportedError();
            };
          }
          return (...args) => {
            const value = setTargetAtTime.apply(audioParam, args);
            createScriptProcessorNode();
            return value;
          };
        })(audioParam.setTargetAtTime);
        audioParam.setValueAtTime = ((setValueAtTime) => {
          if (isOffline) {
            return () => {
              throw createNotSupportedError();
            };
          }
          return (...args) => {
            const value = setValueAtTime.apply(audioParam, args);
            createScriptProcessorNode();
            return value;
          };
        })(audioParam.setValueAtTime);
        audioParam.setValueCurveAtTime = ((setValueCurveAtTime) => {
          if (isOffline) {
            return () => {
              throw createNotSupportedError();
            };
          }
          return (...args) => {
            const value = setValueCurveAtTime.apply(audioParam, args);
            createScriptProcessorNode();
            return value;
          };
        })(audioParam.setValueCurveAtTime);
        return audioParam;
      };
      return {
        forwardX: createFakeAudioParam(0, 0, createSetOrientation(0)),
        forwardY: createFakeAudioParam(1, 0, createSetOrientation(1)),
        forwardZ: createFakeAudioParam(2, -1, createSetOrientation(2)),
        positionX: createFakeAudioParam(6, 0, createSetPosition(0)),
        positionY: createFakeAudioParam(7, 0, createSetPosition(1)),
        positionZ: createFakeAudioParam(8, 0, createSetPosition(2)),
        upX: createFakeAudioParam(3, 0, createSetOrientation(3)),
        upY: createFakeAudioParam(4, 1, createSetOrientation(4)),
        upZ: createFakeAudioParam(5, 0, createSetOrientation(5))
      };
    };
    const { forwardX, forwardY, forwardZ, positionX, positionY, positionZ, upX, upY, upZ } = nativeListener.forwardX === undefined ? createFakeAudioParams() : nativeListener;
    return {
      get forwardX() {
        return forwardX;
      },
      get forwardY() {
        return forwardY;
      },
      get forwardZ() {
        return forwardZ;
      },
      get positionX() {
        return positionX;
      },
      get positionY() {
        return positionY;
      },
      get positionZ() {
        return positionZ;
      },
      get upX() {
        return upX;
      },
      get upY() {
        return upY;
      },
      get upZ() {
        return upZ;
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/audio-node.js
var isAudioNode = (audioNodeOrAudioParam) => {
  return "context" in audioNodeOrAudioParam;
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/audio-node-output-connection.js
var isAudioNodeOutputConnection = (outputConnection) => {
  return isAudioNode(outputConnection[0]);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/insert-element-in-set.js
var insertElementInSet = (set, element, predicate, ignoreDuplicates) => {
  for (const lmnt of set) {
    if (predicate(lmnt)) {
      if (ignoreDuplicates) {
        return false;
      }
      throw Error("The set contains at least one similar element.");
    }
  }
  set.add(element);
  return true;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/add-active-input-connection-to-audio-param.js
var addActiveInputConnectionToAudioParam = (activeInputs, source, [output, eventListener], ignoreDuplicates) => {
  insertElementInSet(activeInputs, [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/add-passive-input-connection-to-audio-param.js
var addPassiveInputConnectionToAudioParam = (passiveInputs, [source, output, eventListener], ignoreDuplicates) => {
  const passiveInputConnections = passiveInputs.get(source);
  if (passiveInputConnections === undefined) {
    passiveInputs.set(source, new Set([[output, eventListener]]));
  } else {
    insertElementInSet(passiveInputConnections, [output, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output, ignoreDuplicates);
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/native-audio-node-faker.js
var isNativeAudioNodeFaker = (nativeAudioNodeOrNativeAudioNodeFaker) => {
  return "inputs" in nativeAudioNodeOrNativeAudioNodeFaker;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/connect-native-audio-node-to-native-audio-node.js
var connectNativeAudioNodeToNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
  if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
    const fakeNativeDestinationAudioNode = nativeDestinationAudioNode.inputs[input];
    nativeSourceAudioNode.connect(fakeNativeDestinationAudioNode, output, 0);
    return [fakeNativeDestinationAudioNode, output, 0];
  }
  nativeSourceAudioNode.connect(nativeDestinationAudioNode, output, input);
  return [nativeDestinationAudioNode, output, input];
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection.js
var deleteActiveInputConnection = (activeInputConnections, source, output) => {
  for (const activeInputConnection of activeInputConnections) {
    if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
      activeInputConnections.delete(activeInputConnection);
      return activeInputConnection;
    }
  }
  return null;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection-to-audio-param.js
var deleteActiveInputConnectionToAudioParam = (activeInputs, source, output) => {
  return pickElementFromSet(activeInputs, (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/delete-event-listeners-of-audio-node.js
var deleteEventListenerOfAudioNode = (audioNode, eventListener) => {
  const eventListeners = getEventListenersOfAudioNode(audioNode);
  if (!eventListeners.delete(eventListener)) {
    throw new Error("Missing the expected event listener.");
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-param.js
var deletePassiveInputConnectionToAudioParam = (passiveInputs, source, output) => {
  const passiveInputConnections = getValueForKey(passiveInputs, source);
  const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output);
  if (passiveInputConnections.size === 0) {
    passiveInputs.delete(source);
  }
  return matchingConnection;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/disconnect-native-audio-node-from-native-audio-node.js
var disconnectNativeAudioNodeFromNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
  if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
    nativeSourceAudioNode.disconnect(nativeDestinationAudioNode.inputs[input], output, 0);
  } else {
    nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-node.js
var getNativeAudioNode = (audioNode) => {
  return getValueForKey(AUDIO_NODE_STORE, audioNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-param.js
var getNativeAudioParam = (audioParam) => {
  return getValueForKey(AUDIO_PARAM_STORE, audioParam);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/is-part-of-a-cycle.js
var isPartOfACycle = (audioNode) => {
  return CYCLE_COUNTERS.has(audioNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/is-passive-audio-node.js
var isPassiveAudioNode = (audioNode) => {
  return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-node-disconnect-method-support.js
var testAudioNodeDisconnectMethodSupport = (nativeAudioContext, nativeAudioWorkletNodeConstructor) => {
  return new Promise((resolve) => {
    if (nativeAudioWorkletNodeConstructor !== null) {
      resolve(true);
    } else {
      const analyzer = nativeAudioContext.createScriptProcessor(256, 1, 1);
      const dummy = nativeAudioContext.createGain();
      const ones = nativeAudioContext.createBuffer(1, 2, 44100);
      const channelData = ones.getChannelData(0);
      channelData[0] = 1;
      channelData[1] = 1;
      const source = nativeAudioContext.createBufferSource();
      source.buffer = ones;
      source.loop = true;
      source.connect(analyzer).connect(nativeAudioContext.destination);
      source.connect(dummy);
      source.disconnect(dummy);
      analyzer.onaudioprocess = (event) => {
        const chnnlDt = event.inputBuffer.getChannelData(0);
        if (Array.prototype.some.call(chnnlDt, (sample) => sample === 1)) {
          resolve(true);
        } else {
          resolve(false);
        }
        source.stop();
        analyzer.onaudioprocess = null;
        source.disconnect(analyzer);
        analyzer.disconnect(nativeAudioContext.destination);
      };
      source.start();
    }
  });
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/visit-each-audio-node-once.js
var visitEachAudioNodeOnce = (cycles, visitor) => {
  const counts = new Map;
  for (const cycle of cycles) {
    for (const audioNode of cycle) {
      const count = counts.get(audioNode);
      counts.set(audioNode, count === undefined ? 1 : count + 1);
    }
  }
  counts.forEach((count, audioNode) => visitor(audioNode, count));
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/native-audio-node.js
var isNativeAudioNode = (nativeAudioNodeOrAudioParam) => {
  return "context" in nativeAudioNodeOrAudioParam;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-node-disconnect-method.js
var wrapAudioNodeDisconnectMethod = (nativeAudioNode) => {
  const connections = new Map;
  nativeAudioNode.connect = ((connect) => {
    return (destination, output = 0, input = 0) => {
      const returnValue = isNativeAudioNode(destination) ? connect(destination, output, input) : connect(destination, output);
      const connectionsToDestination = connections.get(destination);
      if (connectionsToDestination === undefined) {
        connections.set(destination, [{ input, output }]);
      } else {
        if (connectionsToDestination.every((connection) => connection.input !== input || connection.output !== output)) {
          connectionsToDestination.push({ input, output });
        }
      }
      return returnValue;
    };
  })(nativeAudioNode.connect.bind(nativeAudioNode));
  nativeAudioNode.disconnect = ((disconnect) => {
    return (destinationOrOutput, output, input) => {
      disconnect.apply(nativeAudioNode);
      if (destinationOrOutput === undefined) {
        connections.clear();
      } else if (typeof destinationOrOutput === "number") {
        for (const [destination, connectionsToDestination] of connections) {
          const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== destinationOrOutput);
          if (filteredConnections.length === 0) {
            connections.delete(destination);
          } else {
            connections.set(destination, filteredConnections);
          }
        }
      } else if (connections.has(destinationOrOutput)) {
        if (output === undefined) {
          connections.delete(destinationOrOutput);
        } else {
          const connectionsToDestination = connections.get(destinationOrOutput);
          if (connectionsToDestination !== undefined) {
            const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== output && (connection.input !== input || input === undefined));
            if (filteredConnections.length === 0) {
              connections.delete(destinationOrOutput);
            } else {
              connections.set(destinationOrOutput, filteredConnections);
            }
          }
        }
      }
      for (const [destination, connectionsToDestination] of connections) {
        connectionsToDestination.forEach((connection) => {
          if (isNativeAudioNode(destination)) {
            nativeAudioNode.connect(destination, connection.output, connection.input);
          } else {
            nativeAudioNode.connect(destination, connection.output);
          }
        });
      }
    };
  })(nativeAudioNode.disconnect);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-node-constructor.js
var addConnectionToAudioParamOfAudioContext = (source, destination, output, isOffline) => {
  const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
  const { outputs } = getAudioNodeConnections(source);
  const eventListeners = getEventListenersOfAudioNode(source);
  const eventListener = (isActive) => {
    const nativeAudioNode = getNativeAudioNode(source);
    const nativeAudioParam = getNativeAudioParam(destination);
    if (isActive) {
      const partialConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
      addActiveInputConnectionToAudioParam(activeInputs, source, partialConnection, false);
      if (!isOffline && !isPartOfACycle(source)) {
        nativeAudioNode.connect(nativeAudioParam, output);
      }
    } else {
      const partialConnection = deleteActiveInputConnectionToAudioParam(activeInputs, source, output);
      addPassiveInputConnectionToAudioParam(passiveInputs, partialConnection, false);
      if (!isOffline && !isPartOfACycle(source)) {
        nativeAudioNode.disconnect(nativeAudioParam, output);
      }
    }
  };
  if (insertElementInSet(outputs, [destination, output], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output, true)) {
    eventListeners.add(eventListener);
    if (isActiveAudioNode(source)) {
      addActiveInputConnectionToAudioParam(activeInputs, source, [output, eventListener], true);
    } else {
      addPassiveInputConnectionToAudioParam(passiveInputs, [source, output, eventListener], true);
    }
    return true;
  }
  return false;
};
var deleteInputConnectionOfAudioNode = (source, destination, output, input) => {
  const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
  const activeInputConnection = deleteActiveInputConnection(activeInputs[input], source, output);
  if (activeInputConnection === null) {
    const passiveInputConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
    return [passiveInputConnection[2], false];
  }
  return [activeInputConnection[2], true];
};
var deleteInputConnectionOfAudioParam = (source, destination, output) => {
  const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
  const activeInputConnection = deleteActiveInputConnection(activeInputs, source, output);
  if (activeInputConnection === null) {
    const passiveInputConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
    return [passiveInputConnection[1], false];
  }
  return [activeInputConnection[2], true];
};
var deleteInputsOfAudioNode = (source, isOffline, destination, output, input) => {
  const [listener, isActive] = deleteInputConnectionOfAudioNode(source, destination, output, input);
  if (listener !== null) {
    deleteEventListenerOfAudioNode(source, listener);
    if (isActive && !isOffline && !isPartOfACycle(source)) {
      disconnectNativeAudioNodeFromNativeAudioNode(getNativeAudioNode(source), getNativeAudioNode(destination), output, input);
    }
  }
  if (isActiveAudioNode(destination)) {
    const { activeInputs } = getAudioNodeConnections(destination);
    setInternalStateToPassiveWhenNecessary(destination, activeInputs);
  }
};
var deleteInputsOfAudioParam = (source, isOffline, destination, output) => {
  const [listener, isActive] = deleteInputConnectionOfAudioParam(source, destination, output);
  if (listener !== null) {
    deleteEventListenerOfAudioNode(source, listener);
    if (isActive && !isOffline && !isPartOfACycle(source)) {
      getNativeAudioNode(source).disconnect(getNativeAudioParam(destination), output);
    }
  }
};
var deleteAnyConnection = (source, isOffline) => {
  const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
  const destinations = [];
  for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
    if (isAudioNodeOutputConnection(outputConnection)) {
      deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
    } else {
      deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
    }
    destinations.push(outputConnection[0]);
  }
  audioNodeConnectionsOfSource.outputs.clear();
  return destinations;
};
var deleteConnectionAtOutput = (source, isOffline, output) => {
  const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
  const destinations = [];
  for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
    if (outputConnection[1] === output) {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      destinations.push(outputConnection[0]);
      audioNodeConnectionsOfSource.outputs.delete(outputConnection);
    }
  }
  return destinations;
};
var deleteConnectionToDestination = (source, isOffline, destination, output, input) => {
  const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
  return Array.from(audioNodeConnectionsOfSource.outputs).filter((outputConnection) => outputConnection[0] === destination && (output === undefined || outputConnection[1] === output) && (input === undefined || outputConnection[2] === input)).map((outputConnection) => {
    if (isAudioNodeOutputConnection(outputConnection)) {
      deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
    } else {
      deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
    }
    audioNodeConnectionsOfSource.outputs.delete(outputConnection);
    return outputConnection[0];
  });
};
var createAudioNodeConstructor = (addAudioNodeConnections, addConnectionToAudioNode, cacheTestResult, createIncrementCycleCounter, createIndexSizeError2, createInvalidAccessError, createNotSupportedError, decrementCycleCounter, detectCycles, eventTargetConstructor, getNativeContext, isNativeAudioContext, isNativeAudioNode2, isNativeAudioParam, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor) => {
  return class AudioNode extends eventTargetConstructor {
    constructor(context, isActive, nativeAudioNode, audioNodeRenderer) {
      super(nativeAudioNode);
      this._context = context;
      this._nativeAudioNode = nativeAudioNode;
      const nativeContext = getNativeContext(context);
      if (isNativeAudioContext(nativeContext) && cacheTestResult(testAudioNodeDisconnectMethodSupport, () => {
        return testAudioNodeDisconnectMethodSupport(nativeContext, nativeAudioWorkletNodeConstructor);
      }) !== true) {
        wrapAudioNodeDisconnectMethod(nativeAudioNode);
      }
      AUDIO_NODE_STORE.set(this, nativeAudioNode);
      EVENT_LISTENERS.set(this, new Set);
      if (context.state !== "closed" && isActive) {
        setInternalStateToActive(this);
      }
      addAudioNodeConnections(this, audioNodeRenderer, nativeAudioNode);
    }
    get channelCount() {
      return this._nativeAudioNode.channelCount;
    }
    set channelCount(value) {
      this._nativeAudioNode.channelCount = value;
    }
    get channelCountMode() {
      return this._nativeAudioNode.channelCountMode;
    }
    set channelCountMode(value) {
      this._nativeAudioNode.channelCountMode = value;
    }
    get channelInterpretation() {
      return this._nativeAudioNode.channelInterpretation;
    }
    set channelInterpretation(value) {
      this._nativeAudioNode.channelInterpretation = value;
    }
    get context() {
      return this._context;
    }
    get numberOfInputs() {
      return this._nativeAudioNode.numberOfInputs;
    }
    get numberOfOutputs() {
      return this._nativeAudioNode.numberOfOutputs;
    }
    connect(destination, output = 0, input = 0) {
      if (output < 0 || output >= this._nativeAudioNode.numberOfOutputs) {
        throw createIndexSizeError2();
      }
      const nativeContext = getNativeContext(this._context);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      if (isNativeAudioNode2(destination) || isNativeAudioParam(destination)) {
        throw createInvalidAccessError();
      }
      if (isAudioNode(destination)) {
        const nativeDestinationAudioNode = getNativeAudioNode(destination);
        try {
          const connection = connectNativeAudioNodeToNativeAudioNode(this._nativeAudioNode, nativeDestinationAudioNode, output, input);
          const isPassive = isPassiveAudioNode(this);
          if (isOffline || isPassive) {
            this._nativeAudioNode.disconnect(...connection);
          }
          if (this.context.state !== "closed" && !isPassive && isPassiveAudioNode(destination)) {
            setInternalStateToActive(destination);
          }
        } catch (err) {
          if (err.code === 12) {
            throw createInvalidAccessError();
          }
          throw err;
        }
        const isNewConnectionToAudioNode = addConnectionToAudioNode(this, destination, output, input, isOffline);
        if (isNewConnectionToAudioNode) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
        }
        return destination;
      }
      const nativeAudioParam = getNativeAudioParam(destination);
      if (nativeAudioParam.name === "playbackRate" && nativeAudioParam.maxValue === 1024) {
        throw createNotSupportedError();
      }
      try {
        this._nativeAudioNode.connect(nativeAudioParam, output);
        if (isOffline || isPassiveAudioNode(this)) {
          this._nativeAudioNode.disconnect(nativeAudioParam, output);
        }
      } catch (err) {
        if (err.code === 12) {
          throw createInvalidAccessError();
        }
        throw err;
      }
      const isNewConnectionToAudioParam = addConnectionToAudioParamOfAudioContext(this, destination, output, isOffline);
      if (isNewConnectionToAudioParam) {
        const cycles = detectCycles([this], destination);
        visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
      }
    }
    disconnect(destinationOrOutput, output, input) {
      let destinations;
      const nativeContext = getNativeContext(this._context);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      if (destinationOrOutput === undefined) {
        destinations = deleteAnyConnection(this, isOffline);
      } else if (typeof destinationOrOutput === "number") {
        if (destinationOrOutput < 0 || destinationOrOutput >= this.numberOfOutputs) {
          throw createIndexSizeError2();
        }
        destinations = deleteConnectionAtOutput(this, isOffline, destinationOrOutput);
      } else {
        if (output !== undefined && (output < 0 || output >= this.numberOfOutputs)) {
          throw createIndexSizeError2();
        }
        if (isAudioNode(destinationOrOutput) && input !== undefined && (input < 0 || input >= destinationOrOutput.numberOfInputs)) {
          throw createIndexSizeError2();
        }
        destinations = deleteConnectionToDestination(this, isOffline, destinationOrOutput, output, input);
        if (destinations.length === 0) {
          throw createInvalidAccessError();
        }
      }
      for (const destination of destinations) {
        const cycles = detectCycles([this], destination);
        visitEachAudioNodeOnce(cycles, decrementCycleCounter);
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-param-factory.js
var import_automation_events = __toESM(require_bundle(), 1);
var createAudioParamFactory = (addAudioParamConnections, audioParamAudioNodeStore, audioParamStore, createAudioParamRenderer, createCancelAndHoldAutomationEvent, createCancelScheduledValuesAutomationEvent, createExponentialRampToValueAutomationEvent, createLinearRampToValueAutomationEvent, createSetTargetAutomationEvent, createSetValueAutomationEvent, createSetValueCurveAutomationEvent, nativeAudioContextConstructor, setValueAtTimeUntilPossible) => {
  return (audioNode, isAudioParamOfOfflineAudioContext, nativeAudioParam, maxValue = null, minValue = null) => {
    const defaultValue = nativeAudioParam.value;
    const automationEventList = new import_automation_events.AutomationEventList(defaultValue);
    const audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer(automationEventList) : null;
    const audioParam = {
      get defaultValue() {
        return defaultValue;
      },
      get maxValue() {
        return maxValue === null ? nativeAudioParam.maxValue : maxValue;
      },
      get minValue() {
        return minValue === null ? nativeAudioParam.minValue : minValue;
      },
      get value() {
        return nativeAudioParam.value;
      },
      set value(value) {
        nativeAudioParam.value = value;
        audioParam.setValueAtTime(value, audioNode.context.currentTime);
      },
      cancelAndHoldAtTime(cancelTime) {
        if (typeof nativeAudioParam.cancelAndHoldAtTime === "function") {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createCancelAndHoldAutomationEvent(cancelTime));
          nativeAudioParam.cancelAndHoldAtTime(cancelTime);
        } else {
          const previousLastEvent = Array.from(automationEventList).pop();
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createCancelAndHoldAutomationEvent(cancelTime));
          const currentLastEvent = Array.from(automationEventList).pop();
          nativeAudioParam.cancelScheduledValues(cancelTime);
          if (previousLastEvent !== currentLastEvent && currentLastEvent !== undefined) {
            if (currentLastEvent.type === "exponentialRampToValue") {
              nativeAudioParam.exponentialRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
            } else if (currentLastEvent.type === "linearRampToValue") {
              nativeAudioParam.linearRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
            } else if (currentLastEvent.type === "setValue") {
              nativeAudioParam.setValueAtTime(currentLastEvent.value, currentLastEvent.startTime);
            } else if (currentLastEvent.type === "setValueCurve") {
              nativeAudioParam.setValueCurveAtTime(currentLastEvent.values, currentLastEvent.startTime, currentLastEvent.duration);
            }
          }
        }
        return audioParam;
      },
      cancelScheduledValues(cancelTime) {
        if (audioParamRenderer === null) {
          automationEventList.flush(audioNode.context.currentTime);
        }
        automationEventList.add(createCancelScheduledValuesAutomationEvent(cancelTime));
        nativeAudioParam.cancelScheduledValues(cancelTime);
        return audioParam;
      },
      exponentialRampToValueAtTime(value, endTime) {
        if (value === 0) {
          throw new RangeError;
        }
        if (!Number.isFinite(endTime) || endTime < 0) {
          throw new RangeError;
        }
        const currentTime = audioNode.context.currentTime;
        if (audioParamRenderer === null) {
          automationEventList.flush(currentTime);
        }
        if (Array.from(automationEventList).length === 0) {
          automationEventList.add(createSetValueAutomationEvent(defaultValue, currentTime));
          nativeAudioParam.setValueAtTime(defaultValue, currentTime);
        }
        automationEventList.add(createExponentialRampToValueAutomationEvent(value, endTime));
        nativeAudioParam.exponentialRampToValueAtTime(value, endTime);
        return audioParam;
      },
      linearRampToValueAtTime(value, endTime) {
        const currentTime = audioNode.context.currentTime;
        if (audioParamRenderer === null) {
          automationEventList.flush(currentTime);
        }
        if (Array.from(automationEventList).length === 0) {
          automationEventList.add(createSetValueAutomationEvent(defaultValue, currentTime));
          nativeAudioParam.setValueAtTime(defaultValue, currentTime);
        }
        automationEventList.add(createLinearRampToValueAutomationEvent(value, endTime));
        nativeAudioParam.linearRampToValueAtTime(value, endTime);
        return audioParam;
      },
      setTargetAtTime(target, startTime, timeConstant) {
        if (audioParamRenderer === null) {
          automationEventList.flush(audioNode.context.currentTime);
        }
        automationEventList.add(createSetTargetAutomationEvent(target, startTime, timeConstant));
        nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);
        return audioParam;
      },
      setValueAtTime(value, startTime) {
        if (audioParamRenderer === null) {
          automationEventList.flush(audioNode.context.currentTime);
        }
        automationEventList.add(createSetValueAutomationEvent(value, startTime));
        nativeAudioParam.setValueAtTime(value, startTime);
        return audioParam;
      },
      setValueCurveAtTime(values, startTime, duration) {
        const convertedValues = values instanceof Float32Array ? values : new Float32Array(values);
        if (nativeAudioContextConstructor !== null && nativeAudioContextConstructor.name === "webkitAudioContext") {
          const endTime = startTime + duration;
          const sampleRate = audioNode.context.sampleRate;
          const firstSample = Math.ceil(startTime * sampleRate);
          const lastSample = Math.floor(endTime * sampleRate);
          const numberOfInterpolatedValues = lastSample - firstSample;
          const interpolatedValues = new Float32Array(numberOfInterpolatedValues);
          for (let i = 0;i < numberOfInterpolatedValues; i += 1) {
            const theoreticIndex = (convertedValues.length - 1) / duration * ((firstSample + i) / sampleRate - startTime);
            const lowerIndex = Math.floor(theoreticIndex);
            const upperIndex = Math.ceil(theoreticIndex);
            interpolatedValues[i] = lowerIndex === upperIndex ? convertedValues[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * convertedValues[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * convertedValues[upperIndex];
          }
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueCurveAutomationEvent(interpolatedValues, startTime, duration));
          nativeAudioParam.setValueCurveAtTime(interpolatedValues, startTime, duration);
          const timeOfLastSample = lastSample / sampleRate;
          if (timeOfLastSample < endTime) {
            setValueAtTimeUntilPossible(audioParam, interpolatedValues[interpolatedValues.length - 1], timeOfLastSample);
          }
          setValueAtTimeUntilPossible(audioParam, convertedValues[convertedValues.length - 1], endTime);
        } else {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueCurveAutomationEvent(convertedValues, startTime, duration));
          nativeAudioParam.setValueCurveAtTime(convertedValues, startTime, duration);
        }
        return audioParam;
      }
    };
    audioParamStore.set(audioParam, nativeAudioParam);
    audioParamAudioNodeStore.set(audioParam, audioNode);
    addAudioParamConnections(audioParam, audioParamRenderer);
    return audioParam;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-param-renderer.js
var createAudioParamRenderer = (automationEventList) => {
  return {
    replay(audioParam) {
      for (const automationEvent of automationEventList) {
        if (automationEvent.type === "exponentialRampToValue") {
          const { endTime, value } = automationEvent;
          audioParam.exponentialRampToValueAtTime(value, endTime);
        } else if (automationEvent.type === "linearRampToValue") {
          const { endTime, value } = automationEvent;
          audioParam.linearRampToValueAtTime(value, endTime);
        } else if (automationEvent.type === "setTarget") {
          const { startTime, target, timeConstant } = automationEvent;
          audioParam.setTargetAtTime(target, startTime, timeConstant);
        } else if (automationEvent.type === "setValue") {
          const { startTime, value } = automationEvent;
          audioParam.setValueAtTime(value, startTime);
        } else if (automationEvent.type === "setValueCurve") {
          const { duration, startTime, values } = automationEvent;
          audioParam.setValueCurveAtTime(values, startTime, duration);
        } else {
          throw new Error("Can't apply an unknown automation.");
        }
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/read-only-map.js
class ReadOnlyMap {
  constructor(parameters) {
    this._map = new Map(parameters);
  }
  get size() {
    return this._map.size;
  }
  entries() {
    return this._map.entries();
  }
  forEach(callback, thisArg = null) {
    return this._map.forEach((value, key) => callback.call(thisArg, value, key, this));
  }
  get(name) {
    return this._map.get(name);
  }
  has(name) {
    return this._map.has(name);
  }
  keys() {
    return this._map.keys();
  }
  values() {
    return this._map.values();
  }
}

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-constructor.js
var DEFAULT_OPTIONS4 = {
  channelCount: 2,
  channelCountMode: "explicit",
  channelInterpretation: "speakers",
  numberOfInputs: 1,
  numberOfOutputs: 1,
  parameterData: {},
  processorOptions: {}
};
var createAudioWorkletNodeConstructor = (addUnrenderedAudioWorkletNode, audioNodeConstructor, createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, getAudioNodeConnections2, getBackupOfflineAudioContext, getNativeContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, sanitizeAudioWorkletNodeOptions, setActiveAudioWorkletNodeInputs, testAudioWorkletNodeOptionsClonability, wrapEventListener) => {
  return class AudioWorkletNode extends audioNodeConstructor {
    constructor(context, name, options) {
      var _a;
      const nativeContext = getNativeContext(context);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const mergedOptions = sanitizeAudioWorkletNodeOptions({ ...DEFAULT_OPTIONS4, ...options });
      testAudioWorkletNodeOptionsClonability(mergedOptions);
      const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
      const processorConstructor = nodeNameToProcessorConstructorMap === null || nodeNameToProcessorConstructorMap === undefined ? undefined : nodeNameToProcessorConstructorMap.get(name);
      const nativeContextOrBackupOfflineAudioContext = isOffline || nativeContext.state !== "closed" ? nativeContext : (_a = getBackupOfflineAudioContext(nativeContext)) !== null && _a !== undefined ? _a : nativeContext;
      const nativeAudioWorkletNode = createNativeAudioWorkletNode(nativeContextOrBackupOfflineAudioContext, isOffline ? null : context.baseLatency, nativeAudioWorkletNodeConstructor, name, processorConstructor, mergedOptions);
      const audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer(name, mergedOptions, processorConstructor) : null;
      super(context, true, nativeAudioWorkletNode, audioWorkletNodeRenderer);
      const parameters = [];
      nativeAudioWorkletNode.parameters.forEach((nativeAudioParam, nm) => {
        const audioParam = createAudioParam(this, isOffline, nativeAudioParam);
        parameters.push([nm, audioParam]);
      });
      this._nativeAudioWorkletNode = nativeAudioWorkletNode;
      this._onprocessorerror = null;
      this._parameters = new ReadOnlyMap(parameters);
      if (isOffline) {
        addUnrenderedAudioWorkletNode(nativeContext, this);
      }
      const { activeInputs } = getAudioNodeConnections2(this);
      setActiveAudioWorkletNodeInputs(nativeAudioWorkletNode, activeInputs);
    }
    get onprocessorerror() {
      return this._onprocessorerror;
    }
    set onprocessorerror(value) {
      const wrappedListener = typeof value === "function" ? wrapEventListener(this, value) : null;
      this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
      const nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
      this._onprocessorerror = nativeOnProcessorError !== null && nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
    }
    get parameters() {
      if (this._parameters === null) {
        return this._nativeAudioWorkletNode.parameters;
      }
      return this._parameters;
    }
    get port() {
      return this._nativeAudioWorkletNode.port;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/copy-from-channel.js
function copyFromChannel(audioBuffer, parent, key, channelNumber, bufferOffset) {
  if (typeof audioBuffer.copyFromChannel === "function") {
    if (parent[key].byteLength === 0) {
      parent[key] = new Float32Array(128);
    }
    audioBuffer.copyFromChannel(parent[key], channelNumber, bufferOffset);
  } else {
    const channelData = audioBuffer.getChannelData(channelNumber);
    if (parent[key].byteLength === 0) {
      parent[key] = channelData.slice(bufferOffset, bufferOffset + 128);
    } else {
      const slicedInput = new Float32Array(channelData.buffer, bufferOffset * Float32Array.BYTES_PER_ELEMENT, 128);
      parent[key].set(slicedInput);
    }
  }
}

// ../../node_modules/standardized-audio-context/build/es2019/helpers/copy-to-channel.js
var copyToChannel = (audioBuffer, parent, key, channelNumber, bufferOffset) => {
  if (typeof audioBuffer.copyToChannel === "function") {
    if (parent[key].byteLength !== 0) {
      audioBuffer.copyToChannel(parent[key], channelNumber, bufferOffset);
    }
  } else {
    if (parent[key].byteLength !== 0) {
      audioBuffer.getChannelData(channelNumber).set(parent[key], bufferOffset);
    }
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/create-nested-arrays.js
var createNestedArrays = (x, y) => {
  const arrays = [];
  for (let i = 0;i < x; i += 1) {
    const array = [];
    const length = typeof y === "number" ? y : y[i];
    for (let j = 0;j < length; j += 1) {
      array.push(new Float32Array(128));
    }
    arrays.push(array);
  }
  return arrays;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-audio-worklet-processor.js
var getAudioWorkletProcessor = (nativeOfflineAudioContext, proxy) => {
  const nodeToProcessorMap = getValueForKey(NODE_TO_PROCESSOR_MAPS, nativeOfflineAudioContext);
  const nativeAudioWorkletNode = getNativeAudioNode(proxy);
  return getValueForKey(nodeToProcessorMap, nativeAudioWorkletNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-renderer-factory.js
var processBuffer = async (proxy, renderedBuffer, nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime) => {
  const length = renderedBuffer === null ? Math.ceil(proxy.context.length / 128) * 128 : renderedBuffer.length;
  const numberOfInputChannels = options.channelCount * options.numberOfInputs;
  const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
  const processedBuffer = numberOfOutputChannels === 0 ? null : nativeOfflineAudioContext.createBuffer(numberOfOutputChannels, length, nativeOfflineAudioContext.sampleRate);
  if (processorConstructor === undefined) {
    throw new Error("Missing the processor constructor.");
  }
  const audioNodeConnections = getAudioNodeConnections(proxy);
  const audioWorkletProcessor = await getAudioWorkletProcessor(nativeOfflineAudioContext, proxy);
  const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
  const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
  const parameters = Array.from(proxy.parameters.keys()).reduce((prmtrs, name) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
  for (let i = 0;i < length; i += 128) {
    if (options.numberOfInputs > 0 && renderedBuffer !== null) {
      for (let j = 0;j < options.numberOfInputs; j += 1) {
        for (let k = 0;k < options.channelCount; k += 1) {
          copyFromChannel(renderedBuffer, inputs[j], k, k, i);
        }
      }
    }
    if (processorConstructor.parameterDescriptors !== undefined && renderedBuffer !== null) {
      processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
        copyFromChannel(renderedBuffer, parameters, name, numberOfInputChannels + index, i);
      });
    }
    for (let j = 0;j < options.numberOfInputs; j += 1) {
      for (let k = 0;k < outputChannelCount[j]; k += 1) {
        if (outputs[j][k].byteLength === 0) {
          outputs[j][k] = new Float32Array(128);
        }
      }
    }
    try {
      const potentiallyEmptyInputs = inputs.map((input, index) => {
        if (audioNodeConnections.activeInputs[index].size === 0) {
          return [];
        }
        return input;
      });
      const activeSourceFlag = exposeCurrentFrameAndCurrentTime(i / nativeOfflineAudioContext.sampleRate, nativeOfflineAudioContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
      if (processedBuffer !== null) {
        for (let j = 0, outputChannelSplitterNodeOutput = 0;j < options.numberOfOutputs; j += 1) {
          for (let k = 0;k < outputChannelCount[j]; k += 1) {
            copyToChannel(processedBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
          }
          outputChannelSplitterNodeOutput += outputChannelCount[j];
        }
      }
      if (!activeSourceFlag) {
        break;
      }
    } catch (error) {
      proxy.dispatchEvent(new ErrorEvent("processorerror", {
        colno: error.colno,
        filename: error.filename,
        lineno: error.lineno,
        message: error.message
      }));
      break;
    }
  }
  return processedBuffer;
};
var createAudioWorkletNodeRendererFactory = (connectAudioParam, connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, deleteUnrenderedAudioWorkletNode, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getNativeAudioNode2, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext) => {
  return (name, options, processorConstructor) => {
    const renderedNativeAudioNodes = new WeakMap;
    let processedBufferPromise = null;
    const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeAudioWorkletNode = getNativeAudioNode2(proxy);
      let nativeOutputNodes = null;
      const nativeAudioWorkletNodeIsOwnedByContext = isOwnedByContext(nativeAudioWorkletNode, nativeOfflineAudioContext);
      const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
      if (nativeAudioWorkletNodeConstructor === null) {
        const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
        const outputChannelSplitterNode = createNativeChannelSplitterNode(nativeOfflineAudioContext, {
          channelCount: Math.max(1, numberOfOutputChannels),
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: Math.max(1, numberOfOutputChannels)
        });
        const outputChannelMergerNodes = [];
        for (let i = 0;i < proxy.numberOfOutputs; i += 1) {
          outputChannelMergerNodes.push(createNativeChannelMergerNode(nativeOfflineAudioContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: outputChannelCount[i]
          }));
        }
        const outputGainNode = createNativeGainNode(nativeOfflineAudioContext, {
          channelCount: options.channelCount,
          channelCountMode: options.channelCountMode,
          channelInterpretation: options.channelInterpretation,
          gain: 1
        });
        outputGainNode.connect = connectMultipleOutputs.bind(null, outputChannelMergerNodes);
        outputGainNode.disconnect = disconnectMultipleOutputs.bind(null, outputChannelMergerNodes);
        nativeOutputNodes = [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode];
      } else if (!nativeAudioWorkletNodeIsOwnedByContext) {
        nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor(nativeOfflineAudioContext, name);
      }
      renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeOutputNodes === null ? nativeAudioWorkletNode : nativeOutputNodes[2]);
      if (nativeOutputNodes !== null) {
        if (processedBufferPromise === null) {
          if (processorConstructor === undefined) {
            throw new Error("Missing the processor constructor.");
          }
          if (nativeOfflineAudioContextConstructor === null) {
            throw new Error("Missing the native OfflineAudioContext constructor.");
          }
          const numberOfInputChannels = proxy.channelCount * proxy.numberOfInputs;
          const numberOfParameters = processorConstructor.parameterDescriptors === undefined ? 0 : processorConstructor.parameterDescriptors.length;
          const numberOfChannels = numberOfInputChannels + numberOfParameters;
          const renderBuffer = async () => {
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor(numberOfChannels, Math.ceil(proxy.context.length / 128) * 128, nativeOfflineAudioContext.sampleRate);
            const gainNodes = [];
            const inputChannelSplitterNodes = [];
            for (let i = 0;i < options.numberOfInputs; i += 1) {
              gainNodes.push(createNativeGainNode(partialOfflineAudioContext, {
                channelCount: options.channelCount,
                channelCountMode: options.channelCountMode,
                channelInterpretation: options.channelInterpretation,
                gain: 1
              }));
              inputChannelSplitterNodes.push(createNativeChannelSplitterNode(partialOfflineAudioContext, {
                channelCount: options.channelCount,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: options.channelCount
              }));
            }
            const constantSourceNodes = await Promise.all(Array.from(proxy.parameters.values()).map(async (audioParam) => {
              const constantSourceNode = createNativeConstantSourceNode(partialOfflineAudioContext, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                offset: audioParam.value
              });
              await renderAutomation(partialOfflineAudioContext, audioParam, constantSourceNode.offset);
              return constantSourceNode;
            }));
            const inputChannelMergerNode = createNativeChannelMergerNode(partialOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
            });
            for (let i = 0;i < options.numberOfInputs; i += 1) {
              gainNodes[i].connect(inputChannelSplitterNodes[i]);
              for (let j = 0;j < options.channelCount; j += 1) {
                inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
              }
            }
            for (const [index, constantSourceNode] of constantSourceNodes.entries()) {
              constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
              constantSourceNode.start(0);
            }
            inputChannelMergerNode.connect(partialOfflineAudioContext.destination);
            await Promise.all(gainNodes.map((gainNode) => renderInputsOfAudioNode(proxy, partialOfflineAudioContext, gainNode)));
            return renderNativeOfflineAudioContext(partialOfflineAudioContext);
          };
          processedBufferPromise = processBuffer(proxy, numberOfChannels === 0 ? null : await renderBuffer(), nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime);
        }
        const processedBuffer = await processedBufferPromise;
        const audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext, {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: false,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1
        });
        const [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode] = nativeOutputNodes;
        if (processedBuffer !== null) {
          audioBufferSourceNode.buffer = processedBuffer;
          audioBufferSourceNode.start(0);
        }
        audioBufferSourceNode.connect(outputChannelSplitterNode);
        for (let i = 0, outputChannelSplitterNodeOutput = 0;i < proxy.numberOfOutputs; i += 1) {
          const outputChannelMergerNode = outputChannelMergerNodes[i];
          for (let j = 0;j < outputChannelCount[i]; j += 1) {
            outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
          }
          outputChannelSplitterNodeOutput += outputChannelCount[i];
        }
        return outputGainNode;
      }
      if (!nativeAudioWorkletNodeIsOwnedByContext) {
        for (const [nm, audioParam] of proxy.parameters.entries()) {
          await renderAutomation(nativeOfflineAudioContext, audioParam, nativeAudioWorkletNode.parameters.get(nm));
        }
      } else {
        for (const [nm, audioParam] of proxy.parameters.entries()) {
          await connectAudioParam(nativeOfflineAudioContext, audioParam, nativeAudioWorkletNode.parameters.get(nm));
        }
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioWorkletNode);
      return nativeAudioWorkletNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        deleteUnrenderedAudioWorkletNode(nativeOfflineAudioContext, proxy);
        const renderedNativeAudioWorkletNodeOrGainNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioWorkletNodeOrGainNode !== undefined) {
          return Promise.resolve(renderedNativeAudioWorkletNodeOrGainNode);
        }
        return createAudioNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/base-audio-context-constructor.js
var createBaseAudioContextConstructor = (addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor) => {
  return class BaseAudioContext extends minimalBaseAudioContextConstructor {
    constructor(_nativeContext, numberOfChannels) {
      super(_nativeContext, numberOfChannels);
      this._nativeContext = _nativeContext;
      this._audioWorklet = addAudioWorkletModule === undefined ? undefined : {
        addModule: (moduleURL, options) => {
          return addAudioWorkletModule(this, moduleURL, options);
        }
      };
    }
    get audioWorklet() {
      return this._audioWorklet;
    }
    createAnalyser() {
      return new analyserNodeConstructor(this);
    }
    createBiquadFilter() {
      return new biquadFilterNodeConstructor(this);
    }
    createBuffer(numberOfChannels, length, sampleRate) {
      return new audioBufferConstructor({ length, numberOfChannels, sampleRate });
    }
    createBufferSource() {
      return new audioBufferSourceNodeConstructor(this);
    }
    createChannelMerger(numberOfInputs = 6) {
      return new channelMergerNodeConstructor(this, { numberOfInputs });
    }
    createChannelSplitter(numberOfOutputs = 6) {
      return new channelSplitterNodeConstructor(this, { numberOfOutputs });
    }
    createConstantSource() {
      return new constantSourceNodeConstructor(this);
    }
    createConvolver() {
      return new convolverNodeConstructor(this);
    }
    createDelay(maxDelayTime = 1) {
      return new delayNodeConstructor(this, { maxDelayTime });
    }
    createDynamicsCompressor() {
      return new dynamicsCompressorNodeConstructor(this);
    }
    createGain() {
      return new gainNodeConstructor(this);
    }
    createIIRFilter(feedforward, feedback) {
      return new iIRFilterNodeConstructor(this, { feedback, feedforward });
    }
    createOscillator() {
      return new oscillatorNodeConstructor(this);
    }
    createPanner() {
      return new pannerNodeConstructor(this);
    }
    createPeriodicWave(real, imag, constraints = { disableNormalization: false }) {
      return new periodicWaveConstructor(this, { ...constraints, imag, real });
    }
    createStereoPanner() {
      return new stereoPannerNodeConstructor(this);
    }
    createWaveShaper() {
      return new waveShaperNodeConstructor(this);
    }
    decodeAudioData(audioData, successCallback, errorCallback) {
      return decodeAudioData(this._nativeContext, audioData).then((audioBuffer) => {
        if (typeof successCallback === "function") {
          successCallback(audioBuffer);
        }
        return audioBuffer;
      }, (err) => {
        if (typeof errorCallback === "function") {
          errorCallback(err);
        }
        throw err;
      });
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-constructor.js
var DEFAULT_OPTIONS5 = {
  Q: 1,
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  detune: 0,
  frequency: 350,
  gain: 0,
  type: "lowpass"
};
var createBiquadFilterNodeConstructor = (audioNodeConstructor, createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
  return class BiquadFilterNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS5, ...options };
      const nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer() : null;
      super(context, false, nativeBiquadFilterNode, biquadFilterNodeRenderer);
      this._Q = createAudioParam(this, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      this._detune = createAudioParam(this, isOffline, nativeBiquadFilterNode.detune, 1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT));
      this._frequency = createAudioParam(this, isOffline, nativeBiquadFilterNode.frequency, context.sampleRate / 2, 0);
      this._gain = createAudioParam(this, isOffline, nativeBiquadFilterNode.gain, 40 * Math.log10(MOST_POSITIVE_SINGLE_FLOAT), MOST_NEGATIVE_SINGLE_FLOAT);
      this._nativeBiquadFilterNode = nativeBiquadFilterNode;
      setAudioNodeTailTime(this, 1);
    }
    get detune() {
      return this._detune;
    }
    get frequency() {
      return this._frequency;
    }
    get gain() {
      return this._gain;
    }
    get Q() {
      return this._Q;
    }
    get type() {
      return this._nativeBiquadFilterNode.type;
    }
    set type(value) {
      this._nativeBiquadFilterNode.type = value;
    }
    getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
      try {
        this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
      } catch (err) {
        if (err.code === 11) {
          throw createInvalidAccessError();
        }
        throw err;
      }
      if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
        throw createInvalidAccessError();
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-renderer-factory.js
var createBiquadFilterNodeRendererFactory = (connectAudioParam, createNativeBiquadFilterNode, getNativeAudioNode2, renderAutomation, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeBiquadFilterNodes = new WeakMap;
    const createBiquadFilterNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeBiquadFilterNode = getNativeAudioNode2(proxy);
      const nativeBiquadFilterNodeIsOwnedByContext = isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext);
      if (!nativeBiquadFilterNodeIsOwnedByContext) {
        const options = {
          Q: nativeBiquadFilterNode.Q.value,
          channelCount: nativeBiquadFilterNode.channelCount,
          channelCountMode: nativeBiquadFilterNode.channelCountMode,
          channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
          detune: nativeBiquadFilterNode.detune.value,
          frequency: nativeBiquadFilterNode.frequency.value,
          gain: nativeBiquadFilterNode.gain.value,
          type: nativeBiquadFilterNode.type
        };
        nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeOfflineAudioContext, options);
      }
      renderedNativeBiquadFilterNodes.set(nativeOfflineAudioContext, nativeBiquadFilterNode);
      if (!nativeBiquadFilterNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
        await renderAutomation(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
        await renderAutomation(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
        await renderAutomation(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
        await connectAudioParam(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
        await connectAudioParam(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
        await connectAudioParam(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);
      return nativeBiquadFilterNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeBiquadFilterNode = renderedNativeBiquadFilterNodes.get(nativeOfflineAudioContext);
        if (renderedNativeBiquadFilterNode !== undefined) {
          return Promise.resolve(renderedNativeBiquadFilterNode);
        }
        return createBiquadFilterNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/cache-test-result.js
var createCacheTestResult = (ongoingTests, testResults) => {
  return (tester, test) => {
    const cachedTestResult = testResults.get(tester);
    if (cachedTestResult !== undefined) {
      return cachedTestResult;
    }
    const ongoingTest = ongoingTests.get(tester);
    if (ongoingTest !== undefined) {
      return ongoingTest;
    }
    try {
      const synchronousTestResult = test();
      if (synchronousTestResult instanceof Promise) {
        ongoingTests.set(tester, synchronousTestResult);
        return synchronousTestResult.catch(() => false).then((finalTestResult) => {
          ongoingTests.delete(tester);
          testResults.set(tester, finalTestResult);
          return finalTestResult;
        });
      }
      testResults.set(tester, synchronousTestResult);
      return synchronousTestResult;
    } catch {
      testResults.set(tester, false);
      return false;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-constructor.js
var DEFAULT_OPTIONS6 = {
  channelCount: 1,
  channelCountMode: "explicit",
  channelInterpretation: "speakers",
  numberOfInputs: 6
};
var createChannelMergerNodeConstructor = (audioNodeConstructor, createChannelMergerNodeRenderer, createNativeChannelMergerNode, getNativeContext, isNativeOfflineAudioContext) => {
  return class ChannelMergerNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS6, ...options };
      const nativeChannelMergerNode = createNativeChannelMergerNode(nativeContext, mergedOptions);
      const channelMergerNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createChannelMergerNodeRenderer() : null;
      super(context, false, nativeChannelMergerNode, channelMergerNodeRenderer);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-renderer-factory.js
var createChannelMergerNodeRendererFactory = (createNativeChannelMergerNode, getNativeAudioNode2, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeAudioNodes = new WeakMap;
    const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeAudioNode = getNativeAudioNode2(proxy);
      const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
      if (!nativeAudioNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeAudioNode.channelCount,
          channelCountMode: nativeAudioNode.channelCountMode,
          channelInterpretation: nativeAudioNode.channelInterpretation,
          numberOfInputs: nativeAudioNode.numberOfInputs
        };
        nativeAudioNode = createNativeChannelMergerNode(nativeOfflineAudioContext, options);
      }
      renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);
      return nativeAudioNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioNode !== undefined) {
          return Promise.resolve(renderedNativeAudioNode);
        }
        return createAudioNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-constructor.js
var DEFAULT_OPTIONS7 = {
  channelCount: 6,
  channelCountMode: "explicit",
  channelInterpretation: "discrete",
  numberOfOutputs: 6
};
var createChannelSplitterNodeConstructor = (audioNodeConstructor, createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, getNativeContext, isNativeOfflineAudioContext, sanitizeChannelSplitterOptions) => {
  return class ChannelSplitterNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = sanitizeChannelSplitterOptions({ ...DEFAULT_OPTIONS7, ...options });
      const nativeChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, mergedOptions);
      const channelSplitterNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createChannelSplitterNodeRenderer() : null;
      super(context, false, nativeChannelSplitterNode, channelSplitterNodeRenderer);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-renderer-factory.js
var createChannelSplitterNodeRendererFactory = (createNativeChannelSplitterNode, getNativeAudioNode2, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeAudioNodes = new WeakMap;
    const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeAudioNode = getNativeAudioNode2(proxy);
      const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
      if (!nativeAudioNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeAudioNode.channelCount,
          channelCountMode: nativeAudioNode.channelCountMode,
          channelInterpretation: nativeAudioNode.channelInterpretation,
          numberOfOutputs: nativeAudioNode.numberOfOutputs
        };
        nativeAudioNode = createNativeChannelSplitterNode(nativeOfflineAudioContext, options);
      }
      renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);
      return nativeAudioNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioNode !== undefined) {
          return Promise.resolve(renderedNativeAudioNode);
        }
        return createAudioNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/connect-audio-param.js
var createConnectAudioParam = (renderInputsOfAudioParam) => {
  return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
    return renderInputsOfAudioParam(audioParam, nativeOfflineAudioContext, nativeAudioParam);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/connect-multiple-outputs.js
var createConnectMultipleOutputs = (createIndexSizeError2) => {
  return (outputAudioNodes, destination, output = 0, input = 0) => {
    const outputAudioNode = outputAudioNodes[output];
    if (outputAudioNode === undefined) {
      throw createIndexSizeError2();
    }
    if (isNativeAudioNode(destination)) {
      return outputAudioNode.connect(destination, 0, input);
    }
    return outputAudioNode.connect(destination, 0);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/connected-native-audio-buffer-source-node-factory.js
var createConnectedNativeAudioBufferSourceNodeFactory = (createNativeAudioBufferSourceNode) => {
  return (nativeContext, nativeAudioNode) => {
    const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext, {
      buffer: null,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      loop: false,
      loopEnd: 0,
      loopStart: 0,
      playbackRate: 1
    });
    const nativeAudioBuffer = nativeContext.createBuffer(1, 2, 44100);
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    nativeAudioBufferSourceNode.loop = true;
    nativeAudioBufferSourceNode.connect(nativeAudioNode);
    nativeAudioBufferSourceNode.start();
    return () => {
      nativeAudioBufferSourceNode.stop();
      nativeAudioBufferSourceNode.disconnect(nativeAudioNode);
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-constructor.js
var DEFAULT_OPTIONS8 = {
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  offset: 1
};
var createConstantSourceNodeConstructor = (audioNodeConstructor, createAudioParam, createConstantSourceNodeRendererFactory, createNativeConstantSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener) => {
  return class ConstantSourceNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS8, ...options };
      const nativeConstantSourceNode = createNativeConstantSourceNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory() : null;
      super(context, false, nativeConstantSourceNode, constantSourceNodeRenderer);
      this._constantSourceNodeRenderer = constantSourceNodeRenderer;
      this._nativeConstantSourceNode = nativeConstantSourceNode;
      this._offset = createAudioParam(this, isOffline, nativeConstantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      this._onended = null;
    }
    get offset() {
      return this._offset;
    }
    get onended() {
      return this._onended;
    }
    set onended(value) {
      const wrappedListener = typeof value === "function" ? wrapEventListener(this, value) : null;
      this._nativeConstantSourceNode.onended = wrappedListener;
      const nativeOnEnded = this._nativeConstantSourceNode.onended;
      this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
    }
    start(when = 0) {
      this._nativeConstantSourceNode.start(when);
      if (this._constantSourceNodeRenderer !== null) {
        this._constantSourceNodeRenderer.start = when;
      }
      if (this.context.state !== "closed") {
        setInternalStateToActive(this);
        const resetInternalStateToPassive = () => {
          this._nativeConstantSourceNode.removeEventListener("ended", resetInternalStateToPassive);
          if (isActiveAudioNode(this)) {
            setInternalStateToPassive(this);
          }
        };
        this._nativeConstantSourceNode.addEventListener("ended", resetInternalStateToPassive);
      }
    }
    stop(when = 0) {
      this._nativeConstantSourceNode.stop(when);
      if (this._constantSourceNodeRenderer !== null) {
        this._constantSourceNodeRenderer.stop = when;
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-renderer-factory.js
var createConstantSourceNodeRendererFactory = (connectAudioParam, createNativeConstantSourceNode, getNativeAudioNode2, renderAutomation, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeConstantSourceNodes = new WeakMap;
    let start = null;
    let stop = null;
    const createConstantSourceNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeConstantSourceNode = getNativeAudioNode2(proxy);
      const nativeConstantSourceNodeIsOwnedByContext = isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext);
      if (!nativeConstantSourceNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeConstantSourceNode.channelCount,
          channelCountMode: nativeConstantSourceNode.channelCountMode,
          channelInterpretation: nativeConstantSourceNode.channelInterpretation,
          offset: nativeConstantSourceNode.offset.value
        };
        nativeConstantSourceNode = createNativeConstantSourceNode(nativeOfflineAudioContext, options);
        if (start !== null) {
          nativeConstantSourceNode.start(start);
        }
        if (stop !== null) {
          nativeConstantSourceNode.stop(stop);
        }
      }
      renderedNativeConstantSourceNodes.set(nativeOfflineAudioContext, nativeConstantSourceNode);
      if (!nativeConstantSourceNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);
      return nativeConstantSourceNode;
    };
    return {
      set start(value) {
        start = value;
      },
      set stop(value) {
        stop = value;
      },
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeConstantSourceNode = renderedNativeConstantSourceNodes.get(nativeOfflineAudioContext);
        if (renderedNativeConstantSourceNode !== undefined) {
          return Promise.resolve(renderedNativeConstantSourceNode);
        }
        return createConstantSourceNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/convert-number-to-unsigned-long.js
var createConvertNumberToUnsignedLong = (unit32Array) => {
  return (value) => {
    unit32Array[0] = value;
    return unit32Array[0];
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/convolver-node-constructor.js
var DEFAULT_OPTIONS9 = {
  buffer: null,
  channelCount: 2,
  channelCountMode: "clamped-max",
  channelInterpretation: "speakers",
  disableNormalization: false
};
var createConvolverNodeConstructor = (audioNodeConstructor, createConvolverNodeRenderer, createNativeConvolverNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
  return class ConvolverNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS9, ...options };
      const nativeConvolverNode = createNativeConvolverNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const convolverNodeRenderer = isOffline ? createConvolverNodeRenderer() : null;
      super(context, false, nativeConvolverNode, convolverNodeRenderer);
      this._isBufferNullified = false;
      this._nativeConvolverNode = nativeConvolverNode;
      if (mergedOptions.buffer !== null) {
        setAudioNodeTailTime(this, mergedOptions.buffer.duration);
      }
    }
    get buffer() {
      if (this._isBufferNullified) {
        return null;
      }
      return this._nativeConvolverNode.buffer;
    }
    set buffer(value) {
      this._nativeConvolverNode.buffer = value;
      if (value === null && this._nativeConvolverNode.buffer !== null) {
        const nativeContext = this._nativeConvolverNode.context;
        this._nativeConvolverNode.buffer = nativeContext.createBuffer(1, 1, nativeContext.sampleRate);
        this._isBufferNullified = true;
        setAudioNodeTailTime(this, 0);
      } else {
        this._isBufferNullified = false;
        setAudioNodeTailTime(this, this._nativeConvolverNode.buffer === null ? 0 : this._nativeConvolverNode.buffer.duration);
      }
    }
    get normalize() {
      return this._nativeConvolverNode.normalize;
    }
    set normalize(value) {
      this._nativeConvolverNode.normalize = value;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/convolver-node-renderer-factory.js
var createConvolverNodeRendererFactory = (createNativeConvolverNode, getNativeAudioNode2, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeConvolverNodes = new WeakMap;
    const createConvolverNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeConvolverNode = getNativeAudioNode2(proxy);
      const nativeConvolverNodeIsOwnedByContext = isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext);
      if (!nativeConvolverNodeIsOwnedByContext) {
        const options = {
          buffer: nativeConvolverNode.buffer,
          channelCount: nativeConvolverNode.channelCount,
          channelCountMode: nativeConvolverNode.channelCountMode,
          channelInterpretation: nativeConvolverNode.channelInterpretation,
          disableNormalization: !nativeConvolverNode.normalize
        };
        nativeConvolverNode = createNativeConvolverNode(nativeOfflineAudioContext, options);
      }
      renderedNativeConvolverNodes.set(nativeOfflineAudioContext, nativeConvolverNode);
      if (isNativeAudioNodeFaker(nativeConvolverNode)) {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConvolverNode.inputs[0]);
      } else {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConvolverNode);
      }
      return nativeConvolverNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeConvolverNode = renderedNativeConvolverNodes.get(nativeOfflineAudioContext);
        if (renderedNativeConvolverNode !== undefined) {
          return Promise.resolve(renderedNativeConvolverNode);
        }
        return createConvolverNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/create-native-offline-audio-context.js
var createCreateNativeOfflineAudioContext = (createNotSupportedError, nativeOfflineAudioContextConstructor) => {
  return (numberOfChannels, length, sampleRate) => {
    if (nativeOfflineAudioContextConstructor === null) {
      throw new Error("Missing the native OfflineAudioContext constructor.");
    }
    try {
      return new nativeOfflineAudioContextConstructor(numberOfChannels, length, sampleRate);
    } catch (err) {
      if (err.name === "SyntaxError") {
        throw createNotSupportedError();
      }
      throw err;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/data-clone-error.js
var createDataCloneError = () => new DOMException("", "DataCloneError");

// ../../node_modules/standardized-audio-context/build/es2019/helpers/detach-array-buffer.js
var detachArrayBuffer = (arrayBuffer) => {
  const { port1, port2 } = new MessageChannel;
  return new Promise((resolve) => {
    const closeAndResolve = () => {
      port2.onmessage = null;
      port1.close();
      port2.close();
      resolve();
    };
    port2.onmessage = () => closeAndResolve();
    try {
      port1.postMessage(arrayBuffer, [arrayBuffer]);
    } catch {
    } finally {
      closeAndResolve();
    }
  });
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/decode-audio-data.js
var createDecodeAudioData = (audioBufferStore, cacheTestResult, createDataCloneError2, createEncodingError, detachedArrayBuffers, getNativeContext, isNativeContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, testPromiseSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds) => {
  return (anyContext, audioData) => {
    const nativeContext = isNativeContext(anyContext) ? anyContext : getNativeContext(anyContext);
    if (detachedArrayBuffers.has(audioData)) {
      const err = createDataCloneError2();
      return Promise.reject(err);
    }
    try {
      detachedArrayBuffers.add(audioData);
    } catch {
    }
    if (cacheTestResult(testPromiseSupport, () => testPromiseSupport(nativeContext))) {
      return nativeContext.decodeAudioData(audioData).then((audioBuffer) => {
        detachArrayBuffer(audioData).catch(() => {
        });
        if (!cacheTestResult(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
          wrapAudioBufferCopyChannelMethodsOutOfBounds(audioBuffer);
        }
        audioBufferStore.add(audioBuffer);
        return audioBuffer;
      });
    }
    return new Promise((resolve, reject) => {
      const complete = async () => {
        try {
          await detachArrayBuffer(audioData);
        } catch {
        }
      };
      const fail = (err) => {
        reject(err);
        complete();
      };
      try {
        nativeContext.decodeAudioData(audioData, (audioBuffer) => {
          if (typeof audioBuffer.copyFromChannel !== "function") {
            wrapAudioBufferCopyChannelMethods(audioBuffer);
            wrapAudioBufferGetChannelDataMethod(audioBuffer);
          }
          audioBufferStore.add(audioBuffer);
          complete().then(() => resolve(audioBuffer));
        }, (err) => {
          if (err === null) {
            fail(createEncodingError());
          } else {
            fail(err);
          }
        });
      } catch (err) {
        fail(err);
      }
    });
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/decrement-cycle-counter.js
var createDecrementCycleCounter = (connectNativeAudioNodeToNativeAudioNode2, cycleCounters, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, getNativeContext, isActiveAudioNode2, isNativeOfflineAudioContext) => {
  return (audioNode, count) => {
    const cycleCounter = cycleCounters.get(audioNode);
    if (cycleCounter === undefined) {
      throw new Error("Missing the expected cycle count.");
    }
    const nativeContext = getNativeContext(audioNode.context);
    const isOffline = isNativeOfflineAudioContext(nativeContext);
    if (cycleCounter === count) {
      cycleCounters.delete(audioNode);
      if (!isOffline && isActiveAudioNode2(audioNode)) {
        const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
        const { outputs } = getAudioNodeConnections2(audioNode);
        for (const output of outputs) {
          if (isAudioNodeOutputConnection(output)) {
            const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
            connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
          } else {
            const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
            nativeSourceAudioNode.connect(nativeDestinationAudioParam, output[1]);
          }
        }
      }
    } else {
      cycleCounters.set(audioNode, cycleCounter - count);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/delay-node-constructor.js
var DEFAULT_OPTIONS10 = {
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  delayTime: 0,
  maxDelayTime: 1
};
var createDelayNodeConstructor = (audioNodeConstructor, createAudioParam, createDelayNodeRenderer, createNativeDelayNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
  return class DelayNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS10, ...options };
      const nativeDelayNode = createNativeDelayNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const delayNodeRenderer = isOffline ? createDelayNodeRenderer(mergedOptions.maxDelayTime) : null;
      super(context, false, nativeDelayNode, delayNodeRenderer);
      this._delayTime = createAudioParam(this, isOffline, nativeDelayNode.delayTime);
      setAudioNodeTailTime(this, mergedOptions.maxDelayTime);
    }
    get delayTime() {
      return this._delayTime;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/delay-node-renderer-factory.js
var createDelayNodeRendererFactory = (connectAudioParam, createNativeDelayNode, getNativeAudioNode2, renderAutomation, renderInputsOfAudioNode) => {
  return (maxDelayTime) => {
    const renderedNativeDelayNodes = new WeakMap;
    const createDelayNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeDelayNode = getNativeAudioNode2(proxy);
      const nativeDelayNodeIsOwnedByContext = isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext);
      if (!nativeDelayNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeDelayNode.channelCount,
          channelCountMode: nativeDelayNode.channelCountMode,
          channelInterpretation: nativeDelayNode.channelInterpretation,
          delayTime: nativeDelayNode.delayTime.value,
          maxDelayTime
        };
        nativeDelayNode = createNativeDelayNode(nativeOfflineAudioContext, options);
      }
      renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);
      if (!nativeDelayNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDelayNode);
      return nativeDelayNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);
        if (renderedNativeDelayNode !== undefined) {
          return Promise.resolve(renderedNativeDelayNode);
        }
        return createDelayNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/delete-active-input-connection-to-audio-node.js
var createDeleteActiveInputConnectionToAudioNode = (pickElementFromSet2) => {
  return (activeInputs, source, output, input) => {
    return pickElementFromSet2(activeInputs[input], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/delete-unrendered-audio-worklet-node.js
var createDeleteUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes) => {
  return (nativeContext, audioWorkletNode) => {
    getUnrenderedAudioWorkletNodes(nativeContext).delete(audioWorkletNode);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/guards/delay-node.js
var isDelayNode = (audioNode) => {
  return "delayTime" in audioNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/detect-cycles.js
var createDetectCycles = (audioParamAudioNodeStore, getAudioNodeConnections2, getValueForKey2) => {
  return function detectCycles(chain, nextLink) {
    const audioNode = isAudioNode(nextLink) ? nextLink : getValueForKey2(audioParamAudioNodeStore, nextLink);
    if (isDelayNode(audioNode)) {
      return [];
    }
    if (chain[0] === audioNode) {
      return [chain];
    }
    if (chain.includes(audioNode)) {
      return [];
    }
    const { outputs } = getAudioNodeConnections2(audioNode);
    return Array.from(outputs).map((outputConnection) => detectCycles([...chain, audioNode], outputConnection[0])).reduce((mergedCycles, nestedCycles) => mergedCycles.concat(nestedCycles), []);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/disconnect-multiple-outputs.js
var getOutputAudioNodeAtIndex = (createIndexSizeError2, outputAudioNodes, output) => {
  const outputAudioNode = outputAudioNodes[output];
  if (outputAudioNode === undefined) {
    throw createIndexSizeError2();
  }
  return outputAudioNode;
};
var createDisconnectMultipleOutputs = (createIndexSizeError2) => {
  return (outputAudioNodes, destinationOrOutput = undefined, output = undefined, input = 0) => {
    if (destinationOrOutput === undefined) {
      return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect());
    }
    if (typeof destinationOrOutput === "number") {
      return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, destinationOrOutput).disconnect();
    }
    if (isNativeAudioNode(destinationOrOutput)) {
      if (output === undefined) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
      }
      if (input === undefined) {
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
      }
      return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0, input);
    }
    if (output === undefined) {
      return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
    }
    return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-constructor.js
var DEFAULT_OPTIONS11 = {
  attack: 0.003,
  channelCount: 2,
  channelCountMode: "clamped-max",
  channelInterpretation: "speakers",
  knee: 30,
  ratio: 12,
  release: 0.25,
  threshold: -24
};
var createDynamicsCompressorNodeConstructor = (audioNodeConstructor, createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
  return class DynamicsCompressorNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS11, ...options };
      const nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer() : null;
      super(context, false, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer);
      this._attack = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.attack);
      this._knee = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.knee);
      this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
      this._ratio = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.ratio);
      this._release = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.release);
      this._threshold = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.threshold);
      setAudioNodeTailTime(this, 0.006);
    }
    get attack() {
      return this._attack;
    }
    get channelCount() {
      return this._nativeDynamicsCompressorNode.channelCount;
    }
    set channelCount(value) {
      const previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;
      this._nativeDynamicsCompressorNode.channelCount = value;
      if (value > 2) {
        this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;
        throw createNotSupportedError();
      }
    }
    get channelCountMode() {
      return this._nativeDynamicsCompressorNode.channelCountMode;
    }
    set channelCountMode(value) {
      const previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;
      this._nativeDynamicsCompressorNode.channelCountMode = value;
      if (value === "max") {
        this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;
        throw createNotSupportedError();
      }
    }
    get knee() {
      return this._knee;
    }
    get ratio() {
      return this._ratio;
    }
    get reduction() {
      if (typeof this._nativeDynamicsCompressorNode.reduction.value === "number") {
        return this._nativeDynamicsCompressorNode.reduction.value;
      }
      return this._nativeDynamicsCompressorNode.reduction;
    }
    get release() {
      return this._release;
    }
    get threshold() {
      return this._threshold;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-renderer-factory.js
var createDynamicsCompressorNodeRendererFactory = (connectAudioParam, createNativeDynamicsCompressorNode, getNativeAudioNode2, renderAutomation, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeDynamicsCompressorNodes = new WeakMap;
    const createDynamicsCompressorNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeDynamicsCompressorNode = getNativeAudioNode2(proxy);
      const nativeDynamicsCompressorNodeIsOwnedByContext = isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext);
      if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
        const options = {
          attack: nativeDynamicsCompressorNode.attack.value,
          channelCount: nativeDynamicsCompressorNode.channelCount,
          channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
          channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
          knee: nativeDynamicsCompressorNode.knee.value,
          ratio: nativeDynamicsCompressorNode.ratio.value,
          release: nativeDynamicsCompressorNode.release.value,
          threshold: nativeDynamicsCompressorNode.threshold.value
        };
        nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeOfflineAudioContext, options);
      }
      renderedNativeDynamicsCompressorNodes.set(nativeOfflineAudioContext, nativeDynamicsCompressorNode);
      if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
        await renderAutomation(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
        await renderAutomation(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
        await renderAutomation(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
        await renderAutomation(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
        await connectAudioParam(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
        await connectAudioParam(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
        await connectAudioParam(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
        await connectAudioParam(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);
      return nativeDynamicsCompressorNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);
        if (renderedNativeDynamicsCompressorNode !== undefined) {
          return Promise.resolve(renderedNativeDynamicsCompressorNode);
        }
        return createDynamicsCompressorNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/encoding-error.js
var createEncodingError = () => new DOMException("", "EncodingError");

// ../../node_modules/standardized-audio-context/build/es2019/factories/evaluate-source.js
var createEvaluateSource = (window2) => {
  return (source) => new Promise((resolve, reject) => {
    if (window2 === null) {
      reject(new SyntaxError);
      return;
    }
    const head = window2.document.head;
    if (head === null) {
      reject(new SyntaxError);
    } else {
      const script = window2.document.createElement("script");
      const blob = new Blob([source], { type: "application/javascript" });
      const url = URL.createObjectURL(blob);
      const originalOnErrorHandler = window2.onerror;
      const removeErrorEventListenerAndRevokeUrl = () => {
        window2.onerror = originalOnErrorHandler;
        URL.revokeObjectURL(url);
      };
      window2.onerror = (message, src, lineno, colno, error) => {
        if (src === url || src === window2.location.href && lineno === 1 && colno === 1) {
          removeErrorEventListenerAndRevokeUrl();
          reject(error);
          return false;
        }
        if (originalOnErrorHandler !== null) {
          return originalOnErrorHandler(message, src, lineno, colno, error);
        }
      };
      script.onerror = () => {
        removeErrorEventListenerAndRevokeUrl();
        reject(new SyntaxError);
      };
      script.onload = () => {
        removeErrorEventListenerAndRevokeUrl();
        resolve();
      };
      script.src = url;
      script.type = "module";
      head.appendChild(script);
    }
  });
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/event-target-constructor.js
var createEventTargetConstructor = (wrapEventListener) => {
  return class EventTarget {
    constructor(_nativeEventTarget) {
      this._nativeEventTarget = _nativeEventTarget;
      this._listeners = new WeakMap;
    }
    addEventListener(type, listener, options) {
      if (listener !== null) {
        let wrappedEventListener = this._listeners.get(listener);
        if (wrappedEventListener === undefined) {
          wrappedEventListener = wrapEventListener(this, listener);
          if (typeof listener === "function") {
            this._listeners.set(listener, wrappedEventListener);
          }
        }
        this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
      }
    }
    dispatchEvent(event) {
      return this._nativeEventTarget.dispatchEvent(event);
    }
    removeEventListener(type, listener, options) {
      const wrappedEventListener = listener === null ? undefined : this._listeners.get(listener);
      this._nativeEventTarget.removeEventListener(type, wrappedEventListener === undefined ? null : wrappedEventListener, options);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/expose-current-frame-and-current-time.js
var createExposeCurrentFrameAndCurrentTime = (window2) => {
  return (currentTime, sampleRate, fn) => {
    Object.defineProperties(window2, {
      currentFrame: {
        configurable: true,
        get() {
          return Math.round(currentTime * sampleRate);
        }
      },
      currentTime: {
        configurable: true,
        get() {
          return currentTime;
        }
      }
    });
    try {
      return fn();
    } finally {
      if (window2 !== null) {
        delete window2.currentFrame;
        delete window2.currentTime;
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/fetch-source.js
var createFetchSource = (createAbortError2) => {
  return async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return [await response.text(), response.url];
      }
    } catch {
    }
    throw createAbortError2();
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/gain-node-constructor.js
var DEFAULT_OPTIONS12 = {
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  gain: 1
};
var createGainNodeConstructor = (audioNodeConstructor, createAudioParam, createGainNodeRenderer, createNativeGainNode, getNativeContext, isNativeOfflineAudioContext) => {
  return class GainNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS12, ...options };
      const nativeGainNode = createNativeGainNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const gainNodeRenderer = isOffline ? createGainNodeRenderer() : null;
      super(context, false, nativeGainNode, gainNodeRenderer);
      this._gain = createAudioParam(this, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
    }
    get gain() {
      return this._gain;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/gain-node-renderer-factory.js
var createGainNodeRendererFactory = (connectAudioParam, createNativeGainNode, getNativeAudioNode2, renderAutomation, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeGainNodes = new WeakMap;
    const createGainNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeGainNode = getNativeAudioNode2(proxy);
      const nativeGainNodeIsOwnedByContext = isOwnedByContext(nativeGainNode, nativeOfflineAudioContext);
      if (!nativeGainNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeGainNode.channelCount,
          channelCountMode: nativeGainNode.channelCountMode,
          channelInterpretation: nativeGainNode.channelInterpretation,
          gain: nativeGainNode.gain.value
        };
        nativeGainNode = createNativeGainNode(nativeOfflineAudioContext, options);
      }
      renderedNativeGainNodes.set(nativeOfflineAudioContext, nativeGainNode);
      if (!nativeGainNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeGainNode);
      return nativeGainNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);
        if (renderedNativeGainNode !== undefined) {
          return Promise.resolve(renderedNativeGainNode);
        }
        return createGainNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-active-audio-worklet-node-inputs.js
var createGetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore, getValueForKey2) => {
  return (nativeAudioWorkletNode) => getValueForKey2(activeAudioWorkletNodeInputsStore, nativeAudioWorkletNode);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-renderer.js
var createGetAudioNodeRenderer = (getAudioNodeConnections2) => {
  return (audioNode) => {
    const audioNodeConnections = getAudioNodeConnections2(audioNode);
    if (audioNodeConnections.renderer === null) {
      throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
    }
    return audioNodeConnections.renderer;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-tail-time.js
var createGetAudioNodeTailTime = (audioNodeTailTimeStore) => {
  return (audioNode) => {
    var _a;
    return (_a = audioNodeTailTimeStore.get(audioNode)) !== null && _a !== undefined ? _a : 0;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-audio-param-renderer.js
var createGetAudioParamRenderer = (getAudioParamConnections2) => {
  return (audioParam) => {
    const audioParamConnections = getAudioParamConnections2(audioParam);
    if (audioParamConnections.renderer === null) {
      throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
    }
    return audioParamConnections.renderer;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-backup-offline-audio-context.js
var createGetBackupOfflineAudioContext = (backupOfflineAudioContextStore) => {
  return (nativeContext) => {
    return backupOfflineAudioContextStore.get(nativeContext);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/invalid-state-error.js
var createInvalidStateError = () => new DOMException("", "InvalidStateError");

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-native-context.js
var createGetNativeContext = (contextStore) => {
  return (context) => {
    const nativeContext = contextStore.get(context);
    if (nativeContext === undefined) {
      throw createInvalidStateError();
    }
    return nativeContext;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-or-create-backup-offline-audio-context.js
var createGetOrCreateBackupOfflineAudioContext = (backupOfflineAudioContextStore, nativeOfflineAudioContextConstructor) => {
  return (nativeContext) => {
    let backupOfflineAudioContext = backupOfflineAudioContextStore.get(nativeContext);
    if (backupOfflineAudioContext !== undefined) {
      return backupOfflineAudioContext;
    }
    if (nativeOfflineAudioContextConstructor === null) {
      throw new Error("Missing the native OfflineAudioContext constructor.");
    }
    backupOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
    backupOfflineAudioContextStore.set(nativeContext, backupOfflineAudioContext);
    return backupOfflineAudioContext;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/get-unrendered-audio-worklet-nodes.js
var createGetUnrenderedAudioWorkletNodes = (unrenderedAudioWorkletNodeStore) => {
  return (nativeContext) => {
    const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore.get(nativeContext);
    if (unrenderedAudioWorkletNodes === undefined) {
      throw new Error("The context has no set of AudioWorkletNodes.");
    }
    return unrenderedAudioWorkletNodes;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/invalid-access-error.js
var createInvalidAccessError = () => new DOMException("", "InvalidAccessError");

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-iir-filter-node-get-frequency-response-method.js
var wrapIIRFilterNodeGetFrequencyResponseMethod = (nativeIIRFilterNode) => {
  nativeIIRFilterNode.getFrequencyResponse = ((getFrequencyResponse) => {
    return (frequencyHz, magResponse, phaseResponse) => {
      if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
        throw createInvalidAccessError();
      }
      return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
    };
  })(nativeIIRFilterNode.getFrequencyResponse);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-constructor.js
var DEFAULT_OPTIONS13 = {
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers"
};
var createIIRFilterNodeConstructor = (audioNodeConstructor, createNativeIIRFilterNode, createIIRFilterNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
  return class IIRFilterNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const mergedOptions = { ...DEFAULT_OPTIONS13, ...options };
      const nativeIIRFilterNode = createNativeIIRFilterNode(nativeContext, isOffline ? null : context.baseLatency, mergedOptions);
      const iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer(mergedOptions.feedback, mergedOptions.feedforward) : null;
      super(context, false, nativeIIRFilterNode, iirFilterNodeRenderer);
      wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
      this._nativeIIRFilterNode = nativeIIRFilterNode;
      setAudioNodeTailTime(this, 1);
    }
    getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
      return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/filter-buffer.js
var filterBuffer = (feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) => {
  const inputLength = input.length;
  let i = bufferIndex;
  for (let j = 0;j < inputLength; j += 1) {
    let y = feedforward[0] * input[j];
    for (let k = 1;k < minLength; k += 1) {
      const x = i - k & bufferLength - 1;
      y += feedforward[k] * xBuffer[x];
      y -= feedback[k] * yBuffer[x];
    }
    for (let k = minLength;k < feedforwardLength; k += 1) {
      y += feedforward[k] * xBuffer[i - k & bufferLength - 1];
    }
    for (let k = minLength;k < feedbackLength; k += 1) {
      y -= feedback[k] * yBuffer[i - k & bufferLength - 1];
    }
    xBuffer[i] = input[j];
    yBuffer[i] = y;
    i = i + 1 & bufferLength - 1;
    output[j] = y;
  }
  return i;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-renderer-factory.js
var filterFullBuffer = (renderedBuffer, nativeOfflineAudioContext, feedback, feedforward) => {
  const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
  const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
  const feedbackLength = convertedFeedback.length;
  const feedforwardLength = convertedFeedforward.length;
  const minLength = Math.min(feedbackLength, feedforwardLength);
  if (convertedFeedback[0] !== 1) {
    for (let i = 0;i < feedbackLength; i += 1) {
      convertedFeedforward[i] /= convertedFeedback[0];
    }
    for (let i = 1;i < feedforwardLength; i += 1) {
      convertedFeedback[i] /= convertedFeedback[0];
    }
  }
  const bufferLength = 32;
  const xBuffer = new Float32Array(bufferLength);
  const yBuffer = new Float32Array(bufferLength);
  const filteredBuffer = nativeOfflineAudioContext.createBuffer(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
  const numberOfChannels = renderedBuffer.numberOfChannels;
  for (let i = 0;i < numberOfChannels; i += 1) {
    const input = renderedBuffer.getChannelData(i);
    const output = filteredBuffer.getChannelData(i);
    xBuffer.fill(0);
    yBuffer.fill(0);
    filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffer, yBuffer, 0, bufferLength, input, output);
  }
  return filteredBuffer;
};
var createIIRFilterNodeRendererFactory = (createNativeAudioBufferSourceNode, getNativeAudioNode2, nativeOfflineAudioContextConstructor, renderInputsOfAudioNode, renderNativeOfflineAudioContext) => {
  return (feedback, feedforward) => {
    const renderedNativeAudioNodes = new WeakMap;
    let filteredBufferPromise = null;
    const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeAudioBufferSourceNode = null;
      let nativeIIRFilterNode = getNativeAudioNode2(proxy);
      const nativeIIRFilterNodeIsOwnedByContext = isOwnedByContext(nativeIIRFilterNode, nativeOfflineAudioContext);
      if (nativeOfflineAudioContext.createIIRFilter === undefined) {
        nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext, {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: false,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1
        });
      } else if (!nativeIIRFilterNodeIsOwnedByContext) {
        nativeIIRFilterNode = nativeOfflineAudioContext.createIIRFilter(feedforward, feedback);
      }
      renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode === null ? nativeIIRFilterNode : nativeAudioBufferSourceNode);
      if (nativeAudioBufferSourceNode !== null) {
        if (filteredBufferPromise === null) {
          if (nativeOfflineAudioContextConstructor === null) {
            throw new Error("Missing the native OfflineAudioContext constructor.");
          }
          const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor(proxy.context.destination.channelCount, proxy.context.length, nativeOfflineAudioContext.sampleRate);
          filteredBufferPromise = (async () => {
            await renderInputsOfAudioNode(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);
            const renderedBuffer = await renderNativeOfflineAudioContext(partialOfflineAudioContext);
            return filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
          })();
        }
        const filteredBuffer = await filteredBufferPromise;
        nativeAudioBufferSourceNode.buffer = filteredBuffer;
        nativeAudioBufferSourceNode.start(0);
        return nativeAudioBufferSourceNode;
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeIIRFilterNode);
      return nativeIIRFilterNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioNode !== undefined) {
          return Promise.resolve(renderedNativeAudioNode);
        }
        return createAudioNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/increment-cycle-counter-factory.js
var createIncrementCycleCounterFactory = (cycleCounters, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, isActiveAudioNode2) => {
  return (isOffline) => {
    return (audioNode, count) => {
      const cycleCounter = cycleCounters.get(audioNode);
      if (cycleCounter === undefined) {
        if (!isOffline && isActiveAudioNode2(audioNode)) {
          const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
          const { outputs } = getAudioNodeConnections2(audioNode);
          for (const output of outputs) {
            if (isAudioNodeOutputConnection(output)) {
              const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
              disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
            } else {
              const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
              nativeSourceAudioNode.disconnect(nativeDestinationAudioParam, output[1]);
            }
          }
        }
        cycleCounters.set(audioNode, count);
      } else {
        cycleCounters.set(audioNode, cycleCounter + count);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-context.js
var createIsAnyAudioContext = (contextStore, isNativeAudioContext) => {
  return (anything) => {
    const nativeContext = contextStore.get(anything);
    return isNativeAudioContext(nativeContext) || isNativeAudioContext(anything);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-node.js
var createIsAnyAudioNode = (audioNodeStore, isNativeAudioNode2) => {
  return (anything) => audioNodeStore.has(anything) || isNativeAudioNode2(anything);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-param.js
var createIsAnyAudioParam = (audioParamStore, isNativeAudioParam) => {
  return (anything) => audioParamStore.has(anything) || isNativeAudioParam(anything);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-any-offline-audio-context.js
var createIsAnyOfflineAudioContext = (contextStore, isNativeOfflineAudioContext) => {
  return (anything) => {
    const nativeContext = contextStore.get(anything);
    return isNativeOfflineAudioContext(nativeContext) || isNativeOfflineAudioContext(anything);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-context.js
var createIsNativeAudioContext = (nativeAudioContextConstructor) => {
  return (anything) => {
    return nativeAudioContextConstructor !== null && anything instanceof nativeAudioContextConstructor;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-node.js
var createIsNativeAudioNode = (window2) => {
  return (anything) => {
    return window2 !== null && typeof window2.AudioNode === "function" && anything instanceof window2.AudioNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-param.js
var createIsNativeAudioParam = (window2) => {
  return (anything) => {
    return window2 !== null && typeof window2.AudioParam === "function" && anything instanceof window2.AudioParam;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-native-context.js
var createIsNativeContext = (isNativeAudioContext, isNativeOfflineAudioContext) => {
  return (anything) => {
    return isNativeAudioContext(anything) || isNativeOfflineAudioContext(anything);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-native-offline-audio-context.js
var createIsNativeOfflineAudioContext = (nativeOfflineAudioContextConstructor) => {
  return (anything) => {
    return nativeOfflineAudioContextConstructor !== null && anything instanceof nativeOfflineAudioContextConstructor;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/is-secure-context.js
var createIsSecureContext = (window2) => window2 !== null && window2.isSecureContext;

// ../../node_modules/standardized-audio-context/build/es2019/factories/media-element-audio-source-node-constructor.js
var createMediaElementAudioSourceNodeConstructor = (audioNodeConstructor, createNativeMediaElementAudioSourceNode, getNativeContext, isNativeOfflineAudioContext) => {
  return class MediaElementAudioSourceNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode(nativeContext, options);
      if (isNativeOfflineAudioContext(nativeContext)) {
        throw TypeError();
      }
      super(context, true, nativeMediaElementAudioSourceNode, null);
      this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
    }
    get mediaElement() {
      return this._nativeMediaElementAudioSourceNode.mediaElement;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-destination-node-constructor.js
var DEFAULT_OPTIONS14 = {
  channelCount: 2,
  channelCountMode: "explicit",
  channelInterpretation: "speakers"
};
var createMediaStreamAudioDestinationNodeConstructor = (audioNodeConstructor, createNativeMediaStreamAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext) => {
  return class MediaStreamAudioDestinationNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      if (isNativeOfflineAudioContext(nativeContext)) {
        throw new TypeError;
      }
      const mergedOptions = { ...DEFAULT_OPTIONS14, ...options };
      const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode(nativeContext, mergedOptions);
      super(context, false, nativeMediaStreamAudioDestinationNode, null);
      this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
    }
    get stream() {
      return this._nativeMediaStreamAudioDestinationNode.stream;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-source-node-constructor.js
var createMediaStreamAudioSourceNodeConstructor = (audioNodeConstructor, createNativeMediaStreamAudioSourceNode, getNativeContext, isNativeOfflineAudioContext) => {
  return class MediaStreamAudioSourceNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode(nativeContext, options);
      if (isNativeOfflineAudioContext(nativeContext)) {
        throw new TypeError;
      }
      super(context, true, nativeMediaStreamAudioSourceNode, null);
      this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
    }
    get mediaStream() {
      return this._nativeMediaStreamAudioSourceNode.mediaStream;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/media-stream-track-audio-source-node-constructor.js
var createMediaStreamTrackAudioSourceNodeConstructor = (audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext) => {
  return class MediaStreamTrackAudioSourceNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode(nativeContext, options);
      super(context, true, nativeMediaStreamTrackAudioSourceNode, null);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/minimal-audio-context-constructor.js
var createMinimalAudioContextConstructor = (createInvalidStateError2, createNotSupportedError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor) => {
  return class MinimalAudioContext extends minimalBaseAudioContextConstructor {
    constructor(options = {}) {
      if (nativeAudioContextConstructor === null) {
        throw new Error("Missing the native AudioContext constructor.");
      }
      let nativeAudioContext;
      try {
        nativeAudioContext = new nativeAudioContextConstructor(options);
      } catch (err) {
        if (err.code === 12 && err.message === "sampleRate is not in range") {
          throw createNotSupportedError();
        }
        throw err;
      }
      if (nativeAudioContext === null) {
        throw createUnknownError();
      }
      if (!isValidLatencyHint(options.latencyHint)) {
        throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
      }
      if (options.sampleRate !== undefined && nativeAudioContext.sampleRate !== options.sampleRate) {
        throw createNotSupportedError();
      }
      super(nativeAudioContext, 2);
      const { latencyHint } = options;
      const { sampleRate } = nativeAudioContext;
      this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === undefined ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
      this._nativeAudioContext = nativeAudioContext;
      if (nativeAudioContextConstructor.name === "webkitAudioContext") {
        this._nativeGainNode = nativeAudioContext.createGain();
        this._nativeOscillatorNode = nativeAudioContext.createOscillator();
        this._nativeGainNode.gain.value = 0.0000000000000000000000000000000000001;
        this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
        this._nativeOscillatorNode.start();
      } else {
        this._nativeGainNode = null;
        this._nativeOscillatorNode = null;
      }
      this._state = null;
      if (nativeAudioContext.state === "running") {
        this._state = "suspended";
        const revokeState = () => {
          if (this._state === "suspended") {
            this._state = null;
          }
          nativeAudioContext.removeEventListener("statechange", revokeState);
        };
        nativeAudioContext.addEventListener("statechange", revokeState);
      }
    }
    get baseLatency() {
      return this._baseLatency;
    }
    get state() {
      return this._state !== null ? this._state : this._nativeAudioContext.state;
    }
    close() {
      if (this.state === "closed") {
        return this._nativeAudioContext.close().then(() => {
          throw createInvalidStateError2();
        });
      }
      if (this._state === "suspended") {
        this._state = null;
      }
      return this._nativeAudioContext.close().then(() => {
        if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
          this._nativeOscillatorNode.stop();
          this._nativeGainNode.disconnect();
          this._nativeOscillatorNode.disconnect();
        }
        deactivateAudioGraph(this);
      });
    }
    resume() {
      if (this._state === "suspended") {
        return new Promise((resolve, reject) => {
          const resolvePromise = () => {
            this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
            if (this._nativeAudioContext.state === "running") {
              resolve();
            } else {
              this.resume().then(resolve, reject);
            }
          };
          this._nativeAudioContext.addEventListener("statechange", resolvePromise);
        });
      }
      return this._nativeAudioContext.resume().catch((err) => {
        if (err === undefined || err.code === 15) {
          throw createInvalidStateError2();
        }
        throw err;
      });
    }
    suspend() {
      return this._nativeAudioContext.suspend().catch((err) => {
        if (err === undefined) {
          throw createInvalidStateError2();
        }
        throw err;
      });
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/minimal-base-audio-context-constructor.js
var createMinimalBaseAudioContextConstructor = (audioDestinationNodeConstructor, createAudioListener, eventTargetConstructor, isNativeOfflineAudioContext, unrenderedAudioWorkletNodeStore, wrapEventListener) => {
  return class MinimalBaseAudioContext extends eventTargetConstructor {
    constructor(_nativeContext, numberOfChannels) {
      super(_nativeContext);
      this._nativeContext = _nativeContext;
      CONTEXT_STORE.set(this, _nativeContext);
      if (isNativeOfflineAudioContext(_nativeContext)) {
        unrenderedAudioWorkletNodeStore.set(_nativeContext, new Set);
      }
      this._destination = new audioDestinationNodeConstructor(this, numberOfChannels);
      this._listener = createAudioListener(this, _nativeContext);
      this._onstatechange = null;
    }
    get currentTime() {
      return this._nativeContext.currentTime;
    }
    get destination() {
      return this._destination;
    }
    get listener() {
      return this._listener;
    }
    get onstatechange() {
      return this._onstatechange;
    }
    set onstatechange(value) {
      const wrappedListener = typeof value === "function" ? wrapEventListener(this, value) : null;
      this._nativeContext.onstatechange = wrappedListener;
      const nativeOnStateChange = this._nativeContext.onstatechange;
      this._onstatechange = nativeOnStateChange !== null && nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
    }
    get sampleRate() {
      return this._nativeContext.sampleRate;
    }
    get state() {
      return this._nativeContext.state;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-promise-support.js
var testPromiseSupport = (nativeContext) => {
  const uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
  try {
    const promise = nativeContext.decodeAudioData(uint32Array.buffer, () => {
    });
    if (promise === undefined) {
      return false;
    }
    promise.catch(() => {
    });
    return true;
  } catch {
  }
  return false;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/minimal-offline-audio-context-constructor.js
var DEFAULT_OPTIONS15 = {
  numberOfChannels: 1
};
var createMinimalOfflineAudioContextConstructor = (cacheTestResult, createInvalidStateError2, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering) => {
  return class MinimalOfflineAudioContext extends minimalBaseAudioContextConstructor {
    constructor(options) {
      const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS15, ...options };
      const nativeOfflineAudioContext = createNativeOfflineAudioContext(numberOfChannels, length, sampleRate);
      if (!cacheTestResult(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
        nativeOfflineAudioContext.addEventListener("statechange", (() => {
          let i = 0;
          const delayStateChangeEvent = (event) => {
            if (this._state === "running") {
              if (i > 0) {
                nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                event.stopImmediatePropagation();
                this._waitForThePromiseToSettle(event);
              } else {
                i += 1;
              }
            }
          };
          return delayStateChangeEvent;
        })());
      }
      super(nativeOfflineAudioContext, numberOfChannels);
      this._length = length;
      this._nativeOfflineAudioContext = nativeOfflineAudioContext;
      this._state = null;
    }
    get length() {
      if (this._nativeOfflineAudioContext.length === undefined) {
        return this._length;
      }
      return this._nativeOfflineAudioContext.length;
    }
    get state() {
      return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
    }
    startRendering() {
      if (this._state === "running") {
        return Promise.reject(createInvalidStateError2());
      }
      this._state = "running";
      return startRendering(this.destination, this._nativeOfflineAudioContext).finally(() => {
        this._state = null;
        deactivateAudioGraph(this);
      });
    }
    _waitForThePromiseToSettle(event) {
      if (this._state === null) {
        this._nativeOfflineAudioContext.dispatchEvent(event);
      } else {
        setTimeout(() => this._waitForThePromiseToSettle(event));
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/monitor-connections.js
var createMonitorConnections = (insertElementInSet2, isNativeAudioNode2) => {
  return (nativeAudioNode, whenConnected, whenDisconnected) => {
    const connections = new Set;
    nativeAudioNode.connect = ((connect) => {
      return (destination, output = 0, input = 0) => {
        const wasDisconnected = connections.size === 0;
        if (isNativeAudioNode2(destination)) {
          connect.call(nativeAudioNode, destination, output, input);
          insertElementInSet2(connections, [destination, output, input], (connection) => connection[0] === destination && connection[1] === output && connection[2] === input, true);
          if (wasDisconnected) {
            whenConnected();
          }
          return destination;
        }
        connect.call(nativeAudioNode, destination, output);
        insertElementInSet2(connections, [destination, output], (connection) => connection[0] === destination && connection[1] === output, true);
        if (wasDisconnected) {
          whenConnected();
        }
        return;
      };
    })(nativeAudioNode.connect);
    nativeAudioNode.disconnect = ((disconnect) => {
      return (destinationOrOutput, output, input) => {
        const wasConnected = connections.size > 0;
        if (destinationOrOutput === undefined) {
          disconnect.apply(nativeAudioNode);
          connections.clear();
        } else if (typeof destinationOrOutput === "number") {
          disconnect.call(nativeAudioNode, destinationOrOutput);
          for (const connection of connections) {
            if (connection[1] === destinationOrOutput) {
              connections.delete(connection);
            }
          }
        } else {
          if (isNativeAudioNode2(destinationOrOutput)) {
            disconnect.call(nativeAudioNode, destinationOrOutput, output, input);
          } else {
            disconnect.call(nativeAudioNode, destinationOrOutput, output);
          }
          for (const connection of connections) {
            if (connection[0] === destinationOrOutput && (output === undefined || connection[1] === output) && (input === undefined || connection[2] === input)) {
              connections.delete(connection);
            }
          }
        }
        const isDisconnected = connections.size === 0;
        if (wasConnected && isDisconnected) {
          whenDisconnected();
        }
      };
    })(nativeAudioNode.disconnect);
    return nativeAudioNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-option.js
var assignNativeAudioNodeOption = (nativeAudioNode, options, option) => {
  const value = options[option];
  if (value !== undefined && value !== nativeAudioNode[option]) {
    nativeAudioNode[option] = value;
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-options.js
var assignNativeAudioNodeOptions = (nativeAudioNode, options) => {
  assignNativeAudioNodeOption(nativeAudioNode, options, "channelCount");
  assignNativeAudioNodeOption(nativeAudioNode, options, "channelCountMode");
  assignNativeAudioNodeOption(nativeAudioNode, options, "channelInterpretation");
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-analyser-node-get-float-time-domain-data-method-support.js
var testAnalyserNodeGetFloatTimeDomainDataMethodSupport = (nativeAnalyserNode) => {
  return typeof nativeAnalyserNode.getFloatTimeDomainData === "function";
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-analyser-node-get-float-time-domain-data-method.js
var wrapAnalyserNodeGetFloatTimeDomainDataMethod = (nativeAnalyserNode) => {
  nativeAnalyserNode.getFloatTimeDomainData = (array) => {
    const byteTimeDomainData = new Uint8Array(array.length);
    nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);
    const length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);
    for (let i = 0;i < length; i += 1) {
      array[i] = (byteTimeDomainData[i] - 128) * 0.0078125;
    }
    return array;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-analyser-node-factory.js
var createNativeAnalyserNodeFactory = (cacheTestResult, createIndexSizeError2) => {
  return (nativeContext, options) => {
    const nativeAnalyserNode = nativeContext.createAnalyser();
    assignNativeAudioNodeOptions(nativeAnalyserNode, options);
    if (!(options.maxDecibels > options.minDecibels)) {
      throw createIndexSizeError2();
    }
    assignNativeAudioNodeOption(nativeAnalyserNode, options, "fftSize");
    assignNativeAudioNodeOption(nativeAnalyserNode, options, "maxDecibels");
    assignNativeAudioNodeOption(nativeAnalyserNode, options, "minDecibels");
    assignNativeAudioNodeOption(nativeAnalyserNode, options, "smoothingTimeConstant");
    if (!cacheTestResult(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode))) {
      wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
    }
    return nativeAnalyserNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-constructor.js
var createNativeAudioBufferConstructor = (window2) => {
  if (window2 === null) {
    return null;
  }
  if (window2.hasOwnProperty("AudioBuffer")) {
    return window2.AudioBuffer;
  }
  return null;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-audio-param-value.js
var assignNativeAudioNodeAudioParamValue = (nativeAudioNode, options, audioParam) => {
  const value = options[audioParam];
  if (value !== undefined && value !== nativeAudioNode[audioParam].value) {
    nativeAudioNode[audioParam].value = value;
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-consecutive-calls.js
var wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = (nativeAudioBufferSourceNode) => {
  nativeAudioBufferSourceNode.start = ((start) => {
    let isScheduled = false;
    return (when = 0, offset = 0, duration) => {
      if (isScheduled) {
        throw createInvalidStateError();
      }
      start.call(nativeAudioBufferSourceNode, when, offset, duration);
      isScheduled = true;
    };
  })(nativeAudioBufferSourceNode.start);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-start-method-negative-parameters.js
var wrapAudioScheduledSourceNodeStartMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
  nativeAudioScheduledSourceNode.start = ((start) => {
    return (when = 0, offset = 0, duration) => {
      if (typeof duration === "number" && duration < 0 || offset < 0 || when < 0) {
        throw new RangeError("The parameters can't be negative.");
      }
      start.call(nativeAudioScheduledSourceNode, when, offset, duration);
    };
  })(nativeAudioScheduledSourceNode.start);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-negative-parameters.js
var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
  nativeAudioScheduledSourceNode.stop = ((stop) => {
    return (when = 0) => {
      if (when < 0) {
        throw new RangeError("The parameter can't be negative.");
      }
      stop.call(nativeAudioScheduledSourceNode, when);
    };
  })(nativeAudioScheduledSourceNode.stop);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-source-node-factory.js
var createNativeAudioBufferSourceNodeFactory = (addSilentConnection, cacheTestResult, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodOffsetClampingSupport, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioBufferSourceNodeStartMethodOffsetClampling, wrapAudioBufferSourceNodeStopMethodNullifiedBuffer, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls) => {
  return (nativeContext, options) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
    assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, "playbackRate");
    assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "buffer");
    assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loop");
    assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopEnd");
    assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopStart");
    if (!cacheTestResult(testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, () => testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport(nativeContext))) {
      wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode);
    }
    if (!cacheTestResult(testAudioBufferSourceNodeStartMethodOffsetClampingSupport, () => testAudioBufferSourceNodeStartMethodOffsetClampingSupport(nativeContext))) {
      wrapAudioBufferSourceNodeStartMethodOffsetClampling(nativeAudioBufferSourceNode);
    }
    if (!cacheTestResult(testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, () => testAudioBufferSourceNodeStopMethodNullifiedBufferSupport(nativeContext))) {
      wrapAudioBufferSourceNodeStopMethodNullifiedBuffer(nativeAudioBufferSourceNode, nativeContext);
    }
    if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioBufferSourceNode);
    }
    if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(nativeAudioBufferSourceNode, nativeContext);
    }
    if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
    }
    addSilentConnection(nativeContext, nativeAudioBufferSourceNode);
    return nativeAudioBufferSourceNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-audio-context-constructor.js
var createNativeAudioContextConstructor = (window2) => {
  if (window2 === null) {
    return null;
  }
  if (window2.hasOwnProperty("AudioContext")) {
    return window2.AudioContext;
  }
  return window2.hasOwnProperty("webkitAudioContext") ? window2.webkitAudioContext : null;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-audio-destination-node.js
var createNativeAudioDestinationNodeFactory = (createNativeGainNode, overwriteAccessors) => {
  return (nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) => {
    const nativeAudioDestinationNode = nativeContext.destination;
    if (nativeAudioDestinationNode.channelCount !== channelCount) {
      try {
        nativeAudioDestinationNode.channelCount = channelCount;
      } catch {
      }
    }
    if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== "explicit") {
      nativeAudioDestinationNode.channelCountMode = "explicit";
    }
    if (nativeAudioDestinationNode.maxChannelCount === 0) {
      Object.defineProperty(nativeAudioDestinationNode, "maxChannelCount", {
        value: channelCount
      });
    }
    const gainNode = createNativeGainNode(nativeContext, {
      channelCount,
      channelCountMode: nativeAudioDestinationNode.channelCountMode,
      channelInterpretation: nativeAudioDestinationNode.channelInterpretation,
      gain: 1
    });
    overwriteAccessors(gainNode, "channelCount", (get) => () => get.call(gainNode), (set) => (value) => {
      set.call(gainNode, value);
      try {
        nativeAudioDestinationNode.channelCount = value;
      } catch (err) {
        if (value > nativeAudioDestinationNode.maxChannelCount) {
          throw err;
        }
      }
    });
    overwriteAccessors(gainNode, "channelCountMode", (get) => () => get.call(gainNode), (set) => (value) => {
      set.call(gainNode, value);
      nativeAudioDestinationNode.channelCountMode = value;
    });
    overwriteAccessors(gainNode, "channelInterpretation", (get) => () => get.call(gainNode), (set) => (value) => {
      set.call(gainNode, value);
      nativeAudioDestinationNode.channelInterpretation = value;
    });
    Object.defineProperty(gainNode, "maxChannelCount", {
      get: () => nativeAudioDestinationNode.maxChannelCount
    });
    gainNode.connect(nativeAudioDestinationNode);
    return gainNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-constructor.js
var createNativeAudioWorkletNodeConstructor = (window2) => {
  if (window2 === null) {
    return null;
  }
  return window2.hasOwnProperty("AudioWorkletNode") ? window2.AudioWorkletNode : null;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-clonability-of-audio-worklet-node-options.js
var testClonabilityOfAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
  const { port1 } = new MessageChannel;
  try {
    port1.postMessage(audioWorkletNodeOptions);
  } finally {
    port1.close();
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-factory.js
var createNativeAudioWorkletNodeFactory = (createInvalidStateError2, createNativeAudioWorkletNodeFaker, createNativeGainNode, createNotSupportedError, monitorConnections) => {
  return (nativeContext, baseLatency, nativeAudioWorkletNodeConstructor, name, processorConstructor, options) => {
    if (nativeAudioWorkletNodeConstructor !== null) {
      try {
        const nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor(nativeContext, name, options);
        const patchedEventListeners = new Map;
        let onprocessorerror = null;
        Object.defineProperties(nativeAudioWorkletNode, {
          channelCount: {
            get: () => options.channelCount,
            set: () => {
              throw createInvalidStateError2();
            }
          },
          channelCountMode: {
            get: () => "explicit",
            set: () => {
              throw createInvalidStateError2();
            }
          },
          onprocessorerror: {
            get: () => onprocessorerror,
            set: (value) => {
              if (typeof onprocessorerror === "function") {
                nativeAudioWorkletNode.removeEventListener("processorerror", onprocessorerror);
              }
              onprocessorerror = typeof value === "function" ? value : null;
              if (typeof onprocessorerror === "function") {
                nativeAudioWorkletNode.addEventListener("processorerror", onprocessorerror);
              }
            }
          }
        });
        nativeAudioWorkletNode.addEventListener = ((addEventListener) => {
          return (...args) => {
            if (args[0] === "processorerror") {
              const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
              if (unpatchedEventListener !== null) {
                const patchedEventListener = patchedEventListeners.get(args[1]);
                if (patchedEventListener !== undefined) {
                  args[1] = patchedEventListener;
                } else {
                  args[1] = (event) => {
                    if (event.type === "error") {
                      Object.defineProperties(event, {
                        type: { value: "processorerror" }
                      });
                      unpatchedEventListener(event);
                    } else {
                      unpatchedEventListener(new ErrorEvent(args[0], { ...event }));
                    }
                  };
                  patchedEventListeners.set(unpatchedEventListener, args[1]);
                }
              }
            }
            addEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
            return addEventListener.call(nativeAudioWorkletNode, ...args);
          };
        })(nativeAudioWorkletNode.addEventListener);
        nativeAudioWorkletNode.removeEventListener = ((removeEventListener) => {
          return (...args) => {
            if (args[0] === "processorerror") {
              const patchedEventListener = patchedEventListeners.get(args[1]);
              if (patchedEventListener !== undefined) {
                patchedEventListeners.delete(args[1]);
                args[1] = patchedEventListener;
              }
            }
            removeEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
            return removeEventListener.call(nativeAudioWorkletNode, args[0], args[1], args[2]);
          };
        })(nativeAudioWorkletNode.removeEventListener);
        if (options.numberOfOutputs !== 0) {
          const nativeGainNode = createNativeGainNode(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
          });
          nativeAudioWorkletNode.connect(nativeGainNode).connect(nativeContext.destination);
          const whenConnected = () => nativeGainNode.disconnect();
          const whenDisconnected = () => nativeGainNode.connect(nativeContext.destination);
          return monitorConnections(nativeAudioWorkletNode, whenConnected, whenDisconnected);
        }
        return nativeAudioWorkletNode;
      } catch (err) {
        if (err.code === 11) {
          throw createNotSupportedError();
        }
        throw err;
      }
    }
    if (processorConstructor === undefined) {
      throw createNotSupportedError();
    }
    testClonabilityOfAudioWorkletNodeOptions(options);
    return createNativeAudioWorkletNodeFaker(nativeContext, baseLatency, processorConstructor, options);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/compute-buffer-size.js
var computeBufferSize = (baseLatency, sampleRate) => {
  if (baseLatency === null) {
    return 512;
  }
  return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/clone-audio-worklet-node-options.js
var cloneAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
  return new Promise((resolve, reject) => {
    const { port1, port2 } = new MessageChannel;
    port1.onmessage = ({ data }) => {
      port1.close();
      port2.close();
      resolve(data);
    };
    port1.onmessageerror = ({ data }) => {
      port1.close();
      port2.close();
      reject(data);
    };
    port2.postMessage(audioWorkletNodeOptions);
  });
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor-promise.js
var createAudioWorkletProcessorPromise = async (processorConstructor, audioWorkletNodeOptions) => {
  const clonedAudioWorkletNodeOptions = await cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);
  return new processorConstructor(clonedAudioWorkletNodeOptions);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor.js
var createAudioWorkletProcessor = (nativeContext, nativeAudioWorkletNode, processorConstructor, audioWorkletNodeOptions) => {
  let nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);
  if (nodeToProcessorMap === undefined) {
    nodeToProcessorMap = new WeakMap;
    NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
  }
  const audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorConstructor, audioWorkletNodeOptions);
  nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
  return audioWorkletProcessorPromise;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-faker-factory.js
var createNativeAudioWorkletNodeFakerFactory = (connectMultipleOutputs, createIndexSizeError2, createInvalidStateError2, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getActiveAudioWorkletNodeInputs, monitorConnections) => {
  return (nativeContext, baseLatency, processorConstructor, options) => {
    if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
      throw createNotSupportedError();
    }
    const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
    if (outputChannelCount.some((channelCount) => channelCount < 1)) {
      throw createNotSupportedError();
    }
    if (outputChannelCount.length !== options.numberOfOutputs) {
      throw createIndexSizeError2();
    }
    if (options.channelCountMode !== "explicit") {
      throw createNotSupportedError();
    }
    const numberOfInputChannels = options.channelCount * options.numberOfInputs;
    const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
    const numberOfParameters = processorConstructor.parameterDescriptors === undefined ? 0 : processorConstructor.parameterDescriptors.length;
    if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
      throw createNotSupportedError();
    }
    const messageChannel = new MessageChannel;
    const gainNodes = [];
    const inputChannelSplitterNodes = [];
    for (let i = 0;i < options.numberOfInputs; i += 1) {
      gainNodes.push(createNativeGainNode(nativeContext, {
        channelCount: options.channelCount,
        channelCountMode: options.channelCountMode,
        channelInterpretation: options.channelInterpretation,
        gain: 1
      }));
      inputChannelSplitterNodes.push(createNativeChannelSplitterNode(nativeContext, {
        channelCount: options.channelCount,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: options.channelCount
      }));
    }
    const constantSourceNodes = [];
    if (processorConstructor.parameterDescriptors !== undefined) {
      for (const { defaultValue, maxValue, minValue, name } of processorConstructor.parameterDescriptors) {
        const constantSourceNode = createNativeConstantSourceNode(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          offset: options.parameterData[name] !== undefined ? options.parameterData[name] : defaultValue === undefined ? 0 : defaultValue
        });
        Object.defineProperties(constantSourceNode.offset, {
          defaultValue: {
            get: () => defaultValue === undefined ? 0 : defaultValue
          },
          maxValue: {
            get: () => maxValue === undefined ? MOST_POSITIVE_SINGLE_FLOAT : maxValue
          },
          minValue: {
            get: () => minValue === undefined ? MOST_NEGATIVE_SINGLE_FLOAT : minValue
          }
        });
        constantSourceNodes.push(constantSourceNode);
      }
    }
    const inputChannelMergerNode = createNativeChannelMergerNode(nativeContext, {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "speakers",
      numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
    });
    const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
    const scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, bufferSize, numberOfInputChannels + numberOfParameters, Math.max(1, numberOfOutputChannels));
    const outputChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, {
      channelCount: Math.max(1, numberOfOutputChannels),
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      numberOfOutputs: Math.max(1, numberOfOutputChannels)
    });
    const outputChannelMergerNodes = [];
    for (let i = 0;i < options.numberOfOutputs; i += 1) {
      outputChannelMergerNodes.push(createNativeChannelMergerNode(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: outputChannelCount[i]
      }));
    }
    for (let i = 0;i < options.numberOfInputs; i += 1) {
      gainNodes[i].connect(inputChannelSplitterNodes[i]);
      for (let j = 0;j < options.channelCount; j += 1) {
        inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
      }
    }
    const parameterMap = new ReadOnlyMap(processorConstructor.parameterDescriptors === undefined ? [] : processorConstructor.parameterDescriptors.map(({ name }, index) => {
      const constantSourceNode = constantSourceNodes[index];
      constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
      constantSourceNode.start(0);
      return [name, constantSourceNode.offset];
    }));
    inputChannelMergerNode.connect(scriptProcessorNode);
    let channelInterpretation = options.channelInterpretation;
    let onprocessorerror = null;
    const outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
    const nativeAudioWorkletNodeFaker = {
      get bufferSize() {
        return bufferSize;
      },
      get channelCount() {
        return options.channelCount;
      },
      set channelCount(_) {
        throw createInvalidStateError2();
      },
      get channelCountMode() {
        return options.channelCountMode;
      },
      set channelCountMode(_) {
        throw createInvalidStateError2();
      },
      get channelInterpretation() {
        return channelInterpretation;
      },
      set channelInterpretation(value) {
        for (const gainNode of gainNodes) {
          gainNode.channelInterpretation = value;
        }
        channelInterpretation = value;
      },
      get context() {
        return scriptProcessorNode.context;
      },
      get inputs() {
        return gainNodes;
      },
      get numberOfInputs() {
        return options.numberOfInputs;
      },
      get numberOfOutputs() {
        return options.numberOfOutputs;
      },
      get onprocessorerror() {
        return onprocessorerror;
      },
      set onprocessorerror(value) {
        if (typeof onprocessorerror === "function") {
          nativeAudioWorkletNodeFaker.removeEventListener("processorerror", onprocessorerror);
        }
        onprocessorerror = typeof value === "function" ? value : null;
        if (typeof onprocessorerror === "function") {
          nativeAudioWorkletNodeFaker.addEventListener("processorerror", onprocessorerror);
        }
      },
      get parameters() {
        return parameterMap;
      },
      get port() {
        return messageChannel.port2;
      },
      addEventListener(...args) {
        return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
      },
      connect: connectMultipleOutputs.bind(null, outputAudioNodes),
      disconnect: disconnectMultipleOutputs.bind(null, outputAudioNodes),
      dispatchEvent(...args) {
        return scriptProcessorNode.dispatchEvent(args[0]);
      },
      removeEventListener(...args) {
        return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
      }
    };
    const patchedEventListeners = new Map;
    messageChannel.port1.addEventListener = ((addEventListener) => {
      return (...args) => {
        if (args[0] === "message") {
          const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
          if (unpatchedEventListener !== null) {
            const patchedEventListener = patchedEventListeners.get(args[1]);
            if (patchedEventListener !== undefined) {
              args[1] = patchedEventListener;
            } else {
              args[1] = (event) => {
                exposeCurrentFrameAndCurrentTime(nativeContext.currentTime, nativeContext.sampleRate, () => unpatchedEventListener(event));
              };
              patchedEventListeners.set(unpatchedEventListener, args[1]);
            }
          }
        }
        return addEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
      };
    })(messageChannel.port1.addEventListener);
    messageChannel.port1.removeEventListener = ((removeEventListener) => {
      return (...args) => {
        if (args[0] === "message") {
          const patchedEventListener = patchedEventListeners.get(args[1]);
          if (patchedEventListener !== undefined) {
            patchedEventListeners.delete(args[1]);
            args[1] = patchedEventListener;
          }
        }
        return removeEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
      };
    })(messageChannel.port1.removeEventListener);
    let onmessage = null;
    Object.defineProperty(messageChannel.port1, "onmessage", {
      get: () => onmessage,
      set: (value) => {
        if (typeof onmessage === "function") {
          messageChannel.port1.removeEventListener("message", onmessage);
        }
        onmessage = typeof value === "function" ? value : null;
        if (typeof onmessage === "function") {
          messageChannel.port1.addEventListener("message", onmessage);
          messageChannel.port1.start();
        }
      }
    });
    processorConstructor.prototype.port = messageChannel.port1;
    let audioWorkletProcessor = null;
    const audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorConstructor, options);
    audioWorkletProcessorPromise.then((dWrkltPrcssr) => audioWorkletProcessor = dWrkltPrcssr);
    const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
    const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
    const parameters = processorConstructor.parameterDescriptors === undefined ? [] : processorConstructor.parameterDescriptors.reduce((prmtrs, { name }) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
    let isActive = true;
    const disconnectOutputsGraph = () => {
      if (options.numberOfOutputs > 0) {
        scriptProcessorNode.disconnect(outputChannelSplitterNode);
      }
      for (let i = 0, outputChannelSplitterNodeOutput = 0;i < options.numberOfOutputs; i += 1) {
        const outputChannelMergerNode = outputChannelMergerNodes[i];
        for (let j = 0;j < outputChannelCount[i]; j += 1) {
          outputChannelSplitterNode.disconnect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
        }
        outputChannelSplitterNodeOutput += outputChannelCount[i];
      }
    };
    const activeInputIndexes = new Map;
    scriptProcessorNode.onaudioprocess = ({ inputBuffer, outputBuffer }) => {
      if (audioWorkletProcessor !== null) {
        const activeInputs = getActiveAudioWorkletNodeInputs(nativeAudioWorkletNodeFaker);
        for (let i = 0;i < bufferSize; i += 128) {
          for (let j = 0;j < options.numberOfInputs; j += 1) {
            for (let k = 0;k < options.channelCount; k += 1) {
              copyFromChannel(inputBuffer, inputs[j], k, k, i);
            }
          }
          if (processorConstructor.parameterDescriptors !== undefined) {
            processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
              copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, i);
            });
          }
          for (let j = 0;j < options.numberOfInputs; j += 1) {
            for (let k = 0;k < outputChannelCount[j]; k += 1) {
              if (outputs[j][k].byteLength === 0) {
                outputs[j][k] = new Float32Array(128);
              }
            }
          }
          try {
            const potentiallyEmptyInputs = inputs.map((input, index) => {
              const activeInput = activeInputs[index];
              if (activeInput.size > 0) {
                activeInputIndexes.set(index, bufferSize / 128);
                return input;
              }
              const count = activeInputIndexes.get(index);
              if (count === undefined) {
                return [];
              }
              if (input.every((channelData) => channelData.every((sample) => sample === 0))) {
                if (count === 1) {
                  activeInputIndexes.delete(index);
                } else {
                  activeInputIndexes.set(index, count - 1);
                }
              }
              return input;
            });
            const activeSourceFlag = exposeCurrentFrameAndCurrentTime(nativeContext.currentTime + i / nativeContext.sampleRate, nativeContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
            isActive = activeSourceFlag;
            for (let j = 0, outputChannelSplitterNodeOutput = 0;j < options.numberOfOutputs; j += 1) {
              for (let k = 0;k < outputChannelCount[j]; k += 1) {
                copyToChannel(outputBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
              }
              outputChannelSplitterNodeOutput += outputChannelCount[j];
            }
          } catch (error) {
            isActive = false;
            nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent("processorerror", {
              colno: error.colno,
              filename: error.filename,
              lineno: error.lineno,
              message: error.message
            }));
          }
          if (!isActive) {
            for (let j = 0;j < options.numberOfInputs; j += 1) {
              gainNodes[j].disconnect(inputChannelSplitterNodes[j]);
              for (let k = 0;k < options.channelCount; k += 1) {
                inputChannelSplitterNodes[i].disconnect(inputChannelMergerNode, k, j * options.channelCount + k);
              }
            }
            if (processorConstructor.parameterDescriptors !== undefined) {
              const length = processorConstructor.parameterDescriptors.length;
              for (let j = 0;j < length; j += 1) {
                const constantSourceNode = constantSourceNodes[j];
                constantSourceNode.disconnect(inputChannelMergerNode, 0, numberOfInputChannels + j);
                constantSourceNode.stop();
              }
            }
            inputChannelMergerNode.disconnect(scriptProcessorNode);
            scriptProcessorNode.onaudioprocess = null;
            if (isConnected) {
              disconnectOutputsGraph();
            } else {
              disconnectFakeGraph();
            }
            break;
          }
        }
      }
    };
    let isConnected = false;
    const nativeGainNode = createNativeGainNode(nativeContext, {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      gain: 0
    });
    const connectFakeGraph = () => scriptProcessorNode.connect(nativeGainNode).connect(nativeContext.destination);
    const disconnectFakeGraph = () => {
      scriptProcessorNode.disconnect(nativeGainNode);
      nativeGainNode.disconnect();
    };
    const whenConnected = () => {
      if (isActive) {
        disconnectFakeGraph();
        if (options.numberOfOutputs > 0) {
          scriptProcessorNode.connect(outputChannelSplitterNode);
        }
        for (let i = 0, outputChannelSplitterNodeOutput = 0;i < options.numberOfOutputs; i += 1) {
          const outputChannelMergerNode = outputChannelMergerNodes[i];
          for (let j = 0;j < outputChannelCount[i]; j += 1) {
            outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
          }
          outputChannelSplitterNodeOutput += outputChannelCount[i];
        }
      }
      isConnected = true;
    };
    const whenDisconnected = () => {
      if (isActive) {
        connectFakeGraph();
        disconnectOutputsGraph();
      }
      isConnected = false;
    };
    connectFakeGraph();
    return monitorConnections(nativeAudioWorkletNodeFaker, whenConnected, whenDisconnected);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-biquad-filter-node.js
var createNativeBiquadFilterNode = (nativeContext, options) => {
  const nativeBiquadFilterNode = nativeContext.createBiquadFilter();
  assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
  assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "Q");
  assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "detune");
  assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "frequency");
  assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "gain");
  assignNativeAudioNodeOption(nativeBiquadFilterNode, options, "type");
  return nativeBiquadFilterNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-channel-merger-node-factory.js
var createNativeChannelMergerNodeFactory = (nativeAudioContextConstructor, wrapChannelMergerNode) => {
  return (nativeContext, options) => {
    const nativeChannelMergerNode = nativeContext.createChannelMerger(options.numberOfInputs);
    if (nativeAudioContextConstructor !== null && nativeAudioContextConstructor.name === "webkitAudioContext") {
      wrapChannelMergerNode(nativeContext, nativeChannelMergerNode);
    }
    assignNativeAudioNodeOptions(nativeChannelMergerNode, options);
    return nativeChannelMergerNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-channel-splitter-node.js
var wrapChannelSplitterNode = (channelSplitterNode) => {
  const channelCount = channelSplitterNode.numberOfOutputs;
  Object.defineProperty(channelSplitterNode, "channelCount", {
    get: () => channelCount,
    set: (value) => {
      if (value !== channelCount) {
        throw createInvalidStateError();
      }
    }
  });
  Object.defineProperty(channelSplitterNode, "channelCountMode", {
    get: () => "explicit",
    set: (value) => {
      if (value !== "explicit") {
        throw createInvalidStateError();
      }
    }
  });
  Object.defineProperty(channelSplitterNode, "channelInterpretation", {
    get: () => "discrete",
    set: (value) => {
      if (value !== "discrete") {
        throw createInvalidStateError();
      }
    }
  });
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-channel-splitter-node.js
var createNativeChannelSplitterNode = (nativeContext, options) => {
  const nativeChannelSplitterNode = nativeContext.createChannelSplitter(options.numberOfOutputs);
  assignNativeAudioNodeOptions(nativeChannelSplitterNode, options);
  wrapChannelSplitterNode(nativeChannelSplitterNode);
  return nativeChannelSplitterNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-factory.js
var createNativeConstantSourceNodeFactory = (addSilentConnection, cacheTestResult, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport) => {
  return (nativeContext, options) => {
    if (nativeContext.createConstantSource === undefined) {
      return createNativeConstantSourceNodeFaker(nativeContext, options);
    }
    const nativeConstantSourceNode = nativeContext.createConstantSource();
    assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
    assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, "offset");
    if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeConstantSourceNode);
    }
    if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
    }
    addSilentConnection(nativeContext, nativeConstantSourceNode);
    return nativeConstantSourceNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/intercept-connections.js
var interceptConnections = (original, interceptor) => {
  original.connect = interceptor.connect.bind(interceptor);
  original.disconnect = interceptor.disconnect.bind(interceptor);
  return original;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-faker-factory.js
var createNativeConstantSourceNodeFakerFactory = (addSilentConnection, createNativeAudioBufferSourceNode, createNativeGainNode, monitorConnections) => {
  return (nativeContext, { offset, ...audioNodeOptions }) => {
    const audioBuffer = nativeContext.createBuffer(1, 2, 44100);
    const audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext, {
      buffer: null,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      loop: false,
      loopEnd: 0,
      loopStart: 0,
      playbackRate: 1
    });
    const gainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, gain: offset });
    const channelData = audioBuffer.getChannelData(0);
    channelData[0] = 1;
    channelData[1] = 1;
    audioBufferSourceNode.buffer = audioBuffer;
    audioBufferSourceNode.loop = true;
    const nativeConstantSourceNodeFaker = {
      get bufferSize() {
        return;
      },
      get channelCount() {
        return gainNode.channelCount;
      },
      set channelCount(value) {
        gainNode.channelCount = value;
      },
      get channelCountMode() {
        return gainNode.channelCountMode;
      },
      set channelCountMode(value) {
        gainNode.channelCountMode = value;
      },
      get channelInterpretation() {
        return gainNode.channelInterpretation;
      },
      set channelInterpretation(value) {
        gainNode.channelInterpretation = value;
      },
      get context() {
        return gainNode.context;
      },
      get inputs() {
        return [];
      },
      get numberOfInputs() {
        return audioBufferSourceNode.numberOfInputs;
      },
      get numberOfOutputs() {
        return gainNode.numberOfOutputs;
      },
      get offset() {
        return gainNode.gain;
      },
      get onended() {
        return audioBufferSourceNode.onended;
      },
      set onended(value) {
        audioBufferSourceNode.onended = value;
      },
      addEventListener(...args) {
        return audioBufferSourceNode.addEventListener(args[0], args[1], args[2]);
      },
      dispatchEvent(...args) {
        return audioBufferSourceNode.dispatchEvent(args[0]);
      },
      removeEventListener(...args) {
        return audioBufferSourceNode.removeEventListener(args[0], args[1], args[2]);
      },
      start(when = 0) {
        audioBufferSourceNode.start.call(audioBufferSourceNode, when);
      },
      stop(when = 0) {
        audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
      }
    };
    const whenConnected = () => audioBufferSourceNode.connect(gainNode);
    const whenDisconnected = () => audioBufferSourceNode.disconnect(gainNode);
    addSilentConnection(nativeContext, audioBufferSourceNode);
    return monitorConnections(interceptConnections(nativeConstantSourceNodeFaker, gainNode), whenConnected, whenDisconnected);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-convolver-node-factory.js
var createNativeConvolverNodeFactory = (createNotSupportedError, overwriteAccessors) => {
  return (nativeContext, options) => {
    const nativeConvolverNode = nativeContext.createConvolver();
    assignNativeAudioNodeOptions(nativeConvolverNode, options);
    if (options.disableNormalization === nativeConvolverNode.normalize) {
      nativeConvolverNode.normalize = !options.disableNormalization;
    }
    assignNativeAudioNodeOption(nativeConvolverNode, options, "buffer");
    if (options.channelCount > 2) {
      throw createNotSupportedError();
    }
    overwriteAccessors(nativeConvolverNode, "channelCount", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
      if (value > 2) {
        throw createNotSupportedError();
      }
      return set.call(nativeConvolverNode, value);
    });
    if (options.channelCountMode === "max") {
      throw createNotSupportedError();
    }
    overwriteAccessors(nativeConvolverNode, "channelCountMode", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
      if (value === "max") {
        throw createNotSupportedError();
      }
      return set.call(nativeConvolverNode, value);
    });
    return nativeConvolverNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-delay-node.js
var createNativeDelayNode = (nativeContext, options) => {
  const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);
  assignNativeAudioNodeOptions(nativeDelayNode, options);
  assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, "delayTime");
  return nativeDelayNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-dynamics-compressor-node-factory.js
var createNativeDynamicsCompressorNodeFactory = (createNotSupportedError) => {
  return (nativeContext, options) => {
    const nativeDynamicsCompressorNode = nativeContext.createDynamicsCompressor();
    assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options);
    if (options.channelCount > 2) {
      throw createNotSupportedError();
    }
    if (options.channelCountMode === "max") {
      throw createNotSupportedError();
    }
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "attack");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "knee");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "ratio");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "release");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "threshold");
    return nativeDynamicsCompressorNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-gain-node.js
var createNativeGainNode = (nativeContext, options) => {
  const nativeGainNode = nativeContext.createGain();
  assignNativeAudioNodeOptions(nativeGainNode, options);
  assignNativeAudioNodeAudioParamValue(nativeGainNode, options, "gain");
  return nativeGainNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-factory.js
var createNativeIIRFilterNodeFactory = (createNativeIIRFilterNodeFaker) => {
  return (nativeContext, baseLatency, options) => {
    if (nativeContext.createIIRFilter === undefined) {
      return createNativeIIRFilterNodeFaker(nativeContext, baseLatency, options);
    }
    const nativeIIRFilterNode = nativeContext.createIIRFilter(options.feedforward, options.feedback);
    assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
    return nativeIIRFilterNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-faker-factory.js
function divide(a, b) {
  const denominator = b[0] * b[0] + b[1] * b[1];
  return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
}
function multiply(a, b) {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
}
function evaluatePolynomial(coefficient, z) {
  let result = [0, 0];
  for (let i = coefficient.length - 1;i >= 0; i -= 1) {
    result = multiply(result, z);
    result[0] += coefficient[i];
  }
  return result;
}
var createNativeIIRFilterNodeFakerFactory = (createInvalidAccessError2, createInvalidStateError2, createNativeScriptProcessorNode, createNotSupportedError) => {
  return (nativeContext, baseLatency, { channelCount, channelCountMode, channelInterpretation, feedback, feedforward }) => {
    const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
    const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
    const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
    const feedbackLength = convertedFeedback.length;
    const feedforwardLength = convertedFeedforward.length;
    const minLength = Math.min(feedbackLength, feedforwardLength);
    if (feedbackLength === 0 || feedbackLength > 20) {
      throw createNotSupportedError();
    }
    if (convertedFeedback[0] === 0) {
      throw createInvalidStateError2();
    }
    if (feedforwardLength === 0 || feedforwardLength > 20) {
      throw createNotSupportedError();
    }
    if (convertedFeedforward[0] === 0) {
      throw createInvalidStateError2();
    }
    if (convertedFeedback[0] !== 1) {
      for (let i = 0;i < feedforwardLength; i += 1) {
        convertedFeedforward[i] /= convertedFeedback[0];
      }
      for (let i = 1;i < feedbackLength; i += 1) {
        convertedFeedback[i] /= convertedFeedback[0];
      }
    }
    const scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, bufferSize, channelCount, channelCount);
    scriptProcessorNode.channelCount = channelCount;
    scriptProcessorNode.channelCountMode = channelCountMode;
    scriptProcessorNode.channelInterpretation = channelInterpretation;
    const bufferLength = 32;
    const bufferIndexes = [];
    const xBuffers = [];
    const yBuffers = [];
    for (let i = 0;i < channelCount; i += 1) {
      bufferIndexes.push(0);
      const xBuffer = new Float32Array(bufferLength);
      const yBuffer = new Float32Array(bufferLength);
      xBuffer.fill(0);
      yBuffer.fill(0);
      xBuffers.push(xBuffer);
      yBuffers.push(yBuffer);
    }
    scriptProcessorNode.onaudioprocess = (event) => {
      const inputBuffer = event.inputBuffer;
      const outputBuffer = event.outputBuffer;
      const numberOfChannels = inputBuffer.numberOfChannels;
      for (let i = 0;i < numberOfChannels; i += 1) {
        const input = inputBuffer.getChannelData(i);
        const output = outputBuffer.getChannelData(i);
        bufferIndexes[i] = filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffers[i], yBuffers[i], bufferIndexes[i], bufferLength, input, output);
      }
    };
    const nyquist = nativeContext.sampleRate / 2;
    const nativeIIRFilterNodeFaker = {
      get bufferSize() {
        return bufferSize;
      },
      get channelCount() {
        return scriptProcessorNode.channelCount;
      },
      set channelCount(value) {
        scriptProcessorNode.channelCount = value;
      },
      get channelCountMode() {
        return scriptProcessorNode.channelCountMode;
      },
      set channelCountMode(value) {
        scriptProcessorNode.channelCountMode = value;
      },
      get channelInterpretation() {
        return scriptProcessorNode.channelInterpretation;
      },
      set channelInterpretation(value) {
        scriptProcessorNode.channelInterpretation = value;
      },
      get context() {
        return scriptProcessorNode.context;
      },
      get inputs() {
        return [scriptProcessorNode];
      },
      get numberOfInputs() {
        return scriptProcessorNode.numberOfInputs;
      },
      get numberOfOutputs() {
        return scriptProcessorNode.numberOfOutputs;
      },
      addEventListener(...args) {
        return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
      },
      dispatchEvent(...args) {
        return scriptProcessorNode.dispatchEvent(args[0]);
      },
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError2();
        }
        const length = frequencyHz.length;
        for (let i = 0;i < length; i += 1) {
          const omega = -Math.PI * (frequencyHz[i] / nyquist);
          const z = [Math.cos(omega), Math.sin(omega)];
          const numerator = evaluatePolynomial(convertedFeedforward, z);
          const denominator = evaluatePolynomial(convertedFeedback, z);
          const response = divide(numerator, denominator);
          magResponse[i] = Math.sqrt(response[0] * response[0] + response[1] * response[1]);
          phaseResponse[i] = Math.atan2(response[1], response[0]);
        }
      },
      removeEventListener(...args) {
        return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
      }
    };
    return interceptConnections(nativeIIRFilterNodeFaker, scriptProcessorNode);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-media-element-audio-source-node.js
var createNativeMediaElementAudioSourceNode = (nativeAudioContext, options) => {
  return nativeAudioContext.createMediaElementSource(options.mediaElement);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-destination-node.js
var createNativeMediaStreamAudioDestinationNode = (nativeAudioContext, options) => {
  const nativeMediaStreamAudioDestinationNode = nativeAudioContext.createMediaStreamDestination();
  assignNativeAudioNodeOptions(nativeMediaStreamAudioDestinationNode, options);
  if (nativeMediaStreamAudioDestinationNode.numberOfOutputs === 1) {
    Object.defineProperty(nativeMediaStreamAudioDestinationNode, "numberOfOutputs", { get: () => 0 });
  }
  return nativeMediaStreamAudioDestinationNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-source-node.js
var createNativeMediaStreamAudioSourceNode = (nativeAudioContext, { mediaStream }) => {
  const audioStreamTracks = mediaStream.getAudioTracks();
  audioStreamTracks.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  const filteredAudioStreamTracks = audioStreamTracks.slice(0, 1);
  const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(new MediaStream(filteredAudioStreamTracks));
  Object.defineProperty(nativeMediaStreamAudioSourceNode, "mediaStream", { value: mediaStream });
  return nativeMediaStreamAudioSourceNode;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-track-audio-source-node-factory.js
var createNativeMediaStreamTrackAudioSourceNodeFactory = (createInvalidStateError2, isNativeOfflineAudioContext) => {
  return (nativeAudioContext, { mediaStreamTrack }) => {
    if (typeof nativeAudioContext.createMediaStreamTrackSource === "function") {
      return nativeAudioContext.createMediaStreamTrackSource(mediaStreamTrack);
    }
    const mediaStream = new MediaStream([mediaStreamTrack]);
    const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(mediaStream);
    if (mediaStreamTrack.kind !== "audio") {
      throw createInvalidStateError2();
    }
    if (isNativeOfflineAudioContext(nativeAudioContext)) {
      throw new TypeError;
    }
    return nativeMediaStreamAudioSourceNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-offline-audio-context-constructor.js
var createNativeOfflineAudioContextConstructor = (window2) => {
  if (window2 === null) {
    return null;
  }
  if (window2.hasOwnProperty("OfflineAudioContext")) {
    return window2.OfflineAudioContext;
  }
  return window2.hasOwnProperty("webkitOfflineAudioContext") ? window2.webkitOfflineAudioContext : null;
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-oscillator-node-factory.js
var createNativeOscillatorNodeFactory = (addSilentConnection, cacheTestResult, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls) => {
  return (nativeContext, options) => {
    const nativeOscillatorNode = nativeContext.createOscillator();
    assignNativeAudioNodeOptions(nativeOscillatorNode, options);
    assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "detune");
    assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "frequency");
    if (options.periodicWave !== undefined) {
      nativeOscillatorNode.setPeriodicWave(options.periodicWave);
    } else {
      assignNativeAudioNodeOption(nativeOscillatorNode, options, "type");
    }
    if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeOscillatorNode);
    }
    if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(nativeOscillatorNode, nativeContext);
    }
    if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext))) {
      wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
    }
    addSilentConnection(nativeContext, nativeOscillatorNode);
    return nativeOscillatorNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-factory.js
var createNativePannerNodeFactory = (createNativePannerNodeFaker) => {
  return (nativeContext, options) => {
    const nativePannerNode = nativeContext.createPanner();
    if (nativePannerNode.orientationX === undefined) {
      return createNativePannerNodeFaker(nativeContext, options);
    }
    assignNativeAudioNodeOptions(nativePannerNode, options);
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationX");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationY");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationZ");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionX");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionY");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionZ");
    assignNativeAudioNodeOption(nativePannerNode, options, "coneInnerAngle");
    assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterAngle");
    assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterGain");
    assignNativeAudioNodeOption(nativePannerNode, options, "distanceModel");
    assignNativeAudioNodeOption(nativePannerNode, options, "maxDistance");
    assignNativeAudioNodeOption(nativePannerNode, options, "panningModel");
    assignNativeAudioNodeOption(nativePannerNode, options, "refDistance");
    assignNativeAudioNodeOption(nativePannerNode, options, "rolloffFactor");
    return nativePannerNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-faker-factory.js
var createNativePannerNodeFakerFactory = (connectNativeAudioNodeToNativeAudioNode2, createInvalidStateError2, createNativeChannelMergerNode, createNativeGainNode2, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError, disconnectNativeAudioNodeFromNativeAudioNode2, getFirstSample, monitorConnections) => {
  return (nativeContext, { coneInnerAngle, coneOuterAngle, coneOuterGain, distanceModel, maxDistance, orientationX, orientationY, orientationZ, panningModel, positionX, positionY, positionZ, refDistance, rolloffFactor, ...audioNodeOptions }) => {
    const pannerNode = nativeContext.createPanner();
    if (audioNodeOptions.channelCount > 2) {
      throw createNotSupportedError();
    }
    if (audioNodeOptions.channelCountMode === "max") {
      throw createNotSupportedError();
    }
    assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);
    const SINGLE_CHANNEL_OPTIONS = {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "discrete"
    };
    const channelMergerNode = createNativeChannelMergerNode(nativeContext, {
      ...SINGLE_CHANNEL_OPTIONS,
      channelInterpretation: "speakers",
      numberOfInputs: 6
    });
    const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
    const orientationXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 1 });
    const orientationYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const orientationZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const positionXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const positionYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const positionZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 6, 1);
    const waveShaperNode = createNativeWaveShaperNode(nativeContext, {
      ...SINGLE_CHANNEL_OPTIONS,
      curve: new Float32Array([1, 1]),
      oversample: "none"
    });
    let lastOrientation = [orientationX, orientationY, orientationZ];
    let lastPosition = [positionX, positionY, positionZ];
    const buffer = new Float32Array(1);
    scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
      const orientation = [
        getFirstSample(inputBuffer, buffer, 0),
        getFirstSample(inputBuffer, buffer, 1),
        getFirstSample(inputBuffer, buffer, 2)
      ];
      if (orientation.some((value, index) => value !== lastOrientation[index])) {
        pannerNode.setOrientation(...orientation);
        lastOrientation = orientation;
      }
      const positon = [
        getFirstSample(inputBuffer, buffer, 3),
        getFirstSample(inputBuffer, buffer, 4),
        getFirstSample(inputBuffer, buffer, 5)
      ];
      if (positon.some((value, index) => value !== lastPosition[index])) {
        pannerNode.setPosition(...positon);
        lastPosition = positon;
      }
    };
    Object.defineProperty(orientationYGainNode.gain, "defaultValue", { get: () => 0 });
    Object.defineProperty(orientationZGainNode.gain, "defaultValue", { get: () => 0 });
    Object.defineProperty(positionXGainNode.gain, "defaultValue", { get: () => 0 });
    Object.defineProperty(positionYGainNode.gain, "defaultValue", { get: () => 0 });
    Object.defineProperty(positionZGainNode.gain, "defaultValue", { get: () => 0 });
    const nativePannerNodeFaker = {
      get bufferSize() {
        return;
      },
      get channelCount() {
        return pannerNode.channelCount;
      },
      set channelCount(value) {
        if (value > 2) {
          throw createNotSupportedError();
        }
        inputGainNode.channelCount = value;
        pannerNode.channelCount = value;
      },
      get channelCountMode() {
        return pannerNode.channelCountMode;
      },
      set channelCountMode(value) {
        if (value === "max") {
          throw createNotSupportedError();
        }
        inputGainNode.channelCountMode = value;
        pannerNode.channelCountMode = value;
      },
      get channelInterpretation() {
        return pannerNode.channelInterpretation;
      },
      set channelInterpretation(value) {
        inputGainNode.channelInterpretation = value;
        pannerNode.channelInterpretation = value;
      },
      get coneInnerAngle() {
        return pannerNode.coneInnerAngle;
      },
      set coneInnerAngle(value) {
        pannerNode.coneInnerAngle = value;
      },
      get coneOuterAngle() {
        return pannerNode.coneOuterAngle;
      },
      set coneOuterAngle(value) {
        pannerNode.coneOuterAngle = value;
      },
      get coneOuterGain() {
        return pannerNode.coneOuterGain;
      },
      set coneOuterGain(value) {
        if (value < 0 || value > 1) {
          throw createInvalidStateError2();
        }
        pannerNode.coneOuterGain = value;
      },
      get context() {
        return pannerNode.context;
      },
      get distanceModel() {
        return pannerNode.distanceModel;
      },
      set distanceModel(value) {
        pannerNode.distanceModel = value;
      },
      get inputs() {
        return [inputGainNode];
      },
      get maxDistance() {
        return pannerNode.maxDistance;
      },
      set maxDistance(value) {
        if (value < 0) {
          throw new RangeError;
        }
        pannerNode.maxDistance = value;
      },
      get numberOfInputs() {
        return pannerNode.numberOfInputs;
      },
      get numberOfOutputs() {
        return pannerNode.numberOfOutputs;
      },
      get orientationX() {
        return orientationXGainNode.gain;
      },
      get orientationY() {
        return orientationYGainNode.gain;
      },
      get orientationZ() {
        return orientationZGainNode.gain;
      },
      get panningModel() {
        return pannerNode.panningModel;
      },
      set panningModel(value) {
        pannerNode.panningModel = value;
      },
      get positionX() {
        return positionXGainNode.gain;
      },
      get positionY() {
        return positionYGainNode.gain;
      },
      get positionZ() {
        return positionZGainNode.gain;
      },
      get refDistance() {
        return pannerNode.refDistance;
      },
      set refDistance(value) {
        if (value < 0) {
          throw new RangeError;
        }
        pannerNode.refDistance = value;
      },
      get rolloffFactor() {
        return pannerNode.rolloffFactor;
      },
      set rolloffFactor(value) {
        if (value < 0) {
          throw new RangeError;
        }
        pannerNode.rolloffFactor = value;
      },
      addEventListener(...args) {
        return inputGainNode.addEventListener(args[0], args[1], args[2]);
      },
      dispatchEvent(...args) {
        return inputGainNode.dispatchEvent(args[0]);
      },
      removeEventListener(...args) {
        return inputGainNode.removeEventListener(args[0], args[1], args[2]);
      }
    };
    if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
      nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
    }
    if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
      nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
    }
    if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
      nativePannerNodeFaker.coneOuterGain = coneOuterGain;
    }
    if (distanceModel !== nativePannerNodeFaker.distanceModel) {
      nativePannerNodeFaker.distanceModel = distanceModel;
    }
    if (maxDistance !== nativePannerNodeFaker.maxDistance) {
      nativePannerNodeFaker.maxDistance = maxDistance;
    }
    if (orientationX !== nativePannerNodeFaker.orientationX.value) {
      nativePannerNodeFaker.orientationX.value = orientationX;
    }
    if (orientationY !== nativePannerNodeFaker.orientationY.value) {
      nativePannerNodeFaker.orientationY.value = orientationY;
    }
    if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
      nativePannerNodeFaker.orientationZ.value = orientationZ;
    }
    if (panningModel !== nativePannerNodeFaker.panningModel) {
      nativePannerNodeFaker.panningModel = panningModel;
    }
    if (positionX !== nativePannerNodeFaker.positionX.value) {
      nativePannerNodeFaker.positionX.value = positionX;
    }
    if (positionY !== nativePannerNodeFaker.positionY.value) {
      nativePannerNodeFaker.positionY.value = positionY;
    }
    if (positionZ !== nativePannerNodeFaker.positionZ.value) {
      nativePannerNodeFaker.positionZ.value = positionZ;
    }
    if (refDistance !== nativePannerNodeFaker.refDistance) {
      nativePannerNodeFaker.refDistance = refDistance;
    }
    if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
      nativePannerNodeFaker.rolloffFactor = rolloffFactor;
    }
    if (lastOrientation[0] !== 1 || lastOrientation[1] !== 0 || lastOrientation[2] !== 0) {
      pannerNode.setOrientation(...lastOrientation);
    }
    if (lastPosition[0] !== 0 || lastPosition[1] !== 0 || lastPosition[2] !== 0) {
      pannerNode.setPosition(...lastPosition);
    }
    const whenConnected = () => {
      inputGainNode.connect(pannerNode);
      connectNativeAudioNodeToNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
      waveShaperNode.connect(orientationXGainNode).connect(channelMergerNode, 0, 0);
      waveShaperNode.connect(orientationYGainNode).connect(channelMergerNode, 0, 1);
      waveShaperNode.connect(orientationZGainNode).connect(channelMergerNode, 0, 2);
      waveShaperNode.connect(positionXGainNode).connect(channelMergerNode, 0, 3);
      waveShaperNode.connect(positionYGainNode).connect(channelMergerNode, 0, 4);
      waveShaperNode.connect(positionZGainNode).connect(channelMergerNode, 0, 5);
      channelMergerNode.connect(scriptProcessorNode).connect(nativeContext.destination);
    };
    const whenDisconnected = () => {
      inputGainNode.disconnect(pannerNode);
      disconnectNativeAudioNodeFromNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
      waveShaperNode.disconnect(orientationXGainNode);
      orientationXGainNode.disconnect(channelMergerNode);
      waveShaperNode.disconnect(orientationYGainNode);
      orientationYGainNode.disconnect(channelMergerNode);
      waveShaperNode.disconnect(orientationZGainNode);
      orientationZGainNode.disconnect(channelMergerNode);
      waveShaperNode.disconnect(positionXGainNode);
      positionXGainNode.disconnect(channelMergerNode);
      waveShaperNode.disconnect(positionYGainNode);
      positionYGainNode.disconnect(channelMergerNode);
      waveShaperNode.disconnect(positionZGainNode);
      positionZGainNode.disconnect(channelMergerNode);
      channelMergerNode.disconnect(scriptProcessorNode);
      scriptProcessorNode.disconnect(nativeContext.destination);
    };
    return monitorConnections(interceptConnections(nativePannerNodeFaker, pannerNode), whenConnected, whenDisconnected);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-periodic-wave-factory.js
var createNativePeriodicWaveFactory = (createIndexSizeError2) => {
  return (nativeContext, { disableNormalization, imag, real }) => {
    const convertedImag = imag instanceof Float32Array ? imag : new Float32Array(imag);
    const convertedReal = real instanceof Float32Array ? real : new Float32Array(real);
    const nativePeriodicWave = nativeContext.createPeriodicWave(convertedReal, convertedImag, { disableNormalization });
    if (Array.from(imag).length < 2) {
      throw createIndexSizeError2();
    }
    return nativePeriodicWave;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-script-processor-node.js
var createNativeScriptProcessorNode = (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) => {
  return nativeContext.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-factory.js
var createNativeStereoPannerNodeFactory = (createNativeStereoPannerNodeFaker, createNotSupportedError) => {
  return (nativeContext, options) => {
    const channelCountMode = options.channelCountMode;
    if (channelCountMode === "clamped-max") {
      throw createNotSupportedError();
    }
    if (nativeContext.createStereoPanner === undefined) {
      return createNativeStereoPannerNodeFaker(nativeContext, options);
    }
    const nativeStereoPannerNode = nativeContext.createStereoPanner();
    assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
    assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, "pan");
    Object.defineProperty(nativeStereoPannerNode, "channelCountMode", {
      get: () => channelCountMode,
      set: (value) => {
        if (value !== channelCountMode) {
          throw createNotSupportedError();
        }
      }
    });
    return nativeStereoPannerNode;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-faker-factory.js
var createNativeStereoPannerNodeFakerFactory = (createNativeChannelMergerNode, createNativeChannelSplitterNode2, createNativeGainNode2, createNativeWaveShaperNode, createNotSupportedError, monitorConnections) => {
  const CURVE_SIZE = 16385;
  const DC_CURVE = new Float32Array([1, 1]);
  const HALF_PI = Math.PI / 2;
  const SINGLE_CHANNEL_OPTIONS = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete" };
  const SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = { ...SINGLE_CHANNEL_OPTIONS, oversample: "none" };
  const buildInternalGraphForMono = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
    const leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
    const rightWaveShaperCurve = new Float32Array(CURVE_SIZE);
    for (let i = 0;i < CURVE_SIZE; i += 1) {
      const x = i / (CURVE_SIZE - 1) * HALF_PI;
      leftWaveShaperCurve[i] = Math.cos(x);
      rightWaveShaperCurve[i] = Math.sin(x);
    }
    const leftGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const leftWaveShaperNode = createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: leftWaveShaperCurve });
    const panWaveShaperNode = createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
    const rightGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const rightWaveShaperNode = createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: rightWaveShaperCurve });
    return {
      connectGraph() {
        inputGainNode.connect(leftGainNode);
        inputGainNode.connect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
        inputGainNode.connect(rightGainNode);
        panWaveShaperNode.connect(panGainNode);
        panGainNode.connect(leftWaveShaperNode.inputs === undefined ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
        panGainNode.connect(rightWaveShaperNode.inputs === undefined ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
        leftWaveShaperNode.connect(leftGainNode.gain);
        rightWaveShaperNode.connect(rightGainNode.gain);
        leftGainNode.connect(channelMergerNode, 0, 0);
        rightGainNode.connect(channelMergerNode, 0, 1);
      },
      disconnectGraph() {
        inputGainNode.disconnect(leftGainNode);
        inputGainNode.disconnect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
        inputGainNode.disconnect(rightGainNode);
        panWaveShaperNode.disconnect(panGainNode);
        panGainNode.disconnect(leftWaveShaperNode.inputs === undefined ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
        panGainNode.disconnect(rightWaveShaperNode.inputs === undefined ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
        leftWaveShaperNode.disconnect(leftGainNode.gain);
        rightWaveShaperNode.disconnect(rightGainNode.gain);
        leftGainNode.disconnect(channelMergerNode, 0, 0);
        rightGainNode.disconnect(channelMergerNode, 0, 1);
      }
    };
  };
  const buildInternalGraphForStereo = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
    const leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
    const leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
    const rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
    const rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
    const centerIndex = Math.floor(CURVE_SIZE / 2);
    for (let i = 0;i < CURVE_SIZE; i += 1) {
      if (i > centerIndex) {
        const x = (i - centerIndex) / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
        leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
        leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
        rightInputForLeftOutputWaveShaperCurve[i] = 0;
        rightInputForRightOutputWaveShaperCurve[i] = 1;
      } else {
        const x = i / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
        leftInputForLeftOutputWaveShaperCurve[i] = 1;
        leftInputForRightOutputWaveShaperCurve[i] = 0;
        rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
        rightInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
      }
    }
    const channelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      numberOfOutputs: 2
    });
    const leftInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
      ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
      curve: leftInputForLeftOutputWaveShaperCurve
    });
    const leftInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
      ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
      curve: leftInputForRightOutputWaveShaperCurve
    });
    const panWaveShaperNode = createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
    const rightInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
      ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
      curve: rightInputForLeftOutputWaveShaperCurve
    });
    const rightInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
    const rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
      ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
      curve: rightInputForRightOutputWaveShaperCurve
    });
    return {
      connectGraph() {
        inputGainNode.connect(channelSplitterNode);
        inputGainNode.connect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
        channelSplitterNode.connect(leftInputForLeftOutputGainNode, 0);
        channelSplitterNode.connect(leftInputForRightOutputGainNode, 0);
        channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
        channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
        panWaveShaperNode.connect(panGainNode);
        panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs === undefined ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs === undefined ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs === undefined ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs === undefined ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
        leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
        leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
        rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
        rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
        leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
        rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
        leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
      },
      disconnectGraph() {
        inputGainNode.disconnect(channelSplitterNode);
        inputGainNode.disconnect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
        channelSplitterNode.disconnect(leftInputForLeftOutputGainNode, 0);
        channelSplitterNode.disconnect(leftInputForRightOutputGainNode, 0);
        channelSplitterNode.disconnect(rightInputForLeftOutputGainNode, 1);
        channelSplitterNode.disconnect(rightInputForRightOutputGainNode, 1);
        panWaveShaperNode.disconnect(panGainNode);
        panGainNode.disconnect(leftInputForLeftOutputWaveShaperNode.inputs === undefined ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.disconnect(leftInputForRightOutputWaveShaperNode.inputs === undefined ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
        panGainNode.disconnect(rightInputForLeftOutputWaveShaperNode.inputs === undefined ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.disconnect(rightInputForRightOutputWaveShaperNode.inputs === undefined ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
        leftInputForLeftOutputWaveShaperNode.disconnect(leftInputForLeftOutputGainNode.gain);
        leftInputForRightOutputWaveShaperNode.disconnect(leftInputForRightOutputGainNode.gain);
        rightInputForLeftOutputWaveShaperNode.disconnect(rightInputForLeftOutputGainNode.gain);
        rightInputForRightOutputWaveShaperNode.disconnect(rightInputForRightOutputGainNode.gain);
        leftInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
        rightInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
        leftInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
        rightInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
      }
    };
  };
  const buildInternalGraph = (nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) => {
    if (channelCount === 1) {
      return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
    }
    if (channelCount === 2) {
      return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
    }
    throw createNotSupportedError();
  };
  return (nativeContext, { channelCount, channelCountMode, pan, ...audioNodeOptions }) => {
    if (channelCountMode === "max") {
      throw createNotSupportedError();
    }
    const channelMergerNode = createNativeChannelMergerNode(nativeContext, {
      ...audioNodeOptions,
      channelCount: 1,
      channelCountMode,
      numberOfInputs: 2
    });
    const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, channelCount, channelCountMode, gain: 1 });
    const panGainNode = createNativeGainNode2(nativeContext, {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      gain: pan
    });
    let { connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
    Object.defineProperty(panGainNode.gain, "defaultValue", { get: () => 0 });
    Object.defineProperty(panGainNode.gain, "maxValue", { get: () => 1 });
    Object.defineProperty(panGainNode.gain, "minValue", { get: () => -1 });
    const nativeStereoPannerNodeFakerFactory = {
      get bufferSize() {
        return;
      },
      get channelCount() {
        return inputGainNode.channelCount;
      },
      set channelCount(value) {
        if (inputGainNode.channelCount !== value) {
          if (isConnected) {
            disconnectGraph();
          }
          ({ connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode));
          if (isConnected) {
            connectGraph();
          }
        }
        inputGainNode.channelCount = value;
      },
      get channelCountMode() {
        return inputGainNode.channelCountMode;
      },
      set channelCountMode(value) {
        if (value === "clamped-max" || value === "max") {
          throw createNotSupportedError();
        }
        inputGainNode.channelCountMode = value;
      },
      get channelInterpretation() {
        return inputGainNode.channelInterpretation;
      },
      set channelInterpretation(value) {
        inputGainNode.channelInterpretation = value;
      },
      get context() {
        return inputGainNode.context;
      },
      get inputs() {
        return [inputGainNode];
      },
      get numberOfInputs() {
        return inputGainNode.numberOfInputs;
      },
      get numberOfOutputs() {
        return inputGainNode.numberOfOutputs;
      },
      get pan() {
        return panGainNode.gain;
      },
      addEventListener(...args) {
        return inputGainNode.addEventListener(args[0], args[1], args[2]);
      },
      dispatchEvent(...args) {
        return inputGainNode.dispatchEvent(args[0]);
      },
      removeEventListener(...args) {
        return inputGainNode.removeEventListener(args[0], args[1], args[2]);
      }
    };
    let isConnected = false;
    const whenConnected = () => {
      connectGraph();
      isConnected = true;
    };
    const whenDisconnected = () => {
      disconnectGraph();
      isConnected = false;
    };
    return monitorConnections(interceptConnections(nativeStereoPannerNodeFakerFactory, channelMergerNode), whenConnected, whenDisconnected);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-factory.js
var createNativeWaveShaperNodeFactory = (createConnectedNativeAudioBufferSourceNode, createInvalidStateError2, createNativeWaveShaperNodeFaker, isDCCurve, monitorConnections, nativeAudioContextConstructor, overwriteAccessors) => {
  return (nativeContext, options) => {
    const nativeWaveShaperNode = nativeContext.createWaveShaper();
    if (nativeAudioContextConstructor !== null && nativeAudioContextConstructor.name === "webkitAudioContext" && nativeContext.createGain().gain.automationRate === undefined) {
      return createNativeWaveShaperNodeFaker(nativeContext, options);
    }
    assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
    const curve = options.curve === null || options.curve instanceof Float32Array ? options.curve : new Float32Array(options.curve);
    if (curve !== null && curve.length < 2) {
      throw createInvalidStateError2();
    }
    assignNativeAudioNodeOption(nativeWaveShaperNode, { curve }, "curve");
    assignNativeAudioNodeOption(nativeWaveShaperNode, options, "oversample");
    let disconnectNativeAudioBufferSourceNode = null;
    let isConnected = false;
    overwriteAccessors(nativeWaveShaperNode, "curve", (get) => () => get.call(nativeWaveShaperNode), (set) => (value) => {
      set.call(nativeWaveShaperNode, value);
      if (isConnected) {
        if (isDCCurve(value) && disconnectNativeAudioBufferSourceNode === null) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(nativeContext, nativeWaveShaperNode);
        } else if (!isDCCurve(value) && disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      }
      return value;
    });
    const whenConnected = () => {
      isConnected = true;
      if (isDCCurve(nativeWaveShaperNode.curve)) {
        disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(nativeContext, nativeWaveShaperNode);
      }
    };
    const whenDisconnected = () => {
      isConnected = false;
      if (disconnectNativeAudioBufferSourceNode !== null) {
        disconnectNativeAudioBufferSourceNode();
        disconnectNativeAudioBufferSourceNode = null;
      }
    };
    return monitorConnections(nativeWaveShaperNode, whenConnected, whenDisconnected);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-faker-factory.js
var createNativeWaveShaperNodeFakerFactory = (createConnectedNativeAudioBufferSourceNode, createInvalidStateError2, createNativeGainNode2, isDCCurve, monitorConnections) => {
  return (nativeContext, { curve, oversample, ...audioNodeOptions }) => {
    const negativeWaveShaperNode = nativeContext.createWaveShaper();
    const positiveWaveShaperNode = nativeContext.createWaveShaper();
    assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
    assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);
    const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
    const invertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
    const outputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
    const revertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
    let disconnectNativeAudioBufferSourceNode = null;
    let isConnected = false;
    let unmodifiedCurve = null;
    const nativeWaveShaperNodeFaker = {
      get bufferSize() {
        return;
      },
      get channelCount() {
        return negativeWaveShaperNode.channelCount;
      },
      set channelCount(value) {
        inputGainNode.channelCount = value;
        invertGainNode.channelCount = value;
        negativeWaveShaperNode.channelCount = value;
        outputGainNode.channelCount = value;
        positiveWaveShaperNode.channelCount = value;
        revertGainNode.channelCount = value;
      },
      get channelCountMode() {
        return negativeWaveShaperNode.channelCountMode;
      },
      set channelCountMode(value) {
        inputGainNode.channelCountMode = value;
        invertGainNode.channelCountMode = value;
        negativeWaveShaperNode.channelCountMode = value;
        outputGainNode.channelCountMode = value;
        positiveWaveShaperNode.channelCountMode = value;
        revertGainNode.channelCountMode = value;
      },
      get channelInterpretation() {
        return negativeWaveShaperNode.channelInterpretation;
      },
      set channelInterpretation(value) {
        inputGainNode.channelInterpretation = value;
        invertGainNode.channelInterpretation = value;
        negativeWaveShaperNode.channelInterpretation = value;
        outputGainNode.channelInterpretation = value;
        positiveWaveShaperNode.channelInterpretation = value;
        revertGainNode.channelInterpretation = value;
      },
      get context() {
        return negativeWaveShaperNode.context;
      },
      get curve() {
        return unmodifiedCurve;
      },
      set curve(value) {
        if (value !== null && value.length < 2) {
          throw createInvalidStateError2();
        }
        if (value === null) {
          negativeWaveShaperNode.curve = value;
          positiveWaveShaperNode.curve = value;
        } else {
          const curveLength = value.length;
          const negativeCurve = new Float32Array(curveLength + 2 - curveLength % 2);
          const positiveCurve = new Float32Array(curveLength + 2 - curveLength % 2);
          negativeCurve[0] = value[0];
          positiveCurve[0] = -value[curveLength - 1];
          const length = Math.ceil((curveLength + 1) / 2);
          const centerIndex = (curveLength + 1) / 2 - 1;
          for (let i = 1;i < length; i += 1) {
            const theoreticIndex = i / length * centerIndex;
            const lowerIndex = Math.floor(theoreticIndex);
            const upperIndex = Math.ceil(theoreticIndex);
            negativeCurve[i] = lowerIndex === upperIndex ? value[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
            positiveCurve[i] = lowerIndex === upperIndex ? -value[curveLength - 1 - lowerIndex] : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) - (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
          }
          negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;
          negativeWaveShaperNode.curve = negativeCurve;
          positiveWaveShaperNode.curve = positiveCurve;
        }
        unmodifiedCurve = value;
        if (isConnected) {
          if (isDCCurve(unmodifiedCurve) && disconnectNativeAudioBufferSourceNode === null) {
            disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(nativeContext, inputGainNode);
          } else if (disconnectNativeAudioBufferSourceNode !== null) {
            disconnectNativeAudioBufferSourceNode();
            disconnectNativeAudioBufferSourceNode = null;
          }
        }
      },
      get inputs() {
        return [inputGainNode];
      },
      get numberOfInputs() {
        return negativeWaveShaperNode.numberOfInputs;
      },
      get numberOfOutputs() {
        return negativeWaveShaperNode.numberOfOutputs;
      },
      get oversample() {
        return negativeWaveShaperNode.oversample;
      },
      set oversample(value) {
        negativeWaveShaperNode.oversample = value;
        positiveWaveShaperNode.oversample = value;
      },
      addEventListener(...args) {
        return inputGainNode.addEventListener(args[0], args[1], args[2]);
      },
      dispatchEvent(...args) {
        return inputGainNode.dispatchEvent(args[0]);
      },
      removeEventListener(...args) {
        return inputGainNode.removeEventListener(args[0], args[1], args[2]);
      }
    };
    if (curve !== null) {
      nativeWaveShaperNodeFaker.curve = curve instanceof Float32Array ? curve : new Float32Array(curve);
    }
    if (oversample !== nativeWaveShaperNodeFaker.oversample) {
      nativeWaveShaperNodeFaker.oversample = oversample;
    }
    const whenConnected = () => {
      inputGainNode.connect(negativeWaveShaperNode).connect(outputGainNode);
      inputGainNode.connect(invertGainNode).connect(positiveWaveShaperNode).connect(revertGainNode).connect(outputGainNode);
      isConnected = true;
      if (isDCCurve(unmodifiedCurve)) {
        disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(nativeContext, inputGainNode);
      }
    };
    const whenDisconnected = () => {
      inputGainNode.disconnect(negativeWaveShaperNode);
      negativeWaveShaperNode.disconnect(outputGainNode);
      inputGainNode.disconnect(invertGainNode);
      invertGainNode.disconnect(positiveWaveShaperNode);
      positiveWaveShaperNode.disconnect(revertGainNode);
      revertGainNode.disconnect(outputGainNode);
      isConnected = false;
      if (disconnectNativeAudioBufferSourceNode !== null) {
        disconnectNativeAudioBufferSourceNode();
        disconnectNativeAudioBufferSourceNode = null;
      }
    };
    return monitorConnections(interceptConnections(nativeWaveShaperNodeFaker, outputGainNode), whenConnected, whenDisconnected);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/not-supported-error.js
var createNotSupportedError = () => new DOMException("", "NotSupportedError");

// ../../node_modules/standardized-audio-context/build/es2019/factories/offline-audio-context-constructor.js
var DEFAULT_OPTIONS16 = {
  numberOfChannels: 1
};
var createOfflineAudioContextConstructor = (baseAudioContextConstructor, cacheTestResult, createInvalidStateError2, createNativeOfflineAudioContext, startRendering) => {
  return class OfflineAudioContext extends baseAudioContextConstructor {
    constructor(a, b, c) {
      let options;
      if (typeof a === "number" && b !== undefined && c !== undefined) {
        options = { length: b, numberOfChannels: a, sampleRate: c };
      } else if (typeof a === "object") {
        options = a;
      } else {
        throw new Error("The given parameters are not valid.");
      }
      const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS16, ...options };
      const nativeOfflineAudioContext = createNativeOfflineAudioContext(numberOfChannels, length, sampleRate);
      if (!cacheTestResult(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
        nativeOfflineAudioContext.addEventListener("statechange", (() => {
          let i = 0;
          const delayStateChangeEvent = (event) => {
            if (this._state === "running") {
              if (i > 0) {
                nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                event.stopImmediatePropagation();
                this._waitForThePromiseToSettle(event);
              } else {
                i += 1;
              }
            }
          };
          return delayStateChangeEvent;
        })());
      }
      super(nativeOfflineAudioContext, numberOfChannels);
      this._length = length;
      this._nativeOfflineAudioContext = nativeOfflineAudioContext;
      this._state = null;
    }
    get length() {
      if (this._nativeOfflineAudioContext.length === undefined) {
        return this._length;
      }
      return this._nativeOfflineAudioContext.length;
    }
    get state() {
      return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
    }
    startRendering() {
      if (this._state === "running") {
        return Promise.reject(createInvalidStateError2());
      }
      this._state = "running";
      return startRendering(this.destination, this._nativeOfflineAudioContext).finally(() => {
        this._state = null;
        deactivateAudioGraph(this);
      });
    }
    _waitForThePromiseToSettle(event) {
      if (this._state === null) {
        this._nativeOfflineAudioContext.dispatchEvent(event);
      } else {
        setTimeout(() => this._waitForThePromiseToSettle(event));
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-constructor.js
var DEFAULT_OPTIONS17 = {
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  detune: 0,
  frequency: 440,
  periodicWave: undefined,
  type: "sine"
};
var createOscillatorNodeConstructor = (audioNodeConstructor, createAudioParam, createNativeOscillatorNode, createOscillatorNodeRenderer, getNativeContext, isNativeOfflineAudioContext, wrapEventListener) => {
  return class OscillatorNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS17, ...options };
      const nativeOscillatorNode = createNativeOscillatorNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer() : null;
      const nyquist = context.sampleRate / 2;
      super(context, false, nativeOscillatorNode, oscillatorNodeRenderer);
      this._detune = createAudioParam(this, isOffline, nativeOscillatorNode.detune, 153600, -153600);
      this._frequency = createAudioParam(this, isOffline, nativeOscillatorNode.frequency, nyquist, -nyquist);
      this._nativeOscillatorNode = nativeOscillatorNode;
      this._onended = null;
      this._oscillatorNodeRenderer = oscillatorNodeRenderer;
      if (this._oscillatorNodeRenderer !== null && mergedOptions.periodicWave !== undefined) {
        this._oscillatorNodeRenderer.periodicWave = mergedOptions.periodicWave;
      }
    }
    get detune() {
      return this._detune;
    }
    get frequency() {
      return this._frequency;
    }
    get onended() {
      return this._onended;
    }
    set onended(value) {
      const wrappedListener = typeof value === "function" ? wrapEventListener(this, value) : null;
      this._nativeOscillatorNode.onended = wrappedListener;
      const nativeOnEnded = this._nativeOscillatorNode.onended;
      this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
    }
    get type() {
      return this._nativeOscillatorNode.type;
    }
    set type(value) {
      this._nativeOscillatorNode.type = value;
      if (this._oscillatorNodeRenderer !== null) {
        this._oscillatorNodeRenderer.periodicWave = null;
      }
    }
    setPeriodicWave(periodicWave) {
      this._nativeOscillatorNode.setPeriodicWave(periodicWave);
      if (this._oscillatorNodeRenderer !== null) {
        this._oscillatorNodeRenderer.periodicWave = periodicWave;
      }
    }
    start(when = 0) {
      this._nativeOscillatorNode.start(when);
      if (this._oscillatorNodeRenderer !== null) {
        this._oscillatorNodeRenderer.start = when;
      }
      if (this.context.state !== "closed") {
        setInternalStateToActive(this);
        const resetInternalStateToPassive = () => {
          this._nativeOscillatorNode.removeEventListener("ended", resetInternalStateToPassive);
          if (isActiveAudioNode(this)) {
            setInternalStateToPassive(this);
          }
        };
        this._nativeOscillatorNode.addEventListener("ended", resetInternalStateToPassive);
      }
    }
    stop(when = 0) {
      this._nativeOscillatorNode.stop(when);
      if (this._oscillatorNodeRenderer !== null) {
        this._oscillatorNodeRenderer.stop = when;
      }
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-renderer-factory.js
var createOscillatorNodeRendererFactory = (connectAudioParam, createNativeOscillatorNode, getNativeAudioNode2, renderAutomation, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeOscillatorNodes = new WeakMap;
    let periodicWave = null;
    let start = null;
    let stop = null;
    const createOscillatorNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeOscillatorNode = getNativeAudioNode2(proxy);
      const nativeOscillatorNodeIsOwnedByContext = isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext);
      if (!nativeOscillatorNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeOscillatorNode.channelCount,
          channelCountMode: nativeOscillatorNode.channelCountMode,
          channelInterpretation: nativeOscillatorNode.channelInterpretation,
          detune: nativeOscillatorNode.detune.value,
          frequency: nativeOscillatorNode.frequency.value,
          periodicWave: periodicWave === null ? undefined : periodicWave,
          type: nativeOscillatorNode.type
        };
        nativeOscillatorNode = createNativeOscillatorNode(nativeOfflineAudioContext, options);
        if (start !== null) {
          nativeOscillatorNode.start(start);
        }
        if (stop !== null) {
          nativeOscillatorNode.stop(stop);
        }
      }
      renderedNativeOscillatorNodes.set(nativeOfflineAudioContext, nativeOscillatorNode);
      if (!nativeOscillatorNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
        await renderAutomation(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
        await connectAudioParam(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
      }
      await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeOscillatorNode);
      return nativeOscillatorNode;
    };
    return {
      set periodicWave(value) {
        periodicWave = value;
      },
      set start(value) {
        start = value;
      },
      set stop(value) {
        stop = value;
      },
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeOscillatorNode = renderedNativeOscillatorNodes.get(nativeOfflineAudioContext);
        if (renderedNativeOscillatorNode !== undefined) {
          return Promise.resolve(renderedNativeOscillatorNode);
        }
        return createOscillatorNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/panner-node-constructor.js
var DEFAULT_OPTIONS18 = {
  channelCount: 2,
  channelCountMode: "clamped-max",
  channelInterpretation: "speakers",
  coneInnerAngle: 360,
  coneOuterAngle: 360,
  coneOuterGain: 0,
  distanceModel: "inverse",
  maxDistance: 1e4,
  orientationX: 1,
  orientationY: 0,
  orientationZ: 0,
  panningModel: "equalpower",
  positionX: 0,
  positionY: 0,
  positionZ: 0,
  refDistance: 1,
  rolloffFactor: 1
};
var createPannerNodeConstructor = (audioNodeConstructor, createAudioParam, createNativePannerNode, createPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
  return class PannerNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS18, ...options };
      const nativePannerNode = createNativePannerNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const pannerNodeRenderer = isOffline ? createPannerNodeRenderer() : null;
      super(context, false, nativePannerNode, pannerNodeRenderer);
      this._nativePannerNode = nativePannerNode;
      this._orientationX = createAudioParam(this, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      this._orientationY = createAudioParam(this, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      this._orientationZ = createAudioParam(this, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      this._positionX = createAudioParam(this, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      this._positionY = createAudioParam(this, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      this._positionZ = createAudioParam(this, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      setAudioNodeTailTime(this, 1);
    }
    get coneInnerAngle() {
      return this._nativePannerNode.coneInnerAngle;
    }
    set coneInnerAngle(value) {
      this._nativePannerNode.coneInnerAngle = value;
    }
    get coneOuterAngle() {
      return this._nativePannerNode.coneOuterAngle;
    }
    set coneOuterAngle(value) {
      this._nativePannerNode.coneOuterAngle = value;
    }
    get coneOuterGain() {
      return this._nativePannerNode.coneOuterGain;
    }
    set coneOuterGain(value) {
      this._nativePannerNode.coneOuterGain = value;
    }
    get distanceModel() {
      return this._nativePannerNode.distanceModel;
    }
    set distanceModel(value) {
      this._nativePannerNode.distanceModel = value;
    }
    get maxDistance() {
      return this._nativePannerNode.maxDistance;
    }
    set maxDistance(value) {
      this._nativePannerNode.maxDistance = value;
    }
    get orientationX() {
      return this._orientationX;
    }
    get orientationY() {
      return this._orientationY;
    }
    get orientationZ() {
      return this._orientationZ;
    }
    get panningModel() {
      return this._nativePannerNode.panningModel;
    }
    set panningModel(value) {
      this._nativePannerNode.panningModel = value;
    }
    get positionX() {
      return this._positionX;
    }
    get positionY() {
      return this._positionY;
    }
    get positionZ() {
      return this._positionZ;
    }
    get refDistance() {
      return this._nativePannerNode.refDistance;
    }
    set refDistance(value) {
      this._nativePannerNode.refDistance = value;
    }
    get rolloffFactor() {
      return this._nativePannerNode.rolloffFactor;
    }
    set rolloffFactor(value) {
      this._nativePannerNode.rolloffFactor = value;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/panner-node-renderer-factory.js
var createPannerNodeRendererFactory = (connectAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeGainNode2, createNativePannerNode, getNativeAudioNode2, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext) => {
  return () => {
    const renderedNativeAudioNodes = new WeakMap;
    let renderedBufferPromise = null;
    const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeGainNode = null;
      let nativePannerNode = getNativeAudioNode2(proxy);
      const commonAudioNodeOptions = {
        channelCount: nativePannerNode.channelCount,
        channelCountMode: nativePannerNode.channelCountMode,
        channelInterpretation: nativePannerNode.channelInterpretation
      };
      const commonNativePannerNodeOptions = {
        ...commonAudioNodeOptions,
        coneInnerAngle: nativePannerNode.coneInnerAngle,
        coneOuterAngle: nativePannerNode.coneOuterAngle,
        coneOuterGain: nativePannerNode.coneOuterGain,
        distanceModel: nativePannerNode.distanceModel,
        maxDistance: nativePannerNode.maxDistance,
        panningModel: nativePannerNode.panningModel,
        refDistance: nativePannerNode.refDistance,
        rolloffFactor: nativePannerNode.rolloffFactor
      };
      const nativePannerNodeIsOwnedByContext = isOwnedByContext(nativePannerNode, nativeOfflineAudioContext);
      if ("bufferSize" in nativePannerNode) {
        nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
      } else if (!nativePannerNodeIsOwnedByContext) {
        const options = {
          ...commonNativePannerNodeOptions,
          orientationX: nativePannerNode.orientationX.value,
          orientationY: nativePannerNode.orientationY.value,
          orientationZ: nativePannerNode.orientationZ.value,
          positionX: nativePannerNode.positionX.value,
          positionY: nativePannerNode.positionY.value,
          positionZ: nativePannerNode.positionZ.value
        };
        nativePannerNode = createNativePannerNode(nativeOfflineAudioContext, options);
      }
      renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeGainNode === null ? nativePannerNode : nativeGainNode);
      if (nativeGainNode !== null) {
        if (renderedBufferPromise === null) {
          if (nativeOfflineAudioContextConstructor === null) {
            throw new Error("Missing the native OfflineAudioContext constructor.");
          }
          const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor(6, proxy.context.length, nativeOfflineAudioContext.sampleRate);
          const nativeChannelMergerNode = createNativeChannelMergerNode(partialOfflineAudioContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: 6
          });
          nativeChannelMergerNode.connect(partialOfflineAudioContext.destination);
          renderedBufferPromise = (async () => {
            const nativeConstantSourceNodes = await Promise.all([
              proxy.orientationX,
              proxy.orientationY,
              proxy.orientationZ,
              proxy.positionX,
              proxy.positionY,
              proxy.positionZ
            ].map(async (audioParam, index) => {
              const nativeConstantSourceNode = createNativeConstantSourceNode(partialOfflineAudioContext, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                offset: index === 0 ? 1 : 0
              });
              await renderAutomation(partialOfflineAudioContext, audioParam, nativeConstantSourceNode.offset);
              return nativeConstantSourceNode;
            }));
            for (let i = 0;i < 6; i += 1) {
              nativeConstantSourceNodes[i].connect(nativeChannelMergerNode, 0, i);
              nativeConstantSourceNodes[i].start(0);
            }
            return renderNativeOfflineAudioContext(partialOfflineAudioContext);
          })();
        }
        const renderedBuffer = await renderedBufferPromise;
        const inputGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, inputGainNode);
        const channelDatas = [];
        for (let i = 0;i < renderedBuffer.numberOfChannels; i += 1) {
          channelDatas.push(renderedBuffer.getChannelData(i));
        }
        let lastOrientation = [channelDatas[0][0], channelDatas[1][0], channelDatas[2][0]];
        let lastPosition = [channelDatas[3][0], channelDatas[4][0], channelDatas[5][0]];
        let gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
        let partialPannerNode = createNativePannerNode(nativeOfflineAudioContext, {
          ...commonNativePannerNodeOptions,
          orientationX: lastOrientation[0],
          orientationY: lastOrientation[1],
          orientationZ: lastOrientation[2],
          positionX: lastPosition[0],
          positionY: lastPosition[1],
          positionZ: lastPosition[2]
        });
        inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
        partialPannerNode.connect(nativeGainNode);
        for (let i = 128;i < renderedBuffer.length; i += 128) {
          const orientation = [channelDatas[0][i], channelDatas[1][i], channelDatas[2][i]];
          const positon = [channelDatas[3][i], channelDatas[4][i], channelDatas[5][i]];
          if (orientation.some((value, index) => value !== lastOrientation[index]) || positon.some((value, index) => value !== lastPosition[index])) {
            lastOrientation = orientation;
            lastPosition = positon;
            const currentTime = i / nativeOfflineAudioContext.sampleRate;
            gateGainNode.gain.setValueAtTime(0, currentTime);
            gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 0 });
            partialPannerNode = createNativePannerNode(nativeOfflineAudioContext, {
              ...commonNativePannerNodeOptions,
              orientationX: lastOrientation[0],
              orientationY: lastOrientation[1],
              orientationZ: lastOrientation[2],
              positionX: lastPosition[0],
              positionY: lastPosition[1],
              positionZ: lastPosition[2]
            });
            gateGainNode.gain.setValueAtTime(1, currentTime);
            inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
            partialPannerNode.connect(nativeGainNode);
          }
        }
        return nativeGainNode;
      }
      if (!nativePannerNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
        await renderAutomation(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
        await renderAutomation(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
        await renderAutomation(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
        await renderAutomation(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
        await renderAutomation(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
        await connectAudioParam(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
        await connectAudioParam(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
        await connectAudioParam(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
        await connectAudioParam(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
        await connectAudioParam(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
      }
      if (isNativeAudioNodeFaker(nativePannerNode)) {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);
      } else {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode);
      }
      return nativePannerNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeGainNodeOrNativePannerNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
        if (renderedNativeGainNodeOrNativePannerNode !== undefined) {
          return Promise.resolve(renderedNativeGainNodeOrNativePannerNode);
        }
        return createAudioNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/periodic-wave-constructor.js
var DEFAULT_OPTIONS19 = {
  disableNormalization: false
};
var createPeriodicWaveConstructor = (createNativePeriodicWave, getNativeContext, periodicWaveStore, sanitizePeriodicWaveOptions) => {
  return class PeriodicWave {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = sanitizePeriodicWaveOptions({ ...DEFAULT_OPTIONS19, ...options });
      const periodicWave = createNativePeriodicWave(nativeContext, mergedOptions);
      periodicWaveStore.add(periodicWave);
      return periodicWave;
    }
    static [Symbol.hasInstance](instance) {
      return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === PeriodicWave.prototype || periodicWaveStore.has(instance);
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/render-automation.js
var createRenderAutomation = (getAudioParamRenderer, renderInputsOfAudioParam) => {
  return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
    const audioParamRenderer = getAudioParamRenderer(audioParam);
    audioParamRenderer.replay(nativeAudioParam);
    return renderInputsOfAudioParam(audioParam, nativeOfflineAudioContext, nativeAudioParam);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-node.js
var createRenderInputsOfAudioNode = (getAudioNodeConnections2, getAudioNodeRenderer, isPartOfACycle2) => {
  return async (audioNode, nativeOfflineAudioContext, nativeAudioNode) => {
    const audioNodeConnections = getAudioNodeConnections2(audioNode);
    await Promise.all(audioNodeConnections.activeInputs.map((connections, input) => Array.from(connections).map(async ([source, output]) => {
      const audioNodeRenderer = getAudioNodeRenderer(source);
      const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
      const destination = audioNode.context.destination;
      if (!isPartOfACycle2(source) && (audioNode !== destination || !isPartOfACycle2(audioNode))) {
        renderedNativeAudioNode.connect(nativeAudioNode, output, input);
      }
    })).reduce((allRenderingPromises, renderingPromises) => [...allRenderingPromises, ...renderingPromises], []));
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-param.js
var createRenderInputsOfAudioParam = (getAudioNodeRenderer, getAudioParamConnections2, isPartOfACycle2) => {
  return async (audioParam, nativeOfflineAudioContext, nativeAudioParam) => {
    const audioParamConnections = getAudioParamConnections2(audioParam);
    await Promise.all(Array.from(audioParamConnections.activeInputs).map(async ([source, output]) => {
      const audioNodeRenderer = getAudioNodeRenderer(source);
      const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
      if (!isPartOfACycle2(source)) {
        renderedNativeAudioNode.connect(nativeAudioParam, output);
      }
    }));
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/render-native-offline-audio-context.js
var createRenderNativeOfflineAudioContext = (cacheTestResult, createNativeGainNode2, createNativeScriptProcessorNode2, testOfflineAudioContextCurrentTimeSupport) => {
  return (nativeOfflineAudioContext) => {
    if (cacheTestResult(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
      return Promise.resolve(cacheTestResult(testOfflineAudioContextCurrentTimeSupport, testOfflineAudioContextCurrentTimeSupport)).then((isOfflineAudioContextCurrentTimeSupported) => {
        if (!isOfflineAudioContextCurrentTimeSupported) {
          const scriptProcessorNode = createNativeScriptProcessorNode2(nativeOfflineAudioContext, 512, 0, 1);
          nativeOfflineAudioContext.oncomplete = () => {
            scriptProcessorNode.onaudioprocess = null;
            scriptProcessorNode.disconnect();
          };
          scriptProcessorNode.onaudioprocess = () => nativeOfflineAudioContext.currentTime;
          scriptProcessorNode.connect(nativeOfflineAudioContext.destination);
        }
        return nativeOfflineAudioContext.startRendering();
      });
    }
    return new Promise((resolve) => {
      const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      nativeOfflineAudioContext.oncomplete = (event) => {
        gainNode.disconnect();
        resolve(event.renderedBuffer);
      };
      gainNode.connect(nativeOfflineAudioContext.destination);
      nativeOfflineAudioContext.startRendering();
    });
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/set-active-audio-worklet-node-inputs.js
var createSetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore) => {
  return (nativeAudioWorkletNode, activeInputs) => {
    activeAudioWorkletNodeInputsStore.set(nativeAudioWorkletNode, activeInputs);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/set-audio-node-tail-time.js
var createSetAudioNodeTailTime = (audioNodeTailTimeStore) => {
  return (audioNode, tailTime) => audioNodeTailTimeStore.set(audioNode, tailTime);
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/start-rendering.js
var createStartRendering = (audioBufferStore, cacheTestResult, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes, renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds) => {
  return (destination, nativeOfflineAudioContext) => getAudioNodeRenderer(destination).render(destination, nativeOfflineAudioContext).then(() => Promise.all(Array.from(getUnrenderedAudioWorkletNodes(nativeOfflineAudioContext)).map((audioWorkletNode) => getAudioNodeRenderer(audioWorkletNode).render(audioWorkletNode, nativeOfflineAudioContext)))).then(() => renderNativeOfflineAudioContext(nativeOfflineAudioContext)).then((audioBuffer) => {
    if (typeof audioBuffer.copyFromChannel !== "function") {
      wrapAudioBufferCopyChannelMethods(audioBuffer);
      wrapAudioBufferGetChannelDataMethod(audioBuffer);
    } else if (!cacheTestResult(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
      wrapAudioBufferCopyChannelMethodsOutOfBounds(audioBuffer);
    }
    audioBufferStore.add(audioBuffer);
    return audioBuffer;
  });
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-constructor.js
var DEFAULT_OPTIONS20 = {
  channelCount: 2,
  channelCountMode: "explicit",
  channelInterpretation: "speakers",
  pan: 0
};
var createStereoPannerNodeConstructor = (audioNodeConstructor, createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext) => {
  return class StereoPannerNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS20, ...options };
      const nativeStereoPannerNode = createNativeStereoPannerNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer() : null;
      super(context, false, nativeStereoPannerNode, stereoPannerNodeRenderer);
      this._pan = createAudioParam(this, isOffline, nativeStereoPannerNode.pan);
    }
    get pan() {
      return this._pan;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-renderer-factory.js
var createStereoPannerNodeRendererFactory = (connectAudioParam, createNativeStereoPannerNode, getNativeAudioNode2, renderAutomation, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeStereoPannerNodes = new WeakMap;
    const createStereoPannerNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeStereoPannerNode = getNativeAudioNode2(proxy);
      const nativeStereoPannerNodeIsOwnedByContext = isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext);
      if (!nativeStereoPannerNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeStereoPannerNode.channelCount,
          channelCountMode: nativeStereoPannerNode.channelCountMode,
          channelInterpretation: nativeStereoPannerNode.channelInterpretation,
          pan: nativeStereoPannerNode.pan.value
        };
        nativeStereoPannerNode = createNativeStereoPannerNode(nativeOfflineAudioContext, options);
      }
      renderedNativeStereoPannerNodes.set(nativeOfflineAudioContext, nativeStereoPannerNode);
      if (!nativeStereoPannerNodeIsOwnedByContext) {
        await renderAutomation(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
      } else {
        await connectAudioParam(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
      }
      if (isNativeAudioNodeFaker(nativeStereoPannerNode)) {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);
      } else {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);
      }
      return nativeStereoPannerNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeStereoPannerNode = renderedNativeStereoPannerNodes.get(nativeOfflineAudioContext);
        if (renderedNativeStereoPannerNode !== undefined) {
          return Promise.resolve(renderedNativeStereoPannerNode);
        }
        return createStereoPannerNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/test-audio-buffer-constructor-support.js
var createTestAudioBufferConstructorSupport = (nativeAudioBufferConstructor) => {
  return () => {
    if (nativeAudioBufferConstructor === null) {
      return false;
    }
    try {
      new nativeAudioBufferConstructor({ length: 1, sampleRate: 44100 });
    } catch {
      return false;
    }
    return true;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/test-audio-worklet-processor-post-message-support.js
var createTestAudioWorkletProcessorPostMessageSupport = (nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor) => {
  return async () => {
    if (nativeAudioWorkletNodeConstructor === null) {
      return true;
    }
    if (nativeOfflineAudioContextConstructor === null) {
      return false;
    }
    const blob = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
      type: "application/javascript; charset=utf-8"
    });
    const offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 128, 44100);
    const url = URL.createObjectURL(blob);
    let isEmittingMessageEvents = false;
    let isEmittingProcessorErrorEvents = false;
    try {
      await offlineAudioContext.audioWorklet.addModule(url);
      const audioWorkletNode = new nativeAudioWorkletNodeConstructor(offlineAudioContext, "a", { numberOfOutputs: 0 });
      const oscillator = offlineAudioContext.createOscillator();
      audioWorkletNode.port.onmessage = () => isEmittingMessageEvents = true;
      audioWorkletNode.onprocessorerror = () => isEmittingProcessorErrorEvents = true;
      oscillator.connect(audioWorkletNode);
      oscillator.start(0);
      await offlineAudioContext.startRendering();
      await new Promise((resolve) => setTimeout(resolve));
    } catch {
    } finally {
      URL.revokeObjectURL(url);
    }
    return isEmittingMessageEvents && !isEmittingProcessorErrorEvents;
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/test-offline-audio-context-current-time-support.js
var createTestOfflineAudioContextCurrentTimeSupport = (createNativeGainNode2, nativeOfflineAudioContextConstructor) => {
  return () => {
    if (nativeOfflineAudioContextConstructor === null) {
      return Promise.resolve(false);
    }
    const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
    const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      gain: 0
    });
    return new Promise((resolve) => {
      nativeOfflineAudioContext.oncomplete = () => {
        gainNode.disconnect();
        resolve(nativeOfflineAudioContext.currentTime !== 0);
      };
      nativeOfflineAudioContext.startRendering();
    });
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/unknown-error.js
var createUnknownError = () => new DOMException("", "UnknownError");

// ../../node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-constructor.js
var DEFAULT_OPTIONS21 = {
  channelCount: 2,
  channelCountMode: "max",
  channelInterpretation: "speakers",
  curve: null,
  oversample: "none"
};
var createWaveShaperNodeConstructor = (audioNodeConstructor, createInvalidStateError2, createNativeWaveShaperNode, createWaveShaperNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
  return class WaveShaperNode extends audioNodeConstructor {
    constructor(context, options) {
      const nativeContext = getNativeContext(context);
      const mergedOptions = { ...DEFAULT_OPTIONS21, ...options };
      const nativeWaveShaperNode = createNativeWaveShaperNode(nativeContext, mergedOptions);
      const isOffline = isNativeOfflineAudioContext(nativeContext);
      const waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer() : null;
      super(context, true, nativeWaveShaperNode, waveShaperNodeRenderer);
      this._isCurveNullified = false;
      this._nativeWaveShaperNode = nativeWaveShaperNode;
      setAudioNodeTailTime(this, 1);
    }
    get curve() {
      if (this._isCurveNullified) {
        return null;
      }
      return this._nativeWaveShaperNode.curve;
    }
    set curve(value) {
      if (value === null) {
        this._isCurveNullified = true;
        this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
      } else {
        if (value.length < 2) {
          throw createInvalidStateError2();
        }
        this._isCurveNullified = false;
        this._nativeWaveShaperNode.curve = value;
      }
    }
    get oversample() {
      return this._nativeWaveShaperNode.oversample;
    }
    set oversample(value) {
      this._nativeWaveShaperNode.oversample = value;
    }
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-renderer-factory.js
var createWaveShaperNodeRendererFactory = (createNativeWaveShaperNode, getNativeAudioNode2, renderInputsOfAudioNode) => {
  return () => {
    const renderedNativeWaveShaperNodes = new WeakMap;
    const createWaveShaperNode = async (proxy, nativeOfflineAudioContext) => {
      let nativeWaveShaperNode = getNativeAudioNode2(proxy);
      const nativeWaveShaperNodeIsOwnedByContext = isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext);
      if (!nativeWaveShaperNodeIsOwnedByContext) {
        const options = {
          channelCount: nativeWaveShaperNode.channelCount,
          channelCountMode: nativeWaveShaperNode.channelCountMode,
          channelInterpretation: nativeWaveShaperNode.channelInterpretation,
          curve: nativeWaveShaperNode.curve,
          oversample: nativeWaveShaperNode.oversample
        };
        nativeWaveShaperNode = createNativeWaveShaperNode(nativeOfflineAudioContext, options);
      }
      renderedNativeWaveShaperNodes.set(nativeOfflineAudioContext, nativeWaveShaperNode);
      if (isNativeAudioNodeFaker(nativeWaveShaperNode)) {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);
      } else {
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
      }
      return nativeWaveShaperNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);
        if (renderedNativeWaveShaperNode !== undefined) {
          return Promise.resolve(renderedNativeWaveShaperNode);
        }
        return createWaveShaperNode(proxy, nativeOfflineAudioContext);
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/window.js
var createWindow = () => typeof window === "undefined" ? null : window;

// ../../node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods.js
var createWrapAudioBufferCopyChannelMethods = (convertNumberToUnsignedLong, createIndexSizeError2) => {
  return (audioBuffer) => {
    audioBuffer.copyFromChannel = (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
      const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
      const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);
      if (channelNumber >= audioBuffer.numberOfChannels) {
        throw createIndexSizeError2();
      }
      const audioBufferLength = audioBuffer.length;
      const channelData = audioBuffer.getChannelData(channelNumber);
      const destinationLength = destination.length;
      for (let i = bufferOffset < 0 ? -bufferOffset : 0;i + bufferOffset < audioBufferLength && i < destinationLength; i += 1) {
        destination[i] = channelData[i + bufferOffset];
      }
    };
    audioBuffer.copyToChannel = (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
      const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
      const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);
      if (channelNumber >= audioBuffer.numberOfChannels) {
        throw createIndexSizeError2();
      }
      const audioBufferLength = audioBuffer.length;
      const channelData = audioBuffer.getChannelData(channelNumber);
      const sourceLength = source.length;
      for (let i = bufferOffset < 0 ? -bufferOffset : 0;i + bufferOffset < audioBufferLength && i < sourceLength; i += 1) {
        channelData[i + bufferOffset] = source[i];
      }
    };
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods-out-of-bounds.js
var createWrapAudioBufferCopyChannelMethodsOutOfBounds = (convertNumberToUnsignedLong) => {
  return (audioBuffer) => {
    audioBuffer.copyFromChannel = ((copyFromChannel2) => {
      return (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);
        if (bufferOffset < audioBuffer.length) {
          return copyFromChannel2.call(audioBuffer, destination, channelNumber, bufferOffset);
        }
      };
    })(audioBuffer.copyFromChannel);
    audioBuffer.copyToChannel = ((copyToChannel2) => {
      return (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);
        if (bufferOffset < audioBuffer.length) {
          return copyToChannel2.call(audioBuffer, source, channelNumber, bufferOffset);
        }
      };
    })(audioBuffer.copyToChannel);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-source-node-stop-method-nullified-buffer.js
var createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer = (overwriteAccessors) => {
  return (nativeAudioBufferSourceNode, nativeContext) => {
    const nullifiedBuffer = nativeContext.createBuffer(1, 1, 44100);
    if (nativeAudioBufferSourceNode.buffer === null) {
      nativeAudioBufferSourceNode.buffer = nullifiedBuffer;
    }
    overwriteAccessors(nativeAudioBufferSourceNode, "buffer", (get) => () => {
      const value = get.call(nativeAudioBufferSourceNode);
      return value === nullifiedBuffer ? null : value;
    }, (set) => (value) => {
      return set.call(nativeAudioBufferSourceNode, value === null ? nullifiedBuffer : value);
    });
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/factories/wrap-channel-merger-node.js
var createWrapChannelMergerNode = (createInvalidStateError2, monitorConnections) => {
  return (nativeContext, channelMergerNode) => {
    channelMergerNode.channelCount = 1;
    channelMergerNode.channelCountMode = "explicit";
    Object.defineProperty(channelMergerNode, "channelCount", {
      get: () => 1,
      set: () => {
        throw createInvalidStateError2();
      }
    });
    Object.defineProperty(channelMergerNode, "channelCountMode", {
      get: () => "explicit",
      set: () => {
        throw createInvalidStateError2();
      }
    });
    const audioBufferSourceNode = nativeContext.createBufferSource();
    const whenConnected = () => {
      const length = channelMergerNode.numberOfInputs;
      for (let i = 0;i < length; i += 1) {
        audioBufferSourceNode.connect(channelMergerNode, 0, i);
      }
    };
    const whenDisconnected = () => audioBufferSourceNode.disconnect(channelMergerNode);
    monitorConnections(channelMergerNode, whenConnected, whenDisconnected);
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/get-first-sample.js
var getFirstSample = (audioBuffer, buffer, channelNumber) => {
  if (audioBuffer.copyFromChannel === undefined) {
    return audioBuffer.getChannelData(channelNumber)[0];
  }
  audioBuffer.copyFromChannel(buffer, channelNumber);
  return buffer[0];
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/is-dc-curve.js
var isDCCurve = (curve) => {
  if (curve === null) {
    return false;
  }
  const length = curve.length;
  if (length % 2 !== 0) {
    return curve[Math.floor(length / 2)] !== 0;
  }
  return curve[length / 2 - 1] + curve[length / 2] !== 0;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/overwrite-accessors.js
var overwriteAccessors = (object, property, createGetter, createSetter) => {
  let prototype = object;
  while (!prototype.hasOwnProperty(property)) {
    prototype = Object.getPrototypeOf(prototype);
  }
  const { get, set } = Object.getOwnPropertyDescriptor(prototype, property);
  Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/sanitize-audio-worklet-node-options.js
var sanitizeAudioWorkletNodeOptions = (options) => {
  return {
    ...options,
    outputChannelCount: options.outputChannelCount !== undefined ? options.outputChannelCount : options.numberOfInputs === 1 && options.numberOfOutputs === 1 ? [options.channelCount] : Array.from({ length: options.numberOfOutputs }, () => 1)
  };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/sanitize-channel-splitter-options.js
var sanitizeChannelSplitterOptions = (options) => {
  return { ...options, channelCount: options.numberOfOutputs };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/sanitize-periodic-wave-options.js
var sanitizePeriodicWaveOptions = (options) => {
  const { imag, real } = options;
  if (imag === undefined) {
    if (real === undefined) {
      return { ...options, imag: [0, 0], real: [0, 0] };
    }
    return { ...options, imag: Array.from(real, () => 0), real };
  }
  if (real === undefined) {
    return { ...options, imag, real: Array.from(imag, () => 0) };
  }
  return { ...options, imag, real };
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/set-value-at-time-until-possible.js
var setValueAtTimeUntilPossible = (audioParam, value, startTime) => {
  try {
    audioParam.setValueAtTime(value, startTime);
  } catch (err) {
    if (err.code !== 9) {
      throw err;
    }
    setValueAtTimeUntilPossible(audioParam, value, startTime + 0.0000001);
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-consecutive-calls-support.js
var testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = (nativeContext) => {
  const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
  nativeAudioBufferSourceNode.start();
  try {
    nativeAudioBufferSourceNode.start();
  } catch {
    return true;
  }
  return false;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-offset-clamping-support.js
var testAudioBufferSourceNodeStartMethodOffsetClampingSupport = (nativeContext) => {
  const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
  const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
  nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
  try {
    nativeAudioBufferSourceNode.start(0, 1);
  } catch {
    return false;
  }
  return true;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-stop-method-nullified-buffer-support.js
var testAudioBufferSourceNodeStopMethodNullifiedBufferSupport = (nativeContext) => {
  const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
  nativeAudioBufferSourceNode.start();
  try {
    nativeAudioBufferSourceNode.stop();
  } catch {
    return false;
  }
  return true;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-start-method-negative-parameters-support.js
var testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = (nativeContext) => {
  const nativeAudioBufferSourceNode = nativeContext.createOscillator();
  try {
    nativeAudioBufferSourceNode.start(-1);
  } catch (err) {
    return err instanceof RangeError;
  }
  return false;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-consecutive-calls-support.js
var testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = (nativeContext) => {
  const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
  const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
  nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
  nativeAudioBufferSourceNode.start();
  nativeAudioBufferSourceNode.stop();
  try {
    nativeAudioBufferSourceNode.stop();
    return true;
  } catch {
    return false;
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-negative-parameters-support.js
var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = (nativeContext) => {
  const nativeAudioBufferSourceNode = nativeContext.createOscillator();
  try {
    nativeAudioBufferSourceNode.stop(-1);
  } catch (err) {
    return err instanceof RangeError;
  }
  return false;
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/test-audio-worklet-node-options-clonability.js
var testAudioWorkletNodeOptionsClonability = (audioWorkletNodeOptions) => {
  const { port1, port2 } = new MessageChannel;
  try {
    port1.postMessage(audioWorkletNodeOptions);
  } finally {
    port1.close();
    port2.close();
  }
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-offset-clamping.js
var wrapAudioBufferSourceNodeStartMethodOffsetClamping = (nativeAudioBufferSourceNode) => {
  nativeAudioBufferSourceNode.start = ((start) => {
    return (when = 0, offset = 0, duration) => {
      const buffer = nativeAudioBufferSourceNode.buffer;
      const clampedOffset = buffer === null ? offset : Math.min(buffer.duration, offset);
      if (buffer !== null && clampedOffset > buffer.duration - 0.5 / nativeAudioBufferSourceNode.context.sampleRate) {
        start.call(nativeAudioBufferSourceNode, when, 0, 0);
      } else {
        start.call(nativeAudioBufferSourceNode, when, clampedOffset, duration);
      }
    };
  })(nativeAudioBufferSourceNode.start);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-consecutive-calls.js
var wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = (nativeAudioScheduledSourceNode, nativeContext) => {
  const nativeGainNode = nativeContext.createGain();
  nativeAudioScheduledSourceNode.connect(nativeGainNode);
  const disconnectGainNode = ((disconnect) => {
    return () => {
      disconnect.call(nativeAudioScheduledSourceNode, nativeGainNode);
      nativeAudioScheduledSourceNode.removeEventListener("ended", disconnectGainNode);
    };
  })(nativeAudioScheduledSourceNode.disconnect);
  nativeAudioScheduledSourceNode.addEventListener("ended", disconnectGainNode);
  interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);
  nativeAudioScheduledSourceNode.stop = ((stop) => {
    let isStopped = false;
    return (when = 0) => {
      if (isStopped) {
        try {
          stop.call(nativeAudioScheduledSourceNode, when);
        } catch {
          nativeGainNode.gain.setValueAtTime(0, when);
        }
      } else {
        stop.call(nativeAudioScheduledSourceNode, when);
        isStopped = true;
      }
    };
  })(nativeAudioScheduledSourceNode.stop);
};

// ../../node_modules/standardized-audio-context/build/es2019/helpers/wrap-event-listener.js
var wrapEventListener = (target, eventListener) => {
  return (event) => {
    const descriptor = { value: target };
    Object.defineProperties(event, {
      currentTarget: descriptor,
      target: descriptor
    });
    if (typeof eventListener === "function") {
      return eventListener.call(target, event);
    }
    return eventListener.handleEvent.call(target, event);
  };
};
// ../../node_modules/standardized-audio-context/build/es2019/module.js
var addActiveInputConnectionToAudioNode = createAddActiveInputConnectionToAudioNode(insertElementInSet);
var addPassiveInputConnectionToAudioNode = createAddPassiveInputConnectionToAudioNode(insertElementInSet);
var deleteActiveInputConnectionToAudioNode = createDeleteActiveInputConnectionToAudioNode(pickElementFromSet);
var audioNodeTailTimeStore = new WeakMap;
var getAudioNodeTailTime = createGetAudioNodeTailTime(audioNodeTailTimeStore);
var cacheTestResult = createCacheTestResult(new Map, new WeakMap);
var window3 = createWindow();
var createNativeAnalyserNode = createNativeAnalyserNodeFactory(cacheTestResult, createIndexSizeError);
var getAudioNodeRenderer = createGetAudioNodeRenderer(getAudioNodeConnections);
var renderInputsOfAudioNode = createRenderInputsOfAudioNode(getAudioNodeConnections, getAudioNodeRenderer, isPartOfACycle);
var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode);
var getNativeContext = createGetNativeContext(CONTEXT_STORE);
var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window3);
var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
var audioParamAudioNodeStore = new WeakMap;
var eventTargetConstructor = createEventTargetConstructor(wrapEventListener);
var nativeAudioContextConstructor = createNativeAudioContextConstructor(window3);
var isNativeAudioContext = createIsNativeAudioContext(nativeAudioContextConstructor);
var isNativeAudioNode2 = createIsNativeAudioNode(window3);
var isNativeAudioParam = createIsNativeAudioParam(window3);
var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window3);
var audioNodeConstructor = createAudioNodeConstructor(createAddAudioNodeConnections(AUDIO_NODE_CONNECTIONS_STORE), createAddConnectionToAudioNode(addActiveInputConnectionToAudioNode, addPassiveInputConnectionToAudioNode, connectNativeAudioNodeToNativeAudioNode, deleteActiveInputConnectionToAudioNode, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getAudioNodeTailTime, getEventListenersOfAudioNode, getNativeAudioNode, insertElementInSet, isActiveAudioNode, isPartOfACycle, isPassiveAudioNode), cacheTestResult, createIncrementCycleCounterFactory(CYCLE_COUNTERS, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, isActiveAudioNode), createIndexSizeError, createInvalidAccessError, createNotSupportedError, createDecrementCycleCounter(connectNativeAudioNodeToNativeAudioNode, CYCLE_COUNTERS, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, getNativeContext, isActiveAudioNode, isNativeOfflineAudioContext), createDetectCycles(audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey), eventTargetConstructor, getNativeContext, isNativeAudioContext, isNativeAudioNode2, isNativeAudioParam, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor);
var analyserNodeConstructor = createAnalyserNodeConstructor(audioNodeConstructor, createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, getNativeContext, isNativeOfflineAudioContext);
var audioBufferStore = new WeakSet;
var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window3);
var convertNumberToUnsignedLong = createConvertNumberToUnsignedLong(new Uint32Array(1));
var wrapAudioBufferCopyChannelMethods = createWrapAudioBufferCopyChannelMethods(convertNumberToUnsignedLong, createIndexSizeError);
var wrapAudioBufferCopyChannelMethodsOutOfBounds = createWrapAudioBufferCopyChannelMethodsOutOfBounds(convertNumberToUnsignedLong);
var audioBufferConstructor = createAudioBufferConstructor(audioBufferStore, cacheTestResult, createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor), wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
var addSilentConnection = createAddSilentConnection(createNativeGainNode);
var renderInputsOfAudioParam = createRenderInputsOfAudioParam(getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle);
var connectAudioParam = createConnectAudioParam(renderInputsOfAudioParam);
var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(addSilentConnection, cacheTestResult, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodOffsetClampingSupport, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioBufferSourceNodeStartMethodOffsetClamping, createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer(overwriteAccessors), wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
var renderAutomation = createRenderAutomation(createGetAudioParamRenderer(getAudioParamConnections), renderInputsOfAudioParam);
var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(connectAudioParam, createNativeAudioBufferSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var createAudioParam = createAudioParamFactory(createAddAudioParamConnections(AUDIO_PARAM_CONNECTIONS_STORE), audioParamAudioNodeStore, AUDIO_PARAM_STORE, createAudioParamRenderer, import_automation_events2.createCancelAndHoldAutomationEvent, import_automation_events2.createCancelScheduledValuesAutomationEvent, import_automation_events2.createExponentialRampToValueAutomationEvent, import_automation_events2.createLinearRampToValueAutomationEvent, import_automation_events2.createSetTargetAutomationEvent, import_automation_events2.createSetValueAutomationEvent, import_automation_events2.createSetValueCurveAutomationEvent, nativeAudioContextConstructor, setValueAtTimeUntilPossible);
var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(audioNodeConstructor, createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNodeFactory(createNativeGainNode, overwriteAccessors), getNativeContext, isNativeOfflineAudioContext, renderInputsOfAudioNode);
var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(connectAudioParam, createNativeBiquadFilterNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var setAudioNodeTailTime = createSetAudioNodeTailTime(audioNodeTailTimeStore);
var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(audioNodeConstructor, createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
var monitorConnections = createMonitorConnections(insertElementInSet, isNativeAudioNode2);
var wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, monitorConnections);
var createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(nativeAudioContextConstructor, wrapChannelMergerNode);
var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(createNativeChannelMergerNode, getNativeAudioNode, renderInputsOfAudioNode);
var channelMergerNodeConstructor = createChannelMergerNodeConstructor(audioNodeConstructor, createChannelMergerNodeRenderer, createNativeChannelMergerNode, getNativeContext, isNativeOfflineAudioContext);
var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode, getNativeAudioNode, renderInputsOfAudioNode);
var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(audioNodeConstructor, createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, getNativeContext, isNativeOfflineAudioContext, sanitizeChannelSplitterOptions);
var createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(addSilentConnection, createNativeAudioBufferSourceNode, createNativeGainNode, monitorConnections);
var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(addSilentConnection, cacheTestResult, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport);
var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(connectAudioParam, createNativeConstantSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var constantSourceNodeConstructor = createConstantSourceNodeConstructor(audioNodeConstructor, createAudioParam, createConstantSourceNodeRenderer, createNativeConstantSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
var createNativeConvolverNode = createNativeConvolverNodeFactory(createNotSupportedError, overwriteAccessors);
var createConvolverNodeRenderer = createConvolverNodeRendererFactory(createNativeConvolverNode, getNativeAudioNode, renderInputsOfAudioNode);
var convolverNodeConstructor = createConvolverNodeConstructor(audioNodeConstructor, createConvolverNodeRenderer, createNativeConvolverNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
var createDelayNodeRenderer = createDelayNodeRendererFactory(connectAudioParam, createNativeDelayNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var delayNodeConstructor = createDelayNodeConstructor(audioNodeConstructor, createAudioParam, createDelayNodeRenderer, createNativeDelayNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
var createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNotSupportedError);
var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(connectAudioParam, createNativeDynamicsCompressorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(audioNodeConstructor, createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
var createGainNodeRenderer = createGainNodeRendererFactory(connectAudioParam, createNativeGainNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var gainNodeConstructor = createGainNodeConstructor(audioNodeConstructor, createAudioParam, createGainNodeRenderer, createNativeGainNode, getNativeContext, isNativeOfflineAudioContext);
var createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError);
var renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(cacheTestResult, createNativeGainNode, createNativeScriptProcessorNode, createTestOfflineAudioContextCurrentTimeSupport(createNativeGainNode, nativeOfflineAudioContextConstructor));
var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
var createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeIIRFilterNodeFaker);
var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(audioNodeConstructor, createNativeIIRFilterNode, createIIRFilterNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
var createAudioListener = createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, createNotSupportedError, getFirstSample, isNativeOfflineAudioContext, overwriteAccessors);
var unrenderedAudioWorkletNodeStore = new WeakMap;
var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener, eventTargetConstructor, isNativeOfflineAudioContext, unrenderedAudioWorkletNodeStore, wrapEventListener);
var createNativeOscillatorNode = createNativeOscillatorNodeFactory(addSilentConnection, cacheTestResult, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(connectAudioParam, createNativeOscillatorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var oscillatorNodeConstructor = createOscillatorNodeConstructor(audioNodeConstructor, createAudioParam, createNativeOscillatorNode, createOscillatorNodeRenderer, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
var createConnectedNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNodeFactory(createNativeAudioBufferSourceNode);
var createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeGainNode, isDCCurve, monitorConnections);
var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeWaveShaperNodeFaker, isDCCurve, monitorConnections, nativeAudioContextConstructor, overwriteAccessors);
var createNativePannerNodeFaker = createNativePannerNodeFakerFactory(connectNativeAudioNodeToNativeAudioNode, createInvalidStateError, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError, disconnectNativeAudioNodeFromNativeAudioNode, getFirstSample, monitorConnections);
var createNativePannerNode = createNativePannerNodeFactory(createNativePannerNodeFaker);
var createPannerNodeRenderer = createPannerNodeRendererFactory(connectAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeGainNode, createNativePannerNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
var pannerNodeConstructor = createPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativePannerNode, createPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
var createNativePeriodicWave = createNativePeriodicWaveFactory(createIndexSizeError);
var periodicWaveConstructor = createPeriodicWaveConstructor(createNativePeriodicWave, getNativeContext, new WeakSet, sanitizePeriodicWaveOptions);
var nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError, monitorConnections);
var createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(nativeStereoPannerNodeFakerFactory, createNotSupportedError);
var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(connectAudioParam, createNativeStereoPannerNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext);
var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(createNativeWaveShaperNode, getNativeAudioNode, renderInputsOfAudioNode);
var waveShaperNodeConstructor = createWaveShaperNodeConstructor(audioNodeConstructor, createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
var isSecureContext = createIsSecureContext(window3);
var exposeCurrentFrameAndCurrentTime = createExposeCurrentFrameAndCurrentTime(window3);
var backupOfflineAudioContextStore = new WeakMap;
var getOrCreateBackupOfflineAudioContext = createGetOrCreateBackupOfflineAudioContext(backupOfflineAudioContextStore, nativeOfflineAudioContextConstructor);
var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(cacheTestResult, createNotSupportedError, createEvaluateSource(window3), exposeCurrentFrameAndCurrentTime, createFetchSource(createAbortError), getNativeContext, getOrCreateBackupOfflineAudioContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, new WeakMap, new WeakMap, createTestAudioWorkletProcessorPostMessageSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor), window3) : undefined;
var isNativeContext = createIsNativeContext(isNativeAudioContext, isNativeOfflineAudioContext);
var decodeAudioData = createDecodeAudioData(audioBufferStore, cacheTestResult, createDataCloneError, createEncodingError, new WeakSet, getNativeContext, isNativeContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, testPromiseSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
var baseAudioContextConstructor = createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor);
var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaElementAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
var mediaStreamAudioDestinationNodeConstructor = createMediaStreamAudioDestinationNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext);
var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
var createNativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNodeFactory(createInvalidStateError, isNativeOfflineAudioContext);
var mediaStreamTrackAudioSourceNodeConstructor = createMediaStreamTrackAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext);
var audioContextConstructor = createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNotSupportedError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioDestinationNodeConstructor, mediaStreamAudioSourceNodeConstructor, mediaStreamTrackAudioSourceNodeConstructor, nativeAudioContextConstructor);
var getUnrenderedAudioWorkletNodes = createGetUnrenderedAudioWorkletNodes(unrenderedAudioWorkletNodeStore);
var addUnrenderedAudioWorkletNode = createAddUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
var connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
var deleteUnrenderedAudioWorkletNode = createDeleteUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
var disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
var activeAudioWorkletNodeInputsStore = new WeakMap;
var getActiveAudioWorkletNodeInputs = createGetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore, getValueForKey);
var createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getActiveAudioWorkletNodeInputs, monitorConnections);
var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioWorkletNodeFaker, createNativeGainNode, createNotSupportedError, monitorConnections);
var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(connectAudioParam, connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, deleteUnrenderedAudioWorkletNode, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getNativeAudioNode, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
var getBackupOfflineAudioContext = createGetBackupOfflineAudioContext(backupOfflineAudioContextStore);
var setActiveAudioWorkletNodeInputs = createSetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore);
var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(addUnrenderedAudioWorkletNode, audioNodeConstructor, createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, getAudioNodeConnections, getBackupOfflineAudioContext, getNativeContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, sanitizeAudioWorkletNodeOptions, setActiveAudioWorkletNodeInputs, testAudioWorkletNodeOptionsClonability, wrapEventListener) : undefined;
var minimalAudioContextConstructor = createMinimalAudioContextConstructor(createInvalidStateError, createNotSupportedError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor);
var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor);
var startRendering = createStartRendering(audioBufferStore, cacheTestResult, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes, renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering);
var offlineAudioContextConstructor = createOfflineAudioContextConstructor(baseAudioContextConstructor, cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, startRendering);
var isAnyAudioContext = createIsAnyAudioContext(CONTEXT_STORE, isNativeAudioContext);
var isAnyAudioNode = createIsAnyAudioNode(AUDIO_NODE_STORE, isNativeAudioNode2);
var isAnyAudioParam = createIsAnyAudioParam(AUDIO_PARAM_STORE, isNativeAudioParam);
var isAnyOfflineAudioContext = createIsAnyOfflineAudioContext(CONTEXT_STORE, isNativeOfflineAudioContext);

// ../../node_modules/tone/build/esm/core/util/TypeCheck.js
function isUndef(arg) {
  return arg === undefined;
}
function isDefined(arg) {
  return arg !== undefined;
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isObject(arg) {
  return Object.prototype.toString.call(arg) === "[object Object]" && arg.constructor === Object;
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isArray(arg) {
  return Array.isArray(arg);
}
function isString(arg) {
  return typeof arg === "string";
}
function isNote(arg) {
  return isString(arg) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(arg);
}

// ../../node_modules/tone/build/esm/core/util/Debug.js
function assert(statement, error) {
  if (!statement) {
    throw new Error(error);
  }
}
function assertRange(value, gte, lte = Infinity) {
  if (!(gte <= value && value <= lte)) {
    throw new RangeError(`Value must be within [${gte}, ${lte}], got: ${value}`);
  }
}
function assertContextRunning(context2) {
  if (!context2.isOffline && context2.state !== "running") {
    warn('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
  }
}
var isInsideScheduledCallback = false;
var printedScheduledWarning = false;
function enterScheduledCallback(insideCallback) {
  isInsideScheduledCallback = insideCallback;
}
function assertUsedScheduleTime(time) {
  if (isUndef(time) && isInsideScheduledCallback && !printedScheduledWarning) {
    printedScheduledWarning = true;
    warn("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing");
  }
}
var defaultLogger = console;
function log(...args) {
  defaultLogger.log(...args);
}
function warn(...args) {
  defaultLogger.warn(...args);
}

// ../../node_modules/tone/build/esm/core/context/AudioContext.js
function createAudioContext(options) {
  return new audioContextConstructor(options);
}
function createOfflineAudioContext(channels, length, sampleRate) {
  return new offlineAudioContextConstructor(channels, length, sampleRate);
}
var theWindow = typeof self === "object" ? self : null;
var hasAudioContext = theWindow && (theWindow.hasOwnProperty("AudioContext") || theWindow.hasOwnProperty("webkitAudioContext"));
function createAudioWorkletNode(context2, name, options) {
  assert(isDefined(audioWorkletNodeConstructor), "AudioWorkletNode only works in a secure context (https or localhost)");
  return new (context2 instanceof (theWindow === null || theWindow === undefined ? undefined : theWindow.BaseAudioContext) ? theWindow === null || theWindow === undefined ? undefined : theWindow.AudioWorkletNode : audioWorkletNodeConstructor)(context2, name, options);
}

// ../../node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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

// ../../node_modules/tone/build/esm/core/clock/Ticker.js
class Ticker {
  constructor(callback, type, updateInterval, contextSampleRate) {
    this._callback = callback;
    this._type = type;
    this._minimumUpdateInterval = Math.max(128 / (contextSampleRate || 44100), 0.001);
    this.updateInterval = updateInterval;
    this._createClock();
  }
  _createWorker() {
    const blob = new Blob([
      `
\t\t\t// the initial timeout time
\t\t\tlet timeoutTime =  ${(this._updateInterval * 1000).toFixed(1)};
\t\t\t// onmessage callback
\t\t\tself.onmessage = function(msg){
\t\t\t\ttimeoutTime = parseInt(msg.data);
\t\t\t};
\t\t\t// the tick function which posts a message
\t\t\t// and schedules a new tick
\t\t\tfunction tick(){
\t\t\t\tsetTimeout(tick, timeoutTime);
\t\t\t\tself.postMessage('tick');
\t\t\t}
\t\t\t// call tick initially
\t\t\ttick();
\t\t\t`
    ], { type: "text/javascript" });
    const blobUrl = URL.createObjectURL(blob);
    const worker = new Worker(blobUrl);
    worker.onmessage = this._callback.bind(this);
    this._worker = worker;
  }
  _createTimeout() {
    this._timeout = setTimeout(() => {
      this._createTimeout();
      this._callback();
    }, this._updateInterval * 1000);
  }
  _createClock() {
    if (this._type === "worker") {
      try {
        this._createWorker();
      } catch (e) {
        this._type = "timeout";
        this._createClock();
      }
    } else if (this._type === "timeout") {
      this._createTimeout();
    }
  }
  _disposeClock() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    if (this._worker) {
      this._worker.terminate();
      this._worker.onmessage = null;
    }
  }
  get updateInterval() {
    return this._updateInterval;
  }
  set updateInterval(interval) {
    var _a;
    this._updateInterval = Math.max(interval, this._minimumUpdateInterval);
    if (this._type === "worker") {
      (_a = this._worker) === null || _a === undefined || _a.postMessage(this._updateInterval * 1000);
    }
  }
  get type() {
    return this._type;
  }
  set type(type) {
    this._disposeClock();
    this._type = type;
    this._createClock();
  }
  dispose() {
    this._disposeClock();
  }
}

// ../../node_modules/tone/build/esm/core/util/AdvancedTypeCheck.js
function isAudioParam(arg) {
  return isAnyAudioParam(arg);
}
function isAudioNode2(arg) {
  return isAnyAudioNode(arg);
}
function isOfflineAudioContext(arg) {
  return isAnyOfflineAudioContext(arg);
}
function isAudioContext(arg) {
  return isAnyAudioContext(arg);
}
function isAudioBuffer(arg) {
  return arg instanceof audioBufferConstructor;
}

// ../../node_modules/tone/build/esm/core/util/Defaults.js
function noCopy(key, arg) {
  return key === "value" || isAudioParam(arg) || isAudioNode2(arg) || isAudioBuffer(arg);
}
function deepMerge(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (noCopy(key, source[key])) {
        target[key] = source[key];
      } else if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}
function deepEquals(arrayA, arrayB) {
  return arrayA.length === arrayB.length && arrayA.every((element, index) => arrayB[index] === element);
}
function optionsFromArguments(defaults, argsArray, keys = [], objKey) {
  const opts = {};
  const args = Array.from(argsArray);
  if (isObject(args[0]) && objKey && !Reflect.has(args[0], objKey)) {
    const partOfDefaults = Object.keys(args[0]).some((key) => Reflect.has(defaults, key));
    if (!partOfDefaults) {
      deepMerge(opts, { [objKey]: args[0] });
      keys.splice(keys.indexOf(objKey), 1);
      args.shift();
    }
  }
  if (args.length === 1 && isObject(args[0])) {
    deepMerge(opts, args[0]);
  } else {
    for (let i = 0;i < keys.length; i++) {
      if (isDefined(args[i])) {
        opts[keys[i]] = args[i];
      }
    }
  }
  return deepMerge(defaults, opts);
}
function getDefaultsFromInstance(instance) {
  return instance.constructor.getDefaults();
}
function defaultArg(given, fallback) {
  if (isUndef(given)) {
    return fallback;
  } else {
    return given;
  }
}
function omitFromObject(obj, omit) {
  omit.forEach((prop) => {
    if (Reflect.has(obj, prop)) {
      delete obj[prop];
    }
  });
  return obj;
}

// ../../node_modules/tone/build/esm/core/Tone.js
class Tone {
  constructor() {
    this.debug = false;
    this._wasDisposed = false;
  }
  static getDefaults() {
    return {};
  }
  log(...args) {
    if (this.debug || theWindow && this.toString() === theWindow.TONE_DEBUG_CLASS) {
      log(this, ...args);
    }
  }
  dispose() {
    this._wasDisposed = true;
    return this;
  }
  get disposed() {
    return this._wasDisposed;
  }
  toString() {
    return this.name;
  }
}
Tone.version = version;

// ../../node_modules/tone/build/esm/core/util/Math.js
var EPSILON = 0.000001;
function GT(a, b) {
  return a > b + EPSILON;
}
function GTE(a, b) {
  return GT(a, b) || EQ(a, b);
}
function LT(a, b) {
  return a + EPSILON < b;
}
function EQ(a, b) {
  return Math.abs(a - b) < EPSILON;
}
function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
}

// ../../node_modules/tone/build/esm/core/util/Timeline.js
class Timeline extends Tone {
  constructor() {
    super();
    this.name = "Timeline";
    this._timeline = [];
    const options = optionsFromArguments(Timeline.getDefaults(), arguments, ["memory"]);
    this.memory = options.memory;
    this.increasing = options.increasing;
  }
  static getDefaults() {
    return {
      memory: Infinity,
      increasing: false
    };
  }
  get length() {
    return this._timeline.length;
  }
  add(event) {
    assert(Reflect.has(event, "time"), "Timeline: events must have a time attribute");
    event.time = event.time.valueOf();
    if (this.increasing && this.length) {
      const lastValue = this._timeline[this.length - 1];
      assert(GTE(event.time, lastValue.time), "The time must be greater than or equal to the last scheduled time");
      this._timeline.push(event);
    } else {
      const index = this._search(event.time);
      this._timeline.splice(index + 1, 0, event);
    }
    if (this.length > this.memory) {
      const diff = this.length - this.memory;
      this._timeline.splice(0, diff);
    }
    return this;
  }
  remove(event) {
    const index = this._timeline.indexOf(event);
    if (index !== -1) {
      this._timeline.splice(index, 1);
    }
    return this;
  }
  get(time, param = "time") {
    const index = this._search(time, param);
    if (index !== -1) {
      return this._timeline[index];
    } else {
      return null;
    }
  }
  peek() {
    return this._timeline[0];
  }
  shift() {
    return this._timeline.shift();
  }
  getAfter(time, param = "time") {
    const index = this._search(time, param);
    if (index + 1 < this._timeline.length) {
      return this._timeline[index + 1];
    } else {
      return null;
    }
  }
  getBefore(time) {
    const len = this._timeline.length;
    if (len > 0 && this._timeline[len - 1].time < time) {
      return this._timeline[len - 1];
    }
    const index = this._search(time);
    if (index - 1 >= 0) {
      return this._timeline[index - 1];
    } else {
      return null;
    }
  }
  cancel(after) {
    if (this._timeline.length > 1) {
      let index = this._search(after);
      if (index >= 0) {
        if (EQ(this._timeline[index].time, after)) {
          for (let i = index;i >= 0; i--) {
            if (EQ(this._timeline[i].time, after)) {
              index = i;
            } else {
              break;
            }
          }
          this._timeline = this._timeline.slice(0, index);
        } else {
          this._timeline = this._timeline.slice(0, index + 1);
        }
      } else {
        this._timeline = [];
      }
    } else if (this._timeline.length === 1) {
      if (GTE(this._timeline[0].time, after)) {
        this._timeline = [];
      }
    }
    return this;
  }
  cancelBefore(time) {
    const index = this._search(time);
    if (index >= 0) {
      this._timeline = this._timeline.slice(index + 1);
    }
    return this;
  }
  previousEvent(event) {
    const index = this._timeline.indexOf(event);
    if (index > 0) {
      return this._timeline[index - 1];
    } else {
      return null;
    }
  }
  _search(time, param = "time") {
    if (this._timeline.length === 0) {
      return -1;
    }
    let beginning = 0;
    const len = this._timeline.length;
    let end = len;
    if (len > 0 && this._timeline[len - 1][param] <= time) {
      return len - 1;
    }
    while (beginning < end) {
      let midPoint = Math.floor(beginning + (end - beginning) / 2);
      const event = this._timeline[midPoint];
      const nextEvent = this._timeline[midPoint + 1];
      if (EQ(event[param], time)) {
        for (let i = midPoint;i < this._timeline.length; i++) {
          const testEvent = this._timeline[i];
          if (EQ(testEvent[param], time)) {
            midPoint = i;
          } else {
            break;
          }
        }
        return midPoint;
      } else if (LT(event[param], time) && GT(nextEvent[param], time)) {
        return midPoint;
      } else if (GT(event[param], time)) {
        end = midPoint;
      } else {
        beginning = midPoint + 1;
      }
    }
    return -1;
  }
  _iterate(callback, lowerBound = 0, upperBound = this._timeline.length - 1) {
    this._timeline.slice(lowerBound, upperBound + 1).forEach(callback);
  }
  forEach(callback) {
    this._iterate(callback);
    return this;
  }
  forEachBefore(time, callback) {
    const upperBound = this._search(time);
    if (upperBound !== -1) {
      this._iterate(callback, 0, upperBound);
    }
    return this;
  }
  forEachAfter(time, callback) {
    const lowerBound = this._search(time);
    this._iterate(callback, lowerBound + 1);
    return this;
  }
  forEachBetween(startTime, endTime, callback) {
    let lowerBound = this._search(startTime);
    let upperBound = this._search(endTime);
    if (lowerBound !== -1 && upperBound !== -1) {
      if (this._timeline[lowerBound].time !== startTime) {
        lowerBound += 1;
      }
      if (this._timeline[upperBound].time === endTime) {
        upperBound -= 1;
      }
      this._iterate(callback, lowerBound, upperBound);
    } else if (lowerBound === -1) {
      this._iterate(callback, 0, upperBound);
    }
    return this;
  }
  forEachFrom(time, callback) {
    let lowerBound = this._search(time);
    while (lowerBound >= 0 && this._timeline[lowerBound].time >= time) {
      lowerBound--;
    }
    this._iterate(callback, lowerBound + 1);
    return this;
  }
  forEachAtTime(time, callback) {
    const upperBound = this._search(time);
    if (upperBound !== -1 && EQ(this._timeline[upperBound].time, time)) {
      let lowerBound = upperBound;
      for (let i = upperBound;i >= 0; i--) {
        if (EQ(this._timeline[i].time, time)) {
          lowerBound = i;
        } else {
          break;
        }
      }
      this._iterate((event) => {
        callback(event);
      }, lowerBound, upperBound);
    }
    return this;
  }
  dispose() {
    super.dispose();
    this._timeline = [];
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/context/ContextInitialization.js
var notifyNewContext = [];
function onContextInit(cb) {
  notifyNewContext.push(cb);
}
function initializeContext(ctx) {
  notifyNewContext.forEach((cb) => cb(ctx));
}
var notifyCloseContext = [];
function onContextClose(cb) {
  notifyCloseContext.push(cb);
}
function closeContext(ctx) {
  notifyCloseContext.forEach((cb) => cb(ctx));
}

// ../../node_modules/tone/build/esm/core/util/Emitter.js
class Emitter extends Tone {
  constructor() {
    super(...arguments);
    this.name = "Emitter";
  }
  on(event, callback) {
    const events = event.split(/\W+/);
    events.forEach((eventName) => {
      if (isUndef(this._events)) {
        this._events = {};
      }
      if (!this._events.hasOwnProperty(eventName)) {
        this._events[eventName] = [];
      }
      this._events[eventName].push(callback);
    });
    return this;
  }
  once(event, callback) {
    const boundCallback = (...args) => {
      callback(...args);
      this.off(event, boundCallback);
    };
    this.on(event, boundCallback);
    return this;
  }
  off(event, callback) {
    const events = event.split(/\W+/);
    events.forEach((eventName) => {
      if (isUndef(this._events)) {
        this._events = {};
      }
      if (this._events.hasOwnProperty(eventName)) {
        if (isUndef(callback)) {
          this._events[eventName] = [];
        } else {
          const eventList = this._events[eventName];
          for (let i = eventList.length - 1;i >= 0; i--) {
            if (eventList[i] === callback) {
              eventList.splice(i, 1);
            }
          }
        }
      }
    });
    return this;
  }
  emit(event, ...args) {
    if (this._events) {
      if (this._events.hasOwnProperty(event)) {
        const eventList = this._events[event].slice(0);
        for (let i = 0, len = eventList.length;i < len; i++) {
          eventList[i].apply(this, args);
        }
      }
    }
    return this;
  }
  static mixin(constr) {
    ["on", "once", "off", "emit"].forEach((name) => {
      const property = Object.getOwnPropertyDescriptor(Emitter.prototype, name);
      Object.defineProperty(constr.prototype, name, property);
    });
  }
  dispose() {
    super.dispose();
    this._events = undefined;
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/context/BaseContext.js
class BaseContext extends Emitter {
  constructor() {
    super(...arguments);
    this.isOffline = false;
  }
  toJSON() {
    return {};
  }
}

// ../../node_modules/tone/build/esm/core/context/Context.js
class Context extends BaseContext {
  constructor() {
    var _a, _b;
    super();
    this.name = "Context";
    this._constants = new Map;
    this._timeouts = new Timeline;
    this._timeoutIds = 0;
    this._initialized = false;
    this._closeStarted = false;
    this.isOffline = false;
    this._workletPromise = null;
    const options = optionsFromArguments(Context.getDefaults(), arguments, [
      "context"
    ]);
    if (options.context) {
      this._context = options.context;
      this._latencyHint = ((_a = arguments[0]) === null || _a === undefined ? undefined : _a.latencyHint) || "";
    } else {
      this._context = createAudioContext({
        latencyHint: options.latencyHint
      });
      this._latencyHint = options.latencyHint;
    }
    this._ticker = new Ticker(this.emit.bind(this, "tick"), options.clockSource, options.updateInterval, this._context.sampleRate);
    this.on("tick", this._timeoutLoop.bind(this));
    this._context.onstatechange = () => {
      this.emit("statechange", this.state);
    };
    this[((_b = arguments[0]) === null || _b === undefined ? undefined : _b.hasOwnProperty("updateInterval")) ? "_lookAhead" : "lookAhead"] = options.lookAhead;
  }
  static getDefaults() {
    return {
      clockSource: "worker",
      latencyHint: "interactive",
      lookAhead: 0.1,
      updateInterval: 0.05
    };
  }
  initialize() {
    if (!this._initialized) {
      initializeContext(this);
      this._initialized = true;
    }
    return this;
  }
  createAnalyser() {
    return this._context.createAnalyser();
  }
  createOscillator() {
    return this._context.createOscillator();
  }
  createBufferSource() {
    return this._context.createBufferSource();
  }
  createBiquadFilter() {
    return this._context.createBiquadFilter();
  }
  createBuffer(numberOfChannels, length, sampleRate) {
    return this._context.createBuffer(numberOfChannels, length, sampleRate);
  }
  createChannelMerger(numberOfInputs) {
    return this._context.createChannelMerger(numberOfInputs);
  }
  createChannelSplitter(numberOfOutputs) {
    return this._context.createChannelSplitter(numberOfOutputs);
  }
  createConstantSource() {
    return this._context.createConstantSource();
  }
  createConvolver() {
    return this._context.createConvolver();
  }
  createDelay(maxDelayTime) {
    return this._context.createDelay(maxDelayTime);
  }
  createDynamicsCompressor() {
    return this._context.createDynamicsCompressor();
  }
  createGain() {
    return this._context.createGain();
  }
  createIIRFilter(feedForward, feedback) {
    return this._context.createIIRFilter(feedForward, feedback);
  }
  createPanner() {
    return this._context.createPanner();
  }
  createPeriodicWave(real, imag, constraints) {
    return this._context.createPeriodicWave(real, imag, constraints);
  }
  createStereoPanner() {
    return this._context.createStereoPanner();
  }
  createWaveShaper() {
    return this._context.createWaveShaper();
  }
  createMediaStreamSource(stream) {
    assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
    const context2 = this._context;
    return context2.createMediaStreamSource(stream);
  }
  createMediaElementSource(element) {
    assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
    const context2 = this._context;
    return context2.createMediaElementSource(element);
  }
  createMediaStreamDestination() {
    assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
    const context2 = this._context;
    return context2.createMediaStreamDestination();
  }
  decodeAudioData(audioData) {
    return this._context.decodeAudioData(audioData);
  }
  get currentTime() {
    return this._context.currentTime;
  }
  get state() {
    return this._context.state;
  }
  get sampleRate() {
    return this._context.sampleRate;
  }
  get listener() {
    this.initialize();
    return this._listener;
  }
  set listener(l) {
    assert(!this._initialized, "The listener cannot be set after initialization.");
    this._listener = l;
  }
  get transport() {
    this.initialize();
    return this._transport;
  }
  set transport(t) {
    assert(!this._initialized, "The transport cannot be set after initialization.");
    this._transport = t;
  }
  get draw() {
    this.initialize();
    return this._draw;
  }
  set draw(d) {
    assert(!this._initialized, "Draw cannot be set after initialization.");
    this._draw = d;
  }
  get destination() {
    this.initialize();
    return this._destination;
  }
  set destination(d) {
    assert(!this._initialized, "The destination cannot be set after initialization.");
    this._destination = d;
  }
  createAudioWorkletNode(name, options) {
    return createAudioWorkletNode(this.rawContext, name, options);
  }
  addAudioWorkletModule(url) {
    return __awaiter(this, undefined, undefined, function* () {
      assert(isDefined(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)");
      if (!this._workletPromise) {
        this._workletPromise = this.rawContext.audioWorklet.addModule(url);
      }
      yield this._workletPromise;
    });
  }
  workletsAreReady() {
    return __awaiter(this, undefined, undefined, function* () {
      (yield this._workletPromise) ? this._workletPromise : Promise.resolve();
    });
  }
  get updateInterval() {
    return this._ticker.updateInterval;
  }
  set updateInterval(interval) {
    this._ticker.updateInterval = interval;
  }
  get clockSource() {
    return this._ticker.type;
  }
  set clockSource(type) {
    this._ticker.type = type;
  }
  get lookAhead() {
    return this._lookAhead;
  }
  set lookAhead(time) {
    this._lookAhead = time;
    this.updateInterval = time ? time / 2 : 0.01;
  }
  get latencyHint() {
    return this._latencyHint;
  }
  get rawContext() {
    return this._context;
  }
  now() {
    return this._context.currentTime + this._lookAhead;
  }
  immediate() {
    return this._context.currentTime;
  }
  resume() {
    if (isAudioContext(this._context)) {
      return this._context.resume();
    } else {
      return Promise.resolve();
    }
  }
  close() {
    return __awaiter(this, undefined, undefined, function* () {
      if (isAudioContext(this._context) && this.state !== "closed" && !this._closeStarted) {
        this._closeStarted = true;
        yield this._context.close();
      }
      if (this._initialized) {
        closeContext(this);
      }
    });
  }
  getConstant(val) {
    if (this._constants.has(val)) {
      return this._constants.get(val);
    } else {
      const buffer = this._context.createBuffer(1, 128, this._context.sampleRate);
      const arr = buffer.getChannelData(0);
      for (let i = 0;i < arr.length; i++) {
        arr[i] = val;
      }
      const constant = this._context.createBufferSource();
      constant.channelCount = 1;
      constant.channelCountMode = "explicit";
      constant.buffer = buffer;
      constant.loop = true;
      constant.start(0);
      this._constants.set(val, constant);
      return constant;
    }
  }
  dispose() {
    super.dispose();
    this._ticker.dispose();
    this._timeouts.dispose();
    Object.keys(this._constants).map((val) => this._constants[val].disconnect());
    this.close();
    return this;
  }
  _timeoutLoop() {
    const now = this.now();
    let firstEvent = this._timeouts.peek();
    while (this._timeouts.length && firstEvent && firstEvent.time <= now) {
      firstEvent.callback();
      this._timeouts.shift();
      firstEvent = this._timeouts.peek();
    }
  }
  setTimeout(fn, timeout) {
    this._timeoutIds++;
    const now = this.now();
    this._timeouts.add({
      callback: fn,
      id: this._timeoutIds,
      time: now + timeout
    });
    return this._timeoutIds;
  }
  clearTimeout(id) {
    this._timeouts.forEach((event) => {
      if (event.id === id) {
        this._timeouts.remove(event);
      }
    });
    return this;
  }
  clearInterval(id) {
    return this.clearTimeout(id);
  }
  setInterval(fn, interval) {
    const id = ++this._timeoutIds;
    const intervalFn = () => {
      const now = this.now();
      this._timeouts.add({
        callback: () => {
          fn();
          intervalFn();
        },
        id,
        time: now + interval
      });
    };
    intervalFn();
    return id;
  }
}

// ../../node_modules/tone/build/esm/core/context/DummyContext.js
class DummyContext extends BaseContext {
  constructor() {
    super(...arguments);
    this.lookAhead = 0;
    this.latencyHint = 0;
    this.isOffline = false;
  }
  createAnalyser() {
    return {};
  }
  createOscillator() {
    return {};
  }
  createBufferSource() {
    return {};
  }
  createBiquadFilter() {
    return {};
  }
  createBuffer(_numberOfChannels, _length, _sampleRate) {
    return {};
  }
  createChannelMerger(_numberOfInputs) {
    return {};
  }
  createChannelSplitter(_numberOfOutputs) {
    return {};
  }
  createConstantSource() {
    return {};
  }
  createConvolver() {
    return {};
  }
  createDelay(_maxDelayTime) {
    return {};
  }
  createDynamicsCompressor() {
    return {};
  }
  createGain() {
    return {};
  }
  createIIRFilter(_feedForward, _feedback) {
    return {};
  }
  createPanner() {
    return {};
  }
  createPeriodicWave(_real, _imag, _constraints) {
    return {};
  }
  createStereoPanner() {
    return {};
  }
  createWaveShaper() {
    return {};
  }
  createMediaStreamSource(_stream) {
    return {};
  }
  createMediaElementSource(_element) {
    return {};
  }
  createMediaStreamDestination() {
    return {};
  }
  decodeAudioData(_audioData) {
    return Promise.resolve({});
  }
  createAudioWorkletNode(_name, _options) {
    return {};
  }
  get rawContext() {
    return {};
  }
  addAudioWorkletModule(_url) {
    return __awaiter(this, undefined, undefined, function* () {
      return Promise.resolve();
    });
  }
  resume() {
    return Promise.resolve();
  }
  setTimeout(_fn, _timeout) {
    return 0;
  }
  clearTimeout(_id) {
    return this;
  }
  setInterval(_fn, _interval) {
    return 0;
  }
  clearInterval(_id) {
    return this;
  }
  getConstant(_val) {
    return {};
  }
  get currentTime() {
    return 0;
  }
  get state() {
    return {};
  }
  get sampleRate() {
    return 0;
  }
  get listener() {
    return {};
  }
  get transport() {
    return {};
  }
  get draw() {
    return {};
  }
  set draw(_d) {
  }
  get destination() {
    return {};
  }
  set destination(_d) {
  }
  now() {
    return 0;
  }
  immediate() {
    return 0;
  }
}

// ../../node_modules/tone/build/esm/core/util/Interface.js
function readOnly(target, property) {
  if (isArray(property)) {
    property.forEach((str) => readOnly(target, str));
  } else {
    Object.defineProperty(target, property, {
      enumerable: true,
      writable: false
    });
  }
}
function writable(target, property) {
  if (isArray(property)) {
    property.forEach((str) => writable(target, str));
  } else {
    Object.defineProperty(target, property, {
      writable: true
    });
  }
}
var noOp = () => {
};

// ../../node_modules/tone/build/esm/core/context/ToneAudioBuffer.js
class ToneAudioBuffer extends Tone {
  constructor() {
    super();
    this.name = "ToneAudioBuffer";
    this.onload = noOp;
    const options = optionsFromArguments(ToneAudioBuffer.getDefaults(), arguments, ["url", "onload", "onerror"]);
    this.reverse = options.reverse;
    this.onload = options.onload;
    if (isString(options.url)) {
      this.load(options.url).catch(options.onerror);
    } else if (options.url) {
      this.set(options.url);
    }
  }
  static getDefaults() {
    return {
      onerror: noOp,
      onload: noOp,
      reverse: false
    };
  }
  get sampleRate() {
    if (this._buffer) {
      return this._buffer.sampleRate;
    } else {
      return getContext().sampleRate;
    }
  }
  set(buffer) {
    if (buffer instanceof ToneAudioBuffer) {
      if (buffer.loaded) {
        this._buffer = buffer.get();
      } else {
        buffer.onload = () => {
          this.set(buffer);
          this.onload(this);
        };
      }
    } else {
      this._buffer = buffer;
    }
    if (this._reversed) {
      this._reverse();
    }
    return this;
  }
  get() {
    return this._buffer;
  }
  load(url) {
    return __awaiter(this, undefined, undefined, function* () {
      const doneLoading = ToneAudioBuffer.load(url).then((audioBuffer) => {
        this.set(audioBuffer);
        this.onload(this);
      });
      ToneAudioBuffer.downloads.push(doneLoading);
      try {
        yield doneLoading;
      } finally {
        const index = ToneAudioBuffer.downloads.indexOf(doneLoading);
        ToneAudioBuffer.downloads.splice(index, 1);
      }
      return this;
    });
  }
  dispose() {
    super.dispose();
    this._buffer = undefined;
    return this;
  }
  fromArray(array) {
    const isMultidimensional = isArray(array) && array[0].length > 0;
    const channels = isMultidimensional ? array.length : 1;
    const len = isMultidimensional ? array[0].length : array.length;
    const context2 = getContext();
    const buffer = context2.createBuffer(channels, len, context2.sampleRate);
    const multiChannelArray = !isMultidimensional && channels === 1 ? [array] : array;
    for (let c = 0;c < channels; c++) {
      buffer.copyToChannel(multiChannelArray[c], c);
    }
    this._buffer = buffer;
    return this;
  }
  toMono(chanNum) {
    if (isNumber(chanNum)) {
      this.fromArray(this.toArray(chanNum));
    } else {
      let outputArray = new Float32Array(this.length);
      const numChannels = this.numberOfChannels;
      for (let channel = 0;channel < numChannels; channel++) {
        const channelArray = this.toArray(channel);
        for (let i = 0;i < channelArray.length; i++) {
          outputArray[i] += channelArray[i];
        }
      }
      outputArray = outputArray.map((sample) => sample / numChannels);
      this.fromArray(outputArray);
    }
    return this;
  }
  toArray(channel) {
    if (isNumber(channel)) {
      return this.getChannelData(channel);
    } else if (this.numberOfChannels === 1) {
      return this.toArray(0);
    } else {
      const ret = [];
      for (let c = 0;c < this.numberOfChannels; c++) {
        ret[c] = this.getChannelData(c);
      }
      return ret;
    }
  }
  getChannelData(channel) {
    if (this._buffer) {
      return this._buffer.getChannelData(channel);
    } else {
      return new Float32Array(0);
    }
  }
  slice(start, end = this.duration) {
    assert(this.loaded, "Buffer is not loaded");
    const startSamples = Math.floor(start * this.sampleRate);
    const endSamples = Math.floor(end * this.sampleRate);
    assert(startSamples < endSamples, "The start time must be less than the end time");
    const length = endSamples - startSamples;
    const retBuffer = getContext().createBuffer(this.numberOfChannels, length, this.sampleRate);
    for (let channel = 0;channel < this.numberOfChannels; channel++) {
      retBuffer.copyToChannel(this.getChannelData(channel).subarray(startSamples, endSamples), channel);
    }
    return new ToneAudioBuffer(retBuffer);
  }
  _reverse() {
    if (this.loaded) {
      for (let i = 0;i < this.numberOfChannels; i++) {
        this.getChannelData(i).reverse();
      }
    }
    return this;
  }
  get loaded() {
    return this.length > 0;
  }
  get duration() {
    if (this._buffer) {
      return this._buffer.duration;
    } else {
      return 0;
    }
  }
  get length() {
    if (this._buffer) {
      return this._buffer.length;
    } else {
      return 0;
    }
  }
  get numberOfChannels() {
    if (this._buffer) {
      return this._buffer.numberOfChannels;
    } else {
      return 0;
    }
  }
  get reverse() {
    return this._reversed;
  }
  set reverse(rev) {
    if (this._reversed !== rev) {
      this._reversed = rev;
      this._reverse();
    }
  }
  static fromArray(array) {
    return new ToneAudioBuffer().fromArray(array);
  }
  static fromUrl(url) {
    return __awaiter(this, undefined, undefined, function* () {
      const buffer = new ToneAudioBuffer;
      return yield buffer.load(url);
    });
  }
  static load(url) {
    return __awaiter(this, undefined, undefined, function* () {
      const matches = url.match(/\[([^\]\[]+\|.+)\]$/);
      if (matches) {
        const extensions = matches[1].split("|");
        let extension = extensions[0];
        for (const ext of extensions) {
          if (ToneAudioBuffer.supportsType(ext)) {
            extension = ext;
            break;
          }
        }
        url = url.replace(matches[0], extension);
      }
      const baseUrl = ToneAudioBuffer.baseUrl === "" || ToneAudioBuffer.baseUrl.endsWith("/") ? ToneAudioBuffer.baseUrl : ToneAudioBuffer.baseUrl + "/";
      const location = document.createElement("a");
      location.href = baseUrl + url;
      location.pathname = (location.pathname + location.hash).split("/").map(encodeURIComponent).join("/");
      const response = yield fetch(location.href);
      if (!response.ok) {
        throw new Error(`could not load url: ${url}`);
      }
      const arrayBuffer = yield response.arrayBuffer();
      const audioBuffer = yield getContext().decodeAudioData(arrayBuffer);
      return audioBuffer;
    });
  }
  static supportsType(url) {
    const extensions = url.split(".");
    const extension = extensions[extensions.length - 1];
    const response = document.createElement("audio").canPlayType("audio/" + extension);
    return response !== "";
  }
  static loaded() {
    return __awaiter(this, undefined, undefined, function* () {
      yield Promise.resolve();
      while (ToneAudioBuffer.downloads.length) {
        yield ToneAudioBuffer.downloads[0];
      }
    });
  }
}
ToneAudioBuffer.baseUrl = "";
ToneAudioBuffer.downloads = [];

// ../../node_modules/tone/build/esm/core/context/OfflineContext.js
class OfflineContext extends Context {
  constructor() {
    super({
      clockSource: "offline",
      context: isOfflineAudioContext(arguments[0]) ? arguments[0] : createOfflineAudioContext(arguments[0], arguments[1] * arguments[2], arguments[2]),
      lookAhead: 0,
      updateInterval: isOfflineAudioContext(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
    });
    this.name = "OfflineContext";
    this._currentTime = 0;
    this.isOffline = true;
    this._duration = isOfflineAudioContext(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1];
  }
  now() {
    return this._currentTime;
  }
  get currentTime() {
    return this._currentTime;
  }
  _renderClock(asynchronous) {
    return __awaiter(this, undefined, undefined, function* () {
      let index = 0;
      while (this._duration - this._currentTime >= 0) {
        this.emit("tick");
        this._currentTime += 128 / this.sampleRate;
        index++;
        const yieldEvery = Math.floor(this.sampleRate / 128);
        if (asynchronous && index % yieldEvery === 0) {
          yield new Promise((done) => setTimeout(done, 1));
        }
      }
    });
  }
  render() {
    return __awaiter(this, arguments, undefined, function* (asynchronous = true) {
      yield this.workletsAreReady();
      yield this._renderClock(asynchronous);
      const buffer = yield this._context.startRendering();
      return new ToneAudioBuffer(buffer);
    });
  }
  close() {
    return Promise.resolve();
  }
}

// ../../node_modules/tone/build/esm/core/Global.js
var dummyContext = new DummyContext;
var globalContext = dummyContext;
function getContext() {
  if (globalContext === dummyContext && hasAudioContext) {
    setContext(new Context);
  }
  return globalContext;
}
function setContext(context2, disposeOld = false) {
  if (disposeOld) {
    globalContext.dispose();
  }
  if (isAudioContext(context2)) {
    globalContext = new Context(context2);
  } else if (isOfflineAudioContext(context2)) {
    globalContext = new OfflineContext(context2);
  } else {
    globalContext = context2;
  }
}
if (theWindow && !theWindow.TONE_SILENCE_LOGGING) {
  let prefix = "v";
  if (version === "dev") {
    prefix = "";
  }
  const printString = ` * Tone.js ${prefix}${version} * `;
  console.log(`%c${printString}`, "background: #000; color: #fff");
}
// ../../node_modules/tone/build/esm/core/type/Conversions.js
function dbToGain(db) {
  return Math.pow(10, db / 20);
}
function gainToDb(gain) {
  return 20 * (Math.log(gain) / Math.LN10);
}
function intervalToFrequencyRatio(interval) {
  return Math.pow(2, interval / 12);
}
var A4 = 440;
function getA4() {
  return A4;
}
function setA4(freq) {
  A4 = freq;
}
function ftom(frequency) {
  return Math.round(ftomf(frequency));
}
function ftomf(frequency) {
  return 69 + 12 * Math.log2(frequency / A4);
}
function mtof(midi) {
  return A4 * Math.pow(2, (midi - 69) / 12);
}

// ../../node_modules/tone/build/esm/core/type/TimeBase.js
class TimeBaseClass extends Tone {
  constructor(context2, value, units) {
    super();
    this.defaultUnits = "s";
    this._val = value;
    this._units = units;
    this.context = context2;
    this._expressions = this._getExpressions();
  }
  _getExpressions() {
    return {
      hz: {
        method: (value) => {
          return this._frequencyToUnits(parseFloat(value));
        },
        regexp: /^(\d+(?:\.\d+)?)hz$/i
      },
      i: {
        method: (value) => {
          return this._ticksToUnits(parseInt(value, 10));
        },
        regexp: /^(\d+)i$/i
      },
      m: {
        method: (value) => {
          return this._beatsToUnits(parseInt(value, 10) * this._getTimeSignature());
        },
        regexp: /^(\d+)m$/i
      },
      n: {
        method: (value, dot) => {
          const numericValue = parseInt(value, 10);
          const scalar = dot === "." ? 1.5 : 1;
          if (numericValue === 1) {
            return this._beatsToUnits(this._getTimeSignature()) * scalar;
          } else {
            return this._beatsToUnits(4 / numericValue) * scalar;
          }
        },
        regexp: /^(\d+)n(\.?)$/i
      },
      number: {
        method: (value) => {
          return this._expressions[this.defaultUnits].method.call(this, value);
        },
        regexp: /^(\d+(?:\.\d+)?)$/
      },
      s: {
        method: (value) => {
          return this._secondsToUnits(parseFloat(value));
        },
        regexp: /^(\d+(?:\.\d+)?)s$/
      },
      samples: {
        method: (value) => {
          return parseInt(value, 10) / this.context.sampleRate;
        },
        regexp: /^(\d+)samples$/
      },
      t: {
        method: (value) => {
          const numericValue = parseInt(value, 10);
          return this._beatsToUnits(8 / (Math.floor(numericValue) * 3));
        },
        regexp: /^(\d+)t$/i
      },
      tr: {
        method: (m, q, s) => {
          let total = 0;
          if (m && m !== "0") {
            total += this._beatsToUnits(this._getTimeSignature() * parseFloat(m));
          }
          if (q && q !== "0") {
            total += this._beatsToUnits(parseFloat(q));
          }
          if (s && s !== "0") {
            total += this._beatsToUnits(parseFloat(s) / 4);
          }
          return total;
        },
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
      }
    };
  }
  valueOf() {
    if (this._val instanceof TimeBaseClass) {
      this.fromType(this._val);
    }
    if (isUndef(this._val)) {
      return this._noArg();
    } else if (isString(this._val) && isUndef(this._units)) {
      for (const units in this._expressions) {
        if (this._expressions[units].regexp.test(this._val.trim())) {
          this._units = units;
          break;
        }
      }
    } else if (isObject(this._val)) {
      let total = 0;
      for (const typeName in this._val) {
        if (isDefined(this._val[typeName])) {
          const quantity = this._val[typeName];
          const time = new this.constructor(this.context, typeName).valueOf() * quantity;
          total += time;
        }
      }
      return total;
    }
    if (isDefined(this._units)) {
      const expr = this._expressions[this._units];
      const matching = this._val.toString().trim().match(expr.regexp);
      if (matching) {
        return expr.method.apply(this, matching.slice(1));
      } else {
        return expr.method.call(this, this._val);
      }
    } else if (isString(this._val)) {
      return parseFloat(this._val);
    } else {
      return this._val;
    }
  }
  _frequencyToUnits(freq) {
    return 1 / freq;
  }
  _beatsToUnits(beats) {
    return 60 / this._getBpm() * beats;
  }
  _secondsToUnits(seconds) {
    return seconds;
  }
  _ticksToUnits(ticks) {
    return ticks * this._beatsToUnits(1) / this._getPPQ();
  }
  _noArg() {
    return this._now();
  }
  _getBpm() {
    return this.context.transport.bpm.value;
  }
  _getTimeSignature() {
    return this.context.transport.timeSignature;
  }
  _getPPQ() {
    return this.context.transport.PPQ;
  }
  fromType(type) {
    this._units = undefined;
    switch (this.defaultUnits) {
      case "s":
        this._val = type.toSeconds();
        break;
      case "i":
        this._val = type.toTicks();
        break;
      case "hz":
        this._val = type.toFrequency();
        break;
      case "midi":
        this._val = type.toMidi();
        break;
    }
    return this;
  }
  toFrequency() {
    return 1 / this.toSeconds();
  }
  toSamples() {
    return this.toSeconds() * this.context.sampleRate;
  }
  toMilliseconds() {
    return this.toSeconds() * 1000;
  }
}

// ../../node_modules/tone/build/esm/core/type/Time.js
class TimeClass extends TimeBaseClass {
  constructor() {
    super(...arguments);
    this.name = "TimeClass";
  }
  _getExpressions() {
    return Object.assign(super._getExpressions(), {
      now: {
        method: (capture) => {
          return this._now() + new this.constructor(this.context, capture).valueOf();
        },
        regexp: /^\+(.+)/
      },
      quantize: {
        method: (capture) => {
          const quantTo = new TimeClass(this.context, capture).valueOf();
          return this._secondsToUnits(this.context.transport.nextSubdivision(quantTo));
        },
        regexp: /^@(.+)/
      }
    });
  }
  quantize(subdiv, percent = 1) {
    const subdivision = new this.constructor(this.context, subdiv).valueOf();
    const value = this.valueOf();
    const multiple = Math.round(value / subdivision);
    const ideal = multiple * subdivision;
    const diff = ideal - value;
    return value + diff * percent;
  }
  toNotation() {
    const time = this.toSeconds();
    const testNotations = ["1m"];
    for (let power = 1;power < 9; power++) {
      const subdiv = Math.pow(2, power);
      testNotations.push(subdiv + "n.");
      testNotations.push(subdiv + "n");
      testNotations.push(subdiv + "t");
    }
    testNotations.push("0");
    let closest = testNotations[0];
    let closestSeconds = new TimeClass(this.context, testNotations[0]).toSeconds();
    testNotations.forEach((notation) => {
      const notationSeconds = new TimeClass(this.context, notation).toSeconds();
      if (Math.abs(notationSeconds - time) < Math.abs(closestSeconds - time)) {
        closest = notation;
        closestSeconds = notationSeconds;
      }
    });
    return closest;
  }
  toBarsBeatsSixteenths() {
    const quarterTime = this._beatsToUnits(1);
    let quarters = this.valueOf() / quarterTime;
    quarters = parseFloat(quarters.toFixed(4));
    const measures = Math.floor(quarters / this._getTimeSignature());
    let sixteenths = quarters % 1 * 4;
    quarters = Math.floor(quarters) % this._getTimeSignature();
    const sixteenthString = sixteenths.toString();
    if (sixteenthString.length > 3) {
      sixteenths = parseFloat(parseFloat(sixteenthString).toFixed(3));
    }
    const progress = [measures, quarters, sixteenths];
    return progress.join(":");
  }
  toTicks() {
    const quarterTime = this._beatsToUnits(1);
    const quarters = this.valueOf() / quarterTime;
    return quarters * this._getPPQ();
  }
  toSeconds() {
    return this.valueOf();
  }
  toMidi() {
    return ftom(this.toFrequency());
  }
  _now() {
    return this.context.now();
  }
}

// ../../node_modules/tone/build/esm/core/type/Frequency.js
class FrequencyClass extends TimeClass {
  constructor() {
    super(...arguments);
    this.name = "Frequency";
    this.defaultUnits = "hz";
  }
  static get A4() {
    return getA4();
  }
  static set A4(freq) {
    setA4(freq);
  }
  _getExpressions() {
    return Object.assign({}, super._getExpressions(), {
      midi: {
        regexp: /^(\d+(?:\.\d+)?midi)/,
        method(value) {
          if (this.defaultUnits === "midi") {
            return value;
          } else {
            return FrequencyClass.mtof(value);
          }
        }
      },
      note: {
        regexp: /^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,
        method(pitch, octave) {
          const index = noteToScaleIndex[pitch.toLowerCase()];
          const noteNumber = index + (parseInt(octave, 10) + 1) * 12;
          if (this.defaultUnits === "midi") {
            return noteNumber;
          } else {
            return FrequencyClass.mtof(noteNumber);
          }
        }
      },
      tr: {
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
        method(m, q, s) {
          let total = 1;
          if (m && m !== "0") {
            total *= this._beatsToUnits(this._getTimeSignature() * parseFloat(m));
          }
          if (q && q !== "0") {
            total *= this._beatsToUnits(parseFloat(q));
          }
          if (s && s !== "0") {
            total *= this._beatsToUnits(parseFloat(s) / 4);
          }
          return total;
        }
      }
    });
  }
  transpose(interval) {
    return new FrequencyClass(this.context, this.valueOf() * intervalToFrequencyRatio(interval));
  }
  harmonize(intervals) {
    return intervals.map((interval) => {
      return this.transpose(interval);
    });
  }
  toMidi() {
    return ftom(this.valueOf());
  }
  toNote() {
    const freq = this.toFrequency();
    const log2 = Math.log2(freq / FrequencyClass.A4);
    let noteNumber = Math.round(12 * log2) + 57;
    const octave = Math.floor(noteNumber / 12);
    if (octave < 0) {
      noteNumber += -12 * octave;
    }
    const noteName = scaleIndexToNote[noteNumber % 12];
    return noteName + octave.toString();
  }
  toSeconds() {
    return 1 / super.toSeconds();
  }
  toTicks() {
    const quarterTime = this._beatsToUnits(1);
    const quarters = this.valueOf() / quarterTime;
    return Math.floor(quarters * this._getPPQ());
  }
  _noArg() {
    return 0;
  }
  _frequencyToUnits(freq) {
    return freq;
  }
  _ticksToUnits(ticks) {
    return 1 / (ticks * 60 / (this._getBpm() * this._getPPQ()));
  }
  _beatsToUnits(beats) {
    return 1 / super._beatsToUnits(beats);
  }
  _secondsToUnits(seconds) {
    return 1 / seconds;
  }
  static mtof(midi) {
    return mtof(midi);
  }
  static ftom(frequency) {
    return ftom(frequency);
  }
}
var noteToScaleIndex = {
  cbbb: -3,
  cbb: -2,
  cb: -1,
  c: 0,
  "c#": 1,
  cx: 2,
  "c##": 2,
  "c###": 3,
  "cx#": 3,
  "c#x": 3,
  dbbb: -1,
  dbb: 0,
  db: 1,
  d: 2,
  "d#": 3,
  dx: 4,
  "d##": 4,
  "d###": 5,
  "dx#": 5,
  "d#x": 5,
  ebbb: 1,
  ebb: 2,
  eb: 3,
  e: 4,
  "e#": 5,
  ex: 6,
  "e##": 6,
  "e###": 7,
  "ex#": 7,
  "e#x": 7,
  fbbb: 2,
  fbb: 3,
  fb: 4,
  f: 5,
  "f#": 6,
  fx: 7,
  "f##": 7,
  "f###": 8,
  "fx#": 8,
  "f#x": 8,
  gbbb: 4,
  gbb: 5,
  gb: 6,
  g: 7,
  "g#": 8,
  gx: 9,
  "g##": 9,
  "g###": 10,
  "gx#": 10,
  "g#x": 10,
  abbb: 6,
  abb: 7,
  ab: 8,
  a: 9,
  "a#": 10,
  ax: 11,
  "a##": 11,
  "a###": 12,
  "ax#": 12,
  "a#x": 12,
  bbbb: 8,
  bbb: 9,
  bb: 10,
  b: 11,
  "b#": 12,
  bx: 13,
  "b##": 13,
  "b###": 14,
  "bx#": 14,
  "b#x": 14
};
var scaleIndexToNote = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

// ../../node_modules/tone/build/esm/core/type/TransportTime.js
class TransportTimeClass extends TimeClass {
  constructor() {
    super(...arguments);
    this.name = "TransportTime";
  }
  _now() {
    return this.context.transport.seconds;
  }
}

// ../../node_modules/tone/build/esm/core/context/ToneWithContext.js
class ToneWithContext extends Tone {
  constructor() {
    super();
    const options = optionsFromArguments(ToneWithContext.getDefaults(), arguments, ["context"]);
    if (this.defaultContext) {
      this.context = this.defaultContext;
    } else {
      this.context = options.context;
    }
  }
  static getDefaults() {
    return {
      context: getContext()
    };
  }
  now() {
    return this.context.currentTime + this.context.lookAhead;
  }
  immediate() {
    return this.context.currentTime;
  }
  get sampleTime() {
    return 1 / this.context.sampleRate;
  }
  get blockTime() {
    return 128 / this.context.sampleRate;
  }
  toSeconds(time) {
    assertUsedScheduleTime(time);
    return new TimeClass(this.context, time).toSeconds();
  }
  toFrequency(freq) {
    return new FrequencyClass(this.context, freq).toFrequency();
  }
  toTicks(time) {
    return new TransportTimeClass(this.context, time).toTicks();
  }
  _getPartialProperties(props) {
    const options = this.get();
    Object.keys(options).forEach((name) => {
      if (isUndef(props[name])) {
        delete options[name];
      }
    });
    return options;
  }
  get() {
    const defaults = getDefaultsFromInstance(this);
    Object.keys(defaults).forEach((attribute) => {
      if (Reflect.has(this, attribute)) {
        const member = this[attribute];
        if (isDefined(member) && isDefined(member.value) && isDefined(member.setValueAtTime)) {
          defaults[attribute] = member.value;
        } else if (member instanceof ToneWithContext) {
          defaults[attribute] = member._getPartialProperties(defaults[attribute]);
        } else if (isArray(member) || isNumber(member) || isString(member) || isBoolean(member)) {
          defaults[attribute] = member;
        } else {
          delete defaults[attribute];
        }
      }
    });
    return defaults;
  }
  set(props) {
    Object.keys(props).forEach((attribute) => {
      if (Reflect.has(this, attribute) && isDefined(this[attribute])) {
        if (this[attribute] && isDefined(this[attribute].value) && isDefined(this[attribute].setValueAtTime)) {
          if (this[attribute].value !== props[attribute]) {
            this[attribute].value = props[attribute];
          }
        } else if (this[attribute] instanceof ToneWithContext) {
          this[attribute].set(props[attribute]);
        } else {
          this[attribute] = props[attribute];
        }
      }
    });
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/util/StateTimeline.js
class StateTimeline extends Timeline {
  constructor(initial = "stopped") {
    super();
    this.name = "StateTimeline";
    this._initial = initial;
    this.setStateAtTime(this._initial, 0);
  }
  getValueAtTime(time) {
    const event = this.get(time);
    if (event !== null) {
      return event.state;
    } else {
      return this._initial;
    }
  }
  setStateAtTime(state, time, options) {
    assertRange(time, 0);
    this.add(Object.assign({}, options, {
      state,
      time
    }));
    return this;
  }
  getLastState(state, time) {
    const index = this._search(time);
    for (let i = index;i >= 0; i--) {
      const event = this._timeline[i];
      if (event.state === state) {
        return event;
      }
    }
  }
  getNextState(state, time) {
    const index = this._search(time);
    if (index !== -1) {
      for (let i = index;i < this._timeline.length; i++) {
        const event = this._timeline[i];
        if (event.state === state) {
          return event;
        }
      }
    }
  }
}

// ../../node_modules/tone/build/esm/core/context/Param.js
class Param extends ToneWithContext {
  constructor() {
    const options = optionsFromArguments(Param.getDefaults(), arguments, [
      "param",
      "units",
      "convert"
    ]);
    super(options);
    this.name = "Param";
    this.overridden = false;
    this._minOutput = 0.0000001;
    assert(isDefined(options.param) && (isAudioParam(options.param) || options.param instanceof Param), "param must be an AudioParam");
    while (!isAudioParam(options.param)) {
      options.param = options.param._param;
    }
    this._swappable = isDefined(options.swappable) ? options.swappable : false;
    if (this._swappable) {
      this.input = this.context.createGain();
      this._param = options.param;
      this.input.connect(this._param);
    } else {
      this._param = this.input = options.param;
    }
    this._events = new Timeline(1000);
    this._initialValue = this._param.defaultValue;
    this.units = options.units;
    this.convert = options.convert;
    this._minValue = options.minValue;
    this._maxValue = options.maxValue;
    if (isDefined(options.value) && options.value !== this._toType(this._initialValue)) {
      this.setValueAtTime(options.value, 0);
    }
  }
  static getDefaults() {
    return Object.assign(ToneWithContext.getDefaults(), {
      convert: true,
      units: "number"
    });
  }
  get value() {
    const now = this.now();
    return this.getValueAtTime(now);
  }
  set value(value) {
    this.cancelScheduledValues(this.now());
    this.setValueAtTime(value, this.now());
  }
  get minValue() {
    if (isDefined(this._minValue)) {
      return this._minValue;
    } else if (this.units === "time" || this.units === "frequency" || this.units === "normalRange" || this.units === "positive" || this.units === "transportTime" || this.units === "ticks" || this.units === "bpm" || this.units === "hertz" || this.units === "samples") {
      return 0;
    } else if (this.units === "audioRange") {
      return -1;
    } else if (this.units === "decibels") {
      return -Infinity;
    } else {
      return this._param.minValue;
    }
  }
  get maxValue() {
    if (isDefined(this._maxValue)) {
      return this._maxValue;
    } else if (this.units === "normalRange" || this.units === "audioRange") {
      return 1;
    } else {
      return this._param.maxValue;
    }
  }
  _is(arg, type) {
    return this.units === type;
  }
  _assertRange(value) {
    if (isDefined(this.maxValue) && isDefined(this.minValue)) {
      assertRange(value, this._fromType(this.minValue), this._fromType(this.maxValue));
    }
    return value;
  }
  _fromType(val) {
    if (this.convert && !this.overridden) {
      if (this._is(val, "time")) {
        return this.toSeconds(val);
      } else if (this._is(val, "decibels")) {
        return dbToGain(val);
      } else if (this._is(val, "frequency")) {
        return this.toFrequency(val);
      } else {
        return val;
      }
    } else if (this.overridden) {
      return 0;
    } else {
      return val;
    }
  }
  _toType(val) {
    if (this.convert && this.units === "decibels") {
      return gainToDb(val);
    } else {
      return val;
    }
  }
  setValueAtTime(value, time) {
    const computedTime = this.toSeconds(time);
    const numericValue = this._fromType(value);
    assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(time)}`);
    this._assertRange(numericValue);
    this.log(this.units, "setValueAtTime", value, computedTime);
    this._events.add({
      time: computedTime,
      type: "setValueAtTime",
      value: numericValue
    });
    this._param.setValueAtTime(numericValue, computedTime);
    return this;
  }
  getValueAtTime(time) {
    const computedTime = Math.max(this.toSeconds(time), 0);
    const after = this._events.getAfter(computedTime);
    const before = this._events.get(computedTime);
    let value = this._initialValue;
    if (before === null) {
      value = this._initialValue;
    } else if (before.type === "setTargetAtTime" && (after === null || after.type === "setValueAtTime")) {
      const previous = this._events.getBefore(before.time);
      let previousVal;
      if (previous === null) {
        previousVal = this._initialValue;
      } else {
        previousVal = previous.value;
      }
      if (before.type === "setTargetAtTime") {
        value = this._exponentialApproach(before.time, previousVal, before.value, before.constant, computedTime);
      }
    } else if (after === null) {
      value = before.value;
    } else if (after.type === "linearRampToValueAtTime" || after.type === "exponentialRampToValueAtTime") {
      let beforeValue = before.value;
      if (before.type === "setTargetAtTime") {
        const previous = this._events.getBefore(before.time);
        if (previous === null) {
          beforeValue = this._initialValue;
        } else {
          beforeValue = previous.value;
        }
      }
      if (after.type === "linearRampToValueAtTime") {
        value = this._linearInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
      } else {
        value = this._exponentialInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
      }
    } else {
      value = before.value;
    }
    return this._toType(value);
  }
  setRampPoint(time) {
    time = this.toSeconds(time);
    let currentVal = this.getValueAtTime(time);
    this.cancelAndHoldAtTime(time);
    if (this._fromType(currentVal) === 0) {
      currentVal = this._toType(this._minOutput);
    }
    this.setValueAtTime(currentVal, time);
    return this;
  }
  linearRampToValueAtTime(value, endTime) {
    const numericValue = this._fromType(value);
    const computedTime = this.toSeconds(endTime);
    assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
    this._assertRange(numericValue);
    this._events.add({
      time: computedTime,
      type: "linearRampToValueAtTime",
      value: numericValue
    });
    this.log(this.units, "linearRampToValueAtTime", value, computedTime);
    this._param.linearRampToValueAtTime(numericValue, computedTime);
    return this;
  }
  exponentialRampToValueAtTime(value, endTime) {
    let numericValue = this._fromType(value);
    numericValue = EQ(numericValue, 0) ? this._minOutput : numericValue;
    this._assertRange(numericValue);
    const computedTime = this.toSeconds(endTime);
    assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
    this._events.add({
      time: computedTime,
      type: "exponentialRampToValueAtTime",
      value: numericValue
    });
    this.log(this.units, "exponentialRampToValueAtTime", value, computedTime);
    this._param.exponentialRampToValueAtTime(numericValue, computedTime);
    return this;
  }
  exponentialRampTo(value, rampTime, startTime) {
    startTime = this.toSeconds(startTime);
    this.setRampPoint(startTime);
    this.exponentialRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
    return this;
  }
  linearRampTo(value, rampTime, startTime) {
    startTime = this.toSeconds(startTime);
    this.setRampPoint(startTime);
    this.linearRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
    return this;
  }
  targetRampTo(value, rampTime, startTime) {
    startTime = this.toSeconds(startTime);
    this.setRampPoint(startTime);
    this.exponentialApproachValueAtTime(value, startTime, rampTime);
    return this;
  }
  exponentialApproachValueAtTime(value, time, rampTime) {
    time = this.toSeconds(time);
    rampTime = this.toSeconds(rampTime);
    const timeConstant = Math.log(rampTime + 1) / Math.log(200);
    this.setTargetAtTime(value, time, timeConstant);
    this.cancelAndHoldAtTime(time + rampTime * 0.9);
    this.linearRampToValueAtTime(value, time + rampTime);
    return this;
  }
  setTargetAtTime(value, startTime, timeConstant) {
    const numericValue = this._fromType(value);
    assert(isFinite(timeConstant) && timeConstant > 0, "timeConstant must be a number greater than 0");
    const computedTime = this.toSeconds(startTime);
    this._assertRange(numericValue);
    assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(value)}, ${JSON.stringify(startTime)}`);
    this._events.add({
      constant: timeConstant,
      time: computedTime,
      type: "setTargetAtTime",
      value: numericValue
    });
    this.log(this.units, "setTargetAtTime", value, computedTime, timeConstant);
    this._param.setTargetAtTime(numericValue, computedTime, timeConstant);
    return this;
  }
  setValueCurveAtTime(values, startTime, duration, scaling = 1) {
    duration = this.toSeconds(duration);
    startTime = this.toSeconds(startTime);
    const startingValue = this._fromType(values[0]) * scaling;
    this.setValueAtTime(this._toType(startingValue), startTime);
    const segTime = duration / (values.length - 1);
    for (let i = 1;i < values.length; i++) {
      const numericValue = this._fromType(values[i]) * scaling;
      this.linearRampToValueAtTime(this._toType(numericValue), startTime + i * segTime);
    }
    return this;
  }
  cancelScheduledValues(time) {
    const computedTime = this.toSeconds(time);
    assert(isFinite(computedTime), `Invalid argument to cancelScheduledValues: ${JSON.stringify(time)}`);
    this._events.cancel(computedTime);
    this._param.cancelScheduledValues(computedTime);
    this.log(this.units, "cancelScheduledValues", computedTime);
    return this;
  }
  cancelAndHoldAtTime(time) {
    const computedTime = this.toSeconds(time);
    const valueAtTime = this._fromType(this.getValueAtTime(computedTime));
    assert(isFinite(computedTime), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(time)}`);
    this.log(this.units, "cancelAndHoldAtTime", computedTime, "value=" + valueAtTime);
    const before = this._events.get(computedTime);
    const after = this._events.getAfter(computedTime);
    if (before && EQ(before.time, computedTime)) {
      if (after) {
        this._param.cancelScheduledValues(after.time);
        this._events.cancel(after.time);
      } else {
        this._param.cancelAndHoldAtTime(computedTime);
        this._events.cancel(computedTime + this.sampleTime);
      }
    } else if (after) {
      this._param.cancelScheduledValues(after.time);
      this._events.cancel(after.time);
      if (after.type === "linearRampToValueAtTime") {
        this.linearRampToValueAtTime(this._toType(valueAtTime), computedTime);
      } else if (after.type === "exponentialRampToValueAtTime") {
        this.exponentialRampToValueAtTime(this._toType(valueAtTime), computedTime);
      }
    }
    this._events.add({
      time: computedTime,
      type: "setValueAtTime",
      value: valueAtTime
    });
    this._param.setValueAtTime(valueAtTime, computedTime);
    return this;
  }
  rampTo(value, rampTime = 0.1, startTime) {
    if (this.units === "frequency" || this.units === "bpm" || this.units === "decibels") {
      this.exponentialRampTo(value, rampTime, startTime);
    } else {
      this.linearRampTo(value, rampTime, startTime);
    }
    return this;
  }
  apply(param) {
    const now = this.context.currentTime;
    param.setValueAtTime(this.getValueAtTime(now), now);
    const previousEvent = this._events.get(now);
    if (previousEvent && previousEvent.type === "setTargetAtTime") {
      const nextEvent = this._events.getAfter(previousEvent.time);
      const endTime = nextEvent ? nextEvent.time : now + 2;
      const subdivisions = (endTime - now) / 10;
      for (let i = now;i < endTime; i += subdivisions) {
        param.linearRampToValueAtTime(this.getValueAtTime(i), i);
      }
    }
    this._events.forEachAfter(this.context.currentTime, (event) => {
      if (event.type === "cancelScheduledValues") {
        param.cancelScheduledValues(event.time);
      } else if (event.type === "setTargetAtTime") {
        param.setTargetAtTime(event.value, event.time, event.constant);
      } else {
        param[event.type](event.value, event.time);
      }
    });
    return this;
  }
  setParam(param) {
    assert(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
    const input = this.input;
    input.disconnect(this._param);
    this.apply(param);
    this._param = param;
    input.connect(this._param);
    return this;
  }
  dispose() {
    super.dispose();
    this._events.dispose();
    return this;
  }
  get defaultValue() {
    return this._toType(this._param.defaultValue);
  }
  _exponentialApproach(t0, v0, v1, timeConstant, t) {
    return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
  }
  _linearInterpolate(t0, v0, t1, v1, t) {
    return v0 + (v1 - v0) * ((t - t0) / (t1 - t0));
  }
  _exponentialInterpolate(t0, v0, t1, v1, t) {
    return v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
  }
}

// ../../node_modules/tone/build/esm/core/context/ToneAudioNode.js
class ToneAudioNode extends ToneWithContext {
  constructor() {
    super(...arguments);
    this._internalChannels = [];
  }
  get numberOfInputs() {
    if (isDefined(this.input)) {
      if (isAudioParam(this.input) || this.input instanceof Param) {
        return 1;
      } else {
        return this.input.numberOfInputs;
      }
    } else {
      return 0;
    }
  }
  get numberOfOutputs() {
    if (isDefined(this.output)) {
      return this.output.numberOfOutputs;
    } else {
      return 0;
    }
  }
  _isAudioNode(node) {
    return isDefined(node) && (node instanceof ToneAudioNode || isAudioNode2(node));
  }
  _getInternalNodes() {
    const nodeList = this._internalChannels.slice(0);
    if (this._isAudioNode(this.input)) {
      nodeList.push(this.input);
    }
    if (this._isAudioNode(this.output)) {
      if (this.input !== this.output) {
        nodeList.push(this.output);
      }
    }
    return nodeList;
  }
  _setChannelProperties(options) {
    const nodeList = this._getInternalNodes();
    nodeList.forEach((node) => {
      node.channelCount = options.channelCount;
      node.channelCountMode = options.channelCountMode;
      node.channelInterpretation = options.channelInterpretation;
    });
  }
  _getChannelProperties() {
    const nodeList = this._getInternalNodes();
    assert(nodeList.length > 0, "ToneAudioNode does not have any internal nodes");
    const node = nodeList[0];
    return {
      channelCount: node.channelCount,
      channelCountMode: node.channelCountMode,
      channelInterpretation: node.channelInterpretation
    };
  }
  get channelCount() {
    return this._getChannelProperties().channelCount;
  }
  set channelCount(channelCount) {
    const props = this._getChannelProperties();
    this._setChannelProperties(Object.assign(props, { channelCount }));
  }
  get channelCountMode() {
    return this._getChannelProperties().channelCountMode;
  }
  set channelCountMode(channelCountMode) {
    const props = this._getChannelProperties();
    this._setChannelProperties(Object.assign(props, { channelCountMode }));
  }
  get channelInterpretation() {
    return this._getChannelProperties().channelInterpretation;
  }
  set channelInterpretation(channelInterpretation) {
    const props = this._getChannelProperties();
    this._setChannelProperties(Object.assign(props, { channelInterpretation }));
  }
  connect(destination, outputNum = 0, inputNum = 0) {
    connect(this, destination, outputNum, inputNum);
    return this;
  }
  toDestination() {
    this.connect(this.context.destination);
    return this;
  }
  toMaster() {
    warn("toMaster() has been renamed toDestination()");
    return this.toDestination();
  }
  disconnect(destination, outputNum = 0, inputNum = 0) {
    disconnect(this, destination, outputNum, inputNum);
    return this;
  }
  chain(...nodes) {
    connectSeries(this, ...nodes);
    return this;
  }
  fan(...nodes) {
    nodes.forEach((node) => this.connect(node));
    return this;
  }
  dispose() {
    super.dispose();
    if (isDefined(this.input)) {
      if (this.input instanceof ToneAudioNode) {
        this.input.dispose();
      } else if (isAudioNode2(this.input)) {
        this.input.disconnect();
      }
    }
    if (isDefined(this.output)) {
      if (this.output instanceof ToneAudioNode) {
        this.output.dispose();
      } else if (isAudioNode2(this.output)) {
        this.output.disconnect();
      }
    }
    this._internalChannels = [];
    return this;
  }
}
function connectSeries(...nodes) {
  const first = nodes.shift();
  nodes.reduce((prev, current) => {
    if (prev instanceof ToneAudioNode) {
      prev.connect(current);
    } else if (isAudioNode2(prev)) {
      connect(prev, current);
    }
    return current;
  }, first);
}
function connect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
  assert(isDefined(srcNode), "Cannot connect from undefined node");
  assert(isDefined(dstNode), "Cannot connect to undefined node");
  if (dstNode instanceof ToneAudioNode || isAudioNode2(dstNode)) {
    assert(dstNode.numberOfInputs > 0, "Cannot connect to node with no inputs");
  }
  assert(srcNode.numberOfOutputs > 0, "Cannot connect from node with no outputs");
  while (dstNode instanceof ToneAudioNode || dstNode instanceof Param) {
    if (isDefined(dstNode.input)) {
      dstNode = dstNode.input;
    }
  }
  while (srcNode instanceof ToneAudioNode) {
    if (isDefined(srcNode.output)) {
      srcNode = srcNode.output;
    }
  }
  if (isAudioParam(dstNode)) {
    srcNode.connect(dstNode, outputNumber);
  } else {
    srcNode.connect(dstNode, outputNumber, inputNumber);
  }
}
function disconnect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
  if (isDefined(dstNode)) {
    while (dstNode instanceof ToneAudioNode) {
      dstNode = dstNode.input;
    }
  }
  while (!isAudioNode2(srcNode)) {
    if (isDefined(srcNode.output)) {
      srcNode = srcNode.output;
    }
  }
  if (isAudioParam(dstNode)) {
    srcNode.disconnect(dstNode, outputNumber);
  } else if (isAudioNode2(dstNode)) {
    srcNode.disconnect(dstNode, outputNumber, inputNumber);
  } else {
    srcNode.disconnect();
  }
}

// ../../node_modules/tone/build/esm/core/context/Gain.js
class Gain extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Gain.getDefaults(), arguments, [
      "gain",
      "units"
    ]);
    super(options);
    this.name = "Gain";
    this._gainNode = this.context.createGain();
    this.input = this._gainNode;
    this.output = this._gainNode;
    this.gain = new Param({
      context: this.context,
      convert: options.convert,
      param: this._gainNode.gain,
      units: options.units,
      value: options.gain,
      minValue: options.minValue,
      maxValue: options.maxValue
    });
    readOnly(this, "gain");
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      convert: true,
      gain: 1,
      units: "gain"
    });
  }
  dispose() {
    super.dispose();
    this._gainNode.disconnect();
    this.gain.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/source/OneShotSource.js
class OneShotSource extends ToneAudioNode {
  constructor(options) {
    super(options);
    this.onended = noOp;
    this._startTime = -1;
    this._stopTime = -1;
    this._timeout = -1;
    this.output = new Gain({
      context: this.context,
      gain: 0
    });
    this._gainNode = this.output;
    this.getStateAtTime = function(time) {
      const computedTime = this.toSeconds(time);
      if (this._startTime !== -1 && computedTime >= this._startTime && (this._stopTime === -1 || computedTime <= this._stopTime)) {
        return "started";
      } else {
        return "stopped";
      }
    };
    this._fadeIn = options.fadeIn;
    this._fadeOut = options.fadeOut;
    this._curve = options.curve;
    this.onended = options.onended;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      curve: "linear",
      fadeIn: 0,
      fadeOut: 0,
      onended: noOp
    });
  }
  _startGain(time, gain = 1) {
    assert(this._startTime === -1, "Source cannot be started more than once");
    const fadeInTime = this.toSeconds(this._fadeIn);
    this._startTime = time + fadeInTime;
    this._startTime = Math.max(this._startTime, this.context.currentTime);
    if (fadeInTime > 0) {
      this._gainNode.gain.setValueAtTime(0, time);
      if (this._curve === "linear") {
        this._gainNode.gain.linearRampToValueAtTime(gain, time + fadeInTime);
      } else {
        this._gainNode.gain.exponentialApproachValueAtTime(gain, time, fadeInTime);
      }
    } else {
      this._gainNode.gain.setValueAtTime(gain, time);
    }
    return this;
  }
  stop(time) {
    this.log("stop", time);
    this._stopGain(this.toSeconds(time));
    return this;
  }
  _stopGain(time) {
    assert(this._startTime !== -1, "'start' must be called before 'stop'");
    this.cancelStop();
    const fadeOutTime = this.toSeconds(this._fadeOut);
    this._stopTime = this.toSeconds(time) + fadeOutTime;
    this._stopTime = Math.max(this._stopTime, this.now());
    if (fadeOutTime > 0) {
      if (this._curve === "linear") {
        this._gainNode.gain.linearRampTo(0, fadeOutTime, time);
      } else {
        this._gainNode.gain.targetRampTo(0, fadeOutTime, time);
      }
    } else {
      this._gainNode.gain.cancelAndHoldAtTime(time);
      this._gainNode.gain.setValueAtTime(0, time);
    }
    this.context.clearTimeout(this._timeout);
    this._timeout = this.context.setTimeout(() => {
      const additionalTail = this._curve === "exponential" ? fadeOutTime * 2 : 0;
      this._stopSource(this.now() + additionalTail);
      this._onended();
    }, this._stopTime - this.context.currentTime);
    return this;
  }
  _onended() {
    if (this.onended !== noOp) {
      this.onended(this);
      this.onended = noOp;
      if (!this.context.isOffline) {
        const disposeCallback = () => this.dispose();
        if (typeof window.requestIdleCallback !== "undefined") {
          window.requestIdleCallback(disposeCallback);
        } else {
          setTimeout(disposeCallback, 1000);
        }
      }
    }
  }
  get state() {
    return this.getStateAtTime(this.now());
  }
  cancelStop() {
    this.log("cancelStop");
    assert(this._startTime !== -1, "Source is not started");
    this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime);
    this.context.clearTimeout(this._timeout);
    this._stopTime = -1;
    return this;
  }
  dispose() {
    super.dispose();
    this._gainNode.dispose();
    this.onended = noOp;
    return this;
  }
}

// ../../node_modules/tone/build/esm/signal/ToneConstantSource.js
class ToneConstantSource extends OneShotSource {
  constructor() {
    const options = optionsFromArguments(ToneConstantSource.getDefaults(), arguments, ["offset"]);
    super(options);
    this.name = "ToneConstantSource";
    this._source = this.context.createConstantSource();
    connect(this._source, this._gainNode);
    this.offset = new Param({
      context: this.context,
      convert: options.convert,
      param: this._source.offset,
      units: options.units,
      value: options.offset,
      minValue: options.minValue,
      maxValue: options.maxValue
    });
  }
  static getDefaults() {
    return Object.assign(OneShotSource.getDefaults(), {
      convert: true,
      offset: 1,
      units: "number"
    });
  }
  start(time) {
    const computedTime = this.toSeconds(time);
    this.log("start", computedTime);
    this._startGain(computedTime);
    this._source.start(computedTime);
    return this;
  }
  _stopSource(time) {
    this._source.stop(time);
  }
  dispose() {
    super.dispose();
    if (this.state === "started") {
      this.stop();
    }
    this._source.disconnect();
    this.offset.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/signal/Signal.js
class Signal extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Signal.getDefaults(), arguments, [
      "value",
      "units"
    ]);
    super(options);
    this.name = "Signal";
    this.override = true;
    this.output = this._constantSource = new ToneConstantSource({
      context: this.context,
      convert: options.convert,
      offset: options.value,
      units: options.units,
      minValue: options.minValue,
      maxValue: options.maxValue
    });
    this._constantSource.start(0);
    this.input = this._param = this._constantSource.offset;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      convert: true,
      units: "number",
      value: 0
    });
  }
  connect(destination, outputNum = 0, inputNum = 0) {
    connectSignal(this, destination, outputNum, inputNum);
    return this;
  }
  dispose() {
    super.dispose();
    this._param.dispose();
    this._constantSource.dispose();
    return this;
  }
  setValueAtTime(value, time) {
    this._param.setValueAtTime(value, time);
    return this;
  }
  getValueAtTime(time) {
    return this._param.getValueAtTime(time);
  }
  setRampPoint(time) {
    this._param.setRampPoint(time);
    return this;
  }
  linearRampToValueAtTime(value, time) {
    this._param.linearRampToValueAtTime(value, time);
    return this;
  }
  exponentialRampToValueAtTime(value, time) {
    this._param.exponentialRampToValueAtTime(value, time);
    return this;
  }
  exponentialRampTo(value, rampTime, startTime) {
    this._param.exponentialRampTo(value, rampTime, startTime);
    return this;
  }
  linearRampTo(value, rampTime, startTime) {
    this._param.linearRampTo(value, rampTime, startTime);
    return this;
  }
  targetRampTo(value, rampTime, startTime) {
    this._param.targetRampTo(value, rampTime, startTime);
    return this;
  }
  exponentialApproachValueAtTime(value, time, rampTime) {
    this._param.exponentialApproachValueAtTime(value, time, rampTime);
    return this;
  }
  setTargetAtTime(value, startTime, timeConstant) {
    this._param.setTargetAtTime(value, startTime, timeConstant);
    return this;
  }
  setValueCurveAtTime(values, startTime, duration, scaling) {
    this._param.setValueCurveAtTime(values, startTime, duration, scaling);
    return this;
  }
  cancelScheduledValues(time) {
    this._param.cancelScheduledValues(time);
    return this;
  }
  cancelAndHoldAtTime(time) {
    this._param.cancelAndHoldAtTime(time);
    return this;
  }
  rampTo(value, rampTime, startTime) {
    this._param.rampTo(value, rampTime, startTime);
    return this;
  }
  get value() {
    return this._param.value;
  }
  set value(value) {
    this._param.value = value;
  }
  get convert() {
    return this._param.convert;
  }
  set convert(convert) {
    this._param.convert = convert;
  }
  get units() {
    return this._param.units;
  }
  get overridden() {
    return this._param.overridden;
  }
  set overridden(overridden) {
    this._param.overridden = overridden;
  }
  get maxValue() {
    return this._param.maxValue;
  }
  get minValue() {
    return this._param.minValue;
  }
  apply(param) {
    this._param.apply(param);
    return this;
  }
}
function connectSignal(signal, destination, outputNum, inputNum) {
  if (destination instanceof Param || isAudioParam(destination) || destination instanceof Signal && destination.override) {
    destination.cancelScheduledValues(0);
    destination.setValueAtTime(0, 0);
    if (destination instanceof Signal) {
      destination.overridden = true;
    }
  }
  connect(signal, destination, outputNum, inputNum);
}

// ../../node_modules/tone/build/esm/core/clock/TickParam.js
class TickParam extends Param {
  constructor() {
    const options = optionsFromArguments(TickParam.getDefaults(), arguments, ["value"]);
    super(options);
    this.name = "TickParam";
    this._events = new Timeline(Infinity);
    this._multiplier = 1;
    this._multiplier = options.multiplier;
    this._events.cancel(0);
    this._events.add({
      ticks: 0,
      time: 0,
      type: "setValueAtTime",
      value: this._fromType(options.value)
    });
    this.setValueAtTime(options.value, 0);
  }
  static getDefaults() {
    return Object.assign(Param.getDefaults(), {
      multiplier: 1,
      units: "hertz",
      value: 1
    });
  }
  setTargetAtTime(value, time, constant) {
    time = this.toSeconds(time);
    this.setRampPoint(time);
    const computedValue = this._fromType(value);
    const prevEvent = this._events.get(time);
    const segments = Math.round(Math.max(1 / constant, 1));
    for (let i = 0;i <= segments; i++) {
      const segTime = constant * i + time;
      const rampVal = this._exponentialApproach(prevEvent.time, prevEvent.value, computedValue, constant, segTime);
      this.linearRampToValueAtTime(this._toType(rampVal), segTime);
    }
    return this;
  }
  setValueAtTime(value, time) {
    const computedTime = this.toSeconds(time);
    super.setValueAtTime(value, time);
    const event = this._events.get(computedTime);
    const previousEvent = this._events.previousEvent(event);
    const ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
    event.ticks = Math.max(ticksUntilTime, 0);
    return this;
  }
  linearRampToValueAtTime(value, time) {
    const computedTime = this.toSeconds(time);
    super.linearRampToValueAtTime(value, time);
    const event = this._events.get(computedTime);
    const previousEvent = this._events.previousEvent(event);
    const ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
    event.ticks = Math.max(ticksUntilTime, 0);
    return this;
  }
  exponentialRampToValueAtTime(value, time) {
    time = this.toSeconds(time);
    const computedVal = this._fromType(value);
    const prevEvent = this._events.get(time);
    const segments = Math.round(Math.max((time - prevEvent.time) * 10, 1));
    const segmentDur = (time - prevEvent.time) / segments;
    for (let i = 0;i <= segments; i++) {
      const segTime = segmentDur * i + prevEvent.time;
      const rampVal = this._exponentialInterpolate(prevEvent.time, prevEvent.value, time, computedVal, segTime);
      this.linearRampToValueAtTime(this._toType(rampVal), segTime);
    }
    return this;
  }
  _getTicksUntilEvent(event, time) {
    if (event === null) {
      event = {
        ticks: 0,
        time: 0,
        type: "setValueAtTime",
        value: 0
      };
    } else if (isUndef(event.ticks)) {
      const previousEvent = this._events.previousEvent(event);
      event.ticks = this._getTicksUntilEvent(previousEvent, event.time);
    }
    const val0 = this._fromType(this.getValueAtTime(event.time));
    let val1 = this._fromType(this.getValueAtTime(time));
    const onTheLineEvent = this._events.get(time);
    if (onTheLineEvent && onTheLineEvent.time === time && onTheLineEvent.type === "setValueAtTime") {
      val1 = this._fromType(this.getValueAtTime(time - this.sampleTime));
    }
    return 0.5 * (time - event.time) * (val0 + val1) + event.ticks;
  }
  getTicksAtTime(time) {
    const computedTime = this.toSeconds(time);
    const event = this._events.get(computedTime);
    return Math.max(this._getTicksUntilEvent(event, computedTime), 0);
  }
  getDurationOfTicks(ticks, time) {
    const computedTime = this.toSeconds(time);
    const currentTick = this.getTicksAtTime(time);
    return this.getTimeOfTick(currentTick + ticks) - computedTime;
  }
  getTimeOfTick(tick) {
    const before = this._events.get(tick, "ticks");
    const after = this._events.getAfter(tick, "ticks");
    if (before && before.ticks === tick) {
      return before.time;
    } else if (before && after && after.type === "linearRampToValueAtTime" && before.value !== after.value) {
      const val0 = this._fromType(this.getValueAtTime(before.time));
      const val1 = this._fromType(this.getValueAtTime(after.time));
      const delta = (val1 - val0) / (after.time - before.time);
      const k = Math.sqrt(Math.pow(val0, 2) - 2 * delta * (before.ticks - tick));
      const sol1 = (-val0 + k) / delta;
      const sol2 = (-val0 - k) / delta;
      return (sol1 > 0 ? sol1 : sol2) + before.time;
    } else if (before) {
      if (before.value === 0) {
        return Infinity;
      } else {
        return before.time + (tick - before.ticks) / before.value;
      }
    } else {
      return tick / this._initialValue;
    }
  }
  ticksToTime(ticks, when) {
    return this.getDurationOfTicks(ticks, when);
  }
  timeToTicks(duration, when) {
    const computedTime = this.toSeconds(when);
    const computedDuration = this.toSeconds(duration);
    const startTicks = this.getTicksAtTime(computedTime);
    const endTicks = this.getTicksAtTime(computedTime + computedDuration);
    return endTicks - startTicks;
  }
  _fromType(val) {
    if (this.units === "bpm" && this.multiplier) {
      return 1 / (60 / val / this.multiplier);
    } else {
      return super._fromType(val);
    }
  }
  _toType(val) {
    if (this.units === "bpm" && this.multiplier) {
      return val / this.multiplier * 60;
    } else {
      return super._toType(val);
    }
  }
  get multiplier() {
    return this._multiplier;
  }
  set multiplier(m) {
    const currentVal = this.value;
    this._multiplier = m;
    this.cancelScheduledValues(0);
    this.setValueAtTime(currentVal, 0);
  }
}

// ../../node_modules/tone/build/esm/core/clock/TickSignal.js
class TickSignal extends Signal {
  constructor() {
    const options = optionsFromArguments(TickSignal.getDefaults(), arguments, ["value"]);
    super(options);
    this.name = "TickSignal";
    this.input = this._param = new TickParam({
      context: this.context,
      convert: options.convert,
      multiplier: options.multiplier,
      param: this._constantSource.offset,
      units: options.units,
      value: options.value
    });
  }
  static getDefaults() {
    return Object.assign(Signal.getDefaults(), {
      multiplier: 1,
      units: "hertz",
      value: 1
    });
  }
  ticksToTime(ticks, when) {
    return this._param.ticksToTime(ticks, when);
  }
  timeToTicks(duration, when) {
    return this._param.timeToTicks(duration, when);
  }
  getTimeOfTick(tick) {
    return this._param.getTimeOfTick(tick);
  }
  getDurationOfTicks(ticks, time) {
    return this._param.getDurationOfTicks(ticks, time);
  }
  getTicksAtTime(time) {
    return this._param.getTicksAtTime(time);
  }
  get multiplier() {
    return this._param.multiplier;
  }
  set multiplier(m) {
    this._param.multiplier = m;
  }
  dispose() {
    super.dispose();
    this._param.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/clock/TickSource.js
class TickSource extends ToneWithContext {
  constructor() {
    const options = optionsFromArguments(TickSource.getDefaults(), arguments, ["frequency"]);
    super(options);
    this.name = "TickSource";
    this._state = new StateTimeline;
    this._tickOffset = new Timeline;
    this._ticksAtTime = new Timeline;
    this._secondsAtTime = new Timeline;
    this.frequency = new TickSignal({
      context: this.context,
      units: options.units,
      value: options.frequency
    });
    readOnly(this, "frequency");
    this._state.setStateAtTime("stopped", 0);
    this.setTicksAtTime(0, 0);
  }
  static getDefaults() {
    return Object.assign({
      frequency: 1,
      units: "hertz"
    }, ToneWithContext.getDefaults());
  }
  get state() {
    return this.getStateAtTime(this.now());
  }
  start(time, offset) {
    const computedTime = this.toSeconds(time);
    if (this._state.getValueAtTime(computedTime) !== "started") {
      this._state.setStateAtTime("started", computedTime);
      if (isDefined(offset)) {
        this.setTicksAtTime(offset, computedTime);
      }
      this._ticksAtTime.cancel(computedTime);
      this._secondsAtTime.cancel(computedTime);
    }
    return this;
  }
  stop(time) {
    const computedTime = this.toSeconds(time);
    if (this._state.getValueAtTime(computedTime) === "stopped") {
      const event = this._state.get(computedTime);
      if (event && event.time > 0) {
        this._tickOffset.cancel(event.time);
        this._state.cancel(event.time);
      }
    }
    this._state.cancel(computedTime);
    this._state.setStateAtTime("stopped", computedTime);
    this.setTicksAtTime(0, computedTime);
    this._ticksAtTime.cancel(computedTime);
    this._secondsAtTime.cancel(computedTime);
    return this;
  }
  pause(time) {
    const computedTime = this.toSeconds(time);
    if (this._state.getValueAtTime(computedTime) === "started") {
      this._state.setStateAtTime("paused", computedTime);
      this._ticksAtTime.cancel(computedTime);
      this._secondsAtTime.cancel(computedTime);
    }
    return this;
  }
  cancel(time) {
    time = this.toSeconds(time);
    this._state.cancel(time);
    this._tickOffset.cancel(time);
    this._ticksAtTime.cancel(time);
    this._secondsAtTime.cancel(time);
    return this;
  }
  getTicksAtTime(time) {
    const computedTime = this.toSeconds(time);
    const stopEvent = this._state.getLastState("stopped", computedTime);
    const memoizedEvent = this._ticksAtTime.get(computedTime);
    const tmpEvent = {
      state: "paused",
      time: computedTime
    };
    this._state.add(tmpEvent);
    let lastState = memoizedEvent ? memoizedEvent : stopEvent;
    let elapsedTicks = memoizedEvent ? memoizedEvent.ticks : 0;
    let eventToMemoize = null;
    this._state.forEachBetween(lastState.time, computedTime + this.sampleTime, (e) => {
      let periodStartTime = lastState.time;
      const offsetEvent = this._tickOffset.get(e.time);
      if (offsetEvent && offsetEvent.time >= lastState.time) {
        elapsedTicks = offsetEvent.ticks;
        periodStartTime = offsetEvent.time;
      }
      if (lastState.state === "started" && e.state !== "started") {
        elapsedTicks += this.frequency.getTicksAtTime(e.time) - this.frequency.getTicksAtTime(periodStartTime);
        if (e.time !== tmpEvent.time) {
          eventToMemoize = {
            state: e.state,
            time: e.time,
            ticks: elapsedTicks
          };
        }
      }
      lastState = e;
    });
    this._state.remove(tmpEvent);
    if (eventToMemoize) {
      this._ticksAtTime.add(eventToMemoize);
    }
    return elapsedTicks;
  }
  get ticks() {
    return this.getTicksAtTime(this.now());
  }
  set ticks(t) {
    this.setTicksAtTime(t, this.now());
  }
  get seconds() {
    return this.getSecondsAtTime(this.now());
  }
  set seconds(s) {
    const now = this.now();
    const ticks = this.frequency.timeToTicks(s, now);
    this.setTicksAtTime(ticks, now);
  }
  getSecondsAtTime(time) {
    time = this.toSeconds(time);
    const stopEvent = this._state.getLastState("stopped", time);
    const tmpEvent = { state: "paused", time };
    this._state.add(tmpEvent);
    const memoizedEvent = this._secondsAtTime.get(time);
    let lastState = memoizedEvent ? memoizedEvent : stopEvent;
    let elapsedSeconds = memoizedEvent ? memoizedEvent.seconds : 0;
    let eventToMemoize = null;
    this._state.forEachBetween(lastState.time, time + this.sampleTime, (e) => {
      let periodStartTime = lastState.time;
      const offsetEvent = this._tickOffset.get(e.time);
      if (offsetEvent && offsetEvent.time >= lastState.time) {
        elapsedSeconds = offsetEvent.seconds;
        periodStartTime = offsetEvent.time;
      }
      if (lastState.state === "started" && e.state !== "started") {
        elapsedSeconds += e.time - periodStartTime;
        if (e.time !== tmpEvent.time) {
          eventToMemoize = {
            state: e.state,
            time: e.time,
            seconds: elapsedSeconds
          };
        }
      }
      lastState = e;
    });
    this._state.remove(tmpEvent);
    if (eventToMemoize) {
      this._secondsAtTime.add(eventToMemoize);
    }
    return elapsedSeconds;
  }
  setTicksAtTime(ticks, time) {
    time = this.toSeconds(time);
    this._tickOffset.cancel(time);
    this._tickOffset.add({
      seconds: this.frequency.getDurationOfTicks(ticks, time),
      ticks,
      time
    });
    this._ticksAtTime.cancel(time);
    this._secondsAtTime.cancel(time);
    return this;
  }
  getStateAtTime(time) {
    time = this.toSeconds(time);
    return this._state.getValueAtTime(time);
  }
  getTimeOfTick(tick, before = this.now()) {
    const offset = this._tickOffset.get(before);
    const event = this._state.get(before);
    const startTime = Math.max(offset.time, event.time);
    const absoluteTicks = this.frequency.getTicksAtTime(startTime) + tick - offset.ticks;
    return this.frequency.getTimeOfTick(absoluteTicks);
  }
  forEachTickBetween(startTime, endTime, callback) {
    let lastStateEvent = this._state.get(startTime);
    this._state.forEachBetween(startTime, endTime, (event) => {
      if (lastStateEvent && lastStateEvent.state === "started" && event.state !== "started") {
        this.forEachTickBetween(Math.max(lastStateEvent.time, startTime), event.time - this.sampleTime, callback);
      }
      lastStateEvent = event;
    });
    let error = null;
    if (lastStateEvent && lastStateEvent.state === "started") {
      const maxStartTime = Math.max(lastStateEvent.time, startTime);
      const startTicks = this.frequency.getTicksAtTime(maxStartTime);
      const ticksAtStart = this.frequency.getTicksAtTime(lastStateEvent.time);
      const diff = startTicks - ticksAtStart;
      let offset = Math.ceil(diff) - diff;
      offset = EQ(offset, 1) ? 0 : offset;
      let nextTickTime = this.frequency.getTimeOfTick(startTicks + offset);
      while (nextTickTime < endTime) {
        try {
          callback(nextTickTime, Math.round(this.getTicksAtTime(nextTickTime)));
        } catch (e) {
          error = e;
          break;
        }
        nextTickTime += this.frequency.getDurationOfTicks(1, nextTickTime);
      }
    }
    if (error) {
      throw error;
    }
    return this;
  }
  dispose() {
    super.dispose();
    this._state.dispose();
    this._tickOffset.dispose();
    this._ticksAtTime.dispose();
    this._secondsAtTime.dispose();
    this.frequency.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/clock/Clock.js
class Clock extends ToneWithContext {
  constructor() {
    const options = optionsFromArguments(Clock.getDefaults(), arguments, [
      "callback",
      "frequency"
    ]);
    super(options);
    this.name = "Clock";
    this.callback = noOp;
    this._lastUpdate = 0;
    this._state = new StateTimeline("stopped");
    this._boundLoop = this._loop.bind(this);
    this.callback = options.callback;
    this._tickSource = new TickSource({
      context: this.context,
      frequency: options.frequency,
      units: options.units
    });
    this._lastUpdate = 0;
    this.frequency = this._tickSource.frequency;
    readOnly(this, "frequency");
    this._state.setStateAtTime("stopped", 0);
    this.context.on("tick", this._boundLoop);
  }
  static getDefaults() {
    return Object.assign(ToneWithContext.getDefaults(), {
      callback: noOp,
      frequency: 1,
      units: "hertz"
    });
  }
  get state() {
    return this._state.getValueAtTime(this.now());
  }
  start(time, offset) {
    assertContextRunning(this.context);
    const computedTime = this.toSeconds(time);
    this.log("start", computedTime);
    if (this._state.getValueAtTime(computedTime) !== "started") {
      this._state.setStateAtTime("started", computedTime);
      this._tickSource.start(computedTime, offset);
      if (computedTime < this._lastUpdate) {
        this.emit("start", computedTime, offset);
      }
    }
    return this;
  }
  stop(time) {
    const computedTime = this.toSeconds(time);
    this.log("stop", computedTime);
    this._state.cancel(computedTime);
    this._state.setStateAtTime("stopped", computedTime);
    this._tickSource.stop(computedTime);
    if (computedTime < this._lastUpdate) {
      this.emit("stop", computedTime);
    }
    return this;
  }
  pause(time) {
    const computedTime = this.toSeconds(time);
    if (this._state.getValueAtTime(computedTime) === "started") {
      this._state.setStateAtTime("paused", computedTime);
      this._tickSource.pause(computedTime);
      if (computedTime < this._lastUpdate) {
        this.emit("pause", computedTime);
      }
    }
    return this;
  }
  get ticks() {
    return Math.ceil(this.getTicksAtTime(this.now()));
  }
  set ticks(t) {
    this._tickSource.ticks = t;
  }
  get seconds() {
    return this._tickSource.seconds;
  }
  set seconds(s) {
    this._tickSource.seconds = s;
  }
  getSecondsAtTime(time) {
    return this._tickSource.getSecondsAtTime(time);
  }
  setTicksAtTime(ticks, time) {
    this._tickSource.setTicksAtTime(ticks, time);
    return this;
  }
  getTimeOfTick(tick, before = this.now()) {
    return this._tickSource.getTimeOfTick(tick, before);
  }
  getTicksAtTime(time) {
    return this._tickSource.getTicksAtTime(time);
  }
  nextTickTime(offset, when) {
    const computedTime = this.toSeconds(when);
    const currentTick = this.getTicksAtTime(computedTime);
    return this._tickSource.getTimeOfTick(currentTick + offset, computedTime);
  }
  _loop() {
    const startTime = this._lastUpdate;
    const endTime = this.now();
    this._lastUpdate = endTime;
    this.log("loop", startTime, endTime);
    if (startTime !== endTime) {
      this._state.forEachBetween(startTime, endTime, (e) => {
        switch (e.state) {
          case "started":
            const offset = this._tickSource.getTicksAtTime(e.time);
            this.emit("start", e.time, offset);
            break;
          case "stopped":
            if (e.time !== 0) {
              this.emit("stop", e.time);
            }
            break;
          case "paused":
            this.emit("pause", e.time);
            break;
        }
      });
      this._tickSource.forEachTickBetween(startTime, endTime, (time, ticks) => {
        this.callback(time, ticks);
      });
    }
  }
  getStateAtTime(time) {
    const computedTime = this.toSeconds(time);
    return this._state.getValueAtTime(computedTime);
  }
  dispose() {
    super.dispose();
    this.context.off("tick", this._boundLoop);
    this._tickSource.dispose();
    this._state.dispose();
    return this;
  }
}
Emitter.mixin(Clock);
// ../../node_modules/tone/build/esm/component/channel/Volume.js
class Volume extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Volume.getDefaults(), arguments, [
      "volume"
    ]);
    super(options);
    this.name = "Volume";
    this.input = this.output = new Gain({
      context: this.context,
      gain: options.volume,
      units: "decibels"
    });
    this.volume = this.output.gain;
    readOnly(this, "volume");
    this._unmutedVolume = options.volume;
    this.mute = options.mute;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: false,
      volume: 0
    });
  }
  get mute() {
    return this.volume.value === -Infinity;
  }
  set mute(mute) {
    if (!this.mute && mute) {
      this._unmutedVolume = this.volume.value;
      this.volume.value = -Infinity;
    } else if (this.mute && !mute) {
      this.volume.value = this._unmutedVolume;
    }
  }
  dispose() {
    super.dispose();
    this.input.dispose();
    this.volume.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/context/Destination.js
class DestinationClass extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(DestinationClass.getDefaults(), arguments);
    super(options);
    this.name = "Destination";
    this.input = new Volume({ context: this.context });
    this.output = new Gain({ context: this.context });
    this.volume = this.input.volume;
    connectSeries(this.input, this.output, this.context.rawContext.destination);
    this.mute = options.mute;
    this._internalChannels = [
      this.input,
      this.context.rawContext.destination,
      this.output
    ];
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: false,
      volume: 0
    });
  }
  get mute() {
    return this.input.mute;
  }
  set mute(mute) {
    this.input.mute = mute;
  }
  chain(...args) {
    this.input.disconnect();
    args.unshift(this.input);
    args.push(this.output);
    connectSeries(...args);
    return this;
  }
  get maxChannelCount() {
    return this.context.rawContext.destination.maxChannelCount;
  }
  dispose() {
    super.dispose();
    this.volume.dispose();
    return this;
  }
}
onContextInit((context2) => {
  context2.destination = new DestinationClass({ context: context2 });
});
onContextClose((context2) => {
  context2.destination.dispose();
});

// ../../node_modules/tone/build/esm/core/context/Listener.js
class ListenerClass extends ToneAudioNode {
  constructor() {
    super(...arguments);
    this.name = "Listener";
    this.positionX = new Param({
      context: this.context,
      param: this.context.rawContext.listener.positionX
    });
    this.positionY = new Param({
      context: this.context,
      param: this.context.rawContext.listener.positionY
    });
    this.positionZ = new Param({
      context: this.context,
      param: this.context.rawContext.listener.positionZ
    });
    this.forwardX = new Param({
      context: this.context,
      param: this.context.rawContext.listener.forwardX
    });
    this.forwardY = new Param({
      context: this.context,
      param: this.context.rawContext.listener.forwardY
    });
    this.forwardZ = new Param({
      context: this.context,
      param: this.context.rawContext.listener.forwardZ
    });
    this.upX = new Param({
      context: this.context,
      param: this.context.rawContext.listener.upX
    });
    this.upY = new Param({
      context: this.context,
      param: this.context.rawContext.listener.upY
    });
    this.upZ = new Param({
      context: this.context,
      param: this.context.rawContext.listener.upZ
    });
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      forwardX: 0,
      forwardY: 0,
      forwardZ: -1,
      upX: 0,
      upY: 1,
      upZ: 0
    });
  }
  dispose() {
    super.dispose();
    this.positionX.dispose();
    this.positionY.dispose();
    this.positionZ.dispose();
    this.forwardX.dispose();
    this.forwardY.dispose();
    this.forwardZ.dispose();
    this.upX.dispose();
    this.upY.dispose();
    this.upZ.dispose();
    return this;
  }
}
onContextInit((context2) => {
  context2.listener = new ListenerClass({ context: context2 });
});
onContextClose((context2) => {
  context2.listener.dispose();
});
// ../../node_modules/tone/build/esm/core/context/ToneAudioBuffers.js
class ToneAudioBuffers extends Tone {
  constructor() {
    super();
    this.name = "ToneAudioBuffers";
    this._buffers = new Map;
    this._loadingCount = 0;
    const options = optionsFromArguments(ToneAudioBuffers.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
    this.baseUrl = options.baseUrl;
    Object.keys(options.urls).forEach((name) => {
      this._loadingCount++;
      const url = options.urls[name];
      this.add(name, url, this._bufferLoaded.bind(this, options.onload), options.onerror);
    });
  }
  static getDefaults() {
    return {
      baseUrl: "",
      onerror: noOp,
      onload: noOp,
      urls: {}
    };
  }
  has(name) {
    return this._buffers.has(name.toString());
  }
  get(name) {
    assert(this.has(name), `ToneAudioBuffers has no buffer named: ${name}`);
    return this._buffers.get(name.toString());
  }
  _bufferLoaded(callback) {
    this._loadingCount--;
    if (this._loadingCount === 0 && callback) {
      callback();
    }
  }
  get loaded() {
    return Array.from(this._buffers).every(([_, buffer]) => buffer.loaded);
  }
  add(name, url, callback = noOp, onerror = noOp) {
    if (isString(url)) {
      if (this.baseUrl && url.trim().substring(0, 11).toLowerCase() === "data:audio/") {
        this.baseUrl = "";
      }
      this._buffers.set(name.toString(), new ToneAudioBuffer(this.baseUrl + url, callback, onerror));
    } else {
      this._buffers.set(name.toString(), new ToneAudioBuffer(url, callback, onerror));
    }
    return this;
  }
  dispose() {
    super.dispose();
    this._buffers.forEach((buffer) => buffer.dispose());
    this._buffers.clear();
    return this;
  }
}
// ../../node_modules/tone/build/esm/core/type/Ticks.js
class TicksClass extends TransportTimeClass {
  constructor() {
    super(...arguments);
    this.name = "Ticks";
    this.defaultUnits = "i";
  }
  _now() {
    return this.context.transport.ticks;
  }
  _beatsToUnits(beats) {
    return this._getPPQ() * beats;
  }
  _secondsToUnits(seconds) {
    return Math.floor(seconds / (60 / this._getBpm()) * this._getPPQ());
  }
  _ticksToUnits(ticks) {
    return ticks;
  }
  toTicks() {
    return this.valueOf();
  }
  toSeconds() {
    return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
  }
}
// ../../node_modules/tone/build/esm/core/util/Draw.js
class DrawClass extends ToneWithContext {
  constructor() {
    super(...arguments);
    this.name = "Draw";
    this.expiration = 0.25;
    this.anticipation = 0.008;
    this._events = new Timeline;
    this._boundDrawLoop = this._drawLoop.bind(this);
    this._animationFrame = -1;
  }
  schedule(callback, time) {
    this._events.add({
      callback,
      time: this.toSeconds(time)
    });
    if (this._events.length === 1) {
      this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
    }
    return this;
  }
  cancel(after) {
    this._events.cancel(this.toSeconds(after));
    return this;
  }
  _drawLoop() {
    const now = this.context.currentTime;
    while (this._events.length && this._events.peek().time - this.anticipation <= now) {
      const event = this._events.shift();
      if (event && now - event.time <= this.expiration) {
        event.callback();
      }
    }
    if (this._events.length > 0) {
      this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
    }
  }
  dispose() {
    super.dispose();
    this._events.dispose();
    cancelAnimationFrame(this._animationFrame);
    return this;
  }
}
onContextInit((context2) => {
  context2.draw = new DrawClass({ context: context2 });
});
onContextClose((context2) => {
  context2.draw.dispose();
});
// ../../node_modules/tone/build/esm/core/util/IntervalTimeline.js
class IntervalTimeline extends Tone {
  constructor() {
    super(...arguments);
    this.name = "IntervalTimeline";
    this._root = null;
    this._length = 0;
  }
  add(event) {
    assert(isDefined(event.time), "Events must have a time property");
    assert(isDefined(event.duration), "Events must have a duration parameter");
    event.time = event.time.valueOf();
    let node = new IntervalNode(event.time, event.time + event.duration, event);
    if (this._root === null) {
      this._root = node;
    } else {
      this._root.insert(node);
    }
    this._length++;
    while (node !== null) {
      node.updateHeight();
      node.updateMax();
      this._rebalance(node);
      node = node.parent;
    }
    return this;
  }
  remove(event) {
    if (this._root !== null) {
      const results = [];
      this._root.search(event.time, results);
      for (const node of results) {
        if (node.event === event) {
          this._removeNode(node);
          this._length--;
          break;
        }
      }
    }
    return this;
  }
  get length() {
    return this._length;
  }
  cancel(after) {
    this.forEachFrom(after, (event) => this.remove(event));
    return this;
  }
  _setRoot(node) {
    this._root = node;
    if (this._root !== null) {
      this._root.parent = null;
    }
  }
  _replaceNodeInParent(node, replacement) {
    if (node.parent !== null) {
      if (node.isLeftChild()) {
        node.parent.left = replacement;
      } else {
        node.parent.right = replacement;
      }
      this._rebalance(node.parent);
    } else {
      this._setRoot(replacement);
    }
  }
  _removeNode(node) {
    if (node.left === null && node.right === null) {
      this._replaceNodeInParent(node, null);
    } else if (node.right === null) {
      this._replaceNodeInParent(node, node.left);
    } else if (node.left === null) {
      this._replaceNodeInParent(node, node.right);
    } else {
      const balance = node.getBalance();
      let replacement;
      let temp = null;
      if (balance > 0) {
        if (node.left.right === null) {
          replacement = node.left;
          replacement.right = node.right;
          temp = replacement;
        } else {
          replacement = node.left.right;
          while (replacement.right !== null) {
            replacement = replacement.right;
          }
          if (replacement.parent) {
            replacement.parent.right = replacement.left;
            temp = replacement.parent;
            replacement.left = node.left;
            replacement.right = node.right;
          }
        }
      } else if (node.right.left === null) {
        replacement = node.right;
        replacement.left = node.left;
        temp = replacement;
      } else {
        replacement = node.right.left;
        while (replacement.left !== null) {
          replacement = replacement.left;
        }
        if (replacement.parent) {
          replacement.parent.left = replacement.right;
          temp = replacement.parent;
          replacement.left = node.left;
          replacement.right = node.right;
        }
      }
      if (node.parent !== null) {
        if (node.isLeftChild()) {
          node.parent.left = replacement;
        } else {
          node.parent.right = replacement;
        }
      } else {
        this._setRoot(replacement);
      }
      if (temp) {
        this._rebalance(temp);
      }
    }
    node.dispose();
  }
  _rotateLeft(node) {
    const parent = node.parent;
    const isLeftChild = node.isLeftChild();
    const pivotNode = node.right;
    if (pivotNode) {
      node.right = pivotNode.left;
      pivotNode.left = node;
    }
    if (parent !== null) {
      if (isLeftChild) {
        parent.left = pivotNode;
      } else {
        parent.right = pivotNode;
      }
    } else {
      this._setRoot(pivotNode);
    }
  }
  _rotateRight(node) {
    const parent = node.parent;
    const isLeftChild = node.isLeftChild();
    const pivotNode = node.left;
    if (pivotNode) {
      node.left = pivotNode.right;
      pivotNode.right = node;
    }
    if (parent !== null) {
      if (isLeftChild) {
        parent.left = pivotNode;
      } else {
        parent.right = pivotNode;
      }
    } else {
      this._setRoot(pivotNode);
    }
  }
  _rebalance(node) {
    const balance = node.getBalance();
    if (balance > 1 && node.left) {
      if (node.left.getBalance() < 0) {
        this._rotateLeft(node.left);
      } else {
        this._rotateRight(node);
      }
    } else if (balance < -1 && node.right) {
      if (node.right.getBalance() > 0) {
        this._rotateRight(node.right);
      } else {
        this._rotateLeft(node);
      }
    }
  }
  get(time) {
    if (this._root !== null) {
      const results = [];
      this._root.search(time, results);
      if (results.length > 0) {
        let max = results[0];
        for (let i = 1;i < results.length; i++) {
          if (results[i].low > max.low) {
            max = results[i];
          }
        }
        return max.event;
      }
    }
    return null;
  }
  forEach(callback) {
    if (this._root !== null) {
      const allNodes = [];
      this._root.traverse((node) => allNodes.push(node));
      allNodes.forEach((node) => {
        if (node.event) {
          callback(node.event);
        }
      });
    }
    return this;
  }
  forEachAtTime(time, callback) {
    if (this._root !== null) {
      const results = [];
      this._root.search(time, results);
      results.forEach((node) => {
        if (node.event) {
          callback(node.event);
        }
      });
    }
    return this;
  }
  forEachFrom(time, callback) {
    if (this._root !== null) {
      const results = [];
      this._root.searchAfter(time, results);
      results.forEach((node) => {
        if (node.event) {
          callback(node.event);
        }
      });
    }
    return this;
  }
  dispose() {
    super.dispose();
    if (this._root !== null) {
      this._root.traverse((node) => node.dispose());
    }
    this._root = null;
    return this;
  }
}

class IntervalNode {
  constructor(low, high, event) {
    this._left = null;
    this._right = null;
    this.parent = null;
    this.height = 0;
    this.event = event;
    this.low = low;
    this.high = high;
    this.max = this.high;
  }
  insert(node) {
    if (node.low <= this.low) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(node);
      }
    } else if (this.right === null) {
      this.right = node;
    } else {
      this.right.insert(node);
    }
  }
  search(point, results) {
    if (point > this.max) {
      return;
    }
    if (this.left !== null) {
      this.left.search(point, results);
    }
    if (this.low <= point && this.high > point) {
      results.push(this);
    }
    if (this.low > point) {
      return;
    }
    if (this.right !== null) {
      this.right.search(point, results);
    }
  }
  searchAfter(point, results) {
    if (this.low >= point) {
      results.push(this);
      if (this.left !== null) {
        this.left.searchAfter(point, results);
      }
    }
    if (this.right !== null) {
      this.right.searchAfter(point, results);
    }
  }
  traverse(callback) {
    callback(this);
    if (this.left !== null) {
      this.left.traverse(callback);
    }
    if (this.right !== null) {
      this.right.traverse(callback);
    }
  }
  updateHeight() {
    if (this.left !== null && this.right !== null) {
      this.height = Math.max(this.left.height, this.right.height) + 1;
    } else if (this.right !== null) {
      this.height = this.right.height + 1;
    } else if (this.left !== null) {
      this.height = this.left.height + 1;
    } else {
      this.height = 0;
    }
  }
  updateMax() {
    this.max = this.high;
    if (this.left !== null) {
      this.max = Math.max(this.max, this.left.max);
    }
    if (this.right !== null) {
      this.max = Math.max(this.max, this.right.max);
    }
  }
  getBalance() {
    let balance = 0;
    if (this.left !== null && this.right !== null) {
      balance = this.left.height - this.right.height;
    } else if (this.left !== null) {
      balance = this.left.height + 1;
    } else if (this.right !== null) {
      balance = -(this.right.height + 1);
    }
    return balance;
  }
  isLeftChild() {
    return this.parent !== null && this.parent.left === this;
  }
  get left() {
    return this._left;
  }
  set left(node) {
    this._left = node;
    if (node !== null) {
      node.parent = this;
    }
    this.updateHeight();
    this.updateMax();
  }
  get right() {
    return this._right;
  }
  set right(node) {
    this._right = node;
    if (node !== null) {
      node.parent = this;
    }
    this.updateHeight();
    this.updateMax();
  }
  dispose() {
    this.parent = null;
    this._left = null;
    this._right = null;
    this.event = null;
  }
}
// ../../node_modules/tone/build/esm/core/util/TimelineValue.js
class TimelineValue extends Tone {
  constructor(initialValue) {
    super();
    this.name = "TimelineValue";
    this._timeline = new Timeline({
      memory: 10
    });
    this._initialValue = initialValue;
  }
  set(value, time) {
    this._timeline.add({
      value,
      time
    });
    return this;
  }
  get(time) {
    const event = this._timeline.get(time);
    if (event) {
      return event.value;
    } else {
      return this._initialValue;
    }
  }
}

// ../../node_modules/tone/build/esm/signal/SignalOperator.js
class SignalOperator extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(SignalOperator.getDefaults(), arguments, [
      "context"
    ]));
  }
  connect(destination, outputNum = 0, inputNum = 0) {
    connectSignal(this, destination, outputNum, inputNum);
    return this;
  }
}

// ../../node_modules/tone/build/esm/signal/WaveShaper.js
class WaveShaper extends SignalOperator {
  constructor() {
    const options = optionsFromArguments(WaveShaper.getDefaults(), arguments, ["mapping", "length"]);
    super(options);
    this.name = "WaveShaper";
    this._shaper = this.context.createWaveShaper();
    this.input = this._shaper;
    this.output = this._shaper;
    if (isArray(options.mapping) || options.mapping instanceof Float32Array) {
      this.curve = Float32Array.from(options.mapping);
    } else if (isFunction(options.mapping)) {
      this.setMap(options.mapping, options.length);
    }
  }
  static getDefaults() {
    return Object.assign(Signal.getDefaults(), {
      length: 1024
    });
  }
  setMap(mapping, length = 1024) {
    const array = new Float32Array(length);
    for (let i = 0, len = length;i < len; i++) {
      const normalized = i / (len - 1) * 2 - 1;
      array[i] = mapping(normalized, i);
    }
    this.curve = array;
    return this;
  }
  get curve() {
    return this._shaper.curve;
  }
  set curve(mapping) {
    this._shaper.curve = mapping;
  }
  get oversample() {
    return this._shaper.oversample;
  }
  set oversample(oversampling) {
    const isOverSampleType = ["none", "2x", "4x"].some((str) => str.includes(oversampling));
    assert(isOverSampleType, "oversampling must be either 'none', '2x', or '4x'");
    this._shaper.oversample = oversampling;
  }
  dispose() {
    super.dispose();
    this._shaper.disconnect();
    return this;
  }
}

// ../../node_modules/tone/build/esm/signal/Pow.js
class Pow extends SignalOperator {
  constructor() {
    const options = optionsFromArguments(Pow.getDefaults(), arguments, [
      "value"
    ]);
    super(options);
    this.name = "Pow";
    this._exponentScaler = this.input = this.output = new WaveShaper({
      context: this.context,
      mapping: this._expFunc(options.value),
      length: 8192
    });
    this._exponent = options.value;
  }
  static getDefaults() {
    return Object.assign(SignalOperator.getDefaults(), {
      value: 1
    });
  }
  _expFunc(exponent) {
    return (val) => {
      return Math.pow(Math.abs(val), exponent);
    };
  }
  get value() {
    return this._exponent;
  }
  set value(exponent) {
    this._exponent = exponent;
    this._exponentScaler.setMap(this._expFunc(this._exponent));
  }
  dispose() {
    super.dispose();
    this._exponentScaler.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/clock/TransportEvent.js
class TransportEvent {
  constructor(transport, opts) {
    this.id = TransportEvent._eventId++;
    this._remainderTime = 0;
    const options = Object.assign(TransportEvent.getDefaults(), opts);
    this.transport = transport;
    this.callback = options.callback;
    this._once = options.once;
    this.time = Math.floor(options.time);
    this._remainderTime = options.time - this.time;
  }
  static getDefaults() {
    return {
      callback: noOp,
      once: false,
      time: 0
    };
  }
  get floatTime() {
    return this.time + this._remainderTime;
  }
  invoke(time) {
    if (this.callback) {
      const tickDuration = this.transport.bpm.getDurationOfTicks(1, time);
      this.callback(time + this._remainderTime * tickDuration);
      if (this._once) {
        this.transport.clear(this.id);
      }
    }
  }
  dispose() {
    this.callback = undefined;
    return this;
  }
}
TransportEvent._eventId = 0;

// ../../node_modules/tone/build/esm/core/clock/TransportRepeatEvent.js
class TransportRepeatEvent extends TransportEvent {
  constructor(transport, opts) {
    super(transport, opts);
    this._currentId = -1;
    this._nextId = -1;
    this._nextTick = this.time;
    this._boundRestart = this._restart.bind(this);
    const options = Object.assign(TransportRepeatEvent.getDefaults(), opts);
    this.duration = options.duration;
    this._interval = options.interval;
    this._nextTick = options.time;
    this.transport.on("start", this._boundRestart);
    this.transport.on("loopStart", this._boundRestart);
    this.transport.on("ticks", this._boundRestart);
    this.context = this.transport.context;
    this._restart();
  }
  static getDefaults() {
    return Object.assign({}, TransportEvent.getDefaults(), {
      duration: Infinity,
      interval: 1,
      once: false
    });
  }
  invoke(time) {
    this._createEvents(time);
    super.invoke(time);
  }
  _createEvent() {
    if (LT(this._nextTick, this.floatTime + this.duration)) {
      return this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
    }
    return -1;
  }
  _createEvents(time) {
    if (LT(this._nextTick + this._interval, this.floatTime + this.duration)) {
      this._nextTick += this._interval;
      this._currentId = this._nextId;
      this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
    }
  }
  _restart(time) {
    this.transport.clear(this._currentId);
    this.transport.clear(this._nextId);
    this._nextTick = this.floatTime;
    const ticks = this.transport.getTicksAtTime(time);
    if (GT(ticks, this.time)) {
      this._nextTick = this.floatTime + Math.ceil((ticks - this.floatTime) / this._interval) * this._interval;
    }
    this._currentId = this._createEvent();
    this._nextTick += this._interval;
    this._nextId = this._createEvent();
  }
  dispose() {
    super.dispose();
    this.transport.clear(this._currentId);
    this.transport.clear(this._nextId);
    this.transport.off("start", this._boundRestart);
    this.transport.off("loopStart", this._boundRestart);
    this.transport.off("ticks", this._boundRestart);
    return this;
  }
}

// ../../node_modules/tone/build/esm/core/clock/Transport.js
class TransportClass extends ToneWithContext {
  constructor() {
    const options = optionsFromArguments(TransportClass.getDefaults(), arguments);
    super(options);
    this.name = "Transport";
    this._loop = new TimelineValue(false);
    this._loopStart = 0;
    this._loopEnd = 0;
    this._scheduledEvents = {};
    this._timeline = new Timeline;
    this._repeatedEvents = new IntervalTimeline;
    this._syncedSignals = [];
    this._swingAmount = 0;
    this._ppq = options.ppq;
    this._clock = new Clock({
      callback: this._processTick.bind(this),
      context: this.context,
      frequency: 0,
      units: "bpm"
    });
    this._bindClockEvents();
    this.bpm = this._clock.frequency;
    this._clock.frequency.multiplier = options.ppq;
    this.bpm.setValueAtTime(options.bpm, 0);
    readOnly(this, "bpm");
    this._timeSignature = options.timeSignature;
    this._swingTicks = options.ppq / 2;
  }
  static getDefaults() {
    return Object.assign(ToneWithContext.getDefaults(), {
      bpm: 120,
      loopEnd: "4m",
      loopStart: 0,
      ppq: 192,
      swing: 0,
      swingSubdivision: "8n",
      timeSignature: 4
    });
  }
  _processTick(tickTime, ticks) {
    if (this._loop.get(tickTime)) {
      if (ticks >= this._loopEnd) {
        this.emit("loopEnd", tickTime);
        this._clock.setTicksAtTime(this._loopStart, tickTime);
        ticks = this._loopStart;
        this.emit("loopStart", tickTime, this._clock.getSecondsAtTime(tickTime));
        this.emit("loop", tickTime);
      }
    }
    if (this._swingAmount > 0 && ticks % this._ppq !== 0 && ticks % (this._swingTicks * 2) !== 0) {
      const progress = ticks % (this._swingTicks * 2) / (this._swingTicks * 2);
      const amount = Math.sin(progress * Math.PI) * this._swingAmount;
      tickTime += new TicksClass(this.context, this._swingTicks * 2 / 3).toSeconds() * amount;
    }
    enterScheduledCallback(true);
    this._timeline.forEachAtTime(ticks, (event) => event.invoke(tickTime));
    enterScheduledCallback(false);
  }
  schedule(callback, time) {
    const event = new TransportEvent(this, {
      callback,
      time: new TransportTimeClass(this.context, time).toTicks()
    });
    return this._addEvent(event, this._timeline);
  }
  scheduleRepeat(callback, interval, startTime, duration = Infinity) {
    const event = new TransportRepeatEvent(this, {
      callback,
      duration: new TimeClass(this.context, duration).toTicks(),
      interval: new TimeClass(this.context, interval).toTicks(),
      time: new TransportTimeClass(this.context, startTime).toTicks()
    });
    return this._addEvent(event, this._repeatedEvents);
  }
  scheduleOnce(callback, time) {
    const event = new TransportEvent(this, {
      callback,
      once: true,
      time: new TransportTimeClass(this.context, time).toTicks()
    });
    return this._addEvent(event, this._timeline);
  }
  clear(eventId) {
    if (this._scheduledEvents.hasOwnProperty(eventId)) {
      const item = this._scheduledEvents[eventId.toString()];
      item.timeline.remove(item.event);
      item.event.dispose();
      delete this._scheduledEvents[eventId.toString()];
    }
    return this;
  }
  _addEvent(event, timeline) {
    this._scheduledEvents[event.id.toString()] = {
      event,
      timeline
    };
    timeline.add(event);
    return event.id;
  }
  cancel(after = 0) {
    const computedAfter = this.toTicks(after);
    this._timeline.forEachFrom(computedAfter, (event) => this.clear(event.id));
    this._repeatedEvents.forEachFrom(computedAfter, (event) => this.clear(event.id));
    return this;
  }
  _bindClockEvents() {
    this._clock.on("start", (time, offset) => {
      offset = new TicksClass(this.context, offset).toSeconds();
      this.emit("start", time, offset);
    });
    this._clock.on("stop", (time) => {
      this.emit("stop", time);
    });
    this._clock.on("pause", (time) => {
      this.emit("pause", time);
    });
  }
  get state() {
    return this._clock.getStateAtTime(this.now());
  }
  start(time, offset) {
    this.context.resume();
    let offsetTicks;
    if (isDefined(offset)) {
      offsetTicks = this.toTicks(offset);
    }
    this._clock.start(time, offsetTicks);
    return this;
  }
  stop(time) {
    this._clock.stop(time);
    return this;
  }
  pause(time) {
    this._clock.pause(time);
    return this;
  }
  toggle(time) {
    time = this.toSeconds(time);
    if (this._clock.getStateAtTime(time) !== "started") {
      this.start(time);
    } else {
      this.stop(time);
    }
    return this;
  }
  get timeSignature() {
    return this._timeSignature;
  }
  set timeSignature(timeSig) {
    if (isArray(timeSig)) {
      timeSig = timeSig[0] / timeSig[1] * 4;
    }
    this._timeSignature = timeSig;
  }
  get loopStart() {
    return new TimeClass(this.context, this._loopStart, "i").toSeconds();
  }
  set loopStart(startPosition) {
    this._loopStart = this.toTicks(startPosition);
  }
  get loopEnd() {
    return new TimeClass(this.context, this._loopEnd, "i").toSeconds();
  }
  set loopEnd(endPosition) {
    this._loopEnd = this.toTicks(endPosition);
  }
  get loop() {
    return this._loop.get(this.now());
  }
  set loop(loop) {
    this._loop.set(loop, this.now());
  }
  setLoopPoints(startPosition, endPosition) {
    this.loopStart = startPosition;
    this.loopEnd = endPosition;
    return this;
  }
  get swing() {
    return this._swingAmount;
  }
  set swing(amount) {
    this._swingAmount = amount;
  }
  get swingSubdivision() {
    return new TicksClass(this.context, this._swingTicks).toNotation();
  }
  set swingSubdivision(subdivision) {
    this._swingTicks = this.toTicks(subdivision);
  }
  get position() {
    const now = this.now();
    const ticks = this._clock.getTicksAtTime(now);
    return new TicksClass(this.context, ticks).toBarsBeatsSixteenths();
  }
  set position(progress) {
    const ticks = this.toTicks(progress);
    this.ticks = ticks;
  }
  get seconds() {
    return this._clock.seconds;
  }
  set seconds(s) {
    const now = this.now();
    const ticks = this._clock.frequency.timeToTicks(s, now);
    this.ticks = ticks;
  }
  get progress() {
    if (this.loop) {
      const now = this.now();
      const ticks = this._clock.getTicksAtTime(now);
      return (ticks - this._loopStart) / (this._loopEnd - this._loopStart);
    } else {
      return 0;
    }
  }
  get ticks() {
    return this._clock.ticks;
  }
  set ticks(t) {
    if (this._clock.ticks !== t) {
      const now = this.now();
      if (this.state === "started") {
        const ticks = this._clock.getTicksAtTime(now);
        const remainingTick = this._clock.frequency.getDurationOfTicks(Math.ceil(ticks) - ticks, now);
        const time = now + remainingTick;
        this.emit("stop", time);
        this._clock.setTicksAtTime(t, time);
        this.emit("start", time, this._clock.getSecondsAtTime(time));
      } else {
        this.emit("ticks", now);
        this._clock.setTicksAtTime(t, now);
      }
    }
  }
  getTicksAtTime(time) {
    return this._clock.getTicksAtTime(time);
  }
  getSecondsAtTime(time) {
    return this._clock.getSecondsAtTime(time);
  }
  get PPQ() {
    return this._clock.frequency.multiplier;
  }
  set PPQ(ppq) {
    this._clock.frequency.multiplier = ppq;
  }
  nextSubdivision(subdivision) {
    subdivision = this.toTicks(subdivision);
    if (this.state !== "started") {
      return 0;
    } else {
      const now = this.now();
      const transportPos = this.getTicksAtTime(now);
      const remainingTicks = subdivision - transportPos % subdivision;
      return this._clock.nextTickTime(remainingTicks, now);
    }
  }
  syncSignal(signal, ratio) {
    const now = this.now();
    let source = this.bpm;
    let sourceValue = 1 / (60 / source.getValueAtTime(now) / this.PPQ);
    let nodes = [];
    if (signal.units === "time") {
      const scaleFactor = 1 / 64 / sourceValue;
      const scaleBefore = new Gain(scaleFactor);
      const reciprocal = new Pow(-1);
      const scaleAfter = new Gain(scaleFactor);
      source.chain(scaleBefore, reciprocal, scaleAfter);
      source = scaleAfter;
      sourceValue = 1 / sourceValue;
      nodes = [scaleBefore, reciprocal, scaleAfter];
    }
    if (!ratio) {
      if (signal.getValueAtTime(now) !== 0) {
        ratio = signal.getValueAtTime(now) / sourceValue;
      } else {
        ratio = 0;
      }
    }
    const ratioSignal = new Gain(ratio);
    source.connect(ratioSignal);
    ratioSignal.connect(signal._param);
    nodes.push(ratioSignal);
    this._syncedSignals.push({
      initial: signal.value,
      nodes,
      signal
    });
    signal.value = 0;
    return this;
  }
  unsyncSignal(signal) {
    for (let i = this._syncedSignals.length - 1;i >= 0; i--) {
      const syncedSignal = this._syncedSignals[i];
      if (syncedSignal.signal === signal) {
        syncedSignal.nodes.forEach((node) => node.dispose());
        syncedSignal.signal.value = syncedSignal.initial;
        this._syncedSignals.splice(i, 1);
      }
    }
    return this;
  }
  dispose() {
    super.dispose();
    this._clock.dispose();
    writable(this, "bpm");
    this._timeline.dispose();
    this._repeatedEvents.dispose();
    return this;
  }
}
Emitter.mixin(TransportClass);
onContextInit((context2) => {
  context2.transport = new TransportClass({ context: context2 });
});
onContextClose((context2) => {
  context2.transport.dispose();
});

// ../../node_modules/tone/build/esm/source/Source.js
class Source extends ToneAudioNode {
  constructor(options) {
    super(options);
    this.input = undefined;
    this._state = new StateTimeline("stopped");
    this._synced = false;
    this._scheduled = [];
    this._syncedStart = noOp;
    this._syncedStop = noOp;
    this._state.memory = 100;
    this._state.increasing = true;
    this._volume = this.output = new Volume({
      context: this.context,
      mute: options.mute,
      volume: options.volume
    });
    this.volume = this._volume.volume;
    readOnly(this, "volume");
    this.onstop = options.onstop;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: false,
      onstop: noOp,
      volume: 0
    });
  }
  get state() {
    if (this._synced) {
      if (this.context.transport.state === "started") {
        return this._state.getValueAtTime(this.context.transport.seconds);
      } else {
        return "stopped";
      }
    } else {
      return this._state.getValueAtTime(this.now());
    }
  }
  get mute() {
    return this._volume.mute;
  }
  set mute(mute) {
    this._volume.mute = mute;
  }
  _clampToCurrentTime(time) {
    if (this._synced) {
      return time;
    } else {
      return Math.max(time, this.context.currentTime);
    }
  }
  start(time, offset, duration) {
    let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
    computedTime = this._clampToCurrentTime(computedTime);
    if (!this._synced && this._state.getValueAtTime(computedTime) === "started") {
      assert(GT(computedTime, this._state.get(computedTime).time), "Start time must be strictly greater than previous start time");
      this._state.cancel(computedTime);
      this._state.setStateAtTime("started", computedTime);
      this.log("restart", computedTime);
      this.restart(computedTime, offset, duration);
    } else {
      this.log("start", computedTime);
      this._state.setStateAtTime("started", computedTime);
      if (this._synced) {
        const event = this._state.get(computedTime);
        if (event) {
          event.offset = this.toSeconds(defaultArg(offset, 0));
          event.duration = duration ? this.toSeconds(duration) : undefined;
        }
        const sched = this.context.transport.schedule((t) => {
          this._start(t, offset, duration);
        }, computedTime);
        this._scheduled.push(sched);
        if (this.context.transport.state === "started" && this.context.transport.getSecondsAtTime(this.immediate()) > computedTime) {
          this._syncedStart(this.now(), this.context.transport.seconds);
        }
      } else {
        assertContextRunning(this.context);
        this._start(computedTime, offset, duration);
      }
    }
    return this;
  }
  stop(time) {
    let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
    computedTime = this._clampToCurrentTime(computedTime);
    if (this._state.getValueAtTime(computedTime) === "started" || isDefined(this._state.getNextState("started", computedTime))) {
      this.log("stop", computedTime);
      if (!this._synced) {
        this._stop(computedTime);
      } else {
        const sched = this.context.transport.schedule(this._stop.bind(this), computedTime);
        this._scheduled.push(sched);
      }
      this._state.cancel(computedTime);
      this._state.setStateAtTime("stopped", computedTime);
    }
    return this;
  }
  restart(time, offset, duration) {
    time = this.toSeconds(time);
    if (this._state.getValueAtTime(time) === "started") {
      this._state.cancel(time);
      this._restart(time, offset, duration);
    }
    return this;
  }
  sync() {
    if (!this._synced) {
      this._synced = true;
      this._syncedStart = (time, offset) => {
        if (GT(offset, 0)) {
          const stateEvent = this._state.get(offset);
          if (stateEvent && stateEvent.state === "started" && stateEvent.time !== offset) {
            const startOffset = offset - this.toSeconds(stateEvent.time);
            let duration;
            if (stateEvent.duration) {
              duration = this.toSeconds(stateEvent.duration) - startOffset;
            }
            this._start(time, this.toSeconds(stateEvent.offset) + startOffset, duration);
          }
        }
      };
      this._syncedStop = (time) => {
        const seconds = this.context.transport.getSecondsAtTime(Math.max(time - this.sampleTime, 0));
        if (this._state.getValueAtTime(seconds) === "started") {
          this._stop(time);
        }
      };
      this.context.transport.on("start", this._syncedStart);
      this.context.transport.on("loopStart", this._syncedStart);
      this.context.transport.on("stop", this._syncedStop);
      this.context.transport.on("pause", this._syncedStop);
      this.context.transport.on("loopEnd", this._syncedStop);
    }
    return this;
  }
  unsync() {
    if (this._synced) {
      this.context.transport.off("stop", this._syncedStop);
      this.context.transport.off("pause", this._syncedStop);
      this.context.transport.off("loopEnd", this._syncedStop);
      this.context.transport.off("start", this._syncedStart);
      this.context.transport.off("loopStart", this._syncedStart);
    }
    this._synced = false;
    this._scheduled.forEach((id) => this.context.transport.clear(id));
    this._scheduled = [];
    this._state.cancel(0);
    this._stop(0);
    return this;
  }
  dispose() {
    super.dispose();
    this.onstop = noOp;
    this.unsync();
    this._volume.dispose();
    this._state.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/source/buffer/ToneBufferSource.js
class ToneBufferSource extends OneShotSource {
  constructor() {
    const options = optionsFromArguments(ToneBufferSource.getDefaults(), arguments, ["url", "onload"]);
    super(options);
    this.name = "ToneBufferSource";
    this._source = this.context.createBufferSource();
    this._internalChannels = [this._source];
    this._sourceStarted = false;
    this._sourceStopped = false;
    connect(this._source, this._gainNode);
    this._source.onended = () => this._stopSource();
    this.playbackRate = new Param({
      context: this.context,
      param: this._source.playbackRate,
      units: "positive",
      value: options.playbackRate
    });
    this.loop = options.loop;
    this.loopStart = options.loopStart;
    this.loopEnd = options.loopEnd;
    this._buffer = new ToneAudioBuffer(options.url, options.onload, options.onerror);
    this._internalChannels.push(this._source);
  }
  static getDefaults() {
    return Object.assign(OneShotSource.getDefaults(), {
      url: new ToneAudioBuffer,
      loop: false,
      loopEnd: 0,
      loopStart: 0,
      onload: noOp,
      onerror: noOp,
      playbackRate: 1
    });
  }
  get fadeIn() {
    return this._fadeIn;
  }
  set fadeIn(t) {
    this._fadeIn = t;
  }
  get fadeOut() {
    return this._fadeOut;
  }
  set fadeOut(t) {
    this._fadeOut = t;
  }
  get curve() {
    return this._curve;
  }
  set curve(t) {
    this._curve = t;
  }
  start(time, offset, duration, gain = 1) {
    assert(this.buffer.loaded, "buffer is either not set or not loaded");
    const computedTime = this.toSeconds(time);
    this._startGain(computedTime, gain);
    if (this.loop) {
      offset = defaultArg(offset, this.loopStart);
    } else {
      offset = defaultArg(offset, 0);
    }
    let computedOffset = Math.max(this.toSeconds(offset), 0);
    if (this.loop) {
      const loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration;
      const loopStart = this.toSeconds(this.loopStart);
      const loopDuration = loopEnd - loopStart;
      if (GTE(computedOffset, loopEnd)) {
        computedOffset = (computedOffset - loopStart) % loopDuration + loopStart;
      }
      if (EQ(computedOffset, this.buffer.duration)) {
        computedOffset = 0;
      }
    }
    this._source.buffer = this.buffer.get();
    this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration;
    if (LT(computedOffset, this.buffer.duration)) {
      this._sourceStarted = true;
      this._source.start(computedTime, computedOffset);
    }
    if (isDefined(duration)) {
      let computedDur = this.toSeconds(duration);
      computedDur = Math.max(computedDur, 0);
      this.stop(computedTime + computedDur);
    }
    return this;
  }
  _stopSource(time) {
    if (!this._sourceStopped && this._sourceStarted) {
      this._sourceStopped = true;
      this._source.stop(this.toSeconds(time));
      this._onended();
    }
  }
  get loopStart() {
    return this._source.loopStart;
  }
  set loopStart(loopStart) {
    this._source.loopStart = this.toSeconds(loopStart);
  }
  get loopEnd() {
    return this._source.loopEnd;
  }
  set loopEnd(loopEnd) {
    this._source.loopEnd = this.toSeconds(loopEnd);
  }
  get buffer() {
    return this._buffer;
  }
  set buffer(buffer) {
    this._buffer.set(buffer);
  }
  get loop() {
    return this._source.loop;
  }
  set loop(loop) {
    this._source.loop = loop;
    if (this._sourceStarted) {
      this.cancelStop();
    }
  }
  dispose() {
    super.dispose();
    this._source.onended = null;
    this._source.disconnect();
    this._buffer.dispose();
    this.playbackRate.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/source/Noise.js
var BUFFER_LENGTH = 44100 * 5;
// ../../node_modules/tone/build/esm/source/oscillator/OscillatorInterface.js
function generateWaveform(instance, length) {
  return __awaiter(this, undefined, undefined, function* () {
    const duration = length / instance.context.sampleRate;
    const context2 = new OfflineContext(1, duration, instance.context.sampleRate);
    const clone = new instance.constructor(Object.assign(instance.get(), {
      frequency: 2 / duration,
      detune: 0,
      context: context2
    })).toDestination();
    clone.start(0);
    const buffer = yield context2.render();
    return buffer.getChannelData(0);
  });
}

// ../../node_modules/tone/build/esm/source/oscillator/ToneOscillatorNode.js
class ToneOscillatorNode extends OneShotSource {
  constructor() {
    const options = optionsFromArguments(ToneOscillatorNode.getDefaults(), arguments, ["frequency", "type"]);
    super(options);
    this.name = "ToneOscillatorNode";
    this._oscillator = this.context.createOscillator();
    this._internalChannels = [this._oscillator];
    connect(this._oscillator, this._gainNode);
    this.type = options.type;
    this.frequency = new Param({
      context: this.context,
      param: this._oscillator.frequency,
      units: "frequency",
      value: options.frequency
    });
    this.detune = new Param({
      context: this.context,
      param: this._oscillator.detune,
      units: "cents",
      value: options.detune
    });
    readOnly(this, ["frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(OneShotSource.getDefaults(), {
      detune: 0,
      frequency: 440,
      type: "sine"
    });
  }
  start(time) {
    const computedTime = this.toSeconds(time);
    this.log("start", computedTime);
    this._startGain(computedTime);
    this._oscillator.start(computedTime);
    return this;
  }
  _stopSource(time) {
    this._oscillator.stop(time);
  }
  setPeriodicWave(periodicWave) {
    this._oscillator.setPeriodicWave(periodicWave);
    return this;
  }
  get type() {
    return this._oscillator.type;
  }
  set type(type) {
    this._oscillator.type = type;
  }
  dispose() {
    super.dispose();
    if (this.state === "started") {
      this.stop();
    }
    this._oscillator.disconnect();
    this.frequency.dispose();
    this.detune.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/source/oscillator/Oscillator.js
class Oscillator extends Source {
  constructor() {
    const options = optionsFromArguments(Oscillator.getDefaults(), arguments, ["frequency", "type"]);
    super(options);
    this.name = "Oscillator";
    this._oscillator = null;
    this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    });
    readOnly(this, "frequency");
    this.detune = new Signal({
      context: this.context,
      units: "cents",
      value: options.detune
    });
    readOnly(this, "detune");
    this._partials = options.partials;
    this._partialCount = options.partialCount;
    this._type = options.type;
    if (options.partialCount && options.type !== "custom") {
      this._type = this.baseType + options.partialCount.toString();
    }
    this.phase = options.phase;
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      detune: 0,
      frequency: 440,
      partialCount: 0,
      partials: [],
      phase: 0,
      type: "sine"
    });
  }
  _start(time) {
    const computedTime = this.toSeconds(time);
    const oscillator = new ToneOscillatorNode({
      context: this.context,
      onended: () => this.onstop(this)
    });
    this._oscillator = oscillator;
    if (this._wave) {
      this._oscillator.setPeriodicWave(this._wave);
    } else {
      this._oscillator.type = this._type;
    }
    this._oscillator.connect(this.output);
    this.frequency.connect(this._oscillator.frequency);
    this.detune.connect(this._oscillator.detune);
    this._oscillator.start(computedTime);
  }
  _stop(time) {
    const computedTime = this.toSeconds(time);
    if (this._oscillator) {
      this._oscillator.stop(computedTime);
    }
  }
  _restart(time) {
    const computedTime = this.toSeconds(time);
    this.log("restart", computedTime);
    if (this._oscillator) {
      this._oscillator.cancelStop();
    }
    this._state.cancel(computedTime);
    return this;
  }
  syncFrequency() {
    this.context.transport.syncSignal(this.frequency);
    return this;
  }
  unsyncFrequency() {
    this.context.transport.unsyncSignal(this.frequency);
    return this;
  }
  _getCachedPeriodicWave() {
    if (this._type === "custom") {
      const oscProps = Oscillator._periodicWaveCache.find((description) => {
        return description.phase === this._phase && deepEquals(description.partials, this._partials);
      });
      return oscProps;
    } else {
      const oscProps = Oscillator._periodicWaveCache.find((description) => {
        return description.type === this._type && description.phase === this._phase;
      });
      this._partialCount = oscProps ? oscProps.partialCount : this._partialCount;
      return oscProps;
    }
  }
  get type() {
    return this._type;
  }
  set type(type) {
    this._type = type;
    const isBasicType = ["sine", "square", "sawtooth", "triangle"].indexOf(type) !== -1;
    if (this._phase === 0 && isBasicType) {
      this._wave = undefined;
      this._partialCount = 0;
      if (this._oscillator !== null) {
        this._oscillator.type = type;
      }
    } else {
      const cache = this._getCachedPeriodicWave();
      if (isDefined(cache)) {
        const { partials, wave } = cache;
        this._wave = wave;
        this._partials = partials;
        if (this._oscillator !== null) {
          this._oscillator.setPeriodicWave(this._wave);
        }
      } else {
        const [real, imag] = this._getRealImaginary(type, this._phase);
        const periodicWave = this.context.createPeriodicWave(real, imag);
        this._wave = periodicWave;
        if (this._oscillator !== null) {
          this._oscillator.setPeriodicWave(this._wave);
        }
        Oscillator._periodicWaveCache.push({
          imag,
          partialCount: this._partialCount,
          partials: this._partials,
          phase: this._phase,
          real,
          type: this._type,
          wave: this._wave
        });
        if (Oscillator._periodicWaveCache.length > 100) {
          Oscillator._periodicWaveCache.shift();
        }
      }
    }
  }
  get baseType() {
    return this._type.replace(this.partialCount.toString(), "");
  }
  set baseType(baseType) {
    if (this.partialCount && this._type !== "custom" && baseType !== "custom") {
      this.type = baseType + this.partialCount;
    } else {
      this.type = baseType;
    }
  }
  get partialCount() {
    return this._partialCount;
  }
  set partialCount(p) {
    assertRange(p, 0);
    let type = this._type;
    const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
    if (partial) {
      type = partial[1];
    }
    if (this._type !== "custom") {
      if (p === 0) {
        this.type = type;
      } else {
        this.type = type + p.toString();
      }
    } else {
      const fullPartials = new Float32Array(p);
      this._partials.forEach((v, i) => fullPartials[i] = v);
      this._partials = Array.from(fullPartials);
      this.type = this._type;
    }
  }
  _getRealImaginary(type, phase) {
    const fftSize = 4096;
    let periodicWaveSize = fftSize / 2;
    const real = new Float32Array(periodicWaveSize);
    const imag = new Float32Array(periodicWaveSize);
    let partialCount = 1;
    if (type === "custom") {
      partialCount = this._partials.length + 1;
      this._partialCount = this._partials.length;
      periodicWaveSize = partialCount;
      if (this._partials.length === 0) {
        return [real, imag];
      }
    } else {
      const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(type);
      if (partial) {
        partialCount = parseInt(partial[2], 10) + 1;
        this._partialCount = parseInt(partial[2], 10);
        type = partial[1];
        partialCount = Math.max(partialCount, 2);
        periodicWaveSize = partialCount;
      } else {
        this._partialCount = 0;
      }
      this._partials = [];
    }
    for (let n = 1;n < periodicWaveSize; ++n) {
      const piFactor = 2 / (n * Math.PI);
      let b;
      switch (type) {
        case "sine":
          b = n <= partialCount ? 1 : 0;
          this._partials[n - 1] = b;
          break;
        case "square":
          b = n & 1 ? 2 * piFactor : 0;
          this._partials[n - 1] = b;
          break;
        case "sawtooth":
          b = piFactor * (n & 1 ? 1 : -1);
          this._partials[n - 1] = b;
          break;
        case "triangle":
          if (n & 1) {
            b = 2 * (piFactor * piFactor) * (n - 1 >> 1 & 1 ? -1 : 1);
          } else {
            b = 0;
          }
          this._partials[n - 1] = b;
          break;
        case "custom":
          b = this._partials[n - 1];
          break;
        default:
          throw new TypeError("Oscillator: invalid type: " + type);
      }
      if (b !== 0) {
        real[n] = -b * Math.sin(phase * n);
        imag[n] = b * Math.cos(phase * n);
      } else {
        real[n] = 0;
        imag[n] = 0;
      }
    }
    return [real, imag];
  }
  _inverseFFT(real, imag, phase) {
    let sum = 0;
    const len = real.length;
    for (let i = 0;i < len; i++) {
      sum += real[i] * Math.cos(i * phase) + imag[i] * Math.sin(i * phase);
    }
    return sum;
  }
  getInitialValue() {
    const [real, imag] = this._getRealImaginary(this._type, 0);
    let maxValue = 0;
    const twoPi = Math.PI * 2;
    const testPositions = 32;
    for (let i = 0;i < testPositions; i++) {
      maxValue = Math.max(this._inverseFFT(real, imag, i / testPositions * twoPi), maxValue);
    }
    return clamp(-this._inverseFFT(real, imag, this._phase) / maxValue, -1, 1);
  }
  get partials() {
    return this._partials.slice(0, this.partialCount);
  }
  set partials(partials) {
    this._partials = partials;
    this._partialCount = this._partials.length;
    if (partials.length) {
      this.type = "custom";
    }
  }
  get phase() {
    return this._phase * (180 / Math.PI);
  }
  set phase(phase) {
    this._phase = phase * Math.PI / 180;
    this.type = this._type;
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    super.dispose();
    if (this._oscillator !== null) {
      this._oscillator.dispose();
    }
    this._wave = undefined;
    this.frequency.dispose();
    this.detune.dispose();
    return this;
  }
}
Oscillator._periodicWaveCache = [];
// ../../node_modules/tone/build/esm/signal/AudioToGain.js
class AudioToGain extends SignalOperator {
  constructor() {
    super(...arguments);
    this.name = "AudioToGain";
    this._norm = new WaveShaper({
      context: this.context,
      mapping: (x) => (x + 1) / 2
    });
    this.input = this._norm;
    this.output = this._norm;
  }
  dispose() {
    super.dispose();
    this._norm.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/signal/Multiply.js
class Multiply extends Signal {
  constructor() {
    const options = optionsFromArguments(Multiply.getDefaults(), arguments, ["value"]);
    super(options);
    this.name = "Multiply";
    this.override = false;
    this._mult = this.input = this.output = new Gain({
      context: this.context,
      minValue: options.minValue,
      maxValue: options.maxValue
    });
    this.factor = this._param = this._mult.gain;
    this.factor.setValueAtTime(options.value, 0);
  }
  static getDefaults() {
    return Object.assign(Signal.getDefaults(), {
      value: 0
    });
  }
  dispose() {
    super.dispose();
    this._mult.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/source/oscillator/AMOscillator.js
class AMOscillator extends Source {
  constructor() {
    const options = optionsFromArguments(AMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
    super(options);
    this.name = "AMOscillator";
    this._modulationScale = new AudioToGain({ context: this.context });
    this._modulationNode = new Gain({
      context: this.context
    });
    this._carrier = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: options.frequency,
      onstop: () => this.onstop(this),
      phase: options.phase,
      type: options.type
    });
    this.frequency = this._carrier.frequency, this.detune = this._carrier.detune;
    this._modulator = new Oscillator({
      context: this.context,
      phase: options.phase,
      type: options.modulationType
    });
    this.harmonicity = new Multiply({
      context: this.context,
      units: "positive",
      value: options.harmonicity
    });
    this.frequency.chain(this.harmonicity, this._modulator.frequency);
    this._modulator.chain(this._modulationScale, this._modulationNode.gain);
    this._carrier.chain(this._modulationNode, this.output);
    readOnly(this, ["frequency", "detune", "harmonicity"]);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), {
      harmonicity: 1,
      modulationType: "square"
    });
  }
  _start(time) {
    this._modulator.start(time);
    this._carrier.start(time);
  }
  _stop(time) {
    this._modulator.stop(time);
    this._carrier.stop(time);
  }
  _restart(time) {
    this._modulator.restart(time);
    this._carrier.restart(time);
  }
  get type() {
    return this._carrier.type;
  }
  set type(type) {
    this._carrier.type = type;
  }
  get baseType() {
    return this._carrier.baseType;
  }
  set baseType(baseType) {
    this._carrier.baseType = baseType;
  }
  get partialCount() {
    return this._carrier.partialCount;
  }
  set partialCount(partialCount) {
    this._carrier.partialCount = partialCount;
  }
  get modulationType() {
    return this._modulator.type;
  }
  set modulationType(type) {
    this._modulator.type = type;
  }
  get phase() {
    return this._carrier.phase;
  }
  set phase(phase) {
    this._carrier.phase = phase;
    this._modulator.phase = phase;
  }
  get partials() {
    return this._carrier.partials;
  }
  set partials(partials) {
    this._carrier.partials = partials;
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    super.dispose();
    this.frequency.dispose();
    this.detune.dispose();
    this.harmonicity.dispose();
    this._carrier.dispose();
    this._modulator.dispose();
    this._modulationNode.dispose();
    this._modulationScale.dispose();
    return this;
  }
}
// ../../node_modules/tone/build/esm/source/oscillator/FMOscillator.js
class FMOscillator extends Source {
  constructor() {
    const options = optionsFromArguments(FMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
    super(options);
    this.name = "FMOscillator";
    this._modulationNode = new Gain({
      context: this.context,
      gain: 0
    });
    this._carrier = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: 0,
      onstop: () => this.onstop(this),
      phase: options.phase,
      type: options.type
    });
    this.detune = this._carrier.detune;
    this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    });
    this._modulator = new Oscillator({
      context: this.context,
      phase: options.phase,
      type: options.modulationType
    });
    this.harmonicity = new Multiply({
      context: this.context,
      units: "positive",
      value: options.harmonicity
    });
    this.modulationIndex = new Multiply({
      context: this.context,
      units: "positive",
      value: options.modulationIndex
    });
    this.frequency.connect(this._carrier.frequency);
    this.frequency.chain(this.harmonicity, this._modulator.frequency);
    this.frequency.chain(this.modulationIndex, this._modulationNode);
    this._modulator.connect(this._modulationNode.gain);
    this._modulationNode.connect(this._carrier.frequency);
    this._carrier.connect(this.output);
    this.detune.connect(this._modulator.detune);
    readOnly(this, [
      "modulationIndex",
      "frequency",
      "detune",
      "harmonicity"
    ]);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), {
      harmonicity: 1,
      modulationIndex: 2,
      modulationType: "square"
    });
  }
  _start(time) {
    this._modulator.start(time);
    this._carrier.start(time);
  }
  _stop(time) {
    this._modulator.stop(time);
    this._carrier.stop(time);
  }
  _restart(time) {
    this._modulator.restart(time);
    this._carrier.restart(time);
    return this;
  }
  get type() {
    return this._carrier.type;
  }
  set type(type) {
    this._carrier.type = type;
  }
  get baseType() {
    return this._carrier.baseType;
  }
  set baseType(baseType) {
    this._carrier.baseType = baseType;
  }
  get partialCount() {
    return this._carrier.partialCount;
  }
  set partialCount(partialCount) {
    this._carrier.partialCount = partialCount;
  }
  get modulationType() {
    return this._modulator.type;
  }
  set modulationType(type) {
    this._modulator.type = type;
  }
  get phase() {
    return this._carrier.phase;
  }
  set phase(phase) {
    this._carrier.phase = phase;
    this._modulator.phase = phase;
  }
  get partials() {
    return this._carrier.partials;
  }
  set partials(partials) {
    this._carrier.partials = partials;
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    super.dispose();
    this.frequency.dispose();
    this.harmonicity.dispose();
    this._carrier.dispose();
    this._modulator.dispose();
    this._modulationNode.dispose();
    this.modulationIndex.dispose();
    return this;
  }
}
// ../../node_modules/tone/build/esm/source/oscillator/PulseOscillator.js
class PulseOscillator extends Source {
  constructor() {
    const options = optionsFromArguments(PulseOscillator.getDefaults(), arguments, ["frequency", "width"]);
    super(options);
    this.name = "PulseOscillator";
    this._widthGate = new Gain({
      context: this.context,
      gain: 0
    });
    this._thresh = new WaveShaper({
      context: this.context,
      mapping: (val) => val <= 0 ? -1 : 1
    });
    this.width = new Signal({
      context: this.context,
      units: "audioRange",
      value: options.width
    });
    this._triangle = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: options.frequency,
      onstop: () => this.onstop(this),
      phase: options.phase,
      type: "triangle"
    });
    this.frequency = this._triangle.frequency;
    this.detune = this._triangle.detune;
    this._triangle.chain(this._thresh, this.output);
    this.width.chain(this._widthGate, this._thresh);
    readOnly(this, ["width", "frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      detune: 0,
      frequency: 440,
      phase: 0,
      type: "pulse",
      width: 0.2
    });
  }
  _start(time) {
    time = this.toSeconds(time);
    this._triangle.start(time);
    this._widthGate.gain.setValueAtTime(1, time);
  }
  _stop(time) {
    time = this.toSeconds(time);
    this._triangle.stop(time);
    this._widthGate.gain.cancelScheduledValues(time);
    this._widthGate.gain.setValueAtTime(0, time);
  }
  _restart(time) {
    this._triangle.restart(time);
    this._widthGate.gain.cancelScheduledValues(time);
    this._widthGate.gain.setValueAtTime(1, time);
  }
  get phase() {
    return this._triangle.phase;
  }
  set phase(phase) {
    this._triangle.phase = phase;
  }
  get type() {
    return "pulse";
  }
  get baseType() {
    return "pulse";
  }
  get partials() {
    return [];
  }
  get partialCount() {
    return 0;
  }
  set carrierType(type) {
    this._triangle.type = type;
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    super.dispose();
    this._triangle.dispose();
    this.width.dispose();
    this._widthGate.dispose();
    this._thresh.dispose();
    return this;
  }
}
// ../../node_modules/tone/build/esm/source/oscillator/FatOscillator.js
class FatOscillator extends Source {
  constructor() {
    const options = optionsFromArguments(FatOscillator.getDefaults(), arguments, ["frequency", "type", "spread"]);
    super(options);
    this.name = "FatOscillator";
    this._oscillators = [];
    this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    });
    this.detune = new Signal({
      context: this.context,
      units: "cents",
      value: options.detune
    });
    this._spread = options.spread;
    this._type = options.type;
    this._phase = options.phase;
    this._partials = options.partials;
    this._partialCount = options.partialCount;
    this.count = options.count;
    readOnly(this, ["frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), {
      count: 3,
      spread: 20,
      type: "sawtooth"
    });
  }
  _start(time) {
    time = this.toSeconds(time);
    this._forEach((osc) => osc.start(time));
  }
  _stop(time) {
    time = this.toSeconds(time);
    this._forEach((osc) => osc.stop(time));
  }
  _restart(time) {
    this._forEach((osc) => osc.restart(time));
  }
  _forEach(iterator) {
    for (let i = 0;i < this._oscillators.length; i++) {
      iterator(this._oscillators[i], i);
    }
  }
  get type() {
    return this._type;
  }
  set type(type) {
    this._type = type;
    this._forEach((osc) => osc.type = type);
  }
  get spread() {
    return this._spread;
  }
  set spread(spread) {
    this._spread = spread;
    if (this._oscillators.length > 1) {
      const start = -spread / 2;
      const step = spread / (this._oscillators.length - 1);
      this._forEach((osc, i) => osc.detune.value = start + step * i);
    }
  }
  get count() {
    return this._oscillators.length;
  }
  set count(count) {
    assertRange(count, 1);
    if (this._oscillators.length !== count) {
      this._forEach((osc) => osc.dispose());
      this._oscillators = [];
      for (let i = 0;i < count; i++) {
        const osc = new Oscillator({
          context: this.context,
          volume: -6 - count * 1.1,
          type: this._type,
          phase: this._phase + i / count * 360,
          partialCount: this._partialCount,
          onstop: i === 0 ? () => this.onstop(this) : noOp
        });
        if (this.type === "custom") {
          osc.partials = this._partials;
        }
        this.frequency.connect(osc.frequency);
        this.detune.connect(osc.detune);
        osc.detune.overridden = false;
        osc.connect(this.output);
        this._oscillators[i] = osc;
      }
      this.spread = this._spread;
      if (this.state === "started") {
        this._forEach((osc) => osc.start());
      }
    }
  }
  get phase() {
    return this._phase;
  }
  set phase(phase) {
    this._phase = phase;
    this._forEach((osc, i) => osc.phase = this._phase + i / this.count * 360);
  }
  get baseType() {
    return this._oscillators[0].baseType;
  }
  set baseType(baseType) {
    this._forEach((osc) => osc.baseType = baseType);
    this._type = this._oscillators[0].type;
  }
  get partials() {
    return this._oscillators[0].partials;
  }
  set partials(partials) {
    this._partials = partials;
    this._partialCount = this._partials.length;
    if (partials.length) {
      this._type = "custom";
      this._forEach((osc) => osc.partials = partials);
    }
  }
  get partialCount() {
    return this._oscillators[0].partialCount;
  }
  set partialCount(partialCount) {
    this._partialCount = partialCount;
    this._forEach((osc) => osc.partialCount = partialCount);
    this._type = this._oscillators[0].type;
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    super.dispose();
    this.frequency.dispose();
    this.detune.dispose();
    this._forEach((osc) => osc.dispose());
    return this;
  }
}
// ../../node_modules/tone/build/esm/source/oscillator/PWMOscillator.js
class PWMOscillator extends Source {
  constructor() {
    const options = optionsFromArguments(PWMOscillator.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
    super(options);
    this.name = "PWMOscillator";
    this.sourceType = "pwm";
    this._scale = new Multiply({
      context: this.context,
      value: 2
    });
    this._pulse = new PulseOscillator({
      context: this.context,
      frequency: options.modulationFrequency
    });
    this._pulse.carrierType = "sine";
    this.modulationFrequency = this._pulse.frequency;
    this._modulator = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: options.frequency,
      onstop: () => this.onstop(this),
      phase: options.phase
    });
    this.frequency = this._modulator.frequency;
    this.detune = this._modulator.detune;
    this._modulator.chain(this._scale, this._pulse.width);
    this._pulse.connect(this.output);
    readOnly(this, ["modulationFrequency", "frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      detune: 0,
      frequency: 440,
      modulationFrequency: 0.4,
      phase: 0,
      type: "pwm"
    });
  }
  _start(time) {
    time = this.toSeconds(time);
    this._modulator.start(time);
    this._pulse.start(time);
  }
  _stop(time) {
    time = this.toSeconds(time);
    this._modulator.stop(time);
    this._pulse.stop(time);
  }
  _restart(time) {
    this._modulator.restart(time);
    this._pulse.restart(time);
  }
  get type() {
    return "pwm";
  }
  get baseType() {
    return "pwm";
  }
  get partials() {
    return [];
  }
  get partialCount() {
    return 0;
  }
  get phase() {
    return this._modulator.phase;
  }
  set phase(phase) {
    this._modulator.phase = phase;
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    super.dispose();
    this._pulse.dispose();
    this._scale.dispose();
    this._modulator.dispose();
    return this;
  }
}
// ../../node_modules/tone/build/esm/source/oscillator/OmniOscillator.js
var OmniOscillatorSourceMap = {
  am: AMOscillator,
  fat: FatOscillator,
  fm: FMOscillator,
  oscillator: Oscillator,
  pulse: PulseOscillator,
  pwm: PWMOscillator
};

class OmniOscillator extends Source {
  constructor() {
    const options = optionsFromArguments(OmniOscillator.getDefaults(), arguments, ["frequency", "type"]);
    super(options);
    this.name = "OmniOscillator";
    this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    });
    this.detune = new Signal({
      context: this.context,
      units: "cents",
      value: options.detune
    });
    readOnly(this, ["frequency", "detune"]);
    this.set(options);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), FMOscillator.getDefaults(), AMOscillator.getDefaults(), FatOscillator.getDefaults(), PulseOscillator.getDefaults(), PWMOscillator.getDefaults());
  }
  _start(time) {
    this._oscillator.start(time);
  }
  _stop(time) {
    this._oscillator.stop(time);
  }
  _restart(time) {
    this._oscillator.restart(time);
    return this;
  }
  get type() {
    let prefix = "";
    if (["am", "fm", "fat"].some((p) => this._sourceType === p)) {
      prefix = this._sourceType;
    }
    return prefix + this._oscillator.type;
  }
  set type(type) {
    if (type.substr(0, 2) === "fm") {
      this._createNewOscillator("fm");
      this._oscillator = this._oscillator;
      this._oscillator.type = type.substr(2);
    } else if (type.substr(0, 2) === "am") {
      this._createNewOscillator("am");
      this._oscillator = this._oscillator;
      this._oscillator.type = type.substr(2);
    } else if (type.substr(0, 3) === "fat") {
      this._createNewOscillator("fat");
      this._oscillator = this._oscillator;
      this._oscillator.type = type.substr(3);
    } else if (type === "pwm") {
      this._createNewOscillator("pwm");
      this._oscillator = this._oscillator;
    } else if (type === "pulse") {
      this._createNewOscillator("pulse");
    } else {
      this._createNewOscillator("oscillator");
      this._oscillator = this._oscillator;
      this._oscillator.type = type;
    }
  }
  get partials() {
    return this._oscillator.partials;
  }
  set partials(partials) {
    if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm")) {
      this._oscillator.partials = partials;
    }
  }
  get partialCount() {
    return this._oscillator.partialCount;
  }
  set partialCount(partialCount) {
    if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm")) {
      this._oscillator.partialCount = partialCount;
    }
  }
  set(props) {
    if (Reflect.has(props, "type") && props.type) {
      this.type = props.type;
    }
    super.set(props);
    return this;
  }
  _createNewOscillator(oscType) {
    if (oscType !== this._sourceType) {
      this._sourceType = oscType;
      const OscConstructor = OmniOscillatorSourceMap[oscType];
      const now = this.now();
      if (this._oscillator) {
        const oldOsc = this._oscillator;
        oldOsc.stop(now);
        this.context.setTimeout(() => oldOsc.dispose(), this.blockTime);
      }
      this._oscillator = new OscConstructor({
        context: this.context
      });
      this.frequency.connect(this._oscillator.frequency);
      this.detune.connect(this._oscillator.detune);
      this._oscillator.connect(this.output);
      this._oscillator.onstop = () => this.onstop(this);
      if (this.state === "started") {
        this._oscillator.start(now);
      }
    }
  }
  get phase() {
    return this._oscillator.phase;
  }
  set phase(phase) {
    this._oscillator.phase = phase;
  }
  get sourceType() {
    return this._sourceType;
  }
  set sourceType(sType) {
    let baseType = "sine";
    if (this._oscillator.type !== "pwm" && this._oscillator.type !== "pulse") {
      baseType = this._oscillator.type;
    }
    if (sType === "fm") {
      this.type = "fm" + baseType;
    } else if (sType === "am") {
      this.type = "am" + baseType;
    } else if (sType === "fat") {
      this.type = "fat" + baseType;
    } else if (sType === "oscillator") {
      this.type = baseType;
    } else if (sType === "pulse") {
      this.type = "pulse";
    } else if (sType === "pwm") {
      this.type = "pwm";
    }
  }
  _getOscType(osc, sourceType) {
    return osc instanceof OmniOscillatorSourceMap[sourceType];
  }
  get baseType() {
    return this._oscillator.baseType;
  }
  set baseType(baseType) {
    if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm") && baseType !== "pulse" && baseType !== "pwm") {
      this._oscillator.baseType = baseType;
    }
  }
  get width() {
    if (this._getOscType(this._oscillator, "pulse")) {
      return this._oscillator.width;
    } else {
      return;
    }
  }
  get count() {
    if (this._getOscType(this._oscillator, "fat")) {
      return this._oscillator.count;
    } else {
      return;
    }
  }
  set count(count) {
    if (this._getOscType(this._oscillator, "fat") && isNumber(count)) {
      this._oscillator.count = count;
    }
  }
  get spread() {
    if (this._getOscType(this._oscillator, "fat")) {
      return this._oscillator.spread;
    } else {
      return;
    }
  }
  set spread(spread) {
    if (this._getOscType(this._oscillator, "fat") && isNumber(spread)) {
      this._oscillator.spread = spread;
    }
  }
  get modulationType() {
    if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) {
      return this._oscillator.modulationType;
    } else {
      return;
    }
  }
  set modulationType(mType) {
    if ((this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && isString(mType)) {
      this._oscillator.modulationType = mType;
    }
  }
  get modulationIndex() {
    if (this._getOscType(this._oscillator, "fm")) {
      return this._oscillator.modulationIndex;
    } else {
      return;
    }
  }
  get harmonicity() {
    if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) {
      return this._oscillator.harmonicity;
    } else {
      return;
    }
  }
  get modulationFrequency() {
    if (this._getOscType(this._oscillator, "pwm")) {
      return this._oscillator.modulationFrequency;
    } else {
      return;
    }
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    super.dispose();
    this.detune.dispose();
    this.frequency.dispose();
    this._oscillator.dispose();
    return this;
  }
}
// ../../node_modules/tone/build/esm/core/util/Decorator.js
function range(min, max = Infinity) {
  const valueMap = new WeakMap;
  return function(target, propertyKey) {
    Reflect.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: function() {
        return valueMap.get(this);
      },
      set: function(newValue) {
        assertRange(newValue, min, max);
        valueMap.set(this, newValue);
      }
    });
  };
}
function timeRange(min, max = Infinity) {
  const valueMap = new WeakMap;
  return function(target, propertyKey) {
    Reflect.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: function() {
        return valueMap.get(this);
      },
      set: function(newValue) {
        assertRange(this.toSeconds(newValue), min, max);
        valueMap.set(this, newValue);
      }
    });
  };
}

// ../../node_modules/tone/build/esm/source/buffer/Player.js
class Player extends Source {
  constructor() {
    const options = optionsFromArguments(Player.getDefaults(), arguments, [
      "url",
      "onload"
    ]);
    super(options);
    this.name = "Player";
    this._activeSources = new Set;
    this._buffer = new ToneAudioBuffer({
      onload: this._onload.bind(this, options.onload),
      onerror: options.onerror,
      reverse: options.reverse,
      url: options.url
    });
    this.autostart = options.autostart;
    this._loop = options.loop;
    this._loopStart = options.loopStart;
    this._loopEnd = options.loopEnd;
    this._playbackRate = options.playbackRate;
    this.fadeIn = options.fadeIn;
    this.fadeOut = options.fadeOut;
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      autostart: false,
      fadeIn: 0,
      fadeOut: 0,
      loop: false,
      loopEnd: 0,
      loopStart: 0,
      onload: noOp,
      onerror: noOp,
      playbackRate: 1,
      reverse: false
    });
  }
  load(url) {
    return __awaiter(this, undefined, undefined, function* () {
      yield this._buffer.load(url);
      this._onload();
      return this;
    });
  }
  _onload(callback = noOp) {
    callback();
    if (this.autostart) {
      this.start();
    }
  }
  _onSourceEnd(source) {
    this.onstop(this);
    this._activeSources.delete(source);
    if (this._activeSources.size === 0 && !this._synced && this._state.getValueAtTime(this.now()) === "started") {
      this._state.cancel(this.now());
      this._state.setStateAtTime("stopped", this.now());
    }
  }
  start(time, offset, duration) {
    super.start(time, offset, duration);
    return this;
  }
  _start(startTime, offset, duration) {
    if (this._loop) {
      offset = defaultArg(offset, this._loopStart);
    } else {
      offset = defaultArg(offset, 0);
    }
    const computedOffset = this.toSeconds(offset);
    const origDuration = duration;
    duration = defaultArg(duration, Math.max(this._buffer.duration - computedOffset, 0));
    let computedDuration = this.toSeconds(duration);
    computedDuration = computedDuration / this._playbackRate;
    startTime = this.toSeconds(startTime);
    const source = new ToneBufferSource({
      url: this._buffer,
      context: this.context,
      fadeIn: this.fadeIn,
      fadeOut: this.fadeOut,
      loop: this._loop,
      loopEnd: this._loopEnd,
      loopStart: this._loopStart,
      onended: this._onSourceEnd.bind(this),
      playbackRate: this._playbackRate
    }).connect(this.output);
    if (!this._loop && !this._synced) {
      this._state.cancel(startTime + computedDuration);
      this._state.setStateAtTime("stopped", startTime + computedDuration, {
        implicitEnd: true
      });
    }
    this._activeSources.add(source);
    if (this._loop && isUndef(origDuration)) {
      source.start(startTime, computedOffset);
    } else {
      source.start(startTime, computedOffset, computedDuration - this.toSeconds(this.fadeOut));
    }
  }
  _stop(time) {
    const computedTime = this.toSeconds(time);
    this._activeSources.forEach((source) => source.stop(computedTime));
  }
  restart(time, offset, duration) {
    super.restart(time, offset, duration);
    return this;
  }
  _restart(time, offset, duration) {
    var _a;
    (_a = [...this._activeSources].pop()) === null || _a === undefined || _a.stop(time);
    this._start(time, offset, duration);
  }
  seek(offset, when) {
    const computedTime = this.toSeconds(when);
    if (this._state.getValueAtTime(computedTime) === "started") {
      const computedOffset = this.toSeconds(offset);
      this._stop(computedTime);
      this._start(computedTime, computedOffset);
    }
    return this;
  }
  setLoopPoints(loopStart, loopEnd) {
    this.loopStart = loopStart;
    this.loopEnd = loopEnd;
    return this;
  }
  get loopStart() {
    return this._loopStart;
  }
  set loopStart(loopStart) {
    this._loopStart = loopStart;
    if (this.buffer.loaded) {
      assertRange(this.toSeconds(loopStart), 0, this.buffer.duration);
    }
    this._activeSources.forEach((source) => {
      source.loopStart = loopStart;
    });
  }
  get loopEnd() {
    return this._loopEnd;
  }
  set loopEnd(loopEnd) {
    this._loopEnd = loopEnd;
    if (this.buffer.loaded) {
      assertRange(this.toSeconds(loopEnd), 0, this.buffer.duration);
    }
    this._activeSources.forEach((source) => {
      source.loopEnd = loopEnd;
    });
  }
  get buffer() {
    return this._buffer;
  }
  set buffer(buffer) {
    this._buffer.set(buffer);
  }
  get loop() {
    return this._loop;
  }
  set loop(loop) {
    if (this._loop === loop) {
      return;
    }
    this._loop = loop;
    this._activeSources.forEach((source) => {
      source.loop = loop;
    });
    if (loop) {
      const stopEvent = this._state.getNextState("stopped", this.now());
      if (stopEvent) {
        this._state.cancel(stopEvent.time);
      }
    }
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(rate) {
    this._playbackRate = rate;
    const now = this.now();
    const stopEvent = this._state.getNextState("stopped", now);
    if (stopEvent && stopEvent.implicitEnd) {
      this._state.cancel(stopEvent.time);
      this._activeSources.forEach((source) => source.cancelStop());
    }
    this._activeSources.forEach((source) => {
      source.playbackRate.setValueAtTime(rate, now);
    });
  }
  get reverse() {
    return this._buffer.reverse;
  }
  set reverse(rev) {
    this._buffer.reverse = rev;
  }
  get loaded() {
    return this._buffer.loaded;
  }
  dispose() {
    super.dispose();
    this._activeSources.forEach((source) => source.dispose());
    this._activeSources.clear();
    this._buffer.dispose();
    return this;
  }
}
__decorate([
  timeRange(0)
], Player.prototype, "fadeIn", undefined);
__decorate([
  timeRange(0)
], Player.prototype, "fadeOut", undefined);
// ../../node_modules/tone/build/esm/component/envelope/Envelope.js
class Envelope extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Envelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
    super(options);
    this.name = "Envelope";
    this._sig = new Signal({
      context: this.context,
      value: 0
    });
    this.output = this._sig;
    this.input = undefined;
    this.attack = options.attack;
    this.decay = options.decay;
    this.sustain = options.sustain;
    this.release = options.release;
    this.attackCurve = options.attackCurve;
    this.releaseCurve = options.releaseCurve;
    this.decayCurve = options.decayCurve;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      attack: 0.01,
      attackCurve: "linear",
      decay: 0.1,
      decayCurve: "exponential",
      release: 1,
      releaseCurve: "exponential",
      sustain: 0.5
    });
  }
  get value() {
    return this.getValueAtTime(this.now());
  }
  _getCurve(curve, direction) {
    if (isString(curve)) {
      return curve;
    } else {
      let curveName;
      for (curveName in EnvelopeCurves) {
        if (EnvelopeCurves[curveName][direction] === curve) {
          return curveName;
        }
      }
      return curve;
    }
  }
  _setCurve(name, direction, curve) {
    if (isString(curve) && Reflect.has(EnvelopeCurves, curve)) {
      const curveDef = EnvelopeCurves[curve];
      if (isObject(curveDef)) {
        if (name !== "_decayCurve") {
          this[name] = curveDef[direction];
        }
      } else {
        this[name] = curveDef;
      }
    } else if (isArray(curve) && name !== "_decayCurve") {
      this[name] = curve;
    } else {
      throw new Error("Envelope: invalid curve: " + curve);
    }
  }
  get attackCurve() {
    return this._getCurve(this._attackCurve, "In");
  }
  set attackCurve(curve) {
    this._setCurve("_attackCurve", "In", curve);
  }
  get releaseCurve() {
    return this._getCurve(this._releaseCurve, "Out");
  }
  set releaseCurve(curve) {
    this._setCurve("_releaseCurve", "Out", curve);
  }
  get decayCurve() {
    return this._getCurve(this._decayCurve, "Out");
  }
  set decayCurve(curve) {
    this._setCurve("_decayCurve", "Out", curve);
  }
  triggerAttack(time, velocity = 1) {
    this.log("triggerAttack", time, velocity);
    time = this.toSeconds(time);
    const originalAttack = this.toSeconds(this.attack);
    let attack = originalAttack;
    const decay = this.toSeconds(this.decay);
    const currentValue = this.getValueAtTime(time);
    if (currentValue > 0) {
      const attackRate = 1 / attack;
      const remainingDistance = 1 - currentValue;
      attack = remainingDistance / attackRate;
    }
    if (attack < this.sampleTime) {
      this._sig.cancelScheduledValues(time);
      this._sig.setValueAtTime(velocity, time);
    } else if (this._attackCurve === "linear") {
      this._sig.linearRampTo(velocity, attack, time);
    } else if (this._attackCurve === "exponential") {
      this._sig.targetRampTo(velocity, attack, time);
    } else {
      this._sig.cancelAndHoldAtTime(time);
      let curve = this._attackCurve;
      for (let i = 1;i < curve.length; i++) {
        if (curve[i - 1] <= currentValue && currentValue <= curve[i]) {
          curve = this._attackCurve.slice(i);
          curve[0] = currentValue;
          break;
        }
      }
      this._sig.setValueCurveAtTime(curve, time, attack, velocity);
    }
    if (decay && this.sustain < 1) {
      const decayValue = velocity * this.sustain;
      const decayStart = time + attack;
      this.log("decay", decayStart);
      if (this._decayCurve === "linear") {
        this._sig.linearRampToValueAtTime(decayValue, decay + decayStart);
      } else {
        this._sig.exponentialApproachValueAtTime(decayValue, decayStart, decay);
      }
    }
    return this;
  }
  triggerRelease(time) {
    this.log("triggerRelease", time);
    time = this.toSeconds(time);
    const currentValue = this.getValueAtTime(time);
    if (currentValue > 0) {
      const release = this.toSeconds(this.release);
      if (release < this.sampleTime) {
        this._sig.setValueAtTime(0, time);
      } else if (this._releaseCurve === "linear") {
        this._sig.linearRampTo(0, release, time);
      } else if (this._releaseCurve === "exponential") {
        this._sig.targetRampTo(0, release, time);
      } else {
        assert(isArray(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array");
        this._sig.cancelAndHoldAtTime(time);
        this._sig.setValueCurveAtTime(this._releaseCurve, time, release, currentValue);
      }
    }
    return this;
  }
  getValueAtTime(time) {
    return this._sig.getValueAtTime(time);
  }
  triggerAttackRelease(duration, time, velocity = 1) {
    time = this.toSeconds(time);
    this.triggerAttack(time, velocity);
    this.triggerRelease(time + this.toSeconds(duration));
    return this;
  }
  cancel(after) {
    this._sig.cancelScheduledValues(this.toSeconds(after));
    return this;
  }
  connect(destination, outputNumber = 0, inputNumber = 0) {
    connectSignal(this, destination, outputNumber, inputNumber);
    return this;
  }
  asArray() {
    return __awaiter(this, arguments, undefined, function* (length = 1024) {
      const duration = length / this.context.sampleRate;
      const context2 = new OfflineContext(1, duration, this.context.sampleRate);
      const attackPortion = this.toSeconds(this.attack) + this.toSeconds(this.decay);
      const envelopeDuration = attackPortion + this.toSeconds(this.release);
      const sustainTime = envelopeDuration * 0.1;
      const totalDuration = envelopeDuration + sustainTime;
      const clone = new this.constructor(Object.assign(this.get(), {
        attack: duration * this.toSeconds(this.attack) / totalDuration,
        decay: duration * this.toSeconds(this.decay) / totalDuration,
        release: duration * this.toSeconds(this.release) / totalDuration,
        context: context2
      }));
      clone._sig.toDestination();
      clone.triggerAttackRelease(duration * (attackPortion + sustainTime) / totalDuration, 0);
      const buffer = yield context2.render();
      return buffer.getChannelData(0);
    });
  }
  dispose() {
    super.dispose();
    this._sig.dispose();
    return this;
  }
}
__decorate([
  timeRange(0)
], Envelope.prototype, "attack", undefined);
__decorate([
  timeRange(0)
], Envelope.prototype, "decay", undefined);
__decorate([
  range(0, 1)
], Envelope.prototype, "sustain", undefined);
__decorate([
  timeRange(0)
], Envelope.prototype, "release", undefined);
var EnvelopeCurves = (() => {
  const curveLen = 128;
  let i;
  let k;
  const cosineCurve = [];
  for (i = 0;i < curveLen; i++) {
    cosineCurve[i] = Math.sin(i / (curveLen - 1) * (Math.PI / 2));
  }
  const rippleCurve = [];
  const rippleCurveFreq = 6.4;
  for (i = 0;i < curveLen - 1; i++) {
    k = i / (curveLen - 1);
    const sineWave = Math.sin(k * (Math.PI * 2) * rippleCurveFreq - Math.PI / 2) + 1;
    rippleCurve[i] = sineWave / 10 + k * 0.83;
  }
  rippleCurve[curveLen - 1] = 1;
  const stairsCurve = [];
  const steps = 5;
  for (i = 0;i < curveLen; i++) {
    stairsCurve[i] = Math.ceil(i / (curveLen - 1) * steps) / steps;
  }
  const sineCurve = [];
  for (i = 0;i < curveLen; i++) {
    k = i / (curveLen - 1);
    sineCurve[i] = 0.5 * (1 - Math.cos(Math.PI * k));
  }
  const bounceCurve = [];
  for (i = 0;i < curveLen; i++) {
    k = i / (curveLen - 1);
    const freq = Math.pow(k, 3) * 4 + 0.2;
    const val = Math.cos(freq * Math.PI * 2 * k);
    bounceCurve[i] = Math.abs(val * (1 - k));
  }
  function invertCurve(curve) {
    const out = new Array(curve.length);
    for (let j = 0;j < curve.length; j++) {
      out[j] = 1 - curve[j];
    }
    return out;
  }
  function reverseCurve(curve) {
    return curve.slice(0).reverse();
  }
  return {
    bounce: {
      In: invertCurve(bounceCurve),
      Out: bounceCurve
    },
    cosine: {
      In: cosineCurve,
      Out: reverseCurve(cosineCurve)
    },
    exponential: "exponential",
    linear: "linear",
    ripple: {
      In: rippleCurve,
      Out: invertCurve(rippleCurve)
    },
    sine: {
      In: sineCurve,
      Out: invertCurve(sineCurve)
    },
    step: {
      In: stairsCurve,
      Out: invertCurve(stairsCurve)
    }
  };
})();

// ../../node_modules/tone/build/esm/instrument/Instrument.js
class Instrument extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Instrument.getDefaults(), arguments);
    super(options);
    this._scheduledEvents = [];
    this._synced = false;
    this._original_triggerAttack = this.triggerAttack;
    this._original_triggerRelease = this.triggerRelease;
    this._syncedRelease = (time) => this._original_triggerRelease(time);
    this._volume = this.output = new Volume({
      context: this.context,
      volume: options.volume
    });
    this.volume = this._volume.volume;
    readOnly(this, "volume");
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      volume: 0
    });
  }
  sync() {
    if (this._syncState()) {
      this._syncMethod("triggerAttack", 1);
      this._syncMethod("triggerRelease", 0);
      this.context.transport.on("stop", this._syncedRelease);
      this.context.transport.on("pause", this._syncedRelease);
      this.context.transport.on("loopEnd", this._syncedRelease);
    }
    return this;
  }
  _syncState() {
    let changed = false;
    if (!this._synced) {
      this._synced = true;
      changed = true;
    }
    return changed;
  }
  _syncMethod(method, timePosition) {
    const originalMethod = this["_original_" + method] = this[method];
    this[method] = (...args) => {
      const time = args[timePosition];
      const id = this.context.transport.schedule((t) => {
        args[timePosition] = t;
        originalMethod.apply(this, args);
      }, time);
      this._scheduledEvents.push(id);
    };
  }
  unsync() {
    this._scheduledEvents.forEach((id) => this.context.transport.clear(id));
    this._scheduledEvents = [];
    if (this._synced) {
      this._synced = false;
      this.triggerAttack = this._original_triggerAttack;
      this.triggerRelease = this._original_triggerRelease;
      this.context.transport.off("stop", this._syncedRelease);
      this.context.transport.off("pause", this._syncedRelease);
      this.context.transport.off("loopEnd", this._syncedRelease);
    }
    return this;
  }
  triggerAttackRelease(note, duration, time, velocity) {
    const computedTime = this.toSeconds(time);
    const computedDuration = this.toSeconds(duration);
    this.triggerAttack(note, computedTime, velocity);
    this.triggerRelease(computedTime + computedDuration);
    return this;
  }
  dispose() {
    super.dispose();
    this._volume.dispose();
    this.unsync();
    this._scheduledEvents = [];
    return this;
  }
}

// ../../node_modules/tone/build/esm/instrument/Monophonic.js
class Monophonic extends Instrument {
  constructor() {
    const options = optionsFromArguments(Monophonic.getDefaults(), arguments);
    super(options);
    this.portamento = options.portamento;
    this.onsilence = options.onsilence;
  }
  static getDefaults() {
    return Object.assign(Instrument.getDefaults(), {
      detune: 0,
      onsilence: noOp,
      portamento: 0
    });
  }
  triggerAttack(note, time, velocity = 1) {
    this.log("triggerAttack", note, time, velocity);
    const seconds = this.toSeconds(time);
    this._triggerEnvelopeAttack(seconds, velocity);
    this.setNote(note, seconds);
    return this;
  }
  triggerRelease(time) {
    this.log("triggerRelease", time);
    const seconds = this.toSeconds(time);
    this._triggerEnvelopeRelease(seconds);
    return this;
  }
  setNote(note, time) {
    const computedTime = this.toSeconds(time);
    const computedFrequency = note instanceof FrequencyClass ? note.toFrequency() : note;
    if (this.portamento > 0 && this.getLevelAtTime(computedTime) > 0.05) {
      const portTime = this.toSeconds(this.portamento);
      this.frequency.exponentialRampTo(computedFrequency, portTime, computedTime);
    } else {
      this.frequency.setValueAtTime(computedFrequency, computedTime);
    }
    return this;
  }
}
__decorate([
  timeRange(0)
], Monophonic.prototype, "portamento", undefined);

// ../../node_modules/tone/build/esm/component/envelope/AmplitudeEnvelope.js
class AmplitudeEnvelope extends Envelope {
  constructor() {
    super(optionsFromArguments(AmplitudeEnvelope.getDefaults(), arguments, [
      "attack",
      "decay",
      "sustain",
      "release"
    ]));
    this.name = "AmplitudeEnvelope";
    this._gainNode = new Gain({
      context: this.context,
      gain: 0
    });
    this.output = this._gainNode;
    this.input = this._gainNode;
    this._sig.connect(this._gainNode.gain);
    this.output = this._gainNode;
    this.input = this._gainNode;
  }
  dispose() {
    super.dispose();
    this._gainNode.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/instrument/Synth.js
class Synth extends Monophonic {
  constructor() {
    const options = optionsFromArguments(Synth.getDefaults(), arguments);
    super(options);
    this.name = "Synth";
    this.oscillator = new OmniOscillator(Object.assign({
      context: this.context,
      detune: options.detune,
      onstop: () => this.onsilence(this)
    }, options.oscillator));
    this.frequency = this.oscillator.frequency;
    this.detune = this.oscillator.detune;
    this.envelope = new AmplitudeEnvelope(Object.assign({
      context: this.context
    }, options.envelope));
    this.oscillator.chain(this.envelope, this.output);
    readOnly(this, ["oscillator", "frequency", "detune", "envelope"]);
  }
  static getDefaults() {
    return Object.assign(Monophonic.getDefaults(), {
      envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
        attack: 0.005,
        decay: 0.1,
        release: 1,
        sustain: 0.3
      }),
      oscillator: Object.assign(omitFromObject(OmniOscillator.getDefaults(), [
        ...Object.keys(Source.getDefaults()),
        "frequency",
        "detune"
      ]), {
        type: "triangle"
      })
    });
  }
  _triggerEnvelopeAttack(time, velocity) {
    this.envelope.triggerAttack(time, velocity);
    this.oscillator.start(time);
    if (this.envelope.sustain === 0) {
      const computedAttack = this.toSeconds(this.envelope.attack);
      const computedDecay = this.toSeconds(this.envelope.decay);
      this.oscillator.stop(time + computedAttack + computedDecay);
    }
  }
  _triggerEnvelopeRelease(time) {
    this.envelope.triggerRelease(time);
    this.oscillator.stop(time + this.toSeconds(this.envelope.release));
  }
  getLevelAtTime(time) {
    time = this.toSeconds(time);
    return this.envelope.getValueAtTime(time);
  }
  dispose() {
    super.dispose();
    this.oscillator.dispose();
    this.envelope.dispose();
    return this;
  }
}
// ../../node_modules/tone/build/esm/instrument/MembraneSynth.js
class MembraneSynth extends Synth {
  constructor() {
    const options = optionsFromArguments(MembraneSynth.getDefaults(), arguments);
    super(options);
    this.name = "MembraneSynth";
    this.portamento = 0;
    this.pitchDecay = options.pitchDecay;
    this.octaves = options.octaves;
    readOnly(this, ["oscillator", "envelope"]);
  }
  static getDefaults() {
    return deepMerge(Monophonic.getDefaults(), Synth.getDefaults(), {
      envelope: {
        attack: 0.001,
        attackCurve: "exponential",
        decay: 0.4,
        release: 1.4,
        sustain: 0.01
      },
      octaves: 10,
      oscillator: {
        type: "sine"
      },
      pitchDecay: 0.05
    });
  }
  setNote(note, time) {
    const seconds = this.toSeconds(time);
    const hertz = this.toFrequency(note instanceof FrequencyClass ? note.toFrequency() : note);
    const maxNote = hertz * this.octaves;
    this.oscillator.frequency.setValueAtTime(maxNote, seconds);
    this.oscillator.frequency.exponentialRampToValueAtTime(hertz, seconds + this.toSeconds(this.pitchDecay));
    return this;
  }
  dispose() {
    super.dispose();
    return this;
  }
}
__decorate([
  range(0)
], MembraneSynth.prototype, "octaves", undefined);
__decorate([
  timeRange(0)
], MembraneSynth.prototype, "pitchDecay", undefined);
// ../../node_modules/tone/build/esm/core/worklet/WorkletGlobalScope.js
var workletContext = new Set;
function addToWorklet(classOrFunction) {
  workletContext.add(classOrFunction);
}
function registerProcessor(name, classDesc) {
  const processor = `registerProcessor("${name}", ${classDesc})`;
  workletContext.add(processor);
}

// ../../node_modules/tone/build/esm/core/worklet/ToneAudioWorkletProcessor.worklet.js
var toneAudioWorkletProcessor = `
\t/**
\t * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
\t */
\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {

\t\tconstructor(options) {
\t\t\t
\t\t\tsuper(options);
\t\t\t/**
\t\t\t * If the processor was disposed or not. Keep alive until it's disposed.
\t\t\t */
\t\t\tthis.disposed = false;
\t\t   \t/** 
\t\t\t * The number of samples in the processing block
\t\t\t */
\t\t\tthis.blockSize = 128;
\t\t\t/**
\t\t\t * the sample rate
\t\t\t */
\t\t\tthis.sampleRate = sampleRate;

\t\t\tthis.port.onmessage = (event) => {
\t\t\t\t// when it receives a dispose 
\t\t\t\tif (event.data === "dispose") {
\t\t\t\t\tthis.disposed = true;
\t\t\t\t}
\t\t\t};
\t\t}
\t}
`;
addToWorklet(toneAudioWorkletProcessor);

// ../../node_modules/tone/build/esm/core/worklet/SingleIOProcessor.worklet.js
var singleIOProcess = `
\t/**
\t * Abstract class for a single input/output processor. 
\t * has a 'generate' function which processes one sample at a time
\t */
\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {

\t\tconstructor(options) {
\t\t\tsuper(Object.assign(options, {
\t\t\t\tnumberOfInputs: 1,
\t\t\t\tnumberOfOutputs: 1
\t\t\t}));
\t\t\t/**
\t\t\t * Holds the name of the parameter and a single value of that
\t\t\t * parameter at the current sample
\t\t\t * @type { [name: string]: number }
\t\t\t */
\t\t\tthis.params = {}
\t\t}

\t\t/**
\t\t * Generate an output sample from the input sample and parameters
\t\t * @abstract
\t\t * @param input number
\t\t * @param channel number
\t\t * @param parameters { [name: string]: number }
\t\t * @returns number
\t\t */
\t\tgenerate(){}

\t\t/**
\t\t * Update the private params object with the 
\t\t * values of the parameters at the given index
\t\t * @param parameters { [name: string]: Float32Array },
\t\t * @param index number
\t\t */
\t\tupdateParams(parameters, index) {
\t\t\tfor (const paramName in parameters) {
\t\t\t\tconst param = parameters[paramName];
\t\t\t\tif (param.length > 1) {
\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];
\t\t\t\t} else {
\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
\t\t * Process a single frame of the audio
\t\t * @param inputs Float32Array[][]
\t\t * @param outputs Float32Array[][]
\t\t */
\t\tprocess(inputs, outputs, parameters) {
\t\t\tconst input = inputs[0];
\t\t\tconst output = outputs[0];
\t\t\t// get the parameter values
\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);
\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {
\t\t\t\tthis.updateParams(parameters, sample);
\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {
\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;
\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);
\t\t\t\t}
\t\t\t}
\t\t\treturn !this.disposed;
\t\t}
\t};
`;
addToWorklet(singleIOProcess);

// ../../node_modules/tone/build/esm/core/worklet/DelayLine.worklet.js
var delayLine = `
\t/**
\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
\t */
\tclass DelayLine {
\t\t
\t\tconstructor(size, channels) {
\t\t\tthis.buffer = [];
\t\t\tthis.writeHead = []
\t\t\tthis.size = size;

\t\t\t// create the empty channels
\t\t\tfor (let i = 0; i < channels; i++) {
\t\t\t\tthis.buffer[i] = new Float32Array(this.size);
\t\t\t\tthis.writeHead[i] = 0;
\t\t\t}
\t\t}

\t\t/**
\t\t * Push a value onto the end
\t\t * @param channel number
\t\t * @param value number
\t\t */
\t\tpush(channel, value) {
\t\t\tthis.writeHead[channel] += 1;
\t\t\tif (this.writeHead[channel] > this.size) {
\t\t\t\tthis.writeHead[channel] = 0;
\t\t\t}
\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;
\t\t}

\t\t/**
\t\t * Get the recorded value of the channel given the delay
\t\t * @param channel number
\t\t * @param delay number delay samples
\t\t */
\t\tget(channel, delay) {
\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);
\t\t\tif (readHead < 0) {
\t\t\t\treadHead += this.size;
\t\t\t}
\t\t\treturn this.buffer[channel][readHead];
\t\t}
\t}
`;
addToWorklet(delayLine);

// ../../node_modules/tone/build/esm/component/filter/FeedbackCombFilter.worklet.js
var workletName = "feedback-comb-filter";
var feedbackCombFilter = `
\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {

\t\tconstructor(options) {
\t\t\tsuper(options);
\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
\t\t}

\t\tstatic get parameterDescriptors() {
\t\t\treturn [{
\t\t\t\tname: "delayTime",
\t\t\t\tdefaultValue: 0.1,
\t\t\t\tminValue: 0,
\t\t\t\tmaxValue: 1,
\t\t\t\tautomationRate: "k-rate"
\t\t\t}, {
\t\t\t\tname: "feedback",
\t\t\t\tdefaultValue: 0.5,
\t\t\t\tminValue: 0,
\t\t\t\tmaxValue: 0.9999,
\t\t\t\tautomationRate: "k-rate"
\t\t\t}];
\t\t}

\t\tgenerate(input, channel, parameters) {
\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);
\t\t\treturn delayedSample;
\t\t}
\t}
`;
registerProcessor(workletName, feedbackCombFilter);
// ../../node_modules/tone/build/esm/instrument/Sampler.js
class Sampler extends Instrument {
  constructor() {
    const options = optionsFromArguments(Sampler.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
    super(options);
    this.name = "Sampler";
    this._activeSources = new Map;
    const urlMap = {};
    Object.keys(options.urls).forEach((note) => {
      const noteNumber = parseInt(note, 10);
      assert(isNote(note) || isNumber(noteNumber) && isFinite(noteNumber), `url key is neither a note or midi pitch: ${note}`);
      if (isNote(note)) {
        const mid = new FrequencyClass(this.context, note).toMidi();
        urlMap[mid] = options.urls[note];
      } else if (isNumber(noteNumber) && isFinite(noteNumber)) {
        urlMap[noteNumber] = options.urls[noteNumber];
      }
    });
    this._buffers = new ToneAudioBuffers({
      urls: urlMap,
      onload: options.onload,
      baseUrl: options.baseUrl,
      onerror: options.onerror
    });
    this.attack = options.attack;
    this.release = options.release;
    this.curve = options.curve;
    if (this._buffers.loaded) {
      Promise.resolve().then(options.onload);
    }
  }
  static getDefaults() {
    return Object.assign(Instrument.getDefaults(), {
      attack: 0,
      baseUrl: "",
      curve: "exponential",
      onload: noOp,
      onerror: noOp,
      release: 0.1,
      urls: {}
    });
  }
  _findClosest(midi) {
    const MAX_INTERVAL = 96;
    let interval = 0;
    while (interval < MAX_INTERVAL) {
      if (this._buffers.has(midi + interval)) {
        return -interval;
      } else if (this._buffers.has(midi - interval)) {
        return interval;
      }
      interval++;
    }
    throw new Error(`No available buffers for note: ${midi}`);
  }
  triggerAttack(notes, time, velocity = 1) {
    this.log("triggerAttack", notes, time, velocity);
    if (!Array.isArray(notes)) {
      notes = [notes];
    }
    notes.forEach((note) => {
      const midiFloat = ftomf(new FrequencyClass(this.context, note).toFrequency());
      const midi = Math.round(midiFloat);
      const remainder = midiFloat - midi;
      const difference = this._findClosest(midi);
      const closestNote = midi - difference;
      const buffer = this._buffers.get(closestNote);
      const playbackRate = intervalToFrequencyRatio(difference + remainder);
      const source = new ToneBufferSource({
        url: buffer,
        context: this.context,
        curve: this.curve,
        fadeIn: this.attack,
        fadeOut: this.release,
        playbackRate
      }).connect(this.output);
      source.start(time, 0, buffer.duration / playbackRate, velocity);
      if (!isArray(this._activeSources.get(midi))) {
        this._activeSources.set(midi, []);
      }
      this._activeSources.get(midi).push(source);
      source.onended = () => {
        if (this._activeSources && this._activeSources.has(midi)) {
          const sources = this._activeSources.get(midi);
          const index = sources.indexOf(source);
          if (index !== -1) {
            sources.splice(index, 1);
          }
        }
      };
    });
    return this;
  }
  triggerRelease(notes, time) {
    this.log("triggerRelease", notes, time);
    if (!Array.isArray(notes)) {
      notes = [notes];
    }
    notes.forEach((note) => {
      const midi = new FrequencyClass(this.context, note).toMidi();
      if (this._activeSources.has(midi) && this._activeSources.get(midi).length) {
        const sources = this._activeSources.get(midi);
        time = this.toSeconds(time);
        sources.forEach((source) => {
          source.stop(time);
        });
        this._activeSources.set(midi, []);
      }
    });
    return this;
  }
  releaseAll(time) {
    const computedTime = this.toSeconds(time);
    this._activeSources.forEach((sources) => {
      while (sources.length) {
        const source = sources.shift();
        source.stop(computedTime);
      }
    });
    return this;
  }
  sync() {
    if (this._syncState()) {
      this._syncMethod("triggerAttack", 1);
      this._syncMethod("triggerRelease", 1);
    }
    return this;
  }
  triggerAttackRelease(notes, duration, time, velocity = 1) {
    const computedTime = this.toSeconds(time);
    this.triggerAttack(notes, computedTime, velocity);
    if (isArray(duration)) {
      assert(isArray(notes), "notes must be an array when duration is array");
      notes.forEach((note, index) => {
        const d = duration[Math.min(index, duration.length - 1)];
        this.triggerRelease(note, computedTime + this.toSeconds(d));
      });
    } else {
      this.triggerRelease(notes, computedTime + this.toSeconds(duration));
    }
    return this;
  }
  add(note, url, callback) {
    assert(isNote(note) || isFinite(note), `note must be a pitch or midi: ${note}`);
    if (isNote(note)) {
      const mid = new FrequencyClass(this.context, note).toMidi();
      this._buffers.add(mid, url, callback);
    } else {
      this._buffers.add(note, url, callback);
    }
    return this;
  }
  get loaded() {
    return this._buffers.loaded;
  }
  dispose() {
    super.dispose();
    this._buffers.dispose();
    this._activeSources.forEach((sources) => {
      sources.forEach((source) => source.dispose());
    });
    this._activeSources.clear();
    return this;
  }
}
__decorate([
  timeRange(0)
], Sampler.prototype, "attack", undefined);
__decorate([
  timeRange(0)
], Sampler.prototype, "release", undefined);
// ../../node_modules/tone/build/esm/component/channel/Panner.js
class Panner extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Panner.getDefaults(), arguments, [
      "pan"
    ]);
    super(options);
    this.name = "Panner";
    this._panner = this.context.createStereoPanner();
    this.input = this._panner;
    this.output = this._panner;
    this.pan = new Param({
      context: this.context,
      param: this._panner.pan,
      value: options.pan,
      minValue: -1,
      maxValue: 1
    });
    this._panner.channelCount = options.channelCount;
    this._panner.channelCountMode = "explicit";
    readOnly(this, "pan");
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      pan: 0,
      channelCount: 1
    });
  }
  dispose() {
    super.dispose();
    this._panner.disconnect();
    this.pan.dispose();
    return this;
  }
}
// ../../node_modules/tone/build/esm/effect/BitCrusher.worklet.js
var workletName2 = "bit-crusher";
var bitCrusherWorklet = `
\tclass BitCrusherWorklet extends SingleIOProcessor {

\t\tstatic get parameterDescriptors() {
\t\t\treturn [{
\t\t\t\tname: "bits",
\t\t\t\tdefaultValue: 12,
\t\t\t\tminValue: 1,
\t\t\t\tmaxValue: 16,
\t\t\t\tautomationRate: 'k-rate'
\t\t\t}];
\t\t}

\t\tgenerate(input, _channel, parameters) {
\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);
\t\t\tconst val = step * Math.floor(input / step + 0.5);
\t\t\treturn val;
\t\t}
\t}
`;
registerProcessor(workletName2, bitCrusherWorklet);
// ../../node_modules/tone/build/esm/effect/Freeverb.js
var combFilterTunings = [
  1557 / 44100,
  1617 / 44100,
  1491 / 44100,
  1422 / 44100,
  1277 / 44100,
  1356 / 44100,
  1188 / 44100,
  1116 / 44100
];
// ../../node_modules/tone/build/esm/effect/JCReverb.js
var combFilterDelayTimes = [
  1687 / 25000,
  1601 / 25000,
  2053 / 25000,
  2251 / 25000
];
// ../../node_modules/tone/build/esm/component/channel/Solo.js
class Solo extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Solo.getDefaults(), arguments, [
      "solo"
    ]);
    super(options);
    this.name = "Solo";
    this.input = this.output = new Gain({
      context: this.context
    });
    if (!Solo._allSolos.has(this.context)) {
      Solo._allSolos.set(this.context, new Set);
    }
    Solo._allSolos.get(this.context).add(this);
    this.solo = options.solo;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      solo: false
    });
  }
  get solo() {
    return this._isSoloed();
  }
  set solo(solo) {
    if (solo) {
      this._addSolo();
    } else {
      this._removeSolo();
    }
    Solo._allSolos.get(this.context).forEach((instance) => instance._updateSolo());
  }
  get muted() {
    return this.input.gain.value === 0;
  }
  _addSolo() {
    if (!Solo._soloed.has(this.context)) {
      Solo._soloed.set(this.context, new Set);
    }
    Solo._soloed.get(this.context).add(this);
  }
  _removeSolo() {
    if (Solo._soloed.has(this.context)) {
      Solo._soloed.get(this.context).delete(this);
    }
  }
  _isSoloed() {
    return Solo._soloed.has(this.context) && Solo._soloed.get(this.context).has(this);
  }
  _noSolos() {
    return !Solo._soloed.has(this.context) || Solo._soloed.has(this.context) && Solo._soloed.get(this.context).size === 0;
  }
  _updateSolo() {
    if (this._isSoloed()) {
      this.input.gain.value = 1;
    } else if (this._noSolos()) {
      this.input.gain.value = 1;
    } else {
      this.input.gain.value = 0;
    }
  }
  dispose() {
    super.dispose();
    Solo._allSolos.get(this.context).delete(this);
    this._removeSolo();
    return this;
  }
}
Solo._allSolos = new Map;
Solo._soloed = new Map;

// ../../node_modules/tone/build/esm/component/channel/PanVol.js
class PanVol extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(PanVol.getDefaults(), arguments, [
      "pan",
      "volume"
    ]);
    super(options);
    this.name = "PanVol";
    this._panner = this.input = new Panner({
      context: this.context,
      pan: options.pan,
      channelCount: options.channelCount
    });
    this.pan = this._panner.pan;
    this._volume = this.output = new Volume({
      context: this.context,
      volume: options.volume
    });
    this.volume = this._volume.volume;
    this._panner.connect(this._volume);
    this.mute = options.mute;
    readOnly(this, ["pan", "volume"]);
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: false,
      pan: 0,
      volume: 0,
      channelCount: 1
    });
  }
  get mute() {
    return this._volume.mute;
  }
  set mute(mute) {
    this._volume.mute = mute;
  }
  dispose() {
    super.dispose();
    this._panner.dispose();
    this.pan.dispose();
    this._volume.dispose();
    this.volume.dispose();
    return this;
  }
}

// ../../node_modules/tone/build/esm/component/channel/Channel.js
class Channel extends ToneAudioNode {
  constructor() {
    const options = optionsFromArguments(Channel.getDefaults(), arguments, [
      "volume",
      "pan"
    ]);
    super(options);
    this.name = "Channel";
    this._solo = this.input = new Solo({
      solo: options.solo,
      context: this.context
    });
    this._panVol = this.output = new PanVol({
      context: this.context,
      pan: options.pan,
      volume: options.volume,
      mute: options.mute,
      channelCount: options.channelCount
    });
    this.pan = this._panVol.pan;
    this.volume = this._panVol.volume;
    this._solo.connect(this._panVol);
    readOnly(this, ["pan", "volume"]);
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      pan: 0,
      volume: 0,
      mute: false,
      solo: false,
      channelCount: 1
    });
  }
  get solo() {
    return this._solo.solo;
  }
  set solo(solo) {
    this._solo.solo = solo;
  }
  get muted() {
    return this._solo.muted || this.mute;
  }
  get mute() {
    return this._panVol.mute;
  }
  set mute(mute) {
    this._panVol.mute = mute;
  }
  _getBus(name) {
    if (!Channel.buses.has(name)) {
      Channel.buses.set(name, new Gain({ context: this.context }));
    }
    return Channel.buses.get(name);
  }
  send(name, volume = 0) {
    const bus = this._getBus(name);
    const sendKnob = new Gain({
      context: this.context,
      units: "decibels",
      gain: volume
    });
    this.connect(sendKnob);
    sendKnob.connect(bus);
    return sendKnob;
  }
  receive(name) {
    const bus = this._getBus(name);
    bus.connect(this);
    return this;
  }
  dispose() {
    super.dispose();
    this._panVol.dispose();
    this.pan.dispose();
    this.volume.dispose();
    this._solo.dispose();
    return this;
  }
}
Channel.buses = new Map;
// ../../node_modules/tone/build/esm/index.js
var Transport = getContext().transport;
function getTransport() {
  return getContext().transport;
}
var Destination = getContext().destination;
var Master = getContext().destination;
var Listener = getContext().listener;
var Draw = getContext().draw;
var context2 = getContext();

// src/index.ts
var import_midi = __toESM(require_Midi(), 1);

// src/util.ts
var getGcodeRunDurationMs = (input) => {
  if (typeof input !== "string") {
    throw new Error("Invalid input");
  }
  const regex = /\sP(\d+)/g;
  let sum = 0;
  let match;
  while ((match = regex.exec(input)) !== null) {
    sum += parseInt(match[1], 10);
  }
  return sum;
};
function getCookie(name) {
  return document.cookie.split("; ").find((row) => row.startsWith(name + "="))?.split("=")[1] || "";
}
function getCsrfToken() {
  return getCookie("csrf_token_P80");
}
var gcodeToChunks = (gcode, chunkMaxDurationMs = 1000) => {
  if (typeof gcode !== "string") {
    throw new Error("Invalid input");
  }
  const commands = gcode.split(`
`).filter((i) => i.trim() !== "");
  const chunks = [];
  let chunk = [];
  let chunkDuration = 0;
  for (const command of commands) {
    const duration = getGcodeRunDurationMs(command);
    if (chunkDuration + duration > chunkMaxDurationMs) {
      chunks.push(chunk);
      chunk = [];
      chunkDuration = 0;
    }
    chunk.push(command);
    chunkDuration += duration;
  }
  if (chunk.length > 0) {
    chunks.push(chunk);
  }
  return chunks;
};
var noteToFreq = (note) => {
  let a = 440;
  return a / 32 * 2 ** ((note - 9) / 12);
};
function getHumanReadableDuration(durationMs) {
  if (durationMs < 1000)
    return `${(durationMs / 1000).toFixed(1)}s`;
  const seconds = Math.floor(durationMs / 1000) % 60;
  const minutes = Math.floor(durationMs / (1000 * 60)) % 60;
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  let parts = [];
  if (hours > 0)
    parts.push(`${hours}h`);
  if (minutes > 0)
    parts.push(`${minutes}mins`);
  if (seconds > 0)
    parts.push(`${seconds}s`);
  return parts.join(" ") || "0s";
}

// src/GcodeCommand.ts
class GcodeCommand {
  gcode;
  chunks;
  chunkMaxDurationMs;
  chunkBleedMs;
  currentChunkIndex;
  currentChunkStartedAt;
  lastPlayedChunkIndex;
  state;
  constructor(gcode, chunkMaxDurationMs = 1000) {
    this.gcode = gcode;
    this.chunks = chunkMaxDurationMs == null ? [[gcode]] : gcodeToChunks(gcode, chunkMaxDurationMs);
    this.chunkMaxDurationMs = chunkMaxDurationMs;
    this.chunkBleedMs = 200;
    this.currentChunkIndex = 0;
    this.currentChunkStartedAt = null;
    this.lastPlayedChunkIndex = -1;
    this.state = "PAUSED";
  }
  async playChunk(chunkIndex) {
    if (chunkIndex >= this.chunks.length) {
      this.state = "FINISHED";
      return;
    }
    const chunk = this.chunks[chunkIndex];
    if (!chunk) {
      throw new Error("Invalid chunk index. This should never happen since we JUST checked for the length of the chunks array.");
    }
    this.currentChunkIndex = chunkIndex;
    this.lastPlayedChunkIndex = chunkIndex;
    this.currentChunkStartedAt = Date.now();
    await this.queueGcodeToGetExecuted(chunk);
  }
  async queueGcodeToGetExecuted(gcode) {
    const rawCommands = typeof gcode === "string" ? gcode.split(`
`) : gcode.flatMap((i) => i.split(`
`));
    const commands = rawCommands.map((i) => i.trim()).filter((i) => i !== "");
    const res = await fetch("/api/printer/command", {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "content-type": "application/json; charset=UTF-8",
        "x-csrf-token": getCsrfToken()
      },
      body: JSON.stringify({
        commands,
        parameters: {}
      }),
      method: "POST"
    });
    if (!res.ok) {
      throw new Error("Failed to queue gcode commands.");
    }
  }
  goToBeginning() {
    this.currentChunkIndex = 0;
    this.lastPlayedChunkIndex = -1;
  }
  pause() {
    this.state = "PAUSED";
  }
  unpause() {
    this.state = "PLAYING";
    if (this.lastPlayedChunkIndex === -1) {
      console.log("gcodecomand playing initial chunk");
      this.playChunk(0);
    }
  }
  shouldStartPlayingNextChunk() {
    if (this.state !== "PLAYING" || this.currentChunkStartedAt == null)
      return false;
    if (this.lastPlayedChunkIndex >= this.chunks.length - 1)
      return false;
    const elapsedTime = Date.now() - this.currentChunkStartedAt;
    const currentChunkDuration = getGcodeRunDurationMs(this.chunks[this.lastPlayedChunkIndex].join(`
`));
    return elapsedTime >= currentChunkDuration + this.chunkBleedMs;
  }
  tick() {
    if (this.shouldStartPlayingNextChunk()) {
      console.log("gcodecomand.tick playing chunk");
      this.playChunk(this.lastPlayedChunkIndex + 1);
    }
  }
}

// src/getGcodeFromMidi.ts
function getGcodeFromMidi(midi, options) {
  if (!midi) {
    throw new Error("No MIDI provided.");
  }
  const useG4 = options?.useG4 ?? false;
  const speed = options?.speed ?? 1;
  const tracks = options?.tracks ?? [{ enabled: true }];
  const track = {
    notes: []
  };
  for (let i = 0;i < midi.tracks.length; i++) {
    if (tracks[i]?.enabled ?? false) {
      console.log("doing track", i);
      let currTrack = midi.tracks[i].notes;
      if (midi.tracks[i].instrument.percussion) {
        currTrack.forEach((note) => {
          note.percussion = true;
        });
      }
      track.notes = track.notes.concat(currTrack);
    }
  }
  track.notes.sort((a, b) => a.time - b.time);
  const tempoMultiplier = 1 / Math.max(speed, 0.01);
  let curr = 0;
  const gcode = [];
  let schedule = [];
  while (curr < track.notes.length) {
    let highestCurrNote = track.notes[curr].percussion ? -1 : track.notes[curr].midi;
    let duration = track.notes[curr].duration;
    while (curr + 1 < track.notes.length && track.notes[curr].time === track.notes[curr + 1].time) {
      curr++;
      if (track.notes[curr].midi > highestCurrNote && !track.notes[curr].percussion) {
        duration = track.notes[curr].duration;
      }
      highestCurrNote = track.notes[curr].percussion ? highestCurrNote : Math.max(highestCurrNote, track.notes[curr].midi);
    }
    const frequency = highestCurrNote === -1 ? 100 : noteToFreq(highestCurrNote);
    duration = highestCurrNote === -1 ? 20 / 1000 : duration;
    const time = track.notes[curr].time;
    const nextNoteTime = curr + 1 < track.notes.length ? track.notes[curr + 1].time : duration + time;
    let trimmedDuration = Math.min(nextNoteTime - time, duration);
    const pauseDuration = nextNoteTime - time - trimmedDuration;
    const minDuration = 20 / 1000;
    if (pauseDuration < minDuration) {
      trimmedDuration += pauseDuration;
    }
    gcode.push(`M300 P${Math.round(trimmedDuration * 1000 * tempoMultiplier)} S${Math.round(frequency)}`);
    if (useG4) {
      gcode.push(`G4 P${Math.round(trimmedDuration * 1000 * tempoMultiplier)}`);
    }
    schedule.push({
      time: time * tempoMultiplier,
      frequency,
      duration: trimmedDuration * tempoMultiplier
    });
    if (pauseDuration >= minDuration) {
      gcode.push(`M300 P${Math.round(pauseDuration * tempoMultiplier * 1000)} S0`);
      if (useG4) {
        gcode.push(`G4 P${Math.round(pauseDuration * tempoMultiplier * 1000)}`);
      }
    }
    curr++;
  }
  const gcodeStr = gcode.join(`
`);
  const durationMs = getGcodeRunDurationMs(gcodeStr);
  return {
    schedule,
    durationMs,
    gcode: gcodeStr
  };
}

// src/index.ts
var midi = null;
var command = null;
var synth = new Synth({
  oscillator: {
    type: "square"
  },
  envelope: {
    attack: 0,
    decay: 0,
    sustain: 1,
    release: 0.001
  }
}).toDestination();
synth.volume.value = -25;
function playNote(frequency, duration) {
  return (time) => {
    synth.triggerAttackRelease(frequency, duration - 5 / 1000, time);
  };
}
function togglePreview() {
  getTransport().toggle();
}
function stopPreview() {
  getTransport().stop();
}
function tryToMountUi() {
  if (!document.querySelector('[data-octoplay="midi-file-input"]'))
    return;
  const hasMounted = document.querySelector('[data-octoplay="midi-file-input"]')?.getAttribute("data-octoplay-mounted");
  if (hasMounted)
    return;
  mountUi();
  document.querySelector('[data-octoplay="midi-file-input"]').setAttribute("data-octoplay-mounted", "true");
}
function mountUi() {
  console.log("Octoplay mounting UI");
  document.querySelector('[data-octoplay="midi-file-input"]').addEventListener("change", (e) => {
    const files = e.target.files;
    const hasFiles = files && files.length > 0;
    console.log("Octoplay file input change", files, hasFiles);
    if (hasFiles) {
      const file = files[0];
      const reader = new FileReader;
      reader.onload = (e2) => {
        console.log("Octoplay on reader load");
        const result = e2.target?.result;
        if (!result || !(result instanceof ArrayBuffer)) {
          throw new Error("Invalid file provided.");
        }
        midi = new import_midi.Midi(result);
        if (!midi) {
          throw new Error("Invalid file provided.");
        }
        updateUiOnMidiChange(midi);
      };
      reader.readAsArrayBuffer(file);
      reader.addEventListener("loadend", updateUiOnSettingsChange);
    }
  });
  document.querySelector("#previewStart").addEventListener("click", togglePreview);
  document.querySelector("#previewStop").addEventListener("click", stopPreview);
  document.querySelector('[data-octoplay="play"]').addEventListener("click", () => {
    const gcode = document.querySelector("#outputArea").value;
    command = new GcodeCommand(gcode, null);
    console.log("creating gcodecommand");
    command.unpause();
    setInterval(() => command.tick(), 100);
  });
  document.querySelector('[data-octoplay="pauseUnpause"]').addEventListener("click", () => {
    if (command) {
      if (command.state === "PAUSED") {
        command.unpause();
      } else {
        command.pause();
      }
    }
  });
  document.querySelector("#g4toggle").addEventListener("change", updateUiOnSettingsChange);
  document.querySelector("#speedMultiplierInput").addEventListener("change", updateUiOnSettingsChange);
}
function updateUiOnMidiChange(midi2) {
  console.log("Octoplay update UI on midi change:", midi2.tracks);
  let infoDiv = document.querySelector("#trackInfo");
  infoDiv.innerHTML = "";
  midi2.tracks.forEach((track, index) => {
    infoDiv.innerHTML += `<label class="checkbox"><input id="trackButton${index}" type="checkbox" value=${index} /><span>Track ${index + 1}: ${track.instrument.name} - ${track.notes.length} notes</span></label>`;
    setInterval(() => {
      document.querySelector(`#trackButton${index}`).addEventListener("change", updateUiOnSettingsChange);
    }, 100);
  });
  infoDiv.innerHTML += `<label>
      Speed multiplier:
      <input
        id="speedMultiplierInput"
        type="number"
        step="0.01"
        min="0.01"
        value="1"
      />
    </label>`;
  document.querySelector("#speedMultiplierInput").addEventListener("change", updateUiOnSettingsChange);
  document.querySelector("#trackButton0").checked = true;
}
function updateUiOnSettingsChange() {
  if (!midi)
    return;
  const speed = parseFloat(document.querySelector("#speedMultiplierInput").value);
  const useG4 = document.querySelector("#g4toggle").checked;
  const tracks = midi.tracks.map((_, idx) => ({
    enabled: document.querySelector(`#trackButton${idx}`).checked
  }));
  console.log("Octoplay update UI on settings change:", midi, {
    speed,
    useG4,
    tracks
  });
  const data = getGcodeFromMidi(midi, {
    speed,
    useG4,
    tracks
  });
  console.log("Octoplay update UI on settings change:", data);
  document.querySelector("#outputArea").value = data.gcode;
  document.querySelector("#runDuration").innerHTML = getHumanReadableDuration(data.durationMs);
  for (const note of data.schedule) {
    getTransport().schedule(playNote(note.frequency, note.duration), note.time);
  }
  getTransport().stop();
  getTransport().cancel();
}
$(function() {
  function OctoplayViewModel(parameters) {
    var self2 = this;
    self2.loginState = parameters[0];
    self2.settings = parameters[1];
    self2.access = parameters[2];
  }
  OCTOPRINT_VIEWMODELS.push({
    construct: OctoplayViewModel,
    dependencies: [
      "loginStateViewModel",
      "settingsViewModel",
      "accessViewModel"
    ],
    elements: [
      "#midi",
      "#octoplay_link",
      "#midi_link",
      "#settings_plugin_octoplay"
    ]
  });
});
setInterval(tryToMountUi, 100);
