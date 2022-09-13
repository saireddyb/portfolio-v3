import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import MiniProjectsSection from "./MiniProjectsSection";

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <MiniProjectsSection />
    </motion.div>
  );
};

export default Home;
