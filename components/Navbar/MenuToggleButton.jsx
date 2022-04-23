import { HiOutlineMenu } from "react-icons/hi";
const MenuToggleButton = ({ setOpen, open }) => {
  const handleButtonClick = () => {
    setOpen(!open);
  };
  return <HiOutlineMenu onClick={handleButtonClick} className="z-50 block md:hidden" />;
};

export default MenuToggleButton;
