//import card from "./Card.js";
import {togglePopupProfile, handleProfileFormSubmit, togglePopupAddCard, newCard, handleCardImage, toggleImageShow} from "./script.js";
import {buttonEditProfile, buttonClosePopupProfile, buttonSubmitProfile, ButtonAddCardPopup, buttonCloseCardPopup, buttonAddCard,
       } from "./constants.js";
//import {imageCards, buttonCloseImageShow} from "./constants.js";

//POPUP PERFIL
//Controlador de evento para abrir/cerrar ventana modal para editar perfil

  buttonEditProfile.addEventListener ("click", togglePopupProfile);
  buttonClosePopupProfile.addEventListener ("click", togglePopupProfile);

//Controlador de evento para actualizar datos en la ventana modal para editar perfil 
buttonSubmitProfile.addEventListener ("click", handleProfileFormSubmit);

//POPUP CARDS
//Controlador de evento para abrir/cerrar ventana modal para agregar card
ButtonAddCardPopup.addEventListener ("click", togglePopupAddCard);
buttonCloseCardPopup.addEventListener ("click", togglePopupAddCard);

//Controlador de evento para agregar card
buttonAddCard.addEventListener ("click", newCard);

//Variables para ampliar card
const imageCards = document.querySelectorAll(".element__image");
const buttonCloseImageShow = document.querySelector(".image-show__close-icon");

//Controlador de evento para ampliar card
imageCards.forEach((card) => {
    card.addEventListener("click", handleCardImage);
  });

buttonCloseImageShow.addEventListener("click", toggleImageShow);


