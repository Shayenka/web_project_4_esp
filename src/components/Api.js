import {
  inputName,
  inputAbout,
  inputTitle,
  inputLink,
  buttonSubmitProfile,
  buttonAddCard,
} from "./constants.js";

class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editProfileInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  addcard(title, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: link,
      }),
    }).then(this._checkResponse);
  }
  // Otros métodos para trabajar con la API
}

//Petición al servidor
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-05",
  headers: {
    authorization: "3270d03d-8b4c-49a2-869b-f096d27af6a5",
    "Content-Type": "application/json",
  },
});

//Cargar la información del usuario
api
  .getUserInfo()
  .then((userInfo) => {
    console.log(userInfo);
  })
  .catch((err) => {
    console.log(`Error al obtener la información del usuario: ${err}`);
  });

//Cargar las tarjetas
api
  .getInitialCards()
  .then((cardsInfo) => {
    console.log(cardsInfo);
  })
  .catch((err) => {
    console.log(`Error al obtener la información de las tarjetas: ${err}`);
  });

//Editar el perfil
buttonSubmitProfile.addEventListener("click", () => {
  api
    .editProfileInfo(inputName.value, inputAbout.value)
    .then((userInfo) => {
      console.log(`Actualización exitosa del perfil: ${userInfo}`);
    })
    .catch((err) => {
      console.log(`Error al actualizar los datos del perfil: ${err}`);
    });
});

//Añadir una nueva tarjeta
buttonAddCard.addEventListener("click", () => {
  api
    .addcard(inputTitle.value, inputLink.value)
    .then((userInfo) => {
      console.log(`Nueva tarjeta añadida con éxito: ${userInfo}`);
    })
    .catch((err) => {
      console.log(`Error al añadir nueva tarjeta: ${err}`);
    });
});
