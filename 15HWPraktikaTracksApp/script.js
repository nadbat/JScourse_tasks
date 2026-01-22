//извлечение данных из LocalStorage в Favorites
//функция получения понравившихся треков - получить даннные в ключе favoriteTrack или вернуть пустой массив (если никаких данных не вносили)

function getFavorites() {
    return JSON.parse(localStorage.getItem('favoriteTracks')) || [];
}

//сохранение списка #favorites в LocalStorage
//cохраняем переменную favorites (ключ и значение, которые берутся динамически)

function saveFavorites(favorites) {
    localStorage.setItem('favoriteTracks', JSON.stringify(favorites));
}

//определяем константу для счетчика кол-ва треков
const counterTracks = document.querySelector('.counterTracks');
const tracksCount = document.querySelectorAll('#tracks .track').length;
counterTracks.textContent = tracksCount;

//определяем константу для счетчика кол-ва треков в избранном
const counterFavorites = document.querySelector('.counterFavorites');


//Отображение в #favourites и кнопки УДалить

function updateFavoritesDisplay() {
    const favorites = getFavorites();
    //определяем, где будут отображаться треки
    const favoritesBox = document.getElementById('favorites');
    //определяем константу для сердечка
    const trackElements = document.querySelectorAll('#tracks .track');
    
    //очищаем блок для отображения, так как он будет динамически меняться
    favoritesBox.innerHTML = '';

    //треки выводятся списком
    favorites.forEach(track => {
        const trackBox = document.createElement('div');
        //присваиваем элементу класс для отображения 
        trackBox.className = 'favorite';
        //название трека в спане
        const trackName = document.createElement('span');
        trackName.textContent = track;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Удалить";
        removeButton.addEventListener("click", () => {
            removeFavorite(track);
        });

        //задаем порядок расположения
        trackBox.appendChild(trackName);
        trackBox.appendChild(removeButton);
        favoritesBox.appendChild(trackBox);
    });
        trackElements.forEach(trackElement => {
            //берем контент из span в блоках с классом track (выше объявляли переменную для сердечка)
            let trackName = trackElement.querySelector('span').textContent;
            let svg = trackElement.querySelector("svg");
            //навешиваем стиль с условием, что он меняется, когда у favorites добавляется trackName, то есть он уходит в блок Понравившиеся треки
            svg.style.fill = favorites.includes(trackName) ? '#e12d20' : '#fff'
        });

    counterFavorites.textContent = favorites.length;

}

//Добавить треки в #Favourites
function addFavorite(trackName) {
    //эту переменную будем использлвать несколько раз, но внутри конкретных функций, потому что внутри функции значение может отличаться
    const favorites = getFavorites();
    //делаем проверку на то, есть ли трек уже в списке избранного
    if (!favorites.includes(trackName)) {
        favorites.push(trackName);
        //плюс сохраняем в localHost
        saveFavorites(favorites);
        //отображаем данный трек
        updateFavoritesDisplay();
    }
    counterFavorites.textContent = favorites.length;
}

//Удалить трек из Favourites

function removeFavorite(trackName) {
    //делаем еще фильтр, потому что после обновления у нас обновится список треков,чтобы не было соответствия (проследить логику!)
    const favorites = getFavorites().filter(track => track !==trackName);
    saveFavorites(favorites);
    updateFavoritesDisplay();
}


//Обработчик события клика для кнопкм
function initializeButtons() {
    document.querySelectorAll('#tracks .track button').forEach(button  => {
        //мы переносим данные,которые содержатся в span поэтому введем переменную
        //берем спан, который относится к конкретной кнопке, отсюда 
        const trackName = button.parentElement.querySelector('span').textContent;
        const svg = button.querySelector('svg');

        //если кликаем на кнопку, этот трек передается в блок фаворитов (вызываем функцию) 
        button.addEventListener('click', () => {
            const favorites = getFavorites();

            if (favorites.includes(trackName)) {
                svg.classList.add('shake');
            }

            addFavorite(trackName);
        });
    });
}


//Инициализация при загрузке страницы
//Мы должны выписать, какие вызовы должны выполниться до завершения загрузки DOMException
//Если этого не сделать, то элементы могут быть не найдены, или кнопки не будут работаь или отображени списка не обновится
window.onload = () => {
    initializeButtons()
    updateFavoritesDisplay();
    counterFavorites.textContent = favoriteTracks.length;
};

// Задание №1 — Напишите код, который позволит сделать для окрашенной кнопки .track button (этот код уже есть, где fill = #b4241a для svg) эффект потрясывания через CSS стили. Данный эффект даст понять пользователю, что лайк уже поставлен и трек находится в списке "Понравившиеся треки".


// Подсказка: Через событие click на кнопку дополнительно навесьте класс shake. Стили будут такими:

// button.shake { animation: shake 0.3s; }

// @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}50%{transform:translateX(5px)}75%{transform:translateX(-5px)}}

// Задание №2 — Добавьте счетчик количества треков в блоке "Список треков" (просто число через тег <span> внутри <h2>)

// Задание №3 — Добавьте счетчик количества треков в блоке "Понравившиеся треки" (просто число через тег <span> внутри <h2>) Этот счётчик должен увеличиваться на 1 при добавлении трека в избранное и уменьшаться на 1 при его удалении. Учтите, что лайки сохраняются в localStorage и должны быть восстановлены при перезагрузке страницы.