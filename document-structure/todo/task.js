let form = document.getElementById('tasks__form');
let taskList = document.getElementById('tasks__list');
let tasks = document.getElementsByClassName('task');
for (let i = 0; i < localStorage.length; i++) {
    let storedElement = localStorage.getItem(localStorage.key(i));
    taskList.insertAdjacentHTML('beforeend', storedElement);
    let task = tasks[tasks.length - 1];
    let deleteBtn = task.getElementsByClassName('task__remove')[0];
    deleteBtn.addEventListener('click',  () => {
      task.remove()
      localStorage.removeItem(`${i}`)
    });

}  
form.addEventListener('submit', handler);
function handler (event) {
    event.preventDefault();
    let newTask = document.getElementById('task__input').value.trim();
    
    if (newTask) {
      let element = `
        <div class="task">
          <div class="task__title">
            ${newTask}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
      `;
      let index = `${tasks.length}`;
      localStorage.setItem(index, element);
      taskList.insertAdjacentHTML('afterbegin', element);
      let div = tasks[0];
      let remove = div.getElementsByClassName('task__remove')[0];
      remove.addEventListener('click', () => {
        div.remove()
        localStorage.removeItem(index)
      });
    }
}



