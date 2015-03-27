if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(a, b) {
            return a+b;
        });
    },

    remove : function(arr, item) {
        return arr.filter(function(element) {
            return element !== item;
        });
    },

    removeWithoutCopy : function(arr, item) {
        for(var i=0; i<arr.length; i++) {
            if( arr[i] === item ) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(element) {
            if (element === item) {
                count++;
            }
        });
        return count;
    },

    duplicates : function(arr) {
        var result = [];
        arr.forEach(function(element) {
            if( arr.indexOf(element) !== arr.lastIndexOf(element) && arr.indexOf(element) !== -1 && result.indexOf(element) === -1) {
                result.push(element);
            }
        });
        return result;
    },

    square : function(arr) {
        return arr.map(function(element) {
            return element * element;
        });
    },

    findAllOccurrences : function(arr, target) {
        var indexes = [];
        arr.forEach(function(element, idx) {
            if( element === target ) {
                return indexes.push(idx);
            }
        });
        return indexes;
    }
  };
});
