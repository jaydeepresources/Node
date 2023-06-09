var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/register', function (req, res) {

    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.write("<h1>Registration Details</h1>");
    res.write("<br />");
    res.write("<p><strong>First Name:</strong>" + req.query.first_name + "</p>")
    res.write("<p><strong>Last Name:</strong>" + req.query.last_name + "</p>")
    res.end();
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server listening...")
})