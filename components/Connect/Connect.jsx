import Lottie from "lottie-react";
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

const ConnectSection = ({ children }) => <Section customClass="flex flex-col items-center justify-center  h-[fit-content] py-20">{children}</Section>


const ConnectText = ({ children }) => <h2 className="text-3xl font-bold md:text-5xl tracking-[-0.05em]">{children}</h2>

const ConnectTextThin = ({ children }) => <p className=" text-3xl font-light md:text-5xl tracking-[-0.05em]">{children}</p>

export default Connect;
