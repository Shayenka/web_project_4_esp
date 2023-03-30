export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.remove("popup_closed");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.add("popup_closed");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      this._closePopupOutSide(evt);
    });
  }

  _closePopupOutSide(evt) {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  }
}
