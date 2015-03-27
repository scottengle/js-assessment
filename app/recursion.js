if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var results = [];

        function findFilesInDirectory(data, dirName, isChildBranch) {
            var indexFiles = false;
            for(var i=0; i<data.files.length; i++) {
                if(!dirName || dirName === data.dir || isChildBranch) {
                    indexFiles = true;
                }
                if(typeof data.files[i] === 'string') {
                    if(indexFiles) {
                        results.push(data.files[i]);
                    }
                } else {
                    findFilesInDirectory(data.files[i], dirName, indexFiles);
                }
            }
            return results;
        }

        return findFilesInDirectory(data, dirName);
    },

    permute: function(arr) {
        var results = [];

        function permutator(input, memo) {
            var current,
                memo = memo || [];

            for(var i=0; i<input.length; i++) {
                current = input.splice(i, 1);
                if(input.length === 0) {
                    results.push(memo.concat(current));
                }
                permutator(input.slice(), memo.concat(current));
                input.splice(i, 0, current[0]);
            }

            return results;

        }

        return permutator(arr);
    },

    fibonacci: function(n) {
        function fib(num) {
            return num < 2 ? num : fib(num - 1) + fib(num - 2);
        }
        return fib(n);
    },

    validParentheses: function(n) {

        var results = [];

        function parens(numOpen, numClose, result) {

            numClose = numClose || 0;
            result = result || "";

            if(numOpen === 0 && numClose === 0) {
                results.push(result);
            }

            if(numOpen > 0) {
                parens(numOpen - 1, numClose + 1, result + "(");
            }

            if(numClose > 0) {
                parens(numOpen, numClose - 1, result + ")");
            }

            return results;
        }

        return parens(3);
    }
  };
});
