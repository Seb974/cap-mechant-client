/*
Author: <Brian NARBE> (bnprorun@gmail.com)
AuthApi.js (c) 2021
Desc: description
Created:  2021-07-22T07:34:29.767Z
Modified: 2021-08-05T09:52:40.553Z
*/
import axios from "axios";
import jwtDecode from "jwt-decode";
import user from "../data/user.json";

export function localAuthenticate(credentials) {
  if(credentials.email === user.email && credentials.password === user.password){
    return true;
  }else{
    return false;
  }
 
}

export function authenticate(url,credentials) {
  return axios
    .post(url, credentials)
    .then((response) => response.data)
    .then((data) => {
      //je stock le token dans localstorage
      window.localStorage.setItem("authToken", data.token);
      //on préviens axios qu'on a un header par défauts pour les futurs requêtes
      setAxiosToken(data.token);
      return true;
    });
}

export function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");
  if (token) {
    const { exp } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
export function setAxiosToken(token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}
export function logOut() {
  window.localStorage.removeItem("authToken");
  delete axios.defaults.headers["Authorization"];
}

export function setUp() {
  const token = window.localStorage.getItem("authToken");

  if (token) {
    const { exp } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      setAxiosToken(token);
    } else {
      logOut();
    }
  } else {
    logOut();
  }
}

export function getUserId() {
  const token = window.localStorage.getItem("authToken");
  // const { identifiant } = jwtDecode(token);
  return jwtDecode(token).identifiant;
}

export function getUsername() {
  const token = window.localStorage.getItem("authToken");
  // const { identifiant } = jwtDecode(token);
  return jwtDecode(token).username;
}

// export default {
//   localAuthenticate,
//   authenticate,
//   logOut,
//   setUp,
//   isAuthenticated,
//   getUserId,
//   getUsername,
// };
