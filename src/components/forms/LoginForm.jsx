/*
Author: <Brian NARBE> (bnprorun@gmail.com)
LoginForm.jsx (c) 2021
Desc: component formulaire login
Created:  2021-06-17T08:50:05.919Z
Modified: 2021-07-22T08:48:11.687Z
*/

import React, { useState } from 'react';
import { HiOutlineMail, Si1Password, IoLogInOutline } from "react-icons/all";

import Input from '../fields/Input';
import CheckBox from "../fields/CheckBox";
import Button from "../fields/Button";

const LoginForm = ({ img, title }) => {
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

    const handleSubmit = ({event}) => {
        event.preventDefault();

    };

    return (<>
        <form onSubmit={handleSubmit}>
            {img &&
                (
                    <div className="text-center mb-5 mt-2">
                        <img src={img} className="border rounded-circle" width="130" />
                    </div>
                )
            }
            {title &&
                (
                    <div className="text-center mb-5 mt-2">
                        <h1>{title}</h1>
                    </div>
                )

            }
            <Input
                label="Votre adresse e-mail"
                name="mail"
                type="email"
                value={loginInfo.mail}
                onChange={handleChange}
                placeholder="adresse mail"
            />
            <Input
                label="Votre mot de passe"
                name="password"
                type="password"
                value={loginInfo.password}
                onChange={handleChange}
                placeholder="Mot de passe"
            />
            <CheckBox name="rememberme" label="Se souvenir de moi" checked={loginInfo.rememberme} id="rememberme" onChange={handleChange} />
            <div className="text-center">
                <Button variant="primary" textColor="" className="">
                    <IoLogInOutline size="20" className="mb-1 me-2" />Se connecter
                </Button>
            </div>

        </form>
    </>
    );
}

export default LoginForm;