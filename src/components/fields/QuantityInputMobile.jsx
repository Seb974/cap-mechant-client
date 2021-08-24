/*
Author: <Brian NARBE> (bnprorun@gmail.com)
QuantityInputMobile.jsx (c) 2021
Desc: field quantity pour mobile
Created:  2021-08-16T14:25:04.460Z
Modified: 2021-08-16T15:09:25.070Z
*/

import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import "../../css/input.css";
const QuantityInputMobile = ({ label = "", name,marginx="", number, plus, minus, unit, padding = "3" }) => {
    return (<>
        <div className={`my-auto ${marginx ? "m-" + marginx : "" } `}>
            {label && (
                <p className="">{label}</p>
            )}
            <div className="input-group">
                <span
                    className={`input-group-text btn btn-outline-dark rounded-3 mx-2 ${padding ? "p-" + padding : ""} `}
                    name="orderedQty-plus" onClick={minus}
                >
                    <AiOutlineMinus size="20" />
                </span>
                <span className="input-group-text bg-light border-0 p-1">{number}</span>
                <span className="input-group-text bg-light border-0">{unit}</span>
                <span
                    className={`input-group-text btn btn-outline-dark rounded-3 mx-2 ${padding ? "p-" + padding : ""} `}
                    name="orderedQty-minus"
                    onClick={plus}
                >
                    <AiOutlinePlus size="20" />
                </span>
            </div>
        </div>
    </>);
}

export default QuantityInputMobile;