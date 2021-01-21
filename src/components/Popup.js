export default class Popup {
  constructor({ popupSelector }) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keyup", (event) => this._handleEscClose(event));
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keyup", (event) =>
      this._handleEscClose(event)
    );
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closePopupByOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector
      .querySelector(".popup__close")
      .addEventListener("click", this.close.bind(this));
    this._popupSelector.addEventListener(
      "mousedown",
      this._closePopupByOverlayClick.bind(this)
    );
  }
}
