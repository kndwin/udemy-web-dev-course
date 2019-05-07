var numOfSquares = 6;
var colors = [];
var pickedColor;

init();

function init(){
    setupModeButton();
    setupSquares();
    reset();
}

function setupModeButton() {
    $(".mode").click(function(){
        $(".mode").removeClass("selected"); // remove both highlights
        $(this).addClass("selected");       // add the correct one
        if ($(this).text() === "easy") {    // set numOfSquares
            numOfSquares = 3;
        } else {
            numOfSquares = 6;
        }
        reset();
    })
}

function setupSquares(){
    $(".square").css("background", colors);
    $(".square").click(function(){
        var clickedColor = $(this).css("backgroundColor");
        if( clickedColor === pickedColor) {
            $("#message").text("Correct!");
            changeColors(clickedColor);
            $("h1").css("backgroundColor", clickedColor);
            $("#reset").text("Play again?");
        } else {
            $(this).css("backgroundColor", "#232323");
            $("#message").text("Try again!");
        }
    })
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    $("#colorDisplay").text(pickColor());
    $("#reset").text("New colour");
    $("#message").text("");
    var i=0;
    $(".square").each(function(){
        if (colors[i]) {
            $(this).css("display", "block");
            $(this).css("background", colors[i]);
        } else {
            $(this).css("display", "none");
        }
        i = i+1;
    })
    $("h1").css("background", "steelblue");
}

$("#reset").click(function(){
    reset();
})

function changeColors (color) {
    $(".square").css("backgroundColor", color);
}

function pickColor() {
	var random = Math.floor (Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num) {
	var arr = [];
	for (var i=0; i<num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	var string = "rgb(" + r + ", " + g + ", " + b + ")";
	return string;
}
