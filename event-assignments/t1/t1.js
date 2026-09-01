'use strict';

const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = document.querySelector('dialog input');
const addBtn = document.querySelector('.add-btn');

function renderTodoList() {
  ul.textContent = '';

  todoList.forEach((todo) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const deleteBtn = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.onchange = () => {
      todo.completed = checkbox.checked;
      console.log('Updated todoList:', todoList);
    };

    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      const index = todoList.findIndex((item) => item.id === todo.id);
      if (index !== -1) {
        todoList.splice(index, 1);
        ul.removeChild(li);
        console.log('Updated todoList:', todoList);
      }
    };

    label.append(checkbox, ` ${todo.task} `);
    li.append(label, deleteBtn);
    ul.appendChild(li);
  });
}

if (addBtn) {
  addBtn.onclick = () => dialog.showModal();
}

if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;

    todoList.push({ id: Date.now(), task: input.value.trim(), completed: false });
    console.log('Updated todoList:', todoList);

    renderTodoList();
    input.value = '';
    dialog.close();
  };
}

renderTodoList();