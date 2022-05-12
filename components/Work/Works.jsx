import tw from "twin.macro";
import Section from "../Section";
import Link from "next/link";
import Image from "next/image";

import TechnologyIcons from "./TechnologyIcons";
import DesignTags from "./DesignTags";

const Works = ({ filteredProjects }) => {
  return (
    <WorkGridSection>
      {filteredProjects &&
        filteredProjects.map((project) => {
          const { databaseId, uri, title, projectCustomFields, categories } = project.node;
          const { technologyIcons, ctaImage, description, designTags } = projectCustomFields;

          const category = categories.edges[0].node.name;
          const projectImage = ctaImage.sourceUrl;

          return (
            <Link href={uri} key={databaseId}>
              <a>
                <article className="">
                  <figure style={{ position: "relative", width: "100%", paddingBottom: "60%" }}>
                    <Image alt="" src={projectImage} layout="fill" objectFit="cover" priority />
                  </figure>
                  <div className="flex flex-col gap-2 py-3 ">
                    <h5 className="-mb-2 text-sm">{category}</h5>
                    <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">{title}</h3>
                    {category === "Desarrollo Web" || category === "Web Development" ? (
                      <TechnologyIcons technologyIcons={technologyIcons} scaleDown={true} />
                    ) : (
                      <DesignTags designTags={designTags} />
                    )}

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
