import React from "react";
import { motion } from "framer-motion";
import { heroImage } from "../../constants/images";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="image">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="image__inner"
        >
          <img src={heroImage} alt="Hero Background" />
        </motion.div>
      </div>
      <div className="text">
        <h2>
          <motion.span
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Creative
          </motion.span>
          <motion.span
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            Designer <i>&</i> Developer.
          </motion.span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
