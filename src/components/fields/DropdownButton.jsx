/*
Author: <Brian NARBE> (bnprorun@gmail.com)
DropdownButton.jsx (c) 2021
Desc: description
Created:  2021-06-22T10:30:26.519Z
Modified: 2021-08-18T11:47:00.869Z
*/
import React from 'react';

const DropdownButton = ({ id, label, icon, children, color, backgroundColor="", textColor="", variant, className }) => {
    return (<>
        <div className="btn-group ms-auto">
            <button 
            className={` dropdown-toggle border-0 ${className ? className : ""} ${variant ? " btn btn-" + variant : " btn"}`}
            type="button" 
            id={id} 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            style={{
                backgroundColor: color,
                color : textColor,
                boxShadow: "0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%"
            }}
            >
                {icon}
                <span className="ms-2 d-none d-lg-inline-block">{label}</span>
            </button>
            {children}
        </div>
    </>);
}

export default DropdownButton;