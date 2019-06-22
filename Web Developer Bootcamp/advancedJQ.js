//**********ALWAYS CHECK IS JQUERY IS LOADED***************

//*************Click()**************
//Quick and easy way to add a click listner to elements

//prints when item with id "submit" is clicked 
$('#submit').click(function(){
	console.log("Another click");
});

//alerts when ANY button is clicked 
$("button").click(function(){
	alert("Someone clicked a button");
});

$("button").click(function(){
	$("this").css("background","pink") //wrap the vanillaJS "this" function in a jQuery hug since .css is a jQuery method, we need to wrap the object in jQuery as well. 
})

//To console.log whatever was clicked

$("button").click(function(){
	var text= $("this").text();
	console.log("You clicked " + text);
})

// *********** KEYPRESS() **************
//quick and easy way to add a keypress listener to elements
//fires inbetween keyup and down usually 

$("input").keypress(function(event){ //the event function contains all information about the keypress event
	if(event.which===13){
		alert("YOU HIT ENTER!");
	}
	console.log("YOU PRESSED A KEY!");
});

// *********** ON() ***************
//works similarly to addEventListener. Lets you specify the type of event to listen for.

$("h1").on("click" function(){
	$("h1").css("color", "purple");
}) //this is fine but it will wrap ALL the h1s 

$("h1").on("click" function(){
	$("this").css("color", "purple");
}) //change the color of the clicked h1

$("input").on("keypress" function(){
	console.log("Key pressed!");
})

$("button").on("mouseenter" function(){
	$("this").css("font-weight", "bold");
})
$("button").on("mouseleave" function(){
	$("this").css("font-weight", "normal");
});

// *************** WHY USE ON() *******************
//click() only adds listeners to existing elements 
//on() will add listeners for all potential future elements 

//*********************** EFFECTS *********************************
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		console.log("Fade Completed") //by doing it inside a callback function, the console.log will wait for the 1 second fade and then declare that fade is completed!
		//OR 
		$("this").remove();
	});
});
























