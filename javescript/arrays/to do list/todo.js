console.log ("connected!");

var todos = [];
var input = prompt ("what would you like to do?");

while (input !== "quit") {
	if (input === "list") {
		listTodo();
	} else if (input === "new") {
		newTodo();
	} else if (input === "delete") {
		deleteTodo();
	}
	input = prompt ("what would you like to do?");
}

console.log ("goodbye!");

function listTodo () {
	console.log ("==============")
	todos.forEach(function(todos, i) {
		console.log (i + ": " + todos);			
	});
	console.log ("==============")
}

function newTodo () {
	var newTodo = prompt ("enter!")
	todos.push(newTodo);
}

function deleteTodo () {
	var index = prompt ("which one would you like to delete?");
	todos.splice(index, 1);
}