if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      return arr.reduce(function(total, num) {
        return total + num;
      });
    },

    remove : function(arr, item) {
      var index;
      while (true) {
        index = this.indexOf(arr, item);
        if (index === -1) { break; }
        arr.splice(index, 1);
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      return this.remove(arr, item);
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.length = arr.length - 1;
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
      arr2.forEach(function(el) {
        arr1.push(el);
      });
      return arr1;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      return arr.reduce(function(count, el) {
        return count + (el === item ? 1 : 0);
      }, 0);
    },

    duplicates : function(arr) {
      var elements = {};
      arr.forEach(function(element) {
        elements[element] = elements[element] || 0;
        elements[element] += 1;
      });
      var duplicates = [];
      for (var element in elements) {
        if (!elements.hasOwnProperty(element)) { continue; }
        if (elements[element] > 1)  {
          duplicates.push(parseInt(element));
        }
      }
      return duplicates;
    },

    square : function(arr) {
      return arr.map(function(el) {
        return Math.pow(el, 2);
      });
    },

    findAllOccurrences : function(arr, target) {
      var indexes = [];
      arr.forEach(function(el, index) {
        if (el === target) {
          indexes.push(index);
        }
      });
      return indexes;
    }
  };
});
