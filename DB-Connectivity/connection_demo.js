var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "blackthorne",
    database: "test"

});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});