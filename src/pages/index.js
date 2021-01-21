import "./index.css"; // добавьте импорт главного файла стилей
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
  cardsTemplate,
  profileAvatar,
  deletePopup,
  popupProfileName,
  popupJobName,
  popupPlaceName,
  popupPlaceLink,
  avatarPopup,
  avatarLink,
  formAvatar,
  contanerForAvatar,
  avatarPopupCloseButton,
  avatarPopupSubmit,
  editPopupSubmit,
} from "../utills/config.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import PopupDelete from "../components/PopupDelete.js";

let profileId;

function createCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        popupImage.openimage(item.name, item.link);
      },
      handleLikeClick: (cardId, isLiked) => {
        if (isLiked) {
          api
            .deleteLike(cardId)
            .then((res) => {
              card.setLikes(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .putLike(cardId)
            .then((res) => {
              card.setLikes(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
      handleDeleteClick: (cardId) => {
        popupDeleteForm.setSubmitAction(() => {
          api
            .deleteCard(cardId)
            .then(() => {
              card.deleteCard();
              popupDeleteForm.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
        popupDeleteForm.open();
      },
    },
    cardsTemplate,
    profileId
  );
  return card.generateCard();
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((values) => {
    profileId = values[0]._id;
    user.setUserInfo(values[0]);
    cardsList.renderer(values[1]);
  })
  .catch((err) => {
    console.log(err);
  });

// Экземпляр класса Section - отрисовка элементов на странице
const cardsList = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsList.addItemStart(cardElement);
    },
  },
  elementsPhotoGrid
);

const popupPlaceForm = new PopupWithForm({
  popupSelector: addPopup,
  handleFormSubmit: () => {
    popupPlaceForm.renderLoading(true);
    api
      .addNewCard(popupPlaceName.value, popupPlaceLink.value)
      .then((res) => {
        const element = createCard(res);
        cardsList.addItem(element);
        popupPlaceForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupPlaceForm.renderLoading(false);
      });
  },
});
popupPlaceForm.setEventListeners();

// Экземпляр класса PopupWithForm - форма редактирования профиля
const popupProfileForm = new PopupWithForm({
  popupSelector: editPopup,
  handleFormSubmit: () => {
    popupProfileForm.renderLoading(true);
    api
      .editUserInfo(popupProfileName.value, popupJobName.value)
      .then((res) => {
        user.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfileForm.renderLoading(false);
      });
  },
});
popupProfileForm.setEventListeners();

// Экземпляр класса PopupWithImage
const popupImage = new PopupWithImage({ popupSelector: imagePopup });
popupImage.setEventListeners();

const popupDeleteForm = new PopupDelete({ popupSelector: deletePopup });
popupDeleteForm.setEventListeners();

const popupAvatarForm = new PopupWithForm({
  popupSelector: avatarPopup,
  handleFormSubmit: () => {
    popupAvatarForm.renderLoading(true);
    api
      .editAvatar(avatarLink.value)
      .then((res) => {
        user.setUserInfo(res);
        popupAvatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatarForm.renderLoading(false);
      });
    popupAvatarForm.open();
  },
});
popupAvatarForm.setEventListeners();

const user = new UserInfo(profileName, profileProfession, profileAvatar);

// для валидации
const formPlaceValidator = new FormValidator(validationConfig, formPlace);
const formProfileValidator = new FormValidator(validationConfig, formProfile);
const formAvatarValidator = new FormValidator(validationConfig, formAvatar);
formAvatarValidator.enableValidation();
formPlaceValidator.enableValidation();
formProfileValidator.enableValidation();

popupOpenButton.addEventListener("click", () => {
  user.getUserInfo();
  editPopupSubmit.classList.add(validationConfig.inactiveButtonClass);
  editPopupSubmit.setAttribute("disabled", true);
  popupProfileForm.open(editPopup);
  formProfileValidator.hideFormErrors();
});

popupOpenAddButton.addEventListener("click", () => {
  addPopupSubmit.classList.add(validationConfig.inactiveButtonClass);
  addPopupSubmit.setAttribute("disabled", true);
  popupPlaceForm.open(addPopup);
  formPlaceValidator.hideFormErrors();
  formProfile.reset();
});

contanerForAvatar.addEventListener("click", () => {
  avatarPopupSubmit.classList.add(validationConfig.inactiveButtonClass);
  avatarPopupSubmit.setAttribute("disabled", true);
  popupAvatarForm.open();
  formAvatarValidator.hideFormErrors();
  formPlace.reset();
});

avatarPopupCloseButton.addEventListener("click", () => popupAvatarForm.close());










