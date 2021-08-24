const ENV = ( !process.env.NODE_ENV || process.env.NODE_ENV === "development") ? "development" : "production" ;
const API_DOMAIN = ENV === "development" ? "http://localhost:8000" : "https://api.cap-mechant.re";
const MERCURE_DOMAIN = ENV === "development" ? "http://localhost:3000" : "https://api.cap-mechant.re:3000";
const CLIENT_DOMAIN = ENV === "development" ? "http://localhost:3001" : "https://cap-mechant.re";

//route api
export const API_PRODUCT = API_DOMAIN + "/api/products";
export const API_LOGIN = API_DOMAIN + "/api/login_check";
export const API_USER = API_DOMAIN + "/api/users";
export const API_CATALOG = API_DOMAIN + "/api/catalogs";
export const API_PROVISION = API_DOMAIN + "/api/provisions";
export const API_SUPPLIER = API_DOMAIN + "/api/suppliers";
// const API_DOMAIN = "https://api.cap-mechant.re";
// const MERCURE_DOMAIN = "https://api.cap-mechant.re:3000";

export default {
    API_DOMAIN,
    MERCURE_DOMAIN,
    CLIENT_DOMAIN,
}