// import Section from "./Section.js";
// import Card from "./Card.js";
// import PopupWithForm from "./PopupWithForm.js";
// import UserInfo from "./UserInfo.js";
// import { initialCards } from "./constants.js";
// import FormValidator from "./FormValidator.js";
// import {
//   buttonEditProfile,
//   buttonClosePopupProfile,
//   profileName,
//   profileOccupation,
//   inputName,
//   inputAbout,
//   buttonAddCardPopup,
//   buttonCloseCardPopup,
// } from "./constants.js";

// //RENDERIZAR CARDS
// const cardsList = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       const newCard = new Card(item, ".element");
//       const cardElement = newCard.generateCard();
//       cardsList.addItem(cardElement);
//     },
//   },
//   ".elements"
// );
// cardsList.renderItems();

// //POPUP AÑADIR CARD
// export function handleAddCardFormSubmit(data) {
//   console.log(data.link, data.name);
//   const card = new Card(data, ".element");
//   console.log(card);
//   const cardElement = card.generateCard();

//   cardsList.addItemToStart(cardElement); //Section
// }

// const cardForm = new PopupWithForm("#addCard", handleAddCardFormSubmit);

// cardForm.setEventListeners();

// buttonAddCardPopup.addEventListener("click", () => {
//   cardForm.open();
// });

// buttonCloseCardPopup.addEventListener("click", () => {
//   cardForm.close();
// });

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

// //VALIDAR FORMULARIO
// const Validator = new FormValidator({
//   formSelector: ".popup",
//   inputSelector: ".popup__text",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_inactive",
//   inputErrorClass: "popup__text_error",
//   errorClass: "popup__input-error",
// });

// Validator.enableValidation();
