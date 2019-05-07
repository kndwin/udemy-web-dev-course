console.log ("problem 1");
var num = -10;
while (num < 20) {
	console.log (num);
	num++;
}

console.log ("problem 2");
num = 10;
while (num < 41) {
	console.log (num);
	num+=2;
}

console.log ("problem 3");
num = 300;
while (num < 333) {	
	if (num % 2 !== 0) {
		console.log (num);
	}	
	num++;
}

console.log ("problem 4");
num = 5;
while (num < 50) {
	if (num % 3 === 0 && num % 5 === 0) {
		console.log (num);
	} 
	num++;
}