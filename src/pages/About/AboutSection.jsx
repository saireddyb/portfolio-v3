import React from "react";
import { avatar } from "../../constants/images";

const AboutSection = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about__inner">
          <div className="text">
            <h1>
              I am <b>Rahul Yadav</b>
            </h1>
            <p>
              A <b>Frontend developer</b> based in Thane, MH.
            </p>
            <p>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>
            <p>
              I aim to create websites and applications where motion,
              interaction and design are perfectly integrated to form a unique
              experience.
            </p>
            <p>
              When I am not working on a project, I usually try to make{" "}
              <i>Music</i>
              or watch <i>Anime</i>.
            </p>
          </div>
          <div className="image">
            <div className="image__inner">
              <img src={avatar} alt="Portfolio Avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
