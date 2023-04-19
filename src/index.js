import "./index.css";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import { initialCards } from "./components/constants.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Api from "./components/Api.js";
import {
  buttonEditProfile,
  buttonClosePopupProfile,
  profileName,
  profileOccupation,
  inputName,
  inputAbout,
  buttonAddCardPopup,
  buttonCloseCardPopup,
  popupAvatar,
  profileAvatar,
  closePopupAvatar,
  popupDeleteCard,
  buttonClosePopupDelete,
  buttonDeleteCard,
  inputTitle,
  inputLink,
  buttonSubmitProfile,
  buttonAddCard,
  inputLinkAvatar,
} from "./components/constants.js";

//Cargar la información del usuario desde el servidor
const api = new Api();
const userInfo = api
  .getUserInfo()
  .then((userInfo) => {
    console.log(userInfo);
  })
  .catch((err) => {
    console.log(err);
  });

//Cargar las tarjetas desde el servidor
const cards = api
  .getCards()
  .then((userInfo) => {
    console.log(userInfo);
  })
  .catch((err) => {
    console.log(err);
  });

//POPUP MOSTRAR IMAGEN
function handleCardClick(src, text) {
  const openImage = new PopupWithImage("#popupImage");
  openImage.open(src, text);
}

//FUNCIÓN ELIMINAR CARD
function handleDeleteCard() {
  popupDeleteCard.classList.remove("popup_closed");
}

buttonClosePopupDelete.addEventListener("click", () => {
  popupDeleteCard.classList.add("popup_closed");
});

buttonDeleteCard.addEventListener("click", () => {
  popupDeleteCard.classList.add("popup_closed");
});

//RENDERIZAR CARDS
const cardsList = new Section(
  {
    items: initialCards, //Cambiar por el cards del api
    renderer: (item) => {
      const newCard = new Card(
        item,
        ".element",
        handleCardClick,
        handleDeleteCard
      );
      const cardElement = newCard.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  ".elements"
);
cardsList.renderItems();

//POPUP AÑADIR CARD
export function handleAddCardFormSubmit() {
  const cardName = inputTitle.value;
  const cardLink = inputLink.value;
  const cardData = {
    name: cardName,
    link: cardLink,
  };
  const api = new Api();
  api
    .addNewCard(cardData)
    .then((newCard) => {
      const card = new Card(
        newCard,
        ".element",
        handleCardClick,
        handleDeleteCard
      );
      const cardElement = card.generateCard();

      cardsList.addItemToStart(cardElement);
    })
    .catch((err) => {
      console.log(err);
    });
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
  const api = new Api();
  api
    .editUserInfo(userData)
    .then((userInfo) => {
      userProfile.setUserInfo(userInfo);
      editProfile.close();
    })
    .catch((err) => {
      console.log(err);
    });
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

//VALIDAR FORMULARIO CAMBIAR AVATAR
const ValidatorFormChangeAvatar = new FormValidator({
  formSelector: "#changeAvatar",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_error",
  errorClass: "popup__input-error",
});

ValidatorFormChangeAvatar.enableValidation();

//POPUP AVATAR
profileAvatar.addEventListener("click", () => {
  popupAvatar.classList.remove("popup_closed");
});

closePopupAvatar.addEventListener("click", () => {
  popupAvatar.classList.add("popup_closed");
});

export function handleChangeAvatarProfile() {
  const avatar = {
    link: inputLinkAvatar.value,
  };
}

const newAvatar = new PopupWithForm("#changeAvatar", handleChangeAvatarProfile);
newAvatar.setEventListeners();

// //POPUP EDITAR PERFIL
// export function handleEditProfileFormSubmit() {
//   const userData = {
//     name: inputName.value,
//     job: inputAbout.value,
//   };
//   userProfile.setUserInfo(userData);
//   editProfile.close();
// }

// const editProfile = new PopupWithForm(
//   "#editProfile",
//   handleEditProfileFormSubmit
// );
// editProfile.setEventListeners();

// const userProfile = new UserInfo(profileName, profileOccupation);

// buttonEditProfile.addEventListener("click", () => {
//   const infoProfile = userProfile.getUserInfo();
//   inputName.value = infoProfile.userName;
//   inputAbout.value = infoProfile.userJob;
//   editProfile.open();
// });

// buttonClosePopupProfile.addEventListener("click", () => {
//   editProfile.close();
// });
