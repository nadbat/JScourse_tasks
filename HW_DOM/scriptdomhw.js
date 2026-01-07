//Домашнее задание Введение в DOM

// Используя querySelectorAll, измените текст всех элементов списка (<li>) на "Задача выполнена" внутри списка taskWork (подсказка: используйте forEach, textContent и выражение `Задача ${index + 1} выполнена`)

// let textTaskWork = document.querySelectorAll('li');
//     textTaskWork.textContent = 'Задача выполнена'; 

let textTaskWork = document.querySelectorAll('#taskWork li');
textTaskWork.forEach((task,index) => {
  task.textContent = `Задача ${index + 1} выполнена`;
});


// Создайте массив с текстами задач, например: let tasks = ["Купить молоко", "Выучить JavaScript", "Пойти на тренировку"]; и выведите этот массив в список вместо текущих <li> элементов. (подсказка: сначала нужно очистить список за счет innerHTML = '' и после добавить генерацию из массива с forEach и .appendChild

let tasks = ["Купить молоко", "Выучить JavaScript", "Пойти на тренировку"];

let changeTextTasks = document.getElementById('taskAll'); 
//let changeTextTasks = document.querySelectorAll('li'); //если все заменяем, как по заданию, но почему-то не срабатывает

    changeTextTasks.innerText = '';
    tasks.forEach(tasks => {
        const listItem = document.createElement('li');
        listItem.textContent = tasks;
               //указываем, что каждый ли выводится в конец родительского блока (ul)
        changeTextTasks.appendChild(listItem);
    });




// Добавьте элемент <li> с текстом задачи в начало любого списка, используя prepend()

const taskWorkList = document.getElementById('taskWork');
const newTaskText = document.createElement('li');
newTaskText.textContent = 'Новая добавленная задача';
taskWorkList.prepend(newTaskText);
