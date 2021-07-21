/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Input.jsx (c) 2021
Desc: component for input text/number
Created:  2021-06-16T12:06:00.185Z
Modified: 2021-06-22T09:56:37.817Z
*/
import React from 'react';

const Input = ({name, value, onChange, label, type, placeholder}) => {
    return (<>
        <div class="mb-3">
            <label class="form-label">{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} class="form-control" aria-describedby="emailHelp" />
        </div>
    </>);
}

export default Input;
