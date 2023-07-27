import './Navbar.css';

const Navbar = () => {
  const header = document.createElement('header');
  header.innerHTML = `
  <div class="logo">
      <img src="/favico.png" alt="logo Paula Colombo">
      <h2>Paula Colombo</h2>
    </div>
   
    <nav>
      <input class="hamburguer" type="checkbox" id="menu">
      <label for="menu">☰</label>
      <ul>
        <li><a href="#about" id="about">About Me</a></li>
        <li><a href="#projects" id="projects">Projects</a></li>
        <li><a href="#experience" id="experience">Experience</a></li>
      </ul>
    </nav>
  `;
  document.body.appendChild(header);
};
export default Navbar;
