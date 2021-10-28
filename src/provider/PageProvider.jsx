/*
Author: <Brian NARBE> (bnprorun@gmail.com)
PageProvider.jsx (c) 2021
Desc: Fournisseur de contenu pour notre page
Created:  2021-06-17T07:59:27.118Z
Modified: 2021-08-25T07:42:23.922Z
*/
import React from 'react';
//css
import "../css/main.css";
import "../css/background.css";
//component
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Container from '../wrappers/Container';
//toast 
import { ToastContainer } from 'react-toastify';


const PageProvider = ({ children }) => {
    return (<>
        <Header logo="img/logo/capmechant.jpg" fluid={true} color="black" className="" />
        <Container fluid={true} className="">
            {children}
        </Container>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        <Footer />
    </>
    );
}

export default PageProvider;
