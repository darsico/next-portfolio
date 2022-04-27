import tw from "twin.macro";

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroText>Hola! Soy Diego Huaman,</HeroText>
      <HeroCTA>Puedo crear aplicaciones web fascinantes.</HeroCTA>
      <HeroLink>
        Mi ultimo trabajo <HeroArrow>▼</HeroArrow>
      </HeroLink>
    </HeroSection>
  );
};

const HeroSection = tw.section`
 h-[50vh] md:h-[70vh] flex flex-col relative justify-center  mx-auto w-[90%] md:max-w-5xl
`;

const HeroText = tw.h2`text-xl md:text-2xl`;

const HeroCTA = tw.p`text-3xl mt-3 sm:text-4xl md:text-6xl font-semibold leading-7 md:leading-[0.9] md:w-10/12 w-3/4 tracking-[-0.005em] `;

const HeroLink = tw.a`absolute right-0 text-sm bottom-5`;

const HeroArrow = tw.span` text-[10px]`;

export default Hero;
