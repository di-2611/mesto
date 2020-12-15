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
} from "../components/Config.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const openPopupImg = (name, link) => {
  const popupPhotoSub = document.querySelector(".popup__image-title");
  const popupPhotoImage = document.querySelector(".popup__image");
  popupPhotoSub.textContent = name;
  popupPhotoImage.alt = name;
  popupPhotoImage.src = link;
  popupImage.open(imagePopup);
};

// Экземпляр класса Section - отрисовка элементов на странице
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        ".elements__template_type_default",
        openPopupImg
      );
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  elementsPhotoGrid
);
cardsList.renderItems();

// Экземпляр класса PopupWithForm - форма добавления новой карточки
const popupPlaceForm = new PopupWithForm({
  popupSelector: addPopup,
  handleFormSubmit: (formData) => {
    const card = new Card(
      formData,
      ".elements__template_type_default",
      openPopupImg
    );
    const element = card.generateCard();
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





