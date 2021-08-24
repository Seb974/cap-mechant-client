/*
Author: <Brian NARBE> (bnprorun@gmail.com)
OrderApi.js (c) 2021
Desc: description
Created:  2021-08-18T12:05:46.765Z
Modified: 2021-08-18T14:01:13.234Z
*/

import { API_ORDER } from "../configs/ApiConfig";
import axios from "axios";
import jwtDecode from "jwt-decode";

export function findAll(){
    return axios.get(API_ORDER).then((response) => response.data["hydra:member"]);
}