/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Row.jsx (c) 2021
Desc: affiche d'une ligne
Created:  2021-08-05T10:18:13.335Z
Modified: 2021-08-05T10:20:52.470Z
*/

import React from 'react';

const Row = ({justifyContent="center", className, children}) => {
    return ( <>
        <div className={`row ${"justify-content-"+justifyContent} ${className}`}>
            {children}
        </div>
    </> );
}
 
export default Row;