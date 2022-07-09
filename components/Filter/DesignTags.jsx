import { useContext, useState } from 'react';

import { SiteContext } from '../../context/SiteContext';

const DesignTags = () => {
  const [selected, setSelected] = useState({
    selectedBtn: 'designAll',
  });
  const { designProjects, setFilteredProjects } = useContext(SiteContext);

  const designTags = designProjects && designProjects.map((project) => project.designStack);

  const allDesignTags = designProjects && [].concat(...designTags);

  const handleDesignClick = (e) => {
    const selectedTag = e.target.innerText;
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });

    const projectFiltered = designProjects.filter((project) => {
      return project.designStack.includes(selectedTag);
    });
    setFilteredProjects(projectFiltered);
  };

  const handleAllButtonClick = (e) => {
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });
    setFilteredProjects(designProjects);
  };

  return (
    <>
      <button onClick={(e) => handleAllButtonClick(e)} className={`text-base font-light hover:underline  ${selected.selectedBtn === 'designAll' ? 'underline' : ''}`} id="designAll">
        Todos
      </button>
      {designProjects &&
        allDesignTags?.map((designTag, index) => {
          return (
            <button key={index} id={index} onClick={(e) => handleDesignClick(e)} className={`active:underline text-base font-light hover:underline ${selected.selectedBtn === index.toString() ? 'underline' : ''} `}>
              {designTag}
            </button>
          );
        })}
    </>
  );
};

export default DesignTags;
