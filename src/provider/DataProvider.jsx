/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DataProvider.jsx (c) 2021
Desc: Component qui met a disposition toutes les données des différentes context.
Created:  2021-06-17T07:39:04.515Z
Modified: 2021-08-24T10:47:46.883Z
*/

import React, { useState, useEffect } from 'react';
import Config from "../configs/ConfigUrl";

//api
import { setUp, isAuthenticated, getUser, setCookies } from '../api/AuthApi';
import CartApi from "../api/CartApi";
import CatalogApi from "../api/CatalogApi";
import ProductApi from '../api/ProductApi';
import SupplierApi from '../api/SupplierApi';

import { isDefined, isDefinedAndNotVoid } from '../functions/utils';
import ProductContext from '../contexts/ProductContext';
import AuthenticationContext from '../contexts/AuthenticationContext';
import CartContext from '../contexts/CartContext';
import ConfigContext from '../contexts/ConfigContext';
import CatalogContext from '../contexts/CatalogContext';
import UserContext from '../contexts/UserContext';

setUp();
setCookies();

const DataProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [supplier, setSupplier] = useState("");
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    const [url, setUrl] = useState(Config.setUp());
    const [cart, setCart] = useState(CartApi.cartSetUp());
    const [country, setCountry] = useState("RE");
    const [catalogs, setCatalogs] = useState([]);
    const [selectedCatalog, setSelectedCatalog] = useState({});
    
    const fetchSupplier = async () => {
        try {
            const result = await SupplierApi.findAll();
        } catch (error) {
            
        }
    }
    const fecthProducts = async () => {
        try {
            const p = await ProductApi.allProducts();
            const supp = []
            setProducts(p);
            // p.map((product) => {
            //     if(product.suppliers && product.suppliers.length > 0){
            //         product.suppliers.map((su) => {
                        
            //             console.log(supp.find(s => s.value != su['@id']));
            //             // if(supp.find(s => s.value === su['@id']) === -1) supp.push({value : su['@id'], label : su.name });
            //             // if(product.suppliers.findIndex(s => s['@id'] === su['@id']) != -1 ) supp.push({ value : s['@id'], label: s.name})
            //         })
            //     }
            // })
            // console.log(supp);
        } catch (error) {
            console.log(error);
        }
    }
    // const fetchSupplierProduct = () => {
    //     const tab = [...products]
    //     const result = tab.filter(product =>
    //         product.suppliers.findIndex(s => s['@id'] === selectedSupplier) != -1
    //     )
    //     setCurrentProducts(result);
    // }

    useEffect(() => {
        
    },[supplier])

    useEffect(() => {
        fecthProducts();
        CatalogApi.findAll()
            .then(response => setCatalogs(response));
    }, []);

    useEffect(() => {
        if (isDefinedAndNotVoid(catalogs)) {
            const catalog = catalogs.find(catalogOption => catalogOption.code === country);
            const selection = isDefined(catalog) ? catalog : catalogs.filter(country => country.isDefault);
            setSelectedCatalog(selection);
        }
    }, [catalogs, country]);

    useEffect(() => {
        if (isAuth && catalogs.length > 0) {
            const cat = catalogs[0]['@id'];
            setCart(CartApi.cartSetUp(cat));
            setUser(getUser());
 
        }
    }, [isAuth])
    return (

        <ConfigContext.Provider value={{ url, setUrl }}>
            <AuthenticationContext.Provider value={{ isAuth, setIsAuth }}>
                <UserContext.Provider value={{ user, setUser }} >
                    <CatalogContext.Provider value={{ catalogs, setCatalogs }}>
                        <ProductContext.Provider value={{ products, setProducts }}>
                            <CartContext.Provider value={{ cart, setCart }}>
                                {children}
                            </CartContext.Provider>
                        </ProductContext.Provider>
                    </CatalogContext.Provider>
                </UserContext.Provider>
            </AuthenticationContext.Provider>
        </ConfigContext.Provider >
    );
}

export default DataProvider;