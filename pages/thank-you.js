import Lottie from "lottie-react";
import AnimationTY from "../src/lotties/thankyou-lottie.json";
import Layout from "../components/Layout.jsx";
import Link from "next/link";

import { useRef } from "react";
import Section from "../components/Section";
import tw from "twin.macro";

const ThankYouPage = () => {
  const style = {
    // width: 100,
    // height: 30,
  };
  const lottieRef = useRef();
  return (
    <Layout>
      <ThankYouSection>
        <Lottie
          animationData={AnimationTY}
          lottieRef={lottieRef}
          style={style}
          loop={true}
          autoplay={true}
          className="w-[300px] md:w-[500px] mx-auto -mt-20"
        />
        <div className="p-5 flex flex-col items-center justify-center h-full gap-4">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-center ">Gracias por tu mensaje!</h1>
          <p className="mb-4 text-lg text-gray-500 text-center tracking-tighter leading-5 ">
            Me comunicaré contigo lo más antes posible. :)
          </p>
          <Link href="/" passHref>
            <a className="w-fit py-1 px-4 rounded-full border border-gray-900 bg-black text-[#ececec] hover:bg-opacity-80 hover:shadow-xl transition-colors">
              Regresar a Home
            </a>
          </Link>
        </div>
      </ThankYouSection>
    </Layout>
  );
};

const ThankYouSection = tw(Section)`
grid grid-cols-1 md:grid-cols-2 pt-0 
`;

export default ThankYouPage;
