const express = require("express");
var path = require("path");
const router = require("express").Router();

router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

module.exports = router;

// module.exports = function(app){
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
  
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
//   });
// };