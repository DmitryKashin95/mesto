const popup = document.querySelector('.popup');
const cardTemplate = document.querySelector('#newCard').content;
const closeButton = document.querySelectorAll('.popup__button-close');
const saveButton = popup.querySelector('#popup__form_edit');
const saveCardButton = popup.querySelector('#popup__form_add');
const popupImgOpen = document.querySelector('.popup__img-open')

const popupEdit = document.querySelector('.popup__edit-profile');
const formEditProfile = popupEdit.querySelector('.popup__form');
const popupName = popupEdit.querySelector('.popup__input_js_name');
const popupProf = popupEdit.querySelector('.popup__input_js_prof');
const popupAdd = document.querySelector('.popup__add-card');
const formAddCard = popupAdd.querySelector('.popup__form');
const addCardName = popupAdd.querySelector('.popup__input_card-name');
const addCardLink = popupAdd.querySelector('.popup__input_card-link');

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
};

function addClass(popupButton) {
  popupButton.classList.add('popup_opened');
};

function removeClass(popClose) {
  popClose.classList.remove('popup_opened');
};

function toogleLike(evt) {
  evt.target.classList.toggle('card__like_active');
};

function deleteCard (evt) {
  evt.target.closest('.card').remove();
};

function changeInfo(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProf.value;
  removeClass(popupEdit);
};

function imagePopup (evt) {
  popupImg.src = evt.target.closest('.card').querySelector('.card__image').src;
  popupImg.alt = evt.target.closest('.card').querySelector('.card__place').textContent;
  popupImgTitle.textContent = evt.target.closest('.card').querySelector('.card__place').textContent;
  addClass(popupImgOpen);
};

function createCard(link, name) {
  console.log(cardTemplate);
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__place').textContent = name;

  cardElement.querySelector('.card__like').addEventListener('click', toogleLike);
  cardElement.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').addEventListener('click', imagePopup);
  return cardElement;
};

function addCards (cards) { 
  cards.map(function(elem) {
    cardsElement.append(createCard(elem.link, elem.name));
  });
}

function addCard (evt) {
  evt.preventDefault();
  cardsElement.prepend(createCard(addCardLink.value, addCardName.value));
  formAddCard.reset();
  removeClass(popupAdd);
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

addCards(initialCards);

editButton.addEventListener('click', function () {
  addClass(popupEdit);
  inputInfo()
});
addButton.addEventListener('click', function () {
  addClass(popupAdd);
});

closeButton.forEach(function(elem) {
  const closePopup = elem.closest('.popup');
  elem.addEventListener('click', function() {
    removeClass(closePopup);
  });
});
formEditProfile.addEventListener('submit', changeInfo);
formAddCard.addEventListener('submit', addCard);