/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DataProvider.jsx (c) 2021
Desc: Component qui met a disposition toutes les données des différentes context.
Created:  2021-06-17T07:39:04.515Z
Modified: 2021-08-25T08:23:11.091Z
*/

import React, { useState, useEffect } from 'react';
import Config from "../configs/ConfigUrl";

//api
import { setUp, isAuthenticated, getUser, setCookies } from '../api/AuthApi';
import CartApi from "../api/CartApi";
import CatalogApi from "../api/CatalogApi";
import ProductApi from '../api/ProductApi';
import SupplierApi from '../api/SupplierApi';
import SellerApi from '../api/SellerApi';

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
import CategoryContext from '../contexts/CategoryContext';
import SellerContext from '../contexts/SellerContext';

setUp();
setCookies();

const DataProvider = ({ children }) => {

    const [seller , setSeller] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({ value: "", label: "Tous" });
    const [supplierProducts, setSupplierProducts] = useState([]);
    const [user, setUser] = useState({});
    const [supplier, setSupplier] = useState({ value: "", label: "Selectionnez un fournisseur", isIntern : false });
    const [suppliersList, setSuppliersList] = useState([]);
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    const [cart, setCart] = useState(CartApi.cartSetUp());


    const findSupplierProducts = (data) => {
        const result = data.filter(product =>
            (isDefinedAndNotVoid(product.suppliers) && product.suppliers.findIndex(s => s['@id'] === supplier.value) != -1)
        )
        editCategoriesList(result);
        setSupplierProducts(result);
    }
    const editCategoriesList = (productsList) => {
        const cats = [];
        if (isDefinedAndNotVoid(productsList)) {
            productsList.map((p, index) => {
                if (cats.findIndex(s => s.label === p.categories) == -1) cats.push({ label: p.categories, value: index });
            })
            setCategories(cats);
        }
    }
    const sortCategories = (c) => {
        if (isDefinedAndNotVoid(c)) {
            return c.sort((a, b) => {
                return (a < b) ? -1 : 1;
            })
        } else return [];

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
                    if (isDefinedAndNotVoid(product.suppliers)) {
                        product.suppliers.map((su) => {
                            if (supp && supp.length === 0) {
                                return supp.push({ value: su['@id'], label: su.name, isIntern : su.isIntern });
                            } else {
                                const check = supp.findIndex((item) => item.value === su['@id']);
                                return (check === -1) ? supp.push({ value: su['@id'], label: su.name, isIntern : su.isIntern }) : 0
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
        const c = { ...cart };
        c.goods = [];
        c.supplier = supplier.value;
        setCategory({value : "", label : "Tous"});
        setCart(c)
        CartApi.localStorageCart(c);
    }, [supplier])

    useEffect(() => {
        if (isAuth) {
            fecthProducts();
            setUser(getUser());
            setCart(CartApi.cartSetUp());
            CartApi.localStorageCart(CartApi.cartSetUp());
            if (supplier.value != "") findSupplierProducts(products);
            SellerApi
                .findAll()
                .then(response => setSeller(response[0]));
        }
    }, []);

    useEffect(() => {
        if (isAuth) {
            fecthProducts();
            setUser(getUser());
            setCart(CartApi.cartSetUp());
            CartApi.localStorageCart(CartApi.cartSetUp());
        }
        if(!isAuth){
            setSupplierProducts([]);
            setProducts([]);
            setSuppliersList([]);
            setSupplier({ value: "", label: "Selectionnez un fournisseur", isIntern : false });
            setCategory({ value: "", label: "Tous" });
        }
    }, [isAuth])
    // console.log(suppliersList);
    return (

        <AuthenticationContext.Provider value={{ isAuth, setIsAuth }}>
            <UserContext.Provider value={{ user, setUser }} >
                <SellerContext.Provider value={{seller, setSeller}} >
                <SuppliersListContext.Provider value={{ suppliersList, setSuppliersList }}>
                    <SupplierContext.Provider value={{ supplier, setSupplier }} >
                        <SupplierProducts.Provider value={{ supplierProducts, setSupplierProducts }}>
                            <CategoryContext.Provider value={{categories, setCategories, category, setCategory }}>
                                <CartContext.Provider value={{ cart, setCart }}>
                                    {children}
                                </CartContext.Provider>
                            </CategoryContext.Provider>
                        </SupplierProducts.Provider>
                    </SupplierContext.Provider>
                </SuppliersListContext.Provider>
                </SellerContext.Provider>
            </UserContext.Provider>
        </AuthenticationContext.Provider>
    );
}

export default DataProvider;