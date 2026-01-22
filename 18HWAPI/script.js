fetch('https://randomuser.me/api/?results=10')
    .then(function(response) {

    return response.json();
    })

    .then(function(data) {
        
        if (data.results && data.results.length > 0) {
            
            let usersContainer = document.getElementById('usersContainer');
            
            usersContainer.innerHTML = ``;
            data.results.forEach(function(userProfile) {
                let profileContainer = document.createElement("div");
                profileContainer.classList.add('user');
                profileContainer.innerHTML = `
                <img src="${userProfile.picture.large}" alt="User Name">
                    <div>
                        <p><strong>Name: </strong>${userProfile.name.first} ${userProfile.name.last}</p>
                        <p><strong>Gender: </strong>${userProfile.gender}</p>
                        <p><strong>City: </strong>${userProfile.location.city}</p>
                        <p><strong>Email: </strong> <a href="mailto:${userProfile.email}">${userProfile.email}</a></p>
                        <p><strong>Username: </strong>${userProfile.login.username}</p>
                        <p><strong>Password: </strong> ${userProfile.login.password}</p>
                    </div>
                `; 
                usersContainer.appendChild(profileContainer);
            })    
        }
    })
    
    .catch(function(error) {
        console.error('Ошибка получения данных');
    })

    


//     Домашнее задание:

// Напишите код, который получает данные с API и отображает их в заданной HTML-структуре. Вот основные данные, которые помогут вам выполнить задание:

// 1) Вам дана ссылка на API: https://randomuser.me/api/?results=10

// 2) При запросе к этому API вы получите массив из 10 пользователей. Для каждого пользователя нужно вывести следующую информацию:

// Фото пользователя: <img src="URL"> (поле picture.large).
// Имя: <p> (поле name.first и name.last).
// Пол: <p> (поле gender).
// Город: <p> (поле location.city).
// Email: <a href="mailto:EMAIL">EMAIL</a> (поле email).
// Имя пользователя: <p> (поле login.username).
// Пароль: <p> (поле login.password).
// 3) HTML-структура, которая должна быть в браузере для каждого пользователя, выглядит так:

// <div class="user">

// <img src="URL" alt="User Name">

// <div>

// <p><strong>Name:</strong> FirstName LastName</p>

// <p><strong>Gender:</strong> Gender</p>

// <p><strong>City:</strong> City</p>

// <p><strong>Email:</strong> <a href="mailto:email@example.com">email@example.com</a></p>

// <p><strong>Username:</strong> Username</p>

// <p><strong>Password:</strong> Password</p>

// </div>

// </div>

// 4) Для стилизации используйте CSS:

// Класс .user для стилей карточки пользователя.
// Изображение (<img>) должно быть круглым.
// Сделайте небольшой отступ между карточками.
// 5) Ваш код должен работать так:

// Создайте запрос к API.
// Создать карточки пользователей и вставить их в HTML.
// Используйте fetch() для получения данных.
// Проверьте, приходит ли ответ с сервера, с помощью console.log().
// Примените методы forEach() и innerHTML для генерации карточек.