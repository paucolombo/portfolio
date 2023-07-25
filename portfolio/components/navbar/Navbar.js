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
        <li><a href="#">About Me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Experience</a></li>
      </ul>
    </nav>
  `;
  document.body.appendChild(header);
};
export default Navbar;
