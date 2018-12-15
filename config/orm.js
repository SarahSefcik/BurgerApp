// Import MYSQL Connection
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for converting object key pairs to SQL
function objToSql(ob) {
  var arr = [];

// loop through keys
for (var key in ob) {
    var value = ob[key];

// skip hidden props
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }


// single comma-separated string

// object for all SQL stmnt functions

// Export orm object for model
module.exports = orm;