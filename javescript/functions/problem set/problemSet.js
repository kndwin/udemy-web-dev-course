function isEven (num) {
	var ans = false;
	if (num % 2 == 0) {
		ans = true;
	}
	return ans;
}

function factorial (num) {
	var ans = 1;
	if (num === 0 || num === 1) {
	} else {
		ans = num;
		while (num > 1) {
			ans = ans * (num - 1); 
			num--;
		}
	}
	return ans;
}

function kebabToUnderscore (str) {
	var returnStr = str.replace(/-/g, "_");
	return returnStr;
}