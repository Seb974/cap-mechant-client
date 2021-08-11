/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DataProvider.jsx (c) 2021
Desc: Component qui met a disposition toutes les données des différentes context.
Created:  2021-06-17T07:39:04.515Z
Modified: 2021-08-10T07:14:48.055Z
*/

import React, { useState, useEffect } from 'react';
import Config from "../configs/ConfigUrl";

import { setUp, isAuthenticated } from '../api/AuthApi';
import CartApi from "../api/CartApi";
import CatalogApi from "../api/CatalogApi";
import ProductApi from '../api/ProductApi';
import { isDefined, isDefinedAndNotVoid } from '../functions/utils';
import ProductContext from '../contexts/ProductContext';
import AuthenticationContext from '../contexts/AuthenticationContext';
import CartContext from '../contexts/CartContext';
import ConfigContext from '../contexts/ConfigContext';
import CatalogContext from '../contexts/CatalogContext';

setUp();

const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    const [url, setUrl] = useState(Config.setUp());
    const [cart, setCart] = useState(CartApi.cartSetUp());
    const [country, setCountry] = useState("RE");
    const [catalogs, setCatalogs] = useState([]);
    const [selectedCatalog, setSelectedCatalog] = useState({});
    const fecthProducts = async () => {
        try {
            const p = await ProductApi.allProducts(url.PRODUCT_URL);
            setProducts(p);
        } catch (error) {

        }
    }

    useEffect(() => {
        CatalogApi.findAll()
            .then(response => setCatalogs(response));
    }, []);

    useEffect(() => {
        if (isDefinedAndNotVoid(catalogs)) {
            const catalog = catalogs.find(catalogOption => catalogOption.code === country);
            const selection = isDefined(catalog) ? catalog : catalogs.filter(country => country.isDefault);
            setSelectedCatalog(selection);
            setCart({...cart, catalog : catalogs[0]["@id"]});
        }
    }, [catalogs, country]);
    useEffect(() => {
        fecthProducts();
    }, []);
    return (

        <ConfigContext.Provider value={{ url, setUrl }}>
            <CatalogContext.Provider value={{ catalogs, setCatalogs}}>
            <AuthenticationContext.Provider value={{ isAuth, setIsAuth }}>
                <ProductContext.Provider value={{ products, setProducts }}>
                    <CartContext.Provider value={{ cart, setCart }}>
                        {children}
                    </CartContext.Provider>
                </ProductContext.Provider>
            </AuthenticationContext.Provider>
            </CatalogContext.Provider>
        </ConfigContext.Provider >
    );
}

export default DataProvider;