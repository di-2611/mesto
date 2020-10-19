import { validationConfig } from "./Config.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popup = document.querySelector(".popup");

const editPopup = document.querySelector(".popup_type_edit");
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = editPopup.querySelector(".popup__close");
const formElementEdit = editPopup.querySelector(".popup__content");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_profession");

const addPopup = document.querySelector(".popup_type_add");
const popupOpenAddButton = document.querySelector(".profile__add-button");
const popupCloseAddButton = addPopup.querySelector(".popup__close");
const formElementAdd = addPopup.querySelector(".popup__content");
const addPopupSubmit = addPopup.querySelector(".popup__submit");

const elementsTemplate = document.querySelector(".elements__template");
const container = document.querySelector(".elements");
const elementsPhotoGrid = document.querySelector(".elements__photo-grid");
const element = document.querySelector(".element");
const popupInputPlace = document.querySelector(".popup__input_place");
const popupInputLink = document.querySelector(".popup__input_link");

const imagePopup = document.querySelector(".popup_type_image");
const photoPopupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");
const openPopupimage = document.querySelector(".element__image");
const popupCloseImgButton = document.querySelector(".popup__close_position");

const initialCards = [
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

const prependCard = (element) => {
  elementsPhotoGrid.prepend(element);
};

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(
    item,
    ".elements__template_type_default",
    prependCard,
    openPopupImg
  );
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  elementsPhotoGrid.append(cardElement);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", ClosePopupByClickOnEscape);
}

function openPopupImg(name, link) {
  const zoomImg = document.querySelector(".popup__image");
  const zoomImgSubtitle = document.querySelector(".popup__image-title");
  zoomImg.src = link;
  zoomImg.alt = name;
  zoomImgSubtitle.textContent = name;
  openPopup(imagePopup);
}

const copyPopup = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", ClosePopupByClickOnEscape);
};

function SubmitFormEdit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup(editPopup);
}

const addCard = (event) => {
  event.preventDefault();
  const cardData = {
    name: popupInputPlace.value,
    link: popupInputLink.value,
  };
  const card = new Card(
    cardData,
    ".elements__template_type_default",
    prependCard,
    openPopupImg
  );
  const element = card.generateCard();
  elementsPhotoGrid.prepend(element);
  closePopup(addPopup, event);
};

const ClosePopupByClickOnOverlay = (event) => {
  if (event.target !== event.currentTarget || event.key === "Esc") {
    return;
  }
  closePopup(editPopup);
  closePopup(addPopup);
  closePopup(imagePopup);
};

const ClosePopupByClickOnEscape = (event) => {
  if (event.key === "Escape") {
    closePopup(editPopup);
    closePopup(addPopup);
    closePopup(imagePopup);
  }
};

// для валидации
const formSigninValidator = new FormValidator(
  validationConfig.formSelectorEdit,
  validationConfig
);
formSigninValidator.enableValidation();

const formSignupValidator = new FormValidator(
  validationConfig.formSelectorAdd,
  validationConfig
);
formSignupValidator.enableValidation();

popupOpenButton.addEventListener("click", () => {
  openPopup(editPopup);
});
popupOpenAddButton.addEventListener("click", () => {
  openPopup(addPopup);
});
popupOpenButton.addEventListener("click", copyPopup);
popupCloseButton.addEventListener("click", () => {
  closePopup(editPopup);
});
popupCloseAddButton.addEventListener("click", () => {
  closePopup(addPopup);
});
popupCloseImgButton.addEventListener("click", () => {
  closePopup(imagePopup);
});
formElementEdit.addEventListener("submit", SubmitFormEdit);
editPopup.addEventListener("click", ClosePopupByClickOnOverlay);
addPopup.addEventListener("click", ClosePopupByClickOnOverlay);
imagePopup.addEventListener("click", ClosePopupByClickOnOverlay);
addPopupSubmit.addEventListener("click", addCard);





