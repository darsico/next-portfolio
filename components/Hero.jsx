import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import tw from "twin.macro";
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

const HeroSection = tw.section`
 h-[50vh] md:h-[70vh] flex flex-col relative justify-center  mx-auto w-[90%] md:max-w-5xl -mt-32
`;

const HeroText = tw.h2`text-xl md:text-2xl tracking-[-0.05em] `;

const HeroCTA = tw.p`text-3xl mt-3 sm:text-4xl md:text-6xl font-semibold leading-7 md:leading-[0.9] md:w-10/12 w-3/4 tracking-[-0.05em] `;

const HeroArrow = tw.span` text-[10px]`;

export default Hero;
