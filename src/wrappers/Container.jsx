/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Container.jsx (c) 2021
Desc: description
Created:  2021-06-17T09:28:19.702Z
Modified: 2021-08-05T10:46:21.977Z
*/
import React from 'react';

const Container = ({ fluid = false, justifyContent = 'center', children, className, row = true }) => {
    return (
        <div className={`${fluid ? "container-fluid" : "container"} ${className}`}>
            {children}
        </div>
    );
}
export default Container;
