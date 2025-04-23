import React from 'react';
import Qtrat from '../../assests/images/Qtarat.jpeg';
import buildsmart from '../../assests/images/Buildsmart.png';
import HealPoint from '../../assests/images/HealPoint.png';
import html5 from '../../assests/images/html5.png';
import css3 from '../../assests/images/css3.png';
import DiceWave from '../../assests/images/DiceWaveLogo.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: 'Qtrat Ecommerce', link: 'https://github.com/omarmsh02/Qtrat--Ecommerce', image: Qtrat, description: 'Ecommerce platform for buying and selling products.' },
    { name: 'Buildsmart', link: 'https://github.com/A-Karaki02/university_project', image: buildsmart, description: 'Smart home automation system.' },
    { name: 'Heal Point', link: 'https://github.com/omarmsh02/Heal-Point', image: HealPoint, description: 'Healthcare management app.' },
    { name: 'HTML Project', link: 'https://github.com/omarmsh02/test-1st-week', image: html5, description: 'Basic HTML project.' },
    { name: 'DiceWave', link: 'https://github.com/omarmsh02/DiceWave', image: DiceWave, description: 'Dice game application.' },
    { name: 'CSS Project', link: 'https://github.com/omarmsh02/test_2nd_week', image: css3, description: 'Styling with CSS.' },
  ];

  return (
    <section className="container">
      <h4>Projects</h4>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="card">
                <img src={project.image} alt={project.name} />
                <h4><b>{project.name}</b></h4>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

