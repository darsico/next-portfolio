import { useEffect, useState } from 'react';
import StandardButton from '../Buttons/StandarButton';
import Link from 'next/link';
import useWindowsSize from '../../hooks/useWindowsSize';

import { useLanguageStore } from '../../store/store';
import LangSelect from './LangSelect';

const NavbarMenu = ({ open, setOpen }) => {
  const [mobileScreen, setMobileScreen] = useState();
  const { dictionary } = useLanguageStore((state) => state);

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
        <li className="hidden md:block">
          <LangSelect />
        </li>
        <li className="self-start md:self-center">
          <a className="text-3xl transition-all md:text-base hover:opacity-70" onClick={handleLinkClick} href={dictionary.resumeLink} target="_blank" rel="noreferrer">
            {dictionary.resume}
          </a>
        </li>
        <li className="self-start md:self-center ">
          <Link href="/#projects" passHref legacyBehavior>
            <p className="text-3xl transition-all md:text-base hover:opacity-70 " onClick={handleLinkClick}>
              {dictionary.projects}
            </p>
          </Link>
        </li>
        <li className="self-start pt-5 md:pt-0 md:self-center">
          <Link href={'/#form'} passHref legacyBehavior>
            <div onClick={handleLinkClick} className="transition-all">
              <StandardButton text={dictionary.sayHello} />
            </div>
          </Link>
        </li>
      </List>
    </Nav>
  );
};

const Nav = ({ children, open, mobileScreen }) => {
  return <nav className={`${open && mobileScreen ? 'fixed top-0 left-0 h-screen w-screen bg-[#ececec] justify-start items-start z-30' : 'hidden'} transition-all md:ml-auto md:block md:justify-center`}>{children}</nav>;
};

const List = ({ children, open, mobileScreen }) => {
  return <ul className={`${open && mobileScreen ? 'flex flex-col items-center h-screen bg-[#ececec] w-[90%] mx-auto pt-6 mt-20 border-t-[1px] border-black' : ''}  flex flex-wrap items-center space-y-1 font-semibold md:space-x-4 md:space-y-0 md:ml-auto `}> {children}</ul>;
};

export default NavbarMenu;
