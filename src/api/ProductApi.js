/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductApi.js (c) 2021
Desc: description
Created:  2021-08-04T11:33:47.927Z
Modified: 2021-08-04T12:07:47.433Z
*/

import axios from "axios";

function allProducts(url) {
  return axios.get(url).then((response) => response.data["hydra:member"]);
}


export default {
    allProducts
}