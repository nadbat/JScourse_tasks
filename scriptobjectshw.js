//Домашнее задание Объекты и методы
console.log ('Домашнее задание Объекты и методы:');

// Задание 1 — Создайте объект book с тремя свойствами для описания книги: title, author, year. Добавьте метод getSummary, который возвращает строку с информацией о книге, например: "Название: Герой нашего времени, Автор: Михаил Лермонтов, Год издания: 1840". Метод вывода: console.log(book.getSummary());
console.log ('Задание 1:');

let book = {
    title: "Герой нашего времени",
    author: "Михаил Лермонтов", 
    year: 1840,
    getSummary: function(){ 
        return `Название: ${book.title}, Автор: ${book.author}, Год издания: ${book.year}`;     
    }
}
console.log(book.getSummary());


// Задание 2 — Создайте объект laptop, который содержит следующие свойства:
// brand — бренд ноутбука (строка),
// model — модель ноутбука (строка),
// processor — процессор (строка),
// price — цена ноутбука (число).
// Что нужно сделать:
// Используйте цикл for...in, чтобы вывести в консоль все свойства и их значения.
// Преобразуйте объект в массив с помощью Object.entries() и выведите массив в консоль.
console.log ('Задание 2:');

let laptop = {
    brand: "Lenovo",
    model: "IdeaPad Slim 3i Gen 10",
    processor: "Intel® Core™ 5 210H Processor ",
    price: "558$",
}
console.log('Характеристики ноутбука:');
for (let key in laptop) {
    console.log(`${key}: ${laptop[key]}`)
}
console.log('Характеристики ноутбука:');
Object.entries(laptop).forEach(([key,value]) => console.log(`${key}: ${value}`));


//Задание 3 — Создайте три объекта:
// Что нужно сделать:
// Объедините эти три объекта в новый объект userProfile с помощью Object.assign.
// Выведите результат в консоль.
// Попробуйте изменить одно из свойств в userProfile и выведите объект в консоль.
// Заморозьте объект userProfile с помощью Object.freeze и попытайтесь удалить одно из свойств. Убедитесь, что изменения не применяются.
console.log ('Задание 3:');

let basicInfo = {
    name: "Матвей Исаев" ,
    age: 18,
}
let contactInfo = {
    email: "matveyisaev@gmail.com" ,
    phone: "+79650312020",
}
let preferences ={
    language: "Russian" ,
    theme: "light",
}

let userProfile = Object.assign({},basicInfo, contactInfo,  preferences);
console.log ('Изначальные данные профиля:')
console.log (userProfile);
userProfile.name = "Игорь Катков";
console.log ('Изменили имя в профиле:');
console.log (userProfile);
Object.freeze(userProfile);
delete userProfile.age;
console.log ('Попытались удалить возраст:');
console.log (userProfile);
console.log ('Конец домашки по объектам');
