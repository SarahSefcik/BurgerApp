var express = require("express");

var router = express.Router();

// Import the model
var burg = require("../models/burger.js");

// Create all routes and logic within
router.get("/", function(req, res) { 
  burg.all(function(data) { 
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgs", function(req, res) {
  burg.create([
    "name", "plain"
  ], [
    req.body.name, req.body.plain
  ], function(result) { 
    res.json({ id: result.insertId });
  });
});


// Export routes for server.js