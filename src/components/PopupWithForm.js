import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupSelector.querySelector(".popup__content");
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupSelector.querySelector(".popup__submit").innerText =
        "Сохранение...";
    } else {
      this._popupSelector.querySelector(".popup__submit").innerText =
        "Сохранить";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector
      .querySelector(".popup__content")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
  }
}