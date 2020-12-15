class Card {
  constructor(data, cardSelector, openPopupImg) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPopupImg = openPopupImg;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const placeImage = this._element.querySelector(".element__image");
    placeImage.src = this._link;
    placeImage.alt = this._name;
    this._element.querySelector(".element__subtitle").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    this._element
      .querySelector(".element__group")
      .addEventListener("click", () => {
        this._handleLikeCard();
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handlePreviewPicture();
      });
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    this._element
      .querySelector(".element__group")
      .classList.toggle("element__group_like");
  }

  _handlePreviewPicture() {
    this._openPopupImg(this._name, this._link);
  }
}

export default Card;
