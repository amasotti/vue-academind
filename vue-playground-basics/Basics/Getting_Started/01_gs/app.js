/*

Simple task list with an add and remove button, all written in 
vanilla JS

*/

const btnAdd = document.querySelector("button");
const btnRm = document.getElementById("remove");
const inpEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inpEl.value;
  let listItem = document.createElement("li");
  listItem.textContent = enteredValue;
  listEl.append(listItem);
  inpEl.value = "";
  inpEl.focus();
}

function rmGoal() {
  listEl.removeChild(listEl.lastElementChild);
}

btnAdd.addEventListener("click", addGoal);
btnRm.addEventListener("click", rmGoal);
