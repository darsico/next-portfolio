import Image from "next/image";
import { getIconsSource } from "../../src/utils/Works/getIconsSource";
const TechnologyIcons = ({ technologyIcons, scaleDown }) => {
  const iconSources = getIconsSource(technologyIcons);

  return (
    <div
      className={`${
        scaleDown ? "scale-75 -translate-x-[13%]" : ""
      } text-sm font-medium leading-3 text-gray-700 flex gap-1 items-center`}
    >
      {iconSources &&
        iconSources.map((iconSource, index) => {
          return (
            <figure style={{ position: "relative", width: "2rem", paddingBottom: "1.5rem" }} key={index}>
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
  );
};

export default TechnologyIcons;
