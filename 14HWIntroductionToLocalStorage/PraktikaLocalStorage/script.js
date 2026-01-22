
//практика:


let usernameInput = document.getElementById("username"); 
let saveBtn = document.getElementById("saveBtn");
let showBtn = document.getElementById("showBtn");
let deleteBtn = document.getElementById("deleteBtn");
let output = document.getElementById("output");
let counterStatus = document.getElementById("counter");

// Функция для отображения имени
function showName() {
    dataname = localStorage.getItem("username");
    // если датанейм указан, то выводится сообщение
    if (dataname) {
    output.textContent = `Введенное имя: ${dataname}`;
    } else {
        output.textContent = "Имя не найдено";
    }
}

saveBtn.addEventListener('click', () => {
    //тут читаем введенное значение
    username = usernameInput.value;
    if (username) {
        //сохраняем значение в локальном хранилище после нажатия кнопки
        localStorage.setItem('username', username);
        //после клика очистим поле ввода
        usernameInput.value = '';
        //можно сразу выводить в поле аутпут после нажатия кнопки Сохранить
        output.textContent = `Имя ${username} сохранено`;
        // и сразу обновляем тест о кол-ве
        counterStatus.textContent = "Количество сохраненных имен на сайте: 1";
    } else {
        output.textContent = 'Нужно ввести имя';
    }
});

//указываем слушателя для кнопки Показать имя (ссылаемся на действие, которое позволяет показать имя - showName)
showBtn.addEventListener("click", showName);

deleteBtn.addEventListener("click", () => {
    localStorage.removeItem('username');
    output.textContent = 'Имя удалено';
    //сразу обновляем текст о кол-ве
    counterStatus.textContent = "Количество сохраненных имен на сайте: 0";
}
)

// Функция для отображения кол-ва введенного
function showStatus() {
    let datacount = localStorage.length;
    if (datacount == 0) {
        counterStatus.textContent = "Количество сохраненных имен на сайте: 0";
    }
    else if (datacount == 1) {
    counterStatus.textContent = "Количество сохраненных имен на сайте: 1";
    }
}
showStatus();

//для отладки через консоль
for (let i =0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`Ключ ${i + 1}: ${key}`)
}

//localStorage.clear();