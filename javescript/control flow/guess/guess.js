var secretNum = 10;
var guessNum = Number(prompt("guess a number"));

	if (guessNum === secretNum) {
		alert("yosh");
	} else if (guessNum < secretNum) {
		alert("lo-fi");
	} else {
		alert("hi-fi");
	}