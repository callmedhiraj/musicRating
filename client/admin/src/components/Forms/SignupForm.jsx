import React, { useState } from "react";
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

function setSteps() {
  return [0, 1, 2];
}
export default function SignupForm(props) {
  const classes = useStyles();
  const steps = setSteps();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.setImage((prevImage) => prevImage + 1 );
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    props.setImage((prevImage) => prevImage -1 );
  };
  return (
    <>
      <Fade in={true} timeout={1000}>
        <div className={classes.signupForm}>
          <Toolbar className={classes.headText}>
            <Typography className={classes.text} variant="h4">
              Signup
            </Typography>
          </Toolbar>
          <Box className={classes.formBox}>
            <form>
              {activeStep === steps[0] && (
                <>
                  <FormGroup className={classes.inputField}>
                    <TextField
                      name="fullName"
                      placeholder="Full Name"
                      id="fullName"
                      label="Full Name"
                    />
                  </FormGroup>
                  <FormGroup className={classes.inputField}>
                    <TextField
                      name="email"
                      type="Email"
                      placeholder="Email"
                      id="Email"
                      label="Email"
                    />
                  </FormGroup>
                </>
              )}
              {activeStep === steps[1] && (
                <>
                  <FormGroup className={classes.inputField}>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="Password"
                      id="password"
                      label="Password"
                    />
                  </FormGroup>
                  <FormGroup className={classes.inputField}>
                    <TextField
                      name="rePassword"
                      type="password"
                      placeholder="Re-Enter Password"
                      id="rePassword"
                      label="Re-Enter Password"
                    />
                  </FormGroup>
                </>
              )}
              {
                activeStep === steps[2] && 
                <FormGroup className={classes.usernameField}>
                <TextField
                  name="username"
                  type="text"
                  placeholder="Username"
                  id="username"
                  label="Username"
                />
              </FormGroup>
              }
              <Toolbar className={classes.loginButtonHolder}>
                {activeStep > 0 && (
                  <Button
                    className={classes.backButton}
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                )}
                {activeStep !== steps[2] && (
                  <Button
                    className={classes.loginButton}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
                {
                  activeStep === steps[2] && 
                  <Button
                    className={classes.loginButton}
                    variant="contained"
                    color="primary"
                    
                  >
                   Create Account
                  </Button>
                }
              </Toolbar>
              <Divider className={classes.Divider} />
              <Toolbar className={classes.headText}>
                <Link style={{textDecoration: 'none'}} to="/login">
                  {" "}
                  <Button variant="text" color="secondary">
                    Login ?
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
  usernameField: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(12),
  },
  backButton: {
    left: 0
  }
}));
