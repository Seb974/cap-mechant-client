/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Login.jsx (c) 2021
Desc: description
Created:  2021-07-22T07:57:58.411Z
Modified: 2021-08-20T09:50:40.019Z
*/
import React, { useContext } from 'react';
import LoginFormGroup from '../components/forms/LoginFormGroup';
import Container from "../wrappers/Container";
import Column from '../wrappers/Column';
import Row from '../wrappers/Row';
import ConfigContext from '../contexts/ConfigContext';
import { VscAccount } from 'react-icons/vsc';

const Login = ({ history }) => {
    return (<>
        <Container fluid={true} className="bg-light p-sm-0 my-5 text-center p-md-4">
            <Row>
                <Column xs={11} sm={11} md={7} lg={6} xl={4} xxl={3} className="rounded-3 shadow mb-5 bg-black" >
                    <LoginFormGroup title="Espace membre" history={history}>
                        <div className="d-flex flex-column justify-content-center text-center mb-4">
                            <img src="img/logo/capmechant.jpg" alt="" />
                        </div>
                    </LoginFormGroup>
                </Column>
            </Row>
        </Container>


    </>);
}

export default Login;