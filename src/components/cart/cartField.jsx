/*
Author: <Brian NARBE> (bnprorun@gmail.com)
cartField.jsx (c) 2021
Desc: champs pour un article
Created:  2021-08-02T11:24:41.733Z
Modified: 2021-08-03T12:27:06.008Z
*/

import React from 'react';
import Input from '../fields/Input';
import QuantityInput from '../fields/QuantityInput';

const CartField = ({product}) => {
    console.log(product);
    return ( <>
        <div className="row justify-content-center">
            <p className="col-sm-12 col-lg-12 my-auto"> {product.name}</p>
            <QuantityInput className="col-12 mb-2 bg-success" label="Quantité"></QuantityInput>
            <QuantityInput className="col-12 bg-danger" label="Mon stock"></QuantityInput> 
        </div>
    </> );
}
 
export default CartField;