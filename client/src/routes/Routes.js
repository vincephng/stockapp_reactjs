import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "../pages/home";
import stocksPage from "../pages/stocksPage";
import CoinList from "../component/CoinList";
import history from "./history";
import React from "react";
import { LoginForm } from "../component/Login";
import UserHome from "../pages/UserHome";
import ProtectedRoute from "./ProtectedRoute";
import ForbiddenPage from "../pages/403ForbiddenPage";


const Routes = () => {
  
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Mainpage} />
        <Route path="/stock/:id" component={stocksPage} />
        <Route path="/login" component={LoginForm} />
        <ProtectedRoute path="/user/home" component={UserHome}/>
        <Route path="/403errorpage" component={ForbiddenPage} />
        <Route path="/coin/home" component={CoinList} />
      </Switch>
    </Router>
  );
};
export default Routes;
