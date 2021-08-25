/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Orders.jsx (c) 2021
Desc: page listing de mes orders
Created:  2021-08-18T12:00:09.152Z
Modified: 2021-08-25T07:58:56.461Z
*/
import React from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import Button from '../components/fields/Button';
import ListProvisions from '../components/orders/ListProvisions';

const Orders = ({ props }) => {
    return (<>
        <div className="h-100">
            <div className="d-flex justify-content-start mt-3">
                <Button variant="danger" >
                    <NavLink to="/" className="text-white text-decoration-none"><TiArrowBack className="mb-1" size={20} /> Retour au catalogue produit</NavLink>
                </Button>

            </div>
            <ListProvisions />
        </div>

    </>);
}

export default Orders;
