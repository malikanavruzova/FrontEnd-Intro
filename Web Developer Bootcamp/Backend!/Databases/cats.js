var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add a new cat to the database 
var Georgy = new Cat({
	name: "Georgy", 
	age: 11,
	temperament: "Grouchy"
});

george.save(function(err, cat){
	if(err){
		console.log("Something went WRONG")
	}
});
//retrieve all cats from the DB and console.log each one 