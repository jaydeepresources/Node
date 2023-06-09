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

    var query = "insert into products values(1,'Pen',25.5)";

    con.query(query, function (err, result) {
        if (err) throw err;
        console.log("Query executed");
        console.log(result)
    });
});