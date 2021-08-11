/*
Author: <Brian NARBE> (bnprorun@gmail.com)
header.jsx (c) 2021
Desc: Navbar de l'application
Created:  2021-06-16T12:00:06.624Z
Modified: 2021-08-05T09:54:32.797Z
*/
import React, { useContext } from 'react';
//style
import { AiOutlinePoweroff, AiOutlineSearch } from "react-icons/ai";
import AuthenticationContext from '../../contexts/AuthenticationContext';
import {logOut} from '../../api/AuthApi';
//fields
import Button from "../fields/Button";
import LoginForm from '../forms/LoginForm';

const Header = ({ logo, fluid = false, className, color, variant }) => {
    const { isAuth, setIsAuth } = useContext(AuthenticationContext);
    const handleLogOut = (event) => {
        logOut();
        setIsAuth(false);
    }
    return (<>
        <nav className={`navbar navbar-expand-lg navbar-light  ${variant ? "bg-" + variant : ""} ${className}`} style={{
            background: color
        }}>
            <div className={fluid ? "container-fluid" : "container"}>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" height="60" />
                </a>
                <div className="d-flex">
                    <Button variant="danger" className="p-3"><AiOutlinePoweroff size="30" className="mx-3 mb-1" onClick={handleLogOut} />
                    </Button>
                </div>
            </div>
        </nav>
    </>);
}

export default Header;