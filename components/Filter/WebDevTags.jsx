import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { SiteContext } from '../../context/SiteContext';
import { countArrayItems } from '../../src/utils/countArrayItems';

const WebDevTags = () => {
  const [selected, setSelected] = useState({
    selectedBtn: 'devWebAll',
  });

  const { webDevProjects, setFilteredProjects } = useContext(SiteContext);
  const { dictionary } = useContext(LanguageContext)

  const webDevTags = webDevProjects && webDevProjects.map((project) => project.tags);

  const allWebDevTags = webDevProjects && [].concat(...webDevTags);

  const webDevTagCount = countArrayItems(allWebDevTags);

  const handleWebDevClick = (e) => {
    const selectedTag = e.target.innerText;
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });
    const projectFiltered = webDevProjects.filter((project) => {
      return project.tags.includes(selectedTag);
    });
    setFilteredProjects(projectFiltered);
  };

  const handleAllButtonClick = (e) => {
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });
    setFilteredProjects(webDevProjects);
  };
  return (
    <>
      <button id="devWebAll" onClick={(e) => handleAllButtonClick(e)} className={`text-base font-light hover:underline ${selected.selectedBtn === 'devWebAll' ? 'underline' : ''}`}>
        {dictionary.allCategories}
      </button>
      {webDevProjects &&
        Object.entries(webDevTagCount).map(([key, value], index) => {
          return (
            <button key={index} id={index} onClick={(e) => handleWebDevClick(e)} className={`active:underline text-xs font-light flex items-start `}>
              <span className={`text-base hover:underline ${selected.selectedBtn === index.toString() ? 'underline' : ''} `}>{key}</span>
              {value}
            </button>
          );
        })}
    </>
  );
};

export default WebDevTags;
