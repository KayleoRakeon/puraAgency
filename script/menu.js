let burger = document.querySelector('.burger');
let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');

burger.addEventListener('click', () => {
    burger.classList.toggle('actif');
    nav1.classList.toggle('actif');
    nav2.classList.toggle('actif');
});