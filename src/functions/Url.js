/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Url.js (c) 2021
Desc: description
Created:  2021-07-22T09:33:43.561Z
Modified: 2021-07-22T11:41:29.188Z
*/

function setUp(){

    const API_URL = ( !process.env.NODE_ENV || process.env.NODE_ENV === "development") ? "http://localhost:8000": "https://cap-mechant.re" ;
    
    return ({
        "API_URL" : API_URL,
        "LOGIN_URL" : API_URL + "/login_check",
        "USER_URL" : API_URL + "/users",
        "PRODUCT_URL" : API_URL + "/products",
        "SUPPLIER_URL" : API_URL + "/suppliers",
        "ORDER_URL" : API_URL + "/orders"
    })
}

export default {
    setUp
}