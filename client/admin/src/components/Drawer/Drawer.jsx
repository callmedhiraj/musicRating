import React from "react";
import {
  Drawer,
  makeStyles,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Container,
  ListItemText,
} from "@material-ui/core";
import { BsMusicNoteList } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function LeftDrawer(props) {
  const classes = useStyle();
  return (
    <Drawer
      className={classes.root}
      variant="persistent"
      open={props.openDrawer}
    >
      <div className={classes.paper}>
        <Container>
          <Toolbar className={classes.nameHolder}>
            <BsMusicNoteList style={{ color: "white" }} fontSize={45} />
          </Toolbar>
          <Divider variant="middle" />
          <List component="nav">
          <Link to='/dashboard/'>
            <ListItem button >
              
                <ListItemIcon>
                  <AiOutlineDashboard color="white" fontSize={25} />
                </ListItemIcon>
                <ListItemText style={{color : 'white'}} primary='Dashboard' />
            </ListItem>
            </Link>
            <Link to='/dashboard/addvideo'>
            <ListItem button >
              <ListItemIcon>
                <AiOutlineDashboard color="white" fontSize={25} />
              </ListItemIcon>
              <ListItemText style={{color : 'white'}} primary='Add Videos' />
          </ListItem>
          </Link>
          <ListItem button >
              
              <ListItemIcon>
                <AiOutlineDashboard color="white" fontSize={25} />
              </ListItemIcon>
              <ListItemText style={{color : 'white'}} primary='Dashboard' />
          </ListItem>
          </List>
        </Container>
      </div>
    </Drawer>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    width: 240,
  },
  paper: {
    width: "241px",
    height: "100vh",
    backgroundColor: "#c52aef",
  },
  avatarHolder: {
    justifyContent: "center",
  },
  nameHolder: {
    justifyContent: "center",
    color: "white",
  },
  avatar: {
    marginTop: theme.spacing(3),
    width: "75px",
    height: "75px",
  },
}));
