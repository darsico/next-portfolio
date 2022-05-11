import tw from "twin.macro";
import Section from "../Section";
import Link from "next/link";
import Image from "next/image";
import { icons } from "react-icons";

import TechnologyIcons from "./TechnologyIcons";

const Works = ({ filteredProjects }) => {
  return (
    <WorkGridSection>
      {filteredProjects &&
        filteredProjects.map((project) => {
          const { databaseId, uri, title, projectCustomFields, categories } = project.node;
          const { technologyIcons, ctaImage, description } = projectCustomFields;

          const category = categories.edges[0].node.name;
          const projectImage = ctaImage.sourceUrl;
          console.log(description);
          return (
            <Link href={uri} key={databaseId}>
              <a>
                <article className="">
                  <figure style={{ position: "relative", width: "100%", paddingBottom: "60%" }}>
                    <Image alt="" src={projectImage} layout="fill" objectFit="cover" />
                  </figure>
                  <div className="flex flex-col gap-2 py-3 ">
                    <h5 className="-mb-2 text-sm">{category}</h5>
                    <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">{title}</h3>
                    <TechnologyIcons technologyIcons={technologyIcons} scaleDown={true} />
                    <p className="text-base leading-5">{description ? description : ""}</p>
                  </div>
                </article>
              </a>
            </Link>
          );
        })}
    </WorkGridSection>
  );
};

const WorkGridSection = tw(Section)`pt-0 grid col-span-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5`;

export default Works;
