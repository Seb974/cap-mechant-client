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
import { isDefined, isDefinedAndNotVoid } from '../functions/utils';
import { getStringDate } from "../functions/days";

export function findAll(){
    return axios.get(API_PROVISION).then((response) => response.data["hydra:member"]);
}

function findSuppliersBetween(dates, suppliers, sellers, user) {
    const supplierList = getSuppliersList(suppliers);
    const sellerList = getSellersList(sellers);
    const UTCDates = formatUTC(dates);
    const dateLimits = `provisionDate[after]=${ getStringDate(UTCDates.start) }&provisionDate[before]=${ getStringDate(UTCDates.end) }`;
    return axios
        .get(`/api/provisions?${ supplierList }&${ sellerList }&${ dateLimits }`)
        .then(response => {
            return response.data['hydra:member'].sort((a, b) => (new Date(a.deliveryDate) < new Date(b.deliveryDate)) ? -1 : 1)
        });
}

function findBetween(dates, sellers) {
    const sellerList = getSellersList(sellers);
    const UTCDates = formatUTC(dates);
    const dateLimits = `provisionDate[after]=${ getStringDate(UTCDates.start) }&provisionDate[before]=${ getStringDate(UTCDates.end) }`;
    return axios
        .get(`/api/provisions?${ sellerList }&${ dateLimits }`)
        .then(response => {
            return response.data['hydra:member'].sort((a, b) => (new Date(a.deliveryDate) < new Date(b.deliveryDate)) ? -1 : 1)
        });
}

function findNeedsPerSuppliersBetween(dates, suppliers = null) {
    const status = `status[]=WAITING`;
    const supplierList = isDefined(suppliers) ? "&" + getSuppliersList(suppliers) : "";
    const UTCDates = formatUTC(dates);
    const dateLimits = `provisionDate[after]=${ getStringDate(UTCDates.start) }&provisionDate[before]=${ getStringDate(UTCDates.end) }`;
    return axios
        .get(`/api/provisions?${ status }&${ dateLimits }${ supplierList }`)
        .then(response => {
            return response.data['hydra:member'].sort((a, b) => (new Date(a.deliveryDate) < new Date(b.deliveryDate)) ? -1 : 1)
        });
}


function deleteProvision(id) {
    return axios.delete('/api/provisions/' + id);
}

function find(id) {
    return axios
        .get('/api/provisions/' + id)
        .then(response => response.data);
}

function update(id, provision) {
    return axios.put(API_PROVISION + "/" + id, {...provision});
}

function patch(id, provision) {
    return axios.patch('/api/provisions/' + id, provision);
}

function create(provision) {
    return axios.post('/api/provisions', {...provision});
}

function getSuppliersList(suppliers) {
    let suppliersList = "";
    suppliers.map((s, i) => {
        const separator = i < suppliers.length - 1 ? "&" : "";
        suppliersList += "supplier[]=" + s.value + separator;
    });
    return suppliersList;
}

function getSellersList(sellers) {
    let sellersList = "";
    sellers.map((s, i) => {
        const separator = i < sellers.length - 1 ? "&" : "";
        sellersList += "seller[]=" + s.value + separator;
    });
    return sellersList;
}

function formatUTC(dates) {
    return {
        start: new Date(dates.start.toUTCString()), 
        end: new Date(dates.end.toUTCString())
    };
}

function getEmail(id) {
    return axios.get('/api/provisions/' + id + '/email');
}

export default { 
    findAll,
    findBetween,
    findSuppliersBetween,
    findNeedsPerSuppliersBetween,
    delete: deleteProvision,
    find,
    update,
    patch,
    create,
    getEmail
}