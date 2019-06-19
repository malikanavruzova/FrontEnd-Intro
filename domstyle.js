//DEFINE A CLASS IN CSS
.another-class{
	color: purple;
	fontSize: 76px;
}

var tag = document.querySelector("h1");

//ADD A CLASS TO THE SELECTED ELEMENT 
tag.classList.add("another-class");

//REMOVE A CLASS 
tag.classList.remove("another-class");

//TOGGLE A CLASS;
tag.classList.toggle("another-class");

//IF WE WANT TO MAKE A PARAGRAPH HAVE A RED BORDER 
//first, in a style tag or sheet
.big {
	font-size:100px;
	color: orange;
	border: 5px solid red;
}
//then in our console we write 
var p= document.querySelector("p");
//then we run that and we get our p and then

p.classList.add("big"); //voila, it willl turn our text orange with a red border 
//if we want to remove it then we do 

p.classList.remove("big");

p.classList.toggle("big"): //if there is no class assigned then toggle will assign it itself and if it is already assigned then it will remove it 
//may be used for todo lists to cross something out and uncross it 




//textContent : RETURNS A STRING OF ALL THE TEXT CONTAINED IN A GIVEN ELEMENT

<p> 
This is an <strong>awesome</strong> paragraph
</p>

//Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent //"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah" "blah" "blah"

//TO CHANGE SOMETHING (like an h1)

document.querySelector("h1").textContent= "END OF THIS LESSON!";

//TO SEE THE HTML ATTRIBUTES IN A LINE 

ul.innerHTML //when you run, it will show up with the html tags attached


//ATTRIBUTES: use getAttribute() and setAttribute() to read and write attributes like src and href
//right now you have two images of corgis 

var img1=document.getElementByTagName("img")[0] //retrieving the html basically of img which gives us its source 

// img1 will pop up with its name <img src="dog.png">
img1.getAttribute("src");
"dog.png" //it'll give us its source 
//if we wanted to change the image >>>

img1.setAttribute("src", "corgi.png"); //HAVE TO SET IT AS THE SECOND ARGUMENT

//FOR LINKS 
//in the HTML>>> <a href=www.google.com">LINK TO GOOGLE</a>

var a = document.querySelector("a"); //run that 

a.setAttribute("href", "http://www.corgi.com"); //not a because it's not src, it's href
//TO UPDATE LINK NAME 

a.textContent="LINK TO CORGIS"


///IMPORTANT IT'S NO LONGER SRC IT'S SRCSET































