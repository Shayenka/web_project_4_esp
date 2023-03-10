import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {initialCards,inputName, inputAbout, profileName, profileOccupation, buttonSubmitProfile, inputTitle, inputLink, buttonAddCard, 
        elementsCard} from "./constants.js";
import {togglePopupProfile, togglePopupAddCard} from "./utils.js";


//Función para renderizar cards
function renderCards() {
  initialCards.forEach((data) => {
    const cardCreated = new Card(data).generateCard();
    elementsCard.append(cardCreated);

  });
}

renderCards();

//Función para validar formulario
const Validator = new FormValidator({
  formSelector: ".popup",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_error",
  errorClass: "popup__input-error"

});

Validator.enableValidation();

//POPUP PERFIL
//Función para actualizar datos en la ventana del perfil
function setProfileValues() {
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;

}

//Función para borrar los campos de texto en la ventana de editar perfil
function resetPopupProfile() {
  inputName.value="";
  inputAbout.value="";

}

//Función para actualizar datos, borrar campo de texto y cerrar ventana emergente
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  setProfileValues();
  togglePopupProfile();
  resetPopupProfile();

}

buttonSubmitProfile.addEventListener ("click", handleProfileFormSubmit);

//POPUP CARDS
//Función para borrar los campos de texto en la ventana de agregar card
function resetPopupAddCard() {
  inputTitle.value="";
  inputLink.value="";

}

//Función para agregar card, borrar campos de texto y cerrar ventana emergente
buttonAddCard.addEventListener ("click", function(evt){
  evt.preventDefault();
  const cardCreated = new Card({name: inputTitle.value, link: inputLink.value}).generateCard();
  elementsCard.prepend(cardCreated);
  resetPopupAddCard();
  togglePopupAddCard();

});




















