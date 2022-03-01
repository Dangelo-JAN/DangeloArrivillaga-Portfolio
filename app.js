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

const startSection = document.querySelector('.hr1');
const modal;

const card = {
  images: ['img/img-placeholder.svg', 'img/img-placeholder.svg', 'img/img-placeholder.svg', 'img/img-placeholder.svg'],
  name: ['Multi-Post Stories', 'Multi-Post Stories', 'Multi-Post Stories', 'Multi-Post Stories'],
  description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technologies: ['css', 'html', 'Bootstrap', 'Ruby'],

};

var myWork = document.createElement('section');
myWork.id = 'myWork';
document.body.insertBefore(myWork, startSection);

var h2Work = document.createElement('h2');
h2Work.classList.add('pff-500');
h2Work.textContent = 'MY RECENT';
myWork.appendChild(h2Work);

var h21Work = document.createElement('h2');
h21Work.classList.add('pff-500');
h21Work.textContent = 'WORK';
h2Work.append(h21Work);

var hrWork = document.createElement('hr');
hrWork.classList.add('hr-work');
h21Work.append(hrWork);

for(i=0; i<4; i++){
  var containerCard = document.createElement('div');
  containerCard.classList.add('g-container');
  myWork.appendChild(containerCard);
  var imageCard = document.createElement('img');
  imageCard.classList.add('g-item1');
  imageCard.src = card.images[i];
  containerCard.appendChild(imageCard);
  var cardTitle = document.createElement('h5');
  cardTitle.classList.add('g-item2');
  cardTitle.textContent = card.name[i];
  containerCard.appendChild(cardTitle);

  var cardParagraph = document.createElement('p');
  cardParagraph.classList.add('g-item3');
  cardParagraph.textContent = card.description;
  containerCard.appendChild(cardParagraph);

  var ulCard = document.createElement('ul');
  ulCard.classList.add('ul-card');
  containerCard.appendChild(ulCard);

  for(let j=0; j<4; j++){
    var liCard = document.createElement('li');
    liCard.classList.add('li-card');
    ulCard.appendChild(liCard);
    var aLiCard = document.createElement('a');
    aLiCard.classList.add('sff-500');
    aLiCard.classList.add('a-card');
    aLiCard.textContent = card.technologies[j];
    if(j === 0){
      aLiCard.classList.add('g-item4');
    }else if(j === 1){
      aLiCard.classList.add('g-item5');
    }else if(j === 2){
      aLiCard.classList.add('g-item6');
    }else if(j === 3){
      aLiCard.classList.add('g-item7');
    };
    liCard.appendChild(aLiCard);
  };

  var buttonCard = document.createElement('button');
  buttonCard.classList.add('g-item8');
  buttonCard.classList.add('pff-500');
  buttonCard.textContent = 'See Project';
  containerCard.appendChild(buttonCard);
   
  if(i === 0){
    containerCard.classList.add('elipse20');
    cardTitle.classList.add('pff-500');
    cardParagraph.classList.add('sff-400');
  }else if(i === 1){
    containerCard.classList.add('elipse21');
    containerCard.classList.add('g-container-r');
    imageCard.classList.add('g-item1-r');
    cardTitle.classList.add('pff-500');
    cardTitle.classList.add('g-item2-r');
    cardParagraph.classList.add('sff-400');
    cardParagraph.classList.add('g-item3-r');
    ulCard.classList.add('g-item12-r');
    buttonCard.classList.add('g-item8-r');
  }else if(i === 2){
    containerCard.classList.add('elipse22');
    cardTitle.classList.add('pff-500');
    cardParagraph.classList.add('sff-400');
  }else if(i === 3){
    containerCard.classList.add('elipse23');
    containerCard.classList.add('g-container-r');
    imageCard.classList.add('g-item1-r');
    cardTitle.classList.add('pff-500');
    cardTitle.classList.add('g-item2-r');
    cardParagraph.classList.add('sff-400');
    cardParagraph.classList.add('g-item3-r');
    ulCard.classList.add('g-item12-r');
    buttonCard.classList.add('g-item8-r');
    buttonCard.classList.add('mr-b');
    
  }
};

