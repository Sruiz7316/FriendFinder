var express = require("express");
var app = express();
var path = require("path");
var PORT = 3000;

var friends = require('../data/friends.js');


app.get("/api/friends", function(req, res) {
  res.json(friends);
  //This will be used to display a JSON of all possible friends.
});

app.post("/api/friends", function(req, res) {
var newFriend = req.body;
newFriend.routeName = newFriend.firstName;
  // app/data/friends.js//
  friends.push(newFriend)
  // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
});


app.listen(PORT, function() {
  console.log("App Listening on PORT" + PORT);
});