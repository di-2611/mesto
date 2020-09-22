const popup = document.querySelector('.popup');

const editPopup = document.querySelector('.popup_type_edit');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = editPopup.querySelector('.popup__close');
const formElementEdit = editPopup.querySelector('.popup__content');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession'); 
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_profession');

const addPopup = document.querySelector('.popup_type_add');
const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseAddButton = addPopup.querySelector('.popup__close');
const formElementAdd = addPopup.querySelector('.popup__content');

const elementsTemplate = document.querySelector('.elements__template');
const elements = document.querySelector('.elements');
const elementsPhotoGrid = document.querySelector('.elements__photo-grid');
const element = document.querySelector('.element');
const popupInputPlace = document.querySelector('.popup__input_place');
const popupInputLink = document.querySelector('.popup__input_link');

const imagePopup = document.querySelector('.popup_type_image');
const photoPopupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');
const openPopupimage = document.querySelector('.element__image');
const popupCloseImgButton = document.querySelector('.popup__close_position');



const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function openPopup (popup) {
    popup.classList.add('popup_opened');
}

const copyPopup = function () {
    nameInput.value =profileName.textContent;
    jobInput.value = profileProfession.textContent;
};

const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
};

function formSubmitEdit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;

    closePopup(editPopup);
}

const formSubmitAdd = (event) => {
    event.preventDefault();
    addCard(popupInputPlace.value, popupInputLink.value);
    closePopup(addPopup, event);
}

const createCard = (name, link) => {
    const cardname = elementsTemplate.content.cloneNode(true);
    cardname.querySelector('.element__subtitle').innerText = name;
    cardname.querySelector('.element__image').alt = name;
    cardname.querySelector('.element__image').src = link;

    return cardname;

}

const render = () => {
    initialCards.forEach(({name, link}) => {
    const cardname = createCard(name, link);
    elementsPhotoGrid.appendChild(cardname);
    })

};
render();

const addCard = (name, link) => {
    const cardname = createCard(name, link);
    elementsPhotoGrid.prepend(cardname); 
    addListeners();
}

const likeTask = function (event) {
    const likeButton = event.target.closest('.element__group');
    likeButton.classList.toggle('element__group_like');
};

const removeTask = (event) => {
    event.preventDefault();
    event.target.parentElement.remove();
}

const openImagePopup = (event) => {
    const photo = event.target.closest('.element__image');
    photoPopupImage.src = photo.src;
    popupTitle.textContent = photo.alt;
    openPopup(imagePopup);
}

const addListeners = () => {
    const buttons = document.querySelectorAll('.element__delete');
    buttons.forEach(button => button.addEventListener('click', removeTask));

    const deletions = document.querySelectorAll('.element__image');
    deletions.forEach(item => item.addEventListener('click', openImagePopup));

    const likies = document.querySelectorAll('.element__group');
    likies.forEach(like => like.addEventListener('click', likeTask));
}


popupOpenButton.addEventListener('click', () => {openPopup(editPopup)});
popupOpenAddButton.addEventListener('click', () => {openPopup(addPopup)});
popupOpenButton.addEventListener('click', copyPopup);
popupCloseButton.addEventListener('click', () => {closePopup(editPopup)});
popupCloseAddButton.addEventListener('click', () => {closePopup(addPopup)});
popupCloseImgButton.addEventListener('click', () => {closePopup(imagePopup)});
formElementEdit.addEventListener('submit', formSubmitEdit);
formElementAdd.addEventListener('submit', formSubmitAdd);

addListeners();

















