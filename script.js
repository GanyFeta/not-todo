const tasks = [];
const myTasks = document.querySelector("#myTasks");
const btn = document.querySelector("#add");
let persistedTasks = "tasks";
//console.log(btn);

function addTask() {
	const inputStr = document.getElementById("input").value;
	//	console.log(inputStr);
	tasks.push(inputStr);
	//	console.log(tasks);
	const newLi = document.createElement("li");
	myTasks.appendChild(newLi);
	newLi.innerText = inputStr;
	// 	<input type="checkbox" />
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	newLi.appendChild(checkbox);
	// css checkbox: .checked
	// if checkbox is checked line-trhough
	checkbox.addEventListener("click", function () {
		newLi.className = "checked";
	});

	//console.log(checkbox.checked);
}
btn.addEventListener("click", addTask);

function checkedIsChecked(event) {
	console.log(checked);
}
