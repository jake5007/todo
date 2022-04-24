const toDoForm = document.querySelector("#toDoForm");
const toDoInput = toDoForm.querySelector("input[type='text']");
const toDoList = document.querySelector("#toDoList");

let toDos = [];


function saveToDo() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function checkToDo(event) {
    event.target.classList.toggle("lineCheck");
}

function removeToDo(event) {
    const id = event.target.parentElement.id;
    event.target.parentElement.remove();
    toDos = toDos.filter((item) => {
        if(item.id != id)
            return true;
    });
    saveToDo();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "❌";

    li.innerText = newToDoObj.text;
    li.id = newToDoObj.id;
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", removeToDo);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const newToDoObj = {
        text: toDoInput.value,
        id: Date.now()
    };
    paintToDo(newToDoObj);
    toDoInput.value ="";

    toDos.push(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleFormSubmit);

if(localStorage.getItem("toDos") != null){
    toDos = JSON.parse(localStorage.getItem("toDos"));
    toDos.forEach(paintToDo);
}