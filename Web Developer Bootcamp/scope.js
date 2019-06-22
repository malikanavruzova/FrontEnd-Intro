// function doMath(){
// 	var x=40;
// 	console.log(x)
// 

function sing() {
	console.log("twinkle twinkle...")
	console.log("how I wonder...")
}

setInterval(sing, 1000); //set interval returns a number that we use to stop it 

setInterval(function(){
	console.log ("I am an anonymous function");
	console.log ("THIS IS AWESOME");
} 2000); //this will play the two lines every 2 seconds