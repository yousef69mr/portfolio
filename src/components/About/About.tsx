import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import pythonIcon from "../../assets/python-5.svg";
import djangoIcon from "../../assets/django.svg";
import MUiIcon from "../../assets/material-ui.svg";
import reactIcon from "../../assets/react-icon.svg";
import CplusplusIcon from "../../assets/c.svg";
import postgresqlIcon from "../../assets/postgresql.svg";
import JavaIcon from "../../assets/java-4.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="aboutme">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>My name is Yousef Mostafa ElShemy, I am a junior react developer and ethical hacker with a great passion for programming. I am passionate about delivering solutions that add value to people's lives and at the same time challenge me. Improved my skills as a Front-End and Back-End developer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>I develop websites and applications using HTML, CSS,Restful Api,Django, and JavaScript. I am familiar with developing layouts that provide me. I'm always improving myself with every project they put in my hands.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>I am a dedicated person who chases to make his dreams come true, hardworking and results oriented, I always seek to achieve my best version.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={djangoIcon} alt="Django" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={MUiIcon} alt="Material UI" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}> 
            <img src={pythonIcon} alt="Python" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}> 
            <img src={postgresqlIcon} alt="Postgresql" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}> 
            <img src={CplusplusIcon} alt="C++" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
            <img src={JavaIcon} alt="Java" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="profile" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
