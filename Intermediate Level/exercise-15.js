const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todoList = [];

const manageTodoList = () => {
    rl.question('Enter a command (add/view/complete/exit): ', (command) => {
        if (command === 'add') {
            rl.question('Enter a task: ', (task) => {
                todoList.push({ task, completed: false });
                console.log('Task added.');
                manageTodoList();
            });
        } else if (command === 'view') {
            console.log('To-Do List:');
            todoList.forEach((item, index) => {
                console.log(`${index + 1}. [${item.completed ? 'x' : ' '}] ${item.task}`);
            });
            manageTodoList();
        } else if (command === 'complete') {
            rl.question('Enter the task number to complete: ', (index) => {
                todoList[index - 1].completed = true;
                console.log('Task marked as complete.');
                manageTodoList();
            });
        } else if (command === 'exit') {
            console.log('Exiting To-Do List.');
            rl.close();
        } else {
            console.log('Invalid command.');
            manageTodoList();
        }
    });
};

manageTodoList();
