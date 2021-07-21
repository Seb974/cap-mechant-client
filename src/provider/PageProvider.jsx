/*
Author: <Brian NARBE> (bnprorun@gmail.com)
PageProvider.jsx (c) 2021
Desc: Fournisseur de contenu pour notre page
Created:  2021-06-17T07:59:27.118Z
Modified: 2021-07-05T05:50:07.300Z
*/
import React from 'react';
//css
import "../css/main.css";

//component
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';


const PageProvider = ({ children }) => {
    return (<>
        <Header logo="/logodg.png" fluid={true} variant="dark" />
        <div className="content">
            {children}
        </div>
        <Footer />
    </>
    );
}

export default PageProvider;
