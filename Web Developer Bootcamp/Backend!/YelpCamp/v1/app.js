var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Landing page in the works!");
});

app.listen(3000, function(){
	console.log("YelpCamp Server has started!");
})