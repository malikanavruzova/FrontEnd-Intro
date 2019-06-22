var tag = document.getElementsByID("highlight");

// to get element by id, all we have to do is call the method, we pass a single string argument the name of the id that we want and it goes and finds the object with the matching id and returns it to us

var tags = document.getElementsByClassName ("bolded");
console.log (tags[0]);
//returns a list, not quite an array and it contains every element on the page that matches the given class name we provided

var tags = documents.getElementsByTagName ("li");

//even if there's only 1 element, it still returns a node list based on an element type


//QUERY SELECTOR 

//select by ID

var tag = document.querySelector("#highlight"); //returns the first element of a given css selector 

var lis=document.querySelectorAll("li")
//run 
lis // will return all the html(javascript objects that are constructed from the html) that is inside an li 


var tag = document.getElementsByID("first");
var tags = document.getElementsByClassName ("special") [0] //add the zero there because it automatically selects the first one there 
var tags = documents.getElementsByTagName ("p")[0];
var tag = document.querySelector("#first");
var tag = document.querySelector(".special"); //you can use this one as well since it gives the first result anyways
