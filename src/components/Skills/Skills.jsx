import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#ff5733' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#0277bd' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#53c1de' },
    { name: 'Laravel', icon: 'fa-brands fa-laravel', color: '#f05340' },
    { name: 'PHP', icon: 'fa-brands fa-php', color: '#858eb8' },
    { name: 'WordPress', icon: 'fa-brands fa-wordpress', color: '#0073aa' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
    { name: 'C++', icon: 'fa-solid fa-code', color: '#00599C' },
    { name: 'MySQL', icon: 'fa-solid fa-database', color: '#00758F' },
    { name: 'NoSQL', icon: 'fa-solid fa-database', color: '#FFA500' },
    { name: 'Git', icon: 'fa-brands fa-git', color: '#F05032' },
  ];

  return (
    <section className="container">
      <h4>Skills</h4>
      <ul className="skill_icon">
        {skills.map((skill, index) => (
          <div key={index}>
            <li>
              <i className={skill.icon} style={{ color: skill.color, fontSize: '3rem' }}></i>
            </li>
            <p>{skill.name}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Skills;