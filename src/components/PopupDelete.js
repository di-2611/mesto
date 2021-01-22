import Popup from "./Popup";

export default class PopupDelete extends Popup {
    constructor( {popupSelector} ) {
      super({popupSelector});
      this._confirmButton = popupSelector.querySelector('.popup__submit');
    }
  
    setEventListeners(evt) {
      super.setEventListeners();
      this._confirmButton.addEventListener('click', (evt) => {
        this._handleSubmitCallback(); 
        evt.preventDefault();
      })
     
    }
  
    setSubmitAction(submitAction) {
      this._handleSubmitCallback = submitAction;
    }
  }