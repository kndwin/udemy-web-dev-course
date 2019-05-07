alert ("connected!");

var answer = prompt ("are we there yet?");

while (answer.indexof("yes") === -1 && answer.indexof("yeah") === -1) {
	answer = prompt ("are we there yet?");
}

