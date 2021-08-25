/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DataProvider.jsx (c) 2021
Desc: Component qui met a disposition toutes les données des différentes context.
Created:  2021-06-17T07:39:04.515Z
Modified: 2021-08-25T07:42:37.203Z
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
import { ToastContainer } from 'react-toastify';

setUp();
setCookies();

const DataProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [supplierProducts, setSupplierProducts] = useState([]);
    const [user, setUser] = useState({});
    const [supplier, setSupplier] = useState({ value: "", label: "Selectionnez un fournisseur" });
    const [suppliersList, setSuppliersList] = useState([]);
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    const [cart, setCart] = useState(CartApi.cartSetUp());


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
        const c = {...cart};
        c.goods = [];
        c.supplier = supplier.value;
        setCart(c)
        CartApi.localStorageCart(c);
    }, [supplier])

    // useEffect(() => {
    //     // CartApi.localStorageCart(cart);
    // }, [cart])

    useEffect(() => {
        fecthProducts();
        setUser(getUser());
        //console.log(CartApi.cartSetUp());
        setCart(CartApi.cartSetUp());
        CartApi.localStorageCart(CartApi.cartSetUp());
    }, []);

    // useEffect(() => {
    //     CartApi.localStorageCart(cart);
    // }, [cart]);


    useEffect(() => {
        setUser(getUser());
    }, [isAuth])
    return (

        <AuthenticationContext.Provider value={{ isAuth, setIsAuth }}>
            <UserContext.Provider value={{ user, setUser }} >
                <SuppliersListContext.Provider value={{ suppliersList, setSuppliersList }}>
                    <SupplierContext.Provider value={{ supplier, setSupplier }} >
                        <SupplierProducts.Provider value={{ supplierProducts, setSupplierProducts }}>
                            <CartContext.Provider value={{ cart, setCart }}>
                                {children}
                            </CartContext.Provider>
                        </SupplierProducts.Provider>
                    </SupplierContext.Provider>
                </SuppliersListContext.Provider>
            </UserContext.Provider>
            
        </AuthenticationContext.Provider>
    );
}

export default DataProvider;