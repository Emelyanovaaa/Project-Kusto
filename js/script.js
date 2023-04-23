import Card from './card.js';
import FormValidator from "./validate.js";

const editButton = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.popup-profile');
const popupClosed = document.querySelector('.popup__cancel-btn');
const inputName = document.querySelector('.popup__form-name');
const inputJob = document.querySelector('.popup__form-description');
const editProfileSubmitBtn = document.querySelector('.popup__form-btn');
const nameProfile = document.querySelector('.profile__name-text');
const jobProfile = document.querySelector('.profile__discription-text');
const cardsContent = document.querySelector('.cards__content');
const addButton = document.querySelector('.profile__add-btn');
const addCard = document.querySelector('.popup__addCard');
const addCardClose = document.querySelector('.addCard__cancel-btn');
const addCardSubmitBtn = document.querySelector('.popup__addForm-btn');
const addCardName = document.querySelector('.popup__addForm-name');
const addCardLink = document.querySelector('.popup__addForm-link');
const popupPhoto = document.querySelector('.popup__photo');
export const popupPhotoImg = document.querySelector('.popup__photo-img');
const cancelPhoto = document.querySelector('.popup__cancel-photo');
export const popupPhotoSubText = document.querySelector('.popup__photo-subtext');
const forms = document.querySelectorAll('.popup__profile-forms');


const selectors = {
    inputSelector: '.popup__form',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: '.popup__button_inactive',
    inputErrorClass: '.popup__form-error',
    errorClass: '.popup__error_visible',
    formSet: '.form__set'
};


function openPopup(currentPopup) {
    currentPopup.classList.remove('is-hidden');
    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            closePopup(currentPopup);
        }
    });
};

function closePopup(currentPopup) {
    currentPopup.classList.add('is-hidden');
    currentPopup.querySelector('.popup__profile-forms').reset();
    document.removeEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            closePopup(currentPopup);
        }
    });
};


editButton.addEventListener('click', () => openPopup(profilePopup));
popupClosed.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup')));

addButton.addEventListener('click', () => openPopup(addCard));
addCardClose.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup')));


function editProfileSubmit(event) {  
    event.preventDefault();

    let inputNameValue = inputName.value;
    let inputJobValue = inputJob.value;

    nameProfile.textContent = inputNameValue;
    jobProfile.textContent = inputJobValue;

    closePopup(event.target.closest('.popup'));
};

editProfileSubmitBtn.addEventListener('click', editProfileSubmit);

forms.forEach((form) => {
    const editFormValidator = new FormValidator(selectors, form);
    editFormValidator.enableValidation();
});


const initialCards = [
    {
        name: 'Alaska',
        link: 'img/cards/Alaska.jpg'
    },
    {
        name: 'Bogota',
        link: 'img/cards/Bogota.jpg'
    },
    {
        name: 'Egipt',
        link: 'img/cards/Egipt.jpg'
    },
    {
        name: 'France',
        link: 'img/cards/France.jpg'
    },
    {
        name: 'India',
        link: 'img/cards/India.jpg'
    },
    {
        name: 'London',
        link: 'img/cards/London.jpg'
    },
];

for (let i = 0; i < initialCards.length; i++) {
    const name = initialCards[i].name;
    const link = initialCards[i].link;


    const cardItem = new Card(name, link, cardsContent);
    cardItem.createCard();
};

function addCardFormSubmit(event) {
    event.preventDefault();

    let cardName = addCardName.value;
    let cardLink = addCardLink.value;

    const addingCard = new Card(cardName, cardLink, cardsContent);
    addingCard.createCard();

    closePopup(event.target.closest('.popup'));
};

addCardSubmitBtn.addEventListener('click', addCardFormSubmit);

function closeImg() {
    popupPhoto.classList.add('is-hidden');
    document.removeEventListener('keydown', closeImgPopupEsc);
};

cancelPhoto.addEventListener('click', closeImg);


document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target.closest('.popup'));
        closeImg();
    }
});

export function closeImgPopupEsc(evt) {
    if (evt.key === 'Escape') {
        closeImg();
    }
};






