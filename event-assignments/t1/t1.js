// array for todo list
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

// add your code here






const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const input = document.querySelector('input');

function renderTodoList() {
  ul.textContent = '';
  todoList.forEach((todo) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.onchange = () => {
      todo.completed = checkbox.checked;
      console.log('Updated todoList:', todoList);
    };

    label.append(checkbox, ` ${todo.task}`);
    li.appendChild(label);
    ul.appendChild(li);
  });
}

document.querySelector('.add-btn').onclick = () => dialog.showModal();

document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
  if (!input.value.trim()) return;

  todoList.push({ id: Date.now(), task: input.value.trim(), completed: false });
  console.log('Updated todoList:', todoList);

  renderTodoList();
  input.value = '';
  dialog.close();
};

renderTodoList();