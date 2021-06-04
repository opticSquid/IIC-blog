import logo1 from "../Images/IICBLOGLOGOLIGHT.png";
import logo2 from "../Images/iic-blog-1.png";
import { useMediaQuery } from "@material-ui/core";
import "./LandingArt.css";
import { Data } from "./DataArray";
import facebook from "../Images/New folder/facebook_g.png";
import insta from "../Images/New folder/insta_g.png";
import linkedin from "../Images/New folder/linkedin_g.png";
import twitter from "../Images/New folder/twitter_g.png";
import utube from "../Images/New folder/utube_g.png";
import facebook1 from "../Images/New folder/facebook.png";
import insta1 from "../Images/New folder/insta.png";
import linkedin1 from "../Images/New folder/linkedin.png";
import twitter1 from "../Images/New folder/twitter_r.png";
import utube1 from "../Images/New folder/utube.png";

const HomePage = () => {
  const mobile = useMediaQuery("(max-width:760px)");
  console.log(mobile);
  const randomArticleIndex = Math.floor(Math.random() * Data.length);
  const currentDate = new Date();
  const trimString = (s, len) => {
    if (s.length > 200) {
      return s.substring(0, len) + " ...";
    } else {
      return s;
    }
  };
  const body = trimString(Data[randomArticleIndex].Body, 200);
  const getMonthName = (MnthIndex) => {
    //An array containing the name of each month.
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[MnthIndex];
  };
  return (
    <div className="main">
      {!mobile && (
        <img
          className="background"
        //   https://source.unsplash.com/AHCmAX0k_J4/900x400
          src={`${Data[randomArticleIndex].BannerURL}/900x400`}
          alt="back Ing"
        ></img>
      )}
      <div className="navbar">
        <img
          className="logo"
          src={mobile ? logo2 : logo1}
          style={mobile ? { transform: "scale(0.4)" } : null}
          alt="default Img"
        ></img>
        <div className="socialMediaL">
          <a
            href="https://www.facebook.com/iictmsl/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mobile ? facebook1 : facebook}
              width="20px"
              height="20px"
              alt="facebook"
            ></img>
          </a>
          <a
            href="https://twitter.com/iictmsl"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mobile ? twitter1 : twitter}
              width="20px"
              height="20px"
              alt="twitter"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/iictmsl/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mobile ? insta1 : insta}
              width="20px"
              height="20px"
              alt="insta"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/company/iictmsl/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mobile ? linkedin1 : linkedin}
              width="20px"
              height="20px"
              alt="linkedin"
            ></img>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <img
              src={mobile ? utube1 : utube}
              width="20px"
              height="20px"
              alt="facebook"
            ></img>
          </a>
        </div>
      </div>
      <div className="container">
      {/* https://source.unsplash.com/AHCmAX0k_J4/480x300 */}
        <img
          className="poster"
          src={`${Data[randomArticleIndex].BannerURL}/480x300`}
          alt="default"
          viewBox="0 0 100 100"
        ></img>
        <div className="data">
          <p className="type">{Data[randomArticleIndex].Tags}</p>
          <p className="title">{Data[randomArticleIndex].Title}</p>
          <p className="info" dangerouslySetInnerHTML={{__html:body}} />
          <p className="author">{Data[randomArticleIndex].Author}</p>
          <p className="date">
            {getMonthName(currentDate.getMonth())}&nbsp;
            {currentDate.getDate()},{currentDate.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
