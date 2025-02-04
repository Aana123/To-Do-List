function addTasks() {
    const newTodo = document.createElement('li');
    const taskList = document.getElementById('task');
    //Selecting the text from input 
    newTodo.textContent = document.getElementById('inputTask').value
    if (newTodo.textContent == "") {
        alert('Please enter a task!')
    } else {
        taskList.appendChild(newTodo);    
    }
    //After adding one task the input field becomes empty 
    document.getElementById("inputTask").value = "";
    checkBox(newTodo);
}

let addButton = document.querySelector(".submit");
addButton.addEventListener("click", addTasks);

function checkBox(newTodo){
    const addCheckbox = document.createElement("button");
    let count = 0;
    addCheckbox.classList.add('checkBox');
    newTodo.appendChild(addCheckbox);
    addCheckbox.onclick = function () {
        if (addCheckbox.classList.contains("checked")) {
            addCheckbox.innerHTML = '<i class="fas fa-trash"></i>';
            addCheckbox.classList.add(".fa-trash");
            addCheckbox.classList.remove("checked");
        } else {
            addCheckbox.classList.add("checked");
        }
        if (newTodo.classList.contains("strike")) {
            newTodo.classList.remove("strike");
        } else {
            newTodo.classList.add("strike");
        }    
        
        if (count == 2) {
            newTodo.remove();
        }
        count++;
    }
}
