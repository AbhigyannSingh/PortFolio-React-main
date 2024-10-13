import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b5mc9aj', 'template_gynz5bn', form.current, 'gOeU4dUSTmYTJXqXI')
      .then(
        () => {
          alert('SUCCESS! Your message has been sent.');
          form.current.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message, please try again later.');
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>You can contact me through the following details.</p>
            <div className="icons">
              <div className="row">
                <Link to='/contact'>
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Abhigyan Pratap Singh</div>
                  </div>
                </Link>
              </div>
              <div className="row">
                <a href="https://maps.app.goo.gl/i8wvtbqkkizoTN5r6" target="_blank" rel="noreferrer">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Lucknow, Uttar Pradesh</div>
                  </div>
                </a>
              </div>
              <div className="row">
                <a href="mailto:pratapabhi137@gmail.com">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">pratapabhi137@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="socialsite">
              <ul className="sci">
                <li><a href="tel:+917897890651"><i className="fas fa-phone"></i></a></li>
                <li><a href="https://github.com/AbhigyannSingh" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/abhigyan-pratap-singh-086588212/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input type="text" name="from_name" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" name="from_email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea name="message" cols="30" rows="10" placeholder="Message.." required></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

