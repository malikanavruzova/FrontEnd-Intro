var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");

var gameOver=false;
var winningScore=5;

var p1Score=0;
var p2Score=0;

p1Button.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score===winningScore) {
			console.log("GAME OVA BITCH")
		}
		p1Display.textContent=p1Score;
	}
});

p2Button.addEventListener("click", function(){
	p2Score++;
	p2Display.textContent=p2Score;
});