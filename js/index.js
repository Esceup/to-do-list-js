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
    task.classList.add('listItem')
    const nameTaskValue = nameTask.value;

    task.innerHTML = `<input type='checkbox'  class='select check'> 
    <span class="taskValue"> ${nameTaskValue}</span> 
    
    <button class='deleteTask btn btnDelete' disabled> Удалить</button >`;

    const deleteBtn = task.querySelector('.deleteTask');
    deleteBtn.addEventListener('click', deleteTask);
    
    list.appendChild(task);

    nameTask.value = '';

    const check = task.querySelector('.check');
    const removeBtn = task.querySelector('.btnDelete');
    check.addEventListener('change', function () {
        if (check.checked) {
            removeBtn.disabled = false;
        } else {
            removeBtn.disabled = true;
        }
    });
    
}


btnAdd.addEventListener('click', addNewAction);








//remove - 
//style - 