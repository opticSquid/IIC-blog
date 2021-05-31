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
  console.log(article());
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <div className={classes.banner}>
          <Grid container
            direction="column"
            justify="center"
            alignItems="center" className={classes.tint}>
            <Typography variant="h4" className={classes.title}>
              {article().Title}
            </Typography>
          <Typography variant="body1" className={classes.author}>
            - {article().Author}
          </Typography>
          </Grid>
          
        </div>
        {/* <Grid item xs={12}>
          <Typography variant="h6" className="Articletitle">
            {article().Title}
          </Typography>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Typography variant="body1" className={classes.author}>
            - {article().Author}
          </Typography>
        </Grid> */}
        <Grid item xs={12} className={classes.body}>
          {/* Setting inner HTML treating article.Body as a HTML document. */}
          
          <Typography className={classes.content} variant="subtitle2" dangerouslySetInnerHTML={{__html:article().Body}} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Article;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    // padding: theme.spacing(1),
    // paddingLeft : theme.spacing(13),
    // paddingRight : theme.spacing(13),
  },
  author: {
    color: grey[400],
  },
  body: {
    textAlign: "justify",
  },
  banner:{
    width: "100%",
    height: "60vh",
    backgroundImage : "url('https://source.unsplash.com/random')",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    backgroundPosition : "center",
  },
  tint:{
    width: "100%",
    height: "100%",
    backgroundColor : "rgba(0,0,0,.7)",
    paddingLeft : theme.spacing(6),
    paddingRight : theme.spacing(6),
  },
  title:{
    fontFamily : "Montserrat ,sans-serif",
    color : grey[300],
    fontWeight : 500,
    textAlign : "center",
    textTransform: "capitalize"
    // color : "#fff",
  },
  content : {
    padding : theme.spacing(3),
    paddingLeft : theme.spacing(13),
    paddingRight : theme.spacing(13),
    fontFamily : "Montserrat ,sans-serif",
    fontSize : "1.2rem",
  }
}));
