import Popup from "./Popup";

export default class PopupDelete extends Popup {
    constructor( {popupSelector} ) {
      super({popupSelector});
      this._confirmButton = popupSelector.querySelector('.popup__submit');
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._confirmButton.addEventListener('click', () => {
        this._handleSubmitCallback();
      })
    }
  
    setSubmitAction(submitAction) {
      this._handleSubmitCallback = submitAction;
    }
  }