function sayHello() {
	console.log ("Hello there!");
}
function sayHello(name) {
	console.log ("Hello there!" + name + "!");
}

function area(length, width) {
	console.log(length, width);
}
area(9,2); //18

// function square(x){
// 	console.log(x*x);
// }

function square(x){
	return x*x;
}

function capitalize(str) {
	if (typeof str === "number") {
		return "that's not a string!"
	}
	return str.chartAt(0). toUpperCase() + str.slice(1);
}
var city="paris"; //"paris"
var capital=capitalize(city) //"Paris"

var num =37;
var capital = capitalize(num); //"that's not a string!"

function test(x,y) {
	return y-x;
}

test(10,40); //30

function test(x) {
	return x*2;
	console.log(x); //these functions below don't run because after return all functions are stopped 
	return x/2;
}

test(40); //
