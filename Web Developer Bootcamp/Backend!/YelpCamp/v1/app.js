var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Sibbald Point", image: "https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/HowToSetUpACampsite1.jpg"}, 
		{name: "Granite Hill", image: "https://tinboxtraveller.co.uk/wp-content/uploads/2018/08/PRIMA-campsite-1024x660.jpg"}, 
		{name: "Cherry Beach", image: "https://grist.files.wordpress.com/2017/05/tent-campsite-by-river.jpg?w=1200&h=675&crop=1"}
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