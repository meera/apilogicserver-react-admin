import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/Home";

import PrivateRoute from "./PrivateRoute";
import About from "./pages/About";
import NoMatch from "./pages/404";
import Logout from "./pages/Logout";
import Layout from "./components/Layout/Layout";

function DashboardRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Layout>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Layout>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default DashboardRoute;
