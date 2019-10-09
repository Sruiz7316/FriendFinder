const express = require("express");
const app = express.Router();
const path = require("path");

const friends = require('../data/friends.js');

app.get("/friends", function(req, res) {
  res.json(friends);
  //This will be used to display a JSON of all possible friends.
});

app.post("/friends", function(req, res) {
var data = req.body;
var currentUserScores = data.scores;
console.log("currentUserScores", currentUserScores);

var friendsScores = [];
// Iterate over all my friends
for(var currentFriendIndex = 0; currentFriendIndex < friends.length; currentFriendIndex++) {
  // iterate over my friends scores subtracting each in the current iteration
  // appending the result to an array
  // sum the array and decide if they are my friend
  var currentFriendScore = 0;

  for(var friendsScoreIndex = 0; friendsScoreIndex < friends[currentFriendIndex].scores.length; friendsScoreIndex++) {
    var currentUserScore = parseInt(currentUserScores[friendsScoreIndex]);
    var friendScore = parseInt(friends[currentFriendIndex].scores[friendsScoreIndex]);

    var calculatedScore = Math.abs(currentUserScore - friendScore);
    currentFriendScore += calculatedScore;
  }

  friendsScores.push(currentFriendScore);
}

var closestFriendScore = friendsScores[0];
var closestFriendIndex = 0;

console.log("a", friendsScores);
console.log(closestFriendScore);

for(var i = 1; i < friendsScores.length; i++) {
  if (friendsScores[i] < closestFriendScore) {
    closestFriendScore = friendsScores[i];
    closestFriendIndex = i;
  }
}

console.log(closestFriendIndex);

res.json(friends[closestFriendIndex]);
});
// for(var i = 0; i < friends.length;i++) {
//   var matchArray = [];
//   matchArray.push(match);
// };

//for(var x = 0; x < currentFriendScores.length;x++) {
 // var currentFriendScoresIndex = currentFriendScores[x];
 // var userScoresIndex = userScores[x];
//   var calculatedScores += Math.abs(parseInt(userScoresIndex) - parseInt(currentFriendScoresIndex));
//   var calculatedScoresArray = [];
//   calculatedScoresArray.push(calculatedScores);
// }

// function Sum(calculatedScoreArray) {
//   var totalDifference = 0;
//   for(var f = 0; f < friends.length;f++) {
//     totalDifference = totalDifference + calculatedScoreArray[f]; 
//   }
//   console.log(totalDifference);
// }

// if (totalDifference <= match.friendDifference) {
//   match.name = currentFriend;
//   match.photo = currentFriendImage;
//   match.friendDifference = totalDifference;
// }

// };

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

module.exports = app;