import React from 'react';
import mainImage from '../../assests/images/Main_image.png';
import resumePDF from '../../assests/pdfs/Omar_AL-Shahed-FULL-STACK_DEVELOPER_Resume.pdf';
import './MainSection.css';

const Home = () => {
  return (
    <main className="container">
      <section className="Main">
        <div className="paragraphM">
          <h1>Hi, I'm Omar AL-Shahed</h1>
          <h6>Coding Tomorrow’s Innovations</h6>
          <h6>Full-Stack Developer</h6>
          <a href={resumePDF} download="Omar_Alshahed_Resume.pdf">
            <button id="button1" value="resume">Download Resume</button>
          </a>
        </div>
        <img src={mainImage} alt="BackGround.png" />
      </section>
    </main>
  );
};

export default Home;