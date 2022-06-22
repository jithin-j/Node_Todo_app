var express = require("express");
var todoController = require("./controllers/todoController");

var app = express();

//set up view engine
app.set("view engine", "ejs");

//static files
app.use(express.static("./public"));

//Fire controller
todoController(app);

//Set up port
app.listen(3000);
console.log("you are listening to port 3000...");
