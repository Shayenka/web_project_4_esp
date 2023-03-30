import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._popupImage = this._popupElement.querySelector(".image-show__popup");
    this._popupTitle = this._popupElement.querySelector(".image-show__title");
    this._buttonClose = this._popupElement.querySelector(
      ".image-show__close-icon"
    );

    this._buttonClose.addEventListener("click", () => this.close());
    this._popupElement.addEventListener("click", () => this.close());
  }

  open(image, text) {
    this._popupImage.src = image;
    this._popupImage.alt = text;
    this._popupTitle.textContent = text;
    super.open();
  }
}
