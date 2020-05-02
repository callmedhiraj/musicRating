import React, { useEffect } from "react";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/SignupPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";



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
                pathname: "/",
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
    { userData?.isLoading ? <h1>Loading...</h1> :
      <Router>
        <Switch>
          <PublicRoute path="/signup" component={SignupPage} />
          <PublicRoute path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={Dashboard}/>
        </Switch>
      </Router>
       }
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
