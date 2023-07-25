import './About.css';
import { links } from '/components/data/data.js';
import { skills } from '/components/data/data.js';

const About = () => {
  const section = document.createElement('section');
  section.classList.add('about');
  section.innerHTML = `
      <div class="container">
      <img class="avatar" src="/pau.png" alt="Maria Paula Colombo">
      <div class=info>
      <h2>Web Designer and Frontend Developer</h2>
      
      <p>Hi! My name is María Paula, but my friends call me Pau. I am a geeky person🤓: I love videogames, anime, board games, fantasy films and books.</p>
      <p> I also like programming💻, i believe that solving problems just by coding is fascinating!
      </p>
      </div></div>
      <h2>Skills</h2>
      <div class=skills>
      
 ${generateSkillList().innerHTML}     
      </div>
  `;

  section.appendChild(generateLinksPortfolio());
  //Pintamos la sección en el main
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(section);
};

function generateLinksPortfolio() {
  const ul = document.createElement('ul');
  ul.classList.add('linksList');
  for (let i = 0; i < links.length; i++) {
    const li = document.createElement('li');
    li.classList.add('linksPortfolio');
    li.innerHTML = `<a href=${links[i].link} target='_blank'><img src=${links[i].img} alt=${links[i].alt}></a>
    `;
    ul.appendChild(li);
  }
  return ul;
}
function generateSkillList() {
  const ul = document.createElement('ul');
  ul.classList.add('skillsList');
  for (let i = 0; i < skills.length; i++) {
    const li = document.createElement('li');
    li.classList.add('linksPortfolio');
    li.innerHTML = skills[i];
    ul.appendChild(li);
  }
  return ul;
}
export default About;
