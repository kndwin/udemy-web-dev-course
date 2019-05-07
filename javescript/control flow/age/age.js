var age = prompt ("what's ur age")

if (age < 0) {
	alert ("error")
} else if (age === 21) {
	alert ("21")
} if (age % 2 === 1) {
	alert ("odd")
} if (age % Math.sqrt(age) === 0) {
	alert ("perfect sq")
} else {
	alert (age)
}