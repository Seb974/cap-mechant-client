/*
Author: <Brian NARBE> (bnprorun@gmail.com)
QuantityInput.jsx (c) 2021
Desc: description
Created:  2021-08-03T10:11:27.649Z
Modified: 2021-08-03T12:34:38.541Z
*/

import React from 'react';
import {BsFillDashCircleFill, BsFillPlusCircleFill} from "react-icons/bs";

const QuantityInput = ({label, className}) => {
    // const handleChange = ({ currentTarget }) => {
    //     setOrder({ ...order, quantity: ((parseFloat(currentTarget.value)) <= 0 || currentTarget.value == "") ? 0 : parseFloat(currentTarget.value) });
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(cart);
    //     if (order.quantity != 0) {
    //         const c = [...cart];
    //         const index = c.findIndex( p => p.id === product.id);
    //         (index != -1) ?  c[index].quantity += order.quantity : c.push(order) ;
    //         setCart(c);
    //         window.localStorage.setItem("cart",JSON.stringify(c));
    //         setOrder({...order, quantity : 0});
    //     } else {
    //         toast.error('Veuillez indiquer une quantité supérieur à 0', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //     }
    // }
    return (<>
        <div className={`text-center ${className}`}>
            <p className="mb-0 fw-bold">{label}</p>
            <div className="d-flex flex-row">
                <span className="border-0 bg-white my-auto" >
                    <BsFillDashCircleFill size={40} className="text-dark my-auto " />
                </span>
                <input type="number" className="form-control p-0 m-1 text-center fs-1 "/>
                {/* <span className="border-0 bg-white my-auto" onClick={notify}> */}
                <span className="border-0 bg-white my-auto">
                    <BsFillPlusCircleFill size={40} className="text-dark my-auto " />
                </span>
            </div>
        </div>
    </>);
}

export default QuantityInput;