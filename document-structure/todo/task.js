let form = document.getElementById('tasks__form');
let taskList = document.getElementById('tasks__list');
let tasks = document.getElementsByClassName('task');
let lSTasks = JSON.parse(localStorage.getItem('tasks')) || [];
for (let i = 0; i < lSTasks.length; i++) {
  let storedElementData = lSTasks[i];
  let storedElement =  `
  <div class="task">
    <div class="task__title">
      ${storedElementData}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>
`;
    taskList.insertAdjacentHTML('beforeend', storedElement);
    let task = tasks[tasks.length - 1];
    let deleteBtn = task.getElementsByClassName('task__remove')[0];
    deleteBtn.addEventListener('click',  () => {
      task.remove()
      lSTasks.splice(lSTasks.indexOf(storedElementData), 1);
      localStorage.setItem('tasks', JSON.stringify(lSTasks));
    });

}  
form.addEventListener('submit', handler);
function handler (event) {
    event.preventDefault();
    let el = document.getElementById('task__input');
    let newTask = el.value.trim();
    
    if (newTask) {
      let element = `
        <div class="task">
          <div class="task__title">
            ${newTask}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
      `;
      el.value = null;
      lSTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(lSTasks));
      taskList.insertAdjacentHTML('afterbegin', element);
      let div = tasks[0];
      let remove = div.getElementsByClassName('task__remove')[0];
      remove.addEventListener('click', () => {
        div.remove()
        lSTasks.splice(lSTasks.indexOf(newTask), 1);
        localStorage.setItem('tasks', JSON.stringify(lSTasks));
      });
    }
}



