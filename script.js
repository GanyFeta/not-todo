const tasks = [];
let myTasks = document.querySelector("#myTasks");

const btn = document.querySelector("#add");
console.log(btn);

function addTask() {
	const inputStr = document.getElementById("input").value;
	console.log(inputStr);
	tasks.push(inputStr);
	console.log(tasks);
	const newLi = document.createElement("li");
	myTasks.appendChild(newLi);
	newLi.innerText = inputStr;
	// 	<input type="checkbox" />
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	newLi.appendChild(checkbox);
}
btn.addEventListener("click", addTask);
