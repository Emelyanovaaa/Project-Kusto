
//const profile = document.querySelector('.profile');
const editButton = document.querySelector('.profile__edit-btn');

const popup = document.querySelector('.popup');
const popupClosed = document.querySelector('.popup__cancel-btn');

const formElement = document.querySelector('.popup__profile-forms');
const inputName = document.querySelector('.popup__form-name');
const inputJob = document.querySelector('.popup__form-description');

function openPopup() {
    popup.classList.remove('is-hidden');
};

function closePopup() {
    popup.classList.add('is-hidden');
    inputName.value = inputName.getAttribute('placeholder');
    inputJob.value = inputJob.getAttribute('placeholder');
};

editButton.addEventListener('click', openPopup);
popupClosed.addEventListener('click', closePopup);


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    console.log(inputName.value);
    console.log(inputJob.value);

    inputName.textContent = inputName.value;
    inputJob.textContent = inputJob.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);