import yosemiteImage from "../images/ValleYosemite.jpg";
import louiseImage from "../images/LagoLouise.jpg";
import calvasImage from "../images/MontañasCalvas.jpg";
import latemarImage from "../images/Latemar.jpg";
import vanoiseImage from "../images/Vanoise.jpg";
import braiesImage from "../images/LagoBraies";

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

const yosemiteImage = new URL("../images/ValleYosemite.jpg", import.meta.url);
const louiseImage = new URL("../images/LagoLouise.jpg", import.meta.url);
const calvasImage = new URL("../images/MontañasCalvas.jpg", import.meta.url);
const latemarImage = new URL("../images/Latemar.jpg", import.meta.url);
const vanoiseImage = new URL("../images/Vanoise.jpg", import.meta.url);
const braiesImage = new URL("../images/LagoBraies", import.meta.url);

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

//Variables para abrir/cerrar ventana para agregar card
const formElementCard = document.querySelector(".popup_closed-element");
const buttonAddCardPopup = document.querySelector("#addButton");
const buttonCloseCardPopup = document.querySelector(
  ".popup__close-icon_element"
);

//Variables para agregar card
const buttonAddCard = document.querySelector("#buttonElement");
const inputTitle = document.querySelector("#titulo");
const inputLink = document.querySelector("#enlace");
const elementsCard = document.querySelector(".elements");

//Variables para ampliar card
const imageCards = document.querySelectorAll(".element__image");
const buttonCloseImageShow = document.querySelector(".image-show__close-icon");
const popupImageShow = document.querySelector("#popupImage");
const imageShow = document.querySelector(".image-show__popup");
const imageText = document.querySelector(".image-show__title");

//Variable para cerrar la ventana emergente haciendo clic en superposición/pulsando Esc
const popups = document.querySelectorAll(".popup");

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
};
