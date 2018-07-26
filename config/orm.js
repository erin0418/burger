var connection = require("./connection.js");

var orm = {
    selectAll: function(listItem, tableName, statusRow, status) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [listItem, tableName, statusRow, status], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
//     // insertOne: function(listItem, monthsDoGo, isDone) {
//     //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     //     connection.query(queryString, [listItem, monthsDoGo, isDone], function(err, result) {
//     //       if (err) throw err;
//     //       console.log(result);
//     //     });
//     // },
//     // updateOne: function(listItem, monthsDoGo, isDone) {
//     //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     //     connection.query(queryString, [listItem, monthsDoGo, isDone], function(err, result) {
//     //       if (err) throw err;
//     //       console.log(result);
//     //     });
//     // }
}
  
  module.exports = orm;