import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <FaFacebookF/> </a>
        <a href="https://twitter.com"> <IoLogoTwitter/> </a>
        <a href="https://instagram.com"> <FiInstagram/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; some LOGO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer