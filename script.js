let buttonEdit = document.querySelector(".profile__edit");
let buttonClose = document.querySelector(".popup__close-icon");
let formElement = document.querySelector(".popup_opened");

let inputName = document.querySelector("#input-name");
let inputAbout = document.querySelector("#input-about");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");
let buttonSubmit = document.querySelector(".popup__button");

function openPopup () {
    formElement.classList.toggle("popup_opened");
    
}

buttonEdit.addEventListener ("click", openPopup);
buttonClose.addEventListener ("click", openPopup);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputAbout.value;

    }

buttonSubmit.addEventListener ("click", handleProfileFormSubmit);