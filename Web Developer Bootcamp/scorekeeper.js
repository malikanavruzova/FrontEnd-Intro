var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");

var gameOver=false;
var winningScore=5;

var p1Score=0;
var p2Score=0;

p1Button.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score==winningScore) {
			p1Display.classList.add("winner");
			gameOver=true;
		}
		p1Display.textContent=p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score==winningScore){
			p2Display.classList.add("winner");
			gameOver=true;
		}
		p2Display.textContent=p2Score;
	}
});

//FOR THE RESET BUTTON TO WORK:
//p1 and p2 score have to go back to 0
//the values in player 1 and 2 displays have to go back to 0 
//and the colour class needs to be removed
//gameOver has to false so the code can run again 

var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click", function(){
	reset();
});

function reset (){
	p1Score=0
	p2Score=0 //obviously you dumbass smh 
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent= Number(numInput.value); //however, if in the middle of the game, you decide to change the score, the code doesn't work
	winningScore=numInput.value;
	reset();
})

//.value is a string of whatever is in that input 



























	
