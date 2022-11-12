import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import heroScrollDown from "../src/lotties/scroll-down.json";

const scrollDownStyle = {
  width: 40,
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
};

const Hero = () => {
  const lottieRef = useRef();

  useEffect(() => {
    lottieRef.current.setSpeed(0.8);
  }, []);

  return (
    <HeroSection id="hero">
      <HeroText>Hola! Soy Diego Huaman,</HeroText>
      <HeroCTA>Puedo crear aplicaciones web fascinantes.</HeroCTA>
      <Lottie
        lottieRef={lottieRef}
        animationData={heroScrollDown}
        autoplay={true}
        loop={true}
        style={scrollDownStyle}
      />
    </HeroSection>
  );
};

const HeroSection = ({ children }) => <section className=" h-[50vh] md:h-[70vh] flex flex-col relative justify-center  mx-auto w-[90%] md:max-w-5xl -mt-32">{children}</section>

const HeroText = ({ children }) => <h2 className="text-xl md:text-2xl tracking-[-0.05em]">{children}</h2>
const HeroCTA = ({ children }) => <p className="text-3xl mt-3 sm:text-4xl md:text-6xl font-semibold leading-7 md:leading-[0.9] md:w-10/12 w-3/4 tracking-[-0.05em]">{children}</p>

const HeroArrow = ({ children }) => <span className="text-[10px]">{children}</span>

export default Hero;
