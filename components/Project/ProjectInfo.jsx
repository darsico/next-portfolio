import { BsGithub } from "react-icons/bs";
import tw from "twin.macro";
import Section from "../Section";

const ProjectInfo = () => {
  return (
    <Section className="border-y-[1px] border-black pt-6 pb-3 grid grid-cols-3 gap-x-10 gap-y-3 md:gap-y-4 md:gap-x-4 md:grid-cols-6 grid-rows-[fit-content_1fr]  lg:grid-cols-8 lg:grid-rows-1 lg:pb-20 ">
      <h1 className="text-3xl leading-6 font-semibold tracking-tighter col-span-3 md:grid-cols-6 row-start-1 row-end-2 h-fit lg:col-start-3 lg:col-end-7 lg:justify-self-center lg:self-start lg:text-4xl">
        Otaku Kombini - Ecommerce
      </h1>
      <div className="flex flex-col justify-between space-y-10 row-start-2 row-end-3 lg:col-start-8 lg:col-end-9 lg:row-start-1">
        <h4 className="text-sm md:text-base  text-gray-500">Desarrollo Web</h4>
        <ul>
          <li className="uppercase text-xs mb-2 leading-tight">Tecnologías usadas</li>
          <li className="text-base">React</li>
        </ul>
      </div>
      <ul className="h-full flex flex-col justify-between col-span-2 md:grid-cols-5 row-start-2 row-end-3 lg:col-start-1 lg:col-end-3 lg:row-start-1 space-y-5 ">
        <li>
          <h5 className="uppercase text-xs">Date</h5>
          <p className="text-sm">27 ABR 2022</p>
        </li>
        <li>
          <h5 className="uppercase text-xs ">Repositorio</h5>
          <a href="">
            <BsGithub className="icon mt-2 -ml-1 scale-125" alt="Github de Diego" />
          </a>
        </li>
        <li>
          <h5 className="uppercase text-xs">Demo</h5>
          <a className="font-bold text-base hover:text-gray-600" href="">
            calculadora-retro.netlify.app
          </a>
        </li>
      </ul>
    </Section>
  );
};

/**
 * 
 * const InfoSection = tw(Section)`
border-t-[1px] border-b-[1px] border-black pt-5 pb-3 grid grid-cols-3 gap-x-10 gap-y-3 md:gap-y-4 md:gap-x-4 md:grid-cols-6 grid-rows-[fit-content_1fr]  lg:grid-cols-8 lg:grid-rows-1 
`;

const InfoTitle = tw.h1`
text-3xl leading-6 font-semibold tracking-tighter col-span-3 md:grid-cols-6 row-start-1 row-end-2 h-fit lg:col-start-3 lg:col-end-7 lg:justify-self-center lg:self-start lg:text-4xl
`;
 */

export default ProjectInfo;
