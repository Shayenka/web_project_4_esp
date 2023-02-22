
const showInputError = (formElement, inputElement, errorMessage, elementsEnableValidation) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(`#${inputElement.id}-error`,inputElement, errorMessage, errorElement);
    inputElement.classList.add(elementsEnableValidation.inputErrorClass);
    errorElement.textContent = errorMessage;

    errorElement.classList.add(elementsEnableValidation.errorClass);
    
};

const hideInputError = (formElement, inputElement, elementsEnableValidation) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(elementsEnableValidation.inputErrorClass);
    errorElement.classList.remove(elementsEnableValidation.errorClass);
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, elementsEnableValidation) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, elementsEnableValidation);
  } else {
    hideInputError(formElement, inputElement, elementsEnableValidation);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
   return !inputElement.validity.valid;
 });
};

const toggleButtonState = (inputList, buttonElement, elementsEnableValidation) => {
  if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(elementsEnableValidation.inactiveButtonClass);
        buttonElement.disabled = true;
  } 
  else {
        buttonElement.classList.remove(elementsEnableValidation.inactiveButtonClass);
        buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, elementsEnableValidation) => {
  const inputList = Array.from(formElement.querySelectorAll(elementsEnableValidation.inputSelector));
  const buttonElement = formElement.querySelector(elementsEnableValidation.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, elementsEnableValidation);
      toggleButtonState(inputList, buttonElement, elementsEnableValidation);
    });
  });
}

const enableValidation = (elementsEnableValidation) => {
  const formList = Array.from(document.querySelectorAll(elementsEnableValidation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });

      setEventListeners(formElement, elementsEnableValidation);
  });
};

enableValidation({
    formSelector: ".popup",
    inputSelector: ".popup__text",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    inputErrorClass: "popup__text_error",
    errorClass: "popup__input-error"
});


// const popup = document.querySelector(enableValidation.formSelector);
// const popupClose = popup.querySelector(".popup_closed");

//  function closePopup(evt) {
//       if (evt.target === popup) {
//         popup.classList.add(popupClose);
//       }
//   }

//   popup.addEventListener('click', closePopup);

//   function closePopupEsc(evt) {
//     if (evt.key === "Escape") {
//         popup.classList.add(popupClose);
//       }
//   }

//   document.addEventListener("keydown", closePopupEsc);

//   enableValidation({
//     formSelector: ".popup",
//     inputSelector: ".popup__text",
//     submitButtonSelector: ".popup__button",
//     inactiveButtonClass: "popup__button_inactive",
//     inputErrorClass: "popup__text_error",
//     errorClass: "popup__input-error"
//   });
  