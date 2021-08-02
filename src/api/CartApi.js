/*
Author: <Brian NARBE> (bnprorun@gmail.com)
CartApi.js (c) 2021
Desc: description
Created:  2021-08-02T05:57:01.529Z
Modified: 2021-08-02T09:07:15.156Z
*/

function getLocalCart() {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  if (cart != null) {
    return cart;
  }else {
    return [];
  }
}

export default {
  getLocalCart,
};
