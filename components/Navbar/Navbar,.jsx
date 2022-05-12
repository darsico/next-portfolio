import Link from "next/link";
import { useState } from "react";
import tw, { styled } from "twin.macro";

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

const Header = styled.header(() => [
  `
  background: linear-gradient(180deg, #ECECEC 0%, rgba(236, 236, 236, 0) 100%);
    position: fixed;
  top: 0;
  left:0;
  `,
  tw`w-full z-30`,
]);

const Nav = styled.section(() => [
  `
  display:flex;
  justify-content:space-between;
 `,
  tw`
 flex py-5 text-sm md:text-base
items-center 
justify-between  
mx-auto w-[90%] md:max-w-5xl z-30  
`,
]);

const Logo = tw.h1`
 font-bold hover:opacity-80 transition-all
`;
const LogoThin = tw.span`
font-normal
`;

export default Navbar;
