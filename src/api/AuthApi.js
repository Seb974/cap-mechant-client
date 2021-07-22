/*
Author: <Brian NARBE> (bnprorun@gmail.com)
AuthApi.js (c) 2021
Desc: description
Created:  2021-07-22T07:34:29.767Z
Modified: 2021-07-22T13:09:11.188Z
*/
import axios from "axios";
import jwtDecode from "jwt-decode";
import user from "../data/user.json";

function localAuthenticate(credentials) {
  if(credentials.email === user.email && credentials.password == user.password){
    return true;
  }else{
    return false;
  }
 
}

function authenticate(url,credentials) {
  console.log(url);
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

function isAuthenticated() {
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
function setAxiosToken(token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}
function logOut() {
  window.localStorage.removeItem("authToken");
  delete axios.defaults.headers["Authorization"];
}

function setUp() {
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

function getUserId() {
  const token = window.localStorage.getItem("authToken");
  // const { identifiant } = jwtDecode(token);
  return jwtDecode(token).identifiant;
}
function getUsername() {
  const token = window.localStorage.getItem("authToken");
  // const { identifiant } = jwtDecode(token);
  return jwtDecode(token).username;
}

export default {
  localAuthenticate,
  authenticate,
  logOut,
  setUp,
  isAuthenticated,
  getUserId,
  getUsername,
};
