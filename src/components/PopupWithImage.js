import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
  }

  openimage(alt, src) {
    const popupPhotoSub = document.querySelector(".popup__image-title");
    const popupPhotoImage = document.querySelector(".popup__image");
    popupPhotoSub.textContent = alt;
    popupPhotoImage.alt = alt;
    popupPhotoImage.src = src;
    super.open();
  }
}


