function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task === '') {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerText = task;

    const closeButton = document.createElement('span');
    closeButton.innerText = '×';
    closeButton.className = 'close';
    closeButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(closeButton);
    taskList.appendChild(li);
    taskInput.value = '';
}
