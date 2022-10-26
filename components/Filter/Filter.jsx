import { useContext, useState } from 'react';

import { SiteContext } from '../../context/SiteContext';

import Section from '../Section';
import ChildFilter from './ChildFilter';

const Filter = ({ }) => {
  const [toggle, setToggle] = useState(1);

  const { webDevProjects, setFilteredProjects, projects, designProjects } = useContext(SiteContext);

  const toggleItem = (index) => {
    setToggle(index);
  };

  const toggleStyle = (index) => `${toggle === index ? 'opacity-100' : 'opacity-40'} font-bold`;

  const handleWebDevClick = () => {
    toggleItem(2);
    setFilteredProjects(webDevProjects);
  };
  const handleDesignClick = () => {
    toggleItem(3);
    setFilteredProjects(designProjects);
  };
  const handleAllClick = () => {
    toggleItem(1);
    setFilteredProjects(projects);
  };

  return (
    <Section className="flex flex-col md:pb-10 md:pt-0" id="projects">
      <div className="flex gap-5 md:gap-8 text-lg md:text-2xl ">
        <button onClick={handleAllClick} className={toggleStyle(1)}>
          Todos los proyectos
        </button>
        <button onClick={handleWebDevClick} className={toggleStyle(2)}>
          Desarrollo Web
        </button>
        <button onClick={handleDesignClick} className={toggleStyle(3)}>
          Diseño
        </button>
      </div>

      <ChildFilter toggle={toggle} />
    </Section>
  );
};

export default Filter;
