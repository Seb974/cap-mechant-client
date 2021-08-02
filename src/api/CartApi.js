/*
Author: <Brian NARBE> (bnprorun@gmail.com)
CartApi.js (c) 2021
Desc: description
Created:  2021-08-02T05:57:01.529Z
Modified: 2021-08-02T07:01:04.441Z
*/

function getLocalCart() {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  console.log(cart);
  if (cart === null) {
    return [];
  }else{
    return cart;
  }
}

export default {
  getLocalCart,
};
