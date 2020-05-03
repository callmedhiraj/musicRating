import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import LeftDrawer from "../components/Drawer/Drawer";
import { useSelector, useDispatch } from 'react-redux';
import { HashLoader } from "react-spinners";

const device = () => {
  let x = window.matchMedia("(min-width: 700px");
  if (x.matches) {
    return true;
  }
  if (!x.matches) {
    return false;
  }
};



export default function (props) {
  let history = useHistory();
  const classes = useStyle();
  const [openDrawer, setOpenDrawer] = useState(device());
  const auth = useSelector(state => state.auth)
  
  return (
    
    !auth?.userData  ? <HashLoader color='yellow' size={45}/>
    :
    <>
      <div className={clsx(classes.root, { [classes.shift]: openDrawer })}>
        <LeftDrawer openDrawer={openDrawer} />
        <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Switch>
          <Route path="/dashboard/addvideo">
            <h1 style={{ fontSize: "150px" }}>asdasdasdas</h1>
          </Route>
          <Route path="/dashboard/">
            <h1 style={{ fontSize: "150px" }}>asujanvs</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  shift: {
    width: `calc(100% - ${240}px)`,
    marginLeft: "240px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));
