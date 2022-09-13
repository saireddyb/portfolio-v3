import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
