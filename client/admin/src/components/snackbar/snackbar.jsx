import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import { clearSnackbar } from "../../Redux";
import { ErrorOutlineSharp, CheckCircleOutlineSharp } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
export default function SuccessSnackbar() {
  const dispatch = useDispatch();

  const { snackbarMessage, snackbarOpen, status } = useSelector(
    (state) => state.snack
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }
  const checkStatusRange = (status) => {
    if (100 <= status && status <= 199) {
      return "info";
    }
    if (200 <= status && status <= 299) {
      return "success";
    }
    if (400 <= status && status <= 499) {
      return "warning";
    }
    if (500 <= status && status <= 599) {
      return "danger";
    }
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={snackbarOpen}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert
        icon={
          status >= 400 ? (
            <ErrorOutlineSharp fontSize="inherit" />
          ) : (
            <CheckCircleOutlineSharp />
          )
        }
        onClose={handleClose}
        severity={checkStatusRange(status)}
        variant="filled"
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
}
