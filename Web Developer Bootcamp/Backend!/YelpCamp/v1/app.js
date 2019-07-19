var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Sibbald Point", image: "https://farm7.staticflickr.com/6145/5999735449_f66fb10bf4_b.jpg"}, 
		{name: "Granite Hill", image: "https://live.staticflickr.com/1071/882242386_ddcd5e0563_b.jpg"}, 
		{name: "Cherry Beach", image: "https://live.staticflickr.com/2713/4348509290_9fc198bab8_b.jpg"}
	]

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back to camgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(3000, function(){
	console.log("YelpCamp Server has started!");
})