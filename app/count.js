if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  var current = 0;
  return {
    count : function (start, end) {
      var timeout;
      function increment() {
        console.log(start++);

        if(start <= end) {
          timeout = setTimeout(increment, 100);
        }
      }

      increment();

      return {
        cancel: function() {
          timeout && clearTimeout(timeout);
        }
      };
    }
  };
});