'use strict';

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(4000);
