/*
Author: <Brian NARBE> (bnprorun@gmail.com)
PrivateRoute.js (c) 2021
Desc: description
Created:  2021-07-22T07:47:52.123Z
Modified: 2021-07-22T08:15:47.485Z
*/
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthenticationContext from "../contexts/AuthenticationContext";
import PageProvider from "../provider/PageProvider";

const PrivateRoute = ({ path, component }) => {
  const { isAuth, setIsAuth } = useContext(AuthenticationContext);
  console.log("private route");
  return isAuth ? (
    <>
      <PageProvider>
        <Route path={path} component={component} />
      </PageProvider>
      
    </>
  ) : (
    <Redirect to="/connexion"/>
  );
};

export default PrivateRoute;
