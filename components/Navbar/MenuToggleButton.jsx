const MenuToggleButton = ({ setOpen, open }) => {
  const handleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`menu-btn-1 ${open ? 'active' : ''} z-50 cursor-pointer md:hidden  flex justify-end `} onClick={handleButtonClick}>
      <span></span>
    </div>
  );
};

export default MenuToggleButton;
