var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send("Hello World modified by Omer!");
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('This app is listening at http://%s:%s', host, port);
});
