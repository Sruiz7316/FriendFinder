const express = require("express");
const app = express.Router();
const path = require("path");

const friends = require('../data/friends.js');

app.get('/', function(req, res){
  res.send('Basese');
});

app.get("/api/friends", function(req, res) {
  res.json(friends);
  //This will be used to display a JSON of all possible friends.
});

app.post("/api/friends", function(req, res) {

var data = req.body;
var userScores = data.scores;

// for(var i = 0; i < friends.length;i++) {
  var match = 
    {
  var currentFriend = friends[i].name;
  var currentFriendImage = friends[i].photo;
  var currentFriendScores = friends[i].scores;
  var friendScoreDifference = "";
  };
//   var matchArray = [];
//   matchArray.push(match);
// };

for(var x = 0; x < currentFriendScores.length;x++) {
  var currentFriendScoresIndex = currentFriendScores[x];
  var userScoresIndex = userScores[x];
  var calculatedScores += Math.abs(parseInt(userScoresIndex) - parseInt(currentFriendScoresIndex));
  var calculatedScoresArray = [];
  calculatedScoresArray.push(calculatedScores);
}

function Sum(calculatedScoreArray) {
  var totalDifference = 0;
  for(var f = 0; f < friends.length;f++) {
    totalDifference = totalDifference + calculatedScoreArray[f]; 
  }
  console.log(totalDifference);
}

if (totalDifference <= match.friendDifference) {
  match.name = currentFriend;
  match.photo = currentFriendImage;
  match.friendDifference = totalDifference;
}

};

  // var calculatedScore += Math.abs(parseInt(userScores) - parseInt(currentFriendScore));
  // var calculatedScoreArray = [];
  // calculatedScoreArray.push(calculatedScore);

// for(var f = 0; f < friends.length;f++) {
// function ArraySum(arr) {
// calculatedScoreArray

// } = calculatedScoreArray[f]

// var newFriend = req.body;


// console.log(newFriend);
// res.json(friends);
// newFriend.routeName = newFriend.firstName;
  // app/data/friends.js//
  // friends.push(newFriend)
  // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
//  });
//  module.exports = app;