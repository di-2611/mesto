export const validationConfig = {
    formSelectorEdit: ".popup__content-edit",
    formSelectorAdd: ".popup__content-add",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_inactive",
    inputErrorClass: ".popup__input_type_error",
    errorClass: "popup__input-error_active",
  };
  export const editPopup = document.querySelector(".popup_type_edit");
  export const popupOpenButton = document.querySelector(".profile__edit-button");
  export const profileName = document.querySelector(".profile__name");
  export const profileProfession = document.querySelector(".profile__profession");
  export const addPopup = document.querySelector(".popup_type_add");
  export const popupOpenAddButton = document.querySelector(".profile__add-button");
  export const addPopupSubmit = addPopup.querySelector(".popup__submit");
  export const elementsPhotoGrid = ".elements__photo-grid";
  export const imagePopup = document.querySelector(".popup_type_image");
  export const formPlace = document.querySelector(".popup__content-add");
  export const formProfile = document.querySelector(".popup__content-edit");

  export const cardsTemplate = ".elements__template_type_default";

  export const initialCards = [
    {
      name: "Архыз",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];
