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

    var query = "CREATE TABLE `test`.`products` (" +
        "`product_id` INT NOT NULL," +
        "`product_name` VARCHAR(45) NOT NULL," +
        "`product_price` FLOAT NOT NULL," +
        " PRIMARY KEY (`product_id`));";

    con.query(query, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        console.log(result)
    });
});