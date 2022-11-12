import Link from "next/link";
import { useState } from "react";

import MenuToggleButton from "./MenuToggleButton";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Nav>
        <Link href="/" passHref>
          <a className="z-50">
            <Logo>
              Diego Huaman <LogoThin>| Portafolio </LogoThin>
            </Logo>
          </a>
        </Link>
        <NavbarMenu open={open} setOpen={setOpen} />
        <MenuToggleButton setOpen={setOpen} open={open} />
      </Nav>
    </Header>
  );
};

const Header = ({ children }) => {
  return (<header className="w-full z-30" style={{
    background: "linear-gradient(180deg, #ECECEC 0%, rgba(236, 236, 236, 0) 100%)", position: "fixed", top: 0,
    left: 0
  }}>{children}</header>)
}

const Nav = ({ children }) => {
  return (<section className=" flex py-5 text-sm md:text-base
  items-center 
  justify-between  
  mx-auto w-[90%] md:max-w-5xl z-30 ">{children}</section>)
}
const Logo = ({ children }) => <h1 className=" font-bold hover:opacity-80 transition-all
">{children}</h1>

const LogoThin = ({ children }) => <span className="font-normal">{children}</span>

export default Navbar;
