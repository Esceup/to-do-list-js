const btnAdd = document.querySelector('.btn');
const list = document.querySelector('.list');
const nameTask = document.querySelector('.nameTask')
const defoltTask = document.querySelector('.defoltTasks');


const getDefoltTasks = () => {
    const promiseObj = fetch('https://jsonplaceholder.typicode.com/todos');
    promiseObj.then((res) => {
        console.log('im completed');
        console.log('res:', res);
        return res.json();
    }).then((result) => {
        //resul - arr - obj
        //data ready to work
        console.log('resul',result)
        addNewTasks(result)
    })

}

defoltTask.addEventListener('click', getDefoltTasks)


const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.remove();
}

const addNewTasks = (tasks) => {
    tasks.map((task, item) => {

        const taskEl = document.createElement('li');
        taskEl.classList.add('listItem');
        taskEl.innerHTML = `<input type='checkbox' class='checkbox-todo select check'> 
        <span class="taskValue"> ${task?.title}</span> 
        <button class='deleteTask btn btnDelete' disabled> Удалить</button >`;

        const checkboxEl = taskEl.querySelector('.checkbox-todo');
        checkboxEl.checked = task.completed;

        list.appendChild(taskEl);
    })


}

const addNewAction = () => {
    //добавления нового экшиона в туду листе
    const task = document.createElement('li');
    task.classList.add('listItem');
   
    const nameTaskValue = nameTask.value

   

    task.innerHTML = `<input type='checkbox'  class='select check'> 
    <span class="taskValue"> ${nameTaskValue}</span> 
    
    <button class='deleteTask btn btnDelete' disabled> <img src="/img/1.png"></button >`;

    const deleteBtn = task.querySelector('.deleteTask');
    deleteBtn.addEventListener('click', deleteTask);
    
    if (nameTaskValue === '') {
        alert('Вы ничего не ввели...');
    } else {
        // list.appendChild(task);
        list.prepend(task);
    }
   

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