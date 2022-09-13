import React from "react";
import { BsCodeSquare } from "react-icons/bs";
import { FiGithub, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const MiniProjectsSection = () => {
  return (
    <section className="section mini-projects-section">
      <div className="container">
        <div className="text-center">
          <h3 className="heading mb-7">Other Noteworthy Projects</h3>
        </div>
        <div className="mini-projects__inner">
          <div className="item">
            <div className="head">
              <div className="icon">
                <BsCodeSquare />
              </div>
              <div className="links">
                <a
                  href="https://rahul-3-real.github.io/colorness/index.html"
                  target="_blank"
                >
                  <FiLink />
                </a>
                <a
                  href="https://github.com/rahul-3-real/colorness"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="body">
              <h5>Colourness</h5>
              <p>
                A personal project created using chroma.js is a color palette
                where user can generate a color scheme, save it and update it.
                The color will be saved in local storage from were user can use
                it when needed.
              </p>
            </div>
            <div className="footer">
              <div className="tags">
                <span>JavaScript</span>
                <span>Chroma Js</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <div className="icon">
                <BsCodeSquare />
              </div>
              <div className="links">
                <a
                  href="https://github.com/rahul-3-real/react-music-player"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="body">
              <h5>Music Player</h5>
              <p>
                A Music player web application created using React. It is a
                personal project created for fun. It includes all the basic
                functionalities like Play, Pause, Skip Next, Skip Previous.
              </p>
            </div>
            <div className="footer">
              <div className="tags">
                <span>React</span>
                <span>Scss</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <div className="icon">
                <BsCodeSquare />
              </div>
              <div className="links">
                <a
                  href="https://github.com/rahul-3-real/expense-tracker"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="body">
              <h5>Expense Tracker</h5>
              <p>
                A React JS project created while learning react. It tracks all
                the expenses recorded and filter them by year. User can view,
                add, edit expenses and it is stored in local storage.
              </p>
            </div>
            <div className="footer">
              <div className="tags">
                <span>React</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <div className="icon">
                <BsCodeSquare />
              </div>
              <div className="links">
                <a
                  href="https://rahul-3-real.github.io/pexels-api/"
                  target="_blank"
                >
                  <FiLink />
                </a>
                <a
                  href="https://github.com/rahul-3-real/pexels-api"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="body">
              <h5>Pexels API</h5>
              <p>
                This is a personal project created while learning about API ans
                JavaScript Async Await. It is created using Pexels API where
                user can search images and download them in full size.
              </p>
            </div>
            <div className="footer">
              <div className="tags">
                <span>JavaScript</span>
                <span>Pexels Api</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <div className="icon">
                <BsCodeSquare />
              </div>
              <div className="links">
                <a
                  href="https://rahul-3-real.github.io/portfolio-v2/"
                  target="_blank"
                >
                  <FiLink />
                </a>
                <a
                  href="https://github.com/rahul-3-real/portfolio-v2"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="body">
              <h5>Portfolio V2</h5>
              <p>
                This is the Second iteration of my personl portfolio created in
                2019. It is designed and developed with Bootstrap, HTML, CSS,
                JavaScript and hosted on Github Pages.
              </p>
            </div>
            <div className="footer">
              <div className="tags">
                <span>Bootstrap</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <div className="icon">
                <BsCodeSquare />
              </div>
              <div className="links">
                <a
                  href="https://rahul-3-real.github.io/beatmaker/"
                  target="_blank"
                >
                  <FiLink />
                </a>
                <a
                  href="https://github.com/rahul-3-real/beatmaker"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="body">
              <h5>Beatmaker</h5>
              <p>
                It is a DAW like application created in javascript where user
                can make beats using sounds with kick, clap, hi-hats, snare and
                can change the tempo of the beat, muting single or multiple
                sounds.
              </p>
            </div>
            <div className="footer">
              <div className="tags">
                <span>JavaScript</span>
                <span>Css</span>
                <span>Html</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-7">
          <Link to="/work" className="button">
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniProjectsSection;
