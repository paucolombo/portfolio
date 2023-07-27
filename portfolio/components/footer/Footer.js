import './Footer.css';
import { links } from '../data/data';

const Footer = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `</span><h3>CONTACT</h3>`;
  const ul = document.createElement('ul');
  ul.classList.add('linksList');
  for (let i = 0; i < links.length; i++) {
    const li = document.createElement('li');
    li.classList.add('linksPortfolio');
    li.innerHTML = `<a href=${links[i].link} target='_blank'><img src=${links[i].img} alt=${links[i].alt}></a>
    `;
    ul.appendChild(li);
  }
  footer.appendChild(ul);
  document.body.appendChild(footer);
};

export default Footer;
