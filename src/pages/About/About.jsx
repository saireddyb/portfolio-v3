import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";
import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <InfoSection />
    </motion.div>
  );
};

export default About;
