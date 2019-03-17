var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelector(".mode");

for(var i=0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

	})
}

function reset(){
		colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickColor();
	this.textContent = "new colours";
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "#steelblue";
}

// easybtn.addEventListener("click", function(){
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardbtn.addEventListener("click", function(){
// 	easybtn.classList.remove("selected");
// 	hardbtn.classList.add("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

colorDisplay.textContent = pickedColor;

console.log(resetButton);

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickColor();
	this.textContent = "new colours";
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "#steelblue";
})


for(var i=0; i<squares.length; i++) {
	// add colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "correct!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "play again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "try again"
		}
	})
}

function changeColors (color) {
	for (var i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor (Math.random() * colors.length);
	return colors[random];
	// random number from 1 - 6
}

function generateRandomColors (num) {
	var arr = [];
	for (var i=0; i<num; i++) {
		arr.push(randomColor());
	}
	//	console.log (arr);
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	var string = "rgb(" + r + ", " + g + ", " + b + ")";
	return string;
}
