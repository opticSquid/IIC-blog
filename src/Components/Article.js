import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Data } from "./DataArray";
import "./Article.css";
import { grey } from "@material-ui/core/colors";
function Article() {
  const { title } = useParams();
  const filter = (article) => {
    return article.Title === title;
  };
  const article = () => {
    let toWrite = Data.filter(filter);
    return toWrite[0];
  };
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" className="Articletitle">
            {article().Title}
          </Typography>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Typography variant="body1" className={classes.author}>
            - {article().Author}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.body}>
          {/* Setting inner HTML treating article.Body as a HTML document. */}
          <Typography variant="subtitle2" dangerouslySetInnerHTML={{__html:article().Body}} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Article;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  author: {
    color: grey[500],
  },
  body: {
    textAlign: "justify",
  },
}));
