import React from "react";
import "./About.css";
import Logo1 from "../Images/techno.png";
import Logo2 from "../Images/IIC.png";
import Logo3 from "../Images/facebook_profile_image.png";
import Soumalya from "../Images/Soumalya.jpg";
import Rohit from "../Images/Rohit.jpeg";
import Vikas from "../Images/Vikas.jpg";

function About() {
    return (
      <div className='main_about'>
        <h2 id='about'>
          About IIC Inspired by the objectives and vision of IIC, a MHRD
          initiative, we have established IIC TMSL which is the start-up support
          system of Techno Main Slatlake. This cell will be conducting various
          innovation and entrepreneurship related activities along with
          organizing periodic workshops, seminars and interactions with
          entrepreneurs and innovators. Students will get a chance to showcase
          their talents by participating in various events like Hackathons, idea
          competitions etc. Our motto is to support innovative ideas so well
          that it can evolve into start-ups.
        </h2>
        <div className='logos'>
          <img src={Logo1} alt='logo1'></img>
          <img src={Logo2} alt='logo2'></img>
          <img src={Logo3} alt='logo3'></img>
        </div>
        <h2 className='contributors_heading'>Contributors:</h2>
        <div className='contributors'>
          <div className='contributors_profile'>
            <div>
              <img id='rohit' src={Rohit} alt='pic1'></img>
            </div>
            <div>
              <h3 className='name'>Rohit</h3>
              <p className='position'>Front end Developer</p>
            </div>
          </div>
          <div className='contributors_profile'>
            <div>
              <img src={Soumalya} alt='pic2'></img>
            </div>
            <div>
              <h3 className='name'>Soumalya</h3>
              <p className='position'>Backend Developer and Database Admin</p>
            </div>
          </div>

          <div className='contributors_profile'>
            <div>
              <img src={Vikas} alt='pic3'></img>
            </div>
            <div>
              <h3 className='name'>Vikas</h3>
              <p className='position'>Front end Developer</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
