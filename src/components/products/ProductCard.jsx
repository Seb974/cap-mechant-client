/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductCard.jsx (c) 2021
Desc: description
Created:  2021-07-05T05:52:53.094Z
Modified: 2021-08-25T06:25:24.293Z
*/
import React, { useContext, useState, useEffect } from 'react';
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
        quantity: 0,
        size: null,
        unit: product.unit,
        received: null,
        stock: 0
    })
    const handleClick = (number) => {
        setItem({ ...item, quantity: (item.quantity + number) < 0 ? 0 : parseFloat(item.quantity + number) })
    };

    const handleChange = ({ currentTarget }) => {
        if(currentTarget.value.match(/^0[0-9]+/g) != null){
            // console.log(currentTarget.value.substr(1));
            const val = currentTarget.value.substr(1);
            setItem({ ...item, quantity: ((parseFloat(currentTarget.value)) <= 0 || currentTarget.value == "") ? 0 : val });
        }else{
            setItem({ ...item, quantity: ((parseFloat(currentTarget.value)) <= 0 || currentTarget.value == "") ? 0 : parseFloat(currentTarget.value) });
        }
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cart);
        if (item.quantity != 0) {
            const c = { ...cart };
            const index = c.goods.findIndex(p => p.product['@id'] === product['@id']);
            (index != -1) ? c.goods[index].quantity += item.quantity : c.goods.push(item);
            setCart({ ...cart, goods: c.goods });
            CartApi.localStorageCart(c);
            setItem({ ...item, quantity: 0 });
            toast.success('Produit ajouté au panier', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
    // console.log(parseFloat("05"));
    return (<>
        <form className="card shadow bg-body " onSubmit={handleSubmit} >
            <div className="card-header">{product.categories}
            </div>
            <div className="card-body" >
                <div>
                    <h5 className="card-title" style={{
                        minHeight: '48px'
                    }}>{product.name}</h5>
                    <div className="d-flex flex-row">
                        <QuantityInput
                            name="quantity"
                            plus={(event) => { handleClick(1) }}
                            minus={(event) => { handleClick(-1) }}
                            number={item.quantity}
                            onChange={handleChange}
                            unit={product.unit}
                            className="text-center"
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