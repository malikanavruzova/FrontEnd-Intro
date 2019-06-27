$('img').attr("src");

$("img").attr("src", "rocket.jpeg");

$("input").attr("type","color");

$("img:first-of-type").attr("src","rocket1.jpeg"); //first of type is faster than "first" because it uses a built-in css selector

$("img").last().attr("src", "rocket2.jpeg");

//Val grabs the value from an input 
$("input").val();
//.val with an empty string is used to reset the text input 
$("select").val(); //what this does is grab the value of what the user selected from the dropdown menu
//return "Toad"

//MANIPULATING CLASSES

$("h1").addClass("correct"); //applies the CSS 
$("h1").removeClass("correct");

$("li").addClass("wrong");// with vanillaJS, what we would do is select the lis with querySelectorAll and loop through and add classList.add("wrong");

$("li").toggleClass("correct");

$("li").first().toggleClass("done");