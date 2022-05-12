import { useContext, useState } from "react";
import DesignProjectsContext from "../../context/DesignProjectsContext";
import WebDevProjectsContext from "../../context/WebDevProjectContext";
import Section from "../Section";
import ChildFilter from "./ChildFilter";

const Filter = ({ setFilteredProjects }) => {
  const [toggle, setToggle] = useState(1);
  const designContext = useContext(DesignProjectsContext);
  const webDevContext = useContext(WebDevProjectsContext);

  const showAllWebDevProjects = () => {
    setFilteredProjects(webDevContext.projects);
  };
  const showAllDesignProjects = () => {
    setFilteredProjects(designContext.projects);
  };

  const toggleItem = (index) => {
    setToggle(index);
  };

  const toggleStyle = (index) => `${toggle === index ? "opacity-100" : "opacity-40"} font-bold`;

  const handleWebDevClick = () => {
    toggleItem(1);
    showAllWebDevProjects();
  };
  const handleDesignClick = () => {
    toggleItem(2);
    showAllDesignProjects();
  };

  return (
    <Section className="flex flex-col md:pb-10 md:pt-0" id="projects">
      <div className="flex gap-3 text-xl">
        <button onClick={handleWebDevClick} className={toggleStyle(1)}>
          Desarrollo Web
        </button>
        <button onClick={handleDesignClick} className={toggleStyle(2)}>
          Diseño
        </button>
      </div>

      <ChildFilter setFilteredProjects={setFilteredProjects} toggle={toggle} />
    </Section>
  );
};

export default Filter;
