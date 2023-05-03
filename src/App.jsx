import React, { useEffect, useState,useRef } from "react";
import "./App.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import logo from "./assets/image/logo.png";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

function App() {
  // const [display, setDisplay] = useState(false);
  // const [isMobileView, setIsMobileView] = useState(false);
    const bgRef = useRef(null) ;
    const comingSoonRef = useRef(null) ;
    const formRef = useRef(null) ;
  const handleClick = () => {
    formRef.current.classList.add("hide-form")
    bgRef.current.classList.add("translate");
    comingSoonRef.current.classList.add("translate");

  };



  
  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobileView(window.innerWidth <= 768);
  //   }

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, [display]);

  const word = "COMING SOON";
  const wordArray = word.split("");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * 0.1,
      },
    },
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };
  return (
    <>
      <div className="bgDiv" ref={bgRef}>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className={"form"} ref={formRef}>
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
            <button
              type="submit"
              onClick={handleClick}
              className="submit-button"
            >
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
       
          <div className="coming-soon" ref={comingSoonRef} >
            <motion.div
              className="word"
              variants={containerVariants}
              transition={{ delay: 0.5, duration: 1 }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {wordArray.map((letter, index) => (
                <motion.span key={index} variants={childVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* <h1>COMING SOON</h1> */}
            <div className="blur-container">
              <ProgressBar />
            </div>
          </div>
        
      </div>
    </>
  );
}

export default App;
