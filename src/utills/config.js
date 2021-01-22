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
export const popupProfileName = editPopup.querySelector(".popup__input_name");
export const popupJobName = editPopup.querySelector(".popup__input_profession");
export const editPopupSubmit = editPopup.querySelector(".popup__submit");
export const popupOpenButton = document.querySelector(".profile__edit-button");
export const profileName = document.querySelector(".profile__name");
export const profileProfession = document.querySelector(".profile__profession");
export const profileAvatar = document.querySelector(".profile__avatar");
export const addPopup = document.querySelector(".popup_type_add");
export const popupOpenAddButton = document.querySelector(
  ".profile__add-button"
);
export const addPopupSubmit = addPopup.querySelector(".popup__submit");
export const popupPlaceName = addPopup.querySelector(".popup__input_place");
export const popupPlaceLink = addPopup.querySelector(".popup__input_link");
export const elementsPhotoGrid = ".elements__photo-grid";
export const imagePopup = document.querySelector(".popup_type_image");
export const formPlace = document.querySelector(".popup__content-add");
export const formProfile = document.querySelector(".popup__content-edit");
export const deleteIcon = document.querySelector(".element__delete");
export const deletePopup = document.querySelector(".popup_type_delete");
export const deletePopupSubmit = deletePopup.querySelector(".popup__submit");
export const avatarPopup = document.querySelector(".popup_type_avatar-update");
export const avatarLink = avatarPopup.querySelector(
  ".popup__input_link-avatar"
);
export const avatarPopupSubmit = avatarPopup.querySelector(".popup__submit");
export const formAvatar = document.querySelector(
  ".popup__content-avatarupdate"
);
export const contanerForAvatar = document.querySelector(".profile__black");
export const avatarPopupCloseButton = document.querySelector(
  ".popup__close-avatar"
);

export const cardsTemplate = ".elements__template_type_default";
