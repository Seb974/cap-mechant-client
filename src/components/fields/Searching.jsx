/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Searching.jsx (c) 2021
Desc: description
Created:  2021-08-02T06:10:33.320Z
Modified: 2021-08-02T06:46:13.097Z
*/

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Searching = ({setSearch}) => {

    const handleChange = ({currentTarget}) => setSearh(currentTarget.value); 
    
    return (<>
        <div className="input-group my-3">
            <span className="input-group-text bg-dark text-white" id="basic-addon1"><AiOutlineSearch size={30} /></span>
            <input type="text" className="form-control p-3" placeholder="Rechechez le nom de votre article" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    </>);
}

export default Searching;