
const profile = document.querySelector('.profile');
const editButton = document.querySelector('.profile__edit-btn');

const popup = document.querySelector('.popup');
const popupClosed = document.querySelector('.popup__cancel-btn');

function openPopup() {
    popup.classList.remove('.is-hidden');
};

function closePopup() {
    popup.classList.add('.is-hidden');
};

editButton.addEventListener('click', openPopup);
popupClosed.addEventListener('click', closePopup);

 