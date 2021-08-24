/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductApi.js (c) 2021
Desc: description
Created:  2021-08-04T11:33:47.927Z
Modified: 2021-08-24T14:40:31.320Z
*/
import {API_PRODUCT} from "../configs/ApiConfig";
import axios from "axios";


function allProducts() {
  return axios.get(API_PRODUCT).then((response) => response.data["hydra:member"]);
}


export default {
    allProducts
}