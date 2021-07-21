/*
Author: <Brian NARBE> (bnprorun@gmail.com)
App.js (c) 2021
Desc: Application core
Created:  2021-06-16T12:00:06.624Z
Modified: 2021-06-22T09:35:58.267Z
*/

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataProvider from "./provider/DataProvider";
import PageProvider from "./provider/PageProvider";
import PageTest from "./pages/PageTest";

function App() {
  return (
    <>
      {/* Routing de notre application  */}
      <DataProvider>
        <PageProvider>
          <Router>
            <Switch>
              <Route path="/" component={PageTest} />
            </Switch>
          </Router>
        </PageProvider>
      </DataProvider>
    </>
  );
}

export default App;
