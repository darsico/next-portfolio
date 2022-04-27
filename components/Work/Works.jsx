import tw from "twin.macro";
import Section from "../Section";

const Works = () => {
  return (
    <WorkGridSection>
      <article className="cursor-pointer">
        <figure>
          <img src="https://raw.githubusercontent.com/darsico/portafolio-dh/main/images/air.png" alt="" />
        </figure>
        <div className="flex flex-col gap-2 py-3 ">
          <h4 className="text-sm font-medium leading-3 text-gray-700"> Next.js | Tailwind </h4>
          <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">
            Airbnb Experiences Clone{" "}
          </h3>
          <p className="text-base leading-5">Aprendizaje del hook useState ademas de métodos como .map() y .filter()</p>
          <a className="mt-3 text-sm underline" href="#">
            Ver proyecto
          </a>
        </div>
      </article>
      <article className="cursor-pointer">
        <figure>
          <img src="https://raw.githubusercontent.com/darsico/portafolio-dh/main/images/air.png" alt="" />
        </figure>
        <div className="flex flex-col gap-2 py-3 ">
          <h4 className="text-sm font-medium leading-3 text-gray-700"> Next.js | Tailwind </h4>
          <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">
            Airbnb Experiences Clone{" "}
          </h3>
          <p className="text-base leading-5">Aprendizaje del hook useState ademas de métodos como .map() y .filter()</p>
          <a className="mt-3 text-sm underline" href="#">
            Ver proyecto
          </a>
        </div>
      </article>
      <article className="cursor-pointer">
        <figure>
          <img src="https://raw.githubusercontent.com/darsico/portafolio-dh/main/images/air.png" alt="" />
        </figure>
        <div className="flex flex-col gap-2 py-3 ">
          <h4 className="text-sm font-medium leading-3 text-gray-700"> Next.js | Tailwind </h4>
          <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">
            Airbnb Experiences Clone{" "}
          </h3>
          <p className="text-base leading-5">Aprendizaje del hook useState ademas de métodos como .map() y .filter()</p>
          <a className="mt-3 text-sm underline" href="#">
            Ver proyecto
          </a>
        </div>
      </article>
      <article className="cursor-pointer">
        <figure>
          <img src="https://raw.githubusercontent.com/darsico/portafolio-dh/main/images/air.png" alt="" />
        </figure>
        <div className="flex flex-col gap-2 py-3 ">
          <h4 className="text-sm font-medium leading-3 text-gray-700"> Next.js | Tailwind </h4>
          <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">
            Airbnb Experiences Clone{" "}
          </h3>
          <p className="text-base leading-5">Aprendizaje del hook useState ademas de métodos como .map() y .filter()</p>
          <a className="mt-3 text-sm underline" href="#">
            Ver proyecto
          </a>
        </div>
      </article>
    </WorkGridSection>
  );
};

const WorkGridSection = tw(Section)`grid col-span-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5`;

export default Works;
