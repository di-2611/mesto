import './index.css'; // добавьте импорт главного файла стилей 
import {
  validationConfig,
  editPopup,
  popupOpenButton,
  profileName,
  profileProfession,
  addPopup,
  popupOpenAddButton,
  addPopupSubmit,
  elementsPhotoGrid,
  imagePopup,
  formPlace,
  formProfile,
  initialCards,
  cardsTemplate,
} from "../utills/config.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: (name, link) => {
      popupImage.openimage(name, link)
    },
  },
  cardsTemplate);
  return card.generateCard();
}

// Экземпляр класса Section - отрисовка элементов на странице

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item)
      cardsList.addItem(cardElement);
    },
  },
  elementsPhotoGrid
);
cardsList.renderItems();

const popupPlaceForm = new PopupWithForm({
  popupSelector: addPopup,
  handleFormSubmit: (formData) => {
    const element = createCard(formData);
    cardsList.addItem(element);
  },
});
popupPlaceForm.setEventListeners();

// Экземпляр класса PopupWithForm - форма редактирования профиля
const popupProfileForm = new PopupWithForm({
  popupSelector: editPopup,
  handleFormSubmit: () => {
    user.setUserInfo();
  },
});
popupProfileForm.setEventListeners();

// Экземпляр класса PopupWithImage
const popupImage = new PopupWithImage({ popupSelector: imagePopup });
popupImage.setEventListeners();

//Экземпляр класса UserInfo - отвечает за управление отображением информации о пользователе на странице.
const user = new UserInfo({
  name: profileName,
  job: profileProfession,
});

// для валидации
const formPlaceValidator = new FormValidator(validationConfig, formPlace);
const formProfileValidator = new FormValidator(validationConfig, formProfile);
formPlaceValidator.enableValidation();
formProfileValidator.enableValidation();

popupOpenButton.addEventListener("click", () => {
  user.getUserInfo();
  popupProfileForm.open(editPopup);
  formProfileValidator.hideFormErrors();
});

popupOpenAddButton.addEventListener("click", () => {
  addPopupSubmit.classList.add(validationConfig.inactiveButtonClass);
  addPopupSubmit.setAttribute("disabled", true);
  popupPlaceForm.open(addPopup);
  formPlaceValidator.hideFormErrors();
});








