/*
Author: <Brian NARBE> (bnprorun@gmail.com)
AuthApi.js (c) 2021
Desc: description
Created:  2021-07-22T07:34:29.767Z
Modified: 2021-08-20T08:07:48.053Z
*/
import  { API_LOGIN } from "../configs/ApiConfig";
import axios from "axios";
import jwtDecode from "jwt-decode";



export function authenticate(credentials) {
  return axios
    .post(API_LOGIN, credentials)
    .then((response) => response.data)
    .then((data) => {
      //je stock le token dans localstorage
      window.localStorage.setItem("authToken", data.token);
      //on préviens axios qu'on a un header par défauts pour les futurs requêtes
      //setAxiosToken(data.token);
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
export function setCookies() {
  axios.defaults.withCredentials = true;
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
      // setAxiosToken(token);
    } else {
      logOut();
    }
  } else {
    logOut();
  }
}

export function getUser() {
  const token = window.localStorage.getItem("authToken");
  if(token){  
    return jwtDecode(token);
  }else{
    logOut();
  }
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
