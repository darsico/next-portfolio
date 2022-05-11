import { useState } from "react";
import Section from "../Section";
import ChildFilter from "./ChildFilter";

const Filter = ({ projects, setFilteredProjects }) => {
  const [toggle, setToggle] = useState(1);

  const toggleItem = (index) => {
    setToggle(index);
  };
  const toggleStyle = (index) => `${toggle === index ? "opacity-100" : "opacity-40"} font-bold`;

  const category = projects.map((project) => project.node.categories.edges[0].node.name);

  const webDevProjects = projects.filter((item) => {
    const { categories } = item.node;
    const category = categories.edges[0].node.name;
    if (category === "Desarrollo Web" || category === "Web Development") return item.node;
  });

  const designProjects = projects.filter((item) => {
    const { categories } = item.node;
    const category = categories.edges[0].node.name;
    if (category === "Diseño" || category === "Design") return item.node;
  });

  const showAllWebDevProjects = () => {
    setFilteredProjects(webDevProjects);
  };
  const showAllDesignProjects = () => {
    setFilteredProjects(designProjects);
  };

  const handleWebDevClick = () => {
    toggleItem(1);
    showAllWebDevProjects();
  };
  const handleDesignClick = () => {
    toggleItem(2);
    showAllDesignProjects();
  };

  return (
    <Section className="flex flex-col md:pb-10 md:pt-0">
      <div className="flex gap-3 text-xl">
        <button onClick={handleWebDevClick} className={toggleStyle(1)}>
          Desarrollo Web
        </button>
        <button onClick={handleDesignClick} className={toggleStyle(2)}>
          Diseño
        </button>
      </div>

      <ChildFilter
        projects={projects}
        setFilteredProjects={setFilteredProjects}
        toggle={toggle}
        designProjects={designProjects}
        webDevProjects={webDevProjects}
      />
    </Section>
  );
};

export default Filter;
