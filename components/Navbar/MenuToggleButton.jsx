import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import Hamburger from "../../src/lotties/menu-portfolio.json";

const style = {
  width: 25,

};

const MenuToggleButton = ({ setOpen, open }) => {
  const lottieRef = useRef();
  const handleButtonClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      lottieRef.current.playSegments([0, 40], true);
    } else {
      lottieRef.current.playSegments([10, 0], true);
    }
  }, [open]);

  return (
    <Lottie
      onClick={handleButtonClick}
      className="z-50 block cursor-pointer md:hidden"
      animationData={Hamburger}
      lottieRef={lottieRef}
      style={style}
      autoplay={false}
    />
  );
};

export default MenuToggleButton;
