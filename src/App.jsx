import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import PageNotSection from "./pages/404/PageNotFound";
import "./assets/styles/App.scss";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} exact />
          <Route path="/work" element={<Work />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="*" element={<PageNotSection />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
