/*
Author: <Brian NARBE> (bnprorun@gmail.com)
CartApi.js (c) 2021
Desc: description
Created:  2021-08-02T05:57:01.529Z
Modified: 2021-08-04T07:09:34.917Z
*/

function getLocalCart() {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  if (cart != null) {
    return cart;
  }else {
    return [];
  }
}

function cleanLocalCart(){
    window.localStorage.setItem("cart",JSON.stringify([]));
}

export default {
  getLocalCart,
  cleanLocalCart
};
