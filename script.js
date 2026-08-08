const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskBody = document.getElementById("taskBody");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Please Enter a Task");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <input type="checkbox" class="check">
        </td>

        <td class="taskText">
            ${task}
        </td>

        <td>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    taskBody.appendChild(row);

    taskInput.value = "";

    // Checkbox
    const check = row.querySelector(".check");
    const taskText = row.querySelector(".taskText");

    check.addEventListener("change", function(){

        if(check.checked){
            taskText.classList.add("completed");
        }else{
            taskText.classList.remove("completed");
        }

    });

    // Delete
    const deleteBtn = row.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function(){

        const result = confirm("Are you sure you want to delete this task?");

        if(result){
            row.remove();
        }

    });

}