//Array de objetos de las cards
export const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    },
    
  ]; 

//Variable para cerrar la ventana emergente haciendo clic en la superposición
const popups = document.querySelectorAll(".popup");

//variable para generar card
const templateCard = document.querySelector("#templateCard");
export default templateCard;

//Variables para abrir y cerrar ventana para editar perfil
const formElementProfile = document.querySelector(".popup_closed");
const buttonEditProfile = document.querySelector(".profile__edit");
const buttonClosePopupProfile = document.querySelector(".popup__close-icon");

//Variables para ingresar datos en la ventana del perfil
const inputName = document.querySelector("#name");
const inputAbout = document.querySelector("#about");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const buttonSubmitProfile = document.querySelector(".popup__button");

//Variables para abrir y cerrar ventana para agregar card
const formElementCard = document.querySelector(".popup_closed-element"); 
const ButtonAddCardPopup = document.querySelector(".add-button"); 
const buttonCloseCardPopup = document.querySelector(".popup__close-icon_element"); 

//Variables para agregar card
const buttonAddCard = document.querySelector("#buttonElement");
const inputTitle = document.querySelector("#titulo");
const inputLink = document.querySelector("#enlace");
const elementsCard = document.querySelector(".elements");

// //Variables para ampliar card
// const imageCards = document.querySelectorAll(".element__image");
// const buttonCloseImageShow = document.querySelector(".image-show__close-icon");

// const popupImageShow = document.querySelector("#popupImage");
// const imageShow = document.querySelector(".image-show__popup");
// const imageText = document.querySelector(".element__title");


export {formElementProfile, buttonEditProfile, buttonClosePopupProfile, popups, inputName, inputAbout, profileName, profileOccupation, 
        buttonSubmitProfile, formElementCard, ButtonAddCardPopup, buttonCloseCardPopup, buttonAddCard, inputTitle, inputLink, elementsCard,
        };
        

//export {buttonCloseImageShow, popupImageShow, imageShow, imageText, imageCards};