import { useContext, useEffect, useState } from 'react';
import StandardButton from '../Buttons/StandarButton';
import Link from 'next/link';
import useWindowsSize from '../../hooks/useWindowsSize';
import { LanguageContext } from '../../context/LanguageContext';
import { languageOptions } from '../../src/utils/language';

const NavbarMenu = ({ open, setOpen }) => {
  const [mobileScreen, setMobileScreen] = useState();
  const { userLanguage, userLanguageChange, dictionary } = useContext(LanguageContext);

  const handleLanguageChange = e => userLanguageChange(e.target.value);

  useEffect(() => {
    const screen = window.innerWidth < 768;
    setMobileScreen(screen);
  }, []);

  const windowSize = useWindowsSize();

  const handleLinkClick = () => {
    setOpen(false);
  };

  if (windowSize.width > 768) {
    setOpen(false);
  }
  return (
    <Nav open={open} mobileScreen={mobileScreen} className="">
      <List open={open} mobileScreen={mobileScreen}>
        <li>
          <select
            onChange={handleLanguageChange}
            value={userLanguage}
            className="cursor-pointer bg-transparent"
          >
            {Object.entries(languageOptions).map(([id, name]) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </li>
        <li className="self-start md:self-center">
          <a className="text-3xl md:text-base hover:opacity-70 transition-all" onClick={handleLinkClick} href="https://drive.google.com/file/d/1tZN3FFdh8U9OA0oKaaAH8GG1G8sLAXeq/view?usp=sharing" target="_blank" rel="noreferrer">
            {dictionary.resume}
          </a>
        </li>
        <li className="self-start md:self-center ">
          <Link href="/#projects">
            <a className="text-3xl md:text-base hover:opacity-70 transition-all " onClick={handleLinkClick}>
              {dictionary.projects}
            </a>
          </Link>
        </li>
        <li className="self-start pt-5 md:pt-0 md:self-center">
          <Link href={'/#form'} passHref>
            <a onClick={handleLinkClick} className="transition-all">
              <StandardButton text={dictionary.sayHello} />
            </a>
          </Link>
        </li>
      </List>
    </Nav>
  );
};

const Nav = ({ children, open, mobileScreen }) => {
  return <nav className={`${open && mobileScreen ? "fixed top-0 left-0 h-screen w-screen bg-[#ececec] justify-start items-start z-30" : "hidden"} transition-all md:ml-auto md:block md:justify-center`}>{children}</nav>
}

const List = ({ children, open, mobileScreen }) => {
  return <ul className={`${open && mobileScreen ? "flex flex-col items-center h-screen bg-[#ececec] w-[90%] mx-auto pt-6 mt-20 border-t-[1px] border-black" : ""}  flex flex-wrap items-center space-y-1 font-semibold md:space-x-4 md:space-y-0 md:ml-auto `}> {children}</ul>
}

export default NavbarMenu;
