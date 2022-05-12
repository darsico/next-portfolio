import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
import { getIconsSource } from "../../src/utils/Works/getIconsSource";
import Section from "../Section";
import DesignTags from "./DesignTags";
import TechnologyIcons from "./TechnologyIcons";
import {
  WorkArticle,
  WorkContent,
  WorkCTA,
  WorkDescription,
  WorkImage,
  WorkSecondImage,
  WorkSubtitle,
  WorkTitle,
} from "./Work.style";

const LatestWork = ({ latestProjectData }) => {
  const { projectCustomFields, title, categories, uri } = latestProjectData;
  const { ctaImage, demo, githubRepository, designTags, technologyIcons, description } = projectCustomFields;
  const latestWorkImage = ctaImage.sourceUrl;
  const category = categories.edges[0].node.name;

  return (
    <WorkSection id="work">
      <WorkSectionTitle>Mi último trabajo</WorkSectionTitle>
      <Link href={uri} passHref>
        <WorkImageContainer>
          <figure className="relative w-full pb-[50%] md:pb-[30%]">
            <Image
              alt=""
              src={latestWorkImage}
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAIF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AntO30Y6vPiu0zzlpwnMVAoVUTACgsCfB8xjGT6iW9aBiP//Z"
              priority
            />
          </figure>
        </WorkImageContainer>
      </Link>
      <WorkArticle>
        <WorkContent>
          <WorkSubtitle>{category}</WorkSubtitle>
          <Link href={uri} passHref>
            <LatestWorkTitle>
              {title}
              <span> →</span>
            </LatestWorkTitle>
          </Link>
          {category === "Desarrollo Web" || category === "Web Development" ? (
            <TechnologyIcons technologyIcons={technologyIcons} />
          ) : (
            <DesignTags designTags={designTags} />
          )}
          <WorkDescription>{description}</WorkDescription>
          <Link href={uri} passHref>
            <WorkCTA>Ver proyecto</WorkCTA>
          </Link>
        </WorkContent>
        {/* <WorkSecondImage
          src="https://raw.githubusercontent.com/darsico/portafolio-dh/3034cfd5814a082e1066c6dfcfe949d962cfcec2/images/website-card.png"
          alt=""
        /> */}
      </WorkArticle>
    </WorkSection>
  );
};

const LatestWorkTitle = tw(WorkTitle)`
mb-2 md:mb-4 w-[80%]
`;
const WorkSectionTitle = tw.h3`text-xl font-bold mb-5 md:text-3xl `;

const WorkSection = tw(Section)`
 flex flex-col items-center pt-20 md:pt-14
`;

const WorkImageContainer = tw.figure`
w-full cursor-pointer
`;

export default LatestWork;
