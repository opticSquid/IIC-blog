import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logo from "../Images/Logo1.png";

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img src={Logo} alt="IIC - Blog logo" className={classes.logoImage} />
          <Typography variant="h6" color="inherit">
            IIC - Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  logoImage: {
    objectFit: "cover",
    height: theme.spacing(10),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
