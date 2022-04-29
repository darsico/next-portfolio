import { useContext, useEffect, useState } from "react";
import { SiteContext } from "../../context/SiteContext";

import tw, { styled } from "twin.macro";
import StandardButton from "../Buttons/StandarButton";

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
    <Nav open={open} mobileScreen={mobileScreen}>
      <List open={open} mobileScreen={mobileScreen}>
        <li>
          <Anchor href="#experience">Experiencia</Anchor>
        </li>
        <li>
          <StandardButton text="Di hola" />
        </li>
      </List>
    </Nav>
  );
};

const Nav = styled.nav(({ open, mobileScreen }) => [
  open && mobileScreen
    ? tw`fixed top-0 left-0 h-screen w-screen bg-[#ececec] justify-center items-center  z-30`
    : tw`hidden`,
  tw`transition-all md:ml-auto md:block`,
  `transform: translateX(-5%);`,
]);

const List = styled.ul(({ open, mobileScreen }) => [
  open && mobileScreen
    ? tw`flex flex-col items-center justify-center h-screen text-center w-screen bg-[#ececec]`
    : tw``,
  tw` flex flex-wrap items-center space-y-5 font-semibold md:space-x-4 md:space-y-0 md:ml-auto`,
]);

const Anchor = tw.a`text-2xl md:text-base`;


export default NavbarMenu;
