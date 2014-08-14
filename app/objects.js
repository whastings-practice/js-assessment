if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj, Array.prototype.slice.call(arguments, 1));
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var props = [];
      Object.getOwnPropertyNames(obj).forEach(function(prop) {
        props.push(prop + ': ' + obj[prop]);
      });
      return props;
    }
  };
});
