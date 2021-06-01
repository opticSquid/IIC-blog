import {
  Paper,
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";
import { Data } from "./DataArray";
function Articles() {
  const classes = useStyles();
  // False for mobile phones
  const mediaQuery = useMediaQuery("(min-width:600px)");
  return (
    <Grid container >
      <Grid
        item
        xs={12}
        className={mediaQuery ? classes.title : classes.title_M}
      >
        <Typography variant="h4" style={{ display: "inline" }}>
          <strong>Articles</strong>
        </Typography>
        <ListAltIcon style={{ fontSize: 30, display: "inline" }} />
      </Grid>
      <Grid  container xs={12}   className={classes.wrapperGrid}  direction="row"
  justify="center"
  alignItems="center">
      {Data.map((article, idx) => {
        return (
          <Grid
            item
            xs={12}
            md={5}
            className={mediaQuery ? classes.root : classes.root_M}
            key={idx}
          >
            <Link
              to={`/articles/${article.Title}`}
              style={{ textDecoration: "none", textAlign: "center", display: "inherit" }}
            >
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h4"
                  className={
                    mediaQuery ? classes.articlTitle : classes.articlTitle_M
                  }
                >
                  {article.Title} 
                  
                </Typography>
                <Typography variant="body1" className={classes.author}>
                    - {article.Author}
                  </Typography>
                <Box
                  component="div"
                  className={mediaQuery ? classes.article : classes.article_M}
                >
                  <Typography variant="body1" className={classes.desc}>
                    {article.Body}
                  </Typography>
                </Box>
              </Paper>
            </Link>
          </Grid>
        );
      })}
      </Grid>
    </Grid>
  );
}

export default Articles;

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: grey[500],
    textAlign: "center"
  },
  title_M: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: grey[500],
    textAlign: "center"
  },
  root: {
    margin: theme.spacing(2),
    // border : "1px solid red",
  },
  root_M: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(6),
    paddingTop : theme.spacing(13),
    paddingBottom: theme.spacing(13),
  },
  articlTitle: {
    maxHeight: theme.spacing(6),
    overflow: "hidden",
    color: theme.palette.secondary.main,
    // marginBottom : theme.spacing(1)
  },
  articlTitle_M: {
    maxHeight: theme.spacing(10),
    overflow: "hidden",
    color: theme.palette.secondary.main,
    marginBottom : theme.spacing(1)
  },
  article: {
    maxHeight: theme.spacing(6),
    overflow: "hidden",
  },
  article_M: {
    maxHeight: theme.spacing(6),
    overflow: "hidden",
  },
  author : {
    marginBottom : theme.spacing(3),
    color : theme.palette.secondary.light
  },
  desc: {
    // color: "#ff8fab",
    color: grey["A200"],
  },
  wrapperGrid : {
    // border : "2px solid green",
  }
}));
