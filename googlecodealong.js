var logo =document.querySelector("#hplogo"); //run

logo //run
//it'll spit out the html of where the id is 
//to change the source use setAttribute

logo.setAttribute("src", "http://www.cutecat.com/kitten.png");
//to change the width and height>>>>>
logo.style.width ="500px"
logo.style.height ="100px";
logo.style.border ="2px solid purple";

//TO SELECT ALL THE ANCHOR TAGS>>>
var links =document.getElementsByTagName("a")
for (var i=0; i<links.length; i++) {
	console.log(links[i].textcontent)
}
//this will show the names of the links 

//TO CHANGE THE COLOUR OF THE LINKS >>>
var links =document.getElementsByTagName("a")
for (var i=0; i<links.length; i++) {
	links[i].style.background="pink"
}

//TO DISPLAY ALL THE LINKS IN THE CONSOLE>>>
for (var i=0; i<links.length; i++) {
	console.log(links[i].getAttribute("href"));
} //this will display all the links

//TO CHANGE THE LINKS TO BING.COM>>>
for (var i=0; i<links.length; i++) {
	links[i].setAttribute("href", "http://www.bing.com");
}
