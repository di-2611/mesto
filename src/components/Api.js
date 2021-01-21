import { url, token } from "../utills/config.js";

class Api {
  constructor({ baseUrl, headers }) {
    this.url = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  editUserInfo(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  addNewCard(name, link) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  putLike(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  deleteLike(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  editAvatar(link) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }
}

export const api = new Api({
  baseUrl: url,
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});


  



  

  
  
