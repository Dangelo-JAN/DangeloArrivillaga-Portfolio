const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.nav-desktop');
const close = document.querySelector('.close-icon');
const myEmail = document.querySelector('.e-mail');
const emailIcon = document.querySelector('.e-mail-icon-style');
const liPortfolio = document.querySelector('.mg-t-dom');
const backdrop = document.createElement('section');
const modal = document.createElement('div');
const startSection = document.querySelector('.hr1');
const card = {
  images: ['img/img-placeholder.svg', 'img/img-placeholder.svg', 'img/img-placeholder.svg', 'img/img-placeholder.svg'],
  name: ['Multi-Post Stories', 'Multi-Post Stories', 'Multi-Post Stories', 'Multi-Post Stories'],
  description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technologies: ['css', 'html', 'Bootstrap', 'Ruby', 'Ruby on Rails', 'Github'],
  liveButton: '',
  sourceButton: '',
  image: 'img/modal-photo.svg',
};

function closeModal() {
  if (backdrop) {
    backdrop.remove();
  }
  if (modal) {
    modal.remove();
  }
}

function popupWindow(image, workTitle) {
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="popup-title">
      <h5 class="g-item2 pff-500 inner-title">${workTitle}</h5>
      <img class="close-popup inner-close-icon" src="img/close-icon.svg" alt="Close popup">
    </div>
    <div class="image-popup">
      <img class="images" src="${image}" alt="Project Image">
    </div>
    <div class="popup-pharagraph">
          <p class="g-item3 paragraph-popup">Lorem Ipsum is simply dummy text 
          of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it 1960s with the 
          releaLorem Ipsum is simply dummy text of the printing and typesetting  
          ever since the 1500s, when an unknown printer took a galley of type 
          veris lapoa todoe.</p>
    </div>
    <div class="popup-tag">
      <ul class="container ul-card inner-ul">
        <li class="li-card g-item4"><a class="sff-500 a-card">${card.technologies[1]}</a></li>
        <li class="li-card g-item5"><a class="sff-500 a-card">${card.technologies[4]}</a></li>
        <li class="li-card g-item5"><a class="sff-500 a-card">${card.technologies[0]}</a></li>
        <li class="li-card g-item5"><a class="sff-500 a-card hidden-el">${card.technologies[5]}</a></li>
      </ul>
    </div>
    <div class="c-container popup-buttons">
        <button class="g-item8 pff-500 inner-margin-buttom" type="button"><a class="sff-500 a-card" href="${card.liveButton}">See Live<img class="inner-icon" src="img/live-icon.svg"></a></button>
        <button class="g-item8 pff-500 inner-margin-buttom" type="button"><a class="sff-500 a-card" href="${card.sourceButton}">See Source<img class="inner-icon" src="img/github-icon.svg"></a></button>
    </div>`;
  backdrop.appendChild(modal);
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', closeModal);
}

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

const myWork = document.createElement('section');
myWork.id = 'myWork';
document.body.insertBefore(myWork, startSection);

const h2Work = document.createElement('h2');
h2Work.classList.add('pff-500');
h2Work.textContent = 'MY RECENT';
myWork.appendChild(h2Work);

const h21Work = document.createElement('h2');
h21Work.classList.add('pff-500');
h21Work.textContent = 'WORK';
myWork.append(h21Work);

const hrWork = document.createElement('hr');
hrWork.classList.add('hr-work');
h21Work.append(hrWork);

for (let i = 0; i < 4; i += 1) {
  const containerCard = document.createElement('div');
  containerCard.classList.add('g-container');
  myWork.appendChild(containerCard);

  const imageCard = document.createElement('img');
  imageCard.classList.add('g-item1');
  imageCard.src = card.images[i];
  containerCard.appendChild(imageCard);

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('g-item2');
  cardTitle.textContent = card.name[i];
  containerCard.appendChild(cardTitle);

  const cardParagraph = document.createElement('p');
  cardParagraph.classList.add('g-item3');
  cardParagraph.textContent = card.description;
  containerCard.appendChild(cardParagraph);

  const ulCard = document.createElement('ul');
  ulCard.classList.add('ul-card');
  containerCard.appendChild(ulCard);

  for (let j = 0; j < 4; j += 1) {
    const liCard = document.createElement('li');
    liCard.classList.add('li-card');
    ulCard.appendChild(liCard);

    const aLiCard = document.createElement('a');
    aLiCard.classList.add('sff-500');
    aLiCard.classList.add('a-card');
    aLiCard.textContent = card.technologies[j];
    aLiCard.classList.add(`g-item${4 + j}`);
    liCard.appendChild(aLiCard);
  }

  const buttonCard = document.createElement('button');
  buttonCard.classList.add('g-item8');
  buttonCard.classList.add('pff-500');
  buttonCard.textContent = 'See Project';
  containerCard.appendChild(buttonCard);

  buttonCard.addEventListener('click', () => {
    backdrop.classList.add('backdrop');
    document.body.insertBefore(backdrop, startSection);
    popupWindow(card.image, card.name[0]);
  });

  if (i === 0 || i === 2) {
    containerCard.classList.add(`elipse2${i}`);
    cardTitle.classList.add('pff-500');
    cardParagraph.classList.add('sff-400');
  } else if (i === 1 || i === 3) {
    containerCard.classList.add(`elipse2${i}`);
    containerCard.classList.add('g-container-r');
    imageCard.classList.add('g-item1-r');
    cardTitle.classList.add('pff-500');
    cardTitle.classList.add('g-item2-r');
    cardParagraph.classList.add('sff-400');
    cardParagraph.classList.add('g-item3-r');
    ulCard.classList.add('g-item12-r');
    buttonCard.classList.add('g-item8-r');
  }
  if (i === 3) {
    buttonCard.classList.add('mr-b');
  }
}
