/*
Author: <Brian NARBE> (bnprorun@gmail.com)
footer.jsx (c) 2021
Desc: footer du site web
Created:  2021-06-17T07:48:53.195Z
Modified: 2021-08-25T07:54:20.421Z
*/
import React from 'react';

const Footer = (props) => {
    return ( <>
        <footer className="footer mb-0 py-3 bg-light position-fixed" style={{
            bottom : '0px'
        }}>
            <div className="container">
                <span className="text-muted">© 2021 cap-mechant.re</span>
            </div>
        </footer>
    </> );
}
 
export default Footer;
