/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ListOrders.jsx (c) 2021
Desc: component list orders
Created:  2021-08-18T12:04:46.143Z
Modified: 2021-08-20T13:16:55.422Z
*/

import React, { useEffect, useState } from 'react';
import { findAll }  from '../../api/OrderApi';
import Accordion from '../bootstrap/Accordion';


const ListOrders = (props) => {
    const [orders, setOrders] = useState({});
    const fetchOrders = async () => {
        try {
            const data = await findAll();
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchOrders();
    },[]);
    return ( <>
        <Accordion  table={orders} />
    </> );
}
 
export default ListOrders;