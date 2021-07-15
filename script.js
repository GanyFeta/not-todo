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
	newLi.className = "listItem";
	newLi.appendChild(checkbox);
	// if checkbox is checked line-trhough
	checkbox.addEventListener("click", function () {
		if (newLi.className != "checked") {
			newLi.className = "checked";
		} else {
			newLi.className = "";
		}
	});

	//console.log(checkbox.checked);
}
btn.addEventListener("click", addTask);
