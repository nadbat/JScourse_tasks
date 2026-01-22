
//Домашнее задание
//Сделайте разметку с тремя простыми геометрическими объектами (например, квадрат), а под ними кнопку "Запустить". У них могут быть одинаковые стили, но каждый должен воспроизвести анимацию поворота на 360 градусов по клику на кнопку "Запустить", которая размещена около геометрического объекта. Отработать надо 3 разных типа анимаций:
// setTimeout()
// setInterval()
// requestAnimationFrame()

//для первого бокса через таймаут

const animationBox1 = document.querySelector('.animationBox1');
const box1 = document.querySelector(".box1");

animationBox1.addEventListener("click", () => {
    let rotateDeg = 0;
    
    function rotate() {
        rotateDeg = rotateDeg + 5;
        box1.style.transform = `rotate(${rotateDeg}deg)`;

        if (rotateDeg < 360) {
            setTimeout(rotate,10)
        }
    }
    rotate();
});

//для второго бокса через интервал
const animationBox2 = document.querySelector('.animationBox2');
const box2 = document.querySelector(".box2");

animationBox2.addEventListener("click", () => {
    let rotateDeg = 0;
    const interval = setInterval(() => {
        rotateDeg = rotateDeg + 5;
        box2.style.transform = `rotate(${rotateDeg}deg)`;
        if (rotateDeg >= 360) {
            clearInterval(interval);
        }
    }, 25)
});

//для третьего бокса через requestAnimationFrame
//почему один раз запускается только? потом надо два раза нажимать
const animationBox3 = document.querySelector('.animationBox3');
const box3 = document.querySelector(".box3");
let rotateDeg = 0;

function animate() {
    rotateDeg += 2;
    box3.style.transform = `rotate(${rotateDeg}deg)`;
    
    if (rotateDeg < 360) {
        requestAnimationFrame(animate);
    }
};

animationBox3.addEventListener("click", () => {
    animate();
    rotateDeg = 0;
});
