function printReverse(array) {
	var tempArray = [0];
	for (i=0; i<array.length; i++) {
		tempArray[i] = array[array.length-1-i];
	}
	return tempArray;
}

// test case
console.log (printReverse([1,2,3,4]));

function isUniform(array) {
	var firstIndex = array[0];
	var ans = true;
	for (i=0; i<array.length; i++) {
		if (array[i] !== firstIndex) {
			ans = false;
		}
	}
	return ans;
}
// test case
console.log (isUniform([1,2,3,1]));
console.log (isUniform([1,1,1,1]));
// sumArray([])

function sumArrayFor (array) {
	var sum = 0;
	for (i=0; i<array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function sumArrayForEach (array) {
	var sum = 0;
	array.forEach(function(i) {
		sum += i;
	})
	return sum;
}

// test case
console.log (sumArrayTwo([1,2,3,1]));
console.log (sumArrayTwo([1,1,1,1]));

function max (array) {
	var max = array[0];
	for (i=0; i<array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

// test case
console.log (max([1,2,3,4]));