import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import workupIcon from "../../assets/upwork.png";
import facebookIcon from "../../assets/facebook.png";


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Y</span>
        <span>Shemy</span>
      </a>
      <div>
        <p>
        This website was made with <img src={reactIcon} alt="React" /> 
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/yousef-mostafa-84a8a1194/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/yousef69mr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/yousefshemy69/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://www.upwork.com/freelancers/~0118fade8e2dc7c6e0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={workupIcon} alt="UpWork" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006443172269"
          target="_blank"
          rel="noreferrer"
          
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </div>
    </Container>
  )
}
