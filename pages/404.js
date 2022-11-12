import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import Section from "../components/Section";
import lottie from "../src/lotties/404.json";
import Layout from "../components/Layout.jsx";
import StandardButton from "../components/Buttons/StandarButton";
import Link from "next/link";

const PageNotFound = () => {
  const lottieRef = useRef();

  const style = {};

  useEffect(() => {
    lottieRef.current.setSpeed(0.7);
  }, []);

  return (
    <Layout title="404">
      <NotFoundSection>
        <Lottie
          animationData={lottie}
          autoplay={true}
          loop={true}
          lottieRef={lottieRef}
          style={style}
          className="border-[1px]  border-black mx-auto h-[150px] md:h-[inherit] lg:h-[500px]"
        />
        <div className="p-5 flex flex-col items-center justify-center h-full gap-4">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter  ">Oops!</h1>
          <p className="mb-4 text-lg text-gray-500 text-center tracking-tighter leading-5 ">
            La pagina que intentas buscar no se encuentra
          </p>
          <Link href="/" passHref>
            <a className="w-fit py-1 px-4 rounded-full border border-gray-900 bg-black text-[#ececec] hover:bg-opacity-80 hover:shadow-xl transition-colors">
              Regresar a Home
            </a>
          </Link>
        </div>
      </NotFoundSection>
    </Layout>
  );
};

const NotFoundSection = ({ children }) => {
  return <Section customClass={"grid grid-cols-1 md:grid-cols-2 pt-0"}>{children}</Section>
}
export default PageNotFound;
