var connection = require("./orm.js");

var orm = {
    selectAll: function(listItem, monthsDoGo, isDone) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [listItem, monthsDoGo, isDone], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    // insertOne: function(listItem, monthsDoGo, isDone) {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //     connection.query(queryString, [listItem, monthsDoGo, isDone], function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    // },
    // updateOne: function(listItem, monthsDoGo, isDone) {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //     connection.query(queryString, [listItem, monthsDoGo, isDone], function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    // }
}
  
  module.exports = orm;