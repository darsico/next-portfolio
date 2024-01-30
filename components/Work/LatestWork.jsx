import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { SiteContext } from '../../context/SiteContext';
import { getIconsSource } from '../../src/utils/Works/getIconsSource';
import { useLanguageStore } from '../../store/store';
import Section from '../Section';
import DesignTags from './DesignTags';
import TechnologyIcons from './TechnologyIcons';
import { WorkArticle, WorkContent, WorkCTA, WorkDescription, WorkImage, WorkSecondImage, WorkSubtitle, WorkTitle } from './Work.style';

const LatestWork = () => {
  const { projects } = useContext(SiteContext);
  // const { dictionary, checkLang } = useContext(LanguageContext);
  const { dictionary, checkLang } = useLanguageStore((state) => state);

  const { enType, type, technologyIconsCollection, projectName, enProjectName, description, enDescription, projectImageCta, slug } = projects[0] || {};
  const uri = `/projects/${slug}`;
  const latestWorkImage = projectImageCta?.url;

  const convertImage = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));

  return (
    <>
      <WorkSection id="work">
        <WorkSectionTitle>{dictionary.latestWork}</WorkSectionTitle>
        <Link href={uri} passHref>
          <p className="w-full cursor-pointer">
            <figure className="relative w-full pb-[50%] md:pb-[30%]">{projects.length > 0 && <Image alt="" src={latestWorkImage} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(700, 475))}`} />}</figure>
          </p>
        </Link>
        <WorkArticle>
          <WorkContent>
            <WorkSubtitle>{checkLang(type, enType)}</WorkSubtitle>
            <Link href={uri} passHref>
              <p className=" text-3xl font-medium md:text-5xl tracking-[-0.05em] cursor-pointer mb-2 md:mb-4 w-[80%] md:pb-4">
                {checkLang(projectName, enProjectName)}
                <span> →</span>
              </p>
            </Link>
            {
              type === 'Desarrollo Web' || type === 'Web Development' ? <TechnologyIcons technologyIcons={technologyIconsCollection} /> : null
              // <DesignTags designTags={designTags} />
            }
            <Link href={uri} passHref>
              <WorkDescription>{checkLang(description, enDescription)}</WorkDescription>
            </Link>
            <Link href={uri} passHref>
              <a className="underline hover:font-medium">{dictionary.seeProject}</a>
            </Link>
          </WorkContent>
          {/* <WorkSecondImage
          src="https://raw.githubusercontent.com/darsico/portafolio-dh/3034cfd5814a082e1066c6dfcfe949d962cfcec2/images/website-card.png"
          alt=""
        /> */}
        </WorkArticle>
      </WorkSection>
    </>
  );
};

const WorkSectionTitle = ({ children }) => <h3 className="mb-5 text-xl font-bold md:text-3xl ">{children}</h3>;

const WorkSection = ({ children }) => {
  return <Section customClass={'flex flex-col items-center pt-20 md:pt-14'}>{children}</Section>;
};

// const WorkImageContainer = ({ children }) =>

export default LatestWork;
