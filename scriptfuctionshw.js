//Домашнее задание Функции

console.log ('Домашнее задание по функциям:');

//Задание №1 — Сложение числа и строки

function combineValue (firstArgument,secondArgument) 
    // if (firstArgument < 0 || secondArgument < 0) {
    //     return ("Некорректное значение")
    // } - тут была неправильная логика проверки (не проверялось, что арнумент число)
    {
        // Проверяем первый аргумент, если он число
        if (typeof firstArgument === 'number' && firstArgument < 0) {
            return "Некорректное значение";
        }
        // Проверяем второй аргумент, если он число
        if (typeof secondArgument === 'number' && secondArgument < 0) {
            return "Некорректное значение";
        }
    return (firstArgument + " " + secondArgument);
}
console.log (combineValue(5,"яблок"));
console.log (combineValue(-10,"яблок"));
console.log (combineValue(5,"фиников"));
console.log (combineValue("фиников",7));
console.log (combineValue("фиников",-7));


//Задание №2 — Умножение числа на два
let z = doubleNumber (5); // вынесла за функцию и объявила переменную.
function doubleNumber (d) {
    return d * 2
}
console.log (z)

//Задание №3 — Преобразование строки в число
function convertToNumber (text) {
    return  Number(text) 
}
let x = convertToNumber("5"); // поправила объявление переменных
let x2 = convertToNumber("145");
let x3 = convertToNumber("567");
console.log (x + ", " + x2 + ", " + x3)

//Задание №4 — Функция с массивом
//Старое решение:
// function isArrayEmpty(arr) {
//     return Array.isArray(arr) && arr.length === 0;
// }
// function findMaxNumber(arr) {
//     isArrayEmpty(arr);
//     if (isArrayEmpty(arr)) {
//         console.log('Массив пустой');
//     } 
//     if (arr[0] > arr[1]  && arr[0] > arr[2] && arr[0] > arr[3]) {
//         return arr[0];
//     }
//     if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3]) {
//         return arr[1];
//     }
//     if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3]) {
//         return arr[2];
//     }
//     else {
//         return arr[3]; 
//     }
// }
// Лишний вызов функции: isArrayEmpty(arr); на 4 строке ничего не делает (результат не используется).
// Нет обработки пустого массива: Вы выводите 'Массив пустой', но функция продолжает выполняться и попытается сравнить arr[0] > arr[1], что вызовет ошибку.
// Жёстко закодирован размер массива: Ваша функция работает ТОЛЬКО для массивов из 4 элементов.
// Логика сравнения неполная: Вы сравниваете только попарно, но для массива [1, 2, 3, 4] ни одно из условий не выполнится, и функция вернёт arr[3] (4) по умолчанию, что случайно правильно.

console.log ('Задание 4');
function isArrayEmpty(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
function findMaxNumber(arr) {
    // Проверка на пустой массив
    if (isArrayEmpty(arr)) {
        console.log('Массив пустой');
        return undefined; // или null, или 0 - в зависимости от требований
    }
    
    // Используем Math.max для любого размера массива
    return Math.max(...arr);
    
    // Или вариант с циклом (более наглядно):
    /*
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    */
}
maxNumb = findMaxNumber([4,5,6,7]);
maxNumb2 = findMaxNumber([10,12,6,7]);
maxNumb3 = findMaxNumber([]);
console.log (maxNumb);
console.log (maxNumb2);
console.log (maxNumb3);

console.log ('Конец домашки по функциям');

