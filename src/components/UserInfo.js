export default class UserInfo {
  constructor(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userJob.textContent = userData.job;
  }
}
