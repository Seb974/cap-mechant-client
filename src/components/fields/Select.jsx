/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Select.jsx (c) 2021
Desc: component input select 
Created:  2021-06-16T12:07:10.015Z
Modified: 2021-08-24T12:34:32.447Z
*/

import React, { useState } from 'react';
import Select from 'react-select';
const SelectList = ({ data, onChange, label, defaultValue, placeholder="", value}) => {
    const [options, setOptions] = useState([]);
    const sortData = (o) => {
        o.sort((a,b) => {
            return (a.label < b.label) ?   -1 :  1;
        })
        return(o);
    }

    return (<>
        <Select options={sortData(data)}
            onChange={onChange} 
            placeholder={label}
            className="mb-2"
            // defaultValue={defaultValue}
            placeholder={placeholder}
            value={value}
            />
    </>);
}

export default SelectList;