/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Select.jsx (c) 2021
Desc: component input select 
Created:  2021-06-16T12:07:10.015Z
Modified: 2021-08-24T07:12:47.460Z
*/

import React, { useState } from 'react';
import Select from 'react-select';
const SelectList = ({ data, onChange, label}) => {
    const [options, setOptions] = useState([]);
    const sortData = (o) => {
        o.sort((a,b) => {
            return (a.label < b.label) ?   -1 :  1;
        })
        return(o);
    }

    const getOptions = (data) => {
        const optionsArray = []
        if (data && data.length > 0) {
            data.map((value) => {
                optionsArray.push({
                    value: value['@id'],
                    label: value.name
                })
            });
        }
        return sortData(optionsArray);
    }
    return (<>
        <Select options={getOptions(data)}
            onChange={onChange} 
            placeholder={label}
            className="mb-2"/>
    </>);
}

export default SelectList;