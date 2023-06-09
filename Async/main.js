var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log("\n");
    console.log(data.toString());
});

console.log("Will I execute before reading the file ?")