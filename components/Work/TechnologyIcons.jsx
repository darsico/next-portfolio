import Image from 'next/image';
import uId from '../../src/utils/uniqueId';

const TechnologyIcons = ({ technologyIcons, scaleDown }) => {
  const iconSources = technologyIcons?.items.map((items) => items.url);
  return (
    <div className={`${scaleDown ? 'scale-75 -translate-x-[13%]' : ''} text-sm font-medium leading-3 text-gray-700 flex gap-1 items-center`}>
      {iconSources &&
        iconSources.map((iconSource) => {
          const id = uId();
          return (
            <figure style={{ position: 'relative', width: '2rem', paddingBottom: '1.5rem' }} key={id}>
              <Image alt="" src={iconSource} layout="fill" objectFit="contain" />
            </figure>
          );
        })}
    </div>
  );
};

export default TechnologyIcons;
