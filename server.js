//required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//port
var PORT = process.env.PORT || 3000;

//express app for data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//route
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// start server
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
