/*
Author: <Brian NARBE> (bnprorun@gmail.com)
TrTd.jsx (c) 2021
Desc: tr, td d'une table
Created:  2021-08-20T11:35:54.423Z
Modified: 2021-08-24T14:40:58.080Z
*/

import React from 'react';

const TrTd = ({ data }) => {
    return (<>
        <tr>
            {(data && data.length > 0) &&
                data.map((value, index) => {
                    return <td scope="row" className="" key={index}>{value}</td>
                })
            }
        </tr>
    </>);
}

export default TrTd;