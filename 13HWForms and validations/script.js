let formSignUp = document.getElementById("signupForm");

formSignUp.addEventListener('submit', function(event) {
    //отменяем действие браузера по умолчанию
    event.preventDefault();
    
    //список полей (тут мы привязываемся не просто к полю, а к значению через value!!)
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    //текст ошибок
    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    //поля ввода (для закрашивания обводки в домашке)
    let usernameField = document.getElementById('username');
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirmPassword');

    //нужно сначал обнулить содержимое текста ошибки, которое есть, чтобы потом там появился текст
    //плюс, когда пользователь исправит ошибку, текст тоже должен пропасть
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;
    
     //если ничего не введено, то не пропускаем дальше. 
     //Условие для поля username
    if (!username) {
        usernameError.textContent = "Введите имя пользователя";
        isValid = false;
        usernameField.style.borderColor = "red"; 
    } else if (username.length < 4) {
        usernameError.textContent = "Имя пользователя должно быть не меньше 4 символов";
        usernameField.style.borderColor = "red"; 
        isValid = false;
    }

    //условие для поля email, в т.ч. проверка на соответветствие паттерну ввода
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        emailError.textContent = "Введите email";
        emailField.style.borderColor = "red"; 
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Некорректный email";
        emailField.style.borderColor = "red"; 
        isValid = false;
    }
    
    //проверки для пароля

    if (!password) {
        passwordError.textContent = "Введите пароль";
        passwordField.style.borderColor = "red";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Пароль должен быть не менее 6 символов";
        passwordField.style.borderColor = "red";
        isValid = false;
    }
    
    if (!confirmPassword) {
        confirmPasswordError.textContent = "Установите пароль";
        confirmPasswordField.style.borderColor = "red";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Пароли не совпадают!";
        confirmPasswordField.style.borderColor = "red";
        isValid = false;
    }
    
    //итоговое сообщение 

    if (isValid) {
        alert('Форма отправлена успешно');
        usernameField.style.borderColor = "green";
        emailField.style.borderColor = "green";
        passwordField.style.borderColor = "green";
        confirmPasswordField.style.borderColor = "green";
    }

})


//Домашнее задание 
//Пользователь должен ввести не менее четырёх символов в поле username. Если символов меньше четырёх — добавьте соответствующее сообщение об ошибке.


// Сделайте динамическую подсветку некорректно заполненных полей. Если поле заполнено неверно, его границы должны окраситься в красный цвет. Если поле заполнено верно — в зелёный. Для этого можно изменять CSS-свойство border прямо в JavaScript при каждой проверке (пример: style.borderColor = "red" или style.borderColor = "green")



// Добавьте проверку о том, что поле "Подтверждение пароля" должно быть заполнено и если это не так, то границы input должны окраситься в красный и пользователь должен увидеть сообщение "Установите пароль"