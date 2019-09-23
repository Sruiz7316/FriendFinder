var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/survey", function(req, res) {
    //catch all route that takes you to survey.html//
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  //catch all route that takes you to home.html//
});

app.listen(PORT, function() {
  console.log("App Listening on PORT" + PORT);
});

