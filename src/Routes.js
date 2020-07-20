import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

const Login = withRouter(lazy(() => import("./pages/auth/Login/Login")));
const Home = withRouter(lazy(() => import("./pages/app/Home/Home")));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/app" exact component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
