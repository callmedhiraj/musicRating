import React from "react";
import {
  Toolbar,
  makeStyles,
  Typography,
  Box,
  FormGroup,
  TextField,
  Button,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from '../../Redux/Auth/authActions.js';


import { useForm } from "react-hook-form";
const LoginForm = () => {
  const auth = useSelector(state => state.auth)
const dispatch = useDispatch()
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const setLogin = (data)=>  {
    dispatch(login(data));
  };
if(auth?.isLoggedIn ) {
  return (
    <Redirect to='/dashboard/' />
  )
}
  if(auth?.message === 'Unauthorized Admin') {
   
     
        return <Redirect to='/unauthorized'/>
     
  }

  return (
    <>
      <div className={classes.loginForm}>
        <Toolbar className={classes.headText}>
          <Typography className={classes.text} variant="h4">
            Login
          </Typography>
        </Toolbar>
        <Box className={classes.formBox}>
          <form onSubmit={handleSubmit(setLogin)}>
            <FormGroup className={classes.inputField}>
              <TextField
                name="usernameOrEmail"
                placeholder="username or email"
                id="Username"
                label="Username"
                inputRef={register({ required: true })}
                error={!!errors.usernameOrEmail}
                helperText={
                  errors.usernameOrEmail ? "Enter email or username." : ""
                }
              />
            </FormGroup>
            <FormGroup className={classes.inputField}>
              <TextField
                name="password"
                type="password"
                placeholder="password"
                id="password"
                label="Password"
                inputRef={register({ required: true })}
                error={!!errors.password}
                helperText={errors.password ? "Enter password." : ""}
              />
            </FormGroup>
            <Toolbar className={classes.loginButtonHolder}>
              <Link to="/forgot">forgot password?</Link>
              <Button
                className={classes.loginButton}
                type="submit"
                variant="contained"
                color="primary"
                endIcon={
                  auth?.isLoading ? (
                    <CircularProgress color="secondary" size={15} />
                  ) : ''
                }
                disabled={auth?.isLoading}
              >
                login
              </Button>
            </Toolbar>
            <Divider className={classes.Divider} />
            <Toolbar className={classes.headText}>
              <Link style={{ textDecoration: "none" }} to="/signup">
                <Button variant="text" color="secondary">
                  Create New Account
                </Button>
              </Link>
            </Toolbar>
          </form>
        </Box>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  headText: {
    justifyContent: "center",
  },
  text: {
    color: "#a00fc7",
  },
  inputField: {
    margin: theme.spacing(2),
  },
  formBox: {
    marginTop: theme.spacing(4),
  },
  loginButtonHolder: {
    display: "flex",
    justifyContent: "flex-end",
  },
  loginButton: {
    marginLeft: theme.spacing(3),
  },
  Divider: {
    marginTop: theme.spacing(3),
  },
  loginForm: {
    color: "blck",
    height: "inherit",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  }
}));


export default LoginForm;
