let popup = document.querySelector('.popup')
let popupOpenButton = document.querySelector('.profile__edit-button')
let popupCloseButton = document.querySelector('.popup__close')
let popupSubmit = document.querySelector('.popup__submit')

let formElement = document.querySelector('.popup__content') 
let profileName = document.querySelector('.profile__name') 
let profileProfession = document.querySelector('.profile__profession') 

let popupOpen = function () {
    popup.classList.add('popup_opened');

    let nameInput = document.querySelector('.popup__name');
    let jobInput = document.querySelector('.popup__profession');

    nameInput.value =profileName.textContent;
    jobInput.value = profileProfession.textContent;
} 
popupOpenButton.addEventListener('click', popupOpen)


let popupClose = function () {
    popup.classList.remove('popup_opened');
} 
popupCloseButton.addEventListener('click', popupClose)


function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__name');
    let jobInput = document.querySelector('.popup__profession');

    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);
popupSubmit.addEventListener('click', popupClose)

