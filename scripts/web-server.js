var express = require('express'),
    open = require('open'),
    path = require('path'),
    app = express(),
    rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen('8000')
console.log('Listening on port 8000....');
open('http://localhost:8000/img/angularjs-logo.png');


