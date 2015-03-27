if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return parseInt((parseInt(num, 10).toString(2).split("").reverse().join("")).charAt(bit - 1), 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var padding = "00000000";
        var binary = parseInt(num, 10).toString(2);
        return padding.substring(0, padding.length - binary.length) + binary;
    },

    multiply: function(a, b) {
        var precision = ("" + b).split('.')[1].length;
        return Number((a * b).toPrecision(precision));
    }
  };
});

