import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="container">
      <h4>Contact Me</h4>
      <div className="inner_container">
        <form className="c_form">
          <div className="flex_row">
            <input type="text" name="name" placeholder="Name*" required />
            <input type="email" name="email" placeholder="Email*" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" rows="5" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="c_info">
          <h2>Omar AL-Shahed</h2>
          <p>Web Developer</p>
          <p>Phone: +962 798727686</p>
          <p>Email: omar.mshahed@gmail.com</p>
          <p>Website: https://github.com/omarmsh02</p>
          <div className="c_icons">
            <a href="https://github.com/omarmsh02" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github fa-2xl" style={{ color: '#000000' }}></i>
            </a>
            <a href="https://www.linkedin.com/in/omar-al-shahed-a18447307/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-2xl" style={{ color: '#000000' }}></i>
            </a>
            <a href="https://www.facebook.com/omar.shahed.9" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook fa-2xl" style={{ color: '#000000' }}></i>
            </a>
            <a href="https://www.instagram.com/omar_mutasem_/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram fa-2xl" style={{ color: '#000000' }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;