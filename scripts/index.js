const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const saveButton = popup.querySelector('.popup__form');

const popupContainer = popup.querySelector('.popup__container');
const popupName = popupContainer.querySelector('.popup__input_js_name');
const popupProf = popupContainer.querySelector('.popup__input_js_prof');

const profileInfo = document.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__button-edit');
const addButton = profileInfo.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

function inputInfo() {
  popupName.value = profileName.textContent;
  popupProf.value = profileProfession.textContent;
}

function addClass() {
  popup.classList.add('popup_opened');
  inputInfo()
};

function removeClass() {
  popup.classList.remove('popup_opened');
};

function changeInfo(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProf.value;
  removeClass();
}

editButton.addEventListener('click', addClass);
closeButton.addEventListener('click', removeClass);
saveButton.addEventListener('submit', changeInfo);