import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
          <li className="footer-list__item">
            <h5 className="footer-list__title">Escríbeme</h5>
            <a href="">diegojairhl@gmail.com</a>
          </li>
          <li className="footer-list__item footer-list__item--center">
            <h5 className="footer-list__title">Sígueme</h5>
            <ul className="footer__list-icons">
              <li>
                <a href="">
                  <BsGithub className="icon" alt="Github de Diego" />
                </a>
              </li>

              <li>
                <a href="">
                  <BsLinkedin className="icon" alt="LinkedIn de Diego" />
                </a>
              </li>
            </ul>
          </li>
          <li className="md:ml-auto footer-list__item">
            <h5 className="footer-list__title">Checa esto</h5>
            <ul className="footer-list__item">
              <li>
                <a href="#work">Proyectos</a>
              </li>
              <li>
                <a href="">Sobre mi</a>
              </li>
              <li>
                <a href="">Mi CV</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <h3 className="signature">
        Hecho con
        <FaHeart className="signature__icon heart" alt="" />
        por
        <span className="signature__name"> Diego Huaman</span>
      </h3>
    </footer>
  );
};

export default Footer;
