import React, { useState } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Input,
  InputAdornment,
  FormControl,
  Menu,
  MenuItem,
  Avatar,
} from "@material-ui/core";
import { MenuSharp, SearchSharp, } from "@material-ui/icons";
import { MdArrowBack } from 'react-icons/md'
import clsx from "clsx";

export default function Navbar(props) {
  const classes = useStyle();
   const [anchorEl, setAnchorEl] = useState(null);
   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar className={ clsx (classes.root, {[classes.shift]:props.openDrawer})} >
        <Toolbar>
          <IconButton
            onClick = {() => {props.setOpenDrawer(!props.openDrawer)}}
            className={classes.menuButton}
            aria-label="upload picture"
            component="span"
          >
           {
            props.openDrawer ? 
            <MdArrowBack/> :
            <MenuSharp/>
           }
          </IconButton>
          <Typography variant="h5" className={classes.titleText}>
            MVDB
          </Typography>
          <FormControl className={classes.FormControl}>
            <Input
              className={classes.Input}
              type="text"
              disableUnderline={true}
              style={{ color: "white" }}
              placeholder="Search Music"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchSharp />
                </InputAdornment>
              }
            />
          </FormControl>
          
          <IconButton onClick={handleClick} >
          <Avatar src="/broken-image.jpg" />
          </IconButton>
        
          <Menu
          className={classes.menu}
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#c52aef",
    width: "100vw",
    flexGrow: 1,
  },
  menuButton: {
    color: "white",
  },
  titleText: {
    marginLeft: theme.spacing(2),
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    flexGrow: 1,
  },
  FormControl: {
   [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
   },
   width: theme.spacing(45),
   marginRight: theme.spacing(25),
    color: "white",
    backgroundColor: "rgba(94, 91, 90, 0.36)",
    borderRadius: "5px",
  
  },
  Input: {
    marginLeft: theme.spacing(2),
  },
  menu : {
   marginTop: theme.spacing(5),
  },
  shift: {
   width: `calc(100% - ${240}px)`,
   marginLeft: '240px',
   transition: theme.transitions.create(['margin', 'width'], {
     easing: theme.transitions.easing.easeOut,
     duration: theme.transitions.duration.enteringScreen,
   }),
 }
}));
