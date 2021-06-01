import { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Box,
  Grow,
} from "@material-ui/core";
//import { grey } from "@material-ui/core/colors";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";
import { Data } from "./DataArray";
function Articles() {
  const classes = useStyles();
  // False for mobile phones
  const mediaQuery = useMediaQuery("(min-width:600px)");
  const [Animate] = useState(true);
  return (
    <Grow in={Animate} timeout={2000}>
      <Grid container>
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
                style={{ textDecoration: "none", display: "inherit" }}
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
    </Grow>
  );
}

export default Articles;

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  title_M: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  root: {
    margin: theme.spacing(2),
  },
  root_M: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  articlTitle: {
    maxHeight: theme.spacing(6),
    overflow: "hidden",
    color: theme.palette.info.main,
  },
  articlTitle_M: {
    maxHeight: theme.spacing(10),
    overflow: "hidden",
    color: theme.palette.info.main,
  },
  article: {
    maxHeight: theme.spacing(6),
    overflow: "hidden",
  },
  article_M: {
    maxHeight: theme.spacing(6),
    overflow: "hidden",
  },
  desc: {
    // color: "#ff8fab",
    // color: grey["A200"],
    color: "#56351E",
  },
}));
