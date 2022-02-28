const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.nav-desktop');




hamburguer.addEventListener('click',function() {
    menu.classList.toggle('active');
});