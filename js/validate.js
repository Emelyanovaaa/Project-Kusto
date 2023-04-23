// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('popup__form-error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__error_visible');
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__form-error');
//   errorElement.classList.remove('popup__error_visible');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__form'));
//   const buttonElement = formElement.querySelector('.popup__submit');
//   toggleButtonState(inputList, buttonElement);
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__profile-forms'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
        
//     const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
//     fieldsetList.forEach((fieldset) => {
//       setEventListeners(fieldset);
//     });
//   });
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if(hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__button_inactive');
//     /*buttonElement.setAttribute('disabled', true);*/
//   }else{
//     buttonElement.classList.remove('popup__button_inactive');
//     /*buttonElement.setAttribute('disabled', false);*/

//   }
// };

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__profile-forms',
//   inputSelector: '.popup__form',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: '.popup__button_inactive',
//   inputErrorClass: '.popup__form-error',
//   errorClass: '.popup__error_visible',
//   formSet: '.form__set'
// });


export default class FormValidator {
  constructor(selectors, form){
    /*this._formSelector = selectors.formSelector;*/
    this._input = form.querySelector(selectors.inputSelector);
    this._submitButton = form.querySelector(selectors.submitButtonSelector);
    this._inactiveButton= form.querySelector(selectors.inactiveButtonClass);
    this._inputError = form.querySelector(selectors.inputErrorClass);
    this._error = form.querySelector(selectors.errorClass);
    this._fieldset = form.querySelector(selectors.formSet);

    this._form = form;
  }

  _showInputError = (fieldset, inputElement, errorMessage) => {
    const errorElement = fieldset.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__form-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
  };
  
  _hideInputError = (fieldset, inputElement) => {
    const errorElement = fieldset.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__form-error');
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
  };

  _hasInvalidInput = (inputElement) => {
    return !inputElement.validity.valid;
  };

  /*_setEventListeners = (fieldset) => {
    const inputElement = this._input;
    const buttonElement = this._submitButton;
    /*_toggleButtonState(inputList, buttonElement);
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(fieldset, inputElement);
      this._toggleButtonState(inputElement, buttonElement);
    });
  };*/

  _setEventListeners = (fieldset) => {
    const inputs = fieldset.querySelectorAll('.popup__form');
    const buttonElement = this._submitButton;
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(fieldset, input);
        this._toggleButtonState(input, buttonElement);
      });
    });
  };


  enableValidation = () => {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    this._setEventListeners(this._fieldset);
  };

  _checkInputValidity = (fieldset, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(fieldset, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(fieldset, inputElement);
    }
  };

  _toggleButtonState = (inputElement, buttonElement) => {
    if(this._hasInvalidInput(inputElement)) {
      buttonElement.classList.add('popup__button_inactive');
      /*buttonElement.setAttribute('disabled', true);*/
    }else{
      buttonElement.classList.remove('popup__button_inactive');
      /*buttonElement.setAttribute('disabled', false);*/
  
    }
  };
  
}
