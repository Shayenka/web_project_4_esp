import {initialCards} from "./script.js";
const elementsCard = document.querySelector(".elements"); //exportar a utils
const templateCard = document.querySelector("#templateCard");



export default class Card {
  constructor (data) {
      this._name = data.name;
      this._link = data.link;
      //this._cardSelector = cardSelector;
  }

_getTemplate() {
  const templateElement = templateCard.cloneNode(true).content.querySelector(".element");

  return templateElement;
}

_likeCard() {
  this._likeButton.addEventListener ("click", () =>  {
    this._likeButton.classList.toggle("icon-like_black");
})
}

_deleteCard() {
  this._buttonDelete.addEventListener ("click", () =>  {
    const cardDelete = this._buttonDelete.closest(".element");
      cardDelete.remove();
      })
}

// _toggleImageShow() {
//     this._popupImageShow.classList.toggle("popup_closed");
//    }


// _imageShowPopup() {
//   this._cardElement.addEventListener("click", (event) => {
//     if (event.target.classList.contains("element__image")) {
//         this._popupImageShow = document.querySelector("#popupImage");
//         this._imageShow = document.querySelector(".image-show__popup");
//         this._imageShow.src = this._link;
//         this._imageText = document.querySelector(".element__title");
//         this._imageText.textContent = this._name;
//         this._buttonCloseImageShow = document.querySelector(".image-show__close-icon");
        
//         this._toggleImageShow();
//     }
//   })

//   this._buttonCloseImageShow.addEventListener("click", this._toggleImageShow); 
// }





// _imageShowPopup() {
//     this._cardElement.addEventListener("click", (data)=> {
//       this._popupImageShow = document.querySelector("#popupImage");
//       this._imageShow = document.querySelector(".image-show__popup");
//       this._imageShow.src = data.link;
//       this._imageText = document.querySelector(".element__title");
//       this._imageText.textContent = data.name;
//       this._buttonCloseImageShow = document.querySelector(".image-show__close-icon");
//       this._toggleImageShow();
// });


// this._buttonCloseImageShow.addEventListener("click", this._toggleImageShow); 

// }

_setCardPropetties() {
  this._cardImage = this._cardElement.querySelector(".element__image");
  this._cardImage.src = this._link;
  this._cardTitle = this._cardElement.querySelector(".element__title");
  this._cardTitle.textContent = this._name;
  this._buttonDelete = this._cardElement.querySelector(".element__delete");
  this._likeButton = this._cardElement.querySelector(".icon-like");
}

generateCard() {
  this._cardElement = this._getTemplate();
  this._setCardPropetties();
  this._likeCard();
  this._deleteCard();
  //this._imageShowPopup();

  return this._cardElement;
}

}

initialCards.forEach((data) => {
  const cardCreated = new Card(data).generateCard();
  elementsCard.append(cardCreated);
});

