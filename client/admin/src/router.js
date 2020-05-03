import React, { useEffect } from "react";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Switch, Redirect } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./Redux/Auth/authActions";
import Dashboard from "./pages/Dashboard";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  if (!token) {
    return false;
  }
};




const AdminRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem('token');
    if(token) {
      dispatch(fetchUser(token))
    }
  },[])

  const PrivateRoute = ({ component: Component, path, ...rest }) => {
    return (
      <Route
        path={path}
        render={(props) =>
          isAuthenticated() ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };
  const PublicRoute = ({ component: Component, path, ...rest }) => {
    return (
      <Route
        path={path}
        render={(props) =>
          !isAuthenticated() ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };

  return (
    <>
      <Switch>
        <PublicRoute path="/signup" component={SignupPage} />
        <PublicRoute path="/login" component={LoginPage} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="*">
          <Redirect to="/dashboard"/>
        </Route>
      </Switch>
    </>
  );
};

export default AdminRouter;
