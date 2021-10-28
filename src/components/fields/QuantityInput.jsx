/*
Author: <Brian NARBE> (bnprorun@gmail.com)
QuantityInput.jsx (c) 2021
Desc: description
Created:  2021-08-03T10:11:27.649Z
Modified: 2021-08-24T06:01:32.973Z
*/


import React, { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi"
import "../../css/input.css";

const QuantityInput = ({ label = "", name, number, onChange, plus, minus, unit, padding = "3" }) => {
    return (<>
        <div className="my-auto ">
            {label && (
                <p className="mb-1">{label}</p>
            )}

            <div className="input-group  d-flex justify-content-center">
                <span
                    className={`input-group-text btn btn-outline-dark `}
                    name="orderedQty-plus" onClick={minus}
                >
                    <HiOutlineMinusCircle size="25" />
                </span>
                <input
                    type="number"
                    min="0"
                    name={name} className="form-control text-center border border-dark border-end-0"
                    value={number}
                    onChange={onChange}
                    step="any"
                />
                <span className="input-group-text bg-white border border-dark border-start-0 ">{unit}</span>
                <span
                    className={`input-group-text btn btn-outline-dark  `}
                    name="orderedQty-minus"
                    onClick={plus}
                >
                    <HiOutlinePlusCircle size="25" />
                </span>
            </div>
        </div>
    </>);
}

export default QuantityInput;