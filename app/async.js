if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise(
        function(resolve, reject) {
          window.setTimeout(resolve(value), 250);
        }
      );
    },

    manipulateRemoteData : function(url) {

      var promise = new Promise(
        function(resolve, reject) {
          $.get(url, function(data) {
            var manipulatedResult = [];
            $.each(data.people, function(index, value) {
              manipulatedResult.push(value.name);
            });
            resolve(manipulatedResult.sort());
          })
          .fail(function() {
            reject("Couldn't load data");
          });
        }
      );

      return promise;
    }
  };
});
