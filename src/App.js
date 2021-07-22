/*
Author: <Brian NARBE> (bnprorun@gmail.com)
App.js (c) 2021
Desc: Application core
Created:  2021-06-16T12:00:06.624Z
Modified: 2021-07-22T12:21:47.773Z
*/

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataProvider from "./provider/DataProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  return (
    <>
      {/* Routing de notre application  */}
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/connexion" component={Login} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
