import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";
import { Link } from "react-router-dom";

const PageNotSection = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <section className="section not-found-section">
        <div className="container">
          <div className="not-found__inner">
            <h1>
              4<span>0</span>4
            </h1>
            <div className="text">
              <h3>Sorry !</h3>
              <h4>The page You're Looking For Was Not Found</h4>
              <Link className="button" to="/">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PageNotSection;
