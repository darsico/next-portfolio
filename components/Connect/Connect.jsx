import Lottie from "lottie-react";
import tw from "twin.macro";
import Section from "../Section";
import arrowDown from "../../src/lotties/icon-arrow-down.json";
import { useEffect, useRef } from "react";

const arrowDownStyle = {
  width: 100,
};

const Connect = () => {
  const lottieRef = useRef();

  useEffect(() => {
    lottieRef.current.setSpeed(0.6);
  }, []);

  return (
    <ConnectSection>
      <ConnectText>Conectemos!</ConnectText>
      <ConnectTextThin>Me gustaría escuchar de ti</ConnectTextThin>
      {/* Lottie down */}
      <Lottie animationData={arrowDown} autoplay={true} loop={true} style={arrowDownStyle} lottieRef={lottieRef} />
    </ConnectSection>
  );
};

const ConnectSection = tw(Section)`
flex flex-col items-center justify-center  h-[fit-content] py-20
`;

const ConnectText = tw.h2`
text-3xl font-bold md:text-5xl tracking-[-0.05em]
`;

const ConnectTextThin = tw.p`
 text-3xl font-light md:text-5xl tracking-[-0.05em]
`;

export default Connect;
