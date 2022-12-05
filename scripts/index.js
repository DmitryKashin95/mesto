const popup = document.querySelector('.popup');
const closeButton = document.querySelectorAll('.popup__button-close');
const saveButton = popup.querySelector('.popup__form');
const saveCardButton = popup.querySelector('.popup__form');
const popupEdit = document.querySelector('.popup__edit-profile');
const popupAdd = document.querySelector('.popup__add-card');

const addCardName = popupAdd.querySelector('.popup__input_card-name')
const addCardLink = popupAdd.querySelector('.popup__input_card-link')

const popupContainer = popup.querySelector('.popup__container');
const popupName = popupContainer.querySelector('.popup__input_js_name');
const popupProf = popupContainer.querySelector('.popup__input_js_prof');

const profileInfo = document.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const addButton = document.querySelector('.profile__button-add');
const cardsElement = document.querySelector('.cards')
const likeActive = document.querySelectorAll('.card__like');

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

function createPlace(cardInfo) {
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

function addCard(cardInfo) {
  const cardElement = createPlace(cardInfo);
  cardsElement.prepend(cardElement);
};

function toogleLike(evt) {
  evt.target.classList.toggle('card__like_active');
};

function addCard(evt) {
  evt.preventDefault();
  const cardName = addCardName.value;
  const cardLink = addCardLink.value;
  const newPlace = {name: cardName, link: cardLink};
  createPlace(newPlace);
  removeClass();
};

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


