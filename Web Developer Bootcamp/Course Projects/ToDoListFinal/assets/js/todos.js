//Check off specific ToDos by Clicking 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//***** ALTERNATIVE ******
// //If li is gray 
// 	if ($(this).css("color")==="rgb(128, 128, 128)") {
// 		//we turn it black
// 		$(this).css ({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else {
// 		$(this).css ({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove(); //"this" refers to the li, not the span 
	});
	event.stopPropagation(); //THIS WILL STOP A PHENOMENON CALLED EVENT BUBBLING
});

$("input[type='text'").keypress(function(event){
	if ((event).which===13) {
		//grab new todo text from input;
		var todoText =$(this).val(); 
		$(this).val("");
		//create a new li and add to ul 
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});