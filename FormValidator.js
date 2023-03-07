
class FormValidator {
  constructor (enableValidation) {
    this._enableValidation = enableValidation;
    }


 _showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._enableValidation.inputErrorClass);
  errorElement.textContent = errorMessage;

  errorElement.classList.add(this._enableValidation.errorClass);

};

_hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._enableValidation.inputErrorClass);
    errorElement.classList.remove(this._enableValidation.errorClass);
    errorElement.textContent = "";
  };


_checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    this._hideInputError(formElement, inputElement);
  }
};

_hasInvalidInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid);

_toggleButtonState = (inputList, buttonElement) => {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(this._enableValidation.inactiveButtonClass);
    buttonElement.disabled = true;
  }
  else {
    buttonElement.classList.remove(this._enableValidation.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

_setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(this._enableValidation.inputSelector));
  const buttonElement = formElement.querySelector(this._enableValidation.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(formElement, inputElement);
      this._toggleButtonState(inputList, buttonElement);
    });
  });
}

enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._enableValidation.formSelector));
      formList.forEach((formElement) => {
        formElement.addEventListener("submit", function (evt) {
          evt.preventDefault();
        });

        this._setEventListeners(formElement);
    });
  };

}


const Validator = new FormValidator({
    formSelector: ".popup",
    inputSelector: ".popup__text",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    inputErrorClass: "popup__text_error",
    errorClass: "popup__input-error"
});

Validator.enableValidation();
