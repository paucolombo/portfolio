import './style.css';
import Main from './components/main/Main';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
Navbar();
Main();
About();
Footer();

//creo los listeners para cargar las distintas secciones
const main = document.querySelector('main');
const about = document.getElementById('about');
about.classList.add('activeSection');
about.addEventListener('click', changeSection);
const projects = document.getElementById('projects');
projects.addEventListener('click', changeSection);
const experience = document.getElementById('experience');
experience.addEventListener('click', changeSection);
const home = document.getElementById('home');
home.addEventListener('click', changeSection);

function changeSection(event) {
  about.classList.remove('activeSection');
  projects.classList.remove('activeSection');
  experience.classList.remove('activeSection');

  switch (this.id) {
    case 'about':
    case 'home':
      About();
      about.classList.add('activeSection');
      break;
    case 'projects':
      projects.classList.add('activeSection');
      Projects();
      break;
    case 'experience':
      experience.classList.add('activeSection');
      Experience();
      break;
  }
}
