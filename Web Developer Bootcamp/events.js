//A FUNCTION TO RUN FOR WHEN A BUTTON IS CLICKED>>>>>>>>
element.addEventListener(sype, functionToCall);

var button=document.querySelector("button");
button.addEventListener("click",function(){
	console.log("SOMEONE CLICKED THE BUTTON!");
});

//TO DISPLAY A MESSAGE FOR WHEN A BUTTON IS CLICKED>>>>>>>
// <button>CLICK Moi</button>        <<<<<HTML>>>>>>
// <p>personne me cliquer encore</p> <<<<<HTML>>>>>>

var button=document.querySelector("button");
var paragraph=document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function(){
	paragraph.textContent="Someone clicked the button!";
}) 
//CHANGE H1 BACKGROUND COLOR 
h1.addEventListener ("click", function(){
	h1.style.background="orange"
});
//CHANGE COLOUR OF CERTAIN LIS
var lis=document.querySelectorAll ("li")
//add a for loop for the function to run 
for (var i=0; i<lis.length; i++) {
	lis[i].addEventListener("click" function(){
		this.style.color="pink";
	});
}
//REWRITE CODE USING A NAMED FUNCTION
var button=document.querySelector("button");
var paragraph=document.querySelector("p");

button.addEventListener("click",changeText);

function changeText() {
	paragraph.textContent= "Someone clicked the button";
}
