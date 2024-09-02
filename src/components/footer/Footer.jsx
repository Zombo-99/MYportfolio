import React from 'react'
import './footer.css'
import {BsFacebook, BsGitlab, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>BOUHADJEB Mohammed</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/mohamed-bouhdjab-17283a187/"><BsLinkedin/></a>
          <a href="https://github.com/Zombo-99"><BsGithub/></a>
          <a href="https://www.instagram.com/moh_zmb5_/"><BsInstagram/></a>
          <a href="https://web.facebook.com/zombo.mohamed"><BsFacebook/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Mohamed BOUHADJEB. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer