import "./index.css";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import { initialCards } from "./components/constants.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from "./components/PopupWithImage.js";
import {
  buttonEditProfile,
  buttonClosePopupProfile,
  profileName,
  profileOccupation,
  inputName,
  inputAbout,
  buttonAddCardPopup,
  buttonCloseCardPopup,
} from "./components/constants.js";

//POPUP MOSTRAR IMAGEN
function handleCardClick(src, text) {
  const openImage = new PopupWithImage("#popupImage");
  openImage.open(src, text);
}

//RENDERIZAR CARDS
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item, ".element", handleCardClick);
      const cardElement = newCard.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  ".elements"
);
cardsList.renderItems();

//POPUP AÑADIR CARD
export function handleAddCardFormSubmit(data) {
  const card = new Card(data, ".element", handleCardClick);
  const cardElement = card.generateCard();

  cardsList.addItemToStart(cardElement);
}

const cardForm = new PopupWithForm("#addCard", handleAddCardFormSubmit);

cardForm.setEventListeners();

buttonAddCardPopup.addEventListener("click", () => {
  cardForm.open();
});

buttonCloseCardPopup.addEventListener("click", () => {
  cardForm.close();
});

//POPUP EDITAR PERFIL
export function handleEditProfileFormSubmit() {
  const userData = {
    name: inputName.value,
    job: inputAbout.value,
  };
  userProfile.setUserInfo(userData);
  editProfile.close();
}

const editProfile = new PopupWithForm(
  "#editProfile",
  handleEditProfileFormSubmit
);
editProfile.setEventListeners();

const userProfile = new UserInfo(profileName, profileOccupation);

buttonEditProfile.addEventListener("click", () => {
  const infoProfile = userProfile.getUserInfo();
  inputName.value = infoProfile.userName;
  inputAbout.value = infoProfile.userJob;
  editProfile.open();
});

buttonClosePopupProfile.addEventListener("click", () => {
  editProfile.close();
});

//VALIDAR FORMULARIO EDITAR PERFIL
const ValidatorFormProfile = new FormValidator({
  formSelector: "#editProfile",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_error",
  errorClass: "popup__input-error",
});

ValidatorFormProfile.enableValidation();

//VALIDAR FORMULARIO AÑADIR CARD
const ValidatorFormAddCard = new FormValidator({
  formSelector: "#addCard",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_error",
  errorClass: "popup__input-error",
});

ValidatorFormAddCard.enableValidation();
