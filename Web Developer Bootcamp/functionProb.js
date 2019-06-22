// function isEven(x) {
// 	if (x%2 ===0) {
// 		return true;  
// 	}
// 	else {
// 		return false
// 	}
// }

function isEven(x){
	return x%2 ===0;
}

function factorial(n) {
	if (n==0) {
		return 1
	}
	else {
		return (n*factor(n-1));
	}
} 

function kebabToSnake(str) {
	var snake=str.replace(/-/g, "_");
	return snake;
}

