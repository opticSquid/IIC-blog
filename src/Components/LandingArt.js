import logo1 from "../Images/IICBLOGLOGOLIGHT.png"
import logo2 from "../Images/iic-blog-1.png"
import { useMediaQuery } from "@material-ui/core"
import "./LandingArt.css";

const HomePage = ()=> {
    const mobile = useMediaQuery("(max-width:760px)");
    console.log(mobile);
  return (
    <div className="main">
        { !mobile && <img className="background" src="https://source.unsplash.com/AHCmAX0k_J4/900x400" alt="back Ing"></img>}
        <div className="navbar">
            <img className="logo" src={mobile ? logo2 : logo1} style={mobile ? { transform: "scale(0.6)" } : null} alt="default Img"></img>
        </div>
        <div className="container">
            <img className="poster" src="https://source.unsplash.com/AHCmAX0k_J4/480x300" alt="default" viewBox="0 0 100 100"></img>
            <div className="data">
                <p className="type">TECHNOLOGY</p>
                <p className='title'>VR - How It can impact<br/>our lives</p>
                <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor, culpa repudiandae velit adipisci fugit accusamus hic suscipit vitae soluta dolores in quasi alias? Earum distinctio neque consequuntur voluptates alias.</p>
                <p className="author">Random Person</p>
                <p className="date">MAY 2, 2021</p>
            </div>
        </div>
    </div>
  );
};

export default HomePage;