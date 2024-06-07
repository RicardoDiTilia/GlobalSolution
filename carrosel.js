// carrosel.js
document.addEventListener('DOMContentLoaded', function () {
    const carroselSlide = document.querySelector('.carrosel-slide');
    const carroselItems = document.querySelectorAll('.carrosel-item');

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');


    let counter = 0;
    const size = carroselItems[0].clientWidth;

    nextBtn.addEventListener('click', () => {
        if (counter >= carroselItems.length - 1) return;
        carroselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carroselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    carroselSlide.addEventListener('transitionend', () => {
        if (counter === carroselItems.length) {
            carroselSlide.style.transition = "none";
            counter = 0;
            carroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (counter < 0) {
            carroselSlide.style.transition = "none";
            counter = carroselItems.length - 1;
            carroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
});
