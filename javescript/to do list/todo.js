var li = document.querySelectorAll("li");


for (var i=0; i<li.length; i++) {
	li[i].addEventListener("mouseover", function(){
		console.log ("mouseover");
		this.classList.add("selected");
	})

	li[i].addEventListener("mouseout", function(){
		console.log ("mouseover");
		this.classList.remove("selected");
	})
	li[i].addEventListener("click", function(){
		this.classList.add("done");
	})
}
