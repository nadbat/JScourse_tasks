
 // use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(MotionPathPlugin,TextPlugin)

// задание 1-2 с кругом
gsap.timeline()
    .to('#circle', { x: 1200, y: 600, duration: 3})
    .to('#circle', { x: 1200, y: 600, backgroundColor: "blue", duration: 2 }, "-=1")
    .then(() => gsap.to('#circle', { scale: 2, duration: 1 }))


// задание 3
gsap.to('#box_rotating', { rotation: 720, duration: 5 })

gsap.to('#box_moving', { x: 900, y:600,  duration: 2})
    .then(() => gsap.to('#box_moving', { y:200,  duration: 3})); 

gsap.timeline()
.to('#box_scaling', { scale: 10, duration: 3 })
.to('#box_scaling', { backgroundColor: "blue", duration: 2 }, "<")


});

// Подключите библиотеку GSAP и выполните несколько задач:

// 1) Создайте HTML-элемент (например, круг). Используя GSAP, переместите фигуру из левого верхнего угла в правый нижний за 3 секунды. После этого он должен увеличился в 2 раза.

// 2) Добавьте анимацию цвета: измените цвет круга с красного на синий во время его перемещения. Для этого можете использовать gsap.to("#circle", { x: 300, backgroundColor: "blue", duration: 2 });

// 3) Добавьте анимации для нескольких элементов. Один элемент перемещается. Второй вращается. Третий увеличивается в размерах и меняет цвет. Всё это должно происходить одновременно.