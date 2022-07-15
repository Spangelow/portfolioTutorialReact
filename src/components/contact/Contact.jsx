import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>some_email@gmail.com</h5>
            <a href="mailto:some_email@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Some Text Here</h5>
            <a href="https://m.me/ernest.achiever">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+49 174 548 66892</h5>
            <a href="https://api.whatsapp.com/send?phone+4917454866892">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email"  placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact