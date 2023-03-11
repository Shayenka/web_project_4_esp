import templateCard from "./constants.js";

export default class Card {
  constructor (data) {
    this._name = data.name;
    this._link = data.link  
}

_getTemplate() {
  const templateElement = templateCard.cloneNode(true).content.querySelector(".element");

  return templateElement;
}

_likeCard() {
  this._likeButton.classList.toggle("icon-like_black");
}

_deleteCard() {
  this._buttonDelete.closest(".element").remove();  
}

_setEventsListeners() {
  this._likeButton.addEventListener ("click", ()  => this._likeCard());
  this._buttonDelete.addEventListener ("click", () => this._deleteCard());
}

_setCardProperties() {
  this._cardImage = this._cardElement.querySelector(".element__image");
  this._cardImage.src = this._link;
  this._cardTitle = this._cardElement.querySelector(".element__title");
  this._cardTitle.textContent = this._name;
  this._buttonDelete = this._cardElement.querySelector(".element__delete");
  this._likeButton = this._cardElement.querySelector(".icon-like");
}

generateCard() {
  this._cardElement = this._getTemplate();
  this._setCardProperties();
  this._setEventsListeners();

  return this._cardElement;
}
}