//Домашнее задание Функции

console.log ('Домашнее задание по функциям:');

//Задание №1 — Сложение числа и строки

function combineValue (firstArgument,secondArgument) {
    if (firstArgument < 0 || secondArgument < 0) {
        return ("Некорректное значение")
    }
    return (firstArgument + " " + secondArgument);
}
console.log (combineValue(5,"яблок"));
console.log (combineValue(-10,"яблок"));
console.log (combineValue(5,"фиников"));
console.log (combineValue("фиников",7));
console.log (combineValue("фиников",-7));


//Задание №2 — Умножение числа на два
function doubleNumber (d) {
    return d * 2
}
z = doubleNumber (5);
console.log (z)

//Задание №3 — Преобразование строки в число
function convertToNumber (text) {
    return  Number(text) 
}
x = convertToNumber("5");
x2 = convertToNumber("145");
x3 = convertToNumber("567");
console.log (x + ", " + x2 + ", " + x3)

//Задание №4 — Функция с массивом

function isArrayEmpty(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
function findMaxNumber(arr) {
    isArrayEmpty(arr);
    if (isArrayEmpty(arr)) {
        console.log('Массив пустой');
    } 
    if (arr[0] > arr[1]  && arr[0] > arr[2] && arr[0] > arr[3]) {
        return arr[0];
    }
    if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3]) {
        return arr[1];
    }
    if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3]) {
        return arr[2];
    }
    else {
        return arr[3]; 
    }
}
maxNumb = findMaxNumber([4,5,6,7]);
maxNumb2 = findMaxNumber([10,12,6,7]);
maxNumb3 = findMaxNumber([]);
console.log (maxNumb);
console.log (maxNumb2);
console.log (maxNumb3);

console.log ('Конец домашки по функциям');