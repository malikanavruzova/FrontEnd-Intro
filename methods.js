var obj = {
	name: "Chuck";
	age: 45,
	isCool: false;
	friends: ["Bob","Tina"],
	add: function(x,y) {
		return x+y;
	}
}

function speak() {
	return "Woof!";
}

function speak() {
	return "Meow!";
}
//With a method you can combine both: 

var dogSpace ={};
dogSpace.speak = function() {
	return"Woof!"
}

var catSpace ={};
catSpace.speak = function() {
	return"Meow!"
}
//if you are to summon a dog:

dogSpace.speak()
//"Woof!"

//KEYWORD THIS
var comments = {};

comments.data = ["Blah","Blah1","Blah2","Blah3","Blah4","Blah5"]
function print (arr) {
	arr.forEach(function(el)){
		console.log(el);
	}; //instead of writing arr.forEach you can write 
	this.data.forEach(function(el))
}
























