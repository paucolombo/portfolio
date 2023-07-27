import './Experience.css';
import { companies } from '../data/data';

const Experience = () => {
  const section = document.createElement('section');
  section.classList.add('experienceContainer');
  const h1 = document.createElement('h1');
  h1.innerText = 'COMPANIES I WORKED FOR';
  companies.forEach((companie) => {
    section.innerHTML += `<a href= ${companie.link} target="_blank"><div class="companie">
    
    <img src= ${companie.image} alt= ${companie.name}>
    
    <div class="overlay">
        <div class="overlay-content">
          <h3>${companie.position}</h3>
          <span>${companie.dates}</span>
        </div></div></a>`;
  });
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(h1);
  main.appendChild(section);
};
export default Experience;
