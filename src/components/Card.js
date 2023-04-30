import Api from "./Api.js";
import { templateCard, userProfileId } from "./constants.js";

export default class Card {
  constructor(data, cardSelector, handleCardClick, handleDeleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._cardId = data._id;
    this._likeCard = this._likeCard.bind(this);
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._userId = data.owner._id;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._api = new Api();
    this._liked = data.likes.some((item) => {
      return item._id === this._userId;
    });
  }

  _getTemplate() {
    const templateElement = templateCard
      .cloneNode(true)
      .content.querySelector(this._cardSelector);

    return templateElement;
  }

  _likeCard(cardId) {
    this._liked
      ? this._api
          .removeLike(cardId)
          .then((likes) => {
            console.log(likes);
            this._liked = likes.some((item) => {
              return item._id === this._userId;
            });

            this._likeButton.classList.remove("icon-like_black");

            this._cardLikesCount.textContent = likes.length;
          })
          .catch((err) => console.log(`Error al remover like: ${err}`))
      : this._api
          .addLike(cardId)
          .then((likes) => {
            console.log(likes);
            this._liked = likes.some((item) => {
              return item._id === this._userId;
            });

            this._likeButton.classList.add("icon-like_black");

            this._cardLikesCount.textContent = likes.length;
          })
          .catch((err) => console.log(`Error al añadir like: ${err}`));
  }

  _setEventsListeners() {
    this._likeButton.addEventListener("click", () =>
      this._likeCard(this._cardId)
    );
    if (this._userId === userProfileId) {
      this._buttonDelete.addEventListener("click", () =>
        this._handleDeleteCard(this._cardId, this._cardElement)
      );
    } else {
      this._buttonDelete.remove();
    }

    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._link, this._name)
    );
  }

  _setCardProperties() {
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardTitle = this._cardElement.querySelector(".element__title");
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._buttonDelete = this._cardElement.querySelector(".element__delete");
    this._likeButton = this._cardElement.querySelector(".icon-like");
    this._cardLikesCount =
      this._cardElement.querySelector(".likes-card__count");
    this._cardLikesCount.textContent = this._likes;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setCardProperties();
    this._setEventsListeners();

    return this._cardElement;
  }
}
