class Card {
  constructor(
    { data, handleCardClick, handleLikeClick, handleDeleteClick },
    cardSelector,
    profileId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._card = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._profileId = profileId;
    this._cardId = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._card)
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
    this._likesAmount();
    this.setLikes(this._likes);
    this._displayCardRemoveButton();
    this._setEventListeners();

    return this._element;
  }

  _isLiked() {
    return this._element
      .querySelector(".element__group")
      .classList.contains("element__group_like");
  }

  _cardIsLikedByCurrentUser() {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._profileId) {
        return true;
      }
    }
    return false;
  }

  _likesAmount() {
    const likesCount = this._element.querySelector(".element__likecount");
    if (this._likes.length !== 0) {
      likesCount.textContent = this._likes.length;
    } else {
      likesCount.textContent = "";
    }
  }

  setLikes(likesArray) {
    const likeButton = this._element.querySelector(".element__group");
    const likeCount = this._element.querySelector(".element__likecount");
    const elementGroups = this._element.querySelector(".element__groups");
    this._element.querySelector(".element__likecount").textContent =
      likesArray.length;
    this._likes = likesArray;
    if (this._cardIsLikedByCurrentUser()) {
      likeButton.classList.add("element__group_like");
      likeCount.classList.add("element_opened");
    } else {
      likeButton.classList.remove("element__group_like");
      this._likesAmount();
    }
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__group")
      .addEventListener("click", () => {
        this._handleLikeClick(this._cardId, this._isLiked());
      });
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._handleDeleteClick(this._cardId);
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._link, this._name)
      );
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _displayCardRemoveButton() {
    if (this._owner._id !== this._profileId) {
      this._element
        .querySelector(".element__delete")
        .classList.add("element__delete_opened");
    }
  }
}

export default Card;
