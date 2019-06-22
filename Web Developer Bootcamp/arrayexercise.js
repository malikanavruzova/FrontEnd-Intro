printReverse([1,2,3,4]);

function printReverse(input){
	for (var i = input.length - 1; i >= 0; i--) {
		console.log(input[i]);
	}		
}

printReverse(["a","b","c"]);



isUniform ([1,1,1,1]);
isUniform ([2,1,1,1]);
isUniform(["a","b","p"]);
isUniform(["b","b","b"]);

function isUniform(arr) {
	var firstNumber=[0];
	for (var i = 0; i<arr.length; i++) {
		if (arr[i] !=== firstNumber) {
			return "false"
		}
	}
	return "true";
}
	
sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]); 

function sumArray(arr) {
	var result= 0;
	for (var i = 1; i<arr.length; i++) {
		result +=arr[i];
	} return result
}
//OR

function sumArray(arr) {
	var result= 0;
	arr.forEach(function(sum){
		result +=sum;
	})
	} return result


max([1,2,3]); //use a loop and a variable that will store the max number 
max([10,3,10,4]);

function max (arr) {
	var max= arr[0];
	for (var i=0; i<arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max; 
}

max([-5,100]);
































