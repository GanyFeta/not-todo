let inputStr = "";
const tasks = [];
let myTasks = document.querySelector("#myTasks");

const btn = document.querySelector("button");
console.log(btn);

function addTask() {
	inputStr = document.getElementById("input").value;
	console.log(inputStr);
}

addTask();
