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
  Fade,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../Redux'
import { useForm  } from 'react-hook-form';
const LoginForm = ({login}) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const setLogin = (data) => {
    login(data)
  }
  return (
    <>
    <Fade in={true} timeout={1000}>
    <div className={classes.loginForm} >
      <Toolbar className={classes.headText}>
        <Typography className={classes.text} variant="h4">
          Login
        </Typography>
      </Toolbar>
      <Box className={classes.formBox}>
        <form onSubmit={handleSubmit(setLogin)} >
          <FormGroup className={classes.inputField}>
            <TextField
              name="usernameOrEmail"
              placeholder="username or email"
              id="Username"
              label="Username"
              inputRef={register({required: true})}
            />
          </FormGroup>
          <FormGroup className={classes.inputField}>
            <TextField
              name="password"
              type="password"
              placeholder="password"
              id="password"
              label="Password"
              inputRef={register({required: true})}
            />
          </FormGroup>
          <Toolbar className={classes.loginButtonHolder}>
            <Link to="/forgot">forgot password?</Link>
            <Button
              className={classes.loginButton}
              type="submit"
              variant="contained"
              color="primary"
            >
              login
            </Button>
          </Toolbar>
          <Divider className={classes.Divider} />
          <Toolbar className={classes.headText}>
            <Link style={{textDecoration: 'none'}} to='/signup'>
            <Button variant="text" color="secondary">
              Create New Account
            </Button>
            </Link>
          </Toolbar>
        </form>
      </Box>
      </div>
      </Fade>
     
       
    </>
    
  );
}

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
}));

const mapStateToProps = state => {
  return{ 
   userData: state.user
  }
 }
 
 const mapDispatchToProps = dispatch => {
  return {
  login: (data) => dispatch(login(data)),
  
  }
 }
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);