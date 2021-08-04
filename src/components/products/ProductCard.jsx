/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductCard.jsx (c) 2021
Desc: description
Created:  2021-07-05T05:52:53.094Z
Modified: 2021-08-04T07:41:40.168Z
*/
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs"
import Button from "../fields/Button";
import Column from '../../wrappers/Column';
import CartContext from '../../contexts/CartContext';

const ProductCard = ({ product, display }) => {
    const { cart, setCart } = useContext(CartContext);
    const [order, setOrder] = useState({
        id: product.id,
        quantity: 0,
        stock: 0,
        name: product.name
    })
    const handleClick = (number) => {
        setOrder({ ...order, quantity: (order.quantity + number) < 0 ? 0 : order.quantity + number });
    }
    const handleChange = ({ currentTarget }) => {
        setOrder({ ...order, quantity: ((parseFloat(currentTarget.value)) <= 0 || currentTarget.value == "") ? 0 : parseFloat(currentTarget.value) });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cart);
        if (order.quantity != 0) {
            const c = [...cart];
            const index = c.findIndex( p => p.id === product.id);
            (index != -1) ?  c[index].quantity += order.quantity : c.push(order) ;
            setCart(c);
            window.localStorage.setItem("cart",JSON.stringify(c));
            setOrder({...order, quantity : 0});
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
                <div className="card-header">{product.category}</div>
                <div className="card-body" style={{
                    minHeight: "10em",
                    maxHeight: "160px"
                }} >
                    <h5 className="card-title">{product.name}</h5>
                    <div className="d-flex flex-row">
                        <span className="border-0 bg-white my-auto" onClick={(event) => { handleClick(-1) }}>
                            <BsFillDashCircleFill size={40} className="text-dark my-auto " />
                        </span>
                        <input type="number" className="form-control p-0 m-1 text-center fs-1 " aria-label="Username" value={order.quantity} onChange={handleChange} />
                        {/* <span className="border-0 bg-white my-auto" onClick={notify}> */}
                        <span className="border-0 bg-white my-auto" onClick={(event) => { handleClick(1) }}>
                            <BsFillPlusCircleFill size={40} className="text-dark my-auto " />
                        </span>
                    </div>
                    <p className="text-center mb-0 fst-italic">Pièce</p>
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