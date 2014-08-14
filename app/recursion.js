if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    findDir: function(data, dirName) {
      if (data.dir === dirName) {
        return data;
      }
      var foundDir = null;
      data.files.some(function(file) {
        if (typeof file !== 'object') { return; }
        var maybeDir = this.findDir(file, dirName);
        if (maybeDir) {
          foundDir = maybeDir;
          return true;
        }
      }, this);
      return foundDir;
    },

    listFiles: function(data, dirName) {
      var files = [],
          directory = data;
      if (dirName) {
        directory = this.findDir(data, dirName);
        if (!directory) { return null; }
      }
      directory.files.forEach(function(file) {
        if (typeof file === 'object') {
          files = files.concat(this.listFiles(file));
        } else {
          files.push(file);
        }
      }, this);
      return files;
    },

    permute: function(arr) {

    }
  };
});
