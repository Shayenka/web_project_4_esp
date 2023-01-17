let buttonEdit = document.querySelector(".profile__edit");
let buttonClose = document.querySelector(".popup__close-icon");
let formElement = document.querySelector(".popup_opened");

let inputName = document.querySelector("#name");
let inputAbout = document.querySelector("#about");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");
let buttonSubmit = document.querySelector(".popup__button");

function openClosePopup() {
    formElement.classList.toggle("popup_opened");
    
}

buttonEdit.addEventListener ("click", openClosePopup);
buttonClose.addEventListener ("click", openClosePopup);

function setProfileValues() {
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputAbout.value;
}

function resetPopup() {
    inputName.value="";
    inputAbout.value="";
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    setProfileValues();
    openClosePopup();
    resetPopup();
}

buttonSubmit.addEventListener ("click", handleProfileFormSubmit);