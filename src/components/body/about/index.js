import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <a
            className="resume-a"
            href="https://docs.google.com/document/d/1UUhr5D56ZKUglvwFYdQo7LgeP1iErpv6WtEMUyRdLJ4/edit?usp=sharing"
          >
            <span className="info-name">Weiyu (Nick) Chen</span>.<br />{" "}
          </a>
          Software Engineer. React Developer.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            className="picture"
            alt="coding"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
