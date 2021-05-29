import { Grid, makeStyles, Typography } from "@material-ui/core";
import LandingArt from "../Images/Icons/Wfh9";
import "./Homepage.css";
function HomePage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.content}>
      <Grid item xs={6}>
        <Typography variant="h3" Class="MainTitle">
          Where ideas
        </Typography>
        <Typography variant="h3" Class="MainTitle">
          come
        </Typography>
        <Typography variant="h5" class="subtitle">
          ~ To life
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <LandingArt className={classes.art} />
      </Grid>
    </Grid>
  );
}

export default HomePage;

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    height: "60vh",
    backgroundImage: "linear-gradient(75deg, #ffffff 60%, #ff0057 40%)",
  },
  art: {
    width: "100%",
  },
}));
