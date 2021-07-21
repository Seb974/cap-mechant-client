/*
Author: <Brian NARBE> (bnprorun@gmail.com)
LoginFormGroup.jsx (c) 2021
Desc: Form group
Created:  2021-06-22T09:45:47.961Z
Modified: 2021-06-22T09:46:28.517Z
*/

import React, { useState } from 'react';
import { HiOutlineMail, Si1Password, IoLogInOutline } from "react-icons/all";
import InputGroup from '../fields/InputGroup';
import CheckBox from "../fields/CheckBox";
import Button from "../fields/Button";

const LoginForm = ({ img }) => {
    const [loginInfo, setLoginInfo] = useState({
        mail: "",
        password: "",
        rememberme: false
    })

    const handleChange = (event) => {
        if (event.currentTarget.type == "checkbox") {
            setLoginInfo({ ...loginInfo, [event.currentTarget.name]: event.currentTarget.checked });
        } else {
            setLoginInfo({ ...loginInfo, [event.currentTarget.name]: event.currentTarget.value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };
    
    return (<>
        <div className="px-5 py-4 border rounded">
            <form onSubmit={handleSubmit}>
                {img &&
                    (
                        <div className="text-center mb-5 mt-2">
                            <img src={img} className="border rounded-circle" width="130" />
                        </div>
                    )
                }
                <InputGroup name="mail" type="email" placeholder="Votre adresse email" onChange={handleChange} value={loginInfo.mail}>
                    <HiOutlineMail size="20" />
                </InputGroup>
                <InputGroup name="password" type="password" placeholder="Votre mot de passe" onChange={handleChange} value={loginInfo.password}>
                    <Si1Password size="20" />
                </InputGroup>
                <CheckBox name="rememberme" label="Se souvenir de moi" checked={loginInfo.rememberme} id="rememberme" onChange={handleChange} />
                <Button  variant="primary" textColor ="">
                    <IoLogInOutline size="20" className="mb-1 me-2" />Se connecter
                </Button>
            </form>
        </div>
    </>
    );
}

export default LoginForm;