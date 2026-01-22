//инициализация свайпера, можем добавлять свои классы
var swiper = new Swiper(".swiperInfo", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    cssMode: true,
    }); 


//Домашнее задание:

// Откройте макет Figma со слайдером.
// Подключите Swiper к проекту и попробуйте воспроизвести механику по макету. В слайдере есть стрелочки и пагинация. У слайдера должна быть включена бесконечная прокрутка (Infinite loop), эффект уменьшения соседних слайдов (Effect coverflow) и вставать по центру (Centered).
// Используйте документацию Swiper для настройки параметров: Swiper Documentation.