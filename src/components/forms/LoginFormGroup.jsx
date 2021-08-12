/*
Author: <Brian NARBE> (bnprorun@gmail.com)
LoginFormGroup.jsx (c) 2021
Desc: Form group
Created:  2021-06-22T09:45:47.961Z
Modified: 2021-08-12T08:21:00.898Z
*/

import React, { useState, useContext } from 'react';
//api
import {authenticate} from '../../api/AuthApi';
//context
import AuthenticationContext from '../../contexts/AuthenticationContext';
//style
import { HiOutlineMail, Si1Password, IoLogInOutline } from "react-icons/all";

//fields
import InputGroup from '../fields/InputGroup';
import Button from "../fields/Button";
import ConfigContext from '../../contexts/ConfigContext';

const LoginForm = ({ history, children }) => {
    const { isAuth, setIsAuth } = useContext(AuthenticationContext);
    const {url, setUrl } = useContext(ConfigContext);
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        // rememberme: false
    })


    const handleChange = (event) => {
        if (event.currentTarget.type == "checkbox") {
            setCredentials({ ...credentials, [event.currentTarget.name]: event.currentTarget.checked });
        } else {
            setCredentials({ ...credentials, [event.currentTarget.name]: event.currentTarget.value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           
            if (await authenticate(credentials)){
                setIsAuth(true);
                history.replace("/");
            }

        } catch (error) {
            console.log(error);
        }

    };
    return (<>
        <div className="p-5">
            <form onSubmit={handleSubmit}>
                {children}
                <InputGroup name="username" type="email" placeholder="Votre adresse email" onChange={handleChange} value={credentials.mail}>
                    <HiOutlineMail size="20" />
                </InputGroup>
                <InputGroup name="password" type="password" placeholder="Votre mot de passe" onChange={handleChange} value={credentials.password} >
                    <Si1Password size="20" />
                </InputGroup>
                {/* <CheckBox name="rememberme" label="Se souvenir de moi" checked={Credentials.rememberme} id="rememberme" onChange={handleChange} /> */}
                <div className="text-center mt-5">
                    <Button variant="primary" textColor="" color="#658852">
                        <IoLogInOutline size="20" className="mb-1 me-2" />Se connecter
                    </Button>
                </div>

            </form>
        </div>
    </>
    );
}

export default LoginForm;