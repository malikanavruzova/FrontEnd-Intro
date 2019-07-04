//Define a new function called "average"
//It should take a single parameter: an array of test scores, all numbers 
//It should return the average score in the array, rounded to the nearest whole number 

function average (scores){
	//add all scores
	var total = 0; 
	scores.forEach(function(score){
		total += score;
	});
	//divide by total number of scores
	var avg = total/scores.length;
	//round
	return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
