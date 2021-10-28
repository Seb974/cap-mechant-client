/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Cart.jsx (c) 2021
Desc: description
Created:  2021-08-05T09:58:02.735Z
Modified: 2021-08-25T07:00:12.431Z
*/
import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartOrder from '../components/cart/cartOrder';
import Column from '../wrappers/Column';
import { TiArrowBack } from "react-icons/ti";
import Button from "../components/fields/Button";

const Cart = ({ history }) => {
    return (<>
        <div className="h-100">
            <div className="d-flex justify-content-start mt-3">
                <Button variant="danger" >
                    <NavLink to="/" className="text-white text-decoration-none"><TiArrowBack className="mb-1" size={20} /> Retour au catalogue produit</NavLink>
                </Button>

            </div>
            <CartOrder history={history}></CartOrder>
        </div>

    </>);
}

export default Cart;
