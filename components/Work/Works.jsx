import tw from "twin.macro";
import Section from "../Section";
import Link from "next/link";
import Image from "next/image";
import { icons } from "react-icons";

const Works = ({ pastProjectData }) => {
  return (
    <WorkGridSection>
      {pastProjectData.map((project) => {
        const { databaseId, uri, title, projectCustomFields, categories } = project.node;
        const { technologies, technologyIcons, ctaImage } = projectCustomFields;

        const formatIcons = technologyIcons.slice(3, -5);
        const iconsArray = formatIcons.split(",");
        const iconSources = iconsArray.map((source) => {
          const srcWithQuotes = source.match(/src\=([^\s]*)\s/)[1];
          const cleanedSource = srcWithQuotes.substring(1, srcWithQuotes.length - 1);
          return cleanedSource;
        });

        const projectImage = ctaImage.sourceUrl;
        return (
          <Link href={uri} key={databaseId}>
            <a>
              <article className="">
                <figure style={{ position: "relative", width: "100%", paddingBottom: "60%" }}>
                  <Image alt="" src={projectImage} layout="fill" objectFit="cover" />
                </figure>
                <div className="flex flex-col gap-2 py-3 ">
                  <div className="text-sm font-medium leading-3 text-gray-700 flex gap-1 items-center">
                    {iconSources.map((iconSource, index) => {
                      return (
                        <figure style={{ position: "relative", width: "7%", paddingBottom: "1.5rem" }} key={index}>
                          <Image
                            alt=""
                            src={iconSource}
                            layout="fill"
                            objectFit="contain" // Scale your image down to fit into the container
                          />
                        </figure>
                      );
                    })}
                  </div>
                  <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">{title}</h3>
                  <p className="text-base leading-5">
                    Aprendizaje del hook useState ademas de métodos como .map() y .filter()
                  </p>
                </div>
              </article>
            </a>
          </Link>
        );
      })}
    </WorkGridSection>
  );
};

const WorkGridSection = tw(Section)`grid col-span-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5`;

export default Works;
