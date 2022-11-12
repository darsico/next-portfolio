import { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";
import Section from "../Section";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext)
  const { followMe, checkThis, projects, aboutMe, resume, madeWith, by, textMe } = dictionary
  return (
    <footer className="footer">
      <FooterSection>
        <ul className="footer-list">
          <li className="footer-list__item">
            <h5 className="footer-list__title">{textMe}</h5>
            <a href="mailto:diegojairhl@gmail.com" target="_blank" rel="noreferrer">
              diegojairhl@gmail.com
            </a>
          </li>
          <li className="footer-list__item footer-list__item--center">
            <h5 className="footer-list__title">{followMe}</h5>
            <ul className="footer__list-icons">
              <li>
                <a href="https://github.com/darsico" target="_blank" rel="noreferrer">
                  <BsGithub className="icon" alt="Github de Diego" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/diegojairhl/" target="_blank" rel="noreferrer">
                  <BsLinkedin className="icon" alt="LinkedIn de Diego" />
                </a>
              </li>
            </ul>
          </li>
          <li className="md:ml-auto footer-list__item">
            <h5 className="footer-list__title">{checkThis}</h5>
            <ul className="footer-list__item">
              <li>
                <a href="#work">{projects}</a>
              </li>
              <li>
                <a href="">{aboutMe}</a>
              </li>
              <li>
                <a href="">{resume}</a>
              </li>
            </ul>
          </li>
        </ul>
      </FooterSection>
      <h3 className="signature">
        {madeWith}
        <FaHeart className="signature__icon heart" alt="" />
        {by}
        <span className="signature__name"> Diego Huaman</span>
      </h3>
    </footer>
  );
};

const FooterSection = ({ children }) => <Section customClass="py-0 md:py-0 ">{children}</Section>

export default Footer;
