/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Column.jsx (c) 2021
Desc: description
Created:  2021-06-17T09:28:50.159Z
Modified: 2021-07-13T11:24:00.875Z
*/
import React from 'react';

const Column = ({ children, xs = 12, sm = 12, md, lg, xl, xxl, className}) => {

    return (<>
        <div className={` ${xs ? " col-xs-" + xs : ""} ${sm ? " col-sm-" + sm : ""} ${md ? " col-md-" + md : ""}${lg ? " col-lg-" + lg : ""}${xl ? " col-xl-" + xl : ""}${xxl ? " col-xxl-" + xl : ""}
        ${className}`}
        >
            {children}
        </div>
    </>);
}

export default Column;