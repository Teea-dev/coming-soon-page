import "./App.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import logo from "./assets/image/logo.png";
import ProgressBar from "./ProgressBar";

function App() {
  return (
    <>
      <div className="bgDiv">
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="form">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h3>
            <span>
              The Most Fantastic Thing That Could Ever Happen To You Is About To
              Happen
            </span>
          </h3>
          <div className="input-container">
            <input
              type="email"
              placeholder="Type Your Email"
              className="email-input"
            />
            <button type="submit" className="submit-button">
              <FaArrowRight className="arrow-icon" fill="purple" />{" "}
              {/* Arrow icon from react-icons/fa */}
            </button>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/">
              <FaFacebookF className="icons" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter className="icons" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="icons" />
            </a>
          </div>

          <div className="contact">
            <h3>Contact Us</h3>
          </div>
        </div>

        <div className="coming-soon">
          <h1>COMING SOON</h1>
          <div className="blur-container">
            <ProgressBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
