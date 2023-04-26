import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._inputList = this._popupElement.querySelectorAll(".popup__text");
    this._handleFormSubmit = handleFormSubmit;
    this._getInputValues = this._getInputValues.bind(this);
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const formData = this._getInputValues();
      this._handleFormSubmit(formData);
      evt.target.querySelector(".popup__button").textContent = "Cargando...";
    });
  }

  close() {
    super.close();
    this._popupElement.reset();
  }
}
