import React from "react";
import {
  Paper,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Fade,
  Snackbar,
} from "@material-ui/core";
import AdminSvg from "../assets/svg/admin.svg";
import LoginForm from "../components/Forms/loginForm";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { ErrorOutlineSharp } from "@material-ui/icons";

export default function LoginPage() {
  const auth = useSelector((state) => state.auth);
  const classes = useStyle();
  return (
    <>
      <Snackbar open={auth?.message ? true : false} autoHideDuration={2000}>
        {auth?.message ? (
          <Alert
            icon={<ErrorOutlineSharp fontSize="inherit" />}
            severity={auth?.status < 400 ? "sucess" : "warning"}
            variant="filled"
          >
            {auth?.message}
          </Alert>
        ) : (
          ""
        )}
      </Snackbar>

      <Container>
        <Paper className={classes.root} elevation={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7} className={classes.descriptionBox}>
              <Container>
                <Toolbar className={classes.imageContainer}>
                  <Fade in={true} timeout={3000}>
                    <img
                      alt="admin"
                      className={classes.adminsvg}
                      src={AdminSvg}
                    />
                  </Fade>
                </Toolbar>
              </Container>
            </Grid>
            <Grid className={classes.loginForm} item xs={12} sm={5}>
              <Container>
                <LoginForm />
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    width: "80vw",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(10),
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      marginTop: theme.spacing(5),
      marginLeft: 0,
    },
  },
  adminsvg: {
    height: "60vh",
  },
  descriptionBox: {
    backgroundColor: "#c52aef",
    color: "white",
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
  },
  loginForm: {
    color: "blck",
    height: "inherit",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  signInSvg: {
    height: "60vh",
    width: "100%",
  },
}));
