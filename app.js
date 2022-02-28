const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.nav-desktop');
const close = document.querySelector('.close-icon');




hamburguer.addEventListener('click',function() {
    menu.classList.toggle('active');
});

close.addEventListener('click', function (){
    menu.classList.toggle('active');
});

document.querySelectorAll('.li-desktop').forEach( (n) => n.addEventListener('click', function(){
    menu.classList.toggle('active');

}))

document.querySelectorAll('..arrow-right-style').forEach( (x) => x.addEventListener('click', function(){
    menu.classList.toggle('active');

}))
