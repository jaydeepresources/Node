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

    var query = "select * from products";

    con.query(query, function (err, result) {
        if (err) throw err;
        console.log("Query executed");
        console.log(result)
    });
});