/*
Author: <Brian NARBE> (bnprorun@gmail.com)
cartorder.jsx (c) 2021
Desc: Recapitulatif de la commande
Created:  2021-08-02T09:38:04.925Z
Modified: 2021-08-03T10:09:34.186Z
*/

import React, { useContext } from 'react';
import Container from '../../wrappers/Container';
import CartContext from '../../contexts/CartContext';
import CartField from './cartField';

const CartOrder = (props) => {
    const { cart, setCart } = useContext(CartContext);
    console.log(cart);

    const handleSubmit = (event) => {

    }
    return (<>
        <Container>
            <form onSubmit={handleSubmit} >
                {(cart && cart.length > 0) &&
                    cart.map((product, index) => {
                        return (
                            <CartField key={index} product={product} />
                        )
                    })
                }
            </form>
        </Container>
    </>);
}

export default CartOrder;