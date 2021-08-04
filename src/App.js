/*
Author: <Brian NARBE> (bnprorun@gmail.com)
App.js (c) 2021
Desc: Application core
Created:  2021-06-16T12:00:06.624Z
Modified: 2021-08-02T09:43:03.352Z
*/

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataProvider from "./provider/DataProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./route/PrivateRoute";
import cartOrder from "./components/cart/cartOrder";

function App() {
  return (
    <>
      {/* Routing de notre application  */}
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/connexion" component={Login} />
            <PrivateRoute path="/ma-commande" component={cartOrder} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
