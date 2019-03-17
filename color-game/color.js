var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButton();
    setupSquares();
    reset();
}

function setupModeButton() {
    for(var i=0; i<modeButtons.length; i++) {
    	modeButtons[i].addEventListener("click", function(){
    		modeButtons[0].classList.remove("selected");
    		modeButtons[1].classList.remove("selected");
    		this.classList.add("selected");
            this.textContent === "easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
    	});
    }
}

function setupSquares(){
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
}

function reset(){
    colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickColor();
	resetButton.textContent = "new colours";
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
	}
	h1.style.background = "steelblue";
}

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
