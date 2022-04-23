import { useEffect, useState } from "react";
import MenuToggleButton from "./MenuToggleButton";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <header className="items-center justify-between header main-part">
        <h1 className="logo">
          Diego Huaman <span className="logo--thin">| Portafolio </span>
        </h1>
        <NavbarMenu open={open} setOpen={setOpen} />
        <MenuToggleButton setOpen={setOpen} open={open} />
      </header>
    </>
  );
};

export default Navbar;
