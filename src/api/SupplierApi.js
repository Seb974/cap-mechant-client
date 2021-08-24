/*
Author: <Brian NARBE> (bnprorun@gmail.com)
SupplierApi.js (c) 2021
Desc: api suppliers
Created:  2021-08-24T05:02:45.156Z
Modified: 2021-08-24T06:03:31.688Z
*/
import  { API_SUPPLIER } from "../configs/ApiConfig";
import axios from "axios";


function findAll(){
    return axios.get(API_SUPPLIER).then((response) => response.data["hydra:member"]);
}

export default {
    findAll
}
