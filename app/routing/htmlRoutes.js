const express = require("express");
const path = require("path");

const app = express.Router();

app.get("/survey", function(req, res) {
    //catch all route that takes you to survey.html//
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  //catch all route that takes you to home.html//
});

module.exports = app;

