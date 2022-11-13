import Link from "next/link";
import { useState } from "react";
import { useLanguageStore } from "../../store/store";
import LangSelect from "./LangSelect";

import MenuToggleButton from "./MenuToggleButton";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { dictionary } = useLanguageStore((state) => state)

  return (
    <Header>
      <Nav>
        <Link href="/" passHref>
          <a className="z-50">
            <Logo>
              Diego Huaman <LogoThin>| {dictionary.title} </LogoThin>
            </Logo>
          </a>
        </Link>
        <NavbarMenu open={open} setOpen={setOpen} />
        <div className="flex items-center">
          <div className="md:hidden text-lg mr-1 border-[1px] px-2 border-gray-500 border-opacity-50 rounded-2xl  active:bg-slate-400 active:bg-opacity-5">
            <LangSelect />
          </div>
          <MenuToggleButton setOpen={setOpen} open={open} />
        </div>
      </Nav>
    </Header>
  );
};

const Header = ({ children }) => {
  return (<div className="w-full z-30" style={{
    background: "linear-gradient(180deg, #ECECEC 0%, rgba(236, 236, 236, 0) 100%)", position: "fixed", top: 0,
    left: 0
  }}>{children}</div>)
}

const Nav = ({ children }) => {
  return (<nav className=" flex py-5 text-sm md:text-base
  items-center 
  justify-between  
  mx-auto w-[90%] md:max-w-5xl z-30 ">{children}</nav>)
}
const Logo = ({ children }) => <h1 className=" font-bold hover:opacity-80 transition-all
">{children}</h1>

const LogoThin = ({ children }) => <span className="font-normal">{children}</span>

export default Navbar;
