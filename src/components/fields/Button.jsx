/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Button.jsx (c) 2021
Desc: description
Created:  2021-06-22T07:08:15.386Z
Modified: 2021-08-18T11:45:41.390Z
*/
import React from 'react';

const Button = ({className, variant, color, textColor, type = "submit" , children , onClick}) => {
    return (<>
        <button className={`border-0 ${className ? className : ""} ${variant ? " btn btn-" + variant : " btn"}`} onClick={onClick}
            style={{
                backgroundColor: color,
                color : textColor,
                boxShadow: "0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%"
            }}
            >
                {children}
        </button>
    </>);
}

export default Button;
