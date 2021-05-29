import { Paper, Grid, Typography, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
function Trending() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} style={{ marginTop: "1%", marginLeft: "1%" }}>
        <Typography variant="h4" style={{ color: grey[700] }}>
          <strong>Trending</strong>
          <TrendingUpIcon style={{ color: grey[700], fontSize: 30 }} />
        </Typography>
      </Grid>
      <Grid item xs={5} className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3">Article Heading</Typography>
          <p className={classes.article}>
            <Typography variant="body1" style={{ color: grey[500] }}>
              "Begin today!" That's all the note said. There was no indication
              from where it came or who may have written it. Had it been meant
              for someone else? Meghan looked around the room, but nobody made
              eye contact back. For a brief moment, she thought it might be a
              message for her to follow her dreams, but ultimately decided it
              was easier to ignore it as she crumpled it up and threw it away.
            </Typography>
          </p>
        </Paper>
      </Grid>
      <Grid item xs={5} className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3">Article Heading</Typography>
          <p className={classes.article}>
            <Typography variant="body1" style={{ color: grey[500] }}>
              "Begin today!" That's all the note said. There was no indication
              from where it came or who may have written it. Had it been meant
              for someone else? Meghan looked around the room, but nobody made
              eye contact back. For a brief moment, she thought it might be a
              message for her to follow her dreams, but ultimately decided it
              was easier to ignore it as she crumpled it up and threw it away.
              for someone else? Meghan looked around the room, but nobody made
              eye contact back. For a brief moment, she thought it might be a
              message for her to follow her dreams, but ultimately decided it
              was easier to ignore it as she crumpled it up and threw it away.
            </Typography>
          </p>
        </Paper>
      </Grid>
      <Grid item xs={5} className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3">Article Heading</Typography>
          <p className={classes.article}>
            <Typography variant="body1" style={{ color: grey[500] }}>
              "Begin today!" That's all the note said. There was no indication
              from where it came or who may have written it. Had it been meant
              for someone else? Meghan looked around the room, but nobody made
              eye contact back. For a brief moment, she thought it might be a
              message for her to follow her dreams, but ultimately decided it
              was easier to ignore it as she crumpled it up and threw it away.
            </Typography>
          </p>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Trending;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2%",
    marginLeft: "5%",
  },
  paper: {
    padding: "2%",
  },
  article: {
    maxHeight: "10vh",
    overflow: "hidden",
  },
}));
