import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/assets/images/shah.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Shahbaz Ahmed</strong>. I'm originally from india a passionate web developer.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I am a B.Tech student specializing in Computer Science and Engineering, with a passion for web development. My skills include JavaScript, HTML, CSS, and Node.js, which I use to create dynamic and responsive web applications. Additionally, I am familiar with Python, allowing me to explore various programming paradigms and broaden my development capabilities. I am eager to learn and take on new challenges in the tech world.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            As a B.Tech student in Computer Science and Engineering, I find great fulfillment in collaborating with a team to achieve shared objectives. This experience has been both rewarding and unique, reinforcing my passion for web development and cross-platform mobile development. I am excited to continue exploring innovative projects that challenge my skills and allow me to contribute to dynamic, collaborative environments.
              <div className="tagline2">
              I have become familiar with the following libraries and technologies given below.
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
