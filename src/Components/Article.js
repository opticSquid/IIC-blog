import { useState } from "react";
import logo from "../Images/iic-blog-1.png"
import {
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Zoom,
} from "@material-ui/core";
import { useParams , Link } from "react-router-dom";
import { Data } from "./DataArray";
import "./Article.css";
import { grey } from "@material-ui/core/colors";

import facebook from "../Images/New folder/facebook.png";
import insta from "../Images/New folder/insta.png";
import linkedin from "../Images/New folder/linkedin.png";
import twitter from "../Images/New folder/twitter_r.png";
import utube from "../Images/New folder/utube.png";

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
  let bgURL = article()?.BannerURL;
  const mediaQuery = useMediaQuery("(min-width:600px)");
  const bannerStyle = {
    width: "100%",
    height: "60vh",
    backgroundImage: `url(${bgURL}/1600x900)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [Animate] = useState(true);
  return (
      <>
      <div className="navArticle">
            <Link to="/" >
                <img src={logo} className="articleLogo" alt="default text" style={{ transformOrigin: "left", transform: "scale(0.4)" }}></img>
            </Link>
            <div className="socialMediaA" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}>
                <a href="https://www.facebook.com/iictmsl/" target="_blank" rel="noreferrer">
                    <img src={facebook} width="20px" height="20px" alt="facebook"></img>
                </a>
                <a href="https://twitter.com/iictmsl" target="_blank" rel="noreferrer">
                    <img src={twitter} width="20px" height="20px" alt="twitter"></img>
                </a>
                <a href="https://www.instagram.com/iictmsl/" target="_blank" rel="noreferrer">
                    <img src={insta} width="20px" height="20px" alt="insta"></img>
                </a>
                <a href="https://www.linkedin.com/company/iictmsl/" target="_blank" rel="noreferrer">
                    <img src={linkedin} width="20px" height="20px" alt="linkedin"></img>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                    <img src={utube} width="20px" height="20px" alt="facebook"></img>
                </a>
            </div>
      </div>
    <Zoom in={Animate} timeout={1000}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <div style={bannerStyle} className={classes.banner}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={mediaQuery ? classes.tint : classes.tintM}
            >
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

            <Typography
              className={mediaQuery ? classes.content : classes.contentM}
              variant="subtitle2"
              dangerouslySetInnerHTML={{ __html: article().Body }}
            />
          </Grid>
        </Grid>
      </div>
    </Zoom>
    </>
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
  // banner:{
  //   width: "100%",
  //   height: "60vh",
  //    // backgroundImage : "url('https://source.unsplash.com/random')",
  //   //  backgroundImage : bgURL,
  //   backgroundRepeat : "no-repeat",
  //   backgroundSize : "cover",
  //   backgroundPosition : "center",
  // },
  tint: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.7)",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  tintM: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.7)",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  title: {
    fontFamily: "Montserrat ,sans-serif",
    color: grey[300],
    fontWeight: 500,
    textAlign: "center",
    textTransform: "capitalize",
    // color : "#fff",
  },
  content: {
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(13),
    paddingRight: theme.spacing(13),
    fontFamily: "Montserrat ,sans-serif",
    fontSize: "1.2rem",
    color: theme.palette.info.main,
  },
  contentM: {
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontFamily: "Montserrat ,sans-serif",
    fontSize: "1rem",
    color: theme.palette.info.main,
  },
}));
