if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.bind(obj)();
    },

    functionFunction : function(str) {
        return function(input) {
            return str + ", " + input;
        }
    },

    makeClosures : function(arr, fn) {
        return (function() {
            return arr.map(function(thisArg) {
                return function(){ return fn(thisArg); }
            });
        })();
    },

    partial : function(fn, str1, str2) {
        return function(fn, str1, str2) {
            return function(str3) {
                return fn.apply(this, [str1, str2, str3]);
            }
        }(fn, str1, str2);
    },

    useArguments : function() {
        if(arguments) {
            var args = Array.prototype.slice.call(arguments, 0);
            return args.reduce(function(a, b) {
                if(a) {
                    if(b) {
                        return a + b;
                    } else {
                        return a;
                    }
                } else {
                    return 0;
                }
            });
        } else {
            return 0;
        }
    },

    callIt : function(fn) {
        if(arguments) {
            var args = Array.prototype.slice.call(arguments, 1);
            return fn.apply(this, args);
        }
    },

    partialUsingArguments : function(fn) {
        var initialArgs = Array.prototype.slice.call(arguments, 1);
        return function() {
            var currentArgs = Array.prototype.slice.call(arguments),
                fullArgs = initialArgs.concat(currentArgs);
            return fn.apply(this, fullArgs);
        };
    },

    curryIt : function(fn) {
        function getArgumentAccumulator(accumulatedArguments, expectedArgumentCount) {
            return function(currentArgument) {
                accumulatedArguments.push(currentArgument);

                if( accumulatedArguments.length === expectedArgumentCount ) {
                    return fn.apply(null, accumulatedArguments);
                } else {
                    return getArgumentAccumulator(accumulatedArguments, expectedArgumentCount);
                }
            };
        }

        return getArgumentAccumulator([], fn.length);
    }
  };
});
