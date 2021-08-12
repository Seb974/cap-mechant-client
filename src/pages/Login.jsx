/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Login.jsx (c) 2021
Desc: description
Created:  2021-07-22T07:57:58.411Z
Modified: 2021-08-02T09:29:26.813Z
*/
import React, { useContext } from 'react';
import LoginFormGroup from '../components/forms/LoginFormGroup';
import Container from "../wrappers/Container";
import Column from '../wrappers/Column';
import Row from '../wrappers/Row';
import ConfigContext from '../contexts/ConfigContext';
import {VscAccount} from 'react-icons/vsc';

const Login = ({history}) => {
    const {url, setUrl}= useContext(ConfigContext); 
    console.log(url);
    return (<>
        <Container fluid={true} row={true} justifyContent='center' className="bg-light p-5" style={{
            maxHeight : "100% !important"
        }}>
            <Row justifyContent='center' >

           
            <Column md={6} lg={3} xl={6}  className="bg-light rounded-3 shadow mb-5 bg-black" >
                <LoginFormGroup title="Espace membre" history={history}>
                    <div className="d-flex flex-column justify-content-center text-center mb-4">
                       <img src="img/logo/capmechant.jpg" alt="" />
                        <div className="text-white"><p>Espace membre Cap Méchant</p></div>
                    </div>
                </LoginFormGroup>
            </Column>
            </Row>
        </Container>


    </>);
}

export default Login;