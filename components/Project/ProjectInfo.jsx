
import tw from "twin.macro";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { dateFormatter } from "../../src/utils/dateFormatter";
import { getIconNameAndSource } from "../../src/utils/Works/getIconNameAndSource";
import { getIconsSource } from "../../src/utils/Works/getIconsSource";
import Section from "../Section";

const ProjectInfo = ({ project }) => {
  const { title, categories, date, projectCustomFields } = project.node;
  const { technologies, githubRepository, demo, technologyIcons } = projectCustomFields;
  const category = categories.edges[0].node.name;

  const iconsSource = getIconsSource(technologyIcons);
  const iconsList = getIconNameAndSource(iconsSource, technologies);

  return (
    <InfoSection>
      <InfoTitle>{title}</InfoTitle>
      <div className="flex flex-col justify-between row-start-2 row-end-3 space-y-10 lg:col-start-8 lg:col-end-9 lg:row-start-1">
        <ul>
          <li className="mb-2 text-xs leading-tight uppercase">Tecnologías usadas</li>
          <li>
            <ul className="flex flex-col gap-2">
              {iconsList.map((icon, index) => {
                return (
                  <li key={index} className="text-base flex gap-1 items-center justify-start">
                    <div className="grid col-start-1 col-end-2 gap-x-2 ">
                      {icon.source && (
                        <figure
                          style={{ position: "relative", width: "1.2rem", paddingBottom: "1.2rem" }}
                          key={index}
                          className="col-span-1"
                        >
                          <Image alt="" src={icon.source} layout="fill" objectFit="contain" />
                        </figure>
                      )}
                      <p className="col-start-2 col-end-5">{icon.name}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <h4 className="text-sm text-gray-600 md:text-base">{category}</h4>
      </div>
      <ul className="flex flex-col justify-between h-full col-span-2 row-start-2 row-end-3 space-y-5 md:grid-cols-5 lg:col-start-1 lg:col-end-3 lg:row-start-1 ">
        <li>
          <h5 className="text-xs uppercase">Date</h5>
          <p className="text-sm">{dateFormatter(date)}</p>
        </li>
        <li>
          <h5 className="text-xs uppercase ">Repositorio</h5>
          <a href={githubRepository} target="_blank" rel="noreferrer">
            <BsGithub className="mt-2 -ml-1 scale-125 icon" alt="Github de Diego" />
          </a>
        </li>
        <li>
          <h5 className="text-xs uppercase">Demo</h5>
          <a className="text-base font-bold hover:text-gray-600" target="_blank" rel="noreferrer" href={demo}>
            {demo.replace("https://", "")}
          </a>
        </li>
      </ul>
    </InfoSection>
  );
};

const InfoSection = tw(Section)`
 border-t-[1px] border-b-[1px] border-black pt-6 pb-3 grid grid-cols-3 gap-x-10 gap-y-3 md:gap-y-4 md:gap-x-4 md:grid-cols-6 grid-rows-[fit-content_1fr]  lg:grid-cols-8 lg:grid-rows-1 lg:pb-20 
`;

const InfoTitle = tw.h1`
col-span-3 row-start-1 row-end-2 text-3xl font-semibold leading-6 tracking-tighter md:grid-cols-6 h-[fit-content] lg:col-start-3 lg:col-end-7 lg:justify-self-center lg:self-start lg:text-4xl mb-4 md:mb-0

`;

export default ProjectInfo;
