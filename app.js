const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.nav-desktop');
const close = document.querySelector('.close-icon');
const myEmail = document.querySelector('.e-mail');
const emailIcon = document.querySelector('.e-mail-icon-style');
const liPortfolio = document.querySelector('.mg-t-dom');
hamburguer.addEventListener('click', () => {
  menu.classList.toggle('otra-clase');
  myEmail.classList.add('hidden-el');
  emailIcon.classList.add('hidden-el');
  liPortfolio.classList.add('mg-t');
});

close.addEventListener('click', () => {
  menu.classList.toggle('otra-clase');
  myEmail.classList.remove('hidden-el');
  emailIcon.classList.remove('hidden-el');
  liPortfolio.classList.remove('mg-t');
});

document.querySelectorAll('.li-desktop').forEach((n) => n.addEventListener('click', () => {
  menu.classList.toggle('otra-clase');
  myEmail.classList.remove('hidden-el');
  emailIcon.classList.remove('hidden-el');
  liPortfolio.classList.remove('mg-t');
}));

document.querySelectorAll('.arrow-right-style').forEach((x) => x.addEventListener('click', () => {
  menu.classList.toggle('active');
  myEmail.classList.remove('hidden-el');
  emailIcon.classList.remove('hidden-el');
  liPortfolio.classList.remove('mg-t');
}));
