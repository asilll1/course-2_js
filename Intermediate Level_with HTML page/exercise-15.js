let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        tasks.push({ text: task, done: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        if (task.done) {
            li.style.textDecoration = 'line-through'; // Mark done tasks with strikethrough
        }

        const markDoneButton = document.createElement('button');
        markDoneButton.textContent = task.done ? 'Undo' : 'Done';
        markDoneButton.onclick = () => markTaskDone(index);

        li.appendChild(markDoneButton);
        taskList.appendChild(li);
    });
}

function markTaskDone(index) {
    tasks[index].done = !tasks[index].done; // Toggle the done status
    renderTasks();
}
