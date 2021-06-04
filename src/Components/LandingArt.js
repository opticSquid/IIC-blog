import logo1 from "../Images/IICBLOGLOGOLIGHT.png";
import logo2 from "../Images/iic-blog-1.png";
import { useMediaQuery } from "@material-ui/core";
import "./LandingArt.css";

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
  return (
    <div className="main">
      {!mobile && (
        <img
          className="background"
          src="https://source.unsplash.com/AHCmAX0k_J4/900x400"
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
        <img
          className="poster"
          src="https://source.unsplash.com/AHCmAX0k_J4/480x300"
          alt="default"
          viewBox="0 0 100 100"
        ></img>
        <div className="data">
          <p className="type">TECHNOLOGY</p>
          <p className="title">
            VR - How It can impact
            <br />
            our lives
          </p>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dolor, culpa repudiandae velit adipisci fugit accusamus hic suscipit
            vitae soluta dolores in quasi alias? Earum distinctio neque
            consequuntur voluptates alias.
          </p>
          <p className="author">Random Person</p>
          <p className="date">MAY 2, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
