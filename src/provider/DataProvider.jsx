/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DataProvider.jsx (c) 2021
Desc: Component qui met a disposition toutes les données des différentes context.
Created:  2021-06-17T07:39:04.515Z
Modified: 2021-08-02T06:01:27.716Z
*/

import React, { useState } from 'react';
import AuthApi from '../api/AuthApi';
import Config from "../configs/ConfigUrl";
import AuthenticationContext from '../contexts/AuthenticationContext';
import CartContext from '../contexts/CartContext';
import ConfigContext from '../contexts/ConfigContext';
import CartApi from "../api/CartApi";


AuthApi.setUp();


const DataProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(AuthApi.isAuthenticated());
    const [url, setUrl] = useState(Config.setUp());
    const [cart, setCart] = useState(CartApi.getLocalCart());
    return (
        <ConfigContext.Provider value={{ url, setUrl }}>
            <AuthenticationContext.Provider value={{ isAuth, setIsAuth }}>
                <CartContext.Provider value={{ cart, setCart }}>
                    {children}
                </CartContext.Provider>
            </AuthenticationContext.Provider>
        </ConfigContext.Provider>
    );
}

export default DataProvider;