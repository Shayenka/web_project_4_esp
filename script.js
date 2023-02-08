//Variables para abrir y cerrar ventana para editar perfil
let buttonEdit = document.querySelector(".profile__edit");
let buttonClose = document.querySelector(".popup__close-icon");
let formElement = document.querySelector(".popup_opened");
//Variables para ingresar datos en la ventana del perfil
let inputName = document.querySelector("#name");
let inputAbout = document.querySelector("#about");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");
let buttonSubmit = document.querySelector(".popup__button");

//Función para abrir y cerrar ventana para editar perfil
function openClosePopup() {
  formElement.classList.toggle("popup_opened");
    
}

buttonEdit.addEventListener ("click", openClosePopup);
buttonClose.addEventListener ("click", openClosePopup);

//Función para actualizar datos en la ventana del perfil
function setProfileValues() {
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;
}

//Función para borrar los campos de texto en la ventana de editar perfil
function resetPopup() {
  inputName.value="";
  inputAbout.value="";
}
//Función para actualizar datos, borar campo de texto y cerrar ventana emergente
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  setProfileValues();
  openClosePopup();
  resetPopup();
}

buttonSubmit.addEventListener ("click", handleProfileFormSubmit);

//Array de objetos de las imágenes
const initialCards = [
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

//Variables para abrir y cerrar ventana para agregar card
const buttonAdd = document.querySelector(".add-button");
const formElementImage = document.querySelector(".popup_closed-element");
const buttonCloseElement = document.querySelector(".popup__close-icon_element");

//Variables para ingresar card
const elements = document.querySelector(".elements");
const templateCard = document.querySelector("#templateCard");
const inputTitle = document.querySelector("#titulo");
const inputEnlace = document.querySelector("#enlace");
const imageShow = document.querySelector(".image-show__popup");
const imageText = document.querySelector(".image-show__title");
const popupImage = document.querySelector("#popupImage");
const buttonCloseImage = document.querySelector(".image-show__close-icon");
const buttonElement = document.querySelector("#buttonElement");

//Función para abrir y cerrar ventana para agregar card
function openClosePopupElement() {
  formElementImage.classList.toggle("popup_closed-element");  
}

buttonAdd.addEventListener ("click", openClosePopupElement);
buttonCloseElement.addEventListener ("click", openClosePopupElement);

//Función para ingresar nueva card
function createCard(nameCard, linkCard) {
  const addCard = templateCard.content.cloneNode(true);
  const likeButton = addCard.querySelector(".icon-like");
  const buttonDelete = addCard.querySelector(".element__delete");
  const cardImage = addCard.querySelector(".element__image");
  addCard.querySelector(".element__title").textContent = nameCard;
  addCard.querySelector(".element__image").src = linkCard;

//Función para dar like a la card
likeButton.addEventListener ("click", function() {
  likeButton.classList.toggle("icon-like_black");
})

//Función para eliminar card
buttonDelete.addEventListener ("click", function() {
  const cardDelete = buttonDelete.closest(".element");
  cardDelete.remove();
})

//Función que llama handleCardImage para ampliar imagen
cardImage.addEventListener("click", ()=> handleCardImage(linkCard, nameCard));

  return addCard;
}

//Función que llama a createCard
initialCards.forEach(function(element) {
  const cardCreated = createCard(element.name, element.link);
  elements.append(cardCreated);
});

//Función para agregar card, borrar campos de texto y cerrar ventana emergente
buttonElement.addEventListener ("click", function(evt){
  evt.preventDefault();
  const cardCreated = createCard(inputTitle.value, inputEnlace.value)
  elements.prepend(cardCreated);
  resetPopupElement();
  openClosePopupElement();
});

//Función para borrar los campos de texto en la ventana de agregar card
function resetPopupElement() {
  inputTitle.value="";
  inputEnlace.value="";
}
 
//Función para ampliar imagen de la card
function handleCardImage(linkCard, nameCard) {
  imageShow.src= linkCard;
  imageText.textContent = nameCard;
  toggleImage();
}

function toggleImage() {
  popupImage.classList.toggle("popup_opened");
}
  
buttonCloseImage.addEventListener("click", toggleImage);

  
  
