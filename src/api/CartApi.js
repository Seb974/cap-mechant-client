/*
Author: <Brian NARBE> (bnprorun@gmail.com)
CartApi.js (c) 2021
Desc: description
Created:  2021-08-02T05:57:01.529Z
Modified: 2021-08-25T07:19:50.575Z
*/
import { API_PROVISION } from "../configs/ApiConfig";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { getDateFrom, isDefined } from "../functions/utils";

function getLocalCart() {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  if (cart != null) {
    return cart;
  }else {
    return {
      
    };
  }
}

function cartStructure(){
  const newDate = new Date();
  const formatDate = new Date(newDate.getFullYear(), newDate.getMonth(),newDate.getDate(), 9, 0, 0) ;
  return {
    name : "",
    user:"",
    email: "",
    metas: "",
    goods: [],
    provisionDate: getDateFrom(formatDate,1),
    status : "WAITING",
    supplier :""
  }
  // localStorageCart(cart);
}

function cartSetUp(){
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  // console.log(cart);
  return (isDefined(cart)) ? cart : cartStructure();
}


function localStorageCart(cart){
  window.localStorage.setItem("cart",JSON.stringify(cart));
}
function cleanLocalCart(){
    const cart  = JSON.parse(window.localStorage.getItem("cart"));
    cart.goods = [];
    window.localStorage.setItem("cart",JSON.stringify(cart));
}
function resetCart(){
    return cartStructure();
}

function sendOrder(data){
  return axios
    .post(API_PROVISION, {...data, goods: data.goods.map(i => ({...i, product: i.product['@id']}))});
}

export default {
  getLocalCart,
  cleanLocalCart,
  cartSetUp,
  localStorageCart,
  sendOrder,
  resetCart
};
