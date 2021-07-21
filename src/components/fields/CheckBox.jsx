/*
Author: <Brian NARBE> (bnprorun@gmail.com)
CheckBox.jsx (c) 2021
Desc: description
Created:  2021-06-22T05:53:12.049Z
Modified: 2021-06-22T06:33:00.370Z
*/
import React from 'react';

const CheckBox = ({name, label, id="checkbox", onChange, checked=false }) => {
    return (<>
        <div className="mb-3 form-check">
            <input name={name} type="checkbox" className="form-check-input" id={id} onChange={onChange} checked={checked}/>
            <label className="form-check-label">{label}</label>
        </div>
    </>);
}

export default CheckBox;