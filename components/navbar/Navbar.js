import './Navbar.css';

const Navbar = () => {
  const header = document.createElement('header');
  header.innerHTML = `
  <div class="logoContainer">
  <a href="#home" class="logo" id="home">
  <img src="/logo.png" alt="logo Paula Colombo">
  <h2>Paula Colombo</h2>
</a>
      </div>
   
    <nav>
      <input class="hamburguer" type="checkbox" id="menu">
      <label for="menu">☰</label>
      <ul>
        <li><a href="#about" id="about" class="navItems">About Me</a></li>
        <li><a href="#projects" id="projects" class="navItems">Projects</a></li>
        <li><a href="#experience" id="experience" class="navItems">Experience</a></li>
      </ul>
    </nav>
  `;
  document.body.appendChild(header);
  const navItems = document.querySelectorAll('.navItems');
  //para cerrar el menu hamburguesa cuando se haga click en un elemento
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const menuCheckbox = document.getElementById('menu');
      if (menuCheckbox.checked) {
        menuCheckbox.checked = false;
      }
    });
  });
};
export default Navbar;
