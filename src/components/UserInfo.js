export default class UserInfo {
  constructor(profileName, profileProfession, profileAvatar) {
    this._profileName = profileName;
    this._profileProfession = profileProfession;
    this._profileAvatar = profileAvatar;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      title: this._profileProfession.textContent,
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._profileName.textContent = name;
    this._profileProfession.textContent = about;
    this._profileAvatar.src = avatar;
  }
}