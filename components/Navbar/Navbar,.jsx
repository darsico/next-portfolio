import Link from 'next/link';
import { useState } from 'react';
import { useLanguageStore } from '../../store/store';
import LangSelect from './LangSelect';

import MenuToggleButton from './MenuToggleButton';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { dictionary } = useLanguageStore((state) => state);

  return (
    <Header>
      <Nav>
        <Link href="/" passHref className="z-50" legacyBehavior>
          <Logo>
            Diego Huaman <LogoThin>| {dictionary.title} </LogoThin>
          </Logo>
        </Link>
        <NavbarMenu open={open} setOpen={setOpen} />
        <div className="flex items-center">
          <div className="md:hidden text-lg  border-gray-500 border-opacity-50 rounded-2xl  active:bg-slate-400 active:bg-opacity-5 scale-[0.8] -mr-2">
            <LangSelect />
          </div>
          <MenuToggleButton setOpen={setOpen} open={open} />
        </div>
      </Nav>
    </Header>
  );
};

const Header = ({ children }) => {
  return (
    <div
      className="z-30 w-full"
      style={{
        background: 'linear-gradient(180deg, #ECECEC 0%, rgba(236, 236, 236, 0) 100%)',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      {children}
    </div>
  );
};

const Nav = ({ children }) => {
  return (
    <nav
      className=" flex py-5 text-sm md:text-base
  items-center 
  justify-between  
  mx-auto w-[90%] md:max-w-5xl z-30 "
    >
      {children}
    </nav>
  );
};
const Logo = ({ children }) => <h1 className="font-bold transition-all  hover:opacity-80">{children}</h1>;

const LogoThin = ({ children }) => <span className="font-normal">{children}</span>;

export default Navbar;
