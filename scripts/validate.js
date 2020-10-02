
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');
};

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(formElement, inputElement, errorMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
}

const toggleButtonState = (inputList, buttonElement) => {
    const hasinValidInput = inputList.some(
        (inputElement) => !inputElement.validity.valid
    );
        if (hasinValidInput) {
            buttonElement.classList.add('popup__submit_inactive');
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove('popup__submit_inactive');
            buttonElement.removeAttribute('disabled');
        }

    
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit')
    
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });

    toggleButtonState(inputList, buttonElement);

};


const enableValidation = ({formSelector}) =>{

    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach(formElement => { 
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setEventListeners(formElement);
        });
};

enableValidation({
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: '.popup__submit_inactive',
    inputErrorClass: '.popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }); 
  