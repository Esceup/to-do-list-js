const btnAdd = document.querySelector('.btn');
const list = document.querySelector('.list');
const nameTask = document.querySelector('.nameTask')

const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.remove();
}

const addNewAction = () => {
    //добавления нового экшиона в туду листе
    const task = document.createElement('li');

    const nameTaskValue = nameTask.value;

    task.innerHTML = `<input type='checkbox' class='task-select'> <span> ${nameTaskValue}</span> <button class='delete-task'>Remove</button>`;
    const deleteBtn = task.querySelector('.delete-task');
    deleteBtn.addEventListener('click', deleteBtn)

    list.appendChild(task);

    nameTask.value = '';
}

btnAdd.addEventListener('click', addNewAction);

//remove - 
//style - 
