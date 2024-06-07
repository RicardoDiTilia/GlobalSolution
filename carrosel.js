const carroselContainer = document.querySelector('.carrosel-container');
const carroselSlide = document.querySelector('.carrosel-slide');
const carroselItems = document.querySelectorAll('.carrosel-item');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 1;
const itemWidth = carroselItems[0].clientWidth;

carroselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= carroselItems.length - 1) return;
  counter++;
  carroselSlide.style.transition = 'transform 0.4s ease-in-out';
  carroselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  carroselSlide.style.transition = 'transform 0.4s ease-in-out';
  carroselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
});

carroselSlide.addEventListener('transitionend', () => {
  if (carroselItems[counter].classList.contains('clone-last')) {
    carroselSlide.style.transition = 'none';
    counter = carroselItems.length - 2;
    carroselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
  } else if (carroselItems[counter].classList.contains('clone-first')) {
    carroselSlide.style.transition = 'none';
    counter = carroselItems.length - counter;
    carroselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
  }
});

