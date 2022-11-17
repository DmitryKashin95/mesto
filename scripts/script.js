const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const saveButton = popup.querySelector('.popup__button-save');

const popupContainer = popup.querySelector('.popup__container');
const popupName = popupContainer.querySelector('#name');
const popupProf = popupContainer.querySelector('#prof');

const profileInfo = document.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__button-edit');
const addButton = profileInfo.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

function addClass() {
  popup.classList.add('popup__opened');
  inputInfo()
};

function removeClass() {
  popup.classList.remove('popup__opened');
};

editButton.addEventListener('click', addClass);
closeButton.addEventListener('click', removeClass);
saveButton.addEventListener('click', changeInfo);

function inputInfo() {
  popupName.value = profileName.textContent;
  popupProf.value = profileProfession.textContent;
}

function changeInfo(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProf.value;
  removeClass();
}