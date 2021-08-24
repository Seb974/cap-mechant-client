/*
Author: <Brian NARBE> (bnprorun@gmail.com)
OrderApi.js (c) 2021
Desc: description
Created:  2021-08-18T12:05:46.765Z
Modified: 2021-08-24T14:40:53.014Z
*/

import { API_PROVISION } from "../configs/ApiConfig";
import axios from "axios";
import jwtDecode from "jwt-decode";

export function findAll(){
    return axios.get(API_PROVISION).then((response) => response.data["hydra:member"]);
}

export function update(id, provision) {
    return axios.put(API_PROVISION + '/' + id, {...provision});
}