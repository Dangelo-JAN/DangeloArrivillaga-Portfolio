const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.nav-desktop');
const close = document.querySelector('.close-icon');
const myEmail = document.querySelector('.e-mail');
const emailIcon = document.querySelector('.e-mail-icon-style');
const liPortfolio = document.querySelector('.mg-t-dom');
var backdrop;
var modal;


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

const card = {
  images: ['img/img-placeholder.svg', 'img/img-placeholder.svg', 'img/img-placeholder.svg', 'img/img-placeholder.svg'],
  name: ['Multi-Post Stories'],
  description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
  liveButton: '',
  sourceButton: ''
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
  cardTitle.textContent = card.name;
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
  buttonCard.setAttribute('type', 'button');
  containerCard.appendChild(buttonCard);
  buttonCard.addEventListener('click', () => {
    backdrop = document.createElement('section');
    backdrop.classList.add('backdrop');
    document.body.insertBefore(backdrop, startSection);
    popupWindow(card.images[0], card.name);
    backdrop.addEventListener('click', closeModal);
  });
   
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


/*

const seeProject;
seeProject.addEventListener('click', () => {
  menu.classList.toggle('otra-clase');
  myEmail.classList.add('hidden-el');
  emailIcon.classList.add('hidden-el');
  liPortfolio.classList.add('mg-t');
});


*/



function popupWindow(image, workTitle){
  modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="popup-title">
      <button class="" type="button"><img class="close-popup" src="img/close-icon.svg" alt="Close popup"></button>
      <h5 class="g-item2">${card.name}</h5>
    </div>
    <div class="image-popup">
      <img class="images" src="${image}" alt="Project Image">
    </div>
    <div class="popup-pharagraph">
          <p class="g-item3 paragraph-popup">${card.description}</p>
    </div>
    <div class="popup-tag">
      <ul class="ul-card">
        <li class="li-card g-item4"><a class="sff-500 a-card">${card.technologies[0]}</a></li>
        <li class="li-card g-item5"><a class="sff-500 a-card">${card.technologies[1]}</a></li>
        <li class="li-card g-item6"><a class="sff-500 a-card">${card.technologies[2]}</a></li>
        <li class="li-card g-item7"><a class="sff-500 a-card">${card.technologies[3]}</a></li>
      </ul>
    </div>
    <div class="popup-buttons">
        <button class="g-item8 pff-500 mr-b" type="button"><a class="sff-500 a-card" href="${card.sourceButton}">See this project</a></button>
        <button class="g-item8 pff-500 mr-b" type="button"><a class="sff-500 a-card" href="${card.liveButton}">See live</a></button>
    </div>`;
  backdrop.appendChild(modal);
};

function closeModal () {
  if(backdrop){
  backdrop.remove();
  }

  if(modal){
    modal.remove();
  }
};


// popupWindow(worksImages[i], workTitle[i]);
// backdrop.addEventListener('click', closeModal);

