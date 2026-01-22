fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
    .then(function(response) {
    //преобразовать это в формат json
    return response.json();
    })
    //работаем с данными внутри файла
    .then(function(data) {
        //выводим контейнер, куда мы публикуем данные о погоде
        let currencyContainer = document.getElementById('currency');
        //определяем, какой будет стурктура HTML
        currencyContainer.innerHTML = `
            <p>Евро = ${data.eur.eur}</p>
            <p>USD (доллар): ${data.eur.usd}</p>
            <p>RUB (рубль): ${data.eur.rub}</p>
            <p>AED (дирхам): S${data.eur.aed}</p>
            <p>THB (тайский бат): ${data.eur.thb}</p>
        `; 
    })
    
    .catch(function(error) {
        console.error('Ошибка получения данных');
    })



//17 HW
//Вам предоставлен API с курсами валют, относительно евро. Напишите небольшое приложение, которое отобразит данные о курсах валют, где в браузере пользователь увидит сверху строчку "евро = 1" (в апи эта цифра также есть), а ниже стоимость другой валюты, относительно евро:
// USD (доллар)
// RUB (рубль)
// AED (дирхам)
// THB (тайский бат)