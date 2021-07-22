/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Login.jsx (c) 2021
Desc: description
Created:  2021-07-22T07:57:58.411Z
Modified: 2021-07-22T09:55:10.110Z
*/
import React, { useContext } from 'react';
import LoginFormGroup from '../components/forms/LoginFormGroup';
import Container from "../wrappers/Container";
import Column from '../wrappers/Column';
import ConfigContext from '../contexts/ConfigContext';

const Login = ({history}) => {
    const {url, setUrl}= useContext(ConfigContext); 
    console.log(url);
    return (<>
        <Container className="my-5 ">
            <Column md={5} >
                <LoginFormGroup title="Le Cap Méchant" history={history}/>
            </Column>
        </Container>


    </>);
}

export default Login;