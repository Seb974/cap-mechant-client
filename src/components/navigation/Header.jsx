/*
Author: <Brian NARBE> (bnprorun@gmail.com)
header.jsx (c) 2021
Desc: Navbar de l'application
Created:  2021-06-16T12:00:06.624Z
Modified: 2021-07-05T05:10:43.778Z
*/
import React from 'react';
//
import { RiAccountCircleLine } from "react-icons/ri";
//fields
import Button from "../fields/Button";
import LoginForm from '../forms/LoginForm';

const Header = ({ logo, fluid = false, className, color, variant }) => {
    return (<>
        <nav className={`navbar navbar-expand-lg navbar-light  ${variant ? "bg-" + variant : ""}`} style={{
            background: color
        }}>
            <div className={fluid ? "container-fluid" : "container"}>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" height="40" />
                </a>
                <div class="d-flex">
                    <Button variant="primary" ><RiAccountCircleLine size="20" className="mb-1 me-1" /> Connexion </Button>
                </div>
            </div>
        </nav>
    </>);
}

export default Header;