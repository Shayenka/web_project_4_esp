import Card from "./Card.js";
import {initialCards} from "./constants.js";
import FormValidator from "./FormValidator.js";
import {formElementProfile, popups, inputName, inputAbout, profileName, profileOccupation, formElementCard, inputTitle, inputLink, 
        elementsCard} from "./constants.js";
//import {popupImageShow, imageShow, imageText, imageCards} from "./constants.js";
//Función para crear nuevas cards
function renderCards() {
  initialCards.forEach((data) => {
    const cardCreated = new Card(data).generateCard();
    elementsCard.append(cardCreated);
  });

}

renderCards();

//Función que llama la clase FormValidator
const Validator = new FormValidator({
    formSelector: ".popup",
    inputSelector: ".popup__text",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    inputErrorClass: "popup__text_error",
    errorClass: "popup__input-error"
});

Validator.enableValidation();

//Función para cerrar la ventana emergente haciendo clic en la superposición
function closePopup(evt) {
  if (evt.target.classList.contains("popup")) {
    evt.target.classList.add("popup_closed");
  }
}

popups.forEach(popup => {
  popup.addEventListener('click', closePopup);

})

//Función para cerrar la ventana emergente pulsando Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    popups.forEach(popup => popup.classList.add("popup_closed"));
  }
}

document.addEventListener("keydown", closePopupEsc);

//POPUP PERFIL

//Función para abrir y cerrar ventana para editar perfil
export function togglePopupProfile() {
  formElementProfile.classList.toggle("popup_closed");
    
}

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
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  setProfileValues();
  togglePopupProfile();
  resetPopupProfile();
}

//POPUP CARDS

//Función para abrir y cerrar ventana para agregar card
export function togglePopupAddCard() {
  formElementCard.classList.toggle("popup_closed-element");  
}

//Función para borrar los campos de texto en la ventana de agregar card
function resetPopupAddCard() {
  inputTitle.value="";
  inputLink.value="";
}
//Función para agregar card, borrar campos de texto y cerrar ventana emergente
export function newCard(evt) {
  evt.preventDefault();
  const cardCreated = new Card({name: inputTitle.value, link: inputLink.value}).generateCard();
  elementsCard.prepend(cardCreated);
  resetPopupAddCard();
  togglePopupAddCard();
}

//Variables para ampliar card
const imageCards = document.querySelectorAll(".element__image");
const popupImageShow = document.querySelector("#popupImage");
const imageShow = document.querySelector(".image-show__popup");
const imageText = document.querySelector(".element__title");

export function toggleImageShow() {
  popupImageShow.classList.toggle("popup_closed");
}
//Función para ampliar card
export function handleCardImage(event){
  imageCards.forEach((element) => {
    if (event.target === element) {
      imageShow.src = event.target.src;
      imageText.textContent = event.target.closest(".element").querySelector(".element__title").textContent;
      toggleImageShow();
    }
  });
}






















