/*
Author: <Brian NARBE> (bnprorun@gmail.com)
App.js (c) 2021
Desc: Application core
Created:  2021-06-16T12:00:06.624Z
Modified: 2021-08-25T07:07:15.945Z
*/

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//react
import { BrowserRouter as Router, Switch, Route, HashRouter, withRouter } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
//provider
import DataProvider from "./provider/DataProvider";
//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* Routing de notre application  */}
      <DataProvider>
        {/* <HashRouter> */}
        <Router>
          <Switch>
            <Route path="/connexion" component={Login} />
            <PrivateRoute path="/mes-commandes" component={Orders} />
            <PrivateRoute path="/mon-panier" component={Cart} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Router>
        {/* </HashRouter> */}
      </DataProvider>
    </>
  );
}

export default App;
