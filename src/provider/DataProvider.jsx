/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DataProvider.jsx (c) 2021
Desc: Component qui met a disposition toutes les données des différentes context.
Created:  2021-06-17T07:39:04.515Z
Modified: 2021-08-24T14:06:24.675Z
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
import SuppliersListContext from '../contexts/SuppliersListContext';
import SupplierContext from '../contexts/SupplierContext';
import SupplierProducts from '../contexts/SupplierProductsContext'

setUp();
setCookies();

const DataProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [supplierProducts, setSupplierProducts] = useState([]);
    const [user, setUser] = useState({});
    const [supplier, setSupplier] = useState({ value: "", label: "Selectionnez un fournisseur" });
    const [suppliersList, setSuppliersList] = useState([]);
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    const [url, setUrl] = useState(Config.setUp());
    const [cart, setCart] = useState(CartApi.cartSetUp());
    const [country, setCountry] = useState("RE");
    const [catalogs, setCatalogs] = useState([]);
    const [selectedCatalog, setSelectedCatalog] = useState({});

    const findSupplierProducts = (data) => {
        const result = data.filter(product =>
            (isDefinedAndNotVoid(product.suppliers) && product.suppliers.findIndex(s => s['@id'] === supplier.value) != -1)
        )
        setSupplierProducts(result);
    }

    const sortSupplier = (p) => {
        if (p && p.length > 0) {
            return p.sort((a, b) => {
                return (a.label < b.label) ? -1 : 1;
            })
        } else return [];
    }
    const fecthProducts = () => {
        try {
            const supp = [...suppliersList];
            ProductApi.allProducts().then(response => {
                response.map((product) => {
                    // console.log(product);
                    if (isDefinedAndNotVoid(product.suppliers)) {
                        product.suppliers.map((su) => {
                            // console.log(su);
                            if (supp && supp.length === 0) {
                                return supp.push({ value: su['@id'], label: su.name });
                            } else {
                                const check = supp.findIndex((item) => item.value === su['@id']);
                                return (check === -1) ? supp.push({ value: su['@id'], label: su.name }) : 0
                            }
                        })

                    }
                });
                setSuppliersList(supp);
                (supplier.value != "") ? setSupplierProducts(response) : setSupplierProducts([]);
                setProducts(response);
            })



            setSuppliersList(sortSupplier(supp));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        findSupplierProducts(products);
    }, [supplier])

    useEffect(() => {
        fecthProducts();
        CatalogApi.findAll()
            .then(response => setCatalogs(response));
        setUser(getUser());
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
        }
    }, [isAuth])
    return (

        <ConfigContext.Provider value={{ url, setUrl }}>
            <AuthenticationContext.Provider value={{ isAuth, setIsAuth }}>
                <UserContext.Provider value={{ user, setUser }} >
                    <CatalogContext.Provider value={{ catalogs, setCatalogs }}>
                        <SuppliersListContext.Provider value={{ suppliersList, setSuppliersList }}>
                            <SupplierContext.Provider value={{ supplier, setSupplier }} >
                                <SupplierProducts.Provider value={{ supplierProducts, setSupplierProducts }}>
                                    <CartContext.Provider value={{ cart, setCart }}>
                                        {children}
                                    </CartContext.Provider>
                                </SupplierProducts.Provider>
                            </SupplierContext.Provider>
                        </SuppliersListContext.Provider>
                    </CatalogContext.Provider>
                </UserContext.Provider>
            </AuthenticationContext.Provider>
        </ConfigContext.Provider >
    );
}

export default DataProvider;