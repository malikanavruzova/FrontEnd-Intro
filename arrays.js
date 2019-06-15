var friends = []; //no friends :(
var friends = new Array() //uncommon 

var random_collection =[49, true, "Hermione"]

var nums = [45,37,89,24];
nums.length //4

var colours = ["red", "orange", "yellow"];
colours.push("green"); //to add an item

var colours = ["red", "orange", "yellow"];
colours.pop(); //to remove an item

var colours = ["red", "orange", "yellow"];
colours.unshift("infrared") //will add "infrared" to the beginning of the code

var nums = [34,54,22];
nums. unshift ("hello");
//4
nums 
//["hello", 34, 54, 22]
nums.shift()
//"hello"

nums 
//[34, 54, 22]

//SLICE

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1,3)

//you can also use slice() to copy an entire array
var nums =[1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]

//EXERCISES 
//1 
var numbers=[22,67,33,96,88];
//what does the following line print?
console.log(numbers[numbers.length])
//answer
undefined //because you're asking to print the 5th number in the array which doesnt exist 
//2
var friendGroups = [
	["Harry", "Ron", "Hermione"],
	["Barry", "Bon", "Bermione"],
	["Garry", "Gon", "Germione"],
];
//What is the result of this line;
console.log(friendGroups[2][0]);
//answer
friendGroups [2][0]
"Garry" //since you're asking for the first item in the third nested array





















