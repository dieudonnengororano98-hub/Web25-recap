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
  if (!ul) return;
  ul.innerHTML = '';

  todoList.forEach((todo) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const deleteBtn = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      console.log('Updated todoList:', todoList);
    });

    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      const index = todoList.findIndex((item) => item.id === todo.id);
      if (index !== -1) {
        todoList.splice(index, 1);
        renderTodoList();
        console.log('Updated todoList:', todoList);
      }
    });

    label.append(checkbox, ` ${todo.task} `);
    li.append(label, deleteBtn);
    ul.appendChild(li);
  });
}

if (addBtn && dialog) {
  addBtn.addEventListener('click', () => {
    dialog.showModal();
  });
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input) return;

    const taskName = input.value.trim();
    if (!taskName) return;

    todoList.push({
      id: Date.now(),
      task: taskName,
      completed: false,
    });

    console.log('Updated todoList:', todoList);

    renderTodoList();
    input.value = '';
    dialog.close();
  });
}

renderTodoList();