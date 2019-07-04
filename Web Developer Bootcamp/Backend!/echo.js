//NODE EXERCISE

//Write a function named echo that takes 2 arguments: a string and a number 
//It should print out the string and the number, a number of times

function echo(str, num){
	for (var i=1; i<=num; i++){
		console.log (str);
	}
}

echo("Echo!!", 10)
echo("Tater Tots", 3)