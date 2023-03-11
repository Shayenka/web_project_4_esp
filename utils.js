import {formElementProfile, buttonEditProfile, buttonClosePopupProfile, formElementCard, ButtonAddCardPopup,
        buttonCloseCardPopup, popups, imageCards, popupImageShow, imageShow, imageText, buttonCloseImageShow} from "./constants.js";


//POPUP PERFIL
//Función para abrir/cerrar ventana para editar perfil
export function togglePopupProfile() {
  formElementProfile.classList.toggle("popup_closed");
}
  
buttonEditProfile.addEventListener ("click", togglePopupProfile);
buttonClosePopupProfile.addEventListener ("click", togglePopupProfile);


//POPUP CARDS
//Función para abrir/cerrar ventana para agregar card
export function togglePopupAddCard() {
  formElementCard.classList.toggle("popup_closed-element"); 
}

ButtonAddCardPopup.addEventListener ("click", togglePopupAddCard);
buttonCloseCardPopup.addEventListener ("click", togglePopupAddCard);

//Función para ampliar card
function toggleImageShow() {
  popupImageShow.classList.toggle("popup_closed");  
}
  
function handleCardImage(event){
  imageCards.forEach((element) => {
    if (event.target === element) {
      imageShow.src = event.target.src;
      imageText.textContent = event.target.closest(".element").querySelector(".element__title").textContent;
      toggleImageShow();
    }
  });
}

imageCards.forEach((card) => {
  card.addEventListener("click", handleCardImage);
  
});

buttonCloseImageShow.addEventListener("click", toggleImageShow);

//Función para cerrar la ventana emergente haciendo clic en superposición
function closePopup(evt) {
  if (evt.target.classList.contains("popup")) {
    evt.target.classList.add("popup_closed");
  }
}
  
popups.forEach(popup => {
  popup.addEventListener('click', closePopup); 
});
  
//Función para cerrar la ventana emergente pulsando Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    popups.forEach(popup => popup.classList.add("popup_closed"));
  }
}
  
document.addEventListener("keydown", closePopupEsc);