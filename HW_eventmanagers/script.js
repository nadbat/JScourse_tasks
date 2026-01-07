// Задание на dblclick:При двойном клике по кнопке id = btnDblClick её текст должен меняться на "Кнопка нажата дважды". Повторный двойной клик должен вернуть к фразе "Нажми меня дважды".
// Задание на change: В HTML представлен выпадающий списк <select>, который содержит три варианта: "Красный", "Синий", "Зелёный". При выборе значения (по клику на <option>) должен меняться цвет фона страницы на соответствующий цвет.

let button = document.getElementById('btnDblClick');

button.addEventListener('dblclick', (event) => {
   //button.textContent = "Кнопка нажата дважды";
   button.textContent = button.textContent === 'Нажми меня дважды' ? 'Кнопка нажата дважды' : 'Нажми меня дважды';
})

// Задание на change: В HTML представлен выпадающий списк <select>, который содержит три варианта: "Красный", "Синий", "Зелёный". При выборе значения (по клику на <option>) должен меняться цвет фона страницы на соответствующий цвет.

let selectElement = document.getElementById('selectColor');
//let result = document.getElementById('boxColor');
let result = document.body;

selectElement.addEventListener("change", (event) => {
  result.style.backgroundColor = `${event.target.value}`;
});