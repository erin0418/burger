var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM ?;"
    connection.query(queryString, {table}, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, columns, values, cb) {
    var queryString = "INSERT INTO ? WHERE ? = ?";
    connection.query(queryString, {table,columns,values}, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, columns, values, cb) {
    var queryString = "UPDATE ? SET ? WHERE ?"; 
    connection.query(queryString, {table,columns, values}, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
