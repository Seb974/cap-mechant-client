/*
Author: <Brian NARBE> (bnprorun@gmail.com)
PageProvider.jsx (c) 2021
Desc: Fournisseur de contenu pour notre page
Created:  2021-06-17T07:59:27.118Z
Modified: 2021-07-29T10:58:33.411Z
*/
import React from 'react';
//css
import "../css/main.css";
import "../css/background.css";
//component
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';


const PageProvider = ({ children }) => {
    return (<>
        <Header logo="img/logo/capmechant.jpg" fluid={true} color="black" className=""/>
        <div className="content">
            {children}
        </div>
        <Footer />
    </>
    );
}

export default PageProvider;
