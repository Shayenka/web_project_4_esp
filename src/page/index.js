import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForms.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
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
  inputLinkAvatar,
  profileAvatarImage,
  submitButtonSelector,
} from "../components/constants.js";

//Cargar la información del usuario desde el servidor
const userProfile = new UserInfo(profileName, profileOccupation);
const api = new Api();
api
  .getUserInfo()
  .then((userInfo) => {
    userProfile.setUserInfo(userInfo);
  })
  .catch((err) => {
    console.log(err);
  });

//Cargar las tarjetas desde el servidor
api
  .getCards()
  .then((infoCard) => {
    const cardsList = new Section(
      {
        items: infoCard,
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
function handleDeleteCard(cardId, cardElement) {
  popupDeleteCard.classList.remove("popup_closed");

  buttonDeleteCard.addEventListener("click", () => {
    cardElement.remove();

    const api = new Api();
    api
      .deleteCard(cardId)
      .then((result) => {
        console.log(`Tarjeta con id ${cardId} eliminada`);
      })
      .catch((error) => {
        console.log(`Error al eliminar tarjeta con id ${cardId}: ${error}`);
      });

    popupDeleteCard.classList.add("popup_closed");
  });
}

buttonClosePopupDelete.addEventListener("click", () => {
  popupDeleteCard.classList.add("popup_closed");
});

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
      const cardsList = new Section(
        {
          items: [],
          renderer: (item) => {
            cardsList.addItem(item);
          },
        },
        ".elements"
      );

      cardsList.addItemToStart(cardElement);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log(submitButtonSelector);
      submitButtonSelector.textContent = "Guardar";
      cardForm.close();
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
    about: inputAbout.value,
  };

  const api = new Api();
  api
    .editUserInfo(userData)
    .then((userInfo) => {
      userProfile.setUserInfo(userInfo);
    })
    .catch((err) => {
      console.log(err);
    })

    .finally(() => {
      submitButtonSelector.textContent = "Guardar";
      editProfile.close();
    });
}

const editProfile = new PopupWithForm(
  "#editProfile",
  handleEditProfileFormSubmit
);
editProfile.setEventListeners();

// const userProfile = new UserInfo(profileName, profileOccupation);

buttonEditProfile.addEventListener("click", () => {
  const infoProfile = userProfile.getUserInfo();
  inputName.value = infoProfile.userName;
  inputAbout.value = infoProfile.userJob;
  editProfile.open();
});

buttonClosePopupProfile.addEventListener("click", () => {
  editProfile.close();
});

//POPUP AVATAR
profileAvatar.addEventListener("click", () => {
  popupAvatar.classList.remove("popup_closed");
});

closePopupAvatar.addEventListener("click", () => {
  popupAvatar.classList.add("popup_closed");
});

export function handleChangeAvatarProfile() {
  const userAvatar = {
    avatar: inputLinkAvatar.value,
  };
  const api = new Api();
  api
    .changeAvatarProfile(userAvatar)
    .then((userInfo) => {
      userProfile.setUserInfo(userInfo);
      profileAvatarImage.src = userInfo.avatar;
      userProfile.setUserInfo(userInfo);
    })
    .then(() => {
      newAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitButtonSelector.textContent = "Guardar";
    });
}

const newAvatar = new PopupWithForm("#changeAvatar", handleChangeAvatarProfile);
newAvatar.setEventListeners();

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
