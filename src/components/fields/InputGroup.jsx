/*
Author: <Brian NARBE> (bnprorun@gmail.com)
InputGroup.jsx (c) 2021
Desc: input type group for text/number
Created:  2021-06-16T12:06:42.725Z
Modified: 2021-06-17T09:20:26.066Z
*/
import React from 'react';

const InputGroup = ({children, name, placeholder, onChange, type="text", value="" }) => {
    return (<>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">{children}</span>
            <input type={type} name={name} className="form-control" placeholder={placeholder} aria-label="Username" aria-describedby="basic-addon1" onChange={onChange}/>
        </div>
    </>);
}

export default InputGroup;