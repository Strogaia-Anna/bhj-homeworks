let form = document.getElementById('tasks__form');
let task = document.getElementsByClassName('template')[0];
let taskList = document.getElementById('tasks__list');
form.addEventListener('submit', handler);
function handler () {
    let newTask = document.getElementById('task__input').value;

    if (newTask) {
        let div = task.cloneNode(true);
        div.classList.remove('template');
        div.getElementsByClassName('task__title')[0].textContent = newTask;
        let remove = div.getElementsByClassName('task__remove')[0];
        remove.addEventListener('click', () => div.remove());
        taskList.appendChild(div);
    }
}

