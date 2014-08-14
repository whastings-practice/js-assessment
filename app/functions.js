if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(undefined, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(otherStr) {
        return str + ', ' + otherStr;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(el) {
        return function() {
          return fn(el);
        };
      });
    },

    partial : function(fn, str1, str2) {
      var length = fn.length,
          args = [str1, str2];
      return function next(arg) {
        args.push(arg);
        if (args.length === length) {
          return fn.apply(undefined, args);
        }
        return next;
      };
    },

    useArguments : function() {
      var args = Array.prototype.slice.call(arguments);
      return args.reduce(function(total, number) {
        return total + number;
      }, 0);
    },

    callIt : function(fn) {
      fn.apply(undefined, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
      var slice = Array.prototype.slice,
          args = slice.call(arguments, 1),
          length = fn.length;
      return function next() {
        args = args.concat(slice.call(arguments));
        if (args.length === length) {
          return fn.apply(undefined, args);
        }
        return next;
      };
    },

    curryIt : function(fn) {
      var args = [],
          length = fn.length;
      return function next(arg) {
        args.push(arg);
        if (args.length === length) {
          return fn.apply(undefined, args);
        }
        return next;
      };
    }
  };
});
