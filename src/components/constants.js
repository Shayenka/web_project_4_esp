import yosemiteImage from "../images/ValleYosemite.jpg";
import louiseImage from "../images/LagoLouise.jpg";
import calvasImage from "../images/MontañasCalvas.jpg";
import latemarImage from "../images/Latemar.jpg";
import vanoiseImage from "../images/Vanoise.jpg";
import braiesImage from "../images/LagoBraies.jpg";

//Array de objetos de las cards
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: yosemiteImage,
  },
  {
    name: "Lago Louise",
    link: louiseImage,
  },
  {
    name: "Montañas Calvas",
    link: calvasImage,
  },
  {
    name: "Latemar",
    link: latemarImage,
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: vanoiseImage,
  },
  {
    name: "Lago di Braies",
    link: braiesImage,
  },
];

//Variable para generar card
const templateCard = document.querySelector("#templateCard");

//Variables para abrir/cerrar ventana para editar perfil
const formElementProfile = document.querySelector(".popup_closed");
const buttonEditProfile = document.querySelector(".profile__edit");
const buttonClosePopupProfile = document.querySelector(".popup__close-icon");

//Variables para actualizar datos en la ventana del perfil
const inputName = document.querySelector("#name");
const inputAbout = document.querySelector("#about");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const buttonSubmitProfile = document.querySelector(".popup__button");

//Variables popup avatar
const popupAvatar = document.querySelector("#changeAvatar");
const closePopupAvatar = document.querySelector("#closePopupAvatar");
const profileAvatar = document.querySelector(".profile__avatar");
const inputLinkAvatar = document.querySelector("#linkAvatar");
const profileAvatarImage = document.querySelector(".profile__image");

//Variables para abrir/cerrar ventana para agregar card
const formElementCard = document.querySelector(".popup_closed-element");
const buttonAddCardPopup = document.querySelector("#addButton");
const buttonCloseCardPopup = document.querySelector(
  ".popup__close-icon_element"
);

//Variables para agregar card
const buttonAddCard = document.querySelector("#cardButton");
const inputTitle = document.querySelector("#titulo");
const inputLink = document.querySelector("#enlace");
const elementsCard = document.querySelector(".elements");

//Variables para ampliar card
const imageCards = document.querySelectorAll(".element__image");
const buttonCloseImageShow = document.querySelector(".image-show__close-icon");
const popupImageShow = document.querySelector("#popupImage");
const imageShow = document.querySelector(".image-show__popup");
const imageText = document.querySelector(".image-show__title");

//Variables para popup eliminar card
const popupDeleteCard = document.querySelector("#popupDeleteCard");
const buttonClosePopupDelete = document.querySelector("#ClosePopupDeleteCard");
const buttonDeleteCard = document.querySelector("#buttonDeleteCard");

//Variable para cerrar la ventana emergente haciendo clic en superposición/pulsando Esc
const popups = document.querySelectorAll(".popup");

//Variable para enviar formulario
const submitButtonSelector = document.querySelectorAll(".popup__button");

//Variable identificador usuario perfil
const userProfileId = "93de6497062267393a34f6f4";

export {
  templateCard,
  formElementProfile,
  buttonEditProfile,
  buttonClosePopupProfile,
  popups,
  inputName,
  inputAbout,
  profileName,
  profileOccupation,
  buttonSubmitProfile,
  formElementCard,
  buttonAddCardPopup,
  buttonCloseCardPopup,
  buttonAddCard,
  inputTitle,
  inputLink,
  elementsCard,
  buttonCloseImageShow,
  popupImageShow,
  imageShow,
  imageText,
  imageCards,
  profileAvatar,
  closePopupAvatar,
  popupAvatar,
  popupDeleteCard,
  buttonClosePopupDelete,
  buttonDeleteCard,
  inputLinkAvatar,
  profileAvatarImage,
  submitButtonSelector,
  userProfileId,
};
