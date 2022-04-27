import { useState } from "react";
import tw, { styled } from "twin.macro";

import MenuToggleButton from "./MenuToggleButton";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Logo>
        Diego Huaman <LogoThin>| Portafolio </LogoThin>
      </Logo>
      <NavbarMenu open={open} setOpen={setOpen} />
      <MenuToggleButton setOpen={setOpen} open={open} />
    </Header>
  );
};

const Logo = tw.h1`
   z-50 font-bold
`;
const LogoThin = tw.span`
font-normal
`;

const Header = styled.header(() => [
  `
  position: fixed;
  top: 0;
  left: 50%;
  display:flex;
  justify-content:space-between;
  transform: translateX(-50%);
  background: linear-gradient(180deg,#ececec 0,hsla(0,0%,96.9%,.987) 11%,hsla(#ececec) 20.8%,hsla(0,0%,96.9%,.896) 29.6%,hsla(0,0%,96.9%,.825) 37.5%,hsla(0,0%,96.9%,.741) 44.6%,hsla(0,0%,96.9%,.648) 51%,hsla(0,0%,96.9%,.55) 57%,hsla(0,0%,96.9%,.45) 62.5%,hsla(0,0%,96.9%,.352) 67.7%,hsla(0,0%,96.9%,.259) 72.7%,hsla(0,0%,96.9%,.175) 77.8%,hsla(0,0%,96.9%,.104) 82.9%,hsla(0,0%,96.9%,.049) 88.2%,hsla(0,0%,96.9%,.013) 93.9%,hsla(0,0%,96.9%,0));
 `,
  tw`
 flex py-5 text-sm md:text-base
items-center 
justify-between  
mx-auto w-[90%] md:max-w-5xl z-50  
`,
]);

export default Navbar;
