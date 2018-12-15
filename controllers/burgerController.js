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

router.put("api/burgs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burg.update({
    plain: req.body.plain
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});

router.delete("api/burgs/:id", function(result) {
  var condition = "id = " + req.params.id;

  burg.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js
module.exports = router;