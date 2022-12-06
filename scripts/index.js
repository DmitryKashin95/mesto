const popup = document.querySelector('.popup');
const closeButton = document.querySelectorAll('.popup__button-close');
const saveButton = popup.querySelector('#popup__form_edit');
const saveCardButton = popup.querySelector('#popup__form_add');
const popupEdit = document.querySelector('.popup__edit-profile');
const popupAdd = document.querySelector('.popup__add-card');
const popupImgOpen = document.querySelector('.popup__img-open')

const popupContainer = popup.querySelector('.popup__container');
const popupName = popupContainer.querySelector('.popup__input_js_name');
const popupProf = popupContainer.querySelector('.popup__input_js_prof');
const addCardName = popupContainer.querySelector('.popup__input_card-name')
const addCardLink = popupContainer.querySelector('.popup__input_card-link')

const profileInfo = document.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const addButton = document.querySelector('.profile__button-add');
const cardsElement = document.querySelector('.cards')
const likeActive = document.querySelectorAll('.card__like');
const popupImg = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');

function inputInfo() {
  popupName.value = profileName.textContent;
  popupProf.value = profileProfession.textContent;
}

function addClass(popupButton) {
  popupButton.classList.add('popup_opened');
};

function removeClass(evt) {
  const popClose = evt.target.closest('.popup');
  popClose.classList.remove('popup_opened');
};

function changeInfo(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProf.value;
  removeClass(evt);
};

function createCard(cardInfo) {
  const cardTemplate = document.querySelector('#newCard');
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = cardInfo.link;
  cardElement.querySelector('.card__image').alt = cardInfo.name;
  cardElement.querySelector('.card__place').textContent = cardInfo.name;

  cardElement.querySelector('.card__like').addEventListener('click', toogleLike);
  cardElement.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.card').addEventListener('click', imagePopup);
  return cardElement;
};

function addCards(cardInfo) {
  cardsElement.prepend(createCard(cardInfo));
};

function toogleLike(evt) {
  evt.target.classList.toggle('card__like_active');
};

function addCard(evt) {
  evt.preventDefault();
  const cardName = addCardName.value;
  const cardLink = addCardLink.value;
  const newCard = { name: cardName, link: cardLink };
  addCards(newCard);
  removeClass(popupAdd);
};

function deleteCard (evt) {
  evt.target.closest('.card').remove();
}

function imgData(evt) {
  popupImg.src = evt.target.src;
  popupImgTitle.textContent = evt.currentTarget.querySelector('.card__place').textContent;
};

function imagePopup(event) {
  if (event.target.classList.contains('card__image')) {
    imgData(evt);
    openPopup(popupImgOpen);
  }
};


const initialCards = [
  {
    name: 'Киров',
    link: './images/kirov.jpg'
  },
  {
    name: 'Слободской',
    link: './images/slobodskoy.jpg'
  },
  {
    name: 'Нижний Новгород',
    link: './images/nn.jpg'
  },
  {
    name: 'Сергиев Посад',
    link: './images/sergiev-posad.jpg'
  },
  {
    name: 'Казань',
    link: './images/kazan.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/spb.jpg'
  }
];

initialCards.forEach(elem => addCards(elem));

editButton.addEventListener('click', function () {
  addClass(popupEdit);
  inputInfo()
});
addButton.addEventListener('click', function () {
  addClass(popupAdd);
});
closeButton.forEach(elem => elem.addEventListener('click', removeClass));
saveButton.addEventListener('submit', changeInfo);
saveCardButton.addEventListener('submit', addCard);


