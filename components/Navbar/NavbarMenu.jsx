import { useContext, useEffect, useState } from "react";
import { SiteContext } from "../../hooks/useSiteContext";

const NavbarMenu = ({ open }) => {
  const [mobileScreen, setMobileScreen] = useState();
  const [data] = useContext(SiteContext);
  useEffect(() => {
    const screen = window.innerWidth < 768;
    setMobileScreen(screen);
  }, []);
  // For menus
  // const { menus } = data;
  // console.log(menus);
  return (
    <nav className={`${open && mobileScreen ? "open" : "hidden"} md:ml-auto md:block transition-all`}>
      <ul className={`${open && mobileScreen ? "nav-list--open" : ""} header-nav__list`}>
        {/* Iterate menus */}
        <li>
          <a className="nav-list__link" href="#experience">
            Experiencia
          </a>
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
