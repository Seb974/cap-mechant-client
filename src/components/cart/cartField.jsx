/*
Author: <Brian NARBE> (bnprorun@gmail.com)
cartField.jsx (c) 2021
Desc: champs pour un article
Created:  2021-08-02T11:24:41.733Z
Modified: 2021-08-10T11:28:22.310Z
*/

import React, { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi"
import Input from '../fields/Input';
import QuantityInput from '../fields/QuantityInput';

const CartField = ({ product, onChange, onClick }) => {
    const [item, setItem] = useState(product)
    const handleClick = ({ target }, number) => {
        console.log(target)
    }

    return (<>
        <div className="row mb-2">
            <p className="col-sm-4 my-auto">{item.product.name}</p>

            <div className="col-sm-3">
                <QuantityInput label={"Quantité à commander"} name="orderedQty" number={item.orderedQty}></QuantityInput>
            </div>
            <div className="col-sm-3">
                <p className="mb-2">Mon stock</p>
                <div class="input-group mb-3">
                    <button className="input-group-text btn btn-outline-dark p-3"><HiOutlineMinusCircle size="25" /></button>
                    <input type="number" name="stock" class="form-control text-center" value={product.stock} onChange={onChange} />
                    <button className="input-group-text btn btn-outline-dark p-3"><HiOutlinePlusCircle size="25" /></button>
                </div>
            </div>
            {/* <input type="number" name="orderedQty" className="form-control" value={product.orderedQty} onChange={onChange} />
            <input type="number" name="stock" className="form-control" value={product.stock} onChange={onChange} /> */}
        </div>
    </>);
}

export default CartField;