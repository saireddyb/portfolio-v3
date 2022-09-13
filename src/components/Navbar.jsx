import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { logo } from "../constants/images";
import { resume } from "../constants/files";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const handleClick = () => setNavToggle(!navToggle);

  return (
    <motion.div
      initial={{ y: "-100px", opacity: 0 }}
      animate={{ y: "0px", opacity: 1 }}
      transition={{ duration: 1 }}
      className="navbar"
    >
      <div className="container">
        <div className="d-flex align-center justify-between g-0">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <button className="navToggle" onClick={handleClick}>
            {navToggle ? <BsToggle2On /> : <BsToggle2Off />}
          </button>
          <ul className={navToggle ? "menu active" : "menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link
                to={resume}
                target="_blank"
                download="Rahul-Yadav-Portfolio.pdf"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
