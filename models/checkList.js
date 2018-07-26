var orm = require("../config/orm.js");

var item = {
    all: function(cb) {
      orm.all("items", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("items", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("cats", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = item;