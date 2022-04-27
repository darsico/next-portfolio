import tw from "twin.macro";
import Section from "../Section";

const Connect = () => {
  return (
    <ConnectSection>
      <ConnectText>Conectemos!</ConnectText>
      <ConnectTextThin>Me gustaría escuchar de ti</ConnectTextThin>
      {/* Lottie down */}
      {/* <img src="./images/down_arrow.svg" class="connect__arrow" alt="Flecha hacia abajo" /> */}
    </ConnectSection>
  );
};

const ConnectSection = tw(Section)`
flex flex-col items-center justify-center space-y-4 h-[fit-content]
`;

const ConnectText = tw.h2`
text-3xl font-bold md:text-5xl tracking-[-0.05em]
`;

const ConnectTextThin = tw.p`
 text-3xl font-light md:text-5xl tracking-[-0.05em]
`;

export default Connect;
