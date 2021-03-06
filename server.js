var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static
app.use(express.static("public"));

// Parse app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Start server
app.listen(PORT, function() { 
// log when the server has started
console.log("Server listening on: http://localhost:" + PORT);
});