import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { tattooStudio, hungerJunction } from "../../constants/images";

const ProjectsSection = () => {
  return (
    <section className="section projects-section">
      <div className="container">
        <h3 className="heading mb-7">Some Things I've Built</h3>
        <div className="projects__inner">
          <div className="item">
            <div className="image">
              <img src={tattooStudio} alt="Suryawanshi Art Studio" />
            </div>
            <div className="text">
              <h5>
                <span>Tattoo</span> Art Studio
              </h5>
              <p>
                Suryawanshi Art Studio, this website is designed for the studio
                for showcasing all their work. It has a Portfolio page where
                users can see all the tattoos created, and they can book
                appointment online.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
              </div>
              <div className="icons">
                <a href="https://suryawanshiarttattoo.com/" target="_blank">
                  <FiLink />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={hungerJunction} alt="Hunger Junction" />
            </div>
            <div className="text">
              <h5>
                <span>Hunger</span> Junction
              </h5>
              <p>
                This website is a personal project. It was created for fun, the
                whole puropse for making this website was I had a wordpress
                website, I wanted to convert it into HTML Website with same
                functionality.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
              </div>
              <div className="icons">
                <a
                  href="https://rahul-3-real.github.io/hunger-junction-layout/"
                  target="_blank"
                >
                  <FiLink />
                </a>
                <a
                  href="https://github.com/rahul-3-real/hunger-junction-layout"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
