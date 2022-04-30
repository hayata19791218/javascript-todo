'use strict'

const taskValue = document.getElementsByClassName('taskContent')[0];
const taskSubmit = document.getElementsByClassName('taskSubmit')[0];
const taskList = document.getElementsByClassName('taskLists')[0];

const addTasks = (task) => {
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '削除';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click',evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
}
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
}

taskSubmit.addEventListener('click',evt => {
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
});


