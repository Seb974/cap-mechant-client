/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Container.jsx (c) 2021
Desc: description
Created:  2021-06-17T09:28:19.702Z
Modified: 2021-07-05T05:44:00.708Z
*/
import React from 'react';

const Container = ({fluid = false, justifyContent='center', children, className}) => {
    return (
        <div className={`${fluid ? "container-fluid" : "container"} ${className}`}>
            <div className={"row justify-content-" + justifyContent}>
                {children}
            </div>
        </div>
    );
}
export default Container;
