const showInputError = (
    formElement,
    inputElement,
    errorMessage,
    validationConfig
  ) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  
    errorElement.textContent = "";
    errorElement.classList.remove(validationConfig.errorClass);
  };
  
  const checkInputValidity = (formElement, inputElement, validationConfig) => {
    const isInputNotValid = !inputElement.validity.valid;
  
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
  
      showInputError(formElement, inputElement, errorMessage, validationConfig);
    } else {
      hideInputError(formElement, inputElement, validationConfig);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  };
  const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(formElement, inputElement, validationConfig);
        toggleButtonState(inputList, buttonElement, validationConfig);
      });
    });
  
    toggleButtonState(inputList, buttonElement, validationConfig);
  };
  
  const enableValidation = (validationConfig) => {
    const formList = Array.from(
      document.querySelectorAll(validationConfig.formSelector)
    );
  
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (event) => {
        event.preventDefault();
      });
  
      setEventListeners(formElement, validationConfig);
    });
  };
  
  const validationConfig = {
    formSelector: ".popup__content",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_inactive",
    inputErrorClass: ".popup__input_type_error",
    errorClass: "popup__input-error_active",
  };
  
  enableValidation(validationConfig);