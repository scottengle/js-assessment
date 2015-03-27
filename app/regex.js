if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /.\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-z])\1/i.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
        var index = str.search(/\d{3}/);
        if( index !== -1 ) {
            return str.substring( index, index + 3 );
        }
        return false;
    },

    matchesPattern : function(str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },
    isUSD : function(str) {
        return /^\$[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})*$/.test(str);
    }
  };
});
