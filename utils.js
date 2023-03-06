import Card from "./Card.js";

//POPUP PERFIL

//Variables para abrir y cerrar ventana para editar perfil
const formElementProfile = document.querySelector(".popup_closed");
const buttonEditProfile = document.querySelector(".profile__edit");
const buttonClosePopupProfile = document.querySelector(".popup__close-icon");

//Función para abrir y cerrar ventana para editar perfil
function togglePopupProfile() {
    formElementProfile.classList.toggle("popup_closed");
      
  }
  
  buttonEditProfile.addEventListener ("click", togglePopupProfile);
  buttonClosePopupProfile.addEventListener ("click", togglePopupProfile);

//Variables para ingresar datos en la ventana del perfil
const inputName = document.querySelector("#name");
const inputAbout = document.querySelector("#about");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const buttonSubmitProfile = document.querySelector(".popup__button");

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
  //Función para actualizar datos, borar campo de texto y cerrar ventana emergente
  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    setProfileValues();
    togglePopupProfile();
    resetPopupProfile();
  }
  
  buttonSubmitProfile.addEventListener ("click", handleProfileFormSubmit);

//POPUP CARDS

//Variables para abrir y cerrar ventana para agregar card
const formElementCard = document.querySelector(".popup_closed-element"); //formElementImage
const ButtonAddCardPopup = document.querySelector(".add-button"); //buttonAdd
const buttonCloseCardPopup = document.querySelector(".popup__close-icon_element"); //buttonCloseElement 

//Variables para agregar card
const buttonAddCard = document.querySelector("#buttonElement");
const inputTitle = document.querySelector("#titulo");
const inputLink = document.querySelector("#enlace");
const elementsCard = document.querySelector(".elements"); //importar de card

//Función para abrir y cerrar ventana para agregar card
function togglePopupAddCard() {
    formElementCard.classList.toggle("popup_closed-element");  
}

ButtonAddCardPopup.addEventListener ("click", togglePopupAddCard);
buttonCloseCardPopup.addEventListener ("click", togglePopupAddCard);

//Función para agregar card, borrar campos de texto y cerrar ventana emergente
buttonAddCard.addEventListener ("click", function(evt){
      evt.preventDefault();
      const cardCreated = new Card(inputTitle.value, inputLink.value).generateCard();
      elementsCard.prepend(cardCreated);
      resetPopupAddCard();
      togglePopupAddCard();
});

// //Función para borrar los campos de texto en la ventana de agregar card
function resetPopupAddCard() {
  inputTitle.value="";
  inputLink.value="";
}




// const imageShow = document.querySelector(".image-show__popup");
// const imageText = document.querySelector(".image-show__title");
// const popupImage = document.querySelector("#popupImage");
// const buttonCloseImage = document.querySelector(".image-show__close-icon");


// cardImage.addEventListener("click", ()=> handleCardImage(linkCard, nameCard));
// //Función para ampliar imagen de la card
// function handleCardImage(linkCard, nameCard) {
//   imageShow.src= linkCard;
//   imageText.textContent = nameCard;
//   toggleImage();
// }


// function toggleImage() {
//   popupImage.classList.toggle("popup_closed");
// }
  
// buttonCloseImage.addEventListener("click", toggleImage)