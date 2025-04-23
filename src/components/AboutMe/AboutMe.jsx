import React from 'react';
import myPic from '../../assests/images/me.jpeg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="container">
      <h4>About Me</h4>
      <div className="about">
        <div>
          <p id="aboutp">
            Hey there! I’m Omar Alshahed, a 22-year-old computer science graduate from the University of Jordan, proudly representing the vibrant city of Amman. Technology isn’t just my field of study; it’s my passion! Currently, I’m thriving in my internship at Orange Coding Academy, where I’m not just learning programming, but truly immersing myself in the art of creating innovative software solutions. I love the thrill of tackling challenges and transforming ideas into reality. With a relentless curiosity and drive to push the envelope, I’m excited about the endless possibilities ahead and can’t wait to make my mark in the tech world. Let’s innovate and inspire together!
          </p>
        </div>
        <img id="mypic" src={myPic} alt="Omar'sPic.jpeg" />
      </div>
      <hr />
      <form className="contact-info">
        <div>
          <label htmlFor="Phone">Phone:</label>
          <span>+962798727686</span>
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <span>omar.mshahed@gmail.com</span>
        </div>
        <div>
          <label htmlFor="Website">Website:</label>
          <span>
            <a href="https://github.com/omarmsh02" target="_blank" rel="noopener noreferrer">
              https://github.com/omarmsh02
            </a>
          </span>
        </div>
      </form>
    </section>
  );
};

export default AboutMe;