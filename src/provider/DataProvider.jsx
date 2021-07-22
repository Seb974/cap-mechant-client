/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DataProvider.jsx (c) 2021
Desc: Component qui met a disposition toutes les données des différentes context.
Created:  2021-06-17T07:39:04.515Z
Modified: 2021-07-22T12:20:11.790Z
*/

import React, { useState } from 'react';
import AuthApi from '../api/AuthApi';
import Config from "../configs/ConfigUrl";
import AuthenticationContext from '../contexts/AuthenticationContext';
import ConfigContext from '../contexts/ConfigContext';


AuthApi.setUp();


const DataProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(AuthApi.isAuthenticated());
    const [url, setUrl] = useState(Config.setUp());
    return (
        <ConfigContext.Provider value={{ url, setUrl }}>
            <AuthenticationContext.Provider value={{ isAuth, setIsAuth }}>
                {children}
            </AuthenticationContext.Provider>
        </ConfigContext.Provider>
    );
}

export default DataProvider;