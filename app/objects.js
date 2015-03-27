if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.bind(obj)();
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [];
      for(prop in obj) {
        if( obj.hasOwnProperty(prop) ) {
          result.push(prop + ": " + obj[prop]);
        }
      }
      return result;
    }
  };
});
