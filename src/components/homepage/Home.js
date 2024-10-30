import React from "react";
import '../../styles/homepageStyle/home.css';
import Tife from "../../components/homepage/assets/tife-removebg.png";
import Logo from "../../components/homepage/assets/tifelogo.png";
import { RiScrollToBottomFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <img src={Logo} alt="logo" className="navbar-logo" />
        <button className="work-button">
          Let's Work Together
        </button>
      </nav>
      <div className="image-container">
        <img src={Tife} alt="Placeholder" className="centered-image animate-image" />
        <div className="overlay-text">
          Wedding Photographer
        </div>
      </div>
      <div className="scroll-down-container">
        <RiScrollToBottomFill className="scroll-icon" />
        <span className="scroll-text">Scroll Down</span>
      </div>
    </div>
  );
};

export default Home;
