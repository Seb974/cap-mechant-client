/*
Author: <Brian NARBE> (bnprorun@gmail.com)
header.jsx (c) 2021
Desc: Navbar de l'application
Created:  2021-06-16T12:00:06.624Z
Modified: 2021-08-20T07:56:58.694Z
*/
import React, { useContext } from 'react';
//style
import { AiOutlinePoweroff, AiOutlineSearch } from "react-icons/ai";
import {FaRegFileAlt} from "react-icons/fa";
import { VscAccount } from 'react-icons/vsc';
import AuthenticationContext from '../../contexts/AuthenticationContext';
import { logOut } from '../../api/AuthApi';
//fields
import Button from "../fields/Button";
import UserContext from '../../contexts/UserContext';

import DropdownButton from '../fields/DropdownButton';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ logo, fluid = false, className, color, variant }) => {
    const { isAuth, setIsAuth } = useContext(AuthenticationContext);
    const { user, setUser } = useContext(UserContext);
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
                {//icons 
                }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <DropdownButton id="AccountButton"
                        className="p-2  "
                        label={user.email}
                        icon={<VscAccount size={25} />}
                        label={user.email}
                        textColor="white"
                        color="#658852"
                    >
                        <ul className="dropdown-menu dropdown-menu-end p-0" aria-labelledby="AccountButton">
                            {/* <li><button className="dropdown-item" href="#">Action</button></li> */}
                            <li className=""><Link  to="/mes-commandes" className="dropdown-item py-2" href="#"><FaRegFileAlt size={20} className="mb-1"/> Mes commandes</Link></li>
                            {/* <li><hr className="dropdown-divider" /></li> */}
                            <li className="">
                                <Button className="dropdown-item bg-danger text-white py-2 text-center" onClick={handleLogOut}><AiOutlinePoweroff  className="mb-1 " size={20} /> Deconnexion  </Button>
                            </li>
                        </ul>
                    </DropdownButton>
                </div>
            </div>
        </nav>
    </>);
}

export default Header;