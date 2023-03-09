const navToggle = document.querySelector('.nav--action');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

function switchLightDarkMode() {
    var element = document.body;
    element.classList.toggle("theme__switch");
 }