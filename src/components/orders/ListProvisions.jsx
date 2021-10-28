/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ListOrders.jsx (c) 2021
Desc: component list orders
Created:  2021-08-18T12:04:46.143Z
Modified: 2021-08-24T14:40:56.067Z
*/

import React, { useEffect, useState } from 'react';
import { findAll } from '../../api/ProvisionApi';
import { isDefinedAndNotVoid } from '../../functions/utils';
import Accordion from '../bootstrap/Accordion';


const ListProvisions = (props) => {

    const [provisions, setProvisions] = useState([]);

    const fetchProvisions = async () => {
        try {
            const data = await findAll();
            // console.log(data);
            setProvisions(data.sort((a, b) => (new Date(a.provisionDate) < new Date(b.provisionDate)) ? 1 : -1));
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchProvisions();
    },[]);

    return <Accordion provisions={ provisions} setProvisions={ setProvisions } />;
}
 
export default ListProvisions;