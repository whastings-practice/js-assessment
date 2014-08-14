if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeoutId,
          interval = 100,
          counter = start;

      var increaseCounter = function() {
        console.log(counter);
        counter += 1;
        if (counter <= end) {
          timeoutId = setTimeout(increaseCounter, interval);
        }
      };
      increaseCounter();

      return {
        cancel: function() {
          clearTimeout(timeoutId);
        }
      };
    }
  };
});
