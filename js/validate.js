export default class FormValidator {
  constructor(selectors, form){
    this._input = form.querySelector(selectors.inputSelector);
    this._submitButton = form.querySelector(selectors.submitButtonSelector);
    this._inactiveButton= form.querySelector(selectors.inactiveButtonClass); //можно удалить? не используется
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
    }else{
      buttonElement.classList.remove('popup__button_inactive');
    }
  };
  
}

