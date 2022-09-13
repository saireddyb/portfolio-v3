import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiCodepen,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section footer">
      <div className="container">
        <div className="text-center">
          <h3 className="heading mb-7">Let's Connect Digitally</h3>
          <p>
            Have a project in mind? <br />
            Feel free to contact me! <a href="#">Let's Talk</a>
          </p>
          <div className="social mt-5">
            <a href="https://www.linkedin.com/in/rahul-3-real/" target="_blank">
              <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/rahul_3_real/" target="_blank">
              <FiInstagram />
            </a>
            <a href="https://twitter.com/rahul_3_real" target="_blank">
              <FiTwitter />
            </a>
            <a href="https://github.com/rahul-3-real" target="_blank">
              <FiCodepen />
            </a>
            <a href="#" target="_blank">
              <FiGithub />
            </a>
          </div>
          <h6 className="mt-10">&copy; {year} Rahul Yadav</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
