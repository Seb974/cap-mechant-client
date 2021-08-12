/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductCard.jsx (c) 2021
Desc: description
Created:  2021-07-05T05:52:53.094Z
Modified: 2021-08-11T11:40:50.686Z
*/
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs"
import Button from "../fields/Button";
import CartContext from '../../contexts/CartContext';
import CartApi from '../../api/CartApi';
import QuantityInput from '../fields/QuantityInput';

const ProductCard = ({ product, display }) => {
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
    return (<>
        <form className="card shadow bg-body " onSubmit={handleSubmit} >
            <div className="card-header">{product.categories[0].name}</div>
            <div className="card-body" >
                <div>
                    <h5 className="card-title">{product.name}</h5>
                    <div className="d-flex flex-row">
                        <QuantityInput
                            name="orderedQty"
                            plus={(event) => { handleClick(1) }}
                            minus={(event) => { handleClick(-1) }}
                            number={item.orderedQty}
                            onChange={handleChange}
                            unit={product.unit}
                        />
                    </div>
                </div>
            </div>
            <div className=" card-footer rounded-0 rounded-bottom  py-3 text-center">
                <Button variant="success" className="px-3" >
                    Ajouter au panier
                </Button>

            </div>
        </form>
    </>);
}

export default ProductCard;