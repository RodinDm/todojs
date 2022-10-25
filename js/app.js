const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');

toDoForm.addEventListener('submit', function(event){
    event.preventDefault();
    const value = event.target.firstElementChild.value;
    addToDoItem(value);
    event.target.firstElementChild.value = '';
});

function addToDoItem(title) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const label = document.createElement('label');
    label.className = 'title';
    label.textContent = title;

    const checkBox = document.createElement('input');
    checkBox.className = 'checkbox';
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function(){
        if (li.classList.contains('completed')) {
            li.classList.remove('completed');
        }
        else {
            li.classList.add('completed');
        }
    });

    const textField = document.createElement('input');
    textField.className = 'textfield';
    textField.type = 'text';
    textField.addEventListener('input', function(){
        label.textContent = textField.value;
    });

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Изменить';
    editButton.addEventListener('click', function(){
        if (li.classList.contains('editing')) {
            li.classList.remove('editing');
            editButton.textContent = 'Изменить';
        }
        else {
            li.classList.add('editing');
            editButton.textContent = 'Сохранить';
            textField.value = label.textContent;

        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function(){
        li.remove();
    });

    li.append(checkBox, label, textField, editButton, deleteButton);

    toDoList.appendChild(li);
}
