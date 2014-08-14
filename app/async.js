if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = new $.Deferred();
      deferred.resolve(value);
      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
      var ajaxPromise = $.ajax({url: url, dataType: 'json'}),
          deferred = new $.Deferred();
      ajaxPromise.then(function(data) {
        var result = data.people.map(function(person) {
          return person.name;
        });
        deferred.resolve(result.sort());
      });
      return deferred.promise();
    }
  };
});
