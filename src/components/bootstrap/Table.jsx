/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Table.jsx (c) 2021
Desc: table
Created:  2021-08-20T11:20:38.506Z
Modified: 2021-08-20T11:45:11.113Z
*/

import React from 'react';

const Table = ({ header, children, variant=""}) => {
    return (<>
        <table className={`table  table-striped ${variant ? "table-"+ variant : ""}`}>
            <thead>
                <tr>
                    {(header && header.length > 0) &&
                        header.map((title, index) => {
                            return <th scope="col" className="" key={index}>{title}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>


    </>);
}

export default Table;