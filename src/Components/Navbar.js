// import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logo from "../Images/IIClogo2.png";
import "./About.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const drawerWidth = 240;
export default function Navbar() {
  const classes = useStyles();
  // Returns false for mobile devicex
  const mediaQuery = useMediaQuery("(min-width:600px)");
  // const [DrawerOpen, setDrawerOpen] = useState(false);
  // const HandleOpen = () => {
  //   setDrawerOpen(true);
  // };
  // const HandleClose = () => {
  //   setDrawerOpen(false);
  // };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <Hidden smUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={HandleOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={Logo}
              alt="IIC - Blog logo"
              className={mediaQuery ? classes.logoImage : classes.logoImage_M}
            />
          </Link>
          <Typography
            variant={mediaQuery ? "h4" : "h6"}
            className={classes.title}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={classes.title}
            >
              Blog
            </Link>
          </Typography>

          {/* <Hidden smDown>
            <Typography
              variant={mediaQuery ? "h6" : "subtitle2"}
              className={classes.otherLinks}
            >
              <a href="/about" className="about_us">About Us</a>
            </Typography>
          </Hidden> */}
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="persistent"
        className={classes.drawer}
        anchor="left"
        open={DrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={HandleClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemText><a href="/about" className="mobile_about_us">About Us</a></ListItemText>
          </ListItem>
        </List>
      </Drawer> */}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoImage: {
    objectFit: "cover",
    height: theme.spacing(10),
  },
  logoImage_M: {
    objectFit: "cover",
    height: theme.spacing(5),
  },
  title: {
    // flexGrow: 1,
    // paddingTop: "1%",
    color: "#2274A5",
  },
  otherLinks: {
    color: grey[600],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));
