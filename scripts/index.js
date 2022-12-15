const popups = document.querySelector('.popup');
const cardTemplate = document.querySelector('#newCard').content;
const closeButton = document.querySelectorAll('.popup__button-close');
const saveButton = popups.querySelector('#popup__form_edit');
const saveCardButton = popups.querySelector('#popup__form_add');
const popupImgOpen = document.querySelector('.popup_img-open')

const popupEditProfile = document.querySelector('.popup_edit-profile');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const popupName = popupEditProfile.querySelector('.popup__input_js_name');
const popupProf = popupEditProfile.querySelector('.popup__input_js_prof');
const popupAddCard = document.querySelector('.popup_add-card');
const formAddCard = popupAddCard.querySelector('.popup__form');
const addCardName = popupAddCard.querySelector('.popup__input_card-name');
const addCardLink = popupAddCard.querySelector('.popup__input_card-link');

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
  closePopup(popupEditProfile);
};

function increasePopup (link, name) {
  popupImg.src = link;
  popupImg.alt = name;
  popupImgTitle.textContent = name;
  openPopup(popupImgOpen);
};

function createCard(link, name) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardPlace = cardElement.querySelector('.card__place');
  cardImage.src = link;
  cardImage.alt = name;
  cardPlace.textContent = name;

  cardElement.querySelector('.card__like').addEventListener('click', toogleLike);
  cardElement.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardImage.addEventListener('click', () => increasePopup(link, name));
  return cardElement;
};

function addCards (cards) { 
  cards.forEach(function(elem) {
    cardsElement.append(createCard(elem.link, elem.name));
  });
}

function addCard (evt) {
  evt.preventDefault();
  cardsElement.prepend(createCard(addCardLink.value, addCardName.value));
  formAddCard.reset();
  closePopup(popupAddCard);
};

addCards(initialCards);

editButton.addEventListener('click', function () {
  openPopup(popupEditProfile);
  inputInfo()
});
addButton.addEventListener('click', function () {
  openPopup(popupAddCard);
});

closeButton.forEach(function(elem) {
  const closePopups = elem.closest('.popup');
  elem.addEventListener('click', function() {
    closePopup(closePopups);
  });
});
formEditProfile.addEventListener('submit', changeInfo);
formAddCard.addEventListener('submit', addCard);
