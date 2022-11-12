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

  const toggleStyle = (index) => `${toggle === index ? 'opacity-100' : 'opacity-40'} font-bold text-start  self-start inline-block max-w-fit md:w-auto hover:cursor-pointer`;

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
    <section className="flex flex-col mx-auto w-[90%] md:max-w-5xl py-8 md:pb-0 md:pt-20 " id="projects" >
      <div className="grid md:flex row-span-3 grid-cols-3 justify-start items-start gap-3 md:gap-8 text-lg md:text-2xl leading-5 break-words  ">
        <p onClick={handleAllClick} className={toggleStyle(1)}>Todos los proyectos</p>
        <p onClick={handleWebDevClick} className={toggleStyle(2)}>Desarrollo Web</p>
        <p onClick={handleDesignClick} className={toggleStyle(3)}>Diseño</p>
      </div>
      <ChildFilter toggle={toggle} />
    </section >
  );
};

export default Filter;
