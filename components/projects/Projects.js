import './Projects.css';
import { projects } from '../data/data';

const Projects = () => {
  const section = document.createElement('section');
  section.classList.add('projectsContainer');
  const h1 = document.createElement('h1');
  h1.innerText = 'MY PROJECTS';
  projects.forEach((project) => {
    section.innerHTML += `<div class="project">
    <a href=${project.link} target="_blank"><img src= ${project.img} alt= ${project.title}> 
    <h4>${project.title}</h4>
    <p> ${project.description}</p>
    <span>${project.tech}</span>
    </a>
    </div>`;
  });
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(h1);
  main.appendChild(section);
};

export default Projects;
