// create secret number
var secretNumber =4

// ask user for guess
var guess= Number(prompt("Guess a number"));

// OR you can do it like 
// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);

// check if guess is right 
if (Number(guess) === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}
// otherwise, check if higher 
else if (guess>secretNumber){
	alert("Too high. Guess again!")
}

// otherwise, check if lower
else {
	alert("Too low. Guess again!")
}