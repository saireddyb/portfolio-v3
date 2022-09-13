import React from "react";
import {
  figma,
  photoshop,
  html,
  css,
  javascript,
  python,
  php,
  bootstrap,
  django,
  react,
  docker,
} from "../../constants/images";

const InfoSection = () => {
  return (
    <section className="section info-section">
      <div className="container">
        {/* My Story */}
        <div className="info__inner">
          <div className="title">
            <h4>My Story</h4>
          </div>
          <div className="text">
            <p>
              Hello, I am <b>Rahul Yadav</b>, <br /> I am a self-taught
              developer who likes to create, design and develop websites. I have
              2 years of work experience in creating and developing websites.
            </p>
            <p>
              I started <b>website designing in 2019</b>. I created my first
              website, MeeN'Music where users could listen to, download, and
              read the song's lyrics. It was not the best but also not bad, It
              was working fine until it got copyright issues due to the lyrics.
              After that I completed my Web design + development course from
              Syntax World (Delhi) and moved to my home town Thane to continue
              my further studies, I was studying Commerce, but I didn't like it
              so I dropped out of college. My interest was in programming and
              design, I started learning by myself. I created some freelance
              websites for local businesses and a lot of personal projects. I
              worked at a couple of companies, I created a lot of websites for
              them and I learned some things there but most of my learning was
              from the internet.
            </p>
            <p>
              I like to work alone but working with like-minded people is also
              fun. I am a music enthusiast, If there is anything that I like the
              most is listening to songs. Sometimes I try to make music (which I
              am bad at) but still I try, I draw, I write and I watch a lot of
              anime.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="info__inner">
          <div className="title">
            <h4>Experience</h4>
          </div>
          <div className="text">
            <div className="exp-point">
              <h5>
                <b>
                  Parasight Solutions <i>Web Developer</i>
                </b>
                <span>Jan 2021 - Present</span>
              </h5>
              <p>
                My main role in this company is to create websites. I do all the
                designing work, it may be websites, dashboards, emailers or
                anything in between. I also do all the graphic related work and
                integrate the design I created with laravel or some other
                framework.
              </p>
            </div>
            <div className="exp-point">
              <h5>
                <b>
                  Adenhanseo Online Solution <i>Web Developer</i>
                </b>
                <span>Feb 2020 - May 2020</span>
              </h5>
              <p>
                In this company I developed and maintained the code for In-house
                and client websites primarily using Html, Css, JavaScript.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="info__inner">
          <div className="title">
            <h4>Skills</h4>
          </div>
          <div className="text">
            <div className="skill-point">
              <h5>Design</h5>
              <div className="icons">
                <img src={figma} alt="Figma" title="Figma" />
                <img src={photoshop} alt="Photoshop" title="Photoshop" />
              </div>
            </div>
            <div className="skill-point">
              <h5>Language</h5>
              <div className="icons">
                <img src={html} alt="HTML" title="HTML" />
                <img src={css} alt="CSS" title="CSS" />
                <img src={javascript} alt="JavaScript" title="JavaScript" />
                <img src={python} alt="Python" title="Python" />
                <img src={php} alt="Php" title="Php" />
              </div>
            </div>
            <div className="skill-point">
              <h5>Frameworks / Libraries</h5>
              <div className="icons">
                <img src={django} alt="Django" title="Django" />
                <img src={react} alt="React" title="React" />
                <img src={bootstrap} alt="Bootstrap" title="Bootstrap" />
              </div>
            </div>
            <div className="skill-point">
              <h5>Deployment</h5>
              <div className="icons">
                <img src={docker} alt="Docker" title="Docker" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
