
var todos=["Buy new shoes"];

var input=prompt("What would you like to do?")

while(input !=="quit") {
	//handle input 
	if (input==="list") {
		listTodos()
	}   else if (input==="new") {
		addTodo()
	}   else if (input==="delete") {
		deleteTodo()
	}
	//ask again for new input
	input = prompt("What would you like to do?");
} 
console.log("OK, you quit the app");

function listTodos (){
	console.log("******************")
	todos.forEach(function(todo, index){
		console.log(index + ": "+ todo);
		}); 
	console.log("******************")
}
function addTodo () {
	//ask for new todo
	var newToDo =prompt("Enter new todo");
	//add to todos array
	todos.push(newToDo);
	console.log("Added todo");
}

function deleteTodo () {
	var index=prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted todo");
}






















// //ForEach

// arr.forEach(someFunction)

// var colors = ["red","orange","yellow","green"];

// colors.forEach(function(color){
// 	console.log(color);
// })


// //EXERCISE:
// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var colors = ["red","orange","yellow","green"];

// numbers.forEach(function(color) {
// 	if(color%3===0 {
// 		console.log(color);
// 	}
// });







































// window.setTimeout(function() {
//   // put all of your JS code from the lecture here
// }, 500);
