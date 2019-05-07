alert ("CONNECTED");

var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var isPurple = false;
button.addEventListener("click", function(){
//	alert("it clicked");
//	paragraph.textContent = "it clicked"; 
	if (isPurple){
		document.body.style.background = "purple";
	} else
		document.body.style.background = "white";
		isPurple = !isPurple
});