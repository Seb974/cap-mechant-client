/*
Author: <Brian NARBE> (bnprorun@gmail.com)
AuthenticationContext.jsx (c) 2021
Desc: description
Created:  2021-07-22T07:48:56.579Z
Modified: 2021-07-22T07:49:47.164Z
*/
import React from 'react';

export default React.createContext({
    isAuth: false,
    setIsAuth: value => {}
})
