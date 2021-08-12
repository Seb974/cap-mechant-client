/*
Author: <Brian NARBE> (bnprorun@gmail.com)
CartApi.js (c) 2021
Desc: description
Created:  2021-08-02T05:57:01.529Z
Modified: 2021-08-10T05:45:03.286Z
*/
import axios from "axios";
import jwtDecode from "jwt-decode";

function getLocalCart() {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  if (cart != null) {
    return cart;
  }else {
    return {
      
    };
  }
}

function cartStructure(data, catalog){
  const newDate = new Date();
  const FormatDate = new Date(newDate.getFullYear(), newDate.getMonth(),newDate.getDate(), 9, 0, 0);
  return {
    name : data.name,
    user: "/api/users/" + data.id,
    email: data.email,
    metas: "/api/metas/" + data.metas.id,
    items: [],
    deliveryDate: FormatDate,
    status : "WAITING",
    catalog : catalog,
    appliedCondition : null
  }
  
}

function cartSetUp(catalog){
  const token = window.localStorage.getItem("authToken");
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  if(token){
    const data = jwtDecode(token);
    return (cart != null) ? cart : cartStructure(data, catalog);
  }else {
    return {};
  }
  
}


function localStorageCart(cart){
  window.localStorage.setItem("cart",JSON.stringify(cart));
}
function cleanLocalCart(){
    const cart  = JSON.parse(window.localStorage.getItem("cart"));
    cart.items = [];
    window.localStorage.setItem("cart",JSON.stringify(cart));
}

function sendOrder(url,data){
  // const ordered = {...data};
  // ordered.items.forEach((item,index) => {
  //   item.product = data.items[index].product['@id'];
  // })
  // console.log(ordered);
  return axios
    .post(url, {...data, items: data.items.map(i => ({...i, product: i.product['@id']}))});
}

export default {
  getLocalCart,
  cleanLocalCart,
  cartSetUp,
  localStorageCart,
  sendOrder
};
