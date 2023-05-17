import Card from './card.js';
import FormValidator from "./validate.js";

const profileEditButton = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup-profile');
const popupCancelButton = document.querySelector('.popup__cancel-btn');
const inputName = document.querySelector('.popup__form-name');
const inputDesctiption = document.querySelector('.popup__form-description');
const popupProfileSubmitBtn = document.querySelector('.popup__form-btn');
const popupProfileTextName = document.querySelector('.profile__name-text');
const popupProfileTextDescription = document.querySelector('.profile__discription-text');
const cardsContent = document.querySelector('.cards__content');
const profileAddCardButton = document.querySelector('.profile__add-btn');
const popupAddCard = document.querySelector('.popup__addCard');
const popupAddCardCloseBtn = document.querySelector('.addCard__cancel-btn');
const popupAddCardSubmitBtn = document.querySelector('.popup__addForm-btn');
const popupaAddCardTextName = document.querySelector('.popup__addForm-name');
const popupAddCardTextLink = document.querySelector('.popup__addForm-link');
const popupPhoto = document.querySelector('.popup__photo');
export const popupPhotoImg = document.querySelector('.popup__photo-img');
const popupPhotoCancelBtn = document.querySelector('.popup__cancel-photo');
export const popupPhotoSubText = document.querySelector('.popup__photo-subtext');
const popupProfileforms = document.querySelectorAll('.popup__profile-forms');


const popupProfileFormSelectors = {
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


profileEditButton.addEventListener('click', () => openPopup(popupProfile));
popupCancelButton.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup')));

profileAddCardButton.addEventListener('click', () => openPopup(popupAddCard));
popupAddCardCloseBtn.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup')));


function editPopupProfile(event) {  
    event.preventDefault();

    let inputNameValue = inputName.value;
    let inputDesctiptionValue = inputDesctiption.value;

    popupProfileTextName.textContent = inputNameValue;
    popupProfileTextDescription.textContent = inputDesctiptionValue;

    closePopup(event.target.closest('.popup'));
};

popupProfileSubmitBtn.addEventListener('click', editPopupProfile);

popupProfileforms.forEach((popupProfileForm) => {
    const formValidator = new FormValidator(popupProfileFormSelectors, popupProfileForm);
    formValidator.enableValidation();
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

function addNewCard(event) {
    event.preventDefault();

    let cardName = popupaAddCardTextName.value;
    let cardLink = popupAddCardTextLink.value;

    const newCard = new Card(cardName, cardLink, cardsContent);
    newCard.createCard();

    closePopup(event.target.closest('.popup'));
};

popupAddCardSubmitBtn.addEventListener('click', addNewCard);

function closePopupImg() {
    popupPhoto.classList.add('is-hidden');
    document.removeEventListener('keydown', closePopupImgEsc);
};

popupPhotoCancelBtn.addEventListener('click', closePopupImg);


document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target.closest('.popup'));
        closeImg();
    }
});

export function closePopupImgEsc(evt) {
    if (evt.key === 'Escape') {
        closeImg();
    }
};






