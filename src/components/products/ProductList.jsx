/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductList.jsx (c) 2021
Desc: listing des produits en liste
Created:  2021-08-16T13:45:43.702Z
Modified: 2021-08-16T15:15:18.639Z
*/

import React, { useContext, useState } from 'react';
import Button from '../fields/Button';
import QuantityInput from '../fields/QuantityInput';
import CartContext from '../../contexts/CartContext';
import CartApi from '../../api/CartApi';
import { ToastContainer, toast } from 'react-toastify';
import { IoPricetagSharp, IoBagAddOutline } from 'react-icons/io5';
import { MdAddShoppingCart } from 'react-icons/md';
import QuantityInputMobile from '../fields/QuantityInputMobile';
const ProductList = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);
    const [item, setItem] = useState({
        product: product,
        orderedQty: 0,
        isPrepared: true,
        variation: null,
        size: null,
        unit: product.unit,
        stock: 0
    })
    const handleClick = (number) => setItem({ ...item, orderedQty: (item.orderedQty + number) < 0 ? 0 : item.orderedQty + number });

    const handleChange = ({ currentTarget }) => {
        setItem({ ...item, orderedQty: ((parseFloat(currentTarget.value)) <= 0 || currentTarget.value == "") ? 0 : parseFloat(currentTarget.value) });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (item.orderedQty != 0) {
            const c = { ...cart };
            const index = c.items.findIndex(p => p.product['@id'] === product['@id']);
            (index != -1) ? c.items[index].orderedQty += item.orderedQty : c.items.push(item);
            setCart({ ...cart, items: c.items });
            CartApi.localStorageCart(c);
            setItem({ ...item, orderedQty: 0 });
        } else {
            toast.error('Veuillez indiquer une quantité supérieur à 0', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    console.log(parseFloat("05"));
    return (<>
        <div className=" d-flex flex-row border border-1">
            <button className="btn btn-dark py-3 text-white ">
                <IoPricetagSharp size={20} className="mb-1" /> {product.categories[0].name}
            </button>
            <p className="fw-bold my-auto mx-5 flex-grow-1 bd-highlight">{product.name}</p>
            <QuantityInputMobile
                padding={1}
                name="orderedQty"
                plus={(event) => { handleClick(1) }}
                minus={(event) => { handleClick(-1) }}
                number={item.orderedQty}
                onChange={handleChange}
                unit={product.unit}
                marginx={3}
            />

            <button className="btn btn-success p-3"><IoBagAddOutline className="" size={25} /></button>
        </div>
    </>);
}

export default ProductList;