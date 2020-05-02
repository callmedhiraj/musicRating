import React, { useEffect } from "react";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { HashLoader } from "react-spinners";

import { connect } from "react-redux";
import { fetchUser } from "./Redux";
import Dashboard from "./pages/Dashboard";

const AdminRouter = ({ userData, fetchUser }) => {
  const PrivateRoute = ({ component: Component, path, ...rest }) => {
    return (
      <Route
        path={path}
        render={(props) =>
          !!userData?.isLoggedIn ? (
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
          !userData?.isLoggedIn ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard/",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };
  console.log(userData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser(token);
    }
    if (!token) {
      console.log("no token");
    }
  }, []);

  return (
    <>
      {userData?.isLoading ? (
        <div style={{ margin: "50%" }}>
          {" "}
          <HashLoader color="yellow" size={50} />{" "}
        </div>
      ) : (
        <Switch>
          <PublicRoute path="/signup" component={SignupPage} />
          <PublicRoute path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path='*'><h1>adsasdas</h1></Route>
        </Switch>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (token) => dispatch(fetchUser(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);
