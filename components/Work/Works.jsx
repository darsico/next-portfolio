import tw from 'twin.macro';
import Section from '../Section';
import Link from 'next/link';
import Image from 'next/image';

import TechnologyIcons from './TechnologyIcons';
import DesignTags from './DesignTags';
import { useContext } from 'react';
import { SiteContext } from '../../context/SiteContext';
import uId from '../../src/utils/uniqueId';

const Works = () => {
  const { filteredProjects } = useContext(SiteContext);

  return (
    <WorkGridSection>
      {filteredProjects &&
        filteredProjects.map((project) => {
          const { projectImageCta, slug, projectName, technologyIconsCollection, type, designStack, description } = project;

          const projectImage = projectImageCta.url;

          return (
            <Link href={`/projects/${slug}`} key={uId()}>
              <a>
                <article className="">
                  <figure style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
                    <Image alt="" src={projectImage} layout="fill" objectFit="cover" priority />
                  </figure>
                  <div className="flex flex-col gap-2 py-3 ">
                    <h5 className="-mb-2 text-sm">{type}</h5>
                    <h3 className="text-2xl font-semibold leading-6 tracking-tighter cursor-pointer">{projectName}</h3>
                    {type === 'Desarrollo Web' || type === 'Web Development' ? <TechnologyIcons technologyIcons={technologyIconsCollection} scaleDown={true} /> : <DesignTags designTags={designStack} />}

                    <p className="text-base leading-5">{description}</p>
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
