import { useEffect, useState } from "react";

const NavbarMenu = ({ open, setOpen }) => {
  const [mobileScreen, setMobileScreen] = useState();
  useEffect(() => {
    const screen = window.innerWidth < 768;
    setMobileScreen(screen);
  }, []);

  // `${open && mobileScreen ? "absolute" : "hidden"}  header-nav`}
  // .nav-list--open
  return (
    <nav className={`${open && mobileScreen ? "absolute open" : "hidden"} ml-auto md:block transition-all`}>
      <ul className={`${open && mobileScreen ? "nav-list--open" : ""} header-nav__list`}>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#work">Proyectos</a>
        </li>
        <li>
          <a href="#about-me">Sobre Mi</a>
        </li>
        <li>
          <a href="#form" className="btn">
            Di hola!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
