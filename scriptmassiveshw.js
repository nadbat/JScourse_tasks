
//Домашнее задание Массивы и методы
console.log ('Домашнее задание Массивы и методы:');
// Задание 1 — Работа с методами push и pop

// Создайте массив с названиями 5 любимых фильмов.
// Добавьте в конец массива еще один фильм с помощью метода push().
// Удалите последний элемент массива с помощью метода pop() и выведите его в консоль.
// Выведите итоговый массив в консоль.
console.log('Задание 1:');
let favouriteFilms = ['Достать ножи', 'Трон', 'Аватар', 'Интерстеллар', 'Начало'];
favouriteFilms.push('Матрица');
let lastFilm = favouriteFilms[5];
favouriteFilms.pop();
console.log('Удаленный фильм: ' + lastFilm)
console.log('Любимые фильмы: ' + favouriteFilms.join(', '));

// Задание 2 — Работа с методом filter

// У вас есть массив чисел: const numbers = [12, 5, 8, 130, 44];
// Отфильтруйте числа, которые больше 10, используя метод filter().
// Выведите новый массив в консоль.

console.log('Задание 2:');
const numbers1 = [12, 5, 8, 130, 44];
let numbersMoreTen = numbers1.filter(numbers1 => numbers1 > 10);
console.log('Числа больше 10 из массива: ' + numbersMoreTen.join(','));

//Задание 3 — Сортировка и работа с объектами
// У вас есть массив объектов, описывающих книги:
// const books = [
// { title: 'Мастер и Маргарита', pages: 450 },
// { title: 'Преступление и наказание', pages: 550 },
// { title: 'Евгений Онегин', pages: 300 }
// ];

// Отсортируйте книги по количеству страниц (от меньшего к большему).
// Выведите массив отсортированных книг в консоль.

console.log('Задание 3:');
const books = [
    { title: 'Мастер и Маргарита', pages: 450 },
    { title: 'Преступление и наказание', pages: 550 },
    { title: 'Евгений Онегин', pages: 300 }
];
console.log('Все книги в библиотеке:');
//console.log(books);
for (let i = 0; i < books.length; i++) {
    const current = books[i];
    console.log (`${current.title}`)
};
let sortedBooks = books.sort((a,b) => a.pages - b.pages);
console.log('Отсортированные по количеству страниц книги:');
//console.log(sortedBooks);
for (let i = 0; i < sortedBooks.length; i++) {
    const currentBook = sortedBooks[i];
    console.log (`${currentBook.title}, имеет количество страниц: ${currentBook.pages}`)
};

// Задание 4 — Комплексная работа с массивами

// Используйте для выполнения массив объектов, описывающее имена студентов и их оценки:
// const students = [
// { name: 'Аня', grade: 4 },
// { name: 'Иван', grade: 5 },
// { name: 'Маша', grade: 3 },
// { name: 'Сергей', grade: 2 },
// { name: 'Катя', grade: 4 }
// ];

// Отфильтруйте студентов с оценкой больше 4.
// Создайте новый массив, который содержит только имена студентов, оценки которых меньше или равно 3.
console.log('Задание 4:');
const students = [
    { name: 'Аня', grade: 4 },
    { name: 'Иван', grade: 5 }, 
    { name: 'Маша', grade: 3 },
    { name: 'Сергей', grade: 2 },
    { name: 'Катя', grade: 4 }
    ];
console.log('Все студенты:');
console.log (students);
console.log('Все студенты c оценкой больше 4:')
console.log(students.filter((students) => students.grade > 4));
let filteredStudentsLessThree = students.filter((students) => students.grade <= 3); 
console.log('Все студенты c оценкой меньше или равно 3:');
console.log(filteredStudentsLessThree);  
const shortListMark3 = [];
for (let i = 0; i < filteredStudentsLessThree.length; i++) {
    shortListMark3.push(filteredStudentsLessThree[i].name)
};
console.log('Имена студентов с оценками ниже или равно 3: ' + shortListMark3.join(', '));
//или вариант через map
const namesOfThee = filteredStudentsLessThree.map(filteredStudentsLessThree => filteredStudentsLessThree.name);
console.log('Имена студентов с оценками ниже или равно 3 (отфильтрованы через map): ' + namesOfThee.join(', '));

console.log ('Конец домашки по массивам');