import React from 'react';
import './Css/projects.css';

import medical from './Images/medical.png';
import fault from './Images/FaultFinder.png';
import calendar from './Images/Calendar.png';
import tensor from './Images/TensorFlow.jpg';
import discord from './Images/DiscordBot.png';
import picture from './Images/Better.jpg';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className='images' src={imageSrc} alt={title} />
      </a>
      <div className='project-info'>
        <div className='project-title'>
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3><span style={{ color: '#FF004F' }}>{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id='Projects'>
      <h1 className='title'>
        My Projects <span style={{ color: '#FF004F' }}>.</span>{' '}
      </h1>
      <div className='projects-wrapper'>
        <ProjectCard
          title="One Dashboard One Link (SI Logbook Magang)" 
          imageSrc={medical}
          githubLink="_blank"
          technologies="HTML CSS JavaScript JQuery C# ASP.NET SQL"
          description="Aplikasi Website untuk memudahkan mahasiswa dalam mengisi logbook magang. Dibuat dengan HTML, CSS, JavaScript, JQuery, C#, ASP.NET, dan SQL."
        />

        <ProjectCard
          title="UniForma (Aplikasi Android untuk Pengisian Formulir Ketertiban Seragam Mahasiswa)"
          imageSrc={fault}
          githubLink="blank_"
          technologies="Java Android Studio SQL Server"
          description="Aplikasi Android untuk memudahkan dosen dalam mengisi formulir ketertiban seragam. Dibuat dengan Java, Android Studio, dan SQL Server."
        />
      </div>
    </div>
  );
}

export default Projects;
