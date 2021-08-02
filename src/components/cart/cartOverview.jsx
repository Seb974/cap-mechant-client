/*
Author: <Brian NARBE> (bnprorun@gmail.com)
cartOverview.jsx (c) 2021
Desc: description
Created:  2021-07-30T12:12:29.483Z
Modified: 2021-08-02T06:43:06.371Z
*/

import React, { useContext } from 'react';
import { CgTrash } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import CartContext from '../../contexts/CartContext';

const CartOverview = (props) => {
    const { cart, setCart } = useContext(CartContext);
    const handleDelete = (index) => {
        const c = [...cart];
        c.splice(index, 1);
        setCart(c);
    }
    return (<>
        <div className="card shadow  mb-5 bg-body rounded ">
            <div className="card-header text-white bg-dark">
                <IoBagCheckOutline size={20} className="mb-1 me-2" />Mon panier
            </div>
            <div className="card-body p-0" style={{
                overflowY: "scroll",
                height : "30rem"
            }}>
                <ul className="list-group rounded-0">
                    {cart && cart.map((product, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                <p className="m-0"> {product.name} <span className="fw-bold text-end">x {product.quantity}</span> </p>
                                <button className="mx-2 bg-white border-0" onClick={handleDelete}><CgTrash className="mb-1 text-danger" size={25}/></button>
                            </li>
                        )
                    })
                    
                    }
                    {cart.length == 0 && (<>
                            <p className="text-center text-dark m-5 fst-italic">Panier vide</p></>
                        )
                    }
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p className="m-0">A list item <span className="fw-bold text-end">x 15</span> </p>
                                <span className=""><CgTrash className="mb-1 text-danger" /></span>
                            </li> */}
                </ul>
            </div>
            <div className=" rounded-0 d-flex justify-content-center p-3">
                <button className="text-decoration-underline text-danger border-0 bg-white"> Vider mon panier </button>
            </div>
            <div className=" btn btn-success rounded-0 d-flex justify-content-between p-3">
                <span> Passer commande</span>
                <span><IoIosArrowForward /></span>
            </div>
        </div>
    </>);
}

export default CartOverview;